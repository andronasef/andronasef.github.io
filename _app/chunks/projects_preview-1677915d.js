import{S as x,i as ee,s as te,e as g,k as S,t as U,c as v,a as b,d as p,m as q,h as A,b as _,N as K,g as H,M as u,j as C,E as L,Q as Y,q as N,l as Q,w as se,x as re,y as ae,o as M,B as ie,n as y,p as z,P as oe,v as ne}from"./index-36647174.js";import{Y as le,D as ce}from"./runtime.esm-982878fe.js";function fe(r){let t,s,e,l,a,f,o,h,T,k,P,E,V,I,D,w=r[4]("project.learnmore")+"",j;return{c(){t=g("a"),s=g("div"),e=g("figure"),l=g("img"),f=S(),o=g("div"),h=g("h2"),T=U(r[0]),k=S(),P=g("p"),E=U(r[3]),V=S(),I=g("div"),D=g("button"),j=U(w),this.h()},l(d){t=v(d,"A",{href:!0});var i=b(t);s=v(i,"DIV",{class:!0});var O=b(s);e=v(O,"FIGURE",{});var n=b(e);l=v(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(p),f=q(O),o=v(O,"DIV",{class:!0});var c=b(o);h=v(c,"H2",{class:!0});var m=b(h);T=A(m,r[0]),m.forEach(p),k=q(c),P=v(c,"P",{});var B=b(P);E=A(B,r[3]),B.forEach(p),V=q(c),I=v(c,"DIV",{class:!0});var G=b(I);D=v(G,"BUTTON",{class:!0});var F=b(D);j=A(F,w),F.forEach(p),G.forEach(p),c.forEach(p),O.forEach(p),i.forEach(p),this.h()},h(){_(l,"class","aspect-video"),K(l.src,a=r[2])||_(l,"src",a),_(l,"alt",r[0]),_(h,"class","card-title"),_(D,"class","btn btn-outline border-2"),_(I,"class","card-actions"),_(o,"class","card-body flex items-center justify-center"),_(s,"class","card shadow-xl text-center image-full hover:scale-95 active:scale-90 transform transition"),_(t,"href",r[1])},m(d,i){H(d,t,i),u(t,s),u(s,e),u(e,l),u(s,f),u(s,o),u(o,h),u(h,T),u(o,k),u(o,P),u(P,E),u(o,V),u(o,I),u(I,D),u(D,j)},p(d,[i]){i&4&&!K(l.src,a=d[2])&&_(l,"src",a),i&1&&_(l,"alt",d[0]),i&1&&C(T,d[0]),i&8&&C(E,d[3]),i&16&&w!==(w=d[4]("project.learnmore")+"")&&C(j,w),i&2&&_(t,"href",d[1])},i:L,o:L,d(d){d&&p(t)}}}function ue(r,t,s){let e;Y(r,le,h=>s(4,e=h));let{title:l=""}=t,{url:a=""}=t,{image:f=""}=t,{description:o=""}=t;return r.$$set=h=>{"title"in h&&s(0,l=h.title),"url"in h&&s(1,a=h.url),"image"in h&&s(2,f=h.image),"description"in h&&s(3,o=h.description)},[l,a,f,o,e]}class me extends x{constructor(t){super(),ee(this,t,ue,fe,te,{title:0,url:1,image:2,description:3})}}function W(r,t,s){const e=r.slice();return e[4]=t[s],e[6]=s,e}function X(r){let t,s,e=r[2]("projects.title")+"",l,a,f,o=r[2]("projects.subtitle")+"",h,T,k,P,E,V,I=(r[0]!=-1?r[2]("projects.morebtn"):r[2]("pages.projects.allmyprojects.title"))+"",D,w,j,d=r[1],i=[];for(let n=0;n<d.length;n+=1)i[n]=$(W(r,d,n));const O=n=>M(i[n],1,1,()=>{i[n]=null});return{c(){t=g("section"),s=g("div"),l=U(e),a=S(),f=g("div"),h=U(o),T=S(),k=g("div");for(let n=0;n<i.length;n+=1)i[n].c();P=S(),E=g("a"),V=g("button"),D=U(I),this.h()},l(n){t=v(n,"SECTION",{class:!0,id:!0});var c=b(t);s=v(c,"DIV",{class:!0});var m=b(s);l=A(m,e),m.forEach(p),a=q(c),f=v(c,"DIV",{class:!0});var B=b(f);h=A(B,o),B.forEach(p),T=q(c),k=v(c,"DIV",{class:!0});var G=b(k);for(let R=0;R<i.length;R+=1)i[R].l(G);G.forEach(p),P=q(c),E=v(c,"A",{href:!0});var F=b(E);V=v(F,"BUTTON",{class:!0});var J=b(V);D=A(J,I),J.forEach(p),F.forEach(p),c.forEach(p),this.h()},h(){_(s,"class","font-bold mb-2 text-3xl"),_(f,"class","font-semibold text-small mb-7 opacity-90 text-center"),_(k,"class","mb-10 grid gap-7 grid-cols-1 lg:grid-cols-2"),_(V,"class","flex btn btn-primary hover:(bg-primary-focus) border-0 justify-center items-center"),_(E,"href",w=`/projects${r[0]!=-1?"":"/all"}`),_(t,"class","flex flex-col items-center"),_(t,"id","projects")},m(n,c){H(n,t,c),u(t,s),u(s,l),u(t,a),u(t,f),u(f,h),u(t,T),u(t,k);for(let m=0;m<i.length;m+=1)i[m].m(k,null);u(t,P),u(t,E),u(E,V),u(V,D),j=!0},p(n,c){if((!j||c&4)&&e!==(e=n[2]("projects.title")+"")&&C(l,e),(!j||c&4)&&o!==(o=n[2]("projects.subtitle")+"")&&C(h,o),c&3){d=n[1];let m;for(m=0;m<d.length;m+=1){const B=W(n,d,m);i[m]?(i[m].p(B,c),N(i[m],1)):(i[m]=$(B),i[m].c(),N(i[m],1),i[m].m(k,null))}for(y(),m=d.length;m<i.length;m+=1)O(m);z()}(!j||c&5)&&I!==(I=(n[0]!=-1?n[2]("projects.morebtn"):n[2]("pages.projects.allmyprojects.title"))+"")&&C(D,I),(!j||c&1&&w!==(w=`/projects${n[0]!=-1?"":"/all"}`))&&_(E,"href",w)},i(n){if(!j){for(let c=0;c<d.length;c+=1)N(i[c]);j=!0}},o(n){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)M(i[c]);j=!1},d(n){n&&p(t),oe(i,n)}}}function Z(r){let t,s,e,l;return s=new me({props:{title:r[4].meta.title,description:r[4].meta.description,image:r[4].meta.img.includes("/")?r[4].meta.img:"/img/projects/"+r[4].meta.img,url:r[4].path}}),{c(){t=g("div"),se(s.$$.fragment),e=S(),this.h()},l(a){t=v(a,"DIV",{class:!0});var f=b(t);re(s.$$.fragment,f),e=q(f),f.forEach(p),this.h()},h(){_(t,"class","col-span-1")},m(a,f){H(a,t,f),ae(s,t,null),u(t,e),l=!0},p(a,f){const o={};f&2&&(o.title=a[4].meta.title),f&2&&(o.description=a[4].meta.description),f&2&&(o.image=a[4].meta.img.includes("/")?a[4].meta.img:"/img/projects/"+a[4].meta.img),f&2&&(o.url=a[4].path),s.$set(o)},i(a){l||(N(s.$$.fragment,a),l=!0)},o(a){M(s.$$.fragment,a),l=!1},d(a){a&&p(t),ie(s)}}}function $(r){let t,s,e=(r[0]==-1||r[6]<=r[0])&&Z(r);return{c(){e&&e.c(),t=Q()},l(l){e&&e.l(l),t=Q()},m(l,a){e&&e.m(l,a),H(l,t,a),s=!0},p(l,a){l[0]==-1||l[6]<=l[0]?e?(e.p(l,a),a&1&&N(e,1)):(e=Z(l),e.c(),N(e,1),e.m(t.parentNode,t)):e&&(y(),M(e,1,1,()=>{e=null}),z())},i(l){s||(N(e),s=!0)},o(l){M(e),s=!1},d(l){e&&e.d(l),l&&p(t)}}}function he(r){let t,s,e=r[1]&&X(r);return{c(){e&&e.c(),t=Q()},l(l){e&&e.l(l),t=Q()},m(l,a){e&&e.m(l,a),H(l,t,a),s=!0},p(l,[a]){l[1]?e?(e.p(l,a),a&2&&N(e,1)):(e=X(l),e.c(),N(e,1),e.m(t.parentNode,t)):e&&(y(),M(e,1,1,()=>{e=null}),z())},i(l){s||(N(e),s=!0)},o(l){M(e),s=!1},d(l){e&&e.d(l),l&&p(t)}}}function _e(r,t,s){let e,l;Y(r,ce,o=>s(3,e=o)),Y(r,le,o=>s(2,l=o));let a,{slice:f=-1}=t;return ne(async()=>{s(1,a=await(await fetch(`/api/projects-${localStorage.getItem("lang")||e}.json`)).json())}),r.$$set=o=>{"slice"in o&&s(0,f=o.slice)},[f,a,l]}class ge extends x{constructor(t){super(),ee(this,t,_e,he,te,{slice:0})}}export{ge as P};