---
sidebar_position: 7
---

# sendEverpayTx
## 功能
将 everPay 交易结构 [(EverpayTxWithoutSig)](../types#everpaytxwithoutsig) 转化成 `messageData` 后，根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数进行签名，并发送至 everPay 服务器进行验证。

## 参数
```ts
everpay.sendEverpayTx(everpayTxWithoutSig: EverpayTxWithoutSig): SendEverpayTxResult
```

|参数|是否必需|描述|
|---|---|---|
|everpayTxWithoutSig| YES | 特定的 everPay 交易结构， 详情可查看 [getEverpayTxWithoutSig API](../tool-api/getEverpayTxWithoutSig.md)，获取 `everpayTxWithoutSig` 数据 |

## 返回
[SendEverpayTxResult](../types#sendeverpaytxresult)

## 示例
```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'usdt',
  action: 'transfer',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  amount: '5260000',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1625987254171',
  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainType: 'ethereum',
  chainID: '42',
  data: '{"hello":"world","this":"is everpay"}',
  version: 'v1'
}

// 使用 0x26361130d5d6E798E9319114643AF8c868412859 对应私钥进行签名
const result = await everpay.sendEverpayTx(everpayTxWithoutSig)
/*
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'usdt',
    action: 'transfer',
    from: '0x26361130d5d6E798E9319114643AF8c868412859',
    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    amount: '5260000',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1625987254171',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"hello":"world","this":"is everpay"}',
    version: 'v1',
    sig: '0x3ee66c303fe59b8e1f84e638cb7cca8bbb0e5b0ca63f784021e877be13c176d35d831e120a20eb8c72741fcc40c6a35a566d3ed34f6274d4c26160f38c14eec11b'
  },
  everHash: '0x0b7be08f6b96c2f1c7a810c72af2cc46632e4a7f0f9e36ccb10840864fedd470'
}
*/
```