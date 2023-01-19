import { BigNumber } from 'bignumber.js';
import {
  CreditLineStatus,
  PooledCreditLineState,
  PooledCreditLineExternalData,
  LenderPoolState,
  LenderPoolExternalData,
  LenderPerPool,
  Balance,
} from '../types/Types';
import { EmulatorHelper } from './Helpers';

import { LenderPoolEmulator } from './LenderPool';

const SCALING_FACTOR = new BigNumber(10).pow(18);
const YEAR_IN_SECONDS = new BigNumber(86400).multipliedBy(365);
const UINT256_MAX = new BigNumber('2').pow(256).minus(1);

export class PooledCreditLineEmulator extends EmulatorHelper {
  private pooledCreditLineState: PooledCreditLineState;
  private externalData: PooledCreditLineExternalData;
  private lenderPoolState: LenderPoolState;
  private lenderPoolExternalData: LenderPoolExternalData;
  private lendersPerPool: LenderPerPool[];

  constructor(
    pooledCreditLineState: PooledCreditLineState,
    externalData: PooledCreditLineExternalData,
    lenderPoolState: LenderPoolState,
    lendersPerPool: LenderPerPool[]
  ) {
    super();
    this.pooledCreditLineState = pooledCreditLineState;
    this.externalData = externalData;
    this.lenderPoolState = lenderPoolState;
    this.lenderPoolExternalData = externalData;
    this.lendersPerPool = lendersPerPool;
  }

  public getId(): string {
    return this.pooledCreditLineState.id;
  }

  public getLenderPoolEmulator(): LenderPoolEmulator {
    return new LenderPoolEmulator(
      this.lenderPoolState,
      this.lenderPoolExternalData,
      {
        principal: this.pooledCreditLineState.principal,
        status: this.getStatusAndUpdate(),
        endsAt: this.pooledCreditLineState.endsAt,
        startTime: this.pooledCreditLineState.startsAt,
      },
      this.lendersPerPool
    );
  }

  public withdrawableCollateral(): BigNumber {
    const _status = this.getStatusAndUpdate();

    if ([CreditLineStatus.EXPIRED, CreditLineStatus.CANCELLED, CreditLineStatus.REQUESTED].includes(_status)) {
      return new BigNumber(0);
    }

    const _totalCollateralTokens = this.calculateTotalCollateralTokens();

    if ([CreditLineStatus.LIQUIDATED, CreditLineStatus.CLOSED].includes(_status)) {
      return _totalCollateralTokens;
    }

    const _currentDebt = this.calculateCurrentDebt();
    const _collateralRatio = this.pooledCreditLineState.idealCollateralRatio;

    const _collateralNeeded = _currentDebt
      .multipliedBy(_collateralRatio)
      .div(this.externalData.ratioOfPrices)
      .multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals))
      .div(SCALING_FACTOR);

    if (_collateralNeeded.gte(_totalCollateralTokens)) {
      return new BigNumber(0);
    }

    return _totalCollateralTokens.minus(_collateralNeeded);
  }

  public calculateInterestAccrued(): BigNumber {
    const _lastPrincipalUpdateTime = this.pooledCreditLineState.lastPrincipalUpdateTime;
    const _principal = this.pooledCreditLineState.principal;

    if (_lastPrincipalUpdateTime.eq(0) && _principal.eq(0)) {
      return new BigNumber(0);
    }

    const _timeElapsed = this.now().minus(_lastPrincipalUpdateTime);
    const _endTime = this.pooledCreditLineState.endsAt;
    const _penaltyRate = this.pooledCreditLineState.gracePenaltyRate;
    const _borrowRate = this.pooledCreditLineState.borrowRate;

    let _penaltyInterest: BigNumber = new BigNumber(0);
    if (_lastPrincipalUpdateTime.lte(_endTime) && this.now().gt(_endTime)) {
      _penaltyInterest = this.calculateInterest(_principal, _penaltyRate, this.now().minus(_endTime));
    } else {
      _penaltyInterest = this.calculateInterest(_principal, _penaltyRate, this.now().minus(_lastPrincipalUpdateTime));
    }

    let _interestAccrued = this.calculateInterest(_principal, _borrowRate, _timeElapsed);
    _interestAccrued = _interestAccrued.plus(_penaltyInterest);
    return _interestAccrued.plus(this.pooledCreditLineState.interestAccruedTillLastPrincipalUpdate);
  }

  public calculateCurrentDebt(): BigNumber {
    const _interestAccrued = this.calculateInterestAccrued();
    // console.log("_interestAccrued", _interestAccrued.toFixed());
    // console.log("this.pooledCreditLineState.principal", this.pooledCreditLineState.principal.toFixed());
    // console.log("this.pooledCreditLineState.totalInterestRepaid", this.pooledCreditLineState.totalInterestRepaid.toFixed());
    return this.pooledCreditLineState.principal.plus(_interestAccrued).minus(this.pooledCreditLineState.totalInterestRepaid);
  }

  public calculateTotalCollateralTokens(): BigNumber {
    return this.externalData.collateralPerStrategyToken.multipliedBy(this.pooledCreditLineState.depositedCollateralInShares);
  }

  private calculateInterest(principal: BigNumber, borrowRate: BigNumber, timeElapsed: BigNumber): BigNumber {
    return principal.multipliedBy(borrowRate).multipliedBy(timeElapsed).div(SCALING_FACTOR).div(YEAR_IN_SECONDS);
  }

  public getRequiredCollateral(_borrowTokennAmount: BigNumber): BigNumber {
    const _collateral = this._equivalentCollateral(_borrowTokennAmount);
    return _collateral.multipliedBy(this.pooledCreditLineState.idealCollateralRatio).div(SCALING_FACTOR);
  }

  private _equivalentCollateral(_borrowTokennAmount: BigNumber): BigNumber {
    return _borrowTokennAmount
      .multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals))
      .div(this.externalData.ratioOfPrices);
  }

  public collateralTokensToLiquidate(_borrowTokensToLiquidate: BigNumber): BigNumber {
    return this._equivalentCollateral(_borrowTokensToLiquidate);
  }

  public calculateBorrowableAmount(): BigNumber {
    const _status = this.getStatusAndUpdate();
    if (_status != CreditLineStatus.ACTIVE) return new BigNumber(0);

    const _totalCollateralTokens = this.calculateTotalCollateralTokens();
    const _currentDebt = this.calculateCurrentDebt();
    const _collateralRatio = this.pooledCreditLineState.idealCollateralRatio;
    let _maxPossible = UINT256_MAX;

    if (_collateralRatio.gt(0)) {
      _maxPossible = _totalCollateralTokens
        .multipliedBy(this.externalData.ratioOfPrices)
        .div(_collateralRatio)
        .multipliedBy(SCALING_FACTOR)
        .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
    }

    const _borrowLimit = this.pooledCreditLineState.borrowLimit;
    const _principal = this.pooledCreditLineState.principal;

    if (_maxPossible.lte(_currentDebt)) return new BigNumber(0);

    return this.min(_borrowLimit.minus(_principal), _maxPossible.minus(_currentDebt));
  }

  public calculateCurrentCollateralRatio(): BigNumber {
    const _currentDebt = this.calculateCurrentDebt();
    let _currentCollateralRatio = UINT256_MAX;
    if (_currentDebt.gt(0)) {
      _currentCollateralRatio = this.calculateTotalCollateralTokens()
        .multipliedBy(this.externalData.ratioOfPrices)
        .div(_currentDebt)
        .multipliedBy(SCALING_FACTOR)
        .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
    }

    return _currentCollateralRatio;
  }

  public getStatusAndUpdate(): CreditLineStatus {
    let currentStatus = this.pooledCreditLineState.pooledCreditLineStatus;
    if (currentStatus == CreditLineStatus.ACTIVE && this.pooledCreditLineState.endsAt.lte(this.now())) {
      if (this.pooledCreditLineState.principal.gt(0)) {
        currentStatus = CreditLineStatus.EXPIRED;
      } else {
        currentStatus = CreditLineStatus.CLOSED;
      }
      this.pooledCreditLineState.pooledCreditLineStatus = currentStatus;
    }
    return currentStatus;
  }

  // ----------- additional calls not part of smart contract ----------//

  public getStatus(): CreditLineStatus {
    const currentStatus = this.pooledCreditLineState.pooledCreditLineStatus;
    const _idealCollateralRatio = this.pooledCreditLineState.idealCollateralRatio;

    if (currentStatus == CreditLineStatus.ACTIVE) {
      if (this.pooledCreditLineState.endsAt.lte(this.now())) {
        // normal loan duration has ended
        if (this.pooledCreditLineState.principal.gt(0)) {
          // PCL principal is non-zero, so goes to expired state
          if (this.pooledCreditLineState.defaultsAt.lte(this.now())) {
            // PCL has crossed grace period, can liquidate
            return CreditLineStatus.DEFAULT_LIQUIDATE_CALLABLE;
          } else return CreditLineStatus.EXPIRED; // PCL is in grace period and collat. ratio is OK
        } else {
          // PCL principal is zero, so can be closed
          return CreditLineStatus.CLOSE_CALLABLE;
        }
      }
      if (_idealCollateralRatio.gt(0)) {
        // PCL has non-zero collat. requirement
        const currentCollateralRatio = this.calculateCurrentCollateralRatio();
        if (currentCollateralRatio.lt(_idealCollateralRatio)) {
          // active PCL and collat ratio is below threshold
          return CreditLineStatus.LIQUIDATE_CALLABLE;
        }
      }
    } else if (currentStatus == CreditLineStatus.EXPIRED) {
      if (this.pooledCreditLineState.principal.eq(0)) {
        // loan has been repaid, can be closed
        return CreditLineStatus.CLOSE_CALLABLE;
      } else if (this.pooledCreditLineState.defaultsAt.lte(this.now())) {
        // principal not zero, & grace period is over
        return CreditLineStatus.DEFAULT_LIQUIDATE_CALLABLE;
      } else if (_idealCollateralRatio.gt(0)) {
        const currentCollateralRatio = this.calculateCurrentCollateralRatio();
        if (currentCollateralRatio.lt(_idealCollateralRatio)) {
          // collat. ratio is not OK
          return CreditLineStatus.LIQUIDATE_CALLABLE;
        }
      }
    } else if (currentStatus == CreditLineStatus.REQUESTED) {
      if (this.pooledCreditLineState.startsAt.lte(this.now())) {
        if (this.pooledCreditLineState.endsAt.lte(this.now())) {
          // loan not started and beyond loan end time
          return CreditLineStatus.INTERMEDIATE_CANCELLED;
        } else if (this.pooledCreditLineState.minBorrowAmount.lte(this.totalAmountLent())) {
          // before loan end time & min amount has been met
          return CreditLineStatus.START_CALLABLE;
        } else if (this.pooledCreditLineState.minBorrowAmount.gt(this.totalAmountLent())) {
          // before loan end time & min amount has not been met
          return CreditLineStatus.INTERMEDIATE_CANCELLED;
        }
      }
    }
    return currentStatus;
  }

  public getPrincipal(): BigNumber {
    return this.pooledCreditLineState.principal;
  }

  public getBorrowLimit(): BigNumber {
    return this.pooledCreditLineState.borrowLimit;
  }

  public totalAmountLent(): BigNumber {
    return this.lendersPerPool.reduce((total, current) => total.plus(current.amountLent), new BigNumber(0));
  }

  public totalSupply(): BigNumber {
    return this.lendersPerPool.reduce((total, current) => total.plus(current.lenderBalance), new BigNumber(0));
  }

  public borrowerAddress(): string {
    return this.pooledCreditLineState.borrowerAddress;
  }

  public borrowRate(): BigNumber {
    return this.pooledCreditLineState.borrowRate;
  }

  public idealCollateralratio(): BigNumber {
    return this.pooledCreditLineState.idealCollateralRatio;
  }

  public borrowAsset(): string {
    return this.pooledCreditLineState.borrowAsset;
  }

  public collateralAsset(): string {
    return this.pooledCreditLineState.collateralAsset;
  }

  public createdAt(): BigNumber {
    return this.pooledCreditLineState.createdAt;
  }

  public startsAt(): BigNumber {
    return this.pooledCreditLineState.startsAt;
  }

  public endsAt(): BigNumber {
    return this.pooledCreditLineState.endsAt;
  }

  public defaultsAt(): BigNumber {
    return this.pooledCreditLineState.defaultsAt;
  }

  public lenderStrategy(): string {
    return this.pooledCreditLineState.lenderStrategy;
  }

  public collateralStrategy(): string {
    return this.pooledCreditLineState.collateralStrategy;
  }

  public gracePenaltyRate(): BigNumber {
    return this.pooledCreditLineState.gracePenaltyRate;
  }

  public totalInterestRepaid(): BigNumber {
    return this.pooledCreditLineState.totalInterestRepaid;
  }

  public lastPrincipalUpdateTime(): BigNumber {
    return this.pooledCreditLineState.lastPrincipalUpdateTime;
  }

  public interestAccruedTillLastPrincipalUpdate(): BigNumber {
    return this.pooledCreditLineState.interestAccruedTillLastPrincipalUpdate;
  }

  public totalLentAmount(): BigNumber {
    return this.pooledCreditLineState.totalLentAmount;
  }

  public minBorrowAmount(): BigNumber {
    return this.pooledCreditLineState.minBorrowAmount;
  }

  public depositedCollateralInShares(): BigNumber {
    return this.pooledCreditLineState.depositedCollateralInShares;
  }

  public borrowerVerifier(): string {
    return this.pooledCreditLineState.borrowerVerifier;
  }

  public lenderVerifier(): string {
    return this.pooledCreditLineState.lenderVerifier;
  }

  public ratioOfCollateralTokensVsBorrowTokensPrice(): Balance {
    return {
      value: this.externalData.ratioOfPrices.toString(),
      decimals: this.externalData.ratioOfPricesDecimals,
    };
  }
}
