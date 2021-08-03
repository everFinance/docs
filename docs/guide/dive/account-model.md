---
sidebar_position: 2
---

# 账户模型


everPay 账户支持以太坊钱包 或 Arweave 钱包进行连接。

用户通过以太坊钱包或 Arweave 钱包连接后，在 everPay 上的账户，与连接时使用的钱包 “区块链地址” 一致。即，所有的以太坊地址和 Arweave 地址，都是 everPay 上的有效账户。

例如：
* 以太坊钱包 0x26361130d5d6E798E9319114643AF8c868412859，通过 MetaMask 连接 everPay 后，在 everPay 上对应的账户 ID 即为 0x26361130d5d6E798E9319114643AF8c868412859。
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 通过 ArConnect 连接 everPay 后，在 everPay 上对应的账户 ID 即为 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo。

未来，everPay 的账户也会支持互联网邮箱形式的账户模型，尽请期待。

:::info
everPay 账户与区块链地址的区别：

* 注意，在 everPay 中转账，收款方无需提前登录注册 everPay，只要收款地址是有效的以太坊地址或者 Arweave 地址。
* everPay 的账户通过连接后，账户 ID 与连接的钱包地址一致。
* 未来我们还会支持互联网邮箱形式的账户模型，因此，区块链地址形式的账户 ID，是 everPay 账户的子集。
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