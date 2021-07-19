---
sidebar_position: 2
---

# 交易结构
everPay 有自己独立的交易格式，所有的 everPay 交易都将存储在 arweave 区块链上，供所有人验证。

everPay 的每一笔交易都以一个唯一标识：everHash。

目前 everPay 有三个类型的交易：

* 充值：经过用户充值的区块链交易记录确认相应区块后，bot 会生成一笔 `'mint'` 的交易存储在 arweave 上
* 转账：用户签名的转账交易，将 Token 余额转移到收款人账户
* 提现：用户签名的提现交易，交易会被 everPay 的 DAO 成员进行验证，通过 DAO 提交提现提案，并在以太坊或者 Arweave 进行提现执行

## 交易签名内容
不管是以太坊 PersonalSign 还是 Arweave 的 RSS 签名，签署的交易均使用相同的签名规范。

```ts
export const getEverpayTxMessage = (everpayTxWithoutSig: EverpayTxWithoutSig): string => {
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

其中 `EverpayTxWithoutSig` 可参考 [everpay-js types#EverpayTxWithoutSig](./everpay-js/types#everpaytxwithoutsig)

## 交易签名详细字段描述

|字段|描述|
|---|---|
|tokenSymbol|代币名称|
|action|`'mint'`代表充值；`'transfer'`代表转账；`'burn'`代表提现|
|from|签署交易的当前 everPay 账户 ID|
|to|转账时，`to` 为另一个 everPay 账户 ID；提现时，`to` 为要提现至的区块链钱包地址|
|amount|转账金额或提现金额，类型为 uint。设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000|
|fee| 手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 |
|feeRecipient|手续费收款地址，通过 [everpay server info API](./server-api/basic-api/info) 接口获取|
|nonce|unix milliseconds，unix 毫秒时间戳|
|tokenID|通过 [everpay server info API](./server-api/basic-api/info) 接口获取，必须与 `tokenSymbol` 对应的 token id 匹配|
|data|转账附加信息，用户可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。**当当前账户是 arweave 账户模型时，需要传递`{"arOwner": "current arweave address's owner(public key)"}`**，用于 RSA-PSS sha256 验证|
|version|交易版本 `'v1'`|

## 不同账户模型的签名生成
### ethereum 账户模型
通过 ethereum personalSign 签名

#### 通过 ethers.js 生成签名与 everPay Tx
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

// const message = getEverpayTxMessage(everpayTxWithoutSig)
const message = `tokenSymbol:usdt
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

const sig = await signMessageAsync(ethConnectedSigner, message)
const everPayTx = {
  ...everpayTxWithoutSig,
  sig
}
```

伪代码参考来源：[everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)


### arweave 账户模型
通过 arweave RSA-PSS sha256 签名

#### 通过 arweave.js 生成签名与 everPay Tx
```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'ar',
  action: 'transfer',
  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '100',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1626080392301',
  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
  chainType: 'arweave,ethereum',
  chainID: '0,42',
  data: '{"hello":"world","this":"is everpay","arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}',
  version: 'v1'
}

// const message = getEverpayTxMessage(everpayTxWithoutSig)
const message = `tokenSymbol:ar
action:transfer
from:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
to:0x26361130d5d6E798E9319114643AF8c868412859
amount:100
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1626080392301
tokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be
chainType:arweave,ethereum
chainID:0,42
data:{"hello":"world","this":"is everpay","arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}
version:v1`

// RSA-PSS sha256
const signMessageAsync = async (arJWK: ArJWK, personalMsgHash: Buffer): Promise<string> => {
  const arweave = Arweave.init(options)
  // web
  if (arJWK === 'use_wallet') {
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
      // TODO: wait arweave-js update arconnect.d.ts
      const signature = await (window.arweaveWallet as any).signature(
        personalMsgHash,
        algorithm
      )
      const buf = new Uint8Array(Object.values(signature))
      return Arweave.utils.bufferTob64Url(buf)
    } catch {
      throw new Error(ERRORS.SIGNATURE_FAILED)
    }

  // node
  } else {
    const buf = await arweave.crypto.sign(arJWK, personalMsgHash)
    return Arweave.utils.bufferTob64Url(buf)
  }
}

// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168
const hashPersonalMessage = function (message: Buffer): Buffer {
  const prefix = Buffer.from(
    `\u0019Ethereum Signed Message:\n${message.length.toString()}`,
    'utf-8'
  )
  return keccak256(Buffer.concat([prefix, message]))
}

const personalMsgHash = hashPersonalMessage(Buffer.from(message))

const sig = await signMessageAsync(config.arJWK as ArJWK, personalMsgHash)
const everPayTx = {
  ...everpayTxWithoutSig,
  sig
}
```

伪代码参考来源：[everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)

:::danger
arweave 用于 RSA-PSS sha256 签名的 message，需要经过 Ethereum `hashPersonalMessage` 处理，来统一 everPay 后端服务的验证规范。
:::

## 交易唯一标识：everHash
每一笔 everPay Tx 交易的 everHash 都是唯一的，`everHash` 的生成如下：

```ts
// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168
const hashPersonalMessage = function (message: Buffer): Buffer {
  const prefix = Buffer.from(
    `\u0019Ethereum Signed Message:\n${message.length.toString()}`,
    'utf-8'
  )
  return keccak256(Buffer.concat([prefix, message]))
}

const message = `tokenSymbol:ar
action:transfer
from:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo
to:0x26361130d5d6E798E9319114643AF8c868412859
amount:100
fee:0
feeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1
nonce:1626080392301
tokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be
chainType:arweave,ethereum
chainID:0,42
data:{"hello":"world","this":"is everpay","arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}
version:v1`
const personalMsgHash = hashPersonalMessage(Buffer.from(message))
const everHash = `0x${personalMsgHash.toString('hex')}`
```