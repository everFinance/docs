---
sidebar_position: 1
---

# smartAccountAuth

## 功能

智能账户，应用方 EverID 登录方法，传递应用方 `logo` 跳转 `https://beta.everpay.io/auth` 页面，当用户 注册/登录 everPay 后，返回用户 EverID （邮箱地址）。

:::danger
此方法仅适用于浏览器环境
:::

## 参数

```ts
everpay.smartAccountAuth(logo: string):Promise<string>
```

## 返回

string

## 示例

```ts
const account = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
console.log('account', account)

/* 示例返回
'test@gmail.com'
```
