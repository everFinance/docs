---
sidebar_position: 6
---

# 提现

## 普通提现

提现是指将 everPay 账户中的有效`资产(token)`，提现到原生链中。

### Schema

|字段|描述|
|---|---|
|tokenSymbol|代币名称。|
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

开发者可浏览 [指南 - 系统概览 - 交易](./transaction#messagedata) 章节获取更多信息。

## 快速提现

### 目的

因普通提现需要先经过 everPay 交易确认在 arweave 区块链打包，通过 DAO 提交提现提案，并在以太坊或者 Arweave 进行提现执行。

在这个过程中，需要等待较长时间，以及消耗的矿工费用较高。everPay 团队联系了外部做市商团队，通过 **everPay 转账** 实现了快速提现，达到节省用户提现的时间和费用成本的目的。

### 实现方式

1. 用户将 everPay 的资产 通过 everPay 转账给做市商 everPay 账户。
2. 做市商接收到该笔 everPay 转账后，将用户要提现的资产，通过原生区块链转账给用户。

:::info
当前仅支持快速提现资产至以太坊区块链。
:::

### Schema

:::caution

* 快速提现通过 everPay 转账实现，`Schema` 定义与转账一致。
* `to` 需要设置为做市商 everPay 账户 ID。（通过 [expressInfo API](../server-api/basic-api/expressInfo.md) 获取）
* 通过 `data` 定义特殊字段，达成快速提现的目的。
:::

|字段|描述|
|---|---|
|tokenSymbol|代币名称。|
|action|`'transfer'` 代表转账。**快速提现通过 everPay 转账实现**。|
|from|签名交易的当前 everPay 账户 ID。|
|to|快速提现的做市商 everPay 账户 ID（通过 [expressInfo API](../server-api/basic-api/expressinfo) 获取）。|
|amount|转账金额（快速提现金额），类型为 uint。设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。|
|fee| 转账手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 。|
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../server-api/basic-api/info) 接口获取。|
|nonce|unix milliseconds，unix 毫秒时间戳。|
|tokenID|通过 [info API](../server-api/basic-api/info) 接口获取，必须与 `tokenSymbol` 对应的 token `id` 字段**一致**。|
|chainType|转账时，`chainType` 必须与 [info API](../server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**。|
|chainID|转账时，`chainID` 必须与 [info API](../server-api/basic-api/info) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**。|
|data|附加信息，开发者可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。|
|version|交易版本 `'v1'`。  |

### 快速提现 data 字段说明

|字段|描述|
|---|---|
|appId|`'express'`|
|withdrawAction|`'pay'`|
|withdrawChainType|`ethereum` 快速提现到的区块链，当前只支持`'ethereum'`。|
|withdrawTo|快速提现到的区块链钱包地址。|
|withdrawFee|快速提现手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。通过 [expressInfo API](../server-api/basic-api/expressinfo) 获取。|

### 交易签名、发送与交易记录获取

开发者可浏览 [指南 - 系统概览 - 交易](./transaction#messagedata) 章节获取更多信息。
