(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3233],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),v=o,m=d["".concat(c,".").concat(v)]||d[v]||l[v]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9234:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],p={sidebar_position:2},c="Environment",s={unversionedId:"sdk/server-api/environment",id:"sdk/server-api/environment",isDocsHomePage:!1,title:"Environment",description:"Development environment",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/environment.md",sourceDirName:"sdk/server-api",slug:"/sdk/server-api/environment",permalink:"/en/docs/sdk/server-api/environment",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/environment.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdk",previous:{title:"Introduction",permalink:"/en/docs/sdk/server-api/intro"},next:{title:"Introduction",permalink:"/en/docs/sdk/server-api/basic-api/intro"}},u=[{value:"Development environment",id:"development-environment",children:[]},{value:"Production environment",id:"production-environment",children:[]}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment"},"Environment"),(0,i.kt)("h2",{id:"development-environment"},"Development environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://api-dev.everpay.io"},"https://api-dev.everpay.io")),(0,i.kt)("li",{parentName:"ul"},"expressEndpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://express-dev.everpay.io"},"https://express-dev.everpay.io"))),(0,i.kt)("h2",{id:"production-environment"},"Production environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"endpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://api.everpay.io"},"https://api.everpay.io")),(0,i.kt)("li",{parentName:"ul"},"expressEndpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://express.everpay.io"},"https://express.everpay.io"))))}d.isMDXComponent=!0}}]);