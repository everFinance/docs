---
sidebar_position: 11
---

# swapPrice

## 功能
获取 everPay Swap 支持兑换的币种数量

## 参数
`{{swapEndpoint}}/dex/price?tokenIn={{tokenIn}}&tokenOut={{tokenOut}}&tokenInAmount={{tokenInAmount}}&tokenOutAmount={{tokenOutAmount}}`

:::info
`swapInfo` 的接口 endpoint 为 `swapEndpoint`
:::

|查询字段|描述|
|---|---|
|tokenIn|everPay Swap 资金池收到的资产（即用户转出的资产） `tokenTag`，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合，可通过 [info](./info) 接口获得|
|tokenOut|everPay Swap 资金池转出的资产（即用户收到的资产） `tokenTag`，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合，可通过 [info](./info) 接口获得|
|tokenInAmount|可选，everPay Swap 资金池收到的资产（即用户转出的资产）数额，类型为 uint。传递 `tokenInAmount` 后，不再传递 `tokenOutAmount`|
|tokenOutAmount|可选，everPay Swap 资金池转出的资产（即用户收到的资产）数额，类型为 uint。传递 `tokenOutAmount` 后，不再传递 `tokenInAmount`|

## 返回字段
|字段|描述|
|---|---|
|indicativePrice|兑换数量为 `0` 时的参考价格|
|spreadPercent|当前兑换数量下，与数量为 `0` 时的 `indicativePrice` 参考价格的价差，`spreadPercent * 100` 为价差百分比|
|tokenIn|everPay Swap 资金池收到的资产（即用户转出的资产） `tokenTag`，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|tokenOut|everPay Swap 资金池转出的资产（即用户收到的资产） `tokenTag`，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|tokenInAmount|everPay Swap 资金池收到的资产（即用户转出的资产）数额，类型为 uint|
|tokenOutAmount|everPay Swap 资金池转出的资产（即用户收到的资产）数额，类型为 uint|

## 示例

```bash
curl --location --request GET 'https://warriors-dev.everpay.io/dex/price?tokenIn=ethereum-eth-0x0000000000000000000000000000000000000000&tokenOut=ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee&tokenOutAmount=43919162'
```

## 示例返回
```json
{
  "currentPrice": "3031.5246998419752",
  "spreadPercent": "0.0013229827141251552",
  "tokenIn": "ethereum-eth-0x0000000000000000000000000000000000000000",
  "tokenInAmount": "14817947643840912",
  "tokenOut": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
  "tokenOutAmount": "43919162"
}
```