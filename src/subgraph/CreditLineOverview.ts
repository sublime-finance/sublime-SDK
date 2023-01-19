import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { UserMetaCalls } from './UserMeta';
import {
  LenderCollectivePerTokenPerStrategy,
  LenderCollective,
  LenderCollectiveData,
  LenderCollectivePerToken,
  LenderCollectivePerStrategy,
  BorrowerCollectivePerTokenPerStrategy,
  BorrowerCollective,
  BorrowerCollectiveData,
  BorrowerCollectivePerToken,
  BorrowerCollectivePerStrategy,
  LenderTotalCreditCommited,
  LenderTotalCreditPerStrategy,
  LenderTotalCreditPerToken,
  InterestCollectedByLender,
  InterestCollectedByLenderPerToken,
  BorrowerAvailableCredit,
  BorrowerAvailableCreditPerToken,
  CreditLineStatus,
  CreditLineDetail,
} from '../types/Types';

import { getLenderCreditLineCollective, getBorrowerCreditLineCollective, getConfirmedCreditLinesOfLender } from '../queries';

import BigNumber from 'bignumber.js';
export class CreditLinesOverviewCall extends UserMetaCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  /**
   * @description Total Amount put by a lender in all credit lines
   * @param user
   * @returns
   */
  async getLenderCreditLineCollective(user: string): Promise<LenderCollectiveData> {
    const data = await getLenderCreditLineCollective(this.subgraphUrl, user);
    const lenderCollectivePerTokenPerStrategy = await this.tranformToLenderCollectivePerTokenPerStrategy(data);
    return {
      lenderCollective: this.TransformToLenderCollective(user, lenderCollectivePerTokenPerStrategy),
      lenderCollectivePerStrategy: this.transformToLenderCollectivePerStrategy(user, lenderCollectivePerTokenPerStrategy),
      lenderCollectivePerToken: this.transformToLenderCollectivePerToken(user, lenderCollectivePerTokenPerStrategy),
      lenderCollectivePerTokenPerStrategy: lenderCollectivePerTokenPerStrategy,
    };
  }

  /**
   * @description Amount borrowed and repaid by a borrower accross all credit lines
   * @summary Time based interest calculation is pending. (amountRepaid + outstandingInterest)
   * @param user
   * @returns
   */
  async getBorrowerCreditLineCollective(user: string): Promise<BorrowerCollectiveData> {
    const data = await getBorrowerCreditLineCollective(this.subgraphUrl, user);
    const borrowerCollectivePerTokenPerStrategy = await this.tranformToBorrowerCollectivePerTokenPerStrategy(data);
    return {
      borrowerCollective: this.TransformToBorrowerCollective(user, borrowerCollectivePerTokenPerStrategy),
      borrowerCollectivePerStrategy: this.transformToBorrowerCollectivePerStrategy(user, borrowerCollectivePerTokenPerStrategy),
      borrowerCollectivePerToken: this.transformToBorrowerCollectivePerToken(user, borrowerCollectivePerTokenPerStrategy),
      borrowerCollectivePerTokenPerStrategy: borrowerCollectivePerTokenPerStrategy,
    };
  }

  async getTotalAmountCommitedByLenderToCreditLines(lender: string): Promise<LenderTotalCreditCommited> {
    const result: any[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      const _temp = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }
    const allBorrowAsset: string[] = result.map((a) => a.borrowAsset);
    for (let index = 0; index < allBorrowAsset.length; index++) {
      const element = allBorrowAsset[index];
      await this.tokenManager.updateAll(element);
    }
    return this.transformToLenderTotalCredit(result);
  }

  async getInterestCollectedByLenderFromCreditLines(lender: string): Promise<InterestCollectedByLender> {
    const result: any[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      const _temp = await getConfirmedCreditLinesOfLender(this.subgraphUrl, lender, count, skip);
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }
    const allBorrowAsset: string[] = result.map((a) => a.borrowAsset);
    for (let index = 0; index < allBorrowAsset.length; index++) {
      const element = allBorrowAsset[index];
      await this.tokenManager.updateAll(element);
    }
    return this.transformToInterestCollectedByLender(result);
  }

  async getAvaialbleBorrowLimitOfBorrowerOfCreditLines(borrower: string): Promise<BorrowerAvailableCredit> {
    let result: CreditLineDetail[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      // const _temp = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
      const _temp: CreditLineDetail[] = await this.getConfirmedCreditLinesOfBorrower(borrower, count, skip);
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }

    result = result.filter((a) => a.emulator.getStatus() === CreditLineStatus.ACTIVE);
    // console.log(result.map(a => {return {
    //   id: a.emulator.getId(),
    //   status: a.emulator.getStatus()
    // }}))

    const allBorrowAsset: string[] = result.map((a) => a.emulator.borrowAsset());
    for (let index = 0; index < allBorrowAsset.length; index++) {
      const element = allBorrowAsset[index];
      await this.tokenManager.updateAll(element);
    }
    return this.transformToBorrowerAvailableCredit(result);
  }

  private async transformToInterestCollectedByLender(data: any[]): Promise<InterestCollectedByLender> {
    const prices = {};
    const allTokens: string[] = data.map((a) => a.borrowAsset);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const total = data.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.totalInterestRepaid)
            .multipliedBy(prices[current.borrowAsset])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.borrowAsset)))
        ),
      new BigNumber(0)
    );
    return {
      amount: { value: total.toString(), decimals: 0 },
      interestCollectedByLenderPerToken: await this.transformToInterestCollectedByLenderPerToken(data),
    };
  }

  private async transformToInterestCollectedByLenderPerToken(data: any[]): Promise<InterestCollectedByLenderPerToken[]> {
    const interestCollectedByLenderPerToken: InterestCollectedByLenderPerToken[] = [];
    const allTokens: string[] = data.map((a) => a.borrowAsset);
    const uniqueTokens = allTokens.filter((value, index, self) => self.indexOf(value) === index);

    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredEntries = data.filter((a) => a.borrowAsset === element);
      if (requiredEntries.length > 0) {
        const totalInterestCollectedPerToken = requiredEntries.reduce(
          (total, current) => total.plus(current.totalInterestRepaid),
          new BigNumber(0)
        );
        interestCollectedByLenderPerToken.push({
          amount: {
            value: totalInterestCollectedPerToken.toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredEntries[0].borrowAsset),
          },
          token: await this.tokenManager.getAssetMeta(requiredEntries[0].borrowAsset),
        });
      }
    }

    return interestCollectedByLenderPerToken;
  }

  private async transformToLenderTotalCredit(data: any[]): Promise<LenderTotalCreditCommited> {
    const prices = {};
    const allTokens: string[] = data.map((a) => a.borrowAsset);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const lenderTotalCredit: string = data.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.borrowLimit)
            .multipliedBy(prices[current.borrowAsset])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.borrowAsset)))
        ),
      new BigNumber(0)
    );
    const lenderTotalCreditPerStrategy = await this.transformToLenderTotalCreditPerStrategy(data);
    const lenderTotalCreditPerToken = await this.transformToLenderTotalCreditPerToken(data);

    return {
      lenderTotalCredit: { amount: { value: lenderTotalCredit.toString(), decimals: 0 } },
      lenderTotalCreditPerStrategy,
      lenderTotalCreditCommittedPerToken: lenderTotalCreditPerToken,
    };
  }

  private async transformToLenderTotalCreditPerToken(data: any[]): Promise<LenderTotalCreditPerToken[]> {
    const prices = {};
    const allTokens: string[] = data.map((a) => a.borrowAsset);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const uniqueTokens = allTokens.filter((value, index, self) => self.indexOf(value) === index);

    const lenderTotalCreditPerToken: LenderTotalCreditPerToken[] = [];
    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredEntries = data.filter((a) => a.borrowAsset === element);
      if (requiredEntries.length > 0) {
        lenderTotalCreditPerToken.push({
          amount: {
            value: requiredEntries.reduce((total, current) => total.plus(current.borrowLimit), new BigNumber(0)),
            decimals: this.tokenManager.getTokenDecimals(requiredEntries[0].borrowAsset),
          },
          token: await this.tokenManager.getAssetMeta(requiredEntries[0].borrowAsset),
        });
      }
    }
    return lenderTotalCreditPerToken;
  }

  private async transformToLenderTotalCreditPerStrategy(data: any[]): Promise<LenderTotalCreditPerStrategy[]> {
    const strategyAddresses: string[] = data.map((a) => a.strategy).filter((value, index, self) => self.indexOf(value) === index);
    const prices = {};
    const allTokens: string[] = data.map((a) => a.borrowAsset);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const lenderTotalCreditPerStrategy: LenderTotalCreditPerStrategy[] = [];
    for (let index = 0; index < strategyAddresses.length; index++) {
      const element = strategyAddresses[index];
      const requiredEntries = data.filter((a) => a.strategy === element);
      if (requiredEntries.length > 0) {
        const totalCredit = requiredEntries.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.borrowLimit)
                .multipliedBy(prices[current.borrowAsset])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.borrowAsset)))
            ),
          new BigNumber(0)
        );
        lenderTotalCreditPerStrategy.push({
          amount: { value: totalCredit.toString(), decimals: 0 },
          strategy: {
            address: requiredEntries[0].strategy,
            type: this.yieldApi.getStrategy(requiredEntries[0].strategy),
            displayName: this.yieldApi.getStrategyDisplayName(requiredEntries[0].strategy),
            logo: this.yieldApi.getStrategyLogo(requiredEntries[0].strategy),
          },
        });
      }
    }
    return lenderTotalCreditPerStrategy;
  }

  private transformToLenderCollectivePerToken(
    user: string,
    lenderCollectivePerTokenPerStrategy: LenderCollectivePerTokenPerStrategy[]
  ): LenderCollectivePerToken[] {
    const lenderCollectivePerToken: LenderCollectivePerToken[] = [];
    const allTokens = lenderCollectivePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      const requiredTokenEntries = lenderCollectivePerTokenPerStrategy.filter((a) => a.token.address === element);
      if (requiredTokenEntries.length > 0) {
        const entry = requiredTokenEntries[0];
        const totalAmountInAllStrategies = requiredTokenEntries.reduce(
          (total, currentValue) => total.plus(currentValue.amountLent.value.toString()),
          new BigNumber(0)
        );
        const totalInterestInAllStrategies = requiredTokenEntries.reduce(
          (total, currentValue) => total.plus(currentValue.interestReceived.value.toString()),
          new BigNumber(0)
        );
        lenderCollectivePerToken.push({
          id: `${user}#${entry.token.address}`,
          token: entry.token,
          amountLent: { value: totalAmountInAllStrategies.toPrecision(), decimals: entry.amountLent.decimals },
          interestReceived: { value: totalInterestInAllStrategies.toString(), decimals: entry.interestReceived.decimals },
        });
      }
    }
    return lenderCollectivePerToken;
  }

  private transformToBorrowerCollectivePerToken(
    user: string,
    borrowerCollectivePerTokenPerStrategy: BorrowerCollectivePerTokenPerStrategy[]
  ): BorrowerCollectivePerToken[] {
    const borrowerCollectivePerToken: BorrowerCollectivePerToken[] = [];
    const allTokens = borrowerCollectivePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      const requiredTokenEntries = borrowerCollectivePerTokenPerStrategy.filter((a) => a.token.address === element);
      if (requiredTokenEntries.length > 0) {
        const entry = requiredTokenEntries[0];
        const totalAmountInAllStrategies = requiredTokenEntries.reduce(
          (total, currentValue) => total.plus(currentValue.amountBorrowed.value.toString()),
          new BigNumber(0)
        );
        const totalRepaidInAllStrategies = requiredTokenEntries.reduce(
          (total, currentValue) => total.plus(currentValue.amountRepaid.value.toString()),
          new BigNumber(0)
        );
        borrowerCollectivePerToken.push({
          id: `${user}#${entry.token.address}`,
          token: entry.token,
          amountBorrowed: { value: totalAmountInAllStrategies.toPrecision(), decimals: entry.amountBorrowed.decimals },
          amountRepaid: { value: totalRepaidInAllStrategies.toString(), decimals: entry.amountRepaid.decimals },
        });
      }
    }
    return borrowerCollectivePerToken;
  }

  private transformToLenderCollectivePerStrategy(
    user: string,
    lenderCollectivePerTokenPerStrategy: LenderCollectivePerTokenPerStrategy[]
  ): LenderCollectivePerStrategy[] {
    const lenderCollectivePerStrategy: LenderCollectivePerStrategy[] = [];
    const allStrategies = lenderCollectivePerTokenPerStrategy
      .map((a) => a.strategy.type)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allStrategies.length; index++) {
      const element = allStrategies[index];
      const requiredTokenEntries = lenderCollectivePerTokenPerStrategy.filter((a) => a.strategy.type === element);
      if (requiredTokenEntries.length > 0) {
        const entry = requiredTokenEntries[0];
        const totalTokenInAll = requiredTokenEntries.reduce(
          (total, currentValue) =>
            total.plus(
              new BigNumber(currentValue.amountLent.value.toString())
                .multipliedBy(currentValue.token.pricePerAssetInUSD)
                .dividedBy(new BigNumber(10).pow(currentValue.amountLent.decimals))
            ),
          new BigNumber(0)
        );
        const totalInterestInAll = requiredTokenEntries.reduce(
          (total, currentValue) =>
            total.plus(
              new BigNumber(currentValue.interestReceived.value.toString())
                .multipliedBy(currentValue.token.pricePerAssetInUSD)
                .dividedBy(new BigNumber(10).pow(currentValue.interestReceived.decimals))
            ),
          new BigNumber(0)
        );
        lenderCollectivePerStrategy.push({
          id: `${user}#${entry.strategy.address}`,
          strategy: entry.strategy,
          amountLent: { value: totalTokenInAll.toString(), decimals: 0 },
          interestReceived: { value: totalInterestInAll.toString(), decimals: 0 },
        });
      }
    }
    return lenderCollectivePerStrategy;
  }

  private transformToBorrowerCollectivePerStrategy(
    user: string,
    borrowerCollectivePerTokenPerStrategy: BorrowerCollectivePerTokenPerStrategy[]
  ): BorrowerCollectivePerStrategy[] {
    const borrowerCollectivePerStrategy: BorrowerCollectivePerStrategy[] = [];
    const allStrategies = borrowerCollectivePerTokenPerStrategy
      .map((a) => a.strategy.type)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allStrategies.length; index++) {
      const element = allStrategies[index];
      const requiredTokenEntries = borrowerCollectivePerTokenPerStrategy.filter((a) => a.strategy.type === element);
      if (requiredTokenEntries.length > 0) {
        const entry = requiredTokenEntries[0];
        const totalTokenInAll = requiredTokenEntries.reduce(
          (total, currentValue) =>
            total.plus(
              new BigNumber(currentValue.amountBorrowed.value.toString())
                .multipliedBy(currentValue.token.pricePerAssetInUSD)
                .dividedBy(new BigNumber(10).pow(currentValue.amountBorrowed.decimals))
            ),
          new BigNumber(0)
        );
        const totalRepaidInAll = requiredTokenEntries.reduce(
          (total, currentValue) =>
            total.plus(
              new BigNumber(currentValue.amountRepaid.value.toString())
                .multipliedBy(currentValue.token.pricePerAssetInUSD)
                .dividedBy(new BigNumber(10).pow(currentValue.amountRepaid.decimals))
            ),
          new BigNumber(0)
        );
        borrowerCollectivePerStrategy.push({
          id: `${user}#${entry.strategy.address}`,
          strategy: entry.strategy,
          amountBorrowed: { value: totalTokenInAll.toString(), decimals: 0 },
          amountRepaid: { value: totalRepaidInAll.toString(), decimals: 0 },
        });
      }
    }
    return borrowerCollectivePerStrategy;
  }

  private TransformToLenderCollective(
    user: string,
    lenderCollectivePerTokenPerStrategy: LenderCollectivePerTokenPerStrategy[]
  ): LenderCollective {
    const totallTokenInAll = lenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountLent.value.toString())
            .multipliedBy(current.token.pricePerAssetInUSD)
            .dividedBy(new BigNumber(10).pow(current.amountLent.decimals))
        ),
      new BigNumber(0)
    );
    const totalInterestInAll = lenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.interestReceived.value.toString())
            .multipliedBy(current.token.pricePerAssetInUSD)
            .dividedBy(new BigNumber(10).pow(current.interestReceived.decimals))
        ),
      new BigNumber(0)
    );
    return {
      id: user,
      amountLent: { value: totallTokenInAll.toString(), decimals: 0 },
      interestReceived: { value: totalInterestInAll.toString(), decimals: 0 },
    };
  }

  private TransformToBorrowerCollective(
    user: string,
    borrowerCollectivePerTokenPerStrategy: BorrowerCollectivePerTokenPerStrategy[]
  ): BorrowerCollective {
    const totallTokenInAll = borrowerCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total
          .plus(current.amountBorrowed.value.toString())
          .multipliedBy(current.token.pricePerAssetInUSD)
          .dividedBy(new BigNumber(10).pow(current.amountRepaid.decimals)),
      new BigNumber(0)
    );
    const totalRepaidInAll = borrowerCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountBorrowed.value.toString())
            .multipliedBy(current.token.pricePerAssetInUSD)
            .dividedBy(new BigNumber(10).pow(current.amountRepaid.decimals))
        ),
      new BigNumber(0)
    );
    return {
      id: user,
      amountBorrowed: { value: totallTokenInAll.toString(), decimals: 0 },
      amountRepaid: { value: totalRepaidInAll.toString(), decimals: 0 },
    };
  }

  private async tranformToLenderCollectivePerTokenPerStrategy(data: any[]): Promise<LenderCollectivePerTokenPerStrategy[]> {
    const tokens: string[] = data.map((a) => a.token);
    const prices = {};

    for (let index = 0; index < tokens.length; index++) {
      const element = tokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    return data.map((a) => {
      return {
        id: a.id,
        token: {
          name: this.tokenManager.getTokenName(a.token),
          pricePerAssetInUSD: prices[a.token],
          logo: this.tokenManager.getLogo(a.token),
          address: a.token,
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
        strategy: {
          type: this.yieldApi.getStrategy(a.strategy),
          address: a.strategy,
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
        amountLent: { value: a.amountLent, decimals: this.tokenManager.getTokenDecimals(a.token) },
        interestReceived: { value: a.interestReceived, decimals: this.tokenManager.getTokenDecimals(a.token) },
      };
    });
  }

  private async tranformToBorrowerCollectivePerTokenPerStrategy(data: any[]): Promise<BorrowerCollectivePerTokenPerStrategy[]> {
    const tokens: string[] = data.map((a) => a.token);
    const prices = {};

    for (let index = 0; index < tokens.length; index++) {
      const element = tokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    return data.map((a) => {
      console.log(a);
      return {
        id: a.id,
        token: {
          name: this.tokenManager.getTokenName(a.token),
          pricePerAssetInUSD: prices[a.token],
          logo: this.tokenManager.getLogo(a.token),
          address: a.token,
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
        strategy: {
          type: this.yieldApi.getStrategy(a.strategy),
          address: a.strategy,
          displayName: this.yieldApi.getStrategy(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
        amountBorrowed: { value: a.amountBorrowed, decimals: this.tokenManager.getTokenDecimals(a.token) },
        amountRepaid: { value: a.amountRepaid, decimals: this.tokenManager.getTokenDecimals(a.token) },
      };
    });
  }

  private async transformToBorrowerAvailableCredit(data: CreditLineDetail[]): Promise<BorrowerAvailableCredit> {
    const prices = {};
    const allTokens: string[] = data.map((a) => a.emulator.borrowAsset());
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const total = data.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.emulator.getCreditLimit())
            .minus(current.emulator.getPrincipal())
            .multipliedBy(prices[current.emulator.borrowAsset()])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.emulator.borrowAsset())))
        ),
      new BigNumber(0)
    );
    return {
      amount: { value: total.toString(), decimals: 0 },
      borrowerAvailableCreditPerToken: await this.transformToBorrowerAvailableCreditPerToken(data),
    };
  }

  private async transformToBorrowerAvailableCreditPerToken(data: CreditLineDetail[]): Promise<BorrowerAvailableCreditPerToken[]> {
    const allTokens: string[] = data.map((a) => a.emulator.borrowAsset());
    const uniqueTokens = allTokens.filter((value, index, self) => self.indexOf(value) === index);

    const borrowerAvailableCreditPerToken: BorrowerAvailableCreditPerToken[] = [];
    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredEntries = data.filter((a) => a.emulator.borrowAsset() === element);
      if (requiredEntries.length > 0) {
        borrowerAvailableCreditPerToken.push({
          amount: {
            value: requiredEntries
              .reduce(
                (total, current) => total.plus(new BigNumber(current.emulator.getCreditLimit()).minus(current.emulator.getPrincipal())),
                new BigNumber(0)
              )
              .toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredEntries[0].emulator.borrowAsset()),
          },
          token: await this.tokenManager.getAssetMeta(requiredEntries[0].emulator.borrowAsset()),
        });
      }
    }
    return borrowerAvailableCreditPerToken;
  }
}
