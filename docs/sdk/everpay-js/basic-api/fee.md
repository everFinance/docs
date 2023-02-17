---
sidebar_position: 6
---

# fee

## 功能
获取 在 everPay 上的指定代币的`transfer`、`withdraw`、`bundle` 手续费

## 参数
string

:::info
此处 string 为 `tag` string
:::

## 返回
### 返回类型

```ts
export interface FeeItem {
  tokenTag: string
  burnFeeMap: {
    [propname: string]: string
  }
  transferFee: string
  atomicBundleFee: string
  updatedAt: string
}
```
:::info
[typescript 索引签名](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
:::

### 返回字段
|字段|描述|
|---|---|
|tokenTag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|burnFeeMap|`withdraw` 手续费|
|transferFee| `transfer` 手续费|
|atomicBundleFee| `bundle` 手续费|

## 示例

```js
const everpay1 = new Everpay({ debug: true })
everpay1.fee('arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be').then(console.log)
```

## 示例返回
```js
{
  "tokenTag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
  "transferFee": "0",
  "atomicBundleFee": "0",
  "burnFeeMap": {
    "arweave": "2265880856",
    "ethereum": "120000000"
  }
}
```