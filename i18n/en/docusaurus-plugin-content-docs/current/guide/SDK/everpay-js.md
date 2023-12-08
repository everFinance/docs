---
sidebar_position: 2
---

# Quick integration with everpay-js

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

everpay-js encapsulates most of the interfaces of everPay protocol for developers, developers can use everpay-js to quickly integrate everPay protocol into application pages. Using everpay-js, you can quickly complete everPay payment settlement in your application.

## Requirements for use

- `Node Version >= 14` It is recommended to use [`nvm`](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (windows) to manage Node versions.
- [ethers.js](https://docs.ethers.io/v5/) (only required when using the ethers wallet connection). Recommended to use [the same version(5.4.0) within everpay-js ethers.js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)

:::info

- This section explains how to quickly install, introduce, create, top up, transfer and withdraw funds using everpay-js.
  :::

## Installation

Use [yarn](https://www.yarnpkg.cn/getting-started/install) or npm to install and use, if not please check your network and try again.

<Tabs>
<TabItem value="yarn" label="yarn" default>

```bash
yarn add everpay
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install everpay
```

</TabItem>
</Tabs>

## Import

<Tabs>
<TabItem value="es_module" label="ES Modules" default>

```ts
import Everpay from 'everpay'
const everpay = new Everpay()
```

</TabItem>
<TabItem value="commonjs" label="CommonJS">

```js
const Everpay = require('everpay')
const everpay = new Everpay()
```

</TabItem>
</Tabs>

## Initialization

### Smart Account Connect

Extremely easy & convenient.

#### 1. Using the Package Manager

（1）Install [everpay-js](./everpay-js.md#Installation).

<Tabs>
<TabItem value="yarn" label="yarn" default>

```bash
yarn add everpay
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install everpay
```

</TabItem>
</Tabs>

（2）Introduce everpay-js for creation.

```js
import Everpay from 'everpay'

const account = await new Everpay().smartAccountAuth(
  'https://app-dev.permaswap.network/permalogo.svg'
)
const everpay = new Everpay({
  account,
  isSmartAccount: true
})
```

### Connecting with an ethereum wallet

- Optional configuration items such as `ethConnectedSigner`, `chainType`, etc. can be injected during creation.
- Developers need to install and use [ethers.js](https://github.com/ethers-io/ethers.js) to create it.
- Please download [MetaMask](https://metamask.io/) or other Ether wallets.

#### 1. Using the Package Manager

(1) Install [everpay-js](. /everpay-js.md#install) and [ethers.js](https://github.com/ethers-io/ethers.js).

<Tabs>
<TabItem value="yarn" label="yarn" default>

```bash
yarn add everpay ethers@5.4.0
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install everpay ethers@5.4.0
```

</TabItem>
</Tabs>

(2) Introduce everpay-js and ethers for creation.

```js
import Everpay from 'everpay'
import { ethers } from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  debug: true // Enable everpay development environment.
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})
```

#### 2. Connecting to an Ethernet wallet via CDN

(1) Create `index.html` file and introduce [everpay-js](https://www.jsdelivr.com/package/npm/everpay?nav=config) and [ethers](https://www.jsdelivr.com/package/npm/ethers?nav=config&version=5.4.0) to the CDN link.

```html
<script
  src="https://cdn.jsdelivr.net/npm/everpay@0.6.1/umd/index.umd.min.js"
  defer
  type="text/javascript"
></script>
<script
  defer
  src="https://cdn.jsdelivr.net/npm/ethers@5.4.0/dist/ethers.umd.min.js"
  type="application/javascript"
></script>
```

(2) Create `script` tags in the `index.html` file and populate them according to the following code.

```html
<script type="text/javascript" defer>
  const ethRun = async () => {
      // You can connect your wallet or website here if not connected yet.
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const everpay = new window.Everpay.default({
        debug: true // Enable everpay development environment.
        account: window.ethereum.selectedAddress,
        chainType: 'ethereum',
        ethConnectedSigner: signer
      })
  }
  ethRun()
</script>
```

:::info

- Make sure the `wallet is connected` and `connected to the current site`.
- [debug environment configuration](./everpay-js/configuration/debug.md).
- [account configuration](../dive/account-model.md) & [chainType configuration item](./everpay-js/types.md#chaintype).
- More ways to create `ethConnectedSigner` can be found in [SDK - everpay-js - configuration items - `ethConnectedSigner`](./everpay-js/configuration/ethConnectedSigner).
- When creating Everpay instances in CDN way, you need to add `default` : `new window.Everpay.default({})`.
- Make sure `ethers CDN link` and `everPay CDN link` are loaded first, otherwise `ethers is not defined` or `Everpay is not defined`.
  :::

### Arweave Wallet Connection

- You need to inject `arJWK` when creating a browser [ArConnect](https://arconnect.io/) wallet, just inject `arJWK: 'use_wallet'`.
- Download the [ArConnect](https://arconnect.io/) wallet.

#### 1. Using package management

(1) Install [everpay-js](./everpay-js.md#install).

<Tabs>
<TabItem value="yarn" label="yarn" default>

```bash
yarn add everpay
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install everpay
```

</TabItem>
</Tabs>

(2) Introduce everpay-js for creation.

```ts
import Everpay from 'everpay'

const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  debug: true,
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})
```

#### 2. Connect to Arweave wallet using CDN

(1) Create the `index.html` file and introduce the [everpay-js CDN](https://www.jsdelivr.com/package/npm/everpay?nav=config) link.

```html
<script
  src="https://cdn.jsdelivr.net/npm/everpay@0.6.1/umd/index.umd.min.js"
  defer
  type="text/javascript"
></script>
```

(2) Create `script` tags in the `index.html` file and populate them according to the following code.

```html
<script>
  const arRun = async () => {
    // You can connect your wallet or website here if not connected yet.
    const arAddress = await window.arweaveWallet.getActiveAddress()
    const everpay = new window.Everpay.default({
      debug: true // Enable everpay development environment.
      account: arAddress,
      chainType: 'arweave',
      arJWK: 'use_wallet'
    })
  }
  arRun()
</script>
```

:::info

- Make sure the wallet is connected and authorized, [View authorization type](./everpay-js/configuration/arJWK.md#browser--arconnect), [View authorization type](https://github.com/arconnectio/ArConnect#connectpermissions-appinfo-gateway).
- [debug environment configuration](./everpay-js/configuration/debug.md).
- [chainType configuration item](./everpay-js/types#chaintype).
- `arJWK` also supports private key format, you can browse [SDK - everpay-js - configuration items - `arJWK`](./everpay-js/configuration/arJWK) for configuration.
- When creating Everpay instance in CDN way, you need to add `default` : `new window.Everpay.default({})`.
- Make sure `everPay CDN link` is loaded first, otherwise `Everpay is not defined`.
  :::

---

:::info Success!

- Following the steps above, we have completed the creation of the Everpay application, so let's move on to top-up, transfer and withdraw funds.

:::

## Deposit

Deposit your Arweave, Ethereum and other on-chain assets to everPay.
Fill in the `token tag` and `amount` for the top-up and call the following interface to complete the top-up:

```js
everpay
  .deposit({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.21'
  })
  .then(console.log)
```

:::info

- Wait patiently for the block verification to be completed and you will have the corresponding property in everPay.
- Ethereum requires 6 blocks for recharge, Arweave requires 15 blocks for recharge
- everPay supports AR cross-chain, initialization injection `ethConnectedSigner` will call WAR (ERC20) for recharge, initialization injection `arJWK` will call AR (native) for recharge
  :::

## Transfer

After the everPay instance is created successfully, you can use the `transfer` method to transfer the `assets(token)` that the current `account` already owns to everPay.

Fill in the `token tag` and `amount`, `to` required for the transfer and call the following interface to complete the transfer:

- `tag` : the unique identifier of the `token`, which can be accessed via [`info`](./everpay-js/basic-api/info.md#example-return) interface to view.
- `amount` : The amount.
- `to` : The recipient address of `everPay`, see [account-model](../dive/account-model.md).

```js
everpay
  .transfer({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.21',
    to: '0x26361130d5d6E798E9319114643AF8c868412859'
  })
  .then(console.log)
```

:::danger

- Please note: You are operating a transfer of assets on the everPay network, please do not transfer to an exchange address, or a contract address, or your assets will not be recovered!
  :::

## Withdrawal

After the everPay instance is created successfully, you can withdraw the `assets(token)` you have in your current `account` through the `withdraw` method. Withdraw the `token` from everPay to the native chain address.

Fill in the `token tag`, `amount`, `chainType`, `to` that you want to withdraw, and call the following interface to complete the withdrawal:

- `token tag` : a unique identifier that can be accessed via [`info`](./everpay-js/basic-api/info.md#example-return) interface.
- `amount` : The amount.
- `chainType` : [chainType native chain](./everpay-js/types.md#chaintype).
- `to` : `everpay` Recipient address, details can be found in [account-model](../dive/account-model.md).

```js
everpay
  .withdraw({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.26',
    chainType: 'ethereum',
    to: '0x26361130d5d6E798E9319114643AF8c868412859'
  })
  .then(console.log)
```

:::danger

- Withdraw assets from everPay to target chains, such as Ethereum, etc.
- Please do not withdraw to contract addresses, they cannot be recovered!
  :::

## Example reference

More examples can be found in [everpay-js unit test cases](https://github.com/everFinance/everpay-js/tree/main/test)
