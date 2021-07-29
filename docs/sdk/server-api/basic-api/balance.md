---
sidebar_position: 4
---

# balance

## 功能
获取 对应 `account` 在 everPay 上的 指定代币 的资产余额

## 参数
`{{endpoint}}/balance/{{tokenTag}}/{{account}}`

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'
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