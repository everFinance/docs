---
sidebar_position: 6
---

# Withdraw

## Normal Withdrawal

Withdrawal means withdrawing the valid `assets (token)` from everPay account, to the native chain.

### Schema

|Field|Description|
|---|---|
|tokenSymbol|Token Symbol|
|action|`'burn'` to withdraw.|
|from|the current everPay account ID that signed the transaction.|
|to|When withdrawing, `to` is the blockchain wallet address to withdraw to.|
|amount|Withdrawal amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000.|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here is 100000 after USDT's `decimals: 6` processing. |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../server-api/basic-api/info) interface to get.|
|nonce|unix milliseconds.|
|tokenID|via [info API](../server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**.|
|chainType|`chainType` must be the same as [info API](../server-api/basic-api/info), the token `chainType` **consistent**.|
|chainID|`chainID` must be the same as [info API](../server-api/basic-api/info), the token `chainID` **consistent**.|
|data|Additional information, developer-customizable JSON data, processed by `JSON.stringify()` and passed in.|
|version|transaction version `'v1'`.|

### Transaction signature, sending and record acquisition

Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.