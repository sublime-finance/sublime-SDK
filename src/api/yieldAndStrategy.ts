import { Signer, ContractTransaction, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { CompoundYield, CompoundYield__factory, ICToken, ICToken__factory, IYield } from '../wrappers';
import { IYield__factory } from '../wrappers/factories/IYield__factory';

import { SublimeConfig } from '../types/sublimeConfig';

import { Strategy, StrategyType, Options as Overrides } from '../types/Types';
import { TokenManager } from '../tokenManager';

const CompoundStrategyDisplayName = 'Compound Protocol';
const NoYieldStrategyDisplayName = 'Locked in Sublime';

const CompoundLogo = 'https://cryptologos.cc/logos/compound-comp-logo.png';
const SublimeLogo = 'logo pending ...';

/**
 * @class YieldAndStrategyApi
 */
export class YieldAndStrategyApi {
  /**
   * @description Signer Object
   */
  private signer: Signer;

  private compoundYield: CompoundYield;

  /**
   * @description Internal store for all sublime contracts addresses
   */
  private config: SublimeConfig;

  /**
   * @description Object to update and fetch token meta data
   */
  private tokenManager: TokenManager;

  /**
   * @description Display names of all strategies
   */
  private displayName: Record<string, string> = {};

  /**
   * @description Logo for all strategies
   */
  private logo: Record<string, string> = {};

  constructor(signer: Signer, config: SublimeConfig, tokenManger: TokenManager) {
    this.signer = signer;
    this.config = config;
    this.tokenManager = tokenManger;

    this.compoundYield = new CompoundYield__factory(this.signer).attach(this.config.compoundStrategyContractAddress);
    this.displayName[config.compoundStrategyContractAddress.toLowerCase()] = CompoundStrategyDisplayName;
    this.displayName[config.noStrategyAddress.toLowerCase()] = NoYieldStrategyDisplayName;

    this.logo[config.compoundStrategyContractAddress.toLowerCase()] = CompoundLogo;
    this.logo[config.noStrategyAddress.toLowerCase()] = SublimeLogo;
  }

  /**
   * @param yieldType Type of yield/strategy
   * @param asset Address of the asset/token
   * @param shares Number of shares
   * @param sharesInLowestUnits If true, token decimals for shares are ignored
   * @returns Total number of underlying tokens for a given asset and strategy
   */
  public async getTokensForShares(yieldType: StrategyType, asset: string, shares: BigNumber): Promise<BigNumber> {
    const yieldAddress = this.getStrategyAddress(yieldType);
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);

    await this.tokenManager.updateTokenDecimals(asset);

    const _amount = new BigNumber(shares);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    const _amountInLowestUnits = new BigNumber(_amount);

    const _temp: string = (await yieldContract.callStatic.getTokensForShares(_amountInLowestUnits.toFixed(0), asset)).toString();
    return new BigNumber(_temp);
  }

  /**
   * @param yieldType Type of yield/strategy
   * @param asset Address of the asset/token
   * @param amount Number of tokens
   * @returns Number of shares that will be generated for given number of tokens and strategy
   */
  public async getSharesForTokens(yieldType: StrategyType, asset: string, amount: string): Promise<BigNumber> {
    const yieldAddress = this.getStrategyAddress(yieldType);
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);

    await this.tokenManager.updateTokenDecimals(liquiditySharesAddress);

    await this.tokenManager.updateTokenDecimals(asset);
    const deopsitTokenDecimal = this.tokenManager.getTokenDecimals(asset);

    const _amount = new BigNumber(amount);
    if (_amount.isNaN() || _amount.isZero() || _amount.isNegative()) {
      throw new Error('shares should be a valid number');
    }

    const _temp: string = (
      await yieldContract.callStatic.getSharesForTokens(_amount.multipliedBy(new BigNumber(10).pow(deopsitTokenDecimal)).toFixed(0), asset)
    ).toString();
    return new BigNumber(_temp);
  }

  public async getApr(yieldType: StrategyType, asset: string): Promise<BigNumber> {
    const yieldAddress = this.getStrategyAddress(yieldType);
    const yieldContract: IYield = IYield__factory.connect(yieldAddress, this.signer);
    if (yieldType == StrategyType.CompoundYield) {
      const liquiditySharesAddress: string = await yieldContract.liquidityToken(asset);
      const cToken: ICToken = ICToken__factory.connect(liquiditySharesAddress, this.signer);
      const aprString = await (await cToken.callStatic.supplyRatePerBlock()).toString();
      return new BigNumber(aprString);
    }
    return new BigNumber(0);
  }

  /**
   * @description returns all strategies supported sublime-sdk
   * @returns
   */
  public getStrategies(): Strategy[] {
    return [
      {
        address: this.config.noStrategyAddress,
        type: StrategyType.NoYield,
        displayName: this.displayName[this.config.noStrategyAddress.toLowerCase()],
        logo: this.logo[this.config.noStrategyAddress.toLowerCase()],
      },
      {
        address: this.config.compoundStrategyContractAddress,
        type: StrategyType.CompoundYield,
        displayName: this.displayName[this.config.compoundStrategyContractAddress.toLowerCase()],
        logo: this.logo[this.config.compoundStrategyContractAddress.toLowerCase()],
      },
    ];
  }

  /**
   * @description Get Strategy address from name
   * @param strategy
   * @returns null if invalid strategy name is given
   */
  public getStrategyAddress(strategy: StrategyType): string | undefined {
    if (strategy == StrategyType.NoYield) {
      return this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompoundYield) {
      return this.config.compoundStrategyContractAddress;
    } else {
      return undefined;
    }
  }

  /**
   * @description Get Strategy name from given address,
   * @param address
   * @returns null if invalid strategy address is given in input
   */
  public getStrategy(address: string): StrategyType | undefined {
    if (!address) {
      return undefined;
    }
    address = address.toLowerCase();
    if (address == this.config.noStrategyAddress.toLowerCase()) {
      return StrategyType.NoYield;
    } else if (address == this.config.compoundStrategyContractAddress.toLowerCase()) {
      return StrategyType.CompoundYield;
    } else {
      return undefined;
    }
  }

  /**
   * @param address yield/strategy address
   * @returns URL of the strategy logo
   */
  public getStrategyLogo(address: string): string | undefined {
    if (!address) {
      return undefined;
    }
    address = address.toLowerCase();

    return this.logo[address];
  }

  /**
   * @param address yield/strategy address
   * @returns Display Name/Info for the strategy
   */
  public getStrategyDisplayName(address: string): string | undefined {
    if (!address) {
      return undefined;
    }
    address = address.toLowerCase();

    return this.displayName[address];
  }

  public updateLiquidityTokenInCompoundYield(asset: string, cToken: string, options?: Overrides): Promise<ContractTransaction> {
    return this.compoundYield.addTokenAddress(asset, cToken, { ...options });
  }

  public setDepositLimitInCompoundYield(asset: string, limit: BigNumberish, options?: Overrides): Promise<ContractTransaction> {
    return this.compoundYield.setDepositLimit(asset, limit.toString(), { ...options });
  }
}
