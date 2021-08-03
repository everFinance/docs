---
sidebar_position: 2
---

# debug

## Configuration item function

Used for development and production environment selection.

## Development environment

everpay-js supports using development environment for development debugging, just set `debug` parameter to `true` and you can use everPay development environment.

```js
const everpay = new Everpay({
  debug: true
})
```

:::caution Development environment
1. When using everPay development environment, if the developer connects with Ethereum account, API calls for deposit and withdraw will be made using Ethereum Kovan network.
2. Since Arweave does not have a test network, even when using everPay development environment, the API calls for everPay deposit and withdraw will still be made by Arweave using the main network.
:::

## Production environment

When you need to use everPay production environment, just set the `debug` parameter to `false` or don't pass it, then it will be production environment.

```js
const everpay = new Everpay({
  debug: false
})

// 或
const everpay = new Everpay({})

// 或
const everpay = new Everpay()
```

:::caution production environment
When using everPay production environment, such as developers using Ethereum account connection, API calls for deposit and withdraw will be made using Ethereum mainnet network.
:::