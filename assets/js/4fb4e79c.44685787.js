(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8233],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2385:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),o=["components"],i={sidebar_position:3},u="account",p={unversionedId:"sdk/everpay-js/configuration/account",id:"sdk/everpay-js/configuration/account",isDocsHomePage:!1,title:"account",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/sdk/everpay-js/configuration/account.md",sourceDirName:"sdk/everpay-js/configuration",slug:"/sdk/everpay-js/configuration/account",permalink:"/docs/sdk/everpay-js/configuration/account",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/configuration/account.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"debug",permalink:"/docs/sdk/everpay-js/configuration/debug"},next:{title:"ethConnectedSigner",permalink:"/docs/sdk/everpay-js/configuration/ethConnectedSigner"}},l=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",children:[]},{value:"\u57fa\u7840\u67e5\u8be2API \u793a\u4f8b",id:"\u57fa\u7840\u67e5\u8be2api-\u793a\u4f8b",children:[{value:"\u9ed8\u8ba4\u67e5\u8be2 account \u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f",id:"\u9ed8\u8ba4\u67e5\u8be2-account-\u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f",children:[]},{value:"\u8986\u76d6\u67e5\u8be2\u53e6\u4e00\u4e2a account \u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f",id:"\u8986\u76d6\u67e5\u8be2\u53e6\u4e00\u4e2a-account-\u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f",children:[]}]},{value:"\u64cd\u4f5c\u7c7bAPI \u793a\u4f8b",id:"\u64cd\u4f5c\u7c7bapi-\u793a\u4f8b",children:[]}],s={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"account"},"account"),(0,c.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5f53\u8c03\u7528 everpay-js ",(0,c.kt)("a",{parentName:"li",href:"../basic-api/intro"},"\u57fa\u7840\u67e5\u8be2API")," \u65f6\uff0c\u6b64 ",(0,c.kt)("inlineCode",{parentName:"li"},"account")," \u914d\u7f6e\u9879\u4f5c\u4e3a\u9ed8\u8ba4\u7684 account \u53c2\u6570\uff0c\u4f20\u9012\u7ed9 \u57fa\u7840\u67e5\u8be2API"),(0,c.kt)("li",{parentName:"ul"},"\u5f53\u8c03\u7528 everpay-js ",(0,c.kt)("a",{parentName:"li",href:"../operation-api/intro"},"\u64cd\u4f5c\u7c7bAPI")," \uff08everpay\u5145\u503c\u3001\u8f6c\u8d26\u3001\u63d0\u73b0\uff09\u65f6\uff0c\u6b64 ",(0,c.kt)("inlineCode",{parentName:"li"},"account")," \u914d\u7f6e\u9879 ",(0,c.kt)("strong",{parentName:"li"},"\u5fc5\u987b\u4f20\u9012\uff0c\u5e76\u4e14\u6ee1\u8db3\u5982\u4e0b\u94b1\u5305\u5730\u5740\u4e4b\u4e00"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"\u4e0e ethConnectedSigner \u5bf9\u5e94\u7684 ethereum \u94b1\u5305\u5730\u5740\u4e00\u81f4"),(0,c.kt)("li",{parentName:"ul"},"\u4e0e arJWK \u5bf9\u5e94\u7684 arweave \u94b1\u5305\u5730\u5740\u4e00\u81f4")))),(0,c.kt)("h2",{id:"\u57fa\u7840\u67e5\u8be2api-\u793a\u4f8b"},"\u57fa\u7840\u67e5\u8be2API \u793a\u4f8b"),(0,c.kt)("h3",{id:"\u9ed8\u8ba4\u67e5\u8be2-account-\u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f"},"\u9ed8\u8ba4\u67e5\u8be2 account \u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: false,\n  account: '0x26361130d5d6E798E9319114643AF8c868412859'\n})\n// \u67e5\u8be2 \u8d26\u6237 0x26361130d5d6E798E9319114643AF8c868412859 \u5728 everpay \u6b63\u5f0f\u73af\u5883\u4e0a\u7684 ETH \u8d44\u4ea7\u4f59\u989d\neverpay.balance({\n  symbol: 'ETH'\n})\n")),(0,c.kt)("h3",{id:"\u8986\u76d6\u67e5\u8be2\u53e6\u4e00\u4e2a-account-\u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f"},"\u8986\u76d6\u67e5\u8be2\u53e6\u4e00\u4e2a account \u5bf9\u5e94\u7684\u57fa\u7840\u4fe1\u606f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: false,\n  account: '0x26361130d5d6E798E9319114643AF8c868412859'\n})\n\n// \u67e5\u8be2 \u53e6\u4e00\u4e2a\u8d26\u6237 0x2ca81e1253f9426c62Df68b39a22A377164eeC92 \u5728 everpay \u6b63\u5f0f\u73af\u5883\u4e0a\u7684 ETH \u8d44\u4ea7\u4f59\u989d\neverpay.balance({\n  symbol: 'ETH',\n  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92'\n})\n")),(0,c.kt)("h2",{id:"\u64cd\u4f5c\u7c7bapi-\u793a\u4f8b"},"\u64cd\u4f5c\u7c7bAPI \u793a\u4f8b"),(0,c.kt)("p",null,"\u8be6\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"./ethConnectedSigner"},"ethConnectedSigner")," \u6216 ",(0,c.kt)("a",{parentName:"p",href:"./arJWK"},"arJWK")," \u914d\u7f6e\u9879"))}d.isMDXComponent=!0}}]);