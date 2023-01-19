import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import { DashboardOverview, StrategyType } from '../types/Types';
import BigNumber from 'bignumber.js';
import { VerificationAPI } from '../api/verification';

export class Base {
  /**
   * @description subgraph url for fetching the sublime data
   */
  protected subgraphUrl: string;

  /**
   * @description signer used to sign
   */
  protected signer: Signer;

  /**
   * @description instance of token manager class that caches and retreives token data
   */
  protected tokenManager: TokenManager;

  protected yieldApi: YieldAndStrategyApi;

  protected verificationApi: VerificationAPI;

  /**
   * @description sublime config. (Contains all addresses relevant to sublime ecosystem)
   */
  protected sublimeAddresses: SublimeConfig;

  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    this.subgraphUrl = url;
    this.signer = signer;
    this.tokenManager = tokenManager;

    this.sublimeAddresses = config;

    this.yieldApi = new YieldAndStrategyApi(this.signer, config, this.tokenManager);
    this.verificationApi = new VerificationAPI(this.signer, config);
  }

  /**
   * @param max
   * @description Function to generate a random decimals in range (0, max)
   */
  protected getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * @param address: address of the user to query
   * @description Return the dashboard view type for a user
   */
  async getDashboardOverview(address: string): Promise<DashboardOverview> {
    return {
      totalBorrowedAmount: { value: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2), decimals: 2 },
      totalLentAmount: { value: new BigNumber(this.getRandomInt(10000000)).div(100).toFixed(2), decimals: 2 },
      totalBorrowRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
      totalLentRate: new BigNumber(this.getRandomInt(1000)).div(100).toFixed(2),
    };
  }

  protected async refreshTokenData(data: any[]): Promise<Record<string, BigNumber>> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    const prices: Record<string, BigNumber> = {};
    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];

      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }
    return prices;
  }

  protected async refreshStrategyDataForPcl(data: any[]): Promise<Record<string, Record<string, BigNumber>>> {
    const allStrategyAndTokenPairs = data.map((a) => {
      return { strategy: a.lenderStrategy, collateralAsset: a.collateralAsset, id: `${a.lenderStrategy}-${a.collateralAsset}` };
    });

    const allIds = allStrategyAndTokenPairs.map((a) => a.id).filter((value, index, self) => self.indexOf(value) === index);
    const uniquePairs = allIds.map((a) => {
      return { strategy: a.split('-')[0], collateralAsset: a.split('-')[1] };
    });

    const collateralPerStrategyToken: Record<string, Record<string, BigNumber>> = {};
    const valueToCheck = new BigNumber(10).pow(18);
    for (let index = 0; index < uniquePairs.length; index++) {
      const element = uniquePairs[index];
      const strategy = this.yieldApi.getStrategy(element.strategy);

      const tokensForShares = await this.getTokensForShares(strategy, element.collateralAsset, valueToCheck);
      if (!collateralPerStrategyToken[element.strategy]) {
        collateralPerStrategyToken[element.strategy] = {};
      }
      collateralPerStrategyToken[element.strategy][element.collateralAsset] = tokensForShares.div(valueToCheck);
    }

    return collateralPerStrategyToken;
  }

  protected async refreshStrategyData(data: any[]): Promise<Record<string, Record<string, BigNumber>>> {
    const allStrategyAndTokenPairs = data.map((a) => {
      return {
        strategy: a.collateralAssetStrategy,
        collateralAsset: a.collateralAsset,
        id: `${a.collateralAssetStrategy}-${a.collateralAsset}`,
      };
    });

    const allIds = allStrategyAndTokenPairs.map((a) => a.id).filter((value, index, self) => self.indexOf(value) === index);
    const uniquePairs = allIds.map((a) => {
      return { strategy: a.split('-')[0], collateralAsset: a.split('-')[1] };
    });

    const collateralPerStrategyToken: Record<string, Record<string, BigNumber>> = {};
    const valueToCheck = new BigNumber(10).pow(18);
    for (let index = 0; index < uniquePairs.length; index++) {
      const element = uniquePairs[index];
      const strategy = this.yieldApi.getStrategy(element.strategy);

      const tokensForShares = await this.getTokensForShares(strategy, element.collateralAsset, valueToCheck);
      if (!collateralPerStrategyToken[element.strategy]) {
        collateralPerStrategyToken[element.strategy] = {};
      }
      collateralPerStrategyToken[element.strategy][element.collateralAsset] = tokensForShares.div(valueToCheck);
    }

    return collateralPerStrategyToken;
  }

  protected async getTokensForShares(strategy: StrategyType, collateralAsset: string, amount: BigNumber): Promise<BigNumber> {
    if (strategy == StrategyType.NoYield) return new BigNumber(amount);

    try {
      const tokensInCompoundYield = await this.yieldApi.getTokensForShares(strategy, collateralAsset, amount);
      return tokensInCompoundYield;
    } catch (ex) {
      return new BigNumber(0);
    }
  }
}
