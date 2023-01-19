[sublime-sdk-v2](../README.md) / [Modules](../modules.md) / [sublime](../modules/sublime.md) / SublimeConnector

# Class: SublimeConnector

[sublime](../modules/sublime.md).SublimeConnector

## Table of contents

### Constructors

- [constructor](sublime.SublimeConnector.md#constructor)

### Properties

- [config](sublime.SublimeConnector.md#config)
- [provider](sublime.SublimeConnector.md#provider)
- [signer](sublime.SublimeConnector.md#signer)
- [tokenManager](sublime.SublimeConnector.md#tokenmanager)

### Methods

- [Address](sublime.SublimeConnector.md#address)
- [CreditLineEthUtils](sublime.SublimeConnector.md#creditlineethutils)
- [CreditLinesApi](sublime.SublimeConnector.md#creditlinesapi)
- [ERC1155](sublime.SublimeConnector.md#erc1155)
- [PoolApi](sublime.SublimeConnector.md#poolapi)
- [PoolEthUtils](sublime.SublimeConnector.md#poolethutils)
- [PooledCreditlineApi](sublime.SublimeConnector.md#pooledcreditlineapi)
- [PriceOracleApi](sublime.SublimeConnector.md#priceoracleapi)
- [RepaymentApi](sublime.SublimeConnector.md#repaymentapi)
- [SavingAccountsEthUtils](sublime.SublimeConnector.md#savingaccountsethutils)
- [SavingsAccountApi](sublime.SublimeConnector.md#savingsaccountapi)
- [TokenApi](sublime.SublimeConnector.md#tokenapi)
- [VerificationApi](sublime.SublimeConnector.md#verificationapi)
- [WrappedEth](sublime.SublimeConnector.md#wrappedeth)
- [YieldAndStrategyApi](sublime.SublimeConnector.md#yieldandstrategyapi)
- [getBalance](sublime.SublimeConnector.md#getbalance)
- [getChainId](sublime.SublimeConnector.md#getchainid)
- [waitForTransaction](sublime.SublimeConnector.md#waitfortransaction)

## Constructors

### constructor

• **new SublimeConnector**(`provider`, `signer`, `config`, `tokenManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `signer` | `Signer` |
| `config` | [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md) |
| `tokenManager` | [`TokenManager`](tokenManager.TokenManager.md) |

#### Defined in

[src/sublime.ts:33](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L33)

## Properties

### config

• `Private` **config**: [`SublimeConfig`](../interfaces/types_sublimeConfig.SublimeConfig.md)

#### Defined in

[src/sublime.ts:30](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L30)

___

### provider

• `Private` **provider**: `Provider`

#### Defined in

[src/sublime.ts:28](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L28)

___

### signer

• `Private` **signer**: `Signer`

#### Defined in

[src/sublime.ts:29](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L29)

___

### tokenManager

• `Private` **tokenManager**: [`TokenManager`](tokenManager.TokenManager.md)

#### Defined in

[src/sublime.ts:31](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L31)

## Methods

### Address

▸ **Address**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The current address of the signer

#### Defined in

[src/sublime.ts:56](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L56)

___

### CreditLineEthUtils

▸ **CreditLineEthUtils**(): [`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

#### Returns

[`CreditLineEthUtils`](api_utils_creditLineEthUtils.CreditLineEthUtils.md)

#### Defined in

[src/sublime.ts:84](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L84)

___

### CreditLinesApi

▸ **CreditLinesApi**(): [`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Returns

[`CreditLineApi`](api_creditLines.CreditLineApi.md)

#### Defined in

[src/sublime.ts:44](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L44)

___

### ERC1155

▸ **ERC1155**(): `ERC1155`

#### Returns

`ERC1155`

#### Defined in

[src/sublime.ts:100](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L100)

___

### PoolApi

▸ **PoolApi**(): [`PoolApi`](api_pool.PoolApi.md)

#### Returns

[`PoolApi`](api_pool.PoolApi.md)

#### Defined in

[src/sublime.ts:40](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L40)

___

### PoolEthUtils

▸ **PoolEthUtils**(): [`PoolEthUtils`](api_utils_poolEthUtils.PoolEthUtils.md)

#### Returns

[`PoolEthUtils`](api_utils_poolEthUtils.PoolEthUtils.md)

#### Defined in

[src/sublime.ts:88](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L88)

___

### PooledCreditlineApi

▸ **PooledCreditlineApi**(): [`PooledCreditLineApi`](api_pooledCreditLines.PooledCreditLineApi.md)

#### Returns

[`PooledCreditLineApi`](api_pooledCreditLines.PooledCreditLineApi.md)

#### Defined in

[src/sublime.ts:80](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L80)

___

### PriceOracleApi

▸ **PriceOracleApi**(): [`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Returns

[`PriceOracleApi`](api_priceOracle.PriceOracleApi.md)

#### Defined in

[src/sublime.ts:76](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L76)

___

### RepaymentApi

▸ **RepaymentApi**(): [`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Returns

[`RepaymentApi`](api_repayments.RepaymentApi.md)

#### Defined in

[src/sublime.ts:60](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L60)

___

### SavingAccountsEthUtils

▸ **SavingAccountsEthUtils**(): [`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

#### Returns

[`SavingAccountsEthUtils`](api_utils_savingsAccountEthUtils.SavingAccountsEthUtils.md)

#### Defined in

[src/sublime.ts:92](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L92)

___

### SavingsAccountApi

▸ **SavingsAccountApi**(): [`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Returns

[`SavingsAccountApi`](api_savingsAccount.SavingsAccountApi.md)

#### Defined in

[src/sublime.ts:48](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L48)

___

### TokenApi

▸ **TokenApi**(`tokenAddress`): [`TokenApi`](api_tokenApi.TokenApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `string` |

#### Returns

[`TokenApi`](api_tokenApi.TokenApi.md)

#### Defined in

[src/sublime.ts:72](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L72)

___

### VerificationApi

▸ **VerificationApi**(): [`VerificationAPI`](api_verification.VerificationAPI.md)

#### Returns

[`VerificationAPI`](api_verification.VerificationAPI.md)

#### Defined in

[src/sublime.ts:64](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L64)

___

### WrappedEth

▸ **WrappedEth**(): [`WrappedEth`](api_utils_wrappedEth.WrappedEth.md)

#### Returns

[`WrappedEth`](api_utils_wrappedEth.WrappedEth.md)

#### Defined in

[src/sublime.ts:96](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L96)

___

### YieldAndStrategyApi

▸ **YieldAndStrategyApi**(): [`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Returns

[`YieldAndStrategyApi`](api_yieldAndStrategy.YieldAndStrategyApi.md)

#### Defined in

[src/sublime.ts:68](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L68)

___

### getBalance

▸ **getBalance**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

balance in ethers (decimals included)

#### Defined in

[src/sublime.ts:113](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L113)

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/sublime.ts:104](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L104)

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<`TransactionReceipt`\>

transaction receipt after waiting for the specified number oif blocks

#### Defined in

[src/sublime.ts:128](https://github.com/sublime-finance/sublime-sdk/blob/cbfce7e/src/sublime.ts#L128)
