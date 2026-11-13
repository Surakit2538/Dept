import * as fs from "../../lib/fs-compat.mjs";
import { getDbInstance } from "../auth-helpers.js";
import { createReminderJob } from "../../lib/reminders.mjs";

// ตรรกะทั้งหมดอยู่ใน lib/reminders.mjs (ทดสอบด้วย tests/reminders.test.mjs)
// ตั้ง REMINDER_DRY_RUN=1 เพื่อดูรายชื่อคนที่จะถูกเตือนโดยไม่ส่งจริงและไม่บันทึก log
const run = createReminderJob({ db: getDbInstance(), fs });

export default async function handler(req, res) {
    // Vercel Cron Security check (ต้องตั้ง CRON_SECRET บน Vercel)
    if (!process.env.CRON_SECRET || req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }

    try {
        console.log("🔄 Starting debt reminders (Vercel Cron)...");
        const result = await run();
        console.log("✅ Debt reminders:", JSON.stringify(result));
        return res.status(200).json({ success: result.status !== "partial", ...result });
    } catch (error) {
        console.error("❌ Error sending debt reminders:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
