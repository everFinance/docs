---
sidebar_position: 6
---
# 提现

## 介绍
提现指将 everPay 账户中的有效余额，提现到原生链的操作。

## 普通提现
### 生成 everPay 提现交易的 everPayTx
详见：[everPay 交易](./everpay-tx)

### 将 everPayTx 发送至 everPay 服务器
详见：[everpay server tx API](./server-api/operation-api/tx)，everPay 服务器在接收到 `everPayTx` 后，经过密码学签名验证，将该笔 `everPayTx`存储至 arweave 区块链上。

### everPay 多签钱包给用户提现钱包地址转账
everPay 服务器在确认该笔 `everPayTx` 存储至 arweave 区块链上之后，通过多签钱包，给用户提现钱包地址转账。

## 快速提现
因普通提现需要先经过 everPay Tx 确认在 arweave 区块链打包，之后被 everPay 的 DAO 成员进行验证，通过 DAO 提交提现提案，并在以太坊或者 Arweave 进行提现执行。

在这个过程中，需要等待较长时间，以及消耗的矿工费用较高，everPay 团队联系了外部做市商团队。

用户可通过一个特定的 `transfer` everPay Tx 将资产转账至做市商 everPay 账户，传递特定的 `data` 数据，标记该笔 everPay `transfer` 交易为快速提现，来让做市商给用户提现地址进行区块链转账，达到快速提现目的。

1. 用户在 `transfer` everPay Tx 中指定 `data` 数据
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
2. 将资产通过 everPay 转账至做市商 everPay 账户 （通过 express/info）接口获取
3. 做市商在收到该笔资产后，进行校验
  * 校验通过，立即给用户的提现地址发送扣减手续费后的资产数额
  * 校验不通过，立即退回资产至用户 everPay 账户
