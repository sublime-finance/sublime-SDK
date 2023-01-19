import { getAllCreditLinesFromSubgraph } from '../queries';
import { CreditLineEmulator } from '../emulator/CreditLines';
import { TokenManager } from '../tokenManager';
import { Signer } from 'ethers';
import BigNumber from 'bignumber.js';
import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import { SublimeConfig } from '../types/sublimeConfig';
import { EmulatedHelper } from './Helper';
import { CreditLineStatus } from 'types/Types';

export class EmulatedCreditLines extends EmulatedHelper {
  private subgraphUrl: string;

  constructor(subgraphUrl: string, priceSubgraphUrl: string, signer: Signer, config: SublimeConfig, tokenManager?: TokenManager) {
    let _tokenManager: TokenManager;
    let yieldApi: YieldAndStrategyApi;
    yieldApi = new YieldAndStrategyApi(signer, config, tokenManager);
    if (tokenManager) {
      _tokenManager = tokenManager;
    } else {
      _tokenManager = new TokenManager(signer, priceSubgraphUrl);
    }
    super(_tokenManager, yieldApi);
    this.subgraphUrl = subgraphUrl;
  }

  async getAllCreditLines(count: number = 13, skip: number = 0): Promise<CreditLineEmulator[]> {
    const result = await getAllCreditLinesFromSubgraph(this.subgraphUrl, count, skip);
    const prices = await this.refreshTokenData(result);
    const collateralPerStrategyToken = await this.refreshStrategyData(result);
    return this.transformToCreditLineEmulator(result, prices, collateralPerStrategyToken);
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
      return CreditLineStatus.NOT_CREATED;
    }
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
          collateralShareInStrategy: new BigNumber(1000),
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
          ratioOfPrices: new BigNumber(prices[a.borrowAsset]).dividedBy(prices[a.collateralAsset]),
          ratioOfPricesDecimals: 1,
        },
        { liquidatorRewardFraction: new BigNumber(10).pow(16) }
      );
    });
  }
}

// id: '52',
// status: 'REQUESTED',
// lender: '0x808ba745926e6cdef924c9bc0c758ec110474596',
// strategy: '0xf469c04fb301ab0dc5ba425e11645ad6b8c0be64',
// totalInterestRepaid: '0',
// lenderWalletDetails: { wallet: [Object] },
// borrower: '0x3a574461fd1279fcf96043bcf416c53b7e8dcec0',
// borrowerWalletDetails: { wallet: [Object] },
// requestByLender: false,
// principal: '0',
// collateralAsset: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
// borrowLimit: '111000000000000000000',
// borrowRate: '10000000000000000',
// idealCollateralRatio: '10000000000000000',
// borrowAsset: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
// autoLiquidation: true,
// lastPrincipalUpdateTime: '0',
// createdAt: '1653654940'
