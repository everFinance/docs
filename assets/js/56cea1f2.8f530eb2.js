(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5041],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||c;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2936:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),i=["components"],o={sidebar_position:3},u="balances",l={unversionedId:"documentation/server-api/basic-api/balances",id:"documentation/server-api/basic-api/balances",isDocsHomePage:!1,title:"balances",description:"Function",source:"@site/docs/documentation/server-api/basic-api/balances.md",sourceDirName:"documentation/server-api/basic-api",slug:"/documentation/server-api/basic-api/balances",permalink:"/docs/documentation/server-api/basic-api/balances",editUrl:"https://github.com/everFinance/docs/edit/master/docs/documentation/server-api/basic-api/balances.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentation",previous:{title:"info",permalink:"/docs/documentation/server-api/basic-api/info"},next:{title:"balance",permalink:"/docs/documentation/server-api/basic-api/balance"}},p=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Example",id:"example",children:[]},{value:"Example return",id:"example-return",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"balances"},"balances"),(0,c.kt)("h2",{id:"function"},"Function"),(0,c.kt)("p",null,"Get all assets on everPay for the corresponding ",(0,c.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,c.kt)("h2",{id:"parameter"},"Parameter"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balances/{{account}}")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"curl --location --request GET 'https://api-dev.everpay.io/balances/0x2ca81e1253f9426c62Df68b39a22A377164eeC92'\n")),(0,c.kt)("h2",{id:"example-return"},"Example return"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balances": [\n    {\n      "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n      "amount": "220000000",\n      "decimals": 12\n    },\n    {\n      "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n      "amount": "0",\n      "decimals": 18\n    },\n    {\n      "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "amount": "0",\n      "decimals": 6\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);