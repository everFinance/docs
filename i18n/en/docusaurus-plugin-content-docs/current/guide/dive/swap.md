---
sidebar_position: 8
---

# Swap

## Introduction

everPay Swap is developed by ecological partner [Goblin](https://goblinpool.com/) team based on everPay [Bundle Schema](./bundle). With the ability of everPay bundle transfers to arrive in real time, it enables the experience of centralized exchange on decentralized blockchain applications.

## Features
* Exchange is done in real time with everPay's ability to bundle transfer in real time
* Better prices with AMM algorithm
* Price locked at the time of exchange, WYSIWYG, no miner extractable value -- [Miner Extractable Value (MEV)](https://coinmarketcap.com/alexandria/glossary/miner-extractable-value-mev)

## Implementation
1. User
    1. by requesting [swapInfo](../../sdk/server-api/basic-api/swapInfo) interface to get everPay Swap market maker everPay account ID, list of supported tokens
    2. by requesting [swapPrice](../../sdk/server-api/basic-api/swapPrice) interface to get the exchange rate of the exchanged currency
    3. generate [`bundleData`](./bundle#bundledata) based on market maker everPay account ID, quantity and exchange rate. Which corresponds to two internal transfer transactions. One is an internal transfer from the user to the market maker everPay account and the other is an internal transfer from the market maker everPay account to the user.
    4. convert `bundleData` to `messageData` with `const messageData = JSON.stringfiy(bundleData)` and perform subsequent signature processing
    5. Assemble `bundleData` and `sigs` and pass [swapOrder](../../sdk/server-api/operation-api/swapOrder) request to everPay Swap market maker
2. everPay Swap Market Maker
    1. receive the `bundle` data and check the quantity, exchange rate, etc.
    2. convert `bundleData` to `messageData` by `const messageData = JSON.stringfiy(bundleData)` and perform subsequent signature processing
    3. assemble `bundleData` and `sigs` (including the signature submitted by the developer) into `data`
    4. Generate everPay [bundle transaction](./bundle) to everPay server
3. everPay server receives the bundle transaction submitted by everPay Swap Market Maker, verifies the signatures of internal transfers and the signature of external transfer, and after the verification is passed, the two internal transfer transactions are completed in real time along with the external transfer transaction, and the assets are credited in real time