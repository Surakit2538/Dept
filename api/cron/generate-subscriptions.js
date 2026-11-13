import * as fs from "firebase/firestore";
import { getDbInstance } from "../auth-helpers.js";
import { createSubscriptionJob } from "../../lib/subscriptions.mjs";

// ตรรกะอยู่ใน lib/subscriptions.mjs (ทดสอบด้วย tests/subscriptions.test.mjs)
const run = createSubscriptionJob({ db: getDbInstance(), fs });

export default async function handler(req, res) {
    // ต้องตั้ง CRON_SECRET บน Vercel (Vercel Cron ส่งมาให้เองในหัว Authorization) ถ้าไม่ตั้งจะไม่ทำงาน
    if (!process.env.CRON_SECRET || req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }

    try {
        const result = await run();
        console.log("✅ Subscriptions:", JSON.stringify(result));
        return res.status(200).json({ success: true, ...result });
    } catch (err) {
        console.error("❌ Error generating subscriptions:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
}
