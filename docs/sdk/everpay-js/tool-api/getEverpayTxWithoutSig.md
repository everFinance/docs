---
sidebar_position: 1
---

# getEverpayTxWithoutSig

## 功能

生成 everPay 交易结构

## 参数

```js
everpay.getEverpayTxWithoutSig(type, params)
```

|参数|类型|
|---|---|
|type|'transfer' or 'withdraw' or 'bundle'|
|params|[TransferParams](../types#transferparams) or [WithdrawParams](../types#withdrawparams) or [BundleParams](../types#bundleparams)|

## 返回

[EverpayTxWithoutSig](../types#everpaytxwithoutSig)

## 示例

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

/* 示例返回
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
