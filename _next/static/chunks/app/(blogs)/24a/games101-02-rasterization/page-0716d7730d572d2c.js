(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{6665:function(A,e,t){Promise.resolve().then(t.t.bind(t,413,23)),Promise.resolve().then(t.bind(t,5168)),Promise.resolve().then(t.bind(t,2005)),Promise.resolve().then(t.bind(t,5624)),Promise.resolve().then(t.bind(t,4068)),Promise.resolve().then(t.bind(t,7082)),Promise.resolve().then(t.bind(t,6631)),Promise.resolve().then(t.bind(t,4484)),Promise.resolve().then(t.bind(t,9708)),Promise.resolve().then(t.t.bind(t,8875,23)),Promise.resolve().then(t.bind(t,848)),Promise.resolve().then(t.t.bind(t,6301,23)),Promise.resolve().then(t.t.bind(t,5612,23)),Promise.resolve().then(t.bind(t,9841)),Promise.resolve().then(t.t.bind(t,7725,23)),Promise.resolve().then(t.t.bind(t,8046,23))},9708:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return CodeBlock}});var r=t(7437),n=t(2265),i=t(2686),l=t.n(i);function CodeBlock(A){let e=(0,n.useRef)(),{language:t,code:i,highlightLines:s}=A,a=i.split("\n").map(A=>A.trimRight());a[0]||(a=a.slice(1));let o=a[0].length-a[0].trimStart().length;a=a.map(A=>A.slice(o));let u=s?s.split(",").map(A=>A.includes("-")?[A.split("-")[0]-1,+A.split("-")[1]]:[A-1,+A]):[],c="linear-gradient(180deg"+u.map(A=>{let[e,t]=A;return", transparent ".concat(24*e,"px, ")+"var(--bg-transparent-golden) ".concat(24*e,"px ").concat(24*t,"px, ")+"transparent ".concat(24*t,"px")}).join("")+")";return(0,n.useLayoutEffect)(()=>{l().highlightElement(e.current)},[i]),(0,r.jsx)("div",{className:"x-codeblock",children:(0,r.jsx)("pre",{style:{background:s?c:null},children:(0,r.jsx)("code",{className:t&&"lang-".concat(t),ref:e,children:a.join("\n")})})})}t(8978)},848:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Formula}});var r=t(7437),n=t(2265),i=t(3236);function Formula(A){let e=(0,n.useRef)(),{text:t=""}=A;return(0,n.useLayoutEffect)(()=>{i.Z.render(t,e.current,{output:"html",strict:!1})},[t]),(0,r.jsx)("div",{className:"x-formula",ref:e})}t(8704)},9841:function(A,e,t){"use strict";t.r(e),t.d(e,{Oli:function(){return Oli},Uli:function(){return Uli}});var r=t(7437),n=t(9226),i=t(3236);function P(A){let{withMarginTop:e=!1,noMarginBottom:t=!1,children:n=""}=A,l=Array.isArray(n)?n.join(""):n;return l=l.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(A,e)=>i.Z.renderToString(e,{output:"html",strict:!1})),(0,r.jsx)("p",{className:"x-p".concat(e?" with-margin-top":"").concat(t?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:l}})}function isStringOrStringArray(A){return"string"==typeof A||!!Array.isArray(A)&&A.every(A=>"string"==typeof A)}function Uli(A){let{children:e}=A;return(0,r.jsxs)("div",{className:"x-uli",children:[(0,r.jsx)("div",{className:"x-uli-marker",children:(0,r.jsx)("div",{className:"x-uli-marker-dot"})}),(0,r.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(e)?(0,r.jsx)(P,{children:e}):e})]})}function Oli(A){let{reset:e,children:t}=A,{addOliIndex:i,resetOliIndex:l}=(0,n.useGlobalContext)();return(0,r.jsxs)("div",{className:"x-oli",children:[(0,r.jsx)("div",{className:"x-oli-number",children:(void 0!==e?l(+e):i())+"."}),(0,r.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(t)?(0,r.jsx)(P,{children:t}):t})]})}t(7725),t(340)},4484:function(A,e,t){"use strict";t.r(e),t.d(e,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var r=t(7437),n=t(2265),i=t(9226);function Title(A){let{children:e}=A;return(0,n.useLayoutEffect)(()=>{document.title=e},[e]),(0,r.jsx)("h1",{className:"x-title",children:e})}function H1(A){let{href:e,excludeFromContents:t,children:l}=A,s=(0,n.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!t)return a(A=>[...A,s]),()=>o(s)},[l,t]),(0,r.jsx)("h2",{className:"x-h1",ref:s,children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:l}):l})}function H2(A){let{href:e,excludeFromContents:t,children:l}=A,s=(0,n.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,i.useGlobalContext)();return(0,n.useLayoutEffect)(()=>{if(!t)return a(A=>[...A,s]),()=>o(s)},[l,t]),(0,r.jsx)("h3",{className:"x-h2",ref:s,children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:l}):l})}function H3(A){let{href:e,children:t}=A;return(0,r.jsx)("h4",{className:"x-h3",children:e?(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:t}):t})}function Br(){return(0,r.jsx)("div",{className:"x-br"})}function Divider(){return(0,r.jsx)("div",{className:"x-divider"})}t(5533)},9226:function(A,e,t){"use strict";t.r(e),t.d(e,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var r=t(7437),n=t(2265);let i=(0,n.createContext)(),useGlobalContext=()=>(0,n.useContext)(i),GlobalProvider=A=>{let{children:e}=A,[t,l]=(0,n.useState)(!1),[s,a]=(0,n.useState)([]),o=(0,n.useRef)(0),u={showSidebar:t,setShowSidebar:l,setTitleNodeRefs:a,removeTitleNodeRefs:A=>{a(e=>e.filter(e=>e!==A))},titleNodes:s.map(A=>A.current).sort((A,e)=>A.offsetTop-e.offsetTop),addOliIndex:()=>(o.current+=1,o.current),resetOliIndex:A=>(o.current=A,A)};return(0,r.jsx)(i.Provider,{value:u,children:e})}},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},5168:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig1.1774f4c2.png",height:575,width:2098,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/Afn39/77xMMBAzU2mf4DA1/86ugAByIkoQDh4Gf+6Oj/AfXW1f3+sK4CAl9imPz+/WD+7ewABykroQC0sWf/9/f/7PQmvk6cQfwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},2005:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig2.93882cb3.png",height:554,width:954,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAa0lEQVR42hWMQQqDQBRD///TQl11WeiRes0eqZuC4AHc6Epx5k9ihEDyQojX/9edZo7e+vszPF+k0EJtR4EVonEdqYnkHnYZCTCG+z7mtoiFob44gNQKPev8SxiNQbImWyrr73HbJz/WiHICc8s+4h10mf8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},5624:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig3.2131eef8.png",height:553,width:954,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAZklEQVR42hXIwQ2DMBAEwN3zGUOkPKJUkApTZSpJCyCwztwi5jnM35dMAAkPLA2rRBBG5qkp0TR2bn/dAwIOkNAt1ooj4yheJDgkY0Tf7exiiZF4fugPl7XBeWSf2lulVhrnl9XlAov7MWhZXXBiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},4068:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig4.5e86838b.jpg",height:415,width:1566,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKoC/wD/xAAbEAABBAMAAAAAAAAAAAAAAAABAAIDEzFCsv/aAAgBAQABPwCAmzOju1//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAEDAQE/AHp//9k=",blurWidth:8,blurHeight:2}},7082:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig5.370c4be4.png",height:239,width:959,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPElEQVR4nB3KwRGAMAwDQckKNEiZlGe/AraTyfNulhHRnZkwirQXgHXVg305hujuXXPukEzjAPzfAbhuLR/hHLsq+rV+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},6631:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fig6.02a29ff6.jpg",height:514,width:833,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAugv/xAAcEAACAgIDAAAAAAAAAAAAAAACEQEDAAQjMWP/2gAIAQEAAT8AtF6yMKis4Jk5D16Tz//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwCI/8QAFREBAQAAAAAAAAAAAAAAAAAAAgD/2gAIAQMBAT8ASV//2Q==",blurWidth:8,blurHeight:5}}},function(A){A.O(0,[954,852,971,472,744],function(){return A(A.s=6665)}),_N_E=A.O()}]);