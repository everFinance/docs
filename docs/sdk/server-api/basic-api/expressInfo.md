---
sidebar_position: 9
---

# expressInfo

## 功能
获取 everPay 快速提现做市商账户、支持代币列表、代币可快速提现额度以及预估手续费。

## 参数
`{{expressEndpoint}}/withdraw/info`

## 示例

```bash
curl --location --request GET 'https://express-dev.everpay.io/withdraw/info'
```

## 示例返回
```json
{
  "address": "0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09",
  "withdrawTimeCost": 60,
  "tokens": [
    {
      "tokenTag": "ethereum-ETH-0x0000000000000000000000000000000000000000",
      "withdrawFee": "572864391122100",
      "walletBalance": "323719653678176720"
    },
    {
      "tokenTag": "ethereum-USDT-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "withdrawFee": "2708852",
      "walletBalance": "995882735697"
    }
  ]
}
```