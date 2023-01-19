import { query } from '../utils/subgraph';
import axios from 'axios';
import { UserTwitterDetails, TempTwitterResponse } from 'types/Types';

const sublimeVerifierUrl = 'https://sublime-twitter-fetch-userinfobyid.saxenism.workers.dev/?twitterID=';

export async function getTwitterId(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
  userProfiles(where : {id : "${address}"}) {
    userMetadataPerVerifier {
      id
      metadata
    }
  }
}
`,
  });

  const data = await query(url, queryData);
  // return data.userProfiles;
  if (data.userProfiles.length > 0) {
    return data.userProfiles[0].userMetadataPerVerifier;
  } else {
    return [];
  }
}

export async function getUserMetadata(url, address: string): Promise<any[]> {
  // TODO: Update queries to use graphql variables instead
  // TODO: Support pagination for the case when number of tokens goes above 1000 😅

  address = address.toLowerCase();
  const queryData = JSON.stringify({
    query: `{
  userProfiles(where : {id : "${address}"}) {
    userMetadataPerVerifier {
      id,
      verifier,
      metadata,
      verifiedBy{
        id
        status
      }
    }
  }
}
`,
  });

  const data = await query(url, queryData);
  // return data.userProfiles;
  if (data.userProfiles.length > 0) {
    return data.userProfiles[0].userMetadataPerVerifier;
  } else {
    return [];
  }
}

/**
 *
 * @param twtID This is twitter id
 * @returns
 */
export async function getTwitterDetails(twtID: string): Promise<UserTwitterDetails> {
  try {
    const { data, status } = await axios.get<TempTwitterResponse>(sublimeVerifierUrl + twtID);

    if (status >= 200 && status < 400) {
      return {
        profilePic: data.account_dp_url,
        name: data.account_name,
        twitterId: data.account_id,
        userName: data.account_username,
      };
    } else {
      throw new Error('invalid status');
    }
  } catch (ex) {
    return {
      profilePic: undefined,
      name: undefined,
      twitterId: twtID,
      userName: undefined,
    };
  }
}
