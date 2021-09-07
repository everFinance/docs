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
  * When using Normal Withdrawal:
    * Internal build **Normal Withdrawal** [Schema](../../../guide/dive/withdraw#schema)
    * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPay backend server for signature verification
    * The everPay transaction record is stored on the arweave blockchain after the backend server passes the verification
    * Wait for the arweave blockchain to finish storing the everPay transaction record and ensure the correctness of the account
    * Multi-sign wallet/locker address, give the user the withdrawal address and withdraw the corresponding amount (after fees) of asset tokens
    * For more information, please read [Guide - Dive - Withdraw](../../../guide/dive/withdraw)
  * When using Quick Withdrawal:
    * Internal build **Quick Withdrawal** [Schema](../../../guide/dive/withdraw#schema-1)
    * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPay backend server for signature verification
    * The market maker account receives assets after the verification by everPay backend server
    * Market maker transfers the corresponding amount (after fees) of asset tokens to the user's withdrawal wallet address via native blockchain transfer
    * For more information, please read [Guide - Dive - Withdraw - Quick Withdrawal](../../../guide/dive/withdraw#quick-withdrawal)
* When make a bundle transaction,
  * Internal transfers
    * Internal build [BundleData](../types/#bundledata)
    * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [BundleDataWithSigs](../types#bundledatawithsigs)
  * External transfer
    * Internal build [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
    * Call the corresponding (plugin) wallet signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPay backend server for signature verification
    * The backend server verifies it and updates the user's asset balance. And store the everPay transaction record on the arweave blockchain



:::caution
* If you need to call the operation API (everPay deposit, transfer, withdraw), you must pass one of `ethConnectedSigner` or `arJWK` when the Everpay instance is created. And the `account` configuration item **must be passed** with the same **wallet address** as the `ethConnectedSigner` or `arJWK` passed
:::