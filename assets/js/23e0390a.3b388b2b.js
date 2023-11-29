"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="\u4ecb\u7ecd",c={unversionedId:"guide/SDK/everpay-js/basic-api/intro",id:"guide/SDK/everpay-js/basic-api/intro",title:"\u4ecb\u7ecd",description:"\u5728 \u521b\u5efa Everpay \u5b9e\u4f8b\u65f6\uff0c\u53ef\u9009\u62e9\u6027\u4f20\u9012 debug, account, ethConnectedSigner, arJWK\uff0c\u751a\u81f3\u4efb\u4f55\u53c2\u6570\u90fd\u4e0d\u8fdb\u884c\u4f20\u9012\uff0c\u4e5f\u53ef\u8fdb\u884c \u57fa\u7840\u67e5\u8be2API \u7684\u8c03\u7528\u3002",source:"@site/docs/guide/SDK/everpay-js/basic-api/intro.md",sourceDirName:"guide/SDK/everpay-js/basic-api",slug:"/guide/SDK/everpay-js/basic-api/intro",permalink:"/docs/guide/SDK/everpay-js/basic-api/intro",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/basic-api/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"ethConnectedSigner",permalink:"/docs/guide/SDK/everpay-js/configuration/ethConnectedSigner"},next:{title:"info",permalink:"/docs/guide/SDK/everpay-js/basic-api/info"}},p={},s=[],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5728 \u521b\u5efa Everpay \u5b9e\u4f8b\u65f6\uff0c\u53ef\u9009\u62e9\u6027\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK"),"\uff0c\u751a\u81f3\u4efb\u4f55\u53c2\u6570\u90fd\u4e0d\u8fdb\u884c\u4f20\u9012\uff0c\u4e5f\u53ef\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u57fa\u7840\u67e5\u8be2API")," \u7684\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay()\neverpay.info().then(console.log)\neverpay.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859' }).then(console.log)\n")))}d.isMDXComponent=!0}}]);