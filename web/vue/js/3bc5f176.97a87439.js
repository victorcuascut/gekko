(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3bc5f176"],{"469d":function(t,e,n){"use strict";n("6762"),n("2fdb"),n("7514"),n("ac6a"),n("cadf"),n("06db");var r=n("2ef0"),i=n.n(r),a=n("c1df"),s=n.n(a),u=n("2b0e");e["a"]={computed:{gekkos:function(){return this.$store.state.gekkos.gekkos},stratrunners:function(){return i.a.values(this.$store.getters["gekkos/list"]).concat(i.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"papertrader"===t.logType||"tradebot"===t.logType})},watchers:function(){return i.a.values(this.$store.getters["gekkos/list"]).concat(i.a.values(this.$store.getters["gekkos/archive"])).filter(function(t){return"watcher"===t.logType})},watchConfig:function(){var t=i.a.pick(this.config,"watch","candleWriter"),e=u["a"].util.extend({},t);return e.type="market watcher",e.mode="realtime",e},requiredHistoricalData:function(){if(this.config.tradingAdvisor&&this.config.valid){var t=this.config.tradingAdvisor;return t.candleSize*t.historySize}},gekkoConfig:function(){var t;if(this.existingMarketWatcher){if(this.requiredHistoricalData){var e=s()().utc().startOf("minute").subtract(this.requiredHistoricalData,"minutes").unix(),n=s.a.utc(this.existingMarketWatcher.events.initial.candle.start).unix();t=s.a.unix(Math.max(e,n)).utc().format()}else t=s()().utc().startOf("minute").format();var r=u["a"].util.extend({market:{type:"leech",from:t},mode:"realtime"},this.config);return r}},existingMarketWatcher:function(){var t=u["a"].util.extend({},this.watchConfig.watch);return i.a.find(this.gekkos,{config:{watch:t}})},exchange:function(){return this.watchConfig.watch.exchange},existingTradebot:function(){var t=this;return i.a.find(this.gekkos,function(e){return"tradebot"===e.logType&&e.config.watch.exchange===t.exchange})},availableApiKeys:function(){return this.$store.state.config.apiKeys}},watch:{existingMarketWatcher:function(t,e){var n=this;if(this.pendingStratrunner){var r=this.existingMarketWatcher;r.events.latest.candle&&(this.pendingStratrunner=!1,this.startGekko().then(function(t){return n.routeToGekko(null,t.data)}).catch(function(t){return n.routeToGekko(t,resp.data)}))}}},methods:{updateConfig:function(t){this.config=t},start:function(){var t=this;if("tradebot"===this.config.type||this.config.type.label&&"tradebot"===this.config.type.label.toLowerCase()){if(this.existingTradebot){var e="You already have a tradebot running on this exchange";return e+=", you can only run one tradebot per exchange.",this.$q.dialog({title:"Bot already running",color:"warning",message:e})}if(!this.availableApiKeys.includes(this.exchange))return this.$q.dialog({title:"No API Keys found",color:"warning",message:"Please first configure API keys for this exchange in the config page."})}"market watcher"===this.config.type||this.config.type.label&&"market watcher"===this.config.type.label.toLowerCase()?this.existingMarketWatcher?(this.$q.dialog({title:"Market is already being watched",message:"This market is already being watched, redirecting you now..."}),this.$router.push({path:"/live-gekkos/".concat(this.existingMarketWatcher.id)})):this.startWatcher().then(function(e){t.$q.notify({type:"positive",message:"Watcher sucessfully started."}),t.$router.push({path:"/live-gekkos/".concat(e.data.id)})}).catch(function(e){t.$q.notify({type:"negative",message:"Error while starting market watcher."})}):this.existingMarketWatcher?this.startGekko().then(function(e){return t.routeToGekko(null,e.data)}).catch(function(e){return t.routeToGekko(e,resp.data)}):this.startWatcher().then(function(e){t.pendingStratrunner=e.data.id,t.$q.notify({type:"positive",message:"Watcher sucessfully started."})})},routeToGekko:function(t,e){if(t||e.error)return this.$q.notify({type:"negative",message:"Error while starting live gekko."}),console.error(t,e.error);this.$router.push({path:"/live-gekkos/".concat(e.id)})},startWatcher:function(){return this.$axios.post(this.$store.state.config.apiBaseUrl+"startGekko",this.watchConfig)},startGekko:function(){return this.$axios.post(this.$store.state.config.apiBaseUrl+"startGekko",this.gekkoConfig)}}}},"8f14":function(t,e,n){var r;(function(){var i={y:function(t){return 1===t?"χρόνος":"χρόνια"},mo:function(t){return 1===t?"μήνας":"μήνες"},w:function(t){return 1===t?"εβδομάδα":"εβδομάδες"},d:function(t){return 1===t?"μέρα":"μέρες"},h:function(t){return 1===t?"ώρα":"ώρες"},m:function(t){return 1===t?"λεπτό":"λεπτά"},s:function(t){return 1===t?"δευτερόλεπτο":"δευτερόλεπτα"},ms:function(t){return 1===t?"χιλιοστό του δευτερολέπτου":"χιλιοστά του δευτερολέπτου"},decimal:","},a={ar:{y:function(t){return 1===t?"سنة":"سنوات"},mo:function(t){return 1===t?"شهر":"أشهر"},w:function(t){return 1===t?"أسبوع":"أسابيع"},d:function(t){return 1===t?"يوم":"أيام"},h:function(t){return 1===t?"ساعة":"ساعات"},m:function(t){return["دقيقة","دقائق"][y(t)]},s:function(t){return 1===t?"ثانية":"ثواني"},ms:function(t){return 1===t?"جزء من الثانية":"أجزاء من الثانية"},decimal:","},bg:{y:function(t){return["години","година","години"][f(t)]},mo:function(t){return["месеца","месец","месеца"][f(t)]},w:function(t){return["седмици","седмица","седмици"][f(t)]},d:function(t){return["дни","ден","дни"][f(t)]},h:function(t){return["часа","час","часа"][f(t)]},m:function(t){return["минути","минута","минути"][f(t)]},s:function(t){return["секунди","секунда","секунди"][f(t)]},ms:function(t){return["милисекунди","милисекунда","милисекунди"][f(t)]},decimal:","},ca:{y:function(t){return"any"+(1===t?"":"s")},mo:function(t){return"mes"+(1===t?"":"os")},w:function(t){return"setman"+(1===t?"a":"es")},d:function(t){return"di"+(1===t?"a":"es")},h:function(t){return"hor"+(1===t?"a":"es")},m:function(t){return"minut"+(1===t?"":"s")},s:function(t){return"segon"+(1===t?"":"s")},ms:function(t){return"milisegon"+(1===t?"":"s")},decimal:","},cs:{y:function(t){return["rok","roku","roky","let"][h(t)]},mo:function(t){return["měsíc","měsíce","měsíce","měsíců"][h(t)]},w:function(t){return["týden","týdne","týdny","týdnů"][h(t)]},d:function(t){return["den","dne","dny","dní"][h(t)]},h:function(t){return["hodina","hodiny","hodiny","hodin"][h(t)]},m:function(t){return["minuta","minuty","minuty","minut"][h(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekund"][h(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekund"][h(t)]},decimal:","},da:{y:"år",mo:function(t){return"måned"+(1===t?"":"er")},w:function(t){return"uge"+(1===t?"":"r")},d:function(t){return"dag"+(1===t?"":"e")},h:function(t){return"time"+(1===t?"":"r")},m:function(t){return"minut"+(1===t?"":"ter")},s:function(t){return"sekund"+(1===t?"":"er")},ms:function(t){return"millisekund"+(1===t?"":"er")},decimal:","},de:{y:function(t){return"Jahr"+(1===t?"":"e")},mo:function(t){return"Monat"+(1===t?"":"e")},w:function(t){return"Woche"+(1===t?"":"n")},d:function(t){return"Tag"+(1===t?"":"e")},h:function(t){return"Stunde"+(1===t?"":"n")},m:function(t){return"Minute"+(1===t?"":"n")},s:function(t){return"Sekunde"+(1===t?"":"n")},ms:function(t){return"Millisekunde"+(1===t?"":"n")},decimal:","},el:i,en:{y:function(t){return"year"+(1===t?"":"s")},mo:function(t){return"month"+(1===t?"":"s")},w:function(t){return"week"+(1===t?"":"s")},d:function(t){return"day"+(1===t?"":"s")},h:function(t){return"hour"+(1===t?"":"s")},m:function(t){return"minute"+(1===t?"":"s")},s:function(t){return"second"+(1===t?"":"s")},ms:function(t){return"millisecond"+(1===t?"":"s")},decimal:"."},es:{y:function(t){return"año"+(1===t?"":"s")},mo:function(t){return"mes"+(1===t?"":"es")},w:function(t){return"semana"+(1===t?"":"s")},d:function(t){return"día"+(1===t?"":"s")},h:function(t){return"hora"+(1===t?"":"s")},m:function(t){return"minuto"+(1===t?"":"s")},s:function(t){return"segundo"+(1===t?"":"s")},ms:function(t){return"milisegundo"+(1===t?"":"s")},decimal:","},et:{y:function(t){return"aasta"+(1===t?"":"t")},mo:function(t){return"kuu"+(1===t?"":"d")},w:function(t){return"nädal"+(1===t?"":"at")},d:function(t){return"päev"+(1===t?"":"a")},h:function(t){return"tund"+(1===t?"":"i")},m:function(t){return"minut"+(1===t?"":"it")},s:function(t){return"sekund"+(1===t?"":"it")},ms:function(t){return"millisekund"+(1===t?"":"it")},decimal:","},fa:{y:"سال",mo:"ماه",w:"هفته",d:"روز",h:"ساعت",m:"دقیقه",s:"ثانیه",ms:"میلی ثانیه",decimal:"."},fi:{y:function(t){return 1===t?"vuosi":"vuotta"},mo:function(t){return 1===t?"kuukausi":"kuukautta"},w:function(t){return"viikko"+(1===t?"":"a")},d:function(t){return"päivä"+(1===t?"":"ä")},h:function(t){return"tunti"+(1===t?"":"a")},m:function(t){return"minuutti"+(1===t?"":"a")},s:function(t){return"sekunti"+(1===t?"":"a")},ms:function(t){return"millisekunti"+(1===t?"":"a")},decimal:","},fr:{y:function(t){return"an"+(t>=2?"s":"")},mo:"mois",w:function(t){return"semaine"+(t>=2?"s":"")},d:function(t){return"jour"+(t>=2?"s":"")},h:function(t){return"heure"+(t>=2?"s":"")},m:function(t){return"minute"+(t>=2?"s":"")},s:function(t){return"seconde"+(t>=2?"s":"")},ms:function(t){return"milliseconde"+(t>=2?"s":"")},decimal:","},gr:i,hr:{y:function(t){return t%10===2||t%10===3||t%10===4?"godine":"godina"},mo:function(t){return 1===t?"mjesec":2===t||3===t||4===t?"mjeseca":"mjeseci"},w:function(t){return t%10===1&&11!==t?"tjedan":"tjedna"},d:function(t){return 1===t?"dan":"dana"},h:function(t){return 1===t?"sat":2===t||3===t||4===t?"sata":"sati"},m:function(t){var e=t%10;return 2!==e&&3!==e&&4!==e||!(t<10||t>14)?"minuta":"minute"},s:function(t){return 10===t||11===t||12===t||13===t||14===t||16===t||17===t||18===t||19===t||t%10===5?"sekundi":t%10===1?"sekunda":t%10===2||t%10===3||t%10===4?"sekunde":"sekundi"},ms:function(t){return 1===t?"milisekunda":t%10===2||t%10===3||t%10===4?"milisekunde":"milisekundi"},decimal:","},hu:{y:"év",mo:"hónap",w:"hét",d:"nap",h:"óra",m:"perc",s:"másodperc",ms:"ezredmásodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"ár",mo:function(t){return"mánuð"+(1===t?"ur":"ir")},w:function(t){return"vik"+(1===t?"a":"ur")},d:function(t){return"dag"+(1===t?"ur":"ar")},h:function(t){return"klukkutím"+(1===t?"i":"ar")},m:function(t){return"mínút"+(1===t?"a":"ur")},s:function(t){return"sekúnd"+(1===t?"a":"ur")},ms:function(t){return"millisekúnd"+(1===t?"a":"ur")},decimal:"."},it:{y:function(t){return"ann"+(1===t?"o":"i")},mo:function(t){return"mes"+(1===t?"e":"i")},w:function(t){return"settiman"+(1===t?"a":"e")},d:function(t){return"giorn"+(1===t?"o":"i")},h:function(t){return"or"+(1===t?"a":"e")},m:function(t){return"minut"+(1===t?"o":"i")},s:function(t){return"second"+(1===t?"o":"i")},ms:function(t){return"millisecond"+(1===t?"o":"i")},decimal:","},ja:{y:"年",mo:"月",w:"週",d:"日",h:"時間",m:"分",s:"秒",ms:"ミリ秒",decimal:"."},ko:{y:"년",mo:"개월",w:"주일",d:"일",h:"시간",m:"분",s:"초",ms:"밀리 초",decimal:"."},lo:{y:"ປີ",mo:"ເດືອນ",w:"ອາທິດ",d:"ມື້",h:"ຊົ່ວໂມງ",m:"ນາທີ",s:"ວິນາທີ",ms:"ມິນລິວິນາທີ",decimal:","},lt:{y:function(t){return t%10===0||t%100>=10&&t%100<=20?"metų":"metai"},mo:function(t){return["mėnuo","mėnesiai","mėnesių"][g(t)]},w:function(t){return["savaitė","savaitės","savaičių"][g(t)]},d:function(t){return["diena","dienos","dienų"][g(t)]},h:function(t){return["valanda","valandos","valandų"][g(t)]},m:function(t){return["minutė","minutės","minučių"][g(t)]},s:function(t){return["sekundė","sekundės","sekundžių"][g(t)]},ms:function(t){return["milisekundė","milisekundės","milisekundžių"][g(t)]},decimal:","},lv:{y:function(t){return["gads","gadi"][p(t)]},mo:function(t){return["mēnesis","mēneši"][p(t)]},w:function(t){return["nedēļa","nedēļas"][p(t)]},d:function(t){return["diena","dienas"][p(t)]},h:function(t){return["stunda","stundas"][p(t)]},m:function(t){return["minūte","minūtes"][p(t)]},s:function(t){return["sekunde","sekundes"][p(t)]},ms:function(t){return["milisekunde","milisekundes"][p(t)]},decimal:","},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(t){return 1===t?"maand":"maanden"},w:function(t){return 1===t?"week":"weken"},d:function(t){return 1===t?"dag":"dagen"},h:"uur",m:function(t){return 1===t?"minuut":"minuten"},s:function(t){return 1===t?"seconde":"seconden"},ms:function(t){return 1===t?"milliseconde":"milliseconden"},decimal:","},no:{y:"år",mo:function(t){return"måned"+(1===t?"":"er")},w:function(t){return"uke"+(1===t?"":"r")},d:function(t){return"dag"+(1===t?"":"er")},h:function(t){return"time"+(1===t?"":"r")},m:function(t){return"minutt"+(1===t?"":"er")},s:function(t){return"sekund"+(1===t?"":"er")},ms:function(t){return"millisekund"+(1===t?"":"er")},decimal:","},pl:{y:function(t){return["rok","roku","lata","lat"][m(t)]},mo:function(t){return["miesiąc","miesiąca","miesiące","miesięcy"][m(t)]},w:function(t){return["tydzień","tygodnia","tygodnie","tygodni"][m(t)]},d:function(t){return["dzień","dnia","dni","dni"][m(t)]},h:function(t){return["godzina","godziny","godziny","godzin"][m(t)]},m:function(t){return["minuta","minuty","minuty","minut"][m(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekund"][m(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekund"][m(t)]},decimal:","},pt:{y:function(t){return"ano"+(1===t?"":"s")},mo:function(t){return 1===t?"mês":"meses"},w:function(t){return"semana"+(1===t?"":"s")},d:function(t){return"dia"+(1===t?"":"s")},h:function(t){return"hora"+(1===t?"":"s")},m:function(t){return"minuto"+(1===t?"":"s")},s:function(t){return"segundo"+(1===t?"":"s")},ms:function(t){return"milissegundo"+(1===t?"":"s")},decimal:","},ro:{y:function(t){return 1===t?"an":"ani"},mo:function(t){return 1===t?"lună":"luni"},w:function(t){return 1===t?"săptămână":"săptămâni"},d:function(t){return 1===t?"zi":"zile"},h:function(t){return 1===t?"oră":"ore"},m:function(t){return 1===t?"minut":"minute"},s:function(t){return 1===t?"secundă":"secunde"},ms:function(t){return 1===t?"milisecundă":"milisecunde"},decimal:","},ru:{y:function(t){return["лет","год","года"][f(t)]},mo:function(t){return["месяцев","месяц","месяца"][f(t)]},w:function(t){return["недель","неделя","недели"][f(t)]},d:function(t){return["дней","день","дня"][f(t)]},h:function(t){return["часов","час","часа"][f(t)]},m:function(t){return["минут","минута","минуты"][f(t)]},s:function(t){return["секунд","секунда","секунды"][f(t)]},ms:function(t){return["миллисекунд","миллисекунда","миллисекунды"][f(t)]},decimal:","},uk:{y:function(t){return["років","рік","роки"][f(t)]},mo:function(t){return["місяців","місяць","місяці"][f(t)]},w:function(t){return["тижнів","тиждень","тижні"][f(t)]},d:function(t){return["днів","день","дні"][f(t)]},h:function(t){return["годин","година","години"][f(t)]},m:function(t){return["хвилин","хвилина","хвилини"][f(t)]},s:function(t){return["секунд","секунда","секунди"][f(t)]},ms:function(t){return["мілісекунд","мілісекунда","мілісекунди"][f(t)]},decimal:","},ur:{y:"سال",mo:function(t){return 1===t?"مہینہ":"مہینے"},w:function(t){return 1===t?"ہفتہ":"ہفتے"},d:"دن",h:function(t){return 1===t?"گھنٹہ":"گھنٹے"},m:"منٹ",s:"سیکنڈ",ms:"ملی سیکنڈ",decimal:"."},sk:{y:function(t){return["rok","roky","roky","rokov"][h(t)]},mo:function(t){return["mesiac","mesiace","mesiace","mesiacov"][h(t)]},w:function(t){return["týždeň","týždne","týždne","týždňov"][h(t)]},d:function(t){return["deň","dni","dni","dní"][h(t)]},h:function(t){return["hodina","hodiny","hodiny","hodín"][h(t)]},m:function(t){return["minúta","minúty","minúty","minút"][h(t)]},s:function(t){return["sekunda","sekundy","sekundy","sekúnd"][h(t)]},ms:function(t){return["milisekunda","milisekundy","milisekundy","milisekúnd"][h(t)]},decimal:","},sv:{y:"år",mo:function(t){return"månad"+(1===t?"":"er")},w:function(t){return"veck"+(1===t?"a":"or")},d:function(t){return"dag"+(1===t?"":"ar")},h:function(t){return"timm"+(1===t?"e":"ar")},m:function(t){return"minut"+(1===t?"":"er")},s:function(t){return"sekund"+(1===t?"":"er")},ms:function(t){return"millisekund"+(1===t?"":"er")},decimal:","},tr:{y:"yıl",mo:"ay",w:"hafta",d:"gün",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},th:{y:"ปี",mo:"เดือน",w:"อาทิตย์",d:"วัน",h:"ชั่วโมง",m:"นาที",s:"วินาที",ms:"มิลลิวินาที",decimal:"."},vi:{y:"năm",mo:"tháng",w:"tuần",d:"ngày",h:"giờ",m:"phút",s:"giây",ms:"mili giây",decimal:","},zh_CN:{y:"年",mo:"个月",w:"周",d:"天",h:"小时",m:"分钟",s:"秒",ms:"毫秒",decimal:"."},zh_TW:{y:"年",mo:"個月",w:"周",d:"天",h:"小時",m:"分鐘",s:"秒",ms:"毫秒",decimal:"."}};function s(t){var e=function(t,n){var r=d({},e,n||{});return c(t,r)};return d(e,{language:"en",delimiter:", ",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},t)}var u=s({});function o(t){var e=[t.language];if(v(t,"fallbacks")){if(!k(t.fallbacks)||!t.fallbacks.length)throw new Error("fallbacks must be an array with at least one element");e=e.concat(t.fallbacks)}for(var n=0;n<e.length;n++){var r=e[n];if(v(t.languages,r))return t.languages[r];if(v(a,r))return a[r]}throw new Error("No language found.")}function c(t,e){var n,r,i;t=Math.abs(t);var a,s,u,c=o(e),d=[];for(n=0,r=e.units.length;n<r;n++){if(a=e.units[n],s=e.unitMeasures[a],n+1===r)if(v(e,"maxDecimalPoints")){var m=Math.pow(10,e.maxDecimalPoints),f=t/s;u=parseFloat((Math.floor(m*f)/m).toFixed(e.maxDecimalPoints))}else u=t/s;else u=Math.floor(t/s);d.push({unitCount:u,unitName:a}),t-=u*s}var h,g,p=0;for(n=0;n<d.length;n++)if(d[n].unitCount){p=n;break}if(e.round)for(n=d.length-1;n>=0;n--){if(i=d[n],i.unitCount=Math.round(i.unitCount),0===n)break;g=d[n-1],h=e.unitMeasures[g.unitName]/e.unitMeasures[i.unitName],(i.unitCount%h===0||e.largest&&e.largest-1<n-p)&&(g.unitCount+=i.unitCount/h,i.unitCount=0)}var y=[];for(n=0,d.length;n<r;n++)if(i=d[n],i.unitCount&&y.push(l(i.unitCount,i.unitName,c,e)),y.length===e.largest)break;return y.length?e.conjunction&&1!==y.length?2===y.length?y.join(e.conjunction):y.length>2?y.slice(0,-1).join(e.delimiter)+(e.serialComma?",":"")+e.conjunction+y.slice(-1):void 0:y.join(e.delimiter):l(0,e.units[e.units.length-1],c,e)}function l(t,e,n,r){var i;i=v(r,"decimal")?r.decimal:v(n,"decimal")?n.decimal:".";var a,s=t.toString().replace(".",i),u=n[e];return a="function"===typeof u?u(t):u,s+r.spacer+a}function d(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n],e)v(e,r)&&(t[r]=e[r]);return t}function m(t){return 1===t?0:Math.floor(t)!==t?1:t%10>=2&&t%10<=4&&!(t%100>10&&t%100<20)?2:3}function f(t){return Math.floor(t)!==t?2:t%100>=5&&t%100<=20||t%10>=5&&t%10<=9||t%10===0?0:t%10===1?1:t>1?2:0}function h(t){return 1===t?0:Math.floor(t)!==t?1:t%10>=2&&t%10<=4&&t%100<10?2:3}function g(t){return 1===t||t%10===1&&t%100>20?0:Math.floor(t)!==t||t%10>=2&&t%100>20||t%10>=2&&t%100<10?1:2}function p(t){return 1===t||t%10===1&&t%100!==11?0:1}function y(t){return t<=2?0:t>2&&t<11?1:0}var k=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function v(t,e){return Object.prototype.hasOwnProperty.call(t,e)}u.getSupportedLanguages=function(){var t=[];for(var e in a)v(a,e)&&"gr"!==e&&t.push(e);return t},u.humanizer=s,r=function(){return u}.call(e,n,e,t),void 0===r||(t.exports=r)})()},ae5a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"row q-col-gutter-md"},[n("div",{staticClass:"col"},[n("q-btn",{attrs:{color:"primary"},on:{click:function(e){return e.preventDefault(),t.switchToggle(e)}}},[t._v("Change paper trader settings")])],1),n("div",{staticClass:"col"},["open"===t.toggle?n("q-input",{attrs:{label:"Settings",filled:!!t.rawPaperTraderParamsError,error:!!t.rawPaperTraderParamsError,"error-label":t.rawPaperTraderParamsError.message,type:"textarea",rows:"8","max-height":80,inverted:!!t.rawPaperTraderParamsError},model:{value:t.rawPaperTraderParams,callback:function(e){t.rawPaperTraderParams=e},expression:"rawPaperTraderParams"}}):t._e()],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"text-h5 q-mb-md"},[t._v("Paper Trader")])])}],a=n("967e"),s=n.n(a),u=(n("96cf"),n("fa84")),o=n.n(u),c={created:function(){var t=o()(s.a.mark(function t(){var e;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/paperTrader");case 3:e=t.sent,this.rawPaperTraderParams=e.data.part,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$q.notify({type:"negative",message:"Error getting Perfomance-Analyser config from server."});case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{rawPaperTraderParams:"",rawPaperTraderParamsError:!1,paperTraderParams:{},toggle:"closed"}},watch:{rawPaperTraderParams:function(){this.emitConfig()}},methods:{switchToggle:function(){"open"===this.toggle?this.toggle="closed":this.toggle="open"},emitConfig:function(){this.parseParams(),this.$emit("settings",this.paperTraderParams)},parseParams:function(){try{this.paperTraderParams=toml.parse(this.rawPaperTraderParams),this.paperTraderParams.reportRoundtrips=!0,this.rawPaperTraderParamsError=!1}catch(t){this.rawPaperTraderParamsError=t,this.paperTraderParams={}}}}},l=c,d=n("42e1"),m=Object(d["a"])(l,r,i,!1,null,null,null);e["a"]=m.exports},be78:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-select",{attrs:{dense:"",label:"Exchange",hint:"Pick an exchange",options:t.exchangeList,"emit-value":"","map-options":""},model:{value:t.exchange,callback:function(e){t.exchange=e},expression:"exchange"}})},i=[],a=(n("f751"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("2ef0")),s=n.n(a),u={props:["onlyTradable","onlyImportable"],data:function(){return{exchange:"binance"}},created:function(){this.emitExchange()},computed:{exchangeList:function(){return s.a.map(Object.keys(this.exchanges),function(t,e){return{value:t,label:t}})},exchanges:function(){var t=Object.assign({},this.$store.state.config.exchanges);return!s.a.isEmpty(t)&&(this.onlyTradable&&s.a.each(t,function(e,n){e.tradable||delete t[n]}),this.onlyImportable&&s.a.each(t,function(e,n){e.importable||delete t[n]}),t)}},watch:{exchanges:function(){this.emitExchange()},exchange:function(){this.emitExchange()}},methods:{emitExchange:function(){this.$emit("exchange",this.exchange)}}},o=u,c=n("42e1"),l=Object(c["a"])(o,r,i,!1,null,null,null);e["a"]=l.exports},d987:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("h4",{staticClass:"q-ma-xs"},[t._v("Start a new gekko")]),n("gekko-config-builder",{on:{config:t.updateConfig}}),t.config.valid?n("div",{staticClass:"row justify-center q-mt-md"},[n("q-btn",{attrs:{color:"primary",disabled:t.pendingStratrunner,loading:t.pendingStratrunner&&""!==t.pendingStratrunner},on:{click:function(e){return e.preventDefault(),t.start(e)}}},[t._v("Start")])],1):t._e()],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"q-mb-xs"},[t._v("Type & Market")]),n("div",{staticClass:"row q-mb-md"},[n("type-picker",{on:{type:t.updateType}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("market-picker",{attrs:{"only-tradable":t.isTradebot},on:{market:t.updateMarketConfig}})],1)]),t.isMarketWatcher?t._e():n("strat-picker",{on:{stratConfig:t.updateStrat}}),t.isPaperTrader?n("paper-trader",{on:{settings:t.updatePaperTrader}}):t._e()],1)},s=[],u=(n("f751"),n("e81c")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group"},[t._m(0),n("div",{staticClass:"row"},[n("q-option-group",{attrs:{color:"accent",type:"radio",inline:"",options:t.types},model:{value:t.selectedTypeIndex,callback:function(e){t.selectedTypeIndex=e},expression:"selectedTypeIndex"}})],1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("p",[t._v("What type of gekko do you want?")])])}],l={created:function(){this.types=[{label:"Paper trader",value:0,color:"blue"},{label:"Market watcher",value:1,color:"green"},{label:"Tradebot",value:2,color:"red"}],this.emitType()},data:function(){return{selectedTypeIndex:0,types:[],radio:1}},methods:{emitType:function(){this.$emit("type",this.type)}},watch:{type:function(){this.emitType()}},computed:{type:function(){return this.types[this.selectedTypeIndex]}}},d=l,m=n("42e1"),f=Object(m["a"])(d,o,c,!1,null,null,null),h=f.exports,g=n("e969"),p=n("ae5a"),y=n("2ef0"),k=n.n(y),v={created:function(){var t=this;this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/candleWriter").then(function(e){t.candleWriter=toml.parse(e.data.part)}).catch(function(t){console.log("error getting candlewriter-config",t)}),this.$axios.get(this.$store.state.config.apiBaseUrl+"configPart/performanceAnalyzer").then(function(e){t.performanceAnalyzer=toml.parse(e.data.part),t.performanceAnalyzer.enabled=!0}).catch(function(t){console.log("error getting performance-analyzer-config",t)})},data:function(){return{market:{},range:{},type:"",strat:{},paperTrader:{},candleWriter:{},performanceAnalyzer:{}}},components:{marketPicker:u["a"],typePicker:h,stratPicker:g["a"],paperTrader:p["a"]},computed:{isTradebot:function(){return!(!this.type||!this.type.label)&&"tradebot"===this.type.label.toLowerCase()},isPaperTrader:function(){return!(!this.type||!this.type.label)&&"paper trader"===this.type.label.toLowerCase()},isMarketWatcher:function(){return!(!this.type||!this.type.label)&&"market watcher"===this.type.label.toLowerCase()},config:function(){var t={};return Object.assign(t,this.market,this.strat,{paperTrader:this.paperTrader},{candleWriter:this.candleWriter},{type:this.type},{performanceAnalyzer:this.performanceAnalyzer}),this.isTradebot&&(delete t.paperTrader,t.trader={enabled:!0}),t.valid=this.validConfig(t),t}},methods:{validConfig:function(t){if("market watcher"===t.type)return!0;if(!t.tradingAdvisor)return!1;if(k.a.isNaN(t.tradingAdvisor.candleSize))return!1;if(0==t.tradingAdvisor.candleSize)return!1;var e=t.tradingAdvisor.method;return!k.a.isEmpty(t[e])},updateMarketConfig:function(t){this.market=t,this.emitConfig()},updateType:function(t){this.type=t,this.emitConfig()},updateStrat:function(t){this.strat=t,this.emitConfig()},updatePaperTrader:function(t){this.paperTrader=t,this.paperTrader.enabled=!0,this.emitConfig()},emitConfig:function(){this.$emit("config",this.config)}}},w=v,b=Object(m["a"])(w,a,s,!1,null,null,null),x=b.exports,C=n("469d"),P={mixins:[C["a"]],components:{gekkoConfigBuilder:x},data:function(){return{pendingStratrunner:!1,config:{}}}},S=P,T=Object(m["a"])(S,r,i,!1,null,null,null);e["default"]=T.exports},e81c:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"q-mr-md"},[n("q-card-section",{staticClass:"bg-blue-grey-8 text-white"},[n("div",{staticClass:"text-h6"},[t._v("Market")])]),n("q-separator"),n("q-card-section",[n("exchange-picker",{attrs:{onlyTradable:t.onlyTradable,onlyImportable:t.onlyImportable},on:{exchange:function(e){return t.setExchange(e)}}})],1),n("q-separator"),n("q-card-section",[n("q-select",{attrs:{label:"Currency",hint:"Pick a currency as base",options:t.currencies,"map-options":"","emit-value":""},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}})],1),n("q-separator"),n("q-card-section",[n("q-select",{attrs:{label:"Asset",hint:"Pick an asset",options:t.assets,"map-options":"","emit-value":""},model:{value:t.asset,callback:function(e){t.asset=e},expression:"asset"}})],1)],1)},i=[],a=(n("ac6a"),n("cadf"),n("06db"),n("f751"),n("2ef0")),s=n.n(a),u=n("be78"),o={props:["onlyTradable","onlyImportable"],components:{exchangePicker:u["a"]},data:function(){return{exchange:"binance",currency:"BTC",asset:"NEO"}},created:function(){this.emitConfig()},computed:{exchanges:function(){var t=Object.assign({},this.$store.state.config.exchanges);return!s.a.isEmpty(t)&&(this.onlyTradable&&s.a.each(t,function(e,n){e.tradable||delete t[n]}),this.onlyImportable&&s.a.each(t,function(e,n){e.importable||delete t[n]}),t)},markets:function(){return this.exchanges?this.exchanges[this.exchange]:null},assets:function(){var t=this.exchanges?this.exchanges[this.exchange].markets[this.currency]:[];return t&&(t=s.a.orderBy(s.a.map(t,function(t){return{value:t,label:t}}),["label"],["asc"]),t.length&&(this.asset=t[0].value)),t},currencies:function(){var t=this.exchanges?s.a.keys(this.exchanges[this.exchange].markets):[];return t&&(t=s.a.orderBy(s.a.map(t,function(t){return{value:t,label:t}}),["label"],["asc"]),t.length&&(this.currency=t[0].value)),t},watchConfig:function(){return{watch:{exchange:this.exchange,currency:this.currency,asset:this.asset}}}},watch:{currency:function(){this.emitConfig()},asset:function(){this.emitConfig()},market:function(){this.emitConfig()},exchanges:function(){this.emitConfig()},exchange:function(){this.emitConfig()}},methods:{setExchange:function(t){this.exchange=t},emitConfig:function(){this.$emit("market",this.watchConfig)}}},c=o,l=n("42e1"),d=Object(l["a"])(c,r,i,!1,null,null,null);e["a"]=d.exports},e969:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-my-md"},[t._m(0),n("div",{staticClass:"row q-col-gutter-md"},[n("div",{staticClass:"col"},[n("q-select",{attrs:{label:"Strategy",hint:"Pick a strategy",filter:"","autofocus-filter":"",options:t.strategiesForList,"map-options":"","emit-value":""},model:{value:t.strategy,callback:function(e){t.strategy=e},expression:"strategy"}}),n("div",{staticClass:"row q-col-gutter-xs"},[n("div",{staticClass:"col"},[n("q-input",{attrs:{label:"Candle Size",hint:"input a candle size",type:"number"},model:{value:t.rawCandleSize,callback:function(e){t.rawCandleSize=e},expression:"rawCandleSize"}})],1),n("div",{staticClass:"col"},[n("q-select",{attrs:{label:"Unit",options:t.candleSizeUnits,hint:"Candlesize unit","map-options":"","emit-value":""},model:{value:t.candleSizeUnit,callback:function(e){t.candleSizeUnit=e},expression:"candleSizeUnit"}})],1)]),n("q-input",{attrs:{label:"Warmup period (in "+t.rawCandleSize+" "+t.singularCandleSizeUnit+" candles):",hint:"(will use "+t.warmupHumanized+" of data as history)",type:"number"},model:{value:t.historySize,callback:function(e){t.historySize=e},expression:"historySize"}})],1),n("div",{staticClass:"col"},[n("q-input",{staticClass:"text-italic",attrs:{label:t.strategy+" Parameters:",type:"textarea",hint:"Adjust parameters here",rows:"10","max-height":100,filled:!!t.rawStratParamsError,error:!!t.rawStratParamsError,"error-label":t.rawStratParamsError.message},model:{value:t.rawStratParams,callback:function(e){t.rawStratParams=e},expression:"rawStratParams"}})],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row q-col-gutter-md"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-h5"},[t._v("Strategy")])]),n("div",{staticClass:"col"},[n("div",{staticClass:"text-h5"},[t._v("Parameters")])])])}],a=(n("7514"),n("2ef0")),s=n.n(a),u=n("8f14"),o=n.n(u),c=(n("7f7f"),n("af47")),l={data:function(){return{strategies:[]}},computed:{strategiesForList:function(){return s.a.map(this.strategies,function(t){return{value:t.name,label:t.name}})}},methods:{getStrategies:function(){var t=this;this.$axios.get(c["a"]+"strategies").then(function(e){t.strategies=e.data,s.a.each(t.strategies,function(t){t.empty=""===t.params}),t.rawStratParams=s.a.find(t.strategies,{name:t.strategy}).params,t.emptyStrat=s.a.find(t.strategies,{name:t.strategy}).empty,t.emitConfig()}).catch(function(e){t.$q.notify({type:"negative",message:"Error getting strategies from server."})})}}},d={mixins:[l],data:function(){return{candleSizeUnits:[{label:"minutes",value:"minutes"},{label:"hours",value:"hours"},{label:"days",value:"days"}],candleSizeUnit:"hours",rawCandleSize:1,strategy:"MACD",historySize:10,rawStratParams:"",rawStratParamsError:!1,emptyStrat:!1,stratParams:{}}},created:function(){this.getStrategies()},watch:{strategy:function(t){t=s.a.find(this.strategies,{name:t}),this.rawStratParams=t.params,this.emptyStrat=t.empty,this.emitConfig()},candleSize:function(){this.emitConfig()},historySize:function(){this.emitConfig()},rawStratParams:function(){this.emitConfig()}},computed:{warmupHumanized:function(){return o()(this.candleSize*this.historySize*1e3*60)},candleSize:function(){return"minutes"===this.candleSizeUnit?this.rawCandleSize:"hours"===this.candleSizeUnit?60*this.rawCandleSize:"days"===this.candleSizeUnit?60*this.rawCandleSize*24:void 0},singularCandleSizeUnit:function(){return this.candleSizeUnit.slice(0,-1)},config:function(){var t={tradingAdvisor:{enabled:!0,method:this.strategy,candleSize:+this.candleSize,historySize:+this.historySize}};return this.emptyStrat?t[this.strategy]={__empty:!0}:t[this.strategy]=this.stratParams,t}},methods:{emitConfig:function(){this.parseParams(),this.$emit("stratConfig",this.config)},parseParams:function(){try{this.stratParams=toml.parse(this.rawStratParams),this.rawStratParamsError=!1}catch(t){this.rawStratParamsError=t,this.stratParams={}}}}},m=d,f=n("42e1"),h=Object(f["a"])(m,r,i,!1,null,null,null);e["a"]=h.exports}}]);