(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["76d75f68"],{"7b3d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr fff"}},[a("q-header",[a("q-toolbar",{staticClass:"bg-blue-grey-7"},[a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n        Gordon UI\n      ")]),a("q-space"),a("q-tabs",{attrs:{shrink:"",stretch:""}},[a("q-route-tab",{attrs:{icon:"home",default:"",label:"Home",to:"/",exact:""}}),a("q-route-tab",{attrs:{icon:"cast_connected",label:"Live Gekkos",to:"/live-gekkos",exact:""}},[t.stratrunners.length?a("q-badge",{attrs:{color:"green",floating:""}},[t._v(t._s(t.stratrunners.length))]):t._e()],1),a("q-route-tab",{attrs:{icon:"timeline",label:"Backtest",to:"/backtest",exact:""}}),a("q-route-tab",{attrs:{icon:"storage",label:"Data",to:"/data",exact:""}}),a("q-route-tab",{attrs:{icon:"import_export",label:"Importer",to:"/data/importer",exact:""}},[t.activeImports>0?a("q-badge",{attrs:{color:"blue",floating:""}},[t._v(t._s(t.activeImports))]):t._e()],1),a("q-route-tab",{attrs:{icon:"settings",label:"Config",to:"/config",exact:""}}),a("q-route-tab",{attrs:{icon:"help",label:"Documentation",to:"/help"}})],1)],1),t.currentWatchers.length>0?a("q-toolbar",{staticClass:"bg-blue-grey-8"},[t.currentWatchers.length>0?a("div",[a("div",{staticClass:"text-h6"},[t._v("Prices:")]),a("div",{staticClass:"text-subtitle"},[t._v("(from Watchers)")])]):t._e(),a("q-space"),t._l(t.currentWatchers,function(e,r){return e.events.latest.candle?a("div",{key:"prices-"+e.id,staticClass:"q-mx-xs"},[a("div",{staticClass:"text-h6"},[t._v(t._s(e.events.latest.candle.close)+"\n          "),a("img",{staticClass:"crypto-icon-16",attrs:{src:"statics/crypto_icons/white/"+e.config.watch.currency.toLowerCase()+".svg",alt:e.config.watch.currency,title:e.config.watch.currency}})]),a("div",{staticClass:"text-subtitle"},[a("img",{staticClass:"crypto-icon-16 q-icon q-mr-xs",attrs:{src:"statics/crypto_icons/white/"+e.config.watch.asset.toLowerCase()+".svg",alt:e.config.watch.asset,title:e.config.watch.asset}}),t._v("\n          "+t._s(e.config.watch.exchange)+"\n        ")])]):t._e()})],2):t._e()],1),a("q-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[t._v("Essential Links")]),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://github.com/h256/gekko-quasar-ui")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"fab fa-github-square"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gekko-Quasar-UI on GitHub")]),a("q-item-label",{attrs:{caption:""}},[t._v("github.com/h256/gekko-quasar-ui")])],1)],1),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://github.com/askmike/gekko")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"fab fa-github-square"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gekko on GitHub")]),a("q-item-label",{attrs:{caption:""}},[t._v("github.com/askmike/gekko")])],1)],1),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://discord.gg/26wMygt")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"chat"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gekko Discord Channel")]),a("q-item-label",{attrs:{caption:""}},[t._v("https://discord.gg/26wMygt")])],1)],1),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://forum.gekko.wizb.it/")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"record_voice_over"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gekko Forum")]),a("q-item-label",{attrs:{caption:""}},[t._v("https://forum.gekko.wizb.it/")])],1)],1),a("q-separator"),a("q-item-label",{attrs:{header:""}},[t._v("Unofficial resources (use at own risk!)")]),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://github.com/gekkowarez/gekkoga")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"fab fa-github"}})],1),a("q-item-section",[a("q-item-label",[t._v("Gekko-GA")]),a("q-item-label",{attrs:{caption:""}},[t._v("Genetic algorithm for gekko")])],1)],1),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("https://github.com/Gab0/japonicus")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"fab fa-github"}})],1),a("q-item-section",[a("q-item-label",[t._v("Japonicus")]),a("q-item-label",{attrs:{caption:""}},[t._v("Genetic algorithm backtester for gekko")])],1)],1),a("q-separator"),a("q-item-label",{attrs:{header:""}},[t._v("Other resources")]),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("http://cryptoicons.co/")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"face"}})],1),a("q-item-section",[a("q-item-label",[t._v("Atomiclabs' Cryptocurrency Icons")]),a("q-item-label",{attrs:{caption:""}},[t._v("http://cryptoicons.co/")])],1)],1),a("q-separator"),a("q-item-label",{attrs:{header:""}},[t._v("Quasar Framework resources")]),a("q-item",{attrs:{clickable:""},nativeOn:{click:function(e){return t.openURL("http://quasar.dev")}}},[a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("Quasar Framework")]),a("q-item-label",{attrs:{caption:""}},[t._v("quasar-framework.org")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1),a("q-footer",{attrs:{reveal:""}},[a("q-toolbar",{staticClass:"bg-blue-grey-7"},[a("div",[a("div",{staticClass:"text-h6"},[t._v("Gordon UI v "+t._s(t.version.ui))]),a("div",{staticClass:"text-subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])]),a("q-space"),a("div",[a("div",{staticClass:"text-h6"},[a("em",[t._v("Use Gekko and Gordon UI at your own risk!")])]),t.version.gekko?a("div",{staticClass:"text-subtitle"},[t._v("Using Gekko v "+t._s(t.version.gekko))]):t._e()]),a("q-space"),a("q-toolbar-title",[a("div",{staticClass:"text-h6"},[t._v("Crypto-Icons by "),a("a",{attrs:{href:"http://cryptoicons.co/"}},[t._v("crypticons.co")])])])],1)],1)],1)},s=[],o=(a("ac6a"),a("cadf"),a("06db"),a("967e")),i=a.n(o),n=(a("96cf"),a("fa84")),c=a.n(n),l=a("0967"),u=a("2b0e"),p=function(t,e){var a=window.open;if(!0===l["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==u["a"].prototype.$q.electron)return u["a"].prototype.$q.electron.shell.openExternal(t);var r=a(t,"_blank");if(r)return r.focus(),r;e&&e()},v=a("2ef0"),m=a.n(v),g=a("9224"),h={name:"MainLayoutPage",data:function(){return{leftDrawerOpen:!1,version:{gekko:null,ui:g.version}}},created:function(){var t=c()(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("".concat(this.$store.state.config.apiBaseUrl,"info"));case 3:e=t.sent,m.a.has(e.data,"version")&&(this.version.gekko=m.a.get(e.data,"version")),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("Error while getting gekko's version info.",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),computed:{stratrunners:function(){return m.a.values(this.$store.getters["gekkos/list"]).concat(m.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"papertrader"===t.logType||"tradebot"===t.logType})},watchers:function(){return m.a.values(this.$store.getters["gekkos/list"]).concat(m.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"watcher"===t.logType})},activeImports:function(){return m.a.filter(this.$store.state.imports.imports,function(t){return!t.done}).length},currentWatchers:function(){return m.a.slice(this.watchers,0,10)}},methods:{openURL:p}},b=h,d=a("42e1"),k=Object(d["a"])(b,r,s,!1,null,null,null);e["default"]=k.exports},9224:function(t){t.exports=JSON.parse('{"name":"gordonui","version":"0.6.8.1","description":"Quasar Frontend for Gekko Trading Bot","productName":"Gordon UI","cordovaId":"org.cordova.quasar.app","author":"H256 <hansi256@web.de>","scripts":{"test":"echo \\"No test specified\\" && exit 0"},"dependencies":{"@quasar/extras":"^1.3.1","axios":"^0.19.0","echarts":"^4.2.1","humanize-duration":"^3.20.1","lodash":"^4.17.15","moment":"^2.24.0","quasar":"^1.1.0","vue-echarts":"^4.0.3","vue-i18n":"^8.14.0","vue-json-excel":"^0.2.98","webpack":"^4.39.2"},"devDependencies":{"@quasar/app":"^1.0.6","marked":"^0.7.0","strip-ansi":"^5.2.0","superagent":"^5.1.0","superagent-no-cache":"^0.1.1"},"engines":{"node":">= 8.9.0","npm":">= 5.6.0"},"browserslist":["> 1%","last 2 versions","not ie <= 10"]}')}}]);