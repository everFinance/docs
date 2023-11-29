"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="isSmartAccount",c={unversionedId:"guide/SDK/everpay-js/configuration/isSmartAccount",id:"guide/SDK/everpay-js/configuration/isSmartAccount",title:"isSmartAccount",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/guide/SDK/everpay-js/configuration/isSmartAccount.md",sourceDirName:"guide/SDK/everpay-js/configuration",slug:"/guide/SDK/everpay-js/configuration/isSmartAccount",permalink:"/docs/guide/SDK/everpay-js/configuration/isSmartAccount",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/configuration/isSmartAccount.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"account",permalink:"/docs/guide/SDK/everpay-js/configuration/account"},next:{title:"arJWK",permalink:"/docs/guide/SDK/everpay-js/configuration/arJWK"}},u={},p=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",level:2},{value:"\u914d\u7f6e\u9879\u7c7b\u578b",id:"\u914d\u7f6e\u9879\u7c7b\u578b",level:2},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",level:2}],s={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issmartaccount"},"isSmartAccount"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,a.kt)("p",null,"\u6b64\u914d\u7f6e\u9879\u7528\u4e8e\u901a\u8fc7 \u667a\u80fd\u8d26\u6237\uff08webauthn\uff09 \u6765\u64cd\u4f5c everPay ",(0,a.kt)("inlineCode",{parentName:"p"},"\u667a\u80fd\u8d26\u6237\u6a21\u578b")," \u7684 \u8d26\u6237\uff0c\u5bf9\u8be5\u8d26\u6237\u8fdb\u884c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5145\u503c\uff1a",(0,a.kt)("strong",{parentName:"li"},"\u667a\u80fd\u8d26\u6237\u4e0d\u652f\u6301\u5145\u503c"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u8d26\uff1a\u8df3\u8f6c ",(0,a.kt)("inlineCode",{parentName:"li"},"https://beta.everpay.io/sign")," \u9875\u9762\uff0c\u4f20\u9012\u7b7e\u540d\u53c2\u6570\uff0c\u5b8c\u6210\u8f6c\u8d26\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u73b0\uff1a\u8df3\u8f6c ",(0,a.kt)("inlineCode",{parentName:"li"},"https://beta.everpay.io/sign")," \u9875\u9762\uff0c\u4f20\u9012\u7b7e\u540d\u53c2\u6570\uff0c\u5b8c\u6210\u63d0\u73b0\u64cd\u4f5c\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879\u7c7b\u578b"},"\u914d\u7f6e\u9879\u7c7b\u578b"),(0,a.kt)("p",null,"boolean"),(0,a.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const account = await new Everpay().smartAccountAuth('https://app-dev.permaswap.network/permalogo.svg')\nconst everpay = new Everpay({\n  account,\n  isSmartAccount: true\n})\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u667a\u80fd\u8d26\u6237\u6a21\u578b\u4ec5\u9002\u7528\u4e8e\u6d4f\u89c8\u5668\u73af\u5883")))}d.isMDXComponent=!0}}]);