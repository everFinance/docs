---
sidebar_position: 1
---

# 介绍

everPay Server 操作类API，包括：
* `tx` API，所有 everPay 的交易，都会生成 everPay Tx 并通过 `POST` 请求发送至 `tx` API，经过 everPay 后端服务验证
* `swapOrder` API，通过将 everPay 批量转账 `bundle` 交易的内部转账交易签名，提交至 everPay Swap 做市商服务器后，完成兑换