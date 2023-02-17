"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4947],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const l={sidebar_position:3},i="balances",c={unversionedId:"sdk/everpay-js/basic-api/balances",id:"sdk/everpay-js/basic-api/balances",title:"balances",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/balances.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/balances",permalink:"/en/docs/sdk/everpay-js/basic-api/balances",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/balances.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"info",permalink:"/en/docs/sdk/everpay-js/basic-api/info"},next:{title:"balance",permalink:"/en/docs/sdk/everpay-js/basic-api/balance"}},o={},p=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return",id:"return",level:2},{value:"Return Type",id:"return-type",level:3},{value:"Return Fields",id:"return-fields",level:3},{value:"Example",id:"example",level:2},{value:"Example return",id:"example-return",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"balances"},"balances"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"Get all assets on everPay for the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../types#balancesparams"},"BalancesParams")),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("h3",{id:"return-type"},"Return Type"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../types#balanceitem"},"BalanceItem"),"[]"),(0,r.kt)("h3",{id:"return-fields"},"Return Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainType"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported blockchains to top-ups and withdrawals, separated by ",(0,r.kt)("inlineCode",{parentName:"td"},","))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Token symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identification of the asset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"Token balance, already processed by, not type uint")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const everpay1 = new Everpay({ debug: true })\neverpay1.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)\n\n// Or\nconst everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })\neverpay.balances().then(console.log)\n\n// Or override default account\nconst everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })\neverpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)\n")),(0,r.kt)("h2",{id:"example-return"},"Example return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    chainType: 'arweave,ethereum',\n    symbol: 'AR',\n    tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',\n    address: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n    balance: '0.000765727502'\n  },\n  {\n    chainType: 'ethereum',\n    symbol: 'ETH',\n    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n    address: '0x0000000000000000000000000000000000000000',\n    balance: '0.94687043854654891'\n  },\n  {\n    chainType: 'ethereum',\n    symbol: 'USDT',\n    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n    address: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    balance: '1112208449.962568'\n  }\n]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The quantity represented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"balance")," field is processed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals")," format. Developers can easily integrate with everPay without caring about ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals"),".")))}d.isMDXComponent=!0}}]);