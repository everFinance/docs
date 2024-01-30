---
sidebar_position: 8
---

# signMessage

## 功能

将 `message` 根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK`, `isSmartAccount` 参数进行签名

## 参数

```ts
everpay.signMessage(message: string, smartAccountDirectly?: boolean): Promise<SignMessageResult>
```

:::danger

* `smartAccountDirectly` 可不传递，默认为 false
* `smartAccountDirectly` 参数仅对邮箱账户的签名有效
* 当为邮箱账户时，`!!smartAccountDirectly` 为 `true`
  * 会使用 `webauthn` 直接签名 `message`
  * `message` **长度必须 >= 96**
  * 返回结果中的 `message` 字段与原 `message` 一致
* 当为邮箱账户时，`!!smartAccountDirectly` 为 `false`
  * everpay-js 内部会先通过 `hashMessage` 对 `message` 进行一层 hash 处理后，再使用 `webauthn` 签名
  * `message` 没有长度限制
  * 返回结果中的 `message` 字段为 `hashMessage(message)` 后的 hex string

:::

## 返回

```ts
export interface SignMessageResult {
  message: string
  sig: string
}
```

## 示例

### EVM 签名示例

```ts
describe('signMessage for EVM', () => {
  test('signMessage EVM should be OK', async () => {
    const message = 'verify'
    const signResult = await everpayEVM.signMessage(message)
    expect(signResult.message).toBe(message)
    return await everpayEVM.verifyMessage({
      type: 'sign',
      message,
      account: ethWalletHasUSDT.address,
      sig: signResult.sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBe(ethWalletHasUSDT.address.toLowerCase())
    })
  })
})
```

### Arweave 签名示例

```ts
describe('signMessage for Arweave', () => {
  test('signMessage for Arweave should be OK', async () => {
    const account = arWallet1.address
    const message = 'verify'
    const signResult = await everpayAR.signMessage(message)
    expect(signResult.message).toBe(message)
    return await everpayAR.verifyMessage({
      type: 'sign',
      message,
      account,
      sig: signResult.sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBe(account.toLowerCase())
    })
  })
})
```

### 邮箱账户签名示例

:::danger

因浏览器窗口安全弹出限制，请勿将 `smartAccountAuth` 接口与 `signMessage` 接口在同一个函数中调用，必须要由不同的事件函数触发。以下仅为示例

:::

```ts
const authResult = await new Everpay().smartAccountAuth()
const everpaySmartAccount = new Everpay({
  account: authResult.account,
  isSmartAccount: true
})
const signResult = await everpaySmartAccount.signMessage('Hello World')
/*
{
  message: "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2",
  sig: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJyYXdJZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJjbGllbnREYXRhSlNPTiI6ImV5SjBlWEJsSWpvaWQyVmlZWFYwYUc0dVoyVjBJaXdpWTJoaGJHeGxibWRsSWpvaVRVaG9hRTFYVW14UFZHYzBUbXBCZDFsVVVYbFplbEpwVGtkR2FVMUVaelZaYWxsNFQxUkpOVTR5VFhoT01sRXhUVEpPYlZwdFJteE9WMUV4VFZSSmQxcEVaM2xhUkdob1QxUkthMDFIU21sTk1ra3pUMGRaZVNJc0ltOXlhV2RwYmlJNkltaDBkSEE2THk5c2IyTmhiR2h2YzNRNk9EQTRNU0lzSW1OeWIzTnpUM0pwWjJsdUlqcG1ZV3h6WlgwIiwiYXV0aGVudGljYXRvckRhdGEiOiJTWllONVlnT2pHaDBOQmNQWkhaZ1c0X2tycm1paGpMSG1Wenp1b01kbDJNRkFBQUFBQSIsInNpZ25hdHVyZSI6Ik1FWUNJUUROLVZTVG1IMGJ5eElfYzY3dFN1VC1CNmR2aVNjaFozVXhlZ2FqTllHYWVBSWhBTDBXcmRCdGJBbWYtRWxqa3lFQkZVYzJUcWxYeDhGWVNLb2JRaWlHTEhqRSIsInVzZXJIYW5kbGUiOiJSbDY2SHJnZGd1bEpzZyJ9,eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19,FIDO2"
}
*/

const signDirectlyResult = await everpaySmartAccount.signMessage('h'.repeat(96), true)
/*
{
  message: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  sig: "eyJpZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJyYXdJZCI6IjMxMXFZREhCZTE4U0hLVS1IUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbl9scVkiLCJjbGllbnREYXRhSlNPTiI6ImV5SjBlWEJsSWpvaWQyVmlZWFYwYUc0dVoyVjBJaXdpWTJoaGJHeGxibWRsSWpvaVlVZG9iMkZIYUc5aFIyaHZZVWRvYjJGSGFHOWhSMmh2WVVkb2IyRkhhRzloUjJodllVZG9iMkZIYUc5aFIyaHZZVWRvYjJGSGFHOWhSMmh2WVVkb2IyRkhhRzloUjJodllVZG9iMkZIYUc5aFIyaHZZVWRvYjJGSGFHOWhSMmh2WVVkb2IyRkhhRzloUjJodllVZG9iMkZIYUc5aFIyaHZZVWRvYjJGSGFHOGlMQ0p2Y21sbmFXNGlPaUpvZEhSd09pOHZiRzlqWVd4b2IzTjBPamd3T0RFaUxDSmpjbTl6YzA5eWFXZHBiaUk2Wm1Gc2MyVjkiLCJhdXRoZW50aWNhdG9yRGF0YSI6IlNaWU41WWdPakdoME5CY1BaSFpnVzRfa3JybWloakxIbVZ6enVvTWRsMk1GQUFBQUFBIiwic2lnbmF0dXJlIjoiTUVZQ0lRRFR5cmZmQVozNmR6Nk1jS2o5alA3TmxXa2N1TXBnVGFHdE14UUw1Z3JlRUFJaEFMSFVOa2MxUGl0cXplRzNuMnlkV3hSWjhoNW9TMDJPNWg0cEdic05JSUY5IiwidXNlckhhbmRsZSI6IlJsNjZIcmdkZ3VsSnNnIn0=,eyJpZCI6IjMxMXFZREhCZTE4U0hLVStIUjFYUHJoUGZ2bjE5Q3I1RVYwU1FZbi9scVk9IiwicHVibGljS2V5IjoicFFFQ0F5WWdBU0ZZSUZldWlsY0ZVdGowZGl5SUFRcnZGdFJRVjRRbndSem1SUldmRGNtY1ZYd0JJbGdnOW5hdjVUeVdiL2Y1RWgxWkQ4c2k3aFRROXlVY2wybVRuQi9iOUF3Z1I4MD0iLCJhdHRlc3RhdGlvblR5cGUiOiJwYWNrZWQiLCJ0cmFuc3BvcnQiOlsiaW50ZXJuYWwiXSwiZmxhZ3MiOnsidXNlclByZXNlbnQiOnRydWUsInVzZXJWZXJpZmllZCI6dHJ1ZSwiYmFja3VwRWxpZ2libGUiOmZhbHNlLCJiYWNrdXBTdGF0ZSI6ZmFsc2V9LCJhdXRoZW50aWNhdG9yIjp7IkFBR1VJRCI6InJjNEFBalc4eGdwa2l3c2w4ZkJWQXc9PSIsInNpZ25Db3VudCI6MCwiY2xvbmVXYXJuaW5nIjpmYWxzZSwiYXR0YWNobWVudCI6InBsYXRmb3JtIn19,FIDO2"
}
*/
```
