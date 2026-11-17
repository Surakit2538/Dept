// การเชื่อมต่อ: LINE (LIFF), Firestore (เฉพาะคอลเลกชันข้อมูลกลุ่มที่กฎอนุญาต) และ API ของเรา (กระเป๋า)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, onSnapshot, doc, updateDoc, deleteDoc, addDoc, writeBatch, limit, FieldPath } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};
export const LIFF_ID = "2008948704-db2goT00";

const db = getFirestore(initializeApp(firebaseConfig));

export function bangkokToday(now = new Date()) {
    const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
    return p; // YYYY-MM-DD
}

/** รอให้สคริปต์ LIFF (โหลดแบบ async) พร้อมใช้ ไม่เกิน 10 วินาที */
export function waitForLiff() {
    if (typeof liff !== "undefined") return Promise.resolve();
    return new Promise((resolve, reject) => {
        let tries = 0;
        const t = setInterval(() => {
            if (typeof liff !== "undefined") { clearInterval(t); resolve(); }
            else if (++tries > 100) { clearInterval(t); reject(new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้")); }
        }, 100);
    });
}

// API ที่ต้องใช้รหัสล็อกอิน LINE จะรอจนล็อกอินเสร็จ (แอปแสดงข้อมูลจากเครื่องก่อนได้ โดยไม่ต้องรอส่วนนี้)
let markLiffReady = () => {};
let loggedOut = false; // บัตรล็อกอิน LINE หมดอายุ (ต้องเข้าสู่ระบบใหม่)
let expiredListener = () => {};
export const EXPIRED_MSG = "เซสชัน LINE หมดอายุ กดเข้าสู่ระบบใหม่ที่แถบด้านบน";
/** ให้แอปรู้ตอนบัตรล็อกอินหมดอายุ เพื่อแสดงแถบแจ้งเตือน */
export function onLoginExpired(fn) { expiredListener = fn; if (loggedOut) fn(); }
/** ขอล็อกอิน LINE ใหม่ (ในแอป LINE มักผ่านเงียบๆ) */
export function relogin() { try { liff.login({ redirectUri: location.href }); } catch (e) { /* ไม่มีอะไร */ } }
function expired() {
    loggedOut = true;
    expiredListener();
    const err = new Error(EXPIRED_MSG);
    err.expired = true;
    return err;
}
const liffReady = new Promise((r) => { markLiffReady = r; });

const SUPER_ADMIN_LINE_ID = "U0d739eea39c312e11c487e22861920d1";
const cleanName = (n) => String(n || "").replace(/\s+/g, " ").trim().toUpperCase();

function userFromMember(id, x, lineUserId) {
    return {
        name: cleanName(x.name),
        memberId: id,
        pictureUrl: /^https:\/\//i.test(x.pictureUrl || "") ? x.pictureUrl : "",
        isAdmin: x.role === "admin" || lineUserId === SUPER_ADMIN_LINE_ID,
        realName: x.realName || "",
        promptpay: x.promptpay || ""
    };
}

/**
 * เข้าสู่ระบบด้วย LINE แล้วหาสมาชิกที่ผูกกับบัญชีนี้
 * คืนค่า:
 *  - { name, memberId, pictureUrl, isAdmin, realName, promptpay }   พบสมาชิกแล้ว
 *  - { needLink: true, profile, candidates:[{id,name}] }             ยังไม่ผูกบัญชี ให้เลือกว่าเป็นสมาชิกคนไหน หรือสมัครใหม่
 *  - null                                                             กำลังพาไปหน้าล็อกอิน LINE
 */
export async function signIn() {
    await waitForLiff();
    await liff.init({ liffId: LIFF_ID });
    if (!liff.isLoggedIn()) {
        // เคยเข้าแล้ว (มีตัวตนที่จำไว้): ไม่เด้งไปหน้าล็อกอินทันที ให้ดูข้อมูลที่จำไว้ต่อ แล้วแจ้งให้กดเข้าสู่ระบบใหม่เอง
        if (getCachedUser()) { loggedOut = true; return { needLogin: true }; }
        liff.login({ redirectUri: location.href });
        return null; // กำลังพาไปหน้าล็อกอิน
    }
    markLiffReady();
    // อ่านรหัสผู้ใช้จาก ID token ในเครื่องได้เลย (เร็วกว่าถามเซิร์ฟเวอร์ LINE) ถ้าไม่มีค่อยถามด้วย getProfile
    const decoded = typeof liff.getDecodedIDToken === "function" ? liff.getDecodedIDToken() : null;
    let userId = decoded && decoded.sub ? decoded.sub : "";
    let pictureUrl = decoded && decoded.picture ? decoded.picture : "";
    let profile = null;
    if (!userId || !pictureUrl) {
        try {
            profile = await liff.getProfile();
            if (!userId) userId = profile.userId;
            if (!pictureUrl) pictureUrl = profile.pictureUrl || "";
        } catch (e) { /* profile fetch fallback */ }
    }
    const snap = await getDocs(query(collection(db, "members"), where("lineUserId", "==", userId)));
    if (!snap.empty) {
        const m = snap.docs.find((d) => d.data().realName) || snap.docs[0];
        const d = m.data();
        const pic = pictureUrl || d.pictureUrl || "";
        if (pictureUrl && d.pictureUrl !== pictureUrl) {
            updateDoc(doc(db, "members", m.id), { pictureUrl }).catch(() => {});
        }
        return userFromMember(m.id, { ...d, pictureUrl: pic }, userId);
    }

    // ยังไม่เคยผูกบัญชี: หาจากชื่อ LINE ที่ตรงกับสมาชิกที่ยังไม่ผูก ถ้าไม่พบให้ผู้ใช้เลือกเอง
    if (!profile) profile = await liff.getProfile();
    const p = { userId, displayName: cleanName(profile.displayName), pictureUrl: /^https:\/\//i.test(profile.pictureUrl || "") ? profile.pictureUrl : "" };
    const all = await getDocs(collection(db, "members"));
    const unlinked = all.docs.filter((d) => !d.data().lineUserId);
    const same = unlinked.find((d) => cleanName(d.data().name) === p.displayName);
    if (same) return linkMember(p, same.id);
    if (unlinked.length === 0) return createMember(p);
    return { needLink: true, profile: p, candidates: unlinked.map((d) => ({ id: d.id, name: cleanName(d.data().name) })).sort((a, b) => a.name.localeCompare(b.name)) };
}

/** ผูกบัญชี LINE นี้เข้ากับสมาชิกที่มีอยู่ (ไม่เปลี่ยนชื่อในระบบ ประวัติบิลทั้งหมดจึงอยู่ครบ) */
export async function linkMember(profile, memberId) {
    const ref = doc(db, "members", String(memberId));
    const cur = await getDoc(ref);
    if (!cur.exists()) throw new Error("ไม่พบสมาชิกนี้ ลองรีเฟรชหน้า");
    if (cur.data().lineUserId && cur.data().lineUserId !== profile.userId) throw new Error("ชื่อนี้ถูกผูกกับ LINE อื่นแล้ว");
    await updateDoc(ref, { lineUserId: profile.userId, lineDisplayName: profile.displayName, pictureUrl: profile.pictureUrl || "", linkedAt: new Date().toISOString() });
    invalidateProfiles();
    return userFromMember(cur.id, { ...cur.data(), pictureUrl: profile.pictureUrl }, profile.userId);
}

/** สมัครเป็นสมาชิกใหม่ด้วยชื่อ LINE (ถ้าชื่อซ้ำกับสมาชิกเดิม ต่อท้ายด้วยเลข 4 ตัวจากรหัส LINE) */
export async function createMember(profile) {
    const dup = await getDocs(query(collection(db, "members"), where("lineUserId", "==", profile.userId)));
    if (!dup.empty) return userFromMember(dup.docs[0].id, dup.docs[0].data(), profile.userId);
    const taken = await getDocs(query(collection(db, "members"), where("name", "==", profile.displayName)));
    const name = (taken.empty ? profile.displayName : `${profile.displayName} ${profile.userId.slice(-4).toUpperCase()}`) || `USER ${profile.userId.slice(-4).toUpperCase()}`;
    const data = { name, lineUserId: profile.userId, pictureUrl: profile.pictureUrl || "", role: "member", joinedAt: new Date().toISOString() };
    const ref = await addDoc(collection(db, "members"), data);
    invalidateProfiles();
    return userFromMember(ref.id, data, profile.userId);
}

// ---------- แคชในเครื่อง: ประหยัดโควต้าอ่านของ Firestore (ฟรี 50,000 ครั้ง/วัน) ----------
const TTL_PAST = 24 * 60 * 60 * 1000; // เดือนที่ผ่านมาแล้วแทบไม่เปลี่ยน จำไว้ 1 วัน
const TTL_MEMBERS = 10 * 60 * 1000;
const KEY = "dm:v2:";

function cacheGet(key, ttl) {
    try {
        const raw = localStorage.getItem(KEY + key);
        if (!raw) return null;
        const { t, v } = JSON.parse(raw);
        return Date.now() - t < ttl ? v : null;
    } catch (e) { return null; }
}
function cacheSet(key, v) {
    try { localStorage.setItem(KEY + key, JSON.stringify({ t: Date.now(), v })); } catch (e) { /* เต็มหรือถูกปิด ไม่เป็นไร */ }
}
const TTL_USER = 14 * 24 * 60 * 60 * 1000;
const TTL_SNAP = 7 * 24 * 60 * 60 * 1000;

/** ตัวตนที่จำไว้ (ใช้แสดงแอปทันที ระหว่างนั้นระบบยืนยันกับ LINE เบื้องหลัง) */
export function getCachedUser() {
    const u = cacheGet("user", TTL_USER);
    return u && u.name && u.memberId ? u : null;
}
export function setCachedUser(u) { if (u && u.name && u.memberId) cacheSet("user", u); }

/** ภาพล่าสุดของข้อมูลเดือนนี้ (เก็บในเครื่องของเจ้าของ แยกตามชื่อ ล้างตอนออกจากระบบ) */
export function loadSnapshot(name, month) {
    const v = cacheGet(`snap:${name}:${month}`, TTL_SNAP);
    return v && Array.isArray(v.transactions) && Array.isArray(v.settlements) && Array.isArray(v.wallet) ? v : null;
}
export function saveSnapshot(name, month, part) {
    cacheSet(`snap:${name}:${month}`, { transactions: part.transactions, settlements: part.settlements, wallet: part.wallet });
}

/** รายชื่อสมาชิกที่จำไว้ (ไม่สนอายุ ใช้แสดงก่อน แล้วค่อยโหลดใหม่) */
export function getStaleMembers() {
    return cacheGet("members", Infinity);
}

export function clearCache() {
    try { Object.keys(localStorage).filter((k) => k.startsWith(KEY)).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* ไม่มีอะไร */ }
}

const upName = (n) => String(n || "").replace(/\s+/g, " ").trim().toUpperCase();

/** รายชื่อสมาชิก (อ่านครั้งเดียว จำไว้ 10 นาที) */
export async function loadMembers() {
    const hit = cacheGet("members", TTL_MEMBERS);
    if (hit) return hit;
    const s = await getDocs(collection(db, "members"));
    const names = [...new Set(s.docs.map((d) => upName(d.data().name)).filter(Boolean))];
    cacheSet("members", names);
    return names;
}

/** บิลและประวัติเคลียร์เงินของเดือนที่ผ่านมาแล้ว อ่านครั้งเดียวแล้วจำไว้ */
export async function loadPastMonth(month) {
    const hit = cacheGet("m:" + month, TTL_PAST);
    if (hit) return hit;
    const [tx, st] = await Promise.all([
        getDocs(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`))),
        getDocs(query(collection(db, "settlements"), where("month", "==", month)))
    ]);
    const v = { transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })), settlements: st.docs.map((d) => ({ id: d.id, ...d.data() })) };
    cacheSet("m:" + month, v);
    return v;
}

/** เดือนปัจจุบันฟังแบบสด (อ่านเฉพาะรายการที่เปลี่ยน) */
export function watchMonth(month, onData) {
    const state = { transactions: null, settlements: null };
    const emit = () => { if (state.transactions && state.settlements) onData({ ...state }); };
    const fail = (e) => onData({ error: e });
    const un = [
        onSnapshot(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`)), (s) => {
            state.transactions = s.docs.map((d) => ({ id: d.id, ...d.data() }));
            emit();
        }, fail),
        onSnapshot(query(collection(db, "settlements"), where("month", "==", month)), (s) => {
            state.settlements = s.docs.map((d) => ({ id: d.id, ...d.data() }));
            emit();
        }, fail)
    ];
    return () => un.forEach((u) => u());
}

/** เรียก API ของเรา ใช้รหัสล็อกอิน LINE (หมดอายุ ~1 ชั่วโมง ถ้าหมดจะให้ล็อกอินใหม่) */
export async function api(path, body) {
    if (loggedOut) throw expired();
    await Promise.race([liffReady, new Promise((_, rej) => setTimeout(() => rej(new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองใหม่อีกครั้ง")), 20000))]);
    const idToken = liff.getIDToken();
    const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, idToken })
    });
    let json = {};
    try { json = await res.json(); } catch (e) { /* ไม่ใช่ JSON */ }
    if (res.status === 401) throw expired(); // รหัสหมดอายุ: แจ้งให้ผู้ใช้กดเข้าสู่ระบบใหม่เอง ไม่ออกจากระบบและไม่โหลดหน้าใหม่ให้
    if (!res.ok) throw new Error(json.message || `เกิดข้อผิดพลาด (${res.status})`);
    return json;
}

/** รายการกระเป๋าของเดือนหนึ่ง (เดือนที่ผ่านมาแล้วจำไว้ 1 วัน เดือนนี้ถามใหม่ทุกครั้ง) */
export async function loadWallet(month, { current = false } = {}) {
    if (!current) {
        const hit = cacheGet("w:" + month, TTL_PAST);
        if (hit) return hit;
    }
    const r = await api("/api/shortcut-transaction", { action: "wallet-list", month });
    const items = Array.isArray(r.items) ? r.items : [];
    if (!current) cacheSet("w:" + month, items);
    return items;
}

/**
 * กระเป๋าของเดือนนี้ + เดือนที่ผ่านมาที่ยังไม่มีในแคช ด้วยการเรียก API ครั้งเดียว (เดิมเรียกทีละเดือน 6 ครั้ง)
 * คืน { "2026-11": [...], "2026-10": [...] } เฉพาะเดือนที่ถามมา
 */
export async function loadWalletMonths(months, nowMonth) {
    const out = {};
    const missingPast = [];
    for (const m of months) {
        if (m === nowMonth) continue;
        const hit = cacheGet("w:" + m, TTL_PAST);
        if (hit) out[m] = hit; else missingPast.push(m);
    }
    if (missingPast.length === 0) {
        out[nowMonth] = await loadWallet(nowMonth, { current: true });
        return out;
    }
    const since = missingPast.slice().sort()[0];
    const r = await api("/api/shortcut-transaction", { action: "wallet-list", since });
    const items = Array.isArray(r.items) ? r.items : [];
    out[nowMonth] = items.filter((x) => String(x.date || "").startsWith(nowMonth));
    for (const m of missingPast) {
        const list = items.filter((x) => String(x.date || "").startsWith(m));
        out[m] = list;
        cacheSet("w:" + m, list);
    }
    return out;
}

/** รหัสอุปกรณ์สำหรับ iPhone (Widget/คำสั่งลัด) สร้างใหม่ทับรหัสเก่า คืน { token, name } */
export async function makeDeviceToken() {
    const r = await api("/api/device-token", {});
    if (!r.success || !r.token) throw new Error(r.message || "สร้างรหัสไม่สำเร็จ");
    return r;
}

export async function revokeDeviceTokens() {
    const res = await fetch("/api/device-token", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken: liff.getIDToken() }) });
    let json = {};
    try { json = await res.json(); } catch (e) { /* ไม่ใช่ JSON */ }
    if (!res.ok || !json.success) throw new Error(json.message || "ยกเลิกรหัสไม่สำเร็จ");
    return json;
}

/** รายจ่ายส่วนตัวรายเดือนที่ตั้งไว้ (เห็นเฉพาะของตัวเอง) */
/** แก้ชื่อรายการ/หมวดของรายการส่วนตัวที่บันทึกแล้ว (ไม่แก้ยอดและวันที่) */
export async function updateWalletEntry(id, fields) {
    await api("/api/shortcut-transaction", { action: "wallet-update", id, ...fields });
}

export async function loadWalletTemplates() {
    const r = await api("/api/shortcut-transaction", { action: "wallet-template-list" });
    return Array.isArray(r.items) ? r.items : [];
}

export async function stopWalletTemplate(id) {
    await api("/api/shortcut-transaction", { action: "wallet-template-stop", id });
}

export async function addWallet(entry) {
    return api("/api/shortcut-transaction", { action: "wallet-add", ...entry, source: "web" });
}

/** ข้อมูลสมาชิกทั้งกลุ่ม (ชื่อ พร้อมเพย์ ชื่อจริง) ใช้ทำ QR และหน้าโปรไฟล์ จำไว้ 10 นาที */
export async function loadProfiles() {
    const hit = cacheGet("profiles", TTL_MEMBERS);
    if (hit) return hit;
    const s = await getDocs(collection(db, "members"));
    const byName = new Map();
    s.docs.forEach((d) => {
        const x = d.data();
        const name = upName(x.name);
        if (!name) return;
        const p = { id: d.id, name, promptpay: x.promptpay || "", realName: x.realName || "", englishName: x.englishName || "", hasLine: Boolean(x.lineUserId), pictureUrl: /^https?:\/\//i.test(x.pictureUrl || "") ? x.pictureUrl : "", role: x.role === "admin" ? "admin" : "member" };
        const cur = byName.get(name);
        if (!cur || (!cur.hasLine && p.hasLine) || (!cur.promptpay && p.promptpay) || (!cur.pictureUrl && p.pictureUrl)) byName.set(name, p);
    });
    const list = [...byName.values()];
    cacheSet("profiles", list);
    return list;
}

/** ล้างข้อมูลที่จำไว้ของเดือนหนึ่ง (หลังมีการแก้ไข) */
export function invalidateMonth(month) {
    try { localStorage.removeItem(KEY + "m:" + month); localStorage.removeItem(KEY + "w:" + month); } catch (e) { /* ไม่มีอะไร */ }
}
export function invalidateProfiles() {
    try { localStorage.removeItem(KEY + "profiles"); localStorage.removeItem(KEY + "members"); } catch (e) { /* ไม่มีอะไร */ }
}

export async function deleteWalletEntry(id) {
    return api("/api/shortcut-transaction", { action: "wallet-delete", id });
}

/** บิลรายเดือนที่ตั้งไว้ (เปิดอยู่เท่านั้น) */
export async function loadTemplates() {
    const snap = await getDocs(query(collection(db, "subscription_templates"), where("active", "==", true)));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function stopTemplate(id) {
    await updateDoc(doc(db, "subscription_templates", String(id)), { active: false, stoppedAt: new Date() });
}

/** แก้ชื่อรายการ/หมวดของบิล (ไม่แก้ยอดและคนหาร) */
export async function updateBillFields(id, fields) {
    const allowed = {};
    if (typeof fields.desc === "string") allowed.desc = fields.desc;
    if (typeof fields.icon === "string") allowed.icon = fields.icon;
    await updateDoc(doc(db, "transactions", String(id)), allowed);
}

/** ---------- จัดการสมาชิก (แอดมิน) ---------- */
export async function addMemberName(name) {
    await addDoc(collection(db, "members"), { name, createdAt: new Date().toISOString(), quickAdded: true, role: "member" });
    invalidateProfiles();
}

export async function updateMember(id, fields) {
    const data = { realName: String(fields.realName || ""), promptpay: String(fields.promptpay || ""), role: fields.role === "admin" ? "admin" : "member", realNameUpdatedAt: new Date(), promptpayUpdatedAt: new Date() };
    await updateDoc(doc(db, "members", String(id)), data);
    invalidateProfiles();
}

/** ลบสมาชิก เฉพาะเมื่อชื่อนี้ไม่อยู่ในบิลหรือประวัติเคลียร์เงินเลย (ไม่งั้นยอดหนี้ของคนอื่นจะคำนวณผิด) */
export async function deleteMemberIfUnused(p) {
    const name = p.name;
    const used = await Promise.all([
        getDocs(query(collection(db, "transactions"), where("payer", "==", name), limit(1))),
        getDocs(query(collection(db, "transactions"), where(new FieldPath("splits", name), ">=", 0), limit(1))),
        getDocs(query(collection(db, "settlements"), where("from", "==", name), limit(1))),
        getDocs(query(collection(db, "settlements"), where("to", "==", name), limit(1)))
    ]);
    if (used.some((s) => !s.empty)) throw new Error(`ลบ ${name} ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน (ถ้าลบ ยอดหนี้ของคนอื่นจะคำนวณผิด)`);
    await deleteDoc(doc(db, "members", String(p.id)));
    invalidateProfiles();
}

/** แอดมินยืนยันว่าคู่นี้โอนเคลียร์แล้ว (กรณีโอนนอกระบบ/ไม่มีสลิป) */
export async function manualSettle({ from, to, amount, month, adminName }) {
    await addDoc(collection(db, "settlements"), {
        status: "verified", month, from, to, amount: Number(amount), transactionIds: [],
        createdAt: new Date().toISOString(), verifiedByAdmin: true, adminId: adminName || "unknown"
    });
}

/** แอดมินลบประวัติเคลียร์เงิน (ยอดหนี้จะกลับมาค้างเหมือนเดิม) */
/** ย้ายรายการเคลียร์เงินไปเดือนอื่น (กรณีบันทึกผิดเดือน) */
export async function moveSettlementMonth(id, month) {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) throw new Error("เดือนไม่ถูกต้อง");
    await updateDoc(doc(db, "settlements", String(id)), { month });
}

export async function deleteSettlement(id) {
    await deleteDoc(doc(db, "settlements", String(id)));
}

/** แอดมินสั่งเตือนทุกคนที่ค้างชำระ (ส่งทาง LINE ส่วนตัวถึงลูกหนี้) คืนข้อความสรุป */
export async function remindAllDebtors() {
    const r = await api("/api/shortcut-transaction", { action: "remind-all" });
    return r.message || "สั่งเตือนแล้ว";
}

/** แอดมินลบข้อมูลทั้งเดือน (บิลของเดือนนั้น + รายการผ่อนที่เกี่ยวข้องทุกงวด + ประวัติเคลียร์เงินของเดือนนั้น) คืนจำนวนที่ลบ */
export async function clearMonthData(month) {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) throw new Error("เดือนไม่ถูกต้อง");
    const tx = await getDocs(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`)));
    const refs = new Map();
    tx.docs.forEach((d) => refs.set(d.id, d.ref));
    const groups = [...new Set(tx.docs.map((d) => d.data().groupId).filter(Boolean))];
    for (const g of groups) {
        const more = await getDocs(query(collection(db, "transactions"), where("groupId", "==", g)));
        more.docs.forEach((d) => refs.set(d.id, d.ref));
    }
    const st = await getDocs(query(collection(db, "settlements"), where("month", "==", month)));
    const all = [...refs.values(), ...st.docs.map((d) => d.ref)];
    for (let i = 0; i < all.length; i += 400) {
        const batch = writeBatch(db);
        all.slice(i, i + 400).forEach((r) => batch.delete(r));
        await batch.commit();
    }
    invalidateMonth(month);
    return { bills: refs.size, settlements: st.docs.length };
}

export async function deleteBill(id) {
    await deleteDoc(doc(db, "transactions", String(id)));
}

export async function saveMyProfile(memberId, fields) {
    await updateDoc(doc(db, "members", String(memberId)), { ...fields, realNameUpdatedAt: new Date(), promptpayUpdatedAt: new Date() });
    invalidateProfiles();
}

/** ส่งสลิปให้เซิร์ฟเวอร์ตรวจ (ผู้โอนคือผู้ล็อกอินเสมอ เซิร์ฟเวอร์ไม่เชื่อชื่อจากหน้าเว็บ) */
export async function verifySlip(file, { to, amount, month }) {
    const base64Image = await new Promise((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result).split(",")[1]);
        r.onerror = () => reject(new Error("อ่านไฟล์รูปไม่สำเร็จ"));
        r.readAsDataURL(file);
    });
    const idToken = liff.getIDToken();
    const res = await fetch("/api/verify-settlement-slip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, to, amount, month, base64Image })
    });
    let json = {};
    try { json = await res.json(); } catch (e) { /* ไม่ใช่ JSON */ }
    return { ok: res.ok && json.success === true, json, status: res.status };
}

export function logout() {
    try { liff.logout(); } catch (e) { /* ไม่มีอะไร */ }
    clearCache();
    location.href = "/";
}

/** บันทึกบิลหารกับเพื่อน (หนึ่งบิลหรือหลายงวด) และ template รายเดือน ในครั้งเดียว: สำเร็จทั้งหมดหรือไม่เลย */
export async function saveBill({ docs, template }) {
    const batch = writeBatch(db);
    docs.forEach((d) => batch.set(doc(collection(db, "transactions")), d));
    if (template) batch.set(doc(collection(db, "subscription_templates")), template);
    await batch.commit();
}
