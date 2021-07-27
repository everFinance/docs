---
sidebar_position: 1
---

# Introduction

The wallet addresses of different types of blockchains on everPay correspond to one everPay account. everPay account ID is the same as the wallet address of that wallet on the corresponding blockchain. Users do not need to register an additional account with everPay. everPay currently supports all valid accounts of Ethereum and Arweave.

For example
* Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 has the same account ID on everPay as 0x26361130d5d6E798E9319114643AF8c868412859
* Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo on everPay, the corresponding account ID is 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHX

The act of deposit, i.e. blockchain transfer to everPay's corresponding blockchain multi-signature contract / threshold signature managed wallet.

Example.
* Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 transfers 0.1 USDT to everPay's multisignature contract on Ethereum, everPay's backend service monitors the entry and waits for 6 blocks to confirm it, i.e. it will mark, on everPay This 0x26361130d5d6E798E9319114643AF8c868412859 everPay account assets increased by 0.1 USDT
* Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo transfers 0.1 AR to everPay's threshold signature wallet address managed by Arweave, everPay's backend service monitors the entry and waits for 15 block confirmations, i.e. it will mark this 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo on everPay The 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo everPay account assets will be increased by 0.1 AR