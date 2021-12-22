---
sidebar_position: 5
---

# fees

## 功能
获取 在 everPay 上的 代币 的 `transfer`、`withdraw`、`bundle` 手续费

## 参数
无
## 返回
### 返回类型
[FeeItem](../types#feeitem)[]

### 返回字段
|字段|描述|
|---|---|
|tokenTag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|burnFee|`withdraw` 手续费，如果该币种支持多条链提现，以 `,` 分隔开不同的链的提现手续费|
|transferFee| `transfer` 手续费|
|atomicBundleFee| `bundle` 手续费|
## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay1.fees().then(console.log)
```

## 示例返回
```js
[
  {
    "tokenTag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
    "burnFee": "13200000,12000000",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-20T02:16:41.145Z",
    "manualSet": true
  },
  {
    "tokenTag": "arweave,ethereum-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A,0x5adea0d9af164f371a79ed7243bd4fbaae1b79be",
    "burnFee": "13200000000000000,12000000000000000",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-11-17T09:54:08.487Z",
    "manualSet": true
  },
  {
    "tokenTag": "ethereum-eth-0x0000000000000000000000000000000000000000",
    "burnFee": "9360000000000000",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-22T03:52:19.729Z",
    "manualSet": false
  },
  {
    "tokenTag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
    "burnFee": "37982731",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-22T03:52:19.707Z",
    "manualSet": false
  },
  {
    "tokenTag": "ethereum-usdc-0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
    "burnFee": "37996024",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-22T03:52:19.714Z",
    "manualSet": false
  },
  {
    "tokenTag": "ethereum-dai-0xc4375b7de8af5a38a93548eb8453a498222c4ff2",
    "burnFee": "37992985534557234840",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-22T03:52:19.722Z",
    "manualSet": false
  }
]
```