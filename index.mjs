import{atom as e,getter as t,setter as a}from"elum-state";const o={panel:"default",modal:void 0,popout:void 0,stay:!1,freeze:!1,params:{}},r={startup:[o],error:[o],main:[o]},p=e({key:"router_active_view",default:"startup"}),l=e({key:"router_active_panel",default:o.panel}),n=e({key:"router_active_modal",default:o.modal}),s=e({key:"router_active_popout",default:o.popout}),u=e({key:"router_active_params",default:o.params}),m=(e,t)=>Object.keys(e).every((a=>e[a]===t[a]||"[object Object]"===Object.prototype.toString.call(e[a])&&m(e[a],t[a]))),f=["view","panel","modal","popout"],i=e=>{const i=t(p),d=e.view||i,c=r[d],y=c[c.length-1],v={panel:e.panel||y.panel,modal:e.modal||y.modal,popout:e.popout||y.popout,stay:e.stay||o.stay,freeze:e.freeze||o.freeze,params:e.params||y.params};for(let t=f.length-1;t>=0;t--){const a=f[t];if(e[a])break;v[a]=o[a]}m(y,v)||(a(p,d),a(l,v.panel),a(n,v.modal),a(s,v.popout),a(u,v.params),c.push(v)),e.clear&&i!==d&&(r[i]=[o])},d=(e={ignoreFreeze:!1,toStay:!1})=>{const o=t(p),m=r[o],f=m[m.length-1],i=((e,t)=>{const a=typeof e;if("boolean"===a&&!e)return t.length-2;let o=0;for(let r=t.length-1;r>0;r--){const p=t[r];if("boolean"===a&&p.stay||p.stay===e){o=r;break}}return o})(e.toStay,m),d=m[i];if(1===m.length)return void console.log("end app");if(f.freeze&&!e.ignoreFreeze)return;m.splice(i+1);const c={panel:d.panel,modal:d.modal,popout:d.popout,stay:d.stay,freeze:d.freeze,params:d.params};a(p,o),a(l,c.panel),a(n,c.modal),a(s,c.popout),a(u,c.params)};export{n as ACTIVE_MODAL,l as ACTIVE_PANEL,u as ACTIVE_PARAMS,s as ACTIVE_POPOUT,p as ACTIVE_VIEW,d as backPage,i as nextPage};
