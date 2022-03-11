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
    "balanceRootHash": "0xc0eb07695246b337dc8be4665e8747e0975ffa938f8f8404b69b976e0019e233",
    "ethChainID": "42",
    "ethLocker": "0xa7ae99c13d82dd32fc6445ec09e38d197335f38a",
    "everRootHash": "0x1a8718d9464dc049ed89c8d5a0c864cf7c6efa19a0fff29f4c964301f5194aa4",
    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
    "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",
    "rootHash": "0x4087b9bfc4241e8a64f290285c4692f378692d96b8d3557a4689dc6cb56a8954",
    "tokenList": [
        {
            "tag": "arweave-pia-n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
            "id": "n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
            "symbol": "PIA",
            "decimals": 18,
            "chainDecimals": "0",
            "totalSupply": "1000000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "0"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 1,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno"
                }
            }
        },
        {
            "tag": "arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "id": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "symbol": "VRT",
            "decimals": 18,
            "chainDecimals": "0",
            "totalSupply": "64899989999000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "94407228533265800",
                "ethereum": "1000000000000000"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 42,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A"
                },
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0xde10c3040aDB1e3d63Dd0ce7965192610aE36712"
                }
            }
        },
        {
            "tag": "arweave-xyz-mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",
            "id": "mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",
            "symbol": "XYZ",
            "decimals": 18,
            "chainDecimals": "0",
            "totalSupply": "0",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "7552578282661300"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 0,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74"
                }
            }
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
            "burnFees": {
                "ethereum": "7375371963603276100"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 0,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0xc4375b7de8af5a38a93548eb8453a498222c4ff2"
                }
            }
        },
        {
            "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "ETH",
            "decimals": 18,
            "chainDecimals": "18",
            "totalSupply": "80716479282262778054",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "2860000000000000"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 199,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "ethereum-usdc-0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
            "id": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",
            "symbol": "USDC",
            "decimals": 6,
            "chainDecimals": "6",
            "totalSupply": "70134244944",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "7376036"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 6,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede"
                }
            }
        },
        {
            "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
            "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
            "symbol": "USDT",
            "decimals": 6,
            "chainDecimals": "6",
            "totalSupply": "10092307530648914900",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "7373455"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 84,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee"
                }
            }
        },
        {
            "tag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "id": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "symbol": "ARDRIVE",
            "decimals": 18,
            "chainDecimals": "0",
            "totalSupply": "1000000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "5664433711995900"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 4,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ"
                }
            }
        },
        {
            "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
            "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
            "symbol": "AR",
            "decimals": 12,
            "chainDecimals": "12,12",
            "totalSupply": "1483489588606",
            "chainType": "arweave,ethereum",
            "chainID": "0,42",
            "burnFees": {
                "arweave": "1888239025",
                "ethereum": "100000000"
            },
            "transferFee": "0",
            "atomicBundleFee": "0",
            "holderNum": 22,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 12,
                    "targetTokenId": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                },
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 12,
                    "targetTokenId": "0xcc9141efa8c20c7df0778748255b1487957811be"
                }
            }
        }
    ]
}
```