---
sidebar_position: 2
---

# 使用 everpay-js 快速集成

everpay-js 为开发者封装了 everPay 协议的大部分接口，开发者可以使用 everpay-js 快速将 everPay 协议集成到应用页面。使用 everpay-js 可以在应用中快速完成 everPay 支付结算。

## 系统要求

* `Node Version >= 14`，推荐使用 [`nvm`](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)（windows） 来管理 Node 版本
* [ethers.js](https://docs.ethers.io/v5/)，推荐使用 [everpay-js 内相同版本 ethers.js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)

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

使用以太坊钱包连接，初始化需要注入 `ethConnectedSigner`，开发者需要使用 [ethers.js](https://github.com/ethers-io/ethers.js) 进行创建。

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

`ethConnectedSigner` 的更多创建方式，可浏览 [SDK - everpay-js - 配置项 - `ethConnectedSigner`](../../sdk/everpay-js/configuration/ethConnectedSigner)。

如开发者使用 Arweave 钱包连接，初始化需要注入 `arJWK`，可浏览 [SDK - everpay-js - 配置项 - `arJWK`](../../sdk/everpay-js/configuration/arJWK) 进行配置。

TODO: ArConnect

## 充值

填写需要充值的 token symbol 和 amount，调用下面的接口完成充值：

```js
everpay.deposit({
  symbol: 'USDT',
  amount: '5.26'
}).then(console.log)
```

:::info
* Ethereum 充值需要等待 6 个区块，Arweave 充值需要等待 15 个区块
* everPay 支持 AR 跨链，初始化注入 `ethConnectedSigner` 则充值调用的是 WAR（ERC20），初始化注入 `arJWK` 则充值调用的是 AR（native）
:::

## 转账

注入的钱包，对应 everPay 账户已经拥有 token 就可以进行 everPay 转账。填写需要转账的 symbol 和 amount，调用下面的接口完成转账：

```js
everpay.transfer({
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)
```

## 提现

将 everPay 中的资产提出，回到原生链。注入的钱包，对应 everPay 账户已经拥有 token 就可以进行 everPay 提现。填写需要提现的 symbol、amount、chainType 以及提现收款地址：

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