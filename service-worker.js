"use strict";function _typeof(e){function t(e){return n.apply(this,arguments)}var n,r;function a(e){return r.apply(this,arguments)}return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?(r=function(e){return void 0===e?"undefined":_typeof(e)},a.toString=function(){return r.toString()},a):(n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof(e)},t.toString=function(){return n.toString()},t))(e)}var precacheConfig=[["/404.html","014ed8825e10e2aa87241208cdffdb27"],["/about/index.html","6cbbebb0571d6d33c23142a199bc35ba"],["/archives/2019/10/index.html","c35dec8044cd82a6696cb8340d7373b6"],["/archives/2019/11/index.html","f750a3e405602131742a1c8da63f56a4"],["/archives/2019/index.html","0904ff65cd29c258248aef3a77051bf8"],["/archives/2020/01/index.html","beffeaa346d4c29ab79019d6459eeef6"],["/archives/2020/02/index.html","eff9aac07fdf8e96a9adc78b2d3e3737"],["/archives/2020/03/index.html","1a4466d01364494a26a55b6b65c0eb2b"],["/archives/2020/04/index.html","c87929efd6bc5ac20c00ce56495e0107"],["/archives/2020/05/index.html","21937e17ea6ea96e8638f2f569e1250c"],["/archives/2020/07/index.html","a4ab13224d76603bfe5066e3c97900c7"],["/archives/2020/09/index.html","be3c3b8e222c85f7bcbe2dc2fe49469e"],["/archives/2020/index.html","8cfdf6ea41825c821702a71b348a3586"],["/archives/2020/page/2/index.html","6bab58d03e36c838df13a0562208b9c5"],["/archives/2020/page/3/index.html","4a5fd7c4c1e6e6a1ab8b7232eee30244"],["/archives/index.html","5825a50d42589838c93424cc01b251a5"],["/archives/page/2/index.html","40293ed21f9747aec67ed371d5bb8188"],["/archives/page/3/index.html","79589e9393fe7488032f73556d9c2541"],["/archives/page/4/index.html","4aecde4b84220c61fc05a967fbc00d26"],["/box/about/index.html","cbd605b33f48f165627c1585754e65e0"],["/box/index.html","94440ed1c9ea2bb9c9138d24ac24e8cf"],["/categories/Hexo博客/index.html","20ff9b9d4ad19b887d7f1d6ec10bb8c1"],["/categories/Hexo博客/page/2/index.html","deb91f3429520fa177476cb815a9d2f6"],["/categories/Hexo博客/page/3/index.html","8993316f55761d5e06e62caf991f8c69"],["/categories/Web前端/CSS3/index.html","53eb75734db39bb236e8f815f927d8dc"],["/categories/Web前端/HTML/index.html","313d1320790207ba70749352b86bdacb"],["/categories/Web前端/JavaScript/index.html","3c4c2d91b147453bc03a0620c909ccce"],["/categories/Web前端/Node-js/index.html","91373a4f5d643370f3e0683c26935f3a"],["/categories/Web前端/index.html","e27bb1917050fe7f264598c1a1f778ea"],["/categories/index.html","fdeb3222baf53b9be0fe0efd4cd8feae"],["/categories/奇淫技巧/index.html","73e12f4e6fbaec2e28f08e260cd77801"],["/categories/实用工具集合/index.html","5071ba4f514a86d2227ec951f2f88656"],["/contact/index.html","deb79cbd4a3d80ef4f42bfa8cc97a1a4"],["/css/index.css","135b580f5acdd0eb9b917db6830fe95b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/wgtags.css","9be1db9c48a80b59a0b0fbbd4184149b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.jpg","9700c340ed4f44b9c7e2e7fcdfebe2cf"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","d927a557249cb371230a85a2d7fb0dd4"],["/img/loading.gif","b59a03f99648be1b99339f8b3b1705d5"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post.png","33cc44a54b13bd143ca5570d06cc59ff"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/pwa/128.png","cdd2b0f8581df30a39ba9b5e4f909514"],["/img/pwa/144.png","2763d3c6854318fdfa3908ce4577f096"],["/img/pwa/16.png","7abb9aa1c71ff050ad6173269ef2affe"],["/img/pwa/180.png","018431391c50275ed081554f2cf9efcf"],["/img/pwa/192.png","573d44ff7b8b31881b23e176e0fd6a6e"],["/img/pwa/32.png","83e36632004f1d5a3df6ad6e66240154"],["/img/pwa/36.png","9ced1102ed9c301a614a8e1574263ddd"],["/img/pwa/48.png","19cc096370a4b1c55f5a23d19ff21f5a"],["/img/pwa/512.png","a37111ea8ebb81d80bf4be3c4c8c93fa"],["/img/pwa/72.png","c3f886d26784449a62506cd6abae86b2"],["/img/pwa/96.png","f88d7845eafa46554fdd7cb5f3ef5ae0"],["/img/pwa/apple-touch-icon.png","95aea55af878f621de9bfcfc9a10030a"],["/img/pwa/safari-pinned-tab.svg","adfbb1f7d8a18e5c53c3712454af9408"],["/index.html","400de96f341591ecdd806532dcd822b3"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/wgtags.js","2dd7998cc254bdd9aff02dac9f847e85"],["/link/index.html","fb9163df2662bf91113c50dedbbd5093"],["/page/2/index.html","e6b9c6f4df2d2a28365ba4756c2a0a42"],["/page/3/index.html","7d9ac0148617bcf547b15c8f674cae01"],["/page/4/index.html","7daf77de89d21f7d73140af494e4fb05"],["/posts/10d0c9f1.html","12dd3b2454a8ad8c9643ef7409a5047f"],["/posts/12b4.html","c3f9acf5c2fd153947bd1d55e3f0c6d9"],["/posts/153b.html","9e9f51f4e620711aed7c19cda387d652"],["/posts/15cb.html","8dcb3bf552f2ded38b23ee56dd02b16e"],["/posts/3b98.html","058fe9362ec36c83d3d157242ca6e3bc"],["/posts/49fb.html","f63f5f467ebd264e24c4e702a6e95f40"],["/posts/4ab2.html","4f1974671a962f5a52b34c5adbbb19ff"],["/posts/4e9b.html","4ad919c61dafa907fe1a875149c3f702"],["/posts/51fb.html","0223341d1ec6e75e732b057257b0c0a9"],["/posts/5dbf.html","7c1bbff66d83bf056279a0b298588f8e"],["/posts/6da42d6b.html","0cd90f2f32c42cd030098df460d02ff8"],["/posts/724a.html","402fefae1260c36263b766a1d354bf07"],["/posts/7400.html","75dcbd753137f73d270d14091af00ccb"],["/posts/7aedb564.html","5c7b5cf21f560ebc336e3f39b50192f2"],["/posts/7de0.html","992d986a3e0450fb6a49fbc7b2b7b0c4"],["/posts/7fe2.html","6ffb342c2b4b05727f73c2d6581149b3"],["/posts/8094.html","2e6a3cf2d133d67a4d11ef25935f7ae9"],["/posts/8c84.html","957410bf3b7496b44b33acb6ed161857"],["/posts/9620.html","bb35fa79e865137053007deff3cf3273"],["/posts/96f9.html","02574443b0fdf2932ad9a7901b098361"],["/posts/a170.html","653f617a21e02ec5d82de01e456d19f4"],["/posts/b251.html","d5d17e800dc4486f185dbf2bb2f69bf6"],["/posts/b93d.html","3b2a88981e2dfe18701493beee4237cb"],["/posts/bb7.html","1be03743866208e70696166db1c3d036"],["/posts/bc77.html","9b042ca735f6e52f88e106a78052bdc4"],["/posts/d0e9.html","4fb9710cb53ec233e499232eadc95d31"],["/posts/d17e.html","7214cda9f415d954b1f17ea80d9ea80c"],["/posts/e925.html","614a414f16f8a7c5e921b8251ed1ed91"],["/posts/eb3a.html","a3c0c046c5d09227c72caa76c68868b5"],["/posts/ebb2.html","bdce00f4bb3d6f4385b3d42bb067e034"],["/posts/ee35.html","a3f68a67e77ea1c03022c19026424dc5"],["/posts/f295.html","aadf3e8a8c55c55c19bd05a41b6f8a29"],["/posts/fc0.html","f3f0210100bbf1ff43b754c7e6fd0c73"],["/suiyu/index.html","b1c01a5e729cceace82b0ce71f581322"],["/tags/CSS3/index.html","ce40ef4726c3d1b7b644108d5567e74b"],["/tags/HTML/index.html","607ccf8750980f2ce8c6fceb84b630a8"],["/tags/Hexo/index.html","da7eb64ce30b12c719b11641fc3ba315"],["/tags/Hexo/page/2/index.html","dfe0c45966c81bdbdb6002ac22cb4954"],["/tags/Hexo/page/3/index.html","054def2b0e7b121d50260c8509251cb0"],["/tags/JavaScript/index.html","296c5a264df069c6cbd907ad1aeb192b"],["/tags/PWA/index.html","e667091153a5f2b47dc3f7354351eb56"],["/tags/cdn/index.html","3eb7cf5be1bc6e808544cc5f0184bc4f"],["/tags/index.html","ab97d568d0d1cfefda2ff3bf33a8fa19"],["/tags/jsdelivr/index.html","3d7f46b0bc6d1bef157f0c507b54e9ca"],["/tags/matery主题/index.html","af2a52be5eb1abb213efeb4699276160"],["/tags/nodejs/index.html","bd567b85207331a3e15d81a25f0823e4"],["/tags/图床搭建/index.html","ddd14475baf8451e02b1bcd43788c219"],["/tags/工具/index.html","a2682d9b69a35fbb139f25e91cbf2aac"],["/tags/开发工具/index.html","82fd936f551f7d69ba8c525d1b1bb292"],["/tags/技巧/index.html","c46ebf1a1aa1f0394e385ac670f37d25"],["/tags/效率工具/index.html","e73499e6847d08f453a3a0308a8d9ef7"],["/tags/浏览器知识/index.html","ef41ab146bd17e647da4d7a1ac84c37b"],["/webpushr-sw.js","f6f7ff6d6b7b7b652cb92a25eb2cef5b"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function c(o,s,i){function f(n,e){if(!s[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(d)return d(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return f(t||e)},a,a.exports,c,o,s,i)}return s[n].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||s.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||s.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,s=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,s)}).then(function(e){return f.expireEntries(e,c,a,s)}).then(function(e){i("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return o=e,i=r,((s=t)?new Promise(function(e,t){var r=1e3*s,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t,n=e.target.result;n&&i-r>n.value[u]&&(t=n.value[d],a.push(t),c.delete(t),n.continue())},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return r=e,((i=n)?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(u),s=o.count();o.count().onsuccess=function(){var r=s.result;i<r&&(o.openCursor().onsuccess=function(e){var t,n=e.target.result;n&&(t=n.value[d],a.push(t),c.delete(t),r-a.length>i&&n.continue())})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,i});var o,s,i}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){function r(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n}var a=new URL("./",self.location).pathname,c=e("path-to-regexp");r.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){function s(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var f=e("./route"),d=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var s=o.get(e),i=c.regexp||c.fullUrlRegExp;s.has(i.source)&&d.debug('"'+t+'" resolves to same regex as existing route.'),s.set(i.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,s(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=s(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(o,s,i){return f.debug("Strategy: fastest ["+o.url+"]",i),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(o.clone(),i).then(e,r),d(o,s,i).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var d=e("../options"),u=e("../helpers");t.exports=function(o,e,s){var i=(s=s||{}).successResponses||d.successResponses,f=s.networkTimeoutSeconds||d.networkTimeoutSeconds;return u.debug("Strategy: network first ["+o.url+"]",s),u.openCache(s).then(function(e){var t,n,r,a=[];f&&(r=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=s.cache||d.cache,n=Date.now(),r=t.maxAgeSeconds;u.isResponseFresh(e,r,n)&&a(e)})},1e3*f)}),a.push(r));var c=u.fetchAndCache(o,s).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw u.debug("Response was an HTTP error: "+e.statusText,s),n=e,new Error("Bad response")}).catch(function(t){return u.debug("Network or response error, fallback to cache ["+o.url+"]",s),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return a.push(c),Promise.race(a)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",s=t&&t.delimiter||"/";null!=(n=C.exec(e));){var i,f,d,u,h,l,p,b,m,g,x,v,w=n[0],y=n[1],E=n.index;o+=e.slice(c,E),c=E+w.length,y?o+=y[1]:(i=e[c],f=n[2],d=n[3],u=n[4],h=n[5],l=n[6],p=n[7],o&&(r.push(o),o=""),b=null!=f&&null!=i&&i!==f,m="+"===l||"*"===l,g="?"===l||"*"===l,x=n[2]||s,v=u||h,r.push({name:d||a++,prefix:f||"",delimiter:x,optional:g,repeat:m,partial:b,asterisk:!!p,pattern:v?v.replace(/([=!:$\/()])/g,"\\$1"):p?".*":"[^"+R(x)+"]+?"}))}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var o=d[c];if("string"!=typeof o){var s,i=r[o.name];if(null==i){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(b(i)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(i)+"`");if(0===i.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<i.length;f++){if(s=a(i[f]),!u[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===f?o.prefix:o.delimiter)+s}}else{if(s=o.asterisk?encodeURI(i).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(i),!u[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+s+'"');n+=o.prefix+s}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){b(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var s,i,f=e[o];"string"==typeof f?c+=R(f):(s=R(f.prefix),i="(?:"+f.pattern+")",t.push(f),f.repeat&&(i+="(?:"+s+i+")*"),c+=i=f.optional?f.partial?s+"("+i+")?":"(?:"+s+"("+i+"))?":s+"("+i+")")}var d=R(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function s(e,t,n){return b(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):b(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(s(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var b=e("isarray");t.exports=s,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,a,c,o;c=Cache.prototype.addAll,(o=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=o[1],a=parseInt(o[2])),c&&(!o||"Firefox"===r&&46<=a||"Chrome"===r&&50<=a)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://yafine-blog.cn"});