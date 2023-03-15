---
sidebar_position: 7
---

# txs

## 功能

everPay 上所有交易记录，通过 `分页(10条1页)` 形式展示。

## 参数

`{{ endpoint }}/txs?page={{ page }}&tokenTag={{ tokenTag }}&action={{ action }}`

|查询字段|是否必需|描述|
|---|---|---|
|page| NO |默认为 1。|
|tokenTag|NO |token 的唯一标识，可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|action| NO |<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|
|withoutAction| NO |排除某种类型的交易。<ul><li>`'mint'`代表充值</li><li>`'transfer'`代表转账</li><li>`'burn'`代表提现</li><li>`'bundle'`代表批量转账</li></ul>|

## 返回字段

字段信息可查看 [指南 - 系统概览 - 交易 - 交易记录](../../dive/transaction#交易记录)。

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/txs?page=1&tokenTag=ethereum-eth-0x0000000000000000000000000000000000000000'
```

## 示例返回

```js
{
  currentPage: 1,
  totalPages: 129,
  txs: [
    {
      rawId:'1285',
      id:'71FCES97DRmosyqAcHqicuZuflqRCnQaV2ytulb8lvs',
      tokenSymbol:'USDT',
      action:'transfer',
      from:'0x4002ED1a1410aF1b4930cF6c479ae373dEbD6223',
      to:'Ii5wAMlLNz13n26nYY45mcZErwZLjICmYd46GZvn4ck',
      amount:'11000000',
      fee:'0',
      feeRecipient:'0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
      nonce:1677035245584,
      tokenID:'0x923Fcb255da521037385457FB549a51F78Ef0AF4',
      chainType:'ethereum',
      chainID:'5',
      data:"",
      version:'v1',
      sig:'0x336baa979bf5f06b1871e01d2e8406ffc4de02c9451caf8e8e70e1991337aca073b5e251e9610db5a9a87fef002c7a8f922239c8112c756416d5097cc47260901b',
      everHash:'0x2c42f8b75b8c1ea2d1f76a7390601f229f2301d0906b8c6bba11b05551d2b3a8',
      status:'packaged',
      internalStatus:'{\"status\":\"success\"}',
      timestamp:1677035719000,
      targetChainTxHash:"",
      express:{
          chainTxHash:"",
          withdrawFee:"",
          refundEverHash:"",
          err:""
      }
    },
    // etc.
  ]
}

```
