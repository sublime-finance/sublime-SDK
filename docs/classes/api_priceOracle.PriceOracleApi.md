[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/priceOracle](../modules/api_priceOracle.md) / PriceOracleApi

# Class: PriceOracleApi

[api/priceOracle](../modules/api_priceOracle.md).PriceOracleApi

## Table of contents

### Constructors

- [constructor](api_priceOracle.PriceOracleApi.md#constructor)

### Properties

- [config](api_priceOracle.PriceOracleApi.md#config)
- [priceOracleContract](api_priceOracle.PriceOracleApi.md#priceoraclecontract)

### Methods

- [checkIfFeedExists](api_priceOracle.PriceOracleApi.md#checkiffeedexists)
- [getChainLinkFeedAddress](api_priceOracle.PriceOracleApi.md#getchainlinkfeedaddress)
- [getChainlinkLatestPrice](api_priceOracle.PriceOracleApi.md#getchainlinklatestprice)
- [getLatestPrice](api_priceOracle.PriceOracleApi.md#getlatestprice)
- [getUniswapLatestPrice](api_priceOracle.PriceOracleApi.md#getuniswaplatestprice)
- [setChainlinkFeedAddress](api_priceOracle.PriceOracleApi.md#setchainlinkfeedaddress)
- [setUniswapAveragingPeriod](api_priceOracle.PriceOracleApi.md#setuniswapaveragingperiod)
- [setUniswapFeedAddress](api_priceOracle.PriceOracleApi.md#setuniswapfeedaddress)

## Constructors

### constructor

• **new PriceOracleApi**(`signer`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/api/priceOracle.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L16)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/priceOracle.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L14)

___

### priceOracleContract

• `Private` **priceOracleContract**: `PriceOracle`

#### Defined in

[src/api/priceOracle.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L13)

## Methods

### checkIfFeedExists

▸ **checkIfFeedExists**(`num`, `den`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |

#### Returns

`Promise`<`boolean`\>

Returns true if the both the tokens are mapped against each other in the oracle

#### Defined in

[src/api/priceOracle.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L48)

___

### getChainLinkFeedAddress

▸ **getChainLinkFeedAddress**(`token`): `Promise`<[`string`, `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<[`string`, `number`]\>

Returns the addresses of chainlink feed to which the tokens prices are linked

#### Defined in

[src/api/priceOracle.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L37)

___

### getChainlinkLatestPrice

▸ **getChainlinkLatestPrice**(`num`, `den`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

Returns the price of uniswap

#### Defined in

[src/api/priceOracle.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L69)

___

### getLatestPrice

▸ **getLatestPrice**(`num`, `den`): `Promise`<`string`\>

**`description`** Returns the

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |

#### Returns

`Promise`<`string`\>

price of token1 in terms of token2

#### Defined in

[src/api/priceOracle.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L27)

___

### getUniswapLatestPrice

▸ **getUniswapLatestPrice**(`num`, `den`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `den` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

Returns the price from chainlink

#### Defined in

[src/api/priceOracle.ts:58](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L58)

___

### setChainlinkFeedAddress

▸ **setChainlinkFeedAddress**(`token`, `feed`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Can only be called by admin

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `feed` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/priceOracle.ts:81](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L81)

___

### setUniswapAveragingPeriod

▸ **setUniswapAveragingPeriod**(`avgPeriod`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Can be only called by admin

#### Parameters

| Name | Type |
| :------ | :------ |
| `avgPeriod` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/priceOracle.ts:102](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L102)

___

### setUniswapFeedAddress

▸ **setUniswapFeedAddress**(`token1`, `token2`, `feed`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Can be only called by admin

#### Parameters

| Name | Type |
| :------ | :------ |
| `token1` | `string` |
| `token2` | `string` |
| `feed` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/priceOracle.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/priceOracle.ts#L92)
