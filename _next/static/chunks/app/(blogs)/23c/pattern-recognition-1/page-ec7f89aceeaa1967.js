(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{9648:function(e,t,r){Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.bind(r,7056)),Promise.resolve().then(r.bind(r,5544)),Promise.resolve().then(r.bind(r,183)),Promise.resolve().then(r.bind(r,6988)),Promise.resolve().then(r.bind(r,7053)),Promise.resolve().then(r.bind(r,6509)),Promise.resolve().then(r.bind(r,2669)),Promise.resolve().then(r.bind(r,5691)),Promise.resolve().then(r.bind(r,2378)),Promise.resolve().then(r.bind(r,5071)),Promise.resolve().then(r.t.bind(r,5547,23)),Promise.resolve().then(r.bind(r,4484)),Promise.resolve().then(r.bind(r,9708)),Promise.resolve().then(r.t.bind(r,8875,23)),Promise.resolve().then(r.bind(r,848)),Promise.resolve().then(r.t.bind(r,6301,23)),Promise.resolve().then(r.t.bind(r,5612,23)),Promise.resolve().then(r.bind(r,9841)),Promise.resolve().then(r.t.bind(r,7725,23)),Promise.resolve().then(r.t.bind(r,8046,23))},9708:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return CodeBlock}});var n=r(7437),i=r(2265),A=r(2686),a=r.n(A);function CodeBlock(e){let t=(0,i.useRef)(),{language:r,code:A,highlightLines:u}=e,l=A.split("\n").map(e=>e.trimRight());l[0]||(l=l.slice(1));let s=l[0].length-l[0].trimStart().length;l=l.map(e=>e.slice(s));let c=u?u.split(",").map(e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e]):[],o="linear-gradient(180deg"+c.map(e=>{let[t,r]=e;return", transparent ".concat(24*t,"px, ")+"var(--bg-transparent-golden) ".concat(24*t,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")}).join("")+")";return(0,i.useLayoutEffect)(()=>{a().highlightElement(t.current)},[A]),(0,n.jsx)("div",{className:"x-codeblock",children:(0,n.jsx)("pre",{style:{background:u?o:null},children:(0,n.jsx)("code",{className:r&&"lang-".concat(r),ref:t,children:l.join("\n")})})})}r(8978)},848:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Formula}});var n=r(7437),i=r(2265),A=r(3236);function Formula(e){let t=(0,i.useRef)(),{text:r=""}=e;return(0,i.useLayoutEffect)(()=>{A.Z.render(r,t.current,{output:"html",strict:!1})},[r]),(0,n.jsx)("div",{className:"x-formula",ref:t})}r(8704)},9841:function(e,t,r){"use strict";r.r(t),r.d(t,{Oli:function(){return Oli},Uli:function(){return Uli}});var n=r(7437),i=r(9226),A=r(3236);function P(e){let{withMarginTop:t=!1,noMarginBottom:r=!1,children:i=""}=e,a=Array.isArray(i)?i.join(""):i;return a=a.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,(e,t)=>A.Z.renderToString(t,{output:"html",strict:!1})),(0,n.jsx)("p",{className:"x-p".concat(t?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:a}})}function isStringOrStringArray(e){return"string"==typeof e||!!Array.isArray(e)&&e.every(e=>"string"==typeof e)}function Uli(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"x-uli",children:[(0,n.jsx)("div",{className:"x-uli-marker",children:(0,n.jsx)("div",{className:"x-uli-marker-dot"})}),(0,n.jsx)("div",{className:"x-uli-content-wrapper",children:isStringOrStringArray(t)?(0,n.jsx)(P,{children:t}):t})]})}function Oli(e){let{reset:t,children:r}=e,{addOliIndex:A,resetOliIndex:a}=(0,i.useGlobalContext)();return(0,n.jsxs)("div",{className:"x-oli",children:[(0,n.jsx)("div",{className:"x-oli-number",children:(void 0!==t?a(+t):A())+"."}),(0,n.jsx)("div",{className:"x-oli-content-wrapper",children:isStringOrStringArray(r)?(0,n.jsx)(P,{children:r}):r})]})}r(7725),r(340)},4484:function(e,t,r){"use strict";r.r(t),r.d(t,{Br:function(){return Br},Divider:function(){return Divider},H1:function(){return H1},H2:function(){return H2},H3:function(){return H3},Title:function(){return Title}});var n=r(7437),i=r(2265),A=r(9226);function Title(e){let{children:t}=e;return(0,i.useLayoutEffect)(()=>{document.title=t},[t]),(0,n.jsx)("h1",{className:"x-title",children:t})}function H1(e){let{href:t,excludeFromContents:r,children:a}=e,u=(0,i.useRef)(),{setTitleNodeRefs:l,removeTitleNodeRefs:s}=(0,A.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!r)return l(e=>[...e,u]),()=>s(u)},[a,r]),(0,n.jsx)("h2",{className:"x-h1",ref:u,children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:a}):a})}function H2(e){let{href:t,excludeFromContents:r,children:a}=e,u=(0,i.useRef)(),{setTitleNodeRefs:l,removeTitleNodeRefs:s}=(0,A.useGlobalContext)();return(0,i.useLayoutEffect)(()=>{if(!r)return l(e=>[...e,u]),()=>s(u)},[a,r]),(0,n.jsx)("h3",{className:"x-h2",ref:u,children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:a}):a})}function H3(e){let{href:t,children:r}=e;return(0,n.jsx)("h4",{className:"x-h3",children:t?(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:r}):r})}function Br(){return(0,n.jsx)("div",{className:"x-br"})}function Divider(){return(0,n.jsx)("div",{className:"x-divider"})}r(5533)},9226:function(e,t,r){"use strict";r.r(t),r.d(t,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var n=r(7437),i=r(2265);let A=(0,i.createContext)(),useGlobalContext=()=>(0,i.useContext)(A),GlobalProvider=e=>{let{children:t}=e,[r,a]=(0,i.useState)(!1),[u,l]=(0,i.useState)([]),s=(0,i.useRef)(0),c={showSidebar:r,setShowSidebar:a,setTitleNodeRefs:l,removeTitleNodeRefs:e=>{l(t=>t.filter(t=>t!==e))},titleNodes:u.map(e=>e.current).sort((e,t)=>e.offsetTop-t.offsetTop),addOliIndex:()=>(s.current+=1,s.current),resetOliIndex:e=>(s.current=e,e)};return(0,n.jsx)(A.Provider,{value:c,children:t})}},5547:function(){},8978:function(){},8875:function(){},8704:function(){},6301:function(){},5612:function(){},340:function(){},7725:function(){},8046:function(){},5533:function(){},7056:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig1.6f8669cc.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAJ1BMVEX////+/v/+/v79/v/9/f79/f3+/Pz9/P37+/76+v//+Pj++Pn19P3YGIiPAAAAK0lEQVR42mNQVVIKYghVUgplCGJgUGUIlXBQZQjbMwFILDdQhUiohoYGAQCTPQgbttIKcgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},5544:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig10.34bcf3a9.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX+/v7+/f3+/Pz+/Pv9/Pz9+vr9+fn/8O3/7+7/7+3+7+/+7+797/D97+//7u7/7u3+7u797vD57/X97u747/X97e397Oz67PHw7v3/6ujw7fzy7Pn/6Ojy6/jn4fozduzKAAAAQElEQVR42mNgYGFiYmZiYWBg4eXmEeESZgUy+IUk+ARADE5pKQ4QQ1RSTpYdxBCTERcEiwgLAIEoGwMDKxgwAgBiuALe/4jmxwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},183:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig2.cf03a716.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAdElEQVR42lWMUQ7CMAxDe/97AlNHHH42aOq4rOwDTbJkW092kUQmqdZ6a0HOKqmIffM3fAA0o7uAjMgDkP5yyH2cAjRBksOx41PXYaYLkBmX9X7LWo+F/iDNxvLYnrvhepWAAMIdM5pla1kkZcSpHvw5M/UFW8W5Fn48FQgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},6988:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig3.48a42df8.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEX+/v79/f7+/Pv9/P39/Pz8/P78/P37+/39+vr8+vv8+vr6+v35+f35+fv5+fr87/D/7u3/7ez87u7+7e327vb17vjv7//v7/7v7/zv7v7u7v7u7v3t7v/96evt7f3t7fzu7P3s7P7r7P/16PLr6v7l5f8zyZPPAAAARklEQVR42h3IVRKAMAwFwIcFCS4plEDR+1+RoX87CxBVdZoANBvnzMoIJxURy4ib5Tp/RN39Pn6G7VCPvh3V7iVQZDkzBx+c2wRlMvIZcQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},7053:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig4.8b1cde7a.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEX+/v79/f7+/Pz+/Pv9/P39/Pz8/P78/P37+/z9+vr8+vr7+vz6+v35+f35+fr4+Pr97u787u//7ez87e/07/jv7//v7/3t7//v7v7v7v3u7v/u7v7u7v3t7f7t7f3t7fzs7P/s7P725/Hv6fnp6f/l5P7gbvPdAAAARUlEQVR42hXGRQKAMAwEwEWLBCdIUyj6/y9C5jSAMXWTpYCZFu+doz+WmYUQjfO5acLhfh9N3F+H1SRtt4rsFVDkJREFH6E4BIQugd3xAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6509:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig5.6c051253.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAeUlEQVR42kVMAQrDQAjr/x/atbeptBuF84wuNwaFYKJJXDIzEJE3uPK4kAxmeUOhDl+YPtykVFMlVYsQR58GC+ewV8lW6/Suyx3TSDWmD9f1896fUCnvPwMi9VhDzrbXts2n/wYoW4OoaVCKoLORmWBgDM7h4U4OIL9ji7kKmEvNUgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2669:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig6.90000365.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX////+/////v7+/v7+/v38//z9/v3+/f39/f37/vv9/Pz8/P78/P39+/v/+vr7+/7++vr6+v7/+Pj19f82b7YmAAAAOUlEQVR42i3GuQGAMAwEwYOTxPJj6L9XHHiikXGVscAdiFKmjEC5jiyzdoTfa/ruEOfj1gJ5A+LwDzRYAa0aqX3gAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5691:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig7.6df05e70.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX+/v79/f79/f3+/Pz9/Pz8/P78/P39+vr8+vv6+v35+f3/7+797+//7u387+/+7u367/L47/b57vT+7ezv7//v7/7u7/7v7v/t7//u7v7u7v3t7v//6Ojt7f3x6/ns7P/q7P/q6//85unn4/vKyX9mAAAARUlEQVR42h3IVxKAIAwFwKdGNGIX1NjL/e/IhL+dBSgjkxuAWtvPfmNQ3QzrIgp7PT7i+F9FOn23czrduIucFVCUzMxJAH1kA7ubvzxzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},2378:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig8.1872d7a3.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEX+/v79/f7+/Pz9/P39/Pz8/P78/P39+vr6+v35+f3/7+7+7/D+7+/+7+797+//7u387+/+7u7+7u367/L97u797e307/r07vnv7//v7/7z7vju7//u7/7v7v/t7//u7v7u7v3t7f/t7f3t7P7/5+b95+nq6v/j4v4iDKV2AAAARUlEQVR42mNgYGFiYmNlY2BgEeASlpFU4GBg4eMXk5aVBzJ4uJUVJUAMIVV1NRCDWVRFXA4sIsIrKCWvxMnAwA4EHByMAIyiBBrRaO+iAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5071:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/fig9.319a7937.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEX+/v79/f79/f3+/Pz9/Pz9+vr7+vz6+v35+v35+f3/7+7+7/D+7+/+7+797+//7u7/7u3+7u397u/87u767vP57vPw8P737vX97Ozz7vrv7//u7//27PTu7v7t7v/t7v7/6ejt7f7t7f3/6Ofo6v/l4fqoKEdyAAAAQElEQVR42g3HsRHAIAwDQFmWkztK9l8xHRUmGL57gwoGLFPbrP8dwva05iYwe0ynoB6VLO3Hxy3I/JY8aIg7YB7mYBNFaLnS/AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[954,852,971,472,744],function(){return e(e.s=9648)}),_N_E=e.O()}]);