import { Base } from './Base';
import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import {
  getAllCreditLinesFromSubgraph,
  getConfirmedCreditLinesOfBorrower,
  getConfirmedCreditLinesOfLender,
  getPendingCreditlinesRequestedByLender,
  getAllCreditLinesForCount,
  getPendingCreditLinesRequestedByBorrower,
  getPendingCreditLinesRequestedToLender,
  getCreditLine,
  getPendingCreditLinesRequestedToBorrower,
  getCreditLineTimeline,
  getCreditLinesOfLenderWithState_requestByLender,
  getCreditLinesOfLenderWithState,
  getCreditLinesOfLenderWithStateNotIn_requestByLender,
  getCreditLinesOfLenderWithStateNotIn,
  getCreditLinesOfBorrowerWithStateNotIn_requestByLender,
  getCreditLinesOfBorrowerWithState,
  getCreditLinesOfBorrowerWithState_requestByLender,
  getCreditLinesOfBorrowerWithStateNotIn,
} from '../queries';

import { CreditLineDetail, CreditLinesOverview, CreditLineOperation, CreditLineStatus } from '../types/Types';

import BigNumber from 'bignumber.js';
import { CreditLineEmulator } from '../emulator/CreditLines';

export class CreditLineCalls extends Base {
  /**
   * @description instance of credit line contract
   */

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  /**
   * @description use to fetch all the credit lines in the system
   * @description don't use in production. It will be a 😰 (only for debugging)
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @returns
   */
  async getAllCreditLines(count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  private convertToCreditLineStatusEnum(stateInSubgraph: string): CreditLineStatus {
    // enum CreditLineStatus {
    //     NOT_CREATED,
    //     REQUESTED,
    //     ACTIVE
    // }
    if (stateInSubgraph == 'NOT_CREATED') {
      return CreditLineStatus.NOT_CREATED;
    } else if (stateInSubgraph == 'REQUESTED') {
      return CreditLineStatus.REQUESTED;
    } else if (stateInSubgraph == 'ACTIVE') {
      return CreditLineStatus.ACTIVE;
    } else {
      return CreditLineStatus.CLOSED;
    }
  }
  /**
   *
   * @param data
   * @description transaform the data recevied from the subgraph to type
   */
  private transformToCreditLine(emulatorResult: CreditLineEmulator[], prices: Record<string, BigNumber>): CreditLineDetail[] {
    return emulatorResult.map((aNew) => {
      return {
        createdAt: aNew.createdAt().toString(),
        currentDebt: { value: aNew.calculateCurrentDebt().toString(), decimals: this.tokenManager.getTokenDecimals(aNew.borrowAsset()) },
        principal: { value: aNew.getPrincipal().toString(), decimals: this.tokenManager.getTokenDecimals(aNew.borrowAsset()) },
        interestAccrued: {
          value: aNew.calculateInterestAccrued().toString(),
          decimals: this.tokenManager.getTokenDecimals(aNew.borrowAsset()),
        },
        collateralRatio: { value: aNew.calculateCurrentCollateralRatio()[0].toString(), decimals: 18 },
        creditLimit: { value: aNew.getCreditLimit().toString(), decimals: this.tokenManager.getTokenDecimals(aNew.borrowAsset()) },
        interestRate: { value: aNew.borrowRate().toString(), decimals: 18 },
        idealCollateralRatio: { value: aNew.idealCollateralRatio().toString(), decimals: 18 },
        borrowAsset: {
          address: aNew.borrowAsset(),
          name: this.tokenManager.getTokenName(aNew.borrowAsset()),
          pricePerAssetInUSD: prices[aNew.borrowAsset()].toString(),
          logo: this.tokenManager.getLogo(aNew.borrowAsset()),
          decimals: this.tokenManager.getTokenDecimals(aNew.borrowAsset()),
        },
        collateralTokens: {
          value: aNew.calculateTotalCollateralTokens().toString(),
          decimals: this.tokenManager.getTokenDecimals(aNew.collateralAsset()),
        },
        collateralAsset: {
          address: aNew.collateralAsset(),
          name: this.tokenManager.getTokenName(aNew.collateralAsset()),
          pricePerAssetInUSD: prices[aNew.collateralAsset()].toString(),
          logo: this.tokenManager.getLogo(aNew.collateralAsset()),
          decimals: this.tokenManager.getTokenDecimals(aNew.collateralAsset()),
        },

        autoLiquidate: aNew.autoLiquidate(),
        lender: { address: aNew.lender() },
        borrower: { address: aNew.borrower() },
        type: aNew.getStatus(),
        lastPrincipalUpdateTime: aNew.lastPrincipalUpdateTime().toString(),
        id: aNew.getId(),
        requestByLender: aNew.requestByLender(),
        borrowAssetStrategy: {
          address: aNew.borrowAssetStrategy(),
          type: this.yieldApi.getStrategy(aNew.borrowAssetStrategy()),
          displayName: this.yieldApi.getStrategyDisplayName(aNew.borrowAssetStrategy()),
          logo: this.yieldApi.getStrategyLogo(aNew.borrowAssetStrategy()),
        },
        collateralAssetStrategy: {
          address: aNew.collateralAssetStrategy(),
          type: this.yieldApi.getStrategy(aNew.collateralAssetStrategy()),
          displayName: this.yieldApi.getStrategyDisplayName(aNew.collateralAssetStrategy()),
          logo: this.yieldApi.getStrategyLogo(aNew.collateralAssetStrategy()),
        },
        emulator: aNew,
      };
    });
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a borrower
   */
  async getConfirmedCreditLinesOfBorrower(borrower: string, count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the confirmed credit lines of a lender
   */
  async getConfirmedCreditLinesOfLender(lender: string, count: number = 13, skip: number = 0): Promise<CreditLineDetail[]> {
    const result = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requested by the lender but not accepted by any borrower
   */
  async getPendingCreditlinesRequestedByLender(lender: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditlinesRequestedByLender(this.subgraphUrl, lender, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender
   */
  async getPendingCreditLinesRequestedByBorrower(borrower: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedByBorrower(this.subgraphUrl, borrower, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param lender: address of the lender
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a lender by all other borrowers
   */
  async getPendingCreditLinesRequestedToLender(lender: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedToLender(this.subgraphUrl, lender, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param borrower: address of the borrower
   * @param count: number of credit lines to query
   * @param skip: number to credit lines to skip
   * @description Returns the list of poending credit lines which have requested to a borrower by all other lenders
   */
  async getPendingCreditLinesRequestedToBorrower(borrower: string, count: number, skip: number): Promise<CreditLineDetail[]> {
    const result = await getPendingCreditLinesRequestedToBorrower(this.subgraphUrl, borrower, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    return this.transformToCreditLine(emulatorResult, prices);
  }

  /**
   * @param id
   * @description returns a detailed information of a single credit line.
   */
  async getCreditLine(id: string): Promise<CreditLineDetail> {
    const result = await getCreditLine(this.subgraphUrl, id);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    const emulatorResult = this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
    const data = this.transformToCreditLine(emulatorResult, prices);
    if (data.length == 0) {
      return undefined;
    } else {
      return data[0];
    }
  }

  /**
   * @param address: address of the user to query
   * @description Returns the credit lines overview of the user
   */
  async getCreditLinesOverview(address: string, count: number = 999, skip: number = 0): Promise<CreditLinesOverview> {
    const creditLineAsborrower = await this.getConfirmedCreditLinesOfBorrower(address, count, skip);
    const creditLineAsLender = await this.getConfirmedCreditLinesOfLender(address, count, skip);

    // const creditLineAsborrower: CreditLineDetail[] = [];
    // const creditLineAsLender: CreditLineDetail[] = [];

    let creditGranted = new BigNumber(0);
    let interestAccrued = new BigNumber(0);
    let activeCredit = new BigNumber(0);
    let interestRate = new BigNumber(0);

    for (let index = 0; index < creditLineAsLender.length; index++) {
      const element = creditLineAsLender[index];
      const emulator = element.emulator;
      if ([CreditLineStatus.CLOSED, CreditLineStatus.LIQUIDATED].includes(emulator.getStatus())) {
        continue;
      }
      const borrowTokenDecimals = await this.tokenManager.getTokenDecimals(emulator.borrowAsset());
      const assetPrice = await this.tokenManager.getPricePerAsset(emulator.borrowAsset());
      const principal = emulator.getPrincipal().div(new BigNumber(10).pow(borrowTokenDecimals)).multipliedBy(assetPrice);
      creditGranted = creditGranted.plus(principal);
    }

    // for (let i = 0; i < creditLineAsborrower.length; i++) {
    //   const interest = creditLineAsborrower[i].interestRate;
    //   const accruedInterest = creditLineAsborrower[i].interestAccrued.value;

    //   if (creditLineAsborrower[i].type == 'ACTIVE') {
    //     const credit = new BigNumber(creditLineAsborrower[i].principal.value.toString());
    //     const price = await this.tokenManager.getPricePerAsset(creditLineAsLender[i].borrowAsset.toString());
    //     activeCredit = activeCredit.plus(credit.multipliedBy(price));
    //   }

    //   interestAccrued = interestAccrued.plus(accruedInterest.toString());
    //   interestRate = interestRate.plus(new BigNumber(interest.value.toString()).dividedBy('1000000000000000000'));
    // }

    let totalPrincipal = new BigNumber(0);

    for (let index = 0; index < creditLineAsborrower.length; index++) {
      const element = creditLineAsborrower[index];
      const emulator = element.emulator;
      const accruedInterest = emulator.calculateInterestAccrued();

      const borrowTokenDecimals = await this.tokenManager.getTokenDecimals(emulator.borrowAsset());
      const price = await this.tokenManager.getPricePerAsset(emulator.borrowAsset());

      if ([CreditLineStatus.ACTIVE].includes(emulator.getStatus())) {
        const credit = emulator.getPrincipal().div(new BigNumber(10).pow(borrowTokenDecimals)).multipliedBy(price);
        activeCredit = activeCredit.plus(credit);
      }

      interestAccrued = interestAccrued.plus(accruedInterest.div(new BigNumber(10).pow(borrowTokenDecimals)).multipliedBy(price));
      totalPrincipal = totalPrincipal.plus(emulator.getPrincipal().div(new BigNumber(10).pow(borrowTokenDecimals)).multipliedBy(price));
    }

    if (totalPrincipal.gt(0)) {
      interestRate = interestAccrued.div(totalPrincipal).multipliedBy(100);
    }

    return {
      creditGranted: { value: creditGranted.toFixed(2), decimals: 2 },
      interestAccrued: { value: interestAccrued.toFixed(2), decimals: 2 },
      activeCredit: { value: activeCredit.toFixed(2), decimals: 2 },
      interestRate: interestRate.toFixed(2),
    };
  }

  /**
   * @param creditLine
   * @description returns the operations made on a credit line in time-wise order
   */
  async getCreditLineTimeline(creditLine: string): Promise<CreditLineOperation[]> {
    const result = await getCreditLineTimeline(this.subgraphUrl, creditLine);
    if (result.data.creditLines.length == 0) {
      return [];
    } else {
      const cl = result.data.creditLines[0];
      return await this.transformToCreditLineOperations(cl);
    }
  }

  /**
   *
   * @param cl
   * @description Transforms the data received from the subgraph into type
   */
  private async transformToCreditLineOperations(cl: any): Promise<CreditLineOperation[]> {
    await this.tokenManager.updateAll(cl.borrowAsset);
    await this.tokenManager.updateAll(cl.collateralAsset);

    const operations: CreditLineOperation[] = cl.creditLineTimeline.map((a) => {
      // NOT_CREATED
      // REQUESTED
      // ACTIVE
      // DEPOSIT_COLLATERAL
      // BORROW
      // REPAY
      // WITHDRAW_COLLATERAL
      // CLOSED
      // CANCELLED
      // RESET
      // LIQUIDATED
      let decimalsToUse = 0;
      if (['DEPOSIT_COLLATERAL', 'WITHDRAW_COLLATERAL'].includes(a.creditLineOperation)) {
        decimalsToUse = this.tokenManager.getTokenDecimals(cl.collateralAsset);
      }
      if (['BORROW', 'REPAY'].includes(a.creditLineOperation)) {
        decimalsToUse = this.tokenManager.getTokenDecimals(cl.borrowAsset);
      }

      return {
        amount: {
          value: a.amount || '0',
          decimals: decimalsToUse,
        },
        creditLineOperation: a.creditLineOperation,
        liquidator: a.liquidator,
        strategy: a.strategy ? { type: this.yieldApi.getStrategy(a.strategy), address: a.strategy } : undefined,
        timestamp: a.timestamp,
        id: a.id,
      };
    });
    return operations;
  }

  async countAllCreditLines(): Promise<number> {
    const result = await getAllCreditLinesForCount(this.subgraphUrl);
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateIn(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithState(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateIn_requestByLender(
    borrower: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithState_requestByLender(
      this.subgraphUrl,
      borrower,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateNotIn(borrower: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithStateNotIn(
      this.subgraphUrl,
      borrower,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender(
    borrower: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfBorrowerWithStateNotIn_requestByLender(
      this.subgraphUrl,
      borrower,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateNotIn(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfLenderWithStateNotIn(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateNotIn_requestByLender(
    lender: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfLenderWithStateNotIn_requestByLender(
      this.subgraphUrl,
      lender,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateIn(lender: string, state: CreditLineStatus[]): Promise<number> {
    const result = await getCreditLinesOfLenderWithState(
      this.subgraphUrl,
      lender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  async countAllCreditLinesOfLenderWithStateIn_requestByLender(
    lender: string,
    requestByLender: boolean,
    state: CreditLineStatus[]
  ): Promise<number> {
    const result = await getCreditLinesOfLenderWithState_requestByLender(
      this.subgraphUrl,
      lender,
      requestByLender,
      state.map((a) => a.toString())
    );
    return result.length;
  }

  private transformToCreditLineEmulator(
    data: any[],
    prices: Record<string, BigNumber>,
    collateralPerStrategyToken: Record<string, Record<string, BigNumber>>
  ): CreditLineEmulator[] {
    return data.map((a) => {
      return new CreditLineEmulator(
        {
          id: a.id,
          collateralShareInStrategy: new BigNumber(a.collateralShareInStrategy),
          principal: new BigNumber(a.principal),
          lastPrincipalUpdateTime: new BigNumber(a.lastPrincipalUpdateTime),
          borrowRate: new BigNumber(a.borrowRate),
          interestAccruedTillLastPrincipalUpdate: new BigNumber(a.interestAccruedTillLastPrincipalUpdate),
          totalInterestRepaid: new BigNumber(a.totalInterestRepaid),
          idealCollateralRatio: new BigNumber(a.idealCollateralRatio),
          creditLineStatus: this.convertToCreditLineStatusEnum(a.status),
          borrowLimit: new BigNumber(a.borrowLimit),
          createdAt: new BigNumber(a.createdAt),
          borrowAsset: a.borrowAsset,
          collateralAsset: a.collateralAsset,
          autoLiquidation: new Boolean(a.autoLiquidation).valueOf(),
          lender: a.lender,
          borrower: a.borrower,
          requestByLender: new Boolean(a.requestByLender).valueOf(),
          borrowAssetStrategy: a.borrowAssetStrategy,
          collateralAssetStrategy: a.collateralAssetStrategy,
        },
        {
          collateralPerStrategyToken: new BigNumber(collateralPerStrategyToken[a.collateralAssetStrategy][a.collateralAsset]),
          ratioOfPrices: new BigNumber(prices[a.collateralAsset]).dividedBy(prices[a.borrowAsset]),
          ratioOfPricesDecimals: 0,
        },
        { liquidatorRewardFraction: new BigNumber(10).pow(16) }
      );
    });
  }
}
