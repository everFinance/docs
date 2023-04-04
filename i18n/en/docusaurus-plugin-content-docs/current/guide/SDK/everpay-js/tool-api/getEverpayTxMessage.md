---
sidebar_position: 2
---

# getEverpayTxMessage

## Function
Converts the everPay transaction structure [EverpayTxWithoutSig](../types#everpaytxwithousig)  into `messageData` for signature

## Parameter

```ts
everpay.getEverpayTxMessage(everpayTxWithoutSig: EverpayTxWithoutSig)
```
|Field|Type|Description|
|---|---|---|
|everpayTxWithoutSig| [EverpayTxWithoutSig](../types.md#everpaytxwithoutsig) | Available via [getEverpayTxWithoutSig Api](./getEverpayTxWithoutSig.md)|

## Return
`messageData` string

## Example

```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'usdt',
  action: 'transfer',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  amount: '5260000',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1625987254171',
  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainType: 'ethereum',
  chainID: '42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}

everpay.getEverpayTxMessage(everpayTxWithoutSig)

/* Returnd result
`tokenSymbol:usdt
action:transfer
from:0x26361130d5d6E798E9319114643AF8c868412859
to:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
amount:5260000
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1625987254171
tokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee
chainType:ethereum
chainID:42
data:{"hello":"world","this":"is everpay"}
version:v1`
```