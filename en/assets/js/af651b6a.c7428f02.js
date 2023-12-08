"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o=void 0,s={unversionedId:"guide/SDK/everpay-js/configuration/arJWK",id:"guide/SDK/everpay-js/configuration/arJWK",title:"arJWK",description:"\x3c!-- import Tabs from '@theme/Tabs'",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/configuration/arJWK.md",sourceDirName:"guide/SDK/everpay-js/configuration",slug:"/guide/SDK/everpay-js/configuration/arJWK",permalink:"/en/docs/guide/SDK/everpay-js/configuration/arJWK",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/configuration/arJWK.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guide",previous:{title:"isSmartAccount",permalink:"/en/docs/guide/SDK/everpay-js/configuration/isSmartAccount"},next:{title:"chainType",permalink:"/en/docs/guide/SDK/everpay-js/configuration/chainType"}},l={},c=[{value:"Configuration item function",id:"configuration-item-function",level:2},{value:"Configuration item function",id:"configuration-item-function-1",level:2},{value:"How to configure",id:"how-to-configure",level:2},{value:"JWKInterface mode",id:"jwkinterface-mode",level:3},{value:"Browser + ArConnect",id:"browser--arconnect",level:3},{value:"Why do I need to use <code>use_wallet</code>?",id:"why-do-i-need-to-use-use_wallet",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arjwk"},"arJWK"),(0,a.kt)("h2",{id:"configuration-item-function"},"Configuration item function"),(0,a.kt)("p",null,"This configuration item is used to operate the everPay arweave account model account via arweave wallet and to do the following for the account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"deposit: transfer ar token on arweave blockchain to everPay locker address(",(0,a.kt)("strong",{parentName:"li"},"Using Threshold cryptosystem"),") using ",(0,a.kt)("inlineCode",{parentName:"li"},"arJWK")),(0,a.kt)("li",{parentName:"ul"},"transfer: use ",(0,a.kt)("inlineCode",{parentName:"li"},"arJWK")," to call arweave ",(0,a.kt)("inlineCode",{parentName:"li"},"RSA-PSS SHA-256")," sign to secure access to the everPay account"),(0,a.kt)("li",{parentName:"ul"},"withdraw: use ",(0,a.kt)("inlineCode",{parentName:"li"},"arJWK")," to call arweave ",(0,a.kt)("inlineCode",{parentName:"li"},"RSA-PSS SHA-256")," sign to secure access to the everPay account")),(0,a.kt)("h2",{id:"configuration-item-function-1"},"Configuration item function"),(0,a.kt)("p",null,"everpay-js integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js"},"arweave-js")," for signing and sending transactions with arweave."),(0,a.kt)("p",null,"Configuration item type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ArJWK = JWKInterface | 'use_wallet'\n")),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js"},"arweave-js")," ",(0,a.kt)("inlineCode",{parentName:"p"},"JWKInterface")," as one of the type, and with a ",(0,a.kt)("inlineCode",{parentName:"p"},"'use_wallet'")," string as a parameter for adapting Chrome arweave Plugin wallet ",(0,a.kt)("a",{parentName:"p",href:"https://arconnect.io/"},"ArConnect")," (a MetaMask-like wallet tool)."),(0,a.kt)("h2",{id:"how-to-configure"},"How to configure"),(0,a.kt)("h3",{id:"jwkinterface-mode"},"JWKInterface mode"),(0,a.kt)("p",null,"Reference from ",(0,a.kt)("a",{parentName:"p",href:"https://docs.arweave.org/developers/server/http-api#sample-jwk"},"arweave Docs - Sample JWK")),(0,a.kt)("p",null,"The arweave's private key format, a KEY JSON, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arAddress = 'GRQ7swQO1AMyFgnuAPI7AvGQlW3lzuQuwlJbIpWV7xk'\nconst arJWK = {\n  kty: 'RSA',\n  e: 'AQAB',\n  n: 'ovFF6EbOtXeg7VnojIgtChgxfU6GZ16JjVj5JFHh6NGHJnq4p059BnMphcDx1mqb3yxM73FxhEszSFLcJiPzway6eIDiXuYiT-Sf_0Wl6_wDLvEmlz43psp7WYJumwpaSyiI_1FWmOVQnTnoAIKaOYKVqzUlteiECQj7XjJl0MZH16RlEfVqVpJ_8Ier4_QXIJ8Y3pe2KF3Lg9UANFU97nuvEM94CSzX-0WIju6Lykt3DBb2YtFFg4bJjOFv3T38nCZmDh8lYjm25_1qILalsB0XRoDxQy9FLxWb4zd09JsDhL0EYAQ_hNfOnQFVOBtYEHVYMCHYH6GoTcNgxmUkZPk4AfpAqZmjDzKfVJrw4Fr68pPTEQOQEzBcIWp61P21BSkhqO4QuFinkQsSH6NdTB_3FpbhYf34Hjf-iH7hdpdWo4aoRLb8eZeZcqBRZoRmlhQnOD-PVxQR_vb9rjXSjGkCWwRbsurVLWdBh_FQn0S9Q6EHqiV8nbW-R0Rk2E76JwgMFkqGUtZj8DeEqXJ2jlAvuzp56fXeAViPEtvUj1HheO8O3LxdVYCiapWWKq4qQVoRzdiyvydYSmbztgFUhekvmjNkxLNKOh71i3hFtoXycegqZ6izrUGoF2oD24lsTKsV5lV5pwfmUjVvxtHZm54bJIMfUDYbOV6yeDjYBb8',\n  d: 'EePSrJeFn4f0a8rozPEwnMCeQmdKO3Q2PwYrSJES8Ch9IbzspDXqZThksTJHeya2WXD4O3vlnkRRa5npYOimnTeVO6DO-eNjlgkAhhsEBh5jzRYeChIDMzVdCK1Y7n3a_xCCxiGMk_nteW2_qrqsKy9KtoL90nSmdoV9b9CxvBPhFGyQykF7POkV0fdbaIpGtcayCNJ4ZgMyUpWi0ZwgUhxTUtGsmLlLN2Phg-vt_jZ96h5lS-E1NCUq4ORpj018fDp9DwTdamTyz5LTwaa8F1OCWDPVCW7Ztjs1o-NVXHvejYbhQZeFz9SP804PqLrb1ubDWXmFzKdHns4aRH4bWivh9L8HwSJUl5UEXprJUpYilT0tb3VauI7Cih2LBfhU3fUIDJFYm_j9etgNcPlqt64T7_TI8elgj7-sciXa1XEqIje9Mn8spxT6lpn4nhxJ9qelERCJwiWbuPnW2VsJHeqXZTly52KQEP_UBC4z8a0tDm7HIQw7WQ-OAuNUOu8ongOHaOexkqKYIcF3f812sOIVEJufoBXUUTIvJk-buH0ytgtTjkrO64zZeIvFHa1MFU-6UXh8jipSZ617znNR2Pc1-l3s7pACdbXvy2-5VWE3psRr1L5HM4KNwm6Rs5BXXqBSifzfiJ5qNGqKabfXvPXI8wYyl3mhUQtHW6sUUl0',\n  p: '0q_DP_FzSi8JEd-NNXoIaeL5MOxmNiXmDHGNxP3noKPyr-N6h3CrK5G59Rj2vWAJMhKToz1eSQ1p0-X0Ku2DvdT5LQOGIXVPtojw0OcOI8G8SoqMGAGehaLsnV3vexwtwjLfIM99XccKAxWMA1SMuL48nuBpMUhO0MlagbrL5vfpKB9kL7XCQqspAnN_vBmQZGWYczQmBgfC6v6xGQV3xHJmL--dn-qF2XU9pKuqd0J-cKYcdLPrccdJtGLid4nrSOTDfEbr77IUI5VGWV8CFJ-n8Vki-GwUxUkJpIoRyp5DxnYtSJb7cV-xOf7kBTCEUFn5B8fb2q-d8011cgnp5Q',\n  q: 'xfzB-Yf4fa2y2q4ubJCJA5H-IG9-mr7fVRTUbj-gTqVL-I7MCDIImdAPbA-3EoIR5H70GVbAFGQJyYDq6eDeTbNs1zfnU0JPurASE3fKbOpoRdLwXwaSdRJRP9qnqUe-BzuloIzWc-dI-6TJxmHUSA1X9CtHvIdfNdKPCVFKUMrb1bv5arAI8tRbNRfy3tnbiw4wfKhYEQ1e6RPpxAR5F4We9RJ81-sIlfAy7WfliwmcGmgcPNdUinGR299CiVYKf5ktoqGFQ9n6K-v4gNZV23f33-tuD8pMVxyc3xG34j4frH57bsbm7v8Qz-92ZxHWzOUgxIVhGgSaa4E51d9m0w',\n  dp: 'yArepo4I230BbZkHKKlv56n81PkAq5UccuA2rb4u-ZXxThP9OTA_NiUtnYxQassOsB53U91m8pHr06hZR5ExL0NSO-1Go-oQ_83SaWeZQ1YmA9i83-ZZr6VcaKbSReAhimxm825PKIVd-kOxJ1BWNOtb_7Yv6v0u6IrmhproE6t8E_6KT8qSYl7Fl3A27lCPiuPz9h6jo8Imzp15ZbqNV1cPs6Ad18MDx8_L8diVCJt4FlmCV0Sl3uhMERx6zumDHzkma4-jYXmCKa8Ilr7g6NgWy8_Ipnto1VFd-H6oGexficaXhH7my2UCj4B23H6OgwSKsVqQY3mvzV3Uj6zeCQ',\n  dq: 'a0_ey6OZWnWFleYHH60PtrGw7l_AXZvLbVBG_CLcfwQ1M1oi2OZVpxkQ4t95uTxq-lCdegZ9QhAfBessaOwLUk5IVjbk2Un98RByG784JuS-8-mrg7YKOA5fn56idax_IWiBE46Cxnu8ITlmbHKmHw-sdpnm3hb50jB4evJmt3fcw_KI8_zKPORBM3vxljy7NJnSSh7s7QE0Sl0Svb427Drut6L3rAimtK5mzCseTcg9pkp707ZbClcYWfafF9VdB2A9TgMCOo6xfJEANsT18GkMH4B6PXDHBAhsNrRh2O0XOeWsfZStoyj5Mdt3b9JJfPFMW3h38yQ_lrmKYZQfJQ',\n  qi: 'aDsPYxE-JBYsYhCYXSU7WsCrnFxNsRpFMcYXdmdryYIdQUpeemChDGzVJXLnJhE4cAS9TtLcNg82xZSKZvHrnkbFpRfSJxzEnvIXW4V0LHkxkxbmM0e9B7UrpYm6LKtvEY6I7L8wHFpHdOwV6NjY925oULEV156X0r55V7N0XF-jy3rbm71DCWRh6IDRghhCZQ3aNgJxE-OtnABqasaY6CQnTDRXLkGE0kq9GCx85-92fQLHMzvrMhr9m_2MHYJ_gZehL4j95CQzhD3Zh602D0YYYwRSsU4h5HGjlmN52pe-rfTLgwCJq5295s7qUP8TTMzbZAOM_hehksHpAaFghA'\n}\n\nconst everpay = new Everpay({\n  account: arAddress,\n  chainType: 'arweave',\n  arJWK: arJWK\n})\n")),(0,a.kt)("admonition",{title:"danger Private key leakage risk",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This method passes the private key explicitly in the code, which is a security risk")),(0,a.kt)("h3",{id:"browser--arconnect"},"Browser + ArConnect"),(0,a.kt)("p",null,"Once ",(0,a.kt)("a",{parentName:"p",href:"https://arconnect.io/"},"ArConnect")," is installed in the user's browser, you can use the pass ",(0,a.kt)("inlineCode",{parentName:"p"},"arJWK: 'use_wallet'")," to specify the use of ",(0,a.kt)("a",{parentName:"p",href:"https://arconnect.io/"},"ArConnect")," for arweave transfers (corresponding to everPay deposit), and signature (for everPay transfer and withdraw) operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const checkArPermissions = async (permissions: string[] | string): Promise<void> => {\n  let existingPermissions: string[] = []\n  const isString = (content: any) => {\n    return Object.prototype.toString.call(content) === \"[object String]\"\n  }\n  permissions = isString(permissions) ? [permissions] : permissions\n\n  try {\n    existingPermissions = await window.arweaveWallet.getPermissions()\n  } catch {\n    throw new Error('PLEASE_INSTALL_ARCONNECT')\n  }\n\n  if (permissions.length === 0) {\n    return\n  }\n\n  if (\n    permissions.some((permission) => {\n      return !existingPermissions.includes(permission)\n    })\n  ) {\n    await window.arweaveWallet.connect(permissions as never[])\n  }\n}\n\nawait checkArPermissions([\n  'ACCESS_ADDRESS',\n  'ACCESS_ALL_ADDRESSES',\n  'ACCESS_PUBLIC_KEY',\n  'SIGN_TRANSACTION',\n  'SIGNATURE'\n])\n\nconst arAddress = await window.arweaveWallet.getActiveAddress()\nconst everpay = new Everpay({\n  account: arAddress,\n  chainType: 'arweave',\n  arJWK: 'use_wallet'\n})\n")),(0,a.kt)("h2",{id:"why-do-i-need-to-use-use_wallet"},"Why do I need to use ",(0,a.kt)("inlineCode",{parentName:"h2"},"use_wallet"),"?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave-js"},"arweave-js")," also supports using ",(0,a.kt)("inlineCode",{parentName:"li"},"'use_wallet'")," as a ",(0,a.kt)("inlineCode",{parentName:"li"},"jwk")," parameter on the browser side to get the arweave wallet address using ArConnect, and to do arweave transfer, signature. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave-js/search?q=use_wallet"},"arweave-js Search - use_wallet")," for details"),(0,a.kt)("li",{parentName:"ol"},"everpay-js integrates with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave-js"},"arweave-js")," to do arweave transfer, using ",(0,a.kt)("inlineCode",{parentName:"li"},"'use_wallet'")," allows ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ArweaveTeam/arweave-js"},"arweave-js")," to call ",(0,a.kt)("a",{parentName:"li",href:"https://arconnect.io/"},"ArConnect"),", thus reducing the cost of adapting ",(0,a.kt)("a",{parentName:"li",href:"https://arconnect.io/"},"ArConnect")," for developers."),(0,a.kt)("li",{parentName:"ol"},"On the web side, it is more ",(0,a.kt)("strong",{parentName:"li"},"secure")," to use ",(0,a.kt)("a",{parentName:"li",href:"https://arconnect.io/"},"ArConnect")," represented by ",(0,a.kt)("inlineCode",{parentName:"li"},"'use_wallet'"),".")))}m.isMDXComponent=!0}}]);