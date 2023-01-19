import { SublimeConfig } from '../types/sublimeConfig';

import { StrategyType, CreditLineStatus, VerifierType, LenderWithdrawableAmount } from '../types/Types';
import { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from 'bignumber.js';

import { TokenManager } from '../tokenManager';

import { Balance, Options as Overrides } from '../types/Types';

import { PooledCreditLine } from '../wrappers/PooledCreditLine';
import { PooledCreditLine__factory } from '../wrappers/factories/PooledCreditLine__factory';

import { LenderPool } from '../wrappers/LenderPool';
import { LenderPool__factory } from '../wrappers/factories/LenderPool__factory';

import { IYield__factory } from '../wrappers/factories/IYield__factory';
import { YieldAndStrategyApi } from './yieldAndStrategy';
import { VerificationAPI } from './verification';
import { ContractTransaction, Signer } from 'ethers';

/**
 * @class PooledCreditLines
 */
export class PooledCreditLineApi {
  /**
   * @description Instance of lender pool contract
   */
  private lenderPool: LenderPool;

  /**
   * @description Instance of pooled credit line contract
   */
  private pooledCreditLine: PooledCreditLine;

  /**
   * @description Instance to fetch and update token metadata
   */
  private tokenManager: TokenManager;
  private signer: Signer;
  private yieldApi: YieldAndStrategyApi;
  private verifiactionApi: VerificationAPI;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.tokenManager = tokenManager;
    this.signer = signer;

    this.lenderPool = new LenderPool__factory(this.signer).attach(config.lenderPoolAddress);
    this.pooledCreditLine = new PooledCreditLine__factory(this.signer).attach(config.pooledCreditLineAddress);
    this.yieldApi = new YieldAndStrategyApi(signer, config, tokenManager);
    this.verifiactionApi = new VerificationAPI(signer, config);
  }

  /**
   * @description Start a pooled credit line
   * @param _id
   * @param options
   * @returns
   */
  public async start(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.start(_id, { ...options });
  }

  /**
   * @description Function to lend token to credit lines
   * @param _id
   * @param _amount
   * @param options
   * @returns
   */
  public async lend(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.lenderPool.lend(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Calculate the principle withdrawable
   * @param _id
   * @param lender
   * @returns
   */
  public async calculatePrincipleWithdrawable(_id: string, lender?: string): Promise<Balance> {
    if (!lender) {
      lender = await this.signer.getAddress();
    }

    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const value: BigNumberish = await this.lenderPool.callStatic.calculatePrincipalWithdrawable(_id, lender);
    return { value: value.toString(), decimals };
  }

  /**
   * @description Withdraw Liquidity
   * @param _id
   * @param options
   * @returns
   */
  public async withdrawLiquidity(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.withdrawLiquidity(_id, { ...options });
  }

  public async withdrawLiquidatedCollateral(id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.withdrawLiquidatedCollateral(id, { ...options });
  }

  /**
   * @description Withdraw Interest
   * @param _id
   * @param options
   * @returns
   */
  public async withdrawInterest(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.withdrawInterest(_id, { ...options });
  }

  /**
   * @description Liquidate credit line
   * @param _id
   * @param withdraw
   * @param options
   * @returns
   */
  public async liquidate(_id: string, withdraw: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.lenderPool.liquidate(_id, withdraw, { ...options });
  }

  /**
   * @description to-do
   * @param lenderAddress
   * @returns
   */
  public async getLenderInterest(_id: string, lenderAddress: string): Promise<Balance> {
    const borrowToken = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(borrowToken);
    const value = await this.lenderPool.callStatic.getLenderInterest(_id, lenderAddress);
    return { value: value.toString(), decimals: this.tokenManager.getTokenDecimals(borrowToken) };
  }

  /**
   * @description get principle
   * @param _id
   * @returns Balance
   */
  public async getPrinciple(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.getPrincipal(_id);

    return { value: value.toString(), decimals };
  }

  public async _getCreditLineStatus(_id: string): Promise<CreditLineStatus> {
    //   NOT_CREATED = 'NOT_CREATED',
    // REQUESTED = 'REQUESTED',
    // ACTIVE = 'ACTIVE',
    // CLOSED = 'CLOSED',
    // EXPIRED = 'EXPIRED',
    // LIQUIDATED = 'LIQUIDATED',
    // CANCELLED = 'CANCELLED',
    // START_CALLABLE = 'START_CALLABLE',
    // LIQUIDATE_CALLABLE = 'LIQUIDATE_CALLABLE',
    const pooledCreditLineVariables = await this.pooledCreditLine.pooledCreditLineVariables(_id);
    const status = pooledCreditLineVariables.status;
    if (status == 0) {
      return CreditLineStatus.NOT_CREATED;
    } else if (status == 1) {
      const pooledCLConstants = await this.lenderPool.pooledCLConstants(_id);
      const amountLent = await this.lenderPool.totalSupply(_id);

      const pooledCLConstantsOfPCL = await this.pooledCreditLine.pooledCreditLineConstants(_id);
      const dateBigNumber = new BigNumber(new Date().valueOf()).div(1000);

      if (dateBigNumber.gte(pooledCLConstantsOfPCL.startsAt.toString()) && amountLent.gte(pooledCLConstants.minBorrowAmount.toString())) {
        return CreditLineStatus.START_CALLABLE;
      }

      if (dateBigNumber.gte(pooledCLConstantsOfPCL.startsAt.toString()) && amountLent.lt(pooledCLConstants.minBorrowAmount.toString())) {
        return CreditLineStatus.CANCELLED;
      }

      return CreditLineStatus.REQUESTED;
    } else if (status == 2) {
      const pooledCLConstants = await this.pooledCreditLine.pooledCreditLineConstants(_id);
      const colRatio = await this.pooledCreditLine.callStatic.calculateCurrentCollateralRatio(_id);
      if (pooledCLConstants.idealCollateralRatio.gt(colRatio)) {
        return CreditLineStatus.LIQUIDATE_CALLABLE;
      }

      const dateBigNumber = new BigNumber(new Date().valueOf()).div(1000);
      const pooledCLVariables = await this.pooledCreditLine.pooledCreditLineVariables(_id);

      if (
        dateBigNumber.gt(pooledCLConstants.endsAt.toString()) &&
        dateBigNumber.lt(pooledCLConstants.defaultsAt.toString()) &&
        pooledCLVariables.principal.gt(0)
      ) {
        return CreditLineStatus.EXPIRED;
      }

      return CreditLineStatus.ACTIVE;
    } else if (status == 3) {
      return CreditLineStatus.CLOSED;
    } else if (status == 4) {
      const pooledCLConstants = await this.pooledCreditLine.pooledCreditLineConstants(_id);
      const colRatio = await this.pooledCreditLine.callStatic.calculateCurrentCollateralRatio(_id);
      if (pooledCLConstants.idealCollateralRatio.gt(colRatio)) {
        return CreditLineStatus.LIQUIDATE_CALLABLE;
      }
      return CreditLineStatus.EXPIRED;
    } else if (status == 5) {
      return CreditLineStatus.LIQUIDATED;
    } else if (status == 6) {
      return CreditLineStatus.CANCELLED;
    } else if (status == 7) {
      return CreditLineStatus.START_CALLABLE;
    } else if (status == 8) {
      return CreditLineStatus.LIQUIDATE_CALLABLE;
    } else {
      throw new Error('Invalid State');
    }
  }
  /**
   * @description Credit line status
   * @param _id
   * @returns
   */
  public async getCreditLineStatus(_id: string): Promise<CreditLineStatus> {
    return this._getCreditLineStatus(_id);
  }

  /**
   * @description Calculate interest accured
   * @param _id
   * @returns
   */
  public async calculateInterestAccured(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.calculateInterestAccrued(_id);
    return { value: value.toString(), decimals };
  }

  /**
   * @description calculate current debt
   * @param _id
   * @returns
   */
  public async calculateCurrentDebt(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.calculateCurrentDebt(_id);
    return { value: value.toString(), decimals };
  }

  /**
   * @description calculate borrowable amount
   * @param _id
   * @returns
   */
  public async calculateBorrowableAmount(_id: string): Promise<Balance> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);
    const value = await this.pooledCreditLine.callStatic.calculateBorrowableAmount(_id);
    return { value: value.toString(), decimals };
  }

  /**
   *
   * @param colRatio
   * @param durationInSeconds
   * @param lenderVerifier
   * @param defaultGracePeriodInSeconds
   * @param gracePenaltyRate
   * @param collectionPeriod
   * @param minBorrowAmount
   * @param _borrowLimit
   * @param _borrowRate
   * @param collateralAsset
   * @param borrowAssetStrategy
   * @param collateralAssetStrategy
   * @param borrowAsset
   * @param borrowerVerifier
   * @param areTokensTransferable
   * @param options
   * @returns
   */
  public async request(
    colRatio: string,
    durationInSeconds: string,
    lenderVerifier: VerifierType,
    defaultGracePeriodInSeconds: string,
    gracePenaltyRate: string,
    collectionPeriod: string,
    minBorrowAmount: string,
    _borrowLimit: string,
    _borrowRate: string,
    collateralAsset: string,
    borrowAssetStrategy: StrategyType,
    collateralAssetStrategy: StrategyType,
    borrowAsset: string,
    borrowerVerifier: VerifierType,
    areTokensTransferable: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    await this.tokenManager.updateAll(borrowAsset);
    const borrowTokenDecimal = this.tokenManager.getTokenDecimals(borrowAsset);

    const collateralRatio = new BigNumber(colRatio);
    if (collateralRatio.isNaN() || collateralRatio.isNegative()) {
      throw new Error('collateralRatio should be a valid number');
    }

    const duration = new BigNumber(durationInSeconds);
    if (duration.isNaN() || duration.isZero() || duration.isNegative()) {
      throw new Error('duration should be a valid number');
    }

    const defaultGracePeriod = new BigNumber(defaultGracePeriodInSeconds);
    if (defaultGracePeriod.isNaN() || defaultGracePeriod.isZero() || defaultGracePeriod.isNegative()) {
      throw new Error('defaultGracePeriod should be a valid number');
    }

    const gpr = new BigNumber(gracePenaltyRate);
    if (gpr.isNaN() || gpr.isNegative()) {
      throw new Error('gracePenaltyRate should be a valid number');
    }

    const _collectionPeriod = new BigNumber(collectionPeriod);
    if (_collectionPeriod.isNaN() || _collectionPeriod.isZero() || _collectionPeriod.isNegative()) {
      throw new Error('_collectionPeriod should be a valid number');
    }

    const borrowLimit = new BigNumber(_borrowLimit);
    if (borrowLimit.isNaN() || borrowLimit.isZero() || borrowLimit.isNegative()) {
      throw new Error('borrowLimit should be a valid number');
    }

    const borrowRate = new BigNumber(_borrowRate);
    if (borrowRate.isNaN() || borrowRate.isNegative()) {
      throw new Error('borrowRate should be a valid number');
    }

    const _minBorrowAmount = new BigNumber(minBorrowAmount);
    if (_minBorrowAmount.isNaN() || _minBorrowAmount.isZero() || _minBorrowAmount.isNegative()) {
      throw new Error('_minBorrowAmount should be a valid number');
    }

    const lenderVerifierAddress: string = this.verifiactionApi.getVerifierAddress(lenderVerifier);
    const collateralStrategyAddress: string = this.yieldApi.getStrategyAddress(collateralAssetStrategy);
    const borrowerStrategyAddress: string = this.yieldApi.getStrategyAddress(borrowAssetStrategy);
    const borrowerVerifierAddress: string = this.verifiactionApi.getVerifierAddress(borrowerVerifier);

    return this.pooledCreditLine.request(
      {
        collateralRatio: collateralRatio.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        duration: duration.toFixed(0),
        lenderVerifier: lenderVerifierAddress,
        defaultGracePeriod: defaultGracePeriod.toFixed(0),
        gracePenaltyRate: gpr.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        collectionPeriod: _collectionPeriod.toFixed(0),
        minBorrowAmount: _minBorrowAmount.multipliedBy(new BigNumber(10).pow(borrowTokenDecimal)).toFixed(0),
        borrowLimit: borrowLimit.multipliedBy(new BigNumber(10).pow(borrowTokenDecimal)).toFixed(0),
        borrowRate: borrowRate.multipliedBy(new BigNumber(10).pow(16)).toFixed(0),
        collateralAsset,
        borrowAssetStrategy: borrowerStrategyAddress,
        collateralAssetStrategy: collateralStrategyAddress,
        borrowAsset,
        borrowerVerifier: borrowerVerifierAddress,
        areTokensTransferable,
      },
      { ...options }
    );
  }

  /**
   * @description Deposit Collateral
   * @param _id
   * @param _amount
   * @param _fromSavingsAccount
   * @param options
   * @returns
   */
  public async depositCollateral(
    _id: string,
    _amount: string,
    _fromSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.depositCollateral(
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      _fromSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Borrow
   * @param _id
   * @param _amount
   * @param options
   * @returns
   */
  public async borrow(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.borrow(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Repay
   * @param _id
   * @param _amount
   * @param options
   * @returns
   */
  public async repay(_id: string, _amount: string, options?: Overrides): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).borrowAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }
    return this.pooledCreditLine.repay(_id, amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  /**
   * @description Close credit lines
   * @param _id
   * @param options
   * @returns
   */
  public async close(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.close(_id, { ...options });
  }

  /**
   * @description Cancels the credit lines
   * @param _id ID of the pooled credit line
   * @param options
   * @returns
   */
  public async cancel(_id: string, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.cancelRequest(_id, { ...options });
  }

  /**
   * @description function withdraw partial collateral
   * @param _id
   * @param amount
   * @param toSavingsAccount
   * @param options
   */
  public async withdrawPartialCollateral(
    _id: string,
    _amount: string,
    toSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.lenderPool.pooledCLConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.pooledCreditLine['withdrawCollateral(uint256,uint256,bool)'](
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      toSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description calculate current collateral ratio
   * @param _id
   * @returns
   */
  public async calculateCurrentCollateralRatio(_id: string): Promise<Balance> {
    const value = await this.pooledCreditLine.callStatic.calculateCurrentCollateralRatio(_id);
    return { value: value.toString(), decimals: 18 };
  }

  /**
   * @description Calculate Total Collateral tokens
   * @param _id
   * @returns
   */
  public async calculateTokenCollateralTokens(_id: string): Promise<Balance> {
    const value = await this.pooledCreditLine.callStatic.calculateTotalCollateralTokens(_id);

    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);
    return { value: value.toString(), decimals: this.tokenManager.getTokenDecimals(token) };
  }

  /**
   * @description Withdraw Collateral
   * @param _id
   * @param _amount
   * @param toSavingsAccount
   * @param options
   * @returns
   */
  public async withdrawCollateral(
    _id: string,
    _amount: string,
    toSavingsAccount: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const token = await (await this.pooledCreditLine.pooledCreditLineConstants(_id)).collateralAsset;
    await this.tokenManager.updateAll(token);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(token);

    const amount = new BigNumber(_amount);
    if (amount.isNaN() || amount.isZero() || amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.pooledCreditLine['withdrawCollateral(uint256,uint256,bool)'](
      _id,
      amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      toSavingsAccount,
      { ...options }
    );
  }

  /**
   * @description Withdraw All Collateral
   * @param _id
   * @param toSavingsAccount
   * @param options
   * @returns
   */
  public async withdrawAllCollateral(_id: string, toSavingsAccount: boolean, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine['withdrawCollateral(uint256,bool)'](_id, toSavingsAccount, { ...options });
  }

  public async calculateLenderWithdrawableAmount(_id: string, lender?: string): Promise<LenderWithdrawableAmount> {
    if (!lender) {
      lender = await this.signer.getAddress();
    }
    const pclConstants = await this.pooledCreditLine.pooledCreditLineConstants(_id);
    const pclVariables = await this.pooledCreditLine.pooledCreditLineVariables(_id);
    const pclVariables2 = await this.lenderPool.pooledCLVariables(_id);
    const lenderInfo = await this.lenderPool.getLenderInfo(_id, lender);
    const lenderBalance = await this.lenderPool.balanceOf(lender, _id);
    await this.tokenManager.updateAll(pclConstants.borrowAsset);

    const decimals: BigNumberish = this.tokenManager.getTokenDecimals(pclConstants.borrowAsset);

    const principal = await this.lenderPool.callStatic.calculatePrincipalWithdrawable(_id, lender);
    const interest = await this.calculateLenderInterest(
      _id,
      pclConstants.borrowLimit,
      pclVariables.principal,
      pclConstants.borrowAssetStrategy,
      pclConstants.borrowAsset,
      pclVariables2.sharesHeld,
      pclVariables2.borrowerInterestShares,
      lenderBalance,
      lenderInfo.borrowerInterestSharesWithdrawn,
      pclVariables2.borrowerInterestSharesWithdrawn,
      lenderInfo.yieldInterestWithdrawnShares
    );

    return {
      principal: { value: principal.toString(), decimals: decimals },
      interest: { value: interest.toString(), decimals: decimals },
    };
  }

  private async calculateLenderInterest(
    _id: string,
    borrowLimit: BigNumberish,
    principal: BigNumberish,
    strategy: string,
    borrowAsset: string,
    sharesHeld: BigNumberish,
    borrowerInterestShares: BigNumberish,
    lenderBalance: BigNumberish,
    lendersBorrowerInterestSharesWithdrawn: BigNumberish,
    borrowerInterestSharesWithdrawn: BigNumberish,
    yieldInterestWithdrawnShares: BigNumberish
  ): Promise<BigNumber> {
    const amountNotBorrowed = new BigNumber(borrowLimit.toString()).minus(principal.toString());
    const yieldContract = IYield__factory.connect(strategy, this.signer);

    const notBorrowedInShares = await yieldContract.callStatic.getSharesForTokens(amountNotBorrowed.toFixed(0), borrowAsset);
    const totalInterestInShares = new BigNumber(sharesHeld.toString()).minus(notBorrowedInShares.toString());

    if (new BigNumber(sharesHeld.toString()).eq(0)) {
      return new BigNumber(0);
    }
    const borrowerInterestForLender = new BigNumber(borrowerInterestShares.toString())
      .multipliedBy(lenderBalance.toString())
      .div(borrowLimit.toString())
      .minus(lendersBorrowerInterestSharesWithdrawn.toString());

    const borrowerInterestSharesAfterWithdrawal = new BigNumber(borrowerInterestShares.toString()).minus(
      borrowerInterestSharesWithdrawn.toString()
    );

    const totalYieldInterest = totalInterestInShares
      .minus(borrowerInterestSharesAfterWithdrawal)
      .plus(yieldInterestWithdrawnShares.toString());

    const yieldInterestForLender = totalYieldInterest
      .multipliedBy(lenderBalance.toString())
      .dividedBy(borrowLimit.toString())
      .minus(yieldInterestWithdrawnShares.toString());

    return yieldInterestForLender.plus(borrowerInterestForLender);
  }

  public async updateBorrowLimitLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateBorrowLimitLimits(min, max, { ...options });
  }

  public async updateIdealCollateralRatioLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateIdealCollateralRatioLimits(min, max, { ...options });
  }

  public async updateBorrowRateLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateBorrowRateLimits(min, max, { ...options });
  }

  public async updateCollectionPeriodLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateCollectionPeriodLimits(min, max, { ...options });
  }

  public async updateDurationLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateDurationLimits(min, max, { ...options });
  }

  public async updateDefaultGracePeriodLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateDefaultGracePeriodLimits(min, max, { ...options });
  }

  public async updateGracePenaltyRateLimits(min: BigNumberish, max: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateGracePenaltyRateLimits(min, max, { ...options });
  }

  public async updateProtocolFeeFraction(fee: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.pooledCreditLine.updateProtocolFeeFraction(fee, { ...options });
  }

  public async getStatusAndUpdate(id: string): Promise<number> {
    return this.pooledCreditLine.callStatic.getStatusAndUpdate(id);
  }
}
