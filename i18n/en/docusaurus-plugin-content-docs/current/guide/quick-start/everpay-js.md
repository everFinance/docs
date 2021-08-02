---
sidebar_position: 2
---

# Quick integration with everpay-js

everpay-js encapsulates most of the interfaces of everPay protocol for developers, developers can use everpay-js to quickly integrate everPay protocol into application pages. Using everpay-js, you can quickly complete everPay payment settlement in your application.

## System Requirements

* `Node Version >= 14`， it is recommended to use [`nvm`](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)（windows） to manage Node versions
* [ethers.js](https://docs.ethers.io/v5/) recommended to use [the same version ethers.js inside the everpay-js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)

## Installation
```bash
yarn add everpay

# or

npm install everpay
```

## Import
```js
import Everpay from 'everpay'
// or
// const Everpay = require('everpay')
```


## Initialization

To connect using an ethereum wallet, initialization requires the injection of `ethConnectedSigner`, which developers need to create using [ethers.js](https://github.com/ethers-io/ethers.js).

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

For more information on how to create `ethConnectedSigner`, please visit [SDK - everpay-js - Configuration - `ethConnectedSigner`](../../sdk/everpay-js/configuration/ethConnectedSigner).

If the developer uses Arweave wallet connection, the initialization needs to inject `arJWK`, you can browse [SDK - everpay-js - Configuration - `arJWK`](../../sdk/everpay-js/configuration/arJWK) for configuration.

## Deposit

Fill in the token symbol and amount to be recharged, and call the following interface to complete the recharge.

```js
everpay.deposit({
  symbol: 'USDT',
  amount: '5.26'
}).then(console.log)
```

:::info
* Ethereum requires 6 blocks for recharge, Arweave requires 15 blocks for recharge
* everPay supports AR cross-chain, initialization injection `ethConnectedSigner` will call WAR (ERC20) for recharge, initialization injection `arJWK` will call AR (native) for recharge
:::

## Transfer

When the everPay account that corresponds to the injected wallet already has assets, you can make an everPay transfer. Fill in the symbol and amount to be transferred and call the following interface to complete the transfer.

```js
everpay.transfer({
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## Withdrawal

Withdraw the assets from everPay back to the native chain. When the everPay account that corresponds to the injected wallet already has assets, you can withdraw assets from everPay. Fill in the symbol, amount, chainType and withdrawal address to withdraw, and call the following interface to withdraw.

```js
everpay.withdraw({
  symbol: 'USDT',
  amount: '5.26',
  chainType: 'ethereum',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## Example reference
More examples can be found in [everpay-js unit test cases](https://github.com/everFinance/everpay-js/tree/main/test)