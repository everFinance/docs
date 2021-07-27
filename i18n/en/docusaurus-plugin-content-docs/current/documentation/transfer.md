---
sidebar_position: 5
---

# Transfer

## Introduction

A transfer is a transfer that occurs between two everPay accounts. Any two everPay accounts can transfer funds between them, even transferring assets from an Ethereum address to an Arweave address.

everPay ensures the security of transfers through blockchain cryptographic signature verification.

## Generate everPayTx for everPay transfer transactions
See: [everPay 交易](./everpay-tx)

## Send everPayTx to everPay server
See: [everpay server tx API](./server-api/operation-api/tx), everPay server stores the `everPayTx` on the arweave blockchain after receiving the `everPayTx`, verified by cryptographic signature, and the balance is updated in real time.

## Account balance update
via the [everpay server balances API](./server-api/basic-api/balances)  to get the asset information on everPay for the wallet's corresponding everPay account. Real-time asset updates