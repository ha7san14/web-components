(function(m,a){typeof exports=="object"&&typeof module<"u"?a(require("svelte")):typeof define=="function"&&define.amd?define(["svelte"],a):(m=typeof globalThis<"u"?globalThis:m||self,a(m.svelte))})(this,function(m){"use strict";var xt=Object.defineProperty;var Et=(m,a,y)=>a in m?xt(m,a,{enumerable:!0,configurable:!0,writable:!0,value:y}):m[a]=y;var h=(m,a,y)=>Et(m,typeof a!="symbol"?a+"":a,y);function a(){}function y(e){return e()}function J(){return Object.create(null)}function j(e){e.forEach(y)}function V(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Z(e){return Object.keys(e).length===0}function w(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function x(){return q(" ")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function A(e,t,n){const s=t.toLowerCase();s in e?e[s]=typeof e[s]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:f(e,t,n)}function tt(e){return Array.from(e.childNodes)}function et(e,t){t=""+t,e.data!==t&&(e.data=t)}function nt(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let M;function L(e){M=e}const E=[],z=[];let k=[];const G=[],st=Promise.resolve();let R=!1;function it(){R||(R=!0,st.then(O))}function H(e){k.push(e)}const D=new Set;let C=0;function O(){if(C!==0)return;const e=M;do{try{for(;C<E.length;){const t=E[C];C++,L(t),rt(t.$$)}}catch(t){throw E.length=0,C=0,t}for(L(null),E.length=0,C=0;z.length;)z.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];D.has(n)||(D.add(n),n())}k.length=0}while(E.length);for(;G.length;)G.pop()();R=!1,D.clear(),L(e)}function rt(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function ut(e){const t=[],n=[];k.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),k=t}const N=new Set;let lt;function K(e,t){e&&e.i&&(N.delete(e),e.i(t))}function ot(e,t,n,s){if(e&&e.o){if(N.has(e))return;N.add(e),lt.c.push(()=>{N.delete(e)}),e.o(t)}}function ct(e){e&&e.c()}function Q(e,t,n){const{fragment:s,after_update:u}=e.$$;s&&s.m(t,n),H(()=>{const i=e.$$.on_mount.map(y).filter(V);e.$$.on_destroy?e.$$.on_destroy.push(...i):j(i),e.$$.on_mount=[]}),u.forEach(H)}function W(e,t){const n=e.$$;n.fragment!==null&&(ut(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(E.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(e,t,n,s,u,i,r=null,l=[-1]){const c=M;L(e);const o=e.$$={fragment:null,ctx:[],props:i,update:a,not_equal:u,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};r&&r(o.root);let g=!1;if(o.ctx=n?n(e,t.props||{},(b,d,...v)=>{const Y=v.length?v[0]:d;return o.ctx&&u(o.ctx[b],o.ctx[b]=Y)&&(!o.skip_bound&&o.bound[b]&&o.bound[b](Y),g&&at(e,b)),d}):[],o.update(),g=!0,j(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const b=tt(t.target);o.fragment&&o.fragment.l(b),b.forEach($)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O()}L(c)}let X;typeof HTMLElement=="function"&&(X=class extends HTMLElement{constructor(t,n,s){super();h(this,"$$ctor");h(this,"$$s");h(this,"$$c");h(this,"$$cn",!1);h(this,"$$d",{});h(this,"$$r",!1);h(this,"$$p_d",{});h(this,"$$l",{});h(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(t,n,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const u=this.$$c.$on(t,n);this.$$l_u.set(n,u)}super.addEventListener(t,n,s)}removeEventListener(t,n,s){if(super.removeEventListener(t,n,s),this.$$c){const u=this.$$l_u.get(n);u&&(u(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return()=>{let r;return{c:function(){r=_("slot"),i!=="default"&&f(r,"name",i)},m:function(o,g){p(o,r,g)},d:function(o){o&&$(r)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=nt(this);for(const i of this.$$s)i in s&&(n[i]=[t(i)]);for(const i of this.attributes){const r=this.$$g_p(i.name);r in this.$$d||(this.$$d[r]=U(r,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const u=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const r=U(i,this.$$d[i],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,r)}this.$$r=!1};this.$$c.$$.after_update.push(u),u();for(const i in this.$$l)for(const r of this.$$l[i]){const l=this.$$c.$on(i,r);this.$$l_u.set(r,l)}this.$$l={}}}attributeChangedCallback(t,n,s){var u;this.$$r||(t=this.$$g_p(t),this.$$d[t]=U(t,s,this.$$p_d,"toProp"),(u=this.$$c)==null||u.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function U(e,t,n,s){var i;const u=(i=n[e])==null?void 0:i.type;if(t=u==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!n[e])return t;if(s==="toAttribute")switch(u){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(u){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function B(e,t,n,s,u,i){let r=class extends X{constructor(){super(e,n,u),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(r.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(c){var o;c=U(l,c,t),this.$$d[l]=c,(o=this.$$c)==null||o.$set({[l]:c})}})}),s.forEach(l=>{Object.defineProperty(r.prototype,l,{get(){var c;return(c=this.$$c)==null?void 0:c[l]}})}),e.element=r,r}class T{constructor(){h(this,"$$");h(this,"$$set")}$destroy(){W(this,1),this.$destroy=a}$on(t,n){if(!V(n))return a;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}$set(t){this.$$set&&!Z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);function dt(e){let t,n,s,u;return{c(){t=_("link"),n=x(),s=_("button"),u=q(e[0]),f(t,"href","https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"),f(t,"rel","stylesheet"),f(s,"class","bg-blue-500 text-white font-bold mx-2 my-2 py-2 px-4 rounded hover:bg-blue-700")},m(i,r){p(i,t,r),p(i,n,r),p(i,s,r),w(s,u)},p(i,[r]){r&1&&et(u,i[0])},i:a,o:a,d(i){i&&($(t),$(n),$(s))}}}function $t(e,t,n){let{label:s="Sign Up"}=t;return e.$$set=u=>{"label"in u&&n(0,s=u.label)},[s]}class ht extends T{constructor(t){super(),I(this,t,$t,dt,P,{label:0})}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),O()}}B(ht,{label:{}},[],[],!0);function mt(e){let t,n,s,u,i;return{c(){t=_("link"),n=x(),s=_("input"),f(t,"href","https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"),f(t,"rel","stylesheet"),f(s,"type","text"),s.value=e[0],f(s,"placeholder","Enter Username"),f(s,"class","border border-gray-300 rounded mx-2 my-2 py-2 px-4 w-auto")},m(r,l){p(r,t,l),p(r,n,l),p(r,s,l),u||(i=S(s,"input",e[1]),u=!0)},p(r,[l]){l&1&&s.value!==r[0]&&(s.value=r[0])},i:a,o:a,d(r){r&&($(t),$(n),$(s)),u=!1,i()}}}function pt(e,t,n){let{value:s=""}=t;const u=m.createEventDispatcher();function i(r){n(0,s=r.target.value),u("input",s)}return e.$$set=r=>{"value"in r&&n(0,s=r.value)},[s,i]}class _t extends T{constructor(t){super(),I(this,t,pt,mt,P,{value:0})}get value(){return this.$$.ctx[0]}set value(t){this.$$set({value:t}),O()}}B(_t,{value:{}},[],[],!0);function bt(e){let t,n,s,u,i;return{c(){t=_("link"),n=x(),s=_("input"),f(t,"href","https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"),f(t,"rel","stylesheet"),f(s,"type","password"),s.value=e[0],f(s,"placeholder","Enter Password"),f(s,"class","border border-gray-300 rounded mx-2 my-2 py-2 px-4 w-auto")},m(r,l){p(r,t,l),p(r,n,l),p(r,s,l),u||(i=S(s,"input",e[1]),u=!0)},p(r,[l]){l&1&&s.value!==r[0]&&(s.value=r[0])},i:a,o:a,d(r){r&&($(t),$(n),$(s)),u=!1,i()}}}function gt(e,t,n){let{value:s=""}=t;function u(i){n(0,s=i.target.value)}return e.$$set=i=>{"value"in i&&n(0,s=i.value)},[s,u]}class F extends T{constructor(t){super(),I(this,t,gt,bt,P,{value:0})}get value(){return this.$$.ctx[0]}set value(t){this.$$set({value:t}),O()}}B(F,{value:{}},[],[],!0);function yt(e){let t,n,s,u,i,r,l,c,o,g,b;return r=new F({}),{c(){t=_("form"),n=_("my-username-field"),s=x(),u=_("my-password-field"),i=x(),ct(r.$$.fragment),l=x(),c=_("my-button"),A(n,"value",e[0]),A(u,"value",e[1]),A(c,"label","Sign Up"),f(t,"class","flex flex-col gap-4 max-w-sm my-2 mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white")},m(d,v){p(d,t,v),w(t,n),w(t,s),w(t,u),w(t,i),Q(r,t,null),w(t,l),w(t,c),o=!0,g||(b=[S(n,"input",e[3]),S(u,"input",e[4]),S(t,"submit",e[2])],g=!0)},p(d,[v]){(!o||v&1)&&A(n,"value",d[0]),(!o||v&2)&&A(u,"value",d[1])},i(d){o||(K(r.$$.fragment,d),o=!0)},o(d){ot(r.$$.fragment,d),o=!1},d(d){d&&$(t),W(r),g=!1,j(b)}}}function wt(e,t,n){let s="",u="";function i(c){c.preventDefault(),console.log("Form Submitted:",{username:s,password:u})}function r(c){n(0,s=c.detail)}function l(c){n(1,u=c.detail)}return[s,u,i,r,l]}class vt extends T{constructor(t){super(),I(this,t,wt,yt,P,{})}}B(vt,{},[],[],!0),customElements.define("my-password-field",class extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._svelteComponent=new F({target:this._shadowRoot,props:{label:this.getAttribute("label")||"Enter Password",value:this.getAttribute("value")||""}}),this._shadowRoot.addEventListener("input",e=>{const t=e.target.value;this.setAttribute("value",t),this.dispatchEvent(new CustomEvent("input-change",{detail:t}))})}static get observedAttributes(){return["label","value"]}attributeChangedCallback(e,t,n){t!==n&&this._svelteComponent.$set({[e]:n})}disconnectedCallback(){this._svelteComponent.$destroy()}})});
