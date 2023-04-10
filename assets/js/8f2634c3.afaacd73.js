"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="ethConnectedSigner",c={unversionedId:"guide/SDK/everpay-js/configuration/ethConnectedSigner",id:"guide/SDK/everpay-js/configuration/ethConnectedSigner",title:"ethConnectedSigner",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/guide/SDK/everpay-js/configuration/ethConnectedSigner.md",sourceDirName:"guide/SDK/everpay-js/configuration",slug:"/guide/SDK/everpay-js/configuration/ethConnectedSigner",permalink:"/docs/guide/SDK/everpay-js/configuration/ethConnectedSigner",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/configuration/ethConnectedSigner.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"chainType",permalink:"/docs/guide/SDK/everpay-js/configuration/chainType"},next:{title:"arJWK",permalink:"/docs/guide/SDK/everpay-js/configuration/arJWK"}},p={},s=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",level:2},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",level:2},{value:"ethereum \u94b1\u5305: imToken / MetaMask \u7b49",id:"ethereum-\u94b1\u5305-imtoken--metamask-\u7b49",level:3},{value:"RPC API + privateKey",id:"rpc-api--privatekey",level:3},{value:"\u4e0e arJWK \u914d\u7f6e\u9879\u7684\u51b2\u7a81",id:"\u4e0e-arjwk-\u914d\u7f6e\u9879\u7684\u51b2\u7a81",level:2},{value:"\u4e0e account \u914d\u7f6e\u9879\u7684\u5173\u7cfb",id:"\u4e0e-account-\u914d\u7f6e\u9879\u7684\u5173\u7cfb",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ethconnectedsigner"},"ethConnectedSigner"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,a.kt)("p",null,"\u6b64\u914d\u7f6e\u9879\u7528\u4e8e\u901a\u8fc7 ethereum/moonbeam/moonbase \u94b1\u5305\uff0c\u6765\u64cd\u4f5c everPay ",(0,a.kt)("inlineCode",{parentName:"p"},"ethereum \u8d26\u6237\u6a21\u578b")," \u7684 \u8d26\u6237\uff0c\u5bf9\u8be5\u8d26\u6237\u8fdb\u884c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5145\u503c\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum \u8f6c\u8d26 \u81f3 everPay \u591a\u7b7e\u5408\u7ea6\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u8d26\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum ",(0,a.kt)("inlineCode",{parentName:"li"},"personalSign")," \u7b7e\u540d\uff0c\u6765\u786e\u4fdd\u8be5 everPay \u8d26\u6237\u7684\u64cd\u4f5c\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u73b0\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum ",(0,a.kt)("inlineCode",{parentName:"li"},"personalSign")," \u7b7e\u540d\uff0c\u6765\u786e\u4fdd\u8be5 everPay \u8d26\u6237\u7684\u64cd\u4f5c\u6743\u9650\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,a.kt)("p",null,"everpay-js \u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers.js")," \u7528\u4e8e ethereum \u7b7e\u540d\u3001\u53d1\u9001\u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u6b64\u914d\u7f6e\u9879\u4e5f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer"},"ethers.js#Signer")," \u4f5c\u4e3a\u53c2\u6570\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"ethereum-\u94b1\u5305-imtoken--metamask-\u7b49"},"ethereum \u94b1\u5305: imToken / MetaMask \u7b49"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/getting-started/#getting-started--connecting"},"ethers.js Connecting to Ethereum: Metamask"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  chainType: 'ethereum',\n  ethConnectedSigner: signer\n})\n")),(0,a.kt)("h3",{id:"rpc-api--privatekey"},"RPC API + privateKey"),(0,a.kt)("p",null,"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Wallet"},"ethers.js Wallet API"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const address = 'YOUR ADDRESS'\nconst privateKey = 'YOUR PRIVATE KEY'\nconst provider = new ethers.providers.InfuraProvider('goerli')\nconst signer = new ethers.Wallet(privateKey, provider)\nconst everpay = new Everpay({\n  account: address,\n  chainType: 'ethereum',\n  ethConnectedSigner: signer,\n})\n")),(0,a.kt)("admonition",{title:"\u79c1\u94a5\u6cc4\u6f0f\u98ce\u9669",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u65b9\u5f0f\u5728\u4ee3\u7801\u4e2d\u660e\u6587\u4f20\u9012\u79c1\u94a5\uff0c\u5b58\u5728\u5b89\u5168\u98ce\u9669")),(0,a.kt)("h2",{id:"\u4e0e-arjwk-\u914d\u7f6e\u9879\u7684\u51b2\u7a81"},"\u4e0e arJWK \u914d\u7f6e\u9879\u7684\u51b2\u7a81"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner")," \u7528\u4e8e ethereum \u8d26\u6237\u6a21\u578b\u7684 everPay \u8d26\u6237\u64cd\u4f5c\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK")," \u7528\u4e8e arweave \u8d26\u6237\u6a21\u578b\u7684 everPay \u8d26\u6237\u64cd\u4f5c\u3002\u540c\u4e00\u4e2a Everpay \u5b9e\u4f8b\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a\u8d26\u6237\u6a21\u578b"),"\uff0c\u4f46\u5f00\u53d1\u8005\u53ef\u4ee5\u521b\u5efa \u591a\u4e2a Everpay \u5b9e\u4f8b\uff0c\u6765\u8fdb\u884c\u66f4\u590d\u6742\u5e94\u7528\u7684\u5f00\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ethEverpay = new Everpay({\n  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92',\n  chainType: 'ethereum',\n  ethConnectedSigner\n})\n\nconst arEverpay = new Everpay({\n  account: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  chainType: 'arweave',\n  arJWK\n})\n")),(0,a.kt)("h2",{id:"\u4e0e-account-\u914d\u7f6e\u9879\u7684\u5173\u7cfb"},"\u4e0e account \u914d\u7f6e\u9879\u7684\u5173\u7cfb"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u8fdb\u884c everPay \u8d26\u6237\uff08ethereum \u8d26\u6237\u6a21\u578b\uff09\u64cd\u4f5c\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"account")," \u53c2\u6570\u5fc5\u987b\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner")," \u5bf9\u5e94\u7684 ethereum \u94b1\u5305\u5730\u5740\u4e00\u81f4\u3002"))}d.isMDXComponent=!0}}]);