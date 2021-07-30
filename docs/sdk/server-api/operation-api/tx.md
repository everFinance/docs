---
sidebar_position: 2
---

# tx

## 功能

所有 everPay 的交易，都会生成 everPay 交易并通过 `POST` 请求发送至 `tx` API，经过 everPay 后端服务验证。

在用户侧，只会生成：
* 转账的 `transfer` everPay 交易
* 提现的 `burn` everPay 交易

关于 `Schema` 生成、签名，以及交易记录获取，请阅读 [指南 - 深入理解 - 交易](../../../guide/dive/everpay-tx)
### 参数
* path `{{endpoint}}/tx`
* Post data `everpayTx`

### 示例
```bash
curl --location --request POST 'https://api-dev.everpay.io/tx' \
--header 'Content-Type: application/json' \
--data-raw '{
  "tokenSymbol": "USDT",
  "action": "mint",
  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",
  "to": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",
  "amount": "1000000000",
  "fee": "0",
  "feeRecipient": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",
  "nonce": "125",
  "tokenID": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
  "chainType": "ethereum",
  "chainID": "42",
  "data": "{\"blockHash\":\"0x92a3f4b955177d9e25eb68767804756710a43925726f6028ae41f8c1682e4516\",\"blockNumber\":\"0x172763a\",\"chainId\":\"0x2a\",\"condition\":null,\"creates\":null,\"from\":\"0xa06b79e655db7d7c3b3e7b2cceeb068c3259d0c9\",\"gas\":\"0x1319e\",\"gasPrice\":\"0x2d1375900\",\"hash\":\"0x8633e2e294dd2b0995bbd313390797be673f67196c51c0f49b8f17c0893d1c66\",\"input\":\"0xa9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca00\",\"nonce\":\"0x2ee\",\"publicKey\":\"0x103e40746c8cadcf3ec79cc5143e98c23bf22bf3e4abb6cd96221dfc2439494bbd2cdbb232bff9b69f931542e2ceb13253eaebe977f3613a9686a782738e6424\",\"r\":\"0xd959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310\",\"raw\":\"0xf8ac8202ee8502d13759008301319e94d85476c906b5301e8e9eb58d174a6f96b9dfc5ee80b844a9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca0077a0d959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310a04a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\",\"s\":\"0x4a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\",\"standardV\":\"0x0\",\"to\":\"0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\",\"transactionIndex\":\"0x3\",\"v\":\"0x77\",\"value\":\"0x0\"}",
  "version": "v1",
  "sig": "0x41054e11f44ddc72adf6f24efd9701ba510c7858ec8a1f0b08891e8d6f19869b552fb79134cb804d9074a3230c727c29930786435c46be21804dac0e3d871d831c"
}'
```

### 示例返回

```json
{
  "status": "ok"
}
```