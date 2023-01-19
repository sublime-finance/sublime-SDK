import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { PooledCreditLinesLenderOverview } from './PooledCreditLinesLenderOverview';

import { getConfirmedCreditLinesOfBorrower } from '../queries';

import {
  InterestDueDetails,
  InterestDuePerStrategy,
  InterestDuePerToken,
  InterestDuePerTokenPerStrategy,
  InterestDue,
} from '../types/Types';

import BigNumber from 'bignumber.js';

const exponent = new BigNumber(10).pow(18);
const oneYear = new BigNumber(365).multipliedBy(86400);

export class CreditLineInterestCalculator extends PooledCreditLinesLenderOverview {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getBorrowerInterestDueForAllCreditLines(borrower: string): Promise<InterestDueDetails> {
    const result: any[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      const _temp = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }

    return this.transformToInterestDueDetail(result);
  }

  async getBorrowerInterestDueForSpecificCreditLines(borrower: string, creditLines: string[]): Promise<InterestDueDetails> {
    const result: any[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      const _temp = await getConfirmedCreditLinesOfBorrower(this.subgraphUrl, borrower, count, skip);
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }

    const relevant = result.filter((a) => creditLines.includes(a.id));
    return this.transformToInterestDueDetail(relevant);
  }

  private async transformToInterestDueDetail(data: any[]): Promise<InterestDueDetails> {
    const borrowTokens = data.map((a) => a.borrowAsset);
    const collateralTokens = data.map((a) => a.collateralAsset);

    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, self) => self.indexOf(value) === index);

    const prices: Record<string, BigNumber> = {};

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    const interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[] = await this.transformToInterestDuePerTokenPerStrategy(
      data,
      prices
    );
    const interestDuePerStrategy: InterestDuePerStrategy[] = await this.transformToInterestDuePerStrategy(
      interestDuePerTokenPerStrategy,
      prices
    );
    const interestDuePerToken: InterestDuePerToken[] = await this.transformToInterestDuePerToken(interestDuePerTokenPerStrategy);
    const interestDue = await this.transformToInterestDue(interestDuePerTokenPerStrategy, prices);

    return { interestDue, interestDuePerStrategy, interestDuePerToken, interestDuePerTokenPerStrategy };
  }

  private async transformToInterestDuePerStrategy(
    interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[],
    prices: Record<string, BigNumber>
  ): Promise<InterestDuePerStrategy[]> {
    const interestDuePerStrategy: InterestDuePerStrategy[] = [];
    const strategies = interestDuePerTokenPerStrategy
      .map((a) => a.strategy.address)
      .filter((value, index, self) => self.indexOf(value) === index);

    for (let index = 0; index < strategies.length; index++) {
      const element = strategies[index];
      const requiredElements = interestDuePerTokenPerStrategy.filter((a) => a.strategy.address === element);
      if (requiredElements.length > 0) {
        const totalInterest = requiredElements.reduce(
          (total, current) =>
            total.plus(
              new BigNumber(current.interest.value.toString())
                .multipliedBy(prices[current.token.address])
                .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
            ),
          new BigNumber(0)
        );
        interestDuePerStrategy.push({
          id: 'to-do',
          interest: { value: totalInterest.toString(), decimals: 0 },
          strategy: requiredElements[0].strategy,
        });
      }
    }
    return interestDuePerStrategy;
  }

  private async transformToInterestDuePerToken(
    interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[]
  ): Promise<InterestDuePerToken[]> {
    const interestDuePerToken: InterestDuePerToken[] = [];

    const uniqueTokens = interestDuePerTokenPerStrategy
      .map((a) => a.token.address)
      .filter((value, index, self) => self.indexOf(value) === index);
    for (let index = 0; index < uniqueTokens.length; index++) {
      const element = uniqueTokens[index];
      const requiredElements = interestDuePerTokenPerStrategy.filter((a) => a.token.address === element);
      if (requiredElements.length > 0) {
        const totalInterest = requiredElements.reduce((total, current) => total.plus(current.interest.value.toString()), new BigNumber(0));
        interestDuePerToken.push({
          interest: { value: totalInterest.toString(), decimals: this.tokenManager.getTokenDecimals(requiredElements[0].token.address) },
          token: requiredElements[0].token,
          id: 'to-do',
        });
      }
    }

    return interestDuePerToken;
  }

  private async transformToInterestDue(
    interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[],
    prices: Record<string, BigNumber>
  ): Promise<InterestDue> {
    const totalInterest = interestDuePerTokenPerStrategy.reduce(
      (total, current) =>
        total.plus(
          new BigNumber(current.interest.value.toString())
            .multipliedBy(prices[current.token.address])
            .dividedBy(new BigNumber(10).pow(this.tokenManager.getTokenDecimals(current.token.address)))
        ),
      new BigNumber(0)
    );

    return { id: 'to-do', interest: { value: totalInterest.toString(), decimals: 0 } };
  }

  private async transformToInterestDuePerTokenPerStrategy(
    data: any[],
    prices: Record<string, BigNumber>
  ): Promise<InterestDuePerTokenPerStrategy[]> {
    return data.map((a) => {
      return {
        id: a.id,
        token: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          logo: this.tokenManager.getLogo(a.borrowAsset),
          pricePerAssetInUSD: prices[a.borrowAsset].toString(),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        strategy: {
          address: a.strategy,
          type: this.yieldApi.getStrategy(a.strategy),
          displayName: this.yieldApi.getStrategyDisplayName(a.strategy),
          logo: this.yieldApi.getStrategyLogo(a.strategy),
        },
        interest: {
          value: this.calculateInterest(a.principal, a.borrowRate, a.lastPrincipalUpdateTime).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
      };
    });
  }

  private calculateInterest(principal: string, borrowRate: string, lastPrincipalUpdateTime: string): BigNumber {
    const now = new BigNumber(new Date().valueOf()).div(1000);
    if (now.gt(lastPrincipalUpdateTime)) {
      return new BigNumber(principal)
        .multipliedBy(now.minus(lastPrincipalUpdateTime))
        .multipliedBy(borrowRate)
        .dividedBy(exponent)
        .dividedBy(oneYear);
    } else {
      return new BigNumber(0);
    }
  }
}

// {
//     id: '39',
//     status: 'ACTIVE',
//     lender: '0xe33896558027811799165c5a85b7c9c318a0e7c4',
//     createdAt: '1652613432',
//     strategy: '0xf469c04fb301ab0dc5ba425e11645ad6b8c0be64',
//     totalInterestRepaid: '0',
//     lenderWalletDetails: { wallet: null },
//     borrower: '0x808ba745926e6cdef924c9bc0c758ec110474596',
//     borrowerWalletDetails: { wallet: null },
//     requestByLender: false,
//     principal: '9999999999734520925',
//     collateralAsset: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
//     borrowLimit: '20000000000000000000',
//     borrowRate: '2628000000000000000000',
//     idealCollateralRatio: '0',
//     borrowAsset: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
//     autoLiquidation: true,
//     lastPrincipalUpdateTime: '1652615400'
//   }
