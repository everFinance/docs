---
sidebar_position: 2
---

# deposit

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 功能

根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，调用对应（插件）钱包/webauthn转账功能，对 everPay 账户进行充值。

:::danger 私钥泄漏风险
智能账户模型不支持充值
:::

## 参数

```ts
everpay.deposit(depositParams: DepositParams): EthereumTransaction | ArweaveTransaction
```

<Tabs>
<TabItem value="field" label="参数" default>

|参数|是否必需|描述|
|---|---|---|
|tag|YES| `token` 的唯一标识，可通过 [`info`](../../../server-api/basic-api/info.md) 接口进行查看。|
|amount|YES|充值的资产数额。|

</TabItem>
<TabItem value="type" label="类型">

```ts
export interface DepositParams {
  tag: string
  amount: string
}
```

</TabItem>
</Tabs>

:::caution

* 在进行 everPay 账户充值时，`chainType` 网络需要支持该 `Token tag`，否则无法充值成功。
* 可通过 [`TokenList`](../basic-api/info.md#示例返回) 查看该[`Token crossChainInfoList`](../basic-api/info.md#token-字段描述) 字段，是否包含当前 `chainType` 网络。
:::

## 返回

### ethereum 钱包

当使用 ethereum 钱包充值时（使用 `ethConnectedSigner` 配置） 返回 [EthereumTransaction](../types#ethereumtransaction)。

### arweave 钱包

当使用 arweave 钱包充值时（使用 `arJWK` 配置） 返回 [ArweaveTransaction](../types#arweavetransaction)。

## 示例

### ethereum 钱包

```js
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const everpay = new Everpay({
  account: window.ethereum.selectedAddress,
  chainType: 'ethereum',
  ethConnectedSigner: signer
})

// chainType 网络需要支持当前 token tag 才可正常进行充值
everpay.deposit({
  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',
  amount: '5.26'
}).then(console.log)

/* 返回结果
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

### arweave 钱包

```js
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet',
})

everpay.deposit({
  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',
  amount: '0.01'
}).then(console.log)

/* 返回结果
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
