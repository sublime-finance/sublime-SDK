[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SublimeSdk

# Class: SublimeSdk

[index](../modules/index.md).SublimeSdk

## Table of contents

### Constructors

- [constructor](index.SublimeSdk.md#constructor)

### Properties

- [sublimeConnector](index.SublimeSdk.md#sublimeconnector)
- [sublimeSubgraph](index.SublimeSdk.md#sublimesubgraph)
- [tokenManager](index.SublimeSdk.md#tokenmanager)

### Methods

- [Connector](index.SublimeSdk.md#connector)
- [Subgraph](index.SublimeSdk.md#subgraph)
- [TokenManager](index.SublimeSdk.md#tokenmanager)
- [types](index.SublimeSdk.md#types)

## Constructors

### constructor

• **new SublimeSdk**(`provider`, `signer`, `subgraphUrl`, `priceSubgraphUrl`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `signer` | `Signer` |
| `subgraphUrl` | `string` |
| `priceSubgraphUrl` | `string` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |

#### Defined in

[src/index.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L19)

## Properties

### sublimeConnector

• `Private` **sublimeConnector**: [`SublimeConnector`](sublime.SublimeConnector.md)

#### Defined in

[src/index.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L15)

___

### sublimeSubgraph

• `Private` **sublimeSubgraph**: [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Defined in

[src/index.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L16)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/index.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L17)

## Methods

### Connector

▸ **Connector**(): [`SublimeConnector`](sublime.SublimeConnector.md)

#### Returns

[`SublimeConnector`](sublime.SublimeConnector.md)

Instance of Sublime Connector

#### Defined in

[src/index.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L30)

___

### Subgraph

▸ **Subgraph**(): [`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

#### Returns

[`SublimeSubgraph`](subgraph.SublimeSubgraph.md)

Instance of Subgraph Class used for querying

#### Defined in

[src/index.ts:38](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L38)

___

### TokenManager

▸ **TokenManager**(): [`TokenManager`](tokenManager.TokenManager.md)

#### Returns

[`TokenManager`](tokenManager.TokenManager.md)

Instance of Token Manager

#### Defined in

[src/index.ts:46](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L46)

___

### types

▸ `Static` **types**(): `any`

#### Returns

`any`

types used in the SDK

#### Defined in

[src/index.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/index.ts#L53)
