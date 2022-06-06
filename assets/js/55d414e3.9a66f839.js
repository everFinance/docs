(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5008],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),u=r,s=f["".concat(d,".").concat(u)]||f[u]||b[u]||c;return n?a.createElement(s,i(i({ref:t},l),{},{components:n})):a.createElement(s,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6541:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var a=n(2122),r=n(9756),c=(n(7294),n(3905)),i=["components"],o={sidebar_position:2},d="tx",p={unversionedId:"sdk/server-api/operation-api/tx",id:"sdk/server-api/operation-api/tx",isDocsHomePage:!1,title:"tx",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/operation-api/tx.md",sourceDirName:"sdk/server-api/operation-api",slug:"/sdk/server-api/operation-api/tx",permalink:"/docs/sdk/server-api/operation-api/tx",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/operation-api/tx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/server-api/operation-api/intro"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/everpay-js/intro"}},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}]}],b={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"tx"},"tx"),(0,c.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,c.kt)("p",null,"\u6240\u6709 everPay \u7684\u4ea4\u6613\uff0c\u90fd\u4f1a\u751f\u6210 everPay \u4ea4\u6613\u5e76\u901a\u8fc7 ",(0,c.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u53d1\u9001\u81f3 ",(0,c.kt)("inlineCode",{parentName:"p"},"tx")," API\uff0c\u7ecf\u8fc7 everPay \u540e\u7aef\u670d\u52a1\u9a8c\u8bc1\u3002"),(0,c.kt)("p",null,"\u5728\u7528\u6237\u4fa7\uff0c\u53ea\u4f1a\u751f\u6210\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8f6c\u8d26\u7684 ",(0,c.kt)("inlineCode",{parentName:"li"},"transfer")," everPay \u4ea4\u6613"),(0,c.kt)("li",{parentName:"ul"},"\u63d0\u73b0\u7684 ",(0,c.kt)("inlineCode",{parentName:"li"},"burn")," everPay \u4ea4\u6613")),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"path ",(0,c.kt)("inlineCode",{parentName:"li"},"{{endpoint}}/tx")),(0,c.kt)("li",{parentName:"ul"},"Post data ",(0,c.kt)("inlineCode",{parentName:"li"},"everpayTx"))),(0,c.kt)("p",null,"\u5173\u4e8e ",(0,c.kt)("inlineCode",{parentName:"p"},"Schema")," \u751f\u6210\u3001\u7b7e\u540d\uff0c\u4ee5\u53ca\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6\uff0c\u8bf7\u9605\u8bfb ",(0,c.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction"},"\u6307\u5357 - \u6df1\u5165\u7406\u89e3 - \u4ea4\u6613")),(0,c.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api-dev.everpay.io/tx\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "tokenSymbol": "USDT",\n  "action": "mint",\n  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "to": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "amount": "1000000000",\n  "fee": "0",\n  "feeRecipient": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "nonce": "125",\n  "tokenID": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n  "chainType": "ethereum",\n  "chainID": "42",\n  "data": "{\\"blockHash\\":\\"0x92a3f4b955177d9e25eb68767804756710a43925726f6028ae41f8c1682e4516\\",\\"blockNumber\\":\\"0x172763a\\",\\"chainId\\":\\"0x2a\\",\\"condition\\":null,\\"creates\\":null,\\"from\\":\\"0xa06b79e655db7d7c3b3e7b2cceeb068c3259d0c9\\",\\"gas\\":\\"0x1319e\\",\\"gasPrice\\":\\"0x2d1375900\\",\\"hash\\":\\"0x8633e2e294dd2b0995bbd313390797be673f67196c51c0f49b8f17c0893d1c66\\",\\"input\\":\\"0xa9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca00\\",\\"nonce\\":\\"0x2ee\\",\\"publicKey\\":\\"0x103e40746c8cadcf3ec79cc5143e98c23bf22bf3e4abb6cd96221dfc2439494bbd2cdbb232bff9b69f931542e2ceb13253eaebe977f3613a9686a782738e6424\\",\\"r\\":\\"0xd959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310\\",\\"raw\\":\\"0xf8ac8202ee8502d13759008301319e94d85476c906b5301e8e9eb58d174a6f96b9dfc5ee80b844a9059cbb0000000000000000000000007749cc63da481aae8fe846db55b2cd216663a984000000000000000000000000000000000000000000000000000000003b9aca0077a0d959cbaffe7ab911a312fd023452a7dede9483a85ba8800961f36b040cf1f310a04a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\\",\\"s\\":\\"0x4a15cadb83b39d565154e0bb4c149d7ff478791ea82e1a3a1a2a91a047b8c52c\\",\\"standardV\\":\\"0x0\\",\\"to\\":\\"0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\\",\\"transactionIndex\\":\\"0x3\\",\\"v\\":\\"0x77\\",\\"value\\":\\"0x0\\"}",\n  "version": "v1",\n  "sig": "0x41054e11f44ddc72adf6f24efd9701ba510c7858ec8a1f0b08891e8d6f19869b552fb79134cb804d9074a3230c727c29930786435c46be21804dac0e3d871d831c"\n}\'\n')),(0,c.kt)("h3",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ok"\n}\n')))}f.isMDXComponent=!0}}]);