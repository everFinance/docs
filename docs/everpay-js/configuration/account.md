---
sidebar_position: 3
---

# account

## Configuration item function

* When calling everpay-js [basic api](../basic-api/intro), this `account` configuration item is passed to the basic API as the default account parameter
* When calling everpay-js [operation API](../operation-api/intro)(everPay deposit, transfer, withdraw), this `account` configuration item **must be passed and satisfy one of the following wallet addresses**
    * The same address with the ethereum wallet address corresponding to `ethConnectedSigner`
    * The same address with the arweave wallet address corresponding to `arJWK`

## Basic API Example

### Default account
```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
})
// Query account 0x26361130d5d6E798E9319114643AF8c868412859 for ETH asset balance on everpay production environment
everpay.balance({
  symbol: 'ETH'
})
```

### Override account
```js
const everpay = new Everpay({
  debug: false,
  account: '0x26361130d5d6E798E9319114643AF8c868412859'
})

// Query the balance of ETH assets on another account 0x2ca81e1253f9426c62Df68b39a22A377164eeC92 on the everpay production environment
everpay.balance({
  symbol: 'ETH',
  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92'
})
```

## Operation API Example
See [ethConnectedSigner](/docs/everpay-js/configuration/ethConnectedSigner) or [arJWK](/docs/everpay-js/configuration/arJWK) for details.