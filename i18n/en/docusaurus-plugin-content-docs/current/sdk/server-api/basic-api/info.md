---
sidebar_position: 2
---

# info

## Function

Get basic information about everPay service, e.g. `arLocker` represents the locked position address on arweave blockchain, `ethLocker` represents the locked position contract on etherum blockchain.

## Parameter

`{{endpoint}}/info`

|Query Field|Description|
|---|---|
|request method|GET|

## Return Fields

|Field|Description|
|---|---|
|arLocker|everPay AR native token locked position address on arweave blockchain|
|ethChainID|Current Ethereum network ID|
|ethLocker|everPay locked position contract on ethereum blockchain|
|everRootHash| everPay system transaction fingerprint, obtained by keccak256 of all current transactions everHash on a per-transaction basis|
|feeRecipient|everPay fee collection account ID|
|owner|An everPay arweave address, responsible for storing everPay transaction records to the arweave blockchain|
|rootHash|everPay system transaction fingerprint, obtained by keccak256 of all current transactions everHash and id on a per-transaction basis|
|tokenList|The list of tokens supported by everPay. Single token fields, see below [Token field description](#token-field-description)|

### Token field description

|Field|Description|
|---|---|
|tag|combined by `chainType`, `symbol`, `id` via `-`|
|id|Token ID, usually the token erc20 contract address, separated by `,` if it supports multiple blockchain top-ups and withdrawals|
|symbol|Token symbol|
|decimals|Token decimals|
|totalSupply|The total amount of token assets on everPay|
|chainType|Supported blockchains to top-ups and withdrawals, separated by `,`|
|chainID|Supported blockchain network IDs to top-ups and withdrawals, separated by `,`|
|burnFees|The fee should to be paid for the **everPay normal withdrawal**|
|transferFee|The fee should to be paid for the everPay transfer|
|crossChainInfoList|Cross-Chain Information|

:::danger

* Ethereum addresses are case-compatible, **arweave addresses are case-incompatible**
* everPay recommends developers to assemble [`Schema`](../../../guide/dive/transaction#schema) using the Token information returned by this info API.
:::

## Example

```bash
curl --location --request GET 'https://api.everpay.io/info'
```

## Example Return

```json
{
    "isSynced": true,
    "isClosed": false,
    "balanceRootHash": "0x46e8415df1532329a24f2c66973a7c292751d1125bdb70279675e1bbc10e82bc",
    "rootHash": "0xf43e697493cad7558ed0057ccbb19e2c69d6e703346a988c3026ebb6d0de034a",
    "everRootHash": "0xec2a7cf85427e913b2c7af7224d34135a0a94adfcef2de1043f3ebbdf27bd05d",
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
            "totalSupply": "3389239000000000000",
            "chainType": "bsc",
            "chainID": "56",
            "burnFees": {
                "bsc": "1300000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 29,
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
            "totalSupply": "28995756582720298411",
            "chainType": "bsc",
            "chainID": "56",
            "burnFees": {
                "bsc": "3"
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
            "totalSupply": "69798895148000000000000",
            "chainType": "platon",
            "chainID": "210425",
            "burnFees": {
                "platon": "130000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 8,
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
            "totalSupply": "411570280890",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "2"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 338,
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
                "ethereum": "4"
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
            "totalSupply": "39256515550653796",
            "chainType": "arweave,ethereum",
            "chainID": "0,1",
            "burnFees": {
                "arweave": "2568271698",
                "ethereum": "1",
                "moon": "741295694"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 2022,
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
            "totalSupply": "63932986100867296315",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "1820000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 309,
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
            "totalSupply": "131855800000000000000",
            "chainType": "moonbeam",
            "chainID": "1284",
            "burnFees": {
                "moon": "13000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 19,
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
            "totalSupply": "94566370663860567551906",
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
            "totalSupply": "86899673825",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "2"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 239,
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
            "totalSupply": "993900000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "7704935631780300",
                "moon": "2223921873716100"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 27,
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
            "totalSupply": "1470183164366819000575577865",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "22256743"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 248,
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
            "totalSupply": "257378600000000000000000",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "100000000000000000000"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 4,
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
            "totalSupply": "1781000000000000000000",
            "chainType": "arweave",
            "chainID": "0",
            "burnFees": {
                "arweave": "128415593863004500"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 13,
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
            "totalSupply": "2786765696054602880",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "1"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 2,
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
            "totalSupply": "299873170623989827352",
            "chainType": "ethereum",
            "chainID": "1",
            "burnFees": {
                "ethereum": "2"
            },
            "transferFee": "0",
            "bundleFee": "0",
            "holderNum": 15,
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
