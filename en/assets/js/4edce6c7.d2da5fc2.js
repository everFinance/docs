"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Computation Paradigm Centered on Storage",s={unversionedId:"guide/refrence/storage-based-computation-paradigm",id:"guide/refrence/storage-based-computation-paradigm",title:"Computation Paradigm Centered on Storage",description:'Blockchain is a concept originating from the information technology sector. It essentially refers to a shared database where data or information is stored, possessing attributes such as "unforgeable," "traceable," "open and transparent," and "collectively maintained." Owing to these properties, blockchain technology establishes a strong foundation of "trust" and fosters a dependable "collaboration" mechanism, offering vast potential for applications.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/refrence/storage-based-computation-paradigm.md",sourceDirName:"guide/refrence",slug:"/guide/refrence/storage-based-computation-paradigm",permalink:"/en/docs/guide/refrence/storage-based-computation-paradigm",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/refrence/storage-based-computation-paradigm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Errors",permalink:"/en/docs/guide/SDK/everpay-js/errors"},next:{title:"Consensus change",permalink:"/en/docs/guide/refrence/consensus"}},c={},l=[{value:"Further Reading",id:"further-reading",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"computation-paradigm-centered-on-storage"},"Computation Paradigm Centered on Storage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Blockchain is a concept originating from the information technology sector. It essentially refers to a shared database where data or information is stored, possessing attributes such as "unforgeable," "traceable," "open and transparent," and "collectively maintained." Owing to these properties, blockchain technology establishes a strong foundation of "trust" and fosters a dependable "collaboration" mechanism, offering vast potential for applications.')),(0,r.kt)("p",null,'Imagine working with Excel on our personal computers; the resulting files are not necessarily trustworthy since we can freely modify the Excel data records on our hard drives. If we consider our PC hard drive as a blockchain, where all adjustment records are traceable and tamper-proof, then Excel on our personal computer would also be considered traceable and reliable. If Alipay open-sources its entire code and all data becomes verifiable, it would represent a different kind of decentralized "blockchain."'),(0,r.kt)("p",null,"everPay is a decentralized, trust-based application that stores all data in Arweave, enabling anyone to access, examine, and validate the consistency and accuracy of the data. This provides the transparency and trustworthiness associated with blockchain while reducing consensus costs via Arweave storage and addressing the issues of high miner fees and lengthy transaction times common to most mainstream blockchain transfers."),(0,r.kt)("p",null,"By employing a computation paradigm focused on storage and integrating cryptographic signature verification, numerous complex applications can be developed."),(0,r.kt)("p",null,"everPay, constructed on the storage-centered computation paradigm, boasts an internet-level user experience and the capability to interact seamlessly with various blockchains."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"},"A Storage-based Computation Paradigm Enabled by Arweave")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/everpay-a-trusted-cross-chain-payment-protocol-eba4a0af7d66"},"everPay: A Trusted Cross-chain Payment Protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.ever.vision/evolution-of-the-blockchain-application-model-along-with-changing-consensus-755e4ae407a7"},"Evolution of the Blockchain Application Model along with Changing Consensus"))))}u.isMDXComponent=!0}}]);