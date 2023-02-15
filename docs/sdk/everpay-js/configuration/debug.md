---
sidebar_position: 2
---

# debug

## 配置项功能

用于 测试、正式 环境选择。 
* 默认: `debug: false`

## 测试环境

everpay-js 支持使用测试环境进行开发调试，只需要将 `debug` 参数设置为 `true`，即可使用 everPay 测试环境。

```js
const everpay = new Everpay({
  debug: true
})
```

:::caution 测试环境
1. 当使用 everPay 测试环境，如开发者使用 Ethereum 账户连接，充值、提现的API 调用，会使用 Ethereum Goerli 网络进行。
2. 因 Arweave 没有测试网络，即使使用 everPay 测试环境，everPay 充值、提现的API 调用，Arweave 仍然使用主网进行。
:::

## 正式环境

当需要使用 everPay 正式环境时，只需要将 `debug` 参数设置为 `false`，或不传递，即可使用 everPay 正式环境。

```js
const everpay = new Everpay({
  debug: false
})

// 或
const everpay = new Everpay({})

// 或
const everpay = new Everpay()
```

:::caution 正式环境
当使用 everPay 正式环境，如开发者使用 Ethereum 账户连接，充值、提现的API 调用，会使用 Ethereum mainnet 网络进行。
:::