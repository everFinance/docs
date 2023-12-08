---
sidebar_position: 6
---

# ethConnectedSigner

## Configuration item function

This configuration item is used to operate the everPay ethereum account model account via ethereum/moonbeam/moonbase etc evm wallet and to do the following for the account

* deposit: transfer assets on ethereum blockchain to everPay multi-signature contract address using `ethConnectedSigner`.
* transfer: use `ethConnectedSigner` to call ethereum `personalSign` to secure access to the everPay account.
* withdraw: use `ethConnectedSigner` to call ethereum `personalSign` to secure access to the everPay account.

## How to configure

everpay-js integrates with [ethers.js](https://docs.ethers.io/v5/) for ethereum signing, sending transactions.

This configuration item also uses [ethers.js#Signer](https://docs.ethers.io/v5/api/signer/#Signer) as parameter type.

### ethereum wallet: imToken/MetaMask, etc

Reference from [ethers.js Connecting to Ethereum: Metamask](https://docs.ethers.io/v5/getting-started/#getting-started--connecting)

```ts
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})
```

### RPC API + privateKey

Reference from [ethers.js Wallet API](https://docs.ethers.io/v5/api/signer/#Wallet)

```js
const address = 'YOUR ADDRESS'
const privateKey = 'YOUR PRIVATE KEY'
const provider = new ethers.providers.InfuraProvider('goerli')
const signer = new ethers.Wallet(privateKey, provider)
const everpay = new Everpay({
  account: address,
  chainType: 'ethereum',
  ethConnectedSigner: signer,
})
```

:::danger Private key leakage risk
This method passes the private key explicitly in the code, which is a security risk
:::

## Conflicts with isSmartAccount, arJWK configuration items

`ethConnectedSigner` is used for everPay account operations for the ethereum account model, while

* `isSmartAccount` For labelling smart account models
* `arJWK` is used for everPay account operations for the arweave account model. 

**Only one account model can be used for the same Everpay instance**, but developers can create multiple Everpay instances for more complex applications.

```js
const ethEverpay = new Everpay({
  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92',
  chainType: 'ethereum',
  ethConnectedSigner
})

const arEverpay = new Everpay({
  account: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  chainType: 'arweave',
  arJWK
})
```

## Relationship to account configuration items

When you need to call everpay-js operation-api, `account` parameter is required. And when it is an ethereum account model, the `account` parameter must match the ethereum wallet address corresponding to `ethConnectedSigner`.
