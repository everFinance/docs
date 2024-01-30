---
sidebar_position: 6
---

# hashMessage

## 功能

将 message 参数通过 与 everHash hash 算法一致的 `personalMessage` 生成 `personalMessageHex` string

## 参数

```ts
everpay.hashMessage(message: string): string
```

## 返回

personalMessageHex string

## 示例

```ts
const personalMessageHex = everpay.hashMessage('Hello World')
/* 示例返回
0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2
*/
```
