[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / types/Types

# Module: types/Types

## Table of contents

### References

- [Allowances](types_Types.md#allowances)
- [Asset](types_Types.md#asset)
- [Balance](types_Types.md#balance)
- [BorrowerAvailableCredit](types_Types.md#borroweravailablecredit)
- [BorrowerAvailableCreditPerToken](types_Types.md#borroweravailablecreditpertoken)
- [BorrowerCollective](types_Types.md#borrowercollective)
- [BorrowerCollectiveData](types_Types.md#borrowercollectivedata)
- [BorrowerCollectivePerStrategy](types_Types.md#borrowercollectiveperstrategy)
- [BorrowerCollectivePerToken](types_Types.md#borrowercollectivepertoken)
- [BorrowerCollectivePerTokenPerStrategy](types_Types.md#borrowercollectivepertokenperstrategy)
- [ChainlinkInternalMap](types_Types.md#chainlinkinternalmap)
- [CreditLineDetail](types_Types.md#creditlinedetail)
- [CreditLineExternalData](types_Types.md#creditlineexternaldata)
- [CreditLineGlobals](types_Types.md#creditlineglobals)
- [CreditLineHistory](types_Types.md#creditlinehistory)
- [CreditLineOperation](types_Types.md#creditlineoperation)
- [CreditLineRequest](types_Types.md#creditlinerequest)
- [CreditLineState](types_Types.md#creditlinestate)
- [CreditLineStatus](types_Types.md#creditlinestatus)
- [CreditLineUser](types_Types.md#creditlineuser)
- [CreditLinesOverview](types_Types.md#creditlinesoverview)
- [DashboardOverview](types_Types.md#dashboardoverview)
- [DataFromPooledCreditLines](types_Types.md#datafrompooledcreditlines)
- [InterestCollectedByLender](types_Types.md#interestcollectedbylender)
- [InterestCollectedByLenderPerToken](types_Types.md#interestcollectedbylenderpertoken)
- [InterestDue](types_Types.md#interestdue)
- [InterestDueDetails](types_Types.md#interestduedetails)
- [InterestDuePerStrategy](types_Types.md#interestdueperstrategy)
- [InterestDuePerToken](types_Types.md#interestduepertoken)
- [InterestDuePerTokenPerStrategy](types_Types.md#interestduepertokenperstrategy)
- [InternalTokenMap](types_Types.md#internaltokenmap)
- [LenderCollective](types_Types.md#lendercollective)
- [LenderCollectiveData](types_Types.md#lendercollectivedata)
- [LenderCollectivePerStrategy](types_Types.md#lendercollectiveperstrategy)
- [LenderCollectivePerToken](types_Types.md#lendercollectivepertoken)
- [LenderCollectivePerTokenPerStrategy](types_Types.md#lendercollectivepertokenperstrategy)
- [LenderContributionToPooledCreditLines](types_Types.md#lendercontributiontopooledcreditlines)
- [LenderCreditLimit](types_Types.md#lendercreditlimit)
- [LenderCreditLimitPerToken](types_Types.md#lendercreditlimitpertoken)
- [LenderPerPool](types_Types.md#lenderperpool)
- [LenderPerPoolDetail](types_Types.md#lenderperpooldetail)
- [LenderPerPoolPrincipalWithdrawable](types_Types.md#lenderperpoolprincipalwithdrawable)
- [LenderPoolDetail](types_Types.md#lenderpooldetail)
- [LenderPoolExternalData](types_Types.md#lenderpoolexternaldata)
- [LenderPoolState](types_Types.md#lenderpoolstate)
- [LenderTotalCredit](types_Types.md#lendertotalcredit)
- [LenderTotalCreditCommited](types_Types.md#lendertotalcreditcommited)
- [LenderTotalCreditPerStrategy](types_Types.md#lendertotalcreditperstrategy)
- [LenderTotalCreditPerToken](types_Types.md#lendertotalcreditpertoken)
- [LenderWithdrawableAmount](types_Types.md#lenderwithdrawableamount)
- [Operation](types_Types.md#operation)
- [Options](types_Types.md#options)
- [PclUpcomingState](types_Types.md#pclupcomingstate)
- [PclsToTakeAction](types_Types.md#pclstotakeaction)
- [PoolDetail](types_Types.md#pooldetail)
- [PoolLender](types_Types.md#poollender)
- [PooledCreditLineBorrowerCollective](types_Types.md#pooledcreditlineborrowercollective)
- [PooledCreditLineBorrowerCollectivePerStrategy](types_Types.md#pooledcreditlineborrowercollectiveperstrategy)
- [PooledCreditLineBorrowerCollectivePerToken](types_Types.md#pooledcreditlineborrowercollectivepertoken)
- [PooledCreditLineBorrowerCollectivePerTokenPerStrategy](types_Types.md#pooledcreditlineborrowercollectivepertokenperstrategy)
- [PooledCreditLineBorrowerData](types_Types.md#pooledcreditlineborrowerdata)
- [PooledCreditLineCollective](types_Types.md#pooledcreditlinecollective)
- [PooledCreditLineDetail](types_Types.md#pooledcreditlinedetail)
- [PooledCreditLineExternalData](types_Types.md#pooledcreditlineexternaldata)
- [PooledCreditLineLenderCollectivePerStrategy](types_Types.md#pooledcreditlinelendercollectiveperstrategy)
- [PooledCreditLineLenderCollectivePerToken](types_Types.md#pooledcreditlinelendercollectivepertoken)
- [PooledCreditLineLenderCollectivePerTokenPerStrategy](types_Types.md#pooledcreditlinelendercollectivepertokenperstrategy)
- [PooledCreditLineLenderData](types_Types.md#pooledcreditlinelenderdata)
- [PooledCreditLineOperation](types_Types.md#pooledcreditlineoperation)
- [PooledCreditLineState](types_Types.md#pooledcreditlinestate)
- [ProfileOverview](types_Types.md#profileoverview)
- [SavingAccountUserDetailDisplay](types_Types.md#savingaccountuserdetaildisplay)
- [SavingsAccountBalanceDisplay](types_Types.md#savingsaccountbalancedisplay)
- [SavingsAccountStrategyBalanceDisplay](types_Types.md#savingsaccountstrategybalancedisplay)
- [Strategy](types_Types.md#strategy)
- [StrategyType](types_Types.md#strategytype)
- [TempTwitterResponse](types_Types.md#temptwitterresponse)
- [TwitterDetails](types_Types.md#twitterdetails)
- [TwitterVerifierSignatureData](types_Types.md#twitterverifiersignaturedata)
- [UserKycDetails](types_Types.md#userkycdetails)
- [UserMetaData](types_Types.md#usermetadata)
- [UserTwitterDetails](types_Types.md#usertwitterdetails)
- [Verifier](types_Types.md#verifier)
- [VerifierType](types_Types.md#verifiertype)

## References

### Allowances

Re-exports [Allowances](../interfaces/types_Types.Allowances.md)

___

### Asset

Re-exports [Asset](../interfaces/types_Types.Asset.md)

___

### Balance

Re-exports [Balance](../interfaces/types_Types.Balance.md)

___

### BorrowerAvailableCredit

Re-exports [BorrowerAvailableCredit](../interfaces/types_Types.BorrowerAvailableCredit.md)

___

### BorrowerAvailableCreditPerToken

Re-exports [BorrowerAvailableCreditPerToken](../interfaces/types_Types.BorrowerAvailableCreditPerToken.md)

___

### BorrowerCollective

Re-exports [BorrowerCollective](../interfaces/types_Types.BorrowerCollective.md)

___

### BorrowerCollectiveData

Re-exports [BorrowerCollectiveData](../interfaces/types_Types.BorrowerCollectiveData.md)

___

### BorrowerCollectivePerStrategy

Re-exports [BorrowerCollectivePerStrategy](../interfaces/types_Types.BorrowerCollectivePerStrategy.md)

___

### BorrowerCollectivePerToken

Re-exports [BorrowerCollectivePerToken](../interfaces/types_Types.BorrowerCollectivePerToken.md)

___

### BorrowerCollectivePerTokenPerStrategy

Re-exports [BorrowerCollectivePerTokenPerStrategy](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)

___

### ChainlinkInternalMap

Re-exports [ChainlinkInternalMap](../interfaces/types_Types.ChainlinkInternalMap.md)

___

### CreditLineDetail

Re-exports [CreditLineDetail](../interfaces/types_Types.CreditLineDetail.md)

___

### CreditLineExternalData

Re-exports [CreditLineExternalData](../interfaces/types_Types.CreditLineExternalData.md)

___

### CreditLineGlobals

Re-exports [CreditLineGlobals](../interfaces/types_Types.CreditLineGlobals.md)

___

### CreditLineHistory

Re-exports [CreditLineHistory](../interfaces/types_Types.CreditLineHistory.md)

___

### CreditLineOperation

Re-exports [CreditLineOperation](../interfaces/types_Types.CreditLineOperation.md)

___

### CreditLineRequest

Re-exports [CreditLineRequest](../interfaces/types_Types.CreditLineRequest.md)

___

### CreditLineState

Re-exports [CreditLineState](../interfaces/types_Types.CreditLineState.md)

___

### CreditLineStatus

Re-exports [CreditLineStatus](../enums/types_Types.CreditLineStatus.md)

___

### CreditLineUser

Re-exports [CreditLineUser](../interfaces/types_Types.CreditLineUser.md)

___

### CreditLinesOverview

Re-exports [CreditLinesOverview](../interfaces/types_Types.CreditLinesOverview.md)

___

### DashboardOverview

Re-exports [DashboardOverview](../interfaces/types_Types.DashboardOverview.md)

___

### DataFromPooledCreditLines

Re-exports [DataFromPooledCreditLines](../interfaces/types_Types.DataFromPooledCreditLines.md)

___

### InterestCollectedByLender

Re-exports [InterestCollectedByLender](../interfaces/types_Types.InterestCollectedByLender.md)

___

### InterestCollectedByLenderPerToken

Re-exports [InterestCollectedByLenderPerToken](../interfaces/types_Types.InterestCollectedByLenderPerToken.md)

___

### InterestDue

Re-exports [InterestDue](../interfaces/types_Types.InterestDue.md)

___

### InterestDueDetails

Re-exports [InterestDueDetails](../interfaces/types_Types.InterestDueDetails.md)

___

### InterestDuePerStrategy

Re-exports [InterestDuePerStrategy](../interfaces/types_Types.InterestDuePerStrategy.md)

___

### InterestDuePerToken

Re-exports [InterestDuePerToken](../interfaces/types_Types.InterestDuePerToken.md)

___

### InterestDuePerTokenPerStrategy

Re-exports [InterestDuePerTokenPerStrategy](../interfaces/types_Types.InterestDuePerTokenPerStrategy.md)

___

### InternalTokenMap

Re-exports [InternalTokenMap](../interfaces/types_Types.InternalTokenMap.md)

___

### LenderCollective

Re-exports [LenderCollective](../interfaces/types_Types.LenderCollective.md)

___

### LenderCollectiveData

Re-exports [LenderCollectiveData](../interfaces/types_Types.LenderCollectiveData.md)

___

### LenderCollectivePerStrategy

Re-exports [LenderCollectivePerStrategy](../interfaces/types_Types.LenderCollectivePerStrategy.md)

___

### LenderCollectivePerToken

Re-exports [LenderCollectivePerToken](../interfaces/types_Types.LenderCollectivePerToken.md)

___

### LenderCollectivePerTokenPerStrategy

Re-exports [LenderCollectivePerTokenPerStrategy](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)

___

### LenderContributionToPooledCreditLines

Re-exports [LenderContributionToPooledCreditLines](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)

___

### LenderCreditLimit

Re-exports [LenderCreditLimit](../interfaces/types_Types.LenderCreditLimit.md)

___

### LenderCreditLimitPerToken

Re-exports [LenderCreditLimitPerToken](../interfaces/types_Types.LenderCreditLimitPerToken.md)

___

### LenderPerPool

Re-exports [LenderPerPool](../interfaces/types_Types.LenderPerPool.md)

___

### LenderPerPoolDetail

Re-exports [LenderPerPoolDetail](../interfaces/types_Types.LenderPerPoolDetail.md)

___

### LenderPerPoolPrincipalWithdrawable

Re-exports [LenderPerPoolPrincipalWithdrawable](../interfaces/types_Types.LenderPerPoolPrincipalWithdrawable.md)

___

### LenderPoolDetail

Re-exports [LenderPoolDetail](../interfaces/types_Types.LenderPoolDetail.md)

___

### LenderPoolExternalData

Re-exports [LenderPoolExternalData](../interfaces/types_Types.LenderPoolExternalData.md)

___

### LenderPoolState

Re-exports [LenderPoolState](../interfaces/types_Types.LenderPoolState.md)

___

### LenderTotalCredit

Re-exports [LenderTotalCredit](../interfaces/types_Types.LenderTotalCredit.md)

___

### LenderTotalCreditCommited

Re-exports [LenderTotalCreditCommited](../interfaces/types_Types.LenderTotalCreditCommited.md)

___

### LenderTotalCreditPerStrategy

Re-exports [LenderTotalCreditPerStrategy](../interfaces/types_Types.LenderTotalCreditPerStrategy.md)

___

### LenderTotalCreditPerToken

Re-exports [LenderTotalCreditPerToken](../interfaces/types_Types.LenderTotalCreditPerToken.md)

___

### LenderWithdrawableAmount

Re-exports [LenderWithdrawableAmount](../interfaces/types_Types.LenderWithdrawableAmount.md)

___

### Operation

Re-exports [Operation](../enums/types_Types.Operation.md)

___

### Options

Re-exports [Options](../interfaces/types_Types.Options.md)

___

### PclUpcomingState

Re-exports [PclUpcomingState](../enums/types_Types.PclUpcomingState.md)

___

### PclsToTakeAction

Re-exports [PclsToTakeAction](../interfaces/types_Types.PclsToTakeAction.md)

___

### PoolDetail

Re-exports [PoolDetail](../interfaces/types_Types.PoolDetail.md)

___

### PoolLender

Re-exports [PoolLender](../interfaces/types_Types.PoolLender.md)

___

### PooledCreditLineBorrowerCollective

Re-exports [PooledCreditLineBorrowerCollective](../interfaces/types_Types.PooledCreditLineBorrowerCollective.md)

___

### PooledCreditLineBorrowerCollectivePerStrategy

Re-exports [PooledCreditLineBorrowerCollectivePerStrategy](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerStrategy.md)

___

### PooledCreditLineBorrowerCollectivePerToken

Re-exports [PooledCreditLineBorrowerCollectivePerToken](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerToken.md)

___

### PooledCreditLineBorrowerCollectivePerTokenPerStrategy

Re-exports [PooledCreditLineBorrowerCollectivePerTokenPerStrategy](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)

___

### PooledCreditLineBorrowerData

Re-exports [PooledCreditLineBorrowerData](../interfaces/types_Types.PooledCreditLineBorrowerData.md)

___

### PooledCreditLineCollective

Re-exports [PooledCreditLineCollective](../interfaces/types_Types.PooledCreditLineCollective.md)

___

### PooledCreditLineDetail

Re-exports [PooledCreditLineDetail](../interfaces/types_Types.PooledCreditLineDetail.md)

___

### PooledCreditLineExternalData

Re-exports [PooledCreditLineExternalData](../interfaces/types_Types.PooledCreditLineExternalData.md)

___

### PooledCreditLineLenderCollectivePerStrategy

Re-exports [PooledCreditLineLenderCollectivePerStrategy](../interfaces/types_Types.PooledCreditLineLenderCollectivePerStrategy.md)

___

### PooledCreditLineLenderCollectivePerToken

Re-exports [PooledCreditLineLenderCollectivePerToken](../interfaces/types_Types.PooledCreditLineLenderCollectivePerToken.md)

___

### PooledCreditLineLenderCollectivePerTokenPerStrategy

Re-exports [PooledCreditLineLenderCollectivePerTokenPerStrategy](../interfaces/types_Types.PooledCreditLineLenderCollectivePerTokenPerStrategy.md)

___

### PooledCreditLineLenderData

Re-exports [PooledCreditLineLenderData](../interfaces/types_Types.PooledCreditLineLenderData.md)

___

### PooledCreditLineOperation

Re-exports [PooledCreditLineOperation](../interfaces/types_Types.PooledCreditLineOperation.md)

___

### PooledCreditLineState

Re-exports [PooledCreditLineState](../interfaces/types_Types.PooledCreditLineState.md)

___

### ProfileOverview

Re-exports [ProfileOverview](../interfaces/types_Types.ProfileOverview.md)

___

### SavingAccountUserDetailDisplay

Re-exports [SavingAccountUserDetailDisplay](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)

___

### SavingsAccountBalanceDisplay

Re-exports [SavingsAccountBalanceDisplay](../interfaces/types_Types.SavingsAccountBalanceDisplay.md)

___

### SavingsAccountStrategyBalanceDisplay

Re-exports [SavingsAccountStrategyBalanceDisplay](../interfaces/types_Types.SavingsAccountStrategyBalanceDisplay.md)

___

### Strategy

Re-exports [Strategy](../interfaces/types_Types.Strategy.md)

___

### StrategyType

Re-exports [StrategyType](../enums/types_Types.StrategyType.md)

___

### TempTwitterResponse

Re-exports [TempTwitterResponse](../interfaces/types_Types.TempTwitterResponse.md)

___

### TwitterDetails

Re-exports [TwitterDetails](../interfaces/types_Types.TwitterDetails.md)

___

### TwitterVerifierSignatureData

Re-exports [TwitterVerifierSignatureData](../interfaces/types_Types.TwitterVerifierSignatureData.md)

___

### UserKycDetails

Re-exports [UserKycDetails](../interfaces/types_Types.UserKycDetails.md)

___

### UserMetaData

Re-exports [UserMetaData](../interfaces/types_Types.UserMetaData.md)

___

### UserTwitterDetails

Re-exports [UserTwitterDetails](../interfaces/types_Types.UserTwitterDetails.md)

___

### Verifier

Re-exports [Verifier](../interfaces/types_Types.Verifier.md)

___

### VerifierType

Re-exports [VerifierType](../enums/types_Types.VerifierType.md)
