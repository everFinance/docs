---
sidebar_position: 5
---

# fees

## 功能
获取在 everPay 上 `代币(token)` 的 `transfer`、`withdraw`、`bundle` 手续费.

## 参数
`{{ endpoint }}/fees`


## 返回字段
|字段|描述|
|---|---|
|tokenTag| token 的唯一标识，由 [Token](./info#token-字段描述) `chainType`, `symbol`, `id` 通过 `-` 组合。可通过 [`info`](./info.md#示例返回) 接口进行查看。|
|burnFeeMap|`withdraw` 手续费。|
|transferFee| `transfer` 手续费。|
|atomicBundleFee| `bundle` 手续费。|

## 示例

```bash
curl --location --request GET 'https://api-dev.everpay.io/fees'
```

## 示例返回
```json
{
  "fees":[
      {
          "tokenTag":"bsc-arg-0x7846cf6e181bb5c909d6010d15af5fffd3b61229",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"0"
          }
      },
      {
          "tokenTag":"bsc-bnb-0x0000000000000000000000000000000000000000",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"1560000000000000"
          }
      },
      {
          "tokenTag":"bsc-fra-0xa98242557818f0135b2381893caec3d4a64f88e5",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"146281560"
          }
      },
      {
          "tokenTag":"bsc-tar-0xf1458ee7e9a2096bce7a21c160840a3a291bcb55",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"0"
          }
      },
      {
          "tokenTag":"bsc-usdc-0x64544969ed7ebf5f083679233325356ebe738930",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"482590035577327800"
          }
      },
      {
          "tokenTag":"bsc-tusdc-0xf17a50ecc5fe5f476de2da5481cdd0f0ffef7712",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"0"
          }
      },
      {
          "tokenTag":"platon-lat-0x0000000000000000000000000000000000000000",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "platon":"780000000000000"
          }
      },
      {
          "tokenTag":"conflux-cfx-0x0000000000000000000000000000000000000000",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "conflux":"3120000000000000"
          }
      },
      {
          "tokenTag":"everpay-aaa-0x0000000000000000000000000000000000000001",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "everpay":"0"
          }
      },
      {
          "tokenTag":"arweave-pia-n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "arweave":"0"
          }
      },
      {
          "tokenTag":"arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "arweave":"65858067952767120",
              "ethereum":"46316859991109809680",
              "moon":"51311525787358200"
          }
      },
      {
          "tokenTag":"arweave-xyz-mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "arweave":"5268645436221360"
          }
      },
      {
          "tokenTag":"bsc-tardrive-0xf4233b165f1b8da4f9aa94abc35c9ad2a7612979",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "bsc":"0"
          }
      },
      {
          "tokenTag":"ethereum-dai-0x5db3ba2f03e6906405cf79e02cbfa21d72e5b636",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "ethereum":"6933914777157945120"
          }
      },
      {
          "tokenTag":"ethereum-eth-0x0000000000000000000000000000000000000000",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "ethereum":"4368000000000000"
          }
      },
      {
          "tokenTag":"moonbase-dev-0x0000000000000000000000000000000000000000",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "moon":"0"
          }
      },
      {
          "tokenTag":"moonbase-zlk-0x322f069e9b8b554f3fb43cefcb0c7b3222242f0e",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "moon":"0"
          }
      },
      {
          "tokenTag":"ethereum-usdc-0xf044320bcc3cd1f6100cd197754c71941469e79c",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "ethereum":"7190295"
          }
      },
      {
          "tokenTag":"ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "ethereum":"6932320"
          }
      },
      {
          "tokenTag":"arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "arweave":"3951484077166080",
              "moon":"3078691547241480"
          }
      },
      {
          "tokenTag":"arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8",
          "transferFee":"0",
          "bundleFee":"0",
          "burnFeeMap":{
              "arweave":"1315682438",
              "ethereum":"925297100058",
              "moon":"1025078254"
          }
      }
  ]
}
```