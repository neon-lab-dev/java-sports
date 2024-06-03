var A=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,r)=>(A(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var p=(t,e,s)=>(A(t,e,"access private method"),s);import{Q as _,T as L,U as $,V as Z,h as j,W as G,X as J,r as x,Y as K,Z as N,$ as W,a0 as T,a1 as V,a2 as ee,a3 as se}from"./index-Ufe3u8P4.js";function X(t,e){return t.filter(s=>!e.includes(s))}function te(t,e,s){const r=t.slice(0);return r[e]=s,r}var g,R,E,d,H,w,C,k,M,U,S,z,B,I,P,D,Y,re=(Y=class extends _{constructor(e,s,r){super();f(this,C);f(this,M);f(this,S);f(this,B);f(this,P);f(this,g,void 0);f(this,R,void 0);f(this,E,void 0);f(this,d,void 0);f(this,H,void 0);f(this,w,void 0);y(this,g,e),y(this,E,[]),y(this,d,[]),p(this,C,k).call(this,[]),this.setQueries(s,r)}onSubscribe(){this.listeners.size===1&&a(this,d).forEach(e=>{e.subscribe(s=>{p(this,B,I).call(this,e,s)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,a(this,d).forEach(e=>{e.destroy()})}setQueries(e,s,r){y(this,E,e),y(this,H,s),L.batch(()=>{const n=a(this,d),i=p(this,S,z).call(this,a(this,E));i.forEach(c=>c.observer.setOptions(c.defaultedQueryOptions,r));const u=i.map(c=>c.observer),l=u.map(c=>c.getCurrentResult()),Q=u.some((c,v)=>c!==n[v]);n.length===u.length&&!Q||(y(this,d,u),p(this,C,k).call(this,l),this.hasListeners()&&(X(n,u).forEach(c=>{c.destroy()}),X(u,n).forEach(c=>{c.subscribe(v=>{p(this,B,I).call(this,c,v)})}),p(this,P,D).call(this)))})}getCurrentResult(){return a(this,w)}getQueries(){return a(this,d).map(e=>e.getCurrentQuery())}getObservers(){return a(this,d)}getOptimisticResult(e,s){const r=p(this,S,z).call(this,e),n=r.map(i=>i.observer.getOptimisticResult(i.defaultedQueryOptions));return[n,i=>p(this,M,U).call(this,i??n,s),()=>r.map((i,u)=>{const l=n[u];return i.defaultedQueryOptions.notifyOnChangeProps?l:i.observer.trackResult(l)})]}},g=new WeakMap,R=new WeakMap,E=new WeakMap,d=new WeakMap,H=new WeakMap,w=new WeakMap,C=new WeakSet,k=function(e){var s;y(this,R,e),y(this,w,p(this,M,U).call(this,e,(s=a(this,H))==null?void 0:s.combine))},M=new WeakSet,U=function(e,s){return s?$(a(this,w),s(e)):e},S=new WeakSet,z=function(e){const s=a(this,d),r=new Map(s.map(o=>[o.options.queryHash,o])),n=e.map(o=>a(this,g).defaultQueryOptions(o)),i=n.flatMap(o=>{const O=r.get(o.queryHash);return O!=null?[{defaultedQueryOptions:o,observer:O}]:[]}),u=new Set(i.map(o=>o.defaultedQueryOptions.queryHash)),l=n.filter(o=>!u.has(o.queryHash)),Q=o=>{const O=a(this,g).defaultQueryOptions(o);return a(this,d).find(h=>h.options.queryHash===O.queryHash)??new Z(a(this,g),O)},c=l.map(o=>({defaultedQueryOptions:o,observer:Q(o)})),v=(o,O)=>n.indexOf(o.defaultedQueryOptions)-n.indexOf(O.defaultedQueryOptions);return i.concat(c).sort(v)},B=new WeakSet,I=function(e,s){const r=a(this,d).indexOf(e);r!==-1&&(p(this,C,k).call(this,te(a(this,R),r,s)),p(this,P,D).call(this))},P=new WeakSet,D=function(){L.batch(()=>{this.listeners.forEach(e=>{e(a(this,R))})})},Y);function ue({queries:t,...e},s){const r=j(s),n=G(),i=J(),u=x.useMemo(()=>t.map(h=>{const m=r.defaultQueryOptions(h);return m._optimisticResults=n?"isRestoring":"optimistic",m}),[t,r,n]);u.forEach(h=>{K(h),N(h,i)}),W(i);const[l]=x.useState(()=>new re(r,u,e)),[Q,c,v]=l.getOptimisticResult(u,e.combine);x.useSyncExternalStore(x.useCallback(h=>n?()=>{}:l.subscribe(L.batchCalls(h)),[l,n]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),x.useEffect(()=>{l.setQueries(u,e,{listeners:!1})},[u,e,l]);const O=Q.some((h,m)=>T(u[m],h))?Q.flatMap((h,m)=>{const b=u[m];if(b){const F=new Z(r,b);if(T(b,h))return V(b,F,i);ee(h,n)&&V(b,F,i)}return[]}):[];if(O.length>0)throw Promise.all(O);const q=Q.find((h,m)=>{const b=u[m];return b&&se({result:h,errorResetBoundary:i,throwOnError:b.throwOnError,query:r.getQueryCache().get(b.queryHash)})});if(q!=null&&q.error)throw q.error;return c(v())}export{ue as u};