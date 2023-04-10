"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Basic information",d={unversionedId:"guide/basic-info",id:"guide/basic-info",title:"Basic information",description:"Locked Position Address",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/basic-info.md",sourceDirName:"guide",slug:"/guide/basic-info",permalink:"/en/docs/guide/basic-info",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/basic-info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"everPay Protocol",permalink:"/en/docs/guide/overview"},next:{title:"Catalogue",permalink:"/en/docs/guide/docs-catalogue"}},l={},c=[{value:"Locked Position Address",id:"locked-position-address",level:2},{value:"Supported tokens list",id:"supported-tokens-list",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-information"},"Basic information"),(0,r.kt)("h2",{id:"locked-position-address"},"Locked Position Address"),(0,r.kt)("p",null,"The assets of everPay correspond 1:1 to the assets on the chain, and we use multi-signature contracts to lock the assets on Ethereum and threshold signature technology to lock the assets on Arweave."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,r.kt)("th",{parentName:"tr",align:null},"Locked Position Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x38741a69785e84399fcf7c5ad61d572f7ecb1dab"},"0x38741a69785e84399fcf7c5ad61d572f7ecb1dab"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arweave"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://viewblock.io/arweave/address/dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys"},"dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more blockchain locker addresses, see the ",(0,r.kt)("strong",{parentName:"p"},"lockers")," field in the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/guide/server-api/basic-api/info"},(0,r.kt)("strong",{parentName:"a"},"info API")),".")),(0,r.kt)("h2",{id:"supported-tokens-list"},"Supported tokens list"),(0,r.kt)("p",null,"The tokens currently supported on everPay includes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Token Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Contract Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Chains"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(W)AR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543"},"0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543")),(0,r.kt)("td",{parentName:"tr",align:null},"arweave, ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ETH"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WBTC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"},"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599")),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USDT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7"},"0xdac17f958d2ee523a2206206994597c13d831ec7")),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USDC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"},"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DAI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f"},"0x6b175474e89094c44da98b954eedeac495271d0f")),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"},"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984")),(0,r.kt)("td",{parentName:"tr",align:null},"ethereum")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Details of the tokens can be found in the ",(0,r.kt)("strong",{parentName:"p"},"tokenList")," field of the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/guide/server-api/basic-api/info"},"info API"),".")))}u.isMDXComponent=!0}}]);