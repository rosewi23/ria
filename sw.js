self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("lunch-app-v1").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./ChatGPT Image 2025년 5월 12일 오후 05_13_23.png"
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
