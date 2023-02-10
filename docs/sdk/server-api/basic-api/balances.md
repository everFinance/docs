---
sidebar_position: 3
---

# balances

## 功能
获取 对应 `account` 在 everPay 上的所有资产信息

## 参数
`{{endpoint}}/balances/{{account}}`

## 返回字段
|字段|描述|
|---|---|
|accid|everPay 账户 ID|
|balances|该 everPay 账户在 everPay 的资产列表，单一币种余额字段，见如下 [BalanceItem 字段描述](#balanceitem-字段描述)|

### BalanceItem 字段描述
|字段|描述|
|---|---|
|tag|由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合|
|amount|资产余额，类型为 uint|
|decimals| |


## 示例

```js
curl --location --request GET 'https://api-dev.everpay.io/balances/0x2ca81e1253f9426c62Df68b39a22A377164eeC92'
```

## 示例返回
```json
{
  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",
  "balances": [
    {
      "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
      "amount": "220000000",
      "decimals": 12
    },
    {
      "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
      "amount": "0",
      "decimals": 18
    },
    {
      "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "amount": "0",
      "decimals": 6
    }
  ]
}
```