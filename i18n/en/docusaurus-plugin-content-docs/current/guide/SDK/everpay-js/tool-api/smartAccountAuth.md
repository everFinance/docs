---
sidebar_position: 1
---

# smartAccountAuth

## Function

Smart Account, app-side EverID login method, passes app-side `logo` to jump to `https://beta.everpay.io/auth` page, returns user information when user registers/logs into everPay.

:::danger
This method only works in the browser environment
:::

## Parameter

```ts
everpay.smartAccountAuth(logo: string): Promise<SmartAccountAuthResult>
```

|parameters|required|description|
|---|---|---|
|logo|YES| app-side `logo` |
|email|NO| The application can choose to pass the user's mailbox, which is an empty string by default|
|emailEditable|NO|The application can choose whether the passed user's mailbox is editable or not, the default is editable, the mailbox is not editable if and only if `false` is passed in this parameter|

## Return

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

## Example

```ts
const authResult = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
console.log('authResult', authResult)

/* example return
{
  // Account Email
  account: "dvdsbjo8u1@163.com",
  // signature message
  message: "0x69c96d89610d732a126a5652118e49d853705d2fc17642cdcea705e2a44e2f4b",
  // Public key corresponding to the webauthn ID used by this mailbox to log in to everPay
  public: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19",
  // The webauthn ID used by this mailbox to log in to everPay
  publicId: "311qYDHBe18SHKU-HR1XPrhPfvn19Cr5EV0SQYn_lqY",
  // Content of signature
  sig: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJyYXdJZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJjbGllbnREYXRhSlNPTiI6ImV5SjBlWEJsSWpvaWQyVmlZWFYwYUc0dVoyVjBJaXdpWTJoaGJHeGxibWRsSWpvaVRVaG5NazlYVFRWT2JWRTBUMVJaZUUxSFVUTk5la3BvVFZSSk1sbFVWVEpPVkVsNFRWUm9iRTVFYkd0UFJGVjZUbnBCTVZwRVNtMVpla1V6VG1wUmVWa3lVbXBhVjBVelRVUldiRTF0UlRCT1IxVjVXbXBTYVNJc0ltOXlhV2RwYmlJNkltaDBkSEE2THk5c2IyTmhiR2h2YzNRNk9EQTRNQ0lzSW1OeWIzTnpUM0pwWjJsdUlqcG1ZV3h6WlgwIiwiYXV0aGVudGljYXRvckRhdGEiOiJTWllONVlnT2pHaDBOQmNQWkhaZ1c0X2tycm1paGpMSG1Wenp1b01kbDJNRkFBQUFBQSIsInNpZ25hdHVyZSI6Ik1FVUNJQmpxczVSeHdONXJSRzFOcDBHUGRkSFIxUzBtYzhMR0hYMERpUFFkdlhOeEFpRUFuek41WnpXdjhDVGhzWE40Q0JESXZIVlNHV05ORktoVWdkVHc5bS13bmg0IiwidXNlckhhbmRsZSI6IlJsNjZIcmdkZ3VsSnNnIn0=,eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19,FIDO2"
  // Returns 'sign' for login, or 'register' if the registration was done on the auth page.
  type: "sign"
}
```
