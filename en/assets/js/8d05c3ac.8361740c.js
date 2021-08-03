(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8616],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(t),d=o,y=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8112:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:1},u="Introduction",s={unversionedId:"sdk/everpay-js/configuration/intro",id:"sdk/everpay-js/configuration/intro",isDocsHomePage:!1,title:"Introduction",description:"everpay-js creates configuration items for Everpay instances. Configuration items contain: debug, account, ethConnectedSigner, arJWK. The configuration type is Config",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/configuration/intro.md",sourceDirName:"sdk/everpay-js/configuration",slug:"/sdk/everpay-js/configuration/intro",permalink:"/en/docs/sdk/everpay-js/configuration/intro",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/configuration/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sdk",previous:{title:"Installation and usage",permalink:"/en/docs/sdk/everpay-js/installation"},next:{title:"debug",permalink:"/en/docs/sdk/everpay-js/configuration/debug"}},p=[],f={toc:p};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"everpay-js creates configuration items for Everpay instances. Configuration items contain: ",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arJWK"),". The configuration type is ",(0,i.kt)("a",{parentName:"p",href:"../types#config"},(0,i.kt)("inlineCode",{parentName:"a"},"Config"))))}l.isMDXComponent=!0}}]);