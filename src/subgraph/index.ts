import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { PooledCreditLineInterestCalculator } from './PooledCreditLineInterestCalculator';

export class SublimeSubgraph extends PooledCreditLineInterestCalculator {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }
}
