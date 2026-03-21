const CACHE_NAME = "dept-money-v2";
const ASSETS = [
    "./",
    "./index.html",
    // ไม่รวม external CDN เพราะ CORS policy ไม่อนุญาต
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
];

// Install Service Worker
self.addEventListener("install", (e) => {
    // บังคับให้ Service Worker ตัวใหม่ทำงานทันที
    self.skipWaiting();
    
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Service Worker
self.addEventListener("activate", (e) => {
    // ให้ Service Worker ควบคุมหน้าเว็บทันทีโดยไม่ต้องรีเฟรชใหม่
    e.waitUntil(self.clients.claim());
    
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

    // นโยบาย Network First สำหรับ HTML (โหลดจากเน็ตก่อนเสมอ ถือเป็นของใหม่ล่าสุด)
    // ถ้าเน็ตหลุดถึงจะไปดึงจาก Cache มาแสดง
    if (e.request.mode === 'navigate' || (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html'))) {
        e.respondWith(
            fetch(e.request).then((response) => {
                // ถ้าดึงจากเน็ตสำเร็จ ให้เอาไปอัปเดตทับใน Cache ด้วย
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, response.clone());
                    return response;
                });
            }).catch(() => {
                // ถ้าไม่มีเน็ต ให้ดึงจาก Cache
                return caches.match(e.request);
            })
        );
        return;
    }

    // นโยบาย Stale-While-Revalidate หรือ Cache First สำหรับไฟล์อื่นๆ 
    e.respondWith(
        caches.match(e.request).then((res) => {
            // คืนค่า Cache ทันทีถ้ามี (ไว) หรือไปดึงจากเน็ตถ้าไม่มี
            return res || fetch(e.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
