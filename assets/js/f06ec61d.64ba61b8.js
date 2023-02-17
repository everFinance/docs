"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[968],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:11},o="expressInfo",l={unversionedId:"sdk/server-api/basic-api/expressInfo",id:"sdk/server-api/basic-api/expressInfo",title:"expressInfo",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/basic-api/expressInfo.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/expressInfo",permalink:"/docs/sdk/server-api/basic-api/expressInfo",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/basic-api/expressInfo.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sdk",previous:{title:"mintedTxByChainTxHash",permalink:"/docs/sdk/server-api/basic-api/mintedTxByChainTxHash"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/server-api/operation-api/intro"}},p={},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expressinfo"},"expressInfo"),(0,a.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,a.kt)("p",null,"\u83b7\u53d6 everPay \u5feb\u901f\u63d0\u73b0\u505a\u5e02\u5546\u8d26\u6237\u3001\u652f\u6301\u4ee3\u5e01\u5217\u8868\u3001\u4ee3\u5e01\u53ef\u5feb\u901f\u63d0\u73b0\u989d\u5ea6\u4ee5\u53ca\u9884\u4f30\u624b\u7eed\u8d39\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{{expressEndpoint}}/withdraw/info")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"expressInfo")," \u7684\u63a5\u53e3 endpoint \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"expressEndpoint"))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u63d0\u73b0\u505a\u5e02\u5546 everPay \u8d26\u6237 ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"withdrawTimeCost"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9884\u8ba1\u5feb\u901f\u63d0\u73b0\u5b8c\u6210\u65f6\u95f4\uff08\u79d2\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokens"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5feb\u901f\u63d0\u73b0\u505a\u5e02\u5546\u652f\u6301\u5feb\u901f\u63d0\u73b0\u7684\u8d44\u4ea7\u4e0e\u4fe1\u606f\u5217\u8868\uff1a",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"tokenTag")," \u7531 ",(0,a.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,a.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"withdrawFee")," \u4ee3\u8868\u5feb\u901f\u63d0\u73b0\u9700\u8981\u6263\u9664\u7684\u624b\u7eed\u8d39"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"walletBalance")," \u4ee3\u8868\u505a\u5e02\u5546\u94b1\u5305\u8be5\u8d44\u4ea7\u53ef\u5feb\u901f\u63d0\u73b0\u7684\u989d\u5ea6")))))),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://express-dev.everpay.io/withdraw/info'\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09",\n  "withdrawTimeCost": 60,\n  "tokens": [\n    {\n      "tokenTag": "ethereum-ETH-0x0000000000000000000000000000000000000000",\n      "withdrawFee": "572864391122100",\n      "walletBalance": "323719653678176720"\n    },\n    {\n      "tokenTag": "ethereum-USDT-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "withdrawFee": "2708852",\n      "walletBalance": "995882735697"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);