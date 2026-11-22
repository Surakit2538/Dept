import * as fs from "../auth-helpers.js";
import { getDbInstance } from "../auth-helpers.js";
import { createSubscriptionJob, createWalletSubscriptionJob } from "../../lib/subscriptions.mjs";
import { createCleanupJob } from "../../lib/cleanup.mjs";
import { writeJobLog } from "../../lib/admin-status.mjs";

// ตรรกะอยู่ใน lib/subscriptions.mjs (ทดสอบด้วย tests/subscriptions.test.mjs)
const run = createSubscriptionJob({ db: getDbInstance(), fs });
const runWallet = createWalletSubscriptionJob({ db: getDbInstance(), fs });
// ล้างข้อมูลเก่า (lib/cleanup.mjs): เก็บ 12 เดือนล่าสุด ปรับด้วย CLEANUP_KEEP_MONTHS (ขั้นต่ำ 6) ตั้ง CLEANUP_DRY_RUN=1 เพื่อนับดูเฉยๆ ไม่ลบจริง
const runCleanup = createCleanupJob({ db: getDbInstance(), fs, keepMonths: process.env.CLEANUP_KEEP_MONTHS, dryRun: process.env.CLEANUP_DRY_RUN === "1" });

export default async function handler(req, res) {
    // ต้องตั้ง CRON_SECRET บน Vercel (Vercel Cron ส่งมาให้เองในหัว Authorization) ถ้าไม่ตั้งจะไม่ทำงาน
    if (!process.env.CRON_SECRET || req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }

    try {
        const result = await run();
        // รายจ่ายส่วนตัวแบบรายเดือนของแต่ละคน (ทำแยก ถ้าส่วนนี้พังต้องไม่กระทบบิลกลุ่ม)
        try { result.wallet = await runWallet(); } catch (e) { console.error("wallet subscriptions failed:", e); result.wallet = { error: e.message }; }
        // ล้างข้อมูลเก่า (ทำแยก ถ้าพังต้องไม่กระทบการสร้างบิลรายเดือน)
        try { result.cleanup = await runCleanup(); } catch (e) { console.error("cleanup failed:", e); result.cleanup = { error: e.message }; }
        console.log("✅ Subscriptions:", JSON.stringify(result));
        // สถานะในกล่องผู้ดูแล (แท็บ ฉัน): สร้างบิลรายเดือนครั้งล่าสุดกี่รายการ (บิลกลุ่ม + ส่วนตัว)
        await writeJobLog({ db: getDbInstance(), fs, id: "subscriptions", data: { month: result.month || "", created: (Number(result.created) || 0) + (Number(result.wallet && result.wallet.created) || 0) } });
        return res.status(200).json({ success: true, ...result });
    } catch (err) {
        console.error("❌ Error generating subscriptions:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
}
