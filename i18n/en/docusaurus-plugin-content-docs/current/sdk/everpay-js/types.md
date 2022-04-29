---
sidebar_position: 6
---

# Types

The following types can be `imported` from everpay-js via typescript

## ChainType

```ts
export enum ChainType {
  ethereum = 'ethereum',
  arweave = 'arweave'
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

## SwapInfo

```ts
export interface SwapInfo {
  fee: string
  address: string
  tokenList: string[]
}
```

## InternalTransferItem

```ts
export interface InternalTransferItem {
  symbol: string
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
  symbol: string
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
  balance: string
  address: string
}
```

## DepositParams

```ts
export interface DepositParams {
  symbol: string
  amount: string
}
```

## TransferParams

```ts
export interface TransferParams {
  symbol: string
  amount: string
  data?: Record<string, unknown>
  to: string
}
```

## WithdrawParams

```ts
export interface WithdrawParams {
  chainType: ChainType
  symbol: string
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
  symbol: string
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
  symbol?: string
  action?: EverpayActionWithDeposit
}
```

## TxsByAccountParams

```ts
export interface TxsByAccountParams {
  page?: number
  account?: string
  symbol?: string
  action?: EverpayActionWithDeposit
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

## SwapPriceParams

```ts
export interface SwapPriceParams {
  tokenIn: string
  tokenOut: string
  tokenInAmount?: string
  tokenOutAmount?: string
}
```

## SwapOrder

```ts
export interface SwapOrder {
  tokenIn: string
  tokenOut: string
  tokenInAmount: string
  tokenOutAmount: string
}
```

## SwapPriceResult

```ts
export interface SwapPriceResult extends SwapOrder {
  spreadPercent: string
  indicativePrice: string
}
```
