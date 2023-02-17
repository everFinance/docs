---
sidebar_position: 4
---

# balance

## 功能
获取 对应 `account` 在 everPay 上的 指定代币 的资产余额

## 参数
[BalanceParams](../types#balanceparams)

|查询字段|描述|
|---|---|
|请求方式|GET|
|account|可选，everpay 账户地址，详情查看[账户模型](../../../guide/dive/account-model.md)。|
|tag|`token` 的唯一标识，[info](./info.md) 接口中 `tokenList` 可查看每个 `token` 的唯一 `tag`。|


## 返回
### 返回类型
string

:::info

余额字符串

:::

## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balance({
  account: '0x26361130d5d6E798E9319114643AF8c868412859',
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balance({
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)

// 或者 覆盖默认 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balance({
  account: '0x26361130d5d6E798E9319114643AF8c868412859',
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)
```

## 示例返回
```js
'0.000765727502'
```
