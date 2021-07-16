---
sidebar_position: 5
---

# 交易记录

everPay 交易记录为 everPay 后端返回，在原有 [everPay Tx](./everpay-tx) 的基础之上，新增了如下字段：


|字段|描述|
|---|---|
|id|当该笔 everPay Tx 被记录到 arweave 区块链上后，此 `id` 对应该笔记录在 arweave 上的交易 hash；如该笔 everPay Tx 未被记录到 arweave 区块链上，`id` 为空字符串|
|everHash|每笔 everPay Tx 都对应一个唯一的 `everHash`，`everHash` 生成可见 [everPay Tx](./everpay-tx#everhash)|
|timestamp|everPay 服务器接收到 everPay Tx 的 unix milliseconds，unix 毫秒时间戳|
|targetChainTxHash|充值、提现时，对应的区块链 `txHash`；如提现未完成或是 everPay 转账交易，此 `targetChainTxHash` 为空字符串|