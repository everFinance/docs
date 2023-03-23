---
sidebar_position: 9
---

# txByHash

## Function
Each everPay transaction has a unique `everHash` string. Use `everHash` to look up the details of the transaction.

For example, for a normal withdrawal (not quick withdrawal), you can query the transaction details via `everHash`.
* when the `id` is not an empty string, which means whether the transaction has been recorded on the arweave blockchain, **which ensures the correctness of the ledger**.
* when the `targetChainTxHash` is not empty, it means the transaction has been sent and packaged on the blockchain where the user wants to withdraw, **the assets withdrawn by the user have arrived**.


## Parameter
`{{endpoint}}/tx/{{everHash}}`

|Query Field|Mandatory|Description|
|---|---|---|
|everHash|YES| The unique character generated after the everPay transaction is completed.|

## Return Fields
Field information can be viewed in [DOCS - System overview - Transaction - Transaction Record](../../dive/transaction#transaction-record).
## Example

```bash
curl --location --request GET 'https://api-dev.everpay.io/tx/0x2c42f8b75b8c1ea2d1f76a7390601f229f2301d0906b8c6bba11b05551d2b3a8'
```

## Example Return

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