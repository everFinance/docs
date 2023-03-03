---
sidebar_position: 4
---

# balance

## 功能
获取对应 `账户(account)` 在 everPay 上的 `指定代币(symbol)` 的资产余额。

## 参数
`{{ endpoint }}/balance/{{ tokenTag }}/{{ account }}`

|查询字段|描述|
|---|---|
|请求方式|GET|
|tokenTag| token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。 |
|account| everPay 账户地址。|

## 返回字段
|字段|描述|
|---|---|
|accid| everPay 账户 ID。|
|balance| 该 everPay 账户 指定代币 资产余额，详情见 [BalanceItem 字段描述](#balanceitem-字段描述)。|

### BalanceItem 字段描述
|字段|描述|
|---|---|
|tag|token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|amount|资产余额，类型为 uint。|
|decimals| |

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/balance/ethereum-eth-0x0000000000000000000000000000000000000000/0x2ca81e1253f9426c62Df68b39a22A377164eec92'
```

## 示例返回
```json
{
  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",
  "balance": {
    "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",
    "amount": "220000000",
    "decimals": 12
  }
}
```