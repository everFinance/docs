"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6749],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>b});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function d(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)a=d[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(a),p=r,b=s["".concat(o,".").concat(p)]||s[p]||u[p]||d;return a?t.createElement(b,i(i({ref:n},m),{},{components:a})):t.createElement(b,i({ref:n},m))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<d;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5420:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const d={sidebar_position:2},i="info",l={unversionedId:"guide/server-api/basic-api/info",id:"guide/server-api/basic-api/info",title:"info",description:"\u529f\u80fd",source:"@site/docs/guide/server-api/basic-api/info.md",sourceDirName:"guide/server-api/basic-api",slug:"/guide/server-api/basic-api/info",permalink:"/docs/guide/server-api/basic-api/info",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/server-api/basic-api/info.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/guide/server-api/basic-api/intro"},next:{title:"balances",permalink:"/docs/guide/server-api/basic-api/balances"}},o={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",level:2},{value:"Token \u5b57\u6bb5\u63cf\u8ff0",id:"token-\u5b57\u6bb5\u63cf\u8ff0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",level:2}],m={toc:c},s="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(s,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"info"},"info"),(0,r.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.kt)("p",null,"\u83b7\u53d6 everPay \u670d\u52a1\u76f8\u5173\u57fa\u672c\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"arLocker")," \u4ee3\u8868 arweave \u9501\u4ed3\u5730\u5740\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ethLocker")," \u4ee3\u8868 etherum \u94fe\u9501\u4ed3\u5408\u7ea6\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"tokenList")," \u4ee3\u8868 everPay \u652f\u6301\u7684\u8d44\u4ea7\u5217\u8868\u4fe1\u606f\u7b49\u3002"),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/info")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arLocker"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay AR \u539f\u751f\u4ee3\u5e01\u9501\u4ed3\u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ethChainID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4ee5\u592a\u574a\u7f51\u7edc ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ethLocker"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u4ee5\u592a\u574a\u533a\u5757\u94feETH\u3001erc20 Token \u9501\u4ed3\u5408\u7ea6\u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"everRootHash"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u7cfb\u7edf\u4ea4\u6613\u6307\u7eb9\uff0c\u901a\u8fc7\u5f53\u524d\u6240\u6709\u4ea4\u6613 everHash \u9010\u7b14\u8fdb\u884c keccak256 \u83b7\u5f97\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feeRecipient"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u624b\u7eed\u8d39\u6536\u6b3e\u8d26\u6237 ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8d23\u5c06 everPay \u4ea4\u6613\u8bb0\u5f55\u5b58\u50a8\u81f3 Arweave \u533a\u5757\u94fe\u7684\u94b1\u5305\u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rootHash"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u7cfb\u7edf\u4ea4\u6613\u6307\u7eb9\uff0c\u901a\u8fc7\u5f53\u524d\u6240\u6709\u4ea4\u6613 everHash \u4e0e id \u9010\u7b14\u8fdb\u884c keccak256 \u83b7\u5f97\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lockers"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u6240\u6709\u652f\u6301\u539f\u751f\u94fe\u7684\u9501\u4ed3\u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenList"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u652f\u6301\u7684\u8d44\u4ea7\u5217\u8868\u3002\u5355\u4e00\u5e01\u79cd\u5b57\u6bb5\uff0c\u89c1\u5982\u4e0b ",(0,r.kt)("a",{parentName:"td",href:"#Token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token \u5b57\u6bb5\u63cf\u8ff0"),"\u3002")))),(0,r.kt)("h3",{id:"token-\u5b57\u6bb5\u63cf\u8ff0"},"Token \u5b57\u6bb5\u63cf\u8ff0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Token ID\uff0c\u901a\u5e38\u4e3a Token erc20 \u5408\u7ea6\u5730\u5740\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Token Symbol\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimals"),(0,r.kt)("td",{parentName:"tr",align:null},"Token decimals\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainDecimals"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5177\u4f53\u7684\u94fe\u7684 Token decimals\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSupply"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u4e0a\uff0cToken \u8d44\u4ea7\u603b\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainType"),(0,r.kt)("td",{parentName:"tr",align:null},"Token \u6240\u652f\u6301\u7684\u533a\u5757\u94fe\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chainID"),(0,r.kt)("td",{parentName:"tr",align:null},"Token \u6240\u652f\u6301\u7684\u533a\u5757\u94fe\u7f51\u7edc ID\uff0c\u5982\u652f\u6301\u591a\u4e2a\u533a\u5757\u94fe\u5145\u503c\u63d0\u73b0\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},",")," \u9694\u5f00\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burnFees"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"\u666e\u901a\u63d0\u73b0"),"\u8be5 Token \u9700\u8981\u652f\u4ed8\u7684\u624b\u7eed\u8d39\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transferFee"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay \u8f6c\u8d26\u8be5 Token \u9700\u8981\u652f\u4ed8\u7684\u624b\u7eed\u8d39\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"crossChainInfoList"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8de8\u94fe\u4fe1\u606f\u3002")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u592a\u574a\u5730\u5740\u5927\u5c0f\u5199\u517c\u5bb9\uff0c",(0,r.kt)("strong",{parentName:"li"},"Arweave \u5730\u5740\uff0c\u5927\u5c0f\u5199\u4e0d\u517c\u5bb9"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"everPay \u5efa\u8bae\u5f00\u53d1\u8005\uff0c\u4f7f\u7528 everPay \u8fd4\u56de\u7684 Token \u4fe1\u606f\uff0c\u7ec4\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"../../dive/transaction#schema"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema")),"\u3002"))),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.everpay.io/info'\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "isSynced": true,\n    "isClosed": false,\n    "balanceRootHash": "0x46e8415df1532329a24f2c66973a7c292751d1125bdb70279675e1bbc10e82bc",\n    "rootHash": "0xf43e697493cad7558ed0057ccbb19e2c69d6e703346a988c3026ebb6d0de034a",\n    "everRootHash": "0xec2a7cf85427e913b2c7af7224d34135a0a94adfcef2de1043f3ebbdf27bd05d",\n    "owner": "uGx-QfBXSwABKxjha-00dI7vvfyqIYblY6Z5L6cyTFM",\n    "setActionOwner": "0x2f669E44F42f26435034EEC7224a7df92a55Cf6A",\n    "ethChainID": "1",\n    "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n    "ethLocker": "0x38741a69785e84399fcf7c5ad61d572f7ecb1dab",\n    "arLocker": "dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys",\n    "lockers": {\n        "arweave": "dH-_dwLlN86fitrFZzi86IVEEQFyYpTzWcqnFh460ys",\n        "bsc": "0xb415c71272eecce5566a8c465ffbecf3500977da",\n        "conflux": "0xc68370c007cab6f0698ebb6a8da93d40c43ada5a",\n        "ethereum": "0x38741a69785e84399fcf7c5ad61d572f7ecb1dab",\n        "moon": "0x93b2c8834264e9e88bf49467ae6cbe9ebee2a880",\n        "platon": "0x3936cd628a519c399374a6ae0881de92acf791ef"\n    },\n    "tokenList": [\n        {\n            "tag": "bsc-bnb-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "BNB",\n            "decimals": 18,\n            "totalSupply": "3389239000000000000",\n            "chainType": "bsc",\n            "chainID": "56",\n            "burnFees": {\n                "bsc": "1300000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 29,\n            "crossChainInfoList": {\n                "bsc": {\n                    "targetChainId": "56",\n                    "targetChainType": "bsc",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "bsc-dodo-0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",\n            "id": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",\n            "symbol": "DODO",\n            "decimals": 18,\n            "totalSupply": "28995756582720298411",\n            "chainType": "bsc",\n            "chainID": "56",\n            "burnFees": {\n                "bsc": "3"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 9,\n            "crossChainInfoList": {\n                "bsc": {\n                    "targetChainId": "56",\n                    "targetChainType": "bsc",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2"\n                }\n            }\n        },\n        {\n            "tag": "platon-lat-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "LAT",\n            "decimals": 18,\n            "totalSupply": "69798895148000000000000",\n            "chainType": "platon",\n            "chainID": "210425",\n            "burnFees": {\n                "platon": "130000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 8,\n            "crossChainInfoList": {\n                "platon": {\n                    "targetChainId": "210425",\n                    "targetChainType": "platon",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-usdc-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n            "id": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n            "symbol": "USDC",\n            "decimals": 6,\n            "totalSupply": "411570280890",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "2"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 338,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 6,\n                    "targetTokenId": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-xsgd-0x70e8de73ce538da2beed35d14187f6959a8eca96",\n            "id": "0x70e8de73ce538da2beed35d14187f6959a8eca96",\n            "symbol": "XSGD",\n            "decimals": 6,\n            "totalSupply": "39000000",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "4"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 11,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 6,\n                    "targetTokenId": "0x70e8de73ce538da2beed35d14187f6959a8eca96"\n                }\n            }\n        },\n        {\n            "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",\n            "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543",\n            "symbol": "AR",\n            "decimals": 12,\n            "totalSupply": "39256515550653796",\n            "chainType": "arweave,ethereum",\n            "chainID": "0,1",\n            "burnFees": {\n                "arweave": "2568271698",\n                "ethereum": "1",\n                "moon": "741295694"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 2022,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 12,\n                    "targetTokenId": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"\n                },\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 12,\n                    "targetTokenId": "0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543"\n                },\n                "moon": {\n                    "targetChainId": "1284",\n                    "targetChainType": "moon",\n                    "targetDecimals": 12,\n                    "targetTokenId": "0xAc42091313105104AC5a884c3c7c7e5a7EF9Ea38"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "ETH",\n            "decimals": 18,\n            "totalSupply": "63932986100867296315",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "1820000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 309,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "moonbeam-glmr-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "GLMR",\n            "decimals": 18,\n            "totalSupply": "131855800000000000000",\n            "chainType": "moonbeam",\n            "chainID": "1284",\n            "burnFees": {\n                "moon": "13000000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 19,\n            "crossChainInfoList": {\n                "moon": {\n                    "targetChainId": "1284",\n                    "targetChainType": "moon",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "conflux-cfx-0x0000000000000000000000000000000000000000",\n            "id": "0x0000000000000000000000000000000000000000",\n            "symbol": "CFX",\n            "decimals": 18,\n            "totalSupply": "94566370663860567551906",\n            "chainType": "conflux",\n            "chainID": "1030",\n            "burnFees": {\n                "conflux": "130000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 67,\n            "crossChainInfoList": {\n                "conflux": {\n                    "targetChainId": "1030",\n                    "targetChainType": "conflux",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x0000000000000000000000000000000000000000"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-usdt-0xdac17f958d2ee523a2206206994597c13d831ec7",\n            "id": "0xdac17f958d2ee523a2206206994597c13d831ec7",\n            "symbol": "USDT",\n            "decimals": 6,\n            "totalSupply": "86899673825",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "2"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 239,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 6,\n                    "targetTokenId": "0xdac17f958d2ee523a2206206994597c13d831ec7"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-fox-0xc770eefad204b5180df6a14ee197d99d808ee52d",\n            "id": "0xc770eefad204b5180df6a14ee197d99d808ee52d",\n            "symbol": "FOX",\n            "decimals": 18,\n            "totalSupply": "111000000000000000000",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "40000000000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 3,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0xc770eefad204b5180df6a14ee197d99d808ee52d"\n                }\n            }\n        },\n        {\n            "tag": "arweave-ardrive--8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",\n            "id": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ",\n            "symbol": "ARDRIVE",\n            "decimals": 18,\n            "totalSupply": "993900000000000000000",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "7704935631780300",\n                "moon": "2223921873716100"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 27,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "-8A6RexFkpfWwuyVO98wzSFZh0d6VJuI-buTJvlwOJQ"\n                },\n                "moon": {\n                    "targetChainId": "1284",\n                    "targetChainType": "moon",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x826DB9e588217c1ca1166fd24A491537511b966b"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-sos-0x3b484b82567a09e2588a13d54d032153f0c0aee0",\n            "id": "0x3b484b82567a09e2588a13d54d032153f0c0aee0",\n            "symbol": "SOS",\n            "decimals": 18,\n            "totalSupply": "1470183164366819000575577865",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "22256743"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 248,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x3b484b82567a09e2588a13d54d032153f0c0aee0"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-t4ever-0xeaba187306335dd773ca8042b3792c46e213636a",\n            "id": "0xeaba187306335dd773ca8042b3792c46e213636a",\n            "symbol": "T4EVER",\n            "decimals": 18,\n            "totalSupply": "257378600000000000000000",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "100000000000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 4,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0xeaba187306335dd773ca8042b3792c46e213636a"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-wbtc-0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",\n            "id": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",\n            "symbol": "WBTC",\n            "decimals": 8,\n            "totalSupply": "196001",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "14154"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 3,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 8,\n                    "targetTokenId": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"\n                }\n            }\n        },\n        {\n            "tag": "moonbeam-zlk-0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",\n            "id": "0x3fd9b6c9a24e09f67b7b706d72864aebb439100c",\n            "symbol": "ZLK",\n            "decimals": 18,\n            "totalSupply": "1000000000000000000",\n            "chainType": "moonbeam",\n            "chainID": "1284",\n            "burnFees": {\n                "moon": "100000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 3,\n            "crossChainInfoList": {\n                "moon": {\n                    "targetChainId": "1284",\n                    "targetChainType": "moon",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x3fd9b6c9a24e09f67b7b706d72864aebb439100c"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-bank-0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",\n            "id": "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",\n            "symbol": "BANK",\n            "decimals": 18,\n            "totalSupply": "339385209308180769679",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "100000000000000"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 6,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198"\n                }\n            }\n        },\n        {\n            "tag": "arweave-vrt-usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",\n            "id": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A",\n            "symbol": "VRT",\n            "decimals": 18,\n            "totalSupply": "1781000000000000000000",\n            "chainType": "arweave",\n            "chainID": "0",\n            "burnFees": {\n                "arweave": "128415593863004500"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 13,\n            "crossChainInfoList": {\n                "arweave": {\n                    "targetChainId": "0",\n                    "targetChainType": "arweave",\n                    "targetDecimals": 0,\n                    "targetTokenId": "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-mask-0x69af81e73a73b40adf4f3d4223cd9b1ece623074",\n            "id": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",\n            "symbol": "MASK",\n            "decimals": 18,\n            "totalSupply": "490474473524488828720",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "1"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 5,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-uni-0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",\n            "id": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",\n            "symbol": "UNI",\n            "decimals": 18,\n            "totalSupply": "2786765696054602880",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "1"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 2,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"\n                }\n            }\n        },\n        {\n            "tag": "ethereum-dai-0x6b175474e89094c44da98b954eedeac495271d0f",\n            "id": "0x6b175474e89094c44da98b954eedeac495271d0f",\n            "symbol": "DAI",\n            "decimals": 18,\n            "totalSupply": "299873170623989827352",\n            "chainType": "ethereum",\n            "chainID": "1",\n            "burnFees": {\n                "ethereum": "2"\n            },\n            "transferFee": "0",\n            "bundleFee": "0",\n            "holderNum": 15,\n            "crossChainInfoList": {\n                "ethereum": {\n                    "targetChainId": "1",\n                    "targetChainType": "ethereum",\n                    "targetDecimals": 18,\n                    "targetTokenId": "0x6b175474e89094c44da98b954eedeac495271d0f"\n                }\n            }\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);