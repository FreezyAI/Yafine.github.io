"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,a;function r(e){return a.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(a=function(e){return void 0===e?"undefined":_typeof(e)},r.toString=function(){return a.toString()},r):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","0c6fdf3c28bafff37326cd30dd1bb65d"],["/about/index.html","97ff4fb197dfcd5c5e3db2f5a366f464"],["/archives/2019/10/index.html","642d1f51597ee731580b165e824dc41c"],["/archives/2019/11/index.html","eea4973ca0f321a9050805b2dd9de7bc"],["/archives/2019/index.html","edc9e9092584a733c99d4d5ebcf65348"],["/archives/2020/01/index.html","16d65b10a685a90cbd3c656f6ae5b6ee"],["/archives/2020/02/index.html","8c6bdaaf19a5653fcd1e307bfb1d508d"],["/archives/2020/03/index.html","43375b113b3e47f1d8ca9c1c7123d61a"],["/archives/2020/04/index.html","2055494b43925a7a6a977ed4a0f95fb1"],["/archives/2020/05/index.html","a579b7efbd185a9e54e0828b54fe8c6c"],["/archives/2020/07/index.html","8f6995bb4d08e39e40204f9e248ea500"],["/archives/2020/index.html","8e439f291c4b6fcc0f408912e8a60fe9"],["/archives/2020/page/2/index.html","9bba689bbf8d4c1000eb42a2232c44bc"],["/archives/2020/page/3/index.html","2c1a62f554825153b80826b05c84c965"],["/archives/index.html","dc385067ab4f02d1ffaeec58de33a4e8"],["/archives/page/2/index.html","a95bed7fa6efcb098494f0e9e203369e"],["/archives/page/3/index.html","e4cfdd3a46afad603bed4de6b40690f0"],["/archives/page/4/index.html","56009780b084c7aed5a724078b0e53f3"],["/box/about/index.html","cbd605b33f48f165627c1585754e65e0"],["/box/index.html","94440ed1c9ea2bb9c9138d24ac24e8cf"],["/categories/Hexo博客/index.html","a18cceab8e7c1e00fcff6e00b1985336"],["/categories/Hexo博客/page/2/index.html","0fba4a845ac499d04442e6e5a442ab7e"],["/categories/Hexo博客/page/3/index.html","1c6f2f6a720cb6dccb9e88f7921eac0d"],["/categories/Web前端/CSS3/index.html","7695c8ef03132783556a8b401233f86b"],["/categories/Web前端/HTML/index.html","5a92059e4ed6408421a9759d8976b051"],["/categories/Web前端/JavaScript/index.html","ec079a1056a583fa921433d99c6674b2"],["/categories/Web前端/Node-js/index.html","83009fd7502e0aeb895b30086db5ee6a"],["/categories/Web前端/index.html","ec61e94591c7b7d22c7d2f523d076580"],["/categories/index.html","fc31e4cfa4edf0150aacff41120abbbe"],["/categories/奇淫技巧/index.html","84d4db59c5636b52264fe32b988ee65a"],["/categories/实用工具集合/index.html","0d027170a49a99b01a4961596eff20cc"],["/contact/index.html","093ecdbe998bc1d1c3873f6d82870d0c"],["/css/index.css","135b580f5acdd0eb9b917db6830fe95b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/wgtags.css","9be1db9c48a80b59a0b0fbbd4184149b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.jpg","9700c340ed4f44b9c7e2e7fcdfebe2cf"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","d927a557249cb371230a85a2d7fb0dd4"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post.png","33cc44a54b13bd143ca5570d06cc59ff"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/128.png","cdd2b0f8581df30a39ba9b5e4f909514"],["/img/pwa/144.png","2763d3c6854318fdfa3908ce4577f096"],["/img/pwa/16.png","7abb9aa1c71ff050ad6173269ef2affe"],["/img/pwa/180.png","018431391c50275ed081554f2cf9efcf"],["/img/pwa/192.png","573d44ff7b8b31881b23e176e0fd6a6e"],["/img/pwa/32.png","83e36632004f1d5a3df6ad6e66240154"],["/img/pwa/36.png","9ced1102ed9c301a614a8e1574263ddd"],["/img/pwa/48.png","19cc096370a4b1c55f5a23d19ff21f5a"],["/img/pwa/512.png","a37111ea8ebb81d80bf4be3c4c8c93fa"],["/img/pwa/72.png","c3f886d26784449a62506cd6abae86b2"],["/img/pwa/96.png","f88d7845eafa46554fdd7cb5f3ef5ae0"],["/img/pwa/apple-touch-icon.png","95aea55af878f621de9bfcfc9a10030a"],["/img/pwa/safari-pinned-tab.svg","adfbb1f7d8a18e5c53c3712454af9408"],["/index.html","ea4e4d771191c428718f4f1465a6e83b"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/wgtags.js","2dd7998cc254bdd9aff02dac9f847e85"],["/link/index.html","3f10a187a842b8e79189c75e5ba708fa"],["/page/2/index.html","e372ec49c525457ae870b22b0ccf2c4d"],["/page/3/index.html","5d5139b31a0139fb8a686e4d0e71c99c"],["/page/4/index.html","a61957af8ba8b6904a8afaa703a62e1b"],["/posts/10d0c9f1.html","b2a20f7abb1331244da5c99d6150bb8a"],["/posts/12b4.html","4c0459d5eed56e5426edd5d70e724b64"],["/posts/153b.html","8fd5a6bc54776c689ea16e65fde5fa23"],["/posts/15cb.html","47f35c2afc9f6b878bdb70bd0ea1eaf7"],["/posts/3b98.html","7130a4ef94044cc96b15760804f534a5"],["/posts/49fb.html","cc8382d0b5a7bf192ee3a00b7480e3ec"],["/posts/4ab2.html","77d6da336457503eed5ad9480f90cc8c"],["/posts/4e9b.html","85229d3bb5406c93c27c51336cccf4d7"],["/posts/51fb.html","13fa6f55aa70e4181d1c8de9530f4cc0"],["/posts/5dbf.html","bd76786160d66a89c59b2678f3452704"],["/posts/6da42d6b.html","2ba3465801408435d508e8a34746815a"],["/posts/724a.html","a87eb6d93d51e081a1cd79c250107dab"],["/posts/7400.html","97e9be222f96ebf9b140d89f2f22af1b"],["/posts/7aedb564.html","b9a5cc34c9808beb438167bb4db9ec63"],["/posts/7de0.html","cdc83a6ea34fc137392ba5a264d78211"],["/posts/7fe2.html","d1b32d6006b4762adcb48fa6affe2283"],["/posts/8094.html","246c7528c9a00c4dc2a8c8834fc405dd"],["/posts/8c84.html","f2de17b1ff27d2295d0f1ce7645273b8"],["/posts/9620.html","6cc66c92cc243e866e460011aa5a0e95"],["/posts/a170.html","c4ebcce4a7df2cc90f1553c29c3ad429"],["/posts/b251.html","2d8c542c5b87d0ddbb2aeb1399dafcfc"],["/posts/b93d.html","53909672c43b659272433d79f79bd625"],["/posts/bb7.html","0b78d18affda665b3205e93116f55d96"],["/posts/bc77.html","0c11d7d1dd12df9b6502dd1a410d2b7d"],["/posts/d0e9.html","922c6e7e6d36c64e8dcef4b2a88f4b7a"],["/posts/d17e.html","6a1aaa166e1126a5b4af8072266b50c5"],["/posts/e925.html","76d31809cf44aaf81b751e7912ee4735"],["/posts/eb3a.html","9b9e278c765743c43445c551c1f73a6d"],["/posts/ebb2.html","e61fd52fa24246ad2540abec009609b3"],["/posts/ee35.html","926074175c43735208dfe0b09712d3b2"],["/posts/f295.html","e5b2a5aa7c78b931b057e0f3c521edf7"],["/posts/fc0.html","bb644d80c82e2ce25c059942ca3660f4"],["/suiyu/index.html","96bae838a088ba781314ec1fd47b4892"],["/tags/CSS3/index.html","8727401985373a2d5a474fe93d1f8d31"],["/tags/HTML/index.html","1cf77442ff345aa14484b2e1bb04add6"],["/tags/Hexo/index.html","c765cf23e1f2db6ca713eb9b3c39211f"],["/tags/Hexo/page/2/index.html","ee400a5cb2027c50abef8cdb43cf5890"],["/tags/Hexo/page/3/index.html","395a480b3a35c727eb16d4036acc68da"],["/tags/JavaScript/index.html","cbcab0d2e7a60a8cd01e800a390761b5"],["/tags/PWA/index.html","44a6a078a6d1b64460debe7282484212"],["/tags/cdn/index.html","08555a8caf724797c1cebf2b3e7300c8"],["/tags/index.html","f5f19b9590e6a0edf8e46ae4ccc79629"],["/tags/jsdelivr/index.html","466fc183b0125bf8c82433ba8e7f60c7"],["/tags/matery主题/index.html","4a4226793e67afbb65793aebe7c7b25e"],["/tags/nodejs/index.html","10d2920076ed55d0d254156a0c6d8593"],["/tags/图床搭建/index.html","9a11fb08361988755656eac27183539c"],["/tags/工具/index.html","e72434de3bf1a60c0accbc6facc29bcd"],["/tags/开发工具/index.html","e1371af0415f2cae2459362a05111b49"],["/tags/技巧/index.html","94afb489c97578a0c2bc2d958c0e13f2"],["/tags/效率工具/index.html","9116626a10693de6a0c6eb83351c88b5"],["/tags/浏览器知识/index.html","e69ffaa065863c2e849580fd2ac5c333"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,a;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function c(o,s,i){function f(n,e){if(!s[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var r=s[n]={exports:{}};o[n][0].call(r.exports,function(e){var t=o[n][1][e];return f(t||e)},r,r.exports,c,o,s,i)}return s[n].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(a,r){var t=(r=r||{}).successResponses||s.successResponses;return fetch(a.clone()).then(function(e){return"GET"===a.method&&t.test(e.status)&&c(r).then(function(n){n.put(a,e).then(function(){var e,t=r.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var a=e.url,r=t.maxAgeSeconds,c=t.maxEntries,o=t.name,s=Date.now();return i("Updating LRU order for "+a+". Max entries is "+c+", max age is "+r),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,a,s)}).then(function(e){return f.expireEntries(e,c,r,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,a,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],a=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return a.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||a(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var a=e.headers.get("date");if(a)if(new Date(a).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(a=e,new Promise(function(e,t){var n=indexedDB.open(r+a,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var a},setTimestampForUrl:function(a,r,c){return new Promise(function(e,t){var n=a.transaction(f,"readwrite");n.objectStore(f).put({url:r,timestamp:c}),n.oncomplete=function(){e(a)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,a){return o=e,i=a,((s=t)?new Promise(function(e,t){var a=1e3*s,r=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&i-a>n.value[u]&&(t=n.value[d],r.push(t),c.delete(t),n.continue())},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(t){return a=e,((i=n)?new Promise(function(e,t){var r=[],n=a.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),s=o.count();o.count().onsuccess=function(){var a=s.result;i<a&&(o.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value[d],r.push(t),c.delete(t),a-r.length>i&&n.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var a,i});var o,s,i}}},{}],3:[function(e,t,n){function a(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var r=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){r.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(r.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";r.debug("install event fired"),r.debug("creating cache ["+t+"]"),e.waitUntil(r.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(a).then(r.validatePrecacheInput).then(function(e){return r.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var a=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+a+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function a(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=a,this.handler=n}var r=new URL("./",self.location).pathname,c=e("path-to-regexp");a.prototype.makeHandler=function(e){var n,a;return this.regexp&&(n=this.regexp.exec(e),a={},this.keys.forEach(function(e,t){a[e.name]=n[t+1]})),function(e){return this.handler(e,a,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function s(e,t){for(var n=e.entries(),a=n.next(),r=[];!a.done;){new RegExp(a.value[0]).test(t)&&r.push(a.value[1]),a=n.next()}return r}function r(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),d=e("./helpers");["get","post","put","delete","head","any"].forEach(function(a){r.prototype[a]=function(e,t,n){return this.add(a,e,t,n)}}),r.prototype.add=function(e,t,n,a){var r;a=a||{},r=t instanceof RegExp?RegExp:(r=a.origin||self.location.origin)instanceof RegExp?r.source:r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,a);this.routes.has(r)||this.routes.set(r,new Map);var o=this.routes.get(r);o.has(e)||o.set(e,new Map);var s=o.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&d.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},r.prototype.matchMethod=function(e,t){var n=new URL(t),a=n.origin,r=n.pathname;return this._match(e,s(this.routes,a),r)||this._match(e,[this.routes.get(RegExp)],t)},r.prototype._match=function(e,t,n){if(0===t.length)return null;for(var a=0;a<t.length;a++){var r=t[a],c=r&&r.get(e.toLowerCase());if(c){var o=s(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},r.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new r},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(a,e,r){return r=r||{},o.debug("Strategy: cache first ["+a.url+"]",r),o.openCache(r).then(function(e){return e.match(a).then(function(e){var t=r.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(a,r)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(t,e,a){return a=a||{},c.debug("Strategy: cache only ["+t.url+"]",a),c.openCache(a).then(function(e){return e.match(t).then(function(e){var t=a.cache||r.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,s,i){return f.debug("Strategy: fastest ["+o.url+"]",i),new Promise(function(t,n){function a(e){c.push(e.toString()),r?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):r=!0}function e(e){e instanceof Response?t(e):a("No result returned")}var r=!1,c=[];f.fetchAndCache(o.clone(),i).then(e,a),d(o,s,i).then(e,a)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var d=e("../options"),u=e("../helpers");t.exports=function(o,e,s){var i=(s=s||{}).successResponses||d.successResponses,f=s.networkTimeoutSeconds||d.networkTimeoutSeconds;return u.debug("Strategy: network first ["+o.url+"]",s),u.openCache(s).then(function(e){var t,n,a,r=[];f&&(a=new Promise(function(r){t=setTimeout(function(){e.match(o).then(function(e){var t=s.cache||d.cache,n=Date.now(),a=t.maxAgeSeconds;u.isResponseFresh(e,a,n)&&r(e)})},1e3*f)}),r.push(a));var c=u.fetchAndCache(o,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw u.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return u.debug("Network or response error, fallback to cache ["+o.url+"]",s),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var a=e("../helpers");t.exports=function(e,t,n){return a.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var a=e("./options"),r=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:r,options:a,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,a=[],r=0,c=0,o="",s=t&&t.delimiter||"/";null!=(n=C.exec(e));){var i,f,d,u,h,l,p,b,m,g,x,v,w=n[0],y=n[1],E=n.index;o+=e.slice(c,E),c=E+w.length,y?o+=y[1]:(i=e[c],f=n[2],d=n[3],u=n[4],h=n[5],l=n[6],p=n[7],o&&(a.push(o),o=""),b=null!=f&&null!=i&&i!==f,m="+"===l||"*"===l,g="?"===l||"*"===l,x=n[2]||s,v=u||h,a.push({name:d||r++,prefix:f||"",delimiter:x,optional:g,repeat:m,partial:b,asterisk:!!p,pattern:v?v.replace(/([=!:$\/()])/g,"\\$1"):p?".*":"[^"+R(x)+"]+?"}))}return c<e.length&&(o+=e.substr(c)),o&&a.push(o),a}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",a=e||{},r=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var s,i=a[o.name];if(null==i){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(i)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){if(s=r(i[f]),!u[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===f?o.prefix:o.delimiter)+s}}else{if(s=o.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):r(i),!u[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var a=(n=n||{}).strict,r=!1!==n.end,c="",o=0;o<e.length;o++){var s,i,f=e[o];"string"==typeof f?c+=R(f):(s=R(f.prefix),i="(?:"+f.pattern+")",t.push(f),f.repeat&&(i+="(?:"+s+i+")*"),c+=i=f.optional?f.partial?s+"("+i+")?":"(?:"+s+"("+i+"))?":s+"("+i+")")}var d=R(n.delimiter||"/"),u=c.slice(-d.length)===d;return a||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=r?"$":a&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)t.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var a=[],r=0;r<e.length;r++)a.push(s(e[r],t,n).source);return l(new RegExp("(?:"+a.join("|")+")",p(n)),t)}(e,t,n):(a=t,o(c(e,r=n),a,r));var a,r}var b=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return a(c(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=o;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var a,r,c,o;c=Cache.prototype.addAll,(o=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(a=o[1],r=parseInt(o[2])),c&&(!o||"Firefox"===a&&46<=r||"Chrome"===a&&50<=r)||(Cache.prototype.addAll=function(n){function a(e){this.name="NetworkError",this.code=19,this.message=e}var r=this;return a.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new a("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new a("Incorrect response status");return Promise.all(e.map(function(e,t){return r.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});