// Firebase Cloud Function: Auto-create Subscription Transactions
// รันทุกวันที่ 1 ของเดือน เวลา 02:00 (เวลาไทย)

const {onSchedule} = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

admin.initializeApp();
const db = admin.firestore();

/**
 * Helper to get YYYY-MM in Asia/Bangkok timezone.
 * @param {Date} date
 * @return {string}
 */
function getBangkokMonthString(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const y = parts.find((p) => p.type === "year").value;
  const m = parts.find((p) => p.type === "month").value;
  return `${y}-${m}`;
}

/**
 * Helper to get YYYY-MM-DD in Asia/Bangkok timezone.
 * @param {Date} date
 * @return {string}
 */
function getBangkokDateString(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const y = parts.find((p) => p.type === "year").value;
  const m = parts.find((p) => p.type === "month").value;
  const d = parts.find((p) => p.type === "day").value;
  return `${y}-${m}-${d}`;
}

// Cloud Function ที่รันทุกวันที่ 1 เวลา 02:00
exports.createMonthlySubscriptions = onSchedule({
  schedule: "0 2 1 * *", // ทุกวันที่ 1 เวลา 02:00 AM
  timeZone: "Asia/Bangkok",
  region: "asia-southeast1", // ใช้ region ไทย (ถูกกว่า us-central1)
  maxInstances: 1, // จำกัดไว้ 1 instance เพื่อป้องกันการรันซ้ำ
}, async (event) => {
  logger.info("🔄 Starting monthly subscription generation...");

  const today = new Date();
  const currentMonth = getBangkokMonthString(today); // "2026-03"

  try {
    // 1. ดึง subscription templates ที่ active
    const templatesSnapshot = await db.collection("subscription_templates")
        .where("active", "==", true)
        .get();

    if (templatesSnapshot.empty) {
      logger.info("✅ No active subscriptions found");
      return null;
    }

    logger.info(`📋 Found ${templatesSnapshot.size} active subscriptions`);

    const batch = db.batch();
    let createdCount = 0;

    // 2. สร้าง transaction สำหรับแต่ละ template
    for (const doc of templatesSnapshot.docs) {
      const template = doc.data();

      // เช็คว่าเดือนนี้สร้างไปแล้วหรือยัง
      if (template.lastGeneratedMonth === currentMonth) {
        logger.info(
            `⏭️  Skipping ${template.desc} - ` +
                    `already generated for ${currentMonth}`,
        );
        continue;
      }

      // สร้าง transaction ใหม่
      const newTransaction = {
        date: getBangkokDateString(today),
        desc: `${template.desc} 📅`,
        amount: template.amount,
        payer: template.payer,
        splits: template.splits,
        paymentType: "subscription",
        icon: template.icon,
        subscriptionRecurring: true,
        subscriptionStartDate: template.createdAt,
        groupId: template.groupId,
        timestamp: Date.now(),
      };

      // บันทึก transaction
      const txnRef = db.collection("transactions").doc();
      batch.set(txnRef, newTransaction);

      // อัปเดต lastGeneratedMonth
      batch.update(doc.ref, {lastGeneratedMonth: currentMonth});

      logger.info(
          `✅ Created subscription: ${template.desc} ` +
                `(${template.amount} บาท)`,
      );
      createdCount++;
    }

    // 3. Commit ทั้งหมด
    await batch.commit();

    logger.info(
        `🎉 Successfully created ${createdCount} subscription ` +
            `transactions for ${currentMonth}`,
    );
    return {success: true, created: createdCount, month: currentMonth};
  } catch (error) {
    logger.error("❌ Error creating subscriptions:", error);
    throw error;
  }
});
