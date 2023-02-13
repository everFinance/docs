---
sidebar_position: 7
---

# txs

## 功能

everPay 上所有交易记录，通过 分页 形式获取

## 参数

`{{endpoint}}/txs?page={{page}}&tokenTag={{tokenTag}}&action={{action}}`

|查询字段|描述|
|---|---|
|page|可选，默认为 1|
|tokenTag|可选，识别 `token` 的唯一标识，可通过 [info](./info.md#示例返回) 接口 `tokenList` 中可查看每个 `token` 的唯一 `tag`。|
|action|可选，其中 [快速提现](../../../guide/dive/withdraw#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|
|withoutAction|可选，排除某种类型的交易。其中 [快速提现](../../../guide/dive/withdraw#快速提现) 交易记录归类在 `action: 'transfer'` 筛选中。<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|

## 返回字段

字段信息可查看 [指南 - 深入理解 - 交易 - 交易记录](../../../guide/dive/transaction#交易记录)

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/txs?page=1'
```

## 示例返回

```js
{
  currentPage: 1,
  totalPages: 196,
  txs: [
    {
      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',
      tokenSymbol: 'ETH',
      action: 'burn',
      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',
      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',
      amount: '979251798000000000',
      fee: '20000000000000000',
      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
      nonce: 1625733233558,
      tokenID: '0x0000000000000000000000000000000000000000',
      chainType: 'ethereum',
      chainID: '42',
      data: '',
      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',
      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',
      status: 'packaged',
      timestamp: 1625733624000,
      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'
    },
    // etc.
  ]
}
```
