---
sidebar_position: 2
---

# 使用 everpay-js 快速集成

everpay-js 为开发者封装了 everPay 协议的大部分接口，开发者可以使用 everpay-js 快速将 everPay 协议集成到应用页面。使用 everpay-js 可以在应用中快速完成 everPay 支付结算。

## 使用要求

- `Node Version >= 14` 推荐使用 [`nvm`](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)（windows） 来管理 Node 版本。
- [ethers.js](https://docs.ethers.io/v5/)（只有在使用以太坊钱包连接时需要）。推荐使用 [everpay-js 内相同版本 ethers.js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)

:::info

- 本章节将介绍如何使用 everpay-js 快速的进行安装、引入、创建、充值、转账、提现。
:::

## 安装

使用 [yarn](https://www.yarnpkg.cn/getting-started/install) 或 npm 进行安装使用，若未安装成功请检查网络再次进行尝试。

```bash
yarn add everpay

# or

npm install everpay
```

## 引入

```js
import Everpay from 'everpay'

// or

const Everpay = require('everpay')
```

## 创建 Everpay 应用

### 使用以太坊钱包连接

创建要注入 `ethConnectedSigner`，开发者安装并使用 [ethers.js](https://github.com/ethers-io/ethers.js) 进行创建。

- 请下载 [MetaMask](https://metamask.io/) 或 其他以太坊钱包

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
- [chainType 配置项](../../sdk/everpay-js/types#chaintype)
- `ethConnectedSigner` 的更多创建方式，可浏览 [SDK - everpay-js - 配置项 - `ethConnectedSigner`](../../sdk/everpay-js/configuration/ethConnectedSigner)。
:::
若是 ts 项目 `window.ethereum` 会报出错误，请创建 type.d.ts 文件，对 window 下的 ethereum 进行配置。

```ts
declare interface Window {
  ethereum: any
  // ...
}
```

### 使用 Arweave 钱包连接

创建需要注入 `arJWK`，当使用浏览器 [ArConnect](https://arconnect.io/) 钱包时，注入 `arJWK: 'use_wallet'` 即可。

- 下载 [ArConnect](https://arconnect.io/) 钱包

```ts
import Everpay from 'everpay'

const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})
```

- [chainType 配置项](../../sdk/everpay-js/types#chaintype)
- `arJWK` 也支持私钥格式，可浏览 [SDK - everpay-js - 配置项 - `arJWK`](../../sdk/everpay-js/configuration/arJWK) 进行配置。

:::info

- 根据上面的步骤，我们已经完成了 Everpay 应用的创建了,接下来一起完成充值、转账、提现。
:::

## 充值

将 Arweave,Ethereum 等链上资产存入 everPay。
填写需要充值的 `token tag` 和 `amount`，调用下面的接口完成充值:

```js
everpay
  .deposit({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.21'
  })
  .then(console.log)
```

:::info

- 耐心等待区块验证完成，即可在 everPay 中拥有对应财产。
- Ethereum 充值需要等待 6 个区块，Arweave 充值需要等待 15 个区块。
- everPay 支持 AR 跨链，初始化注入 `ethConnectedSigner` 则充值调用的是 WAR（ERC20），初始化注入 `arJWK` 则充值调用的是 AR（native）
:::

## 转账

注入的钱包，对应 everPay 账户已拥有 token 就可以进行 everPay 转账。填写需要转账的 `token tag` 和 `amount`，以及转给账户的地址`to`，调用下面的接口完成转账：

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
* 请注意：你正在操作转账的是 everPay 网络上的资产，请不要转账到交易所地址，或合约地址，否则您的资产将无法找回！
:::

## 提现

将 everPay 中的资产提出，回到原生链。注入的钱包，对应 everPay 账户已经拥有 token 就可以进行 everPay 提现。填写需要提现的 `token tag`、`amount`、`chainType` 以及提现收款原生链地址`to`,调用下面的接口完成提现：

```js
everpay
  .withdraw({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.21',
    chainType: 'ethereum',
    to: '0x26361130d5d6E798E9319114643AF8c868412859'
  })
  .then(console.log)
```
:::danger

 * 将 everPay 上的资产提现到目标链，如 Ethereum 等。
 * 请勿提现至合约地址，无法找回！
:::

## 示例参考

更多示例可参考 [everpay-js 单元测试用例](https://github.com/everFinance/everpay-js/tree/main/test)
