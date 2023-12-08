---
sidebar_position: 6
---

# chainType

## Configuration item function

everPay supports the ethereum evm compatible chain. To top up, use the coins of the corresponding chain.

## Configuration Type

Currently support `ethereum`, `arweave`, `moon`,`bsc`,`conflux`, `platon`.

## moonbase Example

```ts
const providerURL = 'https://rpc.api.moonbase.moonbeam.network'
// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {
  chainId: 1287,
  name: 'moonbase-alphanet'
})
// address or privateKey
const ethWalletHasUSDT = {
  address: '0x26361130d5d6E798E9319114643AF8c868412859',
  privateKey: '94c97d4cc865d77afaf2d64147f7c067890e1485eb5d8e2c15cc0b7528a08b47'
}
const signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)

const everpay = new Everpay({
  debug: true
  account: ethWalletHasUSDT.address,
  chainType: 'moon',
  ethConnectedSigner: signer,
})

everpay.deposit({
  tag: 'moonbase-dev-0x0000000000000000000000000000000000000000',
  amount: '0.01'
}).then(ethTx => {
  console.log('ethTx', ethTx)
})
```

:::danger Private key leakage risk
This method passes the private key explicitly in the code, which is a security risk
:::
