---
sidebar_position: 3
---

# account

## 配置项功能

* 当调用 everpay-js [基础查询API](../basic-api/intro) 时，此 `account` 配置项作为默认的 account 参数，传递给 基础查询API
* 当调用 everpay-js [操作类API](../operate-api/intro) （everpay充值、转账、提现）时，此 `account` 配置项 **必须传递，并且满足如下钱包地址之一**
    * 与 ethConnectedSigner 对应的 ethereum 钱包地址一致
    * 与 arJWK 对应的 arweave 钱包地址一致

## 基础查询API 示例

### 默认查询 account 对应的基础信息
```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
})
// 查询 账户 0x26361130d5d6E798E9319114643AF8c868412859 在 everpay 正式环境上的 ETH 资产余额
everpay.balance({
  symbol: 'ETH'
})
```

### 覆盖查询另一个 account 对应的基础信息
```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
})

// 查询 另一个账户 0x2ca81e1253f9426c62Df68b39a22A377164eeC92 在 everpay 正式环境上的 ETH 资产余额
everpay.balance({
  symbol: 'ETH',
  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92'
})
```

## 操作类API 示例
详见 [ethConnectedSigner](/docs/everpay-js/configuration/ethConnectedSigner) 或 [arJWK](/docs/everpay-js/configuration/arJWK) 配置项