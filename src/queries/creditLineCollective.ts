import { fetchData, print, countPerQuery } from '../helpers';

export async function getLenderCreditLineCollective(url: string, address: string): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        lenderSharesBalanceCLs(first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{user: "${address}"}){
          id
          token
          user
          strategy
          creditLines{
            id
          }
          amountLent
          interestReceived
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
    } else if (result.data.lenderSharesBalanceCLs.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.lenderSharesBalanceCLs);
    }
  }
}

export async function getBorrowerCreditLineCollective(url: string, address: string): Promise<any[]> {
  let skip = 0;
  address = address.toLowerCase();
  const allData = [];
  for (;;) {
    const data = JSON.stringify({
      query: `{
        borrowerSharesBalanceCLs(first: ${countPerQuery}, skip:${skip * countPerQuery}, where:{user: "${address}"}){
            id
            token
            user
            strategy
            creditLines{
              id
            }
            amountBorrowed
            amountRepaid
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
    } else if (result.data.borrowerSharesBalanceCLs.length == 0) {
      return allData;
    } else {
      skip++;
      allData.push(...result.data.borrowerSharesBalanceCLs);
    }
  }
}
