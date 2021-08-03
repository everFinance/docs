(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4843],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return t?r.createElement(b,c(c({ref:n},u),{},{components:t})):r.createElement(b,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=l;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6891:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),c=["components"],o={sidebar_position:5},s="txs",p={unversionedId:"sdk/server-api/basic-api/txs",id:"sdk/server-api/basic-api/txs",isDocsHomePage:!1,title:"txs",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/txs",permalink:"/en/docs/sdk/server-api/basic-api/txs",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sdk",previous:{title:"balance",permalink:"/en/docs/sdk/server-api/basic-api/balance"},next:{title:"txsByAccount",permalink:"/en/docs/sdk/server-api/basic-api/txsByAccount"}},u=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return Fields",id:"return-fields",children:[]},{value:"Example",id:"example",children:[]},{value:"Example Return",id:"example-return",children:[]}],d={toc:u};function l(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"txs"},"txs"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get all transactions on everPay accessed by paging"),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/txs?page={{page}}")),(0,i.kt)("h2",{id:"return-fields"},"Return Fields"),(0,i.kt)("p",null,"Field information can be viewed in ",(0,i.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#transaction-record"},"Guide - Dive - Transaction - Transaction Record")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/txs?page=1'\n")),(0,i.kt)("h2",{id:"example-return"},"Example Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  currentPage: 1,\n  totalPages: 196,\n  txs: [\n    {\n      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',\n      tokenSymbol: 'ETH',\n      action: 'burn',\n      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',\n      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',\n      amount: '979251798000000000',\n      fee: '20000000000000000',\n      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n      nonce: 1625733233558,\n      tokenID: '0x0000000000000000000000000000000000000000',\n      chainType: 'ethereum',\n      chainID: '42',\n      data: '',\n      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',\n      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',\n      status: 'packaged',\n      timestamp: 1625733624000,\n      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'\n    },\n    // etc.\n  ]\n}\n")))}l.isMDXComponent=!0}}]);