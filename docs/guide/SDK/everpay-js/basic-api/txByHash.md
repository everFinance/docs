---
sidebar_position: 9
---

# txByHash

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能
每一笔 everPay 交易，都会生成唯一的 `everHash` 字符串。可通过 `everHash` 查询该笔交易的具体信息。

例如一笔  ` 普通提现（非快速提现）` 交易，可通过 `everHash` 查询该笔交易详情：
* `id` 不为空字符串，代表该笔是 普通提现 交易，是否已经被记录到 arweave 区块链上，**确保了账本的正确性**。
* `targetChainTxHash` 不为空，代表该笔是 普通提现 交易，在用户要提现的区块链上，多签钱包/锁仓地址，已经发送交易并且已经打包完成，**用户提现的资产已到账**。

## 参数
```ts
everpay.txByHash(everHash:string):EverpayTransaction
```
<Tabs>
<TabItem value="field" label="参数" default>

|查询字段|是否必需|描述|
|---|---|---|
|everHash|YES|everPay 交易完成后，生成的唯一字符。|

</TabItem>
<TabItem value="type" label="类型">

`string`
</TabItem>
</Tabs>

## 返回
### 返回类型

```ts
export interface EverpayTransaction {
  id: string // an arweave tx, which stored the everPay Tx information on the arweave blockchain
  nonce: number
  action: EverpayActionWithDeposit
  from: string
  to: string
  amount: string
  data: string
  fee: string
  feeRecipient: string
  sig: string
  everHash: string
  status: EverpayTransactionStatus
  timestamp: number
  targetChainTxHash?: string
  express: {
    chainTxHash: string
    withdrawFee: string
    refundEverHash: string
    err: string
  }
}
```
### 返回字段
字段信息可查看 [指南 - 深入理解 - 交易 - 交易记录](../../../dive/transaction.md#交易记录)。
## 示例

```js
const everHash = '0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5'
const everpay = new Everpay({ debug: true })
everpay.txByHash(everHash).then(console.log)
```

## 示例返回
```js
{
    "rawId": 1309,
    "id": "DkeiBMTQZtZSFNrK_3hgvxT9TZ1ekbD30wKGVhIBR3o",
    "tokenSymbol": "ETH",
    "action": "transfer",
    "from": "0x66303B4D1e522272D613EE23dd79e528eAb2279D",
    "to": "0xc16D22719619BC8bEBc1cCFe3Fb62b6848d1c740",
    "amount": "54900000000000000",
    "fee": "0",
    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
    "nonce": 1677234578508,
    "tokenID": "0x0000000000000000000000000000000000000000",
    "chainType": "ethereum",
    "chainID": "5",
    "data": "{\"targetChainHash\":\"0x25d0fc93b8f77265f3e305912bab924653c2c787cda34f3d65400db410ceb430\"}",
    "version": "v1",
    "sig": "0x42e022bedd0e89dcca9cfdfb6157baffff133451251ed5bf3362e06cd9f00e105cc326e3c7ad6ca12928b811a16e315672f8dba3c32ac68536bf8cf6c8348c601b",
    "everHash": "0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5",
    "status": "packaged",
    "internalStatus": "{\"status\":\"success\"}",
    "timestamp": 1677235004000,
    "targetChainTxHash": "",
    "express": {
        "chainTxHash": "",
        "withdrawFee": "",
        "refundEverHash": "",
        "err": ""
    }
}
```