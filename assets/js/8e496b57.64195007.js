"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),s=a(6550),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=o??p;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),o(n))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const s={sidebar_position:9},o="txByHash",u={unversionedId:"guide/SDK/everpay-js/basic-api/txByHash",id:"guide/SDK/everpay-js/basic-api/txByHash",title:"txByHash",description:"\u529f\u80fd",source:"@site/docs/guide/SDK/everpay-js/basic-api/txByHash.md",sourceDirName:"guide/SDK/everpay-js/basic-api",slug:"/guide/SDK/everpay-js/basic-api/txByHash",permalink:"/docs/guide/SDK/everpay-js/basic-api/txByHash",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/basic-api/txByHash.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"guide",previous:{title:"txsByAccount",permalink:"/docs/guide/SDK/everpay-js/basic-api/txsByAccount"},next:{title:"mintedTxByChainTxHash",permalink:"/docs/guide/SDK/everpay-js/basic-api/mintedTxByChainTxHash"}},c={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u8fd4\u56de\u7c7b\u578b",id:"\u8fd4\u56de\u7c7b\u578b",level:3},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],d={toc:p},b="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txbyhash"},"txByHash"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\uff0c\u90fd\u4f1a\u751f\u6210\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u5b57\u7b26\u4e32\u3002\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u7684\u5177\u4f53\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4e00\u7b14  ",(0,r.kt)("inlineCode",{parentName:"p"},"\u666e\u901a\u63d0\u73b0")," \u4ea4\u6613\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u8be6\u60c5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u4e0d\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8be5\u7b14\u662f \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u662f\u5426\u5df2\u7ecf\u88ab\u8bb0\u5f55\u5230 arweave \u533a\u5757\u94fe\u4e0a\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u786e\u4fdd\u4e86\u8d26\u672c\u7684\u6b63\u786e\u6027"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"targetChainTxHash")," \u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8be5\u7b14\u662f \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u5728\u7528\u6237\u8981\u63d0\u73b0\u7684\u533a\u5757\u94fe\u4e0a\uff0c\u591a\u7b7e\u94b1\u5305/\u9501\u4ed3\u5730\u5740\uff0c\u5df2\u7ecf\u53d1\u9001\u4ea4\u6613\u5e76\u4e14\u5df2\u7ecf\u6253\u5305\u5b8c\u6210\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u7528\u6237\u63d0\u73b0\u7684\u8d44\u4ea7\u5df2\u5230\u8d26"),"\u3002")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"everpay.txByHash(everHash:string):EverpayTransaction\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"field",label:"\u53c2\u6570",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"everHash"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u4ea4\u6613\u5b8c\u6210\u540e\uff0c\u751f\u6210\u7684\u552f\u4e00\u5b57\u7b26\u3002"))))),(0,r.kt)(i.Z,{value:"type",label:"\u7c7b\u578b",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")))),(0,r.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7c7b\u578b"},"\u8fd4\u56de\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTransaction {\n  id: string // an arweave tx, which stored the everPay Tx information on the arweave blockchain\n  nonce: number\n  action: EverpayActionWithDeposit\n  from: string\n  to: string\n  amount: string\n  data: string\n  fee: string\n  feeRecipient: string\n  sig: string\n  everHash: string\n  status: EverpayTransactionStatus\n  timestamp: number\n  targetChainTxHash?: string\n  express: {\n    chainTxHash: string\n    withdrawFee: string\n    refundEverHash: string\n    err: string\n  }\n}\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"DOCS - \u7cfb\u7edf\u6982\u89c8 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55"),"\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const everHash = '0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5'\nconst everpay = new Everpay({ debug: true })\neverpay.txByHash(everHash).then(console.log)\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "rawId": 1309,\n    "id": "DkeiBMTQZtZSFNrK_3hgvxT9TZ1ekbD30wKGVhIBR3o",\n    "tokenSymbol": "ETH",\n    "action": "transfer",\n    "from": "0x66303B4D1e522272D613EE23dd79e528eAb2279D",\n    "to": "0xc16D22719619BC8bEBc1cCFe3Fb62b6848d1c740",\n    "amount": "54900000000000000",\n    "fee": "0",\n    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n    "nonce": 1677234578508,\n    "tokenID": "0x0000000000000000000000000000000000000000",\n    "chainType": "ethereum",\n    "chainID": "5",\n    "data": "{\\"targetChainHash\\":\\"0x25d0fc93b8f77265f3e305912bab924653c2c787cda34f3d65400db410ceb430\\"}",\n    "version": "v1",\n    "sig": "0x42e022bedd0e89dcca9cfdfb6157baffff133451251ed5bf3362e06cd9f00e105cc326e3c7ad6ca12928b811a16e315672f8dba3c32ac68536bf8cf6c8348c601b",\n    "everHash": "0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5",\n    "status": "packaged",\n    "internalStatus": "{\\"status\\":\\"success\\"}",\n    "timestamp": 1677235004000,\n    "targetChainTxHash": "",\n    "express": {\n        "chainTxHash": "",\n        "withdrawFee": "",\n        "refundEverHash": "",\n        "err": ""\n    }\n}\n')))}m.isMDXComponent=!0}}]);