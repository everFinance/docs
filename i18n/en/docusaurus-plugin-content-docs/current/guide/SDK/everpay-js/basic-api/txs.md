---
sidebar_position: 6
---

# txs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Get all transactions on everPay accessed by paging

## Parameter

```ts
everpay.txs(txsParams:TxsParams):TxsResult
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|Query Field|Description|
|---|---|
|page|Optional, default is 1 .|
|tag|Optional, A unique identifier for `token`, [info](./info.md) interface `tokenList` to see the unique `tag` for each `token`.|
|action|Optional, note that **[Quick Withdrawals](../../../dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` for deposit transactions</li><li>`'transfer'` for transfer transactions</li><li>`'burn'` for withdraw transactions</li><li>`'bundle'` for bundle transactions</li></ul>|
|withoutAction|Optional, exclusion of certain type of transactions, note that **[Quick Withdrawals](../../../dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` to deposit transactions</li><li>`'transfer'` to transfer transactions</li><li>`'burn'` to withdraw transactions</li><li>`'bundle'` to bundle transactions</li></ul>|

</TabItem>
<TabItem value="type" label="Type" default>

[TxsParams](../types#txsparams)

</TabItem>
</Tabs>

## Return

<Tabs>
<TabItem value="field" label="Return Field" default>

### Return Fields

|Field|Description|
|---|---|
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
const everpay = new Everpay({ debug: true })
everpay.txs({ page: 1 }).then(console.log)
```

## Example return

```js
{
  currentPage: 1,
  totalPages: 196,
  txs: [
    {
      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',
      tokenSymbol: 'ETH',
      action: 'burn',
      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',
      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',
      amount: '979251798000000000',
      fee: '20000000000000000',
      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
      nonce: 1625733233558,
      tokenID: '0x0000000000000000000000000000000000000000',
      chainType: 'ethereum',
      chainID: '42',
      data: '',
      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',
      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',
      status: 'packaged',
      timestamp: 1625733624000,
      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'
    },
    // etc.
  ]
}
```

:::info
The `txs` interface gets all transactions on everPay without the `accId` field in the returned result.
:::
