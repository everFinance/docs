---
sidebar_position: 7
---

# verifyMessage

## 功能

验证 `account`, `type`, `message` 与 `sig` 签名是否正确

## 参数

```ts
everpay.verifyMessage(params: VerifyMessageParams): Promise<VerifyMessageResult>
```

```ts
export interface VerifyMessageParams {
  account: string
  type: 'register' | 'sign'
  message: string
  sig: string
}
```

|参数|是否必需|描述|
|---|---|---|
|account|YES| everPay 账户，可为邮箱地址、EVM 地址、Arweave 地址 |
|type|YES|`'sign'` or `'register'`，签名类型，只有 `smartAccountAuth` 接口返回的 `type: register` 类型的签名需要使用 'register'，其他情况为 `'sign'`|
|message|YES|签名信息|
|sig|YES|签名内容|

## 返回

仅在验证成功时返回

```ts
export interface VerifyMessageResult {
  publicId: string
  public: string
}
```

## 示例

### EVM 示例

```ts
const everpay = new Everpay({
  debug: true
})
describe('verifyMessage for EVM', () => {
  test('verifyMessage EVM should be OK', async () => {
    const account = '0xC90D9eA24864415190CCD6F91B279fbfe7A159d2'
    const everHash = '0xdc1a35ccc02c4e94be671bc6520510b20eaef57d4b15429b62c78162b25d6f85'
    const tx = await everpay.txByHash(everHash)
    const message = everpay.getEverpayTxMessage(tx as any)
    const sig = tx.sig
    return await everpay.verifyMessage({
      type: 'sign',
      message,
      account,
      sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBe(account.toLowerCase())
    })
  })
})
```

### Arweave 示例

```ts
const everpay = new Everpay({
  debug: true
})
describe('verifyMessage for Arweave', () => {
  test('verifyMessage Arweave should be OK', async () => {
    const account = '3tot2o_PcueolCwU0cVCDpBIuPC2c5F5dB0vI9zLmrM'
    const everHash = '0xa2db76aa2b7ce48e3d3fff8a8be7a8d279bbe54602fcb530ea04b362a3e03640'
    const tx = await everpay.txByHash(everHash)
    const message = everpay.getEverpayTxMessage(tx as any)
    const sig = tx.sig
    return await everpay.verifyMessage({
      type: 'sign',
      message,
      account,
      sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBe(account.toLowerCase())
    })
  })
})
```

### 邮箱账户转账签名示例

```ts
const everpay = new Everpay({
  debug: true
})
describe('verifyMessage for FIDO2 type sign', () => {
  test('verifyMessage FIDO2 type sign should be OK', async () => {
    const account = 'registerforkindle@gmail.com'
    const everHash = '0xdc9a5521098f480104b89226041dbc008aee44d04ac85e6a045c4f9b9722d137'
    const tx = await everpay.txByHash(everHash)
    const sig = tx.sig
    return await everpay.verifyMessage({
      type: 'sign',
      message: everHash,
      account,
      sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBeTruthy()
    })
  })
})
```

### 邮箱账户注册签名示例

```ts
const everpay = new Everpay({
  debug: true
})
describe('verifyMessage for FIDO2 type register', () => {
  test('verifyMessage FIDO2 type register should be OK', async () => {
    const account = 'registerforkindle@gmail.com'
    const everHash = '0x399c26de125202d998e493a6f93c273c235f61f37b5fc86f3a76394e6b1a40a8'
    const tx = await everpay.txByHash(everHash)
    const sig = tx.sig
    return await everpay.verifyMessage({
      type: 'register',
      message: everHash,
      account,
      sig
    }).then(result => {
      expect(result.public).toBeTruthy()
      expect(result.publicId.toLowerCase()).toBeTruthy()
    })
  })
})
```
