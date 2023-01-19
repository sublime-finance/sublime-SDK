import { TokenManager } from '../tokenManager';
import { Signer } from 'ethers';
import { YieldAndStrategyApi } from '../api/yieldAndStrategy';
import { SublimeConfig } from '../types/sublimeConfig';
import { EmulatedHelper } from './Helper';
import { getPCLandLpTogether, getAllLendersPerPool } from '../queries';
import { PooledCreditLineEmulator } from '../emulator/PooledCreditLines';
import BigNumber from 'bignumber.js';
import { CreditLineStatus, LenderPerPool } from '../types/Types';

export class EmulatedPooledCreditLines extends EmulatedHelper {
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

  async getAllPooledCreditLines(count: number = 13, skip: number = 0): Promise<PooledCreditLineEmulator[]> {
    const lpData = await getPCLandLpTogether(this.subgraphUrl, count, skip);
    const pclData = lpData.map((a) => a.pooledCreditLine);
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

    return this.transformToPooledCreditLineEmulator(pclData, lpData, lenderPerPoolData, prices, collateralPerStrategyToken);
  }

  private convertToPooledCreditLineStatusEnum(stateInSubgraph: string): CreditLineStatus {
    //   enum PooledCreditLineStatus {
    //     NOT_CREATED,
    //     REQUESTED,
    //     ACTIVE,
    //     CLOSED,
    //     EXPIRED,
    //     LIQUIDATED,
    //     CANCELLED
    // }

    if (stateInSubgraph == 'NOT_CREATED') {
      return CreditLineStatus.NOT_CREATED;
    } else if (stateInSubgraph == 'REQUESTED') {
      return CreditLineStatus.REQUESTED;
    } else if (stateInSubgraph == 'ACTIVE') {
      return CreditLineStatus.ACTIVE;
    } else if (stateInSubgraph == 'CLOSED') {
      return CreditLineStatus.CLOSED;
    } else if (stateInSubgraph == 'EXPIRED') {
      return CreditLineStatus.EXPIRED;
    } else if (stateInSubgraph == 'LIQUIDATED') {
      return CreditLineStatus.LIQUIDATED;
    } else if (stateInSubgraph == 'CANCELLED') {
      return CreditLineStatus.CANCELLED;
    } else {
      return CreditLineStatus.NOT_CREATED;
    }
  }

  private transformToPooledCreditLineEmulator(
    pclData: any[],
    lenderPoolData: any[],
    lendersPerPool: LenderPerPool[][],
    prices: Record<string, BigNumber>,
    collateralPerStrategyToken: Record<string, Record<string, BigNumber>>
  ): PooledCreditLineEmulator[] {
    return pclData.map((a, index) => {
      const aLenderPool = lenderPoolData[index];
      const lenderPerPool = lendersPerPool[index];
      return new PooledCreditLineEmulator(
        {
          id: a.id,
          pooledCreditLineStatus: this.convertToPooledCreditLineStatusEnum(a.status),
          endsAt: new BigNumber(a.endsAt),
          principal: new BigNumber(a.principal),
          idealCollateralRatio: new BigNumber(a.idealCollateralRatio),
          totalInterestRepaid: new BigNumber(a.totalInterestRepaid),
          lastPrincipalUpdateTime: new BigNumber(a.lastPrincipalUpdateTime),
          gracePenaltyRate: new BigNumber(a.gracePenaltyRate),
          borrowRate: new BigNumber(a.borrowRate),
          interestAccruedTillLastPrincipalUpdate: new BigNumber(a.interestAccruedTillLastPrincipalUpdate),
          depositedCollateralInShares: new BigNumber(a.depositedCollateralInShares),
          borrowLimit: new BigNumber(a.borrowLimit),
          defaultsAt: new BigNumber(a.defaultsAt),
          borrowerAddress: a.borrowerAddress,
          borrowAsset: a.borrowAsset,
          collateralAsset: a.collateralAsset,
          createdAt: new BigNumber(a.createdAt),
          startsAt: new BigNumber(a.startsAt),
          lenderStrategy: a.lenderStrategy,
          collateralStrategy: a.collateralStrategy,
          totalLentAmount: new BigNumber(a.totalLentAmount),
          minBorrowAmount: new BigNumber(a.minBorrowAmount),
          lenderVerifier: a.lenderVerifier.id,
          borrowerVerifier: a.borrowerVerifier.id,
        },
        {
          collateralPerStrategyToken: new BigNumber(collateralPerStrategyToken[a.lenderStrategy][a.collateralAsset]),
          ratioOfPrices: new BigNumber(prices[a.borrowAsset]).dividedBy(prices[a.collateralAsset]),
          ratioOfPricesDecimals: 1,
        },
        {
          id: aLenderPool.id,
          sharesHeld: new BigNumber(aLenderPool.sharesHeld),
          borrowerInterestShares: new BigNumber(aLenderPool.borrowerInterestShares),
          borrowerInterestSharesWithdrawn: new BigNumber(aLenderPool.borrowerInterestShares),
          yieldInterestWithdrawnShares: new BigNumber(aLenderPool.yieldInterestWithdrawnShares),
          borrowLimit: new BigNumber(aLenderPool.borrowLimit),
          startTime: new BigNumber(aLenderPool.startTime),
          minBorrowAmount: new BigNumber(aLenderPool.minBorrowAmount),
        },
        lenderPerPool
      );
    });
  }
}

// {
//     id: '123',
//     borrowerAddress: '0x808ba745926e6cdef924c9bc0c758ec110474596',
//     borrowLimit: '100000000000000000000',
//     borrowRate: '120000000000000000',
//     idealCollateralRatio: '400000000000000000',
//     borrowAsset: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
//     collateralAsset: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
//     createdAt: '1653581648',
//     startsAt: '1654013648',
//     endsAt: '1661789648',
//     defaultsAt: '1661962448',
//     lenderStrategy: '0x924625da987a8f08f9ff3c370a23a1a1e41920cd',
//     collateralStrategy: '0x924625da987a8f08f9ff3c370a23a1a1e41920cd',
//     gracePenaltyRate: '120000000000000000',
//     status: 'CANCELLED',
//     principal: '0',
//     totalInterestRepaid: '0',
//     lastPrincipalUpdateTime: '0',
//     interestAccruedTillLastPrincipalUpdate: '0',
//     totalLentAmount: '0'
//   }
