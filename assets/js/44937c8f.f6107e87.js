"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9394],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>b});var t=r(7294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=l,b=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return r?t.createElement(b,o(o({ref:n},u),{},{components:r})):t.createElement(b,o({ref:n},u))}));function b(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9999:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=r(7462),l=(r(7294),r(3905));const i={sidebar_position:3},o="\u6253\u5305",a={unversionedId:"guide/SDK/everpay-js/build",id:"guide/SDK/everpay-js/build",title:"\u6253\u5305",description:"\u56e0 everpay-js \u5f15\u7528\u7684\u5e93\u4e2d\uff0c\u4f7f\u7528\u5f88\u591a nodeJS \u5185\u7f6e\u6a21\u5757\uff0c\u4f8b\u5982 buffer, stream, crypto, path \u7b49\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u914d\u7f6e vite.config.js \u6216 webpack.config.js \u6765\u652f\u6301\u4f7f\u7528 nodeJS \u5185\u7f6e\u6a21\u5757\u3002",source:"@site/docs/guide/SDK/everpay-js/build.md",sourceDirName:"guide/SDK/everpay-js",slug:"/guide/SDK/everpay-js/build",permalink:"/docs/guide/SDK/everpay-js/build",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/docs/guide/SDK/everpay-js/build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"\u5b89\u88c5\u4e0e\u4f7f\u7528",permalink:"/docs/guide/SDK/everpay-js/installation"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/guide/SDK/everpay-js/configuration/intro"}},p={},s=[{value:"vite",id:"vite",level:2},{value:"webpack 5.x",id:"webpack-5x",level:2},{value:"vue-cli@5.x",id:"vue-cli5x",level:3},{value:"create-react-app",id:"create-react-app",level:3},{value:"webpack@4.x",id:"webpack4x",level:2}],u={toc:s},d="wrapper";function c(e){let{components:n,...r}=e;return(0,l.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6253\u5305"},"\u6253\u5305"),(0,l.kt)("p",null,"\u56e0 everpay-js \u5f15\u7528\u7684\u5e93\u4e2d\uff0c\u4f7f\u7528\u5f88\u591a nodeJS \u5185\u7f6e\u6a21\u5757\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stream"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"crypto"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," \u7b49\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"vite.config.js")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," \u6765\u652f\u6301\u4f7f\u7528 nodeJS \u5185\u7f6e\u6a21\u5757\u3002"),(0,l.kt)("h2",{id:"vite"},"vite"),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"vite.config.js")," \u8fdb\u884c\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// yarn add buffer\n// yarn add --dev @esbuild-plugins/node-globals-polyfill\n// yarn add --dev @esbuild-plugins/node-modules-polyfill\nimport { defineConfig, loadEnv } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'\nimport { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'\n// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill\nimport rollupNodePolyFill from 'rollup-plugin-node-polyfills'\n\n// https://vitejs.dev/config/\nexport default defineConfig(({ mode }) => {\n  const env = loadEnv(mode, process.cwd())\n  const processEnvValues = {\n    'process.env': Object.entries(env).reduce((prev, [key, val]) => {\n      return {\n        ...prev,\n        [key]: val\n      }\n    }, {})\n  }\n  return {\n    plugins: [vue()],\n    define: Object.assign(processEnvValues, { global: {} }),\n    resolve: {\n      alias: {\n        util: 'rollup-plugin-node-polyfills/polyfills/util',\n        buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',\n        process: 'rollup-plugin-node-polyfills/polyfills/process-es6'\n      }\n    },\n    optimizeDeps: {\n      esbuildOptions: {\n        plugins: [\n          NodeGlobalsPolyfillPlugin({\n            process: true,\n            buffer: true\n          }),\n          NodeModulesPolyfillPlugin()\n        ]\n      }\n    },\n    build: {\n      rollupOptions: {\n        plugins: [\n          // Enable rollup polyfills plugin\n          // used during production bundling\n          rollupNodePolyFill()\n        ]\n      }\n    }\n  }\n})\n")),(0,l.kt)("h2",{id:"webpack-5x"},"webpack 5.x"),(0,l.kt)("h3",{id:"vue-cli5x"},(0,l.kt)("a",{parentName:"h3",href:"mailto:vue-cli@5.x"},"vue-cli@5.x")),(0,l.kt)("p",null,"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"vue.config.js")," \u8fdb\u884c\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// yarn add buffer\n// yarn add stream-browserify\nconst { defineConfig } = require('@vue/cli-service')\nconst webpack = require('webpack')\nmodule.exports = defineConfig({\n  transpileDependencies: true,\n  configureWebpack: {\n    resolve: {\n      alias: {\n        stream: 'stream-browserify'\n      },\n      fallback: {\n        buffer: require.resolve('buffer/'),\n        stream: require.resolve('stream-browserify')\n      }\n    },\n    plugins: [\n      new webpack.ProvidePlugin({\n        Buffer: ['buffer', 'Buffer']\n      })\n    ]\n  }\n})\n")),(0,l.kt)("p",null,"\u540e\u7eed\u82e5\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"crypto")," \u7b49 ",(0,l.kt)("inlineCode",{parentName:"p"},"not defined")," \u60c5\u51b5\uff0c\u53ef\u4f7f\u7528\u76f8\u540c\u65b9\u6cd5\u5f15\u5165\u3002\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js"},"https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js")),(0,l.kt)("h3",{id:"create-react-app"},"create-react-app"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn eject"),"\u547d\u4ee4\uff0c\u76ee\u5f55\u591a\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u5939\uff0c\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\uff0c\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"reslove")," \u6dfb\u52a0: ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// yarn add buffer\n{\n  reslove:{\n    // ...\n    alias:{\n      stream: 'stream-browserify'\n    },\n    fallback: {\n      buffer: require.resolve('buffer/'),\n      stream: require.resolve('stream-browserify')\n    },\n  },\n  //...\n  plugins: [\n    new webpack.ProvidePlugin({\n      Buffer: ['buffer', 'Buffer']\n    })\n  ]\n}\n")),(0,l.kt)("p",null,"\u540e\u7eed\u82e5\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"crypto")," \u7b49 ",(0,l.kt)("inlineCode",{parentName:"p"},"not defined")," \u60c5\u51b5\uff0c\u53ef\u4f7f\u7528\u76f8\u540c\u65b9\u6cd5\u5f15\u5165\u3002\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js"},"https://github.com/Bundlr-Network/arbundles/blob/master/webpack.config.js")),(0,l.kt)("h2",{id:"webpack4x"},(0,l.kt)("a",{parentName:"h2",href:"mailto:webpack@4.x"},"webpack@4.x")),(0,l.kt)("p",null,"\u6ca1\u95ee\u9898\uff0c\u6253\u5305\u6b63\u5e38\u3002"))}c.isMDXComponent=!0}}]);