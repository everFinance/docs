---
sidebar_position: 4
---

# balance

## 功能
获取对应 `账户(account)` 在 everPay 上的 `指定代币(token)` 的资产余额。

## 参数
`{{ endpoint }}/balance/{{ tokenTag }}/{{ account }}`

|查询字段|是否必需|描述|
|---|---|---|
|tokenTag|YES| token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。 |
|account| YES| everPay 账户 ID。|

## 返回字段
|字段|描述|
|---|---|
|accid| everPay 账户 ID。|
|balance| 该 `账户(account)` 在 everPay 上 `指定代币` 的资产余额，详情见 [BalanceItem 字段描述](#balanceitem-字段描述)。|

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
		"tag": "ethereum-eth-0x0000000000000000000000000000000000000000",
		"amount": "0",
		"decimals": 18
	}
}
```