---
sidebar_position: 5
---

# fees

## Function
Get `transfer`, `withdraw`, `bundle` fees for `tokens` on everPay.

## Parameter
`{{endpoint}}/fees`

## Return Fields
|Field|Description|
|---|---|
|tokenTag|The unique identifier of the token, which can be viewed through the [info API](./info.md).|
|burnFeeMap|`withdraw` handling fee.|
|transferFee|`transfer` handling fee.|
|atomicBundleFee| `bundle` handling fee.|

## Example

```bash
curl --location --request GET 'https://api.everpay.io/fees'
```

## Example Return
```json
{
    "fees":[
        {
            "tokenTag":"arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "arweave":"34208185200",
                "ethereum":"1004449894214",
                "moon":"1094803182"
            }
        },
        {
            "tokenTag":"ethereum-eth-0x0000000000000000000000000000000000000000",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"2964000000000000"
            }
        },
        {
            "tokenTag":"bsc-bnb-0x0000000000000000000000000000000000000000",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "bsc":"1560000000000000"
            }
        },
        {
            "tokenTag":"ethereum-usdc-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"5390787"
            }
        },
        {
            "tokenTag":"ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"5388092"
            }
        },
        {
            "tokenTag":"conflux-cfx-0x0000000000000000000000000000000000000000",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "conflux":"3120000000000000"
            }
        },
        {
            "tokenTag":"arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "arweave":"240000000000000000",
                "moon":"3282693921962280"
            }
        },
        {
            "tokenTag":"moonbeam-glmr-0x0000000000000000000000000000000000000000",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "moon":"15600000000000000"
            }
        },
        {
            "tokenTag":"ethereum-dai-0x6b175474e89094c44da98b954eedeac495271d0f",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"5390948983064612880"
            }
        },
        {
            "tokenTag":"ethereum-wbtc-0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"192141900012720"
            }
        },
        {
            "tokenTag":"ethereum-fox-0xc770eefad204b5180df6a14ee197d99d808ee52d",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"48000000000000000000"
            }
        },
        {
            "tokenTag":"bsc-dodo-0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "bsc":"2835259973552094480"
            }
        },
        {
            "tokenTag":"platon-lat-0x0000000000000000000000000000000000000000",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "platon":"780000000000000"
            }
        },
        {
            "tokenTag":"ethereum-xsgd-0x70e8de73ce538da2beed35d14187f6959a8eca96",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"9600000"
            }
        },
        {
            "tokenTag":"moonbeam-zlk-0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "moon":"120000000000000"
            }
        },
        {
            "tokenTag":"ethereum-bank-0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"120000000000000"
            }
        },
        {
            "tokenTag":"arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "arweave":"1709515821669472800"
            }
        },
        {
            "tokenTag":"ethereum-dodo-0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"31537351968370178520"
            }
        },
        {
            "tokenTag":"ethereum-mask-0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"916632062261632560"
            }
        },
        {
            "tokenTag":"ethereum-uni-0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"905618117877837720"
            }
        },
        {
            "tokenTag":"ethereum-sos-0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"47245761974915845835742000"
            }
        },
        {
            "tokenTag":"ethereum-t4ever-0xeaba187306335dd773ca8042b3792c46e213636a",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "ethereum":"120000000000000000000"
            }
        },
        {
            "tokenTag":"bsc-arg-0xb5eadfdbdb40257d1d24a1432faa2503a867c270",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "bsc":"12000000"
            }
        },
        {
            "tokenTag":"bsc-fra-0xeb042ffdabc535de2716c6b51a965f124050d4e1",
            "transferFee":"0",
            "bundleFee":"0",
            "burnFeeMap":{
                "bsc":"12000000"
            }
        }
    ]
}
```