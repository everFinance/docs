---
sidebar_position: 4
---

# getSwapBundleData

## Function
Generate [`bundleData`](../types#bundledata) based on [`SwapOrder`](../types#swaporder)

## Parameter
[`SwapOrder`](../types#swaporder)

|Field|Description|
|---|---|
|tokenIn|Token `symbol`, which is everPay Swap pool received (i.e. assets transferred out by users)|
|tokenOut|Token `symbol`, which transferred out from the everPay Swap pool (i.e., assets received by the user)|
|tokenInAmount|The amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Not uint type, which should be processed by `decimals`|
|tokenOutAmount|The amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Not uint type, which should be processed by `decimals`|

## Return
[`BundleData`](../types#bundledata)

## Example

```ts
const swapBundleData = await everpayArAccount.getSwapBundleData({
  tokenIn: 'ETH',
  tokenOut: 'usdt',
  tokenInAmount: '0.001',
  tokenOutAmount: '2.0666'
})
/* Returnd result
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