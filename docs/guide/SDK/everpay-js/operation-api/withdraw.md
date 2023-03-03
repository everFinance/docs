---
sidebar_position: 4
---

# withdraw

## 功能

根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，

* 在普通提现时
  * 内部构建**普通提现** [Schema](../../../basic/dive/withdraw#schema-说明)
  * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
  * 将信息发送给 everPay 后端服务器，进行签名验证
  * 后端服务器验证通过，将该笔 everPay 交易记录存储在 arweave 区块链上
  * 等待 arweave 区块链完成该笔 everPay 交易记录存储，确保账户的正确性后
  * 多签钱包/锁仓地址，给用户提现地址，提现对应数量（扣除手续费后）资产代币
  * 更多信息请阅读 [指南 - 深入理解 - 提现](../../../basic/dive/withdraw)
* 在快速提现时
  * 内部构建**快速提现** [Schema](../../../basic/dive/withdraw#schema-说明-1)
  * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
  * 将信息发送给 everPay 后端服务器，进行签名验证
  * 后端服务器验证通过，做市商 everPay 账户收到资产
  * 做市商通过原生区块链转账，将对应数量（扣除手续费后）资产代币转账至用户提现钱包地址
  * 更多信息请阅读 [指南 - 深入理解 - 提现 - 快速提现](../../../basic/dive/withdraw#快速提现)

:::info
任意 everPay 账户，均可将 everPay 上的资产，提现至 everPay 目前支持提现的区块链钱包上，例如：

* 当前 everPay 上的 USDT 支持 ethereum 区块链，everPay 账户 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo` 可将 USDT 提现至 ethereum 区块链钱包 `0x26361130d5d6E798E9319114643AF8c868412859` 中
* 当前 everPay 上的 AR 支持 ethereum、arweave 区块链，everPay 账户 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo`可将 AR 提现至 arweave 区块链钱包 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo` 中，也可将其提现至 ethereum 钱包 `0x26361130d5d6E798E9319114643AF8c868412859` 中。
* 更多的代币支持**普通提现**至的区块链，可查阅 [`基础查询API - info接口`](../basic-api/info)
* 更多的代币支持**快速提现**至的区块链，可查阅 [`基础查询API - expressInfo接口`](../basic-api/expressinfo)
:::

## 参数
```ts
everpay.withdraw(withdrawParams: WithdrawParams)
```
|参数|类型|
|---|---|
|withdrawParams| 查看 [`WithdrawParams`](../types.md#withdrawparams) 类型 |

## 返回

[SendEverpayTxResult](../types#sendeverpaytxresult)

## 示例

### ethereum 账户普通提现 AR 至 arweave 钱包地址

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer,
  debug: true
})

everpay.withdraw({
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',
  amount: '0.000010001',
  chainType: 'arweave',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
}).then(console.log)

/* 返回结果
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'ar',
    action: 'burn',
    from: '0x26361130d5d6E798E9319114643AF8c868412859',
    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    amount: '10001000',
    fee: '13200000',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1640156350136',
    tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
    chainType: 'arweave,ethereum',
    chainID: '0,42',
    data: '{"targetChainType":"arweave"}',
    version: 'v1',
    sig: '0x17a4d8f1570933839a9a188bf77d378a354777dabecd7bd27a22ef516c2f85bb731c07cb59174fdcf541623e55f70dfc70031de4d319f3a26d84f1691a7208ea1c'
  },
  everHash: '0x474399ccd4ab9432a72f79107b2fd36f0264f0cdc5d81bd5739b8b79e6ba9a13'
}
*/
```

### arweave 账户普通提现 USDT 至 ethereum 钱包地址

```js
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet',
  debug: true,
})

everpay.withdraw({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '101',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
}).then(console.log)

/* 返回结果
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'usdt',
    action: 'burn',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x26361130d5d6E798E9319114643AF8c868412859',
    amount: '101000000',
    fee: '32778384',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1640156915340',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '',
    version: 'v1',
    sig: 'bXbDJQR86kvau-pm9ub19hckF6C1Z8BBksaZWztrakJNKB_YxcV8gKXvX2kVTtvxYX4gxyImMkMacNG6q1ATjVEHZ-RLGH0W4PTZPJPrsUyspPlmFYQtFS2CX5sK_3eLTFE3O2P4QVep1tZYsD275Mdk0LzE8hVTJ7mIQGO2KEIFxhaipYj8hvPgMA3y9LlhG_634yTt08iUfbKTB2_E54BZvBzY4RX-Oc5CIuc07OOS_wzbNv4aZbEDfV5k31d1f5wuapRsZVG3yzs7aZHLawbugY08BytVG7QWKM55ZZsOIW8R8EuJI-LdmqXlMsjpJVWNDSAjKLJeyr0-fBpZGcF6ZHE5CRMXI6iRud0JKae1oq0ZO4w-rKvuBMeuoMda8iMOtvhFviKeGgFJ3npjilKHSWptMGblLtp5W3cn7WKOSp77imyLyLI0j8MbuITzeqOumLVwNqlwJiigfP6HooibC8dm42tMDzQO2mwlp8H1JkttgUl6AYXq_E_Ndk4xuv3Q0aAHtO3FE1ssHkmu0P7l5QII2hMtJOoTCBbwSQwWoaxbvXdzkTF802V981iHbtdL6LWnf0KctQdAX95nc682hHWFWj3KXaOkkRrEJJ5v5lpaFnXP6uM1-gQYK8MDmkVOnjNUNW3MApBXOk0uxdHTPgfnanmV4AOuBSll-Ck,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  },
  everHash: '0x1a31b394f471c74f588810201a29bd66fb53a9b6f9518512210817a72655238b'
}
*/
```

### ethereum 账户快速提现 USDT 至 ethereum 钱包地址

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer,
  debug: true
})

everpay.withdraw({
  chainType: ChainType.ethereum,
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '99',
  quickMode: true
}).then(console.log)

/* 返回结果
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'usdt',
    action: 'transfer',
    from: '0x26361130d5d6E798E9319114643AF8c868412859',
    to: '0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09',
    amount: '99000000',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1627632388487',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"appId":"express","withdrawAction":"pay","withdrawTo":"0x26361130d5d6E798E9319114643AF8c868412859","withdrawChainType":"ethereum","withdrawFee":"3045780"}',
    version: 'v1',
    sig: '0x62c3474ac971f55fd5d25bcb4d6af5463546df3e410984dfc1ef0a3004831f63006a79bb0fa605bf16c5002e16144e656929aae08c1f5d56347d98f7b0848f7c1c'
  },
  everHash: '0xd4855e2b8ec1363bf5dd43ec3c54c1e3bf58ec6c9e7db020dea7df3172484da0'
}
*/
```

### arweave 账户快速提现 USDT 至 ethereum 钱包地址

```js
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet',
  debug: true,
})

everpay.withdraw({
  chainType: ChainType.ethereum,
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '52.6',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  quickMode: true
}).then(console.log)

/* 返回结果
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'USDT',
    action: 'transfer',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09',
    amount: '52600000',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1629277427012',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"appId":"express","withdrawAction":"pay","withdrawTo":"0x26361130d5d6E798E9319114643AF8c868412859","withdrawChainType":"ethereum","withdrawFee":"4248145"}',
    version: 'v1',
    sig: 'dfTAtS88RF6QaHDvpzvRhzpmp0H_tMr4-e90ksrixMdQ12ZnwzRiHJ24raLgULIqwcewSqwFEYZOHEZtQHot9zWEHZ16GxvsmzhxPfbPK44VHtVpcYtXhFIyX7RPCpkdETaP-eMba397fiR3jRcflaSepeoRdp7N_POpO9M-KvejuRXWFR7J530eCAWfItwvITOn5Go2p5e1pBpidP61UnCv3O9K-INoz0EjPcSXq136uCyYHitlNwF4TJxdnv9PcHM7oRXT3siv4P5HAlKjDB7ak8WQ4x2VLluMQ2hpx8o_IiPwL6TYzxClHcw_e1oG1bGrOTG-0JmBRn9U_-orrL8NS3QGKNd0VAcJuLrXHe6NBqy0aP1ZdodKdrI7aViHMbmUAi-EtgVlVeqxR4zPB5fgB63ZhOzrq4rbU1LvMhp41EniK7oUQV3dswsU2ara9IiyDUHN-yNZSHzVwAes6PNDv_FKk_b75iQ5RQ5ZD6nJS2FyNdCo7vLMTqbEHIoqlkdehJLhuSCNykLcQh31sslTNHKkXIwnWgN-5cvgasu2y8FQgJoZ2A1tHfB6eOf4KgsHMNlatxlll8gvyF-uDsWQKJ8ywu8LYXeDmIXmS1R0N8TlI4JYUqrYkj6LYITh0dipWTuATXFtGfExGVtR1pH5uGDx-VqXtcfGsyAzcHg,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  },
  everHash: '0x38a2b38637a51e3037b3f04c3745eb1022f261e3de16308d8a2ac8c4251bde8e'
}
*/
```
