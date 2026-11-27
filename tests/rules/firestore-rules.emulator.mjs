// ทดสอบ firestore.rules กับ Firestore emulator ของ Google (ไม่อยู่ใน npm test เพราะต้องมี Java + firebase-tools)
//
// วิธีรัน (ติดตั้งเครื่องมือไว้นอกโปรเจกต์):
//   mkdir <โฟลเดอร์ชั่วคราว> && cd <โฟลเดอร์ชั่วคราว> && npm init -y
//   npm i firebase-tools@13.29.1 @firebase/rules-unit-testing@3.0.4 firebase@10.14.1
//   คัดลอกไฟล์นี้ไปไว้ในโฟลเดอร์นั้น แล้วสร้าง firebase.json:
//     { "firestore": { "rules": "<ที่อยู่ไฟล์ firestore.rules ของโปรเจกต์>" }, "emulators": { "firestore": { "port": 8080 } } }
//   RULES=<ที่อยู่ไฟล์ firestore.rules> npx firebase emulators:exec --only firestore --project demo-dept "node firestore-rules.emulator.mjs"
import fs from "node:fs";
import assert from "node:assert/strict";
import { initializeTestEnvironment, assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, addDoc, collection, query, where, limit, FieldPath, writeBatch } from "firebase/firestore";

const env = await initializeTestEnvironment({
    projectId: "demo-dept",
    firestore: { rules: fs.readFileSync(process.env.RULES, "utf8"), host: "127.0.0.1", port: 8080 }
});

const SUPER = "U0d739eea39c312e11c487e22861920d1";
const CUR = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 7);
const OLD = (() => { const [y, m] = CUR.split("-").map(Number); return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`; })();
async function seed() {
    await env.clearFirestore();
    await env.withSecurityRulesDisabled(async (ctx) => {
        const db = ctx.firestore();
        await setDoc(doc(db, "members/admin1"), { name: "GAME", role: "admin", lineUserId: "U_game" });
        await setDoc(doc(db, "members/boss"), { name: "BOSS", role: "member", lineUserId: SUPER });
        await setDoc(doc(db, "members/care"), { name: "CARE", role: "member", lineUserId: "U_care", realName: "แคร์", promptpay: "0811111111" });
        await setDoc(doc(db, "members/ben"), { name: "BEN", role: "member", lineUserId: "U_ben" });
        await setDoc(doc(db, "members/tha"), { name: "T H A 🍀", role: "member", lineUserId: "U_tha" });
        await setDoc(doc(db, "transactions/t_care"), { payer: "CARE", amount: 300, desc: "ข้าว", icon: "fa-utensils", date: `${CUR}-01`, splits: { CARE: 150, BEN: 150 }, people: ["BEN", "CARE"] });
        await setDoc(doc(db, "transactions/t_tha"), { payer: "T  H A 🍀 ", amount: 90, desc: "กาแฟ", icon: "fa-mug-hot", date: `${CUR}-02`, splits: { "T H A 🍀": 45, BEN: 45 }, people: ["BEN", "T H A 🍀"] });
        await setDoc(doc(db, "settlements/s1"), { from: "BEN", to: "CARE", amount: 150, month: `${CUR}`, status: "verified", people: ["BEN", "CARE"] });
        await setDoc(doc(db, "subscription_templates/tp_care"), { payer: "CARE", amount: 199, desc: "Netflix", active: true, billingDay: 5, splits: { CARE: 99.5, BEN: 99.5 }, people: ["BEN", "CARE"] });
        await setDoc(doc(db, "wallet_entries/w1"), { ownerName: "CARE", amount: 50 });
    });
}
const as = (mid, member) => env.authenticatedContext("m_" + mid, { mid, member }).firestore();
const anon = () => env.unauthenticatedContext().firestore();

let n = 0;
async function t(name, fn) {
    await seed();
    try { await fn(); n++; console.log("ok   " + name); } catch (e) { console.log("FAIL " + name + "\n     " + (e && e.message)); process.exitCode = 1; }
}

// ---------- คนนอก ----------
await t("คนนอก (ไม่ล็อกอิน): อ่านและเขียนอะไรไม่ได้เลย", async () => {
    const db = anon();
    await assertFails(getDoc(doc(db, "members/care")));
    await assertFails(getDocs(collection(db, "transactions")));
    await assertFails(addDoc(collection(db, "transactions"), { payer: "X", amount: 1 }));
    await assertFails(deleteDoc(doc(db, "settlements/s1")));
});
await t("ล็อกอิน Firebase แต่ไม่มีบัตรสมาชิก (ไม่มี mid): ทำอะไรไม่ได้", async () => {
    const db = env.authenticatedContext("someone", {}).firestore();
    await assertFails(getDoc(doc(db, "members/care")));
    await assertFails(addDoc(collection(db, "transactions"), { payer: "X", amount: 1 }));
});

// ---------- สมาชิกทั่วไป ----------
await t("สมาชิก: อ่านข้อมูลกลุ่มได้ทั้ง 4 ชุด รวมคำค้นที่ใช้ตอนลบสมาชิก", async () => {
    const db = as("ben", "BEN");
    await assertSucceeds(getDocs(collection(db, "members")));
    await assertSucceeds(getDocs(query(collection(db, "transactions"), where("date", ">=", `${CUR}-01`), where("date", "<=", `${CUR}-31`))));
    await assertSucceeds(getDocs(query(collection(db, "settlements"), where("month", "==", `${CUR}`))));
    await assertSucceeds(getDocs(query(collection(db, "subscription_templates"), where("active", "==", true))));
    await assertSucceeds(getDocs(query(collection(db, "transactions"), where(new FieldPath("splits", "CARE"), ">=", 0), limit(1))));
});
await t("สมาชิก: เพิ่มบิลได้ (เลือกคนอื่นเป็นคนจ่ายได้) และตั้งบิลรายเดือนได้ ทั้งแบบทีละรายการและแบบชุด", async () => {
    const db = as("ben", "BEN");
    await assertSucceeds(addDoc(collection(db, "transactions"), { payer: "CARE", amount: 100, date: `${CUR}-05`, splits: { CARE: 50, BEN: 50 }, people: ["BEN", "CARE"] }));
    const b = writeBatch(db);
    b.set(doc(collection(db, "transactions")), { payer: "BEN", amount: 1, date: `${CUR}-05`, people: ["BEN"] });
    b.set(doc(collection(db, "subscription_templates")), { payer: "BEN", amount: 1, active: true, people: ["BEN"] });
    await assertSucceeds(b.commit());
    // ของใหม่ต้องมีป้ายคนที่เกี่ยวข้อง (ไม่งั้นซ่อนข้อมูลไม่ได้)
    await assertFails(addDoc(collection(db, "transactions"), { payer: "BEN", amount: 1 }));
    await assertFails(addDoc(collection(db, "transactions"), { payer: "BEN", amount: 1, people: [] }));
    await assertFails(addDoc(collection(db, "subscription_templates"), { payer: "BEN", amount: 1, active: true }));
});
await t("สมาชิก: แก้ชื่อจริง/พร้อมเพย์ของตัวเองได้ แต่ตั้งตัวเองเป็นผู้ดูแลไม่ได้ และแก้ของคนอื่นไม่ได้", async () => {
    const db = as("care", "CARE");
    await assertSucceeds(updateDoc(doc(db, "members/care"), { realName: "แคร์ ใจดี", promptpay: "0822222222", realNameUpdatedAt: new Date(), promptpayUpdatedAt: new Date() }));
    await assertFails(updateDoc(doc(db, "members/care"), { role: "admin" }));
    await assertFails(updateDoc(doc(db, "members/care"), { name: "GAME" }));
    await assertFails(updateDoc(doc(db, "members/ben"), { promptpay: "0899999999" }));
});
await t("สมาชิก: เพิ่มหรือลบสมาชิกไม่ได้", async () => {
    const db = as("care", "CARE");
    await assertFails(addDoc(collection(db, "members"), { name: "NEW", role: "member" }));
    await assertFails(deleteDoc(doc(db, "members/ben")));
});
await t("คนจ่ายบิล: แก้ชื่อ/หมวดได้ ลบได้ แต่แก้ยอดไม่ได้", async () => {
    const db = as("care", "CARE");
    await assertSucceeds(updateDoc(doc(db, "transactions/t_care"), { desc: "ข้าวมันไก่", icon: "fa-utensils" }));
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { amount: 1 }));
    await assertSucceeds(deleteDoc(doc(db, "transactions/t_care")));
});
await t("คนจ่ายบิล: แก้คนหารเดือนนี้ได้ (splits + people) แต่แก้ยอด/คนจ่าย/วันที่พร้อมกันไม่ได้", async () => {
    const db = as("care", "CARE");
    await assertSucceeds(updateDoc(doc(db, "transactions/t_care"), { splits: { CARE: 100, BEN: 100, "T H A 🍀": 100 }, people: ["BEN", "CARE", "T H A 🍀"] }));
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: { CARE: 1 }, people: ["CARE"], amount: 1 }), "แก้ยอดไม่ได้");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: { BEN: 300 }, people: ["BEN"], payer: "BEN" }), "เปลี่ยนคนจ่ายไม่ได้");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: {}, people: ["CARE"] }), "คนหารว่างไม่ได้");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: { CARE: 300 }, people: [] }), "ป้ายว่างไม่ได้");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: { CARE: 150, BEN: 150 }, people: ["CARE"] }), "ซ่อนบิลจากคนหารไม่ได้");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { splits: { CARE: 300 }, people: ["BEN", "CARE", "GAME"] }), "เพิ่มคนนอกในป้ายไม่ได้");
    await assertSucceeds(updateDoc(doc(db, "transactions/t_care"), { splits: { BEN: 300 }, people: ["BEN", "CARE"] }), "จ่ายแทนเพื่อน (คนจ่ายอยู่ในป้ายแต่ไม่อยู่ในคนหาร)");
    await assertFails(updateDoc(doc(as("ben", "BEN"), "transactions/t_care"), { splits: { BEN: 300 }, people: ["BEN", "CARE"] }), "คนหารที่ไม่ได้จ่ายแก้ไม่ได้");
    await assertSucceeds(updateDoc(doc(as("admin1", "GAME"), "transactions/t_care"), { splits: { CARE: 150, BEN: 150 }, people: ["BEN", "CARE"] }), "ผู้ดูแลแก้ได้");
});
await t("คนที่ไม่ได้จ่าย (แม้อยู่ในคนหาร): แก้หรือลบบิลไม่ได้", async () => {
    const db = as("ben", "BEN");
    await assertFails(updateDoc(doc(db, "transactions/t_care"), { desc: "แก้" }));
    await assertFails(deleteDoc(doc(db, "transactions/t_care")));
});
await t("ชื่อมีช่องว่าง/emoji (คนจ่ายเขียนช่องว่างซ้ำในบิล): ยังเป็นเจ้าของบิลตัวเอง", async () => {
    const db = as("tha", "T H A 🍀");
    await assertSucceeds(updateDoc(doc(db, "transactions/t_tha"), { icon: "fa-utensils" }));
    await assertSucceeds(deleteDoc(doc(db, "transactions/t_tha")));
});
await t("ใส่ชื่อในบัตรปลอมไม่ช่วย ถ้า mid ไม่ใช่ผู้ดูแล (ผู้ดูแลดูจากเอกสารสมาชิก)", async () => {
    const db = env.authenticatedContext("m_ben", { mid: "ben", member: "BEN", admin: true }).firestore();
    await assertFails(deleteDoc(doc(db, "settlements/s1")));
    await assertFails(updateDoc(doc(db, "members/ben"), { role: "admin" }));
});
await t("ประวัติเคลียร์เงิน: สมาชิกทั่วไปเพิ่ม/แก้/ลบเองไม่ได้ (ตรวจสลิปทำที่เซิร์ฟเวอร์)", async () => {
    const db = as("care", "CARE");
    await assertFails(addDoc(collection(db, "settlements"), { from: "BEN", to: "CARE", amount: 999, status: "verified" }));
    await assertFails(updateDoc(doc(db, "settlements/s1"), { month: "2026-10" }));
    await assertFails(deleteDoc(doc(db, "settlements/s1")));
});
await t("บิลรายเดือน: คนจ่ายหยุดได้ แต่แก้ยอดไม่ได้ / คนอื่นหยุดไม่ได้ / ลบไม่ได้", async () => {
    await assertSucceeds(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { active: false, stoppedAt: new Date() }));
    await seed();
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { amount: 1 }));
    await assertFails(updateDoc(doc(as("ben", "BEN"), "subscription_templates/tp_care"), { active: false, stoppedAt: new Date() }));
    await assertFails(deleteDoc(doc(as("care", "CARE"), "subscription_templates/tp_care")));
});
await t("บิลรายเดือน: คนจ่ายแก้ชื่อ/หมวด/วันที่ได้ (วันที่ 1-31) / คนอื่นแก้ไม่ได้", async () => {
    await seed();
    await assertSucceeds(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { billingDay: 12, desc: "Netflix 4K", icon: "fa-film" }));
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { billingDay: 40 }));
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { billingDay: "5" }));
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { billingDay: 10, amount: 1 }));
    await assertFails(updateDoc(doc(as("ben", "BEN"), "subscription_templates/tp_care"), { billingDay: 10 }));
    await assertSucceeds(updateDoc(doc(as("admin1", "GAME"), "subscription_templates/tp_care"), { billingDay: 20 }));
});
await t("บิลที่ทำซ้ำ: คนจ่ายเปลี่ยนรอบได้ (1/3/6/12 เดือน, เดือนเริ่ม 1-12) / ค่าแปลกไม่ได้", async () => {
    await seed();
    await assertSucceeds(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { every: 12, startMonth: 3 }));
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { every: 5, startMonth: 3 }));
    await assertFails(updateDoc(doc(as("care", "CARE"), "subscription_templates/tp_care"), { every: 6, startMonth: 13 }));
    await assertFails(updateDoc(doc(as("ben", "BEN"), "subscription_templates/tp_care"), { every: 12, startMonth: 3 }));
});
await t("ข้อมูลส่วนตัว (กระเป๋า ฯลฯ) ปิดจากเบราว์เซอร์ทั้งหมด", async () => {
    const db = as("care", "CARE");
    await assertFails(getDoc(doc(db, "wallet_entries/w1")));
    await assertFails(setDoc(doc(db, "device_tokens/x"), { tokenHash: "h" }));
});

// ---------- ผู้ดูแล ----------
await t("ผู้ดูแล (role): จัดการสมาชิก, แก้/ลบบิลคนอื่น, ยืนยัน/ย้ายเดือน/ลบประวัติเคลียร์เงิน, หยุดบิลรายเดือนคนอื่น", async () => {
    const db = as("admin1", "GAME");
    await assertSucceeds(addDoc(collection(db, "members"), { name: "NEW", createdAt: new Date().toISOString(), quickAdded: true, role: "member" }));
    await assertSucceeds(updateDoc(doc(db, "members/ben"), { realName: "เบน", promptpay: "0833333333", role: "admin", realNameUpdatedAt: new Date(), promptpayUpdatedAt: new Date() }));
    await assertSucceeds(updateDoc(doc(db, "transactions/t_care"), { desc: "แก้โดยผู้ดูแล" }));
    await assertSucceeds(addDoc(collection(db, "settlements"), { status: "verified", from: "BEN", to: "CARE", amount: 150, month: `${CUR}`, verifiedByAdmin: true, people: ["BEN", "CARE"] }));
    await assertFails(addDoc(collection(db, "settlements"), { status: "verified", from: "BEN", to: "CARE", amount: 1, month: `${CUR}` }));
    await assertSucceeds(updateDoc(doc(db, "settlements/s1"), { month: "2026-10" }));
    await assertSucceeds(deleteDoc(doc(db, "settlements/s1")));
    await assertSucceeds(updateDoc(doc(db, "subscription_templates/tp_care"), { active: false, stoppedAt: new Date() }));
    await assertSucceeds(deleteDoc(doc(db, "transactions/t_care")));
    await assertSucceeds(deleteDoc(doc(db, "members/tha")));
});
await t("ผู้ดูแลลบข้อมูลทั้งเดือนได้ (ลบบิลและประวัติเคลียร์เงินเป็นชุดเดียว)", async () => {
    const db = as("admin1", "GAME");
    const b = writeBatch(db);
    for (const p of ["transactions/t_care", "transactions/t_tha", "settlements/s1"]) b.delete(doc(db, p));
    await assertSucceeds(b.commit());
});
await t("ผู้ดูแลลบทั้งเดือนขนาดเต็ม 400 รายการในชุดเดียวได้ (ไม่ติดขีดจำกัดการตรวจผู้ดูแลต่อชุด)", async () => {
    await env.withSecurityRulesDisabled(async (ctx) => {
        const db = ctx.firestore();
        for (let i = 0; i < 300; i++) await setDoc(doc(db, "transactions/big" + i), { payer: "CARE", amount: 1, date: `${CUR}-02` });
        for (let i = 0; i < 100; i++) await setDoc(doc(db, "settlements/big" + i), { from: "BEN", to: "CARE", amount: 1 });
    });
    const db = as("admin1", "GAME");
    const b = writeBatch(db);
    for (let i = 0; i < 300; i++) b.delete(doc(db, "transactions/big" + i));
    for (let i = 0; i < 100; i++) b.delete(doc(db, "settlements/big" + i));
    await assertSucceeds(b.commit());
});
await t("ผู้ดูแลหลัก (LINE ของเจ้าของ) เป็นผู้ดูแลแม้ role เป็น member", async () => {
    await assertSucceeds(deleteDoc(doc(as("boss", "BOSS"), "settlements/s1")));
});
await t("ตั้ง/ถอดผู้ดูแลมีผลทันที (ไม่ต้องรอล็อกอินใหม่)", async () => {
    await env.withSecurityRulesDisabled(async (ctx) => { await updateDoc(doc(ctx.firestore(), "members/ben"), { role: "admin" }); });
    await assertSucceeds(updateDoc(doc(as("ben", "BEN"), "settlements/s1"), { month: "2026-10" }));
    await env.withSecurityRulesDisabled(async (ctx) => { await updateDoc(doc(ctx.firestore(), "members/admin1"), { role: "member" }); });
    await assertFails(deleteDoc(doc(as("admin1", "GAME"), "settlements/s1")));
});

// ---------- ซ่อนข้อมูลของคนอื่น (app_config/privacy.hide = true) ----------
const hide = (on) => env.withSecurityRulesDisabled(async (ctx) => { await setDoc(doc(ctx.firestore(), "app_config/privacy"), { hide: on }); });
const ALL_TX = (db) => query(collection(db, "transactions"), where("date", ">=", `${CUR}-01`), where("date", "<=", `${CUR}-31`));
const MY_TX = (db, me) => query(collection(db, "transactions"), where("people", "array-contains", me), where("date", ">=", `${CUR}-01`), where("date", "<=", `${CUR}-31`));
await t("ซ่อนข้อมูล: ปิดสวิตช์อยู่ (หรือไม่มีเอกสาร) = อ่านทั้งกลุ่มได้เหมือนเดิม", async () => {
    await assertSucceeds(getDocs(ALL_TX(as("ben", "BEN"))));
    await hide(false);
    await assertSucceeds(getDocs(ALL_TX(as("care", "CARE"))));
    await assertSucceeds(getDoc(doc(as("care", "CARE"), "transactions/t_tha")));
});
await t("ซ่อนข้อมูล: เปิดแล้ว สมาชิกค้นทั้งกลุ่มไม่ได้ ค้นเฉพาะของตัวเองได้ และได้เฉพาะใบที่มีชื่อตัวเอง", async () => {
    await hide(true);
    const care = as("care", "CARE");
    await assertFails(getDocs(ALL_TX(care)));
    const mine = await assertSucceeds(getDocs(MY_TX(care, "CARE")));
    assert.deepEqual(mine.docs.map((d) => d.id), ["t_care"]);
    await assertSucceeds(getDoc(doc(care, "transactions/t_care")));
    await assertFails(getDoc(doc(care, "transactions/t_tha")), "บิลของคนอื่น");
    await assertFails(getDocs(MY_TX(care, "BEN")), "ค้นด้วยชื่อคนอื่นไม่ได้");
    await assertSucceeds(getDocs(MY_TX(as("tha", "T H A 🍀"), "T H A 🍀")), "ชื่อมีช่องว่าง/emoji");
});
await t("ซ่อนข้อมูล: ประวัติเคลียร์เงินและบิลรายเดือนก็ซ่อนเหมือนกัน", async () => {
    await hide(true);
    const tha = as("tha", "T H A 🍀");
    await assertFails(getDocs(query(collection(tha, "settlements"), where("month", "==", `${CUR}`))));
    const st = await assertSucceeds(getDocs(query(collection(tha, "settlements"), where("people", "array-contains", "T H A 🍀"), where("month", "==", `${CUR}`))));
    assert.equal(st.size, 0);
    await assertFails(getDocs(query(collection(tha, "subscription_templates"), where("active", "==", true))));
    await assertSucceeds(getDocs(query(collection(as("ben", "BEN"), "subscription_templates"), where("people", "array-contains", "BEN"), where("active", "==", true))));
    await assertFails(getDoc(doc(tha, "settlements/s1")));
});
await t("ซ่อนข้อมูล: ผู้ดูแลหลักอ่านทั้งกลุ่มได้ ผู้ดูแลคนอื่นเห็นเฉพาะของตัวเอง (แต่ยังจัดการได้เหมือนเดิม)", async () => {
    await hide(true);
    await assertSucceeds(getDocs(ALL_TX(as("boss", "BOSS"))));
    await assertSucceeds(getDocs(query(collection(as("boss", "BOSS"), "settlements"), where("month", "==", `${CUR}`))));
    await assertSucceeds(getDocs(query(collection(as("boss", "BOSS"), "transactions"), where(new FieldPath("splits", "CARE"), ">=", 0), limit(1))), "ลบสมาชิก (ผู้ดูแลหลัก)");
    await assertFails(getDocs(ALL_TX(as("admin1", "GAME"))));
    await assertSucceeds(deleteDoc(doc(as("admin1", "GAME"), "settlements/s1")));
});
await t("ซ่อนข้อมูล: คนจ่ายยังแก้ชื่อ/หมวด/ลบบิลตัวเองได้ แต่เปลี่ยนป้าย people เองไม่ได้", async () => {
    await hide(true);
    const care = as("care", "CARE");
    await assertSucceeds(updateDoc(doc(care, "transactions/t_care"), { desc: "ข้าวเย็น" }));
    await assertFails(updateDoc(doc(care, "transactions/t_care"), { people: ["CARE"] }));
    await assertSucceeds(deleteDoc(doc(care, "transactions/t_care")));
});
await t("ซ่อนข้อมูล: เบราว์เซอร์อ่าน/แก้สวิตช์เองไม่ได้", async () => {
    await assertFails(getDoc(doc(as("boss", "BOSS"), "app_config/privacy")));
    await assertFails(setDoc(doc(as("boss", "BOSS"), "app_config/privacy"), { hide: false }));
});

// ---------- ปิดเดือน (เดือนที่จบแล้วเพิ่ม/ลบบิลไม่ได้ ยกเว้นผู้ดูแลหลัก) ----------
const seedOld = () => env.withSecurityRulesDisabled(async (ctx) => { await setDoc(doc(ctx.firestore(), "transactions/t_old"), { payer: "CARE", amount: 100, desc: "เก่า", icon: "fa-utensils", date: `${OLD}-28`, splits: { CARE: 50, BEN: 50 }, people: ["BEN", "CARE"] }); });
await t("ปิดเดือน: สมาชิกเพิ่มบิลลงวันที่เดือนที่ปิดแล้วไม่ได้ เดือนนี้ได้", async () => {
    const db = as("care", "CARE");
    await assertFails(addDoc(collection(db, "transactions"), { payer: "CARE", amount: 1, date: `${OLD}-30`, splits: { CARE: 1 }, people: ["CARE"] }));
    await assertFails(addDoc(collection(db, "transactions"), { payer: "CARE", amount: 1, splits: { CARE: 1 }, people: ["CARE"] }), "ไม่มีวันที่");
    await assertSucceeds(addDoc(collection(db, "transactions"), { payer: "CARE", amount: 1, date: `${CUR}-01`, splits: { CARE: 1 }, people: ["CARE"] }));
    await assertFails(addDoc(collection(as("admin1", "GAME"), "transactions"), { payer: "GAME", amount: 1, date: `${OLD}-30`, people: ["GAME"] }), "ผู้ดูแลคนอื่นก็ไม่ได้");
    await assertSucceeds(addDoc(collection(as("boss", "BOSS"), "transactions"), { payer: "BOSS", amount: 1, date: `${OLD}-30`, people: ["BOSS"] }), "ผู้ดูแลหลักได้");
});
await t("ปิดเดือน: คนจ่าย/ผู้ดูแลลบบิลเดือนที่ปิดไม่ได้ แต่แก้ชื่อ/หมวดได้ / ผู้ดูแลหลักลบได้", async () => {
    await seedOld();
    await assertFails(deleteDoc(doc(as("care", "CARE"), "transactions/t_old")));
    await assertFails(deleteDoc(doc(as("admin1", "GAME"), "transactions/t_old")));
    await assertSucceeds(updateDoc(doc(as("care", "CARE"), "transactions/t_old"), { desc: "ข้าวเก่า" }));
    await assertSucceeds(updateDoc(doc(as("admin1", "GAME"), "transactions/t_old"), { icon: "fa-mug-hot" }));
    await assertFails(updateDoc(doc(as("admin1", "GAME"), "transactions/t_old"), { amount: 1 }), "ผู้ดูแลแก้ยอดเดือนที่ปิดไม่ได้");
    await assertFails(updateDoc(doc(as("care", "CARE"), "transactions/t_old"), { splits: { CARE: 100 }, people: ["CARE"] }), "คนจ่ายแก้คนหารเดือนที่ปิดไม่ได้");
    await assertFails(updateDoc(doc(as("admin1", "GAME"), "transactions/t_old"), { splits: { CARE: 100 }, people: ["CARE"] }), "ผู้ดูแลแก้คนหารเดือนที่ปิดไม่ได้");
    await assertSucceeds(updateDoc(doc(as("boss", "BOSS"), "transactions/t_old"), { splits: { CARE: 100 }, people: ["CARE"] }), "ผู้ดูแลหลักแก้ได้");
    await assertFails(updateDoc(doc(as("admin1", "GAME"), "transactions/t_care"), { date: `${OLD}-01` }), "ย้ายบิลไปเดือนที่ปิดไม่ได้");
    await assertSucceeds(deleteDoc(doc(as("boss", "BOSS"), "transactions/t_old")));
});
await t("ปิดเดือน: โอนเคลียร์ของเดือนเก่ายังทำได้ (ผู้ดูแลยืนยัน/ย้ายเดือน)", async () => {
    await assertSucceeds(addDoc(collection(as("admin1", "GAME"), "settlements"), { status: "verified", from: "BEN", to: "CARE", amount: 50, month: OLD, verifiedByAdmin: true, people: ["BEN", "CARE"] }));
    await assertSucceeds(updateDoc(doc(as("admin1", "GAME"), "settlements/s1"), { month: OLD }));
});

await env.cleanup();
console.log(`\n${n} passed${process.exitCode ? ", some FAILED" : ""}`);
assert.ok(true);
