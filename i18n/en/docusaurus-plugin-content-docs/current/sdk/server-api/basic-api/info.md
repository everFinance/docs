---
sidebar_position: 2
---

# info

## Function

Get basic information about everPay service, e.g. `arLocker` represents the locked position address on arweave blockchain, `ethLocker` represents the locked position contract on etherum blockchain.

## Parameter

`{{endpoint}}/info`

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
|burnFee|The fee should to be paid for the **everPay normal withdrawal**|
|transferFee|The fee should to be paid for the everPay transfer|

:::danger

* Ethereum addresses are case-compatible, **arweave addresses are case-incompatible**
* everPay recommends developers to assemble [`Schema`](../../../guide/dive/transaction#schema) using the Token information returned by this info API.
:::

## Example

```bash
curl --location --request GET 'https://api-dev.everpay.io/info'
```

## Example Return

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
