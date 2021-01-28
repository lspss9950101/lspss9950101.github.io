'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
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
".git/index": "ca014b486d4e219857cd4e38a8149cbf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3588be4c85d777d7db5e16d6c366d035",
".git/logs/refs/heads/GraduateAdvisor": "013a43b92326269b3bb7724171609be3",
".git/logs/refs/heads/master": "7ff9d8968a686970fe5c2e6dd858c1e2",
".git/logs/refs/remotes/origin/GraduateAdvisor": "d2f0b3c2ab92ddff8bed360e64e84a3e",
".git/logs/refs/remotes/origin/HEAD": "7ff9d8968a686970fe5c2e6dd858c1e2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/3c0e4a2c15495a4d95836bfcd385b18b653bc7": "f8a8b74a204b0c5f6c5e0279434be93a",
".git/objects/3e/06df7d1df2d75ad906ce24a87e2d473ec5f445": "87328120eb96c54d109012eb869cd5d9",
".git/objects/4a/d5d217606154506383faf31a38f74825b8df11": "f10b11a9f652633e8855cf0e767c3773",
".git/objects/75/e93b73f40a06ef31edaaf4de06a69779c01075": "0ce5ad58d9f5dff8e3a143f4779de2a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/763cef5f5f2dcda1f3a302a5ee3e1bbb1fe464": "d5028a57c2e00dab0d963f78d7e84b74",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/00cae4d53eaf1f88929e37b5668ee0aa1cef8f": "19102743570f252720ccaf9a9cae5aad",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/5b63e1ac54f1d45434c80a2a5095ba30b47043": "eb8dbeda0daf2027159c60fbfb3d1752",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4d75ab78e90b614d6bb658ea711fadc7aabe69": "49e44ccf06d51a1b5addb07f0902fbbe",
".git/objects/c6/c51a8f19f5c2fd0dec0c5cccdaa8296f4bda08": "59f4d1b39d29eeff059c1eb37c374063",
".git/objects/cc/2a9a917fcdb2682c9fbd8190b6bb8178fd906d": "03cfde90259c51a702f6f586f171e023",
".git/objects/e2/2281cdcde98cf168370012816175f814522625": "e25384eb7ef5372ee2f6f9a93aa1f40f",
".git/objects/e4/2a033c8d48340dd1b5e91ba4e4e40f9e048f48": "04f05b9a270a8dd75d2f0c5e262a37e3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/43506ec2bb55e564d3e69146c3b8801133e66a": "a06783bdbccdaf4e5cfd3950d633bb41",
".git/objects/f8/cbec189338684fda834dd510412019237e4c06": "b799ba1191f539e29cdd3143f709742e",
".git/objects/pack/pack-4c9929c712b798497bfa5fd9e2fff484afc01bd6.idx": "1f2a44f663116f6b5ac26e31545dece8",
".git/objects/pack/pack-4c9929c712b798497bfa5fd9e2fff484afc01bd6.pack": "64164968d7c8c1929ead1a0e2dc05f60",
".git/packed-refs": "b73ce0e69aef2813344f6662a73b8629",
".git/refs/heads/GraduateAdvisor": "ebb23f878ca71cf11fca2d919b61aa4e",
".git/refs/heads/master": "88fbbff25945d99e4bdf26a3e226270c",
".git/refs/remotes/origin/GraduateAdvisor": "ebb23f878ca71cf11fca2d919b61aa4e",
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
"index.html": "e96f1ccea1d264dbbddd11dba49f6343",
"/": "e96f1ccea1d264dbbddd11dba49f6343",
"main.dart.js": "2bb9a08323b2759d1e1f5ad3159e7d2b",
"manifest.json": "c4f98b69e4459bb0e8961351316712a4",
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
