---
sidebar_position: 10
---

# swapInfo

## 功能
获取 everPay Swap 做市商 everPay 账户、支持代币列表、手续费

## 参数
`{{swapEndpoint}}/dex/info`

:::info
`swapInfo` 的接口 endpoint 为 `swapEndpoint`
:::

## 返回字段
|字段|描述|
|---|---|
|address|everPay Swap 做市商 everPay 账户 ID|
|tokenList|everPay Swap 做市商支持兑换的资产列表，为 `tokenTag` 的数组。 `tokenTag` 是由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|fee|手续费收取率，例如：`0.003` 代表千分之三|

## 示例

```bash
curl --location --request GET 'https://warriors-dev.everpay.io/dex/info'
```

## 示例返回
```json
{
  "status": "ok",
  "address": "0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00",
  "tokenList": [
      "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "ethereum-eth-0x0000000000000000000000000000000000000000"
  ],
  "fee": "0.02"
}
```