"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(d,".").concat(f)]||u[f]||s[f]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:7},l="txs",o={unversionedId:"sdk/server-api/basic-api/txs",id:"sdk/server-api/basic-api/txs",title:"txs",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/basic-api/txs.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/txs",permalink:"/docs/sdk/server-api/basic-api/txs",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/basic-api/txs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sdk",previous:{title:"fee",permalink:"/docs/sdk/server-api/basic-api/fee"},next:{title:"txsByAccount",permalink:"/docs/sdk/server-api/basic-api/txsByAccount"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txs"},"txs"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"everPay \u4e0a\u6240\u6709\u4ea4\u6613\u8bb0\u5f55\uff0c\u901a\u8fc7 \u5206\u9875 \u5f62\u5f0f\u83b7\u53d6"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/txs?page={{page}}&tokenTag={{tokenTag}}&action={{action}}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenTag"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"./info"},"info")," \u63a5\u53e3\u83b7\u5f97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5176\u4e2d ",(0,r.kt)("a",{parentName:"td",href:"../../../guide/dive/withdraw#%E5%BF%AB%E9%80%9F%E6%8F%90%E7%8E%B0"},"\u5feb\u901f\u63d0\u73b0")," \u4ea4\u6613\u8bb0\u5f55\u5f52\u7c7b\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"action: 'transfer'")," \u7b5b\u9009\u4e2d\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withoutAction"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u6392\u9664\u67d0\u79cd\u7c7b\u578b\u7684\u4ea4\u6613\u3002\u5176\u4e2d ",(0,r.kt)("a",{parentName:"td",href:"../../../guide/dive/withdraw#%E5%BF%AB%E9%80%9F%E6%8F%90%E7%8E%B0"},"\u5feb\u901f\u63d0\u73b0")," \u4ea4\u6613\u8bb0\u5f55\u5f52\u7c7b\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"action: 'transfer'")," \u7b5b\u9009\u4e2d\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26")))))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"\u6307\u5357 - \u6df1\u5165\u7406\u89e3 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/txs?page=1'\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  currentPage: 1,\n  totalPages: 196,\n  txs: [\n    {\n      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',\n      tokenSymbol: 'ETH',\n      action: 'burn',\n      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',\n      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',\n      amount: '979251798000000000',\n      fee: '20000000000000000',\n      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n      nonce: 1625733233558,\n      tokenID: '0x0000000000000000000000000000000000000000',\n      chainType: 'ethereum',\n      chainID: '42',\n      data: '',\n      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',\n      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',\n      status: 'packaged',\n      timestamp: 1625733624000,\n      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'\n    },\n    // etc.\n  ]\n}\n")))}s.isMDXComponent=!0}}]);