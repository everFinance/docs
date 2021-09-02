---
sidebar_position: 3
---

# swapOrder

## 介绍

everPay Swap 兑换由生态合作伙伴 [Goblin](https://goblinpool.com/) 团队开发。借助 everPay [批量转账交易](../../../guide/dive/bundle) 能力，在去中心化的区块链应用上，实现了中心化交易所兑换的体验。

## 兑换处理
1. 开发者
    1. 通过请求 [swapInfo](../basic-api/swapInfo) 接口，获取 everPay Swap 做市商 everPay 账户 ID、支持代币列表
    2. 通过请求 [swapPrice](../basic-api/swapPrice) 接口，获取兑换币种的汇率
    3. 根据做市商 everPay 账户 ID、数量、汇率，生成 [`bundleData`](../../../guide/dive/bundle#bundledata-信息)
    4. 通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，执行后续签名处理
    5. 将 `bundleData` 和 `sigs` 组装，通过此 `swapOrder` API POST 请求提交给 everPay Swap 做市商
2. everPay Swap 做市商
    1. 接收到 `bundle` 后，校验数量、汇率等
    2. 通过 `const messageData = JSON.stringfiy(bundleData)` 将 `bundleData` 转换成 `messageData` 后，执行后续签名处理
    3. 将 `bundleData` 和 `sigs`（包括开发者提交的签名） 组装成 `data`
    4. 生成 everPay [批量转账交易](../../../guide/dive/bundle) 提交至 everPay 服务器

## 参数
* path `{{swapEndpoint}}/dex/place_order`
* Post data `bundle`

关于 `bundleData` 生成、签名，请阅读 [指南 - 深入理解 - 批量转账 - data 生成](../../../guide/dive/bundle#data-生成示例)

## 返回字段
|字段|描述|
|---|---|
|everHash|everPay Swap 做市商提交的 [批量转账交易](../../../guide/dive/bundle) `everHash`|

## 示例
```bash
curl --location --request POST 'https://warriors-dev.everpay.io/dex/place_order' \
--header 'Content-Type: application/json' \
--data-raw '{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '2066600'
    }
  ],
  expiration: 1630555293,
  salt: '09f080e3-ff26-4202-a9b6-29413353ce56',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'kB23Ev3E94Bi_3_ejy4tmK4SzEZLDyyy7yhpjUlP3Qehsqzdp12Z51jNfyCUi9xMxfePRaJZdQfdU77GpbE1jEDXrAlXG1MsZK0qllf8Psto_e3rZyAcnoqxdJxaj4iYKNvQfo43Kj8bNSSUUG55KMVg4jMX3mA6VUjRbWsfxnVCv4y8936St7hTSKoxMUPJNbtaOdOa7sutUoAgDiVAnhSxGI4BdRFAVMQjkKinQbUUFwA_uC8vocy7jPpvN3J6zXXcdYkaGQAk8h9WwK6z_Z9Wjt-yq-InQB3L7P_VOKNBLAfvis_OHi2rXTxBiV6Pg9SH91mic_JUHPEXP7jw_8OXrsiO0N4WS4P9kxPEU_1HDMSpS6PDkXT48u5aIfZazH-1HmsNIJLUq_37shu4ZiGMadC0DjR0PjFpYnKSWf0marHptxS7kO-dFhIc5mbPvbw8fbVGmK05_SkYBg3eey4NEgHgKskqL3vH6eYzpL2VTqlKamiXzce0cjZqjDVGf6QKZ45uuSV96wzys5o1sWjzMZLfc3a2Nfz3HcFa63AI8EbBgGIGYNV5nlPaQvf3z0PfFO9ZpF2wRANd80cVtF9cwICJ0pAex02g3NScd27pDUYOU-IP2ISFo5cRHlg2x5WAOlXFen2rDZhZVnqWJwr5FUqy_SbyAXo--JV7HgE,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  }
}'
```

## 示例返回

```json
{
  "everHash": "TODO"
}
```