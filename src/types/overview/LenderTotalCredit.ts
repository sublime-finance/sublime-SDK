import { Balance, Asset, Strategy } from '../Types';

export interface LenderTotalCredit {
  amount: Balance;
}

export interface LenderTotalCreditPerStrategy {
  amount: Balance;
  strategy: Strategy;
}

export interface LenderTotalCreditPerToken {
  amount: Balance;
  token: Asset;
}

export interface LenderTotalCreditCommited {
  lenderTotalCreditCommittedPerToken: LenderTotalCreditPerToken[];
  lenderTotalCreditPerStrategy: LenderTotalCreditPerStrategy[];
  lenderTotalCredit: LenderTotalCredit;
}

export interface InterestCollectedByLender {
  amount: Balance;
  interestCollectedByLenderPerToken: InterestCollectedByLenderPerToken[];
}

export interface InterestCollectedByLenderPerToken {
  amount: Balance;
  token: Asset;
}
