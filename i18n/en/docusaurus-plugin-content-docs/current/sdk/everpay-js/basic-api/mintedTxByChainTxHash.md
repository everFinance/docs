---
sidebar_position: 9
---

# mintedTxByChainTxHash

## Function
Get the everPay deposit transaction on everPay using `chainTxHash` which is the `txHash` of **deposit** transaction on the blockchain.

For example, for an everPay deposit transaction, you can query the transaction record by `chainTxHash`, and if the everPay transaction record exists, you can assume that the deposit has arrived.

## Parameter
string

:::info
This string is the `chainTxHash` string
:::

:::danger
Only everPay transaction for deposit can be queryed by `chainTxHash`, but not everPay transaction for withdraw. For example
* an ethereum deposit transaction, etherum txHash for etherum deposit is `0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae`, this everPay deposit transaction record can be accessed through this API
* everPay withdraw transaction, the txHash of the final withdraw to user ethereum wallet address is `0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7`, this everPay withdraw transaction record cannot be accessed through This API
:::

## Return

### Return Type
[EverpayTransaction](../types#everpaytransaction)

### Return Fields
Field information can be viewed in [Guide - Dive - Transaction - Transaction Record](../../../guide/dive/transaction#transaction-record)

## Example

```js
const chainTxHash = '0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae'
const everpay = new Everpay({ debug: true })
everpay.mintedTxByChainTxHash(chainTxHash).then(console.log)
```

## Example return
```js
{
  "tx": {
    "id": "MbsBUeBypea_OZFe4rPKqSQ5GIzHCnFSDgO4kYcnBOc",
    "tokenSymbol": "ETH",
    "action": "mint",
    "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",
    "to": "0xA6a82c61B3A1E26030CD917AE1262968ABdA7286",
    "amount": "1719307428929703547",
    "fee": "0",
    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
    "nonce": 1625726093535,
    "tokenID": "0x0000000000000000000000000000000000000000",
    "chainType": "ethereum",
    "chainID": "42",
    "data": "{\"hash\": \"0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae\", \"nonce\": \"0x31\", \"blockHash\": \"0xaede2df39b4bd3a3fde772c13bad31abfa1075d1e3a12e7c0fd9ada23671ea8c\", \"blockNumber\": \"0x18c801d\", \"transactionIndex\": \"0x0\", \"from\": \"0xA6a82c61B3A1E26030CD917AE1262968ABdA7286\", \"to\": \"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\", \"value\": \"0x17dc34ff510b8e7b\", \"gas\": \"0x587a\", \"gasPrice\": \"0x165a0bc00\", \"input\": \"0x\", \"r\": \"0xb56f5631cb0d00809c309abd58de5ef67e856b40fa13ae200650ed257eda0c5e\", \"s\": \"0x268dfb599d8396cc0a30fb6e8b8c1ec709775f3468da31195cfa95f9e1b3908d\", \"v\": \"0x77\"}",
    "sig": "0x7fc912dcd50ae2e75b969b49eee65ac74eb2e74decc9d61d480ee95d62edf264654a17a8721d3615b7f8749f8a31171926a82a14bba37de7c9d23af4564c27621b",
    "everHash": "0xb6968772f28f7182c39d5b533a5bafd3340ae18643a42f9580cd18c8af51cd4b",
    "status": "packaged",
    "timestamp": 1625727644000,
    "targetChainTxHash": "0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae"
  }
}
```