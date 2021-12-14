"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9679],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Accounts"},c=void 0,l={unversionedId:"ui-keyring/start/accounts",id:"ui-keyring/start/accounts",title:"Accounts",description:"With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that.",source:"@site/docs/ui-keyring/start/accounts.md",sourceDirName:"ui-keyring/start",slug:"/ui-keyring/start/accounts",permalink:"/docs/ui-keyring/start/accounts",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/start/accounts.md",tags:[],version:"current",frontMatter:{title:"Accounts"},sidebar:"reference",previous:{title:"Initialization",permalink:"/docs/ui-keyring/start/init"},next:{title:"Addresses",permalink:"/docs/ui-keyring/start/addresses"}},d=[{value:"Adding accounts",id:"adding-accounts",children:[],level:2},{value:"Non-mnemonic seeds and derivation",id:"non-mnemonic-seeds-and-derivation",children:[],level:2},{value:"Managing addresses",id:"managing-addresses",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With our keyring setup completed in the previous section, and all available accounts loaded, we are ready to proceed. However we have not actually loaded any accounts yet, since well, we have not created or stored any previously. So let's change that."),(0,o.kt)("h2",{id:"adding-accounts"},"Adding accounts"),(0,o.kt)("p",null,"The keyring has a number of ways to add accounts, but in 99% of the cases, you should need only a single method to add an account to the keyring - ",(0,o.kt)("inlineCode",{parentName:"p"},"addUri(suri: string, password?: string, meta: KeyringPair$Meta = {}, type?: KeypairType)"),". Let's jump in with some explicit examples -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { mnemonicGenerate } from '@polkadot/util-crypto';\n\n...\n// generate a random mnemonic, 12 words in length\nconst mnemonic = mnemonicGenerate(12);\n\n// add the account, encrypt the stored JSON with an account-specific password\nconst { pair, json } = keyring.addUri(mnemonic, 'myStr0ngP@ssworD', { name: 'mnemonic acc' });\n")),(0,o.kt)("p",null,"The above example is relatively straight-forward. Create an account with the specified mnemonic, encrypt the account (as stored) with the password and attach some metadata to the account. It returns a pair instance (we will work with these later) as well as the encrypted json as is saved to the store."),(0,o.kt)("p",null,"Metadata is free form, with any indicators that you would find useful in your application. Some fields that are known to be used in (and also exists other keyring entries such as contacts & contracts) includes -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"genesisHash")," - a hex value of the genesis this accounts belong to. If specified, the account will only be loaded when the same genesisHash is available in the keyring options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," - a human-readable description for the account"))),(0,o.kt)("h2",{id:"non-mnemonic-seeds-and-derivation"},"Non-mnemonic seeds and derivation"),(0,o.kt)("p",null,"Generally, we would encourage all wallets and users to only support mnemonic phrases - these are portable between crypto implementations, has built-in checksums and is a standard across the blockchain environment. In some cases however, either due to the need to provide backwards compatibility or for closed environments, other seed types may be used. The ",(0,o.kt)("inlineCode",{parentName:"p"},"addUri")," will detect the type of input, i.e. if a hex-encoded value is provided, it will treat it as a raw seed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { randomAsHex } from '@polkadot/util-crypto';\n\n...\n// generate a random hex raw seed, this needs to be 32 bytes in length\nconst seed = randomAsHex(32);\n\n// add the account, encrypting it, override to ed25519\nconst { pair, json } = keyring.addUri(seed, 'weakpass', { name: 'hex seed acc' }, 'ed25519');\n")),(0,o.kt)("p",null,"In all the above examples non-derived accounts are assumed. However, luke the ",(0,o.kt)("inlineCode",{parentName:"p"},"addFromUri")," method in the base keyring, the UI Keyring also supports full ",(0,o.kt)("a",{parentName:"p",href:"/docs/keyring/start/ss58"},"ss58 derivation paths"),". The only difference between the methods in the 2 libraries is that the UI variant requires the use of a password for all operations."),(0,o.kt)("h2",{id:"managing-addresses"},"Managing addresses"),(0,o.kt)("p",null,"In addition to managing accounts, the keyring also allows the developer to manage ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-keyring/start/addresses"},"addresses where an actual secret is not available"),"."))}p.isMDXComponent=!0}}]);