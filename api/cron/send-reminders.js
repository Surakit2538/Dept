import * as fs from "../auth-helpers.js";
import { getDbInstance } from "../auth-helpers.js";
import { createReminderJob } from "../../lib/reminders.mjs";
import { createCardReminderJob } from "../../lib/card-reminders.mjs";
import { getBangkokDateString } from "../../lib/slip-core.mjs";

// ทำงานทุกวัน 10 โมงเช้า (vercel.json) เพราะ Vercel Hobby มีงานอัตโนมัติได้ 2 งาน
// - วันที่ 25: เตือนยอดค้างชำระประจำเดือน (lib/reminders.mjs, tests/reminders.test.mjs) เหมือนเดิม
// - ทุกวัน: เตือนครบกำหนดจ่ายบัตรเครดิต (lib/card-reminders.mjs, tests/card-cycle.test.mjs)
// ตั้ง REMINDER_DRY_RUN=1 เพื่อดูรายชื่อคนที่จะถูกเตือนโดยไม่ส่งจริงและไม่บันทึก log
const db = getDbInstance();
const runDebt = createReminderJob({ db, fs });
const runCards = createCardReminderJob({ db, fs });

export default async function handler(req, res) {
    // Vercel Cron Security check (ต้องตั้ง CRON_SECRET บน Vercel)
    if (!process.env.CRON_SECRET || req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }

    const out = { success: true };
    try {
        if (getBangkokDateString(new Date()).slice(8, 10) === "25") {
            console.log("Starting debt reminders (Vercel Cron)...");
            out.debt = await runDebt();
            console.log("Debt reminders:", JSON.stringify(out.debt));
            if (out.debt.status === "partial") out.success = false;
        }
    } catch (error) {
        console.error("Error sending debt reminders:", error);
        out.success = false;
        out.debtError = error.message;
    }
    try {
        out.cards = await runCards();
        console.log("Card reminders:", JSON.stringify(out.cards));
        if (out.cards.status === "partial") out.success = false;
    } catch (error) {
        console.error("Error sending card reminders:", error);
        out.success = false;
        out.cardError = error.message;
    }
    return res.status(out.debtError || out.cardError ? 500 : 200).json(out);
}
