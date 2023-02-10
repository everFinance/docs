---
sidebar_position: 6
---

# fee

## 功能
获取 在 everPay 上的指定代币的`transfer`、`withdraw`、`bundle` 手续费

## 参数
`{{endpoint}}/fee/{{tokenTag}}`

|查询字段|描述|
|---|---|
|请求方式|GET|
|tokenTag|必选，`string` 类型，[info](./info.md#示例返回) 接口 `tokenList` 中可查看每个 `token` 的唯一 `tag`。|


## 返回字段
|字段|描述|
|---|---|
|tokenTag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|burnFeeMap|`withdraw` 手续费|
|transferFee| `transfer` 手续费|
|atomicBundleFee| `bundle` 手续费|

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/fee/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be'
```

## 示例返回
```json
{
  "fee": {
    "tokenTag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "burnFeeMap": {
      "arweave": "2265880856",
      "ethereum": "120000000"
    }
  }
}
```