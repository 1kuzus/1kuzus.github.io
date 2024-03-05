(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[611],{2140:function(e,r,t){Promise.resolve().then(t.bind(t,5504)),Promise.resolve().then(t.bind(t,4484)),Promise.resolve().then(t.bind(t,9708)),Promise.resolve().then(t.t.bind(t,8875,23)),Promise.resolve().then(t.bind(t,848)),Promise.resolve().then(t.t.bind(t,6301,23)),Promise.resolve().then(t.bind(t,8411)),Promise.resolve().then(t.bind(t,8275)),Promise.resolve().then(t.t.bind(t,7725,23)),Promise.resolve().then(t.t.bind(t,8046,23))},9708:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return CodeBlock}});var n=t(7437),i=t(2265),l=t(2686),s=t.n(l);function CodeBlock(e){let r=(0,i.useRef)(),{language:t,code:l,highlightLines:c}=e,a=l.split("\n").map(e=>e.trimRight());a[0]||(a=a.slice(1));let o=a[0].length-a[0].trimStart().length;a=a.map(e=>e.slice(o));let u=c?c.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],d="linear-gradient(180deg"+u.map(e=>{let[r,t]=e;return", transparent ".concat(24*r,"px, ")+"var(--bg-transparent-golden) ".concat(24*r,"px ").concat(24*t,"px, ")+"transparent ".concat(24*t,"px")}).join("")+")";return(0,i.useLayoutEffect)(()=>{s().highlightElement(r.current)},[l]),(0,n.jsx)("div",{className:"x-codeblock",children:(0,n.jsx)("pre",{style:{background:c?d:null},children:(0,n.jsx)("code",{className:t&&"lang-".concat(t),ref:r,children:a.join("\n")})})})}t(8978)},848:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Formula}});var n=t(7437),i=t(2265),l=t(3236);function Formula(e){let r=(0,i.useRef)(),{text:t=""}=e;return(0,i.useLayoutEffect)(()=>{l.Z.render(t,r.current,{output:"html",strict:!1})},[t]),(0,n.jsx)("div",{className:"x-formula",ref:r})}t(8704)},8411:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Image}});var n=t(7437);t(5612);var i=t(6691),l=t.n(i);function Image(e){let{invertInDarkTheme:r,src:t,width:i,...s}=e;return(0,n.jsx)("div",{className:"x-image-wrapper".concat(r?" x-image-invert":""),children:(0,n.jsx)(l(),{alt:"img",src:!0,style:{width:i}})})}},8275:function(e,r,t){"use strict";t.r(r),t.d(r,{Oli:function(){return Oli},Uli:function(){return Uli}});var n=t(7437),i=t(9226),l=t(2229);function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:r}=e;return(0,n.jsxs)("div",{className:"x-uli",children:[(0,n.jsx)("div",{className:"x-uli-marker",children:(0,n.jsx)("div",{className:"x-uli-marker-dot"})}),(0,n.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(r)?(0,n.jsx)(l.Z,{children:r}):r})]})}function Oli(e){let{reset:r,children:t}=e,{addOliIndex:s,resetOliIndex:c}=(0,i.useGlobalContext)();return(0,n.jsxs)("div",{className:"x-oli",children:[(0,n.jsx)("div",{className:"x-oli-number",children:(void 0!==r?c(+r):s())+"."}),(0,n.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(t)?(0,n.jsx)(l.Z,{children:t}):t})]})}t(340)},2229:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(7437),i=t(3236);function P(e){let{withMarginTop:r=!1,noMarginBottom:t=!1,children:l=""}=e,s=Array.isArray(l)?l.join(""):l;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,r)=>i.Z.renderToString(r,{output:"html",strict:!1})),(0,n.jsx)("p",{className:"x-p".concat(r?" with-margin-top":"").concat(t?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}t(7725)},4484:function(e,r,t){"use strict";t.r(r),t.d(r,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var n=t(7437),i=t(2265),l=t(9226);function Title(e){let{children:r}=e;return(0,i.useLayoutEffect)(()=>{document.title=r},[r]),(0,n.jsx)("h1",{className:"x-title",children:r})}function H1(e){let{href:r,excludeFromContents:t,children:s}=e,c=(0,i.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!t)return a(e=>[...e,c]),()=>o(c)},[s,t]),(0,n.jsx)("h2",{className:"x-h1",ref:c,children:r?(0,n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(e){let{href:r,excludeFromContents:t,children:s}=e,c=(0,i.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,l.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!t)return a(e=>[...e,c]),()=>o(c)},[s,t]),(0,n.jsx)("h3",{className:"x-h2",ref:c,children:r?(0,n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(e){let{href:r,children:t}=e;return(0,n.jsx)("h4",{className:"x-h3",children:r?(0,n.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:t}):t})}function Br(){return(0,n.jsx)("div",{className:"x-br"})}function Divider(){return(0,n.jsx)("div",{className:"x-divider"})}t(5533)},9226:function(e,r,t){"use strict";t.r(r),t.d(r,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var n=t(7437),i=t(2265);let l=(0,i.createContext)(),useGlobalContext=()=>(0,i.useContext)(l),GlobalProvider=e=>{let{children:r}=e,[t,s]=(0,i.useState)(!1),[c,a]=(0,i.useState)([]),o=(0,i.useRef)(0),u={showSidebar:t,setShowSidebar:s,setTitleNodeRefs:a,removeTitleNodeRefs:e=>{a(r=>r.filter(r=>r!==e))},titleNodes:c.map(e=>e.current).sort((e,r)=>e.offsetTop-r.offsetTop),addOliIndex:()=>(o.current+=1,o.current),resetOliIndex:e=>(o.current=e,e)};return(0,n.jsx)(l.Provider,{value:u,children:r})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},5504:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/fig1.e8ddb8d5.png",height:1954,width:2508,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAmUlEQVR42mMAAg4gFgZiZgYEYIOL5fVfTFyy86nBjpOvvGGymw4/9d9+4o3+1mMvwxlyJlz1XLrzscW2Yy+SYQo2H3meAsT2W44+LwALbDv+UmPL0Rc5MAVbDj9J2XHytS1QrAwsADRKeNvxV0ZQeY5pa26nL97x1HD36deGDFuOvWSE6exYfIeFAQgKJ19Nye6/rMbAwMAAACbXQgGe3R4LAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[954,202,971,472,744],function(){return e(e.s=2140)}),_N_E=e.O()}]);