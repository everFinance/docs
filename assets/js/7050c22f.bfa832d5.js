"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||b[u]||i;return a?n.createElement(f,c(c({ref:t},s),{},{components:a})):n.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,c[1]=d;for(var o=2;o<i;o++)c[o]=a[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:9},c="txByHash",d={unversionedId:"guide/server-api/basic-api/txByHash",id:"guide/server-api/basic-api/txByHash",title:"txByHash",description:"\u529f\u80fd",source:"@site/docs/guide/server-api/basic-api/txByHash.md",sourceDirName:"guide/server-api/basic-api",slug:"/guide/server-api/basic-api/txByHash",permalink:"/docs/guide/server-api/basic-api/txByHash",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/server-api/basic-api/txByHash.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"guide",previous:{title:"txsByAccount",permalink:"/docs/guide/server-api/basic-api/txsByAccount"},next:{title:"mintedTxByChainTxHash",permalink:"/docs/guide/server-api/basic-api/mintedTxByChainTxHash"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],s={toc:o},p="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txbyhash"},"txByHash"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\uff0c\u90fd\u4f1a\u751f\u6210\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u5b57\u7b26\u4e32\u3002\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u7684\u5177\u4f53\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4e00\u7b14  ",(0,r.kt)("inlineCode",{parentName:"p"},"\u666e\u901a\u63d0\u73b0")," \u4ea4\u6613\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u8be6\u60c5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u4e0d\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8be5\u7b14\u662f \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u662f\u5426\u5df2\u7ecf\u88ab\u8bb0\u5f55\u5230 arweave \u533a\u5757\u94fe\u4e0a\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u786e\u4fdd\u4e86\u8d26\u672c\u7684\u6b63\u786e\u6027"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"targetChainTxHash")," \u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8be5\u7b14\u662f \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u5728\u7528\u6237\u8981\u63d0\u73b0\u7684\u533a\u5757\u94fe\u4e0a\uff0c\u591a\u7b7e\u94b1\u5305/\u9501\u4ed3\u5730\u5740\uff0c\u5df2\u7ecf\u53d1\u9001\u4ea4\u6613\u5e76\u4e14\u5df2\u7ecf\u6253\u5305\u5b8c\u6210\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u7528\u6237\u63d0\u73b0\u7684\u8d44\u4ea7\u5df2\u5230\u8d26"),"\u3002")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/tx/{{everHash}}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u6bd4\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"everHash"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u4ea4\u6613\u5b8c\u6210\u540e\uff0c\u751f\u6210\u7684\u552f\u4e00\u5b57\u7b26\u3002")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"../../dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"DOCS - \u7cfb\u7edf\u6982\u89c8 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.everpay.io/tx/0x1b92bc251eb2da71511e9bce6c4be990293e54d5652b4da3e335d539e07b98c7'\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tx":{\n        "rawId":1,\n        "id":"RyS1flxlO_RDURDDNERrc7aYrOq74HbOitcu2mnRbPg",\n        "tokenSymbol":"USDT",\n        "action":"mint",\n        "from":"0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n        "to":"0x3F52acd59FFD2e5ea88c3aeB04046173fDbA8ddb",\n        "amount":"100000000",\n        "fee":"0",\n        "feeRecipient":"0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n        "nonce":1620961926378,\n        "tokenID":"0xdAC17F958D2ee523a2206206994597C13D831ec7",\n        "chainType":"ethereum",\n        "chainID":"1",\n        "data":"{\\"hash\\": \\"0x9b25f2f2cd0233ced0d9b6b4b6b8828747f54b7fd7d897db1eaf61f57325f645\\", \\"nonce\\": \\"0x5\\", \\"blockHash\\": \\"0x04f1209be4c9c0b0a976ef5389bed09dcd7a281e7a64e892c603186d13ef774b\\", \\"blockNumber\\": \\"0xbdaaa7\\", \\"transactionIndex\\": \\"0xe1\\", \\"chainId\\": \\"0x1\\", \\"condition\\": null, \\"creates\\": null, \\"from\\": \\"0x3F52acd59FFD2e5ea88c3aeB04046173fDbA8ddb\\", \\"to\\": \\"0xdAC17F958D2ee523a2206206994597C13D831ec7\\", \\"value\\": \\"0x0\\", \\"gas\\": \\"0xf6dd\\", \\"gasPrice\\": \\"0x178411b200\\", \\"input\\": \\"0xa9059cbb00000000000000000000000038741a69785e84399fcf7c5ad61d572f7ecb1dab0000000000000000000000000000000000000000000000000000000005f5e100\\", \\"r\\": \\"0x67c6ea0e85a54d10dc6e20e7087b0f6a4fcf3173e38cd6847dbe2c92dd307e54\\", \\"s\\": \\"0x57818c62707bbbd3aa5d8d527b6eafa62d0f02f9f2e11fe7bb680040328657d5\\", \\"v\\": \\"0x26\\"}",\n        "version":"",\n        "sig":"0x0b2c6032fe3cae6f26eec35958b7bbdd2bca1ab34ec1531d8df7dddd2a99d95919ee8667703a0212c9643b20cb5ab3ed35c9db17c5f2d317a951de10a65f34411b",\n        "everHash":"0x1b92bc251eb2da71511e9bce6c4be990293e54d5652b4da3e335d539e07b98c7",\n        "status":"packaged",\n        "internalStatus":"{\\"status\\":\\"success\\"}",\n        "timestamp":1620962091000,\n        "targetChainTxHash":"0x9b25f2f2cd0233ced0d9b6b4b6b8828747f54b7fd7d897db1eaf61f57325f645",\n        "express":{\n            "chainTxHash":"",\n            "withdrawFee":"",\n            "refundEverHash":"",\n            "err":""\n        }\n    }\n}\n')))}b.isMDXComponent=!0}}]);