import { SublimeConfig } from '../../types/sublimeConfig';
import { ContractTransaction, Signer, BigNumberish } from 'ethers';
import { BigNumber } from 'bignumber.js';
import { Options as Overrides } from '../../types/Types';

import { IWETH9__factory } from '../../wrappers/factories/IWETH9__factory';
import { IWETH9 } from '../../wrappers/IWETH9';

export class WrappedEth {
  private signer: Signer;

  constructor(signer: Signer) {
    this.signer = signer;
  }

  public async convertToWrappedEth(wethContractAddress: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(18));
    return IWETH9__factory.connect(wethContractAddress, this.signer).deposit({ ...options, value: _amount.toFixed(0) });
  }

  public async convertWethToEth(wethContractAddress: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const _amount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(18));
    return IWETH9__factory.connect(wethContractAddress, this.signer).withdraw(_amount.toFixed(0), { ...options });
  }
}
