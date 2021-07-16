---
sidebar_position: 2
---

# 充值方式

## Ethereum 账户模型
### imToken / MetaMask 等区块链钱包
1. 通过 [everpay server info API](../../server-api/basic-api/info) 获取 everPay 在 Ethereum 的多签合约地址 `ethLocker`
2. 通过 imToken / MetaMask 等区块链钱包 工具，给该 `ethLocker` 多签合约地址转账想要充值的资产与数量
3. 等待 该笔交易 6 个区块确认
4. 通过 [everpay server balances API](../../server-api/basic-api/balances) 获取此钱包对应的 everPay 账户，在everPay 上的资产信息

### 通过 ethers.js
伪代码参考来源：[everpay-js src/lib/ethereum.ts#L14](https://github.com/everFinance/everpay-js/blob/main/src/lib/ethereum.ts#L14)

```ts
const transferAsync = async (ethConnectedSigner: Signer, {
  symbol,
  token,
  from,
  to,
  value
}: TransferAsyncParams): Promise<EthereumTransaction> => {
  let transactionResponse: EthereumTransaction
  if (symbol.toLowerCase() === 'eth') {
    const transactionRequest = {
      from: from.toLowerCase(),
      to: to?.toLowerCase(),
      value
    }
    transactionResponse = await ethConnectedSigner.sendTransaction(transactionRequest)
  } else {
    const tokenID = getTokenAddrByChainType(token, ChainType.ethereum)
    const erc20RW = new Contract(tokenID.toLowerCase(), erc20Abi, ethConnectedSigner)
    transactionResponse = await erc20RW.transfer(to, value)
  }
  return transactionResponse
}
```
<!-- 
### 通过 web3.js
* [web3.js web3.eth.send_transaction](https://web3py.readthedocs.io/en/stable/web3.eth.html#web3.eth.Eth.send_transaction)
* [web3.js Working with an ERC20 Token Contract](https://web3py.readthedocs.io/en/stable/examples.html?highlight=erc20#working-with-an-erc20-token-contract) -->

### 通过 everpay-js
everpay-js 现已封装开源，内部集成了 ethers.js，开发者无需关心 `Token decimals`，易于集成与使用。

使用 everpay-js 进行充值，可参考：[everpay-js deposit](../../everpay-js/operation-api/deposit#ethereum-钱包-1)。


## Arweave 账户模型
### arConnect 等区块链钱包
1. 通过 [everpay server info API](../../server-api/basic-api/info) 获取 everPay 在 Arweave 上门限签名管理的钱包地址 `arLocker`
2. 通过 arConnect 等区块链钱包 工具，给该 `arLocker` 地址转账想要充值的资产与数量
3. 等待 该笔交易 15 个区块确认
4. 通过 [everpay server balances API](../../server-api/basic-api/balances) 获取此钱包对应的 everPay 账户，在everPay 上的资产信息

### 通过 arweave.js
伪代码参考来源：[everpay-js src/lib/arweave.ts#L102](https://github.com/everFinance/everpay-js/blob/main/src/lib/arweave.ts#L102)

```ts
const transferAsync = async (arJWK: ArJWK, {
  to,
  value
}: TransferAsyncParams): Promise<ArTransferResult> => {
  const arweave = Arweave.init(options)

  const transactionTransfer = await arweave.createTransaction({
    target: to,
    quantity: value.toString()
  }, arJWK)
  // 直接给原来 transaction 赋值了 signature 值
  await arweave.transactions.sign(transactionTransfer, arJWK)
  const responseTransfer = await arweave.transactions.post(transactionTransfer)
  return responseTransfer
}
```

### 通过 everpay-js
everpay-js 现已封装开源，内部集成了 arweave.js、arConnect，开发者无需关心 `Token decimals`，易于集成与使用。

使用 everpay-js 进行充值，可参考：[everpay-js deposit](../../everpay-js/operation-api/deposit#arweave-钱包-1)。