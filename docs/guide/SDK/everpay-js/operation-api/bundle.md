---
sidebar_position: 6
---

# bundle

## 功能

根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，在批量转账时：

* 内部构建 [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
* 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
* 将信息发送给 everPay 后端服务器，进行签名验证
* 后端服务器验证通过，更新用户资产余额。并将该笔 everPay 交易记录存储在 arweave 区块链上

更多信息请阅读 [指南 - 深入理解 - 批量转账](../../../basic/dive/bundle.md)

## 参数

```ts
everpay.bundle(bundleParams: BundleParams)
```

|参数|类型|
|---|---|
|bundleParams| 查看 [`BundleParams`](../types.md#bundleparams) 类型 |

## 返回

[SendEverpayTxResult](../types#sendeverpaytxresult)

## 示例

```ts
const bundleDataWithSigs = {
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
  expiration: 1630577724,
  salt: 'e5396575-61d8-46c1-b4f7-461e8f5a0274',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'MqdwXS5l_gul0dbogkFY205TdbhTwxZWT6aoIMIDtW9AiICfzo9nV4l8W_OOwTtr66RlfcGeRZ6mtbnb7ovTLrJDkB97mO9-G_96WUNji80KQJd1Wc-MeEsImG-4rwYjYmWPAY4wwAOYbXFRQt-FEFjn43zFTNW9-zYoLpucspD6hR2wEhwG-ZEtSdi2jTwi6-L1jJKFuLvdi5ixWOy7CUt0_CE6aoOL5sZEOYfvNaNMHU2fM9wTgXlkKbpoecDZYmtWV-YBZ6UakTfis3pMms7jPYdvTw3LQqX4vQpjWjMjrKr7tiEmOMhsfow2KqLAtxZIXd3aTJC6eH9I2ZylnUYW_LAVSFyfLu4F1t885rdqoxb-lzvGKMpEUx_QX6TsAdTbv7RCXvnuYOVRfSCik4xxxjTVKEXcWKvX4ldOYplYpPBxPjLcn9ZgG_6lecDFF3a-WKUR0UhuOz6GeXt7SRa-J1UY0s58A_2xHnC3iZlq7w9w_irOFXSZv68O81sl7_ucOR5u66AdAFS4DaNhv_NoaLEl-agg0ZM--MYiUQvuuhZ0_tGO19PquSrSR44qztITcJHYUfqpCfyXoJaAavGgJ0hcpVh-ElwxLwcAWO0qnYpc4_eJZijyQZmaQBk9285lxpNzXRxxPNeJTO9wYSA2mIroTB8iePdCkl4_4Hc,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',
    '0x26361130d5d6E798E9319114643AF8c868412859': '0x26f04d1e4edad567e795c542820a3c5e8303a49aa490cce8aefc7e689efa6feb2b1c5c6442b56c777731bbc424062c77c3ce85fce0de51aaa17a42f7bb6bf1181c'
  }
}

const bundleResult = await everpayArAccount.bundle({
  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
  // 可为任意 everPay 账户 ID，包括当前 everPay 账户 ID
  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
  // bundle 批量转账的 外部转账 amount 可为 0
  amount: '0',
  // 特定 data
  data: {
    bundle: bundleDataWithSigs
  }
})

/*
{
  status: 'ok',
  everpayTx: {
    tokenSymbol: 'ETH',
    action: 'bundle',
    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
    amount: '0',
    fee: '0',
    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
    nonce: '1630577664128',
    tokenID: '0x0000000000000000000000000000000000000000',
    chainType: 'ethereum',
    chainID: '42',
    data: '{"bundle":{"items":[{"tag":"ethereum-eth-0x0000000000000000000000000000000000000000","chainID":"42","from":"0x26361130d5d6E798E9319114643AF8c868412859","to":"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo","amount":"1000000000000000"},{"tag":"ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee","chainID":"42","from":"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo","to":"0x26361130d5d6E798E9319114643AF8c868412859","amount":"10000000"}],"expiration":1630577724,"salt":"c13c2472-4432-4909-860d-c6115d5331f3","version":"v1","sigs":{"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo":"ny1tlHiRF4NR_0x35jQFoO2pYZVgAgMZqnTba5LevkZ8XHVtX85MdfYtw_kXHnpzBcWqM6JBHSdqOTkYmYd811N71UzWDsEJURuy9NEJu-tr3vrnEsqe_emld8yuyACHXLuSuGa2mrrsRsRgNcrj_Q2XlPP0HgIhpT5stcl79nbaQxmNNEyq2lxPrOuc6Wx91q8QHY5nbA6O84desvHBXdADpOAh2kEY1XjmOjNueWYzQHr7dQt7dpKhBHdOgD0MGzhq4kMdTGlZc5nK7x0lbIb0cfJlKuTVotalotw5U42UaVbfNpdOol7tw2ezlzSOIDlrJcg04g6P7OQk09yCYasVtJt_UBnaXVoMMJYOhE2AQ9Aoc_WwEgEfJFFkkaR79PWyELq--IfL3Laj01Tr4zFxxzV6J3-JVhmQQrk8GW5NHcEjmT7vxoSVZvZI9dH7JdAwxxbiCsFNvuM5hefg_t839qBQeFUTqlX09pFQgvcK7HRdBWPEMENHnbBQO2LJ09oQSd8WKZcQ22H4rOMbFBIQ_f68XQfjvAeVFn2B4kAzvIUWDDuLacahavQB9stDRgBDbgFN5hGV1oQ5eeU0v2pt4fzFJEg2ONk9tHrzaksnIB-cKNeBLMOXVyx2Jx97onAfImOdD9ZfyrYgTbpahZ7YzSBgDCpsWIEB1q5v1CU,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc","0x26361130d5d6E798E9319114643AF8c868412859":"0x1dc2501fe36114f646047068e698dd813e9b90dd3459a73378999f8fb612e66314b0f759c2713740ad0cbfa2feabe97f9ff61de2e7d2071cd3aa9525056af5f31c"}}}',
    version: 'v1',
    sig: 'eBS_P99kd5-S3FmH1rFS5PRTi9QmjIigZqk4fNYXuI29QuybvV6h8rjGO6WCCgi9GD4V_NSEL-RL5Zv_X0OWhUPK4WhOx-8yYcd1L3Gaa56MQExE2RHESiG1psAQej0t27m_8ZIuWvX9AXpTk2v0W0SLK3spsn7brffjs2KiNhEm3WEfH9xeNDsm0uBGWqY0b1tQz1Ez5dUNjocTniDIw8UofGzS4Re0QRVDRAYL7SSfip3bs3yy0f7DwETY7dZonbKNoGbk3pDIL_tbodp2iA1Ypak7LcMjdqFKJY01lbOOOpRLx5dBNHIJySXLblFJJDPC5Q7Z9ND-nW3sOZ2UfR0jQSaReK955qhoolL3URlAOFIm6bdc7OGKyyLPF3ybJKHmVtVHBoCeyDj8toRpD5AsPV2-spIjvKi_YxD3QlIjK7YuLsflNJfmbkTyipvCk5IAiMZHu1S2ZRvJ07EvR7q3CrfOm6pKFOJsCyOebfmhuf4CBSmbSKPkXyWl_qzEDSyjfR0rS5iBQk4MZYR5VXC6lK621_fA5qLfZQ3sxJy0wUOJmO_06IoaLmqj_4fq-8pc0GQDiK_GXep2aLi5DvFJttng-uTagmvYCAfLHLGPVFsaCkZ-SCtyGn_3aqzuCWyID88uPGLlXTIonWElQK3lp5XLkPxFiNqodPe-zjs,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  },
  everHash: '0x47c8a613b023d05574951855575fab747b9c9fb43823c026d1a933c2f7cfb6f5'
}
*/

```
