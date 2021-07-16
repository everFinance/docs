---
sidebar_position: 1
---

# 介绍

everPay 是基于存储计算范式实现的跨链支付结算协议，任何开发者或商户都可以通过 API 调用 everPay 实现代币支付结算。everPay 具备透明可信，实时交易，快速结算的特性。使用 everPay，普通用户可以将 Ethereum 上的 ETH，ERC20 代币充值到 everPay，体验实时的支付结算。

everPay 目前支持的链包括：Ethereum 和 Arweave。

### everPay 支持代币列表：

| 代币名称 | 合约地址                                   | 支持的链          |
| -------- | ------------------------------------------ | ----------------- |
| AR       | 0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543 | arweave，ethereum |
| ETH      | /                                          | ethereum          |
| WBTC     | 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599 | ethereum          |
| USDT     | 0xdac17f958d2ee523a2206206994597c13d831ec7 | ethereum          |
| USDC     | 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 | ethereum          |
| DAI      | 0x6b175474e89094c44da98b954eedeac495271d0f | ethereum          |
| UNI      | 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 | ethereum          |

代币详细信息可以通过 /info 接口获得。

本教程详细介绍 everPay 实现机制，以及充值、提现、转账具体的细节，开发者可以通过本教程对 everPay 有一个完整且清晰的认识，方便进行 everPay 的集成。