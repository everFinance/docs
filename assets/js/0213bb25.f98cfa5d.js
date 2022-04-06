(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2393],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return s}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,k=u["".concat(o,".").concat(s)]||u[s]||p[s]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3205:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),l=["components"],d={sidebar_position:2},o="info",c={unversionedId:"sdk/server-api/basic-api/info",id:"sdk/server-api/basic-api/info",isDocsHomePage:!1,title:"info",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/basic-api/info.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/info",permalink:"/docs/sdk/server-api/basic-api/info",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/basic-api/info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/server-api/basic-api/intro"},next:{title:"balances",permalink:"/docs/sdk/server-api/basic-api/balances"}},m=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[{value:"Token \u5b57\u6bb5\u63cf\u8ff0",id:"token-\u5b57\u6bb5\u63cf\u8ff0",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info"},"info"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6 everPay \u670d\u52a1\u76f8\u5173\u57fa\u672c\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"arLocker")," \u4ee3\u8868 arweave \u9501\u4ed3\u5730\u5740\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ethLocker")," \u4ee3\u8868 etherum \u94fe\u9501\u4ed3\u5408\u7ea6\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/info")),(0,i.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"arLocker"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay AR \u539f\u751f\u4ee3\u5e01\u9501\u4ed3\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ethChainID"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4ee5\u592a\u574a\u7f51\u7edc ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ethLocker"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u4ee5\u592a\u574a\u533a\u5757\u94feETH\u3001erc20 Token \u9501\u4ed3\u5408\u7ea6\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"everRootHash"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u7cfb\u7edf\u4ea4\u6613\u6307\u7eb9\uff0c\u901a\u8fc7\u5f53\u524d\u6240\u6709\u4ea4\u6613 everHash \u9010\u7b14\u8fdb\u884c keccak256 \u83b7\u5f97")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u624b\u7eed\u8d39\u6536\u6b3e\u8d26\u6237 ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"owner"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u5c06 everPay \u4ea4\u6613\u8bb0\u5f55\u5b58\u50a8\u81f3 Arweave \u533a\u5757\u94fe\u7684\u94b1\u5305\u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rootHash"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u7cfb\u7edf\u4ea4\u6613\u6307\u7eb9\uff0c\u901a\u8fc7\u5f53\u524d\u6240\u6709\u4ea4\u6613 everHash \u4e0e id \u9010\u7b14\u8fdb\u884c keccak256 \u83b7\u5f97")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenList"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u652f\u6301\u7684\u8d44\u4ea7\u5217\u8868\u3002\u5355\u4e00\u5e01\u79cd\u5b57\u6bb5\uff0c\u89c1\u5982\u4e0b ",(0,i.kt)("a",{parentName:"td",href:"#Token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token \u5b57\u6bb5\u63cf\u8ff0"))))),(0,i.kt)("h3",{id:"token-\u5b57\u6bb5\u63cf\u8ff0"},"Token \u5b57\u6bb5\u63cf\u8ff0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tag"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ID\uff0c\u901a\u5e38\u4e3a Token erc20 \u5408\u7ea6\u5730\u5740\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"symbol"),(0,i.kt)("td",{parentName:"tr",align:null},"Token Symbol")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"decimals"),(0,i.kt)("td",{parentName:"tr",align:null},"Token decimals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainDecimals"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5177\u4f53\u7684\u94fe\u7684 Token decimals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"totalSupply"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u4e0a\uff0cToken \u8d44\u4ea7\u603b\u91cf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainType"),(0,i.kt)("td",{parentName:"tr",align:null},"Token \u6240\u652f\u6301\u7684\u533a\u5757\u94fe\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainID"),(0,i.kt)("td",{parentName:"tr",align:null},"Token \u6240\u652f\u6301\u7684\u533a\u5757\u94fe\u7f51\u7edc ID\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"burnFee"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u666e\u901a\u63d0\u73b0"),"\u8be5 Token \u9700\u8981\u652f\u4ed8\u7684\u624b\u7eed\u8d39")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transferFee"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u8f6c\u8d26\u8be5 Token \u9700\u8981\u652f\u4ed8\u7684\u624b\u7eed\u8d39")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u592a\u574a\u5730\u5740\u5927\u5c0f\u5199\u517c\u5bb9\uff0c",(0,i.kt)("strong",{parentName:"li"},"Arweave \u5730\u5740\uff0c\u5927\u5c0f\u5199\u4e0d\u517c\u5bb9")),(0,i.kt)("li",{parentName:"ul"},"everPay \u5efa\u8bae\u5f00\u53d1\u8005\uff0c\u4f7f\u7528 everPay \u8fd4\u56de\u7684 Token \u4fe1\u606f\uff0c\u7ec4\u88c5 ",(0,i.kt)("a",{parentName:"li",href:"../../../guide/dive/transaction#schema"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema")))))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/info'\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "arLocker": "FyINHRSrHW0teUhvJzd6R33Tl50qxLnSj8LJCP5puiI",\n    "balanceRootHash": "0xc0eb07695246b337dc8be4665e8747e0975ffa938f8f8404b69b976e0019e233",\n    "ethChainID": "42",\n    "ethLocker": "0xa7ae99c13d82dd32fc6445ec09e38d197335f38a",\n    "everRootHash": "0x1a8718d9464dc049ed89c8d5a0c864cf7c6efa19a0fff29f4c964301f5194aa4",\n    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n    "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",\n    "rootHash": "0x4087b9bfc4241e8a64f290285c4692f378692d96b8d3557a4689dc6cb56a8954",\n    "tokenList": [\n        {\n            "tag": "arweave-pia-n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",\n            "id": "n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno",\n            "symbol": "PIA",\n            "decimals": 18,\n            "chainDecimals": "0",\n            "totalSupply": "1000000000000000000",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "0"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 1,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "n05LTiuWcAYjizXAu-ghegaWjL89anZ6VdvuHcU6dno"\n                }\n            }\n        },\n        {\n            "tag": "arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",\n            "id": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",\n            "symbol": "VRT",\n            "decimals": 18,\n            "chainDecimals": "0",\n            "totalSupply": "64899989999000000000",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "94407228533265800",\n                "ethereum": "1000000000000000"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 42,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A"\n                },\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0xde10c3040aDB1e3d63Dd0ce7965192610aE36712"\n                }\n            }\n        },\n        {\n            "tag": "arweave-xyz-mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",\n            "id": "mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74",\n            "symbol": "XYZ",\n            "decimals": 18,\n            "chainDecimals": "0",\n            "totalSupply": "0",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "7552578282661300"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 0,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "mzvUgNc8YFk0w5K5H7c8pyT-FC5Y_ba0r7_8766Kx74"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-dai-0xc4375b7de8af5a38a93548eb8453a498222c4ff2",\n            "id": "0xc4375b7de8af5a38a93548eb8453a498222c4ff2",\n            "symbol": "DAI",\n            "decimals": 18,\n            "chainDecimals": "18",\n            "totalSupply": "0",\n            "chainType": "ethereum",\n            "chainID": "42",\n            "burnFees": {\n                "ethereum": "7375371963603276100"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 0,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0xc4375b7de8af5a38a93548eb8453a498222c4ff2"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "ETH",\n            "decimals": 18,\n            "chainDecimals": "18",\n            "totalSupply": "80716479282262778054",\n            "chainType": "ethereum",\n            "chainID": "42",\n            "burnFees": {\n                "ethereum": "2860000000000000"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 199,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-usdc-0xb7a4f3e9097c08da09517b5ab877f7a917224ede",\n            "id": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede",\n            "symbol": "USDC",\n            "decimals": 6,\n            "chainDecimals": "6",\n            "totalSupply": "70134244944",\n            "chainType": "ethereum",\n            "chainID": "42",\n            "burnFees": {\n                "ethereum": "7376036"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 6,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 6,\n                    "targetTokenId": "0xb7a4f3e9097c08da09517b5ab877f7a917224ede"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n            "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n            "symbol": "USDT",\n            "decimals": 6,\n            "chainDecimals": "6",\n            "totalSupply": "10092307530648914900",\n            "chainType": "ethereum",\n            "chainID": "42",\n            "burnFees": {\n                "ethereum": "7373455"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 84,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 6,\n                    "targetTokenId": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee"\n                }\n            }\n        },\n        {\n            "tag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",\n            "id": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",\n            "symbol": "ARDRIVE",\n            "decimals": 18,\n            "chainDecimals": "0",\n            "totalSupply": "1000000000000000000",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "5664433711995900"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 4,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ"\n                }\n            }\n        },\n        {\n            "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n            "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n            "symbol": "AR",\n            "decimals": 12,\n            "chainDecimals": "12,12",\n            "totalSupply": "1483489588606",\n            "chainType": "arweave,ethereum",\n            "chainID": "0,42",\n            "burnFees": {\n                "arweave": "1888239025",\n                "ethereum": "100000000"\n            },\n            "transferFee": "0",\n            "atomicBundleFee": "0",\n            "holderNum": 22,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 12,\n                    "targetTokenId": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"\n                },\n                "ethereum": {\n                    "targetChainId": "42",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 12,\n                    "targetTokenId": "0xcc9141efa8c20c7df0778748255b1487957811be"\n                }\n            }\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);