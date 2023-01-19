import { fetchData, print, countPerQuery } from '../helpers';

export async function getCreditLineTimeline(url: string, creditLineNumber: string): Promise<any> {
  const data = JSON.stringify({
    query: `{
      creditLines(where:{id:"${creditLineNumber}"}) {
        id
        borrowAsset
        createdAt
        collateralAsset
        borrowAssetStrategy
        collateralAssetStrategy
        totalInterestRepaid
        collateralShareInStrategy
        creditLineTimeline(orderBy:timestamp, orderDirection:desc) {
          id
          timestamp
          creditLineOperation
          amount
          strategy
          liquidator
        }
      }
    }
    `,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  return result;
}

export async function getAllCreditLinesFromSubgraph(url: string, count: number, skip: number): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip}){
          id
          status
          lender
          borrowAssetStrategy
          collateralAssetStrategy
          totalInterestRepaid
          collateralShareInStrategy
          lenderWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          borrower
          borrowerWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          requestByLender
          principal
          collateralAsset
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          autoLiquidation
          lastPrincipalUpdateTime
          createdAt
          interestAccruedTillLastPrincipalUpdate
        }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfBorrower(
  url: string,
  status: string[],
  requestByLender: boolean[],
  borrower: string,
  count: number,
  skip: number
): Promise<any[]> {
  borrower = borrower.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
        creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{borrower:"${borrower}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
          id
          status
          lender
          borrowAssetStrategy
          collateralAssetStrategy
          totalInterestRepaid
          collateralShareInStrategy
          lenderWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          borrower
          borrowerWalletDetails {
            wallet {
              user {
                userMetadataPerVerifier {
                  metadata
                }
              }
            }
          }
          requestByLender
          principal
          collateralAsset
          borrowLimit
          borrowRate
          idealCollateralRatio
          borrowAsset
          autoLiquidation
          lastPrincipalUpdateTime
          createdAt
          interestAccruedTillLastPrincipalUpdate
        }
    }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  //   console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

export async function getCreditLine(url: string, id: string): Promise<any[]> {
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (where:{id:"${id}"}){
            id
            status
            lender
            borrowAssetStrategy
            collateralAssetStrategy
            totalInterestRepaid
            collateralShareInStrategy
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
            createdAt
            interestAccruedTillLastPrincipalUpdate
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesOfLender(
  url: string,
  status: string[],
  requestByLender: boolean[],
  lender: string,
  count: number,
  skip: number
): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{lender:"${lender}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
            id
            status
            lender
            borrowAssetStrategy
            collateralAssetStrategy
            totalInterestRepaid
            collateralShareInStrategy
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
            createdAt
            interestAccruedTillLastPrincipalUpdate
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

async function _getCreditLinesNotOfLender(
  url: string,
  status: string[],
  requestByLender: boolean[],
  lender: string,
  count: number,
  skip: number
): Promise<any[]> {
  lender = lender.toLowerCase();
  const allData = [];
  const data = JSON.stringify({
    query: `{
          creditLines (orderBy:createdAt, orderDirection:desc, first:${count}, skip:${skip},where:{borrower_not:"${lender}",requestByLender_in:[${requestByLender}], status_in:[${status}]}){
            id
            status
            lender
            borrowAssetStrategy
            collateralAssetStrategy
            totalInterestRepaid
            collateralShareInStrategy
            lenderWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            borrower
            borrowerWalletDetails {
              wallet {
                user {
                  userMetadataPerVerifier {
                    metadata
                  }
                }
              }
            }
            requestByLender
            principal
            collateralAsset
            borrowLimit
            borrowRate
            idealCollateralRatio
            borrowAsset
            autoLiquidation
            lastPrincipalUpdateTime
            createdAt
            interestAccruedTillLastPrincipalUpdate
          }
      }`,
  });

  const options = {
    url,
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  const result = await fetchData(options);
  // console.log(result);
  allData.push(...result.data.creditLines);
  return allData;
}

export async function getCreditLinesLenderCanLenderTo(url: string, lender: string, count: number, skip: number) {
  let data = [];
  const status = ['ACTIVE'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesNotOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}
// creditLineTypes ACTIVE, CLOSED, LIQUIDATED, NOT_CREATED, REQUESTED, CANCELLED
export async function getConfirmedCreditLinesOfBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getConfirmedCreditLinesOfLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['ACTIVE', 'CLOSED', 'LIQUIDATED', 'NOT_CREATED'];
  const requestByLender = [true, false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditlinesRequestedByLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToLender(url: string, lender: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfLender(url, status, requestByLender, lender, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedByBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [false];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getPendingCreditLinesRequestedToBorrower(url: string, borrower: string, count: number, skip: number): Promise<any[]> {
  let data = [];
  const status = ['REQUESTED'];
  const requestByLender = [true];
  const lines = await _getCreditLinesOfBorrower(url, status, requestByLender, borrower, count, skip);
  data = [...lines];
  return data;
}

export async function getCreditLinesOfBorrowerWithState(url: string, address: string, status: string[]): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{borrower:"${address}",status_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfLenderWithState(url: string, address: string, status: string[]): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{lender:"${address}",status_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfBorrowerWithStateNotIn(url: string, address: string, status: string[]): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{borrower:"${address}",status_not_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfLenderWithStateNotIn(url: string, address: string, status: string[]): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{lender:"${address}",status_not_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

// /----- request by lender used

export async function getCreditLinesOfBorrowerWithState_requestByLender(
  url: string,
  address: string,
  requestByLender: boolean,
  status: string[]
): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{requestByLender:${requestByLender}, borrower:"${address}",status_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfLenderWithState_requestByLender(
  url: string,
  address: string,
  requestByLender: boolean,
  status: string[]
): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{requestByLender:${requestByLender}, lender:"${address}",status_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfBorrowerWithStateNotIn_requestByLender(
  url: string,
  address: string,
  requestByLender: boolean,
  status: string[]
): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{requestByLender:${requestByLender}, borrower:"${address}",status_not_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getCreditLinesOfLenderWithStateNotIn_requestByLender(
  url: string,
  address: string,
  requestByLender: boolean,
  status: string[]
): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${
        skip * countPerQuery
      }, orderBy: createdAt, orderDirection: desc, where:{requestByLender:${requestByLender},lender:"${address}",status_not_in:[${status}]}){
          id
          status
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}

export async function getAllCreditLinesForCount(url: string): Promise<any[]> {
  let skip = 0;
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        creditLines(first: ${countPerQuery}, skip:${skip * countPerQuery}, orderBy: createdAt, orderDirection: desc){
          id
        }
      }`,
    });

    const options = {
      url,
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    const result = await fetchData(options);
    if (result.errors) {
      print(result.errors);
      throw new Error('Error while fetching data from subgraph');
    } else if (result.data.creditLines.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.creditLines);
    }
  }
}
