import { Balance, Asset, Strategy } from '../Types';

export interface InterestDue {
  id: string;
  interest: Balance;
}

export interface InterestDuePerStrategy extends InterestDue {
  strategy: Strategy;
}

export interface InterestDuePerToken extends InterestDue {
  token: Asset;
}

export interface InterestDuePerTokenPerStrategy extends InterestDue {
  token: Asset;
  strategy: Strategy;
}

export interface InterestDueDetails {
  interestDue: InterestDue;
  interestDuePerStrategy: InterestDuePerStrategy[];
  interestDuePerToken: InterestDuePerToken[];
  interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[];
}
