(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[351],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var N=t.createContext({}),_=function(e){var n=t.useContext(N),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=_(e.components);return t.createElement(N.Provider,{value:n},e.children)},E={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},O=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,N=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),O=_(r),p=o,u=O["".concat(N,".").concat(p)]||O[p]||E[p]||a;return r?t.createElement(u,i(i({ref:n},s),{},{components:r})):t.createElement(u,i({ref:n},s))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=O;var c={};for(var N in n)hasOwnProperty.call(n,N)&&(c[N]=n[N]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var _=2;_<a;_++)i[_]=r[_];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}O.displayName="MDXCreateElement"},4425:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return N},metadata:function(){return _},toc:function(){return s},default:function(){return O}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:7},N="\u9519\u8bef",_={unversionedId:"everpay-js/errors",id:"everpay-js/errors",isDocsHomePage:!1,title:"\u9519\u8bef",description:"\u4ecb\u7ecd",source:"@site/docs/everpay-js/errors.md",sourceDirName:"everpay-js",slug:"/everpay-js/errors",permalink:"/zh-cn/docs/everpay-js/errors",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/errors.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"everpay-js",previous:{title:"\u7c7b\u578b",permalink:"/zh-cn/docs/everpay-js/types"}},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u9519\u8bef\u4fe1\u606f",id:"\u9519\u8bef\u4fe1\u606f",children:[]},{value:"arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef",id:"arconnect-\u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef",children:[]}],E={toc:s};function O(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},E,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9519\u8bef"},"\u9519\u8bef"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5185\u7f6e\u4e86\u9519\u8bef\u8fd4\u56de\uff0c\u5305\u62ec\u90e8\u5206 arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef\u3002"),(0,a.kt)("h2",{id:"\u9519\u8bef\u4fe1\u606f"},"\u9519\u8bef\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ERRORS {\n  INVALID_CONFIG_PARAMS = 'INVALID_CONFIG_PARAMS',\n  REQUEST_5S_TIMEOUT = 'REQUEST_5S_TIMEOUT',\n  ETH_SIGENER_NOT_FOUND = 'ETH_SIGENER_NOT_FOUND',\n  AR_JWK_NOT_FOUND = 'AR_JWK_NOT_FOUND',\n  TO_NOT_FOUND = 'TO_NOT_FOUND',\n  SYMBOL_NOT_FOUND = 'SYMBOL_NOT_FOUND',\n  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',\n  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',\n  EVERHASH_NOT_FOUND = 'EVERHASH_NOT_FOUND',\n  CHAIN_TX_HASH_NOT_FOUND = 'CHAIN_TX_HASH_NOT_FOUND',\n  INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE',\n  AMOUNT_INVALID = 'AMOUNT_INVALID',\n  WITHDRAW_AMOUNT_LESS_THAN_FEE = 'WITHDRAW_AMOUNT_LESS_THAN_FEE'\n}\n")),(0,a.kt)("h2",{id:"arconnect-\u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef"},"arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"enum ERRORS {\n  PLEASE_INSTALL_ARCONNECT = 'PLEASE_INSTALL_ARCONNECT',\n  ACCESS_ADDRESS_PERMISSION_NEEDED = 'ACCESS_ADDRESS_PERMISSION_NEEDED',\n  ACCESS_PUBLIC_KEY_PERMISSION_NEEDED = 'ACCESS_PUBLIC_KEY_PERMISSION_NEEDED',\n  SIGNATURE_PERMISSION_NEEDED = 'NEED_SIGNATURE_PERMISSION',\n  SIGN_TRANSACTION_PERMISSION_NEEDED = 'SIGN_TRANSACTION_PERMISSION_NEEDED',\n  SIGNATURE_FAILED = 'SIGNATURE_FAILED',\n  TRANSACTION_POST_ERROR = 'TRANSACTION_POST_ERROR',\n  ACCESS_PUBLIC_KEY_FAILED = 'ACCESS_PUBLIC_KEY_FAILED'\n}\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u56e0 arConnect \u5f53\u524d\u95ee\u9898\u8f83\u591a\uff0c\u5f53\u524d\u5728 arConnect \u57fa\u7840\u4e0a\uff0c\u653e\u7f6e\u4e86\u4e00\u4e9b\u9519\u8bef"))))}O.isMDXComponent=!0}}]);