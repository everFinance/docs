"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Storage Based Computation Paradigm",s={unversionedId:"guide/refrence/storage-based-computation-paradigm",id:"guide/refrence/storage-based-computation-paradigm",title:"Storage Based Computation Paradigm",description:'Blockchain is a term used in the field of information technology. In essence, it is a shared database in which data or information is stored with characteristics such as "unforgeable", "traceable", "open and transparent" and "collectively maintained". Based on these features, blockchain technology has laid a solid foundation of "trust" and created a reliable "cooperation" mechanism, which has a broad application prospect.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/refrence/storage-based-computation-paradigm.md",sourceDirName:"guide/refrence",slug:"/guide/refrence/storage-based-computation-paradigm",permalink:"/en/docs/guide/refrence/storage-based-computation-paradigm",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/refrence/storage-based-computation-paradigm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Errors",permalink:"/en/docs/guide/SDK/everpay-js/errors"},next:{title:"Consensus change",permalink:"/en/docs/guide/refrence/consensus"}},c={},l=[{value:"Further Reading",id:"further-reading",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-based-computation-paradigm"},"Storage Based Computation Paradigm"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Blockchain is a term used in the field of information technology. In essence, it is a shared database in which data or information is stored with characteristics such as "unforgeable", "traceable", "open and transparent" and "collectively maintained". Based on these features, blockchain technology has laid a solid foundation of "trust" and created a reliable "cooperation" mechanism, which has a broad application prospect.')),(0,r.kt)("p",null,'When we work with Excel on our own PCs, the computed books are not necessarily trustworthy because we can modify the Excel data records on our hard drives at will. Assuming that our PC hard drive replacement is called a blockchain, and all the adjustment records are traceable and cannot be falsified, we can assume that Excel on our personal PC is also traceable and trustworthy. If Alipay open source\'s all its code and all the data can be verified, it will then be another kind of decentralized "blockchain".'),(0,r.kt)("p",null,"everPay is a decentralized and trusted application that stores all data in Arweave. Anyone can retrieve it, check and verify the consistency and correctness of the data, which has the transparency and trustworthiness of blockchain, but also reduces the consensus cost through Arweave storage and solves the disadvantages of high miner fees and time consuming of most / mainstream blockchain transfers."),(0,r.kt)("p",null,"Using the storage based computation paradigm, combined with cryptographic signature verification, a variety of intricate applications can be built."),(0,r.kt)("p",null,"Built on the storage based computation paradigm, everPay has an Internet-level application experience and the ability to interoperate with various blockchains."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"},"A Storage-based Computation Paradigm Enabled by Arweave")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/everpay-a-trusted-cross-chain-payment-protocol-eba4a0af7d66"},"everPay: A Trusted Cross-chain Payment Protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/evolution-of-the-blockchain-application-model-along-with-changing-consensus-755e4ae407a7"},"Evolution of the Blockchain Application Model along with Changing Consensus"))))}p.isMDXComponent=!0}}]);