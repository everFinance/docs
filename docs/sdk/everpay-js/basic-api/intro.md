---
sidebar_position: 1
---

# 介绍

在 创建 Everpay 实例时，无需传递 `account`, `ethConnectedSigner`, `arJWK` 甚至任意参数都不进行传递，也可进行 基础查询API 的调用。

例如：

```js
const everpay = new Everpay()
await everpay.info()
await everpay.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' })
```