"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},l="txs",o={unversionedId:"guide/server-api/basic-api/txs",id:"guide/server-api/basic-api/txs",title:"txs",description:"\u529f\u80fd",source:"@site/docs/guide/server-api/basic-api/txs.md",sourceDirName:"guide/server-api/basic-api",slug:"/guide/server-api/basic-api/txs",permalink:"/docs/guide/server-api/basic-api/txs",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/server-api/basic-api/txs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guide",previous:{title:"fee",permalink:"/docs/guide/server-api/basic-api/fee"},next:{title:"txsByAccount",permalink:"/docs/guide/server-api/basic-api/txsByAccount"}},p={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txs"},"txs"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"everPay \u4e0a\u6240\u6709\u4ea4\u6613\u8bb0\u5f55\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5206\u9875(10\u67611\u9875)")," \u5f62\u5f0f\u5c55\u793a\u3002"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{ endpoint }}/txs?page={{ page }}&tokenTag={{ tokenTag }}&action={{ action }}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a 1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenTag"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info#%E7%A4%BA%E4%BE%8B%E8%BF%94%E5%9B%9E"},(0,r.kt)("inlineCode",{parentName:"a"},"info"))," \u63a5\u53e3\u8fdb\u884c\u67e5\u770b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withoutAction"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6392\u9664\u67d0\u79cd\u7c7b\u578b\u7684\u4ea4\u6613\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26")))))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"../../dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"DOCS - \u7cfb\u7edf\u6982\u89c8 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.everpay.io/txs?page=1&tokenTag=ethereum-eth-0x0000000000000000000000000000000000000000'\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "currentPage":1,\n    "totalPages":11168,\n    "txs":[\n        {\n            "rawId":607851,\n            "id":"kiSRJt4wGKKNiCryVVI7Cl49v_1R5y6q856gUdRqIZo",\n            "tokenSymbol":"ETH",\n            "action":"transfer",\n            "from":"0x407634d12588a02e6c2FfcDeD96939634B6e100c",\n            "to":"uDA8ZblC-lyEFfsYXKewpwaX-kkNDDw8az3IW9bDL68",\n            "amount":"924145481608",\n            "fee":"0",\n            "feeRecipient":"0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n            "nonce":1680593181148,\n            "tokenID":"0x0000000000000000000000000000000000000000",\n            "chainType":"ethereum",\n            "chainID":"1",\n            "data":"{\\"appName\\":\\"arseeding\\",\\"action\\":\\"payment\\",\\"itemIds\\":[\\"7xx78FLBSDLCuJw2BcK6t6qxxAUPdEUTXHIUiRdF-kM\\"]}",\n            "version":"v1",\n            "sig":"0x5410910a56055546fca432b539f7dc0e4cd6a4555147f754629c1c2b5841c0dc3287b70c5fd1b06990e9b8f2e9d0994a90128f8383360e153f5843eecd6f02511b",\n            "everHash":"0xd08c893c7c6f6534a928cfb1c1ab958fd3d9866212c626185cceffc9614581ff",\n            "status":"packaged",\n            "internalStatus":"{\\"status\\":\\"success\\"}",\n            "timestamp":1680593586000,\n            "targetChainTxHash":"",\n            "express":{\n                "chainTxHash":"",\n                "withdrawFee":"",\n                "refundEverHash":"",\n                "err":""\n            }\n        },\n        // etc .\n    ]\n}\n\n')))}u.isMDXComponent=!0}}]);