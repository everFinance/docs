---
sidebar_position: 3
---

# 快速开始
使用 everpay-js 快速开始

## 安装
```bash
yarn add everpay
```

## 初始化
```js
import Everpay from 'everpay'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

## 进行充值

```js
everpay.deposit({
  symbol: 'USDT',
  amount: '5.26'
}).then(console.log)
```

## 进行转账
```js
everpay.transfer({
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## 进行提现
```js
everpay.withdraw({
  symbol: 'USDT',
  amount: '5.26',
  chainType: 'ethereum',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```