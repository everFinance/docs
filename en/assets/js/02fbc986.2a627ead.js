"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||s;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:8},i="Types",o={unversionedId:"guide/SDK/everpay-js/types",id:"guide/SDK/everpay-js/types",title:"Types",description:"The following types can be imported from everpay-js via typescript",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/types.md",sourceDirName:"guide/SDK/everpay-js",slug:"/guide/SDK/everpay-js/types",permalink:"/en/docs/guide/SDK/everpay-js/types",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/SDK/everpay-js/types.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"signMessage",permalink:"/en/docs/guide/SDK/everpay-js/operation-api/signMessage"},next:{title:"Errors",permalink:"/en/docs/guide/SDK/everpay-js/errors"}},l={},p=[{value:"ChainType",id:"chaintype",level:2},{value:"ArJWK",id:"arjwk",level:2},{value:"EthereumTransaction",id:"ethereumtransaction",level:2},{value:"ArweaveTransaction",id:"arweavetransaction",level:2},{value:"Config",id:"config",level:2},{value:"CrossChainInfo",id:"crosschaininfo",level:2},{value:"Token",id:"token",level:2},{value:"FeeItem",id:"feeitem",level:2},{value:"EverpayInfo",id:"everpayinfo",level:2},{value:"ExpressInfo",id:"expressinfo",level:2},{value:"EverpayAction",id:"everpayaction",level:2},{value:"InternalTransferItem",id:"internaltransferitem",level:2},{value:"BundleItem",id:"bundleitem",level:2},{value:"BundleData",id:"bundledata",level:2},{value:"BundleDataWithSigs",id:"bundledatawithsigs",level:2},{value:"EverpayTxWithoutSig",id:"everpaytxwithoutsig",level:2},{value:"EverpayTx",id:"everpaytx",level:2},{value:"EverpayActionWithDeposit",id:"everpayactionwithdeposit",level:2},{value:"EverpayTransactionStatus",id:"everpaytransactionstatus",level:2},{value:"EverpayTransaction",id:"everpaytransaction",level:2},{value:"TxsResult",id:"txsresult",level:2},{value:"BalanceParams",id:"balanceparams",level:2},{value:"BalancesParams",id:"balancesparams",level:2},{value:"BalanceItem",id:"balanceitem",level:2},{value:"DepositParams",id:"depositparams",level:2},{value:"TransferParams",id:"transferparams",level:2},{value:"WithdrawParams",id:"withdrawparams",level:2},{value:"BundleParams",id:"bundleparams",level:2},{value:"TxsParams",id:"txsparams",level:2},{value:"TxsByAccountParams",id:"txsbyaccountparams",level:2},{value:"SendEverpayTxResult",id:"sendeverpaytxresult",level:2},{value:"SignMessageResult",id:"signmessageresult",level:2},{value:"VerifyMessageParams",id:"verifymessageparams",level:2},{value:"VerifyMessageResult",id:"verifymessageresult",level:2},{value:"SmartAccountAuthResult",id:"smartaccountauthresult",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types"},"Types"),(0,r.kt)("p",null,"The following types can be ",(0,r.kt)("inlineCode",{parentName:"p"},"imported")," from everpay-js via typescript"),(0,r.kt)("h2",{id:"chaintype"},"ChainType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ChainType {\n  ethereum = 'ethereum',\n  moon = 'moon',\n  arweave = 'arweave',\n  conflux = 'conflux',\n  bsc = 'bsc',\n  platon = 'platon'\n}\n")),(0,r.kt)("h2",{id:"arjwk"},"ArJWK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type ArJWK = JWKInterface | 'use_wallet'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JWKInterface")," is sourced from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/wallet.ts#L7"},"arweave-js JWKInterface")),(0,r.kt)("h2",{id:"ethereumtransaction"},"EthereumTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TransactionResponse as EthereumTransaction } from '@ethersproject/abstract-provider'\nexport { EthereumTransaction }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionResponse")," is sourced from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse"},"ethers.js TransactionResponse")),(0,r.kt)("h2",{id:"arweavetransaction"},"ArweaveTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TransactionInterface as ArweaveTransaction } from 'arweave/node/lib/transaction'\nexport { ArweaveTransaction }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionInterface")," is sourced from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/transaction.ts#L64"},"arweave-js TransactionInterface")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Everpay")," constructor configuration items"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Config {\n  debug?: boolean\n  account?: string\n  chainType?: ChainType\n  ethConnectedSigner?: Signer\n  arJWK?: ArJWK\n  isSmartAccount?: boolean\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," is sourced from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer"},"ethers.js Signer")),(0,r.kt)("h2",{id:"crosschaininfo"},"CrossChainInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CrossChainInfo {\n  targetChainId: string\n  targetChainType: ChainType\n  targetDecimals: number\n  targetTokenId: string\n}\n")),(0,r.kt)("h2",{id:"token"},"Token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Token {\n  tag: string\n  id: string\n  symbol: string\n  decimals: number\n  totalSupply: string\n  chainID: string\n  chainType: ChainType | string\n  crossChainInfoList: {\n    [propname: string]: CrossChainInfo\n  }\n}\n")),(0,r.kt)("h2",{id:"feeitem"},"FeeItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface FeeItem {\n  tokenTag: string\n  burnFeeMap: {\n    [propname: string]: string\n  }\n  transferFee: string\n  atomicBundleFee: string\n  updatedAt: string\n}\n")),(0,r.kt)("h2",{id:"everpayinfo"},"EverpayInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayInfo {\n  ethLocker: string\n  arLocker: string\n  ethChainID: string\n  feeRecipient: string\n  owner: string\n  everRootHash: string\n  rootHash: string\n  tokenList: Token[]\n}\n")),(0,r.kt)("h2",{id:"expressinfo"},"ExpressInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface ExpressTokenItem {\n  tokenTag: string\n  withdrawFee: string\n  walletBalance: string\n}\nexport interface ExpressInfo {\n  address: string\n  withdrawTimeCost: number\n  tokens: ExpressTokenItem[]\n}\n")),(0,r.kt)("h2",{id:"everpayaction"},"EverpayAction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum EverpayAction {\n  transfer = 'transfer',\n  withdraw = 'burn',\n  bundle = 'bundle'\n}\n")),(0,r.kt)("h2",{id:"internaltransferitem"},"InternalTransferItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface InternalTransferItem {\n  tag: string\n  from: string\n  to: string\n  amount: string\n}\n")),(0,r.kt)("h2",{id:"bundleitem"},"BundleItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BundleItem {\n  amount: string\n  chainID: string\n  from: string\n  to: string\n  tag: string\n}\n")),(0,r.kt)("h2",{id:"bundledata"},"BundleData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BundleData {\n  items: BundleItem[]\n  expiration: number\n  salt: string\n  version: string\n}\n")),(0,r.kt)("h2",{id:"bundledatawithsigs"},"BundleDataWithSigs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BundleDataWithSigs extends BundleData {\n  sigs: {\n    [account: string]: string\n  }\n}\n")),(0,r.kt)("h2",{id:"everpaytxwithoutsig"},"EverpayTxWithoutSig"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTxWithoutSig {\n  tokenSymbol: string\n  action: EverpayAction\n  from: string\n  to: string\n  amount: string\n  fee: string\n  feeRecipient: string\n  nonce: string\n  tokenID: string\n  chainType: ChainType | string\n  chainID: string\n  data: string\n  version: string\n}\n")),(0,r.kt)("h2",{id:"everpaytx"},"EverpayTx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTx extends EverpayTxWithoutSig {\n  sig: string\n}\n")),(0,r.kt)("h2",{id:"everpayactionwithdeposit"},"EverpayActionWithDeposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export enum EverpayActionWithDeposit {\n  transfer = 'transfer',\n  withdraw = 'burn',\n  deposit = 'mint',\n  bundle = 'bundle'\n}\n")),(0,r.kt)("h2",{id:"everpaytransactionstatus"},"EverpayTransactionStatus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum EverpayTransactionStatus {\n  // deposit(mint) transaction, after the corresponding number of blocks confirm, status will be confirmed\n  // withdraw(burn) transaction, the backend receives the everPay Tx and status will be confirmed first\n  confirmed = 'confirmed',\n  // transaction status will be packaged only after everPay Tx storaged on arweave blockchain\n  packaged = 'packaged'\n}\n")),(0,r.kt)("h2",{id:"everpaytransaction"},"EverpayTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTransaction {\n  id: string // an arweave tx, which stored the everPay Tx information on the arweave blockchain\n  nonce: number\n  action: EverpayActionWithDeposit\n  from: string\n  to: string\n  amount: string\n  data: string\n  fee: string\n  feeRecipient: string\n  sig: string\n  everHash: string\n  status: EverpayTransactionStatus\n  timestamp: number\n  targetChainTxHash?: string\n  express: {\n    chainTxHash: string\n    withdrawFee: string\n    refundEverHash: string\n    err: string\n  }\n}\n")),(0,r.kt)("h2",{id:"txsresult"},"TxsResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsResult {\n  accid?: string\n  currentPage: number\n  totalPages: number\n  txs: EverpayTransaction[]\n}\n")),(0,r.kt)("h2",{id:"balanceparams"},"BalanceParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalanceParams {\n  tag: string\n  account?: string\n}\n")),(0,r.kt)("h2",{id:"balancesparams"},"BalancesParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalancesParams {\n  account?: string\n}\n")),(0,r.kt)("h2",{id:"balanceitem"},"BalanceItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalanceItem {\n  chainType: string\n  symbol: string\n  tag: string\n  balance: string\n  address: string\n}\n")),(0,r.kt)("h2",{id:"depositparams"},"DepositParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface DepositParams {\n  tag: string\n  amount: string\n}\n")),(0,r.kt)("h2",{id:"transferparams"},"TransferParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TransferParams {\n  tag: string\n  amount: string\n  data?: Record<string, unknown>\n  to: string\n}\n")),(0,r.kt)("h2",{id:"withdrawparams"},"WithdrawParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface WithdrawParams {\n  chainType: ChainType\n  tag: string\n  amount: string\n  fee?: string\n  quickMode?: boolean\n  data?: Record<string, unknown>\n  to?: string\n}\n")),(0,r.kt)("h2",{id:"bundleparams"},"BundleParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BundleParams {\n  tag: string\n  amount: string\n  data: {\n    bundle: BundleDataWithSigs\n  }\n  to: string\n}\n")),(0,r.kt)("h2",{id:"txsparams"},"TxsParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsParams {\n  page?: number\n  tag?: string\n  action?: EverpayActionWithDeposit\n  withoutAction?: EverpayActionWithDeposit\n}\n")),(0,r.kt)("h2",{id:"txsbyaccountparams"},"TxsByAccountParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsByAccountParams {\n  page?: number\n  account?: string\n  tag?: string\n  action?: EverpayActionWithDeposit\n  withoutAction?: EverpayActionWithDeposit\n}\n")),(0,r.kt)("h2",{id:"sendeverpaytxresult"},"SendEverpayTxResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: This type does not have an export\ninterface PostEverpayTxResult {\n  status: string\n}\nexport interface SendEverpayTxResult extends PostEverpayTxResult {\n  everpayTx: EverpayTx\n  everHash: string\n}\n")),(0,r.kt)("h2",{id:"signmessageresult"},"SignMessageResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SignMessageResult {\n  message: string\n  sig: string\n}\n")),(0,r.kt)("h2",{id:"verifymessageparams"},"VerifyMessageParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface VerifyMessageParams {\n  account: string\n  type: 'register' | 'sign'\n  message: string\n  sig: string\n}\n")),(0,r.kt)("h2",{id:"verifymessageresult"},"VerifyMessageResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface VerifyMessageResult {\n  publicId: string\n  public: string\n}\n")),(0,r.kt)("h2",{id:"smartaccountauthresult"},"SmartAccountAuthResult"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SmartAccountAuthResult {\n  account: string\n  publicId: string\n  public: string\n  type: 'sign' | 'register'\n  message: string\n  sig: string\n}\n")))}g.isMDXComponent=!0}}]);