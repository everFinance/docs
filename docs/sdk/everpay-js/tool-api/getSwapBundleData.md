---
sidebar_position: 4
---

# getSwapBundleData

## 功能
根据 [`SwapOrder`](../types#swaporder) 生成 [`bundleData`](../types#bundledata)

## 参数
[`SwapOrder`](../types#swaporder)

|参数|描述|
|---|---|
|tokenIn|everPay Swap 资金池收到的资产（即用户转出的资产） `symbol`|
|tokenOut|everPay Swap 资金池转出的资产（即用户收到的资产） `symbol`|
|tokenInAmount|everPay Swap 资金池收到的资产（即用户转出的资产）数额，非 uint 类型|
|tokenOutAmount|everPay Swap 资金池转出的资产（即用户收到的资产）数额，非 uint 类型|

## 返回
[`BundleData`](../types#bundledata)

## 示例

```ts
const swapBundleData = await everpayArAccount.getSwapBundleData({
  tokenIn: 'ETH',
  tokenOut: 'usdt',
  tokenInAmount: '0.001',
  tokenOutAmount: '2.0666'
})
/* 示例返回
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      amount: '10000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '20666000'
    }
  ],
  expiration: 1630640399,
  salt: '33bd541b-2180-4f85-aa02-e6d292efbfae',
  version: 'v1'
}
```