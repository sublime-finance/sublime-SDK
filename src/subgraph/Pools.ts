import { Signer } from '@ethersproject/abstract-signer';
import { TokenManager } from '../tokenManager';
import { SublimeConfig } from '../types/sublimeConfig';
import { PooledCreditLineCalls } from './PooledCreditLine';

import { BigNumber } from 'bignumber.js';
import { sha256 } from '@ethersproject/sha2';

import { PoolDetail, PoolLender, ProfileOverview } from '../types/Types';
import {
  getAllPools,
  getAllPoolsByPoolType,
  getPool,
  getAllPoolsByBorrower,
  getAllPoolsByLender,
  getAllPoolsByLenderByType,
  getAllPoolsByBorrowerByType,
} from '../queries';

export class PoolCalls extends PooledCreditLineCalls {
  constructor(url: string, signer: Signer, tokenManager: TokenManager, config: SublimeConfig) {
    super(url, signer, tokenManager, config);
  }

  /**
   *
   * @returns Array of all pools created on sublime
   */
  async getPools(): Promise<PoolDetail[]> {
    const result = await getAllPools(this.subgraphUrl);
    return this.transformToPoolDetail(result);
  }

  /**
   *
   * @param poolType (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED)
   * @returns Array of specific pool types
   */
  async getAllPoolsByPoolType(poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByPoolType(this.subgraphUrl, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolId
   * @returns pool data if the pool exists, else null
   */
  async getPool(poolId: string): Promise<PoolDetail> {
    const result = await getPool(this.subgraphUrl, poolId);
    const poolDetails: PoolDetail[] = await this.transformToPoolDetail(result);
    return poolDetails[0];
  }

  /**
   * @param borrower: address of the borrower
   * @returns Array of pools for the corresponding borrower
   */
  async getPoolByBorrower(borrower: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByBorrower(this.subgraphUrl, borrower);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @returns Array of pool for the lender
   */
  async getPoolByLender(lender: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByLender(this.subgraphUrl, lender);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param lender: address of the lender
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByLenderByType(lender: string, poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByLenderByType(this.subgraphUrl, lender, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param borrower: address of the borrower
   * @param poolType: type of the pool
   * @returns Array of pool
   */
  async getPoolByBorrowerByType(borrower: string, poolType: string): Promise<PoolDetail[]> {
    const result = await getAllPoolsByBorrowerByType(this.subgraphUrl, borrower, poolType);
    return this.transformToPoolDetail(result);
  }

  /**
   * @param poolAddress
   * @description To-Do
   * @returns All the lenders of a given pool
   */
  async getAllLendersOfPool(): Promise<PoolLender[]> {
    const totalNumberOfLenders = 1 + this.getRandomInt(100);
    const lenders: PoolLender[] = [];
    const date = new Date().valueOf();
    const poolToken = sha256(Buffer.from(date + 'poolToken')).slice(0, 40);
    const suppliedToken = sha256(Buffer.from(date + 'suppliedToken')).slice(0, 40);

    for (let index = 0; index < totalNumberOfLenders; index++) {
      lenders.push({
        address: sha256(Buffer.from(date + '' + index)).slice(0, 40),
        shareInPool: new BigNumber(this.getRandomInt(3000)).div(100).toFixed(2),
        suppliedAmount: { value: new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2), decimals: 2 },
        poolToken: {
          address: poolToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
          decimals: 18,
        },
        suppliedToken: {
          address: suppliedToken,
          name: 'Pending...',
          pricePerAssetInUSD: '00.00',
          logo: 'Logo pending ...',
          decimals: 18,
        },
      });
    }
    return lenders;
  }

  /**
   * @param data
   * @@description transforms the data received from the subgraph to pool detail
   */
  private async transformToPoolDetail(data: any[]): Promise<PoolDetail[]> {
    const borrowTokens: string[] = data.map((a) => a.collateralAsset);
    const collateralTokens: string[] = data.map((a) => a.borrowAsset);
    const allTokens = [...borrowTokens, ...collateralTokens].filter((value, index, array) => array.indexOf(value) === index);

    for (let index = 0; index < allTokens.length; index++) {
      const element = allTokens[index];
      await this.tokenManager.updateAll(element);
    }
    const transformedData: Promise<PoolDetail>[] = data.map(async (a) => {
      return {
        address: a.id,
        poolType: a.loanStatus,
        borrowedAmount: {
          value: new BigNumber(a.borrowAmountRequested).toFixed(0),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        lentAmount: { value: new BigNumber(a.amountBorrowed).toFixed(0), decimals: this.tokenManager.getTokenDecimals(a.collateralAsset) },
        borrowRate: new BigNumber(a.borrowRate).div(new BigNumber(10).pow(16)).toFixed(2),
        nextPayment: new BigNumber(a.nextPaymentDeadline).toString(),
        repaymentProgress: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        borrowAsset: {
          address: a.borrowAsset,
          name: this.tokenManager.getTokenName(a.borrowAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.borrowAsset)).toString(),
          logo: this.tokenManager.getLogo(a.borrowAsset),
          decimals: this.tokenManager.getTokenDecimals(a.borrowAsset),
        },
        collateralAsset: {
          address: a.collateralAsset,
          name: this.tokenManager.getTokenName(a.collateralAsset),
          pricePerAssetInUSD: (await this.tokenManager.getPricePerAsset(a.collateralAsset)).toString(),
          logo: this.tokenManager.getLogo(a.collateralAsset),
          decimals: this.tokenManager.getTokenDecimals(a.collateralAsset),
        },
        estimatedEndDate: new BigNumber(this.getRandomInt(1000000)).multipliedBy(new BigNumber(10).pow(4)).toString(),
        lockedCollateral: new BigNumber(this.getRandomInt(10000)).div(100).toFixed(2),
        collectionProgress: new BigNumber(this.getRandomInt(100)).toFixed(2),
        lent: { value: new BigNumber(this.getRandomInt(1000000)).toFixed(0), decimals: 2 },
        profit: { value: new BigNumber(this.getRandomInt(100000)).toFixed(2), decimals: 2 },
        endedOn: new BigNumber(this.getRandomInt(1000000)).multipliedBy(1000).toString(),
      };
    });
    return Promise.all(transformedData);
  }

  /**
   * @param address: address of the user to query
   * @description Return the profiel overview of the user
   */
  async getProfileOverview(address: string): Promise<ProfileOverview> {
    const pools = await this.getPoolByBorrower(address);
    const poolsCreated = pools.length;
    const activePools = pools.filter((a) => a.poolType === 'Active').length;
    const timesDefaulted = pools.filter((a) => a.poolType === 'Defaulted').length;
    const totalAmountInBorrow = new BigNumber(this.getRandomInt(100000000)).div(100).toFixed(2);

    return {
      poolsCreated: poolsCreated.toString(),
      activePools: activePools.toString(),
      timesDefaulted: timesDefaulted.toString(),
      totalAmountInBorrow,
    };
  }
}
