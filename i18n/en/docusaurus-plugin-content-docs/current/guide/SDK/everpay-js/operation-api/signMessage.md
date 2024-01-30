---
sidebar_position: 8
---

# signMessage

## Function

Sign the `message` according to the `account`, `ethConnectedSigner`, `arJWK`, `isSmartAccount` parameters passed when the Everpay instance was created.

## Parameter

```ts
everpay.signMessage(message: string, smartAccountDirectly?: boolean): Promise<SignMessageResult>
```

:::danger

* `smartAccountDirectly` may not be passed, default is false.
* The `smartAccountDirectly` parameter is only valid for mailbox account signatures.
* When it is an email account, `!!smartAccountDirectly` is `true`.
  * The `webauthn` direct signature `message` is used.
  * `message` **Must be >= 96** in length.
  * The `message` field in the returned result is the same as the original `message`.
* When it is an email account, `! !smartAccountDirectly` is `false`.
  * everpay-js internally hash the `message` with `hashMessage` before signing it with `webauthn`
  * `message` has no length limit.
  * The `message` field in the returned result is a hex string after `hashMessage(message)`.

:::

## Return

```ts
export interface SignMessageResult {
  message: string
  sig: string
}
```

## Example

### EVM signMessage

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

### Arweave signMessage

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

### email Account signMessage

:::danger

Due to browser window security popup restrictions, do not call the `smartAccountAuth` interface and the `signMessage` interface in the same function, they must be triggered by different event functions. The following is just an example

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
