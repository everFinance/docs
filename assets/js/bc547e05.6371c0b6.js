"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2019],{3905:function(e,n,r){r.d(n,{Zo:function(){return T},kt:function(){return I}});var t=r(7294);function _(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){_(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e,n){if(null==e)return{};var r,t,_=function(e,n){if(null==e)return{};var r,t,_={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(_[r]=e[r]);return _}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}var a=t.createContext({}),O=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):E(E({},n),e)),r},T=function(e){var n=O(e.components);return t.createElement(a.Provider,{value:n},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,_=e.mdxType,o=e.originalType,a=e.parentName,T=N(e,["components","mdxType","originalType","parentName"]),c=O(r),s=_,I=c["".concat(a,".").concat(s)]||c[s]||i[s]||o;return r?t.createElement(I,E(E({ref:n},T),{},{components:r})):t.createElement(I,E({ref:n},T))}));function I(e,n){var r=arguments,_=n&&n.mdxType;if("string"==typeof e||_){var o=r.length,E=new Array(o);E[0]=s;var N={};for(var a in n)hasOwnProperty.call(n,a)&&(N[a]=n[a]);N.originalType=e,N[c]="string"==typeof e?e:_,E[1]=N;for(var O=2;O<o;O++)E[O]=r[O];return t.createElement.apply(null,E)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1948:function(e,n,r){r.r(n),r.d(n,{assets:function(){return a},contentTitle:function(){return E},default:function(){return i},frontMatter:function(){return o},metadata:function(){return N},toc:function(){return O}});var t=r(3117),_=(r(7294),r(3905));const o={sidebar_position:9},E="\u9519\u8bef",N={unversionedId:"sdk/everpay-js/errors",id:"sdk/everpay-js/errors",title:"\u9519\u8bef",description:"\u4ecb\u7ecd",source:"@site/docs/sdk/everpay-js/errors.md",sourceDirName:"sdk/everpay-js",slug:"/sdk/everpay-js/errors",permalink:"/docs/sdk/everpay-js/errors",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/errors.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sdk",previous:{title:"\u7c7b\u578b",permalink:"/docs/sdk/everpay-js/types"}},a={},O=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u9519\u8bef\u4fe1\u606f",id:"\u9519\u8bef\u4fe1\u606f",level:2},{value:"arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef",id:"arconnect-\u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef",level:2}],T={toc:O},c="wrapper";function i(e){let{components:n,...r}=e;return(0,_.kt)(c,(0,t.Z)({},T,r,{components:n,mdxType:"MDXLayout"}),(0,_.kt)("h1",{id:"\u9519\u8bef"},"\u9519\u8bef"),(0,_.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,_.kt)("p",null,"\u5185\u7f6e\u4e86\u9519\u8bef\u8fd4\u56de\uff0c\u5305\u62ec\u90e8\u5206 arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef\u3002"),(0,_.kt)("h2",{id:"\u9519\u8bef\u4fe1\u606f"},"\u9519\u8bef\u4fe1\u606f"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ERRORS {\n  INVALID_CONFIG_PARAMS = 'INVALID_CONFIG_PARAMS',\n  REQUEST_5S_TIMEOUT = 'REQUEST_5S_TIMEOUT',\n  ETH_SIGENER_NOT_FOUND = 'ETH_SIGENER_NOT_FOUND',\n  AR_JWK_NOT_FOUND = 'AR_JWK_NOT_FOUND',\n  TO_NOT_FOUND = 'TO_NOT_FOUND',\n  SYMBOL_NOT_FOUND = 'SYMBOL_NOT_FOUND',\n  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',\n  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',\n  EVERHASH_NOT_FOUND = 'EVERHASH_NOT_FOUND',\n  CHAIN_TX_HASH_NOT_FOUND = 'CHAIN_TX_HASH_NOT_FOUND',\n  INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE',\n  INVALID_ACTION = 'INVALID_ACTION',\n  INVALID_AMOUNT = 'INVALID_AMOUNT',\n  WITHDRAW_AMOUNT_LESS_THAN_FEE = 'WITHDRAW_AMOUNT_LESS_THAN_FEE',\n  INSUFFICIENT_QUICK_WITHDRAWAL_AMOUNT = 'INSUFFICIENT_QUICK_WITHDRAWAL_AMOUNT',\n  WITHDRAW_TOKEN_NOT_SUPPORT_QUICK_MODE = 'WITHDRAW_TOKEN_NOT_SUPPORT_QUICK_MODE',\n  DEPOSIT_ARWEAVE_PST_MUST_BE_INTEGER = 'DEPOSIT_ARWEAVE_PST_MUST_BE_INTEGER',\n  PST_WITHDARW_TO_ARWEAVE_MUST_BE_INTEGER = 'PST_WITHDARW_TO_ARWEAVE_MUST_BE_INTEGER'\n}\n")),(0,_.kt)("h2",{id:"arconnect-\u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef"},"arConnect \u7279\u6b8a\u5904\u7406\u7684\u9519\u8bef"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-ts"},"enum ERRORS {\n  PLEASE_INSTALL_ARCONNECT = 'PLEASE_INSTALL_ARCONNECT',\n  ACCESS_ADDRESS_PERMISSION_NEEDED = 'ACCESS_ADDRESS_PERMISSION_NEEDED',\n  ACCESS_PUBLIC_KEY_PERMISSION_NEEDED = 'ACCESS_PUBLIC_KEY_PERMISSION_NEEDED',\n  SIGNATURE_PERMISSION_NEEDED = 'NEED_SIGNATURE_PERMISSION',\n  SIGN_TRANSACTION_PERMISSION_NEEDED = 'SIGN_TRANSACTION_PERMISSION_NEEDED',\n  SIGNATURE_FAILED = 'SIGNATURE_FAILED',\n  TRANSACTION_POST_ERROR = 'TRANSACTION_POST_ERROR',\n  ACCESS_PUBLIC_KEY_FAILED = 'ACCESS_PUBLIC_KEY_FAILED'\n}\n")),(0,_.kt)("admonition",{type:"danger"},(0,_.kt)("p",{parentName:"admonition"},"\u56e0 arConnect \u5f53\u524d\u95ee\u9898\u8f83\u591a\uff0c\u5f53\u524d\u5728 arConnect \u57fa\u7840\u4e0a\uff0c\u653e\u7f6e\u4e86\u4e00\u4e9b\u9519\u8bef")))}i.isMDXComponent=!0}}]);