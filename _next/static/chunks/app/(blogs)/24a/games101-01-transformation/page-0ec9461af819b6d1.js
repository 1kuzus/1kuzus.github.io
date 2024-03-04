(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{7098:function(A,e,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.bind(t,4292)),Promise.resolve().then(t.bind(t,6118)),Promise.resolve().then(t.bind(t,9553)),Promise.resolve().then(t.bind(t,438)),Promise.resolve().then(t.bind(t,4946)),Promise.resolve().then(t.bind(t,2827)),Promise.resolve().then(t.bind(t,4484)),Promise.resolve().then(t.bind(t,9708)),Promise.resolve().then(t.t.bind(t,8875,23)),Promise.resolve().then(t.bind(t,848)),Promise.resolve().then(t.t.bind(t,6301,23)),Promise.resolve().then(t.t.bind(t,5612,23)),Promise.resolve().then(t.bind(t,9841)),Promise.resolve().then(t.t.bind(t,7725,23)),Promise.resolve().then(t.t.bind(t,8046,23))},9708:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return CodeBlock}});var r=t(7437),n=t(2265),i=t(2686),s=t.n(i);function CodeBlock(A){let e=(0,n.useRef)(),{language:t,code:i,highlightLines:a}=A,l=i.split("\n").map(A=>A.trimRight());l[0]||(l=l.slice(1));let o=l[0].length-l[0].trimStart().length;l=l.map(A=>A.slice(o));let c=a?a.split(",").map(A=>A.includes("-")?[A.split("-")[0]-1,+A.split("-")[1]]:[A-1,+A]):[],g="linear-gradient(180deg"+c.map(A=>{let[e,t]=A;return", transparent ".concat(24*e,"px, ")+"var(--bg-transparent-golden) ".concat(24*e,"px ").concat(24*t,"px, ")+"transparent ".concat(24*t,"px")}).join("")+")";return(0,n.useLayoutEffect)(()=>{s().highlightElement(e.current)},[i]),(0,r.jsx)("div",{className:"x-codeblock",children:(0,r.jsx)("pre",{style:{background:a?g:null},children:(0,r.jsx)("code",{className:t&&"lang-".concat(t),ref:e,children:l.join("\n")})})})}t(8978)},848:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Formula}});var r=t(7437),n=t(2265),i=t(3236);function Formula(A){let e=(0,n.useRef)(),{text:t=""}=A;return(0,n.useLayoutEffect)(()=>{i.Z.render(t,e.current,{output:"html",strict:!1})},[t]),(0,r.jsx)("div",{className:"x-formula",ref:e})}t(8704)},9841:function(A,e,t){"use strict";t.r(e),t.d(e,{Oli:function(){return Oli},Uli:function(){return Uli}});var r=t(7437),n=t(9226),i=t(3236);function P(A){let{withMarginTop:e=!1,noMarginBottom:t=!1,children:n=""}=A,s=Array.isArray(n)?n.join(""):n;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(A,e)=>i.Z.renderToString(e,{output:"html",strict:!1})),(0,r.jsx)("p",{className:"x-p".concat(e?" with-margin-top":"").concat(t?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}function isStringOrStringArray(A){return"string"==typeof A||!!Array.isArray(A)&&A.every(A=>"string"==typeof A)}function Uli(A){let{children:e}=A;return(0,r.jsxs)("div",{className:"x-uli",children:[(0,r.jsx)("div",{className:"x-uli-marker",children:(0,r.jsx)("div",{className:"x-uli-marker-dot"})}),(0,r.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(e)?(0,r.jsx)(P,{children:e}):e})]})}function Oli(A){let{reset:e,children:t}=A,{addOliIndex:i,resetOliIndex:s}=(0,n.useGlobalContext)();return(0,r.jsxs)("div",{className:"x-oli",children:[(0,r.jsx)("div",{className:"x-oli-number",children:(void 0!==e?s(+e):i())+"."}),(0,r.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(t)?(0,r.jsx)(P,{children:t}):t})]})}t(7725),t(340)},4484:function(A,e,t){"use strict";t.r(e),t.d(e,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var r=t(7437),n=t(2265),i=t(9226);function Title(A){let{children:e}=A;return(0,n.useLayoutEffect)(()=>{document.title=e},[e]),(0,r.jsx)("h1",{className:"x-title",children:e})}function H1(A){let{href:e,excludeFromContents:t,children:s}=A,a=(0,n.useRef)(),{setTitleNodeRefs:l,removeTitleNodeRefs:o}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!t)return l(A=>[...A,a]),()=>o(a)},[s,t]),(0,r.jsx)("h2",{className:"x-h1",ref:a,children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:s}):s})}function H2(A){let{href:e,excludeFromContents:t,children:s}=A,a=(0,n.useRef)(),{setTitleNodeRefs:l,removeTitleNodeRefs:o}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!t)return l(A=>[...A,a]),()=>o(a)},[s,t]),(0,r.jsx)("h3",{className:"x-h2",ref:a,children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:s}):s})}function H3(A){let{href:e,children:t}=A;return(0,r.jsx)("h4",{className:"x-h3",children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:t}):t})}function Br(){return(0,r.jsx)("div",{className:"x-br"})}function Divider(){return(0,r.jsx)("div",{className:"x-divider"})}t(5533)},9226:function(A,e,t){"use strict";t.r(e),t.d(e,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var r=t(7437),n=t(2265);let i=(0,n.createContext)(),useGlobalContext=()=>(0,n.useContext)(i),GlobalProvider=A=>{let{children:e}=A,[t,s]=(0,n.useState)(!1),[a,l]=(0,n.useState)([]),o=(0,n.useRef)(0),c={showSidebar:t,setShowSidebar:s,setTitleNodeRefs:l,removeTitleNodeRefs:A=>{l(e=>e.filter(e=>e!==A))},titleNodes:a.map(A=>A.current).sort((A,e)=>A.offsetTop-e.offsetTop),addOliIndex:()=>(o.current+=1,o.current),resetOliIndex:A=>(o.current=A,A)};return(0,r.jsx)(i.Provider,{value:c,children:e})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},4292:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig1.af513b11.jpg",height:244,width:592,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAaEAACAgMAAAAAAAAAAAAAAAABAgAREiEy/9oACAEBAAE/AFvFNnsz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:3}},6118:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig2.8e2439f2.jpg",height:232,width:599,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArgP/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIREyEz/9oACAEBAAE/AJNbdPRf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:3}},9553:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig3.30226d6e.jpg",height:246,width:595,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArgT/xAAZEAACAwEAAAAAAAAAAAAAAAABAgARITH/2gAIAQEAAT8A4qGzjz//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:3}},438:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig4.64e25e92.jpg",height:293,width:711,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAaEAACAgMAAAAAAAAAAAAAAAABEQACAxIy/9oACAEBAAE/AKjbGG+jP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:3}},4946:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig5.0c9f9d40.jpg",height:549,width:1153,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAaEAACAgMAAAAAAAAAAAAAAAABAhEhABJR/9oACAEBAAE/ANINO9OSJPc//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4}},2827:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig6.3e6a920b.jpg",height:210,width:399,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAYEAADAQEAAAAAAAAAAAAAAAABAhEAMf/aAAgBAQABPwAKRY7du//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:4}}},function(A){A.O(0,[954,852,971,472,744],function(){return A(A.s=7098)}),_N_E=A.O()}]);