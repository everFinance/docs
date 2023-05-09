---
sidebar_position: 5
---

# Transfer
## Introduction

A transfer is a transfer that occurs between two everPay accounts. Any two everPay accounts can transfer money to each other and support the transfer of Ethereum assets to Arweave accounts.

everPay ensures the security of transfers through blockchain cryptographic signature verification.

## Schema
|Field|Description|
|---|---|
|tokenSymbol|Token Symbol, AR,ETH,USDT,USDC etc.|
|action|`'transfer'` to transfer.|
|from|the current everPay account ID that signed the transaction.|
|to|When transferring, `to` is another everPay account ID.|
|amount|Transfer amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000.|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing. |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../server-api/basic-api/info) interface to get.|
|nonce|unix milliseconds.|
|tokenID|via [info API](../server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**.|
|chainType|When transferring, `chainType` must be the same as [info API](../server-api/basic-api/info), the token `chainType` **consistent**.|
|chainID|When transferring, `chainID` must be the same as [info API](../server-api/basic-api/info), the token `chainID` **consistent**.|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in. Developers can pass `data` to customize some complex functions.|
|version|transaction version `'v1'`|

## Transaction signature, sending and record acquisition
Developers can visit the [DOCS - System overview - Transaction](./transaction#messagedata) chapter for more information.
