---
sidebar_position: 7
---

# txsByAccount

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能
获取对应 `账户(account)` 在 everPay  上所有交易记录，通过 `分页(10条1页)`  形式展示。

## 参数
```ts
everpay.txsByAccount(txsByAccountParams:TxsByAccountParams):TxsResult
```

<Tabs>
<TabItem value="field" label="参数" default>

|查询字段|是否必需|描述|
|---|---|---|
|account|NO|everpay 账户地址，默认为 Everpay 实例创建时传递的 `account` 参数。|
|page|NO|默认为 1。|
|tag|NO| `token` 的唯一标识，可通过 [`info`](./info.md) 接口进行查看。|
|action|NO|其中 [快速提现](../../../dive/withdraw.md#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值。</li><li>`'transfer'`代表转账。</li><li>`'burn'`代表提现。</li><li>`'bundle'`代表批量转账。</li></ul>|
|withoutAction|NO|排除某种类型的交易。其中 [快速提现](../../../dive/withdraw.md#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值。</li><li>`'transfer'`代表转账。</li><li>`'burn'`代表提现。</li><li>`'bundle'`代表批量转账。</li></ul>|

</TabItem>
<TabItem value="type" label="类型">

```ts
export interface TxsByAccountParams {
  page?: number
  account?: string
  tag?: string
  action?: EverpayActionWithDeposit
  withoutAction?: EverpayActionWithDeposit
}
```

</TabItem>
</Tabs>

## 返回

<Tabs>
<TabItem value="field" label="返回字段" default>

### 字段描述
|字段|描述|
|---|---|
|accid|everPay 账户 ID，与传入 `account` 保持一致。|
|currentPage|当前页数，与传入的 `page` 参数一致。|
|totalPages|总共拥有多少页数据。|
|txs|交易记录。字段信息可查看 [深入理解 - 交易 - 交易记录](../../../dive/transaction.md#交易记录)。|


</TabItem>
<TabItem value="type" label="返回类型">

```ts
export interface TxsResult {
  accid?: string
  currentPage: number
  totalPages: number
  txs: EverpayTransaction[]
}
```
[查看 EverpayTransaction 类型](../types.md#everpaytransaction)
</TabItem>
</Tabs>

## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay.txsByAccount({ page: 1, account: '0x26361130d5d6E798E9319114643AF8c868412859', action: 'transfer', tag: 'bsc-bnb-0x0000000000000000000000000000000000000000'}).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.txsByAccount({ page: 1, action: 'transfer',tag: 'bsc-bnb-0x0000000000000000000000000000000000000000' }).then(console.log)

// 或者 查询另外一个 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.txsByAccount({ account: '0x26361130d5d6E798E9319114643AF8c868412859', page: 1, action: 'transfer', tag: 'bsc-bnb-0x0000000000000000000000000000000000000000'}).then(console.log)
```

## 示例返回
```js
{
  accid: "0x26361130d5d6E798E9319114643AF8c868412859",
  currentPage: 1,
  totalPages: 1,
  txs: [
    {
      "rawId": 799,
      "id": "4DkSUp7YcCRotEwNArDIgIP62UAs4Yk7EU1FBhiKcYM",
      "tokenSymbol": "BNB",
      "action": "transfer",
      "from": "0xA9302EC2F7023C788921C452d18B09f507FA3C91",
      "to": "0x26361130d5d6E798E9319114643AF8c868412859",
      "amount": "10000000000",
      "fee": "0",
      "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
      "nonce": 1670835018466,
      "tokenID": "0x0000000000000000000000000000000000000000",
      "chainType": "bsc",
      "chainID": "97",
      "data": "",
      "version": "v1",
      "sig": "0xa494b900b3a5dd783b2eeb84dba04bceeea7e782a009afeee816505966a8436220da1c5623a5324368b362baae0683f1352e8cb0a0d7f020befa471efd3bb49a01",
      "everHash": "0x17f037b0f377c1acdaa48802187d55e2761cd1947aa799cb1047b15c0143361f",
      "status": "packaged",
      "internalStatus": "{\"status\":\"success\"}",
      "timestamp": 1670835536000,
      "targetChainTxHash": "",
      "express": {
          "chainTxHash": "",
          "withdrawFee": "",
          "refundEverHash": "",
          "err": ""
      }
    },
    {
      "rawId": 798,
      "id": "4DkSUp7YcCRotEwNArDIgIP62UAs4Yk7EU1FBhiKcYM",
      "tokenSymbol": "BNB",
      "action": "transfer",
      "from": "0x26361130d5d6E798E9319114643AF8c868412859",
      "to": "0xA9302EC2F7023C788921C452d18B09f507FA3C91",
      "amount": "100000000000",
      "fee": "0",
      "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
      "nonce": 1670834582075,
      "tokenID": "0x0000000000000000000000000000000000000000",
      "chainType": "bsc",
      "chainID": "97",
      "data": "",
      "version": "v1",
      "sig": "0x3ae52ae8c9b691c1f70ada8b1f9ecfd00f96635b9d03881de3bda707907a2eab364fa2898fa95c67cec84e67b58dfb7f90f16a367d9165db351523c0e8f167481b",
      "everHash": "0x028fdf1502eac1bf3e642b8de81eb94d466cdfab3d96a58ebaafa09b9005aa3d",
      "status": "packaged",
      "internalStatus": "{\"status\":\"success\"}",
      "timestamp": 1670835536000,
      "targetChainTxHash": "",
      "express": {
          "chainTxHash": "",
          "withdrawFee": "",
          "refundEverHash": "",
          "err": ""
      }
    }
    // etc.
  ]
}

```

:::info
`txsByAccount` 接口获取 everPay 上 对应账户的交易记录，返回结果中存在 `accId` 字段。
:::