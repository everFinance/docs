---
sidebar_position: 6
---

# Withdraw

## Normal Withdrawal
Withdrawal means withdrawing the valid balance on your everPay account to your native chain.

### Schema

|Field|Description|
|---|---|
|tokenSymbol|Token Symbol|
|action|`'burn'` for withdraw|
|from|the current everPay account ID that signed the transaction|
|to|When withdrawing, `to` is the blockchain wallet address to withdraw to|
|amount|Withdrawal amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here is 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../../sdk/server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../../sdk/server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|When withdrawing, `chainType` is the name of the blockchain to be withdrawn to. For example, AR Token supports withdrawing to both Arweave and ethereum blockchains, the token `chainType` field is `arweave,ethereum`, the developer needs to specify which blockchain to withdraw to, `arweave` is Arweave blockchain, `ethereum` is ethereum blockchain.|
|chainID|When withdrawing, `chainID` is the blockchain network ID to withdraw to, for example, AR Token supports withdrawing to Arweave and Ethernet blockchain, the token `chainID` field is `0,1`, the developer specify which blockchain to withdraw to, `chainID` also needs to use the corresponding value, `0` is Arweave blockchain network ID, `1` is Ethernet blockchain network ID|
|data|**The current account is the arweave account model and needs to be passed `{"arOwner": "current arweave address's owner(public key)"}`** for RSA-PSS sha256 authentication|
|version|transaction version `'v1'`|

### Transaction signature, sending and record acquisition
Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.

## Quick Withdrawal
### Purpose
Since the normal withdrawal needs to be packaged in the arweave blockchain after everPay transaction confirmation, submit the withdrawal proposal via DAO, and execute the withdrawal on ethereum or arweave blockchain.

In this process, it takes a long time to wait which consumes high miner fees.The everPay team contacts an external market maker team to achieve quick withdrawals through **everPay transfer** to save users' time and cost in withdrawals.

### Implementation
1. the user transfers everPay's assets to the Market Maker everPay account via everPay
2. the market maker receives the everPay transfer and transfers the assets to be withdrawn to the user via the native blockchain

:::info
Only quick withdrawals to the ethereum blockchain are currently supported
:::

### Schema
:::caution
* Quick withdrawal is implemented via everPay transfer, `Schema` definition is the same as the transfer
* `to` needs to be set to the market maker's everPay account ID (via [expressInfo API](../../sdk/server-api/basic-api/expressinfo) to get)
* Define special fields via `data` for quick withdrawal purposes
:::

|Field|Description|
|---|---|
|tokenSymbol|Token Symbol|
|action|`'transfer'` for transfer|
|from|the current everPay account ID that signed the transaction|
|to|Market Maker's everPay account ID for quick withdrawals (via [expressInfo API](../../sdk/server-api/basic-api/expressinfo) to get)|
|amount|Transfer amount (quick withdrawal amount), type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../../sdk/server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../../sdk/server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|When transferring, `chainType` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainType` **consistent**|
|chainID|When transferring, `chainID` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainID` **consistent**|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in.<ul><li>**The current account is the arweave account model and needs to be passed `{"arOwner": "current arweave address's owner(public key)"}`** for RSA-PSS sha256 authentication</li></ul>|
|version|transaction version `'v1'`|

### Quick Withdrawal data field description
|字段|描述|
|---|---|
|appId|`'express'`|
|withdrawAction|`'pay'`|
|withdrawChainType|`'ethereum'`. Blockchain for quick withdrawals to, currently only `'ethereum'` is supported|
|withdrawTo|Blockchain wallet address for quick withdrawals to|
|withdrawFee|Quick withdrawal fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing. 通过 via [expressInfo API](../../sdk/server-api/basic-api/expressinfo) to get|

### Transaction signature, sending and record acquisition
Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.
