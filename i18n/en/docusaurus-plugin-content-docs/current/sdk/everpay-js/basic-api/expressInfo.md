---
sidebar_position: 3
---


# expressInfo

## Function
Get access to everPay Quick Withdrawal Market Maker account, list of supported tokens, the amount of tokens that can be quick withdrawn, and estimated fees.

## Parameter
None
## Return
### Return Type
[ExpressInfo](../types#expressinfo)

### Return Fields
Field information can be viewed in [SDK - Server API - Basic Query API - expressInfo - Return Fields](../../server-api/basic-api/expressinfo#return-fields)
## Example

```js
const everpay = new Everpay({ debug: true })
everpay.expressInfo().then(console.log)
```

## Example Return
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