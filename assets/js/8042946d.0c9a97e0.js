(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9887],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Introduction",l={unversionedId:"documentation/deposit/intro",id:"documentation/deposit/intro",isDocsHomePage:!1,title:"Introduction",description:"The wallet addresses of different types of blockchains on everPay correspond to one everPay account. everPay account ID is the same as the wallet address of that wallet on the corresponding blockchain. Users do not need to register an additional account with everPay. everPay currently supports all valid accounts of Ethereum and Arweave.",source:"@site/docs/documentation/deposit/intro.md",sourceDirName:"documentation/deposit",slug:"/documentation/deposit/intro",permalink:"/docs/documentation/deposit/intro",editUrl:"https://github.com/everFinance/docs/edit/master/docs/documentation/deposit/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentation",previous:{title:"Transaction History",permalink:"/docs/documentation/everpay-transaction"},next:{title:"Deposit method",permalink:"/docs/documentation/deposit/method"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The wallet addresses of different types of blockchains on everPay correspond to one everPay account. everPay account ID is the same as the wallet address of that wallet on the corresponding blockchain. Users do not need to register an additional account with everPay. everPay currently supports all valid accounts of Ethereum and Arweave."),(0,a.kt)("p",null,"For example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 has the same account ID on everPay as 0x26361130d5d6E798E9319114643AF8c868412859"),(0,a.kt)("li",{parentName:"ul"},"Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo on everPay, the corresponding account ID is 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHX")),(0,a.kt)("p",null,"The act of deposit, i.e. blockchain transfer to everPay's corresponding blockchain multi-signature contract / threshold signature managed wallet."),(0,a.kt)("p",null,"Example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 transfers 0.1 USDT to everPay's multisignature contract on Ethereum, everPay's backend service monitors the entry and waits for 6 blocks to confirm it, i.e. it will mark, on everPay This 0x26361130d5d6E798E9319114643AF8c868412859 everPay account assets increased by 0.1 USDT"),(0,a.kt)("li",{parentName:"ul"},"Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo transfers 0.1 AR to everPay's threshold signature wallet address managed by Arweave, everPay's backend service monitors the entry and waits for 15 block confirmations, i.e. it will mark this 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo on everPay The 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo everPay account assets will be increased by 0.1 AR")))}p.isMDXComponent=!0}}]);