"use strict";var e=require("elum-state"),t=require("@vkontakte/vk-bridge"),o=require("react");const r=(e,t)=>Object.keys(e).every((o=>e[o]===t[o]||"[object Object]"===Object.prototype.toString.call(e[o])&&r(e[o],t[o]))),a={panel:"default",modal:void 0,popout:void 0,stay:!1,freeze:!1,params:{}},s={},p=e.atom({key:"router_active_view"}),n=e.atom({key:"router_active_panel"}),l=e.atom({key:"router_active_modal"}),i=e.atom({key:"router_active_popout"}),u=e.atom({key:"router_active_popout"}),c=e.atom({key:"router_active_params"}),m=["view","panel","modal","popout"],y=t=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const o=e.getter(p),u=t.view||o,y=!s[u];y&&(s[u]=[a]);const d=s[u],f=d[d.length-1],v={panel:t.panel||f.panel,modal:t.modal||f.modal,popout:t.popout||f.popout,stay:t.stay||a.stay,freeze:t.freeze||a.freeze,params:t.params||f.params};for(let e=m.length-1;e>=0;e--){const o=m[e];if(t[o])break;v[o]=a[o]}const w=r(f,v);!w&&d.push(v),o===u&&!y&&w||(e.setter(p,u),e.setter(n,v.panel),e.setter(l,v.modal),e.setter(i,v.popout),e.setter(c,v.params)),t.clear&&o!==u&&(s[o]=[a])},d=(o={ignoreFreeze:!1,toStay:!1})=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const r=e.getter(p),a=s[r],u=a[a.length-1],m=((e,t)=>{const o=typeof e;if("boolean"===o&&!e)return t.length-2;let r=0;for(let a=t.length-1;a>0;a--){const s=t[a];if("boolean"===o&&s.stay||s.stay===e){r=a;break}}return r})(o.toStay||!1,a),y=a[m];if(1===a.length)return void t.send("VKWebAppClose",{status:"success"});if(u.freeze&&!o.ignoreFreeze)return;a.splice(m+1);const d={panel:y.panel,modal:y.modal,popout:y.popout,stay:y.stay,freeze:y.freeze,params:y.params};e.setter(p,r),e.setter(n,d.panel),e.setter(l,d.modal),e.setter(i,d.popout),e.setter(c,d.params)};const f={view:p,panel:n,modal:l,popout:i};exports.Router=({branch:t,children:r})=>(e.getter(p)||y({view:t}),o.useEffect((()=>{window.addEventListener("popstate",(()=>d())),"file:"!==window.location.protocol&&window.history.pushState(void 0,"")}),[]),o.createElement(o.Fragment,null,r)),exports.backPage=d,exports.hideNotify=function(t){try{const o=e.getter(u);return(!t||o.type===t)&&(e.setter(u,void 0),o.callback({type:o.type,params:o.params}),!0)}catch{return!1}},exports.nextPage=y,exports.showNotify=function(t,o,r,a){return a?function(t,o,r,a){const s=()=>(e.setter(u,void 0),a);e.setter(u,{type:t,params:r,callback:s}),o&&setTimeout((()=>{s()({type:t,params:r})}),o)}(t,o,r,a):function(t,o,r){return new Promise((a=>{const s=()=>(e.setter(u,void 0),a);e.setter(u,{type:t,params:r,callback:s}),o&&setTimeout((()=>{s()({type:t,params:r})}),o)}))}(t,o,r)},exports.useNotify=()=>{const t=e.useGlobalValue(u);return t?{type:t.type,params:t.params}:{type:void 0,params:{}}},exports.useParams=()=>{const[t]=o.useState(e.getter(c));return t},exports.useRouter=t=>e.useGlobalValue(f[t]);
