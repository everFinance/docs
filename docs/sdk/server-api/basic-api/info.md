---
sidebar_position: 2
---

# info

## 功能
获取 everPay 服务相关基本信息，例如：`arLocker` 代表 arweave 锁仓地址、`ethLocker` 代表 etherum 链锁仓合约。

## 参数
`{{endpoint}}/info`

## 返回字段
|字段|描述|
|---|---|
|arLocker|everPay AR 原生代币锁仓地址|
|ethChainID|当前以太坊网络 ID|
|ethLocker|everPay 以太坊区块链ETH、erc20 Token 锁仓合约地址|
|everRootHash| everPay 系统交易指纹，通过当前所有交易 everHash 逐笔进行 keccak256 获得|
|feeRecipient|everPay 手续费收款账户 ID|
|owner|负责将 everPay 交易记录存储至 Arweave 区块链的钱包地址|
|rootHash|everPay 系统交易指纹，通过当前所有交易 everHash 与 id 逐笔进行 keccak256 获得|
|tokenList|everPay 支持的资产列表。单一币种字段，见如下 [Token 字段描述](#Token-字段描述)|

### Token 字段描述
|字段|描述|
|---|---|
|tag|由 `chainType`, `symbol`, `id` 通过 `-` 组合|
|id|Token ID，通常为 Token erc20 合约地址，如支持多个区块链充值提现，以 `,` 隔开|
|symbol|Token Symbol|
|decimals|Token decimals|
|chainDecimals|具体的链的 Token decimals|
|totalSupply|everPay 上，Token 资产总量|
|chainType|Token 所支持的区块链，如支持多个区块链充值提现，以 `,` 隔开|
|chainID|Token 所支持的区块链网络 ID，如支持多个区块链充值提现，以 `,` 隔开|
|burnFee|**普通提现**该 Token 需要支付的手续费|
|transferFee|everPay 转账该 Token 需要支付的手续费|

:::danger
* 以太坊地址大小写兼容，**Arweave 地址，大小写不兼容**
* everPay 建议开发者，使用 everPay 返回的 Token 信息，组装 [`Schema`](../../../guide/dive/transaction#schema)
:::

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/info'
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