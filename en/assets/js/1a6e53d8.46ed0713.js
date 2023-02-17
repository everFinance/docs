"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6845],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,A=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(A,l(l({ref:t},u),{},{components:n})):a.createElement(A,l({ref:t},u))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:4},l="balance",c={unversionedId:"sdk/server-api/basic-api/balance",id:"sdk/server-api/basic-api/balance",title:"balance",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balance.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/balance",permalink:"/en/docs/sdk/server-api/basic-api/balance",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sdk",previous:{title:"balances",permalink:"/en/docs/sdk/server-api/basic-api/balances"},next:{title:"fees",permalink:"/en/docs/sdk/server-api/basic-api/fees"}},o={},p=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return Fields",id:"return-fields",level:2},{value:"BalanceItem Field Description",id:"balanceitem-field-description",level:3},{value:"Example",id:"example",level:2},{value:"Example Return",id:"example-return",level:2}],u={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"balance"},"balance"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Get the asset balance of the specified token on everPay for the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balance/{{tokenTag}}/{{account}}")),(0,r.kt)("h2",{id:"return-fields"},"Return Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accid"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay Account ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"The designated token asset balance of this everPay account, as follows ",(0,r.kt)("a",{parentName:"td",href:"#balanceitem-field-description"},"BalanceItem Field Description"))))),(0,r.kt)("h3",{id:"balanceitem-field-description"},"BalanceItem Field Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Generated by combining ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,r.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token")," by ",(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Asset balance, type uint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimals"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'\n")),(0,r.kt)("h2",{id:"example-return"},"Example Return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balance": {\n    "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n    "amount": "220000000",\n    "decimals": 12\n  }\n}\n')))}s.isMDXComponent=!0}}]);