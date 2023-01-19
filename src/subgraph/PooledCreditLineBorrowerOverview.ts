import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { CreditLinesOverviewCall } from './CreditLineOverview';

import { getBorrowerPooledCreditLineCollective, getAllPooledCreditLinesOfBorrowerWithState } from '../queries';
import {
  CreditLineStatus,
  PooledCreditLineBorrowerCollective,
  PooledCreditLineBorrowerCollectivePerStrategy,
  PooledCreditLineBorrowerCollectivePerToken,
  PooledCreditLineBorrowerCollectivePerTokenPerStrategy,
  PooledCreditLineBorrowerData,
  PclUpcomingState,
  PclsToTakeAction,
} from '../types/Types';

import BigNumber from 'bignumber.js';

export class PooledCreditLinesBorrowerOverviewCall extends CreditLinesOverviewCall {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getPooledCreditLineCollectiveOfBorrower(borrower: string): Promise<PooledCreditLineBorrowerData> {
    const result = await getBorrowerPooledCreditLineCollective(this.subgraphUrl, borrower);
    return this.transformToPooledCreditLineBorrowerData(result);
  }

  async getLatestActionablePooledCreditLinesOfBorrower(borrower: string): Promise<PclsToTakeAction[]> {
    const result = await getAllPooledCreditLinesOfBorrowerWithState(this.subgraphUrl, borrower, [
      CreditLineStatus.ACTIVE,
      CreditLineStatus.REQUESTED,
    ]);
    const now = new BigNumber(new Date().valueOf()).div(1000);

    const gtEndedAtAndLtDefaultsAt: PclsToTakeAction[] = result
      .filter((a) => now.gte(a.endsAt) && now.lt(a.defaultsAt))
      .map((a) => {
        return { ...a, upcomingAction: PclUpcomingState.ABOUT_TO_DEFAULT, timeRemaining: new BigNumber(a.defaultsAt).minus(now).toFixed() };
      });
    const ltEndedAt: PclsToTakeAction[] = result
      .filter((a) => now.lt(a.endsAt))
      .map((a) => {
        return { ...a, upcomingAction: PclUpcomingState.ABOUT_TO_EXPIRE, timeRemaining: new BigNumber(a.endsAt).minus(now).toFixed() };
      });

    const actionablePcls: PclsToTakeAction[] = [...gtEndedAtAndLtDefaultsAt, ...ltEndedAt].sort((a, b) =>
      new BigNumber(a.timeRemaining).minus(b.timeRemaining).toNumber()
    );
    return actionablePcls;
  }

  private async transformToPooledCreditLineBorrowerData(data: any[]): Promise<PooledCreditLineBorrowerData> {
    const allTokens: string[] = data.map((a) => a.token);
    const uniqueTokens = allTokens.filter((value, index, self) => self.indexOf(value) === index);

    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      await this.tokenManager.updateAll(element);
    }
    const pooledCreditLineBorrowerCollectivePerTokenPerStrategy: PooledCreditLineBorrowerCollectivePerTokenPerStrategy[] =
      await this.transformToPooledCreditLineBorrowerCollectivePerTokenPerStrategy(data);

    const pooledCreditLineBorrowerCollectivePerToken: PooledCreditLineBorrowerCollectivePerToken[] =
      await this.transformToPooledCreditLineBorrowerCollectivePerToken(pooledCreditLineBorrowerCollectivePerTokenPerStrategy);

    const pooledCreditLineBorrowerCollectivePerStrategy: PooledCreditLineBorrowerCollectivePerStrategy[] =
      await this.transformToPooledCreditLineBorrowerCollectivePerStrategy(pooledCreditLineBorrowerCollectivePerTokenPerStrategy);

    return {
      pooledCreditLineBorrowerCollective: await this.transformToPooledCreditLineBorrowerCollective(
        pooledCreditLineBorrowerCollectivePerTokenPerStrategy
      ),
      pooledCreditLineBorrowerCollectivePerStrategy,
      pooledCreditLineBorrowerCollectivePerToken,
      pooledCreditLineBorrowerCollectivePerTokenPerStrategy,
    };
  }

  private async transformToPooledCreditLineBorrowerCollectivePerStrategy(
    pooledCreditLineBorrowerCollectivePerTokenPerStrategy: PooledCreditLineBorrowerCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineBorrowerCollectivePerStrategy[]> {
    const prices = {};
    const allTokens: string[] = pooledCreditLineBorrowerCollectivePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const allStrategies = pooledCreditLineBorrowerCollectivePerTokenPerStrategy
      .map((a) => a.strategy.type)
      .filter((value, index, self) => self.indexOf(value) === index);

    const pooledCreditLineBorrowerCollectivePerStrategy: PooledCreditLineBorrowerCollectivePerStrategy[] = [];

    for (let index = 0; index < allStrategies.length; index++) {
      const element = allStrategies[index];
      const requiredElements = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.filter((a) => a.strategy.type === element);
      if (requiredElements.length > 0) {
        const totalCollteralDeposited = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.collateralDeposited.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalAmountRepaid = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.amountRepaid.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalAmountBorrowed = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.amountBorrowed.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );
        pooledCreditLineBorrowerCollectivePerStrategy.push({
          id: 'to-do',
          strategy: requiredElements[0].strategy,
          collateralDeposited: { value: totalCollteralDeposited.toString(), decimals: 0 },
          amountBorrowed: { value: totalAmountBorrowed.toString(), decimals: 0 },
          amountRepaid: { value: totalAmountRepaid.toString(), decimals: 0 },
        });
      }
    }
    return pooledCreditLineBorrowerCollectivePerStrategy;
  }

  private async transformToPooledCreditLineBorrowerCollectivePerToken(
    pooledCreditLineBorrowerCollectivePerTokenPerStrategy: PooledCreditLineBorrowerCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineBorrowerCollectivePerToken[]> {
    const allTokens: string[] = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.map((a) => a.token.address);
    const uniqueTokens = allTokens.filter((value, index, self) => self.indexOf(value) === index);

    const result: PooledCreditLineBorrowerCollectivePerToken[] = [];
    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredElements = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.filter((a) => a.token.address === element);
      if (requiredElements.length > 0) {
        const totalCollteralDeposited = requiredElements.reduce(
          (total, current) => total.plus(new BigNumber(current.collateralDeposited.value.toString())),
          new BigNumber(0)
        );

        const totalAmountRepaid = requiredElements.reduce(
          (total, current) => total.plus(new BigNumber(current.amountRepaid.value.toString())),
          new BigNumber(0)
        );

        const totalAmountBorrowed = requiredElements.reduce(
          (total, current) => total.plus(new BigNumber(current.amountBorrowed.value.toString())),
          new BigNumber(0)
        );

        result.push({
          id: 'to-do',
          token: requiredElements[0].token,
          collateralDeposited: {
            value: totalCollteralDeposited.toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address),
          },
          amountBorrowed: {
            value: totalAmountBorrowed.toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address),
          },
          amountRepaid: {
            value: totalAmountRepaid.toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address),
          },
        });
      }
    }
    return result;
  }

  private async transformToPooledCreditLineBorrowerCollective(
    pooledCreditLineBorrowerCollectivePerTokenPerStrategy: PooledCreditLineBorrowerCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineBorrowerCollective> {
    const prices = {};
    const allTokens: string[] = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.map((a) => a.token.address);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const totalCollteralDeposited = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.collateralDeposited.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    const totalAmountRepaid = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountRepaid.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    const totalAmountBorrowed = pooledCreditLineBorrowerCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountBorrowed.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    return {
      collateralDeposited: { value: totalCollteralDeposited.toString(), decimals: 0 },
      amountBorrowed: { value: totalAmountBorrowed.toString(), decimals: 0 },
      amountRepaid: { value: totalAmountRepaid.toString(), decimals: 0 },
    };
  }

  private async transformToPooledCreditLineBorrowerCollectivePerTokenPerStrategy(
    data: any[]
  ): Promise<PooledCreditLineBorrowerCollectivePerTokenPerStrategy[]> {
    const all = data.map(async (a) => {
      return {
        id: a.id,
        token: {
          name: this.tokenManager.getTokenName(a.token),
          address: a.token,
          logo: this.tokenManager.getLogo(a.token),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.token)).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
        strategy: {
          type: this.yieldApi.getStrategy(a.strategy),
          address: a.strategy,
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
        collateralDeposited: { value: a.collateralDeposited, decimals: this.tokenManager.getTokenDecimals(a.token) },
        amountRepaid: { value: a.amountRepaid, decimals: this.tokenManager.getTokenDecimals(a.token) },
        amountBorrowed: { value: a.amountBorrowed, decimals: this.tokenManager.getTokenDecimals(a.token) },
      };
    });
    return Promise.all(all);
  }
}
