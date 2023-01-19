import { BigNumber } from 'bignumber.js';
import {
  CreditLineStatus,
  LenderPoolState,
  DataFromPooledCreditLines,
  LenderPoolExternalData,
  LenderPerPool,
  LenderPerPoolPrincipalWithdrawable,
} from '../types/Types';
import { EmulatorHelper } from './Helpers';

const zero = new BigNumber(0);
export class LenderPoolEmulator extends EmulatorHelper {
  private lenderPoolState: LenderPoolState;
  private lenderPoolExternalData: LenderPoolExternalData;
  private dataFromPooledCreditLines: DataFromPooledCreditLines;

  private lenderData: Record<string, BigNumber> = {};
  private borrowerInterestData: Record<string, BigNumber> = {};
  private yieldInterestData: Record<string, BigNumber> = {};

  private lenderPerPool: LenderPerPool[];

  private totalSupply: BigNumber;

  constructor(
    lenderPoolState: LenderPoolState,
    lenderPoolExternalData: LenderPoolExternalData,
    dataFromPooledCreditLines: DataFromPooledCreditLines,
    lendersPerPool: LenderPerPool[]
  ) {
    super();
    this.lenderPoolState = lenderPoolState;
    this.lenderPoolExternalData = lenderPoolExternalData;
    this.dataFromPooledCreditLines = dataFromPooledCreditLines;
    this.lenderPerPool = lendersPerPool;
    this.totalSupply = new BigNumber(0);

    for (let index = 0; index < lendersPerPool.length; index++) {
      const element = lendersPerPool[index];
      this.lenderData[element.lenderAddress] = element.lenderBalance;
      this.borrowerInterestData[element.lenderAddress] = element.borrowerInterestSharesWithdrawn;
      this.yieldInterestData[element.lenderAddress] = element.yieldInterestWithdrawnShares;
      this.totalSupply = this.totalSupply.plus(element.lenderBalance);
    }
  }

  public getLenderBalance(lenderAddress: string): BigNumber {
    if (this.lenderData[lenderAddress]) {
      return this.lenderData[lenderAddress];
    } else {
      return new BigNumber(0);
    }
  }

  public getLenderInterest(lenderAddress: string): BigNumber {
    const lenderBalance = this.getLenderBalance(lenderAddress);
    const borrowerInterestSharesWithdrawnByLender = this.borrowerInterestSharesWithdrawnByLender(lenderAddress);
    const yieldInterestSharesWithdrawnByLender = this.yieldInterestSharesWithdrawnByLender(lenderAddress);

    const [_borrowerInterestShares, _yieldInterestShares] = this._calculateLenderInterest(
      lenderBalance,
      this.lenderPoolState.borrowLimit,
      borrowerInterestSharesWithdrawnByLender,
      yieldInterestSharesWithdrawnByLender
    );
    return _borrowerInterestShares.plus(_yieldInterestShares).multipliedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
  }

  public calculatePrincipalWithdrawable(lenderAddress: string): BigNumber {
    const _status = this.dataFromPooledCreditLines.status;
    const lenderBalance: BigNumber = this.getLenderBalance(lenderAddress); // for next use
    if (_status == CreditLineStatus.CLOSED || _status == CreditLineStatus.LIQUIDATED) {
      return this._calculatePrincipalWithdrawable(lenderBalance);
    } else if (
      _status == CreditLineStatus.CANCELLED ||
      (_status == CreditLineStatus.REQUESTED &&
        ((this.now().gte(this.lenderPoolState.startTime) && this.totalSupply.lt(this.lenderPoolState.minBorrowAmount)) ||
          this.now().gte(this.dataFromPooledCreditLines.endsAt)))
    ) {
      return lenderBalance;
    } else {
      return new BigNumber(0);
    }
  }

  private _calculateLenderInterest(
    _lenderBalance: BigNumber,
    _borrowLimit: BigNumber,
    borrowerInterestSharesWithdrawnByLender: BigNumber,
    yieldInterestSharesWithdrawnByLender: BigNumber
  ): [BigNumber, BigNumber] {
    let _totalinterestInShares = new BigNumber(0);
    const _sharesHeld = this.lenderPoolState.sharesHeld;
    if (_sharesHeld.eq(0)) {
      return [new BigNumber(0), new BigNumber(0)];
    }

    const _notBorrowed = _borrowLimit.minus(this.dataFromPooledCreditLines.principal);
    const _notBorrowedInShares = _notBorrowed.dividedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
    _totalinterestInShares = _sharesHeld.minus(_notBorrowedInShares);

    const _borrowerInterestShares = this.lenderPoolState.borrowerInterestShares;

    const _borrowerInterestForLender = _borrowerInterestShares
      .multipliedBy(_lenderBalance)
      .div(_borrowLimit)
      .minus(borrowerInterestSharesWithdrawnByLender);

    const _borrowerInterestSharesAfterWithdrawl = _borrowerInterestShares.minus(this.lenderPoolState.borrowerInterestSharesWithdrawn);

    const _totalYieldInterest = _totalinterestInShares
      .minus(_borrowerInterestSharesAfterWithdrawl)
      .plus(this.lenderPoolState.yieldInterestWithdrawnShares);
    const _yieldInterestForLender = _totalYieldInterest
      .multipliedBy(_lenderBalance)
      .div(_borrowLimit)
      .minus(yieldInterestSharesWithdrawnByLender);

    return [_borrowerInterestForLender, _yieldInterestForLender];
  }

  private _calculatePrincipalWithdrawable(lenderBalance: BigNumber): BigNumber {
    const _borrowTokens = this.lenderPoolState.borrowLimit;
    const _totalLiquidityWithdrawable = _borrowTokens.minus(this.dataFromPooledCreditLines.principal);
    const _principalWithdrawble = _totalLiquidityWithdrawable.multipliedBy(lenderBalance).div(_borrowTokens);
    return _principalWithdrawble;
  }

  // -------------------------------- Function not part of contract --------------------------------//

  public totalInterestWithdrawnByLender(lenderAddress: string): BigNumber {
    const borrowerInterestSharesWithdrawnByLender = this.borrowerInterestSharesWithdrawnByLender(lenderAddress);
    const yieldInterestSharesWithdrawnByLender = this.yieldInterestSharesWithdrawnByLender(lenderAddress);

    return borrowerInterestSharesWithdrawnByLender
      .plus(yieldInterestSharesWithdrawnByLender)
      .multipliedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
  }

  public borrowerInterestSharesWithdrawnByLender(lenderAddress: string): BigNumber {
    if (this.borrowerInterestData[lenderAddress]) {
      return this.borrowerInterestData[lenderAddress];
    } else {
      return new BigNumber(0);
    }
  }

  public yieldInterestSharesWithdrawnByLender(lenderAddress: string): BigNumber {
    if (this.yieldInterestData[lenderAddress]) {
      return this.yieldInterestData[lenderAddress];
    } else {
      return new BigNumber(0);
    }
  }

  public getAllLenders(): LenderPerPool[] {
    return this.lenderPerPool;
  }

  public getPrincipalWithdrawableForAllLenders(): LenderPerPoolPrincipalWithdrawable[] {
    return this.lenderPerPool.map((a) => {
      return { lenderAddress: a.lenderAddress, principalWithdrawable: this.calculatePrincipalWithdrawable(a.lenderAddress) };
    });
  }

  // ------ calls not part of contract  ------------ //

  public getLenderData(lenderAddress: string): LenderPerPool {
    const lenderData = this.getAllLenders().filter((a) => a.lenderAddress.toLowerCase() === lenderAddress.toLowerCase());
    if (lenderData.length == 0) {
      return {
        lenderAddress: lenderAddress,
        amountLent: zero,
        lenderBalance: zero,
        borrowerInterestSharesWithdrawn: zero,
        yieldInterestWithdrawnShares: zero,
        amountWithdrawn: zero,
        sharesWithdrawn: zero,
        interestWithdrawn: zero,
      };
    } else {
      return lenderData[0];
    }
  }

  public totalPrincipalSuppliedByLender(lenderAddress: string): BigNumber {
    return this.getLenderData(lenderAddress).amountLent;
  }

  public withdrawableLiquidity(lenderAddress: string): BigNumber {
    return this.calculateWithdrawableLiquidity(lenderAddress, false);
  }

  public withdrawableLiquidatedCollateral(lenderAddress?: string): BigNumber {
    return this.calculateWithdrawableLiquidity(lenderAddress, true);
  }

  private calculateWithdrawableLiquidity(lenderAddress: string, _isLiquidationWithdrawn: boolean): BigNumber {
    const _liquidityProvided = this.getLenderBalance(lenderAddress);
    if (_liquidityProvided.eq(0)) {
      return zero;
    }

    let _status = this.dataFromPooledCreditLines.status;

    // const _borrowAsset = pooledCLConstants[_id].borrowAsset;

    if (_status == CreditLineStatus.REQUESTED) {
      if (this.now().gt(this.dataFromPooledCreditLines.startTime) && this.totalSupply.lt(this.lenderPoolState.minBorrowAmount)) {
      } else if (this.now().gte(this.dataFromPooledCreditLines.endsAt)) {
      } else {
        return zero;
      }
      _status = CreditLineStatus.CANCELLED;
      //     delete pooledCLConstants[_id].startTime;
    }

    if (_status == CreditLineStatus.CANCELLED) {
      return _liquidityProvided;
    } else if (_status == CreditLineStatus.CLOSED || _status == CreditLineStatus.LIQUIDATED) {
      if (_status == CreditLineStatus.LIQUIDATED) {
        if (_isLiquidationWithdrawn) {
          return zero;
        }
      }
      // all other cases distribute the sharesHeld proportional to their poolToken balances
      // address _strategy = pooledCLConstants[_id].borrowAssetStrategy;
      const _principalWithdrawable = this.calculatePrincipalWithdrawable(lenderAddress);
      const _interestSharesWithdrawable = this._updateInterestSharesToWithdraw(lenderAddress);
      const _interestWithdrawable = _interestSharesWithdrawable.multipliedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
      const _amountToWithdraw = _principalWithdrawable.plus(_interestWithdrawable);
      const _sharesToWithdraw = _amountToWithdraw.dividedBy(this.lenderPoolExternalData.collateralPerStrategyToken);
      return _sharesToWithdraw;
    } else {
      return zero;
    }
  }

  private _updateInterestSharesToWithdraw(lenderAddress: string): BigNumber {
    const _lenderBalance = this.getLenderBalance(lenderAddress);
    if (_lenderBalance.eq(0)) {
      return zero;
    }

    const borrowerInterestSharesWithdrawnByLender = this.borrowerInterestSharesWithdrawnByLender(lenderAddress);
    const yieldInterestSharesWithdrawnByLender = this.yieldInterestSharesWithdrawnByLender(lenderAddress);

    const [_borrowerInterestForLender, _yieldInterestForLender] = this._calculateLenderInterest(
      _lenderBalance,
      this.lenderPoolState.borrowLimit,
      borrowerInterestSharesWithdrawnByLender,
      yieldInterestSharesWithdrawnByLender
    );

    return _yieldInterestForLender.plus(_borrowerInterestForLender);
  }
}
