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
|action|`'burn'` to withdraw|
|from|the current everPay account ID that signed the transaction|
|to|When withdrawing, `to` is the blockchain wallet address to withdraw to|
|amount|Withdrawal amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here is 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../../sdk/server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../../sdk/server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|`chainType` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainType` **consistent**|
|chainID|`chainID` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainID` **consistent**|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in|
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
|action|`'transfer'` to transfer|
|from|the current everPay account ID that signed the transaction|
|to|Market Maker's everPay account ID for quick withdrawals (via [expressInfo API](../../sdk/server-api/basic-api/expressinfo) to get)|
|amount|Transfer amount (quick withdrawal amount), type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../../sdk/server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../../sdk/server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|When transferring, `chainType` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainType` **consistent**|
|chainID|When transferring, `chainID` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainID` **consistent**|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in|
|version|transaction version `'v1'`|

### Quick Withdrawal data field description

|字段|描述|
|---|---|
|appId|`'express'`|
|withdrawAction|`'pay'`|
|withdrawChainType|`'ethereum'`. Blockchain for quick withdrawals to, currently only `'ethereum'` is supported|
|withdrawTo|Blockchain wallet address for quick withdrawals to|
|withdrawFee|Quick withdrawal fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing. Via [expressInfo API](../../sdk/server-api/basic-api/expressinfo) to get|

### Transaction signature, sending and record acquisition

Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.
