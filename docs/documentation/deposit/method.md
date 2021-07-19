---
sidebar_position: 2
---

# Deposit method

## Ethereum Account model
### Blockchain wallets such as imToken / MetaMask
1. get everPay's multi-signature contract address in Ethereum via [everpay server info API](../server-api/basic-api/info) to get everPay's multi-signature contract address `ethLocker` in Ethereum.
2. transfer the assets and amount you want to recharge to the `ethLocker` multi-signature contract address via blockchain wallet tools like imToken / MetaMask
3. wait for the transaction to be confirmed in 6 blocks
4. via the [everpay server balances API](../server-api/basic-api/balances) to get information about the assets on everPay for the everPay account corresponding to this wallet

### Via ethers.js
Pseudocode reference source: [everpay-js src/lib/ethereum.ts#L14](https://github.com/everFinance/everpay-js/blob/main/src/lib/ethereum.ts#L14)

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
### via web3.js
* [web3.js web3.eth.send_transaction](https://web3py.readthedocs.io/en/stable/web3.eth.html#web3.eth.Eth.send_transaction)
* [web3.js Working with an ERC20 Token Contract](https://web3py.readthedocs.io/en/stable/examples.html?highlight=erc20#working-with-an-erc20-token-contract) -->

### Via everpay-js
everpay-js is now packaged open source, with ethers.js integrated inside, so developers don't need to care about `Token decimals`, easy to integrate and use.

<!-- TODO: link -->
To use everpay-js for deposit, please refer to: [everpay-js deposit](../everpay-js/operation-api/deposit#ethereum-wallet-1).

## Arweave Account Model
### Blockchain wallets such as arConnect
1. via the [everpay server info API](../server-api/basic-api/info) to get everPay's wallet address `arLocker` which is managed by Arweave gated signature.
2. transfer the assets and the amount of token you want to deposit to the `arLocker` address via a blockchain wallet tool like arConnect
3. wait for 15 blocks of confirmation of the transaction
4. via the [everpay server balances API](../server-api/basic-api/balances) to get the everPay account corresponding to this wallet and the asset information on everPay

### Via arweave.js
Pseudocode reference source: [everpay-js src/lib/arweave.ts#L102](https://github.com/everFinance/everpay-js/blob/main/src/lib/arweave.ts#L102)

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
  // The signature value is assigned directly to the original transaction
  await arweave.transactions.sign(transactionTransfer, arJWK)
  const responseTransfer = await arweave.transactions.post(transactionTransfer)
  return responseTransfer
}
```

### Via everpay-js
everpay-js is now packaged open source, integrated with arweave.js, arConnect, developers do not need to care about `Token decimals`, easy to integrate and use.

Use everpay-js for deposit, see: [everpay-js deposit](../everpay-js/operation-api/deposit#arweave-wallet-1).