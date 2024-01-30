---
sidebar_position: 6
---

# hashMessage

## Function

Generate `personalMessageHex` string from `personalMessage` by passing the message parameter through `personalMessage` consistent with the everHash hash algorithm.

## Parameter

```ts
everpay.hashMessage(message: string): string
```

## Return

personalMessageHex string

## Example

```ts
const personalMessageHex = everpay.hashMessage('Hello World')
/* 
0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2
*/
```
