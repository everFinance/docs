---
sidebar_position: 4
---

# isSmartAccount

## Configuration Item Functions

This configuration item is used to operate an account in the everPay `smart account model` via webauthn for that account:

- Top-up: **Top-ups are not supported for smart accounts**.
- Transfer: jump to the `https://beta.everpay.io/sign` page, pass the signature parameter and complete the transfer operation.
- Withdrawal: Jump to the `https://beta.everpay.io/sign` page, pass the signature parameter and complete the withdrawal operation.

## Configuration item type

boolean

## How to Configure

```ts
const authResult = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
const everpay = new Everpay({
  account: authResult.account,
  isSmartAccount: true
})
```

:::danger
Smart account modelling is only available for browser environments.
:::
