---
sidebar_position: 2
---

# deposit

## Function

Call the corresponding (plugin) wallet transfer function to deposit to the everPay account according to the `account`, `ethConnectedSigner`, `arJWK` parameters passed when the Everpay instance is created

## Parameter
```ts
everpay.deposit(depositParams: DepositParams)
```

|Field|Type|
|---|---|
|depositParams| View [`DepositParams`](../types#depositparams) Type|

## Return

### ethereum wallet

When deposit with an ethereum wallet (using the `ethConnectedSigner` configuration) returns [EthereumTransaction](../types#ethereumtransaction)

### arweave wallet

When deposit with an arweave wallet (using the `arJWK` configuration) returns [ArweaveTransaction](../types#arweavetransaction)

## Example

### ethereum wallet

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})

everpay.deposit({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.26'
}).then(console.log)

/* Returnd result
{
  nonce: 199,
  gasPrice: BigNumber { _hex: '0x02540be400', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0x882b', _isBigNumber: true },
  to: '0xd85476C906B5301e8E9Eb58D174A6f96b9Dfc5Ee',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  data: '0xa9059cbb000000000000000000000000a7ae99c13d82dd32fc6445ec09e38d197335f38a00000000000000000000000000000000000000000000000000000000005042e0',
  chainId: 42,
  v: 119,
  r: '0xf069970e7384732913b1c4ff0a5be7f9df0742b8e7b5127ff661937562ff8362',
  s: '0x55c10452f9ebdf2a09f1e599ca00ab9e937485e3c1f82819216b17d62f0e1140',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  hash: '0x7d5cc18c44a8f45eaa5c357446157380ddc4526c07d4bea33721104296adcbe7',
  type: null,
  wait: [Function (anonymous)]
}
*/
```

### arweave wallet

```js
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet',
})

everpay.deposit(
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',
  amount: '0.01'
}).then(console.log)

/* Returnd result
{
  format: 2,
  id: 'mOnlcsKK58D_XHLoeNKhuyZWm4s1xg9P0QP-YVwJVNk',
  last_tx: 'PyPNbSLO678m-dA5DPICym5tHwjtAPB1pSH3j-wLvcEK57y1Q7roq-1elFftq7tN',
  owner: 'odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',
  tags: [],
  target: 'bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc',
  quantity: '10000000000',
  data_size: '0',
  data: Uint8Array(0) [],
  data_root: '',
  reward: '1656360',
  signature: 'E8QxqWGFee2wXhDXFqb_vHC8PJ-cPkyyVvkVSFJuWer4mRyTJz87jr7eyXPFxgRcqkjsLiY2Ez7p6vC4MuOv8L_IDmVw4dlLceX6Q4A0Xn4RWX6Dbo56Az93Rxs6kNkYEH8oddkjIbStvvypaWksm43NharW7SRmDHk2AxO5o9X38hMZX-tOTzCpZj3MNdK_FiTQVP0Xa4UjrblF5FC9L4gvKmSHYh_wEL4et_HTa7qN03ICJ5rY3Y_KB-bdRAQz4tStsFqrzX_wXg5aqvUNhH7NdXzUtdrcYVOggRFQOFDOOE49RPE6C6vLoXEgMv7OVB7PDXIG7JpJCR7UEewfEaxMHyUs62yoNlPYFZWiIyt5zfJL-ofSfhWvBtECwibUGsyeobminHGR2EOl6xaFed54Z8iid-igmGgv0rjDpLRfooqD06SLwJEFC08Cuj2sLJ5W5YqEx9L5D-7RvwNAve6ot11KtUNvCF9BAbYR5hvW5tTGSuFzB2MAUVDS2Jq6JgJUd5rqhuoEbG6LLl8CcfeWJPUspJ6Q5f7DvsIyvSmTZMVHb3Sm76PsAyKsBoTDaTCYbD7O1GvpXH0zcDS9pn8jOfxILUmqmNqlHblyHGGdQGIyEZJ3WDADeeQJmD_CBIoPrhcHiqu5Qg9HgX39V_dXyroekSWdWww8HYZ6zyo',
  chunks: { chunks: [], data_root: Uint8Array(0) [], proofs: [] }
}
*/
```
