---
sidebar_position: 5
---

# fees

## 功能
获取 在 everPay 上的 代币 的 `transfer`、`withdraw`、`bundle` 手续费

## 参数
`{{endpoint}}/fees`

|查询字段|描述|
|---|---|
|请求方式|GET|


## 返回字段
|字段|描述|
|---|---|
|tokenTag|识别 `token` 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|burnFeeMap|`withdraw` 手续费|
|transferFee| `transfer` 手续费|
|atomicBundleFee| `bundle` 手续费|

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/fees'
```

## 示例返回
```json
{
    "fees": [
        {
            "tokenTag": "arweave-pia-n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "arweave": "0"
            }
        },
        {
            "tokenTag": "arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "arweave": "113283016595811720",
                "ethereum": "1200000000000000"
            }
        },
        {
            "tokenTag": "arweave-xyz-mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "arweave": "9062641327664880"
            }
        },
        {
            "tokenTag": "ethereum-dai-0xc4375b7de8af5a38a93548eb8453a498222c4ff2",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "ethereum": "8863368273654731160"
            }
        },
        {
            "tokenTag": "ethereum-eth-0x0000000000000000000000000000000000000000",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "ethereum": "3432000000000000"
            }
        },
        {
            "tokenTag": "ethereum-usdc-0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "ethereum": "8864697"
            }
        },
        {
            "tokenTag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "ethereum": "8861595"
            }
        },
        {
            "tokenTag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "arweave": "6796980995748720"
            }
        },
        {
            "tokenTag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
            "transferFee": "0",
            "atomicBundleFee": "0",
            "burnFeeMap": {
                "arweave": "2265886830",
                "ethereum": "120000000"
            }
        }
    ]
}
```