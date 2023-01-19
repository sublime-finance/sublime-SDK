import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import BigNumber from 'bignumber.js';
import { TokenManager } from '../tokenManager';
import { StrategyType } from '../types/Types';

export class EmulatedHelper {
  private tokenManager: TokenManager;
  private yieldApi: YieldAndStrategyApi;

  constructor(tokenManager: TokenManager, yieldApi: YieldAndStrategyApi) {
    this.tokenManager = tokenManager;
    this.yieldApi = yieldApi;
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
      return { strategy: a.strategy, collateralAsset: a.collateralAsset, id: `${a.strategy}-${a.collateralAsset}` };
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
      return await this.yieldApi.getTokensForShares(strategy, collateralAsset, amount);
    } catch (ex) {
      return new BigNumber(0);
    }
  }

  protected getRandomInt(max): BigNumber {
    return new BigNumber(Math.floor(Math.random() * max));
  }
}
