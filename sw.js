self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("lunch-app-v1").then(function(cache) {
      return cache.addAll([
        "/ria/",
        "/ria/index.html",
        "/ria/manifest.json",
        "/ria/icon.png",
        "/ria/og-image.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
