"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6341],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var r=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return t?r.createElement(v,l(l({ref:a},u),{},{components:t})):r.createElement(v,l({ref:a},u))}));function v(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9095:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const n={sidebar_position:3},l="Catalogue",o={unversionedId:"guide/docs-catalogue",id:"guide/docs-catalogue",title:"Catalogue",description:"System Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/docs-catalogue.md",sourceDirName:"guide",slug:"/guide/docs-catalogue",permalink:"/en/docs/guide/docs-catalogue",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/docs-catalogue.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Basic information",permalink:"/en/docs/guide/basic-info"},next:{title:"Introduction",permalink:"/en/docs/guide/dive/overview"}},p={},s=[{value:"System Overview",id:"system-overview",level:2},{value:"Server API",id:"server-api",level:2},{value:"Basic Query API",id:"basic-query-api",level:4},{value:"Operation API",id:"operation-api",level:4},{value:"SDK",id:"sdk",level:2},{value:"Basic Query API",id:"basic-query-api-1",level:4},{value:"Tools API",id:"tools-api",level:4},{value:"Operation API",id:"operation-api-1",level:4},{value:"Refrence",id:"refrence",level:2}],u={toc:s},c="wrapper";function d(e){let{components:a,...t}=e;return(0,i.kt)(c,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"catalogue"},"Catalogue"),(0,i.kt)("h2",{id:"system-overview"},"System Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/account-model"},"Account Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/transaction"},"Transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/deposit"},"Deposit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/transfer"},"Transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/withdraw"},"Withdraw")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/dive/bundle"},"Bundle"))),(0,i.kt)("h2",{id:"server-api"},(0,i.kt)("a",{parentName:"h2",href:"/en/docs/guide/server-api/intro"},"Server API")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"everPay backend service, which provides access to everPay basic information and other functions through everPay Server.")),(0,i.kt)("h4",{id:"basic-query-api"},"Basic Query API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/info"},"/info")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/balances"},"/balances/{account}")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/balance"},"/balance/{tag}/{account}")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/fees"},"/fees")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/fee"},"/fee/{tag}")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/txs"},"/txs?page&tokenTag&action")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/txsByAccount"},"/txsByAccount/{account}?page&tokenTag&action")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/txByHash"},"/txsByHash/{everHash}")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/basic-api/mintedTxByChainTxHash"},"/mintedTxByChainTxHash/{chainTxHash}"))),(0,i.kt)("h4",{id:"operation-api"},"Operation API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"POST ",(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/server-api/operation-api/tx"},"/tx"))),(0,i.kt)("h2",{id:"sdk"},(0,i.kt)("a",{parentName:"h2",href:"/en/docs/guide/SDK/everpay-js"},"SDK")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u5f00\u53d1\u8005\u4f7f\u7528 nodeJS\u3001web \u7aef\u6765\u8fdb\u884c everPay \u96c6\u6210\uff0c\u6765\u8fdb\u884c everPay \u7684\u652f\u4ed8\u7b49\u3002")),(0,i.kt)("h4",{id:"basic-query-api-1"},"Basic Query API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/info"},"/info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/balances"},"/balances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/balance"},"/balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/fees"},"/fees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/fee"},"/fee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/txs"},"/txs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/txsByAccount"},"/txsByAccount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/txByHash"},"/txsByHash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/basic-api/mintedTxByChainTxHash"},"/mintedTxByChainTxHash"))),(0,i.kt)("h4",{id:"tools-api"},"Tools API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/tool-api/getEverpayTxWithoutSig"},"/getEverpayTxWithoutSig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/tool-api/getEverpayTxMessage"},"/getEverpayTxMessage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/tool-api/getBundleData"},"/getBundleData"))),(0,i.kt)("h4",{id:"operation-api-1"},"Operation API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/deposit"},"/deposit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/transfer"},"/transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/withdraw"},"/withdraw")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/signBundleData"},"signBundleData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/bundle"},"bundle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/SDK/everpay-js/operation-api/sendEverpayTx"},"sendEverpayTx"))),(0,i.kt)("h2",{id:"refrence"},"Refrence"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/refrence/storage-based-computation-paradigm"},"Storage Based Computation Paradigm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/docs/guide/refrence/consensus"},"Consensus change"))))}d.isMDXComponent=!0}}]);