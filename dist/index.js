"use strict";var e=require("elum-state");const t={panel:"default",modal:void 0,popout:void 0,stay:!1,freeze:!1,params:{}},a={startup:[t],error:[t],main:[t]},o=e.atom({key:"router_active_view",default:"startup"}),r=e.atom({key:"router_active_panel",default:t.panel}),p=e.atom({key:"router_active_modal",default:t.modal}),s=e.atom({key:"router_active_popout",default:t.popout}),l=e.atom({key:"router_active_params",default:t.params}),u=(e,t)=>Object.keys(e).every((a=>e[a]===t[a]||"[object Object]"===Object.prototype.toString.call(e[a])&&u(e[a],t[a]))),m=["view","panel","modal","popout"];exports.ACTIVE_MODAL=p,exports.ACTIVE_PANEL=r,exports.ACTIVE_PARAMS=l,exports.ACTIVE_POPOUT=s,exports.ACTIVE_VIEW=o,exports.backPage=()=>{const t=e.getter(o),u=a[t],m=u[u.length-2];if(!m)return void console.log("end app");u.pop();const n={panel:m.panel,modal:m.modal,popout:m.popout,stay:m.stay,freeze:m.freeze,params:m.params};e.setter(o,t),e.setter(r,n.panel),e.setter(p,n.modal),e.setter(s,n.popout),e.setter(l,n.params)},exports.nextPage=n=>{const d=n.view||e.getter(o),c=a[d],i=c[c.length-1],f={panel:n.panel||i.panel,modal:n.modal||i.modal,popout:n.popout||i.popout,stay:n.stay||t.stay,freeze:n.freeze||t.freeze,params:n.params||t.params};for(let e=m.length-1;e>=0;e--){const a=m[e];if(n[a])break;f[a]=t[a]}u(i,f)||(e.setter(o,d),e.setter(r,f.panel),e.setter(p,f.modal),e.setter(s,f.popout),e.setter(l,f.params),c.push(f))};