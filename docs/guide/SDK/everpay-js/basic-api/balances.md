---
sidebar_position: 3
---

# balances

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能
获取对应 `账户(account)` 在 everPay 上的所有资产信息。

## 参数
```ts
everpay.balances(balancesParams:BalancesParams):BalanceItem[]
```

<Tabs>
<TabItem value="js" label="参数" default>

|查询字段|是否必需|描述|
|---|---|---|
|account|NO|everpay 账户地址，详情查看[账户模型](../../../basic/dive/account-model.md)。|

</TabItem>
<TabItem value="ts" label="类型">

```ts
export interface BalancesParams {
  account?: string
}
```

</TabItem>
</Tabs>

## 返回
### 返回类型
```ts
export interface BalanceItem {
  chainType: string
  tag: string
  symbol: string
  balance: string
  address: string
}[]
```
### 返回字段
|字段|描述|
|---|---|
|chainType|该资产支持充值、提现的区块链，如支持多个区块链充值、提现，以 `,` 分隔开。|
|symbol|该资产名称。|
|address|该资产区块链合约地址，如如支持多个区块链充值、提现，以 `,` 分隔开，顺序与 `chainType` 中区块链名称顺序保持一致。|
|tag|token 的唯一标识，由 `chainType` , `symbol` , `id` 通过 `-` 组合。|
|balance|该资产余额，非 uint 类型，已经过 `decimals` 处理。|
## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balances().then(console.log)

// 或者 覆盖默认 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)
```

## 示例返回
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

`balance` 字段表示的数量，经过 `decimals` format 处理。开发者无需关心 `decimals`，便可与 everPay 轻松集成。

:::