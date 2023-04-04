"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),u=a(6550),o=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,s]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},8293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const u={sidebar_position:6},o="txs",s={unversionedId:"guide/SDK/everpay-js/basic-api/txs",id:"guide/SDK/everpay-js/basic-api/txs",title:"txs",description:"\u529f\u80fd",source:"@site/docs/guide/SDK/everpay-js/basic-api/txs.md",sourceDirName:"guide/SDK/everpay-js/basic-api",slug:"/guide/SDK/everpay-js/basic-api/txs",permalink:"/docs/guide/SDK/everpay-js/basic-api/txs",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/basic-api/txs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guide",previous:{title:"fee",permalink:"/docs/guide/SDK/everpay-js/basic-api/fee"},next:{title:"txsByAccount",permalink:"/docs/guide/SDK/everpay-js/basic-api/txsByAccount"}},c={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u6570\u636e",id:"\u8fd4\u56de\u6570\u636e",level:2},{value:"\u5b57\u6bb5\u63cf\u8ff0",id:"\u5b57\u6bb5\u63cf\u8ff0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txs"},"txs"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u83b7\u53d6 everPay \u4e0a\u6240\u6709\u4ea4\u6613\u8bb0\u5f55\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5206\u9875(10\u67611\u9875)")," \u5f62\u5f0f\u5c55\u793a\u3002"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"everpay.txs(txsParams:TxsParams):TxsResult\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"field",label:"\u53c2\u6570",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u4e3a 1 \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/SDK/everpay-js/basic-api/info#%E7%A4%BA%E4%BE%8B%E8%BF%94%E5%9B%9E"},(0,r.kt)("inlineCode",{parentName:"a"},"info"))," \u63a5\u53e3\u8fdb\u884c\u67e5\u770b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26\u3002")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withoutAction"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6392\u9664\u67d0\u79cd\u7c7b\u578b\u7684\u4ea4\u6613\u3002",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'mint'"),"\u4ee3\u8868\u5145\u503c\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'transfer'"),"\u4ee3\u8868\u8f6c\u8d26\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'burn'"),"\u4ee3\u8868\u63d0\u73b0\u3002"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"'bundle'"),"\u4ee3\u8868\u6279\u91cf\u8f6c\u8d26\u3002"))))))),(0,r.kt)(i.Z,{value:"type",label:"\u7c7b\u578b",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsParams {\n  page?: number\n  tag?: string\n  action?: EverpayActionWithDeposit\n  withoutAction?: EverpayActionWithDeposit\n}\n")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u6570\u636e"},"\u8fd4\u56de\u6570\u636e"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"field",label:"\u8fd4\u56de\u53c2\u6570",default:!0,mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u5b57\u6bb5\u63cf\u8ff0"},"\u5b57\u6bb5\u63cf\u8ff0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentPage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u6570\uff0c\u4e0e\u4f20\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"page")," \u53c2\u6570\u4e00\u81f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalPages"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u5171\u62e5\u6709\u591a\u5c11\u9875\u6570\u636e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6613\u8bb0\u5f55\u3002\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"\u7cfb\u7edf\u6982\u89c8 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55"),"\u3002"))))),(0,r.kt)(i.Z,{value:"type",label:"\u8fd4\u56de\u7c7b\u578b",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsResult {\n  accid?: string\n  currentPage: number\n  totalPages: number\n  txs: EverpayTransaction[]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guide/SDK/everpay-js/types#everpaytransaction"},"\u67e5\u770b EverpayTransaction \u7c7b\u578b")))),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.txs({ page: 1, action: 'transfer'}).then(console.log)\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  currentPage: 1,\n  totalPages: 35,\n  txs: [\n    {\n      rawId: 1309,\n      id: "DkeiBMTQZtZSFNrK_3hgvxT9TZ1ekbD30wKGVhIBR3o",\n      tokenSymbol: "ETH",\n      action: "transfer",\n      from: "0x66303B4D1e522272D613EE23dd79e528eAb2279D",\n      to: "0xc16D22719619BC8bEBc1cCFe3Fb62b6848d1c740",\n      amount: "54900000000000000",\n      fee: "0",\n      feeRecipient: "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n      nonce: 1677234578508,\n      tokenID: "0x0000000000000000000000000000000000000000",\n      chainType: "ethereum",\n      chainID: "5",\n      data: "{\\"targetChainHash\\":\\"0x25d0fc93b8f77265f3e305912bab924653c2c787cda34f3d65400db410ceb430\\"}",\n      version: "v1",\n      sig: "0x42e022bedd0e89dcca9cfdfb6157baffff133451251ed5bf3362e06cd9f00e105cc326e3c7ad6ca12928b811a16e315672f8dba3c32ac68536bf8cf6c8348c601b",\n      everHash:\n        "0x6358b3883b2028c9720fac59544ce9ca62ece51093e357b5bc5c71a7c59a13f5",\n      status: "packaged",\n      internalStatus: "{\\"status\\":\\"success\\"}",\n      timestamp: 1677235004000,\n      targetChainTxHash: "",\n      express: {\n        chainTxHash: "",\n        withdrawFee: "",\n        refundEverHash: "",\n        err: ""\n      }\n    }\n    // etc .\n  ]\n}\n\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"txs")," \u63a5\u53e3\u83b7\u53d6 everPay \u4e0a\u6240\u6709\u4ea4\u6613\u8bb0\u5f55\uff0c\u8fd4\u56de\u7ed3\u679c\u4e2d\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"accId")," \u5b57\u6bb5\u3002")))}b.isMDXComponent=!0}}]);