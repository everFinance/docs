---
sidebar_position: 8
---

# txsByAccount

## Function

Get the transaction records of the corresponding account, and display them in the form of `pagination (10 entries per page)`.

## Parameter

`{{endpoint}}/txs/{{account}}?page={{page}}&tokenTag={{tokenTag}}&action={{action}}`

|Query Field|Mandatory|Description|
|---|---|---|
|account|YES|everPay account ID.|
|page|NO|default is 1.|
|tokenTag|NO|The unique identifier of the token, which can be viewed through the [info API](./info.md).|
|action|NO|<ul><li>`'mint'` to deposit transactions</li><li>`'transfer'` to transfer transactions</li><li>`'burn'` to withdraw transactions</li><li>`'bundle'` to bundle transactions</li></ul>|
|withoutAction|NO|exclusion of certain type of transactions<ul><li>`'mint'` to deposit transactions</li><li>`'transfer'` to transfer transactions</li><li>`'burn'` to withdraw transactions</li><li>`'bundle'` to bundle transactions</li></ul>|

## Return Fields

Field information can be viewed in [DOCS - System overview - Transaction - Transaction Record](../../dive/transaction#transaction-record).

## Example

```bash
curl --location --request GET 'https://api.everpay.io/txs/0x26361130d5d6E798E9319114643AF8c868412859?page=1&tokenTag=arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543'
```

## Example Return

```json
{
    "accid":"0x26361130d5d6E798E9319114643AF8c868412859",
    "currentPage":1,
    "totalPages":1,
    "txs":[
        {
            "rawId":287980,
            "id":"fKo5svYC3FtVJ-4E42B6Vkz_NRQJ2-BrPYnbZOSp5GU",
            "tokenSymbol":"AR",
            "action":"transfer",
            "from":"0x26361130d5d6E798E9319114643AF8c868412859",
            "to":"r5pMVOLSLRpeif0bjA-pCPCxPTDrsiuexQz6Wn_alMc",
            "amount":"1142620650377",
            "fee":"0",
            "feeRecipient":"0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
            "nonce":1667577174545,
            "tokenID":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "chainType":"arweave,ethereum",
            "chainID":"0,1",
            "data":"",
            "version":"",
            "sig":"0x88f209440ebf1f4a7c7becd86b0c22bf0a7c8f2137f441b71a7e1aa69893202841925bdeab58f9e2b648f5974d04a0f3820b1abedbd7e96b3e159dea7aa70ef51c",
            "everHash":"0xb599f4722089abd96e45f9ad2d687d3c146ea93728f2ae836248003811598323",
            "status":"packaged",
            "internalStatus":"{\"status\":\"success\"}",
            "timestamp":1667578025000,
            "targetChainTxHash":"",
            "express":{
                "chainTxHash":"",
                "withdrawFee":"",
                "refundEverHash":"",
                "err":""
            }
        },
        {
            "rawId":282761,
            "id":"YuHDZuoKqx7M2TxIwvExevkjGnznVmapUDP9K2B35mg",
            "tokenSymbol":"ar",
            "action":"transfer",
            "from":"0xe645c882f35Ac7c930b57a4a69f61eE0920D86e9",
            "to":"0x26361130d5d6E798E9319114643AF8c868412859",
            "amount":"1142620650377",
            "fee":"0",
            "feeRecipient":"0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
            "nonce":1667526500584,
            "tokenID":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
            "chainType":"arweave,ethereum",
            "chainID":"0,1",
            "data":"",
            "version":"",
            "sig":"0x6f5d7b32bbcbba4acef93a81bdb5726f1140175eff6d656e16d064ebf7ff805513b4ed4d27ab103c2422225d69c8edbc773a0b9037d8e3543abee1e2b00195aa1b",
            "everHash":"0x3a5c3f9440d1a77056d1a025be6e1706bab6aa3ef831df62b00164ad208ff56d",
            "status":"packaged",
            "internalStatus":"{\"status\":\"success\"}",
            "timestamp":1667526860000,
            "targetChainTxHash":"",
            "express":{
                "chainTxHash":"",
                "withdrawFee":"",
                "refundEverHash":"",
                "err":""
            }
        }
    ]
}
```