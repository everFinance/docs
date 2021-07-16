---
sidebar_position: 1
---

# Introduction

Based on the `account`, `ethConnectedSigner`, `arJWK` parameters passed when the Everpay instance is created,

* When do depositing, call the corresponding (plugin) wallet transfer function to deposit to the everPay account
* When do transfering,
  * Internal build [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
  * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
  * Send the everpay tx to everPay backend server for signature verification
  * The backend server verifies it and updates the user's asset balance. And store the everPay transaction record on the arweave blockchain
* When do withdrawing,
  * Internal build [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
  * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
  * Send the everpay tx to everPay backend server for signature verification
  * The everPay transaction record is stored on the arweave blockchain after the backend server passes the verification
  * Wait for the arweave blockchain to finish storing the everPay transaction record and ensure the correctness of the account
  * Multi-sign wallet/locker address, give the user the withdrawal address and withdraw the corresponding amount (after fees) of asset tokens

:::caution
* If you need to call the operation API (everPay deposit, transfer, withdraw), you must pass one of `ethConnectedSigner` or `arJWK` when the Everpay instance is created. And the `account` configuration item **must be passed** with the same **wallet address** as the `ethConnectedSigner` or `arJWK` passed
:::