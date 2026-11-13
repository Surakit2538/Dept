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
    resolveIcon
} from "./slip-core.mjs";
import { WALLET_COL, buildWalletEntry } from "./wallet-service.mjs";
import { walletMonth } from "./ledger.mjs";
import { classifyDirection } from "./names.mjs";

export const PENDING_TTL_MS = 30 * 60 * 1000; // รายการรอบันทึกหมดอายุใน 30 นาที
export const WEAK_DUP_WINDOW_MS = 10 * 60 * 1000; // กันซ้ำแบบอ่อน: ภายใน 10 นาที
// action ที่หน้าเว็บ (ล็อกอินด้วย LINE) เรียกได้โดยไม่ต้องมีรหัสอุปกรณ์
const LINE_LOGIN_ACTIONS = new Set(["list", "delete", "wallet-add", "wallet-list", "wallet-delete", "wallet-summary"]);
const EXIT_HINT = "\n\n(กด ❌ ปิด เพื่อออก)";

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
    const { collection, doc, getDoc, getDocs, query, where, addDoc, setDoc, deleteDoc } = fs;

    const reply = (res, httpCode, status, message, extra = {}) =>
        res.status(httpCode).json({ success: ["ok", "saved", "listed", "deleted"].includes(status), status, message, ...extra });

    async function clearPending(memberId) {
        try {
            await deleteDoc(doc(db, "pending_slips", memberId));
        } catch (e) {
            console.warn("clearPending failed:", e.message);
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
        return `⚠️ สลิปนี้เคยบันทึกแล้ว${where_}\n${existing.desc || ""} ${existing.amount ? formatBaht(existing.amount) : ""}`.trim();
    }

    function kindHint(cls) {
        if (cls.kind === "income") return cls.confident ? "💰 ดูเหมือนเงินเข้าบัญชีคุณ (บันทึกเป็นรายรับได้)" : "💰 ดูเหมือนเงินเข้าบัญชีคุณ แต่ไม่ทราบผู้โอน";
        if (cls.kind === "received_back") return `🤝 ${cls.counterparty} โอนคืนหนี้ให้คุณ (ไม่นับเป็นรายรับ)`;
        if (cls.kind === "paid_back") return `🤝 โอนให้ ${cls.counterparty} (น่าจะเคลียร์หนี้ ไม่ใช่รายจ่าย)`;
        if (cls.kind === "self_transfer") return "🔁 โอนระหว่างบัญชีของคุณเอง";
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
            const head = "❓ ไม่พบยอดเงินในรูปล่าสุด\nอาจไม่ใช่สลิป หรือรูปไม่ชัด";
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
                    `ℹ️ สลิปนี้บันทึกเป็นส่วนตัวไว้แล้ว\n${formatBaht(existing.amount)} • ${existing.desc || ""}\n\nต้องการเปลี่ยนเป็นหารกับเพื่อนไหม?`,
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

        const lines = [`🧾 พบบิล ${formatBaht(parsed.amount)}`];
        lines.push(`🏦 ${parsed.bank}`);
        if (parsed.payee) lines.push(`📝 ${parsed.payee}`);
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
            const head = includePayer ? `👥 หารกับ: ${friends.join(", ")}` : `🤝 จ่ายแทน: ${friends.join(", ")}`;
            const text =
                `🧾 บิลใหม่ (จาก iPhone)\n👤 ผู้จ่าย: ${payer}\n📝 ${desc}\n💰 ยอดรวม ${formatBaht(amount)}\n${head}\n` +
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
        const clean = (msg) => String(msg || "").replace(/\n\n\(กด ❌ ปิด เพื่อออก\)$/, "");

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
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `🤝 ${pend.counterparty || "เพื่อน"} โอนคืนหนี้ ${amountText}\n(ไม่นับเป็นรายรับ ไม่บันทึกซ้ำ)` });
        }
        if (pend.kind === "paid_back") {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `🤝 โอนให้ ${pend.counterparty || "เพื่อน"} ${amountText}\n(ไม่บันทึกเป็นรายจ่าย ไปกดอัปโหลดสลิปเคลียร์หนี้ที่เว็บหรือ LINE)` });
        }
        if (pend.kind === "self_transfer") {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `🔁 โอนระหว่างบัญชีของคุณเอง ${amountText}\n(ไม่บันทึก)` });
        }
        if (pend.kind === "income" && !pend.kindConfident) {
            await clearPending(auth.memberId);
            return res.status(200).json({ success: true, status: "ignored", kind: pend.kind, message: `💰 พบสลิปเงินเข้า ${amountText} แต่ไม่ทราบว่าใครโอน\nไม่ได้บันทึกอัตโนมัติ (ใช้ปุ่มสแกนสลิปเพื่อเลือกได้)` });
        }

        const saved = capture();
        await handleSave(saved, auth, { splitType: pend.kind === "income" ? "income" : "personal" });
        const b = saved.body || { status: "error", message: "เกิดข้อผิดพลาด" };
        return res.status(saved.code).json({ ...b, message: clean(b.message) });
    }

    function monthOf(body) {
        const monthRaw = typeof body.month === "string" ? body.month.trim() : "";
        return /^\d{4}-(0[1-9]|1[0-2])$/.test(monthRaw) ? monthRaw : getBangkokDateString(new Date(now())).slice(0, 7);
    }

    /** รายการกระเป๋าทั้งหมดของเจ้าของในเดือนนั้น (wallet_entries + personal_expenses เดิมที่ยังไม่ถูกย้าย) */
    async function loadWalletItems(owner, month) {
        const [w, p] = await Promise.all([
            getDocs(query(collection(db, WALLET_COL), where("ownerName", "==", owner))),
            getDocs(query(collection(db, "personal_expenses"), where("payer", "==", owner)))
        ]);
        const byId = new Map();
        const add = (d, legacy) => {
            if (byId.has(d.id)) return; // id เดียวกัน = รายการเดียวกัน (ย้ายมาแล้ว)
            const x = d.data();
            byId.set(d.id, {
                id: d.id,
                type: x.type === "income" ? "income" : "expense",
                date: x.date || "",
                desc: x.desc || "",
                amount: Number(x.amount) || 0,
                bank: x.bank || "",
                category: x.category || "",
                icon: x.icon || "",
                source: x.source || (legacy ? "ios_shortcut" : "web"),
                timestamp: Number(x.timestamp) || 0
            });
        };
        w.docs.forEach((d) => add(d, false));
        p.docs.forEach((d) => add(d, true));
        return [...byId.values()]
            .filter((x) => x.date.startsWith(month))
            .sort((a, b2) => b2.date.localeCompare(a.date) || b2.timestamp - a.timestamp)
            .slice(0, 500);
    }

    const sum2 = (items) => Math.round(items.reduce((s, x) => s + x.amount, 0) * 100) / 100;

    /** รายการ "ส่วนตัว" (รายจ่าย) ของเจ้าของบัญชีเอง ตามเดือน — รูปแบบเดิม ใช้กับหน้ารายจ่ายส่วนตัว/Widget */
    async function handleList(res, auth, body) {
        const month = monthOf(body);
        const items = (await loadWalletItems(normalizeName(auth.name), month)).filter((x) => x.type !== "income");
        return reply(res, 200, "listed", `พบ ${items.length} รายการ`, { month, total: sum2(items), count: items.length, items });
    }

    /** กระเป๋า: รายรับ+รายจ่ายส่วนตัวทั้งหมดของเดือน */
    async function handleWalletList(res, auth, body) {
        const month = monthOf(body);
        const items = await loadWalletItems(normalizeName(auth.name), month);
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
        const ref = await addDoc(collection(db, WALLET_COL), e);
        const label = e.type === "income" ? "รายรับ" : "รายจ่าย";
        return reply(res, 200, "saved", `✅ บันทึก${label}แล้ว\n${formatBaht(e.amount)} • ${e.desc}`, { id: ref.id, type: e.type, amount: e.amount, desc: e.desc });
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
        return reply(res, 200, "deleted", `🗑️ ลบรายการแล้ว\n${formatBaht(data.amount)} • ${data.desc || ""}`, { id });
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
            return reply(res, 200, "saved", "ℹ️ รายการนี้บันทึกไว้แล้ว ไม่มีการเปลี่ยนแปลง", { splitType });
        }

        if (p.convertFrom && splitType === "personal") {
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", "✅ รายการนี้เป็นส่วนตัวอยู่แล้ว ไม่มีการเปลี่ยนแปลง", { splitType });
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
        const desc = customDesc || buildDescription(p.payee, p.bank);
        const common = {
            date: p.date || getBangkokDateString(new Date(now())),
            desc,
            amount,
            payer,
            bank: p.bank || "",
            transRef: p.transRef || null,
            dedupKey: p.dedupKey || null,
            icon: resolveIcon(desc, p.bank),
            source: "ios_shortcut",
            createdAt: new Date(now()).toISOString(),
            timestamp: now()
        };

        // ---------- รายรับ ----------
        if (splitType === "income") {
            const incomeDesc = customDesc || (p.sender ? `รับจาก ${p.sender}` : "รายรับ");
            await addDoc(collection(db, WALLET_COL), {
                ...common,
                desc: incomeDesc.slice(0, 100),
                icon: "fa-arrow-down",
                ownerName: payer,
                ownerMemberId: auth.memberId || null,
                type: "income",
                month: String(common.date).slice(0, 7)
            });
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", `✅ บันทึกรายรับแล้ว\n${formatBaht(amount)} • ${incomeDesc}\n(เพื่อนไม่เห็นรายการนี้)`, {
                splitType, amount, desc: incomeDesc
            });
        }

        // ---------- ส่วนตัว ----------
        if (splitType === "personal") {
            await addDoc(collection(db, WALLET_COL), {
                ...common,
                ownerName: payer,
                ownerMemberId: auth.memberId || null,
                type: "expense",
                month: String(common.date).slice(0, 7)
            });
            await clearPending(auth.memberId);
            return reply(res, 200, "saved", `✅ บันทึกส่วนตัวแล้ว\n${formatBaht(amount)} • ${desc}\n(เพื่อนไม่เห็นรายการนี้)`, {
                splitType, amount, desc
            });
        }

        // ---------- หารกับเพื่อน ----------
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
            return reply(res, 400, "error", "กรุณาเลือกเพื่อนอย่างน้อย 1 คน\n(ถ้าเป็นรายจ่ายของตัวเองคนเดียว ให้เลือก 👤 ส่วนตัว)");
        }

        const includePayer = participants.includes(payer);
        // ผู้จ่ายอยู่ท้ายสุดเพื่อให้เศษสตางค์ตกกับเพื่อนก่อน
        const ordered = includePayer ? [...friends, payer] : friends;
        const splits = buildEqualSplits(amount, ordered);

        const txn = { ...common, splits, paymentType: "normal", splitMode: includePayer ? "equal" : "treat" };
        await addDoc(collection(db, "transactions"), txn);
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
            ? `👥 หารกับ ${friends.join(", ")} (รวมคุณ)`
            : `🤝 จ่ายแทน ${friends.join(", ")} (ไม่มีส่วนของคุณ)`;
        return reply(
            res, 200, "saved",
            `✅ บันทึกแล้ว ${formatBaht(amount)} • ${desc}\n${modeLine}\nคนละประมาณ ${formatBaht(each)}`,
            { splitType, amount, desc, splits }
        );
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
            if (action === "auto") return await handleAuto(res, auth, body);
            if (action === "parse") return await handleParse(res, auth, body);
            if (action === "save") return await handleSave(res, auth, body);
            if (action === "wallet-add") return await handleWalletAdd(res, auth, body);
            if (action === "wallet-list") return await handleWalletList(res, auth, body);
            if (action === "wallet-summary") return await handleWalletSummary(res, auth, body);
            if (action === "wallet-delete") return await handleDelete(res, auth, body);
            return reply(res, 400, "error", "ต้องระบุ action เป็น parse หรือ save");
        } catch (err) {
            console.error("shortcut-transaction error:", err);
            return reply(res, 500, "error", "เกิดข้อผิดพลาดในระบบ: " + (err && err.message ? err.message : "unknown"));
        }
    };
}
