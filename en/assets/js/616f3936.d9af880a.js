"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),v=i,m=s["".concat(c,".").concat(v)]||s[v]||d[v]||o;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[s]="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2},a="Environment",p={unversionedId:"guide/server-api/environment",id:"guide/server-api/environment",title:"Environment",description:"Development environment",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/server-api/environment.md",sourceDirName:"guide/server-api",slug:"/guide/server-api/environment",permalink:"/en/docs/guide/server-api/environment",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/server-api/environment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Introduction",permalink:"/en/docs/guide/server-api/intro"},next:{title:"Introduction",permalink:"/en/docs/guide/server-api/basic-api/intro"}},c={},u=[{value:"Development environment",id:"development-environment",level:2},{value:"Production environment",id:"production-environment",level:2}],l={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment"},"Environment"),(0,i.kt)("h2",{id:"development-environment"},"Development environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://api-dev.everpay.io"},"https://api-dev.everpay.io"))),(0,i.kt)("h2",{id:"production-environment"},"Production environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://api.everpay.io"},"https://api.everpay.io"))))}d.isMDXComponent=!0}}]);