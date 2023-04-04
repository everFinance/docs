---
sidebar_position: 3
---

# getBundleData

## Function

Generate a `bundleData` based on a list of internal transfer transactions for the bundle transaction

## Parameter

```ts
everpay.getBundleData(items: InternalTransferItem[], expiration?: number)
```

|Field|Type|Description|
|---|---|---|
|items|[InternalTransferItem](../types#internaltransferitem)[] | List of internal transfers for bundle transaction, where `amount` is not uint type and has been processed by `decimals`|
|expiration|number|Optional, expiration time of all internal transfers, unix timestamp. **Note: not millisecond timestamps**|

## Return

```ts
export interface BundleData {
  items: BundleItem[]
  expiration: number
  salt: string
  version: string
}
```
[View BundleItem Type](../types.md#bundledata)

## Example

```ts
const bundleData = await everpayArAccount.getBundleData([
  // transfer 0.001 ETH from account 0x26361130d5d6E798E9319114643AF8c868412859 to account 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
  {
    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
    from: '0x26361130d5d6E798E9319114643AF8c868412859',
    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    amount: '0.001'
  },
  // transfer 10 USDT from account 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo to account 0x26361130d5d6E798E9319114643AF8c868412859
  {
    tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x26361130d5d6E798E9319114643AF8c868412859',
    amount: '10'
  }
])
/* Returnd result
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '10000000'
    }
  ],
  expiration: 1630575873,
  salt: '3e4c7f38-b0e1-44ae-b3a0-1a5cfbaa322f',
  version: 'v1'
}
```
