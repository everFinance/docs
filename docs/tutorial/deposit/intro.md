---
sidebar_position: 1
---

# 介绍

每个区块链钱包（当前支持 Ethereum、Arweave 区块链）在 everPay 上，都对应一个 everPay 账户，everPay 账户名与 该钱包在对应区块链的钱包地址一致。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 在 everPay 上对应的账户名即为 0x26361130d5d6E798E9319114643AF8c868412859
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 在 everPay 上对应的账户名即为 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo

充值的行为，即向 everPay 对应的区块链 多签合约 / 门限签名管理的钱包进行区块链转账。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 给 everPay 在 Ethereum 上的多签合约转账 0.1 USDT，everPay 的后端服务监测到该笔入账，并等待6个区块确认，即会在 everPay 上，标记此 0x26361130d5d6E798E9319114643AF8c868412859 everPay 账户 资产增加 0.1 USDT
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 给 everPay 在 Arweave 管理的门限签名钱包地址转账 0.1 AR，everPay 的后端服务监测到该笔入账，并等待15个区块确认，即会在 everPay 上，标记此 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo everPay 账户 资产增加 0.1 AR