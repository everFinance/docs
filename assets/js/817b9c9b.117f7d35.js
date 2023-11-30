"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[412],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>s});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,s=b["".concat(d,".").concat(u)]||b[u]||f[u]||c;return t?n.createElement(s,i(i({ref:a},l),{},{components:t})):n.createElement(s,i({ref:a},l))}));function s(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[b]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1940:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const c={sidebar_position:2},i="tx",o={unversionedId:"guide/server-api/operation-api/tx",id:"guide/server-api/operation-api/tx",title:"tx",description:"\u529f\u80fd",source:"@site/docs/guide/server-api/operation-api/tx.md",sourceDirName:"guide/server-api/operation-api",slug:"/guide/server-api/operation-api/tx",permalink:"/docs/guide/server-api/operation-api/tx",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/server-api/operation-api/tx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/guide/server-api/operation-api/intro"},next:{title:"\u57fa\u4e8e\u5b58\u50a8\u7684\u8ba1\u7b97\u8303\u5f0f",permalink:"/docs/guide/refrence/storage-based-computation-paradigm"}},d={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:3}],l={toc:p},b="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tx"},"tx"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u6240\u6709 everPay \u7684\u4ea4\u6613\uff0c\u90fd\u4f1a\u751f\u6210 everPay \u4ea4\u6613",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u7ed3\u6784"),"\uff0c\u5e76\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u53d1\u9001\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," API\uff0c\u7ecf\u8fc7 everPay \u540e\u7aef\u670d\u52a1\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"\u5728\u7528\u6237\u7aef\uff0c\u53ea\u4f1a\u751f\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u8d26\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer")," everPay \u4ea4\u6613\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u73b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"burn")," everPay \u4ea4\u6613\u3002")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"path ",(0,r.kt)("inlineCode",{parentName:"li"},"{{endpoint}}/tx")),(0,r.kt)("li",{parentName:"ul"},"Post data ",(0,r.kt)("inlineCode",{parentName:"li"},"everpayTx"))),(0,r.kt)("p",null,"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema")," \u751f\u6210\u3001\u7b7e\u540d\uff0c\u4ee5\u53ca\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6\uff0c\u8bf7\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"../../dive/transaction"},"DOCS - \u7cfb\u7edf\u6982\u89c8 - \u4ea4\u6613"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api-dev.everpay.io/tx\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "tokenSymbol": "USDT",\n  "action": "mint",\n  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "to": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "amount": "1000000000",\n  "fee": "0",\n  "feeRecipient": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "nonce": "125",\n  "tokenID": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n  "chainType": "ethereum",\n  "chainID": "42",\n  "data": "{\\"blockHash\\":\\"0x92a3f4b955177d9e25eb68767804756710a43925726f6028ae41f8c1682e4516\\",\\"blockNumber\\":\\"0x172763a\\",\\"chainId\\":\\"0x2a\\",\\"condition\\":null,\\"creates\\":null,\\"from\\":\\"0xa06b79e655db7d7c3b3e7b2cceeb068c3259d0c9\\",\\"gas\\":\\"0x1319e\\",\\"gasPrice\\":\\"0x2d1375900\\",\\"hash\\":\\"0x8633e2e294dd2b0995bbd313390797be673f67196c51c0f49b8f17c0893d1c66\\",\\"input\\":\\"0xa9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca00\\",\\"nonce\\":\\"0x2ee\\",\\"publicKey\\":\\"0x103e40746c8cadcf3ec79cc5143e98c23bf22bf3e4abb6cd96221dfc2439494bbd2cdbb232bff9b69f931542e2ceb13253eaebe977f3613a9686a782738e6424\\",\\"r\\":\\"0xd959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310\\",\\"raw\\":\\"0xf8ac8202ee8502d13759008301319e94d85476c906b5301e8e9eb58d174a6f96b9dfc5ee80b844a9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca0077a0d959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310a04a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\\",\\"s\\":\\"0x4a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\\",\\"standardV\\":\\"0x0\\",\\"to\\":\\"0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\\",\\"transactionIndex\\":\\"0x3\\",\\"v\\":\\"0x77\\",\\"value\\":\\"0x0\\"}",\n  "version": "v1",\n  "sig": "0x41054e11f44ddc72adf6f24efd9701ba510c7858ec8a1f0b08891e8d6f19869b552fb79134cb804d9074a3230c727c29930786435c46be21804dac0e3d871d831c"\n}\'\n')),(0,r.kt)("h3",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ok"\n}\n')))}f.isMDXComponent=!0}}]);