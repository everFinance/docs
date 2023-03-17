---
sidebar_position: 10
---

# mintedTxByChainTxHash

## Function

Through the `chainTxHash` in the `blockchain recharge` transaction record, you can get the corresponding recharge transaction record on everPay.

For example, for an everPay deposit transaction, you can query the transaction record by `chainTxHash`, and if the everPay transaction record exists, you can assume that the deposit has arrived.

## Parameter
`{{everpay}}/minted/{{chainTxHash}}`

|Query Field|Mandatory|Description|
|---|---|---|
|chainTxHash|YES|`chainTxHash` in the blockchain recharge transaction record.|

:::danger
Only everPay transaction records for deposit can be queryed by `chainTxHash`, but not everPay transaction records for withdrawal. For example:
* ethereum deposit transaction, the etherum txHash of etherum deposit is `0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae`, this everPay deposit transaction record can be accessed through this API.
* everPay withdrawal transaction, the txHash of the final withdrawal to user ethereum wallet address is `0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7`, this everPay withdrawal transaction record cannot be accessed through this API.
:::

## Return Fields
Field information can be viewed in [DOCS - System overview - Transaction - Transaction Record](../../dive/transaction#transaction-record).

## Example

```bash
curl --location --request GET 'https://api-dev.everpay.io/minted/0x462450d6166688b894d48349a11c65419be0da7257cc81562cb0ef1a94bc527f'
```

## Example Return

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