"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},c="Account Model",i={unversionedId:"guide/dive/account-model",id:"guide/dive/account-model",title:"Account Model",description:"The account system of the everPay protocol is diverse and flexible. In addition to supporting blockchain accounts, it also supports smart accounts, that is, Internet account systems.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/account-model.md",sourceDirName:"guide/dive",slug:"/guide/dive/account-model",permalink:"/en/docs/guide/dive/account-model",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/account-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Introduction",permalink:"/en/docs/guide/dive/overview"},next:{title:"Transaction",permalink:"/en/docs/guide/dive/transaction"}},l={},s=[{value:"Smart Account",id:"smart-account",level:2},{value:"Blockchain Account",id:"blockchain-account",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-model"},"Account Model"),(0,r.kt)("p",null,"The account system of the everPay protocol is diverse and flexible. In addition to supporting blockchain accounts, it also supports smart accounts, that is, Internet account systems."),(0,r.kt)("h2",{id:"smart-account"},"Smart Account"),(0,r.kt)("p",null,"everPay already supports the smart account model, which allows users to use their email address as EverID to make transfers, withdrawals, and is fully connected to their blockchain account."),(0,r.kt)("h2",{id:"blockchain-account"},"Blockchain Account"),(0,r.kt)("p",null,'Blockchain accounts Currently Ethereum and Arweave addresses are supported. When a user connects with an Ethereum or Arweave wallet, the "blockchain address" is the same as the wallet used for the connection. This means that all Ethereum addresses and Arweave addresses are ',(0,r.kt)("inlineCode",{parentName:"p"},"valid")," accounts on everPay."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859, after connecting to EverPay via MetaMask, the corresponding account ID on everPay will be 0x26361130d5d6E798E9319114643AF8c868412859."),(0,r.kt)("li",{parentName:"ul"},"Arweave Wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo After connecting to EverPay via ArConnect, the corresponding account ID on everPay will be 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo.")),(0,r.kt)("p",null,"In the future, the everPay protocol account system will support a smart account model, so look out for that."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Difference between an everPay account and a blockchain address."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Note: To transfer funds in everPay, the recipient does not need to be logged in or register an account, the recipient address just needs to be a valid Ethereum address or Arweave address."),(0,r.kt)("li",{parentName:"ul"},"When an everPay account is connected to a wallet, the account ID is the same as the address of the connected wallet."),(0,r.kt)("li",{parentName:"ul"},"Account IDs in the form of blockchain addresses, which are a subset of everPay accounts, and in the future we will also support the internet account model (internet email accounts)."))),(0,r.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum Wallets",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://token.im/"},"imToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trustwallet.com/"},"Trust Wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rabby.io/"},"Rabby")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://walletconnect.org/"},"WalletConnect")),(0,r.kt)("li",{parentName:"ul"},"etc."))),(0,r.kt)("li",{parentName:"ul"},"Arweave Wallet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://arconnect.io/"},"ArConnect"))))))}p.isMDXComponent=!0}}]);