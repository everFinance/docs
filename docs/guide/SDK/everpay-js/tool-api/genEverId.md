---
sidebar_position: 5
---

# genEverId

## 功能

* 根据邮箱地址，返回对应邮箱的 eid 前缀格式的 EverId
* 非邮箱账户地址，立即返回原地址

## 参数

```ts
everpay.genEverId(account?: string): string
```

account 为 everpay 账户 ID，默认为 Everpay 实例创建时传递的 `account` 参数，详情查看[账户模型](../../../dive/account-model.md)。

## 返回

EverId string

## 示例

```ts
const emailEverId = everpay.genEverId('dvdsbjo8u1@163.com')
/* 示例返回
eid56e2f17ae24f15371a843a9d66c6a6f4703cb8fad59364fde5932559794bc760bea7
*/

const evmEverId = everpay.genEverId('0xb300a963622ee25b17f4Da0D7a210a8D53E27983')
/* 示例返回
0xb300a963622ee25b17f4Da0D7a210a8D53E27983
*/

const arEverId = everpay.genEverId('nQKiFZE11MiXjY18qib_M4vz_AHyO3cf6gxxbemtIJY')
/* 示例返回
nQKiFZE11MiXjY18qib_M4vz_AHyO3cf6gxxbemtIJY
*/
```
