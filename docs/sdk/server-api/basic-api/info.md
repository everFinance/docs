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
|burnFees|**普通提现**该 Token 需要支付的手续费|
|transferFee|everPay 转账该 Token 需要支付的手续费|
|crossChainInfoList|跨链信息|

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
    "balanceRootHash": "0x124d568f9efcde30faa5302fb86936fa986e27ebb448d0220f0915bcc48a4353",
    "ethChainID": "42",
    "ethLocker": "0xa7ae99c13d82dd32fc6445ec09e38d197335f38a",
    "everRootHash": "0x2d2e5d430ef7cbec3704d820dc1d32f35cfd66ec2590d5bd7ba661a9ea1f45d5",
    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
    "isClosed": false,
    "isSynced": true,
    "lockers": {
        "arweave": "FyINHRSrHW0teUhvJzd6R33Tl50qxLnSj8LJCP5puiI",
        "ethereum": "0xa7ae99c13d82dd32fc6445ec09e38d197335f38a",
        "moon": "0xb3f2f559fe40c1f1ea1e941e982d9467208e17ae"
    },
    "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",
    "rootHash": "0xf35ebe2d9262d2c244a4481cebe1bee834555dbeef34028e0b71cdb3f6cb487a",
    "tokenList": [
        {
            "tag": "moonbase-dev-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "DEV",
            "decimals": 18,
            "chainDecimals": "",
            "totalSupply": "0",
            "chainType": "moonbase",
            "chainID": "1287",
            "burnFees": {
                "moon": "0"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 0,
            "crossChainInfoList": {
                "moon": {
                    "targetChainId": "1287",
                    "targetChainType": "moon",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
            "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
            "symbol": "AR",
            "decimals": 12,
            "chainDecimals": "",
            "totalSupply": "1373286124941",
            "chainType": "arweave,ethereum",
            "chainID": "0,42",
            "burnFees": {
                "arweave": "2017695679",
                "ethereum": "398958"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 24,
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
        },
        {
            "tag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "id": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "symbol": "ARDRIVE",
            "decimals": 18,
            "chainDecimals": "",
            "totalSupply": "1000000000000000000",
            "chainType": "arweave",
            "chainID": "99",
            "burnFees": {
                "arweave": "6053087037000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
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
            "tag": "arweave-pia-n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
            "id": "n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
            "symbol": "PIA",
            "decimals": 18,
            "chainDecimals": "",
            "totalSupply": "0",
            "chainType": "arweave",
            "chainID": "99",
            "burnFees": {
                "arweave": "0"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 0,
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
            "chainDecimals": "",
            "totalSupply": "65899989999000000000",
            "chainType": "arweave",
            "chainID": "99",
            "burnFees": {
                "arweave": "100884783950000000",
                "ethereum": "1994420100000"
            },
            "transferFee": "0",
            "bundleFee": "0",
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
            "chainDecimals": "",
            "totalSupply": "0",
            "chainType": "arweave",
            "chainID": "99",
            "burnFees": {
                "arweave": "8070782716000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
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
            "chainDecimals": "",
            "totalSupply": "0",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "14090980489977216700"
            },
            "transferFee": "0",
            "bundleFee": "0",
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
            "chainDecimals": "",
            "totalSupply": "81799515574622491062",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "4680000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 201,
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
            "chainDecimals": "",
            "totalSupply": "70776043961",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "14089571"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 8,
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
            "chainDecimals": "",
            "totalSupply": "10102306619331215394",
            "chainType": "ethereum",
            "chainID": "42",
            "burnFees": {
                "ethereum": "14085345"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 137,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "42",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee"
                }
            }
        }
    ]
}
```
