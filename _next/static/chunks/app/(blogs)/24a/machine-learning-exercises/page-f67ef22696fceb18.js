(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{8896:function(e,t,r){Promise.resolve().then(r.bind(r,1702)),Promise.resolve().then(r.bind(r,6768)),Promise.resolve().then(r.bind(r,6395)),Promise.resolve().then(r.bind(r,1295)),Promise.resolve().then(r.bind(r,4484)),Promise.resolve().then(r.bind(r,9708)),Promise.resolve().then(r.t.bind(r,8875,23)),Promise.resolve().then(r.bind(r,848)),Promise.resolve().then(r.t.bind(r,6301,23)),Promise.resolve().then(r.bind(r,8411)),Promise.resolve().then(r.bind(r,8275)),Promise.resolve().then(r.t.bind(r,7725,23)),Promise.resolve().then(r.t.bind(r,8046,23))},9708:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return CodeBlock}});var n=r(7437),A=r(2265),i=r(2686),l=r.n(i);function CodeBlock(e){let t=(0,A.useRef)(),{language:r,code:i,highlightLines:a}=e,s=i.split("\n").map(e=>e.trimRight());s[0]||(s=s.slice(1));let c=s[0].length-s[0].trimStart().length;s=s.map(e=>e.slice(c));let u=a?a.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],o="linear-gradient(180deg"+u.map(e=>{let[t,r]=e;return", transparent ".concat(24*t,"px, ")+"var(--bg-transparent-golden) ".concat(24*t,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")}).join("")+")";return(0,A.useLayoutEffect)(()=>{l().highlightElement(t.current)},[i]),(0,n.jsx)("div",{className:"x-codeblock",children:(0,n.jsx)("pre",{style:{background:a?o:null},children:(0,n.jsx)("code",{className:r&&"lang-".concat(r),ref:t,children:s.join("\n")})})})}r(8978)},848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Formula}});var n=r(7437),A=r(2265),i=r(3236);function Formula(e){let t=(0,A.useRef)(),{text:r=""}=e;return(0,A.useLayoutEffect)(()=>{i.Z.render(r,t.current,{output:"html",strict:!1})},[r]),(0,n.jsx)("div",{className:"x-formula",ref:t})}r(8704)},8411:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Image}});var n=r(7437);r(5612);var A=r(6691),i=r.n(A);function Image(e){let{invertInDarkTheme:t,src:r,width:A,...l}=e;return(0,n.jsx)("div",{className:"x-image-wrapper".concat(t?" x-image-invert":""),children:(0,n.jsx)(i(),{alt:"img",src:r,style:{width:A}})})}},8275:function(e,t,r){"use strict";r.r(t),r.d(t,{Oli:function(){return Oli},Uli:function(){return Uli}});var n=r(7437),A=r(9226),i=r(2229);function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"x-uli",children:[(0,n.jsx)("div",{className:"x-uli-marker",children:(0,n.jsx)("div",{className:"x-uli-marker-dot"})}),(0,n.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(t)?(0,n.jsx)(i.Z,{children:t}):t})]})}function Oli(e){let{reset:t,children:r}=e,{addOliIndex:l,resetOliIndex:a}=(0,A.useGlobalContext)();return(0,n.jsxs)("div",{className:"x-oli",children:[(0,n.jsx)("div",{className:"x-oli-number",children:(void 0!==t?a(+t):l())+"."}),(0,n.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(r)?(0,n.jsx)(i.Z,{children:r}):r})]})}r(340)},2229:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(7437),A=r(3236);function P(e){let{withMarginTop:t=!1,noMarginBottom:r=!1,children:i=""}=e,l=Array.isArray(i)?i.join(""):i;return l=l.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,t)=>A.Z.renderToString(t,{output:"html",strict:!1})),(0,n.jsx)("p",{className:"x-p".concat(t?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:l}})}r(7725)},4484:function(e,t,r){"use strict";r.r(t),r.d(t,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var n=r(7437),A=r(2265),i=r(9226);function Title(e){let{children:t}=e;return(0,A.useLayoutEffect)(()=>{document.title=t},[t]),(0,n.jsx)("h1",{className:"x-title",children:t})}function H1(e){let{href:t,excludeFromContents:r,children:l}=e,a=(0,A.useRef)(),{setTitleNodeRefs:s,removeTitleNodeRefs:c}=(0,i.useGlobalContext)();return(0,A.useLayoutEffect)(()=>{if(!r)return s(e=>[...e,a]),()=>c(a)},[l,r]),(0,n.jsx)("h2",{className:"x-h1",ref:a,children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:l}):l})}function H2(e){let{href:t,excludeFromContents:r,children:l}=e,a=(0,A.useRef)(),{setTitleNodeRefs:s,removeTitleNodeRefs:c}=(0,i.useGlobalContext)();return(0,A.useLayoutEffect)(()=>{if(!r)return s(e=>[...e,a]),()=>c(a)},[l,r]),(0,n.jsx)("h3",{className:"x-h2",ref:a,children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:l}):l})}function H3(e){let{href:t,children:r}=e;return(0,n.jsx)("h4",{className:"x-h3",children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:r}):r})}function Br(){return(0,n.jsx)("div",{className:"x-br"})}function Divider(){return(0,n.jsx)("div",{className:"x-divider"})}r(5533)},9226:function(e,t,r){"use strict";r.r(t),r.d(t,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var n=r(7437),A=r(2265);let i=(0,A.createContext)(),useGlobalContext=()=>(0,A.useContext)(i),GlobalProvider=e=>{let{children:t}=e,[r,l]=(0,A.useState)(!1),[a,s]=(0,A.useState)([]),c=(0,A.useRef)(0),u={showSidebar:r,setShowSidebar:l,setTitleNodeRefs:s,removeTitleNodeRefs:e=>{s(t=>t.filter(t=>t!==e))},titleNodes:a.map(e=>e.current).sort((e,t)=>e.offsetTop-t.offsetTop),addOliIndex:()=>(c.current+=1,c.current),resetOliIndex:e=>(c.current=e,e)};return(0,n.jsx)(i.Provider,{value:u,children:t})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},1702:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig1.e0cc1435.png",height:363,width:439,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAhElEQVR42i2LXQ7CIBCEubT38RieQN98VxONUWtb0rCA/MOuUPolk5nJZJh17qcUZiSiYYbnF3xINbOcm12W41s89ie3O8j7aIgys9Z66zl8jFPXlzzfuNSuPUopKUZCQqQV7GJbQ5QghAk9V1i32g3nfOIxJVppQyeHoEEO4zLNoLT5A37toMDVYf0aAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},6768:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig2.cae2278c.png",height:211,width:327,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEX////+/v79/f38/Pz7+/v6+vr5+fn4+Pj39/f29vb19fX09PTz9PPz8/Py8vLx8fHv7+/q6+rp6uk9J5Y4AAAAL0lEQVR42g3ISwIAEAgFwBdK+RTuf1jNcoBqBUQEtpgDiU2wVRrQD6t7poa9u/gDEtoBFdENaekAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},6395:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig3.d4ad79bf.png",height:248,width:376,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEX////+/v79/f38/Pz7+/v6+vr5+fn4+fj39/f29vb19fXz8/Py8vLx8fHw8PDu7u7t7e3q6urgB5K7AAAAL0lEQVR42g3HyQEAEAwEwF0krhz03yzzG2QFQBI2WAt/ZEfXmQ4tcXwNoqnoNcEDEuIA/uDdg7oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},1295:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig4.5b1099a8.jpg",height:135,width:895,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAEACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAq4H/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAQABPwCX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:1}}},function(e){e.O(0,[954,202,971,472,744],function(){return e(e.s=8896)}),_N_E=e.O()}]);