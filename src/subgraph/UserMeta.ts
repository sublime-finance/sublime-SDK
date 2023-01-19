import { SavingsAccountCalls } from './SavingsAccount';
import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';

import { UserMetaData, TwitterDetails, UserKycDetails, UserTwitterDetails } from '../types/Types';
import { getUserMetadata, getTwitterDetails as getTwitterDetailsQuery, getTwitterId } from '../queries';

export class UserMetaCalls extends SavingsAccountCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  async getUserMetadata(user: string): Promise<UserMetaData[]> {
    const result = await getUserMetadata(this.subgraphUrl, user);
    return this.transformToUserMetaData(result);
  }

  private transformToUserMetaData(data: any[]): Promise<UserMetaData[]> {
    const _data = data.map(async (a) => {
      let userDetails: TwitterDetails | UserKycDetails;

      if (a.verifier == 'Twitter Verifier') {
        userDetails = await this.getTwitterDetails(a.metadata);
      } else {
        userDetails = await this.getKycDetails(a.metadata);
      }
      return {
        id: a.id,
        verifier: {
          type: this.verificationApi.getVerifierType(a.verifiedBy.id),
          address: a.verifiedBy.id,
          displayName: this.verificationApi.getVerifierDisplayName(a.verifiedBy.id),
        },
        details: userDetails,
        verifiedBy: a.verifiedBy,
      };
    });

    return Promise.all(_data);
  }

  private async getTwitterDetails(twitterMetaData: string): Promise<UserTwitterDetails> {
    const result = await getTwitterDetailsQuery(twitterMetaData);
    return result;
  }

  private async getKycDetails(kycMetaData: string): Promise<UserKycDetails> {
    return { name: kycMetaData };
  }

  /**
   *
   * @param address Address of the user to fetch
   * @returns
   */
  async getVerifiedTwitterId(address: string): Promise<TwitterDetails[]> {
    const addr = address.toLocaleLowerCase();
    const result = await getTwitterId(this.subgraphUrl, addr);
    return [...result].map((a) => {
      return {
        id: a.id,
        metadata: a.metadata,
      };
    });
  }
}
