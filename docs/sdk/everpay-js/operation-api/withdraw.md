---
sidebar_position: 4
---

# withdraw
## 功能

根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，在提现时：

* 内部构建 [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
* 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
* 将信息发送给 everPay 后端服务器，进行签名验证
* 普通提现
  * 后端服务器验证通过，将该笔 everPay 交易记录存储在 arweave 区块链上
  * 等待 arweave 区块链完成该笔 everPay 交易记录存储，确保账户的正确性后
  * 多签钱包/锁仓地址，给用户提现地址，提现对应数量（扣除手续费后）资产代币
* 快速提现
  * 后端服务器验证通过，做市商 everPay 账户收到资产
  * 做市商通过原生区块链转账，将对应数量（扣除手续费后）资产代币转账至用户提现钱包地址
  * 更多信息请阅读 [指南 - 深入理解 - 提现 - 快速提现](../../../guide/dive/withdraw#快速提现)

:::info
任意 everPay 账户，均可将 everPay 上的资产，提现至 everPay 目前支持提现的区块链钱包上，例如：
* 当前 everPay 上的 USDT 支持 ethereum 区块链，everPay 账户 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo` 可将 USDT 提现至 ethereum 区块链钱包 `0x26361130d5d6E798E9319114643AF8c868412859` 中
* 当前 everPay 上的 AR 支持 ethereum、arweave 区块链，everPay 账户 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo`可将 AR 提现至 arweave 区块链钱包 `5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo` 中，也可将其提现至 ethereum 钱包 `0x26361130d5d6E798E9319114643AF8c868412859` 中。
* 更多的代币支持提现至的区块链，可查阅 [`基础查询API - info接口`](../basic-api/info)
:::

## 参数
[WithdrawParams](../types#withdrawparams)

## 返回
[TransferOrWithdrawResult](../types#transferorwithdrawresult)

## 示例
### ethereum 账户普通提现 AR 至 arweave 钱包地址
```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer,
  debug: true
})

everpay.withdraw({
  symbol: 'ar',
  amount: '0.000012',
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
    amount: '11985000',
    fee: '15000',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1625987836534',
    tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',
    chainType: 'arweave,ethereum',
    chainID: '0,42',
    data: '{"targetChainType":"arweave"}',
    version: 'v1',
    sig: '0x6ea1793dcdbc542f152e79ec8e498f5170e0c105c4b2115524c05e5656fd1fca4b97bfd0d95c85eecc0b889d0bbd566af7e5128cd6986064f075e01bb37920d31c'
  },
  everHash: '0x3762d5eee25fc6b339a790ee192d7db56f152f4a75825d792e1c0f8ece3653d0'
}
*/
```

### arweave 账户普通提现 USDT 至 ethereum 钱包地址
```js
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  arJWK: 'use_wallet',
  debug: true,
})

everpay.withdraw({
  symbol: 'usdt',
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
    amount: '21000000',
    fee: '80000000',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1625988312969',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}',
    version: 'v1',
    sig: 'OyqtZa4F3y8d-DTZgbk0e0fSQjSc6TWDGgNvd57wqoXDoCNAZP6itZ2YPwypxhzHLVh9r1ncFzVA-YJ6etfq87uU_dR8mX0NzL80woqCL7toHWnF4dtJZGXHteC14H516WjDpqPYoZ8-Vscn9U3zvgZ5f0BysEQ4Z_PvK_w3HSdn0dLxjmG4errbV84oH5lIMNTPkS8fdiV_q1icozVRsMNjNYVNCLuYuGD15CW62gN5KkxOEvfX588k51kEaXmHo8DFIGlhKvjMwxTWTxmamGKAl7z4TrC8TwLL6_2vld5AdV3NKYf4Cs4U3oDr1D5O2dfCbZgbqc3iFZSR6UiMaU-TGlve3jnKovx_Q1LfyDoXNPBi1rp67LlU4LLhjN2NOOpY57QuwNkiFFck-CABU6L1BU7ZKyaUo0_OaJJRmvu89HLFk26mlOSwjJlFWolyIiFQ4FX_CMkQvF5v53fGykluZCnOm8yngDGpNYLJDCe_PTun0_5u5p8EvZ81Q8oKyotfOEs9IYcOytBp5_zb0IdmPz47SK5Hl4-Ds-mSvPuxVJL8qPhExo-ws0V8jaVWz3v5kUNdHkIvVD0urcGxhwpmpJ_6caWZ3IpBzHKYMLyXaMKDXfLy38yXh5OyXk6Vp3LByKPTW4gb8R7XtFGkNPlVpBd8VF8pKVe_OvIXAP0'
  },
  everHash: '0x43cf662dc8dfdab5339bae2e3d7710066907328de1f7330d4508165533449e47'
}
*/
```


### ethereum 账户快速提现 USDT 至 ethereum 钱包地址
```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  ethConnectedSigner: signer,
  debug: true
})

everpay.withdraw({
  chainType: ChainType.ethereum,
  symbol: 'usdt',
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
  arJWK: 'use_wallet',
  debug: true,
})

everpay.withdraw({
  chainType: ChainType.ethereum,
  symbol: 'USDT',
  amount: '5.26',
  to: ethWalletHasUSDT.address
  quickMode: true
}).then(console.log)

everpay.withdraw({
  chainType: ChainType.ethereum,
  symbol: 'USDT',
  amount: '5.26',
  to: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(withdrawResult => {
  console.log('withdrawResult', withdrawResult)
  expect(withdrawResult.status).toBe('ok')
})

/* 返回结果
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'USDT',
    action: 'transfer',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09',
    amount: '5260000',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1627632911156',
    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"appId":"express","withdrawAction":"pay","withdrawTo":"0x26361130d5d6E798E9319114643AF8c868412859","withdrawChainType":"ethereum","withdrawFee":"3167902","arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}',
    version: 'v1',
    sig: 'SxJf36ZiQpbGbn6K1LiDY9WrkHVQecNhNjR6PiPHimMcHgkiOxlNUs4jtrLHUZ7AAORGKJ7CGFfZFB6wSW0kG7tlGyh5iEFVH9cKmoeD1wNqFkAFe9IupZsa-8PQ-EbBi_Tl0TtF0v_IzDzkTXBGT8rlPe_vo5Zd0UburMSwWOG1GaVa4nzY0l5zU4jlPLPbElTiD3GcOw6fhP1iHsjcaVnCJyVwZTTs-XaHax01L_YPmijs4U8NhtEjGodgLlYrvQ3cM4yLrQEN5bdJhDwU47BXXCeOcPMfEsw7IF9ucwoRTvMtwccIy5TyPSMor9K45_GMTpn5jI55R0-MeKXmruVSoEKnmyJmpiA5JhzzALnVzmv_SUPjXxO58v9UgT8CwBtMADEFz8hdVkna8JA2wN7m-fQDK96fxdvZH-f8jJcvShpfyBGesAtNmsoLPYG-97sqMwsYQdPjp3u7pQcnGTg1Sfi7ni0TSNjKPYXKZG4C6W6sm27d7iyPOMpi31XHXo_Q6MAGAjTZiYI4JSSyy--AK_Z4FTBKdMUiahFPQHbwJPg-byGpVhAm3ELb0yzQjtHvOryqY9kJAbgHM-HlUZfCXlO3aes6z0lOz1TsmDxseec7JVwGSUJd4JaHcoDhzxuysQ7Ft2-6rdRvDpE_JlKyZ2FnluRg0ah3FFlSRVc'
  },
  everHash: '0x2277dae741faf143dab3cd6dd6ac3151fb381939134c55e4834dea6c23b8faad'
}
*/
```