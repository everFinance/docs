---
sidebar_position: 3
---

# 目录

## 系统概览

* [账户模型](./dive/account-model.md)
* [交易](./dive/transaction.md)
* [充值](./dive/deposit.md)
* [转账](./dive/transfer.md)
* [提现](./dive/withdraw.md)
* [批量转账](./dive/bundle.md)

## [Server API](./server-api/intro.md)

* everPay 后端服务, 可通过 everPay Server 获取 everPay 基本信息等功能。

#### 基本查询类

* GET [/info](./server-api/basic-api/info.md)
* GET [/balances/{account}](./server-api/basic-api/balances.md)
* GET [/balance/{tag}/{account}](./server-api/basic-api/balance.md)
* GET [/fees](./server-api/basic-api/fees.md)
* GET [/fee/{tag}](./server-api/basic-api/fee.md)
* GET [/txs?page&tokenTag&action](./server-api/basic-api/txs.md)
* GET [/txsByAccount/{account}?page&tokenTag&action](./server-api/basic-api/txsByAccount.md)
* GET [/txsByHash/{everHash}](./server-api/basic-api/txByHash.md)
* GET [/mintedTxByChainTxHash/{chainTxHash}](./server-api/basic-api/mintedTxByChainTxHash.md)

#### 操作类

* POST [/tx](./server-api/operation-api/tx.md)

## [SDK](./SDK/everpay-js.md)

* 方便开发者使用 nodeJS、web 端来进行 everPay 集成，来进行 everPay 的支付等。

#### 基本查询类

* [/info](./SDK/everpay-js/basic-api/info)
* [/balances](./SDK/everpay-js/basic-api/balances)
* [/balance](./SDK/everpay-js/basic-api/balance)
* [/fees](./SDK/everpay-js/basic-api/fees)
* [/fee](./SDK/everpay-js/basic-api/fee)
* [/txs](./SDK/everpay-js/basic-api/txs)
* [/txsByAccount](./SDK/everpay-js/basic-api/txsByAccount)
* [/txsByHash](./SDK/everpay-js/basic-api/txByHash)
* [/mintedTxByChainTxHash](./SDK/everpay-js/basic-api/mintedTxByChainTxHash)

#### 工具类

* [/smartAccountAuth](./SDK/everpay-js/tool-api/smartAccountAuth)
* [/getEverpayTxWithoutSig](./SDK/everpay-js/tool-api/getEverpayTxWithoutSig)
* [/getEverpayTxMessage](./SDK/everpay-js/tool-api/getEverpayTxMessage)
* [/getBundleData](./SDK/everpay-js/tool-api/getBundleData)
* [/genEverId](./SDK/everpay-js/tool-api/genEverId)
* [/hashMessage](./SDK/everpay-js/tool-api/hashMessage)
* [/verifyMessage](./SDK/everpay-js/tool-api/verifyMessage)

#### 操作类

* [/deposit](./SDK/everpay-js/operation-api/deposit)
* [/transfer](./SDK/everpay-js/operation-api/transfer)
* [/withdraw](./SDK/everpay-js/operation-api/withdraw)
* [/signBundleData](./SDK/everpay-js/operation-api/signBundleData)
* [/bundle](./SDK/everpay-js/operation-api/bundle)
* [/sendEverpayTx](./SDK/everpay-js/operation-api/sendEverpayTx)
* [/signMessage](./SDK/everpay-js/operation-api/signMessage)

## 延伸

* [基于存储的计算范式](./refrence/storage-based-computation-paradigm.md)
* [共识变迁](./refrence/consensus.md)
