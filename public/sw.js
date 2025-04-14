
console.log("Service worker main file");


const cacheID = "sienceV2";
const contentToCache = [
    "/index.html",
    "/app.mjs"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheID);
        console.log('[Service Worker] Caching all: app shell and content');
        console.log(cache);
        await cache.addAll(contentToCache);
        console.log("[Service Worker] Caching done")
    })());
});
