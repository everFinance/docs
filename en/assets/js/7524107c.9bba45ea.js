(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7462],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6182:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},d="info",p={unversionedId:"sdk/server-api/basic-api/info",id:"sdk/server-api/basic-api/info",isDocsHomePage:!1,title:"info",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/info.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/info",permalink:"/en/docs/sdk/server-api/basic-api/info",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/info.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Introduction",permalink:"/en/docs/sdk/server-api/basic-api/intro"},next:{title:"balances",permalink:"/en/docs/sdk/server-api/basic-api/balances"}},c=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return Fields",id:"return-fields",children:[{value:"Token field description",id:"token-field-description",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example Return",id:"example-return",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info"},"info"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get basic information about everPay service, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"arLocker")," represents the locked position address on arweave blockchain, ",(0,i.kt)("inlineCode",{parentName:"p"},"ethLocker")," represents the locked position contract on etherum blockchain."),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/info")),(0,i.kt)("h2",{id:"return-fields"},"Return Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"arLocker"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay AR native token locked position address on arweave blockchain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ethChainID"),(0,i.kt)("td",{parentName:"tr",align:null},"Current Ethereum network ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ethLocker"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay locked position contract on ethereum blockchain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"everRootHash"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay system transaction fingerprint, obtained by keccak256 of all current transactions everHash on a per-transaction basis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay fee collection account ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"owner"),(0,i.kt)("td",{parentName:"tr",align:null},"An everPay arweave address, responsible for storing everPay transaction records to the arweave blockchain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rootHash"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay system transaction fingerprint, obtained by keccak256 of all current transactions everHash and id on a per-transaction basis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenList"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of tokens supported by everPay. Single token fields, see below ",(0,i.kt)("a",{parentName:"td",href:"#token-field-description"},"Token field description"))))),(0,i.kt)("h3",{id:"token-field-description"},"Token field description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tag"),(0,i.kt)("td",{parentName:"tr",align:null},"combined by ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," via ",(0,i.kt)("inlineCode",{parentName:"td"},"-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ID, usually the token erc20 contract address, separated by ",(0,i.kt)("inlineCode",{parentName:"td"},",")," if it supports multiple blockchain top-ups and withdrawals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"symbol"),(0,i.kt)("td",{parentName:"tr",align:null},"Token symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"decimals"),(0,i.kt)("td",{parentName:"tr",align:null},"Token decimals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"totalSupply"),(0,i.kt)("td",{parentName:"tr",align:null},"The total amount of token assets on everPay")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainType"),(0,i.kt)("td",{parentName:"tr",align:null},"Supported blockchains to top-ups and withdrawals, separated by ",(0,i.kt)("inlineCode",{parentName:"td"},","))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainID"),(0,i.kt)("td",{parentName:"tr",align:null},"Supported blockchain network IDs to top-ups and withdrawals, separated by ",(0,i.kt)("inlineCode",{parentName:"td"},","))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"burnFee"),(0,i.kt)("td",{parentName:"tr",align:null},"The fee should to be paid for the ",(0,i.kt)("strong",{parentName:"td"},"everPay normal withdrawal"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transferFee"),(0,i.kt)("td",{parentName:"tr",align:null},"The fee should to be paid for the everPay transfer")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Ethereum addresses are case-compatible, ",(0,i.kt)("strong",{parentName:"li"},"arweave addresses are case-incompatible")),(0,i.kt)("li",{parentName:"ul"},"everPay recommends developers to assemble ",(0,i.kt)("a",{parentName:"li",href:"../../../guide/dive/transaction#schema"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema"))," using the Token information returned by this info API.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/info'\n")),(0,i.kt)("h2",{id:"example-return"},"Example Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "arLocker": "bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc",\n  "ethChainID": "42",\n  "ethLocker": "0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a",\n  "everRootHash": "0x91fdcd368b9910bb802dcc7472b3079bcb12203317e3932c4155b12fc570f9e0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",\n  "rootHash": "0x622a1d82bea49b55781a97401d3a8c816e89ed79df9809cc7f8e06e2af2d863f",\n  "tokenList": [\n    {\n      "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n      "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n      "symbol": "AR",\n      "decimals": 12,\n      "totalSupply": "1371970463702",\n      "chainType": "arweave,ethereum",\n      "chainID": "0,42",\n      "burnFee": "15000",\n      "transferFee": "0"\n    },\n    {\n      "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n      "id": "0x0000000000000000000000000000000000000000",\n      "symbol": "ETH",\n      "decimals": 18,\n      "totalSupply": "43630547196159703549",\n      "chainType": "ethereum",\n      "chainID": "42",\n      "burnFee": "20000000000000000",\n      "transferFee": "0"\n    },\n    {\n      "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "symbol": "USDT",\n      "decimals": 6,\n      "totalSupply": "101315553998270991",\n      "chainType": "ethereum",\n      "chainID": "42",\n      "burnFee": "80000000",\n      "transferFee": "0"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);