---
sidebar_position: 1
---

# System Overview

## Content Summary

everPay 是基于存储计算范式实现的跨链支付结算协议，任何开发者或商户都可以通过 API 调用 everPay 实现代币支付结算。

everPay 通过将所有 everPay 交易记录存储至 Arweave 区块链，具备透明可信，实时交易，快速结算的特性。

使用 everPay，普通用户可以将 Ethereum 上的 ETH，ERC20 代币充值到 everPay，体验实时的支付结算。

everPay 目前支持的链包括：Ethereum 和 Arweave。


## 锁仓地址
| 区块链 | 锁仓地址                                   |
| -------- | ------------------------------------------ |
| Ethereum | [0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543](https://etherscan.io/address/0x38741a69785e84399fcf7c5ad61d572f7ecb1dab) |
| Arweave  | [dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys](https://viewblock.io/arweave/address/dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys)|

## 支持代币列表

| 代币名称 | 合约地址                                   | 支持的链          |
| -------- | ------------------------------------------ | ----------------- |
| (W)AR    | [0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543](https://etherscan.io/address/0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543) | arweave, ethereum |
| ETH      | /                                          | ethereum          |
| WBTC     | [0x2260fac5e5542a773aa44fbcfedf7c193bc2c599](https://etherscan.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599) | ethereum          |
| USDT     | [0xdac17f958d2ee523a2206206994597c13d831ec7](https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7) | ethereum          |
| USDC     | [0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48](https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) | ethereum          |
| DAI      | [0x6b175474e89094c44da98b954eedeac495271d0f](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f) | ethereum          |
| UNI      | [0x1f9840a85d5af5bf1d1762f925bdaddc4201f984](https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984) | ethereum          |

代币详细信息可以通过 [info](../../sdk/server-api/basic-api/info) 接口获得。

<!-- 本教程详细介绍 everPay 实现机制，以及充值、提现、转账具体的细节，开发者可以通过本教程对 everPay 有一个完整且清晰的认识，方便进行 everPay 的集成。 -->