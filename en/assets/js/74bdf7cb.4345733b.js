(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5885],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],d={sidebar_position:5},l=void 0,s={unversionedId:"guide/dive/transfer",id:"guide/dive/transfer",isDocsHomePage:!1,title:"transfer",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/transfer.md",sourceDirName:"guide/dive",slug:"/guide/dive/transfer",permalink:"/en/docs/guide/dive/transfer",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/transfer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"Deposit",permalink:"/en/docs/guide/dive/deposit"},next:{title:"Withdraw",permalink:"/en/docs/guide/dive/withdraw"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Transaction signature, sending and record acquisition",id:"transaction-signature-sending-and-record-acquisition",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A transfer is a transfer that occurs between two everPay accounts. Any two everPay accounts can transfer funds between them, even transferring assets from an Ethereum address to an Arweave address."),(0,i.kt)("p",null,"everPay ensures the security of transfers through blockchain cryptographic signature verification."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenSymbol"),(0,i.kt)("td",{parentName:"tr",align:null},"Token Symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'transfer'")," to transfer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"from"),(0,i.kt)("td",{parentName:"tr",align:null},"the current everPay account ID that signed the transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"to"),(0,i.kt)("td",{parentName:"tr",align:null},"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"to")," is another everPay account ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"Transfer amount, type uint; ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals")," processing is required for setting, e.g. 0.1USDT, after USDT's ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing, it's 100000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fee"),(0,i.kt)("td",{parentName:"tr",align:null},"Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it's 100000 after USDT's ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,i.kt)("td",{parentName:"tr",align:null},"Receive everPay account ID for handling fees, via ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nonce"),(0,i.kt)("td",{parentName:"tr",align:null},"unix milliseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenID"),(0,i.kt)("td",{parentName:"tr",align:null},"via ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface, must be consistent with the token ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," field ",(0,i.kt)("strong",{parentName:"td"},"corresponding to ",(0,i.kt)("inlineCode",{parentName:"strong"},"tokenSymbol")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainType"),(0,i.kt)("td",{parentName:"tr",align:null},"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," must be the same as ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,i.kt)("strong",{parentName:"td"},"consistent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainID"),(0,i.kt)("td",{parentName:"tr",align:null},"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," must be the same as ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," ",(0,i.kt)("strong",{parentName:"td"},"consistent"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional information, developer-customizable JSON data, processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"JSON.stringify()")," and passed in. Developers can pass ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," to customize some complex functions, like ",(0,i.kt)("a",{parentName:"td",href:"./withdraw#quick-withdrawal-data-field-description"},"Quick Withdraw"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"transaction version ",(0,i.kt)("inlineCode",{parentName:"td"},"'v1'"))))),(0,i.kt)("h2",{id:"transaction-signature-sending-and-record-acquisition"},"Transaction signature, sending and record acquisition"),(0,i.kt)("p",null,"Developers can visit the ",(0,i.kt)("a",{parentName:"p",href:"./transaction#messagedata"},"Guide - Dive - Transaction")," chapter for more information."))}u.isMDXComponent=!0}}]);