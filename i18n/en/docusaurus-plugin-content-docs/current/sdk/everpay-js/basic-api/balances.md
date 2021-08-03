---
sidebar_position: 4
---

# balances

## Function
Get all assets on everPay for the corresponding `account`.

## Parameter
[BalancesParams](../types#balancesparams)

## Return

### Return Type
[BalanceItem](../types#balanceitem)[]

### Return Fields
|Field|Description|
|---|---|
|chainType|Supported blockchains to top-ups and withdrawals, separated by `,`|
|symbol|Token symbol|
|id|Token ID, usually the token erc20 contract address, separated by `,` if it supports multiple blockchain top-ups and withdrawals|
|balance|Token balance, already processed by, not type uint|

## Example

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)

// Or
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balances().then(console.log)

// Or override default account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)
```

## Example return
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
The quantity represented by the `balance` field is processed by the `decimals` format. Developers can easily integrate with everPay without caring about `decimals`.
:::