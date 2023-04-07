---
sidebar_position: 7
---

# sendEverpayTx

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Converts the everPay transaction structure [EverpayTxWithoutSig](../types#everpaytxwithoutsig) into `messageData`, sign it according to `account`, `ethConnectedSigner`, `arJWK` parameters passed during Everpay instance creation and send it to everPays server.

## Parameter

```ts
everpay.sendEverpayTx(everpayTxWithoutSig: EverpayTxWithoutSig): SendEverpayTxResult
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|Field|Type|Description|
|---|---|---|
|everpayTxWithoutSig| [`EverpayTxWithoutSig`](../types#everpaytxwithoutsig) | Available via [`getEverpayTxWithoutSig Api`](../tool-api/getEverpayTxWithoutSig.md) |

</TabItem>
<TabItem value="type" label="Type">

```ts
export interface EverpayTxWithoutSig {
  tokenSymbol: string
  action: EverpayAction
  from: string
  to: string
  amount: string
  fee: string
  feeRecipient: string
  nonce: string
  tokenID: string
  chainType: ChainType | string
  chainID: string
  data: string
  version: string
}
```

</TabItem>
</Tabs>

## Return

[SendEverpayTxResult](../types#sendeverpaytxresult)

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

// Sign with the private key corresponding to 0x26361130d5d6E798E9319114643AF8c868412859
const result = await everpay.sendEverpayTx(everpayTxWithoutSig)
/*
{
  status: 'ok',
  everpayTx: {
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
    version: 'v1',
    sig: '0x3ee66c303fe59b8e1f84e638cb7cca8bbb0e5b0ca63f784021e877be13c176d35d831e120a20eb8c72741fcc40c6a35a566d3ed34f6274d4c26160f38c14eec11b'
  },
  everHash: '0x0b7be08f6b96c2f1c7a810c72af2cc46632e4a7f0f9e36ccb10840864fedd470'
}
*/
```
