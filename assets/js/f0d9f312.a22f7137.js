"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4028],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9176:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Hash Data"},c=void 0,p={unversionedId:"util-crypto/examples/hash-data",id:"util-crypto/examples/hash-data",title:"Hash Data",description:"There are many different hashing algorithms exposed in the util-crypto package.",source:"@site/docs/util-crypto/examples/hash-data.md",sourceDirName:"util-crypto/examples",slug:"/util-crypto/examples/hash-data",permalink:"/docs/util-crypto/examples/hash-data",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/hash-data.md",tags:[],version:"current",frontMatter:{title:"Hash Data"},sidebar:"reference",previous:{title:"Verify Signature",permalink:"/docs/util-crypto/examples/verify-signature"},next:{title:"FAQ",permalink:"/docs/util-crypto/FAQ"}},s=[],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are many different hashing algorithms exposed in the util-crypto package."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Blake2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Keccak")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"sha512")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"for all of them see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src"},"here")),(0,o.kt)("p",{parentName:"li"}," Example of Blake2 hashing"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { blake2AsHex } = require('@polkadot/util-crypto');\nconst hash = blake2AsHex(\"data goes here\")\nconsole.log(hash)\n//result: { hash: '0xce73267ed8316b4350672f32ba49af86a7ae7af1267beb868a27f3fda03c044a' }\n")))))}f.isMDXComponent=!0}}]);