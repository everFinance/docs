"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9024],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,b=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(b,c(c({ref:t},l),{},{components:n})):a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:9},c="txByHash",o={unversionedId:"sdk/server-api/basic-api/txByHash",id:"sdk/server-api/basic-api/txByHash",title:"txByHash",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txByHash.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/txByHash",permalink:"/en/docs/sdk/server-api/basic-api/txByHash",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txByHash.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sdk",previous:{title:"txsByAccount",permalink:"/en/docs/sdk/server-api/basic-api/txsByAccount"},next:{title:"mintedTxByChainTxHash",permalink:"/en/docs/sdk/server-api/basic-api/mintedTxByChainTxHash"}},s={},d=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return Fields",id:"return-fields",level:2},{value:"Example",id:"example",level:2},{value:"Example Return",id:"example-return",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txbyhash"},"txByHash"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Each everPay transaction has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," string. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," to look up the details of the transaction."),(0,r.kt)("p",null,"For example, for a normal withdrawal (not quick withdrawal), you can query the transaction details via ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"when the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," is not an empty string, which means whether the transaction has been recorded on the arweave blockchain, ",(0,r.kt)("strong",{parentName:"li"},"which ensures the correctness of the ledger")),(0,r.kt)("li",{parentName:"ul"},"when the ",(0,r.kt)("inlineCode",{parentName:"li"},"targetChainTxHash")," is not empty, it means the transaction has been sent and packaged on the blockchain where the user wants to withdraw, ",(0,r.kt)("strong",{parentName:"li"},"the assets withdrawn by the user have arrived"),".")),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/tx/{{everHash}}")),(0,r.kt)("h2",{id:"return-fields"},"Return Fields"),(0,r.kt)("p",null,"Field information can be viewed in ",(0,r.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#transaction-record"},"Guide - Dive - Transaction - Transaction Record")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/tx/0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8'\n")),(0,r.kt)("h2",{id:"example-return"},"Example Return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tx": {\n    "id": "bTpNVdf65ZDdKhWZElS1yg0g9xV_F4y41t7q56NAJqU",\n    "tokenSymbol": "ETH",\n    "action": "mint",\n    "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n    "to": "0x26361130d5d6E798E9319114643AF8c868412859",\n    "amount": "10000000000000",\n    "fee": "0",\n    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n    "nonce": 1625652570825,\n    "tokenID": "0x0000000000000000000000000000000000000000",\n    "chainType": "ethereum",\n    "chainID": "42",\n    "data": "{\\"hash\\": \\"0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b\\", \\"nonce\\": \\"0xc6\\", \\"blockHash\\": \\"0x2a9c4090b8110e602d7b346d07d34d2f7445d0b20c76fda12f1757f98189f354\\", \\"blockNumber\\": \\"0x18c3854\\", \\"transactionIndex\\": \\"0x1\\", \\"from\\": \\"0x26361130d5d6E798E9319114643AF8c868412859\\", \\"to\\": \\"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\\", \\"value\\": \\"0x9184e72a000\\", \\"gas\\": \\"0x587a\\", \\"gasPrice\\": \\"0x1bf08eb00\\", \\"input\\": \\"0x\\", \\"r\\": \\"0xea4722b335b447a8d01c06fb6be4840494dea3869979a92b0ba5a4f4e4d5d6cc\\", \\"s\\": \\"0x23ce4a06c1185625244415de593f15fa4e97c32c5379ead26d788e864b917da4\\", \\"v\\": \\"0x77\\"}",\n    "sig": "0x9d7336dbcb1b06fcd0eed3fc60b1dffc5391cd27888def366b1aeaeaedf91ae663f8dfb9c1b53395572b7a668491eb91edfe2e1f49a5d9ffa592027a06e3a4ee1c",\n    "everHash": "0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8",\n    "status": "packaged",\n    "timestamp": 1625653293000,\n    "targetChainTxHash": "0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b"\n  }\n}\n')))}p.isMDXComponent=!0}}]);