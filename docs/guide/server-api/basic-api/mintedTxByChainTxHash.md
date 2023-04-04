---
sidebar_position: 10
---

# mintedTxByChainTxHash

## 功能
通过区块链 **充值** 交易记录中的 `chainTxHash`，可以获取到 everPay 上对应的 `充值` 交易记录.

例如一笔 everPay 充值交易，可通过 `chainTxHash` 查询该笔交易记录，如果该笔 everPay 交易记录存在，即可认为充值已到账。

## 参数
`{{ endpoint }}/minted/{{ chainTxHash }}`

|查询字段|是否比需|描述|
|---|---|---|
|chainTxHash| YES |区块链充值交易记录中的 `chainTxHash`。|

:::danger
仅可通过 `chainTxHash` 查询充值的 everPay 交易记录，无法查询提现的 everPay 交易记录。例如：
* ethereum 充值交易，etherum 充值的 etherum txHash 为 `0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae`，此笔 everPay 充值交易记录可通过此 API 获取。
* everPay 提现交易，最终提现至用户 ethereum 钱包地址的交易 txHash 为 `0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7`，此笔 everPay 提现交易记录无法通过此 API 获取。
:::

## 返回字段
字段信息可查看 [DOCS - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。

## 示例

```bash
curl --location --request GET 'https://api.everpay.io/minted/0x9b25f2f2cd0233ced0d9b6b4b6b8828747f54b7fd7d897db1eaf61f57325f645'
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