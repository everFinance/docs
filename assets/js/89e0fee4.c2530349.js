(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9376],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||l[m]||i;return n?t.createElement(f,c(c({ref:a},p),{},{components:n})):t.createElement(f,c({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var s=2;s<i;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1275:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return b}});var t=n(2122),r=n(9756),i=(n(7294),n(3905)),c=["components"],d={sidebar_position:10},o="mintedTxByChainTxHash",s={unversionedId:"sdk/everpay-js/basic-api/mintedTxByChainTxHash",id:"sdk/everpay-js/basic-api/mintedTxByChainTxHash",isDocsHomePage:!1,title:"mintedTxByChainTxHash",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/basic-api/mintedTxByChainTxHash.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/mintedTxByChainTxHash",permalink:"/docs/sdk/everpay-js/basic-api/mintedTxByChainTxHash",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/basic-api/mintedTxByChainTxHash.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sdk",previous:{title:"txByHash",permalink:"/docs/sdk/everpay-js/basic-api/txByHash"},next:{title:"getEverpayTxWithoutSig",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig"}},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"\u8fd4\u56de\u7c7b\u578b",id:"\u8fd4\u56de\u7c7b\u578b",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],l={toc:p};function b(e){var a=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mintedtxbychaintxhash"},"mintedTxByChainTxHash"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u901a\u8fc7\u533a\u5757\u94fe ",(0,i.kt)("strong",{parentName:"p"},"\u5145\u503c")," \u7684\u4ea4\u6613\u8bb0\u5f55 ",(0,i.kt)("inlineCode",{parentName:"p"},"chainTxHash")," \u83b7\u53d6 everPay \u4e0a\u5bf9\u5e94\u7684 everPay \u5145\u503c\u4ea4\u6613\u8bb0\u5f55\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e00\u7b14 everPay \u5145\u503c\u4ea4\u6613\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"chainTxHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u8bb0\u5f55\uff0c\u5982\u679c\u8be5\u7b14 everPay \u4ea4\u6613\u8bb0\u5f55\u5b58\u5728\uff0c\u5373\u53ef\u8ba4\u4e3a\u5145\u503c\u5df2\u5230\u8d26\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,"string"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u5904 string \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"chainTxHash")," string"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ec5\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"chainTxHash")," \u67e5\u8be2\u5145\u503c\u7684 everPay \u4ea4\u6613\u8bb0\u5f55\uff0c\u65e0\u6cd5\u67e5\u8be2\u63d0\u73b0\u7684 everPay \u4ea4\u6613\u8bb0\u5f55\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"ethereum \u5145\u503c\u4ea4\u6613\uff0cetherum \u5145\u503c\u7684 etherum txHash \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae"),"\uff0c\u6b64\u7b14 everPay \u5145\u503c\u4ea4\u6613\u8bb0\u5f55\u53ef\u901a\u8fc7\u6b64 API \u83b7\u53d6"),(0,i.kt)("li",{parentName:"ul"},"everPay \u63d0\u73b0\u4ea4\u6613\uff0c\u6700\u7ec8\u63d0\u73b0\u81f3\u7528\u6237 ethereum \u94b1\u5305\u5730\u5740\u7684\u4ea4\u6613 txHash \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0xd3d2d72c0906f92eb22f719434e1568e1db8f2735bf5bcf645a2a70e5c21b2f7"),"\uff0c\u6b64\u7b14 everPay \u63d0\u73b0\u4ea4\u6613\u8bb0\u5f55\u65e0\u6cd5\u901a\u8fc7\u6b64 API \u83b7\u53d6")))),(0,i.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,i.kt)("h3",{id:"\u8fd4\u56de\u7c7b\u578b"},"\u8fd4\u56de\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#everpaytransaction"},"EverpayTransaction")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"\u6307\u5357 - \u6df1\u5165\u7406\u89e3 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const chainTxHash = '0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae'\nconst everpay = new Everpay({ debug: true })\neverpay.mintedTxByChainTxHash(chainTxHash).then(console.log)\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "id": "MbsBUeBypea_OZFe4rPKqSQ5GIzHCnFSDgO4kYcnBOc",\n  "tokenSymbol": "ETH",\n  "action": "mint",\n  "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n  "to": "0xA6a82c61B3A1E26030CD917AE1262968ABdA7286",\n  "amount": "1719307428929703547",\n  "fee": "0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "nonce": 1625726093535,\n  "tokenID": "0x0000000000000000000000000000000000000000",\n  "chainType": "ethereum",\n  "chainID": "42",\n  "data": "{\\"hash\\": \\"0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae\\", \\"nonce\\": \\"0x31\\", \\"blockHash\\": \\"0xaede2df39b4bd3a3fde772c13bad31abfa1075d1e3a12e7c0fd9ada23671ea8c\\", \\"blockNumber\\": \\"0x18c801d\\", \\"transactionIndex\\": \\"0x0\\", \\"from\\": \\"0xA6a82c61B3A1E26030CD917AE1262968ABdA7286\\", \\"to\\": \\"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\\", \\"value\\": \\"0x17dc34ff510b8e7b\\", \\"gas\\": \\"0x587a\\", \\"gasPrice\\": \\"0x165a0bc00\\", \\"input\\": \\"0x\\", \\"r\\": \\"0xb56f5631cb0d00809c309abd58de5ef67e856b40fa13ae200650ed257eda0c5e\\", \\"s\\": \\"0x268dfb599d8396cc0a30fb6e8b8c1ec709775f3468da31195cfa95f9e1b3908d\\", \\"v\\": \\"0x77\\"}",\n  "sig": "0x7fc912dcd50ae2e75b969b49eee65ac74eb2e74decc9d61d480ee95d62edf264654a17a8721d3615b7f8749f8a31171926a82a14bba37de7c9d23af4564c27621b",\n  "everHash": "0xb6968772f28f7182c39d5b533a5bafd3340ae18643a42f9580cd18c8af51cd4b",\n  "status": "packaged",\n  "timestamp": 1625727644000,\n  "targetChainTxHash": "0xf8eaba159cabbc1d6c4f1c502bb552b6c762dbb43c972ec2e28b32c31fd986ae"\n}\n')))}b.isMDXComponent=!0}}]);