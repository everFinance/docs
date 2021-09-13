(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8710],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=a,y=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4279:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={sidebar_position:7},c="sendEverpayTx",s={unversionedId:"sdk/everpay-js/operation-api/sendEverpayTx",id:"sdk/everpay-js/operation-api/sendEverpayTx",isDocsHomePage:!1,title:"sendEverpayTx",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/operation-api/sendEverpayTx.md",sourceDirName:"sdk/everpay-js/operation-api",slug:"/sdk/everpay-js/operation-api/sendEverpayTx",permalink:"/docs/sdk/everpay-js/operation-api/sendEverpayTx",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/operation-api/sendEverpayTx.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sdk",previous:{title:"bundle",permalink:"/docs/sdk/everpay-js/operation-api/bundle"},next:{title:"swapOrder",permalink:"/docs/sdk/everpay-js/operation-api/swapOrder"}},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:d};function l(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendeverpaytx"},"sendEverpayTx"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u5c06 everPay \u4ea4\u6613\u7ed3\u6784 ",(0,o.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")," \u8f6c\u5316\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"messageData")," \u540e\uff0c\u6839\u636e Everpay \u5b9e\u4f8b\u521b\u5efa\u65f6\uff0c\u4f20\u9012\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arJWK")," \u53c2\u6570\u8fdb\u884c\u7b7e\u540d\uff0c\u5e76\u53d1\u9001\u81f3 everPay \u670d\u52a1\u5668\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#sendeverpaytxresult"},"SendEverpayTxResult")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1625987254171',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\n// \u4f7f\u7528 0x26361130d5d6E798E9319114643AF8c868412859 \u5bf9\u5e94\u79c1\u94a5\u8fdb\u884c\u7b7e\u540d\nconst result = await everpay.sendEverpayTx(everpayTxWithoutSig)\n/*\n{\n  status: 'ok',\n  everpayTx: {\n    tokenSymbol: 'usdt',\n    action: 'transfer',\n    from: '0x26361130d5d6E798E9319114643AF8c868412859',\n    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    amount: '5260000',\n    fee: '0',\n    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n    nonce: '1625987254171',\n    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    chainType: 'ethereum',\n    chainID: '42',\n    data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n    version: 'v1',\n    sig: '0x3ee66c303fe59b8e1f84e638cb7cca8bbb0e5b0ca63f784021e877be13c176d35d831e120a20eb8c72741fcc40c6a35a566d3ed34f6274d4c26160f38c14eec11b'\n  },\n  everHash: '0x0b7be08f6b96c2f1c7a810c72af2cc46632e4a7f0f9e36ccb10840864fedd470'\n}\n*/\n")))}l.isMDXComponent=!0}}]);