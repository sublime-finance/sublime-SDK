[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/creditLines](../modules/api_creditLines.md) / CreditLineApi

# Class: CreditLineApi

[api/creditLines](../modules/api_creditLines.md).CreditLineApi

## Table of contents

### Constructors

- [constructor](api_creditLines.CreditLineApi.md#constructor)

### Properties

- [config](api_creditLines.CreditLineApi.md#config)
- [creditLineContract](api_creditLines.CreditLineApi.md#creditlinecontract)
- [signer](api_creditLines.CreditLineApi.md#signer)
- [tokenManager](api_creditLines.CreditLineApi.md#tokenmanager)

### Methods

- [CreditLineEthUtils](api_creditLines.CreditLineApi.md#creditlineethutils)
- [acceptCreditLine](api_creditLines.CreditLineApi.md#acceptcreditline)
- [borrowFromCreditLine](api_creditLines.CreditLineApi.md#borrowfromcreditline)
- [calculateBorrowableAmount](api_creditLines.CreditLineApi.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](api_creditLines.CreditLineApi.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](api_creditLines.CreditLineApi.md#calculatecurrentdebt)
- [calculateInterestAccrued](api_creditLines.CreditLineApi.md#calculateinterestaccrued)
- [calculateTotalCollateralTokens](api_creditLines.CreditLineApi.md#calculatetotalcollateraltokens)
- [cancelCreditLine](api_creditLines.CreditLineApi.md#cancelcreditline)
- [closeCreditLine](api_creditLines.CreditLineApi.md#closecreditline)
- [depositCollateral](api_creditLines.CreditLineApi.md#depositcollateral)
- [liquidateCreditLine](api_creditLines.CreditLineApi.md#liquidatecreditline)
- [repayCreditLine](api_creditLines.CreditLineApi.md#repaycreditline)
- [requestCreditLineToBorrower](api_creditLines.CreditLineApi.md#requestcreditlinetoborrower)
- [requestCreditLineToLender](api_creditLines.CreditLineApi.md#requestcreditlinetolender)
- [updateBorrowLimitLimits](api_creditLines.CreditLineApi.md#updateborrowlimitlimits)
- [updateBorrowRateLimits](api_creditLines.CreditLineApi.md#updateborrowratelimits)
- [updateIdealCollateralRatioLimits](api_creditLines.CreditLineApi.md#updateidealcollateralratiolimits)
- [updateLiquidatorRewardFraction](api_creditLines.CreditLineApi.md#updateliquidatorrewardfraction)
- [updateProtocolFeeFraction](api_creditLines.CreditLineApi.md#updateprotocolfeefraction)
- [withdrawAllCollateralFromCreditLine](api_creditLines.CreditLineApi.md#withdrawallcollateralfromcreditline)
- [withdrawCollateralFromCreditLine](api_creditLines.CreditLineApi.md#withdrawcollateralfromcreditline)
- [withdrawableCollateral](api_creditLines.CreditLineApi.md#withdrawablecollateral)

## Constructors

### constructor

• **new CreditLineApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/creditLines.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L39)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** All sublime contract addresses

#### Defined in

[src/api/creditLines.ts:32](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L32)

___

### creditLineContract

• `Private` **creditLineContract**: `CreditLine`

**`description`** Instance of credit line contract

#### Defined in

[src/api/creditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L22)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/creditLines.ts:37](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L37)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to fetch and token metadata

#### Defined in

[src/api/creditLines.ts:27](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L27)

## Methods

### CreditLineEthUtils

▸ **CreditLineEthUtils**(): [`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

**`description`** The returned object helps interact with polls that have ETH as collateral or borrow token

#### Returns

[`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

Instance of Credit line Eth Utils.

#### Defined in

[src/api/creditLines.ts:50](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L50)

___

### acceptCreditLine

▸ **acceptCreditLine**(`creditLine`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Accpeting a credit line.

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLine` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:170](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L170)

___

### borrowFromCreditLine

▸ **borrowFromCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Borrow tokens from credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:354](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L354)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total amount that can be borrowed from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

borrowable amount in borrow tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L212)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calcualte the current collateral ratio of a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral ratio (easy readable)

#### Defined in

[src/api/creditLines.ts:238](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L238)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calcualte the total debt for a credit line till now

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens

#### Defined in

[src/api/creditLines.ts:196](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L196)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculated the total accrued till now for a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

debt in borrow tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:179](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L179)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the total collateral tokens held against a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens number (easy readable)

#### Defined in

[src/api/creditLines.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L248)

___

### cancelCreditLine

▸ **cancelCreditLine**(`id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Cancel a credit line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:229](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L229)

___

### closeCreditLine

▸ **closeCreditLine**(`creditLineNumber`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Close a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:395](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L395)

___

### depositCollateral

▸ **depositCollateral**(`creditLineNumber`, `amount`, `fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral to a credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `fromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:325](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L325)

___

### liquidateCreditLine

▸ **liquidateCreditLine**(`creditLineNumber`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate a credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:405](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L405)

___

### repayCreditLine

▸ **repayCreditLine**(`creditLineNumber`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay the amount to credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:375](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L375)

___

### requestCreditLineToBorrower

▸ **requestCreditLineToBorrower**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to borrower

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[src/api/creditLines.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L115)

___

### requestCreditLineToLender

▸ **requestCreditLineToLender**(`request`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Requests a new credit line to lender

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`CreditLineRequest`](../interfaces/types_Types.CreditLineRequest.md) | details of the credit line to request |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | transaction options |

#### Returns

`Promise`<`ContractTransaction`\>

contract transaction

#### Defined in

[src/api/creditLines.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L60)

___

### updateBorrowLimitLimits

▸ **updateBorrowLimitLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:413](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L413)

___

### updateBorrowRateLimits

▸ **updateBorrowRateLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L421)

___

### updateIdealCollateralRatioLimits

▸ **updateIdealCollateralRatioLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:417](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L417)

___

### updateLiquidatorRewardFraction

▸ **updateLiquidatorRewardFraction**(`fee`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fee` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:429](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L429)

___

### updateProtocolFeeFraction

▸ **updateProtocolFeeFraction**(`fee`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fee` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:425](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L425)

___

### withdrawAllCollateralFromCreditLine

▸ **withdrawAllCollateralFromCreditLine**(`creditLineNumber`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws all possible collateral from the credit line

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |
| `toSavingsAccount` | `boolean` | `false` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/creditLines.ts:310](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L310)

___

### withdrawCollateralFromCreditLine

▸ **withdrawCollateralFromCreditLine**(`creditLineNumber`, `amount`, `toSavingsAccount?`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraws the collateral from the credit line

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `creditLineNumber` | `BigNumberish` | `undefined` |  |
| `amount` | `string` | `undefined` |  |
| `toSavingsAccount` | `boolean` | `false` | - |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | `undefined` | transaction options directly transferred from credit line to user's savings account |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/creditLines.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L280)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(`creditLineNumber`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the amount the collateral that can be withdrawn from the credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineNumber` | `BigNumberish` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

collateral tokens (easy readable)

#### Defined in

[src/api/creditLines.ts:262](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/creditLines.ts#L262)
