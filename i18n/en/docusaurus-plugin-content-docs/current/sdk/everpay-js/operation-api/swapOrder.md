---
sidebar_position: 8
---

# swapOrder

## Introduction
Developers can visit the [Guide - Dive - Swap](../../../guide/dive/swap) section for more information.
## Function
Pass [`bundleData`](../types#bundledata) generated by [`getSwapBundleData`](../tool-api/getSwapBundleData) interface, sign `bundleData` based on the `account`, `ethConnectedSigner`, `arJWK` parameters passed during Everpay instance creation, and internally generate [`BundleDataWithSigs`](../types#bundledatawithsigs) and submit it to everPay Swap server.

## Parameter
[`bundleData`](../types#bundledata)

## Return
`everHash` string

## Example
```ts
const provider = new ethers.providers.InfuraProvider('kovan')
const signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)

const everpayEthAccount = new Everpay({
  account: ethWalletHasUSDT.address,
  ethConnectedSigner: signer,
  debug: true
})

const swapBundleData = await everpayEthAccount.getSwapBundleData({
  tokenIn: 'ETH',
  tokenOut: 'usdt',
  tokenInAmount: '0.01',
  tokenOutAmount: '20.666'
})
/*
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      amount: '10000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '20666000'
    }
  ],
  expiration: 1630652385,
  salt: 'ad02db6c-5b9c-4bc8-92f3-30887ddd4f54',
  version: 'v1'
}
*/

const everHash = await everpayEthAccount.swapOrder(swapBundleData)
// 0xf49faae3c0690ae6e9a11f76dfdb25fb7a5f20f6452e0d6166dcd16fdbe8a07c

const transaction = await everpayEthAccount.txByHash(everHash)
/*
{
  id: '',
  tokenSymbol: 'eth',
  action: 'bundle',
  from: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
  to: '0x26361130d5d6E798E9319114643AF8c868412859',
  amount: '0',
  fee: '0',
  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',
  nonce: 1630652326443,
  tokenID: '0x0000000000000000000000000000000000000000',
  chainType: 'ethereum',
  chainID: '42',
  data: '{"bundle":{"items":[{"tag":"ethereum-eth-0x0000000000000000000000000000000000000000","chainID":"42","from":"0x26361130d5d6E798E9319114643AF8c868412859","to":"0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00","amount":"10000000000000000"},{"tag":"ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee","chainID":"42","from":"0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00","to":"0x26361130d5d6E798E9319114643AF8c868412859","amount":"20666000"}],"expiration":1630652385,"salt":"ad02db6c-5b9c-4bc8-92f3-30887ddd4f54","version":"v1","sigs":{"0x26361130d5d6E798E9319114643AF8c868412859":"0xdb795170f1d5fa557a91056c7c149d1dd0f3de0c12ef49cf8eb6de3460d90eac4f037211d2e63045e5d7190d2ea3c189ff6262c8a7c687ee7712fb7361aaf8101b","0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00":"0xc5252f4debcbf06e07cdd32a06a1ff884aeef303dd1bd5d0675002fe5491729e16bad819cea31f7789da81f84f3a5b543b5ca4320de14b1c8f6f7b9e69bf17181c"}}}',
  version: 'v1',
  sig: '0x9242d3c8cb351114d035a3eda2d8ee2428e7e524b10c706c49023ff9ab8a096f0003469f61cb7a02eec00d46499878058ae42c1729292fdeed2c31d5fe4f44541b',
  everHash: '0xf49faae3c0690ae6e9a11f76dfdb25fb7a5f20f6452e0d6166dcd16fdbe8a07c',
  status: 'confirmed',
  internalStatus: 'success',
  timestamp: 0,
  targetChainTxHash: '',
  express: { chainTxHash: '', withdrawFee: '', refundEverHash: '', err: '' }
}
*/
```