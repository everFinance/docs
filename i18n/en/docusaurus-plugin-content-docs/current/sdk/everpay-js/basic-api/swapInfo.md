---
sidebar_position: 10
---


# swapInfo

## 功能
获取 everPay Swap 做市商 everPay 账户、支持代币列表、手续费

## 参数
无
## 返回
### 返回类型
[SwapInfo](../types#swapinfo)

### 返回字段
字段信息可查看 [Server API - 基础查询接口 - swapInfo - 返回字段](../../server-api/basic-api/swapinfo#返回字段)
## 示例

```js
const everpay = new Everpay({ debug: true })
everpay.swapInfo().then(console.log)
```

## 示例返回
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