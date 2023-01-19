import BigNumber from 'bignumber.js';
import { CreditLineStatus } from '../../types/Types';

export interface PooledCreditLineState {
  id: string;
  pooledCreditLineStatus: CreditLineStatus;
  endsAt: BigNumber;
  defaultsAt: BigNumber;
  principal: BigNumber;
  idealCollateralRatio: BigNumber;
  totalInterestRepaid: BigNumber;
  lastPrincipalUpdateTime: BigNumber;
  gracePenaltyRate: BigNumber;
  borrowRate: BigNumber;
  interestAccruedTillLastPrincipalUpdate: BigNumber;
  depositedCollateralInShares: BigNumber;
  borrowLimit: BigNumber;
  borrowerAddress: string;
  borrowAsset: string;
  collateralAsset: string;
  createdAt: BigNumber;
  startsAt: BigNumber;
  lenderStrategy: string;
  collateralStrategy: string;
  totalLentAmount: BigNumber;
  minBorrowAmount: BigNumber;
  lenderVerifier: string;
  borrowerVerifier: string;
}

export interface PooledCreditLineExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}
