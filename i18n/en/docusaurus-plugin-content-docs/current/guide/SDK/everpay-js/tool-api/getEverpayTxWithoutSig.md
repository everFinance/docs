---
sidebar_position: 1
---

# getEverpayTxWithoutSig

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Generate everPay transaction structure

## Parameter

```ts
everpay.getEverpayTxWithoutSig(type: EverpayTxWithoutSigType, params: EverpayTxWithoutSigParams):EverpayTxWithoutSig
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|Field|Description|
|---|---|
|type|'transfer' or 'withdraw' or 'bundle'|
|params|[TransferParams](../types#transferparams) or [WithdrawParams](../types#withdrawparams) or [BundleParams](../types#bundleparams)|

</TabItem>
<TabItem value="type" label="Type">

```ts
// Note: This type does not have an export
type EverpayTxWithoutSigType = 'transfer' | 'withdraw' | 'bundle'
type EverpayTxWithoutSigParams = TransferParams | WithdrawParams | BundleParams

export interface TransferParams {
  tag: string
  amount: string
  data?: Record<string, unknown>
  to: string
}

export interface WithdrawParams {
  chainType: ChainType
  tag: string
  amount: string
  fee?: string
  quickMode?: boolean
  data?: Record<string, unknown>
  to?: string
}

export interface BundleParams {
  tag: string
  amount: string
  data: {
    bundle: BundleDataWithSigs
  }
  to: string
}
```

</TabItem>
</Tabs>

## Return

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

[EverpayTxWithoutSig](../types#everpaytxwithoutsig)

## Example

```ts
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})

everpay.getEverpayTxWithoutSig('transfer', {
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.26'
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  data: { hello: 'world', this: 'is everpay' }
}).then(console.log)

/* Returnd result
{
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
*/

```
