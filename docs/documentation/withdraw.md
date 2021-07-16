---
sidebar_position: 6
---
# 提现

## 介绍
提现指将 everPay 账户中的有效余额，提现到原生链的操作。

## 生成 everPay 提现交易的 everPayTx
详见：[everPay 交易](./everpay-tx)

## 将 everPayTx 发送至 everPay 服务器
详见：[everpay server tx API](../server-api/operation-api/tx)，everPay 服务器在接收到 `everPayTx` 后，经过密码学签名验证，将该笔 `everPayTx`存储至 arweave 区块链上。

## everPay 多签钱包给用户提现钱包地址转账
everPay 服务器在确认该笔 `everPayTx` 存储至 arweave 区块链上之后，通过多签钱包，给用户提现钱包地址转账。