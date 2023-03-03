---
sidebar_position: 3
---

# balances

## Function

Get all assets on everPay for the corresponding `account`.

## Parameter

[BalancesParams](../types#balancesparams)

|Query Field|Description|
|---|---|
|Request method|GET|
|account|Optional,everpay account address, see account model for details|

## Return

### Return Type

```ts
export interface BalanceItem {
  chainType: string
  tag: string
  symbol: string
  balance: string
  address: string
}[]
```

### Return Fields

|Field|Description|
|---|---|
|chainType|Supported blockchains to top-ups and withdrawals, separated by `,`|
|symbol|Token symbol|
|tag|Unique identification of the asset|
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
    tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',
    address: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
    balance: '0.000765727502'
  },
  {
    chainType: 'ethereum',
    symbol: 'ETH',
    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
    address: '0x0000000000000000000000000000000000000000',
    balance: '0.94687043854654891'
  },
  {
    chainType: 'ethereum',
    symbol: 'USDT',
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    address: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    balance: '1112208449.962568'
  }
]
```

:::info
The quantity represented by the `balance` field is processed by the `decimals` format. Developers can easily integrate with everPay without caring about `decimals`.
:::
