---
sidebar_position: 4
---

# balance

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能
获取对应 `账户(account)` 在 everPay 上的 `指定代币(token)` 的资产余额。

## 参数
```ts
everpay.balance(balanceParams:BalanceParams):string
```

<Tabs>
<TabItem value="field" label="参数" default>

|查询字段|是否必需|描述|
|---|---|---|
|account|NO|everpay 账户地址，默认为 Everpay 实例创建时传递的 `account` 参数，详情查看[账户模型](../../../dive/account-model.md)。|
|tag|YES|`token` 的唯一标识，可通过 [`info`](./info.md) 接口进行查看。|

</TabItem>
<TabItem value="type" label="类型">

```ts
export interface BalanceParams {
  tag: string
  account?: string
}
```

</TabItem>
</Tabs>


## 返回
### 返回类型

`string`

:::info

返回指定代币(token)余额，字符串类型。

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
