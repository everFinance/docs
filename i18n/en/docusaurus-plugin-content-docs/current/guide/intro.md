---
sidebar_position: 1
---

# Introduction

everPay is a cross-chain payment settlement protocol based on the storage based computation paradigm. everPay can be called by any developer or merchant through the API for token payment settlement. everPay is transparent, reliable, real-time transactions, and fast settlement. With everPay, ordinary users can deposit their ETH and ERC20 tokens on Ethereum to everPay and experience real-time payment settlement.

The chains that everPay currently supports include Ethereum and Arweave.

### everPay Support Token List

| Token Symbol | Contract Address                                   | Supported Chains          |
| -------- | ------------------------------------------ | ----------------- |
| AR       | 0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543 | arweave, ethereum |
| ETH      | /                                          | ethereum          |
| WBTC     | 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599 | ethereum          |
| USDT     | 0xdac17f958d2ee523a2206206994597c13d831ec7 | ethereum          |
| USDC     | 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 | ethereum          |
| DAI      | 0x6b175474e89094c44da98b954eedeac495271d0f | ethereum          |
| UNI      | 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 | ethereum          |

Token details can be obtained via the [/info](../documentation/server-api/basic-api/info) interface.

This tutorial provides a detailed introduction to everPay implementation mechanism, as well as the details of deposit, withdrawal and transfer, so that developers can have a complete and clear understanding of everPay and facilitate everPay integration.