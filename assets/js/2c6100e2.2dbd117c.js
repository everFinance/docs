(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[223],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3804:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=t(2122),r=t(9756),s=(t(7294),t(3905)),i=["components"],o={sidebar_position:6},p="\u7c7b\u578b",c={unversionedId:"sdk/everpay-js/types",id:"sdk/everpay-js/types",isDocsHomePage:!1,title:"\u7c7b\u578b",description:"\u4ee5\u4e0b\u7c7b\u578b\uff0c\u90fd\u53ef\u901a\u8fc7 typescript \u4ece everpay-js \u4e2d import",source:"@site/docs/sdk/everpay-js/types.md",sourceDirName:"sdk/everpay-js",slug:"/sdk/everpay-js/types",permalink:"/docs/sdk/everpay-js/types",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/types.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sdk",previous:{title:"withdraw",permalink:"/docs/sdk/everpay-js/operation-api/withdraw"},next:{title:"\u9519\u8bef",permalink:"/docs/sdk/everpay-js/errors"}},l=[{value:"ChainType",id:"chaintype",children:[]},{value:"ArJWK",id:"arjwk",children:[]},{value:"EthereumTransaction",id:"ethereumtransaction",children:[]},{value:"ArweaveTransaction",id:"arweavetransaction",children:[]},{value:"Config",id:"config",children:[]},{value:"Token",id:"token",children:[]},{value:"EverpayInfo",id:"everpayinfo",children:[]},{value:"ExpressInfo",id:"expressinfo",children:[]},{value:"EverpayAction",id:"everpayaction",children:[]},{value:"EverpayTxWithoutSig",id:"everpaytxwithoutsig",children:[]},{value:"EverpayTx",id:"everpaytx",children:[]},{value:"EverpayActionWithDeposit",id:"everpayactionwithdeposit",children:[]},{value:"EverpayTransactionStatus",id:"everpaytransactionstatus",children:[]},{value:"EverpayTransaction",id:"everpaytransaction",children:[]},{value:"TxsResult",id:"txsresult",children:[]},{value:"BalanceParams",id:"balanceparams",children:[]},{value:"BalancesParams",id:"balancesparams",children:[]},{value:"BalanceItem",id:"balanceitem",children:[]},{value:"DepositParams",id:"depositparams",children:[]},{value:"TransferParams",id:"transferparams",children:[]},{value:"WithdrawParams",id:"withdrawparams",children:[]},{value:"TxsParams",id:"txsparams",children:[]},{value:"TxsByAccountParams",id:"txsbyaccountparams",children:[]},{value:"TransferOrWithdrawResult",id:"transferorwithdrawresult",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u7c7b\u578b\uff0c\u90fd\u53ef\u901a\u8fc7 typescript \u4ece everpay-js \u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"import")),(0,s.kt)("h2",{id:"chaintype"},"ChainType"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export enum ChainType {\n  ethereum = 'ethereum',\n  arweave = 'arweave'\n}\n")),(0,s.kt)("h2",{id:"arjwk"},"ArJWK"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export type ArJWK = JWKInterface | 'use_wallet'\n")),(0,s.kt)("p",null,"\u5176\u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"JWKInterface")," \u6765\u6e90\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/wallet.ts#L7"},"arweave-js JWKInterface")),(0,s.kt)("h2",{id:"ethereumtransaction"},"EthereumTransaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { TransactionResponse as EthereumTransaction } from '@ethersproject/abstract-provider'\nexport { EthereumTransaction }\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TransactionResponse")," \u6765\u6e90\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse"},"ethers.js TransactionResponse")),(0,s.kt)("h2",{id:"arweavetransaction"},"ArweaveTransaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { TransactionInterface as ArweaveTransaction } from 'arweave/node/lib/transaction'\nexport { ArweaveTransaction }\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TransactionInterface")," \u6765\u6e90\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ArweaveTeam/arweave-js/blob/92d690a52ed0b647f36d58a6eba28542ef609b18/src/common/lib/transaction.ts#L64"},"arweave-js TransactionInterface")),(0,s.kt)("h2",{id:"config"},"Config"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Everpay")," \u6784\u9020\u51fd\u6570\u914d\u7f6e\u9879"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Config {\n  debug?: boolean\n  account?: string\n  ethConnectedSigner?: Signer\n  arJWK?: ArJWK\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Signer")," \u6765\u6e90\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/signer/#Signer"},"ethers.js Signer")),(0,s.kt)("h2",{id:"token"},"Token"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Token {\n  id: string\n  symbol: string\n  decimals: number\n  totalSupply: string\n  burnFee: string\n  transferFee: string\n  chainID: string\n  chainType: ChainType | string\n}\n")),(0,s.kt)("h2",{id:"everpayinfo"},"EverpayInfo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayInfo {\n  ethLocker: string\n  arLocker: string\n  ethChainID: string\n  feeRecipient: string\n  owner: string\n  everRootHash: string\n  rootHash: string\n  tokenList: Token[]\n}\n")),(0,s.kt)("h2",{id:"expressinfo"},"ExpressInfo"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface ExpressTokenItem {\n  tokenTag: string\n  withdrawFee: string\n  walletBalance: string\n}\nexport interface ExpressInfo {\n  address: string\n  withdrawTimeCost: number\n  tokens: ExpressTokenItem[]\n}\n")),(0,s.kt)("h2",{id:"everpayaction"},"EverpayAction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export enum EverpayAction {\n  transfer = 'transfer',\n  withdraw = 'burn',\n}\n")),(0,s.kt)("h2",{id:"everpaytxwithoutsig"},"EverpayTxWithoutSig"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTxWithoutSig {\n  tokenSymbol: string\n  action: EverpayAction\n  from: string\n  to: string\n  amount: string\n  fee: string\n  feeRecipient: string\n  nonce: string\n  tokenID: string\n  chainType: ChainType | string\n  chainID: string\n  data: string\n  version: string\n}\n")),(0,s.kt)("h2",{id:"everpaytx"},"EverpayTx"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTx extends EverpayTxWithoutSig {\n  sig: string\n}\n")),(0,s.kt)("h2",{id:"everpayactionwithdeposit"},"EverpayActionWithDeposit"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum EverpayActionWithDeposit {\n  transfer = 'transfer',\n  withdraw = 'burn',\n  deposit = 'mint'\n}\n")),(0,s.kt)("h2",{id:"everpaytransactionstatus"},"EverpayTransactionStatus"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum EverpayTransactionStatus {\n  // deposit(mint) transaction, after the corresponding number of blocks confirm, status will be confirmed\n  // withdraw(burn) transaction, the backend receives the everPay Tx and status will be confirmed first\n  confirmed = 'confirmed',\n  // transaction status will be packaged only after everPay Tx storaged on arweave blockchain\n  packaged = 'packaged'\n}\n")),(0,s.kt)("h2",{id:"everpaytransaction"},"EverpayTransaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface EverpayTransaction {\n  id: string // an arweave tx, which stored the everPay Tx information on the arweave blockchain\n  nonce: number\n  action: EverpayActionWithDeposit\n  from: string\n  to: string\n  amount: string\n  data: string\n  fee: string\n  feeRecipient: string\n  sig: string\n  everHash: string\n  status: EverpayTransactionStatus\n  timestamp: number\n  targetChainTxHash?: string\n  express: {\n    chainTxHash: string\n    withdrawFee: string\n    refundEverHash: string\n    err: string\n  }\n}\n")),(0,s.kt)("h2",{id:"txsresult"},"TxsResult"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsResult {\n  accid?: string\n  currentPage: number\n  totalPages: number\n  txs: EverpayTransaction[]\n}\n")),(0,s.kt)("h2",{id:"balanceparams"},"BalanceParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalanceParams {\n  symbol: string\n  account?: string\n}\n")),(0,s.kt)("h2",{id:"balancesparams"},"BalancesParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalancesParams {\n  account?: string\n}\n")),(0,s.kt)("h2",{id:"balanceitem"},"BalanceItem"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface BalanceItem {\n  chainType: string\n  symbol: string\n  balance: string\n  address: string\n}\n")),(0,s.kt)("h2",{id:"depositparams"},"DepositParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface DepositParams {\n  symbol: string\n  amount: string\n}\n")),(0,s.kt)("h2",{id:"transferparams"},"TransferParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TransferParams {\n  symbol: string\n  amount: string\n  data?: Record<string, unknown>\n  to: string\n}\n")),(0,s.kt)("h2",{id:"withdrawparams"},"WithdrawParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface WithdrawParams {\n  chainType: ChainType\n  symbol: string\n  amount: string\n  fee?: string\n  quickMode?: boolean\n  data?: Record<string, unknown>\n  to?: string\n}\n")),(0,s.kt)("h2",{id:"txsparams"},"TxsParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsParams {\n  page: number\n}\n")),(0,s.kt)("h2",{id:"txsbyaccountparams"},"TxsByAccountParams"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface TxsByAccountParams {\n  page: number\n  account?: string\n}\n")),(0,s.kt)("h2",{id:"transferorwithdrawresult"},"TransferOrWithdrawResult"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: This type does not have an export\ninterface PostEverpayTxResult {\n  status: string\n}\nexport interface TransferOrWithdrawResult extends PostEverpayTxResult {\n  everpayTx: EverpayTx\n  everHash: string\n}\n")))}d.isMDXComponent=!0}}]);