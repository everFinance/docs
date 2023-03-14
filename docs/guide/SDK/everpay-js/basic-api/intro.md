---
sidebar_position: 1
---

# 介绍

在 创建 Everpay 实例时，可选择性传递 `debug`, `account`, `ethConnectedSigner`, `arJWK`，甚至任何参数都不进行传递，也可进行 `基础查询API` 的调用。

例如：

```js
const everpay = new Everpay()
everpay.info().then(console.log)
everpay.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)
```