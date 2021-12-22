---
sidebar_position: 13
---


# swapPrice

## Function
Get the number of currencies supported by everPay Swap

## Parameter
[SwapPriceParams](../types#swappriceparams)


|Field|Description|
|---|---|
|tokenIn|Token `symbol`, which is everPay Swap pool received (i.e. assets transferred out by users)|
|tokenOut|Token `symbol`, which transferred out from the everPay Swap pool (i.e., assets received by the user)|
|tokenInAmount|Optionally, the amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Not uint type, which has been processed by `decimals`. After passing `tokenInAmount`, `tokenOutAmount` is no longer passed|
|tokenOutAmount|Optionally, the amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Not uint type, which has been processed by `decimals`. After passing `tokenOutAmount`, `tokenInAmount` is no longer passed|


## Return
### Return Type
[SwapPriceResult](../types#swappriceresult)

### Return Fields

|Field|Description|
|---|---|
|indicativePrice|Reference price when the exchange quantity is `0`|
|spreadPercent|The price difference between the current exchange quantity and the `indicativePrice` reference price when the quantity is `0`, `spreadPercent * 100` is the percentage of price difference|
|tokenIn|Token `symbol`, which is everPay Swap pool received (i.e. assets transferred out by users)|
|tokenOut|Token `symbol`, which transferred out from the everPay Swap pool (i.e., assets received by the user)|
|tokenInAmount|The amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Not uint type, which has been processed by `decimals`|
|tokenOutAmount|The amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Not uint type, which has been processed by `decimals`|

## Example

```js
const everpay = new Everpay({ debug: true })
everpay.swapPrice({
  tokenIn: 'ETH',
  tokenOut: 'USDT',
  tokenInAmount: '0.111'
}).then(console.log)
```

## Example return
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