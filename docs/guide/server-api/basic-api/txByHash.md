---
sidebar_position: 9
---

# txByHash

## 功能
每一笔 everPay 交易，都会生成唯一的 `everHash` 字符串。可通过 `everHash` 查询该笔交易的具体信息。

例如一笔  ` 普通提现（非快速提现）` 交易，可通过 `everHash` 查询该笔交易详情：
* `id` 不为空字符串，代表该笔是 普通提现 交易，是否已经被记录到 arweave 区块链上，**确保了账本的正确性**。
* `targetChainTxHash` 不为空，代表该笔是 普通提现 交易，在用户要提现的区块链上，多签钱包/锁仓地址，已经发送交易并且已经打包完成，**用户提现的资产已到账**。


## 参数
`{{endpoint}}/tx/{{everHash}}`

|查询字段|描述|
|---|---|
|请求方式|GET|
|everHash|everPay 交易完成后，生成的唯一字符。|

## 返回字段
字段信息可查看 [指南 - 深入理解 - 交易 - 交易记录](../../dive/transaction#交易记录)。
## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/tx/0x2c42f8b75b8c1ea2d1f76a7390601f229f2301d0906b8c6bba11b05551d2b3a8'
```

## 示例返回
```json
{
    "tx": {
        "rawId": 1285,
        "id": "71FCES97DRmosyqAcHqicuZuflqRCnQaV2ytulb8lvs",
        "tokenSymbol": "USDT",
        "action": "transfer",
        "from": "0x4002ED1a1410aF1b4930cF6c479ae373dEbD6223",
        "to": "Ii5wAMlLNz13n26nYY45mcZErwZLjICmYd46GZvn4ck",
        "amount": "11000000",
        "fee": "0",
        "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
        "nonce": 1677035245584,
        "tokenID": "0x923Fcb255da521037385457FB549a51F78Ef0AF4",
        "chainType": "ethereum",
        "chainID": "5",
        "data": "",
        "version": "v1",
        "sig": "0x336baa979bf5f06b1871e01d2e8406ffc4de02c9451caf8e8e70e1991337aca073b5e251e9610db5a9a87fef002c7a8f922239c8112c756416d5097cc47260901b",
        "everHash": "0x2c42f8b75b8c1ea2d1f76a7390601f229f2301d0906b8c6bba11b05551d2b3a8",
        "status": "packaged",
        "internalStatus": "{\"status\":\"success\"}",
        "timestamp": 1677035719000,
        "targetChainTxHash": "",
        "express": {
            "chainTxHash": "",
            "withdrawFee": "",
            "refundEverHash": "",
            "err": ""
        }
    }
}
```