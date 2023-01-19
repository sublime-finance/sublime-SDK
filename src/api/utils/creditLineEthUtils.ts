import { SublimeConfig } from '../../types/sublimeConfig';
import { ContractTransaction, Signer, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';

import { CreditLineEthUtils as CreditLineUtils } from '../../wrappers/CreditLineEthUtils';
import { CreditLineEthUtils__factory as CreditLineUtils__factory } from '../../wrappers/factories/CreditLineEthUtils__factory';

import { TokenManager } from '../../tokenManager';
import { StrategyType, Options as Overrides } from '../../types/Types';

/**
 * @description For handling credit line operations that use ETH
 */
export class CreditLineEthUtils {
  private creditLineUtils: CreditLineUtils;
  private tokenManager: TokenManager;
  private config: SublimeConfig;

  constructor(signer: Signer, config: SublimeConfig, tokenManager: TokenManager) {
    if (config.creditLineEthHelperAddress) {
      this.creditLineUtils = new CreditLineUtils__factory(signer).attach(config.creditLineEthHelperAddress);
      this.config = config;
      this.tokenManager = tokenManager;
    } else {
      throw new Error('creditLineEthHelperAddress is not defined in the sublime config');
    }
  }

  /**
   * @description convert ETH to WETH and deposit to credit line
   * @param creditLineNumber credit line ID
   * @param amount amount of ETH to be deposited as collateral
   * @param strategy strategy to which the collateral must be deposited
   * @param options transaction parameters
   * @returns Contract Transaction
   */
  public async depositEthAsCollateralToTheCreditLine(
    creditLineNumber: BigNumberish,
    amount: string,
    strategy: StrategyType,
    options?: Overrides
  ): Promise<ContractTransaction> {
    const decimals = 18;
    let strategyAddress: string;
    if (strategy == StrategyType.NoYield) {
      strategyAddress = this.config.noStrategyAddress;
    } else if (strategy == StrategyType.CompoundYield) {
      strategyAddress = this.config.compoundStrategyContractAddress;
    } else {
      strategyAddress = this.config.yearnStrategyContractAddress;
    }

    const _amount = new BigNumber(amount);
    const value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);

    return this.creditLineUtils.depositEthAsCollateralToCreditLine(creditLineNumber, { ...options, value });
  }

  /**
   * @description Convert ETH to WETH and repay to credit line
   * @param creditLineNumber id of the credit line
   * @param amount amount of ETH that needs to be repaid to the credit line
   * @param options transaction parameters
   * @returns Contract Transaction
   */
  public async repayEthToCreditLine(creditLineNumber: BigNumberish, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const decimals = 18;
    const _amount = new BigNumber(amount);
    const value: BigNumberish = _amount.multipliedBy(new BigNumber(10).pow(decimals)).toFixed(0);

    return this.creditLineUtils.repayEthToCreditLines(creditLineNumber, { ...options, value });
  }
}
