---
sidebar_position: 4
---

# balance

## 功能
获取 对应 `account` 在 everPay 上的指定代币的资产信息

## 参数
[BalanceParams](../types#balanceparams)
## 返回
string
## 示例

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

## 示例返回
```js
'0.000765727502'
```

:::info

`symbol` 大小写兼容

:::