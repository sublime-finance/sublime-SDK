[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/tokenApi](../modules/api_tokenApi.md) / TokenApi

# Class: TokenApi

[api/tokenApi](../modules/api_tokenApi.md).TokenApi

## Table of contents

### Constructors

- [constructor](api_tokenApi.TokenApi.md#constructor)

### Properties

- [minterTokenContract](api_tokenApi.TokenApi.md#mintertokencontract)
- [signer](api_tokenApi.TokenApi.md#signer)
- [tokenContract](api_tokenApi.TokenApi.md#tokencontract)
- [tokenManager](api_tokenApi.TokenApi.md#tokenmanager)

### Methods

- [IncreaseAllowance](api_tokenApi.TokenApi.md#increaseallowance)
- [\_getBalance](api_tokenApi.TokenApi.md#_getbalance)
- [allowance](api_tokenApi.TokenApi.md#allowance)
- [approve](api_tokenApi.TokenApi.md#approve)
- [getTokenBalance](api_tokenApi.TokenApi.md#gettokenbalance)
- [getUserTokenBalance](api_tokenApi.TokenApi.md#getusertokenbalance)
- [mintTokens](api_tokenApi.TokenApi.md#minttokens)

## Constructors

### constructor

• **new TokenApi**(`signer`, `tokenAddress`, `tokenManager`)

**`description`** if tokenAddress is any invalid token address, the APIs of the class object will fail

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `tokenAddress` | `string` |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/tokenApi.ts:36](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L36)

## Properties

### minterTokenContract

• `Private` **minterTokenContract**: `IERC20Minter`

#### Defined in

[src/api/tokenApi.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L23)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/tokenApi.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L16)

___

### tokenContract

• `Private` **tokenContract**: `ERC20`

**`description`** Contract instance for the given token

#### Defined in

[src/api/tokenApi.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L21)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to update and fetch token metadata

#### Defined in

[src/api/tokenApi.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L28)

## Methods

### IncreaseAllowance

▸ **IncreaseAllowance**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:49](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L49)

___

### \_getBalance

▸ `Private` **_getBalance**(`user`, `prettified`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `string` | address whose balance needs to be fetched |
| `prettified` | `any` |  |

#### Returns

`Promise`<`string`\>

Balance of the given address

#### Defined in

[src/api/tokenApi.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L125)

___

### allowance

▸ **allowance**(`owner`, `spender`, `prettified?`): `Promise`<`string`\>

**`description`** Returns the allowance of spender by owner

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `owner` | `string` | `undefined` |
| `spender` | `string` | `undefined` |
| `prettified` | `boolean` | `false` |

#### Returns

`Promise`<`string`\>

number

#### Defined in

[src/api/tokenApi.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L88)

___

### approve

▸ **approve**(`to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve Allowance to a another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/tokenApi.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L68)

___

### getTokenBalance

▸ **getTokenBalance**(`prettified?`): `Promise`<`string`\>

**`description`** return the current signers token balance.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:105](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L105)

___

### getUserTokenBalance

▸ **getUserTokenBalance**(`user`, `prettified?`): `Promise`<`string`\>

**`description`** return any user token balance

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `user` | `string` | `undefined` |
| `prettified` | `boolean` | `true` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/api/tokenApi.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L115)

___

### mintTokens

▸ **mintTokens**(`addressToReceive`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressToReceive` | `string` |
| `amount` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/tokenApi.ts:137](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/tokenApi.ts#L137)
