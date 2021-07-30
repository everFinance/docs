---
sidebar_position: 2
---

# Quick integration

## System Requirement

Node Version >= 14

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
```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

## Deposit

```js
everpay.deposit({
  symbol: 'USDT',
  amount: '5.26'
}).then(console.log)
```

## Transfer
```js
everpay.transfer({
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## Withdraw
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