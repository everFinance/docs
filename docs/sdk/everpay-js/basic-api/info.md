---
sidebar_position: 2
---

# info

## 功能
获取 everPay 服务相关基本信息，例如：`arLocker` 代表 arweave 锁仓地址、`ethLocker` 代表 etherum 链锁仓合约。

## 参数
无
## 返回
### 返回类型
[EverpayInfo](../types#everpayinfo)

### 返回字段
字段信息可查看 [Server API - 基础查询接口 - info - 返回字段](../../server-api/basic-api/info#返回字段)
## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.info().then(console.log)
```

## 示例返回
```json
{
  "arLocker": "FyINHRSrHW0teUhvJzd6R33Tl50qxLnSj8LJCP5puiI",
  "balanceRootHash": "0xf1409f59761e6e8bce64c9665606c4fd1310ced3c1794362c73de12f92494c8f",
  "ethChainID": "42",
  "ethLocker": "0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a",
  "everRootHash": "0xd7818a950024a9204ee0ed91c0b0d4826b450ddd6dd084b074f155aedc56466f",
  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
  "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",
  "rootHash": "0xdd59e24982b39e809c97af7390a868805c5da260add84de87f6a0211915eb30f",
  "tokenList": [
    {
      "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
      "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
      "symbol": "AR",
      "decimals": 12,
      "chainDecimals": "12,12",
      "totalSupply": "1277528896607",
      "chainType": "arweave,ethereum",
      "chainID": "0,42",
      "burnFee": "11000000,10000000",
      "transferFee": "0",
      "atomicBundleFee": "0"
    },
    {
      "tag": "arweave,ethereum-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A,0x5adea0d9af164f371a79ed7243bd4fbaae1b79be",
      "id": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A,0x5aDEa0d9AF164F371A79ed7243Bd4FbAAe1B79Be",
      "symbol": "VRT",
      "decimals": 18,
      "chainDecimals": "0,18",
      "totalSupply": "39626838885888888889",
      "chainType": "arweave,ethereum",
      "chainID": "0,42",
      "burnFee": "11000000000000000,10000000000000000",
      "transferFee": "0",
      "atomicBundleFee": "0"
    },
    {
      "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
      "id": "0x0000000000000000000000000000000000000000",
      "symbol": "ETH",
      "decimals": 18,
      "chainDecimals": "18",
      "totalSupply": "78103479282262778055",
      "chainType": "ethereum",
      "chainID": "42",
      "burnFee": "5980000000000000",
      "transferFee": "0",
      "atomicBundleFee": "0"
    },
    {
      "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "symbol": "USDT",
      "decimals": 6,
      "chainDecimals": "6",
      "totalSupply": "10092306570978017261",
      "chainType": "ethereum",
      "chainID": "42",
      "burnFee": "24154640",
      "transferFee": "0",
      "atomicBundleFee": "0"
    },
    {
      "tag": "ethereum-usdc-0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
      "id": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
      "symbol": "USDC",
      "decimals": 6,
      "chainDecimals": "6",
      "totalSupply": "70126244944",
      "chainType": "ethereum",
      "chainID": "42",
      "burnFee": "24159838",
      "transferFee": "0",
      "atomicBundleFee": "0"
    },
    {
      "tag": "ethereum-dai-0xc4375b7de8af5a38a93548eb8453a498222c4ff2",
      "id": "0xc4375b7de8af5a38a93548eb8453a498222c4ff2",
      "symbol": "DAI",
      "decimals": 18,
      "chainDecimals": "18",
      "totalSupply": "0",
      "chainType": "ethereum",
      "chainID": "42",
      "burnFee": "24164061071196407000",
      "transferFee": "0",
      "atomicBundleFee": "0"
    }
  ]
}
```