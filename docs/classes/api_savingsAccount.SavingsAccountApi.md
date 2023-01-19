[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [api/savingsAccount](../modules/api_savingsAccount.md) / SavingsAccountApi

# Class: SavingsAccountApi

[api/savingsAccount](../modules/api_savingsAccount.md).SavingsAccountApi

## Table of contents

### Constructors

- [constructor](api_savingsAccount.SavingsAccountApi.md#constructor)

### Properties

- [config](api_savingsAccount.SavingsAccountApi.md#config)
- [savingsAccount](api_savingsAccount.SavingsAccountApi.md#savingsaccount)
- [signer](api_savingsAccount.SavingsAccountApi.md#signer)
- [tokenManager](api_savingsAccount.SavingsAccountApi.md#tokenmanager)
- [yieldAndStrategyApi](api_savingsAccount.SavingsAccountApi.md#yieldandstrategyapi)

### Methods

- [SavingAccountsEthUtils](api_savingsAccount.SavingsAccountApi.md#savingaccountsethutils)
- [approve](api_savingsAccount.SavingsAccountApi.md#approve)
- [approveMax](api_savingsAccount.SavingsAccountApi.md#approvemax)
- [approveTokenForCreditLines](api_savingsAccount.SavingsAccountApi.md#approvetokenforcreditlines)
- [approveTokenForSavingsAccountDeposit](api_savingsAccount.SavingsAccountApi.md#approvetokenforsavingsaccountdeposit)
- [decreaseAllowance](api_savingsAccount.SavingsAccountApi.md#decreaseallowance)
- [deposit](api_savingsAccount.SavingsAccountApi.md#deposit)
- [getAllowance](api_savingsAccount.SavingsAccountApi.md#getallowance)
- [getLiquidityTokenOfAssetForStrategy](api_savingsAccount.SavingsAccountApi.md#getliquiditytokenofassetforstrategy)
- [getShares](api_savingsAccount.SavingsAccountApi.md#getshares)
- [getStrategyAddress](api_savingsAccount.SavingsAccountApi.md#getstrategyaddress)
- [getTotalTokens](api_savingsAccount.SavingsAccountApi.md#gettotaltokens)
- [increaseAllowance](api_savingsAccount.SavingsAccountApi.md#increaseallowance)
- [switchStrategy](api_savingsAccount.SavingsAccountApi.md#switchstrategy)
- [transfer](api_savingsAccount.SavingsAccountApi.md#transfer)
- [transferFrom](api_savingsAccount.SavingsAccountApi.md#transferfrom)
- [withdraw](api_savingsAccount.SavingsAccountApi.md#withdraw)
- [withdrawAll](api_savingsAccount.SavingsAccountApi.md#withdrawall)
- [withdrawAllFromAStrategy](api_savingsAccount.SavingsAccountApi.md#withdrawallfromastrategy)
- [withdrawFrom](api_savingsAccount.SavingsAccountApi.md#withdrawfrom)
- [withdrawShares](api_savingsAccount.SavingsAccountApi.md#withdrawshares)
- [withdrawSharesFrom](api_savingsAccount.SavingsAccountApi.md#withdrawsharesfrom)

## Constructors

### constructor

• **new SavingsAccountApi**(`signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | `any` |

#### Defined in

[src/api/savingsAccount.ts:47](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L47)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

**`description`** All sublime addresses

#### Defined in

[src/api/savingsAccount.ts:35](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L35)

___

### savingsAccount

• `Private` **savingsAccount**: `SavingsAccount`

**`description`** Instance of savings account contract

#### Defined in

[src/api/savingsAccount.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L30)

___

### signer

• `Private` **signer**: `Signer`

**`description`** Signer Object

#### Defined in

[src/api/savingsAccount.ts:25](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L25)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

**`description`** Instance to fetch and update token metadata

#### Defined in

[src/api/savingsAccount.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L40)

___

### yieldAndStrategyApi

• `Private` **yieldAndStrategyApi**: [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

**`description`** Yield APIs

#### Defined in

[src/api/savingsAccount.ts:45](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L45)

## Methods

### SavingAccountsEthUtils

▸ **SavingAccountsEthUtils**(): [`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

**`description`** The returned objet helps in making direct ETH deposits to the savings Account

#### Returns

[`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

#### Defined in

[src/api/savingsAccount.ts:59](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L59)

___

### approve

▸ **approve**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in the savings to be used to other address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` |  |
| `to` | `string` | : Address to which you want to approve |
| `amount` | `string` |  |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:315](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L315)

___

### approveMax

▸ **approveMax**(`token`, `to`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:327](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L327)

___

### approveTokenForCreditLines

▸ **approveTokenForCreditLines**(`token`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`@deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:396](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L396)

___

### approveTokenForSavingsAccountDeposit

▸ **approveTokenForSavingsAccountDeposit**(`amount`, `asset`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Approve tokens in your wallet for depositing to a strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:70](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L70)

___

### decreaseAllowance

▸ **decreaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:360](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L360)

___

### deposit

▸ **deposit**(`amount`, `asset`, `strategy`, `to`, `options?`): `Promise`<`ContractTransaction`\>

**`description:`** Deposit amount to strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L100)

___

### getAllowance

▸ **getAllowance**(`token`, `from`, `to`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | Address of the token |
| `from` | `string` |  |
| `to` | `string` |  |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

Allowance

#### Defined in

[src/api/savingsAccount.ts:381](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L381)

___

### getLiquidityTokenOfAssetForStrategy

▸ **getLiquidityTokenOfAssetForStrategy**(`asset`, `strategy`): `Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

**`description`** Get the liquidity token for a given tokenb

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<[`Asset`](../interfaces/types_Types.Asset.md)\>

Asset in detail

#### Defined in

[src/api/savingsAccount.ts:523](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L523)

___

### getShares

▸ **getShares**(`user`, `asset`, `strategy`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Fet the specific liquidity shares in the savings account for a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

easy read number in string

#### Defined in

[src/api/savingsAccount.ts:505](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L505)

___

### getStrategyAddress

▸ `Private` **getStrategyAddress**(`strategy`): `string`

**`description`** Returns the contract address of a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |

#### Returns

`string`

#### Defined in

[src/api/savingsAccount.ts:542](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L542)

___

### getTotalTokens

▸ **getTotalTokens**(`user`, `asset`): `Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

**`description`** Get specific token asset locked in savings account. For ex; if asset=dai_address,
then call returns the amount of DAI stored in the savings account for that user

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `asset` | `string` |

#### Returns

`Promise`<[`Balance`](../interfaces/types_Types.Balance.md)\>

easy read number in string

#### Defined in

[src/api/savingsAccount.ts:490](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L490)

___

### increaseAllowance

▸ **increaseAllowance**(`token`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Increase the amount of tokens that can be used by "to" address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:339](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L339)

___

### switchStrategy

▸ **switchStrategy**(`currentStrategy`, `newStrategy`, `asset`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Switch amount from one strategy to another

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `newStrategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `asset` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:134](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L134)

___

### transfer

▸ **transfer**(`token`, `strategy`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from one address to another, but within the same strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:421](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L421)

___

### transferFrom

▸ **transferFrom**(`token`, `strategy`, `from`, `to`, `amount`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Transfer tokens from "from" address to another address

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `amount` | `string` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:455](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L455)

___

### withdraw

▸ **withdraw**(`token`, `strategy`, `to`, `amount`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from a given strategy

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `amount` | `string` |
| `withdrawShares` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:174](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L174)

___

### withdrawAll

▸ **withdrawAll**(`asset`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw a particular tokens from all strategies

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | / token address |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) | - |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:292](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L292)

___

### withdrawAllFromAStrategy

▸ **withdrawAllFromAStrategy**(`asset`, `strategy`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** withdraw all tokens from a strategy

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | asset to withdraw |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) | strategy from which the tokens should be withdrawn |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |  |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:303](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L303)

___

### withdrawFrom

▸ **withdrawFrom**(`amount`, `token`, `strategy`, `from`, `to`, `withdrawShares`, `options?`): `Promise`<`ContractTransaction`\>

**`description`** Withdraw amount from another address i.e "from" address here

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `withdrawShares` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

Contract Transaction

#### Defined in

[src/api/savingsAccount.ts:212](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L212)

___

### withdrawShares

▸ **withdrawShares**(`token`, `strategy`, `to`, `numberOfShares`, `receiveShares`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `to` | `string` |
| `numberOfShares` | `string` |
| `receiveShares` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:251](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L251)

___

### withdrawSharesFrom

▸ **withdrawSharesFrom**(`token`, `strategy`, `from`, `to`, `numberOfShares`, `receiveShares`, `options?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `strategy` | [`StrategyType`](../enums/types_Types.StrategyType.md) |
| `from` | `string` |
| `to` | `string` |
| `numberOfShares` | `string` |
| `receiveShares` | `boolean` |
| `options?` | [`Options`](../interfaces/types_Types.Options.md) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/api/savingsAccount.ts:274](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/api/savingsAccount.ts#L274)
