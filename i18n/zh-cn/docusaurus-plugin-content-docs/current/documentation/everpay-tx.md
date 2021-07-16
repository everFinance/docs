---
sidebar_position: 2
---

# everPay 交易
任意一笔 everPay 充值、转账、提现，在 everPay 上都会对应一笔 everPay Tx 的交易，并将该笔记录存储在 arweave 区块链上，供所有人验证。

其中：
* everPay 充值的 交易，经过用户充值的区块链交易记录确认相应区块后，由 everPay 后端服务生成一笔 `'mint'` 的 everPay Tx 存储在 arweave 上
* everPay 转账、提现的 交易，需经过 用户钱包 personalSign签名（ethereum 账户模型）或 RSA-PSS sha256签名（arweave 账户模型）签名后，发送至 everPay 服务器，经过 everPay 服务器验证签名

## everPay 签名格式
everPay 用于签名的数据，均使用相同的签名规范。

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

其中 EverpayTxWithoutSig 可参考 [everpay-js types#EverpayTxWithoutSig](../../everpay-js/types#everpaytxwithoutsig)

## everPay 签名详细字段描述

|字段|描述|
|---|---|
|tokenSymbol|代币名称|
|action|`'mint'`代表充值；`'transfer'`代表转账；`'burn'`代表提现。其中 `'mint'`的 everPayTx 由 everPay 服务生成，用户侧只使用 `'transfer'` 和 `'burn'`|
|from|当前 everPay 账户 ID|
|to|当是转账时，`to` 为另一个 everPay 账户 ID；当是提现交易时，`to` 为要提现至的区块链钱包地址|
|amount|需要转账、提现的资产数额，需要经过 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000|
|fee| 手续费，需要经过 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000|
|feeRecipient|通过 [everpay server info API](../server-api/basic-api/info) 接口获取|
|nonce|unix milliseconds，unix 毫秒时间戳|
|tokenID|通过 [everpay server info API](../server-api/basic-api/info) 接口获取，必须与 `tokenSymbol` 对应的 token id 匹配|
|data|转账附加信息，用户可自定义JSON 数据，经过 `JSON.stringify()` 处理后传递。**当当前账户是 arweave 账户模型时，需要传递`{"arOwner": "current arweave address's owner(public key)"}`**，用于 RSA-PSS sha256 验证|
|version|hard code `'v1'`|

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

## everHash
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