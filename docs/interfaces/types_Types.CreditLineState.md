[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [types/Types](../modules/types_Types.md) / CreditLineState

# Interface: CreditLineState

[types/Types](../modules/types_Types.md).CreditLineState

## Table of contents

### Properties

- [autoLiquidation](types_Types.CreditLineState.md#autoliquidation)
- [borrowAsset](types_Types.CreditLineState.md#borrowasset)
- [borrowAssetStrategy](types_Types.CreditLineState.md#borrowassetstrategy)
- [borrowLimit](types_Types.CreditLineState.md#borrowlimit)
- [borrowRate](types_Types.CreditLineState.md#borrowrate)
- [borrower](types_Types.CreditLineState.md#borrower)
- [collateralAsset](types_Types.CreditLineState.md#collateralasset)
- [collateralAssetStrategy](types_Types.CreditLineState.md#collateralassetstrategy)
- [collateralShareInStrategy](types_Types.CreditLineState.md#collateralshareinstrategy)
- [createdAt](types_Types.CreditLineState.md#createdat)
- [creditLineStatus](types_Types.CreditLineState.md#creditlinestatus)
- [id](types_Types.CreditLineState.md#id)
- [idealCollateralRatio](types_Types.CreditLineState.md#idealcollateralratio)
- [interestAccruedTillLastPrincipalUpdate](types_Types.CreditLineState.md#interestaccruedtilllastprincipalupdate)
- [lastPrincipalUpdateTime](types_Types.CreditLineState.md#lastprincipalupdatetime)
- [lender](types_Types.CreditLineState.md#lender)
- [principal](types_Types.CreditLineState.md#principal)
- [requestByLender](types_Types.CreditLineState.md#requestbylender)
- [totalInterestRepaid](types_Types.CreditLineState.md#totalinterestrepaid)

## Properties

### autoLiquidation

• **autoLiquidation**: `boolean`

#### Defined in

[src/types/emulator/creditLines.ts:18](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L18)

___

### borrowAsset

• **borrowAsset**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:16](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L16)

___

### borrowAssetStrategy

• **borrowAssetStrategy**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:22](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L22)

___

### borrowLimit

• **borrowLimit**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:14](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L14)

___

### borrowRate

• **borrowRate**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:9](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L9)

___

### borrower

• **borrower**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:20](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L20)

___

### collateralAsset

• **collateralAsset**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:17](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L17)

___

### collateralAssetStrategy

• **collateralAssetStrategy**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:23](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L23)

___

### collateralShareInStrategy

• **collateralShareInStrategy**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:6](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L6)

___

### createdAt

• **createdAt**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:15](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L15)

___

### creditLineStatus

• **creditLineStatus**: [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/types/emulator/creditLines.ts:13](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L13)

___

### id

• **id**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:5](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L5)

___

### idealCollateralRatio

• **idealCollateralRatio**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:12](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L12)

___

### interestAccruedTillLastPrincipalUpdate

• **interestAccruedTillLastPrincipalUpdate**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:10](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L10)

___

### lastPrincipalUpdateTime

• **lastPrincipalUpdateTime**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:8](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L8)

___

### lender

• **lender**: `string`

#### Defined in

[src/types/emulator/creditLines.ts:19](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L19)

___

### principal

• **principal**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:7](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L7)

___

### requestByLender

• **requestByLender**: `boolean`

#### Defined in

[src/types/emulator/creditLines.ts:21](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L21)

___

### totalInterestRepaid

• **totalInterestRepaid**: `BigNumber`

#### Defined in

[src/types/emulator/creditLines.ts:11](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/emulator/creditLines.ts#L11)
