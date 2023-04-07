---
sidebar_position: 5
---

# signBundleData

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function

Sign `bundleData` according to `account`, `ethConnectedSigner`, `arJWK` parameters passed during Everpay instance creation, generate [`BundleDataWithSigs`](../types#bundledatawithsigs) for everPay bundle transaction specific `data` generation.

## Parameter

```ts
everpay.signBundleData(params:BundleData | BundleDataWithSigs):BundleDataWithSigs
```

<Tabs>
<TabItem value="field" label="Parameters" default>

|parameters|required|description|
|---|---|---|
|params| YES | <ul><li>`'BundleData'` is generated based on the specified data structure, see [getBundleData API](../tool-api/getBundleData.md) for `BundleData` data.</li><li>`'BundleDataWithSigs'` specific `data` for everPay batch transfer transactions </li></ul>|

</TabItem>
<TabItem value="type" label="类型">

```ts
export interface BundleData {
  items: BundleItem[]
  expiration: number
  salt: string
  version: string
}

export interface BundleDataWithSigs extends BundleData {
  sigs: {
    [account: string]: string
  }
}
```

</TabItem>
</Tabs>

## Return

```ts
export interface BundleDataWithSigs {
  items: BundleItem[]
  expiration: number
  salt: string
  version: string
  sigs: {
    [account: string]: string
  }
}
```

[View BundleItem Type](../types.md#bundledata)
:::info
[Typescript Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
:::

## Example

```ts
const bundleData = {
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '10000000'
    }
  ],
  expiration: 1630575873,
  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',
  version: 'v1'
}

// Sign bundleData with the private key corresponding to 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo wallet
const bundleDataWithSigs1 = await everpayArAccount.signBundleData(bundleData)
/*
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '10000000'
    }
  ],
  expiration: 1630575873,
  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'
  }
}
*/

// Sign bundleDataWithSigs1 with the private key corresponding to 0x26361130d5d6E798E9319114643AF8c868412859 wallet
const bundleDataWithSigs2 = await everpayEthAccount.signBundleData(bundleDataWithSigs1)
/*
{
  items: [
    {
      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',
      chainID: '42',
      from: '0x26361130d5d6E798E9319114643AF8c868412859',
      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      amount: '1000000000000000'
    },
    {
      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',
      chainID: '42',
      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',
      to: '0x26361130d5d6E798E9319114643AF8c868412859',
      amount: '10000000'
    }
  ],
  expiration: 1630575873,
  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',
  version: 'v1',
  sigs: {
    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',
    '0x26361130d5d6E798E9319114643AF8c868412859': '0x3402039220dbb7f2a0cddf9fa8c8919e1dc153f839108f214e0cd156f39f01c82b44a91faf446758c9cd0f7f638376416d8c5a4f149e6f5ad3dedeec88e9717a1c'
  }
}
*/

```
