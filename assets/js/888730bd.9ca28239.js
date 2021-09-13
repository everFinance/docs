(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5035],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],p={sidebar_position:1},s="getEverpayTxWithoutSig",l={unversionedId:"sdk/everpay-js/tool-api/getEverpayTxWithoutSig",id:"sdk/everpay-js/tool-api/getEverpayTxWithoutSig",isDocsHomePage:!1,title:"getEverpayTxWithoutSig",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig.md",sourceDirName:"sdk/everpay-js/tool-api",slug:"/sdk/everpay-js/tool-api/getEverpayTxWithoutSig",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sdk",previous:{title:"swapPrice",permalink:"/docs/sdk/everpay-js/basic-api/swapPrice"},next:{title:"getEverpayTxMessage",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxMessage"}},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"geteverpaytxwithoutsig"},"getEverpayTxWithoutSig"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u751f\u6210 everPay \u4ea4\u6613\u7ed3\u6784"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"everpay.getEverpayTxWithoutSig(type, params)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"'transfer' or 'withdraw' or 'bundle'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../types#transferparams"},"TransferParams")," or ",(0,o.kt)("a",{parentName:"td",href:"../types#withdrawparams"},"WithdrawParams")," or ",(0,o.kt)("a",{parentName:"td",href:"../types#bundleparams"},"BundleParams"))))),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#everpaytxwithoutSig"},"EverpayTxWithoutSig")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  ethConnectedSigner: signer\n})\n\neverpay.getEverpayTxWithoutSig('transfer', {\n  symbol: 'USDT',\n  amount: '5.26'\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  data: { hello: 'world', this: 'is everpay' }\n}).then(console.log)\n\n/* \u793a\u4f8b\u8fd4\u56de\n{\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1625987254171',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n*/\n\n")))}d.isMDXComponent=!0}}]);