---
sidebar_position: 3
---

# balances

## 功能
获取对应 `账户(account)` 在 everPay 上的所有 `资产` 信息。

## 参数
`{{ endpoint }}/balances/{{ account }}`

|查询字段|是否必需|描述|
|---|---|---|
|account|YES|everPay 账户 ID。|

## 返回字段
|字段|描述|
|---|---|
|accid|everPay 账户 ID。|
|balances|该 `账户(account)` 在 everPay 的资产列表，详情见 [BalanceItem 字段描述](#balanceitem-字段描述)。|

### BalanceItem 字段描述
|字段|描述|
|---|---|
|tag| token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|amount|资产余额，类型为 uint。|
|decimals| |


## 示例

```js
curl --location --request GET 'https://api.everpay.io/balances/0x2ca81e1253f9426c62Df68b39a22A377164eeC92'
```

## 示例返回
```json
{
    "accid":"0x2ca81e1253f9426c62Df68b39a22A377164eeC92",
    "balances":[
        {
            "tag":"ethereum-usdc-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "amount":"0",
            "decimals":6
        },
        {
            "tag":"arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "amount":"0",
            "decimals":12
        },
        {
            "tag":"ethereum-xsgd-0x70e8de73ce538da2beed35d14187f6959a8eca96",
            "amount":"0",
            "decimals":6
        },
        {
            "tag":"ethereum-mask-0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"conflux-cfx-0x0000000000000000000000000000000000000000",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-bank-0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"moonbeam-zlk-0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-uni-0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            "amount":"2000000000000000000",
            "decimals":18
        },
        {
            "tag":"ethereum-t4ever-0xeaba187306335dd773ca8042b3792c46e213636a",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"bsc-bnb-0x0000000000000000000000000000000000000000",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"platon-lat-0x0000000000000000000000000000000000000000",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"moonbeam-glmr-0x0000000000000000000000000000000000000000",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7",
            "amount":"25822524",
            "decimals":6
        },
        {
            "tag":"ethereum-wbtc-0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "amount":"1",
            "decimals":8
        },
        {
            "tag":"ethereum-dai-0x6b175474e89094c44da98b954eedeac495271d0f",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-sos-0x3b484b82567a09e2588a13d54d032153f0c0aee0",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-fox-0xc770eefad204b5180df6a14ee197d99d808ee52d",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"bsc-dodo-0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
            "amount":"0",
            "decimals":18
        },
        {
            "tag":"ethereum-eth-0x0000000000000000000000000000000000000000",
            "amount":"33012749061462610",
            "decimals":18
        }
    ]
}
```