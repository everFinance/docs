---
sidebar_position: 10
---


# swapInfo

## Function
Get everPays Swap market maker everPay account, list of supported tokens, fees

## Parameter
None
## Return
### Return Type
[SwapInfo](../types#swapinfo)

### Return Fields
Field information can be viewed in [SDK - Server API - Basic Query API - swapInfo - Return Fields](../../server-api/basic-api/info#return-fields)

## Example

```js
const everpay = new Everpay({ debug: true })
everpay.swapInfo().then(console.log)
```

## Example return
```json
{
  "status": "ok",
  "address": "0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00",
  "tokenList": [
      "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",
      "ethereum-eth-0x0000000000000000000000000000000000000000"
  ],
  "fee": "0.02"
}
```
