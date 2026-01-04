const CACHE_NAME = "calculator-cache-v1";
const FILES_TO_CACHE = [
  "/Desire265-/",
  "/Desire265-/index.html",
  "/Desire265-/style.css",
  "/Desire265-/script.js",
  "/Desire265-/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
