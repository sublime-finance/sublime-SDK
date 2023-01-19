[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [tokenManager](../modules/tokenManager.md) / TokenManager

# Class: TokenManager

[tokenManager](../modules/tokenManager.md).TokenManager

**`description`** An token manager stores, retrieves and caches the data like token name, decimals, logos and prices.

## Table of contents

### Constructors

- [constructor](tokenManager.TokenManager.md#constructor)

### Properties

- [addressMapper](tokenManager.TokenManager.md#addressmapper)
- [chainlinkFeedsAddress](tokenManager.TokenManager.md#chainlinkfeedsaddress)
- [decimals](tokenManager.TokenManager.md#decimals)
- [logoUrlTemplate](tokenManager.TokenManager.md#logourltemplate)
- [logos](tokenManager.TokenManager.md#logos)
- [names](tokenManager.TokenManager.md#names)
- [priceLastUpdatedAt](tokenManager.TokenManager.md#pricelastupdatedat)
- [priceRefreshInterval](tokenManager.TokenManager.md#pricerefreshinterval)
- [priceSubgraphUrl](tokenManager.TokenManager.md#pricesubgraphurl)
- [prices](tokenManager.TokenManager.md#prices)
- [signer](tokenManager.TokenManager.md#signer)
- [subgraph](tokenManager.TokenManager.md#subgraph)

### Methods

- [\_updatePricePerAsset](tokenManager.TokenManager.md#_updatepriceperasset)
- [getAssetMeta](tokenManager.TokenManager.md#getassetmeta)
- [getLogo](tokenManager.TokenManager.md#getlogo)
- [getPricePerAsset](tokenManager.TokenManager.md#getpriceperasset)
- [getTokenDecimals](tokenManager.TokenManager.md#gettokendecimals)
- [getTokenName](tokenManager.TokenManager.md#gettokenname)
- [updateAll](tokenManager.TokenManager.md#updateall)
- [updateLogo](tokenManager.TokenManager.md#updatelogo)
- [updatePricePerAsset](tokenManager.TokenManager.md#updatepriceperasset)
- [updateTokenDecimals](tokenManager.TokenManager.md#updatetokendecimals)
- [updateTokenName](tokenManager.TokenManager.md#updatetokenname)

## Constructors

### constructor

• **new TokenManager**(`signer`, `priceSubgraphUrl`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `priceSubgraphUrl` | `string` |

#### Defined in

[src/tokenManager.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L71)

## Properties

### addressMapper

• `Private` **addressMapper**: `Object` = `{}`

**`description`** used for mapping tokens logos of testnet

#### Defined in

[src/tokenManager.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L45)

___

### chainlinkFeedsAddress

• `Private` **chainlinkFeedsAddress**: `Record`<`string`, `string`\> = `{}`

#### Defined in

[src/tokenManager.ts:62](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L62)

___

### decimals

• `Private` **decimals**: `Object` = `{}`

**`description`** caches number of decimals for a token address

#### Defined in

[src/tokenManager.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L20)

___

### logoUrlTemplate

• `Private` **logoUrlTemplate**: `string` = `'https://tokens.1inch.io/ADDRESS.png'`

**`description`** Base path for logos

#### Defined in

[src/tokenManager.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L50)

___

### logos

• `Private` **logos**: `Object` = `{}`

**`description`** caches the token logo

#### Defined in

[src/tokenManager.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L40)

___

### names

• `Private` **names**: `Object` = `{}`

**`description`** caches name of token

#### Defined in

[src/tokenManager.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L25)

___

### priceLastUpdatedAt

• `Private` **priceLastUpdatedAt**: `Object` = `{}`

**`description`** stores when last time when the token price was updated

#### Defined in

[src/tokenManager.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L35)

___

### priceRefreshInterval

• `Private` **priceRefreshInterval**: `number` = `60000`

**`description`** interval at which prices are refreshed in the SDK

#### Defined in

[src/tokenManager.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L60)

___

### priceSubgraphUrl

• `Private` **priceSubgraphUrl**: `string`

**`description`** subgraph URL that fetches prices

#### Defined in

[src/tokenManager.ts:55](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L55)

___

### prices

• `Private` **prices**: `Object` = `{}`

**`description`** cache the price of token, Updates every 1 min

#### Defined in

[src/tokenManager.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L30)

___

### signer

• `Private` **signer**: `Signer`

**`description`** web3 signer

#### Defined in

[src/tokenManager.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L67)

___

### subgraph

• `Private` **subgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[src/tokenManager.ts:69](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L69)

## Methods

### \_updatePricePerAsset

▸ `Private` **_updatePricePerAsset**(`tokenAddress`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:152](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L152)

___

### getAssetMeta

▸ **getAssetMeta**(`tokenAddress`): `Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

#### Defined in

[src/tokenManager.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L257)

___

### getLogo

▸ **getLogo**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

return url which renders the logo/pic of the token

#### Defined in

[src/tokenManager.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L244)

___

### getPricePerAsset

▸ **getPricePerAsset**(`tokenAddress`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`BigNumber`\>

price of asset

#### Defined in

[src/tokenManager.ts:230](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L230)

___

### getTokenDecimals

▸ **getTokenDecimals**(`tokenAddress`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`number`

number of token decimals

#### Defined in

[src/tokenManager.ts:204](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L204)

___

### getTokenName

▸ **getTokenName**(`tokenAddress`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`string`

token name

#### Defined in

[src/tokenManager.ts:217](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L217)

___

### updateAll

▸ **updateAll**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates the token meta data

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L92)

___

### updateLogo

▸ **updateLogo**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token Logo

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:186](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L186)

___

### updatePricePerAsset

▸ **updatePricePerAsset**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token price

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L137)

___

### updateTokenDecimals

▸ **updateTokenDecimals**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updated the token decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L105)

___

### updateTokenName

▸ **updateTokenName**(`tokenAddress`): `Promise`<`void`\>

**`description`** Updates token name

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/tokenManager.ts:121](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/tokenManager.ts#L121)
