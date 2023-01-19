import { BigNumber } from 'bignumber.js';
import { CreditLineStatus, CreditLineState, CreditLineExternalData, CreditLineGlobals } from '../types/Types';
import { EmulatorHelper } from './Helpers';

const SCALING_FACTOR = new BigNumber(10).pow(18);
const YEAR_IN_SECONDS = new BigNumber(86400).multipliedBy(365);
const UINT256_MAX = new BigNumber('2').pow(256).minus(1);

export class CreditLineEmulator extends EmulatorHelper {
  creditLineState: CreditLineState;
  externalData: CreditLineExternalData;
  globals: CreditLineGlobals;

  constructor(creditLineState: CreditLineState, externalData: CreditLineExternalData, globals: CreditLineGlobals) {
    super();
    this.creditLineState = creditLineState;
    this.externalData = externalData;
    this.globals = globals;
  }

  public getId(): string {
    return this.creditLineState.id;
  }

  public withdrawableCollateral(): BigNumber {
    const totalCollateralTokens = this._calculateTotalCollateralTokens();
    const _currentDebt = this.calculateCurrentDebt();
    const _collateralNeeded = _currentDebt
      .multipliedBy(this.creditLineState.idealCollateralRatio)
      .multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals))
      .dividedBy(this.externalData.ratioOfPrices)
      .dividedBy(SCALING_FACTOR);
    if (_collateralNeeded.gt(totalCollateralTokens)) {
      return new BigNumber(0);
    }

    return totalCollateralTokens.minus(_collateralNeeded);
  }

  public calculateTotalCollateralTokens(): BigNumber {
    return this._calculateTotalCollateralTokens();
  }

  private _calculateTotalCollateralTokens(): BigNumber {
    return this.externalData.collateralPerStrategyToken.multipliedBy(this.creditLineState.collateralShareInStrategy);
  }

  public calculateCurrentDebt(): BigNumber {
    const _interestAccrued = this.calculateInterestAccrued();
    return this.creditLineState.principal.plus(_interestAccrued).minus(this.creditLineState.totalInterestRepaid);
  }

  public calculateInterestAccrued(): BigNumber {
    if (this.creditLineState.principal.eq(0) && this.creditLineState.lastPrincipalUpdateTime.eq(0)) {
      return new BigNumber(0);
    }
    const _timeElapsed = this.now().minus(this.creditLineState.lastPrincipalUpdateTime);
    const _interestAccrued = this.calculateInterest(this.creditLineState.principal, this.creditLineState.borrowRate, _timeElapsed);

    return _interestAccrued.plus(this.creditLineState.interestAccruedTillLastPrincipalUpdate);
  }

  private calculateInterest(principal: BigNumber, borrowRate: BigNumber, timeElapsed: BigNumber): BigNumber {
    return principal.multipliedBy(borrowRate).multipliedBy(timeElapsed).div(SCALING_FACTOR).div(YEAR_IN_SECONDS);
  }

  public calculateBorrowableAmount(): BigNumber {
    if (this.creditLineState.creditLineStatus != CreditLineStatus.ACTIVE) {
      // throw new Error('CL:CBA1');
      return new BigNumber(0);
    }

    const _collateralRatio = this.creditLineState.idealCollateralRatio;
    let _maxPossible = UINT256_MAX;

    if (_collateralRatio.gt(0)) {
      const _totalCollateralToken = this._calculateTotalCollateralTokens();
      _maxPossible = _totalCollateralToken
        .multipliedBy(this.externalData.ratioOfPrices)
        .dividedBy(_collateralRatio)
        .multipliedBy(SCALING_FACTOR)
        .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
    }

    const _currentDebt = this.calculateCurrentDebt();
    const _borrowLimit = this.creditLineState.borrowLimit;
    const _principal = this.creditLineState.principal;

    if (_maxPossible.lt(_currentDebt)) {
      return new BigNumber(0);
    }

    return this.min(_borrowLimit.minus(_principal), _maxPossible.minus(_currentDebt));
  }

  public borrowTokensToLiquidate(): BigNumber {
    const _currentDebt = this.calculateCurrentDebt();
    let _collateralToLiquidate = this._equivalentCollateral(_currentDebt);
    const _totalCollateralTokens = this._calculateTotalCollateralTokens();

    if (_collateralToLiquidate.gt(_totalCollateralTokens)) {
      _collateralToLiquidate = _totalCollateralTokens;
    }

    return this._borrowTokensToLiquidate(_collateralToLiquidate);
  }

  private _borrowTokensToLiquidate(_collateralTokens: BigNumber): BigNumber {
    return _collateralTokens
      .multipliedBy(SCALING_FACTOR.minus(this.globals.liquidatorRewardFraction))
      .div(SCALING_FACTOR)
      .multipliedBy(this.externalData.ratioOfPrices)
      .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals));
  }

  private _equivalentCollateral(_borrowTokens: BigNumber): BigNumber {
    return _borrowTokens.multipliedBy(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals)).div(this.externalData.ratioOfPrices);
  }

  public calculateCurrentCollateralRatio(): [BigNumber, BigNumber] {
    const currentDebt = this.calculateCurrentDebt();
    const totalCollateralTokens = this.calculateTotalCollateralTokens();
    let currentCollateralRatio = UINT256_MAX;
    if (currentDebt.gt(0)) {
      currentCollateralRatio = totalCollateralTokens
        .multipliedBy(this.externalData.ratioOfPrices)
        .div(new BigNumber(10).pow(this.externalData.ratioOfPricesDecimals))
        .multipliedBy(SCALING_FACTOR)
        .div(currentDebt);
    }
    return [currentCollateralRatio, totalCollateralTokens];
  }

  public getPrincipal(): BigNumber {
    return this.creditLineState.principal;
  }

  public getCreditLimit(): BigNumber {
    return this.creditLineState.borrowLimit;
  }

  public getStatus(): CreditLineStatus {
    let _currentStatus = this.creditLineState.creditLineStatus;
    const [_currentCollateralRatio, _totalCollateralTokens] = this.calculateCurrentCollateralRatio();
    if (_currentCollateralRatio.lt(this.idealCollateralRatio())) {
      _currentStatus = CreditLineStatus.LIQUIDATE_CALLABLE;
    }
    return _currentStatus;
  }

  // ------------------- function not part of smart contract ------------------ //

  public createdAt(): BigNumber {
    return this.creditLineState.createdAt;
  }

  public borrowAsset(): string {
    return this.creditLineState.borrowAsset;
  }

  public collateralAsset(): string {
    return this.creditLineState.collateralAsset;
  }

  public borrowRate(): BigNumber {
    return this.creditLineState.borrowRate;
  }

  public idealCollateralRatio(): BigNumber {
    return this.creditLineState.idealCollateralRatio;
  }

  public autoLiquidate(): boolean {
    return this.creditLineState.autoLiquidation;
  }

  public lender(): string {
    return this.creditLineState.lender;
  }

  public borrower(): string {
    return this.creditLineState.borrower;
  }

  public lastPrincipalUpdateTime(): BigNumber {
    return this.creditLineState.lastPrincipalUpdateTime;
  }

  public requestByLender(): boolean {
    return this.creditLineState.requestByLender;
  }

  public borrowAssetStrategy(): string {
    return this.creditLineState.borrowAssetStrategy;
  }

  public collateralAssetStrategy(): string {
    return this.creditLineState.collateralAssetStrategy;
  }

  public totalInterestRepaid(): BigNumber {
    return this.creditLineState.totalInterestRepaid;
  }
}
