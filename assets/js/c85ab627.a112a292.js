"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=d(n),s=i,m=v["".concat(u,".").concat(s)]||v[s]||c[s]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[v]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:1},a="\u7b80\u4ecb",o={unversionedId:"guide/dive/overview",id:"guide/dive/overview",title:"\u7b80\u4ecb",description:"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\uff1a\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae everPay \u8fd0\u884c\u673a\u5236",source:"@site/docs/guide/dive/overview.md",sourceDirName:"guide/dive",slug:"/guide/dive/overview",permalink:"/docs/guide/dive/overview",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/dive/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"\u76ee\u5f55",permalink:"/docs/guide/docs-catalogue"},next:{title:"\u8d26\u6237\u6a21\u578b",permalink:"/docs/guide/dive/account-model"}},u={},d=[{value:"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\uff1a\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae everPay \u8fd0\u884c\u673a\u5236",id:"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae-everpay-\u8fd0\u884c\u673a\u5236",level:2},{value:"\u8fd0\u884c\u673a\u5236",id:"\u8fd0\u884c\u673a\u5236",level:3},{value:"\u534f\u8bae\u89d2\u8272",id:"\u534f\u8bae\u89d2\u8272",level:3},{value:"\u534f\u8c03\u8005\uff08Coordinator\uff09",id:"\u534f\u8c03\u8005coordinator",level:4},{value:"\u68c0\u6d4b\u8005\uff08Detectors\uff09",id:"\u68c0\u6d4b\u8005detectors",level:4},{value:"\u5b88\u671b\u8005\uff08Watchmen\uff09",id:"\u5b88\u671b\u8005watchmen",level:4},{value:"\u8d44\u4ea7\u8de8\u94fe",id:"\u8d44\u4ea7\u8de8\u94fe",level:3},{value:"\u591a\u7b7e",id:"\u591a\u7b7e",level:4},{value:"\u95e8\u9650\u7b7e\u540d",id:"\u95e8\u9650\u7b7e\u540d",level:4},{value:"\u5171\u8bc6",id:"\u5171\u8bc6",level:3},{value:"\u65e0\u6cd5\u4f5c\u6076",id:"\u65e0\u6cd5\u4f5c\u6076",level:3},{value:"\u9519\u8bef\u7684\u7b7e\u540d",id:"\u9519\u8bef\u7684\u7b7e\u540d",level:4},{value:"\u4f59\u989d\u653b\u51fb",id:"\u4f59\u989d\u653b\u51fb",level:4},{value:"\u8d44\u4ea7 Mint/Burn",id:"\u8d44\u4ea7-mintburn",level:4},{value:"\u4ea4\u4e92\u4f53\u9a8c",id:"\u4ea4\u4e92\u4f53\u9a8c",level:3},{value:"\u6613\u7528\u6027",id:"\u6613\u7528\u6027",level:4},{value:"\u7075\u6d3b\u7684\u7b7e\u540d\u7b97\u6cd5",id:"\u7075\u6d3b\u7684\u7b7e\u540d\u7b97\u6cd5",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:3}],p={toc:d},v="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(v,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("h2",{id:"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae-everpay-\u8fd0\u884c\u673a\u5236"},"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u63a2\u7d22\uff1a\u7b80\u6790\u8de8\u94fe\u652f\u4ed8\u534f\u8bae everPay \u8fd0\u884c\u673a\u5236"),(0,i.kt)("p",null,"\u6bd4\u7279\u5e01/\u4ee5\u592a\u574a\u8ba1\u7b97\u8d44\u6e90\u7a00\u7f3a\uff0c\u8f6c\u8d26\u8d39\u7528\u9ad8\u6602\uff0c\u96be\u4ee5\u6ee1\u8db3\u666e\u901a\u8f6c\u8d26\u9700\u6c42\u3002everVision \u4f7f\u7528\u5b58\u50a8\u5e94\u7528\u8303\u5f0f\u6784\u5efa everPay\uff0c\u4e00\u4e2a\u53ef\u4fe1\u8de8\u94fe\u652f\u4ed8\u7ed3\u7b97\u534f\u8bae\u3002"),(0,i.kt)("p",null,"everPay \u534f\u8bae\u5c06\u5176\u4ed6\u516c\u94fe\u7684\u8d44\u4ea7\u9501\u5165\u667a\u80fd\u5408\u7ea6\u4e2d\uff0c\u5728\u534f\u8bae\u4e0a\u6620\u5c04\u751f\u6210\u5bf9\u5e94\u8d44\u4ea7\uff0c\u8d44\u4ea7\u751f\u6210\u540e\u7528\u6237\u5c31\u53ef\u4ee5\u5728\u534f\u8bae\u4e0a\u8fdb\u884c\u4efb\u610f\u7684\u8f6c\u8d26\u548c\u652f\u4ed8\u3002everPay \u7684\u4ea4\u6613\u7684\u5171\u8bc6\u6210\u672c\u975e\u5e38\u4f4e\uff0c\u8fdb\u884c\u4e0a\u4e07\u7b14\u4ea4\u6613\u4ec5\u9700\u8981 0.5 \u7f8e\u91d1\u3002everPay \u7684 TPS \u6ca1\u6709\u56fa\u5b9a\u7684\u9650\u5236\uff0c\u4ec5\u53d6\u51b3\u4e8e\u534f\u8bae\u7684\u5e94\u7528\u67b6\u6784\u548c\u670d\u52a1\u5668\u6027\u80fd\u3002\u534f\u8bae\u53ea\u8981\u6ee1\u8db3\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u6807\u51c6\uff0c\u5373\u53ef\u4ee5\u8fdb\u884c\u201c\u65e0\u9650\u201d\u7684\u62d3\u5c55\uff0c\u6027\u80fd\u53ef\u4ee5\u5ab2\u7f8e\u4f20\u7edf\u8054\u7f51\u5e94\u7528\u3002"),(0,i.kt)("h3",{id:"\u8fd0\u884c\u673a\u5236"},"\u8fd0\u884c\u673a\u5236"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"everPay \u8fd0\u884c\u673a\u5236",src:n(5066).Z,width:"1400",height:"969"})),(0,i.kt)("h3",{id:"\u534f\u8bae\u89d2\u8272"},"\u534f\u8bae\u89d2\u8272"),(0,i.kt)("h4",{id:"\u534f\u8c03\u8005coordinator"},"\u534f\u8c03\u8005\uff08Coordinator\uff09"),(0,i.kt)("p",null,"\u8d1f\u8d23\u4ea4\u6613\u91c7\u96c6\u3001\u9a8c\u8bc1\u548c\u4e0a\u94fe\u3002\u534f\u8c03\u8005\u901a\u8fc7 API \u5c06\u7528\u6237\u7684\u5408\u6cd5\u4ea4\u6613\u91c7\u96c6\u5230\u5e8f\u5217\u5316\u7684 Pending \u6c60\u4e2d\uff0c\u5e76\u6309\u7167\u4e00\u5b9a\u7684\u65f6\u95f4\u5468\u671f\u5c06 Pending \u6c60\u4e2d\u7684\u4ea4\u6613\u6279\u91cf\uff08rollup\uff09\u6253\u5305\u4e0a\u94fe\u3002\u534f\u8c03\u8005\u4f1a\u6839\u636e\u4ea4\u6613\u751f\u6210\u4e00\u4e2a\u5b9e\u65f6\u7684\u5168\u5c40\u72b6\u6001\uff0c\u8fd9\u4e2a\u72b6\u6001\u6240\u6709\u5408\u6cd5\u7684\u94fe\u4e0a\u4ea4\u6613\u548c Pending \u6c60\u4e2d\u4ea4\u6613\u8ba1\u7b97\u7684\u6700\u7ec8\u7ed3\u679c\u3002"),(0,i.kt)("h4",{id:"\u68c0\u6d4b\u8005detectors"},"\u68c0\u6d4b\u8005\uff08Detectors\uff09"),(0,i.kt)("p",null,"\u68c0\u6d4b\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u548c\u6821\u9a8c\u94fe\u4e0a\u6570\u636e\uff0c\u751f\u6210\u5168\u5c40\u72b6\u6001\u548c\u4f59\u989d\u3002\u68c0\u6d4b\u7a0b\u5e8f\u7684\u72b6\u6001\u4f1a\u6bd4\u534f\u8c03\u8005\u6162\u4e00\u6b65\uff0c\u68c0\u6d4b\u7a0b\u5e8f\u53ea\u4ee5\u94fe\u4e0a\u6570\u636e\u4e3a\u51c6\uff0c\u4e0d\u52a0\u8f7d\u534f\u8c03\u8005 Pending \u6c60\u4ea4\u6613\u4e2d\u8fd8\u672a\u6253\u5305\u7684\u4ea4\u6613\u3002\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4e0b\u8f7d\u548c\u8fd0\u884c\u68c0\u6d4b\u8005\u7a0b\u5e8f\uff0c\u6210\u4e3a\u68c0\u6d4b\u8005\u3002"),(0,i.kt)("h4",{id:"\u5b88\u671b\u8005watchmen"},"\u5b88\u671b\u8005\uff08Watchmen\uff09"),(0,i.kt)("p",null,"\u591a\u7b7e\u6cbb\u7406\u6210\u5458\uff0c\u751f\u6210\u63d0\u6848\u548c\u7b7e\u7f72\u63d0\u6848\uff0c\u63d0\u6848\u53ea\u6709\u83b7\u5f97\u4e86\u5927\u591a\u6570\uff08>51%\uff09\u5b88\u671b\u8005\u7684\u7b7e\u7f72\u540e\u624d\u80fd\u6267\u884c\u3002"),(0,i.kt)("h3",{id:"\u8d44\u4ea7\u8de8\u94fe"},"\u8d44\u4ea7\u8de8\u94fe"),(0,i.kt)("p",null,"everPay \u534f\u8bae\u76ee\u524d\u652f\u6301\u4e24\u79cd\u8de8\u94fe\u65b9\u6848\uff0c\u5206\u522b\u662f\u591a\u7b7e\u548c\u95e8\u9650\u7b7e\u540d\u3002"),(0,i.kt)("h4",{id:"\u591a\u7b7e"},"\u591a\u7b7e"),(0,i.kt)("p",null,"\u652f\u6301\u667a\u80fd\u5408\u7ea6\u7684\u516c\u94fe\uff0ceverPay \u91c7\u7528\u591a\u7b7e\u6280\u672f\u90e8\u7f72\u4e00\u4e2a\u9501\u4ed3\u5408\u7ea6\u3002\u591a\u628a\u5bc6\u94a5\u7531\u4e0d\u540c\u7684\u5b88\u671b\u8005\u6301\u6709\u3002"),(0,i.kt)("p",null,"\u534f\u8bae\u76d1\u542c\u5230\u8d44\u4ea7\u8f6c\u5165\u4e8b\u4ef6\uff0c\u5e76\u786e\u4fdd\u4ea4\u6613\u786e\u8ba4\u540e\u5728 everPay \u534f\u8bae\u4e0a\u6620\u5c04\u51fa\u5bf9\u5e94\u7684\u8d44\u4ea7\u3002"),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u53d1\u8d77\u8d44\u4ea7\u9500\u6bc1\u4ea4\u6613\uff0c\u8be5\u4ea4\u6613\u7ecf\u8fc7\u9a8c\u8bc1\u540e\u4f1a\u6253\u5305\u5230\u5b58\u50a8\u578b\u533a\u5757\u94fe\u4e0a\uff08Arweave\uff09\u3002\u5b88\u671b\u8005\u76d1\u542c\u5b58\u50a8\u578b\u533a\u5757\u94fe\uff0c\u5bf9\u7528\u6237\u7684\u9500\u6bc1\u4ea4\u6613\u8fdb\u884c\u9a8c\u8bc1\uff0c\u7136\u540e\u7b7e\u7f72\u6709\u6548\u7684\u9500\u6bc1\u4ea4\u6613\u53d1\u9001\u5230\u516c\u94fe\u3002\u5f53\u4e00\u5b9a\u6570\u91cf\u7684\u5b88\u671b\u8005\u5b8c\u6210\u591a\u7b7e\u540e\uff0c\u91ca\u653e\u9501\u4ed3\u8d44\u4ea7\u5230\u7528\u6237\u3002"),(0,i.kt)("h4",{id:"\u95e8\u9650\u7b7e\u540d"},"\u95e8\u9650\u7b7e\u540d"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u652f\u6301\u667a\u80fd\u5408\u7ea6\u7684\u516c\u94fe\uff0c\u6682\u91c7\u7528\u95e8\u9650\u7b7e\u540d\u6280\u672f\u6765\u4fdd\u8bc1\u7528\u6237\u8d44\u4ea7\u9501\u5b9a\u3002\u673a\u5236\u4e0e\u591a\u7b7e\u7c7b\u4f3c\u3002"),(0,i.kt)("h3",{id:"\u5171\u8bc6"},"\u5171\u8bc6"),(0,i.kt)("p",null,"\u534f\u8bae\u5171\u8bc6\u901a\u8fc7\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u8fdb\u884c\u4fdd\u969c\u3002\u5728\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u4e2d\uff0c\u6240\u6709\u8ba1\u7b97\u8fc7\u7a0b\u5728\u94fe\u4e0b\u5b8c\u6210\uff0c\u5e94\u7528\u7684\u8f93\u5165\u53c2\u6570\u5168\u90e8\u5b58\u50a8\u5230\u533a\u5757\u94fe\u4e0a\u3002\u534f\u8c03\u8005\u3001\u68c0\u6d4b\u8005\u548c\u5b88\u671b\u8005\u90fd\u8fd0\u884c\u4e86\u76f8\u540c\u7684\u4e1a\u52a1\u9a8c\u8bc1\u7ec4\u4ef6\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4e0b\u8f7d\u548c\u8fd0\u884c\u68c0\u6d4b\u7a0b\u5e8f\uff0c\u52a0\u8f7d\u533a\u5757\u94fe\u4e0a\u7684\u6570\u636e\u8fdb\u884c\u4ea4\u6613\u72b6\u6001\u68c0\u67e5\u3002\n",(0,i.kt)("img",{alt:"everPay \u8fd0\u884c\u673a\u5236",src:n(8102).Z,width:"1400",height:"672"}),"\neverPay \u5c06\u6240\u6709\u7c7b\u578b\u7684\u4ea4\u6613\uff0c\u5305\u62ec mint/burn/transfer \u6309\u7167\u6b63\u786e\u7684\u4ea4\u6613\u987a\u5e8f\u6253\u5305\u5230\u5b58\u50a8\u578b\u533a\u5757\u94fe\u4e0a\u3002\u7b2c\u4e09\u65b9\u5e94\u7528\u548c\u4e2a\u4eba\u53ef\u4ee5\u4f7f\u7528\u68c0\u6d4b\u7a0b\u5e8f\u8fdb\u884c\u72b6\u6001\u68c0\u67e5\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5e76\u9a8c\u8bc1\u6240\u6709\u5728\u94fe\u4e0a\u7684\u4ea4\u6613\u8bb0\u5f55\u3002\u5982\u679c\u534f\u8c03\u8005\u548c\u68c0\u6d4b\u8005\u72b6\u6001\u4e0d\u4e00\u81f4\uff0c\u5219\u8bf4\u660e\u5e94\u7528\u53ef\u80fd\u5b58\u5728\u5171\u8bc6\u6b3a\u8bc8\u98ce\u9669\u3002"),(0,i.kt)("h3",{id:"\u65e0\u6cd5\u4f5c\u6076"},"\u65e0\u6cd5\u4f5c\u6076"),(0,i.kt)("p",null,"\u4ea4\u6613\u90fd\u4f1a\u6309\u7167\u987a\u5e8f\u88ab\u5e8f\u5217\u5316\u6253\u5305\u5230\u533a\u5757\u94fe\u4e0a\uff0c\u53ea\u8981\u6309\u7167\u533a\u5757\u94fe\u4e0a\u7684\u6253\u5305\u987a\u5e8f\u52a0\u8f7d\u4ea4\u6613\uff0c\u6700\u540e\u751f\u6210\u7684\u72b6\u6001\u90fd\u662f\u4e00\u81f4\u7684\u3002"),(0,i.kt)("h4",{id:"\u9519\u8bef\u7684\u7b7e\u540d"},"\u9519\u8bef\u7684\u7b7e\u540d"),(0,i.kt)("p",null,"\u5c06\u9519\u8bef\u7b7e\u540d\u6253\u5305\u5230\u94fe\u4e0a\u662f\u65e0\u610f\u4e49\u7684\uff0c\u6240\u6709\u68c0\u6d4b\u8005\u90fd\u4f1a\u62d2\u7edd\u9519\u8bef\u7684\u7b7e\u540d\u3002"),(0,i.kt)("h4",{id:"\u4f59\u989d\u653b\u51fb"},"\u4f59\u989d\u653b\u51fb"),(0,i.kt)("p",null,"\u6240\u6709\u7684\u4ea4\u6613\u90fd\u4f1a\u5e8f\u5217\u5316\u7684\u6267\u884c\uff0c\u65e0\u6cd5\u8fdb\u884c\u53cc\u82b1\u653b\u51fb\u3002\u540c\u65f6\u4ea4\u6613\u4e2d\u5305\u542b nonce \u5b57\u6bb5\uff0c\u7528\u4e8e\u4fdd\u62a4\u4ea4\u6613\u552f\u4e00\u6027\uff0c\u9632\u6b62\u7528\u6237\u8fdb\u884c\u91cd\u653e\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\u53ea\u6709\u4e00\u4e2a\u534f\u8c03\u8005\u8fdb\u884c\u4ea4\u6613\u5904\u7406\uff0c\u5982\u679c\u534f\u8c03\u8005\u4f5c\u6076\u600e\u4e48\u529e\uff1f\u5728\u7528\u6237\u4ec5\u6709 1 ETH \u7684\u4f59\u989d\u65f6\uff0c\u5141\u8bb8\u8be5\u7528\u6237\u53d1\u9001\u4e86 2 ETH \u7684\u8f6c\u8d26\u4ea4\u6613\u5e76\u88ab\u6253\u5305\u5230\u94fe\u4e0a\u3002\u6b64\u65f6\u4efb\u4f55\u68c0\u6d4b\u8005\u90fd\u4e0b\u8f7d\u6765\u81ea\u533a\u5757\u94fe\u4e0a\u7684\u5e8f\u5217\u5316\u6570\u636e\uff0c\u53d1\u73b0\u7528\u6237\u4ec5\u6709 1 ETH \u4f59\u989d\uff0c2 ETH \u7684\u8f6c\u8d26\u88ab\u62d2\u7edd\uff0c\u4ea4\u6613\u6253\u5305\u540e\u534f\u8c03\u8005\u7684\u9519\u8bef\u4ea4\u6613\u4f1a\u88ab\u7acb\u5373\u53d1\u73b0\u3002\u53e6\u5916\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u4f59\u989d\u662f 1 ETH \u4f59\u989d\u3002\u534f\u8c03\u8005\u5141\u8bb8\u7528\u6237\u8fde\u7eed\u53d1\u9001\u4e86\u4e24\u6b21 1 ETH \u8f6c\u8d26\u4ea4\u6613\uff0c\u7b2c\u4e00\u7b14\u4ea4\u6613\u88ab\u68c0\u6d4b\u8005\u83b7\u5f97\uff0c\u7528\u6237\u4f59\u989d\u4ece 1 \u53d8\u6210 0\uff0c\u7b2c\u4e8c\u7b14\u4ea4\u6613\u4e5f\u88ab\u68c0\u6d4b\u8005\u83b7\u5f97\uff0c\u7b2c\u4e8c\u7b14\u4ea4\u6613\u7531\u4e8e\u4f59\u989d\u4e0d\u8db3\u88ab\u62d2\u7edd\u3002"),(0,i.kt)("h4",{id:"\u8d44\u4ea7-mintburn"},"\u8d44\u4ea7 Mint/Burn"),(0,i.kt)("p",null,"\u5728\u4ee5\u592a\u574a\u4e3a\u7528\u4f8b\u4e2d\uff0c\u4f1a\u90e8\u7f72\u4e00\u4e2a\u673a\u5668\u4eba\uff08EthBot\uff09\u7528\u4e8e\u76d1\u542c ETH \u4e8b\u4ef6\uff0c\u7528\u6237\u5c06\u8d44\u4ea7\u8f6c\u5165\u591a\u7b7e\u667a\u80fd\u5408\u7ea6\u540e\uff0c\u673a\u5668\u4eba\u4f1a\u786e\u4fdd\u4ea4\u6613\u5df2\u7ecf\u7ecf\u8fc7 20 \u4e2a\u533a\u5757\u540e\u53d1\u8d77 Mint \u4ea4\u6613\u5230 everPay \u534f\u8bae\uff0c\u534f\u8bae\u4f1a\u5bf9\u8be5\u4ee5\u592a\u574a\u4ea4\u6613\u8fdb\u884c\u5bc6\u7801\u5b66\u6821\u9a8c\uff0c\u5e76\u518d\u6b21\u67e5\u8be2\u4ee5\u592a\u574a\u8282\u70b9\u8be5\u4ea4\u6613\u662f\u5426\u5df2\u7ecf\u6253\u5305\u8d85\u8fc7 20 \u4e2a\u533a\u5757\u786e\u8ba4\u3002\u8d44\u4ea7\u6210\u529f mint \u540e\uff0c\u4ea4\u6613\u6307\u7eb9\u4f1a\u5728\u534f\u8bae\u4e2d\u6807\u8bb0\u4e3a\u201cminted\u201d\uff0c\u907f\u514d\u91cd\u590d\u8d44\u4ea7\u91cd\u590d mint\u3002"),(0,i.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f: EthBot \u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4ec5\u7528\u4e8e\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u628a\u5408\u6cd5\u4ee5\u592a\u574a\u7684\u4ea4\u6613\u53d1\u9001\u5230\u534f\u8bae\u8fdb\u884c\u8d44\u4ea7 mint\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u7528\u6237\u53d1\u8d77 burn \u4ea4\u6613\uff0c\u5408\u6cd5\u7684 burn \u4f1a\u88ab\u534f\u8bae\u9a8c\u8bc1\u540e\u6253\u5305\u5230 Arweave \u4e0a\u3002\u5b88\u671b\u8005\u4eec\u76d1\u542c Arweave \u4e8b\u4ef6\uff0c\u9a8c\u8bc1\u4ea4\u6613\u540e\u53d1\u9001\u591a\u7b7e\u4ea4\u6613\u3002\u540c\u6837\u5730\uff0c\u4ee5\u592a\u574a\u9501\u4ed3\u5408\u7ea6\u4f1a\u9a8c\u8bc1\u4ea4\u6613\u6307\u7eb9\uff0c\u4fdd\u969c\u4ea4\u6613\u552f\u4e00\uff0c\u4e0d\u88ab\u91cd\u590d\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u6240\u6709\u8fc7\u7a0b\u90fd\u53ef\u4ee5\u901a\u8fc7 everPay \u534f\u8bae\u7684\u68c0\u6d4b\u7a0b\u5e8f\u8fdb\u884c\u68c0\u67e5\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u4e0b\u8f7d\uff0c\u6210\u4e3a\u68c0\u6d4b\u8005\u3002\u540c\u65f6\uff0ceverPay \u4e5f\u4f1a\u63d0\u4f9b\u4ea4\u6613\u6d4f\u89c8\u5668\u4fbf\u4e8e\u7528\u6237\u67e5\u770b\u548c\u68c0\u67e5\u4ea4\u6613\u3002"),(0,i.kt)("p",null,"\u534f\u8bae\u7684\u5171\u8bc6\u901a\u8fc7\u5b58\u50a8\u578b\u533a\u5757\u94fe\u4fdd\u969c\uff0c\u7531\u68c0\u6d4b\u7a0b\u5e8f\u8fdb\u884c\u6821\u9a8c\u68c0\u67e5\u3002"),(0,i.kt)("h3",{id:"\u4ea4\u4e92\u4f53\u9a8c"},"\u4ea4\u4e92\u4f53\u9a8c"),(0,i.kt)("h4",{id:"\u6613\u7528\u6027"},"\u6613\u7528\u6027"),(0,i.kt)("p",null,"\u4f7f\u7528\u4e86\u534f\u8c03\u8005\u91c7\u96c6\u4ea4\u6613\uff0c\u4ea4\u6613\u4f1a\u6309\u7167\u56fa\u6709\u7684\u987a\u5e8f\u6279\u91cf\uff08rollup\uff09\u4e0a\u94fe\u3002\u6279\u91cf\u4e0a\u94fe\u5c31\u53ef\u4ee5\u5c06\u7528\u6237\u4ea4\u6613\u5728\u94fe\u4e0b\u5b9e\u65f6\u5904\u7406\uff0c\u534f\u8c03\u8005\u7684\u8d26\u672c\u72b6\u6001\u662f\u5b9e\u65f6\u66f4\u65b0\u7684\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u7528\u6237\u5728\u4f7f\u7528\u5e94\u7528\u65f6\uff0c\u53ef\u4ee5\u5f97\u5230\u5b9e\u65f6\u7684\u8f6c\u8d26\u4f53\u9a8c\uff0c\u4e5f\u652f\u6301\u7528\u6237\u8fdb\u884c\u8fde\u7eed\u7684\u591a\u7b14\u4ea4\u6613\u3002\u4f53\u9a8c\u975e\u5e38\u7684\u63a5\u8fd1\u4e92\u8054\u7f51\u5e94\u7528\uff0c\u5feb\u6377\u800c\u4fbf\u5229\u3002"),(0,i.kt)("p",null,"\u6781\u7aef\u60c5\u51b5\u4e0b\u7528\u6237\u5bf9\u534f\u8c03\u8005\u5b58\u6709\u7591\u60d1\uff0c\u53ef\u4ee5\u67e5\u770b\u4ea4\u6613\u6d4f\u89c8\u5668\u7b49\u5f85\u4ea4\u6613\u6253\u5305\uff0c\u518d\u786e\u8ba4\u8be5\u7b14\u4ea4\u6613\u3002\u4e00\u822c\u800c\u8a00\uff0c\u534f\u8c03\u8005\u4f1a\u786e\u4fdd\u6240\u6709\u4ea4\u6613\u6309\u7167\u56fa\u5b9a\u987a\u5e8f\u6253\u5305\u4e0a\u94fe\u3002"),(0,i.kt)("h3",{id:"\u7075\u6d3b\u7684\u7b7e\u540d\u7b97\u6cd5"},"\u7075\u6d3b\u7684\u7b7e\u540d\u7b97\u6cd5"),(0,i.kt)("p",null,"\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u4ec5\u5728\u94fe\u4e0b\u8fdb\u884c\u8ba1\u7b97\uff0c\u5f00\u53d1\u4e0a\u975e\u5e38\u7684\u7075\u6d3b\uff0c\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684\u7b7e\u540d\u7b97\u6cd5\u3002\u66f4\u8fdb\u4e00\u6b65\uff0ceverPay \u53ef\u4ee5\u96c6\u6210\u66f4\u53cb\u597d\u7684\u4e92\u8054\u7f51\u7b7e\u540d\u7b97\u6cd5\u3002\u6bd4\u5982 Webauthn\uff08R1\uff09\uff0c\u5728\u4fdd\u8bc1\u7528\u6237\u5b89\u5168\u7684\u540c\u65f6\u5c06\u5bc6\u94a5\u7ba1\u7406\uff08\u52a9\u8bb0\u8bcd\uff09\u5b8c\u5168\u53bb\u6389\uff0c\u6b64\u65f6\u7528\u6237\u53ea\u9700\u8981\u4f7f\u7528\u786c\u4ef6\u8bbe\u5907\uff08\u624b\u673a\u3001\u7535\u8111\uff09\u5373\u53ef\u5b8c\u6210\u5b89\u5168\u53ef\u9760\u7684\u4ea4\u6613\u7b7e\u540d\u3002"),(0,i.kt)("h3",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,i.kt)("p",null,"everVision \u7684\u76ee\u6807\u662f\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u964d\u4f4e\u5f00\u53d1\u95e8\u69db\uff0c\u4e3a\u6240\u6709\u4eba\u63d0\u4f9b\u53bb\u4e2d\u5fc3\u5316\u53ef\u4fe1\u7684\u91d1\u878d\u5e94\u7528\u3002everPay \u662f\u4e00\u4e2a\u533a\u5757\u94fe\u6613\u7528\u6027\u7684\u89e3\u51b3\u65b9\u6848\u548c\u5e94\u7528\u534f\u8bae\uff0c\u5728\u4fdd\u969c\u53ef\u4fe1\u7684\u524d\u63d0\u4e0b\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u63a5\u8fd1\u4e92\u8054\u7f51\u7684\u652f\u4ed8\u7ed3\u7b97\u4f53\u9a8c\u3002"),(0,i.kt)("p",null,"\u4e86\u89e3\u66f4\u591a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u5b58\u50a8\u8ba1\u7b97\u8303\u5f0f\u8bf7\u53c2\u8003: ",(0,i.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/EL-OXOgeL3Q-rzXbHV8IhQ"},"https://mp.weixin.qq.com/s/EL-OXOgeL3Q-rzXbHV8IhQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/everFinance/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"},"https://medium.com/everFinance/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"))),(0,i.kt)("p",null,"everVision website: ",(0,i.kt)("a",{parentName:"p",href:"https://ever.vision"},"https://ever.vision")))}c.isMDXComponent=!0},8102:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Mechanism-banner2-43d98701274643762e175a62461947e2.webp"},5066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mechanism-banner-fbf69b808c5c306821b99140d07a1069.webp"}}]);