const CACHE_NAME = "dept-money-v1";
const ASSETS = [
    "./",
    "./index.html",
    // ไม่รวม external CDN เพราะ CORS policy ไม่อนุญาต
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
];

// Install Service Worker
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Service Worker
self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch/Cache Strategy
self.addEventListener("fetch", (e) => {
    // Skip caching for external CDN URLs (CORS restrictions)
    const url = e.request.url;
    if (url.startsWith('https://cdn.tailwindcss.com') ||
        url.startsWith('https://fonts.gstatic.com') ||
        url.includes('cdn.jsdelivr.net')) {
        return; // Let browser handle these normally
    }

    e.respondWith(
        caches.match(e.request).then((res) => {
            return res || fetch(e.request);
        })
    );
});
