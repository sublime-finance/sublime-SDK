[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/pooledCreditLines](../modules/api_pooledCreditLines.md) / PooledCreditLineApi

# Class: PooledCreditLineApi

[api/pooledCreditLines](../modules/api_pooledCreditLines.md).PooledCreditLineApi

## Table of contents

### Constructors

- [constructor](api_pooledCreditLines.PooledCreditLineApi.md#constructor)

### Properties

- [lenderPool](api_pooledCreditLines.PooledCreditLineApi.md#lenderpool)
- [pooledCreditLine](api_pooledCreditLines.PooledCreditLineApi.md#pooledcreditline)
- [signer](api_pooledCreditLines.PooledCreditLineApi.md#signer)
- [tokenManager](api_pooledCreditLines.PooledCreditLineApi.md#tokenmanager)
- [verifiactionApi](api_pooledCreditLines.PooledCreditLineApi.md#verifiactionapi)
- [yieldApi](api_pooledCreditLines.PooledCreditLineApi.md#yieldapi)

### Methods

- [\_getCreditLineStatus](api_pooledCreditLines.PooledCreditLineApi.md#_getcreditlinestatus)
- [borrow](api_pooledCreditLines.PooledCreditLineApi.md#borrow)
- [calculateBorrowableAmount](api_pooledCreditLines.PooledCreditLineApi.md#calculateborrowableamount)
- [calculateCurrentCollateralRatio](api_pooledCreditLines.PooledCreditLineApi.md#calculatecurrentcollateralratio)
- [calculateCurrentDebt](api_pooledCreditLines.PooledCreditLineApi.md#calculatecurrentdebt)
- [calculateInterestAccured](api_pooledCreditLines.PooledCreditLineApi.md#calculateinterestaccured)
- [calculateLenderInterest](api_pooledCreditLines.PooledCreditLineApi.md#calculatelenderinterest)
- [calculateLenderWithdrawableAmount](api_pooledCreditLines.PooledCreditLineApi.md#calculatelenderwithdrawableamount)
- [calculatePrincipleWithdrawable](api_pooledCreditLines.PooledCreditLineApi.md#calculateprinciplewithdrawable)
- [calculateTokenCollateralTokens](api_pooledCreditLines.PooledCreditLineApi.md#calculatetokencollateraltokens)
- [cancel](api_pooledCreditLines.PooledCreditLineApi.md#cancel)
- [close](api_pooledCreditLines.PooledCreditLineApi.md#close)
- [depositCollateral](api_pooledCreditLines.PooledCreditLineApi.md#depositcollateral)
- [getCreditLineStatus](api_pooledCreditLines.PooledCreditLineApi.md#getcreditlinestatus)
- [getLenderInterest](api_pooledCreditLines.PooledCreditLineApi.md#getlenderinterest)
- [getPrinciple](api_pooledCreditLines.PooledCreditLineApi.md#getprinciple)
- [getStatusAndUpdate](api_pooledCreditLines.PooledCreditLineApi.md#getstatusandupdate)
- [lend](api_pooledCreditLines.PooledCreditLineApi.md#lend)
- [liquidate](api_pooledCreditLines.PooledCreditLineApi.md#liquidate)
- [repay](api_pooledCreditLines.PooledCreditLineApi.md#repay)
- [request](api_pooledCreditLines.PooledCreditLineApi.md#request)
- [start](api_pooledCreditLines.PooledCreditLineApi.md#start)
- [updateBorrowLimitLimits](api_pooledCreditLines.PooledCreditLineApi.md#updateborrowlimitlimits)
- [updateBorrowRateLimits](api_pooledCreditLines.PooledCreditLineApi.md#updateborrowratelimits)
- [updateCollectionPeriodLimits](api_pooledCreditLines.PooledCreditLineApi.md#updatecollectionperiodlimits)
- [updateDefaultGracePeriodLimits](api_pooledCreditLines.PooledCreditLineApi.md#updatedefaultgraceperiodlimits)
- [updateDurationLimits](api_pooledCreditLines.PooledCreditLineApi.md#updatedurationlimits)
- [updateGracePenaltyRateLimits](api_pooledCreditLines.PooledCreditLineApi.md#updategracepenaltyratelimits)
- [updateIdealCollateralRatioLimits](api_pooledCreditLines.PooledCreditLineApi.md#updateidealcollateralratiolimits)
- [updateProtocolFeeFraction](api_pooledCreditLines.PooledCreditLineApi.md#updateprotocolfeefraction)
- [withdrawAllCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawallcollateral)
- [withdrawCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawcollateral)
- [withdrawInterest](api_pooledCreditLines.PooledCreditLineApi.md#withdrawinterest)
- [withdrawLiquidatedCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawliquidatedcollateral)
- [withdrawLiquidity](api_pooledCreditLines.PooledCreditLineApi.md#withdrawliquidity)
- [withdrawPartialCollateral](api_pooledCreditLines.PooledCreditLineApi.md#withdrawpartialcollateral)

## Constructors

### constructor

• **new PooledCreditLineApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/api/pooledCreditLines.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L44)

## Properties

### lenderPool

• `Private` **lenderPool**: `LenderPool`

**`description`** Instance of lender pool contract

#### Defined in

[src/api/pooledCreditLines.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L29)

___

### pooledCreditLine

• `Private` **pooledCreditLine**: `PooledCreditLine`

**`description`** Instance of pooled credit line contract

#### Defined in

[src/api/pooledCreditLines.ts:34](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L34)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/api/pooledCreditLines.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L40)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to fetch and update token metadata

#### Defined in

[src/api/pooledCreditLines.ts:39](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L39)

___

### verifiactionApi

• `Private` **verifiactionApi**: [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

[src/api/pooledCreditLines.ts:42](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L42)

___

### yieldApi

• `Private` **yieldApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/api/pooledCreditLines.ts:41](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L41)

## Methods

### \_getCreditLineStatus

▸ **_getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:167](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L167)

___

### borrow

▸ **borrow**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Borrow

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:434](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L434)

___

### calculateBorrowableAmount

▸ **calculateBorrowableAmount**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate borrowable amount

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:279](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L279)

___

### calculateCurrentCollateralRatio

▸ **calculateCurrentCollateralRatio**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate current collateral ratio

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:523](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L523)

___

### calculateCurrentDebt

▸ **calculateCurrentDebt**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** calculate current debt

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:265](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L265)

___

### calculateInterestAccured

▸ **calculateInterestAccured**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate interest accured

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L251)

___

### calculateLenderInterest

▸ `Private` **calculateLenderInterest**(`_id`, `borrowLimit`, `principal`, `strategy`, `borrowAsset`, `sharesHeld`, `borrowerInterestShares`, `lenderBalance`, `lendersBorrowerInterestSharesWithdrawn`, `borrowerInterestSharesWithdrawn`, `yieldInterestWithdrawnShares`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `borrowLimit` | `BigNumberish` |
| `principal` | `BigNumberish` |
| `strategy` | `string` |
| `borrowAsset` | `string` |
| `sharesHeld` | `BigNumberish` |
| `borrowerInterestShares` | `BigNumberish` |
| `lenderBalance` | `BigNumberish` |
| `lendersBorrowerInterestSharesWithdrawn` | `BigNumberish` |
| `borrowerInterestSharesWithdrawn` | `BigNumberish` |
| `yieldInterestWithdrawnShares` | `BigNumberish` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/api/pooledCreditLines.ts:618](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L618)

___

### calculateLenderWithdrawableAmount

▸ **calculateLenderWithdrawableAmount**(`_id`, `lender?`): `Promise`<[`LenderWithdrawableAmount`](../interfaces/types_Types.LenderWithdrawableAmount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lender?` | `string` |

#### Returns

`Promise`<[`LenderWithdrawableAmount`](../interfaces/types_Types.LenderWithdrawableAmount.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:584](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L584)

___

### calculatePrincipleWithdrawable

▸ **calculatePrincipleWithdrawable**(`_id`, `lender?`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate the principle withdrawable

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lender?` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:91](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L91)

___

### calculateTokenCollateralTokens

▸ **calculateTokenCollateralTokens**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Calculate Total Collateral tokens

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:533](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L533)

___

### cancel

▸ **cancel**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Cancels the credit lines

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_id` | `string` | ID of the pooled credit line |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:483](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L483)

___

### close

▸ **close**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Close credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:473](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L473)

___

### depositCollateral

▸ **depositCollateral**(`_id`, `_amount`, `_fromSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Deposit Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `_fromSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:404](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L404)

___

### getCreditLineStatus

▸ **getCreditLineStatus**(`_id`): `Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

**`description`** Credit line status

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`CreditLineStatus`](../enums/types_Types.CreditLineStatus.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:242](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L242)

___

### getLenderInterest

▸ **getLenderInterest**(`_id`, `lenderAddress`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** to-do

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `lenderAddress` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Defined in

[src/api/pooledCreditLines.ts:145](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L145)

___

### getPrinciple

▸ **getPrinciple**(`_id`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** get principle

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

Balance

#### Defined in

[src/api/pooledCreditLines.ts:157](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L157)

___

### getStatusAndUpdate

▸ **getStatusAndUpdate**(`id`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/api/pooledCreditLines.ts:693](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L693)

___

### lend

▸ **lend**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Function to lend token to credit lines

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:71](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L71)

___

### liquidate

▸ **liquidate**(`_id`, `withdraw`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Liquidate credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `withdraw` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:136](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L136)

___

### repay

▸ **repay**(`_id`, `_amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Repay

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:454](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L454)

___

### request

▸ **request**(`colRatio`, `durationInSeconds`, `lenderVerifier`, `defaultGracePeriodInSeconds`, `gracePenaltyRate`, `collectionPeriod`, `minBorrowAmount`, `_borrowLimit`, `_borrowRate`, `collateralAsset`, `borrowAssetStrategy`, `collateralAssetStrategy`, `borrowAsset`, `borrowerVerifier`, `areTokensTransferable`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `colRatio` | `string` |
| `durationInSeconds` | `string` |
| `lenderVerifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `defaultGracePeriodInSeconds` | `string` |
| `gracePenaltyRate` | `string` |
| `collectionPeriod` | `string` |
| `minBorrowAmount` | `string` |
| `_borrowLimit` | `string` |
| `_borrowRate` | `string` |
| `collateralAsset` | `string` |
| `borrowAssetStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `collateralAssetStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `borrowAsset` | `string` |
| `borrowerVerifier` | [`VerifierType`](../enums/types_Types.VerifierType.md) |
| `areTokensTransferable` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:308](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L308)

___

### start

▸ **start**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Start a pooled credit line

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L60)

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

[src/api/pooledCreditLines.ts:661](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L661)

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

[src/api/pooledCreditLines.ts:669](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L669)

___

### updateCollectionPeriodLimits

▸ **updateCollectionPeriodLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:673](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L673)

___

### updateDefaultGracePeriodLimits

▸ **updateDefaultGracePeriodLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:681](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L681)

___

### updateDurationLimits

▸ **updateDurationLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:677](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L677)

___

### updateGracePenaltyRateLimits

▸ **updateGracePenaltyRateLimits**(`min`, `max`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `BigNumberish` |
| `max` | `BigNumberish` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:685](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L685)

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

[src/api/pooledCreditLines.ts:665](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L665)

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

[src/api/pooledCreditLines.ts:689](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L689)

___

### withdrawAllCollateral

▸ **withdrawAllCollateral**(`_id`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw All Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:580](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L580)

___

### withdrawCollateral

▸ **withdrawCollateral**(`_id`, `_amount`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:549](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L549)

___

### withdrawInterest

▸ **withdrawInterest**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Interest

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:125](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L125)

___

### withdrawLiquidatedCollateral

▸ **withdrawLiquidatedCollateral**(`id`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:115](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L115)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`_id`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw Liquidity

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:111](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L111)

___

### withdrawPartialCollateral

▸ **withdrawPartialCollateral**(`_id`, `_amount`, `toSavingsAccount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** function withdraw partial collateral

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `_amount` | `string` |
| `toSavingsAccount` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/pooledCreditLines.ts:494](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/pooledCreditLines.ts#L494)
