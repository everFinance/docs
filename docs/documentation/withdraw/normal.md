---
sidebar_position: 6
---
# Normal Withdraw

## Introduction
Withdraw is the operation of withdrawing the active balance from everPay account to the native chain.

## Generate everPayTx for everPay withdrawal transactions
See: [everPay 交易](./everpay-tx)

## Send everPayTx to everPay server
See: [everpay server tx API](./server-api/operation-api/tx). The everPay server receives the `everPayTx`, verifies the cryptographic signature, and stores the `everPayTx` on the arweave blockchain.
## everPay multi-signature wallet transfer to user's withdrawal wallet address
After everPay server confirms that the `everPayTx` is stored on the arweave blockchain, it transfers token to the user's withdrawal wallet address via the multi-signature wallet.