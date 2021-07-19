---
sidebar_position: 1
---

# Account Model

everPay accounts support connection via Ethereum Wallet or Arweave Wallet.

When a user connects via an Ethereum wallet or Arweave wallet, the account on everPay is identical to the wallet "blockchain address" used for the connection. That is, all Ethereum addresses and Arweave addresses are valid accounts on everPay.

For example:
* Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859, after connecting to EverPay via MetaMask, the corresponding account ID on everPay will be 0x26361130d5d6E798E9319114643AF8c868412859.
* Arweave Wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo After connecting to EverPay via ArConnect, the corresponding account ID on everPay will be 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo.

In the future, everPay accounts will also support the account model in the form of Internet mailboxes, so stay tuned.

:::info
Difference between everPay account and blockchain address.

* Note that to transfer assets on everPay, the recipient does not need to sign up for everPay in advance, as long as the recipient's address is a valid ethereum address or Arweave address.
* The account ID of everPay is the same as the connected wallet address after the account is connected.
* In the future we will also support the account model in the form of Internet mailboxes, so the account IDs in the form of blockchain addresses, are a subset of everPay accounts.
:::