import { Provider, TransactionReceipt } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { SublimeConfig } from './types/sublimeConfig';

import { PoolApi } from './api/pool';
import { CreditLineApi } from './api/creditLines';
import { YieldAndStrategyApi } from './api/yieldAndStrategy';
import { SavingsAccountApi } from './api/savingsAccount';
import { RepaymentApi } from './api/repayments';
import { VerificationAPI } from './api/verification';
import { TokenApi } from './api/tokenApi';
import { PriceOracleApi } from './api/priceOracle';

import { CreditLineEthUtils } from './api/utils/creditLineEthUtils';
import { PoolEthUtils } from './api/utils/poolEthUtils';
import { SavingAccountsEthUtils } from './api/utils/savingsAccountEthUtils';
import { WrappedEth } from './api/utils/wrappedEth';
import { PooledCreditLineApi } from './api/pooledCreditLines';
import { TokenManager } from './tokenManager';

import { ethers } from 'ethers';
import { ERC1155 } from './api/erc1155';

/**
 * @class SublimeConnector
 */
export class SublimeConnector {
  private provider: Provider;
  private signer: Signer;
  private config: SublimeConfig;
  private tokenManager: TokenManager;

  constructor(provider: Provider, signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    this.provider = provider;
    this.signer = signer;
    this.config = config;
    this.tokenManager = tokenManager;
  }

  PoolApi(): PoolApi {
    return new PoolApi(this.signer, this.config, this.tokenManager);
  }

  CreditLinesApi(): CreditLineApi {
    return new CreditLineApi(this.signer, this.config, this.tokenManager);
  }

  SavingsAccountApi(): SavingsAccountApi {
    return new SavingsAccountApi(this.signer, this.config, this.tokenManager);
  }

  /**
   *
   * @returns The current address of the signer
   */
  Address(): Promise<string> {
    return this.signer.getAddress();
  }

  RepaymentApi(): RepaymentApi {
    return new RepaymentApi(this.signer, this.config, this.tokenManager);
  }

  VerificationApi(): VerificationAPI {
    return new VerificationAPI(this.signer, this.config);
  }

  YieldAndStrategyApi(): YieldAndStrategyApi {
    return new YieldAndStrategyApi(this.signer, this.config, this.tokenManager);
  }

  TokenApi(tokenAddress: string): TokenApi {
    return new TokenApi(this.signer, tokenAddress, this.tokenManager);
  }

  PriceOracleApi(): PriceOracleApi {
    return new PriceOracleApi(this.signer, this.config);
  }

  PooledCreditlineApi(): PooledCreditLineApi {
    return new PooledCreditLineApi(this.signer, this.config, this.tokenManager);
  }

  CreditLineEthUtils(): CreditLineEthUtils {
    return new CreditLineEthUtils(this.signer, this.config, this.tokenManager);
  }

  PoolEthUtils(): PoolEthUtils {
    return new PoolEthUtils(this.signer, this.config, this.tokenManager);
  }

  SavingAccountsEthUtils(): SavingAccountsEthUtils {
    return new SavingAccountsEthUtils(this.signer, this.config, this.tokenManager);
  }

  WrappedEth(): WrappedEth {
    return new WrappedEth(this.signer);
  }

  ERC1155(): ERC1155 {
    return new ERC1155(this.signer, this.config);
  }

  public async getChainId(): Promise<number> {
    return this.signer.getChainId();
  }

  /**
   *
   * @param address
   * @returns balance in ethers (decimals included)
   */
  public async getBalance(address: string): Promise<string> {
    let balance: ethers.BigNumber = ethers.BigNumber.from(0);
    try {
      balance = await this.provider.getBalance(address);
    } catch (ex) {}
    return ethers.utils.formatEther(balance);
  }

  /**
   *
   * @param transactionHash
   * @param confirmations
   * @param timeout
   * @returns transaction receipt after waiting for the specified number oif blocks
   */
  public async waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<TransactionReceipt> {
    return await this.provider.waitForTransaction(transactionHash, confirmations, timeout);
  }
}
