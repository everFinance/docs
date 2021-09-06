---
sidebar_position: 8
---

# 兑换

## 介绍

everPay Swap 兑换由生态合作伙伴 [Goblin](https://goblinpool.com/) 团队基于 everPay [批量转账 Schema](./bundle) 开发。借助了 everPay 批量转账实时到账的能力，在去中心化的区块链应用上，实现了中心化交易所兑换的体验。

## 特点
* 借助 everPay 批量转账实时到账的能力，兑换实时完成
* 使用 uniSwap v3 算法，价格更优
* 兑换时即锁定价格，所见即所得，没有矿工可提取价值 —— [Miner Extractable Value (MEV)](https://www.ethereum.cn/Thinking/MEV)

## 实现方式
1. 用户
    1. 通过请求 [swapInfo](../../sdk/server-api/basic-api/swapInfo) 接口，获取 everPay Swap 做市商 everPay 账户 ID、支持代币列表
    2. 通过请求 [swapPrice](../../sdk/server-api/basic-api/swapPrice) 接口，获取兑换币种的汇率
    3. 根据做市商 everPay 账户 ID、数量、汇率，生成 [`bundleData`](./bundle#bundledata-信息)，对应两笔内部转账交易。一笔是用户转出给做市商 everPay 账户的内部转账，另一笔是做市商 everPay 账户转出给用户的内部转账。
    4. 通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，执行后续签名处理
    5. 将 `bundleData` 和 `sigs` 组装，通过 [swapOrder](../../sdk/server-api/operation-api/swapOrder) 请求提交给 everPay Swap 做市商
2. everPay Swap 做市商
    1. 接收到 `bundle` 数据后，校验数量、汇率等
    2. 通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，执行后续签名处理
    3. 将 `bundleData` 和 `sigs`（包括开发者提交的签名） 组装成 `data`
    4. 生成 everPay [批量转账交易](./bundle) 提交至 everPay 服务器
3. everPay 服务器接收到 everPay Swap 做市商提交的批量转账交易，验证内部转账的签名、外部转账的签名，验证通过后，两笔内部转账交易伴随外部转账交易实时完成，资产实时到账