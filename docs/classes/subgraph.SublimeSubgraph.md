[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph](../modules/subgraph.md) / SublimeSubgraph

# Class: SublimeSubgraph

[subgraph](../modules/subgraph.md).SublimeSubgraph

## Hierarchy

- [`PooledCreditLineInterestCalculator`](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md)

  ↳ **`SublimeSubgraph`**

## Table of contents

### Constructors

- [constructor](subgraph.SublimeSubgraph.md#constructor)

### Properties

- [signer](subgraph.SublimeSubgraph.md#signer)
- [subgraphUrl](subgraph.SublimeSubgraph.md#subgraphurl)
- [sublimeAddresses](subgraph.SublimeSubgraph.md#sublimeaddresses)
- [tokenManager](subgraph.SublimeSubgraph.md#tokenmanager)
- [verificationApi](subgraph.SublimeSubgraph.md#verificationapi)
- [yieldApi](subgraph.SublimeSubgraph.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph.SublimeSubgraph.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph.SublimeSubgraph.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph.SublimeSubgraph.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph.SublimeSubgraph.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph.SublimeSubgraph.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph.SublimeSubgraph.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph.SublimeSubgraph.md#getallcreditlines)
- [getAllLendersOfPool](subgraph.SublimeSubgraph.md#getalllendersofpool)
- [getAllLendersPerPool](subgraph.SublimeSubgraph.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph.SublimeSubgraph.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph.SublimeSubgraph.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph.SublimeSubgraph.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph.SublimeSubgraph.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph.SublimeSubgraph.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph.SublimeSubgraph.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph.SublimeSubgraph.md#getallpoolsbypooltype)
- [getAllowances](subgraph.SublimeSubgraph.md#getallowances)
- [getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph.SublimeSubgraph.md#getavaialbleborrowlimitofborrowerofcreditlines)
- [getBorrowerCreditLineCollective](subgraph.SublimeSubgraph.md#getborrowercreditlinecollective)
- [getBorrowerInterestDueForAllCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforallcreditlines)
- [getBorrowerInterestDueForAllPooledCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforallpooledcreditlines)
- [getBorrowerInterestDueForSpecificCreditLines](subgraph.SublimeSubgraph.md#getborrowerinterestdueforspecificcreditlines)
- [getConfirmedCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph.SublimeSubgraph.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph.SublimeSubgraph.md#getcreditline)
- [getCreditLineTimeline](subgraph.SublimeSubgraph.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph.SublimeSubgraph.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph.SublimeSubgraph.md#getdashboardoverview)
- [getInterestCollectedByLenderFromCreditLines](subgraph.SublimeSubgraph.md#getinterestcollectedbylenderfromcreditlines)
- [getLatestActionablePooledCreditLinesOfBorrower](subgraph.SublimeSubgraph.md#getlatestactionablepooledcreditlinesofborrower)
- [getLenderCreditLineCollective](subgraph.SublimeSubgraph.md#getlendercreditlinecollective)
- [getLendersPerPool](subgraph.SublimeSubgraph.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph.SublimeSubgraph.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph.SublimeSubgraph.md#getpool)
- [getPoolByBorrower](subgraph.SublimeSubgraph.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph.SublimeSubgraph.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph.SublimeSubgraph.md#getpoolbylender)
- [getPoolByLenderByType](subgraph.SublimeSubgraph.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph.SublimeSubgraph.md#getpooledcreditlinebyid)
- [getPooledCreditLineCollectiveOfBorrower](subgraph.SublimeSubgraph.md#getpooledcreditlinecollectiveofborrower)
- [getPooledCreditLineCollectiveOfLender](subgraph.SublimeSubgraph.md#getpooledcreditlinecollectiveoflender)
- [getPooledCreditLineTimeline](subgraph.SublimeSubgraph.md#getpooledcreditlinetimeline)
- [getPools](subgraph.SublimeSubgraph.md#getpools)
- [getProfileOverview](subgraph.SublimeSubgraph.md#getprofileoverview)
- [getRandomInt](subgraph.SublimeSubgraph.md#getrandomint)
- [getSavingsAccountOverview](subgraph.SublimeSubgraph.md#getsavingsaccountoverview)
- [getSpecificPooledCreditLineOfLender](subgraph.SublimeSubgraph.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph.SublimeSubgraph.md#gettokensforshares)
- [getTotalAmountCommitedByLenderToCreditLines](subgraph.SublimeSubgraph.md#gettotalamountcommitedbylendertocreditlines)
- [getUserMetadata](subgraph.SublimeSubgraph.md#getusermetadata)
- [getVerifiedTwitterId](subgraph.SublimeSubgraph.md#getverifiedtwitterid)
- [refreshStrategyData](subgraph.SublimeSubgraph.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph.SublimeSubgraph.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph.SublimeSubgraph.md#refreshtokendata)
- [transformToPooledCreditLineEmulator](subgraph.SublimeSubgraph.md#transformtopooledcreditlineemulator)

## Constructors

### constructor

• **new SublimeSubgraph**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[constructor](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#constructor)

#### Defined in

[src/subgraph/index.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/index.ts#L7)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[signer](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[subgraphUrl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[sublimeAddresses](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[tokenManager](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[verificationApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[yieldApi](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllLendersOfPooledCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L908)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstate)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesofborrowerwithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstate)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlinesoflenderwithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStates](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstates)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#countallpooledcreditlineswithstatesnotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallcreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllLendersOfPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getalllendersofpool)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllLendersPerPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getalllendersperpool)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatein)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolcreditlineswithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlineslendercanlendto)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatein)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofborrowerwithstatenotin)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesoflender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPooledCreditLinesOfUser](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpooledcreditlinesofuser)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllPoolsByPoolType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallpoolsbypooltype)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAllowances](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getallowances)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getAvaialbleBorrowLimitOfBorrowerOfCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getavaialbleborrowlimitofborrowerofcreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowercreditlinecollective)

#### Defined in

[src/subgraph/CreditLineOverview.ts:57](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineOverview.ts#L57)

___

### getBorrowerInterestDueForAllCreditLines

▸ **getBorrowerInterestDueForAllCreditLines**(`borrower`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForAllCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineInterestCalculator.ts#L26)

___

### getBorrowerInterestDueForAllPooledCreditLines

▸ **getBorrowerInterestDueForAllPooledCreditLines**(`borrower`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForAllPooledCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforallpooledcreditlines)

#### Defined in

[src/subgraph/PooledCreditLineInterestCalculator.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineInterestCalculator.ts#L27)

___

### getBorrowerInterestDueForSpecificCreditLines

▸ **getBorrowerInterestDueForSpecificCreditLines**(`borrower`, `creditLines`): `Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `borrower` | `string` |
| `creditLines` | `string`[] |

#### Returns

`Promise`<[`InterestDueDetails`](../interfaces/types_Types.InterestDueDetails.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getBorrowerInterestDueForSpecificCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getborrowerinterestdueforspecificcreditlines)

#### Defined in

[src/subgraph/CreditLineInterestCalculator.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLineInterestCalculator.ts#L43)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesofborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getConfirmedCreditLinesOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getconfirmedcreditlinesoflender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLine](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditline)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinetimeline)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getCreditLinesOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getcreditlinesoverview)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getDashboardOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getdashboardoverview)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getInterestCollectedByLenderFromCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getinterestcollectedbylenderfromcreditlines)

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

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLatestActionablePooledCreditLinesOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlatestactionablepooledcreditlinesofborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLenderCreditLineCollective](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendercreditlinecollective)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getLendersPerPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getlendersperpool)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbyborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtoborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedtolender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpendingcreditlinesrequestedbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPool](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpool)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrower)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByBorrowerByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbyborrowerbytype)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPoolByLenderByType](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpoolbylenderbytype)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineById](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinebyid)

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

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfBorrower](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveofborrower)

#### Defined in

[src/subgraph/PooledCreditLineBorrowerOverview.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLineBorrowerOverview.ts#L25)

___

### getPooledCreditLineCollectiveOfLender

▸ **getPooledCreditLineCollectiveOfLender**(`lender`): `Promise`<[`PooledCreditLineLenderData`](../interfaces/types_Types.PooledCreditLineLenderData.md)\>

**`description`** TotalsharesWithdrawn is pending

#### Parameters

| Name | Type |
| :------ | :------ |
| `lender` | `string` |

#### Returns

`Promise`<[`PooledCreditLineLenderData`](../interfaces/types_Types.PooledCreditLineLenderData.md)\>

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineCollectiveOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinecollectiveoflender)

#### Defined in

[src/subgraph/PooledCreditLinesLenderOverview.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLinesLenderOverview.ts#L30)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPooledCreditLineTimeline](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L657)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getPools](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getpools)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getProfileOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getprofileoverview)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getRandomInt](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getrandomint)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getSavingsAccountOverview](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getsavingsaccountoverview)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getspecificpooledcreditlineoflender)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getTokensForShares](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#gettokensforshares)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getTotalAmountCommitedByLenderToCreditLines](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#gettotalamountcommitedbylendertocreditlines)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getUserMetadata](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getusermetadata)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[getVerifiedTwitterId](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#getverifiedtwitterid)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[refreshStrategyData](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshstrategydata)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[refreshStrategyDataForPcl](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshstrategydataforpcl)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[refreshTokenData](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L67)

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

[PooledCreditLineInterestCalculator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md).[transformToPooledCreditLineEmulator](subgraph_PooledCreditLineInterestCalculator.PooledCreditLineInterestCalculator.md#transformtopooledcreditlineemulator)

#### Defined in

[src/subgraph/PooledCreditLine.ts:913](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L913)
