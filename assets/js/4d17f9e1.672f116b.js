"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),u=a(1980),d=a(7392),s=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var v=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=s.indexOf(t),n=d[a].value;n!==o&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function A(e){const t=(0,v.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},1019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={sidebar_position:4},u="withdraw",d={unversionedId:"guide/SDK/everpay-js/operation-api/withdraw",id:"guide/SDK/everpay-js/operation-api/withdraw",title:"withdraw",description:"\u529f\u80fd",source:"@site/docs/guide/SDK/everpay-js/operation-api/withdraw.md",sourceDirName:"guide/SDK/everpay-js/operation-api",slug:"/guide/SDK/everpay-js/operation-api/withdraw",permalink:"/docs/guide/SDK/everpay-js/operation-api/withdraw",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/operation-api/withdraw.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"transfer",permalink:"/docs/guide/SDK/everpay-js/operation-api/transfer"},next:{title:"signBundleData",permalink:"/docs/guide/SDK/everpay-js/operation-api/signBundleData"}},s={},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"ethereum \u8d26\u6237\u666e\u901a\u63d0\u73b0 AR \u81f3 arweave \u94b1\u5305\u5730\u5740",id:"ethereum-\u8d26\u6237\u666e\u901a\u63d0\u73b0-ar-\u81f3-arweave-\u94b1\u5305\u5730\u5740",level:3},{value:"arweave \u8d26\u6237\u666e\u901a\u63d0\u73b0 USDT \u81f3 ethereum \u94b1\u5305\u5730\u5740",id:"arweave-\u8d26\u6237\u666e\u901a\u63d0\u73b0-usdt-\u81f3-ethereum-\u94b1\u5305\u5730\u5740",level:3}],c={toc:p},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"withdraw"},"withdraw"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u6839\u636e Everpay \u5b9e\u4f8b\u521b\u5efa\u65f6\uff0c\u4f20\u9012\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arJWK")," \u53c2\u6570\uff0c\u8fdb\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u666e\u901a\u63d0\u73b0\u65f6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u6784\u5efa",(0,r.kt)("strong",{parentName:"li"},"\u666e\u901a\u63d0\u73b0")," ",(0,r.kt)("a",{parentName:"li",href:"../../../dive/withdraw#schema-%E8%AF%B4%E6%98%8E"},"Schema"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5bf9\u5e94\uff08\u63d2\u4ef6\uff09\u94b1\u5305\u7b7e\u540d\u529f\u80fd\uff0c\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"sig"),"\uff0c\u7ec4\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"../types#everpaytx"},"EverpayTx"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4fe1\u606f\u53d1\u9001\u7ed9 everPay \u540e\u7aef\u670d\u52a1\u5668\uff0c\u8fdb\u884c\u7b7e\u540d\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef\u670d\u52a1\u5668\u9a8c\u8bc1\u901a\u8fc7\uff0c\u5c06\u8be5\u7b14 everPay \u4ea4\u6613\u8bb0\u5f55\u5b58\u50a8\u5728 arweave \u533a\u5757\u94fe\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u5f85 arweave \u533a\u5757\u94fe\u5b8c\u6210\u8be5\u7b14 everPay \u4ea4\u6613\u8bb0\u5f55\u5b58\u50a8\uff0c\u786e\u4fdd\u8d26\u6237\u7684\u6b63\u786e\u6027\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u7b7e\u94b1\u5305/\u9501\u4ed3\u5730\u5740\uff0c\u7ed9\u7528\u6237\u63d0\u73b0\u5730\u5740\uff0c\u63d0\u73b0\u5bf9\u5e94\u6570\u91cf\uff08\u6263\u9664\u624b\u7eed\u8d39\u540e\uff09\u8d44\u4ea7\u4ee3\u5e01\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u4fe1\u606f\u8bf7\u9605\u8bfb ",(0,r.kt)("a",{parentName:"li",href:"/docs/guide/dive/withdraw"},"DOCS - \u7cfb\u7edf\u6982\u89c8 - \u63d0\u73b0"),"\u3002")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4efb\u610f everPay \u8d26\u6237\uff0c\u5747\u53ef\u5c06 everPay \u4e0a\u7684\u8d44\u4ea7\uff0c\u63d0\u73b0\u81f3 everPay \u76ee\u524d\u652f\u6301\u63d0\u73b0\u7684\u533a\u5757\u94fe\u94b1\u5305\u4e0a\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d everPay \u4e0a\u7684 USDT \u652f\u6301 ethereum \u533a\u5757\u94fe\uff0ceverPay \u8d26\u6237 ",(0,r.kt)("inlineCode",{parentName:"li"},"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo")," \u53ef\u5c06 USDT \u63d0\u73b0\u81f3 ethereum \u533a\u5757\u94fe\u94b1\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"0x26361130d5d6E798E9319114643AF8c868412859")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d everPay \u4e0a\u7684 AR \u652f\u6301 ethereum\u3001arweave \u533a\u5757\u94fe\uff0ceverPay \u8d26\u6237 ",(0,r.kt)("inlineCode",{parentName:"li"},"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo")," \u53ef\u5c06 AR \u63d0\u73b0\u81f3 arweave \u533a\u5757\u94fe\u94b1\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo")," \u4e2d\uff0c\u4e5f\u53ef\u5c06\u5176\u63d0\u73b0\u81f3 ethereum \u94b1\u5305 ",(0,r.kt)("inlineCode",{parentName:"li"},"0x26361130d5d6E798E9319114643AF8c868412859")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684\u4ee3\u5e01\u652f\u6301",(0,r.kt)("strong",{parentName:"li"},"\u666e\u901a\u63d0\u73b0"),"\u81f3\u7684\u533a\u5757\u94fe\uff0c\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"li",href:"../basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"\u57fa\u7840\u67e5\u8be2API - info\u63a5\u53e3")),"\u3002"))),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"everpay.withdraw(withdrawParams: WithdrawParams):SendEverpayTxResult\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"field",label:"\u53c2\u6570",default:!0,mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainType"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/guide/SDK/everpay-js/types#chaintype"},"ChainType"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," \u5fc5\u987b\u4e0e ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},"info API")," \u63a5\u53e3\u83b7\u53d6\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"tokenSymbol")," \u5bf9\u5e94 token ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,r.kt)("strong",{parentName:"td"},"\u4e00\u81f4"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token")," \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"td",href:"/docs/guide/server-api/basic-api/info"},(0,r.kt)("inlineCode",{parentName:"a"},"info"))," \u63a5\u53e3\u8fdb\u884c\u67e5\u770b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u73b0\u91d1\u989d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u624b\u7eed\u8d39\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9644\u52a0\u4fe1\u606f\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u5b9a\u4e49JSON \u6570\u636e\uff0c\u7ecf\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON.stringify()")," \u5904\u7406\u540e\u4f20\u9012\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")," \u4e3a\u8981\u63d0\u73b0\u81f3\u7684\u533a\u5757\u94fe\u94b1\u5305\u5730\u5740\u3002")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guide/dive/withdraw"},"\u66f4\u591a\u4fe1\u606f\u8bf7\u79fb\u81f3 \u7cfb\u7edf\u6982\u89c8 - \u63d0\u73b0"),"\u3002")),(0,r.kt)(i.Z,{value:"type",label:"\u7c7b\u578b",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface WithdrawParams {\n  chainType: ChainType\n  tag: string\n  amount: string\n  fee?: string\n  quickMode?: boolean\n  data?: Record<string, unknown>\n  to?: string\n}\n")))),(0,r.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: This type does not have an export\ninterface PostEverpayTxResult {\n  status: string\n}\nexport interface SendEverpayTxResult extends PostEverpayTxResult {\n  everpayTx: EverpayTx\n  everHash: string\n}\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"ethereum-\u8d26\u6237\u666e\u901a\u63d0\u73b0-ar-\u81f3-arweave-\u94b1\u5305\u5730\u5740"},"ethereum \u8d26\u6237\u666e\u901a\u63d0\u73b0 AR \u81f3 arweave \u94b1\u5305\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  chainType: 'ethereum',\n  ethConnectedSigner: signer,\n  debug: true\n})\n\neverpay.withdraw({\n  tag: 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x83ea4a2fe3ead9a7b204ab2d56cb0b81d71489c8',\n  amount: '0.000010001',\n  chainType: 'arweave',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n}).then(console.log)\n\n/* \u8fd4\u56de\u7ed3\u679c\n{\n  status: 'ok',\n  everpayTx: {\n    tokenSymbol: 'ar',\n    action: 'burn',\n    from: '0x26361130d5d6E798E9319114643AF8c868412859',\n    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    amount: '10001000',\n    fee: '13200000',\n    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n    nonce: '1640156350136',\n    tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n    chainType: 'arweave,ethereum',\n    chainID: '0,42',\n    data: '{\"targetChainType\":\"arweave\"}',\n    version: 'v1',\n    sig: '0x17a4d8f1570933839a9a188bf77d378a354777dabecd7bd27a22ef516c2f85bb731c07cb59174fdcf541623e55f70dfc70031de4d319f3a26d84f1691a7208ea1c'\n  },\n  everHash: '0x474399ccd4ab9432a72f79107b2fd36f0264f0cdc5d81bd5739b8b79e6ba9a13'\n}\n*/\n")),(0,r.kt)("h3",{id:"arweave-\u8d26\u6237\u666e\u901a\u63d0\u73b0-usdt-\u81f3-ethereum-\u94b1\u5305\u5730\u5740"},"arweave \u8d26\u6237\u666e\u901a\u63d0\u73b0 USDT \u81f3 ethereum \u94b1\u5305\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const arAddress = await window.arweaveWallet.getActiveAddress()\nconst everpay = new Everpay({\n  account: arAddress,\n  chainType: 'arweave',\n  arJWK: 'use_wallet',\n  debug: true,\n})\n\neverpay.withdraw({\n  tag: 'ethereum-usdt-0x923fcb255da521037385457fb549a51f78ef0af4',\n  amount: '101',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n}).then(console.log)\n\n/* \u8fd4\u56de\u7ed3\u679c\n{\n  status: 'ok',\n  everpayTx: {\n    tokenSymbol: 'usdt',\n    action: 'burn',\n    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    to: '0x26361130d5d6E798E9319114643AF8c868412859',\n    amount: '101000000',\n    fee: '32778384',\n    feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n    nonce: '1640156915340',\n    tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    chainType: 'ethereum',\n    chainID: '42',\n    data: '',\n    version: 'v1',\n    sig: 'bXbDJQR86kvau-pm9ub19hckF6C1Z8BBksaZWztrakJNKB_YxcV8gKXvX2kVTtvxYX4gxyImMkMacNG6q1ATjVEHZ-RLGH0W4PTZPJPrsUyspPlmFYQtFS2CX5sK_3eLTFE3O2P4QVep1tZYsD275Mdk0LzE8hVTJ7mIQGO2KEIFxhaipYj8hvPgMA3y9LlhG_634yTt08iUfbKTB2_E54BZvBzY4RX-Oc5CIuc07OOS_wzbNv4aZbEDfV5k31d1f5wuapRsZVG3yzs7aZHLawbugY08BytVG7QWKM55ZZsOIW8R8EuJI-LdmqXlMsjpJVWNDSAjKLJeyr0-fBpZGcF6ZHE5CRMXI6iRud0JKae1oq0ZO4w-rKvuBMeuoMda8iMOtvhFviKeGgFJ3npjilKHSWptMGblLtp5W3cn7WKOSp77imyLyLI0j8MbuITzeqOumLVwNqlwJiigfP6HooibC8dm42tMDzQO2mwlp8H1JkttgUl6AYXq_E_Ndk4xuv3Q0aAHtO3FE1ssHkmu0P7l5QII2hMtJOoTCBbwSQwWoaxbvXdzkTF802V981iHbtdL6LWnf0KctQdAX95nc682hHWFWj3KXaOkkRrEJJ5v5lpaFnXP6uM1-gQYK8MDmkVOnjNUNW3MApBXOk0uxdHTPgfnanmV4AOuBSll-Ck,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'\n  },\n  everHash: '0x1a31b394f471c74f588810201a29bd66fb53a9b6f9518512210817a72655238b'\n}\n*/\n")))}b.isMDXComponent=!0}}]);