---
sidebar_position: 3
---

# getBundleData

## 功能

根据批量转账的内部转账事务列表，生成批量转账 `bundleData`

## 参数

```ts
everpay.getBundleData(items: InternalTransferItem[], expiration?: number)
```

|参数|类型|描述|
|---|---|---|
|items|[InternalTransferItem](../types#internaltransferitem)[] | 批量转账的内部转账事务列表，其中的 `amount` 非 uint 类型，已经过 `decimals` 处理|
|expiration|number|可选，所有内部转账事务的过期时间，unix 时间戳。**注：非毫秒时间戳**|

## 返回

[`BundleData`](../types#bundledata)

## 示例

```ts
const bundleData = await everpayArAccount.getBundleData([
  // 代表 0x26361130d5d6E798E9319114643AF8c868412859 账户 向 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 账户转账 0.001 ETH
  {
    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
    from: '0x26361130d5d6E798E9319114643AF8c868412859',
    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    amount: '0.001'
  },
  // 代表 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 账户 向 0x26361130d5d6E798E9319114643AF8c868412859 账户转账 10 USDT
  {
    tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x26361130d5d6E798E9319114643AF8c868412859',
    amount: '10'
  }
])
/* 示例返回
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
