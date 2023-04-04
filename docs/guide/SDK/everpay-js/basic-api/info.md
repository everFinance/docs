---
sidebar_position: 2
---

# info

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能

获取 everPay 服务相关基本信息，例如：`arLocker` 代表 arweave 锁仓地址、`ethLocker` 代表 etherum 链锁仓合约、  `tokenList` 代表 everPay 支持的资产列表等信息。

## 参数
```ts
everpay.info():EverpayInfo
```

## 返回数据

<Tabs>
<TabItem value="field" label="返回字段" default>

### 字段描述

|字段|描述|
|---|---|
|arLocker|everPay AR 原生代币锁仓地址。|
|ethChainID|当前以太坊网络 ID。|
|ethLocker|everPay 以太坊区块链ETH、erc20 Token 锁仓合约地址。|
|everRootHash| everPay 系统交易指纹，通过当前所有交易 everHash 逐笔进行 keccak256 获得。|
|feeRecipient|everPay 手续费收款账户 ID。|
|owner|负责将 everPay 交易记录存储至 Arweave 区块链的钱包地址。|
|rootHash|everPay 系统交易指纹，通过当前所有交易 everHash 与 id 逐笔进行 keccak256 获得。|
|lockers| everPay 所有支持原生链的锁仓地址。|
|tokenList|everPay 支持的资产列表。单一币种字段，见如下 [Token 字段描述](#Token-字段描述)。|


### Token 字段描述

|字段|描述|
|---|---|
|tag|token 的唯一标识，由 `chainType`, `symbol`, `id` 通过 `-` 组合。|
|id|Token ID，通常为 Token erc20 合约地址，如支持多个区块链充值提现，以 `,` 隔开。|
|symbol|Token Symbol。|
|decimals|Token decimals。|
|chainDecimals|具体的链的 Token decimals。|
|totalSupply|everPay 上，Token 资产总量。|
|chainType|Token 所支持的区块链，如支持多个区块链充值提现，以 `,` 隔开。|
|chainID|Token 所支持的区块链网络 ID，如支持多个区块链充值提现，以 `,` 隔开。|
|burnFees|**普通提现**该 Token 需要支付的手续费。|
|transferFee|everPay 转账该 Token 需要支付的手续费。|
|crossChainInfoList|跨链信息。|

</TabItem>

<TabItem value="type" label="返回类型">

```ts
export interface EverpayInfo {
  ethLocker: string
  arLocker: string
  ethChainID: string
  feeRecipient: string
  owner: string
  everRootHash: string
  rootHash: string
  tokenList: Token[]
}

export interface Token {
  tag: string
  id: string
  symbol: string
  decimals: number
  totalSupply: string
  chainID: string
  chainType: ChainType | string
  crossChainInfoList: {
    [propname: string]: CrossChainInfo
  }
}
```

</TabItem>
</Tabs>

## 示例

```js
const everpay = new Everpay()
everpay.info().then(console.log)
```

## 示例返回
```json
{
    "isSynced": true,
    "isClosed": false,
    "balanceRootHash": "0xcecc83ae52f37aa40e23fbc3bc6e003df6118ee0c2094679a8c7aa6071c74f98",
    "rootHash": "0x8dea2e2efd9741798c9806a9057d9eaf0eb17aded23874742d42bfad795c7b2c",
    "everRootHash": "0x0c6660c28b9beb52aa8b4b8525734e0a84fae3b51560028c578bbe7f5f961478",
    "owner": "uGx-QfBXSwABKxjha-00dI7vvfyqIYblY6Z5L6cyTFM",
    "setActionOwner": "0x2f669E44F42f26435034EEC7224a7df92a55Cf6A",
    "ethChainID": "1",
    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
    "ethLocker": "0x38741a69785e84399fcf7c5ad61d572f7ecb1dab",
    "arLocker": "dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys",
    "lockers": {
        "arweave": "dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys",
        "bsc": "0xb415c71272eecce5566a8c465ffbecf3500977da",
        "conflux": "0xc68370c007cab6f0698ebb6a8da93d40c43ada5a",
        "ethereum": "0x38741a69785e84399fcf7c5ad61d572f7ecb1dab",
        "moon": "0x93b2c8834264e9e88bf49467ae6cbe9ebee2a880",
        "platon": "0x3936cd628a519c399374a6ae0881de92acf791ef"
    },
    "tokenList": [
        {
            "tag": "bsc-bnb-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "BNB",
            "decimals": 18,
            "totalSupply": "3352579100000000000",
            "chainType": "bsc",
            "chainID": "56",
            "burnFees": {
                "bsc": "1300000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 35,
            "crossChainInfoList": {
                "bsc": {
                    "targetChainId": "56",
                    "targetChainType": "bsc",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "bsc-dodo-0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
            "id": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
            "symbol": "DODO",
            "decimals": 18,
            "totalSupply": "28005756582720298414",
            "chainType": "bsc",
            "chainID": "56",
            "burnFees": {
                "bsc": "2"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 9,
            "crossChainInfoList": {
                "bsc": {
                    "targetChainId": "56",
                    "targetChainType": "bsc",
                    "targetDecimals": 18,
                    "targetTokenId": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"
                }
            }
        },
        {
            "tag": "platon-lat-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "LAT",
            "decimals": 18,
            "totalSupply": "117295799400000000000",
            "chainType": "platon",
            "chainID": "210425",
            "burnFees": {
                "platon": "130000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 11,
            "crossChainInfoList": {
                "platon": {
                    "targetChainId": "210425",
                    "targetChainType": "platon",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "ethereum-usdc-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "id": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "symbol": "USDC",
            "decimals": 6,
            "totalSupply": "430275920724",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "3000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 360,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                }
            }
        },
        {
            "tag": "ethereum-xsgd-0x70e8de73ce538da2beed35d14187f6959a8eca96",
            "id": "0x70e8de73ce538da2beed35d14187f6959a8eca96",
            "symbol": "XSGD",
            "decimals": 6,
            "totalSupply": "39000000",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "8000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 11,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0x70e8de73ce538da2beed35d14187f6959a8eca96"
                }
            }
        },
        {
            "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "symbol": "AR",
            "decimals": 12,
            "totalSupply": "40630857990359370",
            "chainType": "arweave,ethereum",
            "chainID": "0,1",
            "burnFees": {
                "arweave": "2568271698",
                "ethereum": "1",
                "moon": "741295694"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 2239,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 12,
                    "targetTokenId": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                },
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 12,
                    "targetTokenId": "0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543"
                },
                "moon": {
                    "targetChainId": "1284",
                    "targetChainType": "moon",
                    "targetDecimals": 12,
                    "targetTokenId": "0xAc42091313105104AC5a884c3c7c7e5a7EF9Ea38"
                }
            }
        },
        {
            "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "ETH",
            "decimals": 18,
            "totalSupply": "64060215899199604555",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "1820000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 338,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "moonbeam-glmr-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "GLMR",
            "decimals": 18,
            "totalSupply": "430871400000000000000",
            "chainType": "moonbeam",
            "chainID": "1284",
            "burnFees": {
                "moon": "13000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 21,
            "crossChainInfoList": {
                "moon": {
                    "targetChainId": "1284",
                    "targetChainType": "moon",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "conflux-cfx-0x0000000000000000000000000000000000000000",
            "id": "0x0000000000000000000000000000000000000000",
            "symbol": "CFX",
            "decimals": 18,
            "totalSupply": "78377104932294969828124",
            "chainType": "conflux",
            "chainID": "1030",
            "burnFees": {
                "conflux": "130000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 67,
            "crossChainInfoList": {
                "conflux": {
                    "targetChainId": "1030",
                    "targetChainType": "conflux",
                    "targetDecimals": 18,
                    "targetTokenId": "0x0000000000000000000000000000000000000000"
                }
            }
        },
        {
            "tag": "ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7",
            "id": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "symbol": "USDT",
            "decimals": 6,
            "totalSupply": "80992658803",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "3000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 241,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 6,
                    "targetTokenId": "0xdac17f958d2ee523a2206206994597c13d831ec7"
                }
            }
        },
        {
            "tag": "ethereum-fox-0xc770eefad204b5180df6a14ee197d99d808ee52d",
            "id": "0xc770eefad204b5180df6a14ee197d99d808ee52d",
            "symbol": "FOX",
            "decimals": 18,
            "totalSupply": "111000000000000000000",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "40000000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 3,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0xc770eefad204b5180df6a14ee197d99d808ee52d"
                }
            }
        },
        {
            "tag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "id": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "symbol": "ARDRIVE",
            "decimals": 18,
            "totalSupply": "1522900000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "7704935631780300",
                "moon": "2223921873716100"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 37,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ"
                },
                "moon": {
                    "targetChainId": "1284",
                    "targetChainType": "moon",
                    "targetDecimals": 18,
                    "targetTokenId": "0x826DB9e588217c1ca1166fd24A491537511b966b"
                }
            }
        },
        {
            "tag": "ethereum-sos-0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            "id": "0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            "symbol": "SOS",
            "decimals": 18,
            "totalSupply": "1461520461657719000602774864",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "22439460"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 271,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x3b484b82567a09e2588a13d54d032153f0c0aee0"
                }
            }
        },
        {
            "tag": "ethereum-t4ever-0xeaba187306335dd773ca8042b3792c46e213636a",
            "id": "0xeaba187306335dd773ca8042b3792c46e213636a",
            "symbol": "T4EVER",
            "decimals": 18,
            "totalSupply": "408143600000000000000000",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "100000000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 6,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0xeaba187306335dd773ca8042b3792c46e213636a"
                }
            }
        },
        {
            "tag": "ethereum-wbtc-0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "id": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "symbol": "WBTC",
            "decimals": 8,
            "totalSupply": "196001",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "14154"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 3,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 8,
                    "targetTokenId": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                }
            }
        },
        {
            "tag": "moonbeam-zlk-0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",
            "id": "0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",
            "symbol": "ZLK",
            "decimals": 18,
            "totalSupply": "1000000000000000000",
            "chainType": "moonbeam",
            "chainID": "1284",
            "burnFees": {
                "moon": "100000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 3,
            "crossChainInfoList": {
                "moon": {
                    "targetChainId": "1284",
                    "targetChainType": "moon",
                    "targetDecimals": 18,
                    "targetTokenId": "0x3fd9b6c9a24e09f67b7b706d72864aebb439100c"
                }
            }
        },
        {
            "tag": "ethereum-bank-0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
            "id": "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
            "symbol": "BANK",
            "decimals": 18,
            "totalSupply": "339385209308180769679",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "100000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 6,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198"
                }
            }
        },
        {
            "tag": "arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "id": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "symbol": "VRT",
            "decimals": 18,
            "totalSupply": "1840000000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "128415593863004500"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 15,
            "crossChainInfoList": {
                "arweave": {
                    "targetChainId": "0",
                    "targetChainType": "arweave",
                    "targetDecimals": 0,
                    "targetTokenId": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A"
                }
            }
        },
        {
            "tag": "ethereum-mask-0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
            "id": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
            "symbol": "MASK",
            "decimals": 18,
            "totalSupply": "490474473524488828720",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "1"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 5,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074"
                }
            }
        },
        {
            "tag": "ethereum-uni-0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            "id": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            "symbol": "UNI",
            "decimals": 18,
            "totalSupply": "7786765696054602880",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "1"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 3,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
                }
            }
        },
        {
            "tag": "ethereum-dai-0x6b175474e89094c44da98b954eedeac495271d0f",
            "id": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "symbol": "DAI",
            "decimals": 18,
            "totalSupply": "304973170623989827352",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "3000000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 16,
            "crossChainInfoList": {
                "ethereum": {
                    "targetChainId": "1",
                    "targetChainType": "ethereum",
                    "targetDecimals": 18,
                    "targetTokenId": "0x6b175474e89094c44da98b954eedeac495271d0f"
                }
            }
        }
    ]
}
```