---
sidebar_position: 2
---

# Quick integration with everpay-js

everpay-js encapsulates most of the interfaces of everPay protocol for developers, developers can use everpay-js to quickly integrate everPay protocol into application pages. Using everpay-js, you can quickly complete everPay payment settlement in your application.

## Requirements for use

* `Node Version >= 14` It is recommended to use [`nvm`](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (windows) to manage Node versions.
* [ethers.js](https://docs.ethers.io/v5/) (only required when using the ethers wallet connection). Recommended to use [the same version within everpay-js ethers.js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)

:::info

- This section explains how to quickly install, introduce, create, top up, transfer and withdraw funds using everpay-js.
:::

## Installation

Use [yarn](https://www.yarnpkg.cn/getting-started/install) or npm to install and use, if not please check your network and try again.

```bash
yarn add everpay

# or

npm install everpay
```

## Import

```js
import Everpay from 'everpay'

// or

const Everpay = require('everpay')
```

## Initialization

### Connecting with an ethereum wallet

To create an `ethConnectedSigner`, developers install and create it using [ethers.js](https://github.com/ethers-io/ethers.js).

- Please download [MetaMask](https://metamask.io/) or other ethernet wallets

```bash
yarn add ethers
# or
npm install ethers
```

```js
import Everpay from 'everpay'
import { ethers } from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})
```
:::info
- [chainType configuration item](./everpay-js/types#chaintype)
- More ways to create `ethConnectedSigner` can be found at [SDK - everpay-js - Configuration Items - `ethConnectedSigner`](./everpay-js/configuration/ethConnectedSigner).
:::

### CDN way to connect Ethereum wallet

When creating, you need to introduce the everpay-js package and ethers package in the `head` of the `index.html` file.

```html
<script
  src="https://cdn.jsdelivr.net/npm/everpay@0.6.1/umd/index.umd.js"
  defer
  type="text/javascript"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.4.0/ethers.umd.min.js"
  defer
  type="application/javascript"
></script>
```
After the import is successful, create a `script` tag again and fill it according to the following code.

```html
<script type="text/javascript" defer>
const ethRun = async () => {
    // If you are not connected, you can connect to the wallet and connect to the site here
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const everpay = new window.Everpay.default({
      account: window.ethereum.selectedAddress,
      chainType: 'ethereum',
      ethConnectedSigner: signer
    })
}
ethRun()
</script>
```

:::danger
- Make sure the wallet is connected and the current site is connected.
- When creating an everpay application, you need to add `default`: `new window.Everpay.default({})`.
- ethers CDN version Please use `umd` format, [View ethers CDN version](https://cdnjs.com/libraries/ethers/5.4.0).
- Make sure `ethers CDN link` and `everpay CDN link` are loaded first, otherwise `ethers is not defined` or `Everpay is not defined`.
:::


### Connecting with an arweave wallet

If the developer uses Arweave wallet connection, the initialization needs to inject `arJWK`. When using the browser [ArConnect](https://arconnect.io/) wallet, injecting `arJWK: 'use_wallet'` will do the trick.

- Download [ArConnect](https://arconnect.io/) Wallet

```ts
import Everpay from 'everpay'

const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})
```
- [chainType configuration item](./everpay-js/types#chaintype)
- `arJWK` also supports the private key format, you can browse [SDK - everpay-js - Configuration - `arJWK`](./everpay-js/configuration/arJWK) for configuration.

### CDN way to connect Arweave wallet

When creating, you need to introduce the everpay-js package in the `head` of the `index.html` file.

```html
<script
  src="https://cdn.jsdelivr.net/npm/everpay@0.6.1/umd/index.umd.js"
  defer
  type="text/javascript"
></script>
```
After the import is successful, create a `script` tag again and fill it according to the following code.

```html
<script>
const arRun = async () => {
  // If you are not connected, you can connect to the wallet and connect to the site here
  const arAddress = await window.arweaveWallet.getActiveAddress()
  const everpay = new window.Everpay.default({
    account: arAddress,
    chainType: 'arweave',
    arJWK: 'use_wallet'
  })
}
arRun()
</script>
```
:::danger
* Make sure the wallet is connected and connected to the current site.
* You need to add `default` when creating everpay application: `new window.Everpay.default({})`.
* Make sure that the everpay CDN link is loaded first.
:::

:::info

- Following the steps above, we have completed the creation of the Everpay application, so let's move on to top-up, transfer and withdraw funds.

:::
## Deposit

Deposit your Arweave, Ethereum and other on-chain assets to everPay.
Fill in the `token tag` and `amount` for the top-up and call the following interface to complete the top-up:

```js
everpay.deposit({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.21'
}).then(console.log)
```

:::info
* Wait patiently for the block verification to be completed and you will have the corresponding property in everPay.
* Ethereum requires 6 blocks for recharge, Arweave requires 15 blocks for recharge
* everPay supports AR cross-chain, initialization injection `ethConnectedSigner` will call WAR (ERC20) for recharge, initialization injection `arJWK` will call AR (native) for recharge
:::

## Transfer

You can make an everPay transfer to a wallet that has a token that corresponds to an everPay account. Fill in the `token tag` and `amount` of the account to be transferred and the address `to` of the account to be transferred, and call the following interface to complete the transfer.

```js
everpay.transfer({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.21',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```
:::danger
* Please note: You are operating a transfer of assets on the everPay network, please do not transfer to an exchange address, or a contract address, or your assets will not be recovered!
:::
## Withdrawal

Withdraw the assets from everPay and return them to the native chain. Withdrawals from everPay can be made to the wallets that have been credited and have tokens in their everPay accounts. Fill in the `token tag`, `amount`, `chainType` and `to` of the native chain to be withdrawn, and call the following interface to complete the withdrawal.

```js
everpay.withdraw({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.26',
  chainType: 'ethereum',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```
:::danger

* Withdraw assets from everPay to target chains, such as Ethereum, etc.
 * Please do not withdraw to contract addresses, they cannot be recovered!
:::
## Example reference

More examples can be found in [everpay-js unit test cases](https://github.com/everFinance/everpay-js/tree/main/test)
