import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { SavingsAccount } from '../wrappers/SavingsAccount';
import { SavingsAccount__factory } from '../wrappers/factories/SavingsAccount__factory';
import { BigNumber } from 'bignumber.js';

import { IYield } from '../wrappers/IYield';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { ERC20 as ERC20Detailed, ERC20__factory as ERC20Detailed__factory } from '../wrappers';

import { TokenManager } from '../tokenManager';
import { Asset, StrategyType, Options as Overrides, Balance } from '../types/Types';
import { SavingAccountsEthUtils } from './utils/savingsAccountEthUtils';
import { YieldAndStrategyApi } from './yieldAndStrategy';

/**
 * @class SavingsAccountApi
 */
export class SavingsAccountApi {
  /**
   * @description Signer Object
   */
  private signer: Signer;

  /**
   * @description Instance of savings account contract
   */
  private savingsAccount: SavingsAccount;

  /**
   * @description All sublime addresses
   */
  private config: SublimeConfig;

  /**
   * @description Instance to fetch and update token metadata
   */
  private tokenManager: TokenManager;

  /**
   * @description Yield APIs
   */
  private yieldAndStrategyApi: YieldAndStrategyApi;

  constructor(signer: Signer, config: SublimeConfig, tokenManager) {
    this.signer = signer;
    this.config = config;
    this.savingsAccount = new SavingsAccount__factory(signer).attach(config.savingsAccountContractAddress);
    this.yieldAndStrategyApi = new YieldAndStrategyApi(signer, config, tokenManager);
    this.tokenManager = tokenManager;
  }

  /**
   * @description The returned objet helps in making direct ETH deposits to the savings Account
   * @returns
   */
  SavingAccountsEthUtils(): SavingAccountsEthUtils {
    return new SavingAccountsEthUtils(this.signer, this.config, this.tokenManager);
  }

  /**
   * @description Approve tokens in your wallet for depositing to a strategy
   * @param amount
   * @param asset
   * @param strategy
   * @returns
   */
  public async approveTokenForSavingsAccountDeposit(
    amount: string,
    asset: string,
    strategy: StrategyType,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress: string = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const borrowDecimal = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    const tokenContract: ERC20Detailed = new ERC20Detailed__factory(this.signer).attach(asset);
    return tokenContract.approve(_strategyContractAddress, _amount.multipliedBy(new BigNumber(10).pow(borrowDecimal)).toFixed(0), {
      ...options,
    });
  }

  /**
   * @description: Deposit amount to strategy
   * @param amount
   * @param asset
   * @param strategy
   * @param to
   * @returns Contract Transaction
   */
  public async deposit(
    amount: string,
    asset: string,
    strategy: StrategyType,
    to: string,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress: string = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const assetDecimals = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.deposit(
      asset,
      _strategyContractAddress,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(assetDecimals)).toFixed(0),
      { ...options }
    );
  }

  /**
   * @description Switch amount from one strategy to another
   * @param currentStrategy
   * @param newStrategy
   * @param asset
   * @param amount
   * @returns Contract Transaction
   */
  public async switchStrategy(
    currentStrategy: StrategyType,
    newStrategy: StrategyType,
    asset: string,
    amount: string,
    options?: Overrides
  ): Promise<ContractTransaction> {
    if (currentStrategy === newStrategy) {
      throw new Error('Current Strategy and new strategy can not be same');
    }

    const _currentStrategyAddress = this.getStrategyAddress(currentStrategy);
    const _newStrategyAddress = this.getStrategyAddress(newStrategy);

    await this.tokenManager.updateTokenDecimals(asset);
    const decimal = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.switchStrategy(
      _currentStrategyAddress,
      _newStrategyAddress,
      asset,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      { ...options }
    );
  }

  /**
   * @description Withdraw amount from a given strategy
   * @param amount
   * @param token
   * @param strategy
   * @param to
   * @param withdrawShares: if set to true, the "to" address will receive the shares token directly.
   * @returns Contract Transaction
   */
  public async withdraw(
    token: string,
    strategy: StrategyType,
    to: string,
    amount: string,
    withdrawShares: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimal = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.withdraw(
      token,
      _strategyContractAddress,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      withdrawShares,
      { ...options }
    );
  }

  /**
   * @description Withdraw amount from another address i.e "from" address here
   * @param amount
   * @param token
   * @param strategy
   * @param from: address from which you wish to withdraw tokens
   * @param to
   * @param withdrawShares: if set to to true, the "to" address received shares directly
   * @returns Contract Transaction
   */
  public async withdrawFrom(
    amount: string,
    token: string,
    strategy: StrategyType,
    from: string,
    to: string,
    withdrawShares: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimal = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('_amount should be a valid number');
    }

    return this.savingsAccount.withdrawFrom(
      token,
      _strategyContractAddress,
      from,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(decimal)).toFixed(0),
      withdrawShares,
      { ...options }
    );
  }

  /**
   * @param token
   * @param strategy
   * @param to
   * @param numberOfShares
   * @param receiveShares
   * @param options
   * @returns
   */
  public async withdrawShares(
    token: string,
    strategy: StrategyType,
    to: string,
    numberOfShares: string,
    receiveShares: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const strategyAddress = this.getStrategyAddress(strategy);
    return this.savingsAccount.withdrawShares(token, strategyAddress, to, numberOfShares, receiveShares, { ...options });
  }

  /**
   *
   * @param token
   * @param strategy
   * @param from
   * @param to
   * @param numberOfShares
   * @param receiveShares
   * @param options
   * @returns
   */
  public async withdrawSharesFrom(
    token: string,
    strategy: StrategyType,
    from: string,
    to: string,
    numberOfShares: string,
    receiveShares: boolean,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const strategyAddress = this.getStrategyAddress(strategy);
    return this.savingsAccount.withdrawSharesFrom(token, strategyAddress, from, to, numberOfShares, receiveShares, { ...options });
  }

  /**
   * @description Withdraw a particular tokens from all strategies
   * @param asset / token address
   * @returns Contract Transaction
   */
  public async withdrawAll(asset: string, options?: Overrides): Promise<ContractTransaction> {
    return this.savingsAccount['withdrawAll(address)'](asset, { ...options });
  }

  /**
   * @description withdraw all tokens from a strategy
   * @param asset asset to withdraw
   * @param strategy strategy from which the tokens should be withdrawn
   * @param options
   * @returns Contract Transaction
   */
  public async withdrawAllFromAStrategy(asset: string, strategy: StrategyType, options?: Overrides): Promise<ContractTransaction> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);
    return this.savingsAccount['withdrawAll(address,address)'](asset, _strategyContractAddress, { ...options });
  }

  /**
   * @description Approve tokens in the savings to be used to other address
   * @param amount
   * @param token
   * @param to : Address to which you want to approve
   * @returns Contract Transaction
   */
  public async approve(token: string, to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), { ...options });
  }

  public async approveMax(token: string, to: string, options?: Overrides): Promise<ContractTransaction> {
    const max = new BigNumber(2).pow(256).minus(1);
    return this.savingsAccount.approve(token, to, max.toFixed(), { ...options });
  }

  /**
   * @description Increase the amount of tokens that can be used by "to" address
   * @param token
   * @param to
   * @param amount
   * @returns Contract Transaction
   */
  public async increaseAllowance(token: string, to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.increaseAllowance(_amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), token, to, {
      ...options,
    });
  }

  /**
   * @description Increase the amount of tokens that can be used by "to" address
   * @param token
   * @param to
   * @param amount
   * @returns Contract Transaction
   */
  public async decreaseAllowance(token: string, to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.decreaseAllowance(token, to, _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0), {
      ...options,
    });
  }

  /**
   *
   * @param token Address of the token
   * @param from
   * @param to
   * @returns Allowance
   */
  public async getAllowance(token: string, from: string, to: string): Promise<Balance> {
    const allowance = await this.savingsAccount.connect(this.signer).allowance(token, from, to);
    await this.tokenManager.updateAll(token);
    return {
      value: allowance.toString(),
      decimals: this.tokenManager.getTokenDecimals(token),
    };
  }

  /**
   * @@deprecated
   * @param token
   * @param amount
   * @returns
   */
  public async approveTokenForCreditLines(token: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.approve(
      token,
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      this.config.creditLineContractAddress,
      { ...options }
    );
  }

  /**
   * @description Transfer tokens from one address to another, but within the same strategy
   * @param amount
   * @param token
   * @param strategy
   * @param to
   * @returns Contract Transaction
   */
  public async transfer(
    token: string,
    strategy: StrategyType,
    to: string,
    amount: string,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);
    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transfer(
      token,
      _strategyContractAddress,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      { ...options }
    );
  }

  /**
   * @description Transfer tokens from "from" address to another address
   * @param amount
   * @param token
   * @param strategy
   * @param from
   * @param to
   * @returns Contract Transaction
   */
  public async transferFrom(
    token: string,
    strategy: StrategyType,
    from: string,
    to: string,
    amount: string,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);

    await this.tokenManager.updateTokenDecimals(token);
    const decimals = this.tokenManager.getTokenDecimals(token);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('amount should be a valid number');
    }

    return this.savingsAccount.transferFrom(
      token,
      _strategyContractAddress,
      from,
      to,
      _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0),
      { ...options }
    );
  }

  /**
   * @description Get specific token asset locked in savings account. For ex; if asset=dai_address,
   * then call returns the amount of DAI stored in the savings account for that user
   * @param user
   * @param asset
   * @returns easy read number in string
   */
  public async getTotalTokens(user: string, asset: string): Promise<Balance> {
    await this.tokenManager.updateTokenDecimals(asset);
    const decimals = this.tokenManager.getTokenDecimals(asset);

    const getTotalTokens = await (await this.savingsAccount.callStatic.getTotalTokens(user, asset)).toString();
    return { value: getTotalTokens.toString(), decimals };
  }

  /**
   * @description Fet the specific liquidity shares in the savings account for a user.
   * @param user
   * @param asset
   * @param strategy
   * @returns easy read number in string
   */
  public async getShares(user: string, asset: string, strategy: StrategyType): Promise<Balance> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);
    const yieldContract: IYield = IYield__factory.connect(_strategyContractAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);
    const decimal = this.tokenManager.getTokenDecimals(liquiditySharesAddress);

    const userShares = await (await this.savingsAccount.balanceInShares(user, asset, _strategyContractAddress)).toString();
    return { value: userShares.toString(), decimals: decimal };
  }

  /**
   * @description Get the liquidity token for a given tokenb
   * @param asset
   * @param strategy
   * @returns Asset in detail
   */
  public async getLiquidityTokenOfAssetForStrategy(asset: string, strategy: StrategyType): Promise<Asset> {
    const _strategyContractAddress = this.getStrategyAddress(strategy);
    const yieldContract: IYield = IYield__factory.connect(_strategyContractAddress, this.signer);
    const liquidityToken: string = await yieldContract.liquidityToken(asset);
    await this.tokenManager.updateAll(liquidityToken);
    return {
      address: liquidityToken,
      name: this.tokenManager.getTokenName(liquidityToken),
      pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(liquidityToken)).toString(),
      logo: this.tokenManager.getLogo(liquidityToken),
      decimals: this.tokenManager.getTokenDecimals(liquidityToken),
    };
  }

  /**
   * @description Returns the contract address of a given strategy
   * @param strategy
   * @returns
   */
  private getStrategyAddress(strategy: StrategyType): string {
    return this.yieldAndStrategyApi.getStrategyAddress(strategy);
  }
}
