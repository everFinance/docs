---
sidebar_position: 1
---

# Introduction

everpay-js creates configuration items for Everpay instances. Configuration items contain: `debug`, `account`, `chainType`, `isSmartAccount`, `ethConnectedSigner`, `arJWK`. 

* The configuration type is [`Config`](../types#config)

```ts
export interface Config {
  debug?: boolean
  account?: string
  chainType?: ChainType
  ethConnectedSigner?: Signer
  arJWK?: ArJWK
  isSmartAccount?: boolean
}
```