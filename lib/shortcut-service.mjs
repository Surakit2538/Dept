/**
 * Dept Money - บริการหลังบ้านของคำสั่งลัดสแกนสลิป
 *
 * POST /api/shortcut-transaction   (ต้องมี Authorization: Bearer <รหัสอุปกรณ์>)
 *   { action: "parse", text }                         -> แกะสลิป เก็บเป็น "รายการรอบันทึก" (1 รายการต่อสมาชิก)
 *   { action: "auto", text }                          -> แกะสลิปแล้วบันทึกเป็น "ส่วนตัว" ทันที ไม่ถามอะไร (ใช้กับระบบอัตโนมัติ)
 *   { action: "save", splitType, splitWith, desc? }   -> บันทึกรายการรอบันทึกนั้น
 *       splitType = "personal" -> เก็บใน personal_expenses (เพื่อนไม่เห็น ไม่กระทบยอดหนี้)
 *       splitType = "equal"    -> เก็บใน transactions หารเท่าตาม splitWith
 *           ถ้า splitWith มีชื่อตัวเอง = หารรวมตัวเอง / ถ้าไม่มี = "จ่ายแทน" (ไม่มีส่วนของตัวเอง)
 *
 * ทุกคำตอบเป็น JSON ที่มี { success, status, message } เสมอ เพื่อให้ Shortcut แสดง message ได้ตรงๆ
 * รับ dependency ผ่านพารามิเตอร์ เพื่อให้ทดสอบด้วยฐานข้อมูลจำลองได้ (ดู tests/)
 */
import {
    parseSlipText,
    buildParsed,
    buildDescription,
    buildEqualSplits,
    parseNameList,
    resolveParticipants,
    normalizeName,
    formatBaht,
    getBangkokDateString,
    resolveIcon,
    isCardPaymentPayee
} from "./slip-core.mjs";
import { WALLET_COL, buildWalletEntry } from "./wallet-service.mjs";
import { parseCardAlert, merchantSimilar } from "./card-alert.mjs";
import { guessCategoryKey, guessCategoryFa } from "./categories.mjs";
import { walletMonth } from "./ledger.mjs";
import { classifyDirection } from "./names.mjs";
import { isAdminMember, SUPER_ADMIN_LINE_ID } from "./line-auth.mjs";
import { createReminderJob } from "./reminders.mjs";
import { LEARNED_COL, learnedDocId, lookupLearned, rememberName } from "./learned-names.mjs";
import { createCardService, lineQuota } from "./card-service.mjs";
import { readAdminStatus } from "./admin-status.mjs";
import { cleanRecurrence, isDueMonth, everyOf, startOf } from "./recurrence.mjs";
import { buildGroupReportMessage } from "./line-report.mjs";
import { isClosedMonth, closedMonthMessage, bangkokMonthOf } from "./month-lock.mjs";
import { cleanPayFrom } from "./pay-from.mjs";
import { SHARED_COL, SHARED_MAX, cleanSharedInput, sharedMoveEntry, sharedView } from "./shared-goals.mjs";
import { withPeople, PRIVACY_COL, PRIVACY_ID, PEOPLE_COLS, peopleFor, peopleUpToDate, planLinesFor } from "./privacy.mjs";
import { PLAN_COL, GOAL_MAX, planDocId, normalizePlan, cleanBudget, cleanGoalInput, newGoalId, applyGoalMove, trimMonths } from "./budget.mjs";

export const PENDING_TTL_MS = 30 * 60 * 1000; // รายการรอบันทึกหมดอายุใน 30 นาที
export const WEAK_DUP_WINDOW_MS = 10 * 60 * 1000; // กันซ้ำแบบอ่อน: ภายใน 10 นาที
export const LATEST_AUTO_VERSION = "2.2.0"; // ตรงกับ SCRIPT_VERSION ใน scriptable/DeptAuto.js
export const CARD_DUP_WINDOW_MS = 60 * 60 * 1000; // แจ้งเตือนบัตรซ้ำ (OTP แล้วตามด้วยขอบคุณที่ใช้บัตร): ภายใน 1 ชั่วโมง
// action ที่หน้าเว็บ (ล็อกอินด้วย LINE) เรียกได้โดยไม่ต้องมีรหัสอุปกรณ์
const LINE_LOGIN_ACTIONS = new Set(["list", "delete", "wallet-add", "wallet-list", "wallet-delete", "wallet-delete-many", "wallet-confirm", "wallet-get", "wallet-summary", "remind-all", "wallet-template-list", "wallet-template-stop", "wallet-template-update", "wallet-update", "plan-get", "plan-budget-set", "goal-save", "goal-delete", "goal-move", "card-list", "card-save", "card-delete", "card-paid", "line-quota", "admin-status", "group-summary", "clear-plan", "privacy-set", "privacy-backfill", "shared-goal-save", "shared-goal-move", "shared-goal-delete", "shared-goal-leave"]);
const EXIT_HINT = "\n\n(กด ปิด เพื่อออก)";

function parseBody(raw) {
    if (raw && typeof raw === "object") return raw;
    if (typeof raw === "string") {
        try {
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === "object" ? parsed : {};
        } catch (e) {
            return {};
        }
    }
    return {};
}

export function createShortcutHandler({ db, fs, dbMode = () => "unknown", verifyDeviceToken, authenticateIdToken = null, readSlipImage = null, env = process.env, fetchFn = globalThis.fetch, now = () => Date.now() }) {
    const { collection, doc, getDoc, getDocs, query, where, addDoc, setDoc, updateDoc, deleteDoc, writeBatch } = fs;

    const cardSvc = createCardService({ db, fs, now });
    const reply = (res, httpCode, status, message, extra = {}) =>
        res.status(httpCode).json({ success: ["ok", "saved", "listed", "deleted"].includes(status), status, message, ...extra });

    async function clearPending(memberId) {
        try {
            await deleteDoc(doc(db, "pending_slips", memberId));
        } catch (e) {
            console.warn("clearPending failed:", e.message);
        }
    }

    /** ชื่อที่เจ้าของเคยแก้ไว้ (เอกสารเดียวต่อคน) อ่านไม่ได้ = ไม่มี (ไม่ให้การบันทึกล้ม) */
    async function loadLearned(owner) {
        try {
            const snap = await getDoc(doc(db, LEARNED_COL, learnedDocId(owner)));
            return snap.exists() && Array.isArray(snap.data().items) ? snap.data().items : [];
        } catch (e) {
            console.warn("loadLearned failed:", e.message);
            return [];
        }
    }

    /** จำชื่อ/หมวดที่แก้ (pairs = [{ type, from, desc, icon }]) เขียนครั้งเดียว */
    async function saveLearned(owner, pairs) {
        if (!pairs.length) return;
        try {
            let items = await loadLearned(owner);
            for (const p of pairs) items = rememberName(items, { ...p, at: now() });
            await setDoc(doc(db, LEARNED_COL, learnedDocId(owner)), { ownerName: owner, items, updatedAt: new Date(now()).toISOString() });
        } catch (e) {
            console.warn("saveLearned failed:", e.message);
        }
    }

    /** ตรวจสลิปซ้ำทั้งในรายการกลุ่ม (transactions) และรายการส่วนตัว (personal_expenses) */
    async function findDuplicate({ transRef, dedupKey, strong }) {
        const cols = ["transactions", "personal_expenses", WALLET_COL];
        const checks = [];
        if (transRef) cols.forEach((c) => checks.push({ col: c, field: "transRef", value: transRef, strong: true }));
        if (dedupKey) cols.forEach((c) => checks.push({ col: c, field: "dedupKey", value: dedupKey, strong }));

        for (const chk of checks) {
            const snap = await getDocs(query(collection(db, chk.col), where(chk.field, "==", chk.value)));
            for (const d of snap.docs) {
                const data = { ...d.data(), __col: chk.col, __id: d.id };
                if (chk.strong) return data;
                const ts = Number(data.timestamp) || 0;
                if (ts >= now() - WEAK_DUP_WINDOW_MS) return data;
            }
        }
        return null;
    }

    function duplicateMessage(existing) {
        const where_ = existing.date ? ` เมื่อ ${existing.date}` : "";
        return `สลิปนี้เคยบันทึกแล้ว${where_}\n${existing.desc || ""} ${existing.amount ? formatBaht(existing.amount) : ""}`.trim();
    }

    function kindHint(cls) {
        if (cls.kind === "income") return cls.confident ? "ดูเหมือนเงินเข้าบัญชีคุณ (บันทึกเป็นรายรับได้)" : "ดูเหมือนเงินเข้าบัญชีคุณ แต่ไม่ทราบผู้โอน";
        if (cls.kind === "received_back") return `${cls.counterparty} โอนคืนหนี้ให้คุณ (ไม่นับเป็นรายรับ)`;
        if (cls.kind === "paid_back") return `โอนให้ ${cls.counterparty} (น่าจะเคลียร์หนี้ ไม่ใช่รายจ่าย)`;
        if (cls.kind === "self_transfer") return "โอนระหว่างบัญชีของคุณเอง";
        if (cls.kind === "card_payment") return "จ่ายบิลบัตรเครดิต (รายจ่ายของบัตรบันทึกจากข้อความแจ้งเตือนแล้ว)";
        return "";
    }

    async function handleParse(res, auth, body) {
        const hasImage = typeof body.imageBase64 === "string" && body.imageBase64.length > 0;
        let parsed;

        if (hasImage) {
            if (body.imageBase64.length > 4000000) {
                await clearPending(auth.memberId);
                return reply(res, 200, "too_large", "รูปใหญ่เกินไป กรุณาลองใหม่อีกครั้ง" + EXIT_HINT);
            }
            if (!readSlipImage) {
                await clearPending(auth.memberId);
                return reply(res, 200, "ocr_failed", "ระบบอ่านรูปสลิปยังไม่พร้อมใช้งาน (ยังไม่ได้ตั้งค่า AI)" + EXIT_HINT);
            }
            try {
                parsed = buildParsed(await readSlipImage({ base64: body.imageBase64, mimeType: body.mimeType || "image/jpeg" }), new Date(now()));
            } catch (e) {
                console.error("readSlipImage failed:", e && e.message);
                await clearPending(auth.memberId);
                return reply(res, 200, "ocr_failed", "อ่านรูปสลิปไม่สำเร็จ (ระบบ AI ไม่ตอบสนอง)\nลองใหม่อีกครั้งในอีกสักครู่" + EXIT_HINT);
            }
        } else {
            parsed = parseSlipText(body.text, new Date(now()));
        }

        if (!parsed.amount) {
            await clearPending(auth.memberId);
            const head = "ไม่พบยอดเงินในรูปล่าสุด\nอาจไม่ใช่สลิป หรือรูปไม่ชัด";
            if (hasImage) return reply(res, 200, "no_amount", head + EXIT_HINT);
            const raw = Array.isArray(body.text) ? body.text.join(" ") : String(body.text ?? "");
            const preview = raw.replace(/\s+/g, " ").trim().slice(0, 120);
            return reply(
                res, 200, "no_amount",
                head + (preview ? "\n\nอ่านได้ว่า: " + preview : "\n\n(ไม่พบข้อความในรูป)") + EXIT_HINT
            );
        }

        const existing = await findDuplicate(parsed);
        if (existing) {
            // สลิปนี้เคยบันทึกเป็น "ส่วนตัว" ของเราเอง (เช่น โดยระบบอัตโนมัติ) -> เปลี่ยนเป็นหารกับเพื่อนได้
            const mine = existing.__col !== "transactions" && existing.type !== "income" && normalizeName(existing.payer) === normalizeName(auth.name);
            if (mine) {
                const tc = now();
                await setDoc(doc(db, "pending_slips", auth.memberId), {
                    name: auth.name,
                    amount: Number(existing.amount),
                    bank: existing.bank || "",
                    payee: existing.desc || "",
                    transRef: existing.transRef || "",
                    dedupKey: existing.dedupKey || "",
                    strong: true,
                    date: existing.date || "",
                    convertFrom: existing.__id,
                    createdAt: new Date(tc).toISOString(),
                    expiresAt: tc + PENDING_TTL_MS
                });
                return reply(
                    res, 200, "convert",
                    `สลิปนี้บันทึกเป็นส่วนตัวไว้แล้ว\n${formatBaht(existing.amount)} • ${existing.desc || ""}\n\nต้องการเปลี่ยนเป็นหารกับเพื่อนไหม?`,
                    { amount: Number(existing.amount), desc: existing.desc || "" }
                );
            }
            await clearPending(auth.memberId);
            return reply(res, 200, "duplicate", duplicateMessage(existing) + EXIT_HINT);
        }

        const t = now();
        const cls = await classifySlip(auth, parsed);
        await setDoc(doc(db, "pending_slips", auth.memberId), {
            name: auth.name,
            amount: parsed.amount,
            bank: parsed.bank,
            payee: parsed.payee,
            sender: parsed.sender || "",
            kind: cls.kind,
            kindConfident: Boolean(cls.confident),
            counterparty: cls.counterparty || "",
            transRef: parsed.transRef,
            dedupKey: parsed.dedupKey,
            strong: parsed.strong,
            date: parsed.slipIso || "",
            createdAt: new Date(t).toISOString(),
            expiresAt: t + PENDING_TTL_MS
        });

        const lines = [`พบบิล ${formatBaht(parsed.amount)}`];
        lines.push(`${parsed.bank}`);
        if (parsed.payee) lines.push(`${parsed.payee}`);
        const hint = kindHint(cls);
        if (hint) lines.push(hint);
        lines.push("", "บันทึกแบบไหนดี?");

        return reply(res, 200, "ok", lines.join("\n"), {
            amount: parsed.amount,
            bank: parsed.bank,
            payee: parsed.payee,
            kind: cls.kind,
            confident: Boolean(cls.confident),
            counterparty: cls.counterparty || ""
        });
    }

    /** แยกประเภทสลิปจากชื่อผู้โอน/ผู้รับ เทียบกับชื่อจริงของเรา และของเพื่อนในระบบ */
    async function classifySlip(auth, parsed) {
        const snap = await getDocs(collection(db, "members"));
        const key = normalizeName(auth.name);
        const profiles = snap.docs.map((d) => ({ name: normalizeName(d.data().name), realName: d.data().realName || "", englishName: d.data().englishName || "" }));
        // ชื่อซ้ำ (เอกสารสมาชิกซ้ำ) ให้เลือกอันที่มีชื่อจริง
        const me = profiles.filter((p) => p.name === key).sort((a, b) => Number(Boolean(b.realName)) - Number(Boolean(a.realName)))[0] || { name: key };
        const others = profiles.filter((p) => p.name !== key);
        if (isCardPaymentPayee(parsed.payee)) return { kind: "card_payment", confident: true, counterparty: parsed.payee };
        return classifyDirection({ sender: parsed.sender || "", receiver: parsed.payee || "" }, me, others);
    }

    async function loadMemberNames() {
        const snap = await getDocs(collection(db, "members"));
        const names = new Set();
        snap.docs.forEach((d) => {
            const n = normalizeName(d.data().name);
            if (n) names.add(n);
        });
        return [...names];
    }

    async function notifyLine({ payer, desc, amount, participants, splits, includePayer }) {
        const token = env.LINE_CHANNEL_ACCESS_TOKEN;
        const target = env.LINE_GROUP_ID;
        if (!token || !target || !fetchFn) return;
        try {
            const friends = participants.filter((p) => p !== payer);
            const each = splits[participants[0]];
            const head = includePayer ? `หารกับ: ${friends.join(", ")}` : `จ่ายแทน: ${friends.join(", ")}`;
            const text =
                `บิลใหม่ (จาก iPhone)\nผู้จ่าย: ${payer}\n${desc}\nยอดรวม ${formatBaht(amount)}\n${head}\n` +
                `คนละประมาณ ${formatBaht(each)} (${participants.length} คน)`;
            await fetchFn("https://api.line.me/v2/bot/message/push", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ to: target, messages: [{ type: "text", text }] })
            });
        } catch (e) {
            console.error("LINE notify failed:", e.message);
        }
    }

    /**
     * โหมดอัตโนมัติ (ไม่ถามอะไร): แกะสลิป แล้วบันทึกเป็น "ส่วนตัว" ทันที
     * ใช้กับคำสั่งลัดที่ทำงานเองเมื่อปิดแอปธนาคาร ข้อความที่ได้ใช้แสดงเป็นแจ้งเตือนได้เลย
     * (สลิปที่ไม่พบยอด/ซ้ำ จะไม่บันทึก และบอกสาเหตุ)
     */
    async function handleAuto(res, auth, body) {
        const capture = () => ({ code: 200, body: null, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; } });
        const clean = (msg) => String(msg || "").replace(/\n\n\(กด ปิด เพื่อออก\)$/, "");

        // แจ้งเตือนบัตร/บัญชี (SMS, อีเมล, ภาพหน้าจอแจ้งเตือน) ไม่ใช่สลิป: บันทึกเป็นรายจ่ายเอง
        const hasImage = typeof body.imageBase64 === "string" && body.imageBase64.length > 0;
        const alert = hasImage ? null : parseCardAlert(body.text, new Date(now()));
        if (alert) return await handleCardAlert(res, auth, alert);

        const parsed = capture();
        await handleParse(parsed, auth, body);
        // กรณีเหล่านี้ "เงียบ" (message ว่าง) เพราะคำสั่งลัดอัตโนมัติทำงานทุกครั้งที่ปิดแอปธนาคาร
        // ไม่ควรแจ้งเตือนทุกครั้งที่รูปล่าสุดเป็นสลิปเดิมที่บันทึกแล้ว หรือไม่ใช่สลิป
        const QUIET = new Set(["duplicate", "no_amount", "convert"]);
        if (parsed.body && QUIET.has(parsed.body.status)) {
            await clearPending(auth.memberId);
            const status = parsed.body.status === "convert" ? "duplicate" : parsed.body.status;
            return res.status(200).json({ success: false, status, message: "" });
        }
        if (!parsed.body || parsed.body.status !== "ok") {
            const b = parsed.body || { status: "error", message: "เกิดข้อผิดพลาด" };
            return res.status(parsed.code).json({ ...b, success: false, message: clean(b.message) });
        }

        // ประเภทสลิป (ตัดสินไว้ใน handleParse): รายรับ / เพื่อนคืนหนี้ / โอนคืนเพื่อน / โอนเข้าบัญชีตัวเอง / รายจ่าย
        const pendingSnap = await getDoc(doc(db, "pending_slips", auth.memberId));
        const pend = pendingSnap.exists() ? pendingSnap.data() : {};
        const amountText = formatBaht(Number(pend.amount) || 0);
        if (pend.kind === "received_back") {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `${pend.counterparty || "เพื่อน"} โอนคืนหนี้ ${amountText}\n(ไม่นับเป็นรายรับ ไม่บันทึกซ้ำ)` });
        }
        if (pend.kind === "paid_back") {
            // โอนให้เพื่อนในกลุ่ม = น่าจะคืนเงิน/เคลียร์หนี้ ยังไม่บันทึก แต่เก็บสลิปไว้ (30 นาที) ให้เจ้าของกด "บันทึกเป็นรายจ่าย" ได้ถ้าไม่ใช่การคืนเงิน
            return res.status(200).json({
                success: true, status: "ignored", kind: pend.kind, counterparty: pend.counterparty || "", amount: Number(pend.amount) || 0,
                message: `โอนให้ ${pend.counterparty || "เพื่อน"} ${amountText}\nน่าจะเป็นการคืนเงินเพื่อน ยังไม่บันทึกเป็นรายจ่าย`
            });
        }
        if (pend.kind === "card_payment") {
            await clearPending(auth.memberId);
            const paidCard = (await cardSvc.allowed(auth.memberId)) ? await cardSvc.markPaidFromSlip(normalizeName(auth.name), pend.counterparty || "") : "";
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, paidCard, message: `จ่ายบิลบัตรเครดิต ${amountText}
(ไม่บันทึกซ้ำ รายจ่ายของบัตรบันทึกจากข้อความแจ้งเตือนแล้ว)${paidCard ? `\nบัตร ${paidCard}: จ่ายแล้ว ไม่เตือนรอบนี้อีก` : ""}` });
        }
        if (pend.kind === "self_transfer") {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `โอนระหว่างบัญชีของคุณเอง ${amountText}\n(ไม่บันทึก)` });
        }
        if (pend.kind === "income" && !pend.kindConfident) {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `พบสลิปเงินเข้า ${amountText} แต่ไม่ทราบว่าใครโอน\nไม่ได้บันทึกอัตโนมัติ (ใช้ปุ่มสแกนสลิปเพื่อเลือกได้)` });
        }

        const saved = capture();
        await handleSave(saved, auth, { splitType: pend.kind === "income" ? "income" : "personal", fromAuto: true });
        const b = saved.body || { status: "error", message: "เกิดข้อผิดพลาด" };
        return res.status(saved.code).json({ ...b, message: clean(b.message) });
    }

    /**
     * แจ้งเตือนบัตร/บัญชี (SMS, อีเมล, ภาพหน้าจอแจ้งเตือน) -> รายจ่ายส่วนตัวในกระเป๋าทันที
     * - ข้อความที่ไม่ใช่รายจ่าย (ยอด 0, จ่ายบิลบัตร, โฆษณา) เงียบ
     * - กันซ้ำ: ยอดเท่ากัน วันเดียวกัน ภายใน 1 ชั่วโมง ร้านคล้ายกัน (เช่น SMS OTP ตามด้วย SMS ขอบคุณที่ใช้บัตร)
     * - ตรงกับรายจ่ายรายเดือนที่ตั้งไว้ (ยอดเท่ากัน ชื่อ/หมวดคล้าย) -> ใช้รายการเดือนนั้นรายการเดียว (id เดียวกับที่ cron สร้าง)
     */
    async function handleCardAlert(res, auth, a) {
        const quiet = (kind) => res.status(200).json({ success: true, status: "ignored", kind, message: "" });
        if (a.kind !== "expense") return quiet("card_alert_ignored");

        const owner = normalizeName(auth.name);
        const nowMs = now();
        const date = a.date || getBangkokDateString(new Date(nowMs));
        const month = date.slice(0, 7);
        const dedupKey = `cardfp:${owner}|${a.amount.toFixed(2)}|${date}`;
        const merchant = a.merchant || "";

        // อีเมลที่มีเลขที่รายการ (เช่น K PLUS ชำระค่าสินค้า): ถ้าสลิปของรายการนี้บันทึกไปแล้ว ไม่บันทึกซ้ำ
        if (a.transRef && (await findDuplicate({ transRef: a.transRef, dedupKey: "ref:" + a.transRef, strong: true }))) return quiet("card_alert_duplicate");
        const dupSnap = await getDocs(query(collection(db, WALLET_COL), where("dedupKey", "==", dedupKey)));
        for (const d of dupSnap.docs) {
            const x = d.data();
            if (Math.abs(nowMs - (Number(x.timestamp) || 0)) > CARD_DUP_WINDOW_MS) continue;
            const other = x.cardMerchant || x.desc || "";
            if (!merchant || !other || merchantSimilar(merchant, other)) return quiet("card_alert_duplicate");
        }

        const common = { amount: a.amount, date, source: "card_alert", bank: a.bank || "", dedupKey };
        const extra = { card: a.card || "", cardMerchant: merchant, cardAlert: true, unconfirmed: true, ...(a.transRef ? { transRef: a.transRef } : {}) };
        const cardNote = a.card ? ` (บัตร ${a.card})` : "";

        // รายเดือนที่ตั้งไว้
        const tplSnap = await getDocs(query(collection(db, "wallet_templates"), where("ownerName", "==", owner)));
        const catOf = (s) => guessCategoryKey(s);
        const tpl = tplSnap.docs.find((d) => {
            const t = d.data();
            if (t.active === false || t.type === "income" || Math.abs(Number(t.amount) - a.amount) > 0.005) return false;
            if (!isDueMonth(t, month)) return false; // รายปี/ราย 3-6 เดือน จับคู่เฉพาะเดือนที่ถึงรอบ
            if (merchant && merchantSimilar(t.desc, merchant)) return true;
            const c = catOf(t.desc);
            return c !== "other" && c === catOf(merchant);
        });
        if (tpl) {
            const t = tpl.data();
            const entryRef = doc(db, WALLET_COL, `wsub_${tpl.id}_${month}`);
            const cur = await getDoc(entryRef);
            if (!cur.exists()) {
                const built = buildWalletEntry({ ...common, type: "expense", desc: t.desc, icon: (t.icon && t.icon !== "fa-wallet") ? t.icon : (guessCategoryFa(t.desc) || t.icon) }, { ownerName: auth.name, ownerMemberId: auth.memberId || null, nowMs });
                if (built.ok) {
                    await setDoc(entryRef, { ...built.entry, ...extra, templateId: tpl.id, recurring: true });
                    await setDoc(tpl.ref, { ...t, lastGeneratedMonth: month });
                    return reply(res, 200, "saved", `บันทึกรายจ่าย ${formatBaht(a.amount)}\n${t.desc} (รายเดือนที่ตั้งไว้)${cardNote}`, { id: entryRef.id, type: "expense", amount: a.amount, desc: t.desc, recurring: true });
                }
            } else if (!cur.data().cardAlert) {
                // cron สร้างรายการเดือนนี้ไว้ก่อนแล้ว: ปรับวันที่เป็นวันที่ตัดจริง ไม่สร้างซ้ำ
                await setDoc(entryRef, { ...cur.data(), ...common, ...extra, month, timestamp: nowMs, templateId: tpl.id, recurring: true });
                await setDoc(tpl.ref, { ...t, lastGeneratedMonth: month });
                return reply(res, 200, "saved", `บันทึกรายจ่าย ${formatBaht(a.amount)}\n${t.desc} (รายเดือนที่ตั้งไว้)${cardNote}`, { id: entryRef.id, type: "expense", amount: a.amount, desc: t.desc, recurring: true });
            }
        }

        const autoDesc = merchant || (a.bank ? `ใช้จ่ายบัตร ${a.bank}` : "ใช้จ่ายบัตร");
        const learned = lookupLearned(await loadLearned(owner), "expense", autoDesc); // เคยแก้ชื่อร้านนี้ไว้ -> ใช้ชื่อ/หมวดนั้น
        const desc = learned ? learned.desc : autoDesc;
        const icon = (learned && learned.icon) || guessCategoryFa(desc) || undefined;
        const built = buildWalletEntry({ ...common, type: "expense", desc, icon }, { ownerName: auth.name, ownerMemberId: auth.memberId || null, nowMs });
        if (!built.ok) return reply(res, 400, "error", built.message);
        const ref = await addDoc(collection(db, WALLET_COL), { ...built.entry, ...extra, autoDesc });
        return reply(res, 200, "saved", `บันทึกรายจ่าย ${formatBaht(a.amount)}\n${desc}${cardNote}`, { id: ref.id, type: "expense", amount: a.amount, desc });
    }

    /** เดือนตั้งแต่ since ถึงเดือนหน้า (เผื่อรายการลงวันที่ล่วงหน้า) */
    function monthsFromSince(since) {
        const end = getBangkokDateString(new Date(now())).slice(0, 7);
        const out = [];
        let [y, m] = since.split("-").map(Number);
        const [ey, em] = end.split("-").map(Number);
        const last = ey * 12 + em; // เดือนปัจจุบัน + 1
        for (let k = y * 12 + (m - 1); k <= last && out.length < 60; k++) {
            const yy = Math.floor(k / 12);
            out.push(`${yy}-${String((k % 12) + 1).padStart(2, "0")}`);
        }
        return out;
    }

    function monthOf(body) {
        const monthRaw = typeof body.month === "string" ? body.month.trim() : "";
        return /^\d{4}-(0[1-9]|1[0-2])$/.test(monthRaw) ? monthRaw : getBangkokDateString(new Date(now())).slice(0, 7);
    }

    /** แปลงเอกสารกระเป๋าเป็นรายการที่ส่งให้เว็บ (ใช้ทั้งรายการเดือนและรายการเดียว) */
    function walletItem(id, x, legacy) {
        return {
            id,
            type: x.type === "income" ? "income" : "expense",
            date: x.date || "",
            desc: x.desc || "",
            amount: Number(x.amount) || 0,
            bank: x.bank || "",
            category: x.category || "",
            icon: x.icon || "",
            source: x.source || (legacy ? "ios_shortcut" : "web"),
            card: x.card || "",
            cardId: x.cardId || "",
            account: x.account || "",
            unconfirmed: x.unconfirmed === true,
            recurring: Boolean(x.templateId) || String(id).startsWith("wsub_"),
            timestamp: Number(x.timestamp) || 0
        };
    }

    /** รายการกระเป๋าทั้งหมดของเจ้าของในเดือนนั้น (wallet_entries + personal_expenses เดิมที่ยังไม่ถูกย้าย) */
    async function loadWalletItems(owner, month, since = null) {
        // อ่านเฉพาะเดือนที่ต้องใช้ (month in [...]) แทนการอ่านทั้งประวัติ ลดจำนวนการอ่านของ Firestore (โควต้าฟรี 50,000 ครั้งต่อวัน)
        const months = since ? monthsFromSince(since) : [month];
        const walletQueries = [];
        for (let i = 0; i < months.length; i += 10) {
            walletQueries.push(getDocs(query(collection(db, WALLET_COL), where("ownerName", "==", owner), where("month", "in", months.slice(i, i + 10)))));
        }
        const [wSnaps, p] = await Promise.all([
            Promise.all(walletQueries),
            getDocs(query(collection(db, "personal_expenses"), where("payer", "==", owner)))
        ]);
        const w = { docs: wSnaps.flatMap((s) => s.docs) };
        const byId = new Map();
        const add = (d, legacy) => {
            if (byId.has(d.id)) return; // id เดียวกัน = รายการเดียวกัน (ย้ายมาแล้ว)
            byId.set(d.id, walletItem(d.id, d.data(), legacy));
        };
        w.docs.forEach((d) => add(d, false));
        p.docs.forEach((d) => add(d, true));
        return [...byId.values()]
            .filter((x) => (since ? x.date >= `${since}-01` : x.date.startsWith(month)))
            .sort((a, b2) => b2.date.localeCompare(a.date) || b2.timestamp - a.timestamp)
            .slice(0, since ? 3000 : 500);
    }

    const sum2 = (items) => Math.round(items.reduce((s, x) => s + x.amount, 0) * 100) / 100;

    /** รายการ "ส่วนตัว" (รายจ่าย) ของเจ้าของบัญชีเอง ตามเดือน — รูปแบบเดิม ใช้กับหน้ารายจ่ายส่วนตัว/Widget */
    async function handleList(res, auth, body) {
        const month = monthOf(body);
        const items = (await loadWalletItems(normalizeName(auth.name), month)).filter((x) => x.type !== "income");
        return reply(res, 200, "listed", `พบ ${items.length} รายการ`, { month, total: sum2(items), count: items.length, items });
    }

    /** แก้ชื่อรายการและหมวด (ไอคอน) ของรายการส่วนตัวของตัวเอง ไม่แก้ยอดและวันที่ */
    async function handleWalletUpdate(res, auth, body) {
        // แก้รายการที่มาจากรายจ่ายรายเดือน -> แก้แม่แบบด้วย เดือนถัดไปจะได้หมวด/ชื่อเดียวกัน ไม่ต้องแก้ซ้ำ
        let tplDocs = null;
        const syncTemplates = async (data, updates) => {
            if (data.type === "income") return;
            if (!tplDocs) tplDocs = (await getDocs(query(collection(db, "wallet_templates"), where("ownerName", "==", normalizeName(auth.name)), where("active", "==", true)))).docs;
            for (const d of tplDocs) {
                const t = d.data();
                const linked = data.templateId ? d.id === data.templateId : (String(t.desc) === String(data.desc) && Number(t.amount) === Number(data.amount));
                if (linked) await setDoc(d.ref, { ...t, ...updates });
            }
        };
        const confirm = body.confirm === true && !Array.isArray(body.items); // ยืนยันเฉพาะตอนแก้ทีละรายการจากหน้าแก้ไข
        const apply = async (id, rawDesc, rawIcon, pay = {}) => {
            if (typeof id !== "string" || !id.trim() || id.length > 100 || id.includes("/")) return { code: 400, message: "ไม่พบรหัสรายการ" };
            id = id.trim();
            const updates = {};
            if (typeof rawDesc === "string") updates.desc = rawDesc.trim().slice(0, 100) || "รายการ";
            if (typeof rawIcon === "string") {
                if (!/^fa-[a-z0-9-]{1,36}$/.test(rawIcon)) return { code: 400, message: "ไอคอนไม่ถูกต้อง" };
                updates.icon = rawIcon;
            }
            // จ่ายจากบัญชี/บัตรไหน (ส่งค่าว่าง = ไม่ระบุ)
            const pf = cleanPayFrom(pay);
            if (!pf.ok) return { code: 400, message: pf.message };
            if (pf.fields.cardId !== undefined) { updates.cardId = pf.fields.cardId; updates.account = pf.fields.account; }
            if (Object.keys(updates).length === 0 && !confirm) return { code: 400, message: "ไม่มีข้อมูลที่จะแก้" };
            let ref = doc(db, WALLET_COL, id);
            let snap = await getDoc(ref);
            if (!snap.exists()) { ref = doc(db, "personal_expenses", id); snap = await getDoc(ref); }
            if (!snap.exists()) return { code: 404, message: "ไม่พบรายการนี้" };
            const data = snap.data();
            if (normalizeName(data.payer || data.ownerName) !== normalizeName(auth.name)) return { code: 403, message: "แก้ได้เฉพาะรายการของตัวเอง" };
            await setDoc(ref, { ...data, ...updates, ...(confirm && data.unconfirmed ? { unconfirmed: false, confirmedAt: new Date(now()).toISOString() } : {}) });
            await syncTemplates(data, updates);
            // รายการที่บันทึกอัตโนมัติ: จำชื่อ/หมวดที่แก้ไว้ใช้ครั้งหน้า (ชื่อเดิมจากสลิป/แจ้งเตือน -> ชื่อใหม่)
            const newDesc = updates.desc !== undefined ? updates.desc : data.desc;
            const newIcon = updates.icon !== undefined ? updates.icon : data.icon;
            if (data.autoDesc && !data.templateId && (newDesc !== data.desc || newIcon !== data.icon)) {
                learn.push({ type: data.type === "income" ? "income" : "expense", from: data.autoDesc, desc: newDesc, icon: newIcon });
            }
            return { code: 200, id, updates };
        };
        const learn = [];
        if (Array.isArray(body.items)) {
            if (body.items.length === 0 || body.items.length > 100) return reply(res, 400, "error", "ส่งได้ครั้งละ 1 ถึง 100 รายการ");
            let ok = 0;
            const failed = [];
            for (const it of body.items) {
                const r = await apply(it && it.id, it && it.desc, it && it.icon, it || {});
                if (r.code === 200) ok++; else failed.push({ id: it && it.id, message: r.message });
            }
            await saveLearned(normalizeName(auth.name), learn);
            return reply(res, 200, "saved", `แก้ไขแล้ว ${ok} รายการ`, { updated: ok, failed });
        }
        const r = await apply(typeof body.id === "string" ? body.id : "", body.desc, body.icon, body);
        if (r.code !== 200) return reply(res, r.code, "error", r.message);
        await saveLearned(normalizeName(auth.name), learn);
        return reply(res, 200, "saved", "แก้ไขแล้ว", { id: r.id, ...r.updates });
    }

    // ---------- งบรายเดือน + เป้าเก็บเงิน (เอกสารเดียวต่อคน แก้ได้เฉพาะของตัวเองเพราะรหัสเอกสารมาจากชื่อที่ล็อกอิน) ----------
    async function readPlan(owner) {
        const ref = doc(db, PLAN_COL, planDocId(owner));
        const snap = await getDoc(ref);
        return { ref, plan: normalizePlan(snap.exists() ? snap.data() : {}) };
    }
    async function writePlan(ref, owner, plan) {
        await setDoc(ref, { ownerName: owner, budget: plan.budget, months: trimMonths(plan.months), goals: plan.goals, updatedAt: new Date(now()).toISOString() });
    }

    async function handlePlanGet(res, auth) {
        const owner = normalizeName(auth.name);
        const [{ plan }, shared] = await Promise.all([readPlan(owner), loadShared(owner)]);
        return reply(res, 200, "listed", "ok", { plan, shared });
    }

    // ---------- เป้าเก็บเงินแบบแชร์ (lib/shared-goals.mjs) ทุกคำสั่งคืนรายการเป้าแชร์ล่าสุดของคนถาม ----------
    /** เป้าแชร์ที่ฉันอยู่ (ค้นด้วย members array-contains อ่าน 1 ครั้ง + เป้าละ 1) */
    async function loadShared(me) {
        const snap = await getDocs(query(collection(db, SHARED_COL), where("members", "array-contains", me)));
        const month = bangkokMonthOf(now());
        return snap.docs.map((d) => sharedView(d.id, d.data() || {}, me, month)).sort((a, b) => String(a.id).localeCompare(String(b.id)));
    }
    async function readShared(id) {
        if (typeof id !== "string" || !/^[A-Za-z0-9_-]{1,60}$/.test(id)) return null;
        const ref = doc(db, SHARED_COL, id);
        const snap = await getDoc(ref);
        return snap.exists() ? { ref, data: snap.data() || {} } : null;
    }
    const sharedReply = async (res, me, status, message) => reply(res, 200, status, message, { shared: await loadShared(me) });
    /** สร้างเป้าแชร์ (ไม่มี id) หรือแก้ (มี id เฉพาะคนสร้าง: ชื่อ ยอด กำหนด สมาชิก) */
    async function handleSharedSave(res, auth, body) {
        const me = normalizeName(auth.name);
        const c = cleanSharedInput(body, me, await loadMemberNames());
        if (!c.ok) return reply(res, 400, "error", c.message);
        const stamp = new Date(now()).toISOString();
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (id) {
            const g = await readShared(id);
            if (!g) return reply(res, 404, "error", "ไม่พบเป้านี้");
            if (normalizeName(g.data.owner) !== me) return reply(res, 403, "error", "แก้ได้เฉพาะคนสร้างเป้า");
            await updateDoc(g.ref, { ...c.goal, updatedAt: stamp }); // แก้เฉพาะช่องของเป้า ไม่แตะ log (เพื่อนใส่เงินพร้อมกันได้)
            return sharedReply(res, me, "saved", "แก้เป้าแล้ว");
        }
        const mine = await loadShared(me);
        if (mine.length >= SHARED_MAX) return reply(res, 400, "error", `อยู่ในเป้าแชร์ได้ไม่เกิน ${SHARED_MAX} อัน`);
        const newId = `sg_${now()}_${Math.random().toString(36).slice(2, 7)}`;
        await setDoc(doc(db, SHARED_COL, newId), { ...c.goal, owner: me, log: [], createdAt: stamp, updatedAt: stamp });
        return sharedReply(res, me, "saved", "สร้างเป้าแล้ว เพื่อนจะเห็นในแท็บ ฉัน");
    }
    /** เก็บเข้า (สมาชิกทุกคน) / ถอนออก (เฉพาะคนสร้าง) ต่อท้าย log แบบไม่ทับกัน */
    async function handleSharedMove(res, auth, body) {
        const me = normalizeName(auth.name);
        const g = await readShared(body.id);
        if (!g) return reply(res, 404, "error", "ไม่พบเป้านี้");
        const r = sharedMoveEntry(g.data, { amount: body.amount, dir: body.dir === "out" ? "out" : "in", by: me, date: getBangkokDateString(new Date(now())), at: new Date(now()).toISOString(), rand: Math.random().toString(36).slice(2, 6) });
        if (!r.ok) return reply(res, r.code, "error", r.message);
        await updateDoc(g.ref, { log: fs.arrayUnion(r.entry), updatedAt: new Date(now()).toISOString() });
        return sharedReply(res, me, "saved", body.dir === "out" ? "ถอนออกจากเป้าแล้ว" : "เก็บเข้าเป้าแล้ว");
    }
    /** ลบเป้า (เฉพาะคนสร้าง) */
    async function handleSharedDelete(res, auth, body) {
        const me = normalizeName(auth.name);
        const g = await readShared(body.id);
        if (!g) return reply(res, 404, "error", "ไม่พบเป้านี้");
        if (normalizeName(g.data.owner) !== me) return reply(res, 403, "error", "ลบได้เฉพาะคนสร้างเป้า");
        await deleteDoc(g.ref);
        return sharedReply(res, me, "deleted", "ลบเป้าแล้ว");
    }
    /** ออกจากเป้า (สมาชิกที่ไม่ใช่คนสร้าง) เงินที่ใส่ไว้ยังอยู่ในเป้า */
    async function handleSharedLeave(res, auth, body) {
        const me = normalizeName(auth.name);
        const g = await readShared(body.id);
        if (!g) return reply(res, 404, "error", "ไม่พบเป้านี้");
        if (normalizeName(g.data.owner) === me) return reply(res, 400, "error", "คนสร้างเป้าออกไม่ได้ ถ้าไม่ใช้แล้วให้ลบเป้า");
        const members = (g.data.members || []).filter((n) => normalizeName(n) !== me);
        await updateDoc(g.ref, { members, updatedAt: new Date(now()).toISOString() });
        return sharedReply(res, me, "saved", "ออกจากเป้าแล้ว");
    }

    /** ตั้งงบ scope = "default" (ทุกเดือน) หรือ "month" (เฉพาะเดือน month) · clear: true = ลบงบเฉพาะเดือนนั้น กลับไปใช้งบปกติ */
    async function handleBudgetSet(res, auth, body) {
        const owner = normalizeName(auth.name);
        const scope = body.scope === "month" ? "month" : "default";
        const month = typeof body.month === "string" ? body.month.trim() : "";
        if (scope === "month" && !/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return reply(res, 400, "error", "เดือนไม่ถูกต้อง");
        const { ref, plan } = await readPlan(owner);
        if (scope === "month" && body.clear === true) {
            delete plan.months[month];
            await writePlan(ref, owner, plan);
            return reply(res, 200, "saved", "กลับไปใช้งบปกติแล้ว", { plan });
        }
        const b = cleanBudget(body);
        if (!b) return reply(res, 400, "error", "จำนวนเงินไม่ถูกต้อง");
        if (scope === "month") plan.months[month] = b; else plan.budget = b;
        await writePlan(ref, owner, plan);
        return reply(res, 200, "saved", "บันทึกงบแล้ว", { plan });
    }

    /** เพิ่มเป้า (ไม่มี id) หรือแก้เป้า (มี id) */
    async function handleGoalSave(res, auth, body) {
        const owner = normalizeName(auth.name);
        const c = cleanGoalInput(body);
        if (!c.ok) return reply(res, 400, "error", c.message);
        const { ref, plan } = await readPlan(owner);
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (id) {
            const i = plan.goals.findIndex((g) => g.id === id);
            if (i < 0) return reply(res, 404, "error", "ไม่พบเป้านี้");
            plan.goals[i] = { ...plan.goals[i], ...c.goal };
        } else {
            if (plan.goals.length >= GOAL_MAX) return reply(res, 400, "error", `ตั้งเป้าได้ไม่เกิน ${GOAL_MAX} อัน`);
            plan.goals.push({ id: newGoalId(now(), plan.goals), ...c.goal, saved: 0, createdAt: new Date(now()).toISOString(), log: [] });
        }
        await writePlan(ref, owner, plan);
        return reply(res, 200, "saved", id ? "แก้เป้าแล้ว" : "เพิ่มเป้าแล้ว", { plan });
    }

    async function handleGoalDelete(res, auth, body) {
        const owner = normalizeName(auth.name);
        const id = typeof body.id === "string" ? body.id.trim() : "";
        const { ref, plan } = await readPlan(owner);
        if (!plan.goals.some((g) => g.id === id)) return reply(res, 404, "error", "ไม่พบเป้านี้");
        plan.goals = plan.goals.filter((g) => g.id !== id);
        await writePlan(ref, owner, plan);
        return reply(res, 200, "deleted", "ลบเป้าแล้ว", { plan });
    }

    /** เก็บเข้าเป้า (dir: "in") หรือถอนออก (dir: "out") ไม่นับเป็นรายรับ/รายจ่าย */
    async function handleGoalMove(res, auth, body) {
        const owner = normalizeName(auth.name);
        const id = typeof body.id === "string" ? body.id.trim() : "";
        const amt = Math.abs(Number(body.amount));
        const { ref, plan } = await readPlan(owner);
        const i = plan.goals.findIndex((g) => g.id === id);
        if (i < 0) return reply(res, 404, "error", "ไม่พบเป้านี้");
        const r = applyGoalMove(plan.goals[i], body.dir === "out" ? -amt : amt, { date: getBangkokDateString(new Date(now())), at: new Date(now()).toISOString() });
        if (!r.ok) return reply(res, 400, "error", r.message);
        plan.goals[i] = r.goal;
        await writePlan(ref, owner, plan);
        return reply(res, 200, "saved", body.dir === "out" ? `ถอนออก ${formatBaht(amt)}` : `เก็บเข้าเป้า ${formatBaht(amt)}`, { plan });
    }

    /** รายจ่ายส่วนตัวแบบรายเดือนที่ตั้งไว้ (เห็นเฉพาะของตัวเอง) */
    async function handleTemplateList(res, auth) {
        const snap = await getDocs(query(collection(db, "wallet_templates"), where("ownerName", "==", normalizeName(auth.name)), where("active", "==", true)));
        const items = snap.docs.map((d) => ({ id: d.id, desc: d.data().desc, amount: d.data().amount, billingDay: d.data().billingDay, icon: d.data().icon, every: everyOf(d.data()), startMonth: d.data().startMonth || null }));
        return reply(res, 200, "listed", `พบ ${items.length} รายการ`, { items });
    }

    /**
     * แก้รายจ่ายรายเดือนที่ตั้งไว้ (ชื่อ ยอด หมวด วันที่) มีผลกับรายการที่ระบบสร้างตั้งแต่เดือนถัดไป
     * เปลี่ยนวันที่: รายการของเดือนนี้ที่ระบบสร้างไว้แล้ว (ไม่ได้มาจากแจ้งเตือนบัตร ซึ่งเป็นวันที่ตัดจริง) ย้ายไปวันใหม่ด้วย
     */
    async function handleTemplateUpdate(res, auth, body) {
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id || id.length > 100 || id.includes("/")) return reply(res, 400, "error", "ไม่พบรหัสรายการ");
        const updates = {};
        if (typeof body.desc === "string") updates.desc = body.desc.trim().slice(0, 100) || "รายจ่าย";
        if (typeof body.icon === "string") {
            if (!/^fa-[a-z0-9-]{1,36}$/.test(body.icon)) return reply(res, 400, "error", "ไอคอนไม่ถูกต้อง");
            updates.icon = body.icon;
        }
        if (body.amount !== undefined) {
            const a = Math.round(Number(body.amount) * 100) / 100;
            if (!Number.isFinite(a) || a <= 0 || a > 100000000) return reply(res, 400, "error", "จำนวนเงินไม่ถูกต้อง");
            updates.amount = a;
        }
        if (body.billingDay !== undefined) {
            const d = Number(body.billingDay);
            if (!Number.isInteger(d) || d < 1 || d > 31) return reply(res, 400, "error", "วันที่ต้องเป็น 1 ถึง 31");
            updates.billingDay = d;
        }
        if (body.every !== undefined) {
            const r = cleanRecurrence(body);
            if (!r) return reply(res, 400, "error", "รอบต้องเป็น ทุกเดือน / 3 เดือน / 6 เดือน / ทุกปี และเดือน 1 ถึง 12");
            updates.every = r.every;
            updates.startMonth = r.startMonth;
        }
        if (Object.keys(updates).length === 0) return reply(res, 400, "error", "ไม่มีข้อมูลที่จะแก้");
        const ref = doc(db, "wallet_templates", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) return reply(res, 404, "error", "ไม่พบรายการนี้");
        const data = snap.data();
        if (normalizeName(data.ownerName) !== normalizeName(auth.name)) return reply(res, 403, "error", "แก้ได้เฉพาะรายการของตัวเอง");
        await setDoc(ref, { ...data, ...updates });
        let moved = "";
        if (updates.billingDay && updates.billingDay !== Number(data.billingDay)) {
            const month = getBangkokDateString(new Date(now())).slice(0, 7);
            const eRef = doc(db, WALLET_COL, `wsub_${id}_${month}`);
            const eSnap = await getDoc(eRef);
            if (eSnap.exists() && !eSnap.data().cardAlert) {
                const [y, m] = month.split("-").map(Number);
                const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
                moved = `${month}-${String(Math.min(updates.billingDay, last)).padStart(2, "0")}`;
                await setDoc(eRef, { ...eSnap.data(), date: moved });
            }
        }
        return reply(res, 200, "saved", moved ? "แก้ไขแล้ว รายการเดือนนี้ย้ายไปวันใหม่ด้วย" : "แก้ไขแล้ว เดือนถัดไปจะสร้างตามที่แก้", { id, ...updates, moved });
    }

    /** หยุดรายจ่ายรายเดือน (หยุดได้เฉพาะของตัวเอง รายการที่สร้างไปแล้วยังอยู่) */
    async function handleTemplateStop(res, auth, body) {
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id || id.length > 100 || id.includes("/")) return reply(res, 400, "error", "ไม่พบรหัสรายการ");
        const ref = doc(db, "wallet_templates", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) return reply(res, 404, "error", "ไม่พบรายการนี้");
        const data = snap.data();
        if (normalizeName(data.ownerName) !== normalizeName(auth.name)) return reply(res, 403, "error", "หยุดได้เฉพาะรายการของตัวเอง");
        await setDoc(ref, { ...data, active: false, stoppedAt: new Date(now()).toISOString() });
        return reply(res, 200, "deleted", "หยุดสร้างซ้ำแล้ว รายการที่สร้างไปแล้วยังอยู่");
    }

    /** กระเป๋า: รายรับ+รายจ่ายส่วนตัวทั้งหมดของเดือน */
    async function handleWalletList(res, auth, body) {
        const month = monthOf(body);
        // since = ดึงตั้งแต่เดือนนั้นเป็นต้นไป (เว็บใหม่ดูหลายเดือนในครั้งเดียว)
        const since = typeof body.since === "string" && /^\d{4}-(0[1-9]|1[0-2])$/.test(body.since.trim()) ? body.since.trim() : null;
        const items = await loadWalletItems(normalizeName(auth.name), month, since);
        const income = sum2(items.filter((x) => x.type === "income"));
        const expense = sum2(items.filter((x) => x.type === "expense"));
        return reply(res, 200, "listed", `พบ ${items.length} รายการ`, { month, income, expense, count: items.length, items });
    }

    /** สรุปกระเป๋าของเดือน: รายรับ, รายจ่ายส่วนตัว, ส่วนของเราในบิลกลุ่ม, สุทธิ, ได้คืนแล้ว (หน่วยบาท) */
    async function handleWalletSummary(res, auth, body) {
        const month = monthOf(body);
        const owner = normalizeName(auth.name);
        const items = await loadWalletItems(owner, month);
        const [tx, st] = await Promise.all([
            getDocs(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`))),
            getDocs(query(collection(db, "settlements"), where("month", "==", month)))
        ]);
        const w = walletMonth({
            name: owner,
            month,
            walletEntries: items.map((x) => ({ ownerName: owner, type: x.type, amount: x.amount, date: x.date })),
            transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })),
            settlements: st.docs.map((d) => ({ id: d.id, ...d.data() }))
        });
        const b = (v) => v / 100;
        return reply(res, 200, "summary", "สรุปกระเป๋า", {
            month,
            income: b(w.income),
            personalExpense: b(w.personalExpense),
            groupShare: b(w.groupShare),
            expenseTotal: b(w.expenseTotal),
            net: b(w.net),
            receivedBack: b(w.receivedBack),
            paidBack: b(w.paidBack),
            dbMode: dbMode()
        });
    }

    /** เพิ่มรายรับ/รายจ่ายส่วนตัวด้วยมือ (เว็บ, LINE, อื่นๆ) กันซ้ำด้วย dedupKey/transRef */
    async function handleWalletAdd(res, auth, body) {
        const built = buildWalletEntry(body, { ownerName: auth.name, ownerMemberId: auth.memberId || null, nowMs: now() });
        if (!built.ok) return reply(res, 400, "error", built.message);
        const e = built.entry;
        if (e.dedupKey || e.transRef) {
            const dup = await findDuplicate({ transRef: e.transRef, dedupKey: e.dedupKey, strong: true });
            if (dup) return reply(res, 200, "duplicate", duplicateMessage(dup));
        }
        const label = e.type === "income" ? "รายรับ" : "รายจ่าย";
        // รายจ่ายส่วนตัวแบบรายเดือน: บันทึกแม่แบบไว้ ให้ระบบสร้างซ้ำทุกเดือน (ตามวันที่ของรายการนี้)
        if (body.recurring === true && e.type === "expense") {
            // รอบ: ทุกเดือน (ค่าเดิม) / 3 / 6 / 12 เดือน เริ่มนับจากเดือนของรายการนี้
            const rec = cleanRecurrence({ every: body.every }, Number(e.month.slice(5, 7)));
            if (!rec) return reply(res, 400, "error", "รอบต้องเป็น ทุกเดือน / 3 เดือน / 6 เดือน / ทุกปี");
            const tref = await addDoc(collection(db, "wallet_templates"), {
                ownerName: e.ownerName, ownerMemberId: e.ownerMemberId || null, type: "expense", desc: e.desc, amount: e.amount,
                billingDay: Number(e.date.slice(8, 10)) || 1, icon: e.icon, active: true, createdAt: e.createdAt, lastGeneratedMonth: e.month,
                every: rec.every, startMonth: rec.startMonth,
                ...(e.cardId ? { cardId: e.cardId } : {}), ...(e.account ? { account: e.account } : {})
            });
            const ref = await addDoc(collection(db, WALLET_COL), { ...e, templateId: tref.id });
            const when = rec.every === 1 ? "ทุกเดือน" : rec.every === 12 ? "ทุกปี" : `ทุก ${rec.every} เดือน`;
            return reply(res, 200, "saved", `บันทึก${label}แล้ว และจะสร้างซ้ำ${when}อัตโนมัติ\n${formatBaht(e.amount)} • ${e.desc}`, { id: ref.id, type: e.type, amount: e.amount, desc: e.desc, recurring: true, every: rec.every });
        }
        const ref = await addDoc(collection(db, WALLET_COL), e);
        return reply(res, 200, "saved", `บันทึก${label}แล้ว\n${formatBaht(e.amount)} • ${e.desc}`, { id: ref.id, type: e.type, amount: e.amount, desc: e.desc });
    }

    /** ลบรายการส่วนตัว (ลบได้เฉพาะของตัวเอง) */
    async function handleDelete(res, auth, body) {
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id || id.length > 100 || id.includes("/")) {
            return reply(res, 400, "error", "ไม่พบรหัสรายการที่จะลบ");
        }
        const wRef = doc(db, WALLET_COL, id);
        const pRef = doc(db, "personal_expenses", id);
        let snap = await getDoc(wRef);
        if (!snap.exists()) snap = await getDoc(pRef);
        if (!snap.exists()) {
            return reply(res, 404, "error", "ไม่พบรายการนี้ (อาจถูกลบไปแล้ว)");
        }
        const data = snap.data();
        if (normalizeName(data.payer || data.ownerName) !== normalizeName(auth.name)) {
            return reply(res, 403, "error", "ลบได้เฉพาะรายการส่วนตัวของตัวเอง");
        }
        // ลบทั้งสองที่ (รายการที่ย้ายมาแล้วมี id เดียวกัน) กันรายการเดิมโผล่กลับมา
        await deleteDoc(wRef);
        await deleteDoc(pRef);
        return reply(res, 200, "deleted", `ลบรายการแล้ว\n${formatBaht(data.amount)} • ${data.desc || ""}`, { id });
    }

    /** ลบหลายรายการส่วนตัวพร้อมกัน (ของตัวเองเท่านั้น สูงสุด 50 รายการต่อครั้ง) รายการที่ลบไม่ได้จะรายงานใน failed */
    async function handleDeleteMany(res, auth, body) {
        const ids = Array.isArray(body.ids) ? [...new Set(body.ids)] : [];
        if (ids.length === 0 || ids.length > 50) return reply(res, 400, "error", "ลบได้ครั้งละ 1 ถึง 50 รายการ");
        const owner = normalizeName(auth.name);
        let deleted = 0;
        const failed = [];
        for (const raw of ids) {
            const id = typeof raw === "string" ? raw.trim() : "";
            if (!id || id.length > 100 || id.includes("/")) { failed.push({ id: raw, message: "ไม่พบรหัสรายการ" }); continue; }
            const wRef = doc(db, WALLET_COL, id);
            const pRef = doc(db, "personal_expenses", id);
            let snap = await getDoc(wRef);
            if (!snap.exists()) snap = await getDoc(pRef);
            if (!snap.exists()) { failed.push({ id, message: "ไม่พบรายการนี้" }); continue; }
            const data = snap.data();
            if (normalizeName(data.payer || data.ownerName) !== owner) { failed.push({ id, message: "ลบได้เฉพาะรายการของตัวเอง" }); continue; }
            await deleteDoc(wRef);
            await deleteDoc(pRef);
            deleted++;
        }
        return reply(res, 200, "deleted", `ลบแล้ว ${deleted} รายการ`, { deleted, failed });
    }

    /** ยืนยันรายการที่บันทึกอัตโนมัติ (จากสลิป/SMS/อีเมล) ว่าถูกต้อง ของตัวเองเท่านั้น ส่ง { id } หรือ { ids:[...] } สูงสุด 50 */
    async function handleWalletConfirm(res, auth, body) {
        const ids = [...new Set(Array.isArray(body.ids) ? body.ids : [body.id])].filter((x) => typeof x === "string" && x.trim() && x.length <= 100 && !x.includes("/"));
        if (ids.length === 0 || ids.length > 50) return reply(res, 400, "error", "ยืนยันได้ครั้งละ 1 ถึง 50 รายการ");
        const owner = normalizeName(auth.name);
        let confirmed = 0;
        for (const id of ids) {
            const ref = doc(db, WALLET_COL, id.trim());
            const snap = await getDoc(ref);
            if (!snap.exists()) continue;
            const data = snap.data();
            if (normalizeName(data.payer || data.ownerName) !== owner) continue;
            if (data.unconfirmed) await setDoc(ref, { ...data, unconfirmed: false, confirmedAt: new Date(now()).toISOString() });
            confirmed++;
        }
        return reply(res, 200, "saved", `ยืนยันแล้ว ${confirmed} รายการ`, { confirmed });
    }

    /** รายการกระเป๋ารายการเดียวของตัวเอง (ใช้กับลิงก์จากแจ้งเตือน เปิดหน้าแก้ไข/หารของรายการนั้น) */
    async function handleWalletGet(res, auth, body) {
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id || id.length > 100 || id.includes("/")) return reply(res, 400, "error", "ไม่พบรหัสรายการ");
        const snap = await getDoc(doc(db, WALLET_COL, id));
        if (!snap.exists()) return reply(res, 404, "error", "ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");
        const data = snap.data();
        if (normalizeName(data.payer || data.ownerName) !== normalizeName(auth.name)) return reply(res, 403, "error", "ดูได้เฉพาะรายการของตัวเอง");
        return reply(res, 200, "listed", "พบรายการ", { item: walletItem(id, data, false) });
    }

    async function handleSave(res, auth, body) {
        const pendingSnap = await getDoc(doc(db, "pending_slips", auth.memberId));
        if (!pendingSnap.exists()) {
            return reply(res, 200, "no_pending", "ไม่พบสลิปที่รอบันทึก\nกรุณาสแกนสลิปใหม่อีกครั้ง");
        }
        const p = pendingSnap.data();
        if (Number(p.expiresAt) < now()) {
            await clearPending(auth.memberId);
            return reply(res, 200, "expired", "สลิปหมดอายุแล้ว (เกิน 30 นาที)\nกรุณาสแกนสลิปใหม่อีกครั้ง");
        }

        const splitType = String(body.splitType || "").trim().toLowerCase();
        if (splitType !== "personal" && splitType !== "equal" && splitType !== "income") {
            return reply(res, 400, "error", "ไม่รู้จักประเภทการบันทึก (ต้องเป็น personal, equal หรือ income)");
        }
        if (p.convertFrom && splitType === "income") {
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", "รายการนี้บันทึกไว้แล้ว ไม่มีการเปลี่ยนแปลง", { splitType });
        }

        if (p.convertFrom && splitType === "personal") {
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", "รายการนี้เป็นส่วนตัวอยู่แล้ว ไม่มีการเปลี่ยนแปลง", { splitType });
        }

        // ถ้าเป็นการเปลี่ยนรายการส่วนตัวเดิมเป็นหาร จะข้ามการตรวจซ้ำ (เพราะซ้ำกับรายการที่กำลังจะย้ายนั้นเอง)
        if (!p.convertFrom) {
            const existing = await findDuplicate(p);
            if (existing) {
                await clearPending(auth.memberId);
                return reply(res, 200, "duplicate", duplicateMessage(existing));
            }
        }

        const payer = normalizeName(auth.name);
        const amount = Number(p.amount);
        const customDesc = typeof body.desc === "string" ? body.desc.trim().slice(0, 100) : "";
        const fromAuto = body.fromAuto === true;
        const autoDesc = customDesc || buildDescription(p.payee, p.bank);
        // บันทึกอัตโนมัติ: ถ้าเคยแก้ชื่อผู้รับนี้ไว้ ใช้ชื่อ/หมวดที่แก้
        const learned = fromAuto && splitType === "personal" ? lookupLearned(await loadLearned(payer), "expense", autoDesc) : null;
        const desc = learned ? learned.desc : autoDesc;
        // จำชื่อเดิมไว้ (autoDesc) เพื่อเรียนรู้ตอนเจ้าของแก้ชื่อ
        const autoMark = fromAuto ? { unconfirmed: true, source: "ios_auto", autoDesc } : {}; // บันทึกอัตโนมัติ = ยังไม่ยืนยัน
        const common = {
            date: p.date || getBangkokDateString(new Date(now())),
            desc,
            amount,
            payer,
            bank: p.bank || "",
            transRef: p.transRef || null,
            dedupKey: p.dedupKey || null,
            icon: (learned && learned.icon) || resolveIcon(desc, p.bank),
            source: "ios_shortcut",
            createdAt: new Date(now()).toISOString(),
            timestamp: now()
        };

        // ---------- รายรับ ----------
        if (splitType === "income") {
            const rawIncome = (customDesc || (p.sender ? `รับจาก ${p.sender}` : "รายรับ")).slice(0, 100);
            const learnedIn = fromAuto ? lookupLearned(await loadLearned(payer), "income", rawIncome) : null;
            const incomeDesc = learnedIn ? learnedIn.desc : rawIncome;
            const ref = await addDoc(collection(db, WALLET_COL), {
                ...common,
                ...autoMark,
                ...(fromAuto ? { autoDesc: rawIncome } : {}),
                desc: incomeDesc,
                icon: (learnedIn && learnedIn.icon) || "fa-arrow-down",
                ownerName: payer,
                ownerMemberId: auth.memberId || null,
                type: "income",
                month: String(common.date).slice(0, 7)
            });
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", `บันทึกรายรับแล้ว\n${formatBaht(amount)} • ${incomeDesc}\n(เพื่อนไม่เห็นรายการนี้)`, {
                splitType, amount, desc: incomeDesc, id: ref.id, type: "income"
            });
        }

        // ---------- ส่วนตัว ----------
        if (splitType === "personal") {
            const ref = await addDoc(collection(db, WALLET_COL), {
                ...common,
                ...autoMark,
                ownerName: payer,
                ownerMemberId: auth.memberId || null,
                type: "expense",
                month: String(common.date).slice(0, 7)
            });
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", `บันทึกส่วนตัวแล้ว\n${formatBaht(amount)} • ${desc}\n(เพื่อนไม่เห็นรายการนี้)`, {
                splitType, amount, desc, id: ref.id, type: "expense"
            });
        }

        // ---------- หารกับเพื่อน ----------
        // เดือนที่ปิดยอดแล้ว (สลิปเก่า เช่นสลิปวันที่ 31 สแกนวันที่ 1) เพิ่มบิลกลุ่มไม่ได้ ยกเว้นผู้ดูแลหลัก
        if (isClosedMonth(common.date, now()) && !(await isSuperAuth(auth))) return reply(res, 400, "error", closedMonthMessage(common.date));
        const memberNames = await loadMemberNames();
        if (!memberNames.includes(payer)) {
            return reply(res, 404, "error", `ไม่พบชื่อสมาชิก "${auth.name}" ในระบบ กรุณาติดต่อผู้ดูแล`);
        }

        const requested = parseNameList(body.splitWith);
        const { participants, unknown } = resolveParticipants(requested, memberNames);
        if (unknown.length > 0) {
            return reply(res, 400, "error", `ไม่พบสมาชิกชื่อ: ${unknown.join(", ")}\nกรุณาลองเลือกใหม่อีกครั้ง`);
        }
        const friends = participants.filter((n) => n !== payer);
        if (friends.length === 0) {
            return reply(res, 400, "error", "กรุณาเลือกเพื่อนอย่างน้อย 1 คน\n(ถ้าเป็นรายจ่ายของตัวเองคนเดียว ให้เลือก ส่วนตัว)");
        }

        const includePayer = participants.includes(payer);
        // ผู้จ่ายอยู่ท้ายสุดเพื่อให้เศษสตางค์ตกกับเพื่อนก่อน
        const ordered = includePayer ? [...friends, payer] : friends;
        const splits = buildEqualSplits(amount, ordered);

        const txn = { ...common, splits, paymentType: "normal", splitMode: includePayer ? "equal" : "treat" };
        await addDoc(collection(db, "transactions"), withPeople("transactions", txn));
        if (p.convertFrom) {
            // ย้ายจากรายการส่วนตัว: ลบรายการส่วนตัวเดิมหลังบันทึกรายการหารสำเร็จแล้ว
            try {
                await deleteDoc(doc(db, WALLET_COL, p.convertFrom));
                await deleteDoc(doc(db, "personal_expenses", p.convertFrom));
            } catch (e) {
                console.warn("remove converted personal expense failed:", e.message);
            }
        }
        await clearPending(auth.memberId);
        await notifyLine({ payer, desc, amount, participants: ordered, splits, includePayer });

        const each = splits[ordered[0]];
        const modeLine = includePayer
            ? `หารกับ ${friends.join(", ")} (รวมคุณ)`
            : `จ่ายแทน ${friends.join(", ")} (ไม่มีส่วนของคุณ)`;
        return reply(
            res, 200, "saved",
            `บันทึกแล้ว ${formatBaht(amount)} • ${desc}\n${modeLine}\nคนละประมาณ ${formatBaht(each)}`,
            { splitType, amount, desc, splits }
        );
    }

    /** เป็นผู้ดูแลไหม (เข้าด้วยรหัสอุปกรณ์/รหัสเว็บ: ไม่มีข้อมูลแอดมินมาด้วย อ่านจากสมาชิกเจ้าของรหัส) */
    async function isAdminAuth(auth) {
        let isAdmin = auth.isAdmin;
        if (isAdmin === undefined && auth.memberId) {
            const m = await getDoc(doc(db, "members", String(auth.memberId)));
            isAdmin = m.exists() && isAdminMember({ ...m.data(), lineUserId: auth.lineUserId || m.data().lineUserId });
        }
        return Boolean(isAdmin);
    }

    // ---------- บัตรเครดิต: รอบบิล + เตือนก่อนครบกำหนด (เฉพาะคนที่ผู้ดูแลเปิดให้) ----------
    const CARD_OFF = "ผู้ดูแลยังไม่ได้เปิดเตือนบัตรเครดิตให้คุณ";
    async function handleCardList(res, auth) {
        if (!(await cardSvc.allowed(auth.memberId))) return reply(res, 200, "listed", "ok", { enabled: false, cards: [] });
        const cards = await cardSvc.list(normalizeName(auth.name));
        return reply(res, 200, "listed", "ok", { enabled: true, cards });
    }
    async function handleCardWrite(res, auth, body, kind) {
        if (!(await cardSvc.allowed(auth.memberId))) return reply(res, 403, "error", CARD_OFF);
        const owner = normalizeName(auth.name);
        const id = typeof body.id === "string" ? body.id.trim() : "";
        const r = kind === "save" ? await cardSvc.save(owner, body)
            : kind === "delete" ? await cardSvc.remove(owner, id)
                : await cardSvc.setPaid(owner, id, body.paid !== false, body.key);
        if (!r.ok) return reply(res, r.code || 400, "error", r.message);
        return reply(res, 200, kind === "delete" ? "deleted" : "saved", r.message);
    }
    /** ผู้ดูแล: โควต้าข้อความ LINE เดือนนี้ */
    async function handleLineQuota(res, auth) {
        if (!(await isAdminAuth(auth))) return reply(res, 403, "error", "เฉพาะแอดมินเท่านั้น");
        const q = await lineQuota({ fetchFn, token: env.LINE_CHANNEL_ACCESS_TOKEN });
        if (!q.ok) return reply(res, 200, "listed", "อ่านโควต้าไม่ได้", { quota: null });
        return reply(res, 200, "listed", "ok", { quota: { limit: q.limit, used: q.used } });
    }

    /** ผู้ดูแล: สถานะงานอัตโนมัติ (เตือนหนี้, สร้างบิลรายเดือน, เตือนบัตร) */
    async function handleAdminStatus(res, auth) {
        if (!(await isAdminAuth(auth))) return reply(res, 403, "error", "เฉพาะแอดมินเท่านั้น");
        return reply(res, 200, "listed", "ok", { jobs: await readAdminStatus({ db, fs, now }) });
    }
    /** ผู้ดูแล: ส่งการ์ด "ใครต้องโอนให้ใคร" ของเดือนนี้เข้ากลุ่ม LINE (การ์ดเดียวกับที่พิมพ์สรุปในกลุ่ม) */
    async function handleGroupSummary(res, auth) {
        if (!(await isAdminAuth(auth))) return reply(res, 403, "error", "เฉพาะแอดมินเท่านั้น");
        const token = env.LINE_CHANNEL_ACCESS_TOKEN;
        const target = env.LINE_GROUP_ID;
        if (!token || !target) return reply(res, 400, "error", "ยังไม่ได้ตั้งกลุ่ม LINE (LINE_GROUP_ID) บนเซิร์ฟเวอร์");
        const msg = await buildGroupReportMessage({ db, fs, now: now() });
        const r = await fetchFn("https://api.line.me/v2/bot/message/push", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ to: target, messages: [msg] })
        });
        if (!r || !r.ok) return reply(res, 502, "error", "ส่งเข้ากลุ่ม LINE ไม่สำเร็จ ลองใหม่อีกครั้ง");
        return reply(res, 200, "saved", "ส่งสรุปยอดเข้ากลุ่ม LINE แล้ว");
    }

    // ---------- ซ่อนข้อมูลของคนอื่น (lib/privacy.mjs) ----------
    // สวิตช์อยู่ที่ app_config/privacy (เบราว์เซอร์อ่านไม่ได้ ถามผ่าน clear-plan) ผู้ดูแลหลัก = เจ้าของ LINE ID ที่ตั้งไว้ใน line-auth.mjs
    async function readPrivacy() {
        const s = await getDoc(doc(db, PRIVACY_COL, PRIVACY_ID));
        return s.exists() ? s.data() || {} : {};
    }
    async function isSuperAuth(auth) {
        if (auth.lineUserId === SUPER_ADMIN_LINE_ID) return true;
        if (!auth.memberId) return false;
        const m = await getDoc(doc(db, "members", String(auth.memberId)));
        return m.exists() && (m.data() || {}).lineUserId === SUPER_ADMIN_LINE_ID;
    }
    const PLAN_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;
    /**
     * ยอด "ใครต้องโอนให้ใคร" ของเดือนที่ขอ คำนวณจากข้อมูลทั้งกลุ่มบนเซิร์ฟเวอร์ (ตัวเลขชุดเดียวกับหน้าเว็บเดิม)
     * ส่งกลับเฉพาะบรรทัดที่ผู้ถามเป็นคนโอนหรือคนรับ (ผู้ดูแลหลักที่ขอ all ได้ทุกบรรทัด)
     * ยังไม่เปิดซ่อน: ตอบแค่สถานะ (อ่าน 2 ครั้ง) เว็บคำนวณเองเหมือนเดิม
     */
    async function handleClearPlan(res, auth, body) {
        const [p, sup] = await Promise.all([readPrivacy(), isSuperAuth(auth)]);
        const hide = p.hide === true;
        if (!hide && body.force !== true) return reply(res, 200, "listed", "ok", { hide, super: sup, plans: {} });
        const months = [...new Set((Array.isArray(body.months) ? body.months : []).map(String).filter((m) => PLAN_MONTH.test(m)))].slice(0, 12);
        const all = sup && body.all === true;
        const memberNames = months.length ? await loadMemberNames() : [];
        const plans = {};
        await Promise.all(months.map(async (m) => {
            const [tx, st] = await Promise.all([
                getDocs(query(collection(db, "transactions"), where("date", ">=", `${m}-01`), where("date", "<=", `${m}-31`))),
                getDocs(query(collection(db, "settlements"), where("month", "==", m)))
            ]);
            plans[m] = planLinesFor({
                name: auth.name, memberNames, month: m, all,
                transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })),
                settlements: st.docs.map((d) => ({ id: d.id, ...d.data() }))
            });
        }));
        return reply(res, 200, "listed", "ok", { hide, super: sup, plans });
    }
    /** ผู้ดูแลหลัก: เปิด/ปิดซ่อนข้อมูลของคนอื่น */
    async function handlePrivacySet(res, auth, body) {
        if (!(await isSuperAuth(auth))) return reply(res, 403, "error", "เฉพาะผู้ดูแลหลักเท่านั้น");
        const hide = body.hide === true;
        await setDoc(doc(db, PRIVACY_COL, PRIVACY_ID), { hide, updatedAt: new Date(now()).toISOString(), by: normalizeName(auth.name) });
        return reply(res, 200, "saved", hide ? "เปิดซ่อนข้อมูลของคนอื่นแล้ว" : "ปิดซ่อนข้อมูลแล้ว ทุกคนเห็นข้อมูลกลุ่มเหมือนเดิม", { hide });
    }
    /**
     * ผู้ดูแลหลัก: เติมป้าย people ให้ข้อมูลเก่าทุกใบ (เขียนเฉพาะใบที่ยังไม่มีหรือไม่ตรง กดซ้ำได้ไม่เปลืองการเขียน)
     * อ่านทั้ง 3 คอลเลกชันครั้งเดียว ถ้าใกล้หมดเวลา (30 วินาที) หยุดก่อนแล้วตอบ done:false ให้เว็บกดต่อ
     */
    async function handlePrivacyBackfill(res, auth) {
        if (!(await isSuperAuth(auth))) return reply(res, 403, "error", "เฉพาะผู้ดูแลหลักเท่านั้น");
        const start = now();
        const out = { checked: 0, updated: 0, done: true };
        for (const col of PEOPLE_COLS) {
            const snap = await getDocs(collection(db, col));
            let batch = writeBatch(db);
            let n = 0;
            for (const d of snap.docs) {
                out.checked++;
                const data = d.data() || {};
                const people = peopleFor(col, data);
                if (people.length === 0 || peopleUpToDate(col, data)) continue;
                batch.update(d.ref, { people });
                n++;
                out.updated++;
                if (n >= 400) {
                    await batch.commit();
                    batch = writeBatch(db);
                    n = 0;
                    if (now() - start > 20000) { out.done = false; break; }
                }
            }
            if (n) await batch.commit();
            if (!out.done) break;
        }
        return reply(res, 200, "saved", out.done ? `เติมป้ายครบแล้ว (แก้ ${out.updated} จากทั้งหมด ${out.checked} รายการ)` : `เติมป้ายไปแล้ว ${out.updated} รายการ ยังไม่ครบ`, out);
    }

    /** แอดมินสั่งส่งข้อความเตือนยอดค้างให้ทุกคนที่ติดหนี้ในเดือนนี้ (ส่งหาลูกหนี้ทาง LINE ส่วนตัว) */
    async function handleRemindAll(res, auth, body = {}) {
        if (!(await isAdminAuth(auth))) return reply(res, 403, "error", "เฉพาะแอดมินเท่านั้น");
        const run = createReminderJob({ db, fs, fetchFn, env, now });
        const want = String(body.month || "");
        const month = /^\d{4}-(0[1-9]|1[0-2])$/.test(want) && want <= bangkokMonthOf(now()) ? want : bangkokMonthOf(now());
        const r = await run({ force: true, month });
        if (r.status === "cooldown") return reply(res, 200, "cooldown", "เพิ่งสั่งเตือนไปเมื่อไม่นานนี้ รออีกสักพัก (กันเตือนซ้ำภายใน 12 ชั่วโมง)");
        const lines = [`ส่งเตือนแล้ว ${r.sentCount || 0} คน`];
        if (r.skipped && r.skipped.length) lines.push(`ยังไม่ผูก LINE จึงส่งไม่ได้: ${r.skipped.join(", ")}`);
        if (r.failed && r.failed.length) lines.push(`ส่งไม่สำเร็จ: ${r.failed.join(", ")}`);
        if (!r.debtors || r.debtors.length === 0) lines[0] = "ไม่มีใครค้างชำระในเดือนนี้";
        return reply(res, 200, "reminded", lines.join(String.fromCharCode(10)), { sent: r.sentCount || 0, skipped: r.skipped || [], failed: r.failed || [] });
    }

    return async function handler(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") return res.status(200).end();
        if (req.method !== "POST") return reply(res, 405, "error", "Method Not Allowed");

        try {
            const body = parseBody(req.body);
            const action = String(body.action || "").trim().toLowerCase();

            // หน้าเว็บ (ล็อกอินด้วย LINE) ส่ง idToken มาแทนรหัสอุปกรณ์ ใช้ได้เฉพาะดู/ลบรายการส่วนตัวของตัวเอง
            const hasBearer = Boolean(req.headers && (req.headers.authorization || req.headers.Authorization));
            const useLineLogin = !hasBearer && authenticateIdToken && body.idToken && LINE_LOGIN_ACTIONS.has(action);
            const auth = useLineLogin
                ? await authenticateIdToken(String(body.idToken))
                : await verifyDeviceToken(db, req);
            if (!auth.authenticated) {
                return reply(res, auth.status || 401, "error", auth.message || "รหัสไม่ถูกต้อง กรุณาตั้งค่าใหม่จากเว็บ", { dbMode: dbMode() });
            }

            if (action === "list") return await handleList(res, auth, body);
            if (action === "delete") return await handleDelete(res, auth, body);
            if (action === "auto") {
                // แนบเวอร์ชันล่าสุดของ DeptAuto ไปกับทุกคำตอบ ให้สคริปต์เตือนเองเมื่อเครื่องยังเป็นรุ่นเก่า
                const wrapped = { status(c) { res.status(c); return wrapped; }, json(b) { return res.json({ ...b, scriptVersion: LATEST_AUTO_VERSION }); } };
                return await handleAuto(wrapped, auth, body);
            }
            if (action === "parse") return await handleParse(res, auth, body);
            if (action === "save") return await handleSave(res, auth, body);
            if (action === "wallet-add") return await handleWalletAdd(res, auth, body);
            if (action === "wallet-list") return await handleWalletList(res, auth, body);
            if (action === "wallet-summary") return await handleWalletSummary(res, auth, body);
            if (action === "wallet-delete") return await handleDelete(res, auth, body);
            if (action === "wallet-delete-many") return await handleDeleteMany(res, auth, body);
            if (action === "wallet-confirm") return await handleWalletConfirm(res, auth, body);
            if (action === "wallet-get") return await handleWalletGet(res, auth, body);
            if (action === "remind-all") return await handleRemindAll(res, auth, body);
            if (action === "wallet-update") return await handleWalletUpdate(res, auth, body);
            if (action === "wallet-template-update") return await handleTemplateUpdate(res, auth, body);
            if (action === "wallet-template-list") return await handleTemplateList(res, auth);
            if (action === "wallet-template-stop") return await handleTemplateStop(res, auth, body);
            if (action === "plan-get") return await handlePlanGet(res, auth);
            if (action === "plan-budget-set") return await handleBudgetSet(res, auth, body);
            if (action === "goal-save") return await handleGoalSave(res, auth, body);
            if (action === "goal-delete") return await handleGoalDelete(res, auth, body);
            if (action === "goal-move") return await handleGoalMove(res, auth, body);
            if (action === "shared-goal-save") return await handleSharedSave(res, auth, body);
            if (action === "shared-goal-move") return await handleSharedMove(res, auth, body);
            if (action === "shared-goal-delete") return await handleSharedDelete(res, auth, body);
            if (action === "shared-goal-leave") return await handleSharedLeave(res, auth, body);
            if (action === "card-list") return await handleCardList(res, auth);
            if (action === "card-save") return await handleCardWrite(res, auth, body, "save");
            if (action === "card-delete") return await handleCardWrite(res, auth, body, "delete");
            if (action === "card-paid") return await handleCardWrite(res, auth, body, "paid");
            if (action === "line-quota") return await handleLineQuota(res, auth);
            if (action === "admin-status") return await handleAdminStatus(res, auth);
            if (action === "group-summary") return await handleGroupSummary(res, auth);
            if (action === "clear-plan") return await handleClearPlan(res, auth, body);
            if (action === "privacy-set") return await handlePrivacySet(res, auth, body);
            if (action === "privacy-backfill") return await handlePrivacyBackfill(res, auth);
            return reply(res, 400, "error", "ต้องระบุ action เป็น parse หรือ save");
        } catch (err) {
            console.error("shortcut-transaction error:", err);
            return reply(res, 500, "error", "เกิดข้อผิดพลาดในระบบ: " + (err && err.message ? err.message : "unknown"));
        }
    };
}
