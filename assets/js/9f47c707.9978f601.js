"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6540],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:2},i="getEverpayTxMessage",s={unversionedId:"sdk/everpay-js/tool-api/getEverpayTxMessage",id:"sdk/everpay-js/tool-api/getEverpayTxMessage",title:"getEverpayTxMessage",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/tool-api/getEverpayTxMessage.md",sourceDirName:"sdk/everpay-js/tool-api",slug:"/sdk/everpay-js/tool-api/getEverpayTxMessage",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxMessage",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/tool-api/getEverpayTxMessage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"getEverpayTxWithoutSig",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig"},next:{title:"getBundleData",permalink:"/docs/sdk/everpay-js/tool-api/getBundleData"}},p={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geteverpaytxmessage"},"getEverpayTxMessage"),(0,a.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("p",null,"\u5c06 everPay \u4ea4\u6613\u7ed3\u6784 ",(0,a.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")," \u8f6c\u5316\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"messageData")," \u7528\u4e8e\u7b7e\u540d"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")),(0,a.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"messageData")," string"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1625987254171',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\neverpay.getEverpayTxMessage(everpayTxWithoutSig)\n/* \u793a\u4f8b\u8fd4\u56de\n`tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1625987254171\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\"}\nversion:v1`\n")))}d.isMDXComponent=!0}}]);