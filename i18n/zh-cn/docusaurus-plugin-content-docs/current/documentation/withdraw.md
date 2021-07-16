---
sidebar_position: 6
---
# 提现

## 介绍
everPay 提现指 everPay 账户通过连接的钱包（MetaMask、imToken、ArConnect等）经过提现操作，密码学签名验证后，将该账户在 everPay 上的资产，提现至 资产支持的区块链地址上。

## 生成 everPay 提现交易的 everPayTx
详见：[everPay 交易](./everpay-tx)

## 将 everPayTx 发送至 everPay 服务器
详见：[everpay server tx API](../server-api/operation-api/tx)，everPay 服务器在接收到 `everPayTx` 后，经过密码学签名验证，将该笔 `everPayTx`存储至 arweave 区块链上。

## everPay 多签钱包给用户提现钱包地址转账
everPay 服务器在确认该笔 `everPayTx` 存储至 arweave 区块链上之后，通过多签钱包，给用户提现钱包地址转账。