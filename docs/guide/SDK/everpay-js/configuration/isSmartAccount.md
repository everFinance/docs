---
sidebar_position: 4
---

# isSmartAccount

## 配置项功能

此配置项用于通过 智能账户（webauthn） 来操作 everPay `智能账户模型` 的 账户，对该账户进行：

- 充值：**智能账户不支持充值**。
- 转账：跳转 `https://beta.everpay.io/sign` 页面，传递签名参数，完成转账操作。
- 提现：跳转 `https://beta.everpay.io/sign` 页面，传递签名参数，完成提现操作。

## 配置项类型

boolean

## 如何配置

```ts
const authResult = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
const everpay = new Everpay({
  account: authResult.account,
  isSmartAccount: true
})
```

:::danger
智能账户模型仅适用于浏览器环境
:::
