'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "06a0a687f9d8fee676435af8f90e032a",
"assets/FontManifest.json": "34b9ab5b4773fc80bb48c2cc5af3398a",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/NotoSansCJKtc-Regular.otf": "8c01889e307b677a5a32f455df84375d",
"assets/images/back.png": "7f933115d41fb6c5f2e71c218c94ee7e",
"assets/images/border/back.png": "7f933115d41fb6c5f2e71c218c94ee7e",
"assets/images/border/cupid.png": "1ad2c9eea9d2dcc4ac3108c0f4cd00f3",
"assets/images/border/elder.png": "7272837a99e40c7a9cf465f0c75eb450",
"assets/images/border/fool.png": "50ad168f126e12799e865c83f2c15d16",
"assets/images/border/guard.png": "1b7c47d8d0aa3a9feff16c4fec4c3163",
"assets/images/border/hunter.png": "83831340a5a9e65b1b55050315c611b5",
"assets/images/border/little_girl.png": "e4fbc1a1c8a0c97266ccabd8da386b5c",
"assets/images/border/poet.png": "bb27eb0a27de32a6f25f2d2ba737bcbd",
"assets/images/border/prophet.png": "b4695affb7f2e78e33f8805d65bfd74c",
"assets/images/border/scapegoat.png": "5117210299a812abc660ecafa7863dbb",
"assets/images/border/sheriff.png": "cc6081a53316f4d23a00b83a0660b3fc",
"assets/images/border/thief.png": "d0296dea1898920dccaec5584b00eda1",
"assets/images/border/villager.png": "4a5b13f9add2fc31dadbb8db9cf9767e",
"assets/images/border/werewolf.png": "0fd66c8b2b15cb6e6e9986d86f8759d7",
"assets/images/border/witch.png": "2d0d2beb884f5f84b7e2c8d798f382f0",
"assets/images/cupid.png": "1ad2c9eea9d2dcc4ac3108c0f4cd00f3",
"assets/images/elder.png": "7272837a99e40c7a9cf465f0c75eb450",
"assets/images/fool.png": "50ad168f126e12799e865c83f2c15d16",
"assets/images/guard.png": "1b7c47d8d0aa3a9feff16c4fec4c3163",
"assets/images/hunter.png": "83831340a5a9e65b1b55050315c611b5",
"assets/images/little_girl.png": "e4fbc1a1c8a0c97266ccabd8da386b5c",
"assets/images/poet.png": "bb27eb0a27de32a6f25f2d2ba737bcbd",
"assets/images/prophet.png": "b4695affb7f2e78e33f8805d65bfd74c",
"assets/images/scapegoat.png": "5117210299a812abc660ecafa7863dbb",
"assets/images/sheriff.png": "cc6081a53316f4d23a00b83a0660b3fc",
"assets/images/thief.png": "d0296dea1898920dccaec5584b00eda1",
"assets/images/villager.png": "4a5b13f9add2fc31dadbb8db9cf9767e",
"assets/images/werewolf.png": "0fd66c8b2b15cb6e6e9986d86f8759d7",
"assets/images/witch.png": "2d0d2beb884f5f84b7e2c8d798f382f0",
"assets/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "37f891ad8902895ec0f23f34941ca1ad",
"assets/NotoSansCJKtc-Light.otf": "567738df26504447d01169f1eb4f7a33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "fd58e36b9edf2a302bc11cc68efa0d88",
"icons/android-chrome-192x192.png": "febdf5489d90a4f21552d6a4dfd1fb4a",
"icons/android-chrome-512x512.png": "d643dbe77c48ce92dea0c9aaa40585a8",
"icons/apple-touch-icon.png": "296e8928fa81b860317a9548a36f13ca",
"icons/browserconfig.xml": "99effbcd7a7597f2340c4f91965fa15c",
"icons/favicon-16x16.png": "6f771c0e2ddea0ff40e41bf5c7a99aa6",
"icons/favicon-32x32.png": "1ac624915c7adb75b2a2bee19200430a",
"icons/favicon.ico": "ce6bbaa49e7343956436f790a80c28c9",
"icons/mstile-150x150.png": "928a5c5954a5f4f3b89b2c79317c0934",
"icons/safari-pinned-tab.svg": "d3d61d3d102c2dddf81fd402f851d049",
"icons/site.webmanifest": "35f3698d1ef7a7459be6ec9005be6466",
"index.html": "9e315f221b7ccb02e21c6c41fbcf80c6",
"/": "9e315f221b7ccb02e21c6c41fbcf80c6",
"main.dart.js": "0a149535c0b35d8f16a62c01cf67e015",
"manifest.json": "9ac4084ea7dfbe2a81e7ef65c5a07eac"
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
