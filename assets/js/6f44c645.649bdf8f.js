(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5143],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,A=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(A,c(c({ref:t},s),{},{components:n})):a.createElement(A,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2994:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),c=["components"],l={sidebar_position:3},o="balances",p={unversionedId:"sdk/everpay-js/basic-api/balances",id:"sdk/everpay-js/basic-api/balances",isDocsHomePage:!1,title:"balances",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/basic-api/balances.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/balances",permalink:"/docs/sdk/everpay-js/basic-api/balances",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/basic-api/balances.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"info",permalink:"/docs/sdk/everpay-js/basic-api/info"},next:{title:"balance",permalink:"/docs/sdk/everpay-js/basic-api/balance"}},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"\u8fd4\u56de\u7c7b\u578b",id:"\u8fd4\u56de\u7c7b\u578b",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"balances"},"balances"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6 \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," \u5728 everPay \u4e0a\u7684\u6240\u6709\u8d44\u4ea7\u4fe1\u606f"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#balancesparams"},"BalancesParams")),(0,i.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,i.kt)("h3",{id:"\u8fd4\u56de\u7c7b\u578b"},"\u8fd4\u56de\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#balanceitem"},"BalanceItem"),"[]"),(0,i.kt)("h3",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainType"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5\u8d44\u4ea7\u652f\u6301\u5145\u503c\u3001\u63d0\u73b0\u7684\u533a\u5757\u94fe\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u3001\u63d0\u73b0\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u5206\u9694\u5f00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"symbol"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5\u8d44\u4ea7\u540d\u79f0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5\u8d44\u4ea7\u533a\u5757\u94fe\u5408\u7ea6\u5730\u5740\uff0c\u5982\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u3001\u63d0\u73b0\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u5206\u9694\u5f00\uff0c\u987a\u5e8f\u4e0e ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," \u4e2d\u533a\u5757\u94fe\u540d\u79f0\u987a\u5e8f\u4fdd\u6301\u4e00\u81f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tag"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5\u8d44\u4ea7\u552f\u4e00\u6807\u8bc6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"balance"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5\u8d44\u4ea7\u4f59\u989d\uff0c\u975e uint \u7c7b\u578b\uff0c\u5df2\u7ecf\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals")," \u5904\u7406")))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay1 = new Everpay({ debug: true })\neverpay1.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)\n\n// \u6216\u8005\nconst everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })\neverpay.balances().then(console.log)\n\n// \u6216\u8005 \u8986\u76d6\u9ed8\u8ba4 account\nconst everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })\neverpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    chainType: 'arweave,ethereum',\n    symbol: 'AR',\n    tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',\n    address: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n    balance: '0.000765727502'\n  },\n  {\n    chainType: 'ethereum',\n    symbol: 'ETH',\n    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n    address: '0x0000000000000000000000000000000000000000',\n    balance: '0.94687043854654891'\n  },\n  {\n    chainType: 'ethereum',\n    symbol: 'USDT',\n    tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n    address: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    balance: '1112208449.962568'\n  }\n]\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"balance")," \u5b57\u6bb5\u8868\u793a\u7684\u6570\u91cf\uff0c\u7ecf\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals")," format \u5904\u7406\u3002\u5f00\u53d1\u8005\u65e0\u9700\u5173\u5fc3 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals"),"\uff0c\u4fbf\u53ef\u4e0e everPay \u8f7b\u677e\u96c6\u6210\u3002"))))}u.isMDXComponent=!0}}]);