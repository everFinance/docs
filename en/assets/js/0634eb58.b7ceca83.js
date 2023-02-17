"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9451],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},s),{},{components:n})):a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:3},l="balances",c={unversionedId:"sdk/server-api/basic-api/balances",id:"sdk/server-api/basic-api/balances",title:"balances",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balances.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/balances",permalink:"/en/docs/sdk/server-api/basic-api/balances",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balances.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"info",permalink:"/en/docs/sdk/server-api/basic-api/info"},next:{title:"balance",permalink:"/en/docs/sdk/server-api/basic-api/balance"}},o={},p=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return Fields",id:"return-fields",level:2},{value:"BalanceItem Field Description",id:"balanceitem-field-description",level:3},{value:"Example",id:"example",level:2},{value:"Example Return",id:"example-return",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"balances"},"balances"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Get all assets balance on everPay for the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balances/{{account}}")),(0,r.kt)("h2",{id:"return-fields"},"Return Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accid"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay Account ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balances"),(0,r.kt)("td",{parentName:"tr",align:null},"The everPay account's token list in everPay, single token balance field, is as follows ",(0,r.kt)("a",{parentName:"td",href:"#balanceitem-field-description"},"BalanceItem Field Description"))))),(0,r.kt)("h3",{id:"balanceitem-field-description"},"BalanceItem Field Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Generated by combining ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,r.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token")," by ",(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Asset balance, type uint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimals"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request GET 'https://api-dev.everpay.io/balances/0x2ca81e1253f9426c62Df68b39a22A377164eeC92'\n")),(0,r.kt)("h2",{id:"example-return"},"Example Return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balances": [\n    {\n      "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n      "amount": "220000000",\n      "decimals": 12\n    },\n    {\n      "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n      "amount": "0",\n      "decimals": 18\n    },\n    {\n      "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "amount": "0",\n      "decimals": 6\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);