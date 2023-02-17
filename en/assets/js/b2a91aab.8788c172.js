"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1311],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(t),f=r,m=s["".concat(u,".").concat(f)]||s[f]||l[f]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5783:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=t(3117),r=(t(7294),t(3905));const i={sidebar_position:5},o="signBundleData",d={unversionedId:"sdk/everpay-js/operation-api/signBundleData",id:"sdk/everpay-js/operation-api/signBundleData",title:"signBundleData",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/operation-api/signBundleData.md",sourceDirName:"sdk/everpay-js/operation-api",slug:"/sdk/everpay-js/operation-api/signBundleData",permalink:"/en/docs/sdk/everpay-js/operation-api/signBundleData",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/operation-api/signBundleData.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sdk",previous:{title:"withdraw",permalink:"/en/docs/sdk/everpay-js/operation-api/withdraw"},next:{title:"bundle",permalink:"/en/docs/sdk/everpay-js/operation-api/bundle"}},u={},c=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2}],p={toc:c},s="wrapper";function l(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signbundledata"},"signBundleData"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Sign ",(0,r.kt)("inlineCode",{parentName:"p"},"bundleData")," according to ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arJWK")," parameters passed during Everpay instance creation, generate ",(0,r.kt)("a",{parentName:"p",href:"../types#bundledatawithsigs"},(0,r.kt)("inlineCode",{parentName:"a"},"BundleDataWithSigs"))," for everPay bundle transaction specific ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," generation."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../types#bundledata"},(0,r.kt)("inlineCode",{parentName:"a"},"BundleData"))),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../types#bundledatawithsigs"},(0,r.kt)("inlineCode",{parentName:"a"},"BundleDataWithSigs"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bundleData = {\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1'\n}\n\n// Sign bundleData with the private key corresponding to 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo wallet\nconst bundleDataWithSigs1 = await everpayArAccount.signBundleData(bundleData)\n/*\n{\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1',\n  sigs: {\n    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'\n  }\n}\n*/\n\n// Sign bundleDataWithSigs1 with the private key corresponding to 0x26361130d5d6E798E9319114643AF8c868412859 wallet\nconst bundleDataWithSigs2 = await everpayEthAccount.signBundleData(bundleDataWithSigs1)\n/*\n{\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1',\n  sigs: {\n    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',\n    '0x26361130d5d6E798E9319114643AF8c868412859': '0x3402039220dbb7f2a0cddf9fa8c8919e1dc153f839108f214e0cd156f39f01c82b44a91faf446758c9cd0f7f638376416d8c5a4f149e6f5ad3dedeec88e9717a1c'\n  }\n}\n*/\n\n")))}l.isMDXComponent=!0}}]);