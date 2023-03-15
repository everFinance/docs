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
字段信息可查看 [指南 - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/minted/0x462450d6166688b894d48349a11c65419be0da7257cc81562cb0ef1a94bc527f'
```

## 示例返回
```js
{
    "tx": {
        "rawId": 1292,
        "id": "kxTpZRxHWDvlDGUcq7856SBe_5oztYwCtl9gfAQZXi4",
        "tokenSymbol": "ETH",
        "action": "mint",
        "from": "0xb300a963622ee25b17f4Da0D7a210a8D53E27983",
        "to": "0xfc65e09ef6674ddb4d8a6f3b6a6c8d9d55d67716",
        "amount": "1000000000000000000",
        "fee": "0",
        "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
        "nonce": 1677223901000,
        "tokenID": "0x0000000000000000000000000000000000000000",
        "chainType": "ethereum",
        "chainID": "5",
        "data": "{\"blockHash\":\"0x5adc9fbbbf2fdc269def1f1a8882c912879294ebc08d7eb623938f26cac4467c\",\"blockNumber\":\"0x82694f\",\"from\":\"0xfc65e09ef6674ddb4d8a6f3b6a6c8d9d55d67716\",\"gas\":\"0x61a8\",\"gasPrice\":\"0x1181d0fb89\",\"maxFeePerGas\":\"0x16c4cbf140\",\"maxPriorityFeePerGas\":\"0x59682f00\",\"hash\":\"0x462450d6166688b894d48349a11c65419be0da7257cc81562cb0ef1a94bc527f\",\"input\":\"0x\",\"nonce\":\"0x3\",\"to\":\"0xb9cd7e1280e78f7f00d0f0856bd81af5da083fa0\",\"transactionIndex\":\"0x42\",\"value\":\"0xde0b6b3a7640000\",\"type\":\"0x2\",\"accessList\":[],\"chainId\":\"0x5\",\"v\":\"0x1\",\"r\":\"0xcc51680c839b3d2f19b3efda3720b33876d619a80b883f1f3e7dca6a45f945f3\",\"s\":\"0x786271f2718d46b9efd2ce7b834f6b9cda8169d3b6fefceedede3522e986b25f\",\"targetChainType\":\"ethereum\"}",
        "version": "v1",
        "sig": "0x1fc51160855a247ecd27b09d2a02cf75a9fcf07b5b00f9568a57a097f28cdd76130510e37ac1a8ab0687fc209317b9a34c80cb852c9f4e5b251e4fdffce56f071c",
        "everHash": "0x7c02deda6e3853ff63dd1b172ad1648ff731f2afd77ff63175fb04befbabd40b",
        "status": "packaged",
        "internalStatus": "{\"status\":\"success\"}",
        "timestamp": 1677224176000,
        "targetChainTxHash": "0x462450d6166688b894d48349a11c65419be0da7257cc81562cb0ef1a94bc527f",
        "express": {
            "chainTxHash": "",
            "withdrawFee": "",
            "refundEverHash": "",
            "err": ""
        }
    }
}
```