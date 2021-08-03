---
sidebar_position: 3
---


# info

## 功能
获取 everPay 快速提现做市商账户、支持代币列表、代币可快速提现额度以及预估手续费。

## 参数
无
## 返回
### 返回类型
[ExpressInfo](../types#expressinfo)

### 返回字段
字段信息可查看 [Server API - 基础查询接口 - expressInfo - 返回字段](../../server-api/basic-api/expressinfo#返回字段)
## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.expressInfo().then(console.log)
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