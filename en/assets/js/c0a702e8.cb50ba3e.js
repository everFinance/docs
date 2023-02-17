"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6896],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,y=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8771:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=t(3117),a=(t(7294),t(3905));const o={sidebar_position:7},i="sendEverpayTx",p={unversionedId:"sdk/everpay-js/operation-api/sendEverpayTx",id:"sdk/everpay-js/operation-api/sendEverpayTx",title:"sendEverpayTx",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/operation-api/sendEverpayTx.md",sourceDirName:"sdk/everpay-js/operation-api",slug:"/sdk/everpay-js/operation-api/sendEverpayTx",permalink:"/en/docs/sdk/everpay-js/operation-api/sendEverpayTx",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/operation-api/sendEverpayTx.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sdk",previous:{title:"bundle",permalink:"/en/docs/sdk/everpay-js/operation-api/bundle"},next:{title:"Types",permalink:"/en/docs/sdk/everpay-js/types"}},c={},s=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2}],u={toc:s},d="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sendeverpaytx"},"sendEverpayTx"),(0,a.kt)("h2",{id:"function"},"Function"),(0,a.kt)("p",null,"Converts the everPay transaction structure ",(0,a.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"messageData"),", sign it according to ",(0,a.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK")," parameters passed during Everpay instance creation and send it to everPays server."),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../types#everpaytxwithousig"},"EverpayTxWithoutSig")),(0,a.kt)("h2",{id:"return"},"Return"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../types#sendeverpaytxresult"},"SendEverpayTxResult")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1625987254171',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\n// Sign with the private key corresponding to 0x26361130d5d6E798E9319114643AF8c868412859\nconst result = await everpay.sendEverpayTx(everpayTxWithoutSig)\n/*\n{\n  status: 'ok',\n  everpayTx: {\n    tokenSymbol: 'usdt',\n    action: 'transfer',\n    from: '0x26361130d5d6E798E9319114643AF8c868412859',\n    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    amount: '5260000',\n    fee: '0',\n    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n    nonce: '1625987254171',\n    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    chainType: 'ethereum',\n    chainID: '42',\n    data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n    version: 'v1',\n    sig: '0x3ee66c303fe59b8e1f84e638cb7cca8bbb0e5b0ca63f784021e877be13c176d35d831e120a20eb8c72741fcc40c6a35a566d3ed34f6274d4c26160f38c14eec11b'\n  },\n  everHash: '0x0b7be08f6b96c2f1c7a810c72af2cc46632e4a7f0f9e36ccb10840864fedd470'\n}\n*/\n")))}l.isMDXComponent=!0}}]);