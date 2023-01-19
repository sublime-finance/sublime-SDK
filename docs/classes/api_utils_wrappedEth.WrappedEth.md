[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/utils/wrappedEth](../modules/api_utils_wrappedEth.md) / WrappedEth

# Class: WrappedEth

[api/utils/wrappedEth](../modules/api_utils_wrappedEth.md).WrappedEth

## Table of contents

### Constructors

- [constructor](api_utils_wrappedEth.WrappedEth.md#constructor)

### Properties

- [signer](api_utils_wrappedEth.WrappedEth.md#signer)

### Methods

- [convertToWrappedEth](api_utils_wrappedEth.WrappedEth.md#converttowrappedeth)
- [convertWethToEth](api_utils_wrappedEth.WrappedEth.md#convertwethtoeth)

## Constructors

### constructor

• **new WrappedEth**(`signer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Defined in

[src/api/utils/wrappedEth.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/wrappedEth.ts#L12)

## Properties

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/utils/wrappedEth.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/wrappedEth.ts#L10)

## Methods

### convertToWrappedEth

▸ **convertToWrappedEth**(`wethContractAddress`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wethContractAddress` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/utils/wrappedEth.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/wrappedEth.ts#L16)

___

### convertWethToEth

▸ **convertWethToEth**(`wethContractAddress`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wethContractAddress` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/utils/wrappedEth.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/wrappedEth.ts#L21)
