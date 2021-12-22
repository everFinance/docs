---
sidebar_position: 13
---


# swapPrice

## 功能
获取 everPay Swap 支持兑换的币种数量

## 参数
[SwapPriceParams](../types#swappriceparams)


|字段|描述|
|---|---|
|tokenIn|everPay Swap 资金池收到的资产（即用户转出的资产） `symbol`|
|tokenOut|everPay Swap 资金池转出的资产（即用户收到的资产） `symbol`|
|tokenInAmount|可选，everPay Swap 资金池收到的资产（即用户转出的资产）数额，类型非 uint 类型，已经过 `decimals` 处理。传递 `tokenInAmount` 后，不再传递 `tokenOutAmount`|
|tokenOutAmount|可选，everPay Swap 资金池转出的资产（即用户收到的资产）数额，类型非 uint 类型，已经过 `decimals` 处理。传递 `tokenOutAmount` 后，不再传递 `tokenInAmount`|


## 返回
### 返回类型
[SwapPriceResult](../types#swappriceresult)

### 返回字段

|字段|描述|
|---|---|
|indicativePrice|兑换数量为 `0` 时的参考价格|
|spreadPercent|当前兑换数量下，与数量为 `0` 时的 `indicativePrice` 参考价格的价差，`spreadPercent * 100` 为价差百分比|
|tokenIn|everPay Swap 资金池收到的资产（即用户转出的资产） `symbol`|
|tokenOut|everPay Swap 资金池转出的资产（即用户收到的资产） `symbol`|
|tokenInAmount|everPay Swap 资金池收到的资产（即用户转出的资产）数额，类型非 uint 类型，已经过 `decimals` 处理|
|tokenOutAmount|everPay Swap 资金池收到的资产（即用户转出的资产）数额，类型非 uint 类型，已经过 `decimals` 处理|

## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.swapPrice({
  tokenIn: 'ETH',
  tokenOut: 'USDT',
  tokenInAmount: '0.111'
}).then(console.log)
```

## 示例返回
```js
{
  tokenIn: 'ETH',
  tokenOut: 'USDT',
  tokenInAmount: '0.111',
  tokenOutAmount: '326.213052',
  indicativePrice: '3031.5246998419752',
  spreadPercent: '0.010568240305771373'
}
```