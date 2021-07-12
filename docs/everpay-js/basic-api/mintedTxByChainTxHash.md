---
sidebar_position: 8
---

# mintedTxByChainTxHash

## 功能
通过区块链 **充值** 的交易记录 `chainTxHash` 获取 everPay 上对应的 everPay 充值交易记录。

例如一笔 everPay 充值交易，可通过 `chainTxHash` 查询该笔交易记录，如果该笔 everPay 交易记录存在，即可认为充值已到账。

<!-- TODO: 详细交易状态流程图，见 Guide -->

## 参数
string

:::info
此处 string 为 `chainTxHash` string
:::

:::danger
仅可通过 `chainTxHash` 查询充值的 everPay 交易记录，无法查询提现的 everPay 交易记录。例如：
* ethereum 充值交易，etherum 充值的 etherum txHash 为 `0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae`，此笔 everPay 充值交易记录可通过此 API 获取
* everPay 提现交易，最终提现至用户 ethereum 钱包地址的交易 txHash 为 `0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7`，此笔 everPay 提现交易记录无法通过此 API 获取
:::

## 返回
[EverpayTransaction](../types#everpaytransaction)

<!-- TODO: 在 server api 里面，需要描述清楚各字段意义；或者后端接口需要重新改造后返回 -->
## 示例

```js
const chainTxHash = '0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae'
const everpay = new Everpay({ debug: true })
everpay.mintedTxByChainTxHash(chainTxHash).then(console.log)
```

## 示例返回
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