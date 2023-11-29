---
sidebar_position: 2
---

# 账户模型

everPay 协议的账户体系多元且灵活，除支持区块链账户外，也支持智能账户，即互联网账户体系。

## 智能账户

everPay 已支持智能账户模型，用户可以使用邮箱作为 EverID，来进行转账、提现，并和区块链账户完全相通。

## 区块链账户

区块链账户目前支持 Ethereum 和 Arweave 地址。用户使用 Ethereum 或 Arweave 钱包连接后，与连接时使用的钱包 “区块链地址” 一致。即所有的 Ethereum 地址和 Arweave 地址，都是 everPay 上的 `有效` 账户。

例如：

* 以太坊钱包 0x26361130d5d6E798E9319114643AF8c868412859，通过 MetaMask 连接 everPay 后，在 everPay 上对应的账户 ID 即为 0x26361130d5d6E798E9319114643AF8c868412859。
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 通过 ArConnect 连接 everPay 后，在 everPay 上对应的账户 ID 即为 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo。

:::info 注意
everPay 账户与区块链地址的区别：

* 注意：在 everPay 中转账，收款方无需登录或注册账户，收款地址只要是有效的 Ethereum 地址或者 Arweave 地址。
* everPay 的账户连接钱包后，账户 ID 与连接的钱包地址一致。
* 区块链地址形式的账户 ID，是 everPay 账户的子集，未来我们还会支持互联网账户模型（互联网邮箱账户）。
:::

## 支持的钱包

* 以太坊钱包
  * [imToken](https://token.im/)
  * [MetaMask](https://metamask.io/)
  * [Trust Wallet](https://trustwallet.com/)
  * [Rabby](https://rabby.io/)
  * [WalletConnect](https://walletconnect.org/)
  * etc.
* Arweave 钱包
  * [ArConnect](https://arconnect.io/)
