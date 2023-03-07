---
sidebar_position: 6
---

# fee

## 功能
获取 在 everPay 上 `指定代币(token)` 的 `transfer`、`withdraw`、`bundle` 手续费。

## 参数
```ts
everpay.fee(tag:string):FeeItem
```
|查询字段|是否必需|描述|
|---|---|---|
|tag|YES|token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。|
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
[typescript 索引签名](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)。
:::

### 返回字段
|字段|描述|
|---|---|
|tokenTag|token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|burnFeeMap|`withdraw` 手续费。|
|transferFee| `transfer` 手续费。|
|atomicBundleFee| `bundle` 手续费。|

## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.fee('arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8').then(console.log)
```

## 示例返回
```js
{
  tokenTag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',
  transferFee: '0',
  bundleFee: '0',
  burnFeeMap: {
    arweave: '1187852598',
    ethereum: '586463369398',
    moon: '1084459556'
  }
}
```