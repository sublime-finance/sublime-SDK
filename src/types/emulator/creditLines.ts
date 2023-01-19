import BigNumber from 'bignumber.js';
import { CreditLineStatus } from '../../types/Types';

export interface CreditLineState {
  id: string;
  collateralShareInStrategy: BigNumber;
  principal: BigNumber;
  lastPrincipalUpdateTime: BigNumber;
  borrowRate: BigNumber;
  interestAccruedTillLastPrincipalUpdate: BigNumber;
  totalInterestRepaid: BigNumber;
  idealCollateralRatio: BigNumber;
  creditLineStatus: CreditLineStatus;
  borrowLimit: BigNumber;
  createdAt: BigNumber;
  borrowAsset: string;
  collateralAsset: string;
  autoLiquidation: boolean;
  lender: string;
  borrower: string;
  requestByLender: boolean;
  borrowAssetStrategy: string;
  collateralAssetStrategy: string;
}

export interface CreditLineGlobals {
  liquidatorRewardFraction: BigNumber;
}

export interface CreditLineExternalData {
  collateralPerStrategyToken: BigNumber;
  ratioOfPrices: BigNumber;
  ratioOfPricesDecimals: number;
}
