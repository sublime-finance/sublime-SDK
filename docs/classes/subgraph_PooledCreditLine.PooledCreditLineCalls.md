[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [subgraph/PooledCreditLine](../modules/subgraph_PooledCreditLine.md) / PooledCreditLineCalls

# Class: PooledCreditLineCalls

[subgraph/PooledCreditLine](../modules/subgraph_PooledCreditLine.md).PooledCreditLineCalls

## Hierarchy

- [`CreditLineCalls`](subgraph_CreditLine.CreditLineCalls.md)

  ↳ **`PooledCreditLineCalls`**

  ↳↳ [`PoolCalls`](subgraph_Pools.PoolCalls.md)

## Table of contents

### Constructors

- [constructor](subgraph_PooledCreditLine.PooledCreditLineCalls.md#constructor)

### Properties

- [signer](subgraph_PooledCreditLine.PooledCreditLineCalls.md#signer)
- [subgraphUrl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#subgraphurl)
- [sublimeAddresses](subgraph_PooledCreditLine.PooledCreditLineCalls.md#sublimeaddresses)
- [tokenManager](subgraph_PooledCreditLine.PooledCreditLineCalls.md#tokenmanager)
- [verificationApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#verificationapi)
- [yieldApi](subgraph_PooledCreditLine.PooledCreditLineCalls.md#yieldapi)

### Methods

- [convertToPooledCreditLineStatusEnum](subgraph_PooledCreditLine.PooledCreditLineCalls.md#converttopooledcreditlinestatusenum)
- [countAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlines)
- [countAllCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein)
- [countAllCreditLinesOfBorrowerWithStateIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)
- [countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)
- [countAllCreditLinesOfBorrowerWithStateNotIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)
- [countAllCreditLinesOfLenderWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein)
- [countAllCreditLinesOfLenderWithStateIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)
- [countAllCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)
- [countAllCreditLinesOfLenderWithStateNotIn\_requestByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)
- [countAllLendersOfPooledCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countalllendersofpooledcreditline)
- [countAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlines)
- [countAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrower)
- [countAllPooledCreditLinesOfBorrowerWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstate)
- [countAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesofborrowerwithstatenotin)
- [countAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflender)
- [countAllPooledCreditLinesOfLenderWithState](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstate)
- [countAllPooledCreditLinesOfLenderWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlinesoflenderwithstatenotin)
- [countAllPooledCreditLinesWithStates](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstates)
- [countAllPooledCreditLinesWithStatesNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#countallpooledcreditlineswithstatesnotin)
- [getAllCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallcreditlines)
- [getAllLendersPerPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getalllendersperpool)
- [getAllPoolCreditLinesWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatein)
- [getAllPoolCreditLinesWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpoolcreditlineswithstatenotin)
- [getAllPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlines)
- [getAllPooledCreditLinesLenderCanLendTo](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlineslendercanlendto)
- [getAllPooledCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrower)
- [getAllPooledCreditLinesOfBorrowerWithStateIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatein)
- [getAllPooledCreditLinesOfBorrowerWithStateNotIn](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofborrowerwithstatenotin)
- [getAllPooledCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesoflender)
- [getAllPooledCreditLinesOfUser](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getallpooledcreditlinesofuser)
- [getConfirmedCreditLinesOfBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesofborrower)
- [getConfirmedCreditLinesOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getconfirmedcreditlinesoflender)
- [getCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditline)
- [getCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinetimeline)
- [getCreditLinesOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getcreditlinesoverview)
- [getDashboardOverview](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getdashboardoverview)
- [getLendersPerPool](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getlendersperpool)
- [getPendingCreditLinesRequestedByBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)
- [getPendingCreditLinesRequestedToBorrower](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)
- [getPendingCreditLinesRequestedToLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedtolender)
- [getPendingCreditlinesRequestedByLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpendingcreditlinesrequestedbylender)
- [getPooledCreditLineById](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinebyid)
- [getPooledCreditLineTimeline](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getpooledcreditlinetimeline)
- [getRandomInt](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getrandomint)
- [getSpecificPooledCreditLineOfLender](subgraph_PooledCreditLine.PooledCreditLineCalls.md#getspecificpooledcreditlineoflender)
- [getTokensForShares](subgraph_PooledCreditLine.PooledCreditLineCalls.md#gettokensforshares)
- [refreshStrategyData](subgraph_PooledCreditLine.PooledCreditLineCalls.md#refreshstrategydata)
- [refreshStrategyDataForPcl](subgraph_PooledCreditLine.PooledCreditLineCalls.md#refreshstrategydataforpcl)
- [refreshTokenData](subgraph_PooledCreditLine.PooledCreditLineCalls.md#refreshtokendata)
- [transformToLenderContributionToPooledCreditLines](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolendercontributiontopooledcreditlines)
- [transformToLenderPerPoolDetail](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolenderperpooldetail)
- [transformToLenderPoolDetail](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtolenderpooldetail)
- [transformToPooledCreditLine](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtopooledcreditline)
- [transformToPooledCreditLineEmulator](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtopooledcreditlineemulator)
- [transformToPooledCreditLineOperation](subgraph_PooledCreditLine.PooledCreditLineCalls.md#transformtopooledcreditlineoperation)

## Constructors

### constructor

• **new PooledCreditLineCalls**(`url`, `signer`, `tokenManager`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `signer` | `Signer` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Overrides

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[constructor](subgraph_CreditLine.CreditLineCalls.md#constructor)

#### Defined in

[src/subgraph/PooledCreditLine.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L48)

## Properties

### signer

• `Protected` **signer**: `Signer`

**`description`** signer used to sign

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[signer](subgraph_CreditLine.CreditLineCalls.md#signer)

#### Defined in

[src/subgraph/Base.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L19)

___

### subgraphUrl

• `Protected` **subgraphUrl**: `string`

**`description`** subgraph url for fetching the sublime data

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[subgraphUrl](subgraph_CreditLine.CreditLineCalls.md#subgraphurl)

#### Defined in

[src/subgraph/Base.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L14)

___

### sublimeAddresses

• `Protected` **sublimeAddresses**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** sublime config. (Contains all addresses relevant to sublime ecosystem)

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[sublimeAddresses](subgraph_CreditLine.CreditLineCalls.md#sublimeaddresses)

#### Defined in

[src/subgraph/Base.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L33)

___

### tokenManager

• `Protected` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** instance of token manager class that caches and retreives token data

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[tokenManager](subgraph_CreditLine.CreditLineCalls.md#tokenmanager)

#### Defined in

[src/subgraph/Base.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L24)

___

### verificationApi

• `Protected` **verificationApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[verificationApi](subgraph_CreditLine.CreditLineCalls.md#verificationapi)

#### Defined in

[src/subgraph/Base.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L28)

___

### yieldApi

• `Protected` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[yieldApi](subgraph_CreditLine.CreditLineCalls.md#yieldapi)

#### Defined in

[src/subgraph/Base.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L26)

## Methods

### convertToPooledCreditLineStatusEnum

▸ `Private` **convertToPooledCreditLineStatusEnum**(`stateInSubgraph`): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateInSubgraph` | `string` |

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/subgraph/PooledCreditLine.ts:1055](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L1055)

___

### countAllCreditLines

▸ **countAllCreditLines**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#countallcreditlines)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatein_requestbylender)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfBorrowerWithStateNotIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesofborrowerwithstatenotin_requestbylender)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatein_requestbylender)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[countAllCreditLinesOfLenderWithStateNotIn_requestByLender](subgraph_CreditLine.CreditLineCalls.md#countallcreditlinesoflenderwithstatenotin_requestbylender)

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

#### Defined in

[src/subgraph/PooledCreditLine.ts:908](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L908)

___

### countAllPooledCreditLines

▸ **countAllPooledCreditLines**(): `Promise`<`number`\>

**`description`** Count all the pooled credit lines

#### Returns

`Promise`<`number`\>

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getAllCreditLines](subgraph_CreditLine.CreditLineCalls.md#getallcreditlines)

#### Defined in

[src/subgraph/CreditLine.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L48)

___

### getAllLendersPerPool

▸ **getAllLendersPerPool**(`pclIds`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pclIds` | `string`[] |

#### Returns

`Promise`<`any`\>

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

#### Defined in

[src/subgraph/PooledCreditLine.ts:637](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L637)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getConfirmedCreditLinesOfBorrower](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesofborrower)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getConfirmedCreditLinesOfLender](subgraph_CreditLine.CreditLineCalls.md#getconfirmedcreditlinesoflender)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLine](subgraph_CreditLine.CreditLineCalls.md#getcreditline)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLineTimeline](subgraph_CreditLine.CreditLineCalls.md#getcreditlinetimeline)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getCreditLinesOverview](subgraph_CreditLine.CreditLineCalls.md#getcreditlinesoverview)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getDashboardOverview](subgraph_CreditLine.CreditLineCalls.md#getdashboardoverview)

#### Defined in

[src/subgraph/Base.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L58)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedByBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbyborrower)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedToBorrower](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtoborrower)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditLinesRequestedToLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedtolender)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getPendingCreditlinesRequestedByLender](subgraph_CreditLine.CreditLineCalls.md#getpendingcreditlinesrequestedbylender)

#### Defined in

[src/subgraph/CreditLine.ts:168](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/CreditLine.ts#L168)

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

#### Defined in

[src/subgraph/PooledCreditLine.ts:657](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L657)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getRandomInt](subgraph_CreditLine.CreditLineCalls.md#getrandomint)

#### Defined in

[src/subgraph/Base.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L50)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[getTokensForShares](subgraph_CreditLine.CreditLineCalls.md#gettokensforshares)

#### Defined in

[src/subgraph/Base.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L138)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[refreshStrategyData](subgraph_CreditLine.CreditLineCalls.md#refreshstrategydata)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[refreshStrategyDataForPcl](subgraph_CreditLine.CreditLineCalls.md#refreshstrategydataforpcl)

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

[CreditLineCalls](subgraph_CreditLine.CreditLineCalls.md).[refreshTokenData](subgraph_CreditLine.CreditLineCalls.md#refreshtokendata)

#### Defined in

[src/subgraph/Base.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/Base.ts#L67)

___

### transformToLenderContributionToPooledCreditLines

▸ `Private` **transformToLenderContributionToPooledCreditLines**(`pooledCreditLines`, `data`): `Promise`<[`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pooledCreditLines` | [`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[] |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderContributionToPooledCreditLines`](../interfaces/types_Types.LenderContributionToPooledCreditLines.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:1036](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L1036)

___

### transformToLenderPerPoolDetail

▸ `Private` **transformToLenderPerPoolDetail**(`data`, `collateralDecimal`): [`LenderPerPoolDetail`](../interfaces/types_Types.LenderPerPoolDetail.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `collateralDecimal` | `number` |

#### Returns

[`LenderPerPoolDetail`](../interfaces/types_Types.LenderPerPoolDetail.md)[]

#### Defined in

[src/subgraph/PooledCreditLine.ts:800](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L800)

___

### transformToLenderPoolDetail

▸ `Private` **transformToLenderPoolDetail**(`data`): `Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |

#### Returns

`Promise`<[`LenderPoolDetail`](../interfaces/types_Types.LenderPoolDetail.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:742](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L742)

___

### transformToPooledCreditLine

▸ `Private` **transformToPooledCreditLine**(`emulatorResult`, `prices`): [`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `emulatorResult` | [`PooledCreditLineEmulator`](emulator_PooledCreditLines.PooledCreditLineEmulator.md)[] |
| `prices` | `Record`<`string`, `BigNumber`\> |

#### Returns

[`PooledCreditLineDetail`](../interfaces/types_Types.PooledCreditLineDetail.md)[]

#### Defined in

[src/subgraph/PooledCreditLine.ts:970](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L970)

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

#### Defined in

[src/subgraph/PooledCreditLine.ts:913](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L913)

___

### transformToPooledCreditLineOperation

▸ `Private` **transformToPooledCreditLineOperation**(`data`, `borrowTokenDecimal`, `collateralTokenDecimal`): `Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any`[] |
| `borrowTokenDecimal` | `any` |
| `collateralTokenDecimal` | `any` |

#### Returns

`Promise`<[`PooledCreditLineOperation`](../interfaces/types_Types.PooledCreditLineOperation.md)[]\>

#### Defined in

[src/subgraph/PooledCreditLine.ts:673](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/subgraph/PooledCreditLine.ts#L673)
