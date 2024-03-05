(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247,528,277,305,857],{7211:function(e,r,n){Promise.resolve().then(n.bind(n,4484)),Promise.resolve().then(n.bind(n,9708)),Promise.resolve().then(n.t.bind(n,8875,23)),Promise.resolve().then(n.bind(n,848)),Promise.resolve().then(n.t.bind(n,6301,23)),Promise.resolve().then(n.bind(n,8411)),Promise.resolve().then(n.bind(n,8275)),Promise.resolve().then(n.t.bind(n,7725,23)),Promise.resolve().then(n.t.bind(n,8046,23))},9708:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return CodeBlock}});var t=n(7437),i=n(2265),l=n(2686),s=n.n(l);function CodeBlock(e){let r=(0,i.useRef)(),{language:n,code:l,highlightLines:c}=e,o=l.split("\n").map(e=>e.trimRight());o[0]||(o=o.slice(1));let a=o[0].length-o[0].trimStart().length;o=o.map(e=>e.slice(a));let u=c?c.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],f="linear-gradient(180deg"+u.map(e=>{let[r,n]=e;return", transparent ".concat(24*r,"px, ")+"var(--bg-transparent-golden) ".concat(24*r,"px ").concat(24*n,"px, ")+"transparent ".concat(24*n,"px")}).join("")+")";return(0,i.useLayoutEffect)(()=>{s().highlightElement(r.current)},[l]),(0,t.jsx)("div",{className:"x-codeblock",children:(0,t.jsx)("pre",{style:{background:c?f:null},children:(0,t.jsx)("code",{className:n&&"lang-".concat(n),ref:r,children:o.join("\n")})})})}n(8978)},848:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Formula}});var t=n(7437),i=n(2265),l=n(3236);function Formula(e){let r=(0,i.useRef)(),{text:n=""}=e;return(0,i.useLayoutEffect)(()=>{l.Z.render(n,r.current,{output:"html",strict:!1})},[n]),(0,t.jsx)("div",{className:"x-formula",ref:r})}n(8704)},8411:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Image}});var t=n(7437);n(5612);var i=n(6691),l=n.n(i);function Image(e){let{invertInDarkTheme:r,src:n,width:i,...s}=e;return(0,t.jsx)("div",{className:"x-image-wrapper".concat(r?" x-image-invert":""),children:(0,t.jsx)(l(),{alt:"img",src:!0,style:{width:i}})})}},8275:function(e,r,n){"use strict";n.r(r),n.d(r,{Oli:function(){return Oli},Uli:function(){return Uli}});var t=n(7437),i=n(9226),l=n(2229);function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:r}=e;return(0,t.jsxs)("div",{className:"x-uli",children:[(0,t.jsx)("div",{className:"x-uli-marker",children:(0,t.jsx)("div",{className:"x-uli-marker-dot"})}),(0,t.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(r)?(0,t.jsx)(l.Z,{children:r}):r})]})}function Oli(e){let{reset:r,children:n}=e,{addOliIndex:s,resetOliIndex:c}=(0,i.useGlobalContext)();return(0,t.jsxs)("div",{className:"x-oli",children:[(0,t.jsx)("div",{className:"x-oli-number",children:(void 0!==r?c(+r):s())+"."}),(0,t.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(n)?(0,t.jsx)(l.Z,{children:n}):n})]})}n(340)},2229:function(e,r,n){"use strict";n.d(r,{Z:function(){return P}});var t=n(7437),i=n(3236);function P(e){let{withMarginTop:r=!1,noMarginBottom:n=!1,children:l=""}=e,s=Array.isArray(l)?l.join(""):l;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,r)=>i.Z.renderToString(r,{output:"html",strict:!1})),(0,t.jsx)("p",{className:"x-p".concat(r?" with-margin-top":"").concat(n?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}n(7725)},4484:function(e,r,n){"use strict";n.r(r),n.d(r,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var t=n(7437),i=n(2265),l=n(9226);function Title(e){let{children:r}=e;return(0,i.useLayoutEffect)(()=>{document.title=r},[r]),(0,t.jsx)("h1",{className:"x-title",children:r})}function H1(e){let{href:r,excludeFromContents:n,children:s}=e,c=(0,i.useRef)(),{setTitleNodeRefs:o,removeTitleNodeRefs:a}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!n)return o(e=>[...e,c]),()=>a(c)},[s,n]),(0,t.jsx)("h2",{className:"x-h1",ref:c,children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(e){let{href:r,excludeFromContents:n,children:s}=e,c=(0,i.useRef)(),{setTitleNodeRefs:o,removeTitleNodeRefs:a}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!n)return o(e=>[...e,c]),()=>a(c)},[s,n]),(0,t.jsx)("h3",{className:"x-h2",ref:c,children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(e){let{href:r,children:n}=e;return(0,t.jsx)("h4",{className:"x-h3",children:r?(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:n}):n})}function Br(){return(0,t.jsx)("div",{className:"x-br"})}function Divider(){return(0,t.jsx)("div",{className:"x-divider"})}n(5533)},9226:function(e,r,n){"use strict";n.r(r),n.d(r,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var t=n(7437),i=n(2265);let l=(0,i.createContext)(),useGlobalContext=()=>(0,i.useContext)(l),GlobalProvider=e=>{let{children:r}=e,[n,s]=(0,i.useState)(!1),[c,o]=(0,i.useState)([]),a=(0,i.useRef)(0),u={showSidebar:n,setShowSidebar:s,setTitleNodeRefs:o,removeTitleNodeRefs:e=>{o(r=>r.filter(r=>r!==e))},titleNodes:c.map(e=>e.current).sort((e,r)=>e.offsetTop-r.offsetTop),addOliIndex:()=>(a.current+=1,a.current),resetOliIndex:e=>(a.current=e,e)};return(0,t.jsx)(l.Provider,{value:u,children:r})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){}},function(e){e.O(0,[954,202,971,472,744],function(){return e(e.s=7211)}),_N_E=e.O()}]);