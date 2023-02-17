"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4843],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:7},o="txs",l={unversionedId:"sdk/server-api/basic-api/txs",id:"sdk/server-api/basic-api/txs",title:"txs",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/txs",permalink:"/en/docs/sdk/server-api/basic-api/txs",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sdk",previous:{title:"fee",permalink:"/en/docs/sdk/server-api/basic-api/fee"},next:{title:"txsByAccount",permalink:"/en/docs/sdk/server-api/basic-api/txsByAccount"}},c={},d=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return Fields",id:"return-fields",level:2},{value:"Example",id:"example",level:2},{value:"Example Return",id:"example-return",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txs"},"txs"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Get all transactions on everPay accessed by paging"),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/txs?page={{page}}&tokenTag={{tokenTag}}&action={{action}}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, default is 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenTag"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, via ",(0,r.kt)("a",{parentName:"td",href:"./info"},"info API")," interface to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, note that ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"../../../guide/dive/withdraw#quick-withdrawal"},"Quick Withdrawals"))," are categorized in the ",(0,r.kt)("inlineCode",{parentName:"td"},"action: 'transfer'")," filter. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'")," to deposit transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'")," to transfer transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'")," to withdraw transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'")," to bundle transactions")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withoutAction"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, exclusion of certain type of transactions, note that ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"../../../guide/dive/withdraw#quick-withdrawal"},"Quick Withdrawals"))," are categorized in the ",(0,r.kt)("inlineCode",{parentName:"td"},"action: 'transfer'")," filter. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'")," to deposit transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'")," to transfer transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'")," to withdraw transactions"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'")," to bundle transactions")))))),(0,r.kt)("h2",{id:"return-fields"},"Return Fields"),(0,r.kt)("p",null,"Field information can be viewed in ",(0,r.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#transaction-record"},"Guide - Dive - Transaction - Transaction Record")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/txs?page=1'\n")),(0,r.kt)("h2",{id:"example-return"},"Example Return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  currentPage: 1,\n  totalPages: 196,\n  txs: [\n    {\n      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',\n      tokenSymbol: 'ETH',\n      action: 'burn',\n      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',\n      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',\n      amount: '979251798000000000',\n      fee: '20000000000000000',\n      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n      nonce: 1625733233558,\n      tokenID: '0x0000000000000000000000000000000000000000',\n      chainType: 'ethereum',\n      chainID: '42',\n      data: '',\n      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',\n      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',\n      status: 'packaged',\n      timestamp: 1625733624000,\n      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'\n    },\n    // etc.\n  ]\n}\n")))}u.isMDXComponent=!0}}]);