// การเชื่อมต่อ: LINE (LIFF), Firestore (เฉพาะคอลเลกชันข้อมูลกลุ่มที่กฎอนุญาต) และ API ของเรา (กระเป๋า)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

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

/** เข้าสู่ระบบด้วย LINE แล้วหาสมาชิกที่ผูกกับบัญชีนี้ คืนค่า { name, memberId, pictureUrl, isAdmin } หรือโยน error ที่อ่านรู้เรื่อง */
export async function signIn() {
    if (typeof liff === "undefined") throw new Error("โหลดระบบ LINE ไม่สำเร็จ ลองรีเฟรชหน้านี้");
    await liff.init({ liffId: LIFF_ID });
    if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: location.href });
        return null; // กำลังพาไปหน้าล็อกอิน
    }
    const profile = await liff.getProfile();
    const snap = await getDocs(query(collection(db, "members"), where("lineUserId", "==", profile.userId)));
    if (snap.empty) throw new Error("ยังไม่พบบัญชีสมาชิกที่ผูกกับ LINE นี้ กรุณาเข้าใช้งานจากหน้าเว็บเดิมครั้งแรกก่อน");
    const m = snap.docs.find((d) => d.data().realName) || snap.docs[0];
    const x = m.data();
    return {
        name: String(x.name || "").replace(/\s+/g, " ").trim().toUpperCase(),
        memberId: m.id,
        pictureUrl: /^https:\/\//i.test(x.pictureUrl || "") ? x.pictureUrl : "",
        isAdmin: x.role === "admin" || profile.userId === "U0d739eea39c312e11c487e22861920d1"
    };
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
    const idToken = liff.getIDToken();
    const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, idToken })
    });
    let json = {};
    try { json = await res.json(); } catch (e) { /* ไม่ใช่ JSON */ }
    if (res.status === 401) {
        // รหัสหมดอายุ: ออกจากระบบแล้วพาไปล็อกอินใหม่
        try { liff.logout(); } catch (e) { /* ไม่มีอะไร */ }
        location.reload();
        throw new Error("การเข้าสู่ระบบหมดอายุ กำลังพาไปล็อกอินใหม่");
    }
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
        const p = { id: d.id, name, promptpay: x.promptpay || "", realName: x.realName || "", englishName: x.englishName || "", hasLine: Boolean(x.lineUserId) };
        const cur = byName.get(name);
        if (!cur || (!cur.hasLine && p.hasLine) || (!cur.promptpay && p.promptpay)) byName.set(name, p);
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
    location.href = "/app/";
}
