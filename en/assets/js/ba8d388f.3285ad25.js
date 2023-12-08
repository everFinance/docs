"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5879],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>u});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?_(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function E(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},_=Object.keys(e);for(t=0;t<_.length;t++)n=_[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(t=0;t<_.length;t++)n=_[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),N=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=N(e.components);return t.createElement(i.Provider,{value:r},e.children)},c="mdxType",O={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},T=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,_=e.originalType,i=e.parentName,s=E(e,["components","mdxType","originalType","parentName"]),c=N(n),T=o,u=c["".concat(i,".").concat(T)]||c[T]||O[T]||_;return n?t.createElement(u,a(a({ref:r},s),{},{components:n})):t.createElement(u,a({ref:r},s))}));function u(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var _=n.length,a=new Array(_);a[0]=T;var E={};for(var i in r)hasOwnProperty.call(r,i)&&(E[i]=r[i]);E.originalType=e,E[c]="string"==typeof e?e:o,a[1]=E;for(var N=2;N<_;N++)a[N]=n[N];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}T.displayName="MDXCreateElement"},7983:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>O,frontMatter:()=>_,metadata:()=>E,toc:()=>N});var t=n(7462),o=(n(7294),n(3905));const _={sidebar_position:9},a="Errors",E={unversionedId:"guide/SDK/everpay-js/errors",id:"guide/SDK/everpay-js/errors",title:"Errors",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/errors.md",sourceDirName:"guide/SDK/everpay-js",slug:"/guide/SDK/everpay-js/errors",permalink:"/en/docs/guide/SDK/everpay-js/errors",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/errors.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"guide",previous:{title:"Types",permalink:"/en/docs/guide/SDK/everpay-js/types"},next:{title:"Demo",permalink:"/en/docs/guide/SDK/everpay-js/demo"}},i={},N=[{value:"Introduction",id:"introduction",level:2},{value:"Error messages",id:"error-messages",level:2},{value:"ArConnect Special Handling Errors",id:"arconnect-special-handling-errors",level:2},{value:"Smart Account Model",id:"smart-account-model",level:2}],s={toc:N},c="wrapper";function O(e){let{components:r,...n}=e;return(0,o.kt)(c,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Error returns are built in, including some ArConnect special handling errors."),(0,o.kt)("h2",{id:"error-messages"},"Error messages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ERRORS {\n  INVALID_CONFIG_PARAMS = 'INVALID_CONFIG_PARAMS',\n  REQUEST_5S_TIMEOUT = 'REQUEST_5S_TIMEOUT',\n  ETH_SIGNER_NOT_FOUND = 'ETH_SIGNER_NOT_FOUND',\n  AR_JWK_NOT_FOUND = 'AR_JWK_NOT_FOUND',\n  TO_NOT_FOUND = 'TO_NOT_FOUND',\n  SYMBOL_NOT_FOUND = 'SYMBOL_NOT_FOUND',\n  TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND',\n  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',\n  EVERHASH_NOT_FOUND = 'EVERHASH_NOT_FOUND',\n  CHAIN_TX_HASH_NOT_FOUND = 'CHAIN_TX_HASH_NOT_FOUND',\n  INVALID_ACCOUNT_TYPE = 'INVALID_ACCOUNT_TYPE',\n  INVALID_ACTION = 'INVALID_ACTION',\n  INVALID_AMOUNT = 'INVALID_AMOUNT',\n  WITHDRAW_AMOUNT_LESS_THAN_FEE = 'WITHDRAW_AMOUNT_LESS_THAN_FEE',\n  INSUFFICIENT_QUICK_WITHDRAWAL_AMOUNT = 'INSUFFICIENT_QUICK_WITHDRAWAL_AMOUNT',\n  WITHDRAW_TOKEN_NOT_SUPPORT_QUICK_MODE = 'WITHDRAW_TOKEN_NOT_SUPPORT_QUICK_MODE',\n  DEPOSIT_ARWEAVE_PST_MUST_BE_INTEGER = 'DEPOSIT_ARWEAVE_PST_MUST_BE_INTEGER',\n  PST_WITHDARW_TO_ARWEAVE_MUST_BE_INTEGER = 'PST_WITHDARW_TO_ARWEAVE_MUST_BE_INTEGER'\n}\n")),(0,o.kt)("h2",{id:"arconnect-special-handling-errors"},"ArConnect Special Handling Errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"enum ERRORS {\n  PLEASE_INSTALL_ARCONNECT = 'PLEASE_INSTALL_ARCONNECT',\n  ACCESS_ADDRESS_PERMISSION_NEEDED = 'ACCESS_ADDRESS_PERMISSION_NEEDED',\n  ACCESS_PUBLIC_KEY_PERMISSION_NEEDED = 'ACCESS_PUBLIC_KEY_PERMISSION_NEEDED',\n  SIGNATURE_PERMISSION_NEEDED = 'NEED_SIGNATURE_PERMISSION',\n  SIGN_TRANSACTION_PERMISSION_NEEDED = 'SIGN_TRANSACTION_PERMISSION_NEEDED',\n  SIGNATURE_FAILED = 'SIGNATURE_FAILED',\n  TRANSACTION_POST_ERROR = 'TRANSACTION_POST_ERROR',\n  ACCESS_PUBLIC_KEY_FAILED = 'ACCESS_PUBLIC_KEY_FAILED'\n}\n")),(0,o.kt)("h2",{id:"smart-account-model"},"Smart Account Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"'ACCOUNT_NOT_RECEIVE'\n'MESSAGEDATA_NOT_RECEIVE'\n'ACCOUNT_NOT_MATCH'\n'CANCEL_SIGN'\n'POPUP_CLOSED'\n'AUTHORIZE_TIMEOUT'\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Due to some current issues with ArConnect, everPay team has customized some ArConnect errors")))}O.isMDXComponent=!0}}]);