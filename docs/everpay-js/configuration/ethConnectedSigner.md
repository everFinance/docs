---
sidebar_position: 4
---

# ethConnectedSigner

## Configuration item function

此配置项用于通过 ethereum 钱包 来操作 everPay ethereum 账户模型的 账户，对该账户进行

* 充值：使用 `ethConnectedSigner` 进行 ethereum 转账 至 everPay 多签合约地址
* 转账：使用 `ethConnectedSigner` 进行 ethereum `personalSign` 签名，来确保该 everPay 账户的操作权限
* 提现：使用 `ethConnectedSigner` 进行 ethereum `personalSign` 签名，来确保该 everPay 账户的操作权限

## 如何配置

everpay-js 集成了 [ethers.js](https://docs.ethers.io/v5/) 用于 ethereum 签名、发送交易。

此配置项也使用 [ethers.js#Signer](https://docs.ethers.io/v5/api/signer/#Signer) 作为参数类型。

### ethereum Dapp 浏览器: imToken / MetaMask 等

参考 [ethers.js Connecting to Ethereum: Metamask](https://docs.ethers.io/v5/getting-started/#getting-started--connecting)

```ts
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})
```

### RPC API + privateKey

参考 [ethers.js Wallet API](https://docs.ethers.io/v5/api/signer/#Wallet)

```js
const address = 'YOUR ADDRESS'
const privateKey = 'YOUR PRIVATE KEY'
const provider = new ethers.providers.InfuraProvider('kovan')
const signer = new ethers.Wallet(privateKey, provider)
const everpay = new Everpay({
  account: address,
  ethConnectedSigner: signer,
})
```

:::danger 私钥泄漏风险
此方式在代码中明文传递私钥，存在安全风险
:::

## 与 arJWK 配置项的冲突
`ethConnectedSigner` 用于 ethereum 账户模型的 everPay 账户操作，而 `arJWK` 用于 arweave 账户模型的 everPay 账户操作。同一个 Everpay 实例，**只能使用一个账户模型**，但开发者可以创建 多个 Everpay 实例，来进行更复杂应用的开发。

```js
const ethEverpay = new Everpay({
  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92',
  ethConnectedSigner
})

const arEverpay = new Everpay({
  account: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  arJWK
})
```

## 与 account 配置项的关系

当需要进行 everPay 账户（ethereum 账户模型）操作时，`account` 参数必须与 `ethConnectedSigner` 对应的 ethereum 钱包地址一致