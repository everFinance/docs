(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2312],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},A=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),A=l(t),d=a,b=A["".concat(u,".").concat(d)]||A[d]||s[d]||c;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=A;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}A.displayName="MDXCreateElement"},5222:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return A}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),i=["components"],o={sidebar_position:4},u="balance",l={unversionedId:"documentation/server-api/basic-api/balance",id:"documentation/server-api/basic-api/balance",isDocsHomePage:!1,title:"balance",description:"\u529f\u80fd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/documentation/server-api/basic-api/balance.md",sourceDirName:"documentation/server-api/basic-api",slug:"/documentation/server-api/basic-api/balance",permalink:"/zh-cn/docs/documentation/server-api/basic-api/balance",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/documentation/server-api/basic-api/balance.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"documentation",previous:{title:"balances",permalink:"/zh-cn/docs/documentation/server-api/basic-api/balances"},next:{title:"txs",permalink:"/zh-cn/docs/documentation/server-api/basic-api/txs"}},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],s={toc:p};function A(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"balance"},"balance"),(0,c.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,c.kt)("p",null,"\u83b7\u53d6 \u5bf9\u5e94 ",(0,c.kt)("inlineCode",{parentName:"p"},"account")," \u5728 everPay \u4e0a\u7684 \u6307\u5b9a\u4ee3\u5e01 \u7684\u8d44\u4ea7\u4f59\u989d"),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balance/{{tokenTag}}/{{account}}")),(0,c.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'\n")),(0,c.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balance": {\n    "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n    "amount": "220000000",\n    "decimals": 12\n  }\n}\n')))}A.isMDXComponent=!0}}]);