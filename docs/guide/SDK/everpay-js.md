---
sidebar_position: 2
---

# 快速集成

everpay-js 为开发者封装了 everPay 协议的大部分接口，开发者可以使用 everpay-js 快速将 everPay 协议集成到应用中。使用 everpay-js 可以在应用中快速完成 everPay 支付或结算。

## 使用要求

- `Node Version >= 14` 推荐使用 [`nvm`](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)（windows） 来管理 Node 版本。
- 推荐使用 [everpay-js 内相同版本 ethers.js](https://github.com/everFinance/everpay-js/blob/main/package.json#L57)。[ethers.js](https://docs.ethers.io/v5/) 只有在使用以太坊钱包连接时需要。

:::tip

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

### 以太坊钱包连接

- 创建时可选择性注入 `ethConnectedSigner`、`chainType` 等配置项。
- 开发者需安装并使用 [ethers.js](https://github.com/ethers-io/ethers.js) 进行创建。
- 请下载 [MetaMask](https://metamask.io/) 或 其他以太坊钱包。
#### 1. 使用包管理器

（1）安装 [everpay-js](./everpay-js.md#安装) 和 [ethers.js](https://github.com/ethers-io/ethers.js)。

```bash
yarn add everpay ethers
# or
npm install everpay ethers
```
（2）引入 everpay-js 和 ethers 进行创建。
```js
import Everpay from 'everpay'
import { ethers } from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  debug: true // 开启 everpay dev环境
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})
```
---
#### 2. 通过 CDN 方式连接以太坊钱包

（1）创建 `index.html` 文件并引入 [everpay-js](https://www.jsdelivr.com/package/npm/everpay?nav=config) 和 [ethers](https://www.jsdelivr.com/package/npm/ethers?nav=config&version=5.4.0) 的 CDN 链接。

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

（2）在 `index.html` 文件中创建 `script` 标签，并根据以下代码进行填充。

```html
<script type="text/javascript" defer>
const ethRun = async () => {
    // 若未连接可在此处做连接钱包和连接站点操作
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const everpay = new window.Everpay.default({
      debug: true // 开启 everpay dev环境
      account: window.ethereum.selectedAddress,
      chainType: 'ethereum',
      ethConnectedSigner: signer
    })
}
ethRun()
</script>
```

:::info
- 确保 `钱包已连接` 并且 `连接到当前站点`。
- [debug 环境配置](./everpay-js/configuration/debug.md)。
- [account 配置](../basic/dive/account-model.md) & [chainType 配置项](./everpay-js/types.md#chaintype)。
- `ethConnectedSigner` 的更多创建方式，可浏览 [SDK - everpay-js - 配置项 - `ethConnectedSigner`](./everpay-js/configuration/ethConnectedSigner)。
- CDN 方式创建 everPay 应用时，需要添加 `default` : `new window.Everpay.default({})`。
- 确保 `ethers CDN链接` 和 `everPay CDN链接` 优先加载完成，否则 `ethers is not defined` 或 `Everpay is not defined` 。
:::
---
### Arweave 钱包连接

- 创建需要注入 `arJWK`，当使用浏览器 [ArConnect](https://arconnect.io/) 钱包时，注入 `arJWK: 'use_wallet'` 即可。
- 下载 [ArConnect](https://arconnect.io/) 钱包。

#### 1. 使用包管理

（1）安装 [everpay-js](./everpay-js.md#安装)。

```bash
yarn add everpay
# or
npm install everpay
```
（2）引入 everpay-js 进行创建。
```ts
import Everpay from 'everpay'

const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  debug: true // 开启 everpay dev环境
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})
```

#### 2. 使用 CDN 方式连接 Arweave 钱包

（1）创建 `index.html` 文件并引入 [everpay-js CDN](https://www.jsdelivr.com/package/npm/everpay?nav=config) 链接。

```html
<script
  src="https://cdn.jsdelivr.net/npm/everpay@0.6.1/umd/index.umd.min.js"
  defer
  type="text/javascript"
></script>
```

（2）在 `index.html` 文件中创建 `script` 标签，并根据以下代码进行填充。

```html
<script>
const arRun = async () => {
  // 若未连接可在此处做连接钱包和连接站点操作
  const arAddress = await window.arweaveWallet.getActiveAddress()
  const everpay = new window.Everpay.default({
    debug: true // 开启 everpay dev环境
    account: arAddress,
    chainType: 'arweave',
    arJWK: 'use_wallet'
  })
}
arRun()
</script>
```
:::info
* 确保钱包已连接并授权，[查看授权方式](./everpay-js/configuration/arJWK.md#浏览器--arconnect) 、 [查看授权类型](https://github.com/arconnectio/ArConnect#connectpermissions-appinfo-gateway)。
* [debug 环境配置](./everpay-js/configuration/debug.md)。
* [chainType 配置项](./everpay-js/types#chaintype)。
* `arJWK` 也支持私钥格式，可浏览 [SDK - everpay-js - 配置项 - `arJWK`](./everpay-js/configuration/arJWK) 进行配置。
* CDN 方式创建 everPay 应用时，需要添加 `default` : `new window.Everpay.default({})`。
* 确保 `everPay CDN链接` 优先加载完成，否则 `Everpay is not defined` 。
:::
---

:::tip 成功啦
- 根据上面的步骤，我们已经完成了 Everpay 应用的创建了,接下来一起完成充值、转账、提现。
:::

## 充值
`everPay 应用` 创建成功后，可通过 `deposit` 方法，将 `Arweave`, `Ethereum` 等链上资产存入 everPay。

填写充值所需要的 `token tag` 和 `amount`，调用下面的接口完成充值:
* `tag` : `token` 的唯一标识，可通过 [`info`](./everpay-js/basic-api/info.md#示例返回) 接口进行查看。
* `amount` : 数额。 
```js
everpay
  .deposit({
    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
    amount: '5.21'
  })
  .then(console.log)
```

:::info

- 耐心等待区块验证完成，即可在 [everPay](https://app.everpay.io/) 中拥有对应财产。
- Ethereum 充值需要等待 6 个区块，Arweave 充值需要等待 15 个区块。
- everPay 支持 AR 跨链，初始化注入 `ethConnectedSigner` 则充值调用的是 WAR（ERC20），初始化注入 `arJWK` 则充值调用的是 AR（native）。
:::
---
## 转账
`everPay 应用` 创建成功后，可通过 `transfer` 方法，对当前 `账户(account)` 已拥有的 `资产(token)` 进行 everPay 转账。

填写转账所需要的 `token tag` 和 `amount`，`to`，调用下面的接口完成转账：

* `tag` : `token` 的唯一标识，可通过 [`info`](./everpay-js/basic-api/info.md#示例返回) 接口进行查看。
* `amount` : 数额。 
* `to` : `everPay` 的收款方地址，详情可见 [账户模型](../basic/dive/account-model.md)。
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
- 请注意：你正在操作转账的是 everPay 网络上的资产，请不要转账到交易所地址，或合约地址，否则您的资产将无法找回！
:::
---
## 提现
`everPay 应用` 创建成功后，可通过 `withdraw` 方法，对当前 `账户(account)` 已拥有的 `资产(token)` 进行 everPay 提现。将 everPay 中的 `资产(token)` 提到原生链地址中。

填写需要提现的 `token tag` 、 `amount`、 `chainType` 、`to`，调用下面的接口完成提现：

* `token tag` : 唯一标识，可通过 [`info`](./everpay-js/basic-api/info.md#示例返回) 接口进行查看。
* `amount` : 数额。 
* `chainType` : [chainType 原生链](./everpay-js/types.md#chaintype)。
* `to` : `everpay` 收款方地址，详情可见 [账户模型](../basic/dive/account-model.md)。

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

- 将 everPay 上的资产提现到目标链，如 Ethereum 等。
- 请勿提现至合约地址，无法找回！
:::

## 示例参考

更多示例可参考 [everpay-js 单元测试用例](https://github.com/everFinance/everpay-js/tree/main/test)
