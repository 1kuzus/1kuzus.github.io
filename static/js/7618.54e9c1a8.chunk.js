"use strict";(self.webpackChunkgithubiov2=self.webpackChunkgithubiov2||[]).push([[7618],{7618:(n,e,r)=>{r.r(e),r.d(e,{default:()=>a});var i=r(8433),t=r(6417);function a(n){let{title:e}=n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z.Title,{children:e}),(0,t.jsx)(i.Z.P,{children:"\u6211\u4eec\u5b9a\u4e49\u8fd9\u6837\u4e00\u4e2a\u6570\u7ec4\uff1a"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                import numpy\n                import torch\n\n                #numpy\n                arr=numpy.array([\n                    [1,4,5,7,8],\n                    [9,1,2,8,4],\n                    [8,5,1,3,6],\n                    [3,2,4,6,5],\n                ])\n\n                #torch\n                tsr=torch.tensor(arr)\n                "}),(0,t.jsx)(i.Z.P,{children:"\u6211\u4eec\u5e0c\u671b\u6cbf\u7b2c`1`\u7ef4\u5ea6\u4e5f\u5c31\u662f\u5217\u7ef4\u5ea6\u53d6\u524d`3`\u5927\u7684\u6570\u503c\uff0c\u4e5f\u5c31\u662f\u5176\u4ed6\u7ef4\u5ea6\u4fdd\u6301\u4e0d\u53d8\uff0c\u5c06\u5217\u7ef4\u5ea6\u53d8\u4e3a`3`\uff0c\u5e76\u4e14\u4fdd\u7559\u7684\u662f\u524d\u4e09\u5927\u7684\u5143\u7d20\u3002"}),(0,t.jsx)(i.Z.H1,{children:"pytorch"}),(0,t.jsx)(i.Z.P,{children:"\u5728pytorch\u4e2d\u5df2\u7ecf\u5185\u7f6e\u4e86`topk`\u51fd\u6570\uff1a"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                val,idx=torch.topk(tsr,k=3,dim=1)\n\n                print(val)\n                # tensor([[8, 7, 5],\n                #         [9, 8, 4],\n                #         [8, 6, 5],\n                #         [6, 5, 4]])\n\n                print(idx)\n                # tensor([[4, 3, 2],\n                #         [0, 3, 4],\n                #         [0, 4, 1],\n                #         [3, 4, 2]])\n                "}),(0,t.jsx)(i.Z.P,{children:"`val`\u8f93\u51fa\u4e86\u524d\u4e09\u5927\u5143\u7d20\u7684\u503c\uff0c`idx`\u662f\u7d22\u5f15\uff0c\u8fd9\u5df2\u7ecf\u662f\u60f3\u8981\u7684\u7ed3\u679c\u4e86\u3002"}),(0,t.jsx)(i.Z.H1,{children:"numpy"}),(0,t.jsx)(i.Z.P,{children:"numpy\u4e2d\u6ca1\u6709\u76f4\u63a5\u5b9e\u73b0`topk`\u529f\u80fd\u7684\u51fd\u6570\uff0c\u9700\u8981\u591a\u4e00\u4e9b\u6b65\u9aa4\uff1a"}),(0,t.jsx)(i.Z.P,{children:"\u9996\u5148\u4f7f\u7528`numpy.argpartition`\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u4f1a\u5c06\u4e0b\u6807\u4e3a`kth`\u7684\u5143\u7d20\u6392\u5217\u5230\u5176\u6b63\u786e\u4f4d\u7f6e\u5e76\u8fd4\u56de\u7d22\u5f15\uff0c--- \u4fdd\u8bc1\u5176\u5de6\u8fb9\u7684\u5143\u7d20\u90fd\u6bd4\u5b83\u5c0f\uff0c\u53f3\u8fb9\u7684\u5143\u7d20\u90fd\u6bd4\u5b83\u5927\uff0c\u4f46\u5de6\u53f3\u4e24\u4fa7\u7684\u5e8f\u5217\u5e76\u4e0d\u4e00\u5b9a\u662f\u6709\u5e8f\u7684\u3002"}),(0,t.jsx)(i.Z.P,{children:"\u7531\u4e8e`numpy.argpartition`\u7684\u6392\u5217\u987a\u5e8f\u662f\u4ece\u5c0f\u5230\u5927\uff0c\u4e3a\u4e86\u5f97\u5230\u4ece\u5927\u5230\u5c0f\u7684\u7d22\u5f15\uff0c\u5bf9\u8f93\u5165`arr`\u53d6\u4e86\u8d1f\u503c\u3002"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                idx=numpy.argpartition(-arr,kth=3,axis=1)\n                print(idx)\n                # [[3 4 2 1 0]\n                #  [3 0 4 2 1]\n                #  [0 4 1 3 2]\n                #  [3 4 2 0 1]]\n                "}),(0,t.jsx)(i.Z.P,{children:"\u7b2c\u4e8c\u6b65\uff0c\u6211\u4eec\u53ea\u7559\u4e0b\u524d`k`\u5927\u7684\u5143\u7d20\u7684\u7d22\u5f15\uff1a"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                idx=idx.take(indices=range(3),axis=1)\n                print(idx)\n                # [[3 4 2]\n                #  [3 0 4]\n                #  [0 4 1]\n                #  [3 4 2]]\n                "}),(0,t.jsx)(i.Z.P,{children:"\u7b2c\u4e09\u6b65\uff0c\u9700\u8981\u901a\u8fc7`numpy.take_along_axis`\u51fd\u6570\u5f97\u5230\u6309`idx`\u6392\u5217\u7684\u6570\u7ec4\u3002"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                val=numpy.take_along_axis(arr,indices=idx,axis=1)\n                print(val)\n                # [[7 8 5]\n                #  [8 9 4]\n                #  [8 6 5]\n                #  [6 5 4]]\n                "}),(0,t.jsx)(i.Z.P,{children:"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u6211\u4eec\u5df2\u7ecf\u5f97\u5230\u4e86*\u4e71\u5e8f*\u7684\u6570\u7ec4\u503c\u548c\u7d22\u5f15\u503c\uff0c\u56e0\u6b64\u6700\u540e\u4e00\u6b65\u662f\u4f7f\u7528`numpy.argsort`\u8fdb\u884c\u6392\u5e8f\u3002"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                sorted_idx=numpy.argsort(-val,axis=1)\n                idx=numpy.take_along_axis(idx,indices=sorted_idx,axis=1)\n                val=numpy.take_along_axis(val,indices=sorted_idx,axis=1)\n\n                print(val)\n                # [[8 7 5]\n                #  [9 8 4]\n                #  [8 6 5]\n                #  [6 5 4]]\n\n                print(idx)\n                # [[4 3 2]\n                #  [0 3 4]\n                #  [0 4 1]\n                #  [3 4 2]]\n                "}),(0,t.jsx)(i.Z.H1,{children:"\u5c01\u88c5"}),(0,t.jsx)(i.Z.P,{children:"\u6211\u4eec\u53ef\u4ee5\u5728numpy\u4e2d\u5c01\u88c5\u4e00\u4e2a\u548ctorch\u7684`topk`\u7c7b\u4f3c\u7684\u51fd\u6570\uff1a"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                def topk_numpy(arr,k,dim):\n                    idx=numpy.argpartition(-arr,kth=k,axis=dim)\n                    idx=idx.take(indices=range(k),axis=dim)\n                    val=numpy.take_along_axis(arr,indices=idx,axis=dim)\n                    sorted_idx=numpy.argsort(-val,axis=dim)\n                    idx=numpy.take_along_axis(idx,indices=sorted_idx,axis=dim)\n                    val=numpy.take_along_axis(val,indices=sorted_idx,axis=dim)\n                    return val,idx\n                "}),(0,t.jsx)(i.Z.HighlightBlock,{children:(0,t.jsx)(i.Z.P,{children:"\u8fd9\u4e2a\u51fd\u6570\u53ea\u5b9e\u73b0\u4e86torch\u5e93\u4e2d`topk`\u51fd\u6570\u6700\u57fa\u672c\u7684\u529f\u80fd\uff0c\u5e76\u4e0d\u5168\u9762~"})}),(0,t.jsx)(i.Z.P,{children:"\u68c0\u9a8c\u4e00\u4e0b\u662f\u5426\u6b63\u786e\uff1a"}),(0,t.jsx)(i.Z.CodeBlock,{language:"python",code:"\n                bigarr=numpy.random.rand(64,16,24,24)\n                bigtsr=torch.tensor(bigarr)\n\n                val_t,idx_t=torch.topk(bigtsr,k=7,dim=1)\n                val_n,idx_n=topk_numpy(bigarr,k=7,dim=1)\n\n                print(val_n.shape) #(64, 7, 24, 24)\n                print(numpy.all(val_t.numpy()==val_n)) #True\n                print(numpy.all(idx_t.numpy()==idx_n)) #True\n                "}),(0,t.jsx)(i.Z.H1,{children:"\u8ba8\u8bba"}),(0,t.jsx)(i.Z.P,{children:"\u4e0a\u8ff0\u65b9\u6cd5\u6838\u5fc3\u662f*\u5148\u5207\u7247\u3001\u518d\u6392\u5e8f*\u3002\u8fd9\u662f\u7531\u4e8e`argpartition`\u548c`argsort`\u7684\u6027\u80fd\u5dee\u5f02\uff1a"}),(0,t.jsx)(i.Z.P,{children:"`argsort`\u5bf9\u5168\u90e8\u6570\u7ec4\u8fdb\u884c\u6392\u5e8f\uff0c\u800c`argpartition`\u53ea\u8fdb\u884c\u4e00\u6b21\u7c7b\u4f3c\u5feb\u901f\u6392\u5e8f\u7b97\u6cd5\u4e2d\u7684\u5212\u5206\u64cd\u4f5c\uff0c\u56e0\u6b64`argpartition`\u6548\u7387\u66f4\u9ad8\u3002--- \u5bf9\u4e8e`topk`\u51fd\u6570\u60f3\u8981\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u5c3d\u7ba1\u5148\u5168\u6392\u5e8f\u3001\u518d\u5207\u7247\u4ece\u4ee3\u7801\u4e0a\u66f4\u597d\u7f16\u5199\uff0c\u4f46\u5f53`k`\u8fdc\u5c0f\u4e8e`dim`\u7ef4\u5ea6\u5927\u5c0f\u65f6\uff0c\u662f\u8f83\u4e3a\u4f4e\u6548\u7684\u505a\u6cd5\u3002"})]})}},8433:(n,e,r)=>{r.d(e,{Z:()=>f});var i={};r.r(i),r.d(i,{Br:()=>x,Divider:()=>h,H1:()=>c,H2:()=>o,H3:()=>d,Title:()=>s});var t=r(7313),a=r(7575),l=r(6417);function s(n){const{children:e}=n;return(0,t.useLayoutEffect)((()=>{document.title=e}),[e]),(0,l.jsx)("h1",{className:"x-title",children:e})}function c(n){const{href:e,excludeFromContents:r,children:i}=n,s=(0,t.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:o}=(0,a.b)();return(0,t.useLayoutEffect)((()=>{if(!r)return c((n=>[...n,s])),()=>o(s)}),[i,r]),(0,l.jsx)("h2",{className:"x-h1",ref:s,children:e?(0,l.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:i}):i})}function o(n){const{href:e,excludeFromContents:r,children:i}=n,s=(0,t.useRef)(),{setTitleNodeRefs:c,removeTitleNodeRefs:o}=(0,a.b)();return(0,t.useLayoutEffect)((()=>{if(!r)return c((n=>[...n,s])),()=>o(s)}),[i,r]),(0,l.jsx)("h3",{className:"x-h2",ref:s,children:e?(0,l.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:i}):i})}function d(n){const{href:e,children:r}=n;return(0,l.jsx)("h4",{className:"x-h3",children:e?(0,l.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:r}):r})}function x(){return(0,l.jsx)("div",{className:"x-br"})}function h(){return(0,l.jsx)("div",{className:"x-divider"})}var u=r(9803),p=r.n(u);var g=r(2038);function m(n){const{withMarginTop:e=!1,noMarginBottom:r=!1,children:i=""}=n;let t=Array.isArray(i)?i.join(""):i;return t=t.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,((n,e)=>g.Z.renderToString(e,{output:"html",strict:!1}))),(0,l.jsx)("p",{className:"x-p".concat(e?" with-margin-top":"").concat(r?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:t}})}function j(n){return"string"===typeof n||!!Array.isArray(n)&&n.every((n=>"string"===typeof n))}const f={...i,CodeBlock:function(n){const e=(0,t.useRef)(),{language:r,code:i,highlightLines:a}=n;let s=i.split("\n").map((n=>n.trimRight()));s[0]||(s=s.slice(1));const c=s[0].length-s[0].trimStart().length;s=s.map((n=>n.slice(c)));const o="linear-gradient(180deg"+(a?a.split(",").map((n=>n.includes("-")?[n.split("-")[0]-1,+n.split("-")[1]]:[n-1,+n])):[]).map((n=>{let[e,r]=n;return", transparent ".concat(24*e,"px, ")+"var(--bg-transparent-golden) ".concat(24*e,"px ").concat(24*r,"px, ")+"transparent ".concat(24*r,"px")})).join("")+")";return(0,t.useLayoutEffect)((()=>{p().highlightElement(e.current)}),[i]),(0,l.jsx)("div",{className:"x-codeblock",children:(0,l.jsx)("pre",{style:{background:a?o:null},children:(0,l.jsx)("code",{className:r&&"lang-".concat(r),ref:e,children:s.join("\n")})})})},FlexRow:function(n){const{children:e,width:r,gap:i,justifyContent:t,alignItems:a,flex1:s}=n;return(0,l.jsx)("div",{className:"x-flexrow".concat(s?" flex1":""),style:{width:r,gap:i,justifyContent:t,alignItems:a},children:e})},Formula:function(n){const e=(0,t.useRef)(),{text:r=""}=n;return(0,t.useLayoutEffect)((()=>{g.Z.render(r,e.current,{output:"html",strict:!1})}),[r]),(0,l.jsx)("div",{className:"x-formula",ref:e})},HighlightBlock:function(n){const{children:e,bgcolor:r="golden"}=n;return(0,l.jsx)("div",{className:"x-highlightblock".concat(" highlight-background-"+r),children:e})},Image:function(n){const{invertInDarkTheme:e,...r}=n;return(0,l.jsx)("div",{className:"x-image-wrapper".concat(e?" x-image-invert":""),children:(0,l.jsx)("img",{alt:"img",...r})})},Uli:function(n){const{children:e}=n;return(0,l.jsxs)("div",{className:"x-uli",children:[(0,l.jsx)("div",{className:"x-uli-marker",children:(0,l.jsx)("div",{className:"x-uli-marker-dot"})}),(0,l.jsx)("div",{className:"x-uli-content-wrapper",children:j(e)?(0,l.jsx)(m,{children:e}):e})]})},Oli:function(n){const{reset:e,children:r}=n,{addOliIndex:i,resetOliIndex:t}=(0,a.b)();return(0,l.jsxs)("div",{className:"x-oli",children:[(0,l.jsx)("div",{className:"x-oli-number",children:(void 0!==e?t(+e):i())+"."}),(0,l.jsx)("div",{className:"x-oli-content-wrapper",children:j(r)?(0,l.jsx)(m,{children:r}):r})]})},P:m,Table:function(n){const{fromText:e,children:r}=n;if(e){const n=e.trim().split("\n");return(0,l.jsx)("table",{className:"x-table",children:(0,l.jsx)("tbody",{children:n.map(((n,e)=>(0,l.jsx)("tr",{children:n.trim().split("|").map(((n,r)=>e?(0,l.jsx)("td",{children:n},r):(0,l.jsx)("th",{children:n},r)))},e)))})})}return(0,l.jsx)("table",{className:"x-table",children:(0,l.jsx)("tbody",{children:r})})}}}}]);