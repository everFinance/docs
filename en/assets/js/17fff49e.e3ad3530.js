(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8617],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8594:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:10},p="swapInfo",c={unversionedId:"sdk/everpay-js/basic-api/swapInfo",id:"sdk/everpay-js/basic-api/swapInfo",isDocsHomePage:!1,title:"swapInfo",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/swapInfo.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/swapInfo",permalink:"/en/docs/sdk/everpay-js/basic-api/swapInfo",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/swapInfo.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sdk",previous:{title:"expressInfo",permalink:"/en/docs/sdk/everpay-js/basic-api/expressInfo"},next:{title:"swapPrice",permalink:"/en/docs/sdk/everpay-js/basic-api/swapPrice"}},u=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return",id:"return",children:[{value:"Return Type",id:"return-type",children:[]},{value:"Return Fields",id:"return-fields",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example return",id:"example-return",children:[]}],l={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swapinfo"},"swapInfo"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get everPays Swap market maker everPay account, list of supported tokens, fees"),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"return"},"Return"),(0,i.kt)("h3",{id:"return-type"},"Return Type"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#swapinfo"},"SwapInfo")),(0,i.kt)("h3",{id:"return-fields"},"Return Fields"),(0,i.kt)("p",null,"Field information can be viewed in ",(0,i.kt)("a",{parentName:"p",href:"../../server-api/basic-api/info#return-fields"},"SDK - Server API - Basic Query API - swapInfo - Return Fields")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.swapInfo().then(console.log)\n")),(0,i.kt)("h2",{id:"example-return"},"Example return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "ok",\n  "address": "0x9430dBaAD43b5e0Bebe142f84582111Dd1D7cd00",\n  "tokenList": [\n      "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "ethereum-eth-0x0000000000000000000000000000000000000000"\n  ],\n  "fee": "0.02"\n}\n')))}d.isMDXComponent=!0}}]);