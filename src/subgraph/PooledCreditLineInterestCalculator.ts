import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { CreditLineInterestCalculator } from './CreditLineInterestCalculator';

import { getPooledCreditLinesOfBorrowerWithState } from '../queries/getPooledCreditLines';

import {
  CreditLineStatus,
  InterestDueDetails,
  InterestDuePerStrategy,
  InterestDuePerToken,
  InterestDuePerTokenPerStrategy,
  InterestDue,
} from '../types/Types';

import BigNumber from 'bignumber.js';

const exponent = new BigNumber(10).pow(18);
const oneYear = new BigNumber(365).multipliedBy(86400);

export class PooledCreditLineInterestCalculator extends CreditLineInterestCalculator {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getBorrowerInterestDueForAllPooledCreditLines(borrower: string): Promise<InterestDueDetails> {
    const result: any[] = [];
    const count = 999;
    let skip = 0;
    for (;;) {
      const _temp = await getPooledCreditLinesOfBorrowerWithState(
        this.subgraphUrl,
        borrower,
        count,
        skip,
        [CreditLineStatus.ACTIVE, CreditLineStatus.REQUESTED].map((a) => a.toString())
      );
      skip += count;
      if (_temp.length == 0) {
        break;
      } else {
        result.push(..._temp);
      }
    }

    return this.transformToInterestDueDetailsForPcl(result);
  }

  private async transformToInterestDueDetailsForPcl(data: any[]): Promise<InterestDueDetails> {
    const borrowTokens = data.map((a) => a.borrowAsset);
    const collateralTokens = data.map((a) => a.collateralAsset);

    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, self) => self.indexOf(value) === index);

    const prices: Record<string, BigNumber> = {};

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
      prices[element] = await this.tokenManager.getPricePerAsset(element);
    }

    const interestDuePerTokenPerStrategy: InterestDuePerTokenPerStrategy[] = await this.transformToInterestDuePerTokenPerStrategyForPcl(
      data,
      prices
    );
    const interestDuePerStrategy: InterestDuePerStrategy[] = await this.transformToInterestDuePerStrategyForPcl(
      interestDuePerTokenPerStrategy,
      prices
    );
    const interestDuePerToken: InterestDuePerToken[] = await this.transformToInterestDuePerTokenPcl(interestDuePerTokenPerStrategy);
    const interestDue = await this.transformToInterestDueForPcl(interestDuePerTokenPerStrategy, prices);

    return { interestDue, interestDuePerStrategy, interestDuePerToken, interestDuePerTokenPerStrategy };
  }

  private async transformToInterestDuePerStrategyForPcl(
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

  private async transformToInterestDuePerTokenPcl(
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

  private async transformToInterestDueForPcl(
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

  private async transformToInterestDuePerTokenPerStrategyForPcl(
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
          value: this.calculateInterestForPcl(a.principal, a.borrowRate, a.lastPrincipalUpdateTime).toString(),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
      };
    });
  }

  private calculateInterestForPcl(principal: string, borrowRate: string, lastPrincipalUpdateTime: string): BigNumber {
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
