"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4869],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,s=u["".concat(d,".").concat(k)]||u[k]||c[k]||i;return n?r.createElement(s,l(l({ref:t},m),{},{components:n})):r.createElement(s,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:5},l="\u8f6c\u8d26",o={unversionedId:"guide/dive/transfer",id:"guide/dive/transfer",title:"\u8f6c\u8d26",description:"\u8f6c\u8d26\u6307\u4e24\u4e2a everPay \u8d26\u6237\u4e4b\u95f4\u53d1\u751f\u7684\u8f6c\u8d26\u884c\u4e3a\uff0c\u4efb\u610f\u4e24\u4e2a everPay \u8d26\u6237\u4e4b\u95f4\u90fd\u53ef\u4ee5\u8fdb\u884c\u8f6c\u8d26\uff0c\u751a\u81f3\u53ef\u4ee5\u5c06\u4ee5\u592a\u574a\u7684\u8d44\u4ea7\u8f6c\u79fb\u5230 Arweave \u8d26\u6237\u4e0a\u3002",source:"@site/docs/guide/dive/transfer.md",sourceDirName:"guide/dive",slug:"/guide/dive/transfer",permalink:"/docs/guide/dive/transfer",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/dive/transfer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"\u5145\u503c",permalink:"/docs/guide/dive/deposit"},next:{title:"\u63d0\u73b0",permalink:"/docs/guide/dive/withdraw"}},d={},p=[{value:"Schema \u8bf4\u660e",id:"schema-\u8bf4\u660e",level:2},{value:"\u4ea4\u6613\u7b7e\u540d\u3001\u53d1\u9001\u4e0e\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6",id:"\u4ea4\u6613\u7b7e\u540d\u53d1\u9001\u4e0e\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8f6c\u8d26"},"\u8f6c\u8d26"),(0,a.kt)("p",null,"\u8f6c\u8d26\u6307\u4e24\u4e2a everPay \u8d26\u6237\u4e4b\u95f4\u53d1\u751f\u7684\u8f6c\u8d26\u884c\u4e3a\uff0c\u4efb\u610f\u4e24\u4e2a everPay \u8d26\u6237\u4e4b\u95f4\u90fd\u53ef\u4ee5\u8fdb\u884c\u8f6c\u8d26\uff0c\u751a\u81f3\u53ef\u4ee5\u5c06\u4ee5\u592a\u574a\u7684\u8d44\u4ea7\u8f6c\u79fb\u5230 Arweave \u8d26\u6237\u4e0a\u3002"),(0,a.kt)("p",null,"everPay \u901a\u8fc7\u533a\u5757\u94fe\u5bc6\u7801\u5b66\u7b7e\u540d\u9a8c\u8bc1\u6765\u786e\u4fdd\u8f6c\u8d26\u7684\u5b89\u5168\u6027\u3002"),(0,a.kt)("h2",{id:"schema-\u8bf4\u660e"},"Schema \u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenSymbol"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\u4ea4\u6613\u7684\u5f53\u524d everPay \u8d26\u6237 ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"to"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"to")," \u4e3a\u53e6\u4e00\u4e2a everPay \u8d26\u6237 ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u91d1\u989d\uff0c\u7c7b\u578b\u4e3a uint\u3002\u8bbe\u7f6e\u65f6\u9700\u8981\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"td"},"decimals")," \u5904\u7406\uff0c\u4f8b\u5982 0.1USDT\uff0c\u6b64\u5904\u7ecf\u8fc7 USDT \u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"decimals: 6")," \u5904\u7406\u540e\uff0c\u4e3a 100000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fee"),(0,a.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39\uff0c\u7c7b\u578b\u4e3a uint\u3002\u9700\u8981\u8fdb\u884c decimals \u5904\u7406\uff0c\u4f8b\u5982 0.1USDT\uff0c\u6b64\u5904\u7ecf\u8fc7 USDT \u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"decimals: 6")," \u5904\u7406\u540e\uff0c\u4e3a 100000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,a.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39\u6536\u6b3e everPay \u8d26\u6237 ID\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," \u63a5\u53e3\u83b7\u53d6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nonce"),(0,a.kt)("td",{parentName:"tr",align:null},"unix milliseconds\uff0cunix \u6beb\u79d2\u65f6\u95f4\u6233")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tokenID"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," \u63a5\u53e3\u83b7\u53d6\uff0c\u5fc5\u987b\u4e0e ",(0,a.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94\u7684 token ",(0,a.kt)("inlineCode",{parentName:"td"},"id")," \u5b57\u6bb5",(0,a.kt)("strong",{parentName:"td"},"\u4e00\u81f4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chainType"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"chainType")," \u5fc5\u987b\u4e0e ",(0,a.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," \u63a5\u53e3\u83b7\u53d6\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94 token ",(0,a.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,a.kt)("strong",{parentName:"td"},"\u4e00\u81f4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chainID"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"chainID")," \u5fc5\u987b\u4e0e ",(0,a.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," \u63a5\u53e3\u83b7\u53d6\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"td"},"chainID")," ",(0,a.kt)("strong",{parentName:"td"},"\u4e00\u81f4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u8d26\u9644\u52a0\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u81ea\u5b9a\u4e49JSON \u6570\u636e\uff0c\u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},"JSON.stringify()")," \u5904\u7406\u540e\u4f20\u9012\u3002\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"td"},"data")," \u53ef\u81ea\u5b9a\u4e49\u5b9e\u73b0\u4e00\u4e9b\u590d\u6742\u529f\u80fd\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"td",href:"./withdraw#%E5%BF%AB%E9%80%9F%E6%8F%90%E7%8E%B0-data-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5feb\u901f\u63d0\u73b0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"td"},"'v1'"))))),(0,a.kt)("h2",{id:"\u4ea4\u6613\u7b7e\u540d\u53d1\u9001\u4e0e\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6"},"\u4ea4\u6613\u7b7e\u540d\u3001\u53d1\u9001\u4e0e\u4ea4\u6613\u8bb0\u5f55\u83b7\u53d6"),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u6d4f\u89c8 ",(0,a.kt)("a",{parentName:"p",href:"./transaction#messagedata"},"\u6307\u5357 - \u6df1\u5165\u7406\u89e3 - \u4ea4\u6613")," \u7ae0\u8282\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"))}c.isMDXComponent=!0}}]);