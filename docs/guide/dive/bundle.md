---
sidebar_position: 7
---

# 批量转账

批量转账扩展了 `'transfer'` 转账交易，包含原有 `'transfer'` 转账功能的外部转账，以及通过特定 `data` 字段实现的内部批量转账功能。

`data` 中，包含多笔内部转账事务，也包含这些内部转账事务中 `from` 账户对于所有转账事务信息的签名。

`data` 中的多笔内部转账必须全部成功，有一笔失败则所有内部转账回滚。一个批量转账交易只能执行一次，不管内部转账是成功还是失败，执行后不可二次执行。

## Schema

|字段|描述|
|---|---|
|tokenSymbol|代币名称，AR,ETH,USDT,USDC 等。|
|action|`'bundle'`代表批量转账。|
|from|签名交易的当前 everPay 账户 ID。|
|to|批量转账时，`to` 代表外部转账收款的 everPay 账户 ID，可为任意 everPay 账户 ID。（包括签名交易的当前 everPay 账户 ID）|
|amount|批量转账时，`amount` 为外部转账金额。类型为 uint，设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。|
|fee| 手续费，类型为 uint。需要进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 。|
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../server-api/basic-api/info.md) 接口获取。|
|nonce|unix milliseconds，unix 毫秒时间戳。|
|tokenID|通过 [info API](../server-api/basic-api/info.md) 接口获取，必须与 `tokenSymbol` 对应的 token `id` 字段**一致**。|
|chainType|批量转账时，`chainType` 必须与 [info API](../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**。|
|chainID|批量转账时，`chainID` 必须与 [info API](../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**。|
|data|特定 JSON 格式，实现批量转账功能，见下文 [data 生成描述](#data-生成描述)。|
|version|交易版本 `'v1'`。|

## data 生成描述

### internalItem 内部转账事务
`internalItem` 为 每一笔内部转账事务。

|字段|描述|
|---|---|
|tag|`token` 的唯一标识，由 `chainType`, `symbol`, `id` 通过 `-` 组合，通过 [info API](../server-api/basic-api/info.md) 接口获取。|
|chainID|`chainID` 必须与 [info API](../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**。|
|from|此笔内部转账事务资产转出者 everPay 账户 ID。|
|to|此笔内部转账事务资产接收者 everPay 账户 ID。|
|amount|此笔内部转账事务资产金额，类型为 uint，设置时需要进行 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000。|

### bundleData 信息
|字段|描述|
|---|---|
|items|由多笔 `internalItem` 内部转账事务组成。|
|expiration|所有内部转账事务的过期时间，unix 时间戳。**注：非毫秒时间戳**。|
|salt|必须为 [`uuid`](https://en.wikipedia.org/wiki/Universally_unique_identifier) 格式字符串，用于唯一识别。|
|version|批量转账版本 `'v1'`。|

### sigs 签名结构
所有 `internalItem` 内部转账事务中，`from` 对应的 everPay 账户对 **`bundle` 信息得到的 JSON 字符串** 进行签名后，得到的数据结构。

**签名生成规则与 [everPay 交易签名](./transaction#signature) 相同。**通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，执行后续签名处理。

```ts
const sigs = {
  [fromAccount1]: sig1,
  [fromAccount2]: sig2,
  // etc.
}
```

### data 生成示例
:::danger
* 为确保签名校验时，用于签名校验的 `messageData` 一致，`internalItem`、`bundleData` 字段顺序必须与示例保持一致，才可正确通过签名校验。
* 示例中的 `signBundleData` 为伪代码，在通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，后续签名生成规则与 [everPay 交易签名](./transaction#signature) 一致。
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

## 批量转账的外部交易与内部交易
* 内部转账必须包含所有关联的内部转账交易 `from` 账户对 `bundleData` 的签名。
* 外部转账可以由任意 everPay 账号发起，不限定于 内部转账的 everPay 账户。
* 外部转账交易成功：
  * `data` 中，`sigs` 所有的签名验证通过，内部转账交易也成功。
  * `data` 中，`sigs` 其中任意一个签名验证失败，内部转账交易失败，但外部转账交易仍然正常执行。
* 外部转账交易失败：
  * 内部转账交易同时失败。

## everPay 交易签名、发送与交易记录获取
开发者可浏览 [DOCS - 系统概览 - 交易](./transaction#messagedata) 章节获取更多信息。

