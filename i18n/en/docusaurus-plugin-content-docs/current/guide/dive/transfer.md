---
sidebar_position: 5
---

## Introduction

A transfer is a transfer that occurs between two everPay accounts. Any two everPay accounts can transfer funds between them, even transferring assets from an Ethereum address to an Arweave address.

everPay ensures the security of transfers through blockchain cryptographic signature verification.

## Schema
|Field|Description|
|---|---|
|tokenSymbol|Token Symbol|
|action|`'transfer'` to transfer|
|from|the current everPay account ID that signed the transaction|
|to|When transferring, `to` is another everPay account ID|
|amount|Transfer amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../../sdk/server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../../sdk/server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|When transferring, `chainType` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainType` **consistent**|
|chainID|When transferring, `chainID` must be the same as [info API](../../sdk/server-api/basic-api/info), the token `chainID` **consistent**|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in. Developers can pass `data` to customize some complex functions, like [Quick Withdraw](./withdraw#quick-withdrawal-data-field-description)</li></ul>|
|version|transaction version `'v1'`|

## Transaction signature, sending and record acquisition
Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.
