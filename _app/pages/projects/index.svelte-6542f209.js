import{S as v,i as M,s as P,a1 as b,w as j,k as S,l as m,x as d,m as q,y as h,g as _,a2 as C,q as p,o as u,B as w,d as k,Q as g,v as N,E as l,n as y,p as B}from"../../chunks/index-9cda7ee2.js";import{M as D}from"../../chunks/MetaTags-3b71643e.js";import{D as E,Y as I}from"../../chunks/runtime.esm-873126c5.js";import{P as Q}from"../../chunks/projects_preview-d9a8cb58.js";import"../../chunks/index-6b6d02a5.js";function T(n){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function Y(n){let t,a,e=n[1]&&$(n);return{c(){e&&e.c(),t=m()},l(o){e&&e.l(o),t=m()},m(o,c){e&&e.m(o,c),_(o,t,c),a=!0},p(o,c){o[1]?e?(e.p(o,c),c&2&&p(e,1)):(e=$(o),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(y(),u(e,1,1,()=>{e=null}),B())},i(o){a||(p(e),a=!0)},o(o){u(e),a=!1},d(o){e&&e.d(o),o&&k(t)}}}function $(n){let t,a;return t=new Q({props:{projects:n[1]}}),{c(){j(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,o){h(t,e,o),a=!0},p(e,o){const c={};o&2&&(c.projects=e[1]),t.$set(c)},i(e){a||(p(t.$$.fragment,e),a=!0)},o(e){u(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function z(n){return{c:l,l,m:l,p:l,i:l,o:l,d:l}}function A(n){let t,a,e,o,c;t=new D({props:{title:n[0]("pages.projects.title"),description:n[0]("pages.projects.dis")}});let r={ctx:n,current:null,token:null,hasCatch:!1,pending:z,then:Y,catch:T,value:1,blocks:[,,,]};return b(o=n[1],r),{c(){j(t.$$.fragment),a=S(),e=m(),r.block.c()},l(s){d(t.$$.fragment,s),a=q(s),e=m(),r.block.l(s)},m(s,i){h(t,s,i),_(s,a,i),_(s,e,i),r.block.m(s,r.anchor=i),r.mount=()=>e.parentNode,r.anchor=e,c=!0},p(s,[i]){n=s;const f={};i&1&&(f.title=n[0]("pages.projects.title")),i&1&&(f.description=n[0]("pages.projects.dis")),t.$set(f),r.ctx=n,i&2&&o!==(o=n[1])&&b(o,r)||C(r,n,i)},i(s){c||(p(t.$$.fragment,s),p(r.block),c=!0)},o(s){u(t.$$.fragment,s);for(let i=0;i<3;i+=1){const f=r.blocks[i];u(f)}c=!1},d(s){w(t,s),s&&k(a),s&&k(e),r.block.d(s),r.token=null,r=null}}}function F(n,t,a){let e,o;g(n,E,r=>a(2,e=r)),g(n,I,r=>a(0,o=r)),N(async()=>{a(1,c=await(await fetch(`/api/projects-${localStorage.getItem("lang")||e}.json`)).json())});let c;return[o,c]}class O extends v{constructor(t){super(),M(this,t,F,A,P,{})}}export{O as default};