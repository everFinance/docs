---
sidebar_position: 3
---

# 交易

everPay 有自己独立的交易格式，所有的 everPay 交易都遵循相同的格式，签署相同的签名规范，存储在 arweave 区块链上，供所有人验证。

## Schema

|字段|描述|
|---|---|
|tokenSymbol|代币名称|
|action|<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|
|from|签名交易的当前 everPay 账户 ID|
|to|<ul><li>转账时，`to` 为另一个 everPay 账户 ID</li><li>提现时，`to` 为要提现至的区块链钱包地址</li><li>批量转账时，`to` 代表外部转账收款的 everPay 账户 ID，可为任意 everPay 账户 ID（包括签名交易的当前 everPay 账户 ID）</li></ul>|
|amount|类型为 uint，设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 <ul><li>转账时，`amount` 为转账金额</li><li>提现时，`amount` 为提现金额</li><li>批量转账时，`amount` 为外部转账金额</li></ul>|
|fee| 手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 |
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../../server-api/basic-api/info.md) 接口获取|
|nonce|unix milliseconds，unix 毫秒时间戳|
|tokenID|通过 [info API](../../server-api/basic-api/info.md) 接口获取，必须与 `tokenSymbol` 对应的 token `id` 字段**一致**|
|chainType|`chainType` 必须与 [info API](../../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**|
|chainID|`chainID` 必须与 [info API](../../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**|
|data|附加信息，开发者可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。通过 `data` 可自定义实现一些复杂功能，例如 [快速提现](./withdraw#快速提现-data-字段说明)、[批量转账](./bundle)|
|version|交易版本 `'v1'`|

### 以太坊账户示例

```js
const everpayTxWithoutSig = {
  tokenSymbol: 'usdt',
  action: 'transfer',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  amount: '5260000',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1626079771946',
  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainType: 'ethereum',
  chainID: '42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}
```

### Arweave 账户示例

```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'ar',
  action: 'transfer',
  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '100',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1629276767583',
  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
  chainType: 'arweave,ethereum',
  chainID: '0,42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}
```

## messageData

由 Schema 按照统一格式生成，用于：

* 以太坊 `personalSign` 签名
* 生成 `everHash`

### 生成规则

```ts
export const getEverpayTxMessageData = (everpayTxWithoutSig: EverpayTxWithoutSig): string => {
  const keys = [
    'tokenSymbol',
    'action',
    'from',
    'to',
    'amount',
    'fee',
    'feeRecipient',
    'nonce',
    'tokenID',
    'chainType',
    'chainID',
    'data',
    'version'
  ] as const
  return keys.map(key => `${key}:${everpayTxWithoutSig[key]}`).join('\n')
}
```

其中 `EverpayTxWithoutSig` 可参考 [everpay-js types#EverpayTxWithoutSig](../../SDK/everpay-js/types.md#everpaytxwithoutsig)

### 以太坊账户示例

```js
const messageData = `tokenSymbol:usdt
action:transfer
from:0x26361130d5d6E798E9319114643AF8c868412859
to:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
amount:5260000
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1626079771946
tokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee
chainType:ethereum
chainID:42
data:{"hello":"world","this":"is everpay"}
version:v1`
```

### Arweave 账户示例

```js
const messageData = `tokenSymbol:ar
action:transfer
from:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
to:0x26361130d5d6E798E9319114643AF8c868412859
amount:100
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1629276767583
tokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be
chainType:arweave,ethereum
chainID:0,42
data:{"hello":"world","this":"is everpay"}
version:v1`
```

## everHash

每一笔 everPay 交易都有唯一标识的 `everHash`。由 `messageData` 使用以太坊 `hashPersonalMessage` 生成的 `personalMessageHash`，即为 `everHash`

### 生成规则

```ts
// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168
const hashPersonalMessage = (message: Buffer): Buffer => {
  const prefix = Buffer.from(
    `\u0019Ethereum Signed Message:\n${message.length.toString()}`,
    'utf-8'
  )
  return keccak256(Buffer.concat([prefix, message]))
}
const getPersonalMessageHash = (messageData: string): string => {
  const personalMsgBuf = hashPersonalMessage(Buffer.from(messageData))
  const personalMessageHash = `0x${personalMsgBuf.toString('hex')}`
  return personalMessageHash
}
```

## signature

每一笔 everPay 交易，都需要通过 发送者账户的钱包进行签名，everPay 服务器会校验所有签名的有效性。

### 以太坊账户模型

通过 ethereum `personalSign` 签名 `messageData` 得到 `signature`

#### 通过 ethers.js 生成签名

```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'usdt',
  action: 'transfer',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  amount: '5260000',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1626079771946',
  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainType: 'ethereum',
  chainID: '42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}

// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)
const messageData = `tokenSymbol:usdt
action:transfer
from:0x26361130d5d6E798E9319114643AF8c868412859
to:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
amount:5260000
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1626079771946
tokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee
chainType:ethereum
chainID:42
data:{"hello":"world","this":"is everpay"}
version:v1`

// personalSign
const signMessageAsync = async (ethConnectedSigner: Signer, message: string): Promise<string> => {
  return await ethConnectedSigner.signMessage(message)
}
const signature = await signMessageAsync(ethConnectedSigner, messageData)
```

伪代码参考来源：[everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)

### Arweave 账户模型

由 `messageData` 使用以太坊 `hashPersonalMessage` 生成的 `personalMessageHash`。通过 arweave RSA-PSS sha256 签名 `personalMessageHash` 对应的 `Uint8Array`（或者 `Buffer`），得到的签名结果，再通过 `Arweave.utils.bufferTob64Url`（与其他 base64 转换函数有差异） 进行 `base64` 转换，拼接上 `,{{arOwner}}` 后，得到 `signature`

#### 通过 arweave.js 生成签名

```ts
// RSA-PSS sha256
const signMessageAsync = async (arJWK: ArJWK, address: string, personalMessageHash: string): Promise<string> => {
  const arweave = Arweave.init(options)
  const personalMessageHashBuffer: Buffer = Buffer.from(personalMessageHash.slice(2), 'hex')
  let arOwner = ''
  let signatureB64url = ''
  // web
  if (arJWK === 'use_wallet') {
    try {
      await checkArPermissions('ACCESS_PUBLIC_KEY')
    } catch {
      throw new Error(ERRORS.ACCESS_PUBLIC_KEY_PERMISSION_NEEDED)
    }
    try {
      arOwner = await (window.arweaveWallet as any).getActivePublicKey()
    } catch {
      throw new Error(ERRORS.ACCESS_PUBLIC_KEY_FAILED)
    }

    try {
      await checkArPermissions('SIGNATURE')
    } catch {
      throw new Error(ERRORS.SIGNATURE_PERMISSION_NEEDED)
    }

    const algorithm = {
      name: 'RSA-PSS',
      saltLength: 32
    }

    try {
      const signature = await (window.arweaveWallet as any).signature(
        personalMessageHashBuffer,
        algorithm
      )
      const buf = new Uint8Array(Object.values(signature))
      signatureB64url = Arweave.utils.bufferTob64Url(buf)
    } catch {
      throw new Error(ERRORS.SIGNATURE_FAILED)
    }

  // node
  } else {
    const buf = await arweave.crypto.sign(arJWK, personalMessageHashBuffer, {
      saltLength: 32
    })
    arOwner = arJWK.n
    signatureB64url = Arweave.utils.bufferTob64Url(buf)
  }

  return `${signatureB64url},${arOwner}`
}

const everpayTxWithoutSig = {
  tokenSymbol: 'ar',
  action: 'transfer',
  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '100',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1629276767583',
  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
  chainType: 'arweave,ethereum',
  chainID: '0,42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}

// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)
const messageData = `tokenSymbol:ar
action:transfer
from:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
to:0x26361130d5d6E798E9319114643AF8c868412859
amount:100
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1629276767583
tokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be
chainType:arweave,ethereum
chainID:0,42
data:{"hello":"world","this":"is everpay"}
version:v1`

// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168
const hashPersonalMessage = function (message: Buffer): Buffer {
  const prefix = Buffer.from(
    `\u0019Ethereum Signed Message:\n${message.length.toString()}`,
    'utf-8'
  )
  return keccak256(Buffer.concat([prefix, message]))
}

const getPersonalMessageHash = (messageData: string): string => {
  const personalMsgBuf = hashPersonalMessage(Buffer.from(messageData))
  const personalMessageHash = `0x${personalMsgBuf.toString('hex')}`
  return personalMessageHash
}
const personalMessageHash = getPersonalMessageHash(messageData)
const signature = await signMessageAsync(config.arJWK as ArJWK, personalMessageHash)
```

伪代码参考来源：[everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)

:::danger

* 用于 以太坊 personalSign 签名的是 `messageData` string，得到的结果即为 `signature`
* 用于 arweave RSA-PSS sha256 签名的是 `personalMessageHash` Buffer，得到的结果需要进一步通过 `Arweave.utils.bufferTob64Url` 转换得到的 `base64 string`，并拼接上 `,{{arOwner}}` 才是 `signature`
:::

## signature 校验

每一笔 everPay 交易，通过 发送者账户的钱包进行签名后，将签名 everPay 交易一起提交 everPay 服务器，everPay 服务器会校验所有签名，来确保交易的有效性。

### 以太坊账户模型

```ts
const signature = await signMessageAsync(ethConnectedSigner, messageData)
const verified = ethers.utils.verifyMessage(messageData, signature).toLowerCase() === everpayTxWithoutSig.from.toLowerCase()
```

### Arweave 账户模型

```ts
const signature = await signMessageAsync(config.arJWK as ArJWK, everHash)
// arOwner 为 arweave 钱包 publicKey
const [sigB64url, arOwner] = signature.split(',')
const verified = arweave.crypto.verify(
  arOwner,
  Buffer.from(everHash.slice(2)),
  Arweave.utils.b64UrlToBuffer(sigB64url)
)
```

## 提交交易

将 everPay 交易通过 POST 请求提交 everPay 后端服务器 [`tx`](../../server-api/operation-api/tx.md) 接口。

### 字段

除 [`Schema`](#schema) 定义字段外，补充签名得到`signature` 作为 `sig` 字段。

|补充字段|描述|
|---|---|
|sig|根据不同账户模型签名，生成的 `signature`|

### 示例

```js
{
  tokenSymbol: 'ar',
  action: 'transfer',
  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '100',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1629276767583',
  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
  chainType: 'arweave,ethereum',
  chainID: '0,42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1',
  sig: 'Lg8Xgk_LZn_H-HVOz042wbhv5RVQjc7Z0iVV4_UbWWgoqHnboB6PQujtCtu1_QW0cXPqakm9sLi7fJlhK7Hm7UMFQiwXbVB_bClr73GKAcV0tpWye9BUsKw9SfOnFAHCCufF4C1PPt4xRrJp5UeG-smonQ9k4t0GmoXnXoSfmFxsEvaId5SeNaOZa1JYMzReo8-P4m5EdrTKLNgWwo28OOi4GbpXIzRxorJp-dwhsNhQHu4vzOq4rflGRwQKb9bj4S92YqEp2wXRRU7ebEiBJlGjQrf0HgTr7gZO_q3gI5FQgsL_UbOo4sp5hL69IUOfRxmr_RTiLZZzQRu-0dJBsWOSWYC5232fRf3MwogIELdDUl3dVCz5PDnXp8AOPKBQCiblu74oTSyKhsVMvwfER125dXyKtxJLlxTkDhEOPzTJdufy-Czs1pE_ZPKj4z44P3W7UdGiAt9rXYQb6JjMNOpG1_S7RMa5OKoCV4MbuK2CGFCNBE0h4zxeXZfXLOMSImrfFZ4nZAHkTbpKgpH1hPDEMGsEEgwvDl6_AyjrMOebAAyJGj6keyy9tf7lQBKKaj2-bGG6PIVC-l7wCXJizFt-3Cb0aC6ZXaCHGdhHuI-7Ime4M5iZESiBhkIhtOV3ADjqks174o0J0zKxE0NVl14tuu5tY-UfJ6kAkqbujLs,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
}
```

### nonce

* `nonce` 为用户在客户端生成，everPay 服务器可接收与服务器时间上下 100s 的误差
* 用户每次提交 everPay 的交易，`nonce` 必须比该用户上一笔 `nonce` 数值大

## 交易记录

提交至 everPay 服务器，经过签名校验通过的 everPay 交易，可以通过 everPay 接口获取交易记录。

everPay 在 [`Schema`](#schema) 定义字段、`sig` 签名字段外，添加了部分字段，用于 everPay 业务。

### 字段

|补充字段|描述|
|---|---|
|everHash|每笔 everPay 交易都对应一个唯一的 `everHash`，`everHash` 生成参考 [everHash](#everhash)|
|timestamp|<ul><li>当该笔 everPay 交易被记录到 Arweave 区块链后，此 `timestamp` 代表 everPay 交易被记录到 Arweave 区块链的 unix milliseconds，unix 毫秒时间戳</li><li>如该笔 everPay 交易未被记录到 Arweave 区块链上，`timestamp` 为 `0`</li></ul>|
|status|<ul><li>`confirmed` 代表该 everPay 交易被 everPay 后端签名验证通过后，确认接收，但还未记录到 Arweave 区块链上</li><li>`packaged` 代表该 everPay 交易已被记录到 Arweave 区块链上</li></ul>|
|internalStatus|批量转账增加的字段，仅在批量转账的内部交易失败时，返回具体错误信息。批量转账内部交易成功、转账、提现、充值时，值都为 `success`|
|id|<ul><li>当该笔 everPay 交易被记录到 Arweave 区块链后，此 `id` 对应该笔记录在 Arweave 上的交易 hash</li><li>如该笔 everPay 交易未被记录到 Arweave 区块链上，`id` 为空字符串</li></ul>|
|targetChainTxHash|<ul><li>充值、提现（非快速提现）时，对应的区块链 `txHash`</li><li>如提现（非快速提现）未完成或是 everPay 转账交易，此 `targetChainTxHash` 为空字符串</li></ul>|
|express|快速提现增加的字段，`express: {"chainTxHash": "","withdrawFee": "","refundEverHash": "","err": ""}`<ul><li>`chainTxHash` 代表快速提现成功后，打包的 区块链 `txHash`</li><li>`withdrawFee` 代表实际收取的手续费</li><li>`refundEverHash` 代表快速提现失败后，做市商进行退款的 everPay 交易 `everHash`</li><li>`err` 代表快速提现失败原因</li></ul>|

### 查询接口

* [txs](../server-api/basic-api/txs) 查询所有 everPay 交易记录
* [txsByAccount](../server-api/basic-api/txsByAccount) 查询具体 everPay 账户的交易记录
* [txByHash](../server-api/basic-api/txByHash) 根据 `everHash` 查询 everPay 交易记录
* [mintedTxByChainTxHash](../server-api/basic-api/mintedTxByChainTxHash) 根据充值的区块链记录ID （如以太坊为 `txHash`），查询充值的 everPay 交易记录
