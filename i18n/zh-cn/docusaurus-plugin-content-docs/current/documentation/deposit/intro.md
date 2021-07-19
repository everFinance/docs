---
sidebar_position: 1
---

# 介绍

不同类型区块链的钱包地址在 everPay 上，都对应一个 everPay 账户，everPay 账户 ID 与该钱包在对应区块链的钱包地址一致。用户无需额外在 everPay 进行账户注册，目前 everPay 已支持所有 Ethereum 和 Arweave 的有效账户。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 在 everPay 上对应的账户 ID 即为 0x26361130d5d6E798E9319114643AF8c868412859
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 在 everPay 上对应的账户 ID 即为 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo

充值的行为，即向 everPay 对应的区块链 多签合约 / 门限签名管理的钱包进行区块链转账。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 给 everPay 在 Ethereum 上的多签合约转账 0.1 USDT，everPay 的后端服务监测到该笔入账，并等待6个区块确认，即会在 everPay 上，标记此 0x26361130d5d6E798E9319114643AF8c868412859 everPay 账户 资产增加 0.1 USDT
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 给 everPay 在 Arweave 管理的门限签名钱包地址转账 0.1 AR，everPay 的后端服务监测到该笔入账，并等待15个区块确认，即会在 everPay 上，标记此 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo everPay 账户 资产增加 0.1 AR