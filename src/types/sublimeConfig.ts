/**
 * Hold the contract addresses in Sublime App
 */
export interface SublimeConfig {
  poolFactoryContractAddress: string;
  creditLineContractAddress: string;
  poolLogicContractAddress: string;
  savingsAccountContractAddress: string;
  strategyRegistryContractAddress: string;
  verificationContractAddress: string;
  aaveStrategyContractAddress: string;
  compoundStrategyContractAddress: string;
  yearnStrategyContractAddress: string;
  noStrategyAddress: string;
  repaymentContractAddress: string;
  twitterVerifierContractAddress: string;
  adminVerifierContractAddress: string;
  personaVerifierContractAddress: string;
  priceOracleContractAddress: string;
  creditLineEthHelperAddress?: string;
  poolUtilsAddress?: string;
  savingsAccountEthUtilsAddress?: string;
  lenderPoolAddress: string;
  pooledCreditLineAddress: string;
}
