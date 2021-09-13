(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2215],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,y=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1387:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},p="getEverpayTxMessage",c={unversionedId:"sdk/everpay-js/tool-api/getEverpayTxMessage",id:"sdk/everpay-js/tool-api/getEverpayTxMessage",isDocsHomePage:!1,title:"getEverpayTxMessage",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/tool-api/getEverpayTxMessage.md",sourceDirName:"sdk/everpay-js/tool-api",slug:"/sdk/everpay-js/tool-api/getEverpayTxMessage",permalink:"/en/docs/sdk/everpay-js/tool-api/getEverpayTxMessage",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/tool-api/getEverpayTxMessage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"getEverpayTxWithoutSig",permalink:"/en/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig"},next:{title:"getBundleData",permalink:"/en/docs/sdk/everpay-js/tool-api/getBundleData"}},u=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return",id:"return",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"geteverpaytxmessage"},"getEverpayTxMessage"),(0,o.kt)("h2",{id:"function"},"Function"),(0,o.kt)("p",null,"Converts the everPay transaction structure ",(0,o.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig"),"  into ",(0,o.kt)("inlineCode",{parentName:"p"},"messageData")," for signature"),(0,o.kt)("h2",{id:"parameter"},"Parameter"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"messageData")," string"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1625987254171',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\neverpay.getEverpayTxMessage(everpayTxWithoutSig)\n\n/* Returnd result\n`tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1625987254171\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\"}\nversion:v1`\n")))}d.isMDXComponent=!0}}]);