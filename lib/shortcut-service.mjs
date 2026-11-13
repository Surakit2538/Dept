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

export const PENDING_TTL_MS = 30 * 60 * 1000; // รายการรอบันทึกหมดอายุใน 30 นาที
export const WEAK_DUP_WINDOW_MS = 10 * 60 * 1000; // กันซ้ำแบบอ่อน: ภายใน 10 นาที
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

export function createShortcutHandler({ db, fs, verifyDeviceToken, authenticateIdToken = null, readSlipImage = null, env = process.env, fetchFn = globalThis.fetch, now = () => Date.now() }) {
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
        const cols = ["transactions", "personal_expenses"];
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
            const mine = existing.__col === "personal_expenses" && normalizeName(existing.payer) === normalizeName(auth.name);
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
        await setDoc(doc(db, "pending_slips", auth.memberId), {
            name: auth.name,
            amount: parsed.amount,
            bank: parsed.bank,
            payee: parsed.payee,
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
        lines.push("", "บันทึกแบบไหนดี?");

        return reply(res, 200, "ok", lines.join("\n"), {
            amount: parsed.amount,
            bank: parsed.bank,
            payee: parsed.payee
        });
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

        const saved = capture();
        await handleSave(saved, auth, { splitType: "personal" });
        const b = saved.body || { status: "error", message: "เกิดข้อผิดพลาด" };
        return res.status(saved.code).json({ ...b, message: clean(b.message) });
    }

    /** รายการ "ส่วนตัว" ของเจ้าของบัญชีเอง ตามเดือน (month = YYYY-MM, ค่าเริ่มต้น = เดือนนี้ตามเวลาไทย) */
    async function handleList(res, auth, body) {
        const monthRaw = typeof body.month === "string" ? body.month.trim() : "";
        const month = /^\d{4}-(0[1-9]|1[0-2])$/.test(monthRaw) ? monthRaw : getBangkokDateString(new Date(now())).slice(0, 7);
        const payer = normalizeName(auth.name);

        const snap = await getDocs(query(collection(db, "personal_expenses"), where("payer", "==", payer)));
        const items = snap.docs
            .map((d) => {
                const x = d.data();
                return {
                    id: d.id,
                    date: x.date || "",
                    desc: x.desc || "",
                    amount: Number(x.amount) || 0,
                    bank: x.bank || "",
                    timestamp: Number(x.timestamp) || 0
                };
            })
            .filter((x) => x.date.startsWith(month))
            .sort((a, b) => b.date.localeCompare(a.date) || b.timestamp - a.timestamp)
            .slice(0, 500);
        const total = Math.round(items.reduce((s, x) => s + x.amount, 0) * 100) / 100;

        return reply(res, 200, "listed", `พบ ${items.length} รายการ`, { month, total, count: items.length, items });
    }

    /** ลบรายการส่วนตัว (ลบได้เฉพาะของตัวเอง) */
    async function handleDelete(res, auth, body) {
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (!id || id.length > 100 || id.includes("/")) {
            return reply(res, 400, "error", "ไม่พบรหัสรายการที่จะลบ");
        }
        const ref = doc(db, "personal_expenses", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
            return reply(res, 404, "error", "ไม่พบรายการนี้ (อาจถูกลบไปแล้ว)");
        }
        const data = snap.data();
        if (normalizeName(data.payer) !== normalizeName(auth.name)) {
            return reply(res, 403, "error", "ลบได้เฉพาะรายการส่วนตัวของตัวเอง");
        }
        await deleteDoc(ref);
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
        if (splitType !== "personal" && splitType !== "equal") {
            return reply(res, 400, "error", "ไม่รู้จักประเภทการบันทึก (ต้องเป็น personal หรือ equal)");
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

        // ---------- ส่วนตัว ----------
        if (splitType === "personal") {
            await addDoc(collection(db, "personal_expenses"), common);
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
            const useLineLogin = !hasBearer && authenticateIdToken && body.idToken && (action === "list" || action === "delete");
            const auth = useLineLogin
                ? await authenticateIdToken(String(body.idToken))
                : await verifyDeviceToken(db, req);
            if (!auth.authenticated) {
                return reply(res, auth.status || 401, "error", auth.message || "รหัสไม่ถูกต้อง กรุณาตั้งค่าใหม่จากเว็บ");
            }

            if (action === "list") return await handleList(res, auth, body);
            if (action === "delete") return await handleDelete(res, auth, body);
            if (action === "auto") return await handleAuto(res, auth, body);
            if (action === "parse") return await handleParse(res, auth, body);
            if (action === "save") return await handleSave(res, auth, body);
            return reply(res, 400, "error", "ต้องระบุ action เป็น parse หรือ save");
        } catch (err) {
            console.error("shortcut-transaction error:", err);
            return reply(res, 500, "error", "เกิดข้อผิดพลาดในระบบ: " + (err && err.message ? err.message : "unknown"));
        }
    };
}
