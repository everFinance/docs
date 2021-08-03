---
sidebar_position: 1
---

# Brief Description

everPay is a cross-chain token payment protocol that provides real-time and inexpensive token payment capabilities for users and merchants. The protocol is based on the stored computing paradigm and is transparent, trustworthy, efficient and fast. The protocol has no entry requirements and any developer or merchant can integrate everPay protocol via API.

Individual users can use [everpay.io](https://everpay.io) to access everPay UI for easy and fast blockchain token payments. Developers can quickly integrate the everPay protocol using the SDK.

All transactions are done by off-chain smart contracts and all transaction records are stored on Arweave, which can be downloaded and verified by anyone. For more information, see: [Stored Computing Paradigm for more information](../refrence/storage-based-computation-paradigm).

EverPay currently supports the following chains: Ethereum and Arweave, and regular users can top up their ETH and ERC20 tokens on Ethereum to everPay to experience real-time payment settlement. You can also top up AR from Arweave to everPay for payment settlement, or even cross-chain AR to Ethereum to generate Wrapped AR (WAR).

## Locked Position Address

The assets of everPay correspond 1:1 to the assets on the chain, and we use multi-signature contracts to lock the assets on Ethereum and threshold signature technology to lock the assets on Arweave.

| Blockchain | Locked Position Address                  |
| -------- | ------------------------------------------ |
| Ethereum | [0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543](https://etherscan.io/address/0x38741a69785e84399fcf7c5ad61d572f7ecb1dab) |
| Arweave  | [dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys](https://viewblock.io/arweave/address/dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys)|

## Supported tokens list

The tokens currently supported on everPay includes:

| Token Name | Contract Address                         | Supported Chains          |
| -------- | ------------------------------------------ | ----------------- |
| (W)AR    | [0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543](https://etherscan.io/address/0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543) | arweave, ethereum |
| ETH      | /                                          | ethereum          |
| WBTC     | [0x2260fac5e5542a773aa44fbcfedf7c193bc2c599](https://etherscan.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599) | ethereum          |
| USDT     | [0xdac17f958d2ee523a2206206994597c13d831ec7](https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7) | ethereum          |
| USDC     | [0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48](https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) | ethereum          |
| DAI      | [0x6b175474e89094c44da98b954eedeac495271d0f](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f) | ethereum          |
| UNI      | [0x1f9840a85d5af5bf1d1762f925bdaddc4201f984](https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984) | ethereum          |

Token details can be found at [info](../../sdk/server-api/basic-api/info) interface.