---
sidebar_position: 4
---

# balance

## Function
获取 对应 `account` 在 everPay 上的 指定代币 的资产余额

## Parameter
### 返回类型
[BalanceParams](../types#balanceparams)
## 返回
string

:::info

余额字符串

:::

## Example

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balance({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balance({ symbol: 'ar' }).then(console.log)

// 或者 覆盖默认 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)
```

## Example Return
```js
'0.000765727502'
```

:::info

`symbol` 大小写兼容

:::