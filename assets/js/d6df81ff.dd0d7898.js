"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5718],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(t),f=o,y=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=t(3117),o=(t(7294),t(3905));const a={sidebar_position:5},i="chainType",c={unversionedId:"sdk/everpay-js/configuration/chainType",id:"sdk/everpay-js/configuration/chainType",title:"chainType",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/sdk/everpay-js/configuration/chainType.md",sourceDirName:"sdk/everpay-js/configuration",slug:"/sdk/everpay-js/configuration/chainType",permalink:"/docs/sdk/everpay-js/configuration/chainType",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/configuration/chainType.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sdk",previous:{title:"account",permalink:"/docs/sdk/everpay-js/configuration/account"},next:{title:"ethConnectedSigner",permalink:"/docs/sdk/everpay-js/configuration/ethConnectedSigner"}},p={},s=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",level:2},{value:"\u914d\u7f6e\u9879\u7c7b\u578b",id:"\u914d\u7f6e\u9879\u7c7b\u578b",level:2},{value:"moonbase \u793a\u4f8b",id:"moonbase-\u793a\u4f8b",level:2}],u={toc:s},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chaintype"},"chainType"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,o.kt)("p",null,"everPay \u652f\u6301 ethereum evm \u517c\u5bb9\u94fe\u3002\u5145\u503c\u65f6\uff0c\u4f7f\u7528\u5bf9\u5e94\u94fe\u7684\u5e01\u79cd\u8fdb\u884c\u5145\u503c"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879\u7c7b\u578b"},"\u914d\u7f6e\u9879\u7c7b\u578b"),(0,o.kt)("p",null,"\u5f53\u524d\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"ethereum"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arweave"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"moon")),(0,o.kt)("h2",{id:"moonbase-\u793a\u4f8b"},"moonbase \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const providerURL = 'https://rpc.api.moonbase.moonbeam.network'\n// Define Provider\nconst provider = new ethers.providers.StaticJsonRpcProvider(providerURL, {\n  chainId: 1287,\n  name: 'moonbase-alphanet'\n})\nconst signer = new ethers.Wallet(ethWalletHasUSDT.privateKey, provider)\n\nconst everpay = new Everpay({\n  account: ethWalletHasUSDT.address,\n  chainType: 'moon',\n  ethConnectedSigner: signer,\n  debug: true\n})\n\neverpay.deposit({\n  symbol: 'dev',\n  amount: '0.01'\n}).then(ethTx => {\n  console.log('ethTx', ethTx)\n})\n")))}d.isMDXComponent=!0}}]);