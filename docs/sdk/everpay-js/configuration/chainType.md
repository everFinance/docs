---
sidebar_position: 5
---

# chainType

## 配置项功能

everPay 支持 ethereum evm 兼容链。充值时，使用对应链的币种进行充值。

## 配置项类型

当前支持 `ethereum`, `arweave`, `moon`。

## moonbase 示例

```ts
const providerURL = 'https://rpc.api.moonbase.moonbeam.network'
// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {
  chainId: 1287,
  name: 'moonbase-alphanet'
})
const ethWalletHasUSDT = {
  address: '0x26361130d5d6E798E9319114643AF8c868412859',
  privateKey: '94c97d4cc865d77afaf2d64147f7c067890e1485eb5d8e2c15cc0b7528a08b47'
}
const signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)

const everpay = new Everpay({
  debug: true
  account: ethWalletHasUSDT.address,
  chainType: 'moon',
  ethConnectedSigner: signer,
})

everpay.deposit({
  tag: 'moonbase-dev-0x0000000000000000000000000000000000000000',
  amount: '0.01'
}).then(ethTx => {
  console.log('ethTx', ethTx)
})
```
:::danger 私钥泄漏风险
此方式在代码中明文传递私钥，存在安全风险
:::
