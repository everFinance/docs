---
sidebar_position: 7
---

# 转账

## 介绍
everPay 转账指两个 everPay 账户之间发生的转账行为，任意两个 everPay 账户之间，可转账任意数额 everPay 支持代币资产。

everPay 通过区块链密码学签名验证来确保转账的安全性。

## 生成 everPay 转账交易的 everPayTx
详见：[everPay 交易](./everpay-tx)

## 将 everPayTx 发送至 everPay 服务器
详见：[everpay server tx API](../server-api/operate-api/tx)，everPay 服务器在接收到 `everPayTx` 后，经过密码学签名验证，余额实时更新的同时，将该笔 `everPayTx`存储至 arweave 区块链上。

## 账户余额更新
通过 [everpay server balances API](../server-api/basic-api/balances) 获取钱包对应的 everPay 账户，在everPay 上的资产信息。资产实时更新