'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "61957c0a8321548458d7851eec9f2236",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f8f1e1731e0a283455520d31fe241998",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e2fd54edcaf899cdc76319ca3dd66f3",
".git/logs/refs/heads/master": "1401f4be0f82f4ec4bd38728d541f088",
".git/logs/refs/remotes/origin/master": "6d675a52218fd6f603af3f23db5cd389",
".git/objects/08/a0fc03b6bb16f1a9b5f547bab6e242608d3a81": "2ebbd26516adf2d8960e5a3298f08ff0",
".git/objects/0a/7ded13d7ecc75ab57e63097315054a4493c1c6": "1ce79cddea02714f59d0f55a3dad9d2a",
".git/objects/0d/543b2985ceda548094d4c6e7585f1a653ecba0": "5d20dcd44fcb2456ab378fa98c3b6b20",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/eb5dac851c93a63a7eccdc7108e646c90d3784": "fa008151c16421e4718f623b1a1c2ce0",
".git/objects/17/95505839699707955346dcb658a6bc3d84cc36": "ce054526c893b82b712bc95995e0d4a9",
".git/objects/1e/dcfeffee8e41bdf4bf9c41ad45c6ffdf6e76a0": "238ef0054bfd5368cdf53d848a0a3020",
".git/objects/20/1ca758419c10c6040834b2dc42c440fc32d353": "f1c49b2c6ab90ef3574757846416eb84",
".git/objects/22/95801a3153828f2ff7ce908a014fade0055169": "40be4f2c8d8991ff2ac6e7cdcb50def0",
".git/objects/22/e75fc0a10b72bc9ef130940278e7d4f23d8d71": "508e1f6a29c4c8fa1fb372968a690fb8",
".git/objects/26/e7842d786b4f98acfc3055d497150d3cea10b6": "187e74e4ce34b1d624cc38618989ae16",
".git/objects/27/ba97716e4b333df8e935d2807edef5ce7c9793": "1a9a578d03650ce53116acc8be6f9737",
".git/objects/30/f80bd3adc93bb1dcf4d01325606b4780686261": "08dd860a3866c4dab647667409619920",
".git/objects/31/06575c734a83420e75faa6ae070bb542461da9": "70b15a0b47dd177dcc78d30fdfff6016",
".git/objects/31/a74a153bcf3a9c81a151277dee9378c562d681": "550c63485a567903c438e91d70b2f1ed",
".git/objects/31/abed2dcb5658e6ee64c179943102c53a34e5ec": "ad5bd9e4a0347b4310f376f85e79bd47",
".git/objects/3d/12de7922707cc08ed07d67a5506d64e42a7986": "9c17529bef25a4b1e1e0adcf7c0606c7",
".git/objects/3f/1c36beda8518aa63f33abeeeb6195a50678f41": "7db37f6f680c86bd3d640d8e513abf2b",
".git/objects/46/5a9a52cf9ebde3c82b08d0c24d6c8c2379c54b": "106bf0ea07e53d9eee3139feba9a9dc9",
".git/objects/46/905c6135544105f59873505772c6626e5e1e9a": "eedf2d4014320b35eeb915a3c0163ea5",
".git/objects/46/a777561f90f1d64889870cf29b5018f0b8d4e2": "b670be0367282bd736037b7040ed65fa",
".git/objects/47/012365b4e552e3491d54109a8db42eec0c22fc": "6f664316c9f0a4e113426e5c79030802",
".git/objects/47/be25f15dfc23494cf243094430695aa61ee95d": "f582e37651b36c45bf03bb8d5c04885c",
".git/objects/48/9e212c219ebafc4772483b571827d9009aa5c3": "0caed9227cff640fb221b73c810f8477",
".git/objects/49/0ba902c9ddbd6341207930da9bf178cf09d808": "68c2b434480fef3d1ce69dd212404c17",
".git/objects/50/3fa7fc629c99fcfbd15a6a75b145f787ad1314": "33c94fe1ac67d12498a13f8a1d9962fd",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/b7ee1e65fa1a6309e99f1d78dc513a2d579423": "82610a96b53e4487d996bc25f9996ae4",
".git/objects/56/b129a360ae39b83439dfddc5fade056325c424": "2f98895237af2f1aff6d91580f256c40",
".git/objects/60/6410e91ef6324e4cd1f5e7db710ae58d2dbba4": "957ab87072f5a5505e5fff69623a7c47",
".git/objects/62/ed47d673b318873c5178bcbbe0191cb15557f4": "15dc9a51faf9c37b719ed87064c877f4",
".git/objects/65/61800dcea980a8daf1fd581aeab0eee8f18dfb": "54e780f99b485488e2d2df523561eb77",
".git/objects/66/622fcedf26258d88c496a11b943dd1b2a5235a": "db470c3c267ba0332041e758a8106c05",
".git/objects/66/9039de79c740fc02f6636d23b18a7f910099d7": "41395fa5672830b840585c368d8afca1",
".git/objects/6f/3d5b52784fb4dc79406f916494e678483b02ef": "65bf5b9c458b74d8d06d90753c1f29fc",
".git/objects/70/cdb69e3fb10aad3dce6a17276421058de156ee": "7d23b021b66f5fa2693c503696309586",
".git/objects/70/f5c16c28c1187d3b0d62977dd1b89aaf35e497": "b7e643a40923b5106cd23e7a82373172",
".git/objects/73/0219634140055369aa2c80df6e89ce7b1b3d39": "276e18dec8fb80d86cc44d258d598f3a",
".git/objects/73/c56c8f68bb51f633b67f76da38a703013129a4": "1637748ec382df6b2dcaf6ea12e7dc3c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/1fe3dd2a1ee03deb88fa33889aca1cc5b1cdb5": "7123a005bb2b72df15ff650803037a89",
".git/objects/83/e5064f6b9ecab330f700073c3e6e8b3d378b9e": "2c6f96b4c5076cd77c28a6c69b11cabd",
".git/objects/84/1295b7fd6cc5a5d963d73721baea4d0be23f60": "f99a93d8597006ccc74f183466ac7de3",
".git/objects/84/eb7198a2a8add8d423773780e5194136a83b85": "5bbf09f39d4e6b08cb02cb585fca7683",
".git/objects/87/1fac80b8454a81f153a34825a56d4b114955cc": "16cb3c48cc1b04f03977bd51b37e7d67",
".git/objects/8f/d3118d05ad2a37905f836af6deb794d3056ad7": "ea2dbb26e09eae87c8d744813145b1a2",
".git/objects/92/46b74859dc9843ba8ce0446fe2b8bba6d8362a": "2203c6d7d6cbd961c970865b2af2340d",
".git/objects/94/1faeef59496c0e1ec493a4689c07af07d65a48": "037684105bca3ecf8e1cf24dd1b895f3",
".git/objects/99/455be58a5a2c19a03e8bb8f2f998e5d5222dbf": "022d573ba795f868103bfdb58e30c3d2",
".git/objects/9b/db26b627dcd71e74b45ff1df100d7282fc735d": "82680ffe647bf0ca368d5b4ae2b43577",
".git/objects/9e/644d3a34770242369e8a16505b133d289fb93b": "98e336989a7ee5348353b400102c4271",
".git/objects/a2/69b05979ec7bac0ca75691d17e657f9f028ed9": "b38a1d0e7f7c6a9879b4f321930844b6",
".git/objects/a2/f85aeb06b8cd54e69d885cef1706ac1a15d34e": "0aedcbc4001124ac463c6081af4c50c1",
".git/objects/a3/20f36753bcf9af7ff9088647680a6603f878cd": "c35871d44a25936891bd52158e795327",
".git/objects/a4/98eaa7c2d1d6b64f6448ccf78f2264bb33756c": "63add6d511ee74b4dbb84bfee3fe27c5",
".git/objects/a8/12b88ef847bbb6cd67079f8687ce0ceab8f9df": "e62453f8bd5ac48e240cae6d444477f9",
".git/objects/b1/4d918695ce62cb749da83c36ace787ea85a401": "26139cada16ba99e8fe11b14a51cebf5",
".git/objects/b2/3b792a75f2ae22beb147a7ce330d35ecf7f98c": "71cb9b44b72ca0d25b2f2b3b7deb1c73",
".git/objects/b5/536931acf79177448dc4121f901aa789e01c80": "31722f913e5dd2137f7964e748ee19c4",
".git/objects/b6/796d4ec4f89e01616ec3e306f37e4fcc429e7c": "6e0966ee5f3804e21dcc779546b66c71",
".git/objects/b6/f05aa03e9a3017db57e21341f56271d167ac10": "9714f0bb8d474c80735365231d423b92",
".git/objects/bf/2fa5cd6ff457e24a14cf1d25012afc838da554": "8f635ea08d02c7d1e21452dc07d73c92",
".git/objects/bf/c02e01e250a3432bc25ef5d623b891fe94f8db": "3661bc7cd1c839203da4f6842bcc4aea",
".git/objects/c1/8f26c7d83a6ca64d7a89c2187feb7e5670cb8b": "4dbe608b88d860fcc874a605fb5f761b",
".git/objects/c4/ff9b08929f4b7c52a49aa37f23132332316cc0": "6e6abedc7204836881555433043d4688",
".git/objects/c8/4528db0e09e14df967e62c9a426bcc0bfc471d": "f0586bd36d12346c2781079223ad1ece",
".git/objects/c9/6fbeee62838633af330633662b2b7f20b27e3d": "a5f10dfb8a14ecd47e901b2e3d5ecde5",
".git/objects/d0/48211b68a905e62cea6e70d2fdd69c9d49e211": "f4e9d2b3536655315492edd9782c26f2",
".git/objects/d1/0e23efec534eb03ab93e70f6750bb5f6244f98": "a1e693b552560baef6327fe3ab886d0f",
".git/objects/d3/4754900a1cf777a9f4faa7dc7d7e81578527fb": "7b306f9e6859a322e5243cb458737aa3",
".git/objects/e2/7fa52862a974a3c99363507ca1e0e616cd1b80": "20e86f48888ffd1ed70a381513ff0e3c",
".git/objects/e7/92a7e5465688e6b86ac12cf77ae9a9a239d49d": "310c31aef9350ce626554022dd8bc309",
".git/objects/ea/9ac97417def9322875273f95ff7df7c3bd6047": "b7c1df05b7cba6b4e2b4ab506beca882",
".git/objects/ec/4f476a195ced6facb90a21d7cc0f660967e330": "f58ca5efac6c872cfe60cad1056fe838",
".git/objects/ee/4abe12c9d71ccf8cccda69760f3dff74606b95": "5a5ffcaf9acf839f5f29a2af7e3908d1",
".git/objects/ef/2415997fca3406d39faa268b5de5d00d8bdb9a": "7b06c870f8375fd8bda661447fa53bf4",
".git/objects/f0/6103b8c98ed15ae27d13ea3c9be47496e35516": "b9e81c14070f9658f300935cba701931",
".git/objects/f2/e4e9246e3055fda3cf1dd5cdd71018c700e09a": "3d8962b2f385bb736adb8e9574d9b9d5",
".git/objects/f4/01f8fed362b3ea58fc4d292bef20df5e1b95ff": "cc93ef86cba030cd631ef491aa42433b",
".git/objects/f4/a10337ac6d5b856618ef1e7f04c9057c9fc903": "e1e27249eef707c536e2c38a9608c199",
".git/objects/f8/addef2dd70337793db2b7635ac4b78e950e2f4": "4c508cba6cc92e5ed8ed6cfc747cd757",
".git/objects/fb/84d2823e1684023068d2d3d2ac34a5d3fa3597": "4a41819eb25a27cd13e8072ef6ee76db",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "0fb9ea7318dcbaf63a893641d9c8b6e4",
".git/refs/remotes/origin/master": "0fb9ea7318dcbaf63a893641d9c8b6e4",
"assets/AssetManifest.json": "b58cff79b7390f11779b505ff727f4e8",
"assets/FontManifest.json": "34b9ab5b4773fc80bb48c2cc5af3398a",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/NotoSansCJKtc-Regular.otf": "8c01889e307b677a5a32f455df84375d",
"assets/images/back.png": "7f933115d41fb6c5f2e71c218c94ee7e",
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
"main.dart.js": "de120f7795da5f2e03ed8d67433aea5f",
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
