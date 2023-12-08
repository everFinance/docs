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

* [/info](./SDK/everpay-js/basic-api/info.md)
* [/balances](./SDK/everpay-js/basic-api/balances.md)
* [/balance](./SDK/everpay-js/basic-api/balance.md)
* [/fees](./SDK/everpay-js/basic-api/fees.md)
* [/fee](./SDK/everpay-js/basic-api/fee.md)
* [/txs](./SDK/everpay-js/basic-api/txs.md)
* [/txsByAccount](./SDK/everpay-js/basic-api/txsByAccount.md)
* [/txsByHash](./SDK/everpay-js/basic-api/txByHash.md)
* [/mintedTxByChainTxHash](./SDK/everpay-js/basic-api/mintedTxByChainTxHash.md)

#### 工具类

* [/smartAccountAuth](./SDK/everpay-js/tool-api/smartAccountAuth.md)
* [/getEverpayTxWithoutSig](./SDK/everpay-js/tool-api/getEverpayTxWithoutSig.md)
* [/getEverpayTxMessage](./SDK/everpay-js/tool-api/getEverpayTxMessage.md)
* [/getBundleData](./SDK/everpay-js/tool-api/getBundleData.md)

#### 操作类

* [/deposit](./SDK/everpay-js/operation-api/deposit.md)
* [/transfer](./SDK/everpay-js/operation-api/transfer.md)
* [/withdraw](./SDK/everpay-js/operation-api/withdraw.md)
* [signBundleData](./SDK/everpay-js/operation-api/signBundleData.md)
* [bundle](./SDK/everpay-js/operation-api/bundle.md)
* [sendEverpayTx](./SDK/everpay-js/operation-api/sendEverpayTx.md)

## 延伸

* [基于存储的计算范式](./refrence/storage-based-computation-paradigm.md)
* [共识变迁](./refrence/consensus.md)
