(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4693],{2034:function(t,e,n){Promise.resolve().then(n.bind(n,2454)),Promise.resolve().then(n.t.bind(n,7432,23)),Promise.resolve().then(n.t.bind(n,95,23)),Promise.resolve().then(n.t.bind(n,2012,23)),Promise.resolve().then(n.t.bind(n,4436,23)),Promise.resolve().then(n.t.bind(n,9227,23)),Promise.resolve().then(n.bind(n,4365)),Promise.resolve().then(n.t.bind(n,8039,23)),Promise.resolve().then(n.t.bind(n,2536,23)),Promise.resolve().then(n.t.bind(n,559,23)),Promise.resolve().then(n.bind(n,579))},2454:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var i=n(7437),o=n(2265);function s(t){let{children:e}=t;return(0,o.useEffect)(()=>{let t=document.getElementById("confetto-trigger"),e=document.getElementById("confetto-canvas"),n=document.getElementById("cheer-gif"),i=document.getElementById("dance-gif"),o=e.getContext("2d");e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight;let s=[],c=!0,r=[{front:"#ff5252a0",back:"#c41c00c0"},{front:"#feee6ba0",back:"#fbc442c0"},{front:"#ab47bca0",back:"#7b1fa2c0"},{front:"#00b8d0a0",back:"#0088acc0"},{front:"#4caf50a0",back:"#388e3cc0"}],a=(t,e)=>Math.random()*(e-t)+t,h=(t,e)=>{let n=a(t[0],t[1]),i=e[1]-e[0]+1,o=e[1]-Math.abs(a(-i,i));return o>=e[1]-1&&(o+=.25>Math.random()?a(1,3):0),{x:n,y:-o}};function l(){this.randomModifier=a(0,99),this.color=r[Math.floor(a(0,r.length))],this.dimensions={x:a(5,9),y:a(8,15)},this.position={x:a(e.width/2-30,e.width/2+30),y:a(400,360)},this.rotation=a(0,2*Math.PI),this.scale={x:1,y:1},this.velocity=h([-9,9],[6,11])}l.prototype.update=function(){this.velocity.x-=.04*this.velocity.x,this.velocity.y=Math.min(this.velocity.y+.15,3),this.velocity.x+=Math.random()>.5?Math.random():-Math.random(),this.position.x+=this.velocity.x,this.position.y+=2*this.velocity.y,this.scale.y=Math.cos((this.position.y+this.randomModifier)*.09)};let d=()=>{for(let t=0;t<40;t++)s.push(new l)},m=()=>{c=0===(s=s.filter(t=>t.position.y<e.height)).length,o.clearRect(0,0,e.width,e.height),c||(s.forEach(t=>{let e=t.dimensions.x*t.scale.x,n=t.dimensions.y*t.scale.y;o.translate(t.position.x,t.position.y),o.rotate(t.rotation),t.update(),o.fillStyle=t.scale.y>0?t.color.front:t.color.back,o.fillRect(-e/2,-n/2,e,n),o.setTransform(1,0,0,1,0,0)}),window.requestAnimationFrame(m))},f=()=>{d(),c&&window.requestAnimationFrame(m)};t.onclick=f;let u=0,y=()=>{2==++u&&f()};n.onload=y,i.onload=y;let v=()=>{e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("canvas",{id:"confetto-canvas"}),(0,i.jsx)("div",{id:"confetto-trigger",children:e})]})}n(3122)},3122:function(){},9227:function(){}},function(t){t.O(0,[2202,9919,7478,8069,560],function(){return t(t.s=2034)}),_N_E=t.O()}]);