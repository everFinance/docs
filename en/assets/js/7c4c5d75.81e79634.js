"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[753],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:2},o="Quick integration with everpay-js",l={unversionedId:"guide/quick-start/everpay-js",id:"guide/quick-start/everpay-js",title:"Quick integration with everpay-js",description:"everpay-js encapsulates most of the interfaces of everPay protocol for developers, developers can use everpay-js to quickly integrate everPay protocol into application pages. Using everpay-js, you can quickly complete everPay payment settlement in your application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/quick-start/everpay-js.md",sourceDirName:"guide/quick-start",slug:"/guide/quick-start/everpay-js",permalink:"/en/docs/guide/quick-start/everpay-js",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/quick-start/everpay-js.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Brief Description",permalink:"/en/docs/guide/quick-start/overview"},next:{title:"System Overview",permalink:"/en/docs/guide/dive/overview"}},s={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Import",id:"import",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Connecting with an ethereum wallet",id:"connecting-with-an-ethereum-wallet",level:3},{value:"Connecting with an arweave wallet",id:"connecting-with-an-arweave-wallet",level:3},{value:"Deposit",id:"deposit",level:2},{value:"Transfer",id:"transfer",level:2},{value:"Withdrawal",id:"withdrawal",level:2},{value:"Example reference",id:"example-reference",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-integration-with-everpay-js"},"Quick integration with everpay-js"),(0,a.kt)("p",null,"everpay-js encapsulates most of the interfaces of everPay protocol for developers, developers can use everpay-js to quickly integrate everPay protocol into application pages. Using everpay-js, you can quickly complete everPay payment settlement in your application."),(0,a.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node Version >= 14"),". It is recommended to use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},(0,a.kt)("inlineCode",{parentName:"a"},"nvm"))," or ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"nvm-windows"),"\uff08windows\uff09 to manage Node versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ethers.io/v5/"},"ethers.js")," (only required when connecting with an ethereum wallet). It is recommended to use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/everFinance/everpay-js/blob/main/package.json#L57"},"the same version ethers.js inside the everpay-js"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add everpay\n\n# or\n\nnpm install everpay\n")),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Everpay from 'everpay'\n// or\n// const Everpay = require('everpay')\n")),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("h3",{id:"connecting-with-an-ethereum-wallet"},"Connecting with an ethereum wallet"),(0,a.kt)("p",null,"To connect using an ethereum wallet, initialization requires the injection of ",(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", which developers need to create using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js"},"ethers.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  chainType: 'ethereum',\n  ethConnectedSigner: signer\n})\n")),(0,a.kt)("p",null,"For more information on how to create ",(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"../../sdk/everpay-js/configuration/ethConnectedSigner"},"SDK - everpay-js - Configuration - ",(0,a.kt)("inlineCode",{parentName:"a"},"ethConnectedSigner")),"."),(0,a.kt)("h3",{id:"connecting-with-an-arweave-wallet"},"Connecting with an arweave wallet"),(0,a.kt)("p",null,"If the developer uses Arweave wallet connection, the initialization needs to inject ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK"),". When using the browser ",(0,a.kt)("a",{parentName:"p",href:"https://arconnect.io/"},"ArConnect")," wallet, injecting ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK: 'use_wallet'")," will do the trick."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const arAddress = await window.arweaveWallet.getActiveAddress()\nconst everpay = new Everpay({\n  account: arAddress,\n  chainType: 'arweave',\n  arJWK: 'use_wallet',\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"arJWK")," also supports the private key format, you can browse ",(0,a.kt)("a",{parentName:"p",href:"../../sdk/everpay-js/configuration/arJWK"},"SDK - everpay-js - Configuration - ",(0,a.kt)("inlineCode",{parentName:"a"},"arJWK"))," for configuration."),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"Fill in the token symbol and amount to be recharged, and call the following interface to complete the recharge."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"everpay.deposit({\n  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n  amount: '5.26'\n}).then(console.log)\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Ethereum requires 6 blocks for recharge, Arweave requires 15 blocks for recharge"),(0,a.kt)("li",{parentName:"ul"},"everPay supports AR cross-chain, initialization injection ",(0,a.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")," will call WAR (ERC20) for recharge, initialization injection ",(0,a.kt)("inlineCode",{parentName:"li"},"arJWK")," will call AR (native) for recharge"))),(0,a.kt)("h2",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"When the everPay account that corresponds to the injected wallet already has assets, you can make an everPay transfer. Fill in the symbol and amount to be transferred and call the following interface to complete the transfer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"everpay.transfer({\n  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n  amount: '5.26',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859'\n}).then(console.log)\n")),(0,a.kt)("h2",{id:"withdrawal"},"Withdrawal"),(0,a.kt)("p",null,"Withdraw the assets from everPay back to the native chain. When the everPay account that corresponds to the injected wallet already has assets, you can withdraw assets from everPay. Fill in the symbol, amount, chainType and withdrawal address to withdraw, and call the following interface to withdraw."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"everpay.withdraw({\n  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n  amount: '5.26',\n  chainType: 'ethereum',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859'\n}).then(console.log)\n")),(0,a.kt)("h2",{id:"example-reference"},"Example reference"),(0,a.kt)("p",null,"More examples can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/tree/main/test"},"everpay-js unit test cases")))}d.isMDXComponent=!0}}]);