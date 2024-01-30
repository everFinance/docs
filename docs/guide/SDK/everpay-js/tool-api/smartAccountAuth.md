---
sidebar_position: 1
---

# smartAccountAuth

## 功能

智能账户，应用方 EverID 登录方法，传递应用方 `logo` 跳转 `https://beta.everpay.io/auth` 页面，当用户 注册/登录 everPay 后，返回用户信息。

:::danger
此方法仅适用于浏览器环境
:::

## 参数

```ts
everpay.smartAccountAuth(logo: string): Promise<SmartAccountAuthResult>
```

## 返回

```ts
export interface SmartAccountAuthResult {
  account: string
  publicId: string
  public: string
  type: 'sign' | 'register'
  message: string
  sig: string
}
```

## 示例

```ts
const authResult = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
console.log('authResult', authResult)

/* 示例返回
{
  // 账户邮箱
  account: "dvdsbjo8u1@163.com",
  // 签名信息
  message: "0x69c96d89610d732a126a5652118e49d853705d2fc17642cdcea705e2a44e2f4b",
  // 该邮箱登录 everPay 时使用的 webauthn ID 对应的公钥
  public: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19",
  // 该邮箱登录 everPay 时使用的 webauthn ID
  publicId: "311qYDHBe18SHKU-HR1XPrhPfvn19Cr5EV0SQYn_lqY",
  // 签名内容
  sig: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJyYXdJZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJjbGllbnREYXRhSlNPTiI6ImV5SjBlWEJsSWpvaWQyVmlZWFYwYUc0dVoyVjBJaXdpWTJoaGJHeGxibWRsSWpvaVRVaG5NazlYVFRWT2JWRTBUMVJaZUUxSFVUTk5la3BvVFZSSk1sbFVWVEpPVkVsNFRWUm9iRTVFYkd0UFJGVjZUbnBCTVZwRVNtMVpla1V6VG1wUmVWa3lVbXBhVjBVelRVUldiRTF0UlRCT1IxVjVXbXBTYVNJc0ltOXlhV2RwYmlJNkltaDBkSEE2THk5c2IyTmhiR2h2YzNRNk9EQTRNQ0lzSW1OeWIzTnpUM0pwWjJsdUlqcG1ZV3h6WlgwIiwiYXV0aGVudGljYXRvckRhdGEiOiJTWllONVlnT2pHaDBOQmNQWkhaZ1c0X2tycm1paGpMSG1Wenp1b01kbDJNRkFBQUFBQSIsInNpZ25hdHVyZSI6Ik1FVUNJQmpxczVSeHdONXJSRzFOcDBHUGRkSFIxUzBtYzhMR0hYMERpUFFkdlhOeEFpRUFuek41WnpXdjhDVGhzWE40Q0JESXZIVlNHV05ORktoVWdkVHc5bS13bmg0IiwidXNlckhhbmRsZSI6IlJsNjZIcmdkZ3VsSnNnIn0=,eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19,FIDO2"
  // 登录返回 'sign', 如果在 auth 页面完成的注册，返回 'register'
  type: "sign"
}
```
