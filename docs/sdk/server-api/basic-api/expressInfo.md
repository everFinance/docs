---
sidebar_position: 11
---

# expressInfo

## 功能
获取 everPay 快速提现做市商账户、支持代币列表、代币可快速提现额度以及预估手续费。

## 参数
`{{expressEndpoint}}/withdraw/info`

:::info
`expressInfo` 的接口 endpoint 为 `expressEndpoint`
:::

## 返回字段
|字段|描述|
|---|---|
|address|快速提现做市商 everPay 账户 ID|
|withdrawTimeCost|预计快速提现完成时间（秒）|
|tokens|快速提现做市商支持快速提现的资产与信息列表：<ul><li>`tokenTag` 由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合</li><li>`withdrawFee` 代表快速提现需要扣除的手续费</li><li>`walletBalance` 代表做市商钱包该资产可快速提现的额度</li></ul>|

## 示例

```bash
curl --location --request GET 'https://express-dev.everpay.io/withdraw/info'
```

## 示例返回
```json
{
  "address": "0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09",
  "withdrawTimeCost": 60,
  "tokens": [
    {
      "tokenTag": "ethereum-ETH-0x0000000000000000000000000000000000000000",
      "withdrawFee": "572864391122100",
      "walletBalance": "323719653678176720"
    },
    {
      "tokenTag": "ethereum-USDT-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "withdrawFee": "2708852",
      "walletBalance": "995882735697"
    }
  ]
}
```