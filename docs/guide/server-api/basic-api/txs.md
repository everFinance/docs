---
sidebar_position: 7
---

# txs

## 功能

everPay 上所有交易记录，通过 `分页(10条1页)` 形式展示。

## 参数

`{{ endpoint }}/txs?page={{ page }}&tokenTag={{ tokenTag }}&action={{ action }}`

|查询字段|是否必需|描述|
|---|---|---|
|page| NO |默认为 1。|
|tokenTag|NO |token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|action| NO |<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|
|withoutAction| NO |排除某种类型的交易。<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|

## 返回字段

字段信息可查看 [DOCS - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。

## 示例

```bash
curl --location --request GET 'https://api.everpay.io/txs?page=1&tokenTag=ethereum-eth-0x0000000000000000000000000000000000000000'
```

## 示例返回

```json
{
    "currentPage":1,
    "totalPages":11168,
    "txs":[
        {
            "rawId":607851,
            "id":"kiSRJt4wGKKNiCryVVI7Cl49v_1R5y6q856gUdRqIZo",
            "tokenSymbol":"ETH",
            "action":"transfer",
            "from":"0x407634d12588a02e6c2FfcDeD96939634B6e100c",
            "to":"uDA8ZblC-lyEFfsYXKewpwaX-kkNDDw8az3IW9bDL68",
            "amount":"924145481608",
            "fee":"0",
            "feeRecipient":"0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
            "nonce":1680593181148,
            "tokenID":"0x0000000000000000000000000000000000000000",
            "chainType":"ethereum",
            "chainID":"1",
            "data":"{\"appName\":\"arseeding\",\"action\":\"payment\",\"itemIds\":[\"7xx78FLBSDLCuJw2BcK6t6qxxAUPdEUTXHIUiRdF-kM\"]}",
            "version":"v1",
            "sig":"0x5410910a56055546fca432b539f7dc0e4cd6a4555147f754629c1c2b5841c0dc3287b70c5fd1b06990e9b8f2e9d0994a90128f8383360e153f5843eecd6f02511b",
            "everHash":"0xd08c893c7c6f6534a928cfb1c1ab958fd3d9866212c626185cceffc9614581ff",
            "status":"packaged",
            "internalStatus":"{\"status\":\"success\"}",
            "timestamp":1680593586000,
            "targetChainTxHash":"",
            "express":{
                "chainTxHash":"",
                "withdrawFee":"",
                "refundEverHash":"",
                "err":""
            }
        },
        // etc .
    ]
}

```
