---
sidebar_position: 6
---

# fee

## 功能
获取 在 everPay 上的指定代币的`transfer`、`withdraw`、`bundle` 手续费

## 参数
`{{endpoint}}/fee/{{tokenTag}}`

### 查询字段
|字段|描述|
|---|---|
|tokenTag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|

## 返回字段
|字段|描述|
|---|---|
|tokenTag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|burnFee|`withdraw` 手续费，如果该币种支持多条链提现，以 `,` 分隔开不同的链的提现手续费|
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
    "burnFee": "13200000,12000000",
    "transferFee": "0",
    "atomicBundleFee": "0",
    "updatedAt": "2021-12-20T02:16:41.145Z",
    "manualSet": true
  }
}
```