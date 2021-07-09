(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[933],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,o(o({ref:n},l),{},{components:t})):r.createElement(v,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9449:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:4},p="ethConnectedSigner",s={unversionedId:"everpay-js/configuration/ethConnectedSigner",id:"everpay-js/configuration/ethConnectedSigner",isDocsHomePage:!1,title:"ethConnectedSigner",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/everpay-js/configuration/ethConnectedSigner.md",sourceDirName:"everpay-js/configuration",slug:"/everpay-js/configuration/ethConnectedSigner",permalink:"/docs/everpay-js/configuration/ethConnectedSigner",editUrl:"https://github.com/everFinance/docs/edit/master/docs/everpay-js/configuration/ethConnectedSigner.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"everpay-js",previous:{title:"account",permalink:"/docs/everpay-js/configuration/account"},next:{title:"arJWK",permalink:"/docs/everpay-js/configuration/arJWK"}},l=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",children:[{value:"ethereum Dapp \u6d4f\u89c8\u5668: imToken / MetaMask \u7b49",id:"ethereum-dapp-\u6d4f\u89c8\u5668-imtoken--metamask-\u7b49",children:[]},{value:"RPC API + privateKey",id:"rpc-api--privatekey",children:[]}]},{value:"\u4e0e arJWK \u914d\u7f6e\u9879\u7684\u51b2\u7a81",id:"\u4e0e-arjwk-\u914d\u7f6e\u9879\u7684\u51b2\u7a81",children:[]},{value:"\u4e0e account \u914d\u7f6e\u9879\u7684\u5173\u7cfb",id:"\u4e0e-account-\u914d\u7f6e\u9879\u7684\u5173\u7cfb",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ethconnectedsigner"},"ethConnectedSigner"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,i.kt)("p",null,"\u6b64\u914d\u7f6e\u9879\u7528\u4e8e\u901a\u8fc7 ethereum \u94b1\u5305 \u6765\u64cd\u4f5c everPay ethereum \u8d26\u6237\u6a21\u578b\u7684 \u8d26\u6237\uff0c\u5bf9\u8be5\u8d26\u6237\u8fdb\u884c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5145\u503c\uff1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum \u8f6c\u8d26 \u81f3 everPay \u591a\u7b7e\u5408\u7ea6\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"\u8f6c\u8d26\uff1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum ",(0,i.kt)("inlineCode",{parentName:"li"},"personalSign")," \u7b7e\u540d\uff0c\u6765\u786e\u4fdd\u8be5 everPay \u8d26\u6237\u7684\u64cd\u4f5c\u6743\u9650"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u73b0\uff1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," \u8fdb\u884c ethereum ",(0,i.kt)("inlineCode",{parentName:"li"},"personalSign")," \u7b7e\u540d\uff0c\u6765\u786e\u4fdd\u8be5 everPay \u8d26\u6237\u7684\u64cd\u4f5c\u6743\u9650")),(0,i.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,i.kt)("p",null,"everpay-js \u96c6\u6210\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers.js")," \u7528\u4e8e ethereum \u7b7e\u540d\u3001\u53d1\u9001\u4ea4\u6613\u3002"),(0,i.kt)("p",null,"\u6b64\u914d\u7f6e\u9879\u4e5f\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer"},"ethers.js#Signer")," \u4f5c\u4e3a\u53c2\u6570\u7c7b\u578b\u3002"),(0,i.kt)("h3",{id:"ethereum-dapp-\u6d4f\u89c8\u5668-imtoken--metamask-\u7b49"},"ethereum Dapp \u6d4f\u89c8\u5668: imToken / MetaMask \u7b49"),(0,i.kt)("p",null,"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/getting-started/#getting-started--connecting"},"ethers.js Connecting to Ethereum: Metamask")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  ethConnectedSigner: signer\n})\n")),(0,i.kt)("h3",{id:"rpc-api--privatekey"},"RPC API + privateKey"),(0,i.kt)("p",null,"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Wallet"},"ethers.js Wallet API")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const address = 'YOUR ADDRESS'\nconst privateKey = 'YOUR PRIVATE KEY'\nconst provider = new ethers.providers.InfuraProvider('kovan')\nconst signer = new ethers.Wallet(privateKey, provider)\nconst everpay = new Everpay({\n  account: address,\n  ethConnectedSigner: signer,\n})\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u79c1\u94a5\u6cc4\u6f0f\u98ce\u9669")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u65b9\u5f0f\u5728\u4ee3\u7801\u4e2d\u660e\u6587\u4f20\u9012\u79c1\u94a5\uff0c\u5b58\u5728\u5b89\u5168\u98ce\u9669"))),(0,i.kt)("h2",{id:"\u4e0e-arjwk-\u914d\u7f6e\u9879\u7684\u51b2\u7a81"},"\u4e0e arJWK \u914d\u7f6e\u9879\u7684\u51b2\u7a81"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner")," \u7528\u4e8e ethereum \u8d26\u6237\u6a21\u578b\u7684 everPay \u8d26\u6237\u64cd\u4f5c\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"arJWK")," \u7528\u4e8e arweave \u8d26\u6237\u6a21\u578b\u7684 everPay \u8d26\u6237\u64cd\u4f5c\u3002\u540c\u4e00\u4e2a Everpay \u5b9e\u4f8b\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u4f7f\u7528\u4e00\u4e2a\u8d26\u6237\u6a21\u578b"),"\uff0c\u4f46\u5f00\u53d1\u8005\u53ef\u4ee5\u521b\u5efa \u591a\u4e2a Everpay \u5b9e\u4f8b\uff0c\u6765\u8fdb\u884c\u66f4\u590d\u6742\u5e94\u7528\u7684\u5f00\u53d1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ethEverpay = new Everpay({\n  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92',\n  ethConnectedSigner\n})\n\nconst arEverpay = new Everpay({\n  account: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  arJWK\n})\n")),(0,i.kt)("h2",{id:"\u4e0e-account-\u914d\u7f6e\u9879\u7684\u5173\u7cfb"},"\u4e0e account \u914d\u7f6e\u9879\u7684\u5173\u7cfb"),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u8fdb\u884c everPay \u8d26\u6237\uff08ethereum \u8d26\u6237\u6a21\u578b\uff09\u64cd\u4f5c\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"account")," \u53c2\u6570\u5fc5\u987b\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner")," \u5bf9\u5e94\u7684 ethereum \u94b1\u5305\u5730\u5740\u4e00\u81f4"))}d.isMDXComponent=!0}}]);