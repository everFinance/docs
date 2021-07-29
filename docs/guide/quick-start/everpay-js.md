---
sidebar_position: 2
---

# 使用 everpay-js 快速集成

## 系统要求

Node Version >= 14

## 安装
```bash
yarn add everpay

# or

npm install everpay
```

## 引入
```js
import Everpay from 'everpay'
// or
// const Everpay = require('everpay')
```


## 初始化
```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

## 充值

```js
everpay.deposit({
  symbol: 'USDT',
  amount: '5.26'
}).then(console.log)
```

## 转账
```js
everpay.transfer({
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## 提现
```js
everpay.withdraw({
  symbol: 'USDT',
  amount: '5.26',
  chainType: 'ethereum',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## 示例参考
更多示例可参考 [everpay-js 单元测试用例](https://github.com/everFinance/everpay-js/tree/main/test)