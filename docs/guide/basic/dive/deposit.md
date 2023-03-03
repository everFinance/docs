---
sidebar_position: 4
---

# 充值

不同类型区块链的钱包地址在 everPay 上，都对应一个 everPay 账户，everPay 账户 ID 与该钱包在对应区块链的钱包地址一致。用户无需额外在 everPay 进行账户注册，目前 everPay 已支持所有 Ethereum 和 Arweave 的有效账户。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 在 everPay 上对应的账户 ID 即为 0x26361130d5d6E798E9319114643AF8c868412859
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 在 everPay 上对应的账户 ID 即为 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo

everPay 充值行为，即向 everPay DAO 管理的区块链钱包地址进行区块链转账。

例如：
* Ethereum 钱包 0x26361130d5d6E798E9319114643AF8c868412859 给 everPay 在 Ethereum 上的多签合约转账 0.1 USDT，everPay 的后端服务监测到该笔入账，并等待6个区块确认，即会在 everPay 上，标记此 0x26361130d5d6E798E9319114643AF8c868412859 everPay 账户 资产增加 0.1 USDT
* Arweave 钱包 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo 给 everPay 在 Arweave 管理的门限签名钱包地址转账 0.1 AR，everPay 的后端服务监测到该笔入账，并等待15个区块确认，即会在 everPay 上，标记此 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo everPay 账户 资产增加 0.1 AR


## 给 Ethereum 账户充值
### imToken / MetaMask 等区块链钱包
1. 通过 [info API](../../server-api/basic-api/info.md) 获取 everPay 在 Ethereum 的多签合约地址 `ethLocker`
2. 通过 imToken / MetaMask 等区块链钱包 工具，给该 `ethLocker` 多签合约地址转账想要充值的资产与数量
3. 等待 该笔交易 6 个区块确认
4. 通过 [balances API](../../server-api//basic-api//balances.md) 获取此钱包对应的 everPay 账户，在everPay 上的资产信息

### 通过 ethers.js
伪代码参考来源：[everpay-js src/lib/ethereum.ts#L14](https://github.com/everFinance/everpay-js/blob/main/src/lib/ethereum.ts#L14)

```ts
const transferAsync = async (ethConnectedSigner: Signer, {
  symbol,
  token,
  from,
  to,
  value
}: TransferAsyncParams): Promise<EthereumTransaction> => {
  let transactionResponse: EthereumTransaction
  if (symbol.toLowerCase() === 'eth') {
    const transactionRequest = {
      from: from.toLowerCase(),
      to: to?.toLowerCase(),
      value
    }
    transactionResponse = await ethConnectedSigner.sendTransaction(transactionRequest)
  } else {
    const tokenID = getTokenAddrByChainType(token, ChainType.ethereum)
    const erc20RW = new Contract(tokenID.toLowerCase(), erc20Abi, ethConnectedSigner)
    transactionResponse = await erc20RW.transfer(to, value)
  }
  return transactionResponse
}
```

### 通过 everpay-js
everpay-js 现已封装开源，内部集成了 ethers.js，开发者无需关心 `Token decimals`，易于集成与使用。

使用 everpay-js 进行充值，可参考：[everpay-js deposit](../../SDK/everpay-js/operation-api/deposit.md#ethereum-钱包-1)。


## 给 Arweave 账户充值
### ArConnect 等区块链钱包
1. 通过 [info API](../../server-api/basic-api/info.md) 获取 everPay 在 Arweave 上门限签名管理的钱包地址 `arLocker`
2. 通过 arConnect 等区块链钱包 工具，给该 `arLocker` 地址转账想要充值的资产与数量
3. 等待 该笔交易 15 个区块确认
4. 通过 [balances API](../../server-api/basic-api/balances.md) 获取此钱包对应的 everPay 账户，在everPay 上的资产信息

### 通过 arweave.js
伪代码参考来源：[everpay-js src/lib/arweave.ts#L102](https://github.com/everFinance/everpay-js/blob/main/src/lib/arweave.ts#L102)

```ts
const transferAsync = async (arJWK: ArJWK, {
  to,
  value
}: TransferAsyncParams): Promise<ArTransferResult> => {
  const arweave = Arweave.init(options)

  const transactionTransfer = await arweave.createTransaction({
    target: to,
    quantity: value.toString()
  }, arJWK)
  // 直接给原来 transaction 赋值了 signature 值
  await arweave.transactions.sign(transactionTransfer, arJWK)
  const responseTransfer = await arweave.transactions.post(transactionTransfer)
  return responseTransfer
}
```

### 通过 everpay-js
everpay-js 现已封装开源，内部集成了 arweave.js、arConnect，开发者无需关心 `Token decimals`，易于集成与使用。

使用 everpay-js 进行充值，可参考：[everpay-js deposit](../../SDK/everpay-js/operation-api/deposit.md#arweave-钱包-1)。

## everPay 交易
充值的 everPay 交易，是由 everPay 后端服务在检测到 everPay DAO 钱包地址收到资产后，由 **everPay 签名钱包** 生成 [`Schema`](./transaction#schema) 并进行签名后，提交至 everPay 服务器，来标记用户账户资产的增加。

**此部分充值的 everPay 交易，不需要开发者进行生成和签名，开发者可选择跳过。**

### Schema 说明
|字段|描述|
|---|---|
|tokenSymbol|代币名称|
|action|`'mint'`代表充值|
|from| everPay 签名钱包地址|
|to|用户进行充值的区块链转账钱包地址，即需要充值的 everPay 账户 ID|
|amount|充值资产数额，类型为 uint。设置时经过 `decimals` 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000|
|fee| 手续费，类型为 uint。设置时经过进行 decimals 处理，例如 0.1USDT，此处经过 USDT 的 `decimals: 6` 处理后，为 100000 |
|feeRecipient|手续费收款 everPay 账户 ID，通过 [info API](../../server-api/basic-api/info.md) 接口获取|
|nonce|unix milliseconds，unix 毫秒时间戳|
|tokenID|通过 [info API](../../server-api/basic-api/info.md) 接口获取，与 `tokenSymbol` 对应的 token `id` 字段**一致**|
|chainType|`chainType` 与 [info API](../../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 token `chainType` **一致**|
|chainID|`chainID` 与 [info API](../../server-api/basic-api/info.md) 接口获取的 `tokenSymbol` 对应 `chainID` **一致**|
|data|用户进行充值的区块链转账交易数据，不同的区块链转账交易数据不同|
|version|交易版本 `'v1'`|

:::info
* `action` 充值的 everPay 交易，`action` 指定为 `'mint'`
* `to` 指定为 充值的 everPay 账户 ID
* `data` everPay 会将原区块链的充值详情，作为 Schema `data` 参数，用于关联与溯源。
:::

### 以太坊账户充值示例
```json
{
  "tokenSymbol": "ETH",
  "action": "mint",
  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",
  "to": "0x98905d8B65A24bcE11D2915c9A5C526E62F80000",
  "amount": "90000000000000000",
  "fee": "0",
  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
  "nonce": 1627277080832,
  "tokenID": "0x0000000000000000000000000000000000000000",
  "chainType": "ethereum",
  "chainID": "1",
  "data": "{\"hash\": \"0x9fcfad3670edf887f3d42a48dfae82ec9c8689d2d8f5749099359b88042984dc\", \"nonce\": \"0xb\", \"blockHash\": \"0x3c40385cd619ec85981e129a3767128bcd21aaba2a0157e165380ef25af3b3e6\", \"blockNumber\": \"0xc4d666\", \"transactionIndex\": \"0x106\", \"from\": \"0x98905d8B65A24bcE11D2915c9A5C526E62F80000\", \"to\": \"0x38741A69785e84399Fcf7c5ad61D572f7EcB1dab\", \"value\": \"0x13fbe85edc90000\", \"gas\": \"0x587a\", \"gasPrice\": \"0x5d21dbfb3\", \"input\": \"0x\", \"r\": \"0x6b67df40d2509efbca5be9b95205d2844714f05f010c0de315efb13c37a712d0\", \"s\": \"0x5cd205e2cd0eea0011292d3fafa9475b138b2ff4947176bc94edc6e997b97179\", \"v\": \"0x25\"}",
  "sig": "0xccf208efaf9a2359ecf50f518e345e92b8b260a1692bdacdfe805be6e9a49f1d1ebe821ebbde2cb42744422becb1c430e4f67d822df22d7c26c6de08417c5f9a1c"
}
```

### Arweave 账户充值示例
```json
{
  "tokenSymbol": "AR",
  "action": "mint",
  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",
  "to": "4g-19C67-avcYzufcc4_ame3RNtCi12K9LDrkeXdwBA",
  "amount": "500000000000000",
  "fee": "0",
  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",
  "nonce": 1627476994839,
  "tokenID": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",
  "chainType": "arweave,ethereum",
  "chainID": "0,1",
  "data": "{\"format\": 2, \"id\": \"D3pYmLFViRQlDQW5_CJvAbFkPRgi_0MVrntkhFqBXv4\", \"last_tx\": \"EelSY8pa3ZXFUrtXVQmjh3xqkunr4zLj1iYNXQXSiwMn6r5lWXIxTTJalb75CT-e\", \"owner\": \"kqyojcylUXJ-zRZWCq0JsfB5Er7jZ8KIJdpu12xIiuD61WyAH0PZjGX-CeDjCDpdn2rz-5fywiSIhDelMSlLwRZlpMOX-wAR8sXVRlcjo9ybykNPJGSfuKjBvnkP7OyejvEm43pyGSpJWUMYZYDKDrZVTEnwz5bgiPRTPM8EIg8IJauibUrOVTJ9Fo3ffDVLo32P1H0gFMhI5eWn5z_UtXzmFLsxT8XUtWLdpF0aoe4LSoiBgw1BUnHKyX26L854HvULMGL9Onoy6qXMbzlJvUsmoqe8tjvgGlju4XvU0W8ec7ERXfUg9HnKPwC4Cz9U1kZT1JQMnU4S_RREoR9-UGWKWannAOjPB2rw4WMQklR8B-y5Z_hN4LbC5pAZeR-YBCqVc1aQhKYnXWYaVY_-TbHeqAk_befbgbrPrpc9pVlulUIIYdhj0G6QDThsJMUs0XcTjq3YH3_5w3Xzta6UW-wKrA00MfWASnjjMbN3zYfCFG9FQiW6DUaIQrSq-5Vdnb9n3QAMT4Uz5r0ifjbHF33fPxqkcEUD_HcdfuPnHqKcmhd_t-mc55g5Z9BKKGiOXv-H6Jq0vLahuYaZQwN4cxSyRHZNpzcFMwz-rQXeEqlFpoVvbj3xnysMAeuMgJFbS2GBMf2SftN6PDgnhpdh5EbdnL2jBlmBo6RumCcVgt8\", \"tags\": [{\"name\": \"U2lnbmluZy1DbGllbnQ\", \"value\": \"QXJDb25uZWN0\"}, {\"name\": \"U2lnbmluZy1DbGllbnQtVmVyc2lvbg\", \"value\": \"MC4zLjE\"}], \"target\": \"dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys\", \"quantity\": \"500000000000000\", \"data\": \"\", \"data_size\": \"0\", \"data_tree\": [], \"data_root\": \"\", \"reward\": \"1602432\", \"signature\": \"OyTAe5I_uAquM4rr09Zt1YDCORyfzpVkL59lue84KcM44qIuR9nIotNM0VVJkXLLcu3nRz16zOTFKLVwpqxzppSARclXP6_VSas9UHjrfx5WiQrJO1aTq821vlwbw6uAnZcOGfcci0dLCtXscNNKJ1mmjnqaccxmwUlEdbvJm29R0fiN5_y8UDKWlSVMrqm391-Gac7MEBdXTO5Em5foIrESnOb0-mF2Gdk5XsQ62y-6k9lqKnK56ro2gMaSCHlGUNtnxdEsOHpmjJTzt9lL7i8CH2gxZYIWAkJbsrtto_0td2nMeeS-JwdxwMsE__19iKQ_8PGPWJ_gevLjHI7uvtaYxGGMxCB-Gq9yiuNl9J5g4SNd82MeWE6OR4k44tyH6uGYBBKn5VSZKs2q5KR20vYV9d2PaRODKPhleZ5VpzjRMWDlypD-s7yCysUPOqMRW87oZjMB69Xm1ouN-f-q6TlT6GeO6J9QfsuHo2g6KwiISsSaYkYbMbxmMF05Y1fodKMPBjSdNFtPJLpDtXJO-HmYcY7yzyhKEjOewqpOdGFWcCDMecv4wy16nkk1HRuKcz72-BzSHo_CNYmwYewDXkktSkD3vl4EKvB7AYlBFX9C5zNMq-px1kKgZN_B5-AQ1rYiHUSNRj7lhFwabQferAJ7AfnVRlo2K-olriWSSQQ\", \"targetChainType\": \"arweave\"}",
  "sig": "0x2893bb0b2c5d743e656e66b2f76050166c062c369286d303a217b6ea00ea88fa1345683edd371d698b8cfaf8df7f60b19a16940e7349284b23521c1050cfb2ab1c"
}
```

## 记录查询
开发者可通过 [mintedTxByChainTxHash](../../server-api/basic-api/mintedTxByChainTxHash.md) 接口，根据充值的区块链记录ID （如以太坊为 `txHash`），查询充值的 everPay 交易记录，来确认充值是否已经完成。


