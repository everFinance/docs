---
sidebar_position: 4
---

# balance

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Get the asset balance of the specified token on everPay for the corresponding `account`.

## Parameter

```ts
everpay.balance(balanceParams:BalanceParams):string
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|query field|required|description|
|---|---|---|
|account|NO|everpay account ID, which defaults to the `account` parameter passed when the Everpay instance is created, see [Account Model](../../../dive/account-model.md).|
|tag|YES|A unique identifier for the `token`, which can be viewed through the [`info`](./info.md) interface.|

</TabItem>
<TabItem value="type" label="Type">

```ts
export interface BalanceParams {
  tag: string
  account?: string
}
```

</TabItem>
</Tabs>

## Return

string

:::info
A balance string
:::

## Example

```js
const everpay1 = new Everpay({ debug: true })
everpay1.balance({
  account: '0x26361130d5d6E798E9319114643AF8c868412859',
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)

// Or
const everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })
everpay.balance({
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)

// Or override default account
const everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })
everpay3.balance({
  account: '0x26361130d5d6E798E9319114643AF8c868412859',
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8'
}).then(console.log)
```

## Example return

```js
'0.000765727502'
```
