---
sidebar_position: 5
---

# genEverId

## Function

* According to the e-mail address, return EverId in the format of eid prefix of the corresponding e-mail address.
* Non-email account address, immediately return the original address

## Parameter

```ts
everpay.genEverId(account?: string): string
```

account is the everpay account ID, which defaults to the `account` parameter passed when the Everpay instance was created, see [Account Model](../../../dive/account-model.md) for details.

## Return

EverId string

## Example

```ts
const emailEverId = everpay.genEverId('dvdsbjo8u1@163.com')
/* 
eid56e2f17ae24f15371a843a9d66c6a6f4703cb8fad59364fde5932559794bc760bea7
*/

const evmEverId = everpay.genEverId('0xb300a963622ee25b17f4Da0D7a210a8D53E27983')
/* 
0xb300a963622ee25b17f4Da0D7a210a8D53E27983
*/

const arEverId = everpay.genEverId('nQKiFZE11MiXjY18qib_M4vz_AHyO3cf6gxxbemtIJY')
/* 
nQKiFZE11MiXjY18qib_M4vz_AHyO3cf6gxxbemtIJY
*/
```
