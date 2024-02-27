"use strict";(self.webpackChunkgithubiov2=self.webpackChunkgithubiov2||[]).push([[1219,9463,5123],{1219:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});var r=t(8433),s=t(6417);function o(n){let{title:e}=n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z.Title,{children:e}),(0,s.jsx)(r.Z.H1,{children:"\u8bf4\u660e"}),(0,s.jsx)(r.Z.P,{children:"\u590d\u73b0\u4ed3\u5e93\uff1a@https://github.com/lyclyc52/NeRF_RPN[https://github.com/lyclyc52/NeRF_RPN]@"}),(0,s.jsx)(r.Z.P,{children:"\u8fd9\u9879\u7814\u7a76\u5728NeRF\u4e2d\u5f15\u5165RPN\uff0c\u7528\u4e8e3D\u7269\u4f53\u68c0\u6d4b\u548c\u76f8\u5173\u4efb\u52a1\u3002\u4f5c\u8005\u63d0\u4f9b\u4e86\u6539\u5199\u7684Instant-NGP\u4ee5\u4f9b\u53ef\u89c6\u53163D\u63d0\u8bae\u6846\u3002--- \u6211\u81ea\u5df1\u5728\u5c1d\u8bd5\u590d\u73b0\u7684\u65f6\u5019\u7ed5\u4e86\u4e00\u4e9b\u5f2f\u5b50\uff0c\u56e0\u6b64\u501f\u8fd9\u7bc7\u535a\u5ba2\u590d\u76d8\u4e00\u4e0b\u5f53\u65f6\u7684\u8fc7\u7a0b\u3002\u4ed3\u5e93\u63d0\u4f9b\u7684\u811a\u672c\u591a\u4e3a\u9002\u7528\u4e8elinux\u7cfb\u7edf\u7684`.sh`\u6587\u4ef6\uff0c--- \u800c\u6211\u81ea\u5df1\u7684\u8bbe\u5907\u662fwindows\u7cfb\u7edf\uff0c\u56e0\u6b64\u793a\u4f8b\u4e2d\u4f1a\u7ed9\u51fa\u9002\u7528\u4e8ewindows\u7cfb\u7edf\u7684\u76f8\u5e94\u6307\u4ee4\u3002"}),(0,s.jsx)(r.Z.H1,{children:"\u73af\u5883\u76f8\u5173"}),(0,s.jsx)(r.Z.H2,{children:"\u514b\u9686\u4ed3\u5e93"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"git clone https://github.com/lyclyc52/NeRF_RPN.git NeRFrpn"}),(0,s.jsx)(r.Z.P,{children:"\u73af\u5883\u914d\u7f6e\u53c2\u7167@\u5b98\u65b9\u4ed3\u5e93\u8bf4\u660e\u6587\u6863[https://github.com/lyclyc52/NeRF_RPN]@\u5373\u53ef\u3002"}),(0,s.jsx)(r.Z.H2,{children:"\u914d\u7f6eInstant-NGP Fork for NeRF Feature Extraction"}),(0,s.jsx)(r.Z.P,{children:"\u4f5c\u8005\u4fee\u6539\u4e86Instant-NGP\u7684\u4ed3\u5e93\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u5305\u62ec\u53ef\u89c6\u5316bbox\u5728\u5185\u7684\u529f\u80fd\u3002\u8bf4\u660e\u6587\u6863\u5728@\u8fd9\u91cc[https://github.com/zymk9/instant-ngp/tree/master/scripts]@\u3002"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"git clone --recursive https://github.com/zymk9/instant-ngp.git InstantNGPforked"}),(0,s.jsx)(r.Z.P,{children:"\u8fd9\u662fInstant-NGP\u4e00\u4e2a\u65e9\u671f\u7248\u672c\uff0c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u8fd0\u884c`build`\u8fc7\u7a0b\u3002\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003@\u8fd9\u91cc[https://github.com/zymk9/instant-ngp]@\u3002"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                cd InstantNGPforked\n                cmake . -B build\n                cmake --build build --config RelWithDebInfo -j\n                "}),(0,s.jsxs)(r.Z.HighlightBlock,{children:[(0,s.jsx)(r.Z.H3,{children:"\u9047\u5230\u95ee\u9898"}),(0,s.jsx)(r.Z.H3,{children:"git clone \u5931\u8d25\uff0c\u62a5\u9519 fatal: early EOF"}),(0,s.jsx)(r.Z.P,{children:"\u62a5\u9519\uff1a"}),(0,s.jsx)(r.Z.CodeBlock,{language:"none",code:"\n                    error: xxxx bytes of body are still expected\n                    fetch-pack: unexpected disconnect while reading sideband packet\n                    fatal: early EOF\n                    fatal: fetch-pack: invalid index-pack output\n                    "}),(0,s.jsx)(r.Z.P,{children:"\u89e3\u51b3\uff1a\u589e\u5927\u7f13\u51b2\u533a(`1048576000`\u662f`1G`)"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"git config --global http.postBuffer 1048576000"}),(0,s.jsx)(r.Z.H3,{children:"\u5b50\u6a21\u5757\u6ca1\u6709\u4e00\u6b21\u6027\u4e0b\u8f7d\u6210\u529f"}),(0,s.jsx)(r.Z.P,{children:"\u89e3\u51b3\uff1a\u8fdb\u5165\u76ee\u5f55\u624b\u52a8\u91cd\u65b0\u4e0b\u8f7d"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                    cd InstantNGPforked\n                    git submodule update --init --recursive\n                    "})]}),(0,s.jsx)(r.Z.H2,{children:"\u4e0b\u8f7d\u6570\u636e\u96c6"}),(0,s.jsx)(r.Z.P,{children:"\u4f5c\u8005\u63d0\u4f9b\u4e86\u6570\u636e\u96c6\u7684@OneDrive\u94fe\u63a5[https://hkustconnect-my.sharepoint.com/:f:/g/personal/bhuai_connect_ust_hk/Ekjf3YC0W9BMsc-jHWXI4xEBy5s_OJBLEbebNVIprd4zMg?e=FgbN9S]@\uff0c--- \u8fd9\u91cc\u4ee5`3D-FRONT`\u6570\u636e\u96c6\u4f5c\u4e3a\u4f8b\u5b50\uff0c\u9700\u8981\u4ece\u4f5c\u8005\u63d0\u4f9b\u7684\u94fe\u63a5\u4e2d\u4e0b\u8f7d`front3d_nerf_data.zip`\u548c`front3d_rpn_data.zip`\u3002"}),(0,s.jsx)(r.Z.P,{children:"\u5047\u8bbe\u6570\u636e\u96c6\u89e3\u538b\u7684\u8def\u5f84\u4e3a`E:\\front3d_nerf_data`\u548c`E:\\front3d_rpn_data`\u3002"}),(0,s.jsx)(r.Z.H2,{children:"\u53ef\u89c6\u5316\u6570\u636e\u96c6"}),(0,s.jsx)(r.Z.P,{children:"\u5728\u5b8c\u6210\u4e0a\u9762\u6b65\u9aa4\u540e\uff0c\u5c31\u53ef\u4ee5\u5148\u5229\u7528Instant-NGP\u7684UI\u53ef\u89c6\u5316\u6570\u636e\u96c6\u4e2d\u6807\u6ce8\u7684`ground truth`\u4e86\uff0c\u8fd9\u91cc\u4ee5\u573a\u666f`3dfront_0004_00`\u4e3a\u4f8b\uff1a"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                cd InstantNGPforked\n                .\\build\\testbed --scene E:\\front3d_nerf_data\\3dfront_0004_00\\train\n                "}),(0,s.jsx)(r.Z.P,{children:"\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u52fe\u9009UI`Debug visualization`\u4e0b\u7684`Visualize object bounding boxes`\u5c31\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"}),(0,s.jsx)(r.Z.Image,{src:t(9463),width:"100%"}),(0,s.jsx)(r.Z.H2,{children:"\u4e0b\u8f7d\u9884\u8bad\u7ec3\u7684\u6743\u91cd"}),(0,s.jsx)(r.Z.P,{children:"\u672c\u535a\u5ba2\u7ed9\u51fa\u7684\u793a\u4f8b\u9700\u8981\u5728\u4e0a\u9762\u7684OneDrive\u94fe\u63a5\u4e2d\u4e0b\u8f7d`nerf_rpn_model_release\\front3d_anchor_resnet50.pt`\u3002"}),(0,s.jsx)(r.Z.P,{children:"\u5047\u8bbe\u9884\u8bad\u7ec3\u6743\u91cd\u4fdd\u5b58\u7684\u8def\u5f84\u4e3a`NeRFrpn\\\\nerf_rpn\\weights\\front3d_anchor_resnet50.pt`\u3002"}),(0,s.jsx)(r.Z.H1,{children:"\u751f\u6210proposals"}),(0,s.jsx)(r.Z.P,{children:"\u63a5\u4e0b\u6765\uff0c\u5229\u7528\u9884\u8bad\u7ec3\u7684\u6743\u91cd\uff0c\u5199\u4e00\u4e2a`test`\u811a\u672c\u751f\u6210\u63d0\u8bae\u6846\u3002"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:'\n                # NeRFrpn\\nerf_rpn\\test.bat\n\n                set DATA_ROOT=E:\\front3d_rpn_data\n                cd NeRFrpn\\nerf_rpn\n\n                python -u run_rpn.py ^\n                    --mode "eval" ^\n                    --dataset_name front3d ^\n                    --resolution 160 ^\n                    --backbone_type resnet ^\n                    --features_path %DATA_ROOT%\\features ^\n                    --boxes_path %DATA_ROOT%\\obb ^\n                    --dataset_split %DATA_ROOT%\\3dfront_split.npz ^\n                    --save_path .\\results\\front3d_test ^\n                    --checkpoint .\\weights\\front3d_anchor_resnet50.pt ^\n                    --rpn_nms_thresh 0.3 ^\n                    --normalize_density ^\n                    --rotated_bbox ^\n                    --batch_size 1 ^\n                    --gpus 0 ^\n                    --output_proposals                \n                '}),(0,s.jsx)(r.Z.P,{children:"\u7531\u4e8e\u6211\u7684\u8bbe\u5907\u663e\u5b58\u5c0f\uff0c\u6240\u4ee5\u628a`batch_size`\u6539\u4e3a\u4e86`1`\u3002\u539f\u59cb\u7684\u53c2\u6570\u662f`2`\u3002"}),(0,s.jsx)(r.Z.P,{children:"\u8fd0\u884c\u540e\u4f1a\u5728`NeRFrpn\\\\nerf_rpn\\\\results\\\\front3d_test`\u4e2d\u5f97\u5230`eval.json`\u6587\u4ef6\u548c\u50a8\u5b58\u4e86`17`\u4e2a\u6d4b\u8bd5\u573a\u666f\u7684\u63d0\u8bae\u6846\u7684`proposals`\u76ee\u5f55\u3002"}),(0,s.jsxs)(r.Z.HighlightBlock,{children:[(0,s.jsx)(r.Z.H3,{children:"\u9047\u5230\u95ee\u9898"}),(0,s.jsx)(r.Z.H3,{children:"CUDA device \u4e0d\u5339\u914d"}),(0,s.jsx)(r.Z.P,{children:"\u62a5\u9519\uff1a\\nRuntimeError: Attempting to deserialize object on CUDA device 4 but torch.cuda.device_count() is 1. Please use torch.load with map_location to map your storages to an existing device."}),(0,s.jsx)(r.Z.P,{children:"\u89e3\u51b3\uff1a\u5728`run_rpn.py`\u627e\u5230\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801\uff1a"}),(0,s.jsx)(r.Z.CodeBlock,{language:"python",code:"checkpoint = torch.load(args.checkpoint)"}),(0,s.jsx)(r.Z.P,{children:"\u6211\u7684\u8bbe\u5907\u4e0a\u53ea\u6709\u4e00\u4e2aGPU\uff0c\u56e0\u6b64\u4fee\u6539\u4e3a\uff1a"}),(0,s.jsx)(r.Z.CodeBlock,{language:"python",code:"checkpoint = torch.load(args.checkpoint, map_location={'cuda:4':'cuda:0'})"})]}),(0,s.jsx)(r.Z.H1,{children:"\u8fd0\u884cproposals2ngp.py"}),(0,s.jsx)(r.Z.P,{children:"\u4e0b\u4e00\u6b65\u662f\u751f\u6210Instant-NGP\u6240\u9700\u7684`transform.json`\u3002"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                # NeRFrpn\\nerf_rpn\\proposals2ngp.bat\n\n                set DATA_DIR=E:\\\n                cd NeRFrpn\\nerf_rpn\n\n                python scripts\\proposals2ngp.py ^\n                    --bbox_format obb ^\n                    --dataset front3d ^\n                    --dataset_path %DATA_DIR%\\front3d_nerf_data ^\n                    --features_path %DATA_DIR%\\front3d_rpn_data\\features ^\n                    --proposals_path .\\results\\front3d_test\\proposals ^\n                    --output_dir .\\results\\proposals_to_ngp\n                "}),(0,s.jsx)(r.Z.P,{children:"\u8fd0\u884c\u540e\u4f1a\u5728`NeRFrpn\\\\nerf_rpn\\\\results\\\\proposals_to_ngp`\u4e2d\u5f97\u5230`17`\u4e2a\u6d4b\u8bd5\u573a\u666f\u7684`3dfront_xxxx_xx.json`\u6587\u4ef6\u3002"}),(0,s.jsx)(r.Z.P,{children:"\u63a5\u4e0b\u6765\uff0c\u628a\u6587\u4ef6`3dfront_0004_00.json`\u590d\u5236\u5230\u8def\u5f84`E:\\\\front3d_nerf_data\\\\3dfront_0004_00\\\\train`\u4e0b\uff0c\u7136\u540e\u542f\u52a8Instant-NGP\u7684UI\u5e76\u6307\u5b9a\u8fd9\u4e2a\u65b0\u7684`json`\u6587\u4ef6\uff1a"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                cd InstantNGPforked\n                .\\build\\testbed --scene E:\\front3d_nerf_data\\3dfront_0004_00\\train\\3dfront_0004_00.json\n                "}),(0,s.jsx)(r.Z.P,{children:"\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"}),(0,s.jsx)(r.Z.Image,{src:t(5123),width:"100%"}),(0,s.jsx)(r.Z.H1,{children:"\u6587\u4ef6\u7ed3\u6784\u53c2\u8003"}),(0,s.jsx)(r.Z.P,{children:"\u8fd9\u91cc\u5c55\u793a\u4e86\u524d\u9762\u6211\u4eec\u751f\u6210\u3001\u6216\u9700\u8981\u7528\u5230\u7684\u5404\u4e2a\u6587\u4ef6\u7684\u8def\u5f84\u793a\u610f\u3002\u6ce8\u610f\u8fd9\u5e76\u4e0d\u662f\u4ed3\u5e93\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u800c\u662f\u53ea\u5c55\u793a\u4e86\u524d\u9762\u63d0\u53ca\u7684\u6587\u4ef6\u3002"}),(0,s.jsx)(r.Z.CodeBlock,{language:"bash",code:"\n                <work_dir>\n                \u251c\u2500\u2500 InstantNGPforked\n                \u2514\u2500\u2500 NeRFrpn\n                    \u2514\u2500\u2500 nerf_rpn\n                        \u251c\u2500\u2500 results\n                            \u251c\u2500\u2500 front3d_test\n                                \u2514\u2500\u2500 proposals\n                                        3dfront_0004_00.npz\n                                        3dfront_0019_00.npz\n                                        ...\n                                        3dfront_1006_02.npz\n                                        3dfront_1014_02.npz\n                                    eval.json\n                            \u2514\u2500\u2500 proposals_to_ngp\n                                    3dfront_0004_00.json\n                                    3dfront_0019_00.json\n                                    ...\n                                    3dfront_1006_02.json\n                                    3dfront_1014_02.json\n                        \u251c\u2500\u2500 scripts\n                                proposals2ngp.py\n                        \u2514\u2500\u2500 weights\n                                front3d_anchor_resnet50.pt\n                            proposals2ngp.bat\n                            test.bat\n\n                E:\\\n                \u251c\u2500\u2500 front3d_nerf_data\n                    \u251c\u2500\u2500 3dfront_0000_00\n                    \u251c\u2500\u2500 3dfront_0000_01\n                    \u251c\u2500\u2500 ...\n                    \u251c\u2500\u2500 3dfront_0004_01\n                        \u251c\u2500\u2500 overview\n                        \u2514\u2500\u2500 train\n                            \u2514\u2500\u2500 images\n                                model.msgpack\n                                transforms.json\n                                3dfront_0004_00.json (copied from NeRFrpn\\nerf_rpn\\results\\proposals_to_ngp)\n                    \u251c\u2500\u2500 ...\n                    \u251c\u2500\u2500 3dfront_1015_02\n                    \u2514\u2500\u2500 3dfront_1015_04\n                \u2514\u2500\u2500 front3d_rpn_data\n                "})]})}},8433:(n,e,t)=>{t.d(e,{Z:()=>j});var r={};t.r(r),t.d(r,{Br:()=>h,Divider:()=>p,H1:()=>i,H2:()=>l,H3:()=>d,Title:()=>c});var s=t(7313),o=t(7575),a=t(6417);function c(n){const{children:e}=n;return(0,s.useLayoutEffect)((()=>{document.title=e}),[e]),(0,a.jsx)("h1",{className:"x-title",children:e})}function i(n){const{href:e,excludeFromContents:t,children:r}=n,c=(0,s.useRef)(),{setTitleNodeRefs:i,removeTitleNodeRefs:l}=(0,o.b)();return(0,s.useLayoutEffect)((()=>{if(!t)return i((n=>[...n,c])),()=>l(c)}),[r,t]),(0,a.jsx)("h2",{className:"x-h1",ref:c,children:e?(0,a.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:r}):r})}function l(n){const{href:e,excludeFromContents:t,children:r}=n,c=(0,s.useRef)(),{setTitleNodeRefs:i,removeTitleNodeRefs:l}=(0,o.b)();return(0,s.useLayoutEffect)((()=>{if(!t)return i((n=>[...n,c])),()=>l(c)}),[r,t]),(0,a.jsx)("h3",{className:"x-h2",ref:c,children:e?(0,a.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:r}):r})}function d(n){const{href:e,children:t}=n;return(0,a.jsx)("h4",{className:"x-h3",children:e?(0,a.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:t}):t})}function h(){return(0,a.jsx)("div",{className:"x-br"})}function p(){return(0,a.jsx)("div",{className:"x-divider"})}var f=t(9803),u=t.n(f);var x=t(2038);function g(n){const{withMarginTop:e=!1,noMarginBottom:t=!1,children:r=""}=n;let s=Array.isArray(r)?r.join(""):r;return s=s.replace(/--- /g,"").replace(/\\\\/g,"&#92;").replace(/\\`/g,"&#96;").replace(/\\\*/g,"&#42;").replace(/\\@/g,"&#64;").replace(/\\\$/g,"&#36;").replace(/\\n/g,"<br/>").replace(/`(.*?)`/g,'<code class="x-inline-highlight">$1</code>').replace(/\*(.*?)\*/g,'<span class="x-inline-strong">$1</span>').replace(/@(.*?)\[(.*?)\]@/g,'<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>').replace(/\$(.*?)\$/g,((n,e)=>x.Z.renderToString(e,{output:"html",strict:!1}))),(0,a.jsx)("p",{className:"x-p".concat(e?" with-margin-top":"").concat(t?" no-margin-bottom":""),dangerouslySetInnerHTML:{__html:s}})}function _(n){return"string"===typeof n||!!Array.isArray(n)&&n.every((n=>"string"===typeof n))}const j={...r,CodeBlock:function(n){const e=(0,s.useRef)(),{language:t,code:r,highlightLines:o}=n;let c=r.split("\n").map((n=>n.trimRight()));c[0]||(c=c.slice(1));const i=c[0].length-c[0].trimStart().length;c=c.map((n=>n.slice(i)));const l="linear-gradient(180deg"+(o?o.split(",").map((n=>n.includes("-")?[n.split("-")[0]-1,+n.split("-")[1]]:[n-1,+n])):[]).map((n=>{let[e,t]=n;return", transparent ".concat(24*e,"px, ")+"var(--bg-transparent-golden) ".concat(24*e,"px ").concat(24*t,"px, ")+"transparent ".concat(24*t,"px")})).join("")+")";return(0,s.useLayoutEffect)((()=>{u().highlightElement(e.current)}),[r]),(0,a.jsx)("div",{className:"x-codeblock",children:(0,a.jsx)("pre",{style:{background:o?l:null},children:(0,a.jsx)("code",{className:t&&"lang-".concat(t),ref:e,children:c.join("\n")})})})},FlexRow:function(n){const{children:e,width:t,gap:r,justifyContent:s,alignItems:o,flex1:c}=n;return(0,a.jsx)("div",{className:"x-flexrow".concat(c?" flex1":""),style:{width:t,gap:r,justifyContent:s,alignItems:o},children:e})},Formula:function(n){const e=(0,s.useRef)(),{text:t=""}=n;return(0,s.useLayoutEffect)((()=>{x.Z.render(t,e.current,{output:"html",strict:!1})}),[t]),(0,a.jsx)("div",{className:"x-formula",ref:e})},HighlightBlock:function(n){const{children:e,bgcolor:t="golden"}=n;return(0,a.jsx)("div",{className:"x-highlightblock".concat(" highlight-background-"+t),children:e})},Image:function(n){const{invertInDarkTheme:e,...t}=n;return(0,a.jsx)("div",{className:"x-image-wrapper".concat(e?" x-image-invert":""),children:(0,a.jsx)("img",{alt:"img",...t})})},Uli:function(n){const{children:e}=n;return(0,a.jsxs)("div",{className:"x-uli",children:[(0,a.jsx)("div",{className:"x-uli-marker",children:(0,a.jsx)("div",{className:"x-uli-marker-dot"})}),(0,a.jsx)("div",{className:"x-uli-content-wrapper",children:_(e)?(0,a.jsx)(g,{children:e}):e})]})},Oli:function(n){const{reset:e,children:t}=n,{addOliIndex:r,resetOliIndex:s}=(0,o.b)();return(0,a.jsxs)("div",{className:"x-oli",children:[(0,a.jsx)("div",{className:"x-oli-number",children:(void 0!==e?s(+e):r())+"."}),(0,a.jsx)("div",{className:"x-oli-content-wrapper",children:_(t)?(0,a.jsx)(g,{children:t}):t})]})},P:g,Table:function(n){const{fromText:e,children:t}=n;if(e){const n=e.trim().split("\n");return(0,a.jsx)("table",{className:"x-table",children:(0,a.jsx)("tbody",{children:n.map(((n,e)=>(0,a.jsx)("tr",{children:n.trim().split("|").map(((n,t)=>e?(0,a.jsx)("td",{children:n},t):(0,a.jsx)("th",{children:n},t)))},e)))})})}return(0,a.jsx)("table",{className:"x-table",children:(0,a.jsx)("tbody",{children:t})})}}},9463:(n,e,t)=>{n.exports=t.p+"static/media/fig1.4527055adb0d5e02d28b.jpg"},5123:(n,e,t)=>{n.exports=t.p+"static/media/fig2.a1c4445937cdf62165cb.jpg"}}]);