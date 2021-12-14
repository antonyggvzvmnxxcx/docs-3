"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6093],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=l(r),g=o,f=y["".concat(s,".").concat(g)]||y[g]||u[g]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7609:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return y}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Sign & Verify Message"},s=void 0,l={unversionedId:"keyring/examples/sign-verify",id:"keyring/examples/sign-verify",title:"Sign & Verify Message",description:'The following example shows how to sign and verify a message with NaCl (pronounced "salt"), which is a Networking and Cryptography library used in util-crypto.',source:"@site/docs/keyring/examples/sign-verify.md",sourceDirName:"keyring/examples",slug:"/keyring/examples/sign-verify",permalink:"/docs/keyring/examples/sign-verify",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/examples/sign-verify.md",tags:[],version:"current",frontMatter:{title:"Sign & Verify Message"}},p=[],u={toc:p};function y(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The following example shows how to sign and verify a message with NaCl (pronounced "salt"), which is a Networking and Cryptography library used in util-crypto.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  stringToU8a,\n  u8aToHex\n} = require('@polkadot/util');\nconst {\n  naclEncrypt,\n  naclKeypairFromSeed,\n  naclSign,\n  naclVerify,\n  randomAsU8a\n} = require('@polkadot/util-crypto');\n\nasync function main () {\n  // Create account seed for an \"Alice\" account (generally rather use mnemonics)\n  const seedAlice = 'Alice'.padEnd(32, ' ');\n\n  // Generate new public/secret keypair for Alice from the supplied seed\n  const { publicKey, secretKey } = naclKeypairFromSeed(stringToU8a(seedAlice));\n\n  // Encrypt message. Create Uint8Array's filled with random bytes of specified length\n  const secret = randomAsU8a(32);\n  const messagePreEncryption = stringToU8a('please send me DOTs');\n  const noncePreEncryption = randomAsU8a(24);\n\n  const { encrypted } = naclEncrypt(messagePreEncryption, secret, noncePreEncryption);\n\n  // Sign the message with a valid signature\n  const messageSignature = naclSign(encrypted, secretKey);\n\n  console.log(`Message signature: ${u8aToHex(messageSignature)}`);\n\n  // Validate that the message was correctly signed\n  const isValidSignature = naclVerify(encrypted, messageSignature, publicKey);\n\n  console.log(`Was the message correctly signed? ${isValidSignature}`);\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}y.isMDXComponent=!0}}]);