[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/utils/creditLineEthUtils](../modules/api_utils_creditLineEthUtils.md) / CreditLineEthUtils

# Class: CreditLineEthUtils

[api/utils/creditLineEthUtils](../modules/api_utils_creditLineEthUtils.md).CreditLineEthUtils

**`description`** For handling credit line operations that use ETH

## Table of contents

### Constructors

- [constructor](api_utils_creditLineEthUtils.CreditLineEthUtils.md#constructor)

### Properties

- [config](api_utils_creditLineEthUtils.CreditLineEthUtils.md#config)
- [creditLineUtils](api_utils_creditLineEthUtils.CreditLineEthUtils.md#creditlineutils)
- [tokenManager](api_utils_creditLineEthUtils.CreditLineEthUtils.md#tokenmanager)

### Methods

- [depositEthAsCollateralToTheCreditLine](api_utils_creditLineEthUtils.CreditLineEthUtils.md#depositethascollateraltothecreditline)
- [repayEthToCreditLine](api_utils_creditLineEthUtils.CreditLineEthUtils.md#repayethtocreditline)

## Constructors

### constructor

• **new CreditLineEthUtils**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/utils/creditLineEthUtils.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L19)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/api/utils/creditLineEthUtils.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L17)

___

### creditLineUtils

• `Private` **creditLineUtils**: `CreditLineEthUtils`

#### Defined in

[src/api/utils/creditLineEthUtils.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L15)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/api/utils/creditLineEthUtils.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L16)

## Methods

### depositEthAsCollateralToTheCreditLine

▸ **depositEthAsCollateralToTheCreditLine**(`creditLineNumber`, `amount`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** convert ETH to WETH and deposit to credit line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | credit line ID |
| `amount` | `string` | amount of ETH to be deposited as collateral |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | strategy to which the collateral must be deposited |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction parameters |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/utils/creditLineEthUtils.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L37)

___

### repayEthToCreditLine

▸ **repayEthToCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Convert ETH to WETH and repay to credit line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | id of the credit line |
| `amount` | `string` | amount of ETH that needs to be repaid to the credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction parameters |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/utils/creditLineEthUtils.ts:66](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/utils/creditLineEthUtils.ts#L66)
