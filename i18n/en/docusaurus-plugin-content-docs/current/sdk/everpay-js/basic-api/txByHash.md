---
sidebar_position: 7
---

# txByHash

## Function
Each everPay transaction has a unique `everHash` string. Use `everHash` to look up the details of the transaction.

For example, for a normal withdraw (not fast withdraw), you can query the transaction details via `everHash`
* when the `id` is not an empty string, which means whether the transaction has been recorded on the arweave blockchain, **which ensures the correctness of the ledger**
* when the `targetChainTxHash` is not empty, it means the transaction has been sent and packaged on the blockchain where the user wants to withdraw, **the assets withdrawn by the user have arrived**.

## Parameter
string

:::info
This string is the `everHash` string
:::
## Return
### Return Type
[EverpayTransaction](../types#everpaytransaction)

### Return Fields
Field information can be viewed in [Guide - Dive - Transaction - Transaction Record](../../../guide/dive/transaction#transaction-record)

## Example

```js
const everHash = '0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8'
const everpay = new Everpay({ debug: true })
everpay.txByHash(everHash).then(console.log)
```

## Example return
```js
{
  "tx": {
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
  }
}
```