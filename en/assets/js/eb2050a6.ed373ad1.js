(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6558],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6374:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Transaction",d={unversionedId:"guide/dive/transaction",id:"guide/dive/transaction",isDocsHomePage:!1,title:"Transaction",description:"Content Summary",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/transaction.md",sourceDirName:"guide/dive",slug:"/guide/dive/transaction",permalink:"/en/docs/guide/dive/transaction",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/transaction.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Account Model",permalink:"/en/docs/guide/dive/account-model"},next:{title:"Deposit",permalink:"/en/docs/guide/dive/deposit"}},c=[{value:"Content Summary",id:"content-summary",children:[]},{value:"Schema",id:"schema",children:[{value:"Example of an ethereum account",id:"example-of-an-ethereum-account",children:[]},{value:"Example of an arweave account",id:"example-of-an-arweave-account",children:[]}]},{value:"messageData",id:"messagedata",children:[{value:"Generation rules",id:"generation-rules",children:[]},{value:"Example of an ethereum account",id:"example-of-an-ethereum-account-1",children:[]},{value:"Example of an arweave account",id:"example-of-an-arweave-account-1",children:[]}]},{value:"everHash",id:"everhash",children:[{value:"Generation rules",id:"generation-rules-1",children:[]}]},{value:"signature",id:"signature",children:[{value:"Ethereum Account Model",id:"ethereum-account-model",children:[]},{value:"Arweave Account Model",id:"arweave-account-model",children:[]}]},{value:"Signature Checksum",id:"signature-checksum",children:[{value:"Ethereum Account Model",id:"ethereum-account-model-1",children:[]},{value:"Arweave Account Model",id:"arweave-account-model-1",children:[]}]},{value:"Submit a transaction",id:"submit-a-transaction",children:[{value:"Field Descriptions",id:"field-descriptions",children:[]},{value:"Example",id:"example",children:[]},{value:"nonce",id:"nonce",children:[]}]},{value:"Transaction Record",id:"transaction-record",children:[{value:"Field Descriptions",id:"field-descriptions-1",children:[]},{value:"Query Interface",id:"query-interface",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction"},"Transaction"),(0,i.kt)("h2",{id:"content-summary"},"Content Summary"),(0,i.kt)("p",null,"everPay has its own separate transaction format, all everPay transactions follow the same format: Sign the same signature specification, and store them on the arweave blockchain for all to verify."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenSymbol"),(0,i.kt)("td",{parentName:"tr",align:null},"Token Symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'mint'")," to deposit"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'transfer'")," to transfer"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'burn'")," to withdraw")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"from"),(0,i.kt)("td",{parentName:"tr",align:null},"the current everPay account ID that signed the transaction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"to"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"to")," is another everPay account ID"),(0,i.kt)("li",null,"When withdrawing, ",(0,i.kt)("inlineCode",{parentName:"td"},"to")," is the blockchain wallet address to withdraw to")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"Transfer amount or withdrawal amount, type uint; ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals")," processing is required for setting, e.g. 0.1USDT, after USDT's ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing, it is 100000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fee"),(0,i.kt)("td",{parentName:"tr",align:null},"Handling fee, type uint. needs to be decimals, e.g. 0.1USDT, here it is 100000 after USDT's ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,i.kt)("td",{parentName:"tr",align:null},"Receive everPay account ID for handling fees, via ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nonce"),(0,i.kt)("td",{parentName:"tr",align:null},"unix milliseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenID"),(0,i.kt)("td",{parentName:"tr",align:null},"via ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface, must be consistent with the token ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," field ",(0,i.kt)("strong",{parentName:"td"},"corresponding to ",(0,i.kt)("inlineCode",{parentName:"strong"},"tokenSymbol")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainType"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," must be the same as ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,i.kt)("strong",{parentName:"td"},"consistent")),(0,i.kt)("li",null,"When withdrawing, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," is the name of the blockchain to be withdrawn to. For example, AR Token supports withdrawing to both Arweave and ethereum blockchains, the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType")," field is ",(0,i.kt)("inlineCode",{parentName:"td"},"arweave,ethereum"),", the developer needs to specify which blockchain to withdraw to, ",(0,i.kt)("inlineCode",{parentName:"td"},"arweave")," is Arweave blockchain, ",(0,i.kt)("inlineCode",{parentName:"td"},"ethereum")," is ethereum blockchain.")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainID"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When transferring, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," must be the same as ",(0,i.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," ",(0,i.kt)("strong",{parentName:"td"},"consistent")),(0,i.kt)("li",null,"When withdrawing, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," is the blockchain network ID to withdraw to, for example, AR Token supports withdrawing to Arweave and Ethernet blockchain, the token ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," field is ",(0,i.kt)("inlineCode",{parentName:"td"},"0,1"),", the developer specify which blockchain to withdraw to, ",(0,i.kt)("inlineCode",{parentName:"td"},"chainID")," also need to use the corresponding value, ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," is Arweave blockchain network ID, ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," is Ethernet blockchain network ID")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional information, developer-customizable JSON data, processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"JSON.stringify()")," and passed in.",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"The current account is the arweave account model and needs to be passed ",(0,i.kt)("inlineCode",{parentName:"strong"},'{"arOwner": "current arweave address\'s owner(public key)"}'))," for RSA-PSS sha256 authentication"),(0,i.kt)("li",null,"In addition, developers can pass ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," to customize some complex functions, like ",(0,i.kt)("a",{parentName:"td",href:"./withdraw#quick-withdrawal-data-field-description"},"Quick Withdraw"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"transaction version ",(0,i.kt)("inlineCode",{parentName:"td"},"'v1'"))))),(0,i.kt)("h3",{id:"example-of-an-ethereum-account"},"Example of an ethereum account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626079771946',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n")),(0,i.kt)("h3",{id:"example-of-an-arweave-account"},"Example of an arweave account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626080392301',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\",\"arOwner\":\"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc\"}',\n  version: 'v1'\n}\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"The current account is the arweave account model and needs to be passed ",(0,i.kt)("inlineCode",{parentName:"strong"},'{"arOwner": "current arweave address\'s owner(public key)"}'))," for RSA-PSS sha256 authentication"))),(0,i.kt)("h2",{id:"messagedata"},"messageData"),(0,i.kt)("p",null,"Generated by Schema in a uniform format for."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ethereum personalSign signature generation"),(0,i.kt)("li",{parentName:"ul"},"Generate ",(0,i.kt)("inlineCode",{parentName:"li"},"everHash"))),(0,i.kt)("h3",{id:"generation-rules"},"Generation rules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export const getEverpayTxMessageData = (everpayTxWithoutSig: EverpayTxWithoutSig): string => {\n  const keys = [\n    'tokenSymbol',\n    'action',\n    'from',\n    'to',\n    'amount',\n    'fee',\n    'feeRecipient',\n    'nonce',\n    'tokenID',\n    'chainType',\n    'chainID',\n    'data',\n    'version'\n  ] as const\n  return keys.map(key => `${key}:${everpayTxWithoutSig[key]}`).join('\\n')\n}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"EverpayTxWithoutSig")," can be found in ",(0,i.kt)("a",{parentName:"p",href:"../../sdk/everpay-js/types#everpaytxwithoutsig"},"everpay-js types#EverpayTxWithoutSig")),(0,i.kt)("h3",{id:"example-of-an-ethereum-account-1"},"Example of an ethereum account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const messageData = `tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626079771946\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{"hello":"world","this":"is everpay"}\nversion:v1`\n')),(0,i.kt)("h3",{id:"example-of-an-arweave-account-1"},"Example of an arweave account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const messageData = `tokenSymbol:ar\naction:transfer\nfrom:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\nto:0x26361130d5d6E798E9319114643AF8c868412859\namount:100\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626080392301\ntokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be\nchainType:arweave,ethereum\nchainID:0,42\ndata:{"hello":"world","this":"is everpay","arOwner":"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc"}\nversion:v1`\n')),(0,i.kt)("h2",{id:"everhash"},"everHash"),(0,i.kt)("p",null,"Each everPay transaction has a uniquely identified ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," is generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"messageData")," using the Ethereum ",(0,i.kt)("inlineCode",{parentName:"p"},"hashPersonalMessage"),"."),(0,i.kt)("h3",{id:"generation-rules-1"},"Generation rules"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168\nconst hashPersonalMessage = (message: Buffer): Buffer => {\n  const prefix = Buffer.from(\n    `\\u0019Ethereum Signed Message:\\n${message.length.toString()}`,\n    'utf-8'\n  )\n  return keccak256(Buffer.concat([prefix, message]))\n}\nconst getEverHash = (messageData: string): string => {\n  const personalMsgHash = hashPersonalMessage(Buffer.from(messageData))\n  const everHash = `0x${personalMsgHash.toString('hex')}`\n  return everHash\n}\n")),(0,i.kt)("h2",{id:"signature"},"signature"),(0,i.kt)("p",null,"Every everPay transaction needs to be signed by the wallet of the sender's account, and the everPay server verifies the validity of all signatures."),(0,i.kt)("h3",{id:"ethereum-account-model"},"Ethereum Account Model"),(0,i.kt)("p",null,"Get ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," by signing ",(0,i.kt)("inlineCode",{parentName:"p"},"messageData")," with Ethereum ",(0,i.kt)("inlineCode",{parentName:"p"},"personalSign"),"."),(0,i.kt)("h4",{id:"generate-signature-with-everpay-tx-via-ethersjs"},"Generate signature with everPay Tx via ethers.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const everpayTxWithoutSig = {\n  tokenSymbol: 'usdt',\n  action: 'transfer',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  amount: '5260000',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626079771946',\n  tokenID: '0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n  chainType: 'ethereum',\n  chainID: '42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\"}',\n  version: 'v1'\n}\n\n// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)\nconst messageData = `tokenSymbol:usdt\naction:transfer\nfrom:0x26361130d5d6E798E9319114643AF8c868412859\nto:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\namount:5260000\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626079771946\ntokenID:0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee\nchainType:ethereum\nchainID:42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\"}\nversion:v1`\n\n// personalSign\nconst signMessageAsync = async (ethConnectedSigner: Signer, message: string): Promise<string> => {\n  return await ethConnectedSigner.signMessage(message)\n}\nconst signature = await signMessageAsync(ethConnectedSigner, messageData)\n")),(0,i.kt)("p",null,"Pseudocode reference source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts"},"everpay-js src/lib/sign.ts")),(0,i.kt)("h3",{id:"arweave-account-model"},"Arweave Account Model"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),") corresponding to ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," is signed by arweave RSA-PSS sha256, and the signature result is then ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," converted by ",(0,i.kt)("inlineCode",{parentName:"p"},"Arweave.utils.bufferTob64Url")," (which differs from other base64 conversion functions), after conversion, we get ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")),(0,i.kt)("h4",{id:"generate-signature-with-everpay-tx-via-arweavejs"},"Generate signature with everPay Tx via arweave.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// RSA-PSS sha256\nconst signMessageAsync = async (arJWK: ArJWK, address: string, everHash: string): Promise<string> => {\n  const arweave = Arweave.init(options)\n  const everHashBuffer: Buffer = Buffer.from(everHash.slice(2), 'hex')\n  // web\n  if (arJWK === 'use_wallet') {\n    try {\n      await checkArPermissions('SIGNATURE')\n    } catch {\n      throw new Error(ERRORS.SIGNATURE_PERMISSION_NEEDED)\n    }\n\n    const algorithm = {\n      name: 'RSA-PSS',\n      saltLength: 32\n    }\n\n    try {\n      const signature = await (window.arweaveWallet as any).signature(\n        everHashBuffer,\n        algorithm\n      )\n      const buf = new Uint8Array(Object.values(signature))\n      return Arweave.utils.bufferTob64Url(buf)\n    } catch {\n      throw new Error(ERRORS.SIGNATURE_FAILED)\n    }\n\n  // node\n  } else {\n    const buf = await arweave.crypto.sign(arJWK, everHashBuffer)\n    return Arweave.utils.bufferTob64Url(buf)\n  }\n}\n\nconst everpayTxWithoutSig = {\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1626080392301',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\",\"arOwner\":\"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc\"}',\n  version: 'v1'\n}\n\n// const messageData = getEverpayTxMessageData(everpayTxWithoutSig)\nconst messageData = `tokenSymbol:ar\naction:transfer\nfrom:5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo\nto:0x26361130d5d6E798E9319114643AF8c868412859\namount:100\nfee:0\nfeeRecipient:0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1\nnonce:1626080392301\ntokenID:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be\nchainType:arweave,ethereum\nchainID:0,42\ndata:{\"hello\":\"world\",\"this\":\"is everpay\",\"arOwner\":\"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc\"}\nversion:v1`\n\n// cp from: https://github.com/ethereumjs/ethereumjs-util/blob/ebf40a0fba8b00ba9acae58405bca4415e383a0d/src/signature.ts#L168\nconst hashPersonalMessage = function (message: Buffer): Buffer {\n  const prefix = Buffer.from(\n    `\\u0019Ethereum Signed Message:\\n${message.length.toString()}`,\n    'utf-8'\n  )\n  return keccak256(Buffer.concat([prefix, message]))\n}\n\nconst getEverHash = (messageData: string): string => {\n  const personalMsgHash = hashPersonalMessage(Buffer.from(messageData))\n  const everHash = `0x${personalMsgHash.toString('hex')}`\n  return everHash\n}\nconst everHash = getEverHash(messageData)\nconst signature = await signMessageAsync(config.arJWK as ArJWK, everHash)\n")),(0,i.kt)("p",null,"Pseudocode reference source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/sign.ts"},"everpay-js src/lib/sign.ts")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"For arweave RSA-PSS sha256 signature is ",(0,i.kt)("inlineCode",{parentName:"li"},"everHash")," Buffer, the result needs to be further converted by ",(0,i.kt)("inlineCode",{parentName:"li"},"Arweave.utils.bufferTob64Url")," to get ",(0,i.kt)("inlineCode",{parentName:"li"},"base64 string")," which is ",(0,i.kt)("inlineCode",{parentName:"li"},"signature"),".")))),(0,i.kt)("h2",{id:"signature-checksum"},"Signature Checksum"),(0,i.kt)("p",null,"Each everPay transaction is signed by the wallet of the sender's account and the signed everPay transaction is submitted together with the everPay server, which verifies all signatures to ensure the validity of the transaction."),(0,i.kt)("h3",{id:"ethereum-account-model-1"},"Ethereum Account Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signMessageAsync(ethConnectedSigner, messageData)\nconst verified = ethers.utils.verifyMessage(messageData, signature).toLowerCase() === everpayTxWithoutSig.from.toLowerCase()\n")),(0,i.kt)("h3",{id:"arweave-account-model-1"},"Arweave Account Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signature = await signMessageAsync(config.arJWK as ArJWK, everHash)\n// arOwner \u4e3a arweave \u94b1\u5305 publicKey\nconst verified = arweave.crypto.verify(\n  everpayTxWithoutSig.data.arOwner,\n  Buffer.from(everHash.slice(2)),\n  Arweave.utils.b64UrlToBuffer(signature)\n)\n")),(0,i.kt)("h2",{id:"submit-a-transaction"},"Submit a transaction"),(0,i.kt)("p",null,"Submit everPay transaction to everPay backend server via POST request to ",(0,i.kt)("a",{parentName:"p",href:"../../sdk/server-api/operation-api/tx"},(0,i.kt)("inlineCode",{parentName:"a"},"tx"))," interface."),(0,i.kt)("h3",{id:"field-descriptions"},"Field Descriptions"),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("a",{parentName:"p",href:"#schema"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema"))," definition field, supplemental signatures get ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"sig")," field."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"supplementary fields"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sig"),(0,i.kt)("td",{parentName:"tr",align:null},"Generated ",(0,i.kt)("inlineCode",{parentName:"td"},"signature"),", based on different account model signatures")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  tokenSymbol: 'ar',\n  action: 'transfer',\n  from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n  to: '0x26361130d5d6E798E9319114643AF8c868412859',\n  amount: '100',\n  fee: '0',\n  feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n  nonce: '1627542576322',\n  tokenID: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be',\n  chainType: 'arweave,ethereum',\n  chainID: '0,42',\n  data: '{\"hello\":\"world\",\"this\":\"is everpay\",\"arOwner\":\"odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc\"}',\n  version: 'v1',\n  sig: 'JuoDkJq1imoaQGoeGhi138e7PCtRpCqYga5rE-C0Ci-3pd-2EGsjbixAspQ6nxPYMT9HOF2shXeS7eUReQO309GtC2XwpqiipSKJiEe-IXjq70JqjCDd9cPgSVho-hmxMcjW263WUwatXXzVzETx3HRMA0GtTz6NOZju2A5ZDNWX9hzGTW7Y_m0a5OyRtc35ZxDrC3aGDBxk2cVhf7pln9JY_w0VGvEI961_y6SZ-_sX0VkqgFEGw76uF94T8CMZh4JMvc4oYPjuX-DR-Dxkm2Dz1oWZV9PsAHD7JbTqyQ2HecJnLf2DJYrYzVi-rTaLHPBZfXxIqqHjcWY6K6aaYk3m7y1-MuSwWYaeAWhnI0YPnsDCk9jsxu1flaPNvdPboQvBoUbTUFx5l9sQBmDcRyq-o2L9H0qlG_AwC-FR1xmjuJR2TKeXkv1zJAwkg2cMX9Bza4Hvjy2X88MoTBRw_GpPxbUti2yBAQWkCsj4iNrUU0CltXddhb_AWWYSLxp0_ELo7h_grBSdiOvq26PgcWBdasnfYE84765htrMlAo6QqMDw5Fs1DBD-8LJQ-d8aCqGE-JuizocbPO3KsuXurAhA6i639XhH81zGCCHow_wFGTJCIc_btVQvTltOZPPEFTOkSnLkjnMwWWhDKS0ZDeOArGTCDZrdZ3TkQDIdTvA'\n}\n")),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," is generated by the user on the clients' side and can be received by everPay's server 100s up or down from the server time "),(0,i.kt)("li",{parentName:"ul"},"every time a user submits an everPay transaction,the ",(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," must be larger than the user's last ",(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," value")),(0,i.kt)("h2",{id:"transaction-record"},"Transaction Record"),(0,i.kt)("p",null,"The everPay transaction is submitted to everPay's server and is passed by a signature verification that can get the transaction record through everPay's interface."),(0,i.kt)("p",null,"everPay adds some fields to the ",(0,i.kt)("a",{parentName:"p",href:"#schema"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema"))," definition field and ",(0,i.kt)("inlineCode",{parentName:"p"},"sig")," signature field for everPay's service."),(0,i.kt)("h3",{id:"field-descriptions-1"},"Field Descriptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"supplementary fields"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"everHash"),(0,i.kt)("td",{parentName:"tr",align:null},"each everPay transaction corresponds to a unique ",(0,i.kt)("inlineCode",{parentName:"td"},"everHash"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"everHash")," is generated with reference to ",(0,i.kt)("a",{parentName:"td",href:"#everhash"},"everHash"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"unix milliseconds timestamp of everPay transaction received by everPay server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"confirmed")," means the everPay transaction has been confirmed by everPay's backend signature verification, but not yet recorded on the Arweave blockchain"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"packaged")," means the everPay transaction has been recorded on the Arweave blockchain")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When the everPay transaction is recorded on the Arweave blockchain, the ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," corresponds to the hash of the transaction recorded on Arweave"),(0,i.kt)("li",null,"If the everPay transaction is not recorded on the Arweave blockchain, the ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," is an empty string")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"targetChainTxHash"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"The corresponding blockchain ",(0,i.kt)("inlineCode",{parentName:"td"},"txHash")," for deposits and withdrawals (not quick withdrawals)"),(0,i.kt)("li",null,"If the withdrawal (Not quick withdrawals) is not completed or is an everPay transfer transaction, this ",(0,i.kt)("inlineCode",{parentName:"td"},"targetChainTxHash")," will be an empty string")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"express"),(0,i.kt)("td",{parentName:"tr",align:null},"Fields added for quick withdrawals, ",(0,i.kt)("inlineCode",{parentName:"td"},'express: {"chainTxHash": "", "withdrawFee": "", "refundEverHash": "", "err": ""}'),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"chainTxHash")," represents the packaged blockchain ",(0,i.kt)("inlineCode",{parentName:"td"},"txHash")," after a successful quick withdrawal"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"withdrawFee")," represents the actual fee charged"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"refundEverHash")," represents the everPay transaction ",(0,i.kt)("inlineCode",{parentName:"td"},"everHash")," that was refunded by the market maker after a failed quick withdrawal"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"err")," represents the reason for the failed quick withdrawal")))))),(0,i.kt)("h3",{id:"query-interface"},"Query Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/txs"},"txs")," Checks all everPay transaction records"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/txsByAccount"},"txsByAccount")," Checks the transaction history of a specific everPay account"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/txByHash"},"txByHash")," Queries everPay's transaction records based on ",(0,i.kt)("inlineCode",{parentName:"li"},"everHash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/mintedTxByChainTxHash"},"mintedTxByChainTxHash")," Check the everPay transaction record of the deposit according to the blockchain record ID (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"txHash")," for ethereum)")))}p.isMDXComponent=!0}}]);