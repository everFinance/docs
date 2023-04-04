---
sidebar_position: 8
---

# txsByAccount

## 功能

获取对应 `账户(account)` 的交易记录，通过 `分页(10条1页)` 形式展示。

## 参数

`{{endpoint}}/txs/{{account}}?page={{page}}&tokenTag={{tokenTag}}&action={{action}}`

|查询字段|是否必需|描述|
|---|---|---|
|account|YES| everPay 账户 ID。|
|page|NO|默认为 1。|
|tokenTag|NO|token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|action|NO|<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|
|withoutAction|NO|排除某种类型的交易。<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|

## 返回字段

字段信息可查看 [DOCS - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/txs/0x26361130d5d6E798E9319114643AF8c868412859?page=1&tokenTag=ethereum-eth-0x0000000000000000000000000000000000000000'
```

## 示例返回

```js
{
  "accid": "0x26361130d5d6E798E9319114643AF8c868412859",
  "currentPage": 1,
  "totalPages": 10,
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
