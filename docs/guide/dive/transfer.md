---
sidebar_position: 5
---

# 转账

## 内容概述

转账指两个 everPay 账户之间发生的转账行为，任意两个 everPay 账户之间都可以进行转账，甚至可以将以太坊的资产转移到 Arweave 账户上。

everPay 通过区块链密码学签名验证来确保转账的安全性。

## Schema 说明

|字段|描述|
|---|---|
|tokenSymbol|代币名称|
|action|`'transfer'`代表转账|
|from|签署交易的当前 everPay 账户 ID|
|to|转账时，`to` 为另一个 everPay 账户 ID|
|amount|转账金额，类型为 uint。设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000|
|fee| 手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 |
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../sdk/server-api/basic-api/info) 接口获取|
|nonce|unix milliseconds，unix 毫秒时间戳|
|tokenID|通过 [info API](../../sdk/server-api/basic-api/info) 接口获取，必须与 `tokenSymbol` 对应的 token `id` 字段**一致**|
|chainType|转账时，`chainType` 必须与 [info API](../../sdk/server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**|
|chainID|转账时，`chainID` 必须与 [info API](../../sdk/server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**|
|data|转账附加信息，用户可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。<ul><li>**当前账户为 arweave 账户模型，需要传递`{"arOwner": "current arweave address's owner(public key)"}`**，用于 RSA-PSS sha256 验证</li><li>此外，用户可通过 `data` 自定义实现一些复杂功能，例如 [快速提现](./withdraw#快速提现-data-字段说明)</li></ul>|
|version|交易版本 `'v1'`|

## 交易签名、发送与交易记录获取
开发者可浏览 [指南 - 深入理解 - 交易](./everpay-tx#messagedata) 章节获取更多信息。