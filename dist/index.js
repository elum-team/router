"use strict";var e=require("elum-state"),t=require("@vkontakte/vk-bridge"),o=require("react");const r=(e,t)=>Object.keys(e).every((o=>{const a=Object.prototype.toString.call(e[o]);if(a!=Object.prototype.toString.call(t[o]))return!1;switch(a){case"[object String]":case"[object Number]":case"[object Boolean]":return e[o]===t[o];case"[object Object]":case"[object Array]":return r(e[o],t[o]);default:return!1}})),a={panel:"default",modal:void 0,popout:void 0,stay:!1,freeze:!1,params:{}},s={},p=e.atom({key:"router_active_app"}),n=e.atom({key:"router_active_view"}),l=e.atom({key:"router_active_panel"}),c=e.atom({key:"router_active_modal"}),i=e.atom({key:"router_active_popout"}),u=e.atom({key:"router_active_notify"}),m=e.atom({key:"router_active_params"}),y=["app","view","panel","modal","popout"],d=t=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const o=e.getter(p),u=t.app||o,d=e.getter(n),f=t.view||d,v=!s[u]?.[f];v&&(s[u]||(s[u]={}),s[u][f]||(s[u][f]=[a]));const b=s[u][f],w=b[b.length-1],g={panel:t.panel||w.panel,modal:t.modal||w.modal,popout:t.popout||w.popout,stay:t.stay||a.stay,freeze:t.freeze||a.freeze,params:t.params||w.params};for(let e=y.length-1;e>=0;e--){const o=y[e];if(t[o])break;g[o]=a[o]}const _=r(w,g);!_&&b.push(g),o===u&&d===f&&!v&&_||(e.setter(p,u),e.setter(n,f),e.setter(l,g.panel),e.setter(c,g.modal),e.setter(i,g.popout),e.setter(m,g.params)),t.clear&&d!==f&&(s[u][d]=[a])},f=(o={ignoreFreeze:!1,toStay:!1})=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const r=e.getter(p),a=e.getter(n),u=s[r][a],y=u[u.length-1],d=((e,t)=>{const o=typeof e;if("boolean"===o&&!e)return t.length-2;let r=0;for(let a=t.length-1;a>0;a--){const s=t[a];if("boolean"===o&&s.stay||s.stay===e){r=a;break}}return r})(o.toStay||!1,u),f=u[d];if(1===u.length)return void t.send("VKWebAppClose",{status:"success"});if(y.freeze&&!o.ignoreFreeze)return;u.splice(d+1);const v={panel:f.panel,modal:f.modal,popout:f.popout,stay:f.stay,freeze:f.freeze,params:f.params};e.setter(n,a),e.setter(l,v.panel),e.setter(c,v.modal),e.setter(i,v.popout),e.setter(m,v.params)};const v={app:p,view:n,panel:l,modal:c,popout:i};exports.ACTIVE_APP=p,exports.ACTIVE_MODAL=c,exports.ACTIVE_NOTIFY=u,exports.ACTIVE_PANEL=l,exports.ACTIVE_PARAMS=m,exports.ACTIVE_POPOUT=i,exports.ACTIVE_VIEW=n,exports.Router=({app:t="web",branch:r,children:a})=>(e.getter(n)&&e.getter(p)||d({app:t,view:r}),o.useEffect((()=>{window.addEventListener("popstate",(()=>f())),"file:"!==window.location.protocol&&window.history.pushState(void 0,"")}),[]),a),exports.backPage=f,exports.hideNotify=function(t){try{const o=e.getter(u);return(!t||o.type===t)&&(e.setter(u,void 0),o.callback({type:o.type,params:o.params}),!0)}catch{return!1}},exports.nextPage=d,exports.showNotify=function(t,o,r,a){return a?function(t,o,r,a){const s=()=>(e.setter(u,void 0),a);e.setter(u,{type:t,params:r,callback:s}),o&&setTimeout((()=>{s()({type:t,params:r})}),o)}(t,o,r,a):function(t,o,r){return new Promise((a=>{const s=()=>(e.setter(u,void 0),a);e.setter(u,{type:t,params:r,callback:s}),o&&setTimeout((()=>{s()({type:t,params:r})}),o)}))}(t,o,r)},exports.useNotify=()=>{const t=e.useGlobalValue(u);return t?{type:t.type,params:t.params}:{type:void 0,params:{}}},exports.useParams=()=>{const[t]=o.useState(e.getter(m));return t},exports.useRouter=t=>e.useGlobalValue(v[t]);
