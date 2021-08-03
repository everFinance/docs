---
sidebar_position: 4
---

# balance

## Function
Get the asset balance of the specified token on everPay for the corresponding `account`.

## Parameter
[BalanceParams](../types#balanceparams)

## Return
string

:::info
A balance string
:::

## Example

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balance({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)

// Or
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balance({ symbol: 'ar' }).then(console.log)

// Or override default account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)
```

## Example return
```js
'0.000765727502'
```

:::info
`symbol` is case compatible.
:::