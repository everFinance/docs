---
sidebar_position: 5
---

# chainType

## 配置项功能

everPay 支持 ethereum evm 兼容链。充值时，使用对应链的币种进行充值

## 配置项类型

当前支持 `ethereum`, `moonbase`, `moonbeam`, `arweave`

## moonbase 示例

```ts
const providerURL = 'https://rpc.api.moonbase.moonbeam.network'
// Define Provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {
  chainId: 1287,
  name: 'moonbase-alphanet'
})
const signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)

const everpay = new Everpay({
  account: ethWalletHasUSDT.address,
  chainType: 'moonbase',
  ethConnectedSigner: signer,
  debug: true
})

everpay.deposit({
  symbol: 'dev',
  amount: '0.01'
}).then(ethTx => {
  console.log('ethTx', ethTx)
})
```
