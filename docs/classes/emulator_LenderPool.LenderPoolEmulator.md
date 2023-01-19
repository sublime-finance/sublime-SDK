[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [emulator/LenderPool](../modules/emulator_LenderPool.md) / LenderPoolEmulator

# Class: LenderPoolEmulator

[emulator/LenderPool](../modules/emulator_LenderPool.md).LenderPoolEmulator

## Hierarchy

- [`EmulatorHelper`](emulator_Helpers.EmulatorHelper.md)

  ↳ **`LenderPoolEmulator`**

## Table of contents

### Constructors

- [constructor](emulator_LenderPool.LenderPoolEmulator.md#constructor)

### Properties

- [borrowerInterestData](emulator_LenderPool.LenderPoolEmulator.md#borrowerinterestdata)
- [dataFromPooledCreditLines](emulator_LenderPool.LenderPoolEmulator.md#datafrompooledcreditlines)
- [lenderData](emulator_LenderPool.LenderPoolEmulator.md#lenderdata)
- [lenderPerPool](emulator_LenderPool.LenderPoolEmulator.md#lenderperpool)
- [lenderPoolExternalData](emulator_LenderPool.LenderPoolEmulator.md#lenderpoolexternaldata)
- [lenderPoolState](emulator_LenderPool.LenderPoolEmulator.md#lenderpoolstate)
- [totalSupply](emulator_LenderPool.LenderPoolEmulator.md#totalsupply)
- [yieldInterestData](emulator_LenderPool.LenderPoolEmulator.md#yieldinterestdata)

### Methods

- [\_calculateLenderInterest](emulator_LenderPool.LenderPoolEmulator.md#_calculatelenderinterest)
- [\_calculatePrincipalWithdrawable](emulator_LenderPool.LenderPoolEmulator.md#_calculateprincipalwithdrawable)
- [\_updateInterestSharesToWithdraw](emulator_LenderPool.LenderPoolEmulator.md#_updateinterestsharestowithdraw)
- [borrowerInterestSharesWithdrawnByLender](emulator_LenderPool.LenderPoolEmulator.md#borrowerinterestshareswithdrawnbylender)
- [calculatePrincipalWithdrawable](emulator_LenderPool.LenderPoolEmulator.md#calculateprincipalwithdrawable)
- [calculateWithdrawableLiquidity](emulator_LenderPool.LenderPoolEmulator.md#calculatewithdrawableliquidity)
- [getAllLenders](emulator_LenderPool.LenderPoolEmulator.md#getalllenders)
- [getLenderBalance](emulator_LenderPool.LenderPoolEmulator.md#getlenderbalance)
- [getLenderData](emulator_LenderPool.LenderPoolEmulator.md#getlenderdata)
- [getLenderInterest](emulator_LenderPool.LenderPoolEmulator.md#getlenderinterest)
- [getPrincipalWithdrawableForAllLenders](emulator_LenderPool.LenderPoolEmulator.md#getprincipalwithdrawableforalllenders)
- [min](emulator_LenderPool.LenderPoolEmulator.md#min)
- [now](emulator_LenderPool.LenderPoolEmulator.md#now)
- [totalInterestWithdrawnByLender](emulator_LenderPool.LenderPoolEmulator.md#totalinterestwithdrawnbylender)
- [totalPrincipalSuppliedByLender](emulator_LenderPool.LenderPoolEmulator.md#totalprincipalsuppliedbylender)
- [withdrawableLiquidatedCollateral](emulator_LenderPool.LenderPoolEmulator.md#withdrawableliquidatedcollateral)
- [withdrawableLiquidity](emulator_LenderPool.LenderPoolEmulator.md#withdrawableliquidity)
- [yieldInterestSharesWithdrawnByLender](emulator_LenderPool.LenderPoolEmulator.md#yieldinterestshareswithdrawnbylender)

## Constructors

### constructor

• **new LenderPoolEmulator**(`lenderPoolState`, `lenderPoolExternalData`, `dataFromPooledCreditLines`, `lendersPerPool`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderPoolState` | [`LenderPoolState`](../interfaces/types_Types.LenderPoolState.md) |
| `lenderPoolExternalData` | [`LenderPoolExternalData`](../interfaces/types_Types.LenderPoolExternalData.md) |
| `dataFromPooledCreditLines` | [`DataFromPooledCreditLines`](../interfaces/types_Types.DataFromPooledCreditLines.md) |
| `lendersPerPool` | [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[] |

#### Overrides

[EmulatorHelper](emulator_Helpers.EmulatorHelper.md).[constructor](emulator_Helpers.EmulatorHelper.md#constructor)

#### Defined in

[src/emulator/LenderPool.ts:26](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L26)

## Properties

### borrowerInterestData

• `Private` **borrowerInterestData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L19)

___

### dataFromPooledCreditLines

• `Private` **dataFromPooledCreditLines**: [`DataFromPooledCreditLines`](../interfaces/types_Types.DataFromPooledCreditLines.md)

#### Defined in

[src/emulator/LenderPool.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L16)

___

### lenderData

• `Private` **lenderData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L18)

___

### lenderPerPool

• `Private` **lenderPerPool**: [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[]

#### Defined in

[src/emulator/LenderPool.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L22)

___

### lenderPoolExternalData

• `Private` **lenderPoolExternalData**: [`LenderPoolExternalData`](../interfaces/types_Types.LenderPoolExternalData.md)

#### Defined in

[src/emulator/LenderPool.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L15)

___

### lenderPoolState

• `Private` **lenderPoolState**: [`LenderPoolState`](../interfaces/types_Types.LenderPoolState.md)

#### Defined in

[src/emulator/LenderPool.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L14)

___

### totalSupply

• `Private` **totalSupply**: `BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:24](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L24)

___

### yieldInterestData

• `Private` **yieldInterestData**: `Record`<`string`, `BigNumber`\> = `{}`

#### Defined in

[src/emulator/LenderPool.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L20)

## Methods

### \_calculateLenderInterest

▸ `Private` **_calculateLenderInterest**(`_lenderBalance`, `_borrowLimit`, `borrowerInterestSharesWithdrawnByLender`, `yieldInterestSharesWithdrawnByLender`): [`BigNumber`, `BigNumber`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_lenderBalance` | `BigNumber` |
| `_borrowLimit` | `BigNumber` |
| `borrowerInterestSharesWithdrawnByLender` | `BigNumber` |
| `yieldInterestSharesWithdrawnByLender` | `BigNumber` |

#### Returns

[`BigNumber`, `BigNumber`]

#### Defined in

[src/emulator/LenderPool.ts:87](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L87)

___

### \_calculatePrincipalWithdrawable

▸ `Private` **_calculatePrincipalWithdrawable**(`lenderBalance`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderBalance` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:123](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L123)

___

### \_updateInterestSharesToWithdraw

▸ `Private` **_updateInterestSharesToWithdraw**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L240)

___

### borrowerInterestSharesWithdrawnByLender

▸ **borrowerInterestSharesWithdrawnByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:141](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L141)

___

### calculatePrincipalWithdrawable

▸ **calculatePrincipalWithdrawable**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L70)

___

### calculateWithdrawableLiquidity

▸ `Private` **calculateWithdrawableLiquidity**(`lenderAddress`, `_isLiquidationWithdrawn`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |
| `_isLiquidationWithdrawn` | `boolean` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:199](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L199)

___

### getAllLenders

▸ **getAllLenders**(): [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[]

#### Returns

[`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)[]

#### Defined in

[src/emulator/LenderPool.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L157)

___

### getLenderBalance

▸ **getLenderBalance**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L48)

___

### getLenderData

▸ **getLenderData**(`lenderAddress`): [`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

[`LenderPerPool`](../interfaces/types_Types.LenderPerPool.md)

#### Defined in

[src/emulator/LenderPool.ts:169](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L169)

___

### getLenderInterest

▸ **getLenderInterest**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L56)

___

### getPrincipalWithdrawableForAllLenders

▸ **getPrincipalWithdrawableForAllLenders**(): [`LenderPerPoolPrincipalWithdrawable`](../interfaces/types_Types.LenderPerPoolPrincipalWithdrawable.md)[]

#### Returns

[`LenderPerPoolPrincipalWithdrawable`](../interfaces/types_Types.LenderPerPoolPrincipalWithdrawable.md)[]

#### Defined in

[src/emulator/LenderPool.ts:161](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L161)

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

### totalInterestWithdrawnByLender

▸ **totalInterestWithdrawnByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:132](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L132)

___

### totalPrincipalSuppliedByLender

▸ **totalPrincipalSuppliedByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:187](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L187)

___

### withdrawableLiquidatedCollateral

▸ **withdrawableLiquidatedCollateral**(`lenderAddress?`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress?` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:195](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L195)

___

### withdrawableLiquidity

▸ **withdrawableLiquidity**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:191](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L191)

___

### yieldInterestSharesWithdrawnByLender

▸ **yieldInterestSharesWithdrawnByLender**(`lenderAddress`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lenderAddress` | `string` |

#### Returns

`BigNumber`

#### Defined in

[src/emulator/LenderPool.ts:149](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/emulator/LenderPool.ts#L149)
