[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/pool](../modules/api_pool.md) / PoolApi

# Class: PoolApi

[api/pool](../modules/api_pool.md).PoolApi

**`todo`** Pools are not let released

## Table of contents

### Constructors

- [constructor](api_pool.PoolApi.md#constructor)

### Properties

- [config](api_pool.PoolApi.md#config)
- [poolFactory](api_pool.PoolApi.md#poolfactory)
- [signer](api_pool.PoolApi.md#signer)
- [tokenManager](api_pool.PoolApi.md#tokenmanager)

### Methods

- [PoolUtils](api_pool.PoolApi.md#poolutils)
- [calculateCurrentPeriod](api_pool.PoolApi.md#calculatecurrentperiod)
- [createPool](api_pool.PoolApi.md#createpool)
- [depositCollateral](api_pool.PoolApi.md#depositcollateral)
- [generatePoolAddress](api_pool.PoolApi.md#generatepooladdress)
- [getBalanceDetails](api_pool.PoolApi.md#getbalancedetails)
- [getCurrentCollateralRatio](api_pool.PoolApi.md#getcurrentcollateralratio)
- [getLoanStatus](api_pool.PoolApi.md#getloanstatus)
- [getMarginCallEndTime](api_pool.PoolApi.md#getmargincallendtime)
- [getPoolInfo](api_pool.PoolApi.md#getpoolinfo)
- [getTotalSupply](api_pool.PoolApi.md#gettotalsupply)
- [interestPerPeriod](api_pool.PoolApi.md#interestperperiod)
- [interestPerSecond](api_pool.PoolApi.md#interestpersecond)
- [interestTillNow](api_pool.PoolApi.md#interesttillnow)
- [liquidateLender](api_pool.PoolApi.md#liquidatelender)
- [liquidatePool](api_pool.PoolApi.md#liquidatepool)

## Constructors

### constructor

• **new PoolApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/pool.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L34)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/pool.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L29)

___

### poolFactory

• `Private` **poolFactory**: `PoolFactory`

#### Defined in

[src/api/pool.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L32)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pool.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L28)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/pool.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L30)

## Methods

### PoolUtils

▸ **PoolUtils**(): [`PoolEthUtils`](api_utils_poolEthUtils.PoolEthUtils.md)

#### Returns

[`PoolEthUtils`](api_utils_poolEthUtils.PoolEthUtils.md)

#### Defined in

[src/api/pool.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L41)

___

### calculateCurrentPeriod

▸ **calculateCurrentPeriod**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:202](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L202)

___

### createPool

▸ **createPool**(`params`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`PoolGenerateParams`](../interfaces/types_poolGenerateParam.PoolGenerateParams.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L45)

___

### depositCollateral

▸ **depositCollateral**(`poolContract`, `amount`, `transferFromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |
| `transferFromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L111)

___

### generatePoolAddress

▸ **generatePoolAddress**(`creator`, `salt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |
| `salt` | `BytesLike` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:107](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L107)

___

### getBalanceDetails

▸ **getBalanceDetails**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:218](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L218)

___

### getCurrentCollateralRatio

▸ **getCurrentCollateralRatio**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:146](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L146)

___

### getLoanStatus

▸ **getLoanStatus**(`poolContract`): `Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`LoanStatus`](../enums/types_poolGenerateParam.LoanStatus.md)\>

#### Defined in

[src/api/pool.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L212)

___

### getMarginCallEndTime

▸ **getMarginCallEndTime**(`poolContract`, `lender`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:207](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L207)

___

### getPoolInfo

▸ **getPoolInfo**(`poolContract`): `Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<[`PoolInfo`](../interfaces/types_poolInfo.PoolInfo.md)\>

#### Defined in

[src/api/pool.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L240)

___

### getTotalSupply

▸ **getTotalSupply**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L230)

___

### interestPerPeriod

▸ **interestPerPeriod**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:175](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L175)

___

### interestPerSecond

▸ **interestPerSecond**(`poolContract`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `amount` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:188](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L188)

___

### interestTillNow

▸ **interestTillNow**(`poolContract`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/pool.ts:135](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L135)

___

### liquidateLender

▸ **liquidateLender**(`poolContract`, `lender`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `lender` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:163](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L163)

___

### liquidatePool

▸ **liquidatePool**(`poolContract`, `fromSavingsAccount`, `toSavingsAccount`, `recieveLiquidityShare`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolContract` | `string` |
| `fromSavingsAccount` | `boolean` |
| `toSavingsAccount` | `boolean` |
| `recieveLiquidityShare` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pool.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pool.ts#L152)
