import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { PooledCreditLinesBorrowerOverviewCall } from './PooledCreditLineBorrowerOverview';

import { getLenderPooledCreditLineCollective, getAllLendersPerPool } from '../queries';
import {
  PooledCreditLineLenderData,
  PooledCreditLineLenderCollectivePerTokenPerStrategy,
  PooledCreditLineLenderCollectivePerToken,
  PooledCreditLineLenderCollectivePerStrategy,
  PooledCreditLineCollective,
  LenderPerPoolDetail,
  LenderPerPool,
} from '../types/Types';

import BigNumber from 'bignumber.js';
import { PooledCreditLineEmulator } from 'emulator/PooledCreditLines';

export class PooledCreditLinesLenderOverview extends PooledCreditLinesBorrowerOverviewCall {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  /**
   * @description TotalsharesWithdrawn is pending
   * @param lender
   * @returns
   */
  async getPooledCreditLineCollectiveOfLender(lender: string): Promise<PooledCreditLineLenderData> {
    const result = await getLenderPooledCreditLineCollective(this.subgraphUrl, lender);
    return this.transformToPooledCreditLineLenderData(result);
  }

  private async transformToPooledCreditLineLenderData(data: any[]): Promise<PooledCreditLineLenderData> {
    const allTokens = data.map((a) => a.token).filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }

    const pooledCreditLineLenderCollectivePerTokenPerStrategy: PooledCreditLineLenderCollectivePerTokenPerStrategy[] =
      await this.transformToPooledCreditLineLenderCollectivePerTokenPerStrategy(data);
    const pooledCreditLineLenderCollectivePerToken: PooledCreditLineLenderCollectivePerToken[] =
      await this.transformToPooledCreditLineLenderCollectivePerToken(pooledCreditLineLenderCollectivePerTokenPerStrategy);
    const pooledCreditLineLenderCollectivePerStrategy: PooledCreditLineLenderCollectivePerStrategy[] =
      await this.transformToPooledCreditLineLenderCollectivePerStrategy(pooledCreditLineLenderCollectivePerTokenPerStrategy);
    const pooledCreditLineCollective: PooledCreditLineCollective = await this.transformToPooledCreditLineCollective(
      pooledCreditLineLenderCollectivePerTokenPerStrategy
    );

    return {
      pooledCreditLineCollective,
      pooledCreditLineLenderCollectivePerToken,
      pooledCreditLineLenderCollectivePerStrategy,
      pooledCreditLineLenderCollectivePerTokenPerStrategy,
    };
  }

  private async transformToPooledCreditLineLenderCollectivePerStrategy(
    pooledCreditLineLenderCollectivePerTokenPerStrategy: PooledCreditLineLenderCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineLenderCollectivePerStrategy[]> {
    const allStrategies = pooledCreditLineLenderCollectivePerTokenPerStrategy
      .map((a) => a.strategy.type)
      .filter((value, index, self) => self.indexOf(value) === index);

    const prices = {};
    const allTokens: string[] = pooledCreditLineLenderCollectivePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const pooledCreditLineLenderCollectivePerStrategy: PooledCreditLineLenderCollectivePerStrategy[] = [];
    for (let index = 0; index < allStrategies.length; index++) {
      const element = allStrategies[index];
      const requiredElements = pooledCreditLineLenderCollectivePerTokenPerStrategy.filter((a) => a.strategy.type === element);
      if (requiredElements.length > 0) {
        const totalAmountLent = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.amountLent.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalAmountWithdrawn = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.amountWithdrawn.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalInterestWithdrawn = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.interestWithdrawn.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalInterestEarned = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.interestEarned.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );

        const totalSharesWithdrawn = requiredElements.reduce(
          (total, current) => total.plus(new BigNumber(current.sharesWithdrawn.value.toString())),
          new BigNumber(0)
        );

        pooledCreditLineLenderCollectivePerStrategy.push({
          id: 'to-do',
          strategy: requiredElements[0].strategy,
          amountLent: { value: totalAmountLent.toString(), decimals: 0 },
          amountWithdrawn: { value: totalAmountWithdrawn.toString(), decimals: 0 },
          interestWithdrawn: { value: totalInterestWithdrawn.toString(), decimals: 0 },
          sharesWithdrawn: { value: totalSharesWithdrawn.toString(), decimals: 18 },
          interestEarned: { value: totalInterestEarned.toString(), decimals: 0 },
        });
      }
    }

    return pooledCreditLineLenderCollectivePerStrategy;
  }

  private async transformToPooledCreditLineLenderCollectivePerToken(
    pooledCreditLineLenderCollectivePerTokenPerStrategy: PooledCreditLineLenderCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineLenderCollectivePerToken[]> {
    const allTokens: string[] = pooledCreditLineLenderCollectivePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);

    const pooledCreditLineLenderCollectivePerToken: PooledCreditLineLenderCollectivePerToken[] = [];

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      const requiredEntries = pooledCreditLineLenderCollectivePerTokenPerStrategy.filter((a) => a.token.address === element);
      if (requiredEntries.length > 0) {
        const totalAmountLent = requiredEntries.reduce(
          (total, current) => total.plus(new BigNumber(current.amountLent.value.toString())),
          new BigNumber(0)
        );

        const totalAmountWithdrawn = requiredEntries.reduce(
          (total, current) => total.plus(new BigNumber(current.amountWithdrawn.value.toString())),
          new BigNumber(0)
        );

        const totalInterestWithdrawn = requiredEntries.reduce(
          (total, current) => total.plus(new BigNumber(current.interestWithdrawn.value.toString())),
          new BigNumber(0)
        );

        const totalSharesWithdrawn = requiredEntries.reduce(
          (total, current) => total.plus(new BigNumber(current.sharesWithdrawn.value.toString())),
          new BigNumber(0)
        );

        const totalInterestEarned = requiredEntries.reduce(
          (total, current) => total.plus(current.interestEarned.value.toString()),
          new BigNumber(0)
        );

        pooledCreditLineLenderCollectivePerToken.push({
          amountLent: { value: totalAmountLent.toString(), decimals: this.tokenManager.getTokenDecimals(requiredEntries[0].token.address) },
          amountWithdrawn: { value: totalAmountWithdrawn.toString(), decimals: 0 },
          interestWithdrawn: { value: totalInterestWithdrawn.toString(), decimals: 0 },
          sharesWithdrawn: { value: totalSharesWithdrawn.toString(), decimals: 18 },
          id: 'to=do',
          token: requiredEntries[0].token,
          interestEarned: {
            value: totalInterestEarned.toString(),
            decimals: this.tokenManager.getTokenDecimals(requiredEntries[0].token.address),
          },
        });
      }
    }
    return pooledCreditLineLenderCollectivePerToken;
  }

  private async transformToPooledCreditLineCollective(
    pooledCreditLineLenderCollectivePerTokenPerStrategy: PooledCreditLineLenderCollectivePerTokenPerStrategy[]
  ): Promise<PooledCreditLineCollective> {
    const prices = {};
    const allTokens: string[] = pooledCreditLineLenderCollectivePerTokenPerStrategy.map((a) => a.token.address);
    for (let index = 0; index < allTokens.length; index++) {
      prices[allTokens[index]] = await this.tokenManager.getPricePerAsset(allTokens[index]);
    }

    const totalAmountLent = pooledCreditLineLenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountLent.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    const totalAmountWithdrawn = pooledCreditLineLenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.amountWithdrawn.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    const totalInterestWithdrawn = pooledCreditLineLenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.interestWithdrawn.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    const totalSharesWithdrawn = pooledCreditLineLenderCollectivePerTokenPerStrategy.reduce(
      (total, current) => total.plus(new BigNumber(current.sharesWithdrawn.value.toString())),
      new BigNumber(0)
    );

    const totalInterestEarned = pooledCreditLineLenderCollectivePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.interestEarned.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    return {
      amountLent: { value: totalAmountLent.toString(), decimals: 0 },
      amountWithdrawn: { value: totalAmountWithdrawn.toString(), decimals: 0 },
      interestWithdrawn: { value: totalInterestWithdrawn.toString(), decimals: 0 },
      sharesWithdrawn: { value: totalSharesWithdrawn.toString(), decimals: 18 },
      interestEarned: { value: totalInterestEarned.toString(), decimals: 0 },
    };
  }

  private async transformToPooledCreditLineLenderCollectivePerTokenPerStrategy(
    data: any[]
  ): Promise<PooledCreditLineLenderCollectivePerTokenPerStrategy[]> {
    const all = data.map(async (a) => {
      const pclData = a.pooledCreditLines;
      const emulators = await this.getPclEmulators(pclData);
      const totalInterest = emulators.reduce(
        (total, pcl) => total.plus(pcl.getLenderPoolEmulator().getLenderInterest(a.user)),
        new BigNumber(0)
      );
      return {
        id: a.id,
        token: {
          address: a.token,
          name: this.tokenManager.getTokenName(a.token),
          logo: this.tokenManager.getLogo(a.token),
          pricePerAssetInUSD: await (await this.tokenManager.getPricePerAsset(a.token)).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.token),
        },
        strategy: {
          type: this.yieldApi.getStrategy(a.strategy),
          address: a.strategy,
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
        amountLent: { value: a.amountLent, decimals: this.tokenManager.getTokenDecimals(a.token) },
        amountWithdrawn: { value: a.amountWithdrawn, decimals: this.tokenManager.getTokenDecimals(a.token) },
        sharesWithdrawn: { value: a.sharesWithdrawn, decimals: 0 },
        interestWithdrawn: { value: a.interestWithdrawn, decimals: 0 },
        interestEarned: { value: totalInterest.toNumber(), decimals: this.tokenManager.getTokenDecimals(a.token) },
      };
    });
    return Promise.all(all);
  }

  private async getPclEmulators(result: any[]): Promise<PooledCreditLineEmulator[]> {
    const lpData = result.map((a) => a.lenderPool);
    const pclData = result;
    const prices = await this.refreshTokenData(pclData);
    const collateralPerStrategyToken = await this.refreshStrategyDataForPcl(pclData);

    const lendersPerPoolData = await getAllLendersPerPool(
      this.subgraphUrl,
      pclData.map((a) => a.id)
    );

    const allPoolIds = pclData.map((a) => a.id);
    const lenderPerPoolData: LenderPerPool[][] = [];

    for (let index = 0; index < allPoolIds.length; index++) {
      const poolId = allPoolIds[index];
      const requiredLendersPerPool = lendersPerPoolData.filter((a) => a.lenderPool.id == poolId);
      const requiredLenderPerPool: LenderPerPool[] = requiredLendersPerPool.map((a) => {
        return {
          lenderAddress: a.lenderAddress,
          amountLent: new BigNumber(a.amountLent),
          amountWithdrawn: new BigNumber(a.amountWithdrawn),
          sharesWithdrawn: new BigNumber(a.sharesWithdrawn),
          interestWithdrawn: new BigNumber(a.interestWithdrawn),
          lenderBalance: new BigNumber(a.lenderBalance),
          borrowerInterestSharesWithdrawn: new BigNumber(a.borrowerInterestSharesWithdrawn),
          yieldInterestWithdrawnShares: new BigNumber(a.yieldInterestWithdrawnShares),
        };
      });
      lenderPerPoolData.push(requiredLenderPerPool);
    }

    const emulatorResult = await this.transformToPooledCreditLineEmulator(
      pclData,
      lpData,
      lenderPerPoolData,
      prices,
      collateralPerStrategyToken
    );

    return emulatorResult;
  }
}
