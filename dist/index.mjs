import{atom as e,getter as t,setter as o,useGlobalValue as a}from"elum-state";import r from"@vkontakte/vk-bridge";import p,{useState as n,useEffect as l,Fragment as s}from"react";const i=(e,t)=>Object.keys(e).every((o=>e[o]===t[o]||"[object Object]"===Object.prototype.toString.call(e[o])&&i(e[o],t[o]))),c={panel:"default",modal:void 0,popout:void 0,stay:!1,freeze:!1,params:{}},u={},m=e({key:"router_active_view"}),y=e({key:"router_active_panel"}),d=e({key:"router_active_modal"}),f=e({key:"router_active_popout"}),v=e({key:"router_active_popout"}),w=e({key:"router_active_params"}),h=["view","panel","modal","popout"],k=e=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const a=t(m),r=e.view||a,p=!u[r];p&&(u[r]=[c]);const n=u[r],l=n[n.length-1],s={panel:e.panel||l.panel,modal:e.modal||l.modal,popout:e.popout||l.popout,stay:e.stay||c.stay,freeze:e.freeze||c.freeze,params:e.params||l.params};for(let t=h.length-1;t>=0;t--){const o=h[t];if(e[o])break;s[o]=c[o]}const v=i(l,s);!v&&n.push(s),a===r&&!p&&v||(o(m,r),o(y,s.panel),o(d,s.modal),o(f,s.popout),o(w,s.params)),e.clear&&a!==r&&(u[a]=[c])},b=(e={ignoreFreeze:!1,toStay:!1})=>{"file:"!==window.location.protocol&&window.history.pushState(null,"");const a=t(m),p=u[a],n=p[p.length-1],l=((e,t)=>{const o=typeof e;if("boolean"===o&&!e)return t.length-2;let a=0;for(let r=t.length-1;r>0;r--){const p=t[r];if("boolean"===o&&p.stay||p.stay===e){a=r;break}}return a})(e.toStay||!1,p),s=p[l];if(1===p.length)return void r.send("VKWebAppClose",{status:"success"});if(n.freeze&&!e.ignoreFreeze)return;p.splice(l+1);const i={panel:s.panel,modal:s.modal,popout:s.popout,stay:s.stay,freeze:s.freeze,params:s.params};o(m,a),o(y,i.panel),o(d,i.modal),o(f,i.popout),o(w,i.params)};function _(e,t,a,r){return r?function(e,t,a,r){const p=()=>(o(v,void 0),r);o(v,{type:e,params:a,callback:p}),t&&setTimeout((()=>{p()({type:e,params:a})}),t)}(e,t,a,r):function(e,t,a){return new Promise((r=>{const p=()=>(o(v,void 0),r);o(v,{type:e,params:a,callback:p}),t&&setTimeout((()=>{p()({type:e,params:a})}),t)}))}(e,t,a)}function g(e){try{const a=t(v);return(!e||a.type===e)&&(o(v,void 0),a.callback({type:a.type,params:a.params}),!0)}catch{return!1}}const z=()=>{const[e]=n(t(w));return e},S={view:m,panel:y,modal:d,popout:f},j=e=>a(S[e]),O=()=>{const{type:e,params:t}=a(v);return{type:e,params:t}},E=({branch:e,children:o})=>(t(m)||k({view:e}),l((()=>{window.addEventListener("popstate",(()=>b())),"file:"!==window.location.protocol&&window.history.pushState(void 0,"")}),[]),p.createElement(s,null,o));export{E as Router,b as backPage,g as hideNotify,k as nextPage,_ as showNotify,O as useNotify,z as useParams,j as useRouter};
