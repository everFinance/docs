---
sidebar_position: 3
---

# account

## Configuration item function

- When calling everpay-js [basic api](../basic-api/intro), this `account` configuration item is passed to the basic API as the default account parameter
- When calling everpay-js [operation API](../operation-api/intro)(everPay deposit, transfer, withdraw), **this `account` configuration item must be passed**
  - Smart Account Model:
    - Must be obtained via [`smartAccountAuth`](../tool-api/smartAccountAuth.md) to ensure consistency with the account logged in at <https://beta.everpay.io>
    - must configure [`isSmartAccount`](./isSmartAccount.md) to `true`
  - A blockchain account model that must fulfill one of the following wallet addresses:
    - The same address with the ethereum wallet address corresponding to `ethConnectedSigner`
    - The same address with the arweave wallet address corresponding to `arJWK`

## Basic Query API Example

### Default account

```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
})
// Query account 0x26361130d5d6E798E9319114643AF8c868412859 for ETH asset balance on everpay production environment
everpay
  .balance({
    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000'
  })
  .then(console.log)
```

### Query account

```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
}).then(console.log)

// Query the balance of ETH assets on another account 0x2ca81e1253f9426c62Df68b39a22A377164eeC92 on the everpay production environment
everpay.balance({
  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000'
  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92'
}).then(console.log)

// The above code will not overwrite the account address at initialization
// Query the balance of ETH assets on another account 0x26361130d5d6E798E9319114643AF8c868412859 on the everpay production environment
everpay.balance({
  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
}).then(console.log)
```

## Operation API Example

See [ethConnectedSigner](./ethConnectedSigner) or [arJWK](./arJWK) for details.
