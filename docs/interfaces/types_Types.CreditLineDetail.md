[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [types/Types](../modules/types_Types.md) / CreditLineDetail

# Interface: CreditLineDetail

[types/Types](../modules/types_Types.md).CreditLineDetail

## Table of contents

### Properties

- [autoLiquidate](types_Types.CreditLineDetail.md#autoliquidate)
- [borrowAsset](types_Types.CreditLineDetail.md#borrowasset)
- [borrowAssetStrategy](types_Types.CreditLineDetail.md#borrowassetstrategy)
- [borrower](types_Types.CreditLineDetail.md#borrower)
- [collateralAsset](types_Types.CreditLineDetail.md#collateralasset)
- [collateralAssetStrategy](types_Types.CreditLineDetail.md#collateralassetstrategy)
- [collateralRatio](types_Types.CreditLineDetail.md#collateralratio)
- [collateralTokens](types_Types.CreditLineDetail.md#collateraltokens)
- [createdAt](types_Types.CreditLineDetail.md#createdat)
- [creditLimit](types_Types.CreditLineDetail.md#creditlimit)
- [currentDebt](types_Types.CreditLineDetail.md#currentdebt)
- [emulator](types_Types.CreditLineDetail.md#emulator)
- [id](types_Types.CreditLineDetail.md#id)
- [idealCollateralRatio](types_Types.CreditLineDetail.md#idealcollateralratio)
- [interestAccrued](types_Types.CreditLineDetail.md#interestaccrued)
- [interestRate](types_Types.CreditLineDetail.md#interestrate)
- [lastPrincipalUpdateTime](types_Types.CreditLineDetail.md#lastprincipalupdatetime)
- [lender](types_Types.CreditLineDetail.md#lender)
- [principal](types_Types.CreditLineDetail.md#principal)
- [requestByLender](types_Types.CreditLineDetail.md#requestbylender)
- [type](types_Types.CreditLineDetail.md#type)

## Properties

### autoLiquidate

• **autoLiquidate**: `boolean`

#### Defined in

[src/types/Types.ts:249](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L249)

___

### borrowAsset

• **borrowAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:248](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L248)

___

### borrowAssetStrategy

• **borrowAssetStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:257](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L257)

___

### borrower

• **borrower**: [`CreditLineUser`](types_Types.CreditLineUser.md)

#### Defined in

[src/types/Types.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L251)

___

### collateralAsset

• **collateralAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:247](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L247)

___

### collateralAssetStrategy

• **collateralAssetStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:258](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L258)

___

### collateralRatio

• **collateralRatio**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:243](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L243)

___

### collateralTokens

• **collateralTokens**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:239](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L239)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/types/Types.ts:256](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L256)

___

### creditLimit

• **creditLimit**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:244](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L244)

___

### currentDebt

• **currentDebt**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:240](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L240)

___

### emulator

• **emulator**: [`CreditLineEmulator`](../classes/emulator_CreditLines.CreditLineEmulator.md)

#### Defined in

[src/types/Types.ts:259](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L259)

___

### id

• **id**: `string`

#### Defined in

[src/types/Types.ts:254](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L254)

___

### idealCollateralRatio

• **idealCollateralRatio**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:246](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L246)

___

### interestAccrued

• **interestAccrued**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L242)

___

### interestRate

• **interestRate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:245](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L245)

___

### lastPrincipalUpdateTime

• **lastPrincipalUpdateTime**: `string`

#### Defined in

[src/types/Types.ts:253](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L253)

___

### lender

• **lender**: [`CreditLineUser`](types_Types.CreditLineUser.md)

#### Defined in

[src/types/Types.ts:250](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L250)

___

### principal

• **principal**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:241](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L241)

___

### requestByLender

• **requestByLender**: `boolean`

#### Defined in

[src/types/Types.ts:255](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L255)

___

### type

• **type**: `string`

#### Defined in

[src/types/Types.ts:252](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L252)
