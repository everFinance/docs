---
sidebar_position: 6
---

# txs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能

获取 everPay 上所有交易记录，通过 `分页(10条1页)` 形式展示。

## 参数
```ts
everpay.txs(txsParams:TxsParams):TxsResult
```

<Tabs>
<TabItem value="field" label="参数" default>

|查询字段|是否必需|描述|
|---|---|---|
|page|NO|默认为 1 。|
|tag|NO|token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|action|NO|其中 [快速提现](../../../dive/withdraw.md#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值。</li><li>`'transfer'`代表转账。</li><li>`'burn'`代表提现。</li><li>`'bundle'`代表批量转账。</li></ul>|
|withoutAction|NO|排除某种类型的交易。其中 [快速提现](../../../dive/withdraw.md#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值。</li><li>`'transfer'`代表转账。</li><li>`'burn'`代表提现。</li><li>`'bundle'`代表批量转账。</li></ul>|

</TabItem>
<TabItem value="type" label="类型" default>

```ts
export interface TxsParams {
  page?: number
  tag?: string
  action?: EverpayActionWithDeposit
  withoutAction?: EverpayActionWithDeposit
}
```

</TabItem>
</Tabs>

## 返回数据

<Tabs>
<TabItem value="field" label="返回参数" default>

### 字段描述
|字段|描述|
|---|---|
|currentPage|当前页数，与传入的`page`参数一致。|
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
const everpay = new Everpay({ debug: true })
everpay.txs({ page: 1, action: 'transfer'}).then(console.log)
```

## 示例返回

```js
{
  currentPage: 1,
  totalPages: 35,
  txs: [
    {
      rawId: 1309,
      id: "DkeiBMTQZtZSFNrK_3hgvxT9TZ1ekbD30wKGVhIBR3o",
      tokenSymbol: "ETH",
      action: "transfer",
      from: "0x66303B4D1e522272D613EE23dd79e528eAb2279D",
      to: "0xc16D22719619BC8bEBc1cCFe3Fb62b6848d1c740",
      amount: "54900000000000000",
      fee: "0",
      feeRecipient: "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
      nonce: 1677234578508,
      tokenID: "0x0000000000000000000000000000000000000000",
      chainType: "ethereum",
      chainID: "5",
      data: "{\"targetChainHash\":\"0x25d0fc93b8f77265f3e305912bab924653c2c787cda34f3d65400db410ceb430\"}",
      version: "v1",
      sig: "0x42e022bedd0e89dcca9cfdfb6157baffff133451251ed5bf3362e06cd9f00e105cc326e3c7ad6ca12928b811a16e315672f8dba3c32ac68536bf8cf6c8348c601b",
      everHash:
        "0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5",
      status: "packaged",
      internalStatus: "{\"status\":\"success\"}",
      timestamp: 1677235004000,
      targetChainTxHash: "",
      express: {
        chainTxHash: "",
        withdrawFee: "",
        refundEverHash: "",
        err: ""
      }
    }
    // etc .
  ]
}

```

:::info
`txs` 接口获取 everPay 上所有交易记录，返回结果中没有 `accId` 字段。
:::
