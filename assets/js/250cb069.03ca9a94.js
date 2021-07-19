(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4936],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6682:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:7},s="txByHash",d={unversionedId:"documentation/everpay-js/basic-api/txByHash",id:"documentation/everpay-js/basic-api/txByHash",isDocsHomePage:!1,title:"txByHash",description:"Function",source:"@site/docs/documentation/everpay-js/basic-api/txByHash.md",sourceDirName:"documentation/everpay-js/basic-api",slug:"/documentation/everpay-js/basic-api/txByHash",permalink:"/docs/documentation/everpay-js/basic-api/txByHash",editUrl:"https://github.com/everFinance/docs/edit/master/docs/documentation/everpay-js/basic-api/txByHash.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"documentation",previous:{title:"txsByAccount",permalink:"/docs/documentation/everpay-js/basic-api/txsByAccount"},next:{title:"mintedTxByChainTxHash",permalink:"/docs/documentation/everpay-js/basic-api/mintedTxByChainTxHash"}},p=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]},{value:"Example return",id:"example-return",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"txbyhash"},"txByHash"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Each everPay transaction has a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," string. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," to look up the details of the transaction."),(0,i.kt)("p",null,"For example, for a normal withdraw (not fast withdraw), you can query the transaction details via ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is not an empty string, which means whether the transaction has been recorded on the arweave blockchain, ",(0,i.kt)("strong",{parentName:"li"},"which ensures the correctness of the ledger")),(0,i.kt)("li",{parentName:"ul"},"when the ",(0,i.kt)("inlineCode",{parentName:"li"},"targetChainTxHash")," is not empty, it means the transaction has been sent and packaged on the blockchain where the user wants to withdraw, ",(0,i.kt)("strong",{parentName:"li"},"the assets withdrawn by the user have arrived"),".")),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,"string"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This string is the ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," string"))),(0,i.kt)("h2",{id:"return"},"Return"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#everpaytransaction"},"EverpayTransaction")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everHash = '0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8'\nconst everpay = new Everpay({ debug: true })\neverpay.txByHash(everHash).then(console.log)\n")),(0,i.kt)("h2",{id:"example-return"},"Example return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "tx": {\n    "id": "bTpNVdf65ZDdKhWZElS1yg0g9xV_F4y41t7q56NAJqU",\n    "tokenSymbol": "ETH",\n    "action": "mint",\n    "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n    "to": "0x26361130d5d6E798E9319114643AF8c868412859",\n    "amount": "10000000000000",\n    "fee": "0",\n    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n    "nonce": 1625652570825,\n    "tokenID": "0x0000000000000000000000000000000000000000",\n    "chainType": "ethereum",\n    "chainID": "42",\n    "data": "{\\"hash\\": \\"0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b\\", \\"nonce\\": \\"0xc6\\", \\"blockHash\\": \\"0x2a9c4090b8110e602d7b346d07d34d2f7445d0b20c76fda12f1757f98189f354\\", \\"blockNumber\\": \\"0x18c3854\\", \\"transactionIndex\\": \\"0x1\\", \\"from\\": \\"0x26361130d5d6E798E9319114643AF8c868412859\\", \\"to\\": \\"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\\", \\"value\\": \\"0x9184e72a000\\", \\"gas\\": \\"0x587a\\", \\"gasPrice\\": \\"0x1bf08eb00\\", \\"input\\": \\"0x\\", \\"r\\": \\"0xea4722b335b447a8d01c06fb6be4840494dea3869979a92b0ba5a4f4e4d5d6cc\\", \\"s\\": \\"0x23ce4a06c1185625244415de593f15fa4e97c32c5379ead26d788e864b917da4\\", \\"v\\": \\"0x77\\"}",\n    "sig": "0x9d7336dbcb1b06fcd0eed3fc60b1dffc5391cd27888def366b1aeaeaedf91ae663f8dfb9c1b53395572b7a668491eb91edfe2e1f49a5d9ffa592027a06e3a4ee1c",\n    "everHash": "0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8",\n    "status": "packaged",\n    "timestamp": 1625653293000,\n    "targetChainTxHash": "0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b"\n  }\n}\n')))}u.isMDXComponent=!0}}]);