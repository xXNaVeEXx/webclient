(function(e){function t(t){for(var r,a,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5c9c7b20","chunk-89d13a0a":"879f2aae","chunk-06d56d78":"120286a7","chunk-2d0d6d35":"8b0fe6a3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-89d13a0a":1,"chunk-06d56d78":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-89d13a0a":"1a477d2e","chunk-06d56d78":"33980416","chunk-2d0d6d35":"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("| "),n("router-link",{attrs:{to:"/register"}},[e._v("Register")]),e._v("| "),n("router-link",{attrs:{to:"/foursquare"}},[e._v("Foursquare API")])],1),n("router-view")],1)],1)},o=[],u=(n("5c0b"),n("2877")),s=n("6544"),i=n.n(s),c=n("7496"),l={},d=Object(u["a"])(l,a,o,!1,null,null,null),f=d.exports;i()(d,{VApp:c["a"]});var p=n("f309");r["a"].use(p["a"]);var m=new p["a"]({}),h=(n("d3b7"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},g=[],b={name:"home",components:{}},y=b,w=Object(u["a"])(y,v,g,!1,null,null,null),k=w.exports;r["a"].use(h["a"]);var C=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("chunk-89d13a0a"),n.e("chunk-2d0d6d35")]).then(n.bind(null,"73cf"))}},{path:"/foursquare",name:"foursquare",component:function(){return Promise.all([n.e("chunk-89d13a0a"),n.e("chunk-06d56d78")]).then(n.bind(null,"1852"))}}],P=new h["a"]({routes:C}),_=P,x=n("2f62"),T={users:[{name:"Gamzat",email:"test@gmail.de",adresse:"diesestraße 45"},{name:"Gamzat2",email:"test@gmail.de",adresse:"diesestraße 45"},{name:"Gamzat3",email:"test@gmail.de",adresse:"diesestraße 45"}]},O={getUsers:function(e){return e.users}},j={},L={},N={state:T,getters:O,actions:j,mutations:L},S=(n("99af"),n("96cf"),n("1da1")),I=n("bc3a"),E=n.n(I),A={locationinfo:{headerFullLocation:"Test",groups:[{type:"",name:"",items:[{referralId:"",reasons:{count:0,items:[{summary:"",type:"",reasonName:""}]},venue:{id:"",name:"",contact:{},location:{address:"",lat:0,lng:0,distance:0,postalCode:0,cc:"",city:"",state:"",country:"",formattedAddress:[]},categories:[{name:"",pluralName:"",shortName:"",icon:{prefix:"",suffix:""},primary:!1}],verified:!1,stats:{tipCount:0,usersCount:0,checkinsCount:0,visitsCount:0},beenHere:{count:0,lastCheckinExpiredAt:0,marked:!1,unconfirmedCount:0},photos:{count:0,groups:[]},hereNow:{count:0,summary:"",groups:[]}}}]}]}},R={getData:function(e){return e.locationinfo}},Q={fetchData:function(e){var t=e.commit;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.foursquare.com/v2/venues/explore?client_id=JCLYYTPQGCRUCY4Z1TJMTYS0H0NN0Q2ZYLX0J5B1STFLACIH&client_secret=HQYHGN25DEWQGSKNQLI514TSN52XVEIPT5UC0FFRO5KDF4JQ&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee");case 2:n=e.sent,t("setData",n.data);case 4:case"end":return e.stop()}}),e)})))()},getLocalInformation:function(e,t){var n=e.commit;return Object(S["a"])(regeneratorRuntime.mark((function e(){var r,a,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.latitude,a=t.longitude,o=t.category,u=t.radius,e.next=6,E.a.get("https://api.foursquare.com/v2/venues/explore?client_id=JCLYYTPQGCRUCY4Z1TJMTYS0H0NN0Q2ZYLX0J5B1STFLACIH&client_secret=HQYHGN25DEWQGSKNQLI514TSN52XVEIPT5UC0FFRO5KDF4JQ&v=20180323&radius=".concat(u,"&ll=").concat(r,",").concat(a,"&query=").concat(o));case 6:s=e.sent,n("setData",s.data);case 8:case"end":return e.stop()}}),e)})))()}},Y={setData:function(e,t){return e.locationinfo=t}},q={state:A,getters:R,actions:Q,mutations:Y},D={ip:"TestIP"},F={getIP:function(e){return e.ip}},H={fetchIP:function(e){var t=e.commit;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.ipify.org?format=json");case 2:n=e.sent,r={response:{ip:""}},r.response=n.data,t("setIP",r);case 6:case"end":return e.stop()}}),e)})))()}},J={setIP:function(e,t){return e.ip=t}},G={state:D,getters:F,actions:H,mutations:J},M={data:{}},U={getLocation:function(e){return e.data}},B={fetchLocation:function(e,t){var n=e.commit;return Object(S["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://tools.keycdn.com/geo.json?host=".concat(t));case 2:r=e.sent,n("setLocation",r.data);case 4:case"end":return e.stop()}}),e)})))()}},K={setLocation:function(e,t){return e.data=t}},X={state:M,getters:U,actions:B,mutations:K};r["a"].use(x["a"]);var Z=new x["a"].Store({state:{},mutations:{},actions:{},modules:{users:N,foursquare:q,ipAPI:G,locationAPI:X}});r["a"].config.productionTip=!1,new r["a"]({vuetify:m,router:_,store:Z,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){}});
//# sourceMappingURL=app.93af08f5.js.map