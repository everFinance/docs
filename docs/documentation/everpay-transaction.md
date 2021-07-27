---
sidebar_position: 3
---

# 交易记录

everPay 交易记录为 everPay 后端返回，在原有 [everPay Tx](./everpay-tx) 的基础之上，新增了如下字段：


|字段|描述|
|---|---|
|id|当该笔 everPay Tx 被记录到 arweave 区块链上后，此 `id` 对应该笔记录在 arweave 上的交易 hash；如该笔 everPay Tx 未被记录到 arweave 区块链上，`id` 为空字符串|
|everHash|每笔 everPay Tx 都对应一个唯一的 `everHash`，`everHash` 生成可见 [everPay Tx](./everpay-tx#everhash)|
|timestamp|everPay 服务器接收到 everPay Tx 的 unix milliseconds，unix 毫秒时间戳|
|targetChainTxHash|充值、提现（非快速提现）时，对应的区块链 `txHash`；如提现（非快速提现）未完成或是 everPay 转账交易，此 `targetChainTxHash` 为空字符串|
|express|为快速提现增加的字段，`express: {"chainTxHash": "","withdrawFee": "","refundEverHash": "","err": ""}`。 其中 `chainTxHash` 代表快速提现成功后，打包的 区块链 `txHash`；`withdrawFee` 代表实际收取的手续费；`refundEverHash` 代表快速提现失败后，做市商进行退款的 everPay 交易 `everHash`；`err` 代表快速提现失败原因|