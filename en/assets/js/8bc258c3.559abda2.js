"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6173],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5520:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const o={sidebar_position:4},i="Deposit",s={unversionedId:"guide/dive/deposit",id:"guide/dive/deposit",title:"Deposit",description:"The wallet addresses of different types of blockchains on everPay corresponds to one everPay account, and the everPay account ID is the same as the wallet address of that wallet on the corresponding blockchain. Users do not need to register an additional account on everPay. everPay currently supports all valid Ethereum and Arweave accounts.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/deposit.md",sourceDirName:"guide/dive",slug:"/guide/dive/deposit",permalink:"/en/docs/guide/dive/deposit",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/deposit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Transaction",permalink:"/en/docs/guide/dive/transaction"},next:{title:"transfer",permalink:"/en/docs/guide/dive/transfer"}},l={},c=[{value:"Fund your Ethereum account",id:"fund-your-ethereum-account",level:2},{value:"Blockchain wallets like imToken / MetaMask",id:"blockchain-wallets-like-imtoken--metamask",level:3},{value:"Via ethers.js",id:"via-ethersjs",level:3},{value:"Via everpay-js",id:"via-everpay-js",level:3},{value:"Fund your Arweave account",id:"fund-your-arweave-account",level:2},{value:"Blockchain wallets such as ArConnect",id:"blockchain-wallets-such-as-arconnect",level:3},{value:"Via arweave.js",id:"via-arweavejs",level:3},{value:"Via everpay-js",id:"via-everpay-js-1",level:3},{value:"everPay transaction",id:"everpay-transaction",level:2},{value:"Schema",id:"schema",level:2},{value:"Ethereum account top-up example",id:"ethereum-account-top-up-example",level:3},{value:"Arweave account top-up example",id:"arweave-account-top-up-example",level:3},{value:"Record queries",id:"record-queries",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deposit"},"Deposit"),(0,r.kt)("p",null,"The wallet addresses of different types of blockchains on everPay corresponds to one everPay account, and the everPay account ID is the same as the wallet address of that wallet on the corresponding blockchain. Users do not need to register an additional account on everPay. everPay currently supports all valid Ethereum and Arweave accounts."),(0,r.kt)("p",null,"For example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 has the same account ID on everPay which would be 0x26361130d5d6E798E9319114643AF8c868412859"),(0,r.kt)("li",{parentName:"ul"},"Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo on everPay, the corresponding account ID would be 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHX")),(0,r.kt)("p",null,"The act of depositing, i.e. make a blockchain transfer to the everPay DAO managed blockchain wallet address."),(0,r.kt)("p",null,"Example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum wallet 0x26361130d5d6E798E9319114643AF8c868412859 transfers 0.1 USDT to everPay's multisignature contract on Ethereum, everPay's backend service monitors the entry and waits for 6 blocks to confirm it, i.e. it will mark the assets on the account which will increase the amount to 0.1 USDT on everPay."),(0,r.kt)("li",{parentName:"ul"},"Arweave wallet 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo transfers 0.1 AR to everPay's threshold signature wallet address on Arweave, everPay's backend service monitors the entry and waits for 15 block confirmations, i.e. it will mark the assets on the account which will increase the amount to 0.1 AR on everPay.")),(0,r.kt)("h2",{id:"fund-your-ethereum-account"},"Fund your Ethereum account"),(0,r.kt)("h3",{id:"blockchain-wallets-like-imtoken--metamask"},"Blockchain wallets like imToken / MetaMask"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"via ",(0,r.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/info"},"info API")," to get everPay's multi-signature contract address ",(0,r.kt)("inlineCode",{parentName:"li"},"ethLocker")," on Ethereum."),(0,r.kt)("li",{parentName:"ol"},"transfer the assets and the amount that you want to deposit to the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethLocker")," multi-signature contract address via blockchain wallet like imToken / MetaMask"),(0,r.kt)("li",{parentName:"ol"},"wait for the transaction to be confirmed in 6 blocks"),(0,r.kt)("li",{parentName:"ol"},"via ",(0,r.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/balances"},"balances API")," to get the assets information")),(0,r.kt)("h3",{id:"via-ethersjs"},"Via ethers.js"),(0,r.kt)("p",null,"Pseudocode reference source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/ethereum.ts#L14"},"everpay-js src/lib/ethereum.ts#L14")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const transferAsync = async (ethConnectedSigner: Signer, {\n  symbol,\n  token,\n  from,\n  to,\n  value\n}: TransferAsyncParams): Promise<EthereumTransaction> => {\n  let transactionResponse: EthereumTransaction\n  if (symbol.toLowerCase() === 'eth') {\n    const transactionRequest = {\n      from: from.toLowerCase(),\n      to: to?.toLowerCase(),\n      value\n    }\n    transactionResponse = await ethConnectedSigner.sendTransaction(transactionRequest)\n  } else {\n    const tokenID = getTokenAddrByChainType(token, ChainType.ethereum)\n    const erc20RW = new Contract(tokenID.toLowerCase(), erc20Abi, ethConnectedSigner)\n    transactionResponse = await erc20RW.transfer(to, value)\n  }\n  return transactionResponse\n}\n")),(0,r.kt)("h3",{id:"via-everpay-js"},"Via everpay-js"),(0,r.kt)("p",null,"everpay-js is now a packaged open source, integrated with ethers.js, developers do not need to care about ",(0,r.kt)("inlineCode",{parentName:"p"},"Token decimals"),". It's very easy for developers to integrate and use. "),(0,r.kt)("p",null,"To use everpay-js for top-ups, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../sdk/everpay-js/operation-api/deposit#ethereum-wallet-1"},"everpay-js deposit"),"\u3002"),(0,r.kt)("h2",{id:"fund-your-arweave-account"},"Fund your Arweave account"),(0,r.kt)("h3",{id:"blockchain-wallets-such-as-arconnect"},"Blockchain wallets such as ArConnect"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"via ",(0,r.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/info"},"info API")," to get everPay's gated signature managed wallet address ",(0,r.kt)("inlineCode",{parentName:"li"},"arLocker")," on Arweave"),(0,r.kt)("li",{parentName:"ol"},"transfer the assets and amount that you want to top up to the ",(0,r.kt)("inlineCode",{parentName:"li"},"arLocker")," address, via a blockchain wallet like arConnect"),(0,r.kt)("li",{parentName:"ol"},"wait 15 blocks for the transaction to be confirmed"),(0,r.kt)("li",{parentName:"ol"},"via ",(0,r.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/balances"},"balances API")," to get the assets information")),(0,r.kt)("h3",{id:"via-arweavejs"},"Via arweave.js"),(0,r.kt)("p",null,"Pseudocode reference source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everFinance/everpay-js/blob/main/src/lib/arweave.ts#L102"},"everpay-js src/lib/arweave.ts#L102")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const transferAsync = async (arJWK: ArJWK, {\n  to,\n  value\n}: TransferAsyncParams): Promise<ArTransferResult> => {\n  const arweave = Arweave.init(options)\n\n  const transactionTransfer = await arweave.createTransaction({\n    target: to,\n    quantity: value.toString()\n  }, arJWK)\n  // \u76f4\u63a5\u7ed9\u539f\u6765 transaction \u8d4b\u503c\u4e86 signature \u503c\n  await arweave.transactions.sign(transactionTransfer, arJWK)\n  const responseTransfer = await arweave.transactions.post(transactionTransfer)\n  return responseTransfer\n}\n")),(0,r.kt)("h3",{id:"via-everpay-js-1"},"Via everpay-js"),(0,r.kt)("p",null,"everpay-js is now a packaged open source, integrated with ethers.js, developers do not need to care about ",(0,r.kt)("inlineCode",{parentName:"p"},"Token decimals"),". It is very easy for developers to integrate and use. "),(0,r.kt)("p",null,"To use everpay-js for top-ups, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../sdk/everpay-js/operation-api/deposit#arweave-wallet-1"},"everpay-js deposit"),"\u3002"),(0,r.kt)("h2",{id:"everpay-transaction"},"everPay transaction"),(0,r.kt)("p",null,"The everPay transaction to recharge is generated by the everPay backend service after detecting the receipt of assets at the everPay DAO managed wallet address. ",(0,r.kt)("a",{parentName:"p",href:"./transaction#schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," will first be generated, then everPay will use the ",(0,r.kt)("strong",{parentName:"p"},"everPay signature wallet")," to sign it and submit it to everPay's server to mark the addition of assets to user's account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This part of the everPay transaction to recharge does not require developers to generate and sign, developers can choose to skip it.")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'mint'")," to deposit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"the current everPay account ID that signed the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the blockchain transfer wallet which the user made a deposit, i.e. the everPay account ID to be topped up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of the deposit, type uint; ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals")," processing is required for setting, e.g. 0.1USDT, after USDT's ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing, it's 100000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:null},"Handling fee, type uint, set with decimals, e.g. 0.1USDT, here it's 100000 after USDT's ",(0,r.kt)("inlineCode",{parentName:"td"},"decimals: 6")," processing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,r.kt)("td",{parentName:"tr",align:null},"Receive everPay account ID for handling fees, via ",(0,r.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"unix milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenID"),(0,r.kt)("td",{parentName:"tr",align:null},"via ",(0,r.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API")," interface, must be consistent with the token ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," field ",(0,r.kt)("strong",{parentName:"td"},"corresponding to ",(0,r.kt)("inlineCode",{parentName:"strong"},"tokenSymbol")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," is the same as ",(0,r.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType")," ",(0,r.kt)("strong",{parentName:"td"},"consistent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chainID")," is the same as ",(0,r.kt)("a",{parentName:"td",href:"../../sdk/server-api/basic-api/info"},"info API"),", the token ",(0,r.kt)("inlineCode",{parentName:"td"},"chainID")," ",(0,r.kt)("strong",{parentName:"td"},"consistent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Blockchain transfer transaction data for users to make top-up, different blockchain has different transfer transaction data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"transaction version ",(0,r.kt)("inlineCode",{parentName:"td"},"'v1'"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," the everPay transaction for the recharge, with ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," specified as ",(0,r.kt)("inlineCode",{parentName:"li"},"'mint'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," is specified as the everPay account ID of the recharge"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),"  everPay will take the original blockchain recharge details and use them as Schema ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," parameters for correlation and traceability"))),(0,r.kt)("h3",{id:"ethereum-account-top-up-example"},"Ethereum account top-up example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tokenSymbol": "ETH",\n  "action": "mint",\n  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "to": "0x98905d8B65A24bcE11D2915c9A5C526E62F80000",\n  "amount": "90000000000000000",\n  "fee": "0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "nonce": 1627277080832,\n  "tokenID": "0x0000000000000000000000000000000000000000",\n  "chainType": "ethereum",\n  "chainID": "1",\n  "data": "{\\"hash\\": \\"0x9fcfad3670edf887f3d42a48dfae82ec9c8689d2d8f5749099359b88042984dc\\", \\"nonce\\": \\"0xb\\", \\"blockHash\\": \\"0x3c40385cd619ec85981e129a3767128bcd21aaba2a0157e165380ef25af3b3e6\\", \\"blockNumber\\": \\"0xc4d666\\", \\"transactionIndex\\": \\"0x106\\", \\"from\\": \\"0x98905d8B65A24bcE11D2915c9A5C526E62F80000\\", \\"to\\": \\"0x38741A69785e84399Fcf7c5ad61D572f7EcB1dab\\", \\"value\\": \\"0x13fbe85edc90000\\", \\"gas\\": \\"0x587a\\", \\"gasPrice\\": \\"0x5d21dbfb3\\", \\"input\\": \\"0x\\", \\"r\\": \\"0x6b67df40d2509efbca5be9b95205d2844714f05f010c0de315efb13c37a712d0\\", \\"s\\": \\"0x5cd205e2cd0eea0011292d3fafa9475b138b2ff4947176bc94edc6e997b97179\\", \\"v\\": \\"0x25\\"}",\n  "sig": "0xccf208efaf9a2359ecf50f518e345e92b8b260a1692bdacdfe805be6e9a49f1d1ebe821ebbde2cb42744422becb1c430e4f67d822df22d7c26c6de08417c5f9a1c"\n}\n')),(0,r.kt)("h3",{id:"arweave-account-top-up-example"},"Arweave account top-up example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tokenSymbol": "AR",\n  "action": "mint",\n  "from": "0xa06b79E655Db7D7C3B3E7B2ccEEb068c3259d0C9",\n  "to": "4g-19C67-avcYzufcc4_ame3RNtCi12K9LDrkeXdwBA",\n  "amount": "500000000000000",\n  "fee": "0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "nonce": 1627476994839,\n  "tokenID": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",\n  "chainType": "arweave,ethereum",\n  "chainID": "0,1",\n  "data": "{\\"format\\": 2, \\"id\\": \\"D3pYmLFViRQlDQW5_CJvAbFkPRgi_0MVrntkhFqBXv4\\", \\"last_tx\\": \\"EelSY8pa3ZXFUrtXVQmjh3xqkunr4zLj1iYNXQXSiwMn6r5lWXIxTTJalb75CT-e\\", \\"owner\\": \\"kqyojcylUXJ-zRZWCq0JsfB5Er7jZ8KIJdpu12xIiuD61WyAH0PZjGX-CeDjCDpdn2rz-5fywiSIhDelMSlLwRZlpMOX-wAR8sXVRlcjo9ybykNPJGSfuKjBvnkP7OyejvEm43pyGSpJWUMYZYDKDrZVTEnwz5bgiPRTPM8EIg8IJauibUrOVTJ9Fo3ffDVLo32P1H0gFMhI5eWn5z_UtXzmFLsxT8XUtWLdpF0aoe4LSoiBgw1BUnHKyX26L854HvULMGL9Onoy6qXMbzlJvUsmoqe8tjvgGlju4XvU0W8ec7ERXfUg9HnKPwC4Cz9U1kZT1JQMnU4S_RREoR9-UGWKWannAOjPB2rw4WMQklR8B-y5Z_hN4LbC5pAZeR-YBCqVc1aQhKYnXWYaVY_-TbHeqAk_befbgbrPrpc9pVlulUIIYdhj0G6QDThsJMUs0XcTjq3YH3_5w3Xzta6UW-wKrA00MfWASnjjMbN3zYfCFG9FQiW6DUaIQrSq-5Vdnb9n3QAMT4Uz5r0ifjbHF33fPxqkcEUD_HcdfuPnHqKcmhd_t-mc55g5Z9BKKGiOXv-H6Jq0vLahuYaZQwN4cxSyRHZNpzcFMwz-rQXeEqlFpoVvbj3xnysMAeuMgJFbS2GBMf2SftN6PDgnhpdh5EbdnL2jBlmBo6RumCcVgt8\\", \\"tags\\": [{\\"name\\": \\"U2lnbmluZy1DbGllbnQ\\", \\"value\\": \\"QXJDb25uZWN0\\"}, {\\"name\\": \\"U2lnbmluZy1DbGllbnQtVmVyc2lvbg\\", \\"value\\": \\"MC4zLjE\\"}], \\"target\\": \\"dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys\\", \\"quantity\\": \\"500000000000000\\", \\"data\\": \\"\\", \\"data_size\\": \\"0\\", \\"data_tree\\": [], \\"data_root\\": \\"\\", \\"reward\\": \\"1602432\\", \\"signature\\": \\"OyTAe5I_uAquM4rr09Zt1YDCORyfzpVkL59lue84KcM44qIuR9nIotNM0VVJkXLLcu3nRz16zOTFKLVwpqxzppSARclXP6_VSas9UHjrfx5WiQrJO1aTq821vlwbw6uAnZcOGfcci0dLCtXscNNKJ1mmjnqaccxmwUlEdbvJm29R0fiN5_y8UDKWlSVMrqm391-Gac7MEBdXTO5Em5foIrESnOb0-mF2Gdk5XsQ62y-6k9lqKnK56ro2gMaSCHlGUNtnxdEsOHpmjJTzt9lL7i8CH2gxZYIWAkJbsrtto_0td2nMeeS-JwdxwMsE__19iKQ_8PGPWJ_gevLjHI7uvtaYxGGMxCB-Gq9yiuNl9J5g4SNd82MeWE6OR4k44tyH6uGYBBKn5VSZKs2q5KR20vYV9d2PaRODKPhleZ5VpzjRMWDlypD-s7yCysUPOqMRW87oZjMB69Xm1ouN-f-q6TlT6GeO6J9QfsuHo2g6KwiISsSaYkYbMbxmMF05Y1fodKMPBjSdNFtPJLpDtXJO-HmYcY7yzyhKEjOewqpOdGFWcCDMecv4wy16nkk1HRuKcz72-BzSHo_CNYmwYewDXkktSkD3vl4EKvB7AYlBFX9C5zNMq-px1kKgZN_B5-AQ1rYiHUSNRj7lhFwabQferAJ7AfnVRlo2K-olriWSSQQ\\", \\"targetChainType\\": \\"arweave\\"}",\n  "sig": "0x2893bb0b2c5d743e656e66b2f76050166c062c369286d303a217b6ea00ea88fa1345683edd371d698b8cfaf8df7f60b19a16940e7349284b23521c1050cfb2ab1c"\n}\n')),(0,r.kt)("h2",{id:"record-queries"},"Record queries"),(0,r.kt)("p",null,"Developers can use the ",(0,r.kt)("a",{parentName:"p",href:"../../sdk/server-api/basic-api/mintedTxByChainTxHash"},"mintedTxByChainTxHash")," interface to query the everPay transaction recharge record based on the blockchain record ID of the recharge (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"txHash")," for ethereum), to confirm whether the recharge has been completed."))}u.isMDXComponent=!0}}]);