---
sidebar_position: 3
---

# Catalogue

## System Overview

* [Account Model](./dive/account-model.md)
* [Transaction](./dive/transaction.md)
* [Deposit](./dive/deposit.md)
* [Transfer](./dive/transfer.md)
* [Withdraw](./dive/withdraw.md)
* [Bundle](./dive/bundle.md)

## [Server API](./server-api/intro.md)

* everPay backend service, which provides access to everPay basic information and other functions through everPay Server.

#### Basic Query API

* GET [/info](./server-api/basic-api/info.md)
* GET [/balances/{account}](./server-api/basic-api/balances.md)
* GET [/balance/{tag}/{account}](./server-api/basic-api/balance.md)
* GET [/fees](./server-api/basic-api/fees.md)
* GET [/fee/{tag}](./server-api/basic-api/fee.md)
* GET [/txs?page&tokenTag&action](./server-api/basic-api/txs.md)
* GET [/txsByAccount/{account}?page&tokenTag&action](./server-api/basic-api/txsByAccount.md)
* GET [/txsByHash/{everHash}](./server-api/basic-api/txByHash.md)
* GET [/mintedTxByChainTxHash/{chainTxHash}](./server-api/basic-api/mintedTxByChainTxHash.md)

#### Operation API

* POST [/tx](./server-api/operation-api/tx.md)

## [SDK](./SDK/everpay-js.md)

* 方便开发者使用 nodeJS、web 端来进行 everPay 集成，来进行 everPay 的支付等。

#### Basic Query API

* [/info](./SDK/everpay-js/basic-api/info)
* [/balances](./SDK/everpay-js/basic-api/balances)
* [/balance](./SDK/everpay-js/basic-api/balance)
* [/fees](./SDK/everpay-js/basic-api/fees)
* [/fee](./SDK/everpay-js/basic-api/fee)
* [/txs](./SDK/everpay-js/basic-api/txs)
* [/txsByAccount](./SDK/everpay-js/basic-api/txsByAccount)
* [/txsByHash](./SDK/everpay-js/basic-api/txByHash)
* [/mintedTxByChainTxHash](./SDK/everpay-js/basic-api/mintedTxByChainTxHash)

#### Tools API

* [/smartAccountAuth](./SDK/everpay-js/tool-api/smartAccountAuth)
* [/getEverpayTxWithoutSig](./SDK/everpay-js/tool-api/getEverpayTxWithoutSig)
* [/getEverpayTxMessage](./SDK/everpay-js/tool-api/getEverpayTxMessage)
* [/getBundleData](./SDK/everpay-js/tool-api/getBundleData)
* [/genEverId](./SDK/everpay-js/tool-api/genEverId)
* [/hashMessage](./SDK/everpay-js/tool-api/hashMessage)
* [/verifyMessage](./SDK/everpay-js/tool-api/verifyMessage)

#### Operation API

* [/deposit](./SDK/everpay-js/operation-api/deposit)
* [/transfer](./SDK/everpay-js/operation-api/transfer)
* [/withdraw](./SDK/everpay-js/operation-api/withdraw)
* [/signBundleData](./SDK/everpay-js/operation-api/signBundleData)
* [/bundle](./SDK/everpay-js/operation-api/bundle)
* [/sendEverpayTx](./SDK/everpay-js/operation-api/sendEverpayTx)
* [/signMessage](./SDK/everpay-js/operation-api/signMessage)

## Refrence

* [Storage Based Computation Paradigm](./refrence/storage-based-computation-paradigm.md)
* [Consensus change](./refrence/consensus.md)
