[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/PooledCreditLineBorrowerOverview](../modules/subgraph_PooledCreditLineBorrowerOverview.md) / PooledCreditLinesBorrowerOverviewCall

# Class: PooledCreditLinesBorrowerOverviewCall

[subgraph/PooledCreditLineBorrowerOverview](../modules/subgraph_PooledCreditLineBorrowerOverview.md).PooledCreditLinesBorrowerOverviewCall

## Hierarchy

- [`CreditLinesOverviewCall`](subgraph_CreditLineOverview.CreditLinesOverviewCall.md)

  ↳ **`PooledCreditLinesBorrowerOverviewCall`**

  ↳↳ [`PooledCreditLinesLenderOverview`](subgraph_PooledCreditLinesLenderOverview.PooledCreditLinesLenderOverview.md)

## Table of contents

### Constructors

- [constructor](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#constructor)

### Properties

- [signer](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#signer)
- [subgraphUrl](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#subgraphurl)
- [sublimeAddresses](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#sublimeaddresses)
- [tokenManager](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#tokenmanager)
- [verificationApi](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#verificationapi)
- [yieldApi](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getalllendersofpool)
- [getAllLendersPerPool](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallpoolsbypooltype)
- [getAllowances](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getallowances)
- [getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getavaialbleborrowlimitofborrowerofcreditlines)
- [getBorrowerCreditLineCollective](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getborrowercreditlinecollective)
- [getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getcreditline)
- [getCreditLineTimeline](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getdashboardoverview)
- [getInterestCollectedByLenderFromCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getinterestcollectedbylenderfromcreditlines)
- [getLatestActionablePooledCreditLinesOfBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getlatestactionablepooledcreditlinesofborrower)
- [getLenderCreditLineCollective](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getlendercreditlinecollective)
- [getLendersPerPool](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpool)
- [getPoolByBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpooledcreditlinebyid)
- [getPooledCreditLineCollectiveOfBorrower](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpooledcreditlinecollectiveofborrower)
- [getPooledCreditLineTimeline](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpooledcreditlinetimeline)
- [getPools](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getpools)
- [getProfileOverview](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getprofileoverview)
- [getRandomInt](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getrandomint)
- [getSavingsAccountOverview](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getsavingsaccountoverview)
- [getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#gettokensforshares)
- [getTotalAmountCommitedByLenderToCreditLines](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#gettotalamountcommitedbylendertocreditlines)
- [getUserMetadata](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getusermetadata)
- [getVerifiedTwitterId](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#getverifiedtwitterid)
- [refreshStrategyData](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#refreshtokendata)
- [transformToPooledCreditLineBorrowerCollective](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineborrowercollective)
- [transformToPooledCreditLineBorrowerCollectivePerStrategy](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineborrowercollectiveperstrategy)
- [transformToPooledCreditLineBorrowerCollectivePerToken](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineborrowercollectivepertoken)
- [transformToPooledCreditLineBorrowerCollectivePerTokenPerStrategy](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineborrowercollectivepertokenperstrategy)
- [transformToPooledCreditLineBorrowerData](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineborrowerdata)
- [transformToPooledCreditLineEmulator](subgraph_PooledCreditLineBorrowerOverview.PooledCreditLinesBorrowerOverviewCall.md#transformtopooledcreditlineemulator)

## Constructors

### constructor

• **new PooledCreditLinesBorrowerOverviewCall**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[constructor](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#constructor)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L21)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[signer](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[subgraphUrl](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[sublimeAddresses](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[tokenManager](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[verificationApi](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[yieldApi](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlines)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatein)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatein)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllLendersOfPooledCreditLine](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L908)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlines)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrowerwithstate)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesofborrowerwithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflenderwithstate)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlinesoflenderwithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesWithStates](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlineswithstates)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#countallpooledcreditlineswithstatesnotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallcreditlines)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllLendersOfPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getalllendersofpool)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllLendersPerPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getalllendersperpool)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPoolCreditLinesWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolcreditlineswithstatein)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolcreditlineswithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlines)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlineslendercanlendto)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrowerwithstatein)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofborrowerwithstatenotin)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesoflender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPooledCreditLinesOfUser](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpooledcreditlinesofuser)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllPoolsByPoolType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallpoolsbypooltype)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAllowances](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getallowances)

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

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getavaialbleborrowlimitofborrowerofcreditlines)

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

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getBorrowerCreditLineCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getborrowercreditlinecollective)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getConfirmedCreditLinesOfBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getconfirmedcreditlinesofborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getConfirmedCreditLinesOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getconfirmedcreditlinesoflender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getCreditLine](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditline)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getCreditLineTimeline](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditlinetimeline)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getCreditLinesOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getcreditlinesoverview)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getDashboardOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getdashboardoverview)

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

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getInterestCollectedByLenderFromCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getinterestcollectedbylenderfromcreditlines)

#### Defined in

[src/subgraph/CreditLineOverview.ts:89](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L89)

___

### getLatestActionablePooledCreditLinesOfBorrower

▸ **getLatestActionablePooledCreditLinesOfBorrower**(`borrower`): `Promise`<[`PclsToTakeAction`](../interfaces/types_Types.PclsToTakeAction.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PclsToTakeAction`](../interfaces/types_Types.PclsToTakeAction.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L30)

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

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getLenderCreditLineCollective](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getlendercreditlinecollective)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getLendersPerPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getlendersperpool)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPendingCreditLinesRequestedByBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedbyborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPendingCreditLinesRequestedToBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedtoborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPendingCreditLinesRequestedToLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedtolender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPendingCreditlinesRequestedByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpendingcreditlinesrequestedbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPool](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpool)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPoolByBorrower](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbyborrower)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPoolByBorrowerByType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbyborrowerbytype)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPoolByLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbylender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPoolByLenderByType](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpoolbylenderbytype)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPooledCreditLineById](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpooledcreditlinebyid)

#### Defined in

[src/subgraph/PooledCreditLine.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L254)

___

### getPooledCreditLineCollectiveOfBorrower

▸ **getPooledCreditLineCollectiveOfBorrower**(`borrower`): `Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L25)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPooledCreditLineTimeline](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L657)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getPools](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getpools)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getProfileOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getprofileoverview)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getRandomInt](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getrandomint)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getSavingsAccountOverview](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getsavingsaccountoverview)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getSpecificPooledCreditLineOfLender](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getspecificpooledcreditlineoflender)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getTokensForShares](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#gettokensforshares)

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

#### Inherited from

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getTotalAmountCommitedByLenderToCreditLines](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#gettotalamountcommitedbylendertocreditlines)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getUserMetadata](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getusermetadata)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[getVerifiedTwitterId](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#getverifiedtwitterid)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[refreshStrategyData](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshstrategydata)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[refreshStrategyDataForPcl](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshstrategydataforpcl)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[refreshTokenData](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L67)

___

### transformToPooledCreditLineBorrowerCollective

▸ `Private` **transformToPooledCreditLineBorrowerCollective**(`pooledCreditLineBorrowerCollectivePerTokenPerStrategy`): `Promise`<[`PooledCreditLineBorrowerCollective`](../interfaces/types_Types.PooledCreditLineBorrowerCollective.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLineBorrowerCollectivePerTokenPerStrategy` | [`PooledCreditLineBorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

`Promise`<[`PooledCreditLineBorrowerCollective`](../interfaces/types_Types.PooledCreditLineBorrowerCollective.md)\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L191)

___

### transformToPooledCreditLineBorrowerCollectivePerStrategy

▸ `Private` **transformToPooledCreditLineBorrowerCollectivePerStrategy**(`pooledCreditLineBorrowerCollectivePerTokenPerStrategy`): `Promise`<[`PooledCreditLineBorrowerCollectivePerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLineBorrowerCollectivePerTokenPerStrategy` | [`PooledCreditLineBorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

`Promise`<[`PooledCreditLineBorrowerCollectivePerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerStrategy.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L81)

___

### transformToPooledCreditLineBorrowerCollectivePerToken

▸ `Private` **transformToPooledCreditLineBorrowerCollectivePerToken**(`pooledCreditLineBorrowerCollectivePerTokenPerStrategy`): `Promise`<[`PooledCreditLineBorrowerCollectivePerToken`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerToken.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLineBorrowerCollectivePerTokenPerStrategy` | [`PooledCreditLineBorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)[] |

#### Returns

`Promise`<[`PooledCreditLineBorrowerCollectivePerToken`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerToken.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:144](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L144)

___

### transformToPooledCreditLineBorrowerCollectivePerTokenPerStrategy

▸ `Private` **transformToPooledCreditLineBorrowerCollectivePerTokenPerStrategy**(`data`): `Promise`<[`PooledCreditLineBorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PooledCreditLineBorrowerCollectivePerTokenPerStrategy`](../interfaces/types_Types.PooledCreditLineBorrowerCollectivePerTokenPerStrategy.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:237](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L237)

___

### transformToPooledCreditLineBorrowerData

▸ `Private` **transformToPooledCreditLineBorrowerData**(`data`): `Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`PooledCreditLineBorrowerData`](../interfaces/types_Types.PooledCreditLineBorrowerData.md)\>

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:54](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L54)

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

[CreditLinesOverviewCall](subgraph_CreditLineOverview.CreditLinesOverviewCall.md).[transformToPooledCreditLineEmulator](subgraph_CreditLineOverview.CreditLinesOverviewCall.md#transformtopooledcreditlineemulator)

#### Defined in

[src/subgraph/PooledCreditLine.ts:913](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L913)
