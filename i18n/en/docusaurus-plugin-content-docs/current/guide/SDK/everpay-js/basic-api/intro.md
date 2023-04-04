---
sidebar_position: 1
---

# Introduction

When creating an Everpay instance, the basic query API can be called without passing `account`, `ethConnectedSigner`, `arJWK` or even any parameters.

For example.

```js
const everpay = new Everpay()
everpay.info().then(console.log)
everpay.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)
```