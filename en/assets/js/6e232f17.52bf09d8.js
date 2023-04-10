"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),p=o,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},i="Introduction",s={unversionedId:"guide/dive/overview",id:"guide/dive/overview",title:"Introduction",description:"everPay: A Trusted Cross-chain Payment Protocol",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/overview.md",sourceDirName:"guide/dive",slug:"/guide/dive/overview",permalink:"/en/docs/guide/dive/overview",draft:!1,editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guide",previous:{title:"Catalogue",permalink:"/en/docs/guide/docs-catalogue"},next:{title:"Account Model",permalink:"/en/docs/guide/dive/account-model"}},c={},l=[{value:"everPay: A Trusted Cross-chain Payment Protocol",id:"everpay-a-trusted-cross-chain-payment-protocol",level:2},{value:"Mechanism",id:"mechanism",level:3},{value:"Roles",id:"roles",level:3},{value:"Coordinator",id:"coordinator",level:4},{value:"Detector",id:"detector",level:4},{value:"Watchmen",id:"watchmen",level:4},{value:"Cross-chain",id:"cross-chain",level:3},{value:"MultiSig",id:"multisig",level:4},{value:"Threshold Signature",id:"threshold-signature",level:4},{value:"Consensus",id:"consensus",level:3},{value:"Resistance to malicious actors",id:"resistance-to-malicious-actors",level:3},{value:"Invalid Signature",id:"invalid-signature",level:4},{value:"Attack on Balance",id:"attack-on-balance",level:4},{value:"Mint/Burn Assets",id:"mintburn-assets",level:4},{value:"Interaction",id:"interaction",level:3},{value:"Easy to Use",id:"easy-to-use",level:4},{value:"Unrestricted by Signature Algorithms",id:"unrestricted-by-signature-algorithms",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:l},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"everpay-a-trusted-cross-chain-payment-protocol"},"everPay: A Trusted Cross-chain Payment Protocol"),(0,o.kt)("p",null,"Due to the scarce computing resources and a high fee, Bitcoin and Ethereum blockchains can hardly support everyday transactions. To solve this problem, everVision adopts a storage-based computation paradigm to build everPay, which is a trusted cross-chain payment and settlement protocol."),(0,o.kt)("p",null,"everPay locks the assets of other public blockchains into a smart contract and maps them to corresponding assets, which enables users to make transfers and payments on its protocol. everPay has a very low cost in reaching a consensus on transactions. For example, it only costs 0.05 US dollars to make thousands of transactions. Besides, everPay has no limit in TPS, which only depends on the application architecture of its protocol and server performance. As long as it conforms to the storage-based computation paradigm, the everPay protocol can scale \u201cunlimitedly\u201d to rival a traditional internet application."),(0,o.kt)("h3",{id:"mechanism"},"Mechanism"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"everPay \u8fd0\u884c\u673a\u5236",src:a(5066).Z,width:"1400",height:"969"})),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("h4",{id:"coordinator"},"Coordinator"),(0,o.kt)("p",null,"Coordinators collect and verify transactions, and then package and add the valid ones onto the chain. They collect valid transactions from users with an API and put them into a serialized pending transaction pool. The pending transactions are packaged in batches and included on-chain every certain period of time. Coordinators generate a real-time global state according to both valid on-chain transactions and pending transactions."),(0,o.kt)("h4",{id:"detector"},"Detector"),(0,o.kt)("p",null,"Detectors download and verify on-chain data automatically to generate a global state and account balances. Detectors generate a state more slowly than coordinators because they only rely on on-chain data and do not count in pending transactions. Anyone can be a detector by downloading and running a detector program."),(0,o.kt)("h4",{id:"watchmen"},"Watchmen"),(0,o.kt)("p",null,"Watchmen are detectors that jointly manage assets. They can unlock assets with a multiSig or threshold signature scheme."),(0,o.kt)("h3",{id:"cross-chain"},"Cross-chain"),(0,o.kt)("p",null,"The everPay protocol currently supports two cross-chain solutions, i.e, MultiSig and Threshold Signature Scheme."),(0,o.kt)("h4",{id:"multisig"},"MultiSig"),(0,o.kt)("p",null,"For the public blockchains that support smart contracts, everPay deploys a lockup contract with the MultiSig technology, and the keys are owned by different watchmen."),(0,o.kt)("p",null,"The everPay protocol listens for the asset transfer event and ensures that the transferred assets are mapped to corresponding assets after the transaction is confirmed."),(0,o.kt)("p",null,"When users send a transaction to burn assets, the transaction will be included onto a storage-oriented blockchain (Arweave) after it is verified. Watchmen listen for the events on the storage-oriented blockchain. When watchmen receive the burn transactions from the storage-oriented chain, they sign the validated transactions and send them to the corresponding public blockchains. After a burn transaction is signed by a certain number of asset managers, the original assets will be unlocked and returned to the user."),(0,o.kt)("h4",{id:"threshold-signature"},"Threshold Signature"),(0,o.kt)("p",null,"For the public blockchains that do not support smart contracts, everPay currently adopts the Threshold Signature technology, which is similar to MultiSig, to ensure the lockup of user assets."),(0,o.kt)("h3",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"The consensus of the everPay protocol is secured by a storage-based computation paradigm. In the paradigm, all the computing processes are completed off-chain, and the inputs from the application are stored on a blockchain. Coordinators, detectors and watchmen run the same business verification component. Anyone can download and run the detector program to load the blockchain data for checking transaction state.\n",(0,o.kt)("img",{alt:"everPay \u8fd0\u884c\u673a\u5236",src:a(8102).Z,width:"1400",height:"672"}),"\neverPay packages all types of transactions, including mint/burn/transfer transactions, in the proper order and sends them to the storage-oriented blockchain. The third-party applications and individuals can check the transaction state with the detector program, which automatically downloads and verifies all the on-chain transaction records. If the states are respectively generated by a coordinator and a detector conflict, the application may have a risk of fraudulent consensus."),(0,o.kt)("h3",{id:"resistance-to-malicious-actors"},"Resistance to malicious actors"),(0,o.kt)("p",null,"Transactions are packaged in a serialized way into blocks, which are added onto the blockchain. Anyone who loads the transactions according to the packaging order generates the same state."),(0,o.kt)("h4",{id:"invalid-signature"},"Invalid Signature"),(0,o.kt)("p",null,"It makes no sense to include an invalid signature onto the blockchain. If an invalid signature is found, all the detectors will reject it."),(0,o.kt)("h4",{id:"attack-on-balance"},"Attack on Balance"),(0,o.kt)("p",null,"Because all the transactions are executed in a serialized way, everPay is resistant to double-spend attacks. Besides, any transaction contains a nonce field to ensure its uniqueness, so as to resist replay attacks."),(0,o.kt)("p",null,"everPay only has a single coordinator to process transactions for now. What if the coordinator misbehaves? For example, when a user, who only owns 1 ETH, sends a transaction to transfer 2 ETH, the coordinator does not reject the transaction and includes it onto the blockchain. If any detector loads the serialized data from the blockchain and finds that the user only owns 1 ETH, they will reject the transaction. Hence, the invalid transaction will be found as soon as it is packaged and sent by the coordinator to the blockchain. Another case is that the coordinator allows the user to transfer 1 ETH twice in a row. The first transaction will be validated by a detector, turning the user\u2019s account balance from 1 ETH to 0 ETH. But the second transaction will be rejected for the lack of funds in the user\u2019s balance."),(0,o.kt)("h4",{id:"mintburn-assets"},"Mint/Burn Assets"),(0,o.kt)("p",null,"Take Ethereum as an example. everPay deploys a EthBot to listen for Ethereum events. When a user transfers some assets to the MultiSig smart contract, the EthBot will send a mint transaction to the everPay protocol after the transfer is confirmed in six blocks. Then the protocol will cryptographically verify the transfer and query an Ethereum node to ensure that the transfer is finalized with a minimum of 6 block confirmations. After the mint transaction is done, the transaction fingerprint will be labeled \u201cminted\u201d in the everPay protocol, so as to avoid repeated minting."),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Note: EthBot is not required and only designed for better user experience. Anyone can send a valid Ethereum transaction to the everPay protocol for minting."))),(0,o.kt)("p",null,"When a user sends a burn transaction, the transaction will be packaged and added onto Arweave if it is validated by the everPay protocol. Watchmen who listen for Arweave events will verify the transaction and then send a multiSig transaction. Similarly, the Ethereum lockup contract will verify the transaction fingerprint to avoid the same transaction being repeatedly executed."),(0,o.kt)("p",null,"All the above processes can be checked by the detector program of the everPay protocol. Anyone can download the detector program and become a detector. Besides, everPay also provides an explorer for users to view and check transactions."),(0,o.kt)("p",null,"The consensus of everPay protocol is secured by a storage-oriented blockchain and checked by a detector program."),(0,o.kt)("h3",{id:"interaction"},"Interaction"),(0,o.kt)("h4",{id:"easy-to-use"},"Easy to Use"),(0,o.kt)("p",null,"Transactions are collected and included in batches onto the chain by coordinators in the proper order. In this way, the transactions can be processed off-chain in real time. It means the state of a coordinator\u2019s ledger is updated in real time."),(0,o.kt)("p",null,"Hence, everPay enables users to make real-time transfers and make multiple transactions in a row. It brings a fast and convenient user experience as an Internet application."),(0,o.kt)("p",null,"In the edge cases where users have doubts about coordinators, they can track if their transactions are packaged and included onto the chain with the transaction explorer. Generally, coordinators package all the transactions into blocks according to a fixed order and add the blocks to the chain."),(0,o.kt)("h3",{id:"unrestricted-by-signature-algorithms"},"Unrestricted by Signature Algorithms"),(0,o.kt)("p",null,"With the computation process moved off-chain, the storage-based computation paradigm supports arbitrary signature algorithms, which enables relatively flexible development. To be more specific, everPay can integrate more friendly internet signature algorithms, such as WebAuthn (R1), which totally removes key management (mnemonics) while ensuring security. In this case, users can sign their transactions in a secure and reliable way with a hardware device (e.g. a phone or computer)."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"everVision is dedicated to improving user experience, lowering the threshold for development and providing trusted decentralized financial applications for everyone. everPay is an easy-to-use blockchain-based solution and application protocol, which enables users to make payments and settlements in a reliable way and as efficiently as an internet application."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://news.ever.vision/everpay-a-trusted-cross-chain-payment-protocol-eba4a0af7d66"},"https://news.ever.vision/everpay-a-trusted-cross-chain-payment-protocol-eba4a0af7d66")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/everfinance/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"},"https://medium.com/everfinance/a-storage-based-computation-paradigm-enabled-by-arweave-de799ae8c424"))),(0,o.kt)("p",null,"everVision website: ",(0,o.kt)("a",{parentName:"p",href:"https://ever.vision"},"https://ever.vision")))}u.isMDXComponent=!0},8102:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mechanism-banner2-43d98701274643762e175a62461947e2.webp"},5066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mechanism-banner-fbf69b808c5c306821b99140d07a1069.webp"}}]);