---
sidebar_position: 7
---

# txByHash

## 功能
每一笔 everPay 交易，都有一个唯一的 `everHash` 字符串。通过 `everHash` 查询该笔交易的具体信息。

例如一笔 普通提现（非快速提现） 交易，可通过 `everHash` 查询该笔交易详情：
* `id` 不为空字符串，代表该笔 普通提现 交易，是否已经被记录到 arweave 区块链上，**确保了账本的正确性**
* `targetChainTxHash` 不为空，代表该笔 普通提现 交易，在用户要提现的区块链上，多签钱包/锁仓地址，已经发送交易并且已经打包完成，**用户提现的资产已到账**。

<!-- TODO: 详细交易状态流程图，见 Tutorial -->

## 参数
string

:::info
此处 string 为 `everHash` string
:::
## 返回
[EverpayTransaction](../types#everpaytransaction)

<!-- TODO: 在 server api 里面，需要描述清楚各字段意义；或者后端接口需要重新改造后返回 -->
## 示例

```js
const everHash = '0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8'
const everpay = new Everpay({ debug: true })
everpay.txByHash(everHash).then(console.log)
```

## 示例返回
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