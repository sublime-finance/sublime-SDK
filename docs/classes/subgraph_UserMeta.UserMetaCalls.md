[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/UserMeta](../modules/subgraph_UserMeta.md) / UserMetaCalls

# Class: UserMetaCalls

[subgraph/UserMeta](../modules/subgraph_UserMeta.md).UserMetaCalls

## Hierarchy

- [`SavingsAccountCalls`](subgraph_SavingsAccount.SavingsAccountCalls.md)

  ↳ **`UserMetaCalls`**

  ↳↳ [`CreditLinesOverviewCall`](subgraph_CreditLineOverview.CreditLinesOverviewCall.md)

## Table of contents

### Constructors

- [constructor](subgraph_UserMeta.UserMetaCalls.md#constructor)

### Properties

- [signer](subgraph_UserMeta.UserMetaCalls.md#signer)
- [subgraphUrl](subgraph_UserMeta.UserMetaCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_UserMeta.UserMetaCalls.md#sublimeaddresses)
- [tokenManager](subgraph_UserMeta.UserMetaCalls.md#tokenmanager)
- [verificationApi](subgraph_UserMeta.UserMetaCalls.md#verificationapi)
- [yieldApi](subgraph_UserMeta.UserMetaCalls.md#yieldapi)

### Methods

- [countAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_UserMeta.UserMetaCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph_UserMeta.UserMetaCalls.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_UserMeta.UserMetaCalls.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallcreditlines)
- [getAllLendersOfPool](subgraph_UserMeta.UserMetaCalls.md#getalllendersofpool)
- [getAllLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_UserMeta.UserMetaCalls.md#getallpooledcreditlinesofuser)
- [getAllPoolsByPoolType](subgraph_UserMeta.UserMetaCalls.md#getallpoolsbypooltype)
- [getAllowances](subgraph_UserMeta.UserMetaCalls.md#getallowances)
- [getConfirmedCreditLinesOfBorrower](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_UserMeta.UserMetaCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_UserMeta.UserMetaCalls.md#getcreditline)
- [getCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_UserMeta.UserMetaCalls.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_UserMeta.UserMetaCalls.md#getdashboardoverview)
- [getKycDetails](subgraph_UserMeta.UserMetaCalls.md#getkycdetails)
- [getLendersPerPool](subgraph_UserMeta.UserMetaCalls.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_UserMeta.UserMetaCalls.md#getpendingcreditlinesrequestedbylender)
- [getPool](subgraph_UserMeta.UserMetaCalls.md#getpool)
- [getPoolByBorrower](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrower)
- [getPoolByBorrowerByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbyborrowerbytype)
- [getPoolByLender](subgraph_UserMeta.UserMetaCalls.md#getpoolbylender)
- [getPoolByLenderByType](subgraph_UserMeta.UserMetaCalls.md#getpoolbylenderbytype)
- [getPooledCreditLineById](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_UserMeta.UserMetaCalls.md#getpooledcreditlinetimeline)
- [getPools](subgraph_UserMeta.UserMetaCalls.md#getpools)
- [getProfileOverview](subgraph_UserMeta.UserMetaCalls.md#getprofileoverview)
- [getRandomInt](subgraph_UserMeta.UserMetaCalls.md#getrandomint)
- [getSavingsAccountOverview](subgraph_UserMeta.UserMetaCalls.md#getsavingsaccountoverview)
- [getSpecificPooledCreditLineOfLender](subgraph_UserMeta.UserMetaCalls.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_UserMeta.UserMetaCalls.md#gettokensforshares)
- [getTwitterDetails](subgraph_UserMeta.UserMetaCalls.md#gettwitterdetails)
- [getUserMetadata](subgraph_UserMeta.UserMetaCalls.md#getusermetadata)
- [getVerifiedTwitterId](subgraph_UserMeta.UserMetaCalls.md#getverifiedtwitterid)
- [refreshStrategyData](subgraph_UserMeta.UserMetaCalls.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_UserMeta.UserMetaCalls.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_UserMeta.UserMetaCalls.md#refreshtokendata)
- [transformToPooledCreditLineEmulator](subgraph_UserMeta.UserMetaCalls.md#transformtopooledcreditlineemulator)
- [transformToUserMetaData](subgraph_UserMeta.UserMetaCalls.md#transformtousermetadata)

## Constructors

### constructor

• **new UserMetaCalls**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[constructor](subgraph_SavingsAccount.SavingsAccountCalls.md#constructor)

#### Defined in

[src/subgraph/UserMeta.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L10)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[signer](subgraph_SavingsAccount.SavingsAccountCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[subgraphUrl](subgraph_SavingsAccount.SavingsAccountCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[sublimeAddresses](subgraph_SavingsAccount.SavingsAccountCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[tokenManager](subgraph_SavingsAccount.SavingsAccountCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[verificationApi](subgraph_SavingsAccount.SavingsAccountCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[yieldApi](subgraph_SavingsAccount.SavingsAccountCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L26)

## Methods

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlines)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatein)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatein)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllLendersOfPooledCreditLine](subgraph_SavingsAccount.SavingsAccountCalls.md#countalllendersofpooledcreditline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L908)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlines)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfBorrowerWithState](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrowerwithstate)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfLenderWithState](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflenderwithstate)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlinesoflenderwithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesWithStates](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlineswithstates)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[countAllPooledCreditLinesWithStatesNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#countallpooledcreditlineswithstatesnotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#getallcreditlines)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllLendersOfPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getalllendersofpool)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllLendersPerPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getalllendersperpool)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPoolCreditLinesWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolcreditlineswithstatein)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPoolCreditLinesWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolcreditlineswithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLines](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlines)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesLenderCanLendTo](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlineslendercanlendto)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrowerwithstatein)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesoflender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPooledCreditLinesOfUser](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpooledcreditlinesofuser)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllPoolsByPoolType](subgraph_SavingsAccount.SavingsAccountCalls.md#getallpoolsbypooltype)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getAllowances](subgraph_SavingsAccount.SavingsAccountCalls.md#getallowances)

#### Defined in

[src/subgraph/SavingsAccount.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/SavingsAccount.ts#L34)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getconfirmedcreditlinesofborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getConfirmedCreditLinesOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getconfirmedcreditlinesoflender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getCreditLine](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditline)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getCreditLineTimeline](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditlinetimeline)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getCreditLinesOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getcreditlinesoverview)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getDashboardOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L58)

___

### getKycDetails

▸ `Private` **getKycDetails**(`kycMetaData`): `Promise`<[`UserKycDetails`](../interfaces/types_Types.UserKycDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kycMetaData` | `string` |

#### Returns

`Promise`<[`UserKycDetails`](../interfaces/types_Types.UserKycDetails.md)\>

#### Defined in

[src/subgraph/UserMeta.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L48)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getLendersPerPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getlendersperpool)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedbyborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedtoborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedtolender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpendingcreditlinesrequestedbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPool](subgraph_SavingsAccount.SavingsAccountCalls.md#getpool)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPoolByBorrower](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbyborrower)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPoolByBorrowerByType](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbyborrowerbytype)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPoolByLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbylender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPoolByLenderByType](subgraph_SavingsAccount.SavingsAccountCalls.md#getpoolbylenderbytype)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPooledCreditLineById](subgraph_SavingsAccount.SavingsAccountCalls.md#getpooledcreditlinebyid)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPooledCreditLineTimeline](subgraph_SavingsAccount.SavingsAccountCalls.md#getpooledcreditlinetimeline)

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L657)

___

### getPools

▸ **getPools**(): `Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

#### Returns

`Promise`<[`PoolDetail`](../interfaces/types_Types.PoolDetail.md)[]\>

Array of all pools created on sublime

#### Inherited from

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getPools](subgraph_SavingsAccount.SavingsAccountCalls.md#getpools)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getProfileOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getprofileoverview)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getRandomInt](subgraph_SavingsAccount.SavingsAccountCalls.md#getrandomint)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getSavingsAccountOverview](subgraph_SavingsAccount.SavingsAccountCalls.md#getsavingsaccountoverview)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getSpecificPooledCreditLineOfLender](subgraph_SavingsAccount.SavingsAccountCalls.md#getspecificpooledcreditlineoflender)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[getTokensForShares](subgraph_SavingsAccount.SavingsAccountCalls.md#gettokensforshares)

#### Defined in

[src/subgraph/Base.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L138)

___

### getTwitterDetails

▸ `Private` **getTwitterDetails**(`twitterMetaData`): `Promise`<[`UserTwitterDetails`](../interfaces/types_Types.UserTwitterDetails.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `twitterMetaData` | `string` |

#### Returns

`Promise`<[`UserTwitterDetails`](../interfaces/types_Types.UserTwitterDetails.md)\>

#### Defined in

[src/subgraph/UserMeta.ts:43](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L43)

___

### getUserMetadata

▸ **getUserMetadata**(`user`): `Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |

#### Returns

`Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[refreshStrategyData](subgraph_SavingsAccount.SavingsAccountCalls.md#refreshstrategydata)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[refreshStrategyDataForPcl](subgraph_SavingsAccount.SavingsAccountCalls.md#refreshstrategydataforpcl)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[refreshTokenData](subgraph_SavingsAccount.SavingsAccountCalls.md#refreshtokendata)

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

[SavingsAccountCalls](subgraph_SavingsAccount.SavingsAccountCalls.md).[transformToPooledCreditLineEmulator](subgraph_SavingsAccount.SavingsAccountCalls.md#transformtopooledcreditlineemulator)

#### Defined in

[src/subgraph/PooledCreditLine.ts:913](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L913)

___

### transformToUserMetaData

▸ `Private` **transformToUserMetaData**(`data`): `Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`UserMetaData`](../interfaces/types_Types.UserMetaData.md)[]\>

#### Defined in

[src/subgraph/UserMeta.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/UserMeta.ts#L19)
