"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},l="\u4ea4\u6613",s={unversionedId:"guide/dive/transaction",id:"guide/dive/transaction",title:"\u4ea4\u6613",description:"everPay \u6709\u81ea\u5df1\u72ec\u7acb\u7684\u4ea4\u6613\u683c\u5f0f\uff0c\u6240\u6709\u7684 everPay \u4ea4\u6613\u90fd\u9075\u5faa\u76f8\u540c\u7684\u683c\u5f0f\uff0c\u7b7e\u7f72\u76f8\u540c\u7684\u7b7e\u540d\u89c4\u8303\uff0c\u5b58\u50a8\u5728 arweave \u533a\u5757\u94fe\u4e0a\uff0c\u4f9b\u6240\u6709\u4eba\u9a8c\u8bc1\u3002",source:"@site/docs/guide/dive/transaction.md",sourceDirName:"guide/dive",slug:"/guide/dive/transaction",permalink:"/docs/guide/dive/transaction",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/dive/transaction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"\u8d26\u6237\u6a21\u578b",permalink:"/docs/guide/dive/account-model"},next:{title:"\u5145\u503c",permalink:"/docs/guide/dive/deposit"}},o={},p=[{value:"Schema",id:"schema",level:2},{value:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b",id:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b",level:3},{value:"Arweave \u8d26\u6237\u793a\u4f8b",id:"arweave-\u8d26\u6237\u793a\u4f8b",level:3},{value:"messageData",id:"messagedata",level:2},{value:"\u751f\u6210\u89c4\u5219",id:"\u751f\u6210\u89c4\u5219",level:3},{value:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b",id:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b-1",level:3},{value:"Arweave \u8d26\u6237\u793a\u4f8b",id:"arweave-\u8d26\u6237\u793a\u4f8b-1",level:3},{value:"everHash",id:"everhash",level:2},{value:"\u751f\u6210\u89c4\u5219",id:"\u751f\u6210\u89c4\u5219-1",level:3},{value:"signature",id:"signature",level:2},{value:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b",id:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b",level:3},{value:"\u901a\u8fc7 ethers.js \u751f\u6210\u7b7e\u540d",id:"\u901a\u8fc7-ethersjs-\u751f\u6210\u7b7e\u540d",level:4},{value:"Arweave \u8d26\u6237\u6a21\u578b",id:"arweave-\u8d26\u6237\u6a21\u578b",level:3},{value:"\u901a\u8fc7 arweave.js \u751f\u6210\u7b7e\u540d",id:"\u901a\u8fc7-arweavejs-\u751f\u6210\u7b7e\u540d",level:4},{value:"signature \u6821\u9a8c",id:"signature-\u6821\u9a8c",level:2},{value:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b",id:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b-1",level:3},{value:"Arweave \u8d26\u6237\u6a21\u578b",id:"arweave-\u8d26\u6237\u6a21\u578b-1",level:3},{value:"\u63d0\u4ea4\u4ea4\u6613",id:"\u63d0\u4ea4\u4ea4\u6613",level:2},{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"nonce",id:"nonce",level:3},{value:"\u4ea4\u6613\u8bb0\u5f55",id:"\u4ea4\u6613\u8bb0\u5f55",level:2},{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5-1",level:3},{value:"\u67e5\u8be2\u63a5\u53e3",id:"\u67e5\u8be2\u63a5\u53e3",level:3}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),(0,r.kt)("p",null,"everPay \u6709\u81ea\u5df1\u72ec\u7acb\u7684\u4ea4\u6613\u683c\u5f0f\uff0c\u6240\u6709\u7684 everPay \u4ea4\u6613\u90fd\u9075\u5faa\u76f8\u540c\u7684\u683c\u5f0f\uff0c\u7b7e\u7f72\u76f8\u540c\u7684\u7b7e\u540d\u89c4\u8303\uff0c\u5b58\u50a8\u5728 arweave \u533a\u5757\u94fe\u4e0a\uff0c\u4f9b\u6240\u6709\u4eba\u9a8c\u8bc1\u3002"),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u5e01\u540d\u79f0\uff0cAR,ETH,USDT,USDC \u7b49\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\u4ea4\u6613\u7684\u5f53\u524d everPay \u8d26\u6237 ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u8f6c\u8d26\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"to")," \u4e3a\u6536\u6b3e\u65b9 everPay \u8d26\u6237 ID\u3002"),(0,r.kt)("li",null,"\u63d0\u73b0\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"to")," \u4e3a\u8981\u63d0\u73b0\u81f3\u7684\u533a\u5757\u94fe\u94b1\u5305\u5730\u5740\u3002"),(0,r.kt)("li",null,"\u6279\u91cf\u8f6c\u8d26\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"to")," \u4ee3\u8868\u5916\u90e8\u8f6c\u8d26\u6536\u6b3e\u7684 everPay \u8d26\u6237 ID\uff0c\u53ef\u4e3a\u4efb\u610f everPay \u8d26\u6237 ID\u3002\uff08\u5305\u62ec\u7b7e\u540d\u4ea4\u6613\u7684\u5f53\u524d everPay \u8d26\u6237 ID\uff09")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b\u4e3a uint\uff0c\u8bbe\u7f6e\u65f6\u9700\u8981\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals")," \u5904\u7406\uff0c\u4f8b\u5982 0.1USDT\uff0c\u6b64\u5904\u7ecf\u8fc7 USDT \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals: 6")," \u5904\u7406\u540e\uff0c\u4e3a 100000\u3002 ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u8f6c\u8d26\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," \u4e3a\u8f6c\u8d26\u91d1\u989d\u3002"),(0,r.kt)("li",null,"\u63d0\u73b0\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," \u4e3a\u63d0\u73b0\u91d1\u989d\u3002"),(0,r.kt)("li",null,"\u6279\u91cf\u8f6c\u8d26\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"amount")," \u4e3a\u5916\u90e8\u8f6c\u8d26\u91d1\u989d\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39\uff0c\u7c7b\u578b\u4e3a uint\u3002\u9700\u8981\u8fdb\u884c decimals \u5904\u7406\uff0c\u4f8b\u5982 0.1USDT\uff0c\u6b64\u5904\u7ecf\u8fc7 USDT \u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals: 6")," \u5904\u7406\u540e\uff0c\u4e3a 100000\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39\u6536\u6b3e everPay \u8d26\u6237 ID\uff0c\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"info API"))," \u63a5\u53e3\u83b7\u53d6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"unix milliseconds\uff0cunix \u6beb\u79d2\u65f6\u95f4\u6233\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"info API"))," \u63a5\u53e3\u83b7\u53d6\uff0c\u5fc5\u987b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94\u7684 token ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," \u5b57\u6bb5",(0,r.kt)("strong",{parentName:"td"},"\u4e00\u81f4"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," \u5fc5\u987b\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"info API"))," \u63a5\u53e3\u83b7\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94\u7684 token ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,r.kt)("strong",{parentName:"td"},"\u4e00\u81f4"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chainID")," \u5fc5\u987b\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"info API"))," \u63a5\u53e3\u83b7\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"chainID")," ",(0,r.kt)("strong",{parentName:"td"},"\u4e00\u81f4"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9644\u52a0\u4fe1\u606f\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u5b9a\u4e49JSON \u6570\u636e\uff0c\u7ecf\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON.stringify()")," \u5904\u7406\u540e\u4f20\u9012\u3002\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," \u53ef\u81ea\u5b9a\u4e49\u5b9e\u73b0\u4e00\u4e9b\u590d\u6742\u529f\u80fd\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"td",href:"./bundle"},"\u6279\u91cf\u8f6c\u8d26"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"td"},"'v1'"),"\u3002")))),(0,r.kt)("h3",{id:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b"},"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626079771946',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n")),(0,r.kt)("h3",{id:"arweave-\u8d26\u6237\u793a\u4f8b"},"Arweave \u8d26\u6237\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1629276767583',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n")),(0,r.kt)("h2",{id:"messagedata"},"messageData"),(0,r.kt)("p",null,"\u7531 Schema \u6309\u7167\u7edf\u4e00\u683c\u5f0f\u751f\u6210\uff0c\u7528\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u592a\u574a ",(0,r.kt)("inlineCode",{parentName:"li"},"personalSign")," \u7b7e\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"everHash"),"\u3002")),(0,r.kt)("h3",{id:"\u751f\u6210\u89c4\u5219"},"\u751f\u6210\u89c4\u5219"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const getEverpayTxMessageData = (everpayTxWithoutSig: EverpayTxWithoutSig): string => {\n  const keys = [\n    'tokenSymbol',\n    'action',\n    'from',\n    'to',\n    'amount',\n    'fee',\n    'feeRecipient',\n    'nonce',\n    'tokenID',\n    'chainType',\n    'chainID',\n    'data',\n    'version'\n  ] as const\n  return keys.map(key => `${key}:${everpayTxWithoutSig[key]}`).join('\\n')\n}\n")),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"EverpayTxWithoutSig")," \u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/SDK/everpay-js/types#everpaytxwithoutsig"},"everpay-js types#EverpayTxWithoutSig")),(0,r.kt)("h3",{id:"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b-1"},"\u4ee5\u592a\u574a\u8d26\u6237\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const messageData = `tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626079771946\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{"hello":"world","this":"is everpay"}\nversion:v1`\n')),(0,r.kt)("h3",{id:"arweave-\u8d26\u6237\u793a\u4f8b-1"},"Arweave \u8d26\u6237\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const messageData = `tokenSymbol:ar\naction:transfer\nfrom:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\nto:0x26361130d5d6E798E9319114643AF8c868412859\namount:100\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1629276767583\ntokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be\nchainType:arweave,ethereum\nchainID:0,42\ndata:{"hello":"world","this":"is everpay"}\nversion:v1`\n')),(0,r.kt)("h2",{id:"everhash"},"everHash"),(0,r.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\u90fd\u6709\u552f\u4e00\u6807\u8bc6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash"),"\u3002\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"messageData")," \u4f7f\u7528\u4ee5\u592a\u574a ",(0,r.kt)("inlineCode",{parentName:"p"},"hashPersonalMessage")," \u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"personalMessageHash"),"\uff0c\u5373\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash"),"\u3002"),(0,r.kt)("h3",{id:"\u751f\u6210\u89c4\u5219-1"},"\u751f\u6210\u89c4\u5219"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168\nconst hashPersonalMessage = (message: Buffer): Buffer => {\n  const prefix = Buffer.from(\n    `\\u0019Ethereum Signed Message:\\n${message.length.toString()}`,\n    'utf-8'\n  )\n  return keccak256(Buffer.concat([prefix, message]))\n}\nconst getPersonalMessageHash = (messageData: string): string => {\n  const personalMsgBuf = hashPersonalMessage(Buffer.from(messageData))\n  const personalMessageHash = `0x${personalMsgBuf.toString('hex')}`\n  return personalMessageHash\n}\n")),(0,r.kt)("h2",{id:"signature"},"signature"),(0,r.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\uff0c\u90fd\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u53d1\u9001\u8005\u8d26\u6237\u7684\u94b1\u5305")," \u8fdb\u884c\u7b7e\u540d\uff0ceverPay \u670d\u52a1\u5668\u4f1a\u6821\u9a8c\u6240\u6709\u7b7e\u540d\u7684\u6709\u6548\u6027\u3002"),(0,r.kt)("h3",{id:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b"},"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b"),(0,r.kt)("p",null,"\u901a\u8fc7 ethereum ",(0,r.kt)("inlineCode",{parentName:"p"},"personalSign")," \u7b7e\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"messageData")," \u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")),(0,r.kt)("h4",{id:"\u901a\u8fc7-ethersjs-\u751f\u6210\u7b7e\u540d"},"\u901a\u8fc7 ethers.js \u751f\u6210\u7b7e\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626079771946',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\n// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)\nconst messageData = `tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626079771946\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\"}\nversion:v1`\n\n// personalSign\nconst signMessageAsync = async (ethConnectedSigner: Signer, message: string): Promise<string> => {\n  return await ethConnectedSigner.signMessage(message)\n}\nconst signature = await signMessageAsync(ethConnectedSigner, messageData)\n")),(0,r.kt)("p",null,"\u4f2a\u4ee3\u7801\u53c2\u8003\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts"},"everpay-js src/lib/sign.ts")),(0,r.kt)("h3",{id:"arweave-\u8d26\u6237\u6a21\u578b"},"Arweave \u8d26\u6237\u6a21\u578b"),(0,r.kt)("p",null,"\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"messageData")," \u4f7f\u7528\u4ee5\u592a\u574a ",(0,r.kt)("inlineCode",{parentName:"p"},"hashPersonalMessage")," \u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"personalMessageHash"),"\u3002\u901a\u8fc7 arweave RSA-PSS sha256 \u7b7e\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"personalMessageHash")," \u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"\uff08\u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),"\uff09\uff0c\u5f97\u5230\u7684\u7b7e\u540d\u7ed3\u679c\uff0c\u518d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Arweave.utils.bufferTob64Url"),"\uff08\u4e0e\u5176\u4ed6 base64 \u8f6c\u6362\u51fd\u6570\u6709\u5dee\u5f02\uff09 \u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," \u8f6c\u6362\uff0c\u62fc\u63a5\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},",{{arOwner}}")," \u540e\uff0c\u5f97\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),"\u3002"),(0,r.kt)("h4",{id:"\u901a\u8fc7-arweavejs-\u751f\u6210\u7b7e\u540d"},"\u901a\u8fc7 arweave.js \u751f\u6210\u7b7e\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// RSA-PSS sha256\nconst signMessageAsync = async (arJWK: ArJWK, address: string, personalMessageHash: string): Promise<string> => {\n  const arweave = Arweave.init(options)\n  const personalMessageHashBuffer: Buffer = Buffer.from(personalMessageHash.slice(2), 'hex')\n  let arOwner = ''\n  let signatureB64url = ''\n  // web\n  if (arJWK === 'use_wallet') {\n    try {\n      await checkArPermissions('ACCESS_PUBLIC_KEY')\n    } catch {\n      throw new Error(ERRORS.ACCESS_PUBLIC_KEY_PERMISSION_NEEDED)\n    }\n    try {\n      arOwner = await (window.arweaveWallet as any).getActivePublicKey()\n    } catch {\n      throw new Error(ERRORS.ACCESS_PUBLIC_KEY_FAILED)\n    }\n\n    try {\n      await checkArPermissions('SIGNATURE')\n    } catch {\n      throw new Error(ERRORS.SIGNATURE_PERMISSION_NEEDED)\n    }\n\n    const algorithm = {\n      name: 'RSA-PSS',\n      saltLength: 32\n    }\n\n    try {\n      const signature = await (window.arweaveWallet as any).signature(\n        personalMessageHashBuffer,\n        algorithm\n      )\n      const buf = new Uint8Array(Object.values(signature))\n      signatureB64url = Arweave.utils.bufferTob64Url(buf)\n    } catch {\n      throw new Error(ERRORS.SIGNATURE_FAILED)\n    }\n\n  // node\n  } else {\n    const buf = await arweave.crypto.sign(arJWK, personalMessageHashBuffer, {\n      saltLength: 32\n    })\n    arOwner = arJWK.n\n    signatureB64url = Arweave.utils.bufferTob64Url(buf)\n  }\n\n  return `${signatureB64url},${arOwner}`\n}\n\nconst everpayTxWithoutSig = {\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1629276767583',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\n// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)\nconst messageData = `tokenSymbol:ar\naction:transfer\nfrom:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\nto:0x26361130d5d6E798E9319114643AF8c868412859\namount:100\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1629276767583\ntokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be\nchainType:arweave,ethereum\nchainID:0,42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\"}\nversion:v1`\n\n// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168\nconst hashPersonalMessage = function (message: Buffer): Buffer {\n  const prefix = Buffer.from(\n    `\\u0019Ethereum Signed Message:\\n${message.length.toString()}`,\n    'utf-8'\n  )\n  return keccak256(Buffer.concat([prefix, message]))\n}\n\nconst getPersonalMessageHash = (messageData: string): string => {\n  const personalMsgBuf = hashPersonalMessage(Buffer.from(messageData))\n  const personalMessageHash = `0x${personalMsgBuf.toString('hex')}`\n  return personalMessageHash\n}\nconst personalMessageHash = getPersonalMessageHash(messageData)\nconst signature = await signMessageAsync(config.arJWK as ArJWK, personalMessageHash)\n")),(0,r.kt)("p",null,"\u4f2a\u4ee3\u7801\u53c2\u8003\u6765\u6e90\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts"},"everpay-js src/lib/sign.ts")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e \u4ee5\u592a\u574a personalSign \u7b7e\u540d\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"messageData")," string\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u5373\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"signature")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e arweave RSA-PSS sha256 \u7b7e\u540d\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"personalMessageHash")," Buffer\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u9700\u8981\u8fdb\u4e00\u6b65\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Arweave.utils.bufferTob64Url")," \u8f6c\u6362\u5f97\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"base64 string"),"\uff0c\u5e76\u62fc\u63a5\u4e0a ",(0,r.kt)("inlineCode",{parentName:"li"},",{{arOwner}}")," \u624d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"signature"),"\u3002"))),(0,r.kt)("h2",{id:"signature-\u6821\u9a8c"},"signature \u6821\u9a8c"),(0,r.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\uff0c\u901a\u8fc7 \u53d1\u9001\u8005\u8d26\u6237\u7684\u94b1\u5305\u8fdb\u884c\u7b7e\u540d\u540e\uff0c\u5c06\u7b7e\u540d everPay \u4ea4\u6613\u4e00\u8d77\u63d0\u4ea4 everPay \u670d\u52a1\u5668\uff0ceverPay \u670d\u52a1\u5668\u4f1a\u6821\u9a8c\u6240\u6709\u7b7e\u540d\uff0c\u6765\u786e\u4fdd\u4ea4\u6613\u7684\u6709\u6548\u6027\u3002"),(0,r.kt)("h3",{id:"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b-1"},"\u4ee5\u592a\u574a\u8d26\u6237\u6a21\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signMessageAsync(ethConnectedSigner, messageData)\nconst verified = ethers.utils.verifyMessage(messageData, signature).toLowerCase() === everpayTxWithoutSig.from.toLowerCase()\n")),(0,r.kt)("h3",{id:"arweave-\u8d26\u6237\u6a21\u578b-1"},"Arweave \u8d26\u6237\u6a21\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signMessageAsync(config.arJWK as ArJWK, everHash)\n// arOwner \u4e3a arweave \u94b1\u5305 publicKey\nconst [sigB64url, arOwner] = signature.split(',')\nconst verified = arweave.crypto.verify(\n  arOwner,\n  Buffer.from(everHash.slice(2)),\n  Arweave.utils.b64UrlToBuffer(sigB64url)\n)\n")),(0,r.kt)("h2",{id:"\u63d0\u4ea4\u4ea4\u6613"},"\u63d0\u4ea4\u4ea4\u6613"),(0,r.kt)("p",null,"\u5c06 everPay \u4ea4\u6613\u901a\u8fc7 POST \u8bf7\u6c42\u63d0\u4ea4 everPay \u540e\u7aef\u670d\u52a1\u5668 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/server-api/operation-api/tx"},(0,r.kt)("inlineCode",{parentName:"a"},"tx"))," \u63a5\u53e3\u3002"),(0,r.kt)("h3",{id:"\u5b57\u6bb5"},"\u5b57\u6bb5"),(0,r.kt)("p",null,"\u9664 ",(0,r.kt)("a",{parentName:"p",href:"#schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," \u5b9a\u4e49\u5b57\u6bb5\u5916\uff0c\u8865\u5145\u7b7e\u540d\u5f97\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," \u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"sig")," \u5b57\u6bb5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8865\u5145\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sig"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4e0d\u540c\u8d26\u6237\u6a21\u578b\u7b7e\u540d\uff0c\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"signature"),"\u3002")))),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1629276767583',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1',\n  sig: 'Lg8Xgk_LZn_H-HVOz042wbhv5RVQjc7Z0iVV4_UbWWgoqHnboB6PQujtCtu1_QW0cXPqakm9sLi7fJlhK7Hm7UMFQiwXbVB_bClr73GKAcV0tpWye9BUsKw9SfOnFAHCCufF4C1PPt4xRrJp5UeG-smonQ9k4t0GmoXnXoSfmFxsEvaId5SeNaOZa1JYMzReo8-P4m5EdrTKLNgWwo28OOi4GbpXIzRxorJp-dwhsNhQHu4vzOq4rflGRwQKb9bj4S92YqEp2wXRRU7ebEiBJlGjQrf0HgTr7gZO_q3gI5FQgsL_UbOo4sp5hL69IUOfRxmr_RTiLZZzQRu-0dJBsWOSWYC5232fRf3MwogIELdDUl3dVCz5PDnXp8AOPKBQCiblu74oTSyKhsVMvwfER125dXyKtxJLlxTkDhEOPzTJdufy-Czs1pE_ZPKj4z44P3W7UdGiAt9rXYQb6JjMNOpG1_S7RMa5OKoCV4MbuK2CGFCNBE0h4zxeXZfXLOMSImrfFZ4nZAHkTbpKgpH1hPDEMGsEEgwvDl6_AyjrMOebAAyJGj6keyy9tf7lQBKKaj2-bGG6PIVC-l7wCXJizFt-3Cb0aC6ZXaCHGdhHuI-7Ime4M5iZESiBhkIhtOV3ADjqks174o0J0zKxE0NVl14tuu5tY-UfJ6kAkqbujLs,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'\n}\n")),(0,r.kt)("h3",{id:"nonce"},"nonce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nonce")," \u4e3a\u7528\u6237\u5728\u5ba2\u6237\u7aef\u751f\u6210\uff0ceverPay \u670d\u52a1\u5668\u53ef\u63a5\u6536\u4e0e\u670d\u52a1\u5668\u65f6\u95f4\u4e0a\u4e0b 100s \u7684\u8bef\u5dee\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u6bcf\u6b21\u63d0\u4ea4 everPay \u7684\u4ea4\u6613\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"nonce")," \u5fc5\u987b\u6bd4\u8be5\u7528\u6237\u4e0a\u4e00\u7b14 ",(0,r.kt)("inlineCode",{parentName:"li"},"nonce")," \u6570\u503c\u5927\u3002")),(0,r.kt)("h2",{id:"\u4ea4\u6613\u8bb0\u5f55"},"\u4ea4\u6613\u8bb0\u5f55"),(0,r.kt)("p",null,"\u63d0\u4ea4\u81f3 everPay \u670d\u52a1\u5668\uff0c\u7ecf\u8fc7\u7b7e\u540d\u6821\u9a8c\u901a\u8fc7\u7684 everPay \u4ea4\u6613\uff0c\u53ef\u4ee5\u901a\u8fc7 everPay \u63a5\u53e3\u83b7\u53d6\u4ea4\u6613\u8bb0\u5f55\u3002"),(0,r.kt)("p",null,"everPay \u5728 ",(0,r.kt)("a",{parentName:"p",href:"#schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," \u5b9a\u4e49\u5b57\u6bb5\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"sig")," \u7b7e\u540d\u5b57\u6bb5\u5916\uff0c\u6dfb\u52a0\u4e86\u90e8\u5206\u5b57\u6bb5\uff0c\u7528\u4e8e everPay \u4e1a\u52a1\u3002"),(0,r.kt)("h3",{id:"\u5b57\u6bb5-1"},"\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8865\u5145\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"everHash"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u7b14 everPay \u4ea4\u6613\u90fd\u5bf9\u5e94\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"everHash"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"everHash")," \u751f\u6210\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"#everhash"},"everHash"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5f53\u8be5\u7b14 everPay \u4ea4\u6613\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u540e\uff0c\u6b64 ",(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," \u4ee3\u8868 everPay \u4ea4\u6613\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u7684 unix milliseconds\uff0cunix \u6beb\u79d2\u65f6\u95f4\u6233\u3002"),(0,r.kt)("li",null,"\u5982\u8be5\u7b14 everPay \u4ea4\u6613\u672a\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"confirmed")," \u4ee3\u8868\u8be5 everPay \u4ea4\u6613\u88ab everPay \u540e\u7aef\u7b7e\u540d\u9a8c\u8bc1\u901a\u8fc7\u540e\uff0c\u786e\u8ba4\u63a5\u6536\uff0c\u4f46\u8fd8\u672a\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u4e0a\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"packaged")," \u4ee3\u8868\u8be5 everPay \u4ea4\u6613\u5df2\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u4e0a\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internalStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u8f6c\u8d26\u589e\u52a0\u7684\u5b57\u6bb5\uff0c\u4ec5\u5728\u6279\u91cf\u8f6c\u8d26\u7684\u5185\u90e8\u4ea4\u6613\u5931\u8d25\u65f6\uff0c\u8fd4\u56de\u5177\u4f53\u9519\u8bef\u4fe1\u606f\u3002\u6279\u91cf\u8f6c\u8d26\u5185\u90e8\u4ea4\u6613\u6210\u529f\u3001\u8f6c\u8d26\u3001\u63d0\u73b0\u3001\u5145\u503c\u65f6\uff0c\u503c\u90fd\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"success"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5f53\u8be5\u7b14 everPay \u4ea4\u6613\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u540e\uff0c\u6b64 ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," \u5bf9\u5e94\u8be5\u7b14\u8bb0\u5f55\u5728 Arweave \u4e0a\u7684\u4ea4\u6613 hash\u3002"),(0,r.kt)("li",null,"\u5982\u8be5\u7b14 everPay \u4ea4\u6613\u672a\u88ab\u8bb0\u5f55\u5230 Arweave \u533a\u5757\u94fe\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"id")," \u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetChainTxHash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u5145\u503c\u3001\u63d0\u73b0\u65f6\uff0c\u5bf9\u5e94\u7684\u533a\u5757\u94fe ",(0,r.kt)("inlineCode",{parentName:"td"},"txHash"),"\u3002"),(0,r.kt)("li",null,"\u5982\u63d0\u73b0\u672a\u5b8c\u6210\u6216\u662f everPay \u8f6c\u8d26\u4ea4\u6613\uff0c\u6b64 ",(0,r.kt)("inlineCode",{parentName:"td"},"targetChainTxHash")," \u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")))))),(0,r.kt)("h3",{id:"\u67e5\u8be2\u63a5\u53e3"},"\u67e5\u8be2\u63a5\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/server-api/basic-api/txs"},"txs")," \u67e5\u8be2\u6240\u6709 everPay \u4ea4\u6613\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guide/server-api/basic-api/txsByAccount"},"txsByAccount")," \u67e5\u8be2\u5177\u4f53 everPay \u8d26\u6237\u7684\u4ea4\u6613\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../server-api/basic-api/txByHash"},"txByHash")," \u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"li"},"everHash")," \u67e5\u8be2 everPay \u4ea4\u6613\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../server-api/basic-api/mintedTxByChainTxHash"},"mintedTxByChainTxHash")," \u6839\u636e\u5145\u503c\u7684\u533a\u5757\u94fe\u8bb0\u5f55ID \uff08\u5982\u4ee5\u592a\u574a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"txHash"),"\uff09\uff0c\u67e5\u8be2\u5145\u503c\u7684 everPay \u4ea4\u6613\u8bb0\u5f55\u3002")))}m.isMDXComponent=!0}}]);