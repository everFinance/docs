---
sidebar_position: 2
---

# info

## 功能
获取 everPay 服务相关基本信息，例如：`arLocker` 代表 arweave 锁仓地址、`ethLocker` 代表 etherum 链锁仓合约。

## 参数
无
## 返回
[EverpayInfo](../types#everpayinfo)
## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.info().then(console.log)
```

## 示例返回
```json
{
  "arLocker": "bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc",
  "ethChainID": "42",
  "ethLocker": "0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a",
  "everRootHash": "0x91fdcd368b9910bb802dcc7472b3079bcb12203317e3932c4155b12fc570f9e0",
  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
  "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",
  "rootHash": "0x622a1d82bea49b55781a97401d3a8c816e89ed79df9809cc7f8e06e2af2d863f",
  "tokenList": [
      {
          "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
          "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
          "symbol": "AR",
          "decimals": 12,
          "totalSupply": "1371970463702",
          "chainType": "arweave,ethereum",
          "chainID": "0,42",
          "burnFee": "15000",
          "transferFee": "0"
      },
      {
          "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
          "id": "0x0000000000000000000000000000000000000000",
          "symbol": "ETH",
          "decimals": 18,
          "totalSupply": "43630547196159703549",
          "chainType": "ethereum",
          "chainID": "42",
          "burnFee": "20000000000000000",
          "transferFee": "0"
      },
      {
          "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
          "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
          "symbol": "USDT",
          "decimals": 6,
          "totalSupply": "101315553998270991",
          "chainType": "ethereum",
          "chainID": "42",
          "burnFee": "80000000",
          "transferFee": "0"
      }
  ]
}
```