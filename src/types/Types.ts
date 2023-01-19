import { BigNumberish, Overrides } from 'ethers';
import { PooledCreditLineEmulator } from '../emulator/PooledCreditLines';
import { CreditLineEmulator } from '../emulator/CreditLines';

export * from './overview/CreditLineOverview';
export * from './overview/LenderTotalCredit';
export * from './overview/BorrowerCreditLimit';
export * from './overview/PooledCreditLineOverview';
export * from './overview/InterestDetails';

export * from './emulator';

export enum PclUpcomingState {
  ABOUT_TO_EXPIRE = 'PCL is about to cross endsAt time',
  ABOUT_TO_DEFAULT = 'PCL is about to cross defaultsAt time',
}

export interface PclsToTakeAction {
  id: string;
  status: string;
  endsAt: string;
  defaultsAt: string;
  upcomingAction: PclUpcomingState;
  timeRemaining: string;
}
export interface TempTwitterResponse {
  account_name: string;
  account_username: string;
  account_id: string;
  account_dp_url: string;
}

export interface Allowances {
  amount: Balance;
  from: string;
  to: string;
  token: Asset;
}

export interface Options extends Overrides {}
export interface Asset {
  name: string;
  address: string;
  logo: string;
  pricePerAssetInUSD: string;
  decimals: number;
}

export interface UserMetaData {
  id: string;
  verifier: Verifier;
  details: UserTwitterDetails | UserKycDetails;
  verifiedBy: {
    id: string;
    status: string;
  };
}

export interface UserKycDetails {
  name: string;
}

export interface UserTwitterDetails {
  profilePic: string;
  name: string;
  twitterId: string;
  userName: string;
}

export enum CreditLineStatus {
  NOT_CREATED = 'NOT_CREATED',
  REQUESTED = 'REQUESTED',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  EXPIRED = 'EXPIRED',
  LIQUIDATED = 'LIQUIDATED',
  CANCELLED = 'CANCELLED',
  // intermediate -- from here
  START_CALLABLE = 'START_CALLABLE',
  LIQUIDATE_CALLABLE = 'LIQUIDATE_CALLABLE',
  INTERMEDIATE_CANCELLED = 'INTERMEDIATE_CANCELLED',
  INTERMEDIATE_EXPIRED = 'INTERMEDIATE_EXPIRED',
  CLOSE_CALLABLE = 'CLOSE_CALLABLE',
  DEFAULT_LIQUIDATE_CALLABLE = 'DEFAULT_LIQUIDATE_CALLABLE',
}

export enum StrategyType {
  NoYield = 'NoYield',
  CompoundYield = 'CompoundYield',
  YearnYield = 'YearnYield',
  AaveYield = 'AaveYield',
}

export enum VerifierType {
  TwitterVerifier = 'TwitterVerifier',
  AdminVerifier = 'AdminVerifier',
  PersonaVerifier = 'PersonaVerifier',
}

export enum Operation {
  NOT_CREATED = 'NOT_CREATED',
  REQUESTED = 'REQUESTED',
  ACTIVE = 'ACTIVE',
  DEPOSIT_COLLATERAL = 'DEPOSIT_COLLATERAL',
  BORROW = 'BORROW',
  REPAY = 'REPAY',
  WITHDRAW_COLLATERAL = 'WITHDRAW_COLLATERAL',
  CLOSED = 'CLOSED',
  CANCELLED = 'CANCELLED',
  RESET = 'RESET',
  LIQUIDATED = 'LIQUIDATED',
}

export interface LenderWithdrawableAmount {
  principal: Balance;
  interest: Balance;
}
export interface CreditLineOperation {
  amount: Balance;
  creditLineOperation: Operation;
  liquidator?: string;
  strategy?: Strategy;
  timestamp: string;
  id: string;
}

export interface PooledCreditLineOperation {
  id: string;
  transactionHash: string;
  eventIndex: string;
  pooledCreditLineOperation: string;
  timestamp: string;
  amount: Balance;
  strategy?: Strategy;
}

export interface Verifier {
  type: VerifierType;
  address: string;
  displayName: string;
}

export interface Strategy {
  type: StrategyType;
  address: string;
  token?: Asset;
  liquidityToken?: Asset;
  displayName: string;
  logo: string;
}

export interface CreditLineRequest {
  address: string;
  borrowLimit: string;
  borrowRate: string;
  autoLiquidation: boolean;
  collateralRatio: string;
  borrowAsset: string;
  collateralAsset: string;
  borrowAssetStrategy: StrategyType;
  collateralAssetStrategy: StrategyType;
}

export interface SavingsAccountStrategyBalanceDisplay {
  strategy: Strategy;
  balance: Balance;
  balanceUSD: Balance;
  APR: string;
}
export interface SavingsAccountBalanceDisplay {
  token: Asset;
  balance: Balance;
  amountAllocatedToCreditLines: Balance;
  balanceUSD: Balance;
  strategyBalance: SavingsAccountStrategyBalanceDisplay[];
  APR: string; // weighted average of all strategy APRs
}
export interface SavingAccountUserDetailDisplay {
  user: string;
  balances: [SavingsAccountBalanceDisplay?];
  totalBalance: Balance;
}

// ---------only for disaply ----------- removeLatter
export interface PoolDetail {
  name?: string; // refers to borrower name
  username?: string; // refers to borrower user name
  address: string; // refer to borrower address,
  borrowRate: string;
  borrowedAmount: Balance;
  lentAmount: Balance;
  nextPayment: string; // timestamp
  repaymentProgress: string;
  borrowAsset: Asset;
  collateralAsset: Asset;
  poolType: string;
  estimatedEndDate: string;
  lockedCollateral: string;
  collectionProgress: string;
  lent: Balance;
  profit: Balance;
  endedOn: string;
}

export interface PoolLender {
  name?: string; // refers to lender name
  username?: string; // refers to lender username
  address: string; // refers to lender address
  shareInPool: string;
  poolToken: Asset;
  suppliedToken: Asset;
  suppliedAmount: Balance;
}

export interface DashboardOverview {
  totalBorrowedAmount: Balance;
  totalLentAmount: Balance;
  totalBorrowRate: string;
  totalLentRate: string;
}

export interface CreditLinesOverview {
  creditGranted: Balance;
  interestAccrued: Balance;
  activeCredit: Balance;
  interestRate: string;
}

export interface ProfileOverview {
  name?: string;
  username?: string;
  poolsCreated: string;
  activePools: string;
  timesDefaulted: string;
  totalAmountInBorrow: string;
}

export interface CreditLineDetail {
  collateralTokens: Balance;
  currentDebt: Balance;
  principal: Balance;
  interestAccrued: Balance;
  collateralRatio: Balance;
  creditLimit: Balance;
  interestRate: Balance;
  idealCollateralRatio: Balance;
  collateralAsset: Asset;
  borrowAsset: Asset;
  autoLiquidate: boolean;
  lender: CreditLineUser;
  borrower: CreditLineUser;
  type: string;
  lastPrincipalUpdateTime: string;
  id: string;
  requestByLender: boolean;
  createdAt: string;
  borrowAssetStrategy: Strategy;
  collateralAssetStrategy: Strategy;
  emulator: CreditLineEmulator;
}

export interface PooledCreditLineDetail {
  id: string;
  borrowerAddress: string;
  borrowLimit: Balance;
  borrowRate: Balance;
  idealCollateralRatio: Balance;
  collateralTokens: Balance;
  borrowAsset: Asset;
  collateralAsset: Asset;
  createdAt: string;
  startsAt: string;
  endsAt: string;
  defaultsAt: string;
  lenderStrategy: Strategy;
  collateralStrategy: Strategy;
  gracePenaltyRate: Balance;
  status: CreditLineStatus;
  principal: Balance;
  totalInterestRepaid: Balance;
  lastPrincipalUpdateTime: string;
  interestAccruedTillLastPrincipalUpdate: Balance;
  totalLentAmount: Balance;
  currentCollateralRatio: Balance;
  currentDebt: Balance;
  minBorrowAmount: Balance;
  emulator: PooledCreditLineEmulator;
}

export interface CreditLineUser {
  address: string;
  name?: string;
  username?: string;
  otherData?: object;
}
export interface CreditLineHistory {
  title: string;
  description: string;
  value: Balance;
}

export interface InternalTokenMap {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  iconMapping: string;
}

export interface ChainlinkInternalMap {
  tokenAddress: string;
  feedAddress: string;
}

export interface TwitterDetails {
  id: string;
  metadata: string;
}

export interface Balance {
  value: BigNumberish;
  decimals: number;
}

export interface LenderPoolDetail {
  id: string;
  startTime: string;
  borrowAsset: Asset;
  collateralAsset: Asset;
  borrowLimit: Balance;
  minBorrowAmount: Balance;
  borrowAssetStrategy: Strategy;
  sharesHeld: Balance;
  borrowerInterestShares: Balance;
  yieldInterestWithdrawnShares: Balance;
  collateralHeld: Balance;
  areTokensTransferable: boolean;
  verifier: Verifier;
  lenders: LenderPerPoolDetail[];
}

export interface LenderPerPoolDetail {
  lenderAddress: string;
  amountLent: Balance;
  amountWithdrawn: Balance;
  sharesWithdrawn: Balance;
  strategy: Strategy;
}

export interface TwitterVerifierSignatureData {
  twitterId: string;
  tweetId: string;
  timestamp: string;
  v: number;
  r: string;
  s: string;
  user: string;
}
