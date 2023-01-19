import { Balance, Asset, Strategy } from '../Types';

export interface LenderContributionToPooledCreditLines {
  id?: string;
  amountLent: Balance;
  amountWithdrawn: Balance;
  sharesWithdrawn: Balance;
  interestWithdrawn: Balance;
}

export interface LenderCollectivePerTokenPerStrategy extends LenderCollective {
  token: Asset;
  strategy: Strategy;
}

export interface LenderCollectivePerToken extends LenderCollective {
  token: Asset;
}

export interface LenderCollectivePerStrategy extends LenderCollective {
  strategy: Strategy;
  // amountLent is in USD
}

export interface LenderCollective {
  id: string;
  // amountLent is in USD
  amountLent: Balance;
  interestReceived: Balance;
}

export interface LenderCollectiveData {
  lenderCollective: LenderCollective;
  lenderCollectivePerStrategy: LenderCollectivePerStrategy[];
  lenderCollectivePerToken: LenderCollectivePerToken[];
  lenderCollectivePerTokenPerStrategy: LenderCollectivePerTokenPerStrategy[];
}

export interface BorrowerCollectivePerTokenPerStrategy extends BorrowerCollective {
  token: Asset;
  strategy: Strategy;
}

export interface BorrowerCollectivePerToken extends BorrowerCollective {
  token: Asset;
}

export interface BorrowerCollectivePerStrategy extends BorrowerCollective {
  strategy: Strategy;
  // amountBorrowed is in USD
}

export interface BorrowerCollective {
  id: string;
  // amountBorrowed is in USD
  amountBorrowed: Balance;
  amountRepaid: Balance;
}

export interface BorrowerCollectiveData {
  borrowerCollective: BorrowerCollective;
  borrowerCollectivePerStrategy: BorrowerCollectivePerStrategy[];
  borrowerCollectivePerToken: BorrowerCollectivePerToken[];
  borrowerCollectivePerTokenPerStrategy: BorrowerCollectivePerTokenPerStrategy[];
}
