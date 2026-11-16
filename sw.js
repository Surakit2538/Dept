// เว็บใหม่ไม่ใช้ service worker แล้ว ไฟล์นี้มีไว้ให้เครื่องที่เคยติดตั้งตัวเก่าไว้ ล้างแคชเก่าและยกเลิกตัวเองอัตโนมัติ
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
    e.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
        await self.registration.unregister();
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((c) => { try { c.navigate(c.url); } catch (err) { /* ไม่เป็นไร */ } });
    })());
});
