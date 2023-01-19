import { Balance, Asset } from '../Types';

export interface BorrowerAvailableCredit {
  amount: Balance;
  borrowerAvailableCreditPerToken: BorrowerAvailableCreditPerToken[];
}

export interface BorrowerAvailableCreditPerToken {
  amount: Balance;
  token: Asset;
}

export interface LenderCreditLimitPerToken extends BorrowerAvailableCreditPerToken {}

export interface LenderCreditLimit {
  amount: Balance;
  lenderCreditLimitPerToken: BorrowerAvailableCreditPerToken[];
}
