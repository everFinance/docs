---
sidebar_position: 7
---

# txsByAccount

## Function

Get transactions corresponding to `account` on everPay by paging

## Parameter

[TxsByAccountParams](../types#txsbyaccountparams)

|Query Field|Description|
|---|---|
|account|Optional, default is the `account` parameter passed when the Everpay instance is created|
|page|Optional, default is 1|
|tag|Optional, Token Name|
|action|Optional, note that **[Quick Withdrawals](../../../guide/dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` for deposit transactions</li><li>`'transfer'` for transfer transactions</li><li>`'burn'` for withdraw transactions</li><li>`'bundle'` for bundle transactions</li></ul>|
|withoutAction|Optional, exclusion of certain type of transactions, note that **[Quick Withdrawals](../../../guide/dive/withdraw#quick-withdrawal)** are categorized in the `action: 'transfer'` filter. <ul><li>`'mint'` to deposit transactions</li><li>`'transfer'` to transfer transactions</li><li>`'burn'` to withdraw transactions</li><li>`'bundle'` to bundle transactions</li></ul>|

## Return

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

### Return Fields

Field information can be viewed in [Guide - Dive - Transaction - Transaction Record](../../../guide/dive/transaction#transaction-record)

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
  currentPage: 1,
  totalPages: 10,
  txs: [
    {
      "id": "bTpNVdf65ZDdKhWZElS1yg0g9xV_F4y41t7q56NAJqU",
      "tokenSymbol": "USDT",
      "action": "burn",
      "from": "0x26361130d5d6E798E9319114643AF8c868412859",
      "to": "0xd7a0D7889577ef77C11Ab5CC00817D1c9adE6B36",
      "amount": "41000000",
      "fee": "80000000",
      "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
      "nonce": 1625652640853,
      "tokenID": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "chainType": "ethereum",
      "chainID": "42",
      "data": "",
      "sig": "0x8bb2a271896e46aacef35f01da3540d3eea40f04d7d697d72a43be106bc4abc878dfe145b4db5e05d1489795b9bdccb0f3d3d58a78912cb338d2c1ff88bccc7d1c",
      "everHash": "0xb1b1176bde526e68e5354b6d0232b21a7889d8de33a9606ac1358ffea1f973cd",
      "status": "packaged",
      "timestamp": 1625653293000,
      "targetChainTxHash": "0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7"
  },
  {
      "id": "bTpNVdf65ZDdKhWZElS1yg0g9xV_F4y41t7q56NAJqU",
      "tokenSymbol": "ETH",
      "action": "mint",
      "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",
      "to": "0x26361130d5d6E798E9319114643AF8c868412859",
      "amount": "10000000000000",
      "fee": "0",
      "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
      "nonce": 1625652570825,
      "tokenID": "0x0000000000000000000000000000000000000000",
      "chainType": "ethereum",
      "chainID": "42",
      "data": "{\"hash\": \"0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b\", \"nonce\": \"0xc6\", \"blockHash\": \"0x2a9c4090b8110e602d7b346d07d34d2f7445d0b20c76fda12f1757f98189f354\", \"blockNumber\": \"0x18c3854\", \"transactionIndex\": \"0x1\", \"from\": \"0x26361130d5d6E798E9319114643AF8c868412859\", \"to\": \"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\", \"value\": \"0x9184e72a000\", \"gas\": \"0x587a\", \"gasPrice\": \"0x1bf08eb00\", \"input\": \"0x\", \"r\": \"0xea4722b335b447a8d01c06fb6be4840494dea3869979a92b0ba5a4f4e4d5d6cc\", \"s\": \"0x23ce4a06c1185625244415de593f15fa4e97c32c5379ead26d788e864b917da4\", \"v\": \"0x77\"}",
      "sig": "0x9d7336dbcb1b06fcd0eed3fc60b1dffc5391cd27888def366b1aeaeaedf91ae663f8dfb9c1b53395572b7a668491eb91edfe2e1f49a5d9ffa592027a06e3a4ee1c",
      "everHash": "0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8",
      "status": "packaged",
      "timestamp": 1625653293000,
      "targetChainTxHash": "0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b"
  },
    // etc.
  ]
}
```

:::info
The `txsByAccount` interface gets transactions from the corresponding account on everPay, with the `accId` field in the returned result.
:::
