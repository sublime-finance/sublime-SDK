import { Signer, ContractTransaction } from 'ethers';
import { ERC1155Upgradeable, ERC1155Upgradeable__factory } from '../wrappers';
import { SublimeConfig } from '../types/sublimeConfig';
import { Options as Overrides } from '../types/Types';

export class ERC1155 {
  private erc1155TokenContract: ERC1155Upgradeable;
  private signer: Signer;

  constructor(signer: Signer, config: SublimeConfig) {
    this.signer = signer;
    this.erc1155TokenContract = new ERC1155Upgradeable__factory(signer).attach(config.lenderPoolAddress);
  }

  public async transfer(tokenId: string, to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    const from: string = await this.signer.getAddress();
    return this.erc1155TokenContract.safeTransferFrom(from, to, tokenId, amount, '0x', { ...options });
  }

  public async transferFrom(tokenId: string, from: string, to: string, amount: string, options?: Overrides): Promise<ContractTransaction> {
    return this.erc1155TokenContract.safeTransferFrom(from, to, tokenId, amount, '0x', { ...options });
  }

  public async balanceOf(tokenId: string, user: string): Promise<string> {
    return (await this.erc1155TokenContract.balanceOf(user, tokenId)).toString();
  }
}
