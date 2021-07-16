---
sidebar_position: 4
---

# balance

## Function
Get the asset balance of the specified token on everPay for the corresponding `account`.

## Parameter
`{{endpoint}}/balance/{{tokenTag}}/{{account}}`

## Example

```bash
curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'
```

## Example return
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