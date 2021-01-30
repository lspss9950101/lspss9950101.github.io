'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "455675b7b5ddfb6179eaeb84541d4ee3",
".git/config": "67d673411a7f71f2946554af56768588",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "04c457e4bba1d241259cc21f1fad7607",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9ae117133844d26bf6c97760028b8f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3df7e32b046a1be02871701cbf0c4433",
".git/logs/refs/heads/GraduateAdvisor": "89022ea86a6063b780a56272da37c097",
".git/logs/refs/heads/master": "7ff9d8968a686970fe5c2e6dd858c1e2",
".git/logs/refs/remotes/origin/GraduateAdvisor": "bb3985419c461b23d6ac66595c05c85b",
".git/logs/refs/remotes/origin/HEAD": "7ff9d8968a686970fe5c2e6dd858c1e2",
".git/objects/06/2f63c1ebe0c5144a1a4fe0fe53212f80dbdf8b": "812b4f68687fa754e296d3980865a663",
".git/objects/0e/368305b75f105c400ef30fd6b0978a1cb20fe9": "ab6d684d86d0b83d81cddade18ecb052",
".git/objects/18/16112253512e7c9e0671ee7427998d30f5ad4a": "5f216f51718e8537eed116c67baf9819",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/3c0e4a2c15495a4d95836bfcd385b18b653bc7": "f8a8b74a204b0c5f6c5e0279434be93a",
".git/objects/2d/aa0db2acea2bc7874cead08dec13dd37b5b5f7": "8cf2703ddaac328ef3d101573e8f1f7b",
".git/objects/32/7e883202b81dd16a2ae3a6ac6186783d7c8c51": "64591ac9bcf3bdc7b7109bf09fc0de59",
".git/objects/32/c325cf74260dd1386ce884ad56648829b4f8d0": "2e6a5e7264e7b3fe31673f82f2cfd2c3",
".git/objects/33/27e2e07646f407260859ae240559796004adb1": "5a233c2736506f3bc3a932ca670cae86",
".git/objects/3d/377616576ddb9a639f6a98fc4cce612b496b7b": "762b9fb599277f2e004dc88182f463fe",
".git/objects/3e/06df7d1df2d75ad906ce24a87e2d473ec5f445": "87328120eb96c54d109012eb869cd5d9",
".git/objects/48/92b6b6ccc4de3239a8729780e3dc5a44a449be": "9394626e966bc64ed5777466d800a02a",
".git/objects/4a/d5d217606154506383faf31a38f74825b8df11": "f10b11a9f652633e8855cf0e767c3773",
".git/objects/52/c51de395c8c3204cca2f5fa72b3d2c08295cf0": "8a977a6d096aa09b9b9780913eee89d7",
".git/objects/55/507b738dd8ecbd7badef8d59863e006b114257": "b94e23237507cfb63c006166c3984f2e",
".git/objects/56/145857ad3de31b6e87f8588902bbf8e8b81e07": "f7679c00f6ab32b6cb51aa53101adae3",
".git/objects/5e/4e7fa373cec0e29abb806a375028c0eb3c2838": "d86d270db6c6ea879b7b143173d4f506",
".git/objects/6f/d492cbfe1780d08791a162206f732c9414a123": "1988eff014066c5dc9af7bea3dc431bf",
".git/objects/70/5f5ebbcb8c09527adc33fc14afb006b99df319": "9cc5bd6af2cdb7bc4999880b16e7b514",
".git/objects/70/76985940703136662b6987938ea69fa5cb375d": "0938119f1810d620e42a8915b5f39976",
".git/objects/75/e93b73f40a06ef31edaaf4de06a69779c01075": "0ce5ad58d9f5dff8e3a143f4779de2a8",
".git/objects/78/bcc0d522492a6a8e231c43641e22e2ecf08f1c": "e908b06c86f4cf0e2640e76d1095ab34",
".git/objects/79/b9de3969016673ef2ee5a5ed5a4c20db5015d3": "f9c2302b7b8dbceb44fc347f3540255f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b7955849a8c2131d2de27e889814934f2d6855": "a1a3648d7ed7331bc56e622ffa49f72f",
".git/objects/80/0eff5ca3230d4fce7fb027360de0a5c27d8624": "b9f9ae35624f72e50481bf53d6ec8ced",
".git/objects/88/570ab13c27035d607eea0d1ac350185db358c3": "385b20038e4fd501495e55fdb0f290d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e9c52d46feeea8fc002a68bdefed7058494c9c": "670b19e887d426f8d593b19343d899e2",
".git/objects/99/763cef5f5f2dcda1f3a302a5ee3e1bbb1fe464": "d5028a57c2e00dab0d963f78d7e84b74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/9811c6fa5c879ce93beeb275c47f6b09b60091": "03c1ede22f34cfefa2377c7ce91f43c2",
".git/objects/a6/00cae4d53eaf1f88929e37b5668ee0aa1cef8f": "19102743570f252720ccaf9a9cae5aad",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/4f425f48209d94cf8cab9f4581da41f687ebb0": "db2376275e86bcf02156f7b70c76d1b3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/5b63e1ac54f1d45434c80a2a5095ba30b47043": "eb8dbeda0daf2027159c60fbfb3d1752",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4d75ab78e90b614d6bb658ea711fadc7aabe69": "49e44ccf06d51a1b5addb07f0902fbbe",
".git/objects/bc/af02622cfee9c41e3c3b602dce64e7575df37c": "29bf8ed2e018d51ab48ba49933fc21b4",
".git/objects/c6/c51a8f19f5c2fd0dec0c5cccdaa8296f4bda08": "59f4d1b39d29eeff059c1eb37c374063",
".git/objects/cc/2a9a917fcdb2682c9fbd8190b6bb8178fd906d": "03cfde90259c51a702f6f586f171e023",
".git/objects/e2/2281cdcde98cf168370012816175f814522625": "e25384eb7ef5372ee2f6f9a93aa1f40f",
".git/objects/e4/2a033c8d48340dd1b5e91ba4e4e40f9e048f48": "04f05b9a270a8dd75d2f0c5e262a37e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f1/43506ec2bb55e564d3e69146c3b8801133e66a": "a06783bdbccdaf4e5cfd3950d633bb41",
".git/objects/f4/783f1ac3508bc2269c2d4aad1d4bb2844363cf": "5261d4978c66c1bc386312d3eb6cd147",
".git/objects/f8/cbec189338684fda834dd510412019237e4c06": "b799ba1191f539e29cdd3143f709742e",
".git/objects/fd/0c55913adb13530b691fc1f6e8a63ae57a3443": "53f41d76ae4e7fcdc4408a0e9914d63f",
".git/objects/pack/pack-4c9929c712b798497bfa5fd9e2fff484afc01bd6.idx": "1f2a44f663116f6b5ac26e31545dece8",
".git/objects/pack/pack-4c9929c712b798497bfa5fd9e2fff484afc01bd6.pack": "64164968d7c8c1929ead1a0e2dc05f60",
".git/packed-refs": "b73ce0e69aef2813344f6662a73b8629",
".git/refs/heads/GraduateAdvisor": "ef614040ce095c3c56fc71934a2eb2e1",
".git/refs/heads/master": "88fbbff25945d99e4bdf26a3e226270c",
".git/refs/remotes/origin/GraduateAdvisor": "ef614040ce095c3c56fc71934a2eb2e1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.json": "2917504d27ce4091302ad389d240a9dc",
"assets/FontManifest.json": "83b20f0070f166e33243579150478b85",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/NotoSansCJKtc-Light.otf": "567738df26504447d01169f1eb4f7a33",
"assets/fonts/NotoSansCJKtc-Regular.otf": "8c01889e307b677a5a32f455df84375d",
"assets/fonts/NotoSansCJKtc-Thin.otf": "5f4690d61e99b812778abfb526116f0d",
"assets/NOTICES": "f05001b0c06dab66f02711d85d0c61d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0e4582cc7da0ce205ed9c63de8071657",
"/": "0e4582cc7da0ce205ed9c63de8071657",
"main.dart.js": "b617950386859720da1b10a2bb8d217a",
"manifest.json": "c4f98b69e4459bb0e8961351316712a4",
"presets/NCTU%20CS%20106%20%E7%B6%B2%E5%A4%9A%E7%B5%84(%E5%A4%9A%E5%AA%92%E9%AB%94).json": "7db062f49fa826e24e1da9d5e2124b48",
"presets/NCTU%20CS%20106%20%E7%B6%B2%E5%A4%9A%E7%B5%84(%E7%B6%B2%E8%B7%AF).json": "0e23131c3af7e27b3b3637544d2b1510",
"presets/NCTU%20CS%20106%20%E8%B3%87%E5%B7%A5%E7%B5%84.json": "4d9598de8a85a262457110f59d5c94d7",
"presets/NCTU%20CS%20106%20%E8%B3%87%E9%9B%BB%E7%B5%84.json": "92c76ae8000fdb60919bc4c74af6f607",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "24de47cfe48416e8b9339cd796f4847c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
