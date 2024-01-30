"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||s;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:7},i="verifyMessage",o={unversionedId:"guide/SDK/everpay-js/tool-api/verifyMessage",id:"guide/SDK/everpay-js/tool-api/verifyMessage",title:"verifyMessage",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/tool-api/verifyMessage.md",sourceDirName:"guide/SDK/everpay-js/tool-api",slug:"/guide/SDK/everpay-js/tool-api/verifyMessage",permalink:"/en/docs/guide/SDK/everpay-js/tool-api/verifyMessage",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/tool-api/verifyMessage.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guide",previous:{title:"hashMessage",permalink:"/en/docs/guide/SDK/everpay-js/tool-api/hashMessage"},next:{title:"Introduction",permalink:"/en/docs/guide/SDK/everpay-js/operation-api/intro"}},l={},c=[{value:"Function",id:"function",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2},{value:"EVM Example",id:"evm-example",level:3},{value:"Arweave Example",id:"arweave-example",level:3},{value:"Example of a signature for an e-mail account transfer",id:"example-of-a-signature-for-an-e-mail-account-transfer",level:3},{value:"Example of a registered signature for a mailbox account",id:"example-of-a-registered-signature-for-a-mailbox-account",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"verifymessage"},"verifyMessage"),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("p",null,"\u9a8c\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"sig")," \u7b7e\u540d\u662f\u5426\u6b63\u786e"),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"everpay.verifyMessage(params: VerifyMessageParams): Promise<VerifyMessageResult>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface VerifyMessageParams {\n  account: string\n  type: 'register' | 'sign'\n  message: string\n  sig: string\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"everPay account, which can be an e-mail address, EVM address, Arweave address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'sign'")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"'register'"),", signature type, only signatures of type ",(0,r.kt)("inlineCode",{parentName:"td"},"type: register")," returned by the ",(0,r.kt)("inlineCode",{parentName:"td"},"smartAccountAuth")," interface need to use 'register', otherwise ",(0,r.kt)("inlineCode",{parentName:"td"},"'sign'"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"signature message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sig"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of signature")))),(0,r.kt)("h2",{id:"return"},"Return"),(0,r.kt)("p",null,"Returns only if the validation was successful"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface VerifyMessageResult {\n  publicId: string\n  public: string\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"evm-example"},"EVM Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpay = new Everpay({\n  debug: true\n})\ndescribe('verifyMessage for EVM', () => {\n  test('verifyMessage EVM should be OK', async () => {\n    const account = '0xC90D9eA24864415190CCD6F91B279fbfe7A159d2'\n    const everHash = '0xdc1a35ccc02c4e94be671bc6520510b20eaef57d4b15429b62c78162b25d6f85'\n    const tx = await everpay.txByHash(everHash)\n    const message = everpay.getEverpayTxMessage(tx as any)\n    const sig = tx.sig\n    return await everpay.verifyMessage({\n      type: 'sign',\n      message,\n      account,\n      sig\n    }).then(result => {\n      expect(result.public).toBeTruthy()\n      expect(result.publicId.toLowerCase()).toBe(account.toLowerCase())\n    })\n  })\n})\n")),(0,r.kt)("h3",{id:"arweave-example"},"Arweave Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpay = new Everpay({\n  debug: true\n})\ndescribe('verifyMessage for Arweave', () => {\n  test('verifyMessage Arweave should be OK', async () => {\n    const account = '3tot2o_PcueolCwU0cVCDpBIuPC2c5F5dB0vI9zLmrM'\n    const everHash = '0xa2db76aa2b7ce48e3d3fff8a8be7a8d279bbe54602fcb530ea04b362a3e03640'\n    const tx = await everpay.txByHash(everHash)\n    const message = everpay.getEverpayTxMessage(tx as any)\n    const sig = tx.sig\n    return await everpay.verifyMessage({\n      type: 'sign',\n      message,\n      account,\n      sig\n    }).then(result => {\n      expect(result.public).toBeTruthy()\n      expect(result.publicId.toLowerCase()).toBe(account.toLowerCase())\n    })\n  })\n})\n")),(0,r.kt)("h3",{id:"example-of-a-signature-for-an-e-mail-account-transfer"},"Example of a signature for an e-mail account transfer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpay = new Everpay({\n  debug: true\n})\ndescribe('verifyMessage for FIDO2 type sign', () => {\n  test('verifyMessage FIDO2 type sign should be OK', async () => {\n    const account = 'registerforkindle@gmail.com'\n    const everHash = '0xdc9a5521098f480104b89226041dbc008aee44d04ac85e6a045c4f9b9722d137'\n    const tx = await everpay.txByHash(everHash)\n    const sig = tx.sig\n    return await everpay.verifyMessage({\n      type: 'sign',\n      message: everHash,\n      account,\n      sig\n    }).then(result => {\n      expect(result.public).toBeTruthy()\n      expect(result.publicId.toLowerCase()).toBeTruthy()\n    })\n  })\n})\n")),(0,r.kt)("h3",{id:"example-of-a-registered-signature-for-a-mailbox-account"},"Example of a registered signature for a mailbox account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const everpay = new Everpay({\n  debug: true\n})\ndescribe('verifyMessage for FIDO2 type register', () => {\n  test('verifyMessage FIDO2 type register should be OK', async () => {\n    const account = 'registerforkindle@gmail.com'\n    const everHash = '0x399c26de125202d998e493a6f93c273c235f61f37b5fc86f3a76394e6b1a40a8'\n    const tx = await everpay.txByHash(everHash)\n    const sig = tx.sig\n    return await everpay.verifyMessage({\n      type: 'register',\n      message: everHash,\n      account,\n      sig\n    }).then(result => {\n      expect(result.public).toBeTruthy()\n      expect(result.publicId.toLowerCase()).toBeTruthy()\n    })\n  })\n})\n")))}g.isMDXComponent=!0}}]);