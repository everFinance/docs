---
sidebar_position: 1
---

# Introduction

everPay Server operation class API,

* `tx` API. All everPay transactions will generate everPay Tx and send to `tx` API via `POST` request, which will be verified by everPay backend service.
* `swapOrder` API. Submit internal transfers signature of the `bundle` transaction to the everPay Swap market maker server to make swap compelete