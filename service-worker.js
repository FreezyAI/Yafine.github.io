"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,r;function a(e){return r.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(r=function(e){return void 0===e?"undefined":_typeof(e)},a.toString=function(){return r.toString()},a):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","ae4846d90e607b6b14b5b5aa7b1ab457"],["/about/index.html","dc4c967369de917b15af99c9c36da0cd"],["/archives/2019/10/index.html","1fe202467c99eac114dae6e7c628e4ee"],["/archives/2019/11/index.html","29a8404ea557ccba018b4cc5641d9e67"],["/archives/2019/index.html","b862cba39e432cbd455573cf0d4bb81a"],["/archives/2020/01/index.html","60d8663e19c42dcdbf7f1fb466f32e55"],["/archives/2020/02/index.html","0ad4b6fcb3fcb3c9dab1a3f71f68fe45"],["/archives/2020/03/index.html","f522d00c5fb4f822e082bae20e284bc7"],["/archives/2020/04/index.html","47289cc7f62aa6258982da44d044b8fe"],["/archives/2020/05/index.html","c0d9ede3ef929c5bd6ac0af24ed5273d"],["/archives/2020/07/index.html","c505a5a7d42e2e6f7c5917de421ca7b2"],["/archives/2020/index.html","dab68e92aca8d147a17f05b42802669e"],["/archives/2020/page/2/index.html","b67eb881cb9b9474b335cb45dd246e5d"],["/archives/2020/page/3/index.html","3a0f6e2689c64b39d347f658eddbfef1"],["/archives/index.html","d57cf04c88aa4a1477c22b4d66d8a9f1"],["/archives/page/2/index.html","819c8f9d61e79a271e251c021f19be14"],["/archives/page/3/index.html","39313ff7ca2e9e467b94b1bf0e934015"],["/archives/page/4/index.html","2cb5fb5c4068ab452977854f1f4b4d49"],["/box/about/index.html","9120a35ca99a62af8161bab5d2864845"],["/box/index.html","363fa014e831a8b6f6c9cdb07ecae55c"],["/categories/Hexo博客/index.html","10c44dc7316ee764d79c2b90f28d24bb"],["/categories/Hexo博客/page/2/index.html","8519b7e1946f1a04695a16be3b564147"],["/categories/Hexo博客/page/3/index.html","f04b7a51e25f1dec1261e6f482dce73b"],["/categories/Web前端/CSS3/index.html","4b0cc7c1a70ad5e1bd90e584cbec1df9"],["/categories/Web前端/HTML/index.html","92061d9f8ca38c3a170c80bdd4b96d8a"],["/categories/Web前端/JavaScript/index.html","878172e003878e1f601ebd4cc06d8868"],["/categories/Web前端/Node-js/index.html","361b2e1b00609076492aca78b8ad518a"],["/categories/Web前端/index.html","e713581de3dffca766072238c87d4448"],["/categories/index.html","0d43387985f2d4862ad195c105fe1960"],["/categories/奇淫技巧/index.html","bd291f8f0f12bc8811846aa641722548"],["/categories/实用工具集合/index.html","ccb0281000569e9578bc44c8de476c80"],["/contact/index.html","37d456f640872ffa233c055a32215fa7"],["/css/index.css","135b580f5acdd0eb9b917db6830fe95b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/wgtags.css","4123ba5d18d5af130d5ec59bbc37d1e1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.jpg","9700c340ed4f44b9c7e2e7fcdfebe2cf"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","d927a557249cb371230a85a2d7fb0dd4"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post.png","33cc44a54b13bd143ca5570d06cc59ff"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/128.png","cdd2b0f8581df30a39ba9b5e4f909514"],["/img/pwa/144.png","2763d3c6854318fdfa3908ce4577f096"],["/img/pwa/16.png","7abb9aa1c71ff050ad6173269ef2affe"],["/img/pwa/180.png","018431391c50275ed081554f2cf9efcf"],["/img/pwa/192.png","573d44ff7b8b31881b23e176e0fd6a6e"],["/img/pwa/32.png","83e36632004f1d5a3df6ad6e66240154"],["/img/pwa/36.png","9ced1102ed9c301a614a8e1574263ddd"],["/img/pwa/48.png","19cc096370a4b1c55f5a23d19ff21f5a"],["/img/pwa/512.png","a37111ea8ebb81d80bf4be3c4c8c93fa"],["/img/pwa/72.png","c3f886d26784449a62506cd6abae86b2"],["/img/pwa/96.png","f88d7845eafa46554fdd7cb5f3ef5ae0"],["/img/pwa/apple-touch-icon.png","95aea55af878f621de9bfcfc9a10030a"],["/img/pwa/safari-pinned-tab.svg","adfbb1f7d8a18e5c53c3712454af9408"],["/index.html","e6298676446639de741489245ad6e5c0"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/wgtags.js","2dd7998cc254bdd9aff02dac9f847e85"],["/link/index.html","aa8423ef2e360b692b8d49e0eeb43375"],["/page/2/index.html","d034e1e4850112b0c449cf4dd67c20bb"],["/page/3/index.html","abbb5311188e4d5672e8ae1fa7a4d3e9"],["/page/4/index.html","ebbb36600e3b95288809747c1a3837cd"],["/posts/10d0c9f1.html","73807a3094810153ed6e2acd972d7af8"],["/posts/12b4.html","43351be83e929396cc9459637e177ddd"],["/posts/153b.html","673287d22ca491f0a4f8fd624d7761dc"],["/posts/15cb.html","d134da13144926d4e2d268cd55a9a70b"],["/posts/3b98.html","99d68759a400bfaac2ef15f050d158fd"],["/posts/49fb.html","124ddd3f5128017375ee9879e1b6c92c"],["/posts/4ab2.html","ac239c583dda12272c56051c2c9a7a33"],["/posts/4e9b.html","0c69a0d6ae9406d6d0a20342b4c63c2b"],["/posts/51fb.html","50d2a1d3f17d451a85509e1eb5d4d17f"],["/posts/5dbf.html","ebb0925455801e0e4ab8073b5e4a693d"],["/posts/6da42d6b.html","9f3505e5e5c89a65d0348d3d84d2476a"],["/posts/724a.html","4050cbf63012dcb3199ca7a70dab048f"],["/posts/7400.html","046ba3927f9f1f3c9b5a4c8ec311e9c1"],["/posts/7aedb564.html","36daf8b9e793578e24348c9aa04c506a"],["/posts/7de0.html","89a361cdcfdb044db3bfe11b5346cf61"],["/posts/7fe2.html","929941cf04c19808db723e0e61d6eff4"],["/posts/8094.html","c6cae0338d70aff053ead782b4c878c8"],["/posts/8c84.html","0f167342e3142aa48e9b9d4f2d681a11"],["/posts/9620.html","1e3ff34cdb7428f6b749f0f85c409044"],["/posts/a170.html","1f0a9dbf9cfece1b10bf5b778af2f0e5"],["/posts/b251.html","b0ca5e1e57a0e148f49f36c8f5c7fab2"],["/posts/b93d.html","dc4bec294ea428c5cb6650568fa919bc"],["/posts/bb7.html","a6c5b979c9970de4420011f68dbc572c"],["/posts/bc77.html","c086472ab033892caf9725c75ecca603"],["/posts/d0e9.html","ef9a51fd0e1635c937c26be41138523f"],["/posts/d17e.html","7609ec6fcac0da42a9e30227bb0ef5bc"],["/posts/e925.html","ac4540a6ccf7da296443968f8086a80c"],["/posts/eb3a.html","20e59e21661b69c079842b88db430962"],["/posts/ebb2.html","9538ffa873a2d506603b353e64e0837e"],["/posts/ee35.html","9471ef3f92f9b3a21f056d9eb387d716"],["/posts/f295.html","c40df8053d9e696238546ca44cadf3b6"],["/posts/fc0.html","9dbc03f6ed0940903c1ba070a5f58bad"],["/suiyu/index.html","8b228e45a8ab7c7221036fdf176df038"],["/tags/CSS3/index.html","43d2ad24a8ff11c4be1b8d8e4dc82248"],["/tags/HTML/index.html","67ef3318b5d4ac9f5b4d53dc3f58d3b0"],["/tags/Hexo/index.html","6b45d21272b8d180e7ef6f10c434f040"],["/tags/Hexo/page/2/index.html","624d43e727a4a6e3afc73c5f32f0d73a"],["/tags/Hexo/page/3/index.html","e5b75507de94ffd4008b7f61cf2867fe"],["/tags/JavaScript/index.html","7eacc04b2f9b91c1041b2eadf68370b5"],["/tags/PWA/index.html","9bbc63cecea2cc80a71b95e09fd81047"],["/tags/cdn/index.html","71e32e6dc7e4108eab56f7e838ee01b0"],["/tags/index.html","8e2ec862bb8bfd4f35744fc74536fe7a"],["/tags/jsdelivr/index.html","8e95023adcba4821b161adb073648f3e"],["/tags/matery主题/index.html","ed5b9c9092ac88ff816b0242eb9e200e"],["/tags/nodejs/index.html","d666b3270b46a3fa8a0f98907ffc4d25"],["/tags/图床搭建/index.html","4a227aa6b982087f381ab3d3ec73a171"],["/tags/工具/index.html","48478d9a7ddde9cab5ba66e4adab9f60"],["/tags/开发工具/index.html","b2df3b89bb3d610a58880c6de40a55e2"],["/tags/技巧/index.html","12b868f9e03080ba2c01b469acfe2f08"],["/tags/效率工具/index.html","6b60f8cd908276f25bdb40fa8592c43a"],["/tags/浏览器知识/index.html","c5072b7579ac6b2f30653cd1c39cae4e"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function c(o,s,i){function f(n,e){if(!s[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,s,i)}return s[n].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,s)}).then(function(e){return f.expireEntries(e,c,a,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&i-r>n.value[u]&&(t=n.value[d],a.push(t),c.delete(t),n.continue())},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),s=o.count();o.count().onsuccess=function(){var r=s.result;i<r&&(o.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value[d],a.push(t),c.delete(t),r-a.length>i&&n.continue())})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var o,s,i}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function s(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),d=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var s=o.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&d.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,s(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=s(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,s,i){return f.debug("Strategy: fastest ["+o.url+"]",i),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),i).then(e,r),d(o,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var d=e("../options"),u=e("../helpers");t.exports=function(o,e,s){var i=(s=s||{}).successResponses||d.successResponses,f=s.networkTimeoutSeconds||d.networkTimeoutSeconds;return u.debug("Strategy: network first ["+o.url+"]",s),u.openCache(s).then(function(e){var t,n,r,a=[];f&&(r=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=s.cache||d.cache,n=Date.now(),r=t.maxAgeSeconds;u.isResponseFresh(e,r,n)&&a(e)})},1e3*f)}),a.push(r));var c=u.fetchAndCache(o,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw u.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return u.debug("Network or response error, fallback to cache ["+o.url+"]",s),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return a.push(c),Promise.race(a)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",s=t&&t.delimiter||"/";null!=(n=C.exec(e));){var i,f,d,u,h,l,p,b,m,g,x,v,w=n[0],y=n[1],E=n.index;o+=e.slice(c,E),c=E+w.length,y?o+=y[1]:(i=e[c],f=n[2],d=n[3],u=n[4],h=n[5],l=n[6],p=n[7],o&&(r.push(o),o=""),b=null!=f&&null!=i&&i!==f,m="+"===l||"*"===l,g="?"===l||"*"===l,x=n[2]||s,v=u||h,r.push({name:d||a++,prefix:f||"",delimiter:x,optional:g,repeat:m,partial:b,asterisk:!!p,pattern:v?v.replace(/([=!:$\/()])/g,"\\$1"):p?".*":"[^"+R(x)+"]+?"}))}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var s,i=r[o.name];if(null==i){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(i)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){if(s=a(i[f]),!u[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===f?o.prefix:o.delimiter)+s}}else{if(s=o.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(i),!u[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var s,i,f=e[o];"string"==typeof f?c+=R(f):(s=R(f.prefix),i="(?:"+f.pattern+")",t.push(f),f.repeat&&(i+="(?:"+s+i+")*"),c+=i=f.optional?f.partial?s+"("+i+")?":"(?:"+s+"("+i+"))?":s+"("+i+")")}var d=R(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(s(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var b=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,a,c,o;c=Cache.prototype.addAll,(o=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=o[1],a=parseInt(o[2])),c&&(!o||"Firefox"===r&&46<=a||"Chrome"===r&&50<=a)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});