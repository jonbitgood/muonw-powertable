import{S as at,i as rt,s as ot,a as it,e as U,c as st,b as x,g as X,t as j,d as Z,f as V,h as B,j as lt,o as Ie,k as ct,l as ft,m as ut,n as Ee,p as K,q as dt,r as pt,u as mt,v as M,w as G,x as ie,y as H,z as J,A as de}from"./chunks/index-83a72ca5.js";import{S as tt,I as z,g as Je,f as Ke,a as ke,b as pe,s as W,i as ze,c as me,P as We,d as ht,e as _t,h as gt}from"./chunks/singletons-7662e2ee.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const o of bt){let r=n[o];Object.defineProperty(n,o,{get(){return e(),r},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function $t(a){return a.replace(/\/$/,"")+Rt}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Te(a)),he(a,e));const re=new Map;function St(a,e){const n=Te(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:r,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return he(a,e)}function It(a,e,n){if(re.size>0){const o=Te(a,n),r=re.get(o);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);re.delete(o)}}return he(e,n)}function Te(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Lt(e.body)}"]`),o}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Tt(a).map(o=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,T,k,F]=g;return e.push({name:k,matcher:F,optional:!!y,rest:!!T,chained:T?p===1&&t[0]==="":!1}),T?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Tt(a){return a.slice(1).split("/").filter(Pt)}function Nt(a,e,n){const o={},r=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=r[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let p=r.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)r[p]=r[p-1],p-=1;continue}return}o[f.name]=u}}if(!d)return o}function Re(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(a,e,n,o){const r=new Set(e);return Object.entries(n).map(([f,[u,p,g]])=>{const{pattern:y,params:T}=Ot(f),k={id:f,exec:F=>{const A=y.exec(F);if(A)return Nt(A,T,o)},errors:[1,...g||[]].map(F=>a[F]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[r.has(f),a[f]]}}function Ut(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ie(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),x(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),r!==(r=t[0][0])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function jt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ie(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),x(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][0])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Vt(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ie(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),x(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),r!==(r=t[0][1])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Ct(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ie(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),x(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),r!==(r=t[0][1])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function qt(a){let e,n,o;var r=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=M(r,d(a))),{c(){e&&G(e.$$.fragment),n=U()},l(t){e&&ie(e.$$.fragment,t),n=U()},m(t,f){e&&H(e,t,f),x(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),r!==(r=t[0][2])){if(e){X();const p=e;j(p.$$.fragment,1,0,()=>{J(p,1)}),Z()}r?(e=M(r,d(t)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&V(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&B(n),e&&J(e,t)}}}function Bt(a){let e,n,o,r;const d=[Ct,Vt],t=[];function f(u,p){return u[0][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),o=U()},l(u){n.l(u),o=U()},m(u,p){t[e].m(u,p),x(u,o,p),r=!0},p(u,p){let g=e;e=f(u),e===g?t[e].p(u,p):(X(),j(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),V(n,1),n.m(o.parentNode,o))},i(u){r||(V(n),r=!0)},o(u){j(n),r=!1},d(u){t[e].d(u),u&&B(o)}}}function Ye(a){let e,n=a[6]&&Xe(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ut(e);n&&n.l(r),r.forEach(B),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(o,r){x(o,e,r),n&&n.m(e,null)},p(o,r){o[6]?n?n.p(o,r):(n=Xe(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&B(e),n&&n.d()}}}function Xe(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,o){x(n,e,o)},p(n,o){o&128&&mt(e,n[7])},d(n){n&&B(e)}}}function Ft(a){let e,n,o,r,d;const t=[jt,Ut],f=[];function u(g,y){return g[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let p=a[5]&&Ye(a);return{c(){n.c(),o=it(),p&&p.c(),r=U()},l(g){n.l(g),o=st(g),p&&p.l(g),r=U()},m(g,y){f[e].m(g,y),x(g,o,y),p&&p.m(g,y),x(g,r,y),d=!0},p(g,[y]){let T=e;e=u(g),e===T?f[e].p(g,y):(X(),j(f[T],1,1,()=>{f[T]=null}),Z(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),V(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Ye(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){d||(V(n),d=!0)},o(g){j(n),d=!1},d(g){f[e].d(g),g&&B(o),p&&p.d(g),g&&B(r)}}}function xt(a,e,n){let{stores:o}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(o.page.notify);let g=!1,y=!1,T=null;return Ie(()=>{const k=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),k}),a.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,r=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(r)},[d,t,f,u,p,g,y,T,o,r]}class Mt extends at{constructor(e){super(),rt(this,e,xt,Ft,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Gt="modulepreload",Ht=function(a,e){return new URL(a,e).href},Ze={},D=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Ht(d,o),d in Ze)return;Ze[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!o)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Gt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Jt={},_e=[()=>D(()=>import("./chunks/0-abe36f10.js"),["./chunks/0-abe36f10.js","./chunks/_layout-7e4796dc.js","./components/pages/_layout.svelte-4888a9dc.js","./chunks/index-83a72ca5.js","./assets/_layout-6a9b217c.css"],import.meta.url),()=>D(()=>import("./chunks/1-b92cf4bd.js"),["./chunks/1-b92cf4bd.js","./components/error.svelte-b46235d7.js","./chunks/index-83a72ca5.js","./chunks/stores-cf41418f.js","./chunks/singletons-7662e2ee.js"],import.meta.url),()=>D(()=>import("./chunks/2-2a28439e.js"),["./chunks/2-2a28439e.js","./components/pages/examples/_layout.svelte-e3672d99.js","./chunks/index-83a72ca5.js","./chunks/stores-cf41418f.js","./chunks/singletons-7662e2ee.js","./assets/_layout-fc33dd4a.css"],import.meta.url),()=>D(()=>import("./chunks/3-016d65b4.js"),["./chunks/3-016d65b4.js","./components/pages/_page.svelte-dcb6a6b0.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js"],import.meta.url),()=>D(()=>import("./chunks/4-f60e72f7.js"),["./chunks/4-f60e72f7.js","./components/pages/examples/example1/_page.svelte-93e6cc7c.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js"],import.meta.url),()=>D(()=>import("./chunks/5-e4d51f54.js"),["./chunks/5-e4d51f54.js","./components/pages/examples/example10/_page.svelte-34d37548.js","./chunks/index-83a72ca5.js","./chunks/scores-6665db25.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-ffb3cd8c.css"],import.meta.url),()=>D(()=>import("./chunks/6-06075592.js"),["./chunks/6-06075592.js","./components/pages/examples/example2/_page.svelte-44e6b032.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js"],import.meta.url),()=>D(()=>import("./chunks/7-5d1a77f8.js"),["./chunks/7-5d1a77f8.js","./components/pages/examples/example3/_page.svelte-e432e1ed.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-e322aab6.css"],import.meta.url),()=>D(()=>import("./chunks/8-5399f532.js"),["./chunks/8-5399f532.js","./components/pages/examples/example4/_page.svelte-6bf2b81e.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js"],import.meta.url),()=>D(()=>import("./chunks/9-ac6dca01.js"),["./chunks/9-ac6dca01.js","./components/pages/examples/example5/_page.svelte-bd95e830.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-6887219d.css"],import.meta.url),()=>D(()=>import("./chunks/10-92ab0c34.js"),["./chunks/10-92ab0c34.js","./components/pages/examples/example6/_page.svelte-f951a298.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js"],import.meta.url),()=>D(()=>import("./chunks/11-dc8aa3f0.js"),["./chunks/11-dc8aa3f0.js","./components/pages/examples/example7/_page.svelte-e004f5d8.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-09080d18.css"],import.meta.url),()=>D(()=>import("./chunks/12-1a1d557a.js"),["./chunks/12-1a1d557a.js","./components/pages/examples/example8/_page.svelte-a0517057.js","./chunks/index-83a72ca5.js","./chunks/jobs-6e3cd3e4.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-b59a55ed.css"],import.meta.url),()=>D(()=>import("./chunks/13-0a1da104.js"),["./chunks/13-0a1da104.js","./components/pages/examples/example9/_page.svelte-cf84c7ad.js","./chunks/index-83a72ca5.js","./chunks/scores-6665db25.js","./chunks/PowerTable-29d16a3d.js","./assets/_page-ffb3cd8c.css"],import.meta.url)],Kt=[],zt={"/":[3],"/examples/example10":[5,[2]],"/examples/example1":[4,[2]],"/examples/example2":[6,[2]],"/examples/example3":[7,[2]],"/examples/example4":[8,[2]],"/examples/example5":[9,[2]],"/examples/example6":[10,[2]],"/examples/example7":[11,[2]],"/examples/example8":[12,[2]],"/examples/example9":[13,[2]]},Wt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Yt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,r])=>[o,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,Qt=-3,en=-4,tn=-5,nn=-6;function an(a){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function o(r,d=!1){if(r===Xt)return;if(r===Qt)return NaN;if(r===en)return 1/0;if(r===tn)return-1/0;if(r===nn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[r]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const f=new Array(t.length);n[r]=f;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Zt&&(f[u]=o(p))}}else{const f={};n[r]=f;for(const u in t){const p=t[u];f[u]=o(p)}}return n[r]}return o(0)}function rn(a){return a.filter(e=>e!=null)}const $e=Dt(_e,Kt,zt,Jt),Oe=_e[0],Pe=_e[1];Oe();Pe();let oe={};try{oe=JSON.parse(sessionStorage[tt])}catch{}function Le(a){oe[a]=me()}function on({target:a,base:e}){var Me;const n=document.documentElement,o=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,p=!0,g=!1,y=!1,T=!1,k=!1,F,A=(Me=history.state)==null?void 0:Me[z];A||(A=Date.now(),history.replaceState({...history.state,[z]:A},"",location.href));const ge=oe[A];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,Ne,se;async function De(){se=se||Promise.resolve(),await se,se=null;const i=new URL(location.href),s=fe(i,!0);r=null,await je(s,i,[])}async function we(i,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:h={},invalidateAll:m=!1},_,b){return typeof i=="string"&&(i=new URL(i,Je(document))),ue({url:i,scroll:s?me():null,keepfocus:l,redirect_chain:_,details:{state:h,replaceState:c},nav_token:b,accepted:()=>{m&&(k=!0)},blocked:()=>{},type:"goto"})}async function Ue(i){const s=fe(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return r={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(r=null),c))},r.promise}async function le(...i){const c=$e.filter(l=>i.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(c)}async function je(i,s,c,l,h={},m){var b,v;Ne=h;let _=i&&await qe(i);if(_||(_=await xe(s,{id:null},await ae(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Ne!==h)return!1;if(_.type==="redirect")if(c.length>10||c.includes(s.pathname))_=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(_.location,s).href,{},[...c,s.pathname],h),!1;else((v=(b=_.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await W.updated.check()&&await ne(s);if(o.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[z]=A+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(r=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),F.$set(_.props)):Ve(_),l){const{scroll:w,keepfocus:R}=l,{activeElement:O}=document;await de();const q=document.activeElement!==O&&document.activeElement!==document.body;if(!R&&!q&&await Se(),p){const L=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,_.props.page&&(Y=_.props.page),m&&m(),g=!1}function Ve(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=i.props.page,F=new Mt({target:a,props:{...i.props,stores:W},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(c)),u=!0}async function te({url:i,params:s,branch:c,status:l,error:h,route:m,form:_}){let b="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);i.pathname=wt(i.pathname,b),i.search=i.search;const v={type:"loaded",state:{url:i,params:s,branch:c,error:h,route:m},props:{components:rn(c).map(L=>L.node.component)}};_!==void 0&&(v.props.form=_);let w={},R=!Y,O=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],P=t.branch[L];(E==null?void 0:E.data)!==(P==null?void 0:P.data)&&(R=!0),E&&(w={...w,...E.data},R&&(v.props[`data_${O}`]=w),O+=1)}return(!t.url||i.href!==t.url.href||t.error!==h||_!==void 0&&_!==Y.form||R)&&(v.props.page={error:h,params:s,route:{id:(m==null?void 0:m.id)??null},status:l,url:new URL(i),form:_??null,data:R?w:Y.data}),v}async function ye({loader:i,parent:s,url:c,params:l,route:h,server_data_node:m}){var w,R,O;let _=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await i();if((w=v.universal)!=null&&w.load){let q=function(...E){for(const P of E){const{href:C}=new URL(P,c);b.dependencies.add(C)}};const L={route:{get id(){return b.route=!0,h.id}},params:new Proxy(l,{get:(E,P)=>(b.params.add(P),E[P])}),data:(m==null?void 0:m.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(E,P){let C;E instanceof Request?(C=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):C=E;const $=new URL(C,c).href;return q($),u?It(C,$,P):St(C,P)},setHeaders:()=>{},depends:q,parent(){return b.parent=!0,s()}};_=await v.universal.load.call(null,L)??null,_=_?await Yt(_):null}return{node:v,loader:i,server:m,universal:(R=v.universal)!=null&&R.load?{type:"data",data:_,uses:b}:null,data:_??(m==null?void 0:m.data)??null,slash:((O=v.universal)==null?void 0:O.trailingSlash)??(m==null?void 0:m.slash)}}function Ce(i,s,c,l,h){if(k)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&c)return!0;for(const m of l.params)if(h[m]!==t.params[m])return!0;for(const m of l.dependencies)if(o.some(_=>_(new URL(m))))return!0;return!1}function ve(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:c,params:l,route:h}){if((r==null?void 0:r.id)===i)return r.promise;const{errors:m,layouts:_,leaf:b}=h,v=[..._,b];m.forEach($=>$==null?void 0:$().catch(()=>{})),v.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const R=t.url?i!==t.url.pathname+t.url.search:!1,O=t.route?h.id!==t.route.id:!1,q=v.reduce(($,I,N)=>{var ee;const S=t.branch[N],Q=!!(I!=null&&I[0])&&((S==null?void 0:S.loader)!==I[1]||Ce($.some(Boolean),O,R,(ee=S.server)==null?void 0:ee.uses,l));return $.push(Q),$},[]);if(q.some(Boolean)){try{w=await et(c,q)}catch($){return ce({status:500,error:await ae($,{url:c,params:l,route:{id:h.id}}),url:c,route:h})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const P=v.map(async($,I)=>{var ee;if(!$)return;const N=t.branch[I],S=L==null?void 0:L[I];if((!S||S.type==="skip")&&$[1]===(N==null?void 0:N.loader)&&!Ce(E,O,R,(ee=N.universal)==null?void 0:ee.uses,l))return N;if(E=!0,(S==null?void 0:S.type)==="error")throw S;return ye({loader:$[1],url:c,params:l,route:h,parent:async()=>{var He;const Ge={};for(let be=0;be<I;be+=1)Object.assign(Ge,(He=await P[be])==null?void 0:He.data);return Ge},server_data_node:ve(S===void 0&&$[0]?{type:"skip"}:S??null,N==null?void 0:N.server)})});for(const $ of P)$.catch(()=>{});const C=[];for(let $=0;$<v.length;$+=1)if(v[$])try{C.push(await P[$])}catch(I){if(I instanceof Qe)return{type:"redirect",location:I.location};let N=500,S;if(L!=null&&L.includes(I))N=I.status??N,S=I.error;else if(I instanceof Ae)N=I.status,S=I.body;else{if(await W.updated.check())return await ne(c);S=await ae(I,{params:l,url:c,route:{id:h.id}})}const Q=await Be($,C,m);return Q?await te({url:c,params:l,branch:C.slice(0,Q.idx).concat(Q.node),status:N,error:S,route:h}):await xe(c,{id:h.id},S,N)}else C.push(void 0);return await te({url:c,params:l,branch:C,status:200,error:null,route:h,form:s?void 0:null})}async function Be(i,s,c){for(;i--;)if(c[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:i,error:s,url:c,route:l}){const h={},m=await Oe();let _=null;if(m.has_server_load)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ne(c)}const b=await ye({loader:Oe,url:c,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),v={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await te({url:c,params:h,branch:[b,v],status:i,error:s,route:null})}function fe(i,s){if(ze(i,e))return;const c=yt(i.pathname.slice(e.length)||"/");for(const l of $e){const h=l.exec(c);if(h)return{id:i.pathname+i.search,invalidating:s,route:l,params:vt(h),url:i}}}function Fe({url:i,type:s,intent:c,delta:l}){var b,v;let h=!1;const m={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:i},willUnload:!c,type:s};l!==void 0&&(m.delta=l);const _={...m,cancel:()=>{h=!0}};return y||d.before_navigate.forEach(w=>w(_)),h?null:m}async function ue({url:i,scroll:s,keepfocus:c,redirect_chain:l,details:h,type:m,delta:_,nav_token:b,accepted:v,blocked:w}){const R=fe(i,!1),O=Fe({url:i,type:m,delta:_,intent:R});if(!O){w();return}Le(A),v(),y=!0,u&&W.navigating.set(O),await je(R,i,l,{scroll:s,keepfocus:c,details:h},b,()=>{y=!1,d.after_navigate.forEach(q=>q(O)),W.navigating.set(null)})}async function xe(i,s,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await ce({status:l,error:c,url:i,route:s}):await ne(i)}function ne(i){return location.href=i.href,new Promise(()=>{})}function nt(){let i;n.addEventListener("mousemove",m=>{const _=m.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(m=>{for(const _ of m)_.isIntersecting&&(le(new URL(_.target.href).pathname),c.unobserve(_.target))},{threshold:0});function l(m,_){const b=Ke(m,n);if(!b)return;const{url:v,external:w}=ke(b,e);if(w)return;const R=pe(b);R.reload||(_<=R.preload_data?Ue(v):_<=R.preload_code&&le(v.pathname))}function h(){c.disconnect();for(const m of n.querySelectorAll("a")){const{url:_,external:b}=ke(m,e);if(b)continue;const v=pe(m);v.reload||(v.preload_code===We.viewport&&c.observe(m),v.preload_code===We.eager&&le(_.pathname))}}d.after_navigate.push(h),h()}return{after_navigate:i=>{Ie(()=>(d.after_navigate.push(i),()=>{const s=d.after_navigate.indexOf(i);d.after_navigate.splice(s,1)}))},before_navigate:i=>{Ie(()=>(d.before_navigate.push(i),()=>{const s=d.before_navigate.indexOf(i);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(i,s={})=>we(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(c=>c.href===s)}return De()},invalidateAll:()=>(k=!0,De()),preload_data:async i=>{const s=new URL(i,Je(document));await Ue(s)},preload_code:le,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const h=await Be(t.branch.length,c,l.errors);if(h){const m=await te({url:s,params:t.params,branch:c.slice(0,h.idx).concat(h.node),status:i.status??500,error:i.error,route:l});t=m.state,F.$set(m.props),de().then(Se)}}else if(i.type==="redirect")we(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...Y,form:i.data,status:i.status}};F.$set(s),i.type==="success"&&de().then(Se)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(m=>m(h))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(A);try{sessionStorage[tt]=JSON.stringify(oe)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=Ke(s.composedPath()[0],n);if(!c)return;const{url:l,external:h,target:m}=ke(c,e);if(!l)return;if(m==="_parent"||m==="_top"){if(window.parent!==window)return}else if(m&&m!=="_self")return;const _=pe(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(h||_.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[v,w]=l.href.split("#");if(w!==void 0&&v===location.href.split("#")[0]){T=!0,Le(A),t.url=l,W.page.set({...Y,url:l}),W.page.notify();return}ue({url:l,scroll:_.noscroll?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const m=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(ze(m,e))return;const _=s.target,{noscroll:b,reload:v}=pe(_);if(v)return;s.preventDefault(),s.stopPropagation();const w=new FormData(_),R=l==null?void 0:l.getAttribute("name");R&&w.append(R,(l==null?void 0:l.getAttribute("value"))??""),m.search=new URLSearchParams(w).toString(),ue({url:m,scroll:b?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[z]){if(s.state[z]===A)return;const l=s.state[z]-A;ue({url:new URL(location.href),scroll:oe[s.state[z]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[z]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[z]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&W.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:c,params:l,route:h,data:m,form:_})=>{f=!0;const b=new URL(location.href);({params:l={},route:h={id:null}}=fe(b,!1)||{});let v;try{const w=c.map(async(R,O)=>{const q=m[O];return ye({loader:_e[R],url:b,params:l,route:h,parent:async()=>{const L={};for(let E=0;E<O;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:ve(q)})});v=await te({url:b,params:l,branch:await Promise.all(w),status:i,error:s,form:_,route:$e.find(({id:R})=>R===h.id)??null})}catch(w){if(w instanceof Qe){await ne(new URL(w.location,location.href));return}v=await ce({status:w instanceof Ae?w.status:500,error:await ae(w,{url:b,params:l,route:h}),url:b,route:h})}Ve(v)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=$t(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await he(n.href),r=await o.json();if(!o.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ae(a,e){return a instanceof Ae?a.body:Wt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var r;o((r=getSelection())==null?void 0:r.removeAllRanges())})})}}async function un({env:a,hydrate:e,paths:n,target:o,version:r}){ht(n),gt(r);const d=on({target:o,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{un as start};
