"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2765],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"State queries"},c=void 0,l={unversionedId:"api/start/api.query",id:"api/start/api.query",title:"State queries",description:"In previous sections, we initialized the API and retrieved runtime constants. This section will walk through the concepts behind making queries to the chain to retrieve current state. The api.query.. interfaces, as already described earlier, is populated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC.",source:"@site/docs/api/start/api.query.md",sourceDirName:"api/start",slug:"/api/start/api.query",permalink:"/docs/api/start/api.query",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.md",tags:[],version:"current",frontMatter:{title:"State queries"},sidebar:"reference",previous:{title:"Runtime constants",permalink:"/docs/api/start/api.consts"},next:{title:"RPC queries",permalink:"/docs/api/start/api.rpc"}},p=[{value:"Basic queries",id:"basic-queries",children:[],level:2},{value:"Parameters &amp; return values",id:"parameters--return-values",children:[],level:2},{value:"Exploring RPCs",id:"exploring-rpcs",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In previous sections, we initialized the API and retrieved runtime constants. This section will walk through the concepts behind making queries to the chain to retrieve current state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query.<module>.<method>")," interfaces, as already described earlier, is populated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC."),(0,i.kt)("h2",{id:"basic-queries"},"Basic queries"),(0,i.kt)("p",null,"Let's dive right in, connect to a general chain and retrieve some information on the current state. Of interest may be retrieving the nonce of a particular account as well as the current balance, this can be achieved via -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Initialize the API as in previous sections\n...\n\n// The actual address that we will use\nconst ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';\n\n// Retrieve the last timestamp\nconst now = await api.query.timestamp.now();\n\n// Retrieve the account balance & nonce via the system module\nconst { nonce, data: balance } = await api.query.system.account(ADDR);\n\nconsole.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);\n")),(0,i.kt)("p",null,"There have been some additions in the code above comparing with retrieving runtime constants. In these cases, since we are making a query to the actual chain, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," syntax to retrieve the information. Since the API is Promise-based, this means we can also rewrite the above to follow a Promise pattern,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n// Retrieve last block timestamp, account nonce & balances\nconst [now, { nonce, data: balance }] = await Promise.all([\n  api.query.timestamp.now(),\n  api.query.system.account(ADDR)\n]);\n")),(0,i.kt)("h2",{id:"parameters--return-values"},"Parameters & return values"),(0,i.kt)("p",null,"As indicated in previous sections, any return value is always an object with a consistent interface that reflects the type being returned. In the above example, the timestamp is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Moment")," (a ",(0,i.kt)("inlineCode",{parentName:"p"},"u64")," value), the nonce is an ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," (a ",(0,i.kt)("inlineCode",{parentName:"p"},"u32")," value) and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Balance")," is an underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"u128"),"."),(0,i.kt)("p",null,"Additionally we have provided some parameters for the query calls, specifically for the retrieval of the nonce and balance. It is important to note that the API will automatically convert any parameters into the correct type for encoding and making calls, in this case the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId")," parameter could be specified as a ss58 address (as it was), an actual ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId")," (retrieved via another call) or just a plain ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8Array")," (or even hex-string representation) for a publicKey."),(0,i.kt)("h2",{id:"exploring-rpcs"},"Exploring RPCs"),(0,i.kt)("p",null,"Where all query functions use the underlying RPCs, together with metadata, to construct and retrieve information, the direct node RPCs can be seen as raw calls that enable these (slightly) higher-level operations. Next up we will take a dive into ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.rpc"},"making RPC calls via the API"),"."))}d.isMDXComponent=!0}}]);