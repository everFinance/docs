---
sidebar_position: 1
---

# 介绍

根据 Everpay 实例创建时，传递的 `account`, `ethConnectedSigner`, `arJWK` 参数，在：

* 充值时，调用对应（插件）钱包转账功能，对 everPay 账户进行充值
* 转账时
  * 内部构建 [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
  * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
  * 将信息发送给 everPay 后端服务器，进行签名验证
  * 后端服务器验证通过，更新用户资产余额。并将该笔 everPay 交易记录存储在 arweave 区块链上
* 提现时
  * 在普通提现时
    * 内部构建**普通提现** [Schema](../../../guide/dive/withdraw#schema-说明)
    * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
    * 将信息发送给 everPay 后端服务器，进行签名验证
    * 后端服务器验证通过，将该笔 everPay 交易记录存储在 arweave 区块链上
    * 等待 arweave 区块链完成该笔 everPay 交易记录存储，确保账户的正确性后
    * 多签钱包/锁仓地址，给用户提现地址，提现对应数量（扣除手续费后）资产代币
    * 更多信息请阅读 [指南 - 深入理解 - 提现](../../../guide/dive/withdraw)
  * 在快速提现时
    * 内部构建**快速提现** [Schema](../../../guide/dive/withdraw#schema-说明-1)
    * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
    * 将信息发送给 everPay 后端服务器，进行签名验证
    * 后端服务器验证通过，做市商 everPay 账户收到资产
    * 做市商通过原生区块链转账，将对应数量（扣除手续费后）资产代币转账至用户提现钱包地址
    * 更多信息请阅读 [指南 - 深入理解 - 提现 - 快速提现](../../../guide/dive/withdraw#快速提现)
* 批量转账时
  * 内部转账交易
    * 内部构建 [BundleData](../types/#bundledata)
    * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [BundleDataWithSigs](../types#bundledatawithsigs)
  * 外部转账交易
    * 内部构建 [EverpayTxWithoutSig](../types#everpaytxwithoutsig)
    * 调用对应（插件）钱包签名功能，生成 `sig`，组装 [EverpayTx](../types#everpaytx)
    * 将信息发送给 everPay 后端服务器，进行签名验证
    * 后端服务器验证通过，更新用户资产余额。并将该笔 everPay 交易记录存储在 arweave 区块链上
    * 更多信息请阅读 [指南 - 深入理解 - 批量转账](../../../guide/dive/bundle)

:::caution
* 如需要调用 操作类API（everpay充值、转账、提现），在 Everpay 实例创建时必须传递 `ethConnectedSigner` 或 `arJWK` 之一。并且 `account` 配置项 **必须传递**，且与 传递的`ethConnectedSigner` 或 `arJWK` 对应的**钱包地址一致**
:::