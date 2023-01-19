import { Balance, Asset, Strategy } from '../Types';

export interface PooledCreditLineBorrowerData {
  pooledCreditLineBorrowerCollective: PooledCreditLineBorrowerCollective;
  pooledCreditLineBorrowerCollectivePerStrategy: PooledCreditLineBorrowerCollectivePerStrategy[];
  pooledCreditLineBorrowerCollectivePerToken: PooledCreditLineBorrowerCollectivePerToken[];
  pooledCreditLineBorrowerCollectivePerTokenPerStrategy: PooledCreditLineBorrowerCollectivePerTokenPerStrategy[];
}

export interface PooledCreditLineBorrowerCollective {
  collateralDeposited: Balance;
  amountRepaid: Balance;
  amountBorrowed: Balance;
}

export interface PooledCreditLineBorrowerCollectivePerTokenPerStrategy extends PooledCreditLineBorrowerCollective {
  id: string;
  token: Asset;
  strategy: Strategy;
}

export interface PooledCreditLineBorrowerCollectivePerToken extends PooledCreditLineBorrowerCollective {
  id: string;
  token: Asset;
}

export interface PooledCreditLineBorrowerCollectivePerStrategy extends PooledCreditLineBorrowerCollective {
  id: string;
  strategy: Strategy;
}

export interface PooledCreditLineCollective {
  amountLent: Balance;
  amountWithdrawn: Balance;
  sharesWithdrawn: Balance;
  interestWithdrawn: Balance;
  interestEarned: Balance;
}

export interface PooledCreditLineLenderCollectivePerTokenPerStrategy extends PooledCreditLineCollective {
  id: string;
  token: Asset;
  strategy: Strategy;
}

export interface PooledCreditLineLenderCollectivePerToken extends PooledCreditLineCollective {
  id: string;
  token: Asset;
}

export interface PooledCreditLineLenderCollectivePerStrategy extends PooledCreditLineCollective {
  id: string;
  strategy: Strategy;
}

export interface PooledCreditLineLenderData {
  pooledCreditLineCollective: PooledCreditLineCollective;
  pooledCreditLineLenderCollectivePerToken: PooledCreditLineLenderCollectivePerToken[];
  pooledCreditLineLenderCollectivePerStrategy: PooledCreditLineLenderCollectivePerStrategy[];
  pooledCreditLineLenderCollectivePerTokenPerStrategy: PooledCreditLineLenderCollectivePerTokenPerStrategy[];
}
