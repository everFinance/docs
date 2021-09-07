---
sidebar_position: 3
---

# swapOrder

## Introduction
Developers can visit the [Guide - Dive - Swap](../../../guide/dive/swap) section for more information.

## Function
* path `{{swapEndpoint}}/dex/place_order`
* Post data `bundle`

For `bundleData` generation, signature, please read [Guide - Dive - Bundle - Data Generate Description](../../../guide/dive/bundle#data-generate-gescription)

### Return Fields
|Field|Description|
|---|---|
|everHash|The `everHash` of the [bundle transaction](../../../guide/dive/bundle) submitted by everPay Swap Market Maker|

## Example
```bash
curl --location --request POST 'https://warriors-dev.everpay.io/dex/place_order' \
--header 'Content-Type: application/json' \
--data-raw '{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '2066600'
    }
  ],
  expiration: 1630640301,
  salt: '090dd55f-62c3-4ac8-bb0b-8172fb734099',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'CTFa-ZDuO__-NShlFBgAbstLEU6af4eDKaT42mCH5wl-h7IshESOzdAQ7Hicms4B7ugvoiG-O67zh2bvYBf2xGXDGF-y547VDVfllH9sYVr2h3TwFEu_K9KIas1-coJoUFKUlmC9MYtoY5oRoPBpchBm2KScY1bU_uOtbn_9BmL8rrPE8UBpxne0RsKQti8d8EG62jrNm0SHyxqa2EQzhq6qWHiB71c6IKLSX0KzecTd_XIPQB781UJt6uC5CAVTTLk3o6spRm5hZpDpG5-Xi5YUKP5B3DmTsd6Ta2pU5zkQv8SBrS9_T_wQy8T4a9tn13EquNGQrvyftUXBpqmT68a89T9QExWBjGCQY4xtooz9OK1iAImBXJZ-3GrsoARu29ku7eg5NFOkmgWtHm77XmP6QmRy1NakAVCbwE03Sf0ifTjV4Hp5jo8xEpnfsaHtzBmjyRYpa0j7nsRwmu-mDPvGdoN1fBmZDIvLQRz8FVSBgQVybL1Bzx8NjCAH0D7QEP3IYgY7cHcUx8uwo5jwC5zoh8IB_kJYiThiLHvkdWi548aBisfR0NaZDnwRqJsXfOpEgT-W2-5mex4m7Hmkv6TXGxLbBOox6LKzv6q33AZJngl-ocrAwPn6SkBTWbsbUyFrSj0WYl4AN8RKX8nEVzzaeV6mlN6FfDAygNRduQo,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  }
}'
```

## Example return

```json
{
  "result": "ok",
  "everHash": "0xeb2d9a763bb79489bad8d3d7c6318a1fc734b4e0ab47bc475e50a3395614eb9e"
}
```