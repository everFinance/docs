---
sidebar_position: 2
---

# Account Model

## Blockchain Account

The everPay protocol has a diverse and flexible account system, supporting not only blockchain accounts but also smart accounts, i.e. the Internet account system, in the future.

Currently Ethereum and Arweave addresses are supported. When a user connects with an Ethereum or Arweave wallet, the "blockchain address" is the same as the wallet used for the connection. This means that all Ethereum addresses and Arweave addresses are `valid` accounts on everPay.

For example:
* Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859, after connecting to EverPay via MetaMask, the corresponding account ID on everPay will be 0x26361130d5d6E798E9319114643AF8c868412859.
* Arweave Wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo After connecting to EverPay via ArConnect, the corresponding account ID on everPay will be 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo.

In the future, the everPay protocol account system will support a smart account model, so look out for that.

:::info Note
Difference between an everPay account and a blockchain address.

* Note: To transfer funds in everPay, the recipient does not need to be logged in or register an account, the recipient address just needs to be a valid Ethereum address or Arweave address.
* When an everPay account is connected to a wallet, the account ID is the same as the address of the connected wallet.
* Account IDs in the form of blockchain addresses, which are a subset of everPay accounts, and in the future we will also support the internet account model (internet email accounts).
:::

## Supported Wallets
* Ethereum Wallets
  * [imToken](https://token.im/)
  * [MetaMask](https://metamask.io/)
  * [Trust Wallet](https://trustwallet.com/)
  * [Rabby](https://rabby.io/)
  * [WalletConnect](https://walletconnect.org/)
  * etc.
* Arweave Wallet
  * [ArConnect](https://arconnect.io/)