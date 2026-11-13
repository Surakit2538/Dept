import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "node:path";

// เว็บใหม่ build ออกไปที่ ../app (เสิร์ฟที่ /app/) ใช้แกนคำนวณกลาง lib/ledger.mjs ตัวเดียวกับเซิร์ฟเวอร์
export default defineConfig({
    base: "/app/",
    plugins: [preact()],
    resolve: { alias: { "@lib": path.resolve(__dirname, "../lib") } },
    build: { outDir: "../app", emptyOutDir: true, sourcemap: false, target: "es2020" }
});
