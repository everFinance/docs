---
sidebar_position: 1
---

# Introduction

Based on the `account`,`isSmartAccount`, `ethConnectedSigner`, `arJWK` parameters passed when the Everpay instance is created,

* When do depositing, call the corresponding (plugin) wallet/webauthn transfer function to deposit to the everPay account. (**Smart accounts do not support deposit**)
* When do transfering,
  * Internal build [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
  * Call the corresponding (plugin) wallet/webauthn signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
  * Send the everpay tx to everPay backend server for signature verification
  * The backend server verifies it and updates the user's asset balance. And store the everPay transaction record on the arweave blockchain
* When do withdrawing,
  * When using Normal Withdrawals:
    * Internal build **Normal Withdrawal** [Schema](../../../dive/withdraw#schema)
    * Call the corresponding (plugin) wallet/webauthn signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPays backend server for signature verification
    * The everPay transaction record is stored on the arweave blockchain after the backend server passes the verification
    * Wait for the arweave blockchain to finish storing the everPay transaction record and ensure the correctness of the account
    * Multi-sign wallet/locker address, give the user the withdrawal address and withdraw the corresponding amount (after fees) of tokens
    * For more information, please read [DOCS - System overview - Withdraw](../../../dive/withdraw)
  * When using Quick Withdrawals:
    * Internal build **Quick Withdrawal** [Schema](../../../dive/withdraw#schema-1)
    * Call the corresponding (plugin) wallet/webauthn signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPay backend server for signature verification
    * The market maker account receives assets after the verification by everPay backend server
    * Market maker transfers the corresponding amount (after fees) of asset tokens to the user's withdrawal wallet address via native blockchain transfer
    * For more information, please read [DOCS - System overview - Withdraw - Quick Withdrawal](../../../dive/withdraw#quick-withdrawal)
* When making a bundle transaction,
  * Internal transfers
    * Internal build [BundleData](../types/#bundledata)
    * Call the corresponding (plugin) wallet/webauthn signature function, generate `sig`, assemble [BundleDataWithSigs](../types#bundledatawithsigs)
  * External transfer
    * Internal build [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
    * Call the corresponding (plugin) wallet/webauthn signature function, generate `sig`, assemble [EverpayTx](../types#everpaytx)
    * Send the everpay tx to everPay backend server for signature verification
    * The backend server verifies it and updates the user's asset balance and stores the everPay transaction record on the arweave blockchain



:::caution

* Smart Account Model
  * Must be a browser environment
  * Does not support top-ups
* Blockchain account model
* If you need to call the operation API (everPay deposit, transfer, withdraw), you must pass one of `ethConnectedSigner` or `arJWK` when the Everpay instance is created. The `account` configuration item **must be passed** with the same **wallet address** as the `ethConnectedSigner` or `arJWK` passed
:::
