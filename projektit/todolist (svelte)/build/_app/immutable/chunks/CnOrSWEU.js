import{S as T,H,I as V,J as I,K as J,g as h,U as b,L as y,M as D,C as Q,N as W,O as X,y as k,i as p,l as U,F as ee,E as re,P as ae,Q as ne,G as te,R as B,V as C,j as $,W as j,m as ie,X as fe,Y as se,b as q,Z as ue,_ as le,$ as de,n as F,a0 as z,a1 as ve,a2 as _e,f as G,a3 as ce,a4 as be,a5 as ge,a6 as oe,a7 as ye,z as he,a8 as Pe,a9 as Ie,aa as Se}from"./DNukreFy.js";import{s as Re,g as Ee}from"./NlahZ2gr.js";function w(e,f=null,v){if(typeof e!="object"||e===null||T in e)return e;const l=X(e);if(l!==H&&l!==V)return e;var t=new Map,u=k(e),g=I(0);u&&t.set("length",I(e.length));var P;return new Proxy(e,{defineProperty(s,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&W();var i=t.get(r);return i===void 0?(i=I(a.value),t.set(r,i)):y(i,w(a.value,P)),!0},deleteProperty(s,r){var a=t.get(r);if(a===void 0)r in s&&t.set(r,I(b));else{if(u&&typeof r=="string"){var i=t.get("length"),n=Number(r);Number.isInteger(n)&&n<i.v&&y(i,n)}y(a,b),K(g)}return!0},get(s,r,a){var c;if(r===T)return e;var i=t.get(r),n=r in s;if(i===void 0&&(!n||(c=D(s,r))!=null&&c.writable)&&(i=I(w(n?s[r]:b,P)),t.set(r,i)),i!==void 0){var d=h(i);return d===b?void 0:d}return Reflect.get(s,r,a)},getOwnPropertyDescriptor(s,r){var a=Reflect.getOwnPropertyDescriptor(s,r);if(a&&"value"in a){var i=t.get(r);i&&(a.value=h(i))}else if(a===void 0){var n=t.get(r),d=n==null?void 0:n.v;if(n!==void 0&&d!==b)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return a},has(s,r){var d;if(r===T)return!0;var a=t.get(r),i=a!==void 0&&a.v!==b||Reflect.has(s,r);if(a!==void 0||Q!==null&&(!i||(d=D(s,r))!=null&&d.writable)){a===void 0&&(a=I(i?w(s[r],P):b),t.set(r,a));var n=h(a);if(n===b)return!1}return i},set(s,r,a,i){var R;var n=t.get(r),d=r in s;if(u&&r==="length")for(var c=a;c<n.v;c+=1){var S=t.get(c+"");S!==void 0?y(S,b):c in s&&(S=I(b),t.set(c+"",S))}n===void 0?(!d||(R=D(s,r))!=null&&R.writable)&&(n=I(void 0),y(n,w(a,P)),t.set(r,n)):(d=n.v!==b,y(n,w(a,P)));var o=Reflect.getOwnPropertyDescriptor(s,r);if(o!=null&&o.set&&o.set.call(i,a),!d){if(u&&typeof r=="string"){var N=t.get("length"),O=Number(r);Number.isInteger(O)&&O>=N.v&&y(N,O+1)}K(g)}return!0},ownKeys(s){h(g);var r=Reflect.ownKeys(s).filter(n=>{var d=t.get(n);return d===void 0||d.v!==b});for(var[a,i]of t)i.v!==b&&!(a in s)&&r.push(a);return r},setPrototypeOf(){J()}})}function K(e,f=1){y(e,e.v+f)}function me(e,f,v=!1){U&&ee();var l=e,t=null,u=null,g=b,P=v?re:0,s=!1;const r=(i,n=!0)=>{s=!0,a(n,i)},a=(i,n)=>{if(g===(g=i))return;let d=!1;if(U){const c=l.data===ae;!!g===c&&(l=ne(),te(l),B(!1),d=!0)}g?(t?C(t):n&&(t=$(()=>n(l))),u&&j(u,()=>{u=null})):(u?C(u):n&&(u=$(()=>n(l))),t&&j(t,()=>{t=null})),d&&B(!0)};p(()=>{s=!1,f(r),s||a(null,null)},P),U&&(l=ie)}function Z(e,f){return e===f||(e==null?void 0:e[T])===f}function Ae(e={},f,v,l){return fe(()=>{var t,u;return se(()=>{t=u,u=[],q(()=>{e!==v(...u)&&(f(e,...u),t&&Z(v(...t),e)&&f(null,...t))})}),()=>{ue(()=>{u&&Z(v(...u),e)&&f(null,...u)})}}),e}let A=!1,M=Symbol();function Te(e,f,v){const l=v[f]??(v[f]={store:null,source:z(void 0),unsubscribe:F});if(l.store!==e&&!(M in v))if(l.unsubscribe(),l.store=e??null,e==null)l.source.v=void 0,l.unsubscribe=F;else{var t=!0;l.unsubscribe=Re(e,u=>{t?l.source.v=u:y(l.source,u)}),t=!1}return e&&M in v?Ee(e):h(l.source)}function De(e,f){return e.set(f),f}function Le(){const e={};function f(){le(()=>{for(var v in e)e[v].unsubscribe();de(e,M,{enumerable:!1,value:!0})})}return[e,f]}function xe(){A=!0}function we(e){var f=A;try{return A=!1,[e(),A]}finally{A=f}}function Ue(e,f,v,l){var Y;var t=(v&Ie)!==0,u=!he||(v&Pe)!==0,g=(v&oe)!==0,P=(v&Se)!==0,s=!1,r;g?[r,s]=we(()=>e[f]):r=e[f];var a=T in e||ye in e,i=g&&(((Y=D(e,f))==null?void 0:Y.set)??(a&&f in e&&(_=>e[f]=_)))||void 0,n=l,d=!0,c=!1,S=()=>(c=!0,d&&(d=!1,P?n=q(l):n=l),n);r===void 0&&l!==void 0&&(i&&u&&ve(),r=S(),i&&i(r));var o;if(u)o=()=>{var _=e[f];return _===void 0?S():(d=!0,c=!1,_)};else{var N=(t?G:ce)(()=>e[f]);N.f|=_e,o=()=>{var _=h(N);return _!==void 0&&(n=void 0),_===void 0?n:_}}if(!(v&be))return o;if(i){var O=e.$$legacy;return function(_,E){return arguments.length>0?((!u||!E||O||s)&&i(E?o():_),_):o()}}var R=!1,L=z(r),m=G(()=>{var _=o(),E=h(L);return R?(R=!1,E):L.v=_});return t||(m.equals=ge),function(_,E){if(arguments.length>0){const x=E?h(m):u&&g?w(_):_;return m.equals(x)||(R=!0,y(L,x),c&&n!==void 0&&(n=x),q(()=>h(m))),_}return h(m)}}export{w as a,Ae as b,Te as c,De as d,me as i,xe as m,Ue as p,Le as s};
