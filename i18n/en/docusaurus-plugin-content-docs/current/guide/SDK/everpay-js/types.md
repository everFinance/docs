---
sidebar_position: 8
---

# Types

The following types can be `imported` from everpay-js via typescript

## ChainType

```ts
export enum ChainType {
  ethereum = 'ethereum',
  moon = 'moon',
  arweave = 'arweave',
  conflux = 'conflux',
  bsc = 'bsc',
  platon = 'platon'
}
```

## ArJWK

```ts
export type ArJWK = JWKInterface | 'use_wallet'
```

`JWKInterface` is sourced from [arweave-js JWKInterface](https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/wallet.ts#L7)

## EthereumTransaction

```ts
import { TransactionResponse as EthereumTransaction } from '@ethersproject/abstract-provider'
export { EthereumTransaction }
```

`TransactionResponse` is sourced from [ethers.js TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)

## ArweaveTransaction

```ts
import { TransactionInterface as ArweaveTransaction } from 'arweave/node/lib/transaction'
export { ArweaveTransaction }
```

`TransactionInterface` is sourced from [arweave-js TransactionInterface](https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/transaction.ts#L64)

## Config

`Everpay` constructor configuration items

```ts
export interface Config {
  debug?: boolean
  account?: string
  chainType?: ChainType
  ethConnectedSigner?: Signer
  arJWK?: ArJWK
  isSmartAccount?: boolean
}
```

`Signer` is sourced from [ethers.js Signer](https://docs.ethers.io/v5/api/signer/#Signer)

## CrossChainInfo

```ts
export interface CrossChainInfo {
  targetChainId: string
  targetChainType: ChainType
  targetDecimals: number
  targetTokenId: string
}
```

## Token

```ts
export interface Token {
  tag: string
  id: string
  symbol: string
  decimals: number
  totalSupply: string
  chainID: string
  chainType: ChainType | string
  crossChainInfoList: {
    [propname: string]: CrossChainInfo
  }
}
```

## FeeItem

```ts
export interface FeeItem {
  tokenTag: string
  burnFeeMap: {
    [propname: string]: string
  }
  transferFee: string
  atomicBundleFee: string
  updatedAt: string
}
```

## EverpayInfo

```ts
export interface EverpayInfo {
  ethLocker: string
  arLocker: string
  ethChainID: string
  feeRecipient: string
  owner: string
  everRootHash: string
  rootHash: string
  tokenList: Token[]
}
```

## ExpressInfo

```ts
interface ExpressTokenItem {
  tokenTag: string
  withdrawFee: string
  walletBalance: string
}
export interface ExpressInfo {
  address: string
  withdrawTimeCost: number
  tokens: ExpressTokenItem[]
}
```

## EverpayAction

```ts
export enum EverpayAction {
  transfer = 'transfer',
  withdraw = 'burn',
  bundle = 'bundle'
}
```

## InternalTransferItem

```ts
export interface InternalTransferItem {
  tag: string
  from: string
  to: string
  amount: string
}
```

## BundleItem

```ts
export interface BundleItem {
  amount: string
  chainID: string
  from: string
  to: string
  tag: string
}
```

## BundleData

```ts
export interface BundleData {
  items: BundleItem[]
  expiration: number
  salt: string
  version: string
}
```

## BundleDataWithSigs

```ts
export interface BundleDataWithSigs extends BundleData {
  sigs: {
    [account: string]: string
  }
}
```

## EverpayTxWithoutSig

```ts
export interface EverpayTxWithoutSig {
  tokenSymbol: string
  action: EverpayAction
  from: string
  to: string
  amount: string
  fee: string
  feeRecipient: string
  nonce: string
  tokenID: string
  chainType: ChainType | string
  chainID: string
  data: string
  version: string
}
```

## EverpayTx

```ts
export interface EverpayTx extends EverpayTxWithoutSig {
  sig: string
}
```

## EverpayActionWithDeposit

```ts
export enum EverpayActionWithDeposit {
  transfer = 'transfer',
  withdraw = 'burn',
  deposit = 'mint',
  bundle = 'bundle'
}
```

## EverpayTransactionStatus

```ts
enum EverpayTransactionStatus {
  // deposit(mint) transaction, after the corresponding number of blocks confirm, status will be confirmed
  // withdraw(burn) transaction, the backend receives the everPay Tx and status will be confirmed first
  confirmed = 'confirmed',
  // transaction status will be packaged only after everPay Tx storaged on arweave blockchain
  packaged = 'packaged'
}
```

## EverpayTransaction

```ts
export interface EverpayTransaction {
  id: string // an arweave tx, which stored the everPay Tx information on the arweave blockchain
  nonce: number
  action: EverpayActionWithDeposit
  from: string
  to: string
  amount: string
  data: string
  fee: string
  feeRecipient: string
  sig: string
  everHash: string
  status: EverpayTransactionStatus
  timestamp: number
  targetChainTxHash?: string
  express: {
    chainTxHash: string
    withdrawFee: string
    refundEverHash: string
    err: string
  }
}
```

## TxsResult

```ts
export interface TxsResult {
  accid?: string
  currentPage: number
  totalPages: number
  txs: EverpayTransaction[]
}
```

## BalanceParams

```ts
export interface BalanceParams {
  tag: string
  account?: string
}
```

## BalancesParams

```ts
export interface BalancesParams {
  account?: string
}
```

## BalanceItem

```ts
export interface BalanceItem {
  chainType: string
  symbol: string
  tag: string
  balance: string
  address: string
}
```

## DepositParams

```ts
export interface DepositParams {
  tag: string
  amount: string
}
```

## TransferParams

```ts
export interface TransferParams {
  tag: string
  amount: string
  data?: Record<string, unknown>
  to: string
}
```

## WithdrawParams

```ts
export interface WithdrawParams {
  chainType: ChainType
  tag: string
  amount: string
  fee?: string
  quickMode?: boolean
  data?: Record<string, unknown>
  to?: string
}
```

## BundleParams

```ts
export interface BundleParams {
  tag: string
  amount: string
  data: {
    bundle: BundleDataWithSigs
  }
  to: string
}
```

## TxsParams

```ts
export interface TxsParams {
  page?: number
  tag?: string
  action?: EverpayActionWithDeposit
  withoutAction?: EverpayActionWithDeposit
}
```

## TxsByAccountParams

```ts
export interface TxsByAccountParams {
  page?: number
  account?: string
  tag?: string
  action?: EverpayActionWithDeposit
  withoutAction?: EverpayActionWithDeposit
}
```

## SendEverpayTxResult

```ts
// Note: This type does not have an export
interface PostEverpayTxResult {
  status: string
}
export interface SendEverpayTxResult extends PostEverpayTxResult {
  everpayTx: EverpayTx
  everHash: string
}
```

## SignMessageResult

```ts
export interface SignMessageResult {
  message: string
  sig: string
}
```

## VerifyMessageParams

```ts
export interface VerifyMessageParams {
  account: string
  type: 'register' | 'sign'
  message: string
  sig: string
}
```

## VerifyMessageResult

```ts
export interface VerifyMessageResult {
  publicId: string
  public: string
}
```

## SmartAccountAuthResult

```ts
export interface SmartAccountAuthResult {
  account: string
  publicId: string
  public: string
  type: 'sign' | 'register'
  message: string
  sig: string
}
```
