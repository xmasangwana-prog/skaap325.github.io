const CACHE_NAME = "manskaap-cache-v3";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/icon-192.png",
    "/icon-512.png",

    /* ADD YOUR IMAGE FILES BELOW */
    "/images/art1.jpg",
    "/images/art2.jpg",
    "/images/art3.jpg"
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
