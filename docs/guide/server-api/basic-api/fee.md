---
sidebar_position: 6
---

# fee

## 功能
获取在 everPay 上 `指定代币` 的`transfer`、`withdraw`、`bundle` 手续费。

## 参数
`{{ endpoint }}/fee/{{ tokenTag }}`

### 查询字段
|字段|是否必需|描述|
|---|---|---|
|tokenTag| YES | token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|


## 返回字段
|字段|描述|
|---|---|
|tokenTag|token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|burnFeeMap|`withdraw` 手续费。|
|transferFee| `transfer` 手续费。|
|atomicBundleFee| `bundle` 手续费。|

## 示例

```bash
curl --location --request GET 'https://api.everpay.io/fee/ethereum-eth-0x0000000000000000000000000000000000000000'
```

## 示例返回
```json
{
    "fee":{
        "tokenTag":"ethereum-eth-0x0000000000000000000000000000000000000000",
        "transferFee":"0",
        "bundleFee":"0",
        "burnFeeMap":{
            "ethereum":"2964000000000000"
        }
    }
}
```