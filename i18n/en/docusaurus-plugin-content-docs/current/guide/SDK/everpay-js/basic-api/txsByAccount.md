---
sidebar_position: 7
---

# txsByAccount

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Get transactions corresponding to `account` on everPay by paging

## Parameter

```ts
everpay.txsByAccount(txsByAccountParams:TxsByAccountParams):TxsResult
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|Query Field|Description|
|---|---|
|account|Optional, default is the `account` parameter passed when the Everpay instance is created|
|page|Optional, default is 1|
|tag|Optional, Token Name|
|action|Optional, note that **[Quick Withdrawals](../../../dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` for deposit transactions</li><li>`'transfer'` for transfer transactions</li><li>`'burn'` for withdraw transactions</li><li>`'bundle'` for bundle transactions</li></ul>|
|withoutAction|Optional, exclusion of certain type of transactions, note that **[Quick Withdrawals](../../../dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` to deposit transactions</li><li>`'transfer'` to transfer transactions</li><li>`'burn'` to withdraw transactions</li><li>`'bundle'` to bundle transactions</li></ul>|

</TabItem>
<TabItem value="type" label="Type">

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

## Return

<Tabs>
<TabItem value="field" label="Return Field" default>

### Return Fields

|Field|Description|
|---|---|
|accid|everPay account ID, consistent with the incoming `account`.|
|currentPage|The current page number, consistent with the passed in `page` parameter.|
|totalPages|The total number of pages of data you have.|
|txs|Field information can be viewed in [DOCS - System overview - Transaction - Transaction Record](../../../dive/transaction#transaction-record)|

</TabItem>
<TabItem value="type" label="Return Type">

### Return Type

```ts
export interface TxsResult {
  accid?: string
  currentPage: number
  totalPages: number
  txs: EverpayTransaction[]
}
```

[View EverpayTransaction Type](../types.md#everpaytransaction)

</TabItem>
</Tabs>

## Example

```js
const everpay1 = new Everpay({ debug: true })
everpay1.txsByAccount({ account: '0x26361130d5d6E798E9319114643AF8c868412859', page: 1 }).then(console.log)

// 或者
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.txsByAccount({ page: 1 }).then(console.log)

// 或者 覆盖默认 account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.txsByAccount({ account: '0x26361130d5d6E798E9319114643AF8c868412859', page: 1 }).then(console.log)
```

## Example return

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
The `txsByAccount` interface gets transactions from the corresponding account on everPay, with the `accId` field in the returned result.
:::
