var ee=Object.defineProperty;var R=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var Y=(l,e,t)=>e in l?ee(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,Z=(l,e)=>{for(var t in e||(e={}))te.call(e,t)&&Y(l,t,e[t]);if(R)for(var t of R(e))le.call(e,t)&&Y(l,t,e[t]);return l};import{S as Q,i as W,s as X,e as v,k as P,t as q,c as b,a as p,d as g,m as T,h as N,b as _,Z as z,g as A,M as m,j as S,E as C,P as x,w as se,x as re,y as oe,q as U,o as G,B as ae,n as ie,p as ne,O as ce}from"./index-2307ddf3.js";import{Y as $}from"./runtime.esm-24a2f473.js";function fe(l){let e,t,i,o,a,f,n,h,D,E,I,V,k,j,c,y=l[4]("common.project.learnmore")+"",d;return{c(){e=v("a"),t=v("div"),i=v("figure"),o=v("img"),f=P(),n=v("div"),h=v("h2"),D=q(l[0]),E=P(),I=v("p"),V=q(l[3]),k=P(),j=v("div"),c=v("button"),d=q(y),this.h()},l(s){e=b(s,"A",{href:!0});var r=p(e);t=b(r,"DIV",{class:!0});var u=p(t);i=b(u,"FIGURE",{});var w=p(i);o=b(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(g),f=T(u),n=b(u,"DIV",{class:!0});var O=p(n);h=b(O,"H2",{class:!0});var B=p(h);D=N(B,l[0]),B.forEach(g),E=T(O),I=b(O,"P",{});var M=p(I);V=N(M,l[3]),M.forEach(g),k=T(O),j=b(O,"DIV",{class:!0});var F=p(j);c=b(F,"BUTTON",{class:!0});var H=p(c);d=N(H,y),H.forEach(g),F.forEach(g),O.forEach(g),u.forEach(g),r.forEach(g),this.h()},h(){_(o,"class","aspect-video"),z(o.src,a=l[2])||_(o,"src",a),_(o,"alt",l[0]),_(h,"class","card-title"),_(c,"class","btn btn-outline border-2"),_(j,"class","card-actions"),_(n,"class","card-body flex items-center justify-center"),_(t,"class","card shadow-xl text-center image-full hover:scale-95 active:scale-90 transform transition"),_(e,"href",l[1])},m(s,r){A(s,e,r),m(e,t),m(t,i),m(i,o),m(t,f),m(t,n),m(n,h),m(h,D),m(n,E),m(n,I),m(I,V),m(n,k),m(n,j),m(j,c),m(c,d)},p(s,[r]){r&4&&!z(o.src,a=s[2])&&_(o,"src",a),r&1&&_(o,"alt",s[0]),r&1&&S(D,s[0]),r&8&&S(V,s[3]),r&16&&y!==(y=s[4]("common.project.learnmore")+"")&&S(d,y),r&2&&_(e,"href",s[1])},i:C,o:C,d(s){s&&g(e)}}}function ue(l,e,t){let i;x(l,$,h=>t(4,i=h));let{title:o=""}=e,{url:a=""}=e,{image:f=""}=e,{description:n=""}=e;return l.$$set=h=>{"title"in h&&t(0,o=h.title),"url"in h&&t(1,a=h.url),"image"in h&&t(2,f=h.image),"description"in h&&t(3,n=h.description)},[o,a,f,n,i]}class me extends Q{constructor(e){super(),W(this,e,ue,fe,X,{title:0,url:1,image:2,description:3})}}function J(l,e,t){const i=l.slice();return i[4]=e[t],i}function K(l){let e,t,i,o;return t=new me({props:{title:l[4].meta.title,description:l[4].meta.description,image:l[4].meta.img.includes("/")?l[4].meta.img:"/img/projects/"+l[4].meta.img,url:l[4].path}}),{c(){e=v("div"),se(t.$$.fragment),i=P(),this.h()},l(a){e=b(a,"DIV",{class:!0});var f=p(e);re(t.$$.fragment,f),i=T(f),f.forEach(g),this.h()},h(){_(e,"class","col-span-1")},m(a,f){A(a,e,f),oe(t,e,null),m(e,i),o=!0},p:C,i(a){o||(U(t.$$.fragment,a),o=!0)},o(a){G(t.$$.fragment,a),o=!1},d(a){a&&g(e),ae(t)}}}function L(l){let e,t,i=l[2]("common.projects.morebtn")+"",o;return{c(){e=v("a"),t=v("button"),o=q(i),this.h()},l(a){e=b(a,"A",{href:!0});var f=p(e);t=b(f,"BUTTON",{class:!0});var n=p(t);o=N(n,i),n.forEach(g),f.forEach(g),this.h()},h(){_(t,"class","flex btn btn-primary hover:(bg-primary-focus) border-0 justify-center items-center"),_(e,"href","/projects")},m(a,f){A(a,e,f),m(e,t),m(t,o)},p(a,f){f&4&&i!==(i=a[2]("common.projects.morebtn")+"")&&S(o,i)},d(a){a&&g(e)}}}function he(l){let e,t,i=l[2]("common.projects.title")+"",o,a,f,n=l[2]("common.projects.subtitle")+"",h,D,E,I,V=l[1]!=Object.keys(l[0]).length,k,j=l[3],c=[];for(let s=0;s<j.length;s+=1)c[s]=K(J(l,j,s));const y=s=>G(c[s],1,1,()=>{c[s]=null});let d=V&&L(l);return{c(){e=v("section"),t=v("div"),o=q(i),a=P(),f=v("div"),h=q(n),D=P(),E=v("div");for(let s=0;s<c.length;s+=1)c[s].c();I=P(),d&&d.c(),this.h()},l(s){e=b(s,"SECTION",{class:!0,id:!0});var r=p(e);t=b(r,"DIV",{class:!0});var u=p(t);o=N(u,i),u.forEach(g),a=T(r),f=b(r,"DIV",{class:!0});var w=p(f);h=N(w,n),w.forEach(g),D=T(r),E=b(r,"DIV",{class:!0});var O=p(E);for(let B=0;B<c.length;B+=1)c[B].l(O);O.forEach(g),I=T(r),d&&d.l(r),r.forEach(g),this.h()},h(){_(t,"class","font-bold mb-2 text-3xl"),_(f,"class","font-semibold text-small mb-7 opacity-90 text-center"),_(E,"class","mb-10 grid gap-7 grid-cols-1 lg:grid-cols-2"),_(e,"class","flex flex-col items-center"),_(e,"id","projects")},m(s,r){A(s,e,r),m(e,t),m(t,o),m(e,a),m(e,f),m(f,h),m(e,D),m(e,E);for(let u=0;u<c.length;u+=1)c[u].m(E,null);m(e,I),d&&d.m(e,null),k=!0},p(s,[r]){if((!k||r&4)&&i!==(i=s[2]("common.projects.title")+"")&&S(o,i),(!k||r&4)&&n!==(n=s[2]("common.projects.subtitle")+"")&&S(h,n),r&8){j=s[3];let u;for(u=0;u<j.length;u+=1){const w=J(s,j,u);c[u]?(c[u].p(w,r),U(c[u],1)):(c[u]=K(w),c[u].c(),U(c[u],1),c[u].m(E,null))}for(ie(),u=j.length;u<c.length;u+=1)y(u);ne()}r&3&&(V=s[1]!=Object.keys(s[0]).length),V?d?d.p(s,r):(d=L(s),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(s){if(!k){for(let r=0;r<j.length;r+=1)U(c[r]);k=!0}},o(s){c=c.filter(Boolean);for(let r=0;r<c.length;r+=1)G(c[r]);k=!1},d(s){s&&g(e),ce(c,s),d&&d.d()}}}function de(l,e,t){let i;x(l,$,n=>t(2,i=n));let{projects:o}=e,{slice:a=Object.keys(o).length}=e;const f=Object.entries(o).slice(0,a).map(([n,h])=>Z({},h));return l.$$set=n=>{"projects"in n&&t(0,o=n.projects),"slice"in n&&t(1,a=n.slice)},[o,a,i,f]}class be extends Q{constructor(e){super(),W(this,e,de,he,X,{projects:0,slice:1})}}export{be as P};
