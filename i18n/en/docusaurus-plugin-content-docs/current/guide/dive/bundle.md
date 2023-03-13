---
sidebar_position: 7
---

# Bundle

`bundle` transaction extend the `'transfer'` transaction to include external transfer for the original `'transfer'` function, as well as internal batch transfers via a specific `data` field.

The `data` contains multiple internal transfer transactions and also contains the signatures of the `from` accounts for all transfer transactions in these internal transfer transactions.

All internal transfers in `data` must succeed, and if one fails, all internal transfers are rolled back. A `bundle` transaction can only be executed once, regardless of whether the internal transfer succeeds or fails, and cannot be executed twice after execution.

## Schema
|Field|Description|
|---|---|
|tokenSymbol|Token Symbol|
|action|`'bundle'` to batch execute internal transfers|
|from|the current everPay account ID that signed the transaction|
|to|`to` represents the everPay account ID of the external transfer recipient, which can be any everPay account ID (including the current everPay account ID of the signed transaction)|
|amount|External transfer amount, type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|
|fee| Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's `decimals: 6` processing |
|feeRecipient|Receive everPay account ID for handling fees, via [info API](../server-api/basic-api/info) interface to get|
|nonce|unix milliseconds|
|tokenID|via [info API](../server-api/basic-api/info) interface, must be consistent with the token `id` field **corresponding to `tokenSymbol`**|
|chainType|`chainType` must be the same as [info API](../server-api/basic-api/info), the token `chainType` **consistent**|
|chainID|`chainID` must be the same as [info API](../server-api/basic-api/info), the token `chainID` **consistent**|
|data|Specific JSON format for bundle transfer function, see below [Data Generate Description](#data-generate-gescription)|

## Data Generate Description

### `internalItem`
`internalItem` for each internal transfer transaction.

|Field|Description|
|---|---|
|tag|combined by `chainType`, `symbol`, `id` via `-`, or via [info API](../server-api/basic-api/info) to get|
|chainID|`chainID` is the same as [info API](../server-api/basic-api/info), the token `chainID` **consistent**|
|from|The everPay account ID of the transferor of the assets of this internal transfer transaction|
|to|The everPay account ID of the recipient of the asset for this internal transfer transaction|
|amount|Amount of this internal transfer transaction asset. type uint; `decimals` processing is required for setting, e.g. 0.1USDT, after USDT's `decimals: 6` processing, it's 100000|

### bundleData
|Field|Description|
|---|---|
|items|Consists of multiple `internalItem` internal transfer transactions|
|expiration|Expiration time of all internal transfer transactions, unix timestamp. **Note: not millisecond timestamp**|
|salt|Must be a [`uuid`](https://en.wikipedia.org/wiki/Universally_unique_identifier) format string for unique identification|
|version|bundle version `'v1'`|

### `sigs` signature structure

The data structure obtained all `from` corresponding everPay accounts' signature. **the JSON string from the `bundle` message** used to be sign message.

**Signature generation rules are the same as [everPay transaction signature](./transaction#signature).** Converts `bundleData` to `messageData` by `const messageData = JSON.stringfiy(bundleData)` and then performs subsequent signature processing.

```ts
const sigs = {
  [fromAccount1]: sig1,
  [fromAccount2]: sig2,
  // etc.
}
```

### data generation example
:::danger
* To ensure that the `messageData` used for signature verification is consistent, the order of the `internalItem` and `bundleData` fields must be consistent with the example in order for the signature verification to pass correctly.
* The `signBundleData` in the example is pseudocode, after converting `bundleData` to `messageData` by `const messageData = JSON.stringfiy(bundleData)`, the subsequent signature generation rules are the same as [everPay transaction signature](./transaction#signature).
:::

```ts
const internalItem1 = {
  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
  chainID: '42',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  amount: '1000000000000000'
}
const internalItem2 = {
  tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainID: '42',
  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '10000000'
}
const bundleData = {
  items: [internalItem1, internalItem2],
  expiration: 1630490852,
  salt: '23b35070-c5a5-4c66-94f8-ad6064ab5cfc',
  version: 'v1'
}
const messageData = JSON.stringify(bundleData)

// "IWoPLghaVs-rD7Gn-Kc5UVB5LwIZhIwGNwK2bN9gikLid1bb8im9Hvfqb2on7K-FiJ1U77fkQSGcMfVbyNeNdbSslIIb-NvtUHQs3Y7jWQBU_TtOyGkcoNkRPXkAYOMaOSgbmZKV3GL4FwuYbO5YfQHomfpIzX5AGk1miPU19lo9IVpPmjJ_youk52pX41rBlTQm6DP76FNMppxC8rXnIDf-o-OMRK_Q0R6QZjUVhpFCBIVNq8P7J4Wm0yTA8QY7A68W2abmC4CU6pa9_ZSYOfcMHypUxIsA9V0nPiCYvOw83jvK2DcFtO3CaAUAiKoj5xdCIXnixNFN-arLa6de0ZOSQRwCxgYxs6w8UhAD-vFapG3cs6dzhYAYDKHuAlKqfaO_z1XToBdjwp0f9eIytJhWVOLLJSVR_1LRvsSc9yDvVk_D4nCeR2BTtevZmw9st1m8pQanqObn_G0qVUHdtkxxalwDdmr_fUEukeSOrzMuQlZ3IjpcKqUXsNqcxqg9uledNLE2yRo6VvXaoWjLOwLvMLBMQ18HGUVbr-I1M-bmX953S2NI43eBjVo0VAYRypBBewSflQE1Ief4xY-cu6-jhRLJYWTpQDup5gOY4O4DLE89GelkP7PsIsm3ZMF_qalOKoqswiEReBCJ4-s1X6Seg4q1kkB6ECT7ZieLmwc,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"
const sigFromAccount1 = await everpayArAccount.signBundleData(bundleData)

// "0x1cf47183f48c17393e2728b92031eb9f56fc7f89011c618e0cb1d163761b7dbe6e615091f15075b673422a0b1bc363d1ab341cbcee831c1632282e33feda79d21c"
const sigFromAccount2 = await everpayEthAccount.signBundleData(bundleData)

const sigs = {
  '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'IWoPLghaVs-rD7Gn-Kc5UVB5LwIZhIwGNwK2bN9gikLid1bb8im9Hvfqb2on7K-FiJ1U77fkQSGcMfVbyNeNdbSslIIb-NvtUHQs3Y7jWQBU_TtOyGkcoNkRPXkAYOMaOSgbmZKV3GL4FwuYbO5YfQHomfpIzX5AGk1miPU19lo9IVpPmjJ_youk52pX41rBlTQm6DP76FNMppxC8rXnIDf-o-OMRK_Q0R6QZjUVhpFCBIVNq8P7J4Wm0yTA8QY7A68W2abmC4CU6pa9_ZSYOfcMHypUxIsA9V0nPiCYvOw83jvK2DcFtO3CaAUAiKoj5xdCIXnixNFN-arLa6de0ZOSQRwCxgYxs6w8UhAD-vFapG3cs6dzhYAYDKHuAlKqfaO_z1XToBdjwp0f9eIytJhWVOLLJSVR_1LRvsSc9yDvVk_D4nCeR2BTtevZmw9st1m8pQanqObn_G0qVUHdtkxxalwDdmr_fUEukeSOrzMuQlZ3IjpcKqUXsNqcxqg9uledNLE2yRo6VvXaoWjLOwLvMLBMQ18HGUVbr-I1M-bmX953S2NI43eBjVo0VAYRypBBewSflQE1Ief4xY-cu6-jhRLJYWTpQDup5gOY4O4DLE89GelkP7PsIsm3ZMF_qalOKoqswiEReBCJ4-s1X6Seg4q1kkB6ECT7ZieLmwc,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',
  '0x26361130d5d6E798E9319114643AF8c868412859': '0x1cf47183f48c17393e2728b92031eb9f56fc7f89011c618e0cb1d163761b7dbe6e615091f15075b673422a0b1bc363d1ab341cbcee831c1632282e33feda79d21c'
}

const data = JSON.stringify({ bundle: { items, expiration, salt, version, sigs }})
/*
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '10000000'
    }
  ],
  expiration: 1630490852,
  salt: '23b35070-c5a5-4c66-94f8-ad6064ab5cfc',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'IWoPLghaVs-rD7Gn-Kc5UVB5LwIZhIwGNwK2bN9gikLid1bb8im9Hvfqb2on7K-FiJ1U77fkQSGcMfVbyNeNdbSslIIb-NvtUHQs3Y7jWQBU_TtOyGkcoNkRPXkAYOMaOSgbmZKV3GL4FwuYbO5YfQHomfpIzX5AGk1miPU19lo9IVpPmjJ_youk52pX41rBlTQm6DP76FNMppxC8rXnIDf-o-OMRK_Q0R6QZjUVhpFCBIVNq8P7J4Wm0yTA8QY7A68W2abmC4CU6pa9_ZSYOfcMHypUxIsA9V0nPiCYvOw83jvK2DcFtO3CaAUAiKoj5xdCIXnixNFN-arLa6de0ZOSQRwCxgYxs6w8UhAD-vFapG3cs6dzhYAYDKHuAlKqfaO_z1XToBdjwp0f9eIytJhWVOLLJSVR_1LRvsSc9yDvVk_D4nCeR2BTtevZmw9st1m8pQanqObn_G0qVUHdtkxxalwDdmr_fUEukeSOrzMuQlZ3IjpcKqUXsNqcxqg9uledNLE2yRo6VvXaoWjLOwLvMLBMQ18HGUVbr-I1M-bmX953S2NI43eBjVo0VAYRypBBewSflQE1Ief4xY-cu6-jhRLJYWTpQDup5gOY4O4DLE89GelkP7PsIsm3ZMF_qalOKoqswiEReBCJ4-s1X6Seg4q1kkB6ECT7ZieLmwc,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',
    '0x26361130d5d6E798E9319114643AF8c868412859': '0x1cf47183f48c17393e2728b92031eb9f56fc7f89011c618e0cb1d163761b7dbe6e615091f15075b673422a0b1bc363d1ab341cbcee831c1632282e33feda79d21c'
  }
}
*/
```

## External and internal transactions
* Internal transfers must contain the signatures of all `from` accounts (within all associated internal transfer transactions) for `bundleData`
* External transfers can be initiated by any everPay account, not limited to the everPay account of the internal transfer
* Successful external transfer transaction
  * All signatures of `sigs` in `data` are validated and the internal transfer transaction is successful
  * Any one of the `sigs` in `data` fails, the internal transfer transaction fails, but the external transfer transaction still executes normally
* The external transfer transaction fails
  * Internal transfer transactions fail at the same time

## Transaction signature, sending and record acquisition
Developers can visit the [Guide - Dive - Transaction](./transaction#messagedata) chapter for more information.

