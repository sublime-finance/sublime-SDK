[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulator/CreditLines](../modules/emulator_CreditLines.md) / CreditLineEmulator

# Class: CreditLineEmulator

[emulator/CreditLines](../modules/emulator_CreditLines.md).CreditLineEmulator

## Hierarchy

- [`EmulatorHelper`](emulator_Helpers.EmulatorHelper.md)

  ↳ **`CreditLineEmulator`**

## Table of contents

### Constructors

- [constructor](emulator_CreditLines.CreditLineEmulator.md#constructor)

### Properties

- [creditLineState](emulator_CreditLines.CreditLineEmulator.md#creditlinestate)
- [externalData](emulator_CreditLines.CreditLineEmulator.md#externaldata)
- [globals](emulator_CreditLines.CreditLineEmulator.md#globals)

### Methods

- [\_borrowTokensToLiquidate](emulator_CreditLines.CreditLineEmulator.md#_borrowtokenstoliquidate)
- [\_calculateTotalCollateralTokens](emulator_CreditLines.CreditLineEmulator.md#_calculatetotalcollateraltokens)
- [\_equivalentCollateral](emulator_CreditLines.CreditLineEmulator.md#_equivalentcollateral)
- [autoLiquidate](emulator_CreditLines.CreditLineEmulator.md#autoliquidate)
- [borrowAsset](emulator_CreditLines.CreditLineEmulator.md#borrowasset)
- [borrowAssetStrategy](emulator_CreditLines.CreditLineEmulator.md#borrowassetstrategy)
- [borrowRate](emulator_CreditLines.CreditLineEmulator.md#borrowrate)
- [borrowTokensToLiquidate](emulator_CreditLines.CreditLineEmulator.md#borrowtokenstoliquidate)
- [borrower](emulator_CreditLines.CreditLineEmulator.md#borrower)
- [calculateBorrowableAmount](emulator_CreditLines.CreditLineEmulator.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](emulator_CreditLines.CreditLineEmulator.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](emulator_CreditLines.CreditLineEmulator.md#calculatecurrentdebt)
- [calculateInterest](emulator_CreditLines.CreditLineEmulator.md#calculateinterest)
- [calculateInterestAccrued](emulator_CreditLines.CreditLineEmulator.md#calculateinterestaccrued)
- [calculateTotalCollateralTokens](emulator_CreditLines.CreditLineEmulator.md#calculatetotalcollateraltokens)
- [collateralAsset](emulator_CreditLines.CreditLineEmulator.md#collateralasset)
- [collateralAssetStrategy](emulator_CreditLines.CreditLineEmulator.md#collateralassetstrategy)
- [createdAt](emulator_CreditLines.CreditLineEmulator.md#createdat)
- [getCreditLimit](emulator_CreditLines.CreditLineEmulator.md#getcreditlimit)
- [getId](emulator_CreditLines.CreditLineEmulator.md#getid)
- [getPrincipal](emulator_CreditLines.CreditLineEmulator.md#getprincipal)
- [getStatus](emulator_CreditLines.CreditLineEmulator.md#getstatus)
- [idealCollateralRatio](emulator_CreditLines.CreditLineEmulator.md#idealcollateralratio)
- [lastPrincipalUpdateTime](emulator_CreditLines.CreditLineEmulator.md#lastprincipalupdatetime)
- [lender](emulator_CreditLines.CreditLineEmulator.md#lender)
- [min](emulator_CreditLines.CreditLineEmulator.md#min)
- [now](emulator_CreditLines.CreditLineEmulator.md#now)
- [requestByLender](emulator_CreditLines.CreditLineEmulator.md#requestbylender)
- [totalInterestRepaid](emulator_CreditLines.CreditLineEmulator.md#totalinterestrepaid)
- [withdrawableCollateral](emulator_CreditLines.CreditLineEmulator.md#withdrawablecollateral)

## Constructors

### constructor

• **new CreditLineEmulator**(`creditLineState`, `externalData`, `globals`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `creditLineState` | [`CreditLineState`](../interfaces/types_Types.CreditLineState.md) |
| `externalData` | [`CreditLineExternalData`](../interfaces/types_Types.CreditLineExternalData.md) |
| `globals` | [`CreditLineGlobals`](../interfaces/types_Types.CreditLineGlobals.md) |

#### Overrides

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[constructor](emulator_Helpers.EmulatorHelper.md#constructor)

#### Defined in

[src/emulator/CreditLines.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L14)

## Properties

### creditLineState

• **creditLineState**: [`CreditLineState`](../interfaces/types_Types.CreditLineState.md)

#### Defined in

[src/emulator/CreditLines.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L10)

___

### externalData

• **externalData**: [`CreditLineExternalData`](../interfaces/types_Types.CreditLineExternalData.md)

#### Defined in

[src/emulator/CreditLines.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L11)

___

### globals

• **globals**: [`CreditLineGlobals`](../interfaces/types_Types.CreditLineGlobals.md)

#### Defined in

[src/emulator/CreditLines.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L12)

## Methods

### \_borrowTokensToLiquidate

▸ `Private` **_borrowTokensToLiquidate**(`_collateralTokens`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_collateralTokens` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:108](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L108)

___

### \_calculateTotalCollateralTokens

▸ `Private` **_calculateTotalCollateralTokens**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L44)

___

### \_equivalentCollateral

▸ `Private` **_equivalentCollateral**(`_borrowTokens`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_borrowTokens` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:116](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L116)

___

### autoLiquidate

▸ **autoLiquidate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/emulator/CreditLines.ts:173](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L173)

___

### borrowAsset

▸ **borrowAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L157)

___

### borrowAssetStrategy

▸ **borrowAssetStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:193](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L193)

___

### borrowRate

▸ **borrowRate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:165](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L165)

___

### borrowTokensToLiquidate

▸ **borrowTokensToLiquidate**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L96)

___

### borrower

▸ **borrower**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:181](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L181)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:67](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L67)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(): [`BigNumber`, `BigNumber`]

#### Returns

[`BigNumber`, `BigNumber`]

#### Defined in

[src/emulator/CreditLines.ts:120](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L120)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L48)

___

### calculateInterest

▸ `Private` **calculateInterest**(`principal`, `borrowRate`, `timeElapsed`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `principal` | `BigNumber` |
| `borrowRate` | `BigNumber` |
| `timeElapsed` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:63](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L63)

___

### calculateInterestAccrued

▸ **calculateInterestAccrued**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:53](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L53)

___

### calculateTotalCollateralTokens

▸ **calculateTotalCollateralTokens**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L40)

___

### collateralAsset

▸ **collateralAsset**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L161)

___

### collateralAssetStrategy

▸ **collateralAssetStrategy**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:197](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L197)

___

### createdAt

▸ **createdAt**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:153](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L153)

___

### getCreditLimit

▸ **getCreditLimit**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:138](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L138)

___

### getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L21)

___

### getPrincipal

▸ **getPrincipal**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L134)

___

### getStatus

▸ **getStatus**(): [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Returns

[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/emulator/CreditLines.ts:142](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L142)

___

### idealCollateralRatio

▸ **idealCollateralRatio**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L169)

___

### lastPrincipalUpdateTime

▸ **lastPrincipalUpdateTime**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:185](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L185)

___

### lender

▸ **lender**(): `string`

#### Returns

`string`

#### Defined in

[src/emulator/CreditLines.ts:177](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L177)

___

### min

▸ `Protected` **min**(`a`, `b`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BigNumber` |
| `b` | `BigNumber` |

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[min](emulator_Helpers.EmulatorHelper.md#min)

#### Defined in

[src/emulator/Helpers.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/Helpers.ts#L10)

___

### now

▸ `Protected` **now**(): `BigNumber`

#### Returns

`BigNumber`

#### Inherited from

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[now](emulator_Helpers.EmulatorHelper.md#now)

#### Defined in

[src/emulator/Helpers.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/Helpers.ts#L6)

___

### requestByLender

▸ **requestByLender**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/emulator/CreditLines.ts:189](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L189)

___

### totalInterestRepaid

▸ **totalInterestRepaid**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:201](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L201)

___

### withdrawableCollateral

▸ **withdrawableCollateral**(): `BigNumber`

#### Returns

`BigNumber`

#### Defined in

[src/emulator/CreditLines.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/CreditLines.ts#L25)
