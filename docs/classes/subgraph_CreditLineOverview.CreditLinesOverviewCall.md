[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/CreditLineOverview](../modules/subgraph_CreditLineOverview.md) / CreditLinesOverviewCall

# Class: CreditLinesOverviewCall

[subgraph/CreditLineOverview](../modules/subgraph_CreditLineOverview.md).CreditLinesOverviewCall

## Hierarchy

- [`UserMetaCalls`](subgraph_UserMeta.UserMetaCalls.md)

  ↳ **`CreditLinesOverviewCall`**

  ↳↳ [`PooledCreditLinesBorrowerOverviewCall`](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md)

## Table of contents

### Constructors

- [constructor](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#constructor)

### Properties

- [signer](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#signer)
- [subgraphUrl](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#subgraphurl)
- [sublimeAddresses](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#sublimeaddresses)
- [tokenManager](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#tokenmanager)
- [verificationApi](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#verificationapi)
- [yieldApi](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#yieldapi)

### Methods

- [TransformToBorrowerCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtoborrowercollective)
- [TransformToLenderCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendercollective)
- [countAllCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getalllendersofpool)
- [getAllLendersPerPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolsbypooltype)
- [getAllowances](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallowances)
- [getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getavaialbleborrowlimitofborrowerofcreditlines)
- [getBorrowerCreditLineCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getborrowercreditlinecollective)
- [getConfirmedCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditline)
- [getCreditLineTimeline](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getdashboardoverview)
- [getInterestCollectedByLenderFromCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getinterestcollectedbylenderfromcreditlines)
- [getLenderCreditLineCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getlendercreditlinecollective)
- [getLendersPerPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpool)
- [getPoolByBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpooledcreditlinetimeline)
- [getPools](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpools)
- [getProfileOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getprofileoverview)
- [getRandomInt](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getrandomint)
- [getSavingsAccountOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getsavingsaccountoverview)
- [getSpecificPooledCreditLineOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#gettokensforshares)
- [getTotalAmountCommitedByLenderToCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#gettotalamountcommitedbylendertocreditlines)
- [getUserMetadata](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getusermetadata)
- [getVerifiedTwitterId](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getverifiedtwitterid)
- [refreshStrategyData](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshtokendata)
- [tranformToBorrowerCollectivePerTokenPerStrategy](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#tranformtoborrowercollectivepertokenperstrategy)
- [tranformToLenderCollectivePerTokenPerStrategy](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#tranformtolendercollectivepertokenperstrategy)
- [transformToBorrowerAvailableCredit](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtoborroweravailablecredit)
- [transformToBorrowerAvailableCreditPerToken](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtoborroweravailablecreditpertoken)
- [transformToBorrowerCollectivePerStrategy](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtoborrowercollectiveperstrategy)
- [transformToBorrowerCollectivePerToken](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtoborrowercollectivepertoken)
- [transformToInterestCollectedByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtointerestcollectedbylender)
- [transformToInterestCollectedByLenderPerToken](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtointerestcollectedbylenderpertoken)
- [transformToLenderCollectivePerStrategy](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendercollectiveperstrategy)
- [transformToLenderCollectivePerToken](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendercollectivepertoken)
- [transformToLenderTotalCredit](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendertotalcredit)
- [transformToLenderTotalCreditPerStrategy](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendertotalcreditperstrategy)
- [transformToLenderTotalCreditPerToken](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtolendertotalcreditpertoken)
- [transformToPooledCreditLineEmulator](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtopooledcreditlineemulator)

## Constructors

### constructor

• **new CreditLinesOverviewCall**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[constructor](subgraph_UserMeta.UserMetaCalls.md#constructor)

#### Defined in

[src/subgraph/CreditLineOverview.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L31)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[signer](subgraph_UserMeta.UserMetaCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[subgraphUrl](subgraph_UserMeta.UserMetaCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[sublimeAddresses](subgraph_UserMeta.UserMetaCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[tokenManager](subgraph_UserMeta.UserMetaCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[verificationApi](subgraph_UserMeta.UserMetaCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[yieldApi](subgraph_UserMeta.UserMetaCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L26)

## Methods

### TransformToBorrowerCollective

▸ `Private` **TransformToBorrowerCollective**(`user`, `borrowerCollectivePerTokenPerStrategy`): [`BorrowerCollective`](../interfaces/types_Types.BorrowerCollective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `borrowerCollectivePerTokenPerStrategy` | [`BorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`BorrowerCollective`](../interfaces/types_Types.BorrowerCollective.md)

#### Defined in

[src/subgraph/CreditLineOverview.ts:452](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L452)

___

### TransformToLenderCollective

▸ `Private` **TransformToLenderCollective**(`user`, `lenderCollectivePerTokenPerStrategy`): [`LenderCollective`](../interfaces/types_Types.LenderCollective.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `lenderCollectivePerTokenPerStrategy` | [`LenderCollectivePerTokenPerStrategy`](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`LenderCollective`](../interfaces/types_Types.LenderCollective.md)

#### Defined in

[src/subgraph/CreditLineOverview.ts:423](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L423)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:366](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L366)

___

### countAllCreditLinesOfBorrowerWithStateIn

▸ **countAllCreditLinesOfBorrowerWithStateIn**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:371](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L371)

___

### countAllCreditLinesOfBorrowerWithStateIn\_requestByLender

▸ **countAllCreditLinesOfBorrowerWithStateIn_requestByLender**(`borrower`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:380](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L380)

___

### countAllCreditLinesOfBorrowerWithStateNotIn

▸ **countAllCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:394](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L394)

___

### countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender

▸ **countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender**(`borrower`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:403](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L403)

___

### countAllCreditLinesOfLenderWithStateIn

▸ **countAllCreditLinesOfLenderWithStateIn**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein)

#### Defined in

[src/subgraph/CreditLine.ts:440](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L440)

___

### countAllCreditLinesOfLenderWithStateIn\_requestByLender

▸ **countAllCreditLinesOfLenderWithStateIn_requestByLender**(`lender`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:449](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L449)

___

### countAllCreditLinesOfLenderWithStateNotIn

▸ **countAllCreditLinesOfLenderWithStateNotIn**(`lender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/CreditLine.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L417)

___

### countAllCreditLinesOfLenderWithStateNotIn\_requestByLender

▸ **countAllCreditLinesOfLenderWithStateNotIn_requestByLender**(`lender`, `requestByLender`, `state`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `requestByLender` | `boolean` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

#### Defined in

[src/subgraph/CreditLine.ts:426](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L426)

___

### countAllLendersOfPooledCreditLine

▸ **countAllLendersOfPooledCreditLine**(`id`): `Promise`<`number`\>

**`description`** Count all Lenders of PooledCreditLine

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllLendersOfPooledCreditLine](subgraph_UserMeta.UserMetaCalls.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L908)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L56)

___

### countAllPooledCreditLinesOfBorrower

▸ **countAllPooledCreditLinesOfBorrower**(`borrower`): `Promise`<`number`\>

**`description`** Count all pooled credit lines of a borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L66)

___

### countAllPooledCreditLinesOfBorrowerWithState

▸ **countAllPooledCreditLinesOfBorrowerWithState**(`borrower`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of borrower with state in

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:849](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L849)

___

### countAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **countAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of borrower with state not in

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:864](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L864)

___

### countAllPooledCreditLinesOfLender

▸ **countAllPooledCreditLinesOfLender**(`lender`): `Promise`<`number`\>

**`description`** Count all Pooled Credit Lines of a lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L76)

___

### countAllPooledCreditLinesOfLenderWithState

▸ **countAllPooledCreditLinesOfLenderWithState**(`lender`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of lender with state in

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstate)

#### Defined in

[src/subgraph/PooledCreditLine.ts:879](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L879)

___

### countAllPooledCreditLinesOfLenderWithStateNotIn

▸ **countAllPooledCreditLinesOfLenderWithStateNotIn**(`lender`, `state`): `Promise`<`number`\>

**`description`** Count all PCL of lender with state not in

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:894](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L894)

___

### countAllPooledCreditLinesWithStates

▸ **countAllPooledCreditLinesWithStates**(`state`): `Promise`<`number`\>

**`description`** Count all PCL with states in

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStates](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstates)

#### Defined in

[src/subgraph/PooledCreditLine.ts:822](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L822)

___

### countAllPooledCreditLinesWithStatesNotIn

▸ **countAllPooledCreditLinesWithStatesNotIn**(`state`): `Promise`<`number`\>

**`description`** Count all PCL with states not in

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstatesnotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:835](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L835)

___

### getAllCreditLines

▸ **getAllCreditLines**(`count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** use to fetch all the credit lines in the system

**`description`** don't use in production. It will be a 😰 (only for debugging)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L48)

___

### getAllLendersOfPool

▸ **getAllLendersOfPool**(): `Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

**`description`** To-Do

#### Returns

`Promise`<[`PoolLender`](../interfaces/types_Types.PoolLender.md)[]\>

All the lenders of a given pool

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllLendersOfPool](subgraph_UserMeta.UserMetaCalls.md#getalllendersofpool)

#### Defined in

[src/subgraph/Pools.ts:97](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L97)

___

### getAllLendersPerPool

▸ **getAllLendersPerPool**(`pclIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pclIds` | `string`[] |

#### Returns

`Promise`<`any`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getalllendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:645](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L645)

___

### getAllPoolCreditLinesWithStateIn

▸ **getAllPoolCreditLinesWithStateIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL which have state

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L137)

___

### getAllPoolCreditLinesWithStateNotIn

▸ **getAllPoolCreditLinesWithStateNotIn**(`state`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL which do not have state

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L197)

___

### getAllPooledCreditLines

▸ **getAllPooledCreditLines**(`count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns pooled credit ordered by latest created

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLine.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L87)

___

### getAllPooledCreditLinesLenderCanLendTo

▸ **getAllPooledCreditLinesLenderCanLendTo**(`lender`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL which a lender can lend to

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlineslendercanlendto)

#### Defined in

[src/subgraph/PooledCreditLine.ts:479](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L479)

___

### getAllPooledCreditLinesOfBorrower

▸ **getAllPooledCreditLinesOfBorrower**(`address`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all PCL of borrower

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrower)

#### Defined in

[src/subgraph/PooledCreditLine.ts:304](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L304)

___

### getAllPooledCreditLinesOfBorrowerWithStateIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL of borrower with state in

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `status` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatein)

#### Defined in

[src/subgraph/PooledCreditLine.ts:356](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L356)

___

### getAllPooledCreditLinesOfBorrowerWithStateNotIn

▸ **getAllPooledCreditLinesOfBorrowerWithStateNotIn**(`borrower`, `status`, `count?`, `skip?`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns all the PCL of borrower with state not in

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `status` | [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)[] | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

#### Defined in

[src/subgraph/PooledCreditLine.ts:418](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L418)

___

### getAllPooledCreditLinesOfLender

▸ **getAllPooledCreditLinesOfLender**(`lender`, `count?`, `skip?`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

**`description`** Get All pooled credit lines of lender

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[], [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:529](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L529)

___

### getAllPooledCreditLinesOfUser

▸ **getAllPooledCreditLinesOfUser**(`user`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`deprecated`** Will be removed in future

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPooledCreditLinesOfUser](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofuser)

#### Defined in

[src/subgraph/PooledCreditLine.ts:637](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L637)

___

### getAllPoolsByPoolType

▸ **getAllPoolsByPoolType**(`poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `poolType` | `string` | (possible types of pools include: ACTIVE, CLOSED, REQUESTED, LIQUIDATED) |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of specific pool types

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllPoolsByPoolType](subgraph_UserMeta.UserMetaCalls.md#getallpoolsbypooltype)

#### Defined in

[src/subgraph/Pools.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L39)

___

### getAllowances

▸ **getAllowances**(`address?`): `Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`Allowances`](../interfaces/types_Types.Allowances.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getAllowances](subgraph_UserMeta.UserMetaCalls.md#getallowances)

#### Defined in

[src/subgraph/SavingsAccount.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/SavingsAccount.ts#L34)

___

### getAvaialbleBorrowLimitOfBorrowerOfCreditLines

▸ **getAvaialbleBorrowLimitOfBorrowerOfCreditLines**(`borrower`): `Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:110](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L110)

___

### getBorrowerCreditLineCollective

▸ **getBorrowerCreditLineCollective**(`user`): `Promise`<[`BorrowerCollectiveData`](../interfaces/types_Types.BorrowerCollectiveData.md)\>

**`description`** Amount borrowed and repaid by a borrower accross all credit lines

**`summary`** Time based interest calculation is pending. (amountRepaid + outstandingInterest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`BorrowerCollectiveData`](../interfaces/types_Types.BorrowerCollectiveData.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L57)

___

### getConfirmedCreditLinesOfBorrower

▸ **getConfirmedCreditLinesOfBorrower**(`borrower`, `count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a borrower

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `borrower` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesofborrower)

#### Defined in

[src/subgraph/CreditLine.ts:140](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L140)

___

### getConfirmedCreditLinesOfLender

▸ **getConfirmedCreditLinesOfLender**(`lender`, `count?`, `skip?`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the confirmed credit lines of a lender

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lender` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getConfirmedCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesoflender)

#### Defined in

[src/subgraph/CreditLine.ts:154](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L154)

___

### getCreditLine

▸ **getCreditLine**(`id`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

**`description`** returns a detailed information of a single credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLine](subgraph_UserMeta.UserMetaCalls.md#getcreditline)

#### Defined in

[src/subgraph/CreditLine.ts:222](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L222)

___

### getCreditLineTimeline

▸ **getCreditLineTimeline**(`creditLine`): `Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

**`description`** returns the operations made on a credit line in time-wise order

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `string` |

#### Returns

`Promise`<[`CreditLineOperation`](../interfaces/types_Types.CreditLineOperation.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getcreditlinetimeline)

#### Defined in

[src/subgraph/CreditLine.ts:312](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L312)

___

### getCreditLinesOverview

▸ **getCreditLinesOverview**(`address`, `count?`, `skip?`): `Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

**`description`** Returns the credit lines overview of the user

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `address` | `string` | `undefined` |
| `count` | `number` | `999` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`CreditLinesOverview`](../interfaces/types_Types.CreditLinesOverview.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getCreditLinesOverview](subgraph_UserMeta.UserMetaCalls.md#getcreditlinesoverview)

#### Defined in

[src/subgraph/CreditLine.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L239)

___

### getDashboardOverview

▸ **getDashboardOverview**(`address`): `Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

**`description`** Return the dashboard view type for a user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`DashboardOverview`](../interfaces/types_Types.DashboardOverview.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getDashboardOverview](subgraph_UserMeta.UserMetaCalls.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L58)

___

### getInterestCollectedByLenderFromCreditLines

▸ **getInterestCollectedByLenderFromCreditLines**(`lender`): `Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L89)

___

### getLenderCreditLineCollective

▸ **getLenderCreditLineCollective**(`user`): `Promise`<[`LenderCollectiveData`](../interfaces/types_Types.LenderCollectiveData.md)\>

**`description`** Total Amount put by a lender in all credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`LenderCollectiveData`](../interfaces/types_Types.LenderCollectiveData.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L40)

___

### getLendersPerPool

▸ **getLendersPerPool**(`id`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

**`description`** Get Lenders Per Pool

**`todo`** Add pagination to LendersPerPool query

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getlendersperpool)

#### Defined in

[src/subgraph/PooledCreditLine.ts:733](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L733)

___

### getPendingCreditLinesRequestedByBorrower

▸ **getPendingCreditLinesRequestedByBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requests by the borrower but not accpeted by any lender

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbyborrower)

#### Defined in

[src/subgraph/CreditLine.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L182)

___

### getPendingCreditLinesRequestedToBorrower

▸ **getPendingCreditLinesRequestedToBorrower**(`borrower`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a borrower by all other lenders

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtoborrower)

#### Defined in

[src/subgraph/CreditLine.ts:210](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L210)

___

### getPendingCreditLinesRequestedToLender

▸ **getPendingCreditLinesRequestedToLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of poending credit lines which have requested to a lender by all other borrowers

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtolender)

#### Defined in

[src/subgraph/CreditLine.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L196)

___

### getPendingCreditlinesRequestedByLender

▸ **getPendingCreditlinesRequestedByLender**(`lender`, `count`, `skip`): `Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

**`description`** Returns the list of credit lines which have been requested by the lender but not accepted by any borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `count` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<[`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L168)

___

### getPool

▸ **getPool**(`poolId`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolId` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)\>

pool data if the pool exists, else null

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPool](subgraph_UserMeta.UserMetaCalls.md#getpool)

#### Defined in

[src/subgraph/Pools.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L48)

___

### getPoolByBorrower

▸ **getPoolByBorrower**(`borrower`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pools for the corresponding borrower

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrower)

#### Defined in

[src/subgraph/Pools.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L58)

___

### getPoolByBorrowerByType

▸ **getPoolByBorrowerByType**(`borrower`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByBorrowerByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrowerbytype)

#### Defined in

[src/subgraph/Pools.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L87)

___

### getPoolByLender

▸ **getPoolByLender**(`lender`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool for the lender

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByLender](subgraph_UserMeta.UserMetaCalls.md#getpoolbylender)

#### Defined in

[src/subgraph/Pools.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L67)

___

### getPoolByLenderByType

▸ **getPoolByLenderByType**(`lender`, `poolType`): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `poolType` | `string` |

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of pool

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPoolByLenderByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbylenderbytype)

#### Defined in

[src/subgraph/Pools.ts:77](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L77)

___

### getPooledCreditLineById

▸ **getPooledCreditLineById**(`id`): `Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

**`description`** Returns specific PCL details

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`Promise`<[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineById](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L254)

___

### getPooledCreditLineTimeline

▸ **getPooledCreditLineTimeline**(`pooledCreditLineId`, `count?`, `skip?`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

**`description`** Fetch PCL timeline

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pooledCreditLineId` | `string` | `undefined` |
| `count` | `number` | `13` |
| `skip` | `number` | `0` |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPooledCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L657)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getPools](subgraph_UserMeta.UserMetaCalls.md#getpools)

#### Defined in

[src/subgraph/Pools.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L29)

___

### getProfileOverview

▸ **getProfileOverview**(`address`): `Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

**`description`** Return the profiel overview of the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`ProfileOverview`](../interfaces/types_Types.ProfileOverview.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getProfileOverview](subgraph_UserMeta.UserMetaCalls.md#getprofileoverview)

#### Defined in

[src/subgraph/Pools.ts:182](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Pools.ts#L182)

___

### getRandomInt

▸ `Protected` **getRandomInt**(`max`): `number`

**`description`** Function to generate a random decimals in range (0, max)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `any` |

#### Returns

`number`

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getRandomInt](subgraph_UserMeta.UserMetaCalls.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L50)

___

### getSavingsAccountOverview

▸ **getSavingsAccountOverview**(`address`): `Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

**`description`** Returns savings account overview for a user address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`SavingAccountUserDetailDisplay`](../interfaces/types_Types.SavingAccountUserDetailDisplay.md)\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getSavingsAccountOverview](subgraph_UserMeta.UserMetaCalls.md#getsavingsaccountoverview)

#### Defined in

[src/subgraph/SavingsAccount.ts:75](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/SavingsAccount.ts#L75)

___

### getSpecificPooledCreditLineOfLender

▸ **getSpecificPooledCreditLineOfLender**(`lender`, `id`): `Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |
| `id` | `string` |

#### Returns

`Promise`<[[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md), [`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getSpecificPooledCreditLineOfLender](subgraph_UserMeta.UserMetaCalls.md#getspecificpooledcreditlineoflender)

#### Defined in

[src/subgraph/PooledCreditLine.ts:580](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L580)

___

### getTokensForShares

▸ `Protected` **getTokensForShares**(`strategy`, `collateralAsset`, `amount`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `collateralAsset` | `string` |
| `amount` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getTokensForShares](subgraph_UserMeta.UserMetaCalls.md#gettokensforshares)

#### Defined in

[src/subgraph/Base.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L138)

___

### getTotalAmountCommitedByLenderToCreditLines

▸ **getTotalAmountCommitedByLenderToCreditLines**(`lender`): `Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L68)

___

### getUserMetadata

▸ **getUserMetadata**(`user`): `Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getUserMetadata](subgraph_UserMeta.UserMetaCalls.md#getusermetadata)

#### Defined in

[src/subgraph/UserMeta.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L14)

___

### getVerifiedTwitterId

▸ **getVerifiedTwitterId**(`address`): `Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | Address of the user to fetch |

#### Returns

`Promise`<[`TwitterDetails`](../interfaces/types_Types.TwitterDetails.md)[]\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[getVerifiedTwitterId](subgraph_UserMeta.UserMetaCalls.md#getverifiedtwitterid)

#### Defined in

[src/subgraph/UserMeta.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L57)

___

### refreshStrategyData

▸ `Protected` **refreshStrategyData**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[refreshStrategyData](subgraph_UserMeta.UserMetaCalls.md#refreshstrategydata)

#### Defined in

[src/subgraph/Base.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L108)

___

### refreshStrategyDataForPcl

▸ `Protected` **refreshStrategyDataForPcl**(`data`): `Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `Record`<`string`, `BigNumber`\>\>\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[refreshStrategyDataForPcl](subgraph_UserMeta.UserMetaCalls.md#refreshstrategydataforpcl)

#### Defined in

[src/subgraph/Base.ts:82](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L82)

___

### refreshTokenData

▸ `Protected` **refreshTokenData**(`data`): `Promise`<`Record`<`string`, `BigNumber`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<`Record`<`string`, `BigNumber`\>\>

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[refreshTokenData](subgraph_UserMeta.UserMetaCalls.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L67)

___

### tranformToBorrowerCollectivePerTokenPerStrategy

▸ `Private` **tranformToBorrowerCollectivePerTokenPerStrategy**(`data`): `Promise`<[`BorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`BorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:512](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L512)

___

### tranformToLenderCollectivePerTokenPerStrategy

▸ `Private` **tranformToLenderCollectivePerTokenPerStrategy**(`data`): `Promise`<[`LenderCollectivePerTokenPerStrategy`](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderCollectivePerTokenPerStrategy`](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:480](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L480)

___

### transformToBorrowerAvailableCredit

▸ `Private` **transformToBorrowerAvailableCredit**(`data`): `Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[] |

#### Returns

`Promise`<[`BorrowerAvailableCredit`](../interfaces/types_Types.BorrowerAvailableCredit.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:545](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L545)

___

### transformToBorrowerAvailableCreditPerToken

▸ `Private` **transformToBorrowerAvailableCreditPerToken**(`data`): `Promise`<[`BorrowerAvailableCreditPerToken`](../interfaces/types_Types.BorrowerAvailableCreditPerToken.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`CreditLineDetail`](../interfaces/types_Types.CreditLineDetail.md)[] |

#### Returns

`Promise`<[`BorrowerAvailableCreditPerToken`](../interfaces/types_Types.BorrowerAvailableCreditPerToken.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:568](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L568)

___

### transformToBorrowerCollectivePerStrategy

▸ `Private` **transformToBorrowerCollectivePerStrategy**(`user`, `borrowerCollectivePerTokenPerStrategy`): [`BorrowerCollectivePerStrategy`](../interfaces/types_Types.BorrowerCollectivePerStrategy.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `borrowerCollectivePerTokenPerStrategy` | [`BorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`BorrowerCollectivePerStrategy`](../interfaces/types_Types.BorrowerCollectivePerStrategy.md)[]

#### Defined in

[src/subgraph/CreditLineOverview.ts:381](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L381)

___

### transformToBorrowerCollectivePerToken

▸ `Private` **transformToBorrowerCollectivePerToken**(`user`, `borrowerCollectivePerTokenPerStrategy`): [`BorrowerCollectivePerToken`](../interfaces/types_Types.BorrowerCollectivePerToken.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `borrowerCollectivePerTokenPerStrategy` | [`BorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.BorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`BorrowerCollectivePerToken`](../interfaces/types_Types.BorrowerCollectivePerToken.md)[]

#### Defined in

[src/subgraph/CreditLineOverview.ts:307](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L307)

___

### transformToInterestCollectedByLender

▸ `Private` **transformToInterestCollectedByLender**(`data`): `Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`InterestCollectedByLender`](../interfaces/types_Types.InterestCollectedByLender.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:139](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L139)

___

### transformToInterestCollectedByLenderPerToken

▸ `Private` **transformToInterestCollectedByLenderPerToken**(`data`): `Promise`<[`InterestCollectedByLenderPerToken`](../interfaces/types_Types.InterestCollectedByLenderPerToken.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`InterestCollectedByLenderPerToken`](../interfaces/types_Types.InterestCollectedByLenderPerToken.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L161)

___

### transformToLenderCollectivePerStrategy

▸ `Private` **transformToLenderCollectivePerStrategy**(`user`, `lenderCollectivePerTokenPerStrategy`): [`LenderCollectivePerStrategy`](../interfaces/types_Types.LenderCollectivePerStrategy.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `lenderCollectivePerTokenPerStrategy` | [`LenderCollectivePerTokenPerStrategy`](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`LenderCollectivePerStrategy`](../interfaces/types_Types.LenderCollectivePerStrategy.md)[]

#### Defined in

[src/subgraph/CreditLineOverview.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L339)

___

### transformToLenderCollectivePerToken

▸ `Private` **transformToLenderCollectivePerToken**(`user`, `lenderCollectivePerTokenPerStrategy`): [`LenderCollectivePerToken`](../interfaces/types_Types.LenderCollectivePerToken.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `lenderCollectivePerTokenPerStrategy` | [`LenderCollectivePerTokenPerStrategy`](../interfaces/types_Types.LenderCollectivePerTokenPerStrategy.md)[] |

#### Returns

[`LenderCollectivePerToken`](../interfaces/types_Types.LenderCollectivePerToken.md)[]

#### Defined in

[src/subgraph/CreditLineOverview.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L275)

___

### transformToLenderTotalCredit

▸ `Private` **transformToLenderTotalCredit**(`data`): `Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderTotalCreditCommited`](../interfaces/types_Types.LenderTotalCreditCommited.md)\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L187)

___

### transformToLenderTotalCreditPerStrategy

▸ `Private` **transformToLenderTotalCreditPerStrategy**(`data`): `Promise`<[`LenderTotalCreditPerStrategy`](../interfaces/types_Types.LenderTotalCreditPerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderTotalCreditPerStrategy`](../interfaces/types_Types.LenderTotalCreditPerStrategy.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L239)

___

### transformToLenderTotalCreditPerToken

▸ `Private` **transformToLenderTotalCreditPerToken**(`data`): `Promise`<[`LenderTotalCreditPerToken`](../interfaces/types_Types.LenderTotalCreditPerToken.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderTotalCreditPerToken`](../interfaces/types_Types.LenderTotalCreditPerToken.md)[]\>

#### Defined in

[src/subgraph/CreditLineOverview.ts:213](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L213)

___

### transformToPooledCreditLineEmulator

▸ `Protected` **transformToPooledCreditLineEmulator**(`pclData`, `lenderPoolData`, `lendersPerPool`, `prices`, `collateralPerStrategyToken`): [`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pclData` | `any`[] |
| `lenderPoolData` | `any`[] |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[][] |
| `prices` | `Record`<`string`, `BigNumber`\> |
| `collateralPerStrategyToken` | `Record`<`string`, `Record`<`string`, `BigNumber`\>\> |

#### Returns

[`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[]

#### Inherited from

[UserMetaCalls](subgraph_UserMeta.UserMetaCalls.md).[transformToPooledCreditLineEmulator](subgraph_UserMeta.UserMetaCalls.md#transformtopooledcreditlineemulator)

#### Defined in

[src/subgraph/PooledCreditLine.ts:913](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L913)
