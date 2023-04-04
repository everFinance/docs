---
sidebar_position: 9
---

# txByHash

## 功能
每一笔 everPay 交易，都会生成唯一的 `everHash` 字符串。可通过 `everHash` 查询该笔交易的具体信息。

例如一笔  ` 普通提现 ` 交易，可通过 `everHash` 查询该笔交易详情：
* `id` 不为空字符串，代表该笔是 普通提现 交易，是否已经被记录到 arweave 区块链上，**确保了账本的正确性**。
* `targetChainTxHash` 不为空，代表该笔是 普通提现 交易，在用户要提现的区块链上，多签钱包/锁仓地址，已经发送交易并且已经打包完成，**用户提现的资产已到账**。


## 参数
`{{endpoint}}/tx/{{everHash}}`

|查询字段|是否比需|描述|
|---|---|---|
|everHash|YES|everPay 交易完成后，生成的唯一字符。|

## 返回字段
字段信息可查看 [DOCS - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。
## 示例

```bash
curl --location --request GET 'https://api.everpay.io/tx/0x1b92bc251eb2da71511e9bce6c4be990293e54d5652b4da3e335d539e07b98c7'
```

## 示例返回
```json
{
    "tx":{
        "rawId":1,
        "id":"RyS1flxlO_RDURDDNERrc7aYrOq74HbOitcu2mnRbPg",
        "tokenSymbol":"USDT",
        "action":"mint",
        "from":"0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",
        "to":"0x3F52acd59FFD2e5ea88c3aeB04046173fDbA8ddb",
        "amount":"100000000",
        "fee":"0",
        "feeRecipient":"0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",
        "nonce":1620961926378,
        "tokenID":"0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "chainType":"ethereum",
        "chainID":"1",
        "data":"{\"hash\": \"0x9b25f2f2cd0233ced0d9b6b4b6b8828747f54b7fd7d897db1eaf61f57325f645\", \"nonce\": \"0x5\", \"blockHash\": \"0x04f1209be4c9c0b0a976ef5389bed09dcd7a281e7a64e892c603186d13ef774b\", \"blockNumber\": \"0xbdaaa7\", \"transactionIndex\": \"0xe1\", \"chainId\": \"0x1\", \"condition\": null, \"creates\": null, \"from\": \"0x3F52acd59FFD2e5ea88c3aeB04046173fDbA8ddb\", \"to\": \"0xdAC17F958D2ee523a2206206994597C13D831ec7\", \"value\": \"0x0\", \"gas\": \"0xf6dd\", \"gasPrice\": \"0x178411b200\", \"input\": \"0xa9059cbb00000000000000000000000038741a69785e84399fcf7c5ad61d572f7ecb1dab0000000000000000000000000000000000000000000000000000000005f5e100\", \"r\": \"0x67c6ea0e85a54d10dc6e20e7087b0f6a4fcf3173e38cd6847dbe2c92dd307e54\", \"s\": \"0x57818c62707bbbd3aa5d8d527b6eafa62d0f02f9f2e11fe7bb680040328657d5\", \"v\": \"0x26\"}",
        "version":"",
        "sig":"0x0b2c6032fe3cae6f26eec35958b7bbdd2bca1ab34ec1531d8df7dddd2a99d95919ee8667703a0212c9643b20cb5ab3ed35c9db17c5f2d317a951de10a65f34411b",
        "everHash":"0x1b92bc251eb2da71511e9bce6c4be990293e54d5652b4da3e335d539e07b98c7",
        "status":"packaged",
        "internalStatus":"{\"status\":\"success\"}",
        "timestamp":1620962091000,
        "targetChainTxHash":"0x9b25f2f2cd0233ced0d9b6b4b6b8828747f54b7fd7d897db1eaf61f57325f645",
        "express":{
            "chainTxHash":"",
            "withdrawFee":"",
            "refundEverHash":"",
            "err":""
        }
    }
}
```