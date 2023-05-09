---
sidebar_position: 6
---

# 提现

## 普通提现

提现是指将 everPay 账户中的有效 `资产(token)`，提现到原生链上。

### Schema

|字段|描述|
|---|---|
|tokenSymbol|代币名称，AR,ETH,USDT,USDC 等。|
|action|`'burn'`代表提现。|
|from|签名交易的当前 everPay 账户 ID。|
|to|提现时，`to` 为要提现至的区块链钱包地址。|
|amount|提现金额，类型为 uint。设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。|
|fee| 手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。|
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../server-api/basic-api/info) 接口获取。|
|nonce|unix milliseconds，unix 毫秒时间戳。|
|tokenID|通过 [info API](../server-api/basic-api/info) 接口获取，必须与 `tokenSymbol` 对应的 token `id` 字段**一致**。|
|chainType|`chainType` 必须与 [info API](../server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**。|
|chainID|`chainID` 必须与 [info API](../server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**。|
|data|附加信息，开发者可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。|
|version|交易版本 `'v1'`。|

### 交易签名、发送与交易记录获取

开发者可浏览 [DOCS - 系统概览 - 交易](./transaction#messagedata) 章节获取更多信息。