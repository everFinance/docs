---
sidebar_position: 3
---

# balances

## 功能
获取 对应 `account` 在 everPay 上的所有资产信息

## 参数
[BalancesParams](../types#balancesparams)
## 返回
[BalanceItem](../types#balanceitem)[]
## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balances().then(console.log)

// 或者 覆盖默认 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)
```

## 示例返回
```js
[
  {
    chainType: 'arweave,ethereum',
    symbol: 'AR',
    address: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
    balance: '0.000765727502'
  },
  {
    chainType: 'ethereum',
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    balance: '0.94687043854654891'
  },
  {
    chainType: 'ethereum',
    symbol: 'USDT',
    address: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    balance: '1112208449.962568'
  }
]
```

:::info

`balance` 字段表示的数量，经过 `decimals` format 处理。开发者无需关心 `decimals`，便可与 everPay 轻松集成。

:::