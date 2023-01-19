import { SublimeConfig } from '../types/sublimeConfig';
import { ContractTransaction, Signer } from 'ethers';

import { PriceOracle } from '../wrappers/PriceOracle';
import { PriceOracle__factory } from '../wrappers/factories/PriceOracle__factory';
import { BigNumber } from '@ethersproject/bignumber';
import { Balance, Options } from '../types/Types';

/**
 * @class PriceOracle
 */
export class PriceOracleApi {
  private priceOracleContract: PriceOracle;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig) {
    this.priceOracleContract = new PriceOracle__factory(signer).attach(config.priceOracleContractAddress);
    config = this.config;
  }

  /**
   * @description Returns the
   * @param num: first token address
   * @param den: second token address
   * @returns price of token1 in terms of token2
   */
  public async getLatestPrice(num: string, den: string): Promise<string> {
    const [ratio, decimals] = await this.priceOracleContract.getLatestPrice(num, den);
    return ratio.div(BigNumber.from(10).pow(decimals)).toString();
  }

  /**
   *
   * @param token
   * @returns Returns the addresses of chainlink feed to which the tokens prices are linked
   */
  public async getChainLinkFeedAddress(token: string): Promise<[string, number]> {
    const [address, decimals] = await this.priceOracleContract.chainlinkFeedAddresses(token);
    return [address, decimals];
  }

  /**
   *
   * @param num
   * @param den
   * @returns Returns true if the both the tokens are mapped against each other in the oracle
   */
  public async checkIfFeedExists(num: string, den: string): Promise<boolean> {
    return this.priceOracleContract.doesFeedExist(num, den);
  }

  /**
   *
   * @param num
   * @param den
   * @returns Returns the price from chainlink
   */
  public async getUniswapLatestPrice(num: string, den: string): Promise<Balance> {
    const [price] = await this.priceOracleContract.getUniswapLatestPrice(num, den);
    return { value: price.toString(), decimals: 18 };
  }

  /**
   *
   * @param num
   * @param den
   * @returns Returns the price of uniswap
   */
  public async getChainlinkLatestPrice(num: string, den: string): Promise<Balance> {
    const [price] = await this.priceOracleContract.getChainlinkLatestPrice(num, den);
    return { value: price.toString(), decimals: 18 };
  }

  /**
   * @description Can only be called by admin
   * @param token
   * @param feed
   * @param options
   * @returns
   */
  public async setChainlinkFeedAddress(token: string, feed: string, options?: Options): Promise<ContractTransaction> {
    return this.priceOracleContract.setChainlinkFeedAddress(token, feed, { ...options });
  }

  /**
   * @description Can be only called by admin
   * @param token
   * @param feed
   * @param options
   * @returns
   */
  public async setUniswapFeedAddress(token1: string, token2: string, feed: string, options?: Options): Promise<ContractTransaction> {
    return this.priceOracleContract.setUniswapFeedAddress(token1, token2, feed, { ...options });
  }

  /**
   * @description Can be only called by admin
   * @param avgPeriod
   * @param options
   * @returns
   */
  public async setUniswapAveragingPeriod(avgPeriod: string, options?: Options): Promise<ContractTransaction> {
    return this.priceOracleContract.setUniswapPriceAveragingPeriod(avgPeriod, { ...options });
  }
}
