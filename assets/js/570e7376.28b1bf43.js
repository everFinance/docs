(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9397],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},664:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],c={sidebar_position:1},s="Storage Based Computation Paradigm",l={unversionedId:"guide/overview/storage-based-computation-paradigm",id:"guide/overview/storage-based-computation-paradigm",isDocsHomePage:!1,title:"Storage Based Computation Paradigm",description:'Blockchain is a term used in the field of information technology. In essence, it is a shared database in which data or information is stored with characteristics such as "unforgeable", "traceable", "open and transparent" and "collectively maintained". Based on these features, blockchain technology has laid a solid foundation of "trust" and created a reliable "cooperation" mechanism, which has a broad application prospect.',source:"@site/docs/guide/overview/storage-based-computation-paradigm.md",sourceDirName:"guide/overview",slug:"/guide/overview/storage-based-computation-paradigm",permalink:"/docs/guide/overview/storage-based-computation-paradigm",editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/overview/storage-based-computation-paradigm.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Introduction",permalink:"/docs/guide/intro"},next:{title:"Technology Implementation Overview",permalink:"/docs/guide/overview/technology-implementation"}},d=[{value:"\u4e2d\u6587\u5ef6\u4f38\u9605\u8bfb",id:"\u4e2d\u6587\u5ef6\u4f38\u9605\u8bfb",children:[]},{value:"English Extended Readings",id:"english-extended-readings",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-based-computation-paradigm"},"Storage Based Computation Paradigm"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Blockchain is a term used in the field of information technology. In essence, it is a shared database in which data or information is stored with characteristics such as "unforgeable", "traceable", "open and transparent" and "collectively maintained". Based on these features, blockchain technology has laid a solid foundation of "trust" and created a reliable "cooperation" mechanism, which has a broad application prospect.')),(0,o.kt)("p",null,'When we work with Excel on our own PCs, the computed books are not necessarily trustworthy because we can modify the Excel data records on our hard drives at will. Assuming that our PC hard drive replacement is called a blockchain, and all the adjustment records are traceable and cannot be falsified, we can assume that Excel on our personal PC is also traceable and trustworthy. If Alipay open source all code and all data can be verified, it is another kind of decentralized form of "blockchain".'),(0,o.kt)("p",null,"everPay is a decentralized and trusted application that stores all data in Arweave. Anyone can retrieve, check and verify the consistency and correctness of the data, which has the transparency and trustworthiness of blockchain, but also reduces the consensus cost through Arweave storage and solves the disadvantages of high miner's fee and time consuming of most / mainstream blockchain transfers."),(0,o.kt)("p",null,"Using the storage based computation paradigm, combined with cryptographic signature verification, a variety of intricate applications can be built."),(0,o.kt)("p",null,"Built on the storage based computation paradigm, everPay has an Internet-level application experience and the ability to interoperate with various blockchains."),(0,o.kt)("h2",{id:"\u4e2d\u6587\u5ef6\u4f38\u9605\u8bfb"},"\u4e2d\u6587\u5ef6\u4f38\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chainnews.com/articles/977293418486.htm"},"\u56fe\u7075\u673a\u7684\u7eb8\u5e26\uff1a\u7b80\u6790 Arweave \u5b58\u50a8\u8ba1\u7b97\u65b0\u8303\u5f0f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chainnews.com/articles/660420352962.htm"},"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\uff1a\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae everPay \u8fd0\u884c\u673a\u5236")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chainnews.com/articles/071093360415.htm"},"\u4ece\u5171\u8bc6\u673a\u5236\u8c08\u8d77\uff0c\u63a2\u8ba8\u533a\u5757\u94fe\u5e94\u7528\u8303\u5f0f\u7684\u53d8\u8fc1"))),(0,o.kt)("h2",{id:"english-extended-readings"},"English Extended Readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/everfinance/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"},"A Storage-based Computation Paradigm Enabled by Arweave")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/everfinance/everpay-a-trusted-cross-chain-payment-protocol-eba4a0af7d66"},"everPay: A Trusted Cross-chain Payment Protocol")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/everfinance/evolution-of-the-blockchain-application-model-along-with-changing-consensus-755e4ae407a7"},"Evolution of the Blockchain Application Model along with Changing Consensus"))))}p.isMDXComponent=!0}}]);