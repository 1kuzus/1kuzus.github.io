(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{5901:function(t,e,i){Promise.resolve().then(i.bind(i,5285))},5285:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return layout_BlogLayout}});var n=i(7437),l=i(2265),a=i(9226);function Contents_Contents(t){let{titleNodes:e}=t,[i,a]=(0,l.useState)(0),getMappedOffsetTop=(t,e)=>{let i=t.map(t=>t.offsetTop-80),n=e.scrollHeight-e.clientHeight,l=i.findLast(t=>t<=n)||0,a=i[t.length-1],line=(t,e,i,n,l)=>(n-e)/(i-t)*(l-t)+e;return i.map(t=>t<=l?t:line(l,l,a,n,t))};return(0,l.useLayoutEffect)(()=>{let scrollHandler=()=>{let t=getMappedOffsetTop(e,document.documentElement),i=t.findLastIndex(t=>t<=Math.ceil(document.documentElement.scrollTop));a(i)};return window.addEventListener("scroll",scrollHandler),()=>window.removeEventListener("scroll",scrollHandler)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{id:"contents-header",onClick:()=>{document.documentElement.scrollTo({top:0})},children:"本页目录"}),(0,n.jsx)("ul",{children:e.map((t,l)=>{let{className:a,textContent:o}=t;return(0,n.jsx)("li",{className:"titletype-".concat(a).concat(l===i?" active":""),onClick:()=>{let t=getMappedOffsetTop(e,document.documentElement);document.documentElement.scrollTo({top:Math.ceil(t[l])})},children:o},l)})})]})}i(6952);var o=i(1396),r=i.n(o),s=i(9122),c=i(7667);function SidebarList(t){let{category:e,currentPath:i}=t,[a,o]=(0,l.useState)(!0);return(0,n.jsxs)("div",{className:"sidebar-list".concat(a?" show-list":""),children:[(0,n.jsxs)("div",{className:"sidebar-list-head",onClick:()=>o(!a),children:[(0,n.jsx)("h3",{className:"sidebar-list-category",children:e.categoryName+" (".concat(e.blogs.length,")")}),(0,n.jsx)("div",{className:"sidebar-list-category-rightarrow",children:(0,n.jsx)(s.AD,{})})]}),(0,n.jsx)("div",{className:"sidebar-list-ul-wrapper",children:(0,n.jsx)("ul",{className:"sidebar-list-ul",children:e.blogs.map((t,e)=>(0,n.jsx)("li",{className:"sidebar-list-li".concat(i===t.path?" active":""),children:(0,n.jsx)(r(),{className:"sidebar-list-link",href:t.path,children:(0,n.jsx)("span",{className:"sidebar-list-title",children:t.title})})},e))})})]})}function Sidebar_Sidebar(){return(0,n.jsx)(n.Fragment,{children:c.Z.map((t,e)=>(0,n.jsx)(SidebarList,{category:t},e))})}function layout_BlogLayout(t){let{children:e}=t,{showSidebar:i,setShowSidebar:o,titleNodes:r,resetOliIndex:s}=(0,a.useGlobalContext)();return s(0),(0,l.useLayoutEffect)(()=>{document.documentElement.scrollTo({top:0}),o(!1)},[e]),(0,n.jsxs)("div",{id:"blog-layout",children:[(0,n.jsx)("div",{id:"main",children:e}),(0,n.jsx)("div",{id:"sidebar",className:i?"show-sidebar":null,children:(0,n.jsx)(Sidebar_Sidebar,{})}),(0,n.jsx)("div",{id:"sidebar-mask",className:i?"show-sidebar":null,onClick:()=>{o(!i)}}),(null==r?void 0:r.length)?(0,n.jsx)("div",{id:"contents",children:(0,n.jsx)(Contents_Contents,{titleNodes:r})}):null]})}i(6176),i(6560)},7667:function(t,e){"use strict";e.Z=[{categoryName:"网络杂识",blogs:[{title:"数据库设计三大范式",path:"/23d/database-3nf/",time:"2023-10-17"},{title:"不统计Github仓库某个目录下的语言",path:"/23d/github-linguist-vendored/",time:"2023-12-31"},{title:"解决：DeepL该快捷键已被使用",path:"/24a/deepl-shortcut-setting/",time:"2024-02-01"},{title:"记录：使用--allow-unrelated-histories",path:"/24a/git-merge-allow-unrelated-histories/",time:"2024-02-02"}]},{categoryName:"深度学习",blogs:[{title:"论文速记",path:"/longtime/papers/"},{title:"行为识别R(2+1)D网络",path:"/23d/r2plus1d/",time:"2023-11-27"},{title:"目标检测评价指标mAP",path:"/23d/object-detection-map/",time:"2023-12-15"},{title:"学习RNN和LSTM",path:"/23d/learn-rnn-lstm/",time:"2023-12-17"},{title:"记录：复现NeRF-RPN代码",path:"/24a/reproduce-nerf-rpn/",time:"2024-01-01"}]},{categoryName:"Python学习",blogs:[{title:"在pytorch和numpy中取top-k值和索引",path:"/24a/torch-numpy-topk/",time:"2024-01-10"},{title:"Python面向对象编程",path:"/24a/object-oriented-programming-python/",time:"2024-02-29"}]},{categoryName:"前端与JavaScript",blogs:[{title:"JavaScript数组常用方法",path:"/23c/js-array/",time:"2023-09-02"},{title:"CSS实现auto高度的过渡动画",path:"/23d/css-auto-height-transition/",time:"2023-12-30"}]},{categoryName:"课程",blogs:[{title:"【模式识别】统计决策方法",path:"/23c/pattern-recognition-1/",time:"2023-08-31"},{title:"【模式识别】参数估计",path:"/23c/pattern-recognition-2/",time:"2023-09-12"},{title:"【模式识别】非参数估计",path:"/23c/pattern-recognition-3/",time:"2023-09-19"},{title:"【模式识别】线性学习器与线性分类器",path:"/23d/pattern-recognition-4/",time:"2023-10-24"},{title:"【计算机网络】协议总结",path:"/23d/protocols/",time:"2023-10-26"},{title:"【机器学习】习题",path:"/24a/machine-learning-exercises/",time:"2024-01-07"},{title:"【GAMES101】Transformation",path:"/24a/games101-01-transformation/",time:"2024-01-07"},{title:"【GAMES101】Rasterization",path:"/24a/games101-02-rasterization/",time:"2024-01-13"},{title:"【GAMES101】Shading",path:"/24a/games101-03-shading/",time:"2024-01-26"},{title:"【GAMES101】Geometry",path:"/24a/games101-04-geometry/",time:"2024-01-30"}]},{categoryName:"其他",blogs:[{title:"示例",path:"/longtime/demo/"},{title:"更新日志",path:"/longtime/updates/"}]}]},9122:function(t,e,i){"use strict";i.d(e,{AD:function(){return RightArrowIcon},ET:function(){return GithubIcon},K7:function(){return LogoIcon},N3:function(){return LightThemeIcon},a3:function(){return DarkThemeIcon}});var n=i(7437);function LogoIcon(){return(0,n.jsx)("svg",{viewBox:"0 0 1560 1560",width:"36px",height:"36px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{fillRule:"evenodd",children:[(0,n.jsx)("path",{d:"M644 97h272.529L1189 780H916.471z",fill:"#00A8C4"}),(0,n.jsx)("path",{d:"M98 97h272.84L780 1120.73 1189.162 97H1462L916.438 1462H643.562z",fill:"#30303C"}),(0,n.jsx)("path",{d:"M98 1462L643.3 97H916L370.7 1462z",fill:"#00F8FF"})]})})}function LightThemeIcon(){return(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"20px",height:"20px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"#FCFCFC",d:"M512 61.44c13.312 0 25.252 7.639 29.942 19.17l27.566 67.972c11.92 29.348-4.178 62.075-35.943 73.094A65.946 65.946 0 01512 225.28c-33.935 0-61.44-25.416-61.44-56.77 0-6.8 1.331-13.558 3.912-19.928l27.586-67.973C486.728 69.08 498.647 61.44 512 61.44zm0 901.12c-13.332 0-25.272-7.639-29.942-19.17l-27.586-67.972a52.961 52.961 0 01-3.912-19.927c0-31.335 27.505-56.771 61.44-56.771a66.28 66.28 0 0121.565 3.604c31.765 11.019 47.862 43.746 35.943 73.114l-27.566 67.953c-4.69 11.53-16.63 19.169-29.942 19.169zM962.56 512c0 13.312-7.639 25.252-19.17 29.942l-67.972 27.566c-29.348 11.92-62.075-4.178-73.094-35.943A65.946 65.946 0 01798.72 512c0-33.935 25.416-61.44 56.77-61.44 6.8 0 13.558 1.331 19.928 3.912l67.973 27.586c11.53 4.67 19.169 16.589 19.169 29.942zm-901.12 0c0-13.332 7.639-25.272 19.17-29.942l67.972-27.586a52.9 52.9 0 0119.927-3.912c31.335 0 56.771 27.505 56.771 61.44a66.28 66.28 0 01-3.604 21.565c-11.019 31.765-43.746 47.862-73.114 35.943l-67.953-27.566C69.08 537.252 61.44 525.312 61.44 512zm131.953-318.587c9.42-9.42 23.265-12.452 34.734-7.618l67.563 28.549c29.184 12.35 40.94 46.858 26.256 77.107a65.946 65.946 0 01-12.698 17.817c-23.982 23.983-61.399 25.457-83.558 3.277a52.961 52.961 0 01-11.346-16.855l-28.55-67.543c-4.853-11.469-1.822-25.313 7.599-34.734zm637.194 637.194c-9.42 9.421-23.265 12.452-34.734 7.598l-67.543-28.549a52.961 52.961 0 01-16.876-11.325c-22.16-22.18-20.685-59.597 3.298-83.579a65.946 65.946 0 0117.817-12.698c30.25-14.684 64.758-2.928 77.107 26.256l28.55 67.563c4.833 11.47 1.802 25.293-7.62 34.734zm0-637.214c9.42 9.42 12.452 23.265 7.618 34.734l-28.549 67.563c-12.35 29.184-46.858 40.94-77.107 26.256a65.946 65.946 0 01-17.817-12.698c-23.983-23.982-25.457-61.399-3.277-83.558 4.792-4.834 10.506-8.663 16.855-11.346l67.543-28.55c11.469-4.853 25.313-1.822 34.734 7.599zM193.393 830.587c-9.421-9.42-12.452-23.265-7.598-34.734l28.549-67.543a52.618 52.618 0 0111.325-16.876c22.18-22.16 59.597-20.685 83.579 3.298a65.842 65.842 0 0112.698 17.817c14.684 30.25 2.928 64.758-26.256 77.107l-67.563 28.55c-11.47 4.833-25.293 1.802-34.734-7.62zM512 737.28c-124.416 0-225.28-100.864-225.28-225.28S387.584 286.72 512 286.72 737.28 387.584 737.28 512 636.416 737.28 512 737.28z"})})}function DarkThemeIcon(){return(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"20px",height:"20px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"#FCFCFC",d:"M524.8 938.667h-4.267a439.893 439.893 0 01-313.173-134.4 446.293 446.293 0 01-11.093-597.334A432.213 432.213 0 01366.933 90.027a42.667 42.667 0 0145.227 9.386 42.667 42.667 0 0110.24 42.667 358.4 358.4 0 0082.773 375.893 361.387 361.387 0 00376.747 82.774 42.667 42.667 0 0154.187 55.04 433.493 433.493 0 01-99.84 154.88 438.613 438.613 0 01-311.467 128z"})})}function GithubIcon(){return(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"36px",height:"36px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M411.306667 831.146667c3.413333-5.12 6.826667-10.24 6.826666-11.946667v-69.973333c-105.813333 22.186667-128-44.373333-128-44.373334-17.066667-44.373333-42.666667-56.32-42.666666-56.32-34.133333-23.893333 3.413333-23.893333 3.413333-23.893333 37.546667 3.413333 58.026667 39.253333 58.026667 39.253333 34.133333 58.026667 88.746667 40.96 110.933333 32.426667 3.413333-23.893333 13.653333-40.96 23.893333-51.2-85.333333-10.24-174.08-42.666667-174.08-187.733333 0-40.96 15.36-75.093333 39.253334-102.4-3.413333-10.24-17.066667-47.786667 3.413333-100.693334 0 0 32.426667-10.24 104.106667 39.253334 30.72-8.533333 63.146667-11.946667 95.573333-11.946667 32.426667 0 64.853333 5.12 95.573333 11.946667 73.386667-49.493333 104.106667-39.253333 104.106667-39.253334 20.48 52.906667 8.533333 90.453333 3.413333 100.693334 23.893333 27.306667 39.253333 59.733333 39.253334 102.4 0 145.066667-88.746667 177.493333-174.08 187.733333 13.653333 11.946667 25.6 34.133333 25.6 69.973333v104.106667c0 3.413333 1.706667 6.826667 6.826666 11.946667 5.12 6.826667 3.413333 18.773333-3.413333 23.893333-3.413333 1.706667-6.826667 3.413333-10.24 3.413333h-174.08c-10.24 0-17.066667-6.826667-17.066667-17.066666 0-5.12 1.706667-8.533333 3.413334-10.24z",fill:"#FCFCFC"})})}function RightArrowIcon(){return(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",width:"16px",height:"16px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M761.056 532.128c.512-.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84L335.2 813.632c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c.672-.672.928-1.6 1.6-2.304.512-.48 1.056-.832 1.568-1.344 2.72-2.848 4.16-6.336 6.016-9.6z",fill:"#50505c"})})}},9226:function(t,e,i){"use strict";i.r(e),i.d(e,{GlobalProvider:function(){return GlobalProvider},useGlobalContext:function(){return useGlobalContext}});var n=i(7437),l=i(2265);let a=(0,l.createContext)(),useGlobalContext=()=>(0,l.useContext)(a),GlobalProvider=t=>{let{children:e}=t,[i,o]=(0,l.useState)(!1),[r,s]=(0,l.useState)([]),c=(0,l.useRef)(0),d={showSidebar:i,setShowSidebar:o,setTitleNodeRefs:s,removeTitleNodeRefs:t=>{s(e=>e.filter(e=>e!==t))},titleNodes:r.map(t=>t.current).sort((t,e)=>t.offsetTop-e.offsetTop),addOliIndex:()=>(c.current+=1,c.current),resetOliIndex:t=>(c.current=t,t)};return(0,n.jsx)(a.Provider,{value:d,children:e})}},6560:function(){},6952:function(){},6176:function(){}},function(t){t.O(0,[176,971,472,744],function(){return t(t.s=5901)}),_N_E=t.O()}]);