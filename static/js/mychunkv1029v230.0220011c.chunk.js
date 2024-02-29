"use strict";(self.webpackChunkgithubiov2=self.webpackChunkgithubiov2||[]).push([[2216],{8335:(e,r,n)=>{n.r(r),n.d(r,{default:()=>l});var t=n(8433),i=n(6417);function l(e){let{title:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z.Title,{children:r}),(0,i.jsx)(t.Z.H1,{children:"\u4e00\u7ea7\u6807\u9898"}),(0,i.jsx)(t.Z.H2,{children:"\u4e8c\u7ea7\u6807\u9898"}),(0,i.jsxs)(t.Z.HighlightBlock,{bgcolor:"gray",children:[(0,i.jsx)(t.Z.Uli,{children:"1"}),(0,i.jsx)(t.Z.P,{noMarginBottom:!0,children:"p"}),(0,i.jsx)(t.Z.Oli,{reset:2,children:"2"}),(0,i.jsx)(t.Z.P,{withMarginTop:!0,children:"p"})]}),(0,i.jsxs)(t.Z.FlexRow,{gap:"32px",width:"50%",children:[(0,i.jsx)(t.Z.Table,{fromText:"\n                    A|B|C\n                    1|2|3\n                    "}),(0,i.jsx)(t.Z.Formula,{text:"1+1=2"})]})]})}},8433:(e,r,n)=>{n.d(r,{Z:()=>j});var t={};n.r(t),n.d(t,{Br:()=>h,Divider:()=>x,H1:()=>a,H2:()=>o,H3:()=>d,Title:()=>s});var i=n(7313),l=n(7575),c=n(6417);function s(e){const{children:r}=e;return(0,i.useLayoutEffect)((()=>{document.title=r}),[r]),(0,c.jsx)("h1",{className:"x-title",children:r})}function a(e){const{href:r,excludeFromContents:n,children:t}=e,s=(0,i.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,l.b)();return(0,i.useLayoutEffect)((()=>{if(!n)return a((e=>[...e,s])),()=>o(s)}),[t,n]),(0,c.jsx)("h2",{className:"x-h1",ref:s,children:r?(0,c.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:t}):t})}function o(e){const{href:r,excludeFromContents:n,children:t}=e,s=(0,i.useRef)(),{setTitleNodeRefs:a,removeTitleNodeRefs:o}=(0,l.b)();return(0,i.useLayoutEffect)((()=>{if(!n)return a((e=>[...e,s])),()=>o(s)}),[t,n]),(0,c.jsx)("h3",{className:"x-h2",ref:s,children:r?(0,c.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:t}):t})}function d(e){const{href:r,children:n}=e;return(0,c.jsx)("h4",{className:"x-h3",children:r?(0,c.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:n}):n})}function h(){return(0,c.jsx)("div",{className:"x-br"})}function x(){return(0,c.jsx)("div",{className:"x-divider"})}var u=n(9803),g=n.n(u);var f=n(2038);function m(e){const{withMarginTop:r=!1,noMarginBottom:n=!1,children:t=""}=e;let i=Array.isArray(t)?t.join(""):t;return i=i.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,((e,r)=>f.Z.renderToString(r,{output:"html",strict:!1}))),(0,c.jsx)("p",{className:"x-p".concat(r?" with-margin-top":"").concat(n?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:i}})}function p(e){return"string"===typeof e||!!Array.isArray(e)&&e.every((e=>"string"===typeof e))}const j={...t,CodeBlock:function(e){const r=(0,i.useRef)(),{language:n,code:t,highlightLines:l}=e;let s=t.split("\n").map((e=>e.trimRight()));s[0]||(s=s.slice(1));const a=s[0].length-s[0].trimStart().length;s=s.map((e=>e.slice(a)));const o="linear-gradient(180deg"+(l?l.split(",").map((e=>e.includes("-")?[e.split("-")[0]-1,+e.split("-")[1]]:[e-1,+e])):[]).map((e=>{let[r,n]=e;return", transparent ".concat(24*r,"px, ")+"var(--bg-transparent-golden) ".concat(24*r,"px ").concat(24*n,"px, ")+"transparent ".concat(24*n,"px")})).join("")+")";return(0,i.useLayoutEffect)((()=>{g().highlightElement(r.current)}),[t]),(0,c.jsx)("div",{className:"x-codeblock",children:(0,c.jsx)("pre",{style:{background:l?o:null},children:(0,c.jsx)("code",{className:n&&"lang-".concat(n),ref:r,children:s.join("\n")})})})},FlexRow:function(e){const{children:r,width:n,gap:t,justifyContent:i,alignItems:l,flex1:s}=e;return(0,c.jsx)("div",{className:"x-flexrow".concat(s?" flex1":""),style:{width:n,gap:t,justifyContent:i,alignItems:l},children:r})},Formula:function(e){const r=(0,i.useRef)(),{text:n=""}=e;return(0,i.useLayoutEffect)((()=>{f.Z.render(n,r.current,{output:"html",strict:!1})}),[n]),(0,c.jsx)("div",{className:"x-formula",ref:r})},HighlightBlock:function(e){const{children:r,bgcolor:n="golden"}=e;return(0,c.jsx)("div",{className:"x-highlightblock".concat(" highlight-background-"+n),children:r})},Image:function(e){const{invertInDarkTheme:r,...n}=e;return(0,c.jsx)("div",{className:"x-image-wrapper".concat(r?" x-image-invert":""),children:(0,c.jsx)("img",{alt:"img",loading:"lazy",...n})})},Uli:function(e){const{children:r}=e;return(0,c.jsxs)("div",{className:"x-uli",children:[(0,c.jsx)("div",{className:"x-uli-marker",children:(0,c.jsx)("div",{className:"x-uli-marker-dot"})}),(0,c.jsx)("div",{className:"x-uli-content-wrapper",children:p(r)?(0,c.jsx)(m,{children:r}):r})]})},Oli:function(e){const{reset:r,children:n}=e,{addOliIndex:t,resetOliIndex:i}=(0,l.b)();return(0,c.jsxs)("div",{className:"x-oli",children:[(0,c.jsx)("div",{className:"x-oli-number",children:(void 0!==r?i(+r):t())+"."}),(0,c.jsx)("div",{className:"x-oli-content-wrapper",children:p(n)?(0,c.jsx)(m,{children:n}):n})]})},P:m,Table:function(e){const{fromText:r,children:n}=e;if(r){const e=r.trim().split("\n");return(0,c.jsx)("table",{className:"x-table",children:(0,c.jsx)("tbody",{children:e.map(((e,r)=>(0,c.jsx)("tr",{children:e.trim().split("|").map(((e,n)=>r?(0,c.jsx)("td",{children:e},n):(0,c.jsx)("th",{children:e},n)))},r)))})})}return(0,c.jsx)("table",{className:"x-table",children:(0,c.jsx)("tbody",{children:n})})}}}}]);