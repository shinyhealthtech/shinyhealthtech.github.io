(function(e){function n(n){for(var a,c,o=n[0],i=n[1],f=n[2],h=0,d=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(n);while(d.length)d.shift()();return r.push.apply(r,f||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},u={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c114822":"e3f7e0e9","chunk-0f804132":"e2e4b9af","chunk-18759d14":"195efef8","chunk-1f788f48":"51d8e995","chunk-23515139":"d3a1d890","chunk-25197f9c":"b1ae231f","chunk-27a06e27":"f5e17c9a","chunk-5e2c1728":"697e7ce0","chunk-6532e5fc":"c9341924","chunk-6a6cdcf7":"d6a526f0","chunk-6dfaf86a":"05f4653d","chunk-7e01d868":"66780672","chunk-966adeca":"5232b807","chunk-aba9a20e":"5fadf9da","chunk-b0fb85f0":"2e9f1a99","chunk-c31ffad0":"c10d567d","chunk-c36fe838":"a486a76c","chunk-c7840f74":"133f16d2","chunk-d9a2e798":"d97cbff9"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0c114822":1,"chunk-0f804132":1,"chunk-18759d14":1,"chunk-1f788f48":1,"chunk-23515139":1,"chunk-27a06e27":1,"chunk-5e2c1728":1,"chunk-6532e5fc":1,"chunk-6a6cdcf7":1,"chunk-6dfaf86a":1,"chunk-7e01d868":1,"chunk-966adeca":1,"chunk-aba9a20e":1,"chunk-b0fb85f0":1,"chunk-c31ffad0":1,"chunk-c36fe838":1,"chunk-c7840f74":1,"chunk-d9a2e798":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0c114822":"f4f9ff0f","chunk-0f804132":"1879d06b","chunk-18759d14":"b6c955f3","chunk-1f788f48":"02e08970","chunk-23515139":"b471939d","chunk-25197f9c":"31d6cfe0","chunk-27a06e27":"91f70064","chunk-5e2c1728":"a67dee3e","chunk-6532e5fc":"cabdfe07","chunk-6a6cdcf7":"16e8c729","chunk-6dfaf86a":"19bf250b","chunk-7e01d868":"d5a7f433","chunk-966adeca":"78394700","chunk-aba9a20e":"de482b14","chunk-b0fb85f0":"05d44e81","chunk-c31ffad0":"74aa628b","chunk-c36fe838":"2a6d5862","chunk-c7840f74":"0cbe8d65","chunk-d9a2e798":"13f44aec"}[e]+".css",u=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var f=r[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===a||h===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],h=f.getAttribute("data-href");if(h===a||h===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],l.parentNode.removeChild(l),t(r)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=r);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var d=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,t[1](d)}u[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var l=h;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"19c3":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAIAAAAI7H7bAAAFC0lEQVR4nO3dS27cMBBAwZkg97+yc4FACtKPJjWu2hqZ/wMX6rTeX19fL2Dm1+4XAJ9ASBAQEgSEBAEhQUBIEBASBIQEASFB4Pf1n9/v9/e8jm82nOe4/ViuH3/4qW588Fs/9gfjRIKAkCAgJAgICQJCgoCQICAkCAgJAkKCwM1kw7WT9z2cfIl96WjC5KlX++AfjBMJAkKCgJAgICQICAkCQoKAkCAgJAgICQJCgsBoROjWB0+7XLt+49evfOn7Gq5tWerRvxYnEgSEBAEhQUBIEBASBIQEASFBQEgQEBIE1k42/Fgb15tcu73AP5nJ+MmcSBAQEgSEBAEhQUBIEBASBIQEASFBQEgQMNnwd8ML/EvnA06+Y82P5USCgJAgICQICAkCQoKAkCAgJAgICQJCgoCQILB2ROi5uzKG20sm//z2Qzt2s8rQc38tLycSJIQEASFBQEgQEBIEhAQBIUFASBAQEgRGkw3PvYh+a+Pyk+HYxMk++AfjRIKAkCAgJAgICQJCgoCQICAkCAgJAkKCwPu5l8mX2ngNfjg2MXxw/o8TCQJCgoCQICAkCAgJAkKCgJAgICQICAkCQoLA2hGhjcMsS2d8lk7xDJ/95AUjH7z1xYkEASFBQEgQEBIEhAQBIUFASBAQEgSEBIGb27oM725ybekV+qUX0T94bOLa0nGTvUM2w2d3IkFASBAQEgSEBAEhQUBIEBASBIQEASFBQEgQ2Ln85OT1JtdOXn4y9GO/siEnEgSEBAEhQUBIEBASBIQEASFBQEgQEBIERstPbk0uJy/dVrH33icbV4isfuPHrjdZ/Ut2IkFASBAQEgSEBAEhQUBIEBASBIQEASFBYOfOhpOt/i/+F0xdHMhkA3wHIUFASBAQEgSEBAEhQUBIEBASBIQEASFB4Gb5yUYbh3ReW+9usvSeMXtvSHPybV2Gr82JBAEhQUBIEBASBIQEASFBQEgQEBIEhASB0WTD3m0VSy/w752rmPjgBSMTS+8S9HIiQUJIEBASBIQEASFBQEgQEBIEhAQBIUHg5rYuS1cXbDS8zj2cD9g4fDBcXbB0WcWtybObbIAHEBIEhAQBIUFASBAQEgSEBAEhQUBIEBASBG5GhKaPPpg3+eBJmaFjP9WTrf7KnEgQEBIEhAQBIUFASBAQEgSEBAEhQUBIEFg72fBcz11vcu3kkY69G2kmT/1yIkFCSBAQEgSEBAEhQUBIEBASBIQEASFBQEgQ+H3950/dlTEcdXnuXYZWf6EnL41ZyokEASFBQEgQEBIEhAQBIUFASBAQEgSEBIGbyYZrJ1+oXrq95GQbxybmz37t5LEJJxIEhAQBIUFASBAQEgSEBAEhQUBIEBASBEaTDbf23mljnU9dZXFr7xuffOOrJzacSBAQEgSEBAEhQUBIEBASBIQEASFBQEgQEBIE1o4IPdfSiZLhEo/Jg++19JUPP9XhszuRICAkCAgJAkKCgJAgICQICAkCQoKAkCBgsmGJpeMFk0v4e+ceNs4u3D71cJeOEwkCQoKAkCAgJAgICQJCgoCQICAkCAgJAu+l2wU2WvrKV98jhL+afOyrP3MnEgSEBAEhQUBIEBASBIQEASFBQEgQEBIEhASB0YjQcxnS+T9LV4ic/GO7fV9OJAgICQJCgoCQICAkCAgJAkKCgJAgICQI3Ew2AP/CiQQBIUFASBAQEgSEBAEhQUBIEBASBIQEASFB4A9ji3M62GoItwAAAABJRU5ErkJggg=="},"35a9":function(e,n,t){"use strict";t("871e")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),c=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("div",{staticClass:"logo",attrs:{width:"817px",height:"100px"}},[n("img",{attrs:{src:t("8b65"),alt:""}})]),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.defaultActive,mode:"horizontal",router:e.router},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"/"}},[e._v("首页")]),n("el-menu-item",{attrs:{index:"/case"}},[e._v("产品展示")]),n("el-menu-item",{attrs:{index:"/goin"}},[e._v("走进新越健康")])],1)],1),n("el-main",[n("router-view")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"footer"},[n("div",{staticClass:"footer-content"},[n("ul",{staticClass:"content-nav"},[n("li",[n("p",[e._v("Contact Us")]),n("span",[e._v("E-mail:contact@shinyhealthtech.com")]),n("span",[e._v("TEL: +86 532 6778 2886")]),n("span",[e._v("Address: No. 45 Beijing Road, Qingdao Free Trade Port Area, Qingdao, China")])])]),n("img",{attrs:{src:t("19c3"),alt:""}})]),n("div",{staticClass:"copyright"},[n("span",[e._v("新越健康版权所有")])])])],1)],1)},u=[],r={data:function(){return{router:!0,defaultActive:"/",isShow:!1}},methods:{handleSelect:function(e){this.isShow=this.defaultActive!=e,window.console.log(this.isShow)}}},o=r,i=(t("35a9"),t("2877")),f=Object(i["a"])(o,c,u,!1,null,null,null),h=f.exports,d=t("8c4f");a["default"].use(d["a"]);var l=new d["a"]({routes:[{path:"/",name:"home",component:function(){return t.e("chunk-b0fb85f0").then(t.bind(null,"bb51"))}},{path:"/news",name:"news",component:function(){return t.e("chunk-c7840f74").then(t.bind(null,"a2f9"))}},{path:"/newsdetails/:id",name:"newsdetails",component:function(){return t.e("chunk-1f788f48").then(t.bind(null,"3b59"))}},{path:"/product",name:"product",component:function(){return t.e("chunk-0f804132").then(t.bind(null,"d2f1"))}},{path:"/case",name:"case",component:function(){return t.e("chunk-aba9a20e").then(t.bind(null,"9fe4"))}},{path:"/casedetails/:id",name:"casedetails",component:function(){return t.e("chunk-6dfaf86a").then(t.bind(null,"9004"))}},{path:"/goin",name:"goin",component:function(){return t.e("chunk-7e01d868").then(t.bind(null,"2e2c"))}},{path:"/download",name:"download",component:function(){return t.e("chunk-23515139").then(t.bind(null,"3971"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-0c114822").then(t.bind(null,"a55b"))}},{path:"/admin",name:"admin",meta:{requireAuth:!0},component:function(){return t.e("chunk-18759d14").then(t.bind(null,"3530"))},children:[{path:"/admin/user",name:"user",component:function(){return t.e("chunk-6a6cdcf7").then(t.bind(null,"7455"))}},{path:"/admin/news",name:"new",component:function(){return t.e("chunk-d9a2e798").then(t.bind(null,"3a8f"))}},{path:"/admin/cases",name:"cases",component:function(){return t.e("chunk-27a06e27").then(t.bind(null,"9520"))}},{path:"/admin/team",name:"team",component:function(){return t.e("chunk-966adeca").then(t.bind(null,"608d"))}},{path:"/admin/course",name:"course",component:function(){return t.e("chunk-6532e5fc").then(t.bind(null,"5be6"))}},{path:"/admin/enterprise",name:"enterprise",component:function(){return t.e("chunk-5e2c1728").then(t.bind(null,"3ccc"))}},{path:"/admin/honor",name:"honor",component:function(){return t.e("chunk-c36fe838").then(t.bind(null,"9965"))}},{path:"/admin/dictionary",name:"dictionary",component:function(){return t.e("chunk-c31ffad0").then(t.bind(null,"cacf"))}},{path:"/admin/page",name:"page",component:function(){return t.e("chunk-25197f9c").then(t.bind(null,"f91e"))}}]}]});l.beforeEach((function(e,n,t){e.matched.some((function(e){return e.meta.requireAuth}))?sessionStorage.getItem("token")?t():t({path:"/login",query:{redirect:e.fullPath}}):t()}));var s=l,A=t("bc3a"),g=t.n(A),p=t("5c96"),E=t.n(p),k=(t("0fae"),t("7212")),B=t.n(k),m=(t("dfa4"),t("d6d3")),Q=t.n(m),b=(t("fda2"),t("451f"),t("caf9"));a["default"].use(E.a),a["default"].use(B.a),a["default"].use(Q.a),a["default"].use(b["a"],{preLoad:1,error:t("b948"),loading:t("f8b2"),attempt:1}),a["default"].config.productionTip=!1,g.a.defaults.timeout=5e3,g.a.defaults.baseURL="http://shkjgw.shkjem.com/api/",a["default"].prototype.$http=g.a,a["default"].prototype.imgserver="http://shkjgw.shkjem.com/",new a["default"]({router:s,render:function(e){return e(h)}}).$mount("#app")},"871e":function(e,n,t){},"8b65":function(e,n,t){e.exports=t.p+"img/toplogo.ba984462.png"},b948:function(e,n,t){e.exports=t.p+"img/error.d44fdc0d.png"},f8b2:function(e,n,t){e.exports=t.p+"img/loading.3c44fafb.gif"}});
//# sourceMappingURL=app.f7140917.js.map