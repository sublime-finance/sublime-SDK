[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [types/Types](../modules/types_Types.md) / PooledCreditLineDetail

# Interface: PooledCreditLineDetail

[types/Types](../modules/types_Types.md).PooledCreditLineDetail

## Table of contents

### Properties

- [borrowAsset](types_Types.PooledCreditLineDetail.md#borrowasset)
- [borrowLimit](types_Types.PooledCreditLineDetail.md#borrowlimit)
- [borrowRate](types_Types.PooledCreditLineDetail.md#borrowrate)
- [borrowerAddress](types_Types.PooledCreditLineDetail.md#borroweraddress)
- [collateralAsset](types_Types.PooledCreditLineDetail.md#collateralasset)
- [collateralStrategy](types_Types.PooledCreditLineDetail.md#collateralstrategy)
- [collateralTokens](types_Types.PooledCreditLineDetail.md#collateraltokens)
- [createdAt](types_Types.PooledCreditLineDetail.md#createdat)
- [currentCollateralRatio](types_Types.PooledCreditLineDetail.md#currentcollateralratio)
- [currentDebt](types_Types.PooledCreditLineDetail.md#currentdebt)
- [defaultsAt](types_Types.PooledCreditLineDetail.md#defaultsat)
- [emulator](types_Types.PooledCreditLineDetail.md#emulator)
- [endsAt](types_Types.PooledCreditLineDetail.md#endsat)
- [gracePenaltyRate](types_Types.PooledCreditLineDetail.md#gracepenaltyrate)
- [id](types_Types.PooledCreditLineDetail.md#id)
- [idealCollateralRatio](types_Types.PooledCreditLineDetail.md#idealcollateralratio)
- [interestAccruedTillLastPrincipalUpdate](types_Types.PooledCreditLineDetail.md#interestaccruedtilllastprincipalupdate)
- [lastPrincipalUpdateTime](types_Types.PooledCreditLineDetail.md#lastprincipalupdatetime)
- [lenderStrategy](types_Types.PooledCreditLineDetail.md#lenderstrategy)
- [minBorrowAmount](types_Types.PooledCreditLineDetail.md#minborrowamount)
- [principal](types_Types.PooledCreditLineDetail.md#principal)
- [startsAt](types_Types.PooledCreditLineDetail.md#startsat)
- [status](types_Types.PooledCreditLineDetail.md#status)
- [totalInterestRepaid](types_Types.PooledCreditLineDetail.md#totalinterestrepaid)
- [totalLentAmount](types_Types.PooledCreditLineDetail.md#totallentamount)

## Properties

### borrowAsset

• **borrowAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:269](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L269)

___

### borrowLimit

• **borrowLimit**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L265)

___

### borrowRate

• **borrowRate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:266](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L266)

___

### borrowerAddress

• **borrowerAddress**: `string`

#### Defined in

[src/types/Types.ts:264](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L264)

___

### collateralAsset

• **collateralAsset**: [`Asset`](types_Types.Asset.md)

#### Defined in

[src/types/Types.ts:270](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L270)

___

### collateralStrategy

• **collateralStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:276](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L276)

___

### collateralTokens

• **collateralTokens**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:268](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L268)

___

### createdAt

• **createdAt**: `string`

#### Defined in

[src/types/Types.ts:271](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L271)

___

### currentCollateralRatio

• **currentCollateralRatio**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:284](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L284)

___

### currentDebt

• **currentDebt**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:285](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L285)

___

### defaultsAt

• **defaultsAt**: `string`

#### Defined in

[src/types/Types.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L274)

___

### emulator

• **emulator**: [`PooledCreditLineEmulator`](../classes/emulator_PooledCreditLines.PooledCreditLineEmulator.md)

#### Defined in

[src/types/Types.ts:287](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L287)

___

### endsAt

• **endsAt**: `string`

#### Defined in

[src/types/Types.ts:273](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L273)

___

### gracePenaltyRate

• **gracePenaltyRate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:277](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L277)

___

### id

• **id**: `string`

#### Defined in

[src/types/Types.ts:263](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L263)

___

### idealCollateralRatio

• **idealCollateralRatio**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:267](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L267)

___

### interestAccruedTillLastPrincipalUpdate

• **interestAccruedTillLastPrincipalUpdate**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:282](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L282)

___

### lastPrincipalUpdateTime

• **lastPrincipalUpdateTime**: `string`

#### Defined in

[src/types/Types.ts:281](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L281)

___

### lenderStrategy

• **lenderStrategy**: [`Strategy`](types_Types.Strategy.md)

#### Defined in

[src/types/Types.ts:275](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L275)

___

### minBorrowAmount

• **minBorrowAmount**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:286](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L286)

___

### principal

• **principal**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L279)

___

### startsAt

• **startsAt**: `string`

#### Defined in

[src/types/Types.ts:272](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L272)

___

### status

• **status**: [`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)

#### Defined in

[src/types/Types.ts:278](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L278)

___

### totalInterestRepaid

• **totalInterestRepaid**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:280](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L280)

___

### totalLentAmount

• **totalLentAmount**: [`Balance`](types_Types.Balance.md)

#### Defined in

[src/types/Types.ts:283](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/types/Types.ts#L283)
