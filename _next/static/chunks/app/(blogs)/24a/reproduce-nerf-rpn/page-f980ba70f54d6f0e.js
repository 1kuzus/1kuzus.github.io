(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{2526:function(e,A,r){Promise.resolve().then(r.bind(r,557)),Promise.resolve().then(r.bind(r,3333)),Promise.resolve().then(r.bind(r,4484)),Promise.resolve().then(r.bind(r,9708)),Promise.resolve().then(r.t.bind(r,8875,23)),Promise.resolve().then(r.bind(r,848)),Promise.resolve().then(r.t.bind(r,6301,23)),Promise.resolve().then(r.bind(r,8411)),Promise.resolve().then(r.bind(r,8275)),Promise.resolve().then(r.t.bind(r,7725,23)),Promise.resolve().then(r.t.bind(r,8046,23))},9708:function(e,A,r){"use strict";r.r(A),r.d(A,{default:function(){return CodeBlock}});var t=r(7437),n=r(2265),i=r(2686),s=r.n(i);function CodeBlock(e){let A=(0,n.useRef)(),{language:r,code:i,highlightLines:l}=e,a=i.split("\n").map(e=>e.trimRight());a[0]||(a=a.slice(1));let c=a[0].length-a[0].trimStart().length;a=a.map(e=>e.slice(c));let o=l?l.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],u="linear-gradient(180deg"+o.map(e=>{let[A,r]=e;return", transparent ".concat(24*A,"px, ")+"var(--bg-transparent-golden) ".concat(24*A,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")}).join("")+")";return(0,n.useLayoutEffect)(()=>{s().highlightElement(A.current)},[i]),(0,t.jsx)("div",{className:"x-codeblock",children:(0,t.jsx)("pre",{style:{background:l?u:null},children:(0,t.jsx)("code",{className:r&&"lang-".concat(r),ref:A,children:a.join("\n")})})})}r(8978)},848:function(e,A,r){"use strict";r.r(A),r.d(A,{default:function(){return Formula}});var t=r(7437),n=r(2265),i=r(3236);function Formula(e){let A=(0,n.useRef)(),{text:r=""}=e;return(0,n.useLayoutEffect)(()=>{i.Z.render(r,A.current,{output:"html",strict:!1})},[r]),(0,t.jsx)("div",{className:"x-formula",ref:A})}r(8704)},8411:function(e,A,r){"use strict";r.r(A),r.d(A,{default:function(){return Image}});var t=r(7437);r(5612);var n=r(6691),i=r.n(n);function Image(e){let{invertInDarkTheme:A,src:r,width:n,...s}=e;return(0,t.jsx)("div",{className:"x-image-wrapper".concat(A?" x-image-invert":""),children:(0,t.jsx)(i(),{alt:"img",src:!0,style:{width:n}})})}},8275:function(e,A,r){"use strict";r.r(A),r.d(A,{Oli:function(){return Oli},Uli:function(){return Uli}});var t=r(7437),n=r(9226),i=r(2229);function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:A}=e;return(0,t.jsxs)("div",{className:"x-uli",children:[(0,t.jsx)("div",{className:"x-uli-marker",children:(0,t.jsx)("div",{className:"x-uli-marker-dot"})}),(0,t.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(A)?(0,t.jsx)(i.Z,{children:A}):A})]})}function Oli(e){let{reset:A,children:r}=e,{addOliIndex:s,resetOliIndex:l}=(0,n.useGlobalContext)();return(0,t.jsxs)("div",{className:"x-oli",children:[(0,t.jsx)("div",{className:"x-oli-number",children:(void 0!==A?l(+A):s())+"."}),(0,t.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(r)?(0,t.jsx)(i.Z,{children:r}):r})]})}r(340)},2229:function(e,A,r){"use strict";r.d(A,{Z:function(){return P}});var t=r(7437),n=r(3236);function P(e){let{withMarginTop:A=!1,noMarginBottom:r=!1,children:i=""}=e,s=Array.isArray(i)?i.join(""):i;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,A)=>n.Z.renderToString(A,{output:"html",strict:!1})),(0,t.jsx)("p",{className:"x-p".concat(A?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}r(7725)},4484:function(e,A,r){"use strict";r.r(A),r.d(A,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var t=r(7437),n=r(2265),i=r(9226);function Title(e){let{children:A}=e;return(0,n.useLayoutEffect)(()=>{document.title=A},[A]),(0,t.jsx)("h1",{className:"x-title",children:A})}function H1(e){let{href:A,excludeFromContents:r,children:s}=e,l=(0,n.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:c}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!r)return a(e=>[...e,l]),()=>c(l)},[s,r]),(0,t.jsx)("h2",{className:"x-h1",ref:l,children:A?(0,t.jsx)("a",{href:A,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(e){let{href:A,excludeFromContents:r,children:s}=e,l=(0,n.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:c}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!r)return a(e=>[...e,l]),()=>c(l)},[s,r]),(0,t.jsx)("h3",{className:"x-h2",ref:l,children:A?(0,t.jsx)("a",{href:A,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(e){let{href:A,children:r}=e;return(0,t.jsx)("h4",{className:"x-h3",children:A?(0,t.jsx)("a",{href:A,target:"_blank",rel:"noreferrer",children:r}):r})}function Br(){return(0,t.jsx)("div",{className:"x-br"})}function Divider(){return(0,t.jsx)("div",{className:"x-divider"})}r(5533)},9226:function(e,A,r){"use strict";r.r(A),r.d(A,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var t=r(7437),n=r(2265);let i=(0,n.createContext)(),useGlobalContext=()=>(0,n.useContext)(i),GlobalProvider=e=>{let{children:A}=e,[r,s]=(0,n.useState)(!1),[l,a]=(0,n.useState)([]),c=(0,n.useRef)(0),o={showSidebar:r,setShowSidebar:s,setTitleNodeRefs:a,removeTitleNodeRefs:e=>{a(A=>A.filter(A=>A!==e))},titleNodes:l.map(e=>e.current).sort((e,A)=>e.offsetTop-A.offsetTop),addOliIndex:()=>(c.current+=1,c.current),resetOliIndex:e=>(c.current=e,e)};return(0,t.jsx)(i.Provider,{value:o,children:A})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},557:function(e,A,r){"use strict";r.r(A),A.default={src:"/_next/static/media/fig1.0188d7f3.jpg",height:1066,width:2559,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAnQn/xAAZEAEBAQADAAAAAAAAAAAAAAABAwIABaH/2gAIAQEAAT8A7KtKTTW1Ez5z/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMv/aAAgBAgEBPwCMI//EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAgBAwEBPwBqf//Z",blurWidth:8,blurHeight:3}},3333:function(e,A,r){"use strict";r.r(A),A.default={src:"/_next/static/media/fig2.11ebdb93.jpg",height:1079,width:2552,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAkg//xAAcEAABAwUAAAAAAAAAAAAAAAADAAECBAUSIrL/2gAIAQEAAT8AuhJkoj5yd9h9L//EABcRAAMBAAAAAAAAAAAAAAAAAAADMoH/2gAIAQIBAT8AXGn/xAAWEQADAAAAAAAAAAAAAAAAAAAAAjL/2gAIAQMBAT8Aej//2Q==",blurWidth:8,blurHeight:3}}},function(e){e.O(0,[954,202,971,472,744],function(){return e(e.s=2526)}),_N_E=e.O()}]);