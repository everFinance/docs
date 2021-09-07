---
sidebar_position: 3
---

# transfer
## 功能
根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，在转账时：

* 内部构建 [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
* 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
* 将信息发送给 everPay 后端服务器，进行签名验证
* 后端服务器验证通过，更新用户资产余额。并将该笔 everPay 交易记录存储在 arweave 区块链上

开发者可浏览 [指南 - 深入理解 - 交易](../../../guide/dive/transaction) 章节获取更多信息。

:::info
任意 everPay 账户均支持将任意其在 everPay 上的资产转账给其他 everPay 账户，无论要转账给的 everPay 账户是 ethereum 还是 arweave 账户模型。例如：
* arweave 账户模型的 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo` everPay 账户，可向 ethereum 账户模型的`0x26361130d5d6E798E9319114643AF8c868412859` everPay 账户，转账 AR、ETH、USDT
* 反之亦然
:::
## 参数
[TransferParams](../types#transferparams)

## 返回
[SendEverpayTxResult](../types#sendeverpaytxresult)
## 示例
### ethereum 账户给其他账户转账
```ts
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer
})

everpay.transfer({
  symbol: 'USDT',
  amount: '5.26'
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  data: { hello: 'world', this: 'is everpay' }
}).then(console.log)

/* 示例返回
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

### arweave 账户给其他账户转账
```ts
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  arJWK: 'use_wallet',
})

everpay.transfer({
  symbol: 'ar',
  amount: '0.0000000001',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)

/* 示例返回
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'ar',
    action: 'transfer',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x26361130d5d6E798E9319114643AF8c868412859',
    amount: '100',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1629277056512',
    tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
    chainType: 'arweave,ethereum',
    chainID: '0,42',
    data: '',
    version: 'v1',
    sig: 'aiXZo1IINdFWNKnq_4SJDq93qWuIzXfaUlIoo8RnXCGVvaM39a7royP7A0bmiVbcDhGAnsyN44UnEiQx1ilUcXkMXyUNoz3w7MEy2XVLmR4nXPljMwXNhRi3WqsyCfk_bMCGnoibYj0CHFCnJU00Ik2L6dor8NlbcwoP5h6E24yrgOGVbMKxCQwL2EC2PSVNkHle0rfHePYuPYCwze0rCdle5G1IitbbJRKaPz7dKx5qjb6F8jV80ivMOHToUpof9gncUipJjxwdPiodSfk3PVT8D_k1tl8O476Mo3ef_VoOnMtalnnIdAH-1IPYz0RkQdeEQgCOBUEjpTVEEz7PRZ3kTNaDHduu_97xzDyuToePkipOrOHodxiZvKgXttWOSePyEpIjDjv7rd1tcF9HI4q1F90sL692A8SRMzlQE_6uMDaFlAyIkwhzWBUQiHLMKu8kbARXCnfI7S_OR53Y7JyWBkpTpnSo-SWDZmoY6uYYn_ColeFkoJ_CaCB6nKenJZP9V3vo7yFGoBry3sASej2OtdCkNDM6P311S5zqGLbzLDxuMXUfISCN30Pf9SU1tcxyIyUEJC-OeSl5BRGnJixxtecyEq4Ahk-gaawpOVC72agKWm14Vrvzd1siIBg1vaRuVR1Au5g4IAqs-DPTFviAPEumuLVGTQCn6FB24gg,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  },
  everHash: '0xa70f8b9d6a78b5af71b46d501b2c248f9fd0339d8440b8d6a67abc7e65e1b640'
}
*/
```