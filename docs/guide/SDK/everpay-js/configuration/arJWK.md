---
sidebar_position: 6
---
# arJWK
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 配置项功能

此配置项用于通过 arweave 钱包 来操作 everPay `arweave 账户模型` 的 账户，对该账户进行：

- 充值：使用 `arJWK` 进行 arweave 转账 至 everPay arweave 锁仓地址（**通过门限签名实现了多签**）。
- 转账：使用 `arJWK` 进行 arweave `RSA-PSS SHA-256` 签名，来确保该 everPay 账户的操作权限。
- 提现：使用 `arJWK` 进行 arweave `RSA-PSS SHA-256` 签名，来确保该 everPay 账户的操作权限。

## 配置项类型

everpay-js 集成了 [arweave-js](https://github.com/ArweaveTeam/arweave-js) 用于 arweave 签名、发送交易。

此配置项类型：

```ts
export type ArJWK = JWKInterface | 'use_wallet'
```

使用 [arweave-js](https://github.com/ArweaveTeam/arweave-js) `JWKInterface` 作为其中之一的同时，也使用了一个 `'use_wallet'` 字符串作为参数，用于适配 Chrome 浏览器 arweave 插件钱包 [ArConnect](https://arconnect.io/)（一个类似 MetaMask 的钱包工具）。

## 如何配置

### JWKInterface 方式

参考：[arweave Docs - Sample JWK](https://docs.arweave.org/developers/server/http-api#sample-jwk)。

arweave 的私钥格式，一个 KEY JSON，例如：

```js
const arAddress = 'GRQ7swQO1AMyFgnuAPI7AvGQlW3lzuQuwlJbIpWV7xk'
const arJWK = {
  kty: 'RSA',
  e: 'AQAB',
  n: 'ovFF6EbOtXeg7VnojIgtChgxfU6GZ16JjVj5JFHh6NGHJnq4p059BnMphcDx1mqb3yxM73FxhEszSFLcJiPzway6eIDiXuYiT-Sf_0Wl6_wDLvEmlz43psp7WYJumwpaSyiI_1FWmOVQnTnoAIKaOYKVqzUlteiECQj7XjJl0MZH16RlEfVqVpJ_8Ier4_QXIJ8Y3pe2KF3Lg9UANFU97nuvEM94CSzX-0WIju6Lykt3DBb2YtFFg4bJjOFv3T38nCZmDh8lYjm25_1qILalsB0XRoDxQy9FLxWb4zd09JsDhL0EYAQ_hNfOnQFVOBtYEHVYMCHYH6GoTcNgxmUkZPk4AfpAqZmjDzKfVJrw4Fr68pPTEQOQEzBcIWp61P21BSkhqO4QuFinkQsSH6NdTB_3FpbhYf34Hjf-iH7hdpdWo4aoRLb8eZeZcqBRZoRmlhQnOD-PVxQR_vb9rjXSjGkCWwRbsurVLWdBh_FQn0S9Q6EHqiV8nbW-R0Rk2E76JwgMFkqGUtZj8DeEqXJ2jlAvuzp56fXeAViPEtvUj1HheO8O3LxdVYCiapWWKq4qQVoRzdiyvydYSmbztgFUhekvmjNkxLNKOh71i3hFtoXycegqZ6izrUGoF2oD24lsTKsV5lV5pwfmUjVvxtHZm54bJIMfUDYbOV6yeDjYBb8',
  d: 'EePSrJeFn4f0a8rozPEwnMCeQmdKO3Q2PwYrSJES8Ch9IbzspDXqZThksTJHeya2WXD4O3vlnkRRa5npYOimnTeVO6DO-eNjlgkAhhsEBh5jzRYeChIDMzVdCK1Y7n3a_xCCxiGMk_nteW2_qrqsKy9KtoL90nSmdoV9b9CxvBPhFGyQykF7POkV0fdbaIpGtcayCNJ4ZgMyUpWi0ZwgUhxTUtGsmLlLN2Phg-vt_jZ96h5lS-E1NCUq4ORpj018fDp9DwTdamTyz5LTwaa8F1OCWDPVCW7Ztjs1o-NVXHvejYbhQZeFz9SP804PqLrb1ubDWXmFzKdHns4aRH4bWivh9L8HwSJUl5UEXprJUpYilT0tb3VauI7Cih2LBfhU3fUIDJFYm_j9etgNcPlqt64T7_TI8elgj7-sciXa1XEqIje9Mn8spxT6lpn4nhxJ9qelERCJwiWbuPnW2VsJHeqXZTly52KQEP_UBC4z8a0tDm7HIQw7WQ-OAuNUOu8ongOHaOexkqKYIcF3f812sOIVEJufoBXUUTIvJk-buH0ytgtTjkrO64zZeIvFHa1MFU-6UXh8jipSZ617znNR2Pc1-l3s7pACdbXvy2-5VWE3psRr1L5HM4KNwm6Rs5BXXqBSifzfiJ5qNGqKabfXvPXI8wYyl3mhUQtHW6sUUl0',
  p: '0q_DP_FzSi8JEd-NNXoIaeL5MOxmNiXmDHGNxP3noKPyr-N6h3CrK5G59Rj2vWAJMhKToz1eSQ1p0-X0Ku2DvdT5LQOGIXVPtojw0OcOI8G8SoqMGAGehaLsnV3vexwtwjLfIM99XccKAxWMA1SMuL48nuBpMUhO0MlagbrL5vfpKB9kL7XCQqspAnN_vBmQZGWYczQmBgfC6v6xGQV3xHJmL--dn-qF2XU9pKuqd0J-cKYcdLPrccdJtGLid4nrSOTDfEbr77IUI5VGWV8CFJ-n8Vki-GwUxUkJpIoRyp5DxnYtSJb7cV-xOf7kBTCEUFn5B8fb2q-d8011cgnp5Q',
  q: 'xfzB-Yf4fa2y2q4ubJCJA5H-IG9-mr7fVRTUbj-gTqVL-I7MCDIImdAPbA-3EoIR5H70GVbAFGQJyYDq6eDeTbNs1zfnU0JPurASE3fKbOpoRdLwXwaSdRJRP9qnqUe-BzuloIzWc-dI-6TJxmHUSA1X9CtHvIdfNdKPCVFKUMrb1bv5arAI8tRbNRfy3tnbiw4wfKhYEQ1e6RPpxAR5F4We9RJ81-sIlfAy7WfliwmcGmgcPNdUinGR299CiVYKf5ktoqGFQ9n6K-v4gNZV23f33-tuD8pMVxyc3xG34j4frH57bsbm7v8Qz-92ZxHWzOUgxIVhGgSaa4E51d9m0w',
  dp: 'yArepo4I230BbZkHKKlv56n81PkAq5UccuA2rb4u-ZXxThP9OTA_NiUtnYxQassOsB53U91m8pHr06hZR5ExL0NSO-1Go-oQ_83SaWeZQ1YmA9i83-ZZr6VcaKbSReAhimxm825PKIVd-kOxJ1BWNOtb_7Yv6v0u6IrmhproE6t8E_6KT8qSYl7Fl3A27lCPiuPz9h6jo8Imzp15ZbqNV1cPs6Ad18MDx8_L8diVCJt4FlmCV0Sl3uhMERx6zumDHzkma4-jYXmCKa8Ilr7g6NgWy8_Ipnto1VFd-H6oGexficaXhH7my2UCj4B23H6OgwSKsVqQY3mvzV3Uj6zeCQ',
  dq: 'a0_ey6OZWnWFleYHH60PtrGw7l_AXZvLbVBG_CLcfwQ1M1oi2OZVpxkQ4t95uTxq-lCdegZ9QhAfBessaOwLUk5IVjbk2Un98RByG784JuS-8-mrg7YKOA5fn56idax_IWiBE46Cxnu8ITlmbHKmHw-sdpnm3hb50jB4evJmt3fcw_KI8_zKPORBM3vxljy7NJnSSh7s7QE0Sl0Svb427Drut6L3rAimtK5mzCseTcg9pkp707ZbClcYWfafF9VdB2A9TgMCOo6xfJEANsT18GkMH4B6PXDHBAhsNrRh2O0XOeWsfZStoyj5Mdt3b9JJfPFMW3h38yQ_lrmKYZQfJQ',
  qi: 'aDsPYxE-JBYsYhCYXSU7WsCrnFxNsRpFMcYXdmdryYIdQUpeemChDGzVJXLnJhE4cAS9TtLcNg82xZSKZvHrnkbFpRfSJxzEnvIXW4V0LHkxkxbmM0e9B7UrpYm6LKtvEY6I7L8wHFpHdOwV6NjY925oULEV156X0r55V7N0XF-jy3rbm71DCWRh6IDRghhCZQ3aNgJxE-OtnABqasaY6CQnTDRXLkGE0kq9GCx85-92fQLHMzvrMhr9m_2MHYJ_gZehL4j95CQzhD3Zh602D0YYYwRSsU4h5HGjlmN52pe-rfTLgwCJq5295s7qUP8TTMzbZAOM_hehksHpAaFghA'
}

const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: arJWK
})
```

:::danger 私钥泄漏风险
此方式在代码中明文传递私钥（arJWK），存在安全风险。
:::

### 浏览器 + ArConnect

当用户 浏览器安装了 [ArConnect](https://arconnect.io/) 后，可以传递 `arJWK: 'use_wallet'` 来指定使用 [ArConnect](https://arconnect.io/) 进行 arweave 转账（对应 everPay 充值）、签名（对应 everPay 转账与提现） 操作。


<Tabs>
<TabItem value="ts" label="Typescript" default>

```ts
const checkArPermissions = async (permissions: string[] | string): Promise<void> => {
  let existingPermissions: string[] = []
  const isString = (content: any) => {
    return Object.prototype.toString.call(content) === "[object String]"
  }
  permissions = isString(permissions) ? [permissions] : permissions

  try {
    existingPermissions = await window.arweaveWallet.getPermissions()
  } catch {
    throw new Error('PLEASE_INSTALL_ARCONNECT')
  }

  if (permissions.length === 0) {
    return
  }

  if (
    permissions.some((permission) => {
      return !existingPermissions.includes(permission)
    })
  ) {
    await window.arweaveWallet.connect(permissions as never[])
  }
}

await checkArPermissions([
  'ACCESS_ADDRESS',
  'ACCESS_ALL_ADDRESSES',
  'ACCESS_PUBLIC_KEY',
  'SIGN_TRANSACTION',
  'SIGNATURE'
])
```
```ts
const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})
```

</TabItem>
<TabItem value="js" label="Javascript">

```js
const checkArPermissions = async (permissions) => {
  let existingPermissions = []
  const isString = (content) => {
    return Object.prototype.toString.call(content) === "[object String]"
  }
  permissions = isString(permissions) ? [permissions] : permissions

  try {
    existingPermissions = await window.arweaveWallet.getPermissions()
  } catch {
    throw new Error('PLEASE_INSTALL_ARCONNECT')
  }

  if (permissions.length === 0) {
    return
  }

  if (
    permissions.some((permission) => {
      return !existingPermissions.includes(permission)
    })
  ) {
    await window.arweaveWallet.connect(permissions)
  }
}

await checkArPermissions([
  'ACCESS_ADDRESS',
  'ACCESS_ALL_ADDRESSES',
  'ACCESS_PUBLIC_KEY',
  'SIGN_TRANSACTION',
  'SIGNATURE'
])
```
```js

const arAddress = await window.arweaveWallet.getActiveAddress()
const everpay = new Everpay({
  account: arAddress,
  chainType: 'arweave',
  arJWK: 'use_wallet'
})

```

</TabItem>
</Tabs>



## 为什么 要使用 'use_wallet'？

1. [arweave-js](https://github.com/ArweaveTeam/arweave-js) 也支持在浏览器端使用 `'use_wallet'` 作为 `jwk` 参数，来使用 ArConnect 获取 arweave 钱包地址，以及进行 arweave 转账、签名。详见[arweave-js Search · use_wallet](https://github.com/ArweaveTeam/arweave-js/search?q=use_wallet)
2. everpay-js 集成了 [arweave-js](https://github.com/ArweaveTeam/arweave-js)，来进行 arweave 转账，使用 `'use_wallet'` 可让 [arweave-js](https://github.com/ArweaveTeam/arweave-js) 去调用 [ArConnect](https://arconnect.io/)，从而减少开发者适配 [ArConnect](https://arconnect.io/) 的成本。
3. 在 Web 端，使用 `'use_wallet'` 代表的 [ArConnect](https://arconnect.io/)，**更安全**。

