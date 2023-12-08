---
sidebar_position: 1
---

# smartAccountAuth

## Function

Smart Account, app-side EverID login method, passes app-side `logo` to jump to `https://beta.everpay.io/auth` page, returns user's EverID (email address) when user registers/logs into everPay.

:::danger
This method only works in the browser environment
:::

## Parameter

```ts
everpay.smartAccountAuth(logo: string):Promise<string>
```

## Return

string

## Example

```ts
const account = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')
console.log('account', account)

// Example Return
/*  
  'test@gmail.com'
*/
```