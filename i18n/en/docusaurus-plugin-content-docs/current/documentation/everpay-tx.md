---
sidebar_position: 2
---

# Transaction Structure
everPay has its own separate transaction format and all everPay transactions will be stored on the arweave blockchain for everyone to verify.

Each transaction in everPay is uniquely identified by a single identifier: everHash.

Currently everPay has three types of transactions.

* Deposit: after the blockchain transaction record of user recharge confirms the corresponding block, bot generates a `'mint'` transaction to be stored on arweave
* Transfer: A user-signed transfer transaction that transfers the Token balance to the recipient's account
* Withdraw: User-signed withdrawal transaction, the transaction will be verified by everPay's DAO members, and the withdrawal proposal will be submitted through DAO and executed in Ether or Arweave

## Transaction signature content
Signed transactions use the same signature specification, regardless of whether they are signed by PersonalSign in Ether or RSS in Arweave.

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

Where `EverpayTxWithoutSig` can be found in [everpay-js types#EverpayTxWithoutSig](./everpay-js/types#everpaytxwithoutsig)

## Transaction Signature Detail Field Description

|Field|Description|
|---|---|
|tokenSymbol|token name|
|action|`'mint'` for deposit; `'transfer'` for transfer; `'burn'` for withdraw|
|from|the current everPay account ID that signed the transaction|
|to|for transfers, `to` is the other everPay account ID; for withdrawals, `to` is the blockchain wallet address to withdraw to|
|amount|the amount to be transferred or withdrawn, type uint; `decimals` processing is required to set this, e.g. 0.1USDT, here it is 100000 after USDT's `decimals: 6` processing|
|fee| Handling fee, type uint. decimals are required, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it will be 100000 |
|feeRecipient|fee payment address, via the [everpay server info API](./server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [everpay server info API](./server-api/basic-api/info) interface, must match the token id corresponding to `tokenSymbol`|
|data|transfer additional information, user-defined JSON data, processed by `JSON.stringify()` and passed. **When the current account is the arweave account model, `{"arOwner": "current arweave address's owner(public key)"}`** is passed for RSA-PSS sha256 verify|
|version|transaction version `'v1'`|

## Signature generation for different account models
### Ethereum account model
Signing via ethereum `personalSign`

#### Generate signature with everPay Tx via ethers.js
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

Pseudocode reference source: [everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)


### Arweave account model
Signing via arweave RSA-PSS sha256

#### Generate signature with everPay Tx via arweave.js
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

Pseudocode reference source: [everpay-js src/lib/sign.ts](https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts)

:::danger
arweave messages signed with RSA-PSS sha256 need to be processed by Ethereum `hashPersonalMessage` to unify the authentication specification of everPay backend service.
:::

## Unique transaction identifier: everHash
The everHash of every everPay Tx transaction is unique, `everHash` is generated as follows.

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