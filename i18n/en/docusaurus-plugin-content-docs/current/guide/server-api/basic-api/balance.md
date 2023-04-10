---
sidebar_position: 4
---

# balance

## Function
Get the asset balance of the `specified token` on everPay for the corresponding `account`.
## Parameter
`{{endpoint}}/balance/{{tokenTag}}/{{account}}`

|Query Field|Mandatory|Description|
|---|---|---|
|tokenTag|YES|The unique identifier of the token, which can be viewed through the [info API](./info.md).|
|account|YES|everPay Account ID.|


## Return Fields
|Field|Description|
|---|---|
|accid|everPay Account ID.|
|balance|The designated token asset balance of this everPay account, as follows [BalanceItem Field Description](#balanceitem-field-description).|

### BalanceItem Field Description
|Field|Description|
|---|---|
|tag|The unique identifier of the token, Generated by combining `chainType`, `symbol`, `id` from [Token](./info#token-field-description) by `-`.|
|amount|Asset balance, type uint.|
|decimals| |

## Example

```bash
curl --location --request GET 'https://api.everpay.io/balance/ethereum-eth-0x0000000000000000000000000000000000000000/0x2ca81e1253f9426c62Df68b39a22A377164eec92'
```

## Example Return
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