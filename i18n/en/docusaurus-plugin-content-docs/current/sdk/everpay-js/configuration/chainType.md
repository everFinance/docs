---
sidebar_position: 5
---

# chainType

## Configuration item function

everPay supports the ethereum evm compatible chain. To top up, use the coins of the corresponding chain

## Configuration Type

Currently support `ethereum`, `moonbase`, `moonbeam`, `arweave`

## moonbase Example

```ts
const providerURL = 'https://rpc.api.moonbase.moonbeam.network'
// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {
  chainId: 1287,
  name: 'moonbase-alphanet'
})
const signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)

const everpay = new Everpay({
  account: ethWalletHasUSDT.address,
  chainType: 'moonbase',
  ethConnectedSigner: signer,
  debug: true
})

everpay.deposit({
  symbol: 'dev',
  amount: '0.01'
}).then(ethTx => {
  console.log('ethTx', ethTx)
})
```
