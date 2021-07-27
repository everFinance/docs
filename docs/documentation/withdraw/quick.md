# 快速提现
## 目的
因普通提现需要先经过 everPay Tx 确认在 arweave 区块链打包，通过 DAO 提交提现提案，并在以太坊或者 Arweave 进行提现执行。

在这个过程中，需要等待较长时间，以及消耗的矿工费用较高，everPay 团队联系了外部做市商团队，通过 **everPay 转账** 实现了快速提现，达到节省用户提现的时间和费用成本的目的。

## 实现本质
用户通过将 everPay 的资产 通过转账 给做市商 everPay 账户的形式，来让做市商在 原生区块链上转账资产给用户。

## 实现方式
### 获取 快速提现做市商信息
通过 [`expressInfo`](../server-api/basic-api/expressInfo) 获取做市商 everPay 账户ID、支持代币列表、可快速提现额度以及快速提现手续费

将 `transfer` everPay Tx 的 `to` 字段，指定为做市商 everPay 账户 ID。

### 构建 everPay Tx data

特定的 `data` 数据，标记该笔 everPay `transfer` 交易为快速提现，来让做市商给用户提现地址进行区块链转账，达到快速提现目的。

  ```json
  {
    "appId":"express",
    "withdrawAction":"pay",
    // 具体提现到的钱包地址
    "withdrawTo":"0x2ca81e1253f9426c62Df68b39a22A377164eeC92",
    // 具体提现的区块链
    "withdrawChainType":"ethereum",
    // 设定的手续费，通过 express/info 接口获取
    "withdrawFee":"2252212"
  }
  ```

## 生成 everPay 提现交易的 everPayTx
```ts
const everpayTxWithoutSig = {
  tokenSymbol: 'usdt',
  action: 'transfer',
  from: '0x26361130d5d6E798E9319114643AF8c868412859',
  to: '0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09',
  amount: '5260000',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: '1627293967911',
  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
  chainType: 'ethereum',
  chainID: '42',
  data: "{\"appId\":\"express\",\"withdrawAction\":\"pay\",\"withdrawTo\":\"0x2ca81e1253f9426c62Df68b39a22A377164eeC92\",\"withdrawChainType\":\"ethereum\",\"withdrawFee\":\"2252212\"}",
  version: 'v1'
}
```

详见：[everPay 交易](../everpay-tx)

## 做市商收到资产
做市商在收到该笔资产后，进行校验
  * 校验通过，立即给用户的提现地址发送扣减手续费后，对应数额资产
  * 校验不通过，立即全额退回资产至用户 everPay 账户
