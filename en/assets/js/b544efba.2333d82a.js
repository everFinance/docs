(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5166],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1912:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:11},l="swapPrice",s={unversionedId:"sdk/everpay-js/basic-api/swapPrice",id:"sdk/everpay-js/basic-api/swapPrice",isDocsHomePage:!1,title:"swapPrice",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/swapPrice.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/swapPrice",permalink:"/en/docs/sdk/everpay-js/basic-api/swapPrice",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/basic-api/swapPrice.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sdk",previous:{title:"swapInfo",permalink:"/en/docs/sdk/everpay-js/basic-api/swapInfo"},next:{title:"getEverpayTxWithoutSig",permalink:"/en/docs/sdk/everpay-js/tool-api/getEverpayTxWithoutSig"}},u=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return",id:"return",children:[{value:"Return Type",id:"return-type",children:[]},{value:"Return Fields",id:"return-fields",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example return",id:"example-return",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swapprice"},"swapPrice"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get the number of currencies supported by everPay Swap"),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#swappriceparams"},"SwapPriceParams")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", which is everPay Swap pool received (i.e. assets transferred out by users)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", which transferred out from the everPay Swap pool (i.e., assets received by the user)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally, the amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Not uint type, which has been processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals"),". After passing ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount")," is no longer passed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally, the amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Not uint type, which has been processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals"),". After passing ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount")," is no longer passed")))),(0,i.kt)("h2",{id:"return"},"Return"),(0,i.kt)("h3",{id:"return-type"},"Return Type"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#swappriceresult"},"SwapPriceResult")),(0,i.kt)("h3",{id:"return-fields"},"Return Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"indicativePrice"),(0,i.kt)("td",{parentName:"tr",align:null},"Reference price when the exchange quantity is ",(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spreadPercent"),(0,i.kt)("td",{parentName:"tr",align:null},"The price difference between the current exchange quantity and the ",(0,i.kt)("inlineCode",{parentName:"td"},"indicativePrice")," reference price when the quantity is ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"spreadPercent * 100")," is the percentage of price difference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", which is everPay Swap pool received (i.e. assets transferred out by users)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},"Token ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", which transferred out from the everPay Swap pool (i.e., assets received by the user)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Not uint type, which has been processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Not uint type, which has been processed by ",(0,i.kt)("inlineCode",{parentName:"td"},"decimals"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.swapPrice({\n  tokenIn: 'ETH',\n  tokenOut: 'USDT',\n  tokenInAmount: '0.111'\n}).then(console.log)\n")),(0,i.kt)("h2",{id:"example-return"},"Example return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  tokenIn: 'ETH',\n  tokenOut: 'USDT',\n  tokenInAmount: '0.111',\n  tokenOutAmount: '326.213052',\n  indicativePrice: '3031.5246998419752',\n  spreadPercent: '0.010568240305771373'\n}\n")))}d.isMDXComponent=!0}}]);