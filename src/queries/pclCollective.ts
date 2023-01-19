import { fetchData, print, countPerQuery } from '../helpers';

export async function getBorrowerPooledCreditLineCollective(url: string, address: string): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        borrowerSharesBalancePCLs(first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{user:"${address}"}){
          id
          token
          user
          strategy
          pooledCreditLines{
            id
          }
          collateralDeposited
          amountRepaid
          amountBorrowed
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
    } else if (result.data.borrowerSharesBalancePCLs.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.borrowerSharesBalancePCLs);
    }
  }
}

export async function getLenderPooledCreditLineCollective(url: string, address: string): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderSharesBalancePCLs(first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{user:"${address}"}){
          id
          token
          user
          strategy
          pooledCreditLines{
            id
            status
            endsAt
            principal
            idealCollateralRatio
            totalInterestRepaid
            lastPrincipalUpdateTime
            gracePenaltyRate
            borrowRate
            interestAccruedTillLastPrincipalUpdate
            borrowLimit
            borrowAsset
            collateralAsset
            lenderStrategy
            depositedCollateralInShares
            borrowerAddress
            createdAt
            startsAt
            defaultsAt
            collateralStrategy
            totalLentAmount
            status
            minBorrowAmount
            lenderVerifier {
              id
            }
            borrowerVerifier {
              id
            }
            lenderPool{
              id
              sharesHeld
              borrowerInterestShares
              borrowerInterestSharesWithdrawn
              yieldInterestWithdrawnShares
              borrowLimit
              startTime
              minBorrowAmount
            }
          }
          amountLent
          amountWithdrawn
          sharesWithdrawn
          interestWithdrawn
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
    } else if (result.data.lenderSharesBalancePCLs.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.lenderSharesBalancePCLs);
    }
  }
}
