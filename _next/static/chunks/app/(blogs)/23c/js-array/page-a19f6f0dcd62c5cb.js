(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528,277,247,305,857],{5318:function(e,r,n){Promise.resolve().then(n.t.bind(n,413,23)),Promise.resolve().then(n.bind(n,4484)),Promise.resolve().then(n.bind(n,9708)),Promise.resolve().then(n.t.bind(n,8875,23)),Promise.resolve().then(n.bind(n,848)),Promise.resolve().then(n.t.bind(n,6301,23)),Promise.resolve().then(n.t.bind(n,5612,23)),Promise.resolve().then(n.bind(n,9841)),Promise.resolve().then(n.t.bind(n,7725,23)),Promise.resolve().then(n.t.bind(n,8046,23))},9708:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return CodeBlock}});var t=n(7437),i=n(2265),l=n(2686),s=n.n(l);function CodeBlock(e){let r=(0,i.useRef)(),{language:n,code:l,highlightLines:o}=e,c=l.split("\n").map(e=>e.trimRight());c[0]||(c=c.slice(1));let a=c[0].length-c[0].trimStart().length;c=c.map(e=>e.slice(a));let u=o?o.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],f="linear-gradient(180deg"+u.map(e=>{let[r,n]=e;return", transparent ".concat(24*r,"px, ")+"var(--bg-transparent-golden) ".concat(24*r,"px ").concat(24*n,"px, ")+"transparent ".concat(24*n,"px")}).join("")+")";return(0,i.useLayoutEffect)(()=>{s().highlightElement(r.current)},[l]),(0,t.jsx)("div",{className:"x-codeblock",children:(0,t.jsx)("pre",{style:{background:o?f:null},children:(0,t.jsx)("code",{className:n&&"lang-".concat(n),ref:r,children:c.join("\n")})})})}n(8978)},848:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Formula}});var t=n(7437),i=n(2265),l=n(3236);function Formula(e){let r=(0,i.useRef)(),{text:n=""}=e;return(0,i.useLayoutEffect)(()=>{l.Z.render(n,r.current,{output:"html",strict:!1})},[n]),(0,t.jsx)("div",{className:"x-formula",ref:r})}n(8704)},9841:function(e,r,n){"use strict";n.r(r),n.d(r,{Oli:function(){return Oli},Uli:function(){return Uli}});var t=n(7437),i=n(9226),l=n(3236);function P(e){let{withMarginTop:r=!1,noMarginBottom:n=!1,children:i=""}=e,s=Array.isArray(i)?i.join(""):i;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,r)=>l.Z.renderToString(r,{output:"html",strict:!1})),(0,t.jsx)("p",{className:"x-p".concat(r?" with-margin-top":"").concat(n?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:r}=e;return(0,t.jsxs)("div",{className:"x-uli",children:[(0,t.jsx)("div",{className:"x-uli-marker",children:(0,t.jsx)("div",{className:"x-uli-marker-dot"})}),(0,t.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(r)?(0,t.jsx)(P,{children:r}):r})]})}function Oli(e){let{reset:r,children:n}=e,{addOliIndex:l,resetOliIndex:s}=(0,i.useGlobalContext)();return(0,t.jsxs)("div",{className:"x-oli",children:[(0,t.jsx)("div",{className:"x-oli-number",children:(void 0!==r?s(+r):l())+"."}),(0,t.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(n)?(0,t.jsx)(P,{children:n}):n})]})}n(7725),n(340)},4484:function(e,r,n){"use strict";n.r(r),n.d(r,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var t=n(7437),i=n(2265),l=n(9226);function Title(e){let{children:r}=e;return(0,i.useLayoutEffect)(()=>{document.title=r},[r]),(0,t.jsx)("h1",{className:"x-title",children:r})}function H1(e){let{href:r,excludeFromContents:n,children:s}=e,o=(0,i.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:a}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!n)return c(e=>[...e,o]),()=>a(o)},[s,n]),(0,t.jsx)("h2",{className:"x-h1",ref:o,children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(e){let{href:r,excludeFromContents:n,children:s}=e,o=(0,i.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:a}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!n)return c(e=>[...e,o]),()=>a(o)},[s,n]),(0,t.jsx)("h3",{className:"x-h2",ref:o,children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(e){let{href:r,children:n}=e;return(0,t.jsx)("h4",{className:"x-h3",children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:n}):n})}function Br(){return(0,t.jsx)("div",{className:"x-br"})}function Divider(){return(0,t.jsx)("div",{className:"x-divider"})}n(5533)},9226:function(e,r,n){"use strict";n.r(r),n.d(r,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var t=n(7437),i=n(2265);let l=(0,i.createContext)(),useGlobalContext=()=>(0,i.useContext)(l),GlobalProvider=e=>{let{children:r}=e,[n,s]=(0,i.useState)(!1),[o,c]=(0,i.useState)([]),a=(0,i.useRef)(0),u={showSidebar:n,setShowSidebar:s,setTitleNodeRefs:c,removeTitleNodeRefs:e=>{c(r=>r.filter(r=>r!==e))},titleNodes:o.map(e=>e.current).sort((e,r)=>e.offsetTop-r.offsetTop),addOliIndex:()=>(a.current+=1,a.current),resetOliIndex:e=>(a.current=e,e)};return(0,t.jsx)(l.Provider,{value:u,children:r})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){}},function(e){e.O(0,[954,852,971,472,744],function(){return e(e.s=5318)}),_N_E=e.O()}]);