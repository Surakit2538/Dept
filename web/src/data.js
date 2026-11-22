// การเชื่อมต่อ: LINE (LIFF), Firestore (เฉพาะคอลเลกชันข้อมูลกลุ่มที่กฎอนุญาต ต้องถือบัตรผ่านสมาชิก) และ API ของเรา (กระเป๋า)
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, query, where, doc, limit, FieldPath,
    getDocs as fsGetDocs, getDoc as fsGetDoc, onSnapshot as fsOnSnapshot, updateDoc as fsUpdateDoc, deleteDoc as fsDeleteDoc, addDoc as fsAddDoc, writeBatch as fsWriteBatch
} from "firebase/firestore";
import { getAuth, signInWithCustomToken, signOut } from "firebase/auth";
import { withPeople, settlementPeople } from "../../lib/privacy.mjs";
import { isClosedMonth, closedMonthMessage } from "../../lib/month-lock.mjs";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};
export const LIFF_ID = "2008948704-db2goT00";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const fbAuth = getAuth(app);

// ---------- บัตรผ่าน Firebase (firestore.rules ให้อ่าน/เขียนข้อมูลกลุ่มได้เฉพาะสมาชิกที่ถือบัตร) ----------
// เซิร์ฟเวอร์ออกบัตรหลังตรวจกับ LINE (lib/member-login.mjs) ทุกคำสั่งฐานข้อมูลรอ "ประตู" นี้ก่อน
// ประตูเปิดเมื่อ ล็อกอิน Firebase สำเร็จ / ไม่มีบัตร / เกิน 10 วินาที (ไม่ค้างตลอดไป ช่วงกฎยังเปิดเว็บทำงานเหมือนเดิม)
let openGateFn = () => {};
const fbGateP = new Promise((r) => { openGateFn = r; });
let gateOpened = false;
const gateTimer = setTimeout(() => openGate(), 10000);
function openGate() { if (!gateOpened) { gateOpened = true; clearTimeout(gateTimer); openGateFn(); } }
const fbGate = () => fbGateP;
const passUid = (memberId) => "m_" + memberId;

/** ล็อกอิน Firebase ด้วยบัตรที่เซิร์ฟเวอร์ออกให้ (ถ้าล็อกอินเป็นคนนี้อยู่แล้วไม่ต้องทำซ้ำ) */
async function useFirebasePass(token, memberId) {
    try {
        if (token && (!fbAuth.currentUser || fbAuth.currentUser.uid !== passUid(memberId))) await signInWithCustomToken(fbAuth, token);
    } catch (e) {
        console.warn("firebase sign-in:", e && e.message);
    }
    openGate();
}

// คำสั่งฐานข้อมูลที่ใช้ทั้งไฟล์: รอประตูก่อนทุกครั้ง
const getDocs = async (...a) => { await fbGate(); return fsGetDocs(...a); };
const getDoc = async (...a) => { await fbGate(); return fsGetDoc(...a); };
const updateDoc = async (...a) => { await fbGate(); return fsUpdateDoc(...a); };
const deleteDoc = async (...a) => { await fbGate(); return fsDeleteDoc(...a); };
const addDoc = async (...a) => { await fbGate(); return fsAddDoc(...a); };
function onSnapshot(q, next, fail) {
    let un = null;
    let stopped = false;
    fbGate().then(() => { if (!stopped) un = fsOnSnapshot(q, next, fail); });
    return () => { stopped = true; if (un) un(); };
}
function writeBatch(d) {
    const b = fsWriteBatch(d);
    const commit = b.commit.bind(b);
    b.commit = async () => { await fbGate(); return commit(); };
    return b;
}

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
export function relogin() {
    try {
        const cleanUri = location.origin + location.pathname;
        try { sessionStorage.setItem("dept_auth_hash", location.hash || "#home"); } catch (e) {}
        liff.login({ redirectUri: cleanUri });
    } catch (e) { /* ไม่มีอะไร */ }
}
function expired() {
    loggedOut = true;
    expiredListener();
    const err = new Error(EXPIRED_MSG);
    err.expired = true;
    return err;
}
const liffReady = new Promise((r) => { markLiffReady = r; });
let liffState = "pending"; // pending | in (ล็อกอิน LINE อยู่) | out (ไม่ได้ล็อกอิน LINE ในเบราว์เซอร์นี้)

// รหัสเว็บ: หลังล็อกอิน LINE สำเร็จ เว็บขอรหัสของตัวเองไว้ (อายุ 30 วัน) เพื่อ
//  - คอมไม่ต้องเข้าหน้า LINE ใหม่ทุกครั้งที่บัตร LINE หมดอายุ
//  - เรียก API ได้ทันที ไม่ต้องรอ LINE เริ่มระบบ และเซิร์ฟเวอร์ไม่ต้องถาม LINE ทุกครั้ง
// เก็บในเครื่องนี้เท่านั้น ล้างตอนออกจากระบบ ยกเลิกได้ด้วยปุ่ม "ยกเลิกรหัสอุปกรณ์ทั้งหมด"
const WEB_TOKEN_KEY = "dm:v2:webtoken";
const WEB_TOKEN_RENEW_MS = 20 * 24 * 60 * 60 * 1000; // ใช้มาเกิน 20 วันและล็อกอิน LINE อยู่: ขอใหม่ก่อนหมดอายุ
function readWebToken() {
    try {
        const v = JSON.parse(localStorage.getItem(WEB_TOKEN_KEY) || "null");
        return v && typeof v.token === "string" && v.token ? v : null;
    } catch (e) { return null; }
}
function saveWebToken(token) {
    try {
        if (token) localStorage.setItem(WEB_TOKEN_KEY, JSON.stringify({ token, t: Date.now() }));
        else localStorage.removeItem(WEB_TOKEN_KEY);
    } catch (e) { /* ปิดที่เก็บข้อมูล ไม่เป็นไร ใช้ LINE ตามเดิม */ }
}
async function ensureWebToken() {
    const cur = readWebToken();
    if (cur && Date.now() - cur.t < WEB_TOKEN_RENEW_MS) return;
    try {
        const idToken = liff.getIDToken();
        if (!idToken) return;
        const res = await fetch("/api/device-token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken, kind: "web" }) });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success && json.token) saveWebToken(json.token);
    } catch (e) { /* ไม่ได้ก็ใช้ LINE ตามเดิม */ }
}

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
 *  - { needLink: true, profile, candidates:[{id,name}] }             ยังไม่ผูกบัญชี ให้เลือกชื่อที่ผู้ดูแลเพิ่มไว้ (ปิดการสมัครเอง)
 *  - null                                                             กำลังพาไปหน้าล็อกอิน LINE
 */
// พารามิเตอร์ที่ LINE ต่อท้ายที่อยู่ตอนล็อกอินกลับมา รหัส code ใช้ได้ครั้งเดียว ถ้าค้างอยู่ในที่อยู่แล้วเปิดซ้ำ (เช่น คืนแท็บเดิม/รีเฟรช) จะล็อกอินไม่ผ่าน
const AUTH_PARAMS = ["code", "state", "liffClientId", "liffRedirectUri", "error", "error_description"];
const hasAuthParams = () => { const p = new URLSearchParams(location.search); return p.has("code") || p.has("liffClientId"); };
function cleanAuthParams() {
    try {
        const u = new URL(location.href);
        let changed = false;
        for (const k of AUTH_PARAMS) if (u.searchParams.has(k)) { u.searchParams.delete(k); changed = true; }
        let h = u.hash;
        if (h === "#_=_") { h = ""; changed = true; }
        if (changed) history.replaceState(null, "", u.pathname + (u.search || "") + h);
    } catch (e) { /* ไม่เป็นไร */ }
}
let loginDiag = "";
/** เหตุผลสั้นๆ ที่ล็อกอินไม่สำเร็จ (ไว้แสดงในแถบแจ้งเตือน ช่วยไล่ปัญหา) */
export function getLoginDiag() { return loginDiag; }

export async function signIn() {
    await waitForLiff();
    const hadCode = hasAuthParams();
    try {
        await liff.init({ liffId: LIFF_ID });
    } catch (e) {
        loginDiag = `เริ่มระบบ LINE ไม่สำเร็จ: ${(e && e.message) || e}`;
        // รหัส code เก่าค้างในที่อยู่: ล้างออกแล้วลองใหม่ครั้งเดียว (ใช้บัตรที่เก็บไว้ในเครื่องแทน)
        if (hadCode) { cleanAuthParams(); await liff.init({ liffId: LIFF_ID }); } else throw e;
    }
    cleanAuthParams();
    if (!liff.isLoggedIn()) {
        liffState = "out";
        // เคยเข้าแล้ว (มีตัวตนที่จำไว้): ไม่เด้งไปหน้าล็อกอินทันที ให้ดูข้อมูลที่จำไว้ต่อ แล้วแจ้งให้กดเข้าสู่ระบบใหม่เอง
        loginDiag = loginDiag || (hadCode ? "ล็อกอินกลับมาแล้วแต่ LINE ไม่ยืนยันบัตร (ลองกดเข้าสู่ระบบใหม่อีกครั้ง)" : "บัตรล็อกอิน LINE ในเบราว์เซอร์นี้หมดอายุหรือยังไม่มี");
        const cached = getCachedUser();
        // มีรหัสเว็บที่จำไว้: ใช้ต่อได้เลยโดยไม่ต้องเข้าหน้า LINE (อ่านข้อมูลสมาชิกล่าสุดมาแทนที่ที่จำไว้)
        if (cached && readWebToken() && !hadCode) {
            try {
                const m = await getDoc(doc(db, "members", String(cached.memberId)));
                if (m.exists()) return userFromMember(m.id, m.data(), m.data().lineUserId || "");
            } catch (e) { /* อ่านไม่ได้ ใช้ที่จำไว้ */ }
            return cached;
        }
        if (cached && !hadCode) { loggedOut = true; return { needLogin: true }; }
        const cleanUri = location.origin + location.pathname;
        try { sessionStorage.setItem("dept_auth_hash", location.hash || "#home"); } catch (e) {}
        liff.login({ redirectUri: cleanUri });
        return null; // กำลังพาไปหน้าล็อกอิน
    }
    liffState = "in";
    markLiffReady();
    ensureWebToken(); // จำการเข้าสู่ระบบไว้สำหรับครั้งหน้า (ไม่รอผล)
    try {
        const savedHash = sessionStorage.getItem("dept_auth_hash");
        if (savedHash) {
            sessionStorage.removeItem("dept_auth_hash");
            if (!location.hash || location.hash === "#" || location.hash === "#_=_") {
                location.hash = savedHash;
            }
        }
    } catch (e) { /* ไม่เป็นไร */ }
    // เซิร์ฟเวอร์ตรวจกับ LINE แล้วออกบัตรผ่าน Firebase ให้ (ยังไม่ผูกบัญชี = ได้รายชื่อที่ผู้ดูแลเพิ่มไว้ให้เลือก ไม่สมัครเอง)
    const r = await lineLogin({ action: "login" });
    if (r.member) {
        await useFirebasePass(r.firebaseToken, r.member.id);
        return userFromMember(r.member.id, r.member, r.member.lineUserId);
    }
    if (r.needLink) return { needLink: true, profile: r.profile || {}, candidates: r.candidates || [], suggest: r.suggest || "" };
    throw new Error(r.message || "เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง");
}

/** เรียก /api/device-token ด้วยบัตร LINE (action "login" | "link") คืน JSON เสมอ (มี message เมื่อไม่สำเร็จ) */
async function lineLogin(body) {
    const idToken = liff.getIDToken();
    if (!idToken) throw new Error("ยังเข้าสู่ระบบ LINE ไม่เสร็จ ลองรีเฟรชหน้านี้");
    const res = await fetch("/api/device-token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, idToken }) });
    const json = await res.json().catch(() => ({}));
    if (!res.ok && !json.message) json.message = `เข้าสู่ระบบไม่สำเร็จ (${res.status})`;
    return json;
}

/** ผูกบัญชี LINE นี้เข้ากับชื่อที่ผู้ดูแลเพิ่มไว้ (ไม่เปลี่ยนชื่อในระบบ ประวัติบิลทั้งหมดจึงอยู่ครบ) */
export async function linkMember(profile, memberId) {
    const r = await lineLogin({ action: "link", memberId });
    if (!r.member) throw new Error(r.message || "ผูกบัญชีไม่สำเร็จ ลองใหม่อีกครั้ง");
    invalidateProfiles();
    await useFirebasePass(r.firebaseToken, r.member.id);
    return userFromMember(r.member.id, r.member, r.member.lineUserId);
}

const upName = (n) => String(n || "").replace(/\s+/g, " ").trim().toUpperCase();

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
const TTL_USER = 30 * 24 * 60 * 60 * 1000; // เท่ากับอายุรหัสเว็บ
const TTL_SNAP = 7 * 24 * 60 * 60 * 1000;

/** ตัวตนที่จำไว้ (ใช้แสดงแอปทันที ระหว่างนั้นระบบยืนยันกับ LINE เบื้องหลัง) */
export function getCachedUser() {
    const u = cacheGet("user", TTL_USER);
    return u && u.name && u.memberId ? u : null;
}
export function setCachedUser(u) { if (u && u.name && u.memberId) cacheSet("user", u); }

// ---------- ซ่อนข้อมูลของคนอื่น (lib/privacy.mjs) ----------
// สถานะจากเซิร์ฟเวอร์ { hide, super } จำไว้ในเครื่อง (ไม่หมดอายุ แต่ถามใหม่ทุกครั้งที่เปิดแอป)
// ขอบเขตการอ่าน: null = อ่านทั้งกลุ่ม (ยังไม่เปิดซ่อน หรือผู้ดูแลหลักเปิด ดูข้อมูลของทุกคน) / ชื่อ = เฉพาะที่มีชื่อนี้ใน people
let scope = null;
const scopeKey = () => scope || "*";
export function readPrivacy() { return cacheGet("privacy", Infinity); }
export function readSeeAll() { return cacheGet("seeall", Infinity) === true; }
export function setSeeAll(on) { cacheSet("seeall", Boolean(on)); }
/** ขอบเขตการอ่านของคนนี้ ตามสถานะซ่อนและสวิตช์ ดูข้อมูลของทุกคน */
export function readScopeFor(name, privacy = readPrivacy(), seeAll = readSeeAll()) {
    if (!privacy || !privacy.hide) return null;
    if (privacy.super && seeAll) return null;
    return upName(name) || null;
}
export function setReadScope(name) { scope = name || null; }
const mineTx = () => (scope ? [where("people", "array-contains", scope)] : []);

/** ภาพล่าสุดของข้อมูลเดือนนี้ (เก็บในเครื่องของเจ้าของ แยกตามชื่อและขอบเขตการอ่าน ล้างตอนออกจากระบบ) */
export function loadSnapshot(name, month, sc = scopeKey()) {
    const v = cacheGet(`snap:${name}:${sc}:${month}`, TTL_SNAP);
    return v && Array.isArray(v.transactions) && Array.isArray(v.settlements) && Array.isArray(v.wallet) ? v : null;
}
export function saveSnapshot(name, month, part) {
    cacheSet(`snap:${name}:${scopeKey()}:${month}`, { transactions: part.transactions, settlements: part.settlements, wallet: part.wallet });
}

/** รายชื่อสมาชิกที่จำไว้ (ไม่สนอายุ ใช้แสดงก่อน แล้วค่อยโหลดใหม่) */
export function getStaleMembers() {
    return cacheGet("members", Infinity);
}

export function clearCache() {
    try { Object.keys(localStorage).filter((k) => k.startsWith(KEY)).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* ไม่มีอะไร */ }
}


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
    const key = `m:${scopeKey()}:${month}`;
    const hit = cacheGet(key, TTL_PAST);
    if (hit) return hit;
    const [tx, st] = await Promise.all([
        getDocs(query(collection(db, "transactions"), ...mineTx(), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`))),
        getDocs(query(collection(db, "settlements"), ...mineTx(), where("month", "==", month)))
    ]);
    const v = { transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })), settlements: st.docs.map((d) => ({ id: d.id, ...d.data() })) };
    cacheSet(key, v);
    return v;
}

/** เดือนปัจจุบันฟังแบบสด (อ่านเฉพาะรายการที่เปลี่ยน) */
export function watchMonth(month, onData) {
    const state = { transactions: null, settlements: null };
    const emit = () => { if (state.transactions && state.settlements) onData({ ...state }); };
    const fail = (e) => onData({ error: e });
    const un = [
        onSnapshot(query(collection(db, "transactions"), ...mineTx(), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`)), (s) => {
            state.transactions = s.docs.map((d) => ({ id: d.id, ...d.data() }));
            emit();
        }, fail),
        onSnapshot(query(collection(db, "settlements"), ...mineTx(), where("month", "==", month)), (s) => {
            state.settlements = s.docs.map((d) => ({ id: d.id, ...d.data() }));
            emit();
        }, fail)
    ];
    return () => un.forEach((u) => u());
}

/** เรียก API ของเรา ใช้รหัสล็อกอิน LINE (หมดอายุ ~1 ชั่วโมง ถ้าหมดจะให้ล็อกอินใหม่) */
export async function api(path, body, { line = false } = {}) {
    const wt = line ? null : readWebToken();
    if (wt) {
        const res = await fetch(path, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + wt.token },
            body: JSON.stringify(body)
        });
        let json = {};
        try { json = await res.json(); } catch (e) { /* ไม่ใช่ JSON */ }
        if (res.status !== 401) {
            if (!res.ok) throw new Error(json.message || `เกิดข้อผิดพลาด (${res.status})`);
            return json;
        }
        saveWebToken(""); // รหัสเว็บหมดอายุหรือถูกยกเลิก: กลับไปใช้ล็อกอิน LINE
    }
    if (loggedOut || liffState === "out") throw expired();
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
    const r = await api("/api/device-token", {}, { line: true }); // สร้างรหัส iPhone ต้องยืนยันด้วย LINE จริงเสมอ
    if (!r.success || !r.token) throw new Error(r.message || "สร้างรหัสไม่สำเร็จ");
    return r;
}

export async function revokeDeviceTokens() {
    if (liffState !== "in") throw expired();
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

/** จัดหมวดหลายรายการพร้อมกัน items = [{ id, icon }] คืนจำนวนที่แก้สำเร็จ */
export async function categorizeWalletEntries(items) {
    let n = 0;
    for (let i = 0; i < items.length; i += 100) { // เซิร์ฟเวอร์รับครั้งละไม่เกิน 100 รายการ
        const r = await api("/api/shortcut-transaction", { action: "wallet-update", items: items.slice(i, i + 100) });
        n += Number(r.updated) || 0;
    }
    return n;
}

export async function loadWalletTemplates() {
    const r = await api("/api/shortcut-transaction", { action: "wallet-template-list" });
    return Array.isArray(r.items) ? r.items : [];
}

/** แก้รายจ่ายรายเดือนที่ตั้งไว้ (ชื่อ ยอด หมวด) fields = { desc?, amount?, icon? } */
export async function updateWalletTemplate(id, fields) {
    await api("/api/shortcut-transaction", { action: "wallet-template-update", id, ...fields });
    invalidateBillSchedule();
}

export async function stopWalletTemplate(id) {
    await api("/api/shortcut-transaction", { action: "wallet-template-stop", id });
    invalidateBillSchedule();
}

// ---------- งบรายเดือน + เป้าเก็บเงิน (เอกสารเดียวต่อคน ผ่าน API เท่านั้น) ทุกคำสั่งคืนแผนล่าสุด ----------
const planOf = (r) => (r && r.plan && typeof r.plan === "object" ? r.plan : { budget: { total: 0, cats: {} }, months: {}, goals: [] });
export async function loadPlan() {
    const hit = cacheGet("plan", TTL_MEMBERS);
    if (hit) return hit;
    const p = planOf(await api("/api/shortcut-transaction", { action: "plan-get" }));
    cacheSet("plan", p);
    return p;
}
const planCall = async (body) => { const p = planOf(await api("/api/shortcut-transaction", body)); cacheSet("plan", p); return p; };
/** scope "default" = ทุกเดือน, "month" = เฉพาะเดือน month · clear = กลับไปใช้งบปกติ */
export const saveBudget = ({ scope, month, total, cats, clear = false }) => planCall({ action: "plan-budget-set", scope, month, total, cats, clear });
export const saveGoal = (goal) => planCall({ action: "goal-save", ...goal });
export const moveGoal = (id, amount, dir) => planCall({ action: "goal-move", id, amount, dir });
export const deleteGoal = (id) => planCall({ action: "goal-delete", id });

// ---------- บัตรเครดิต (รอบบิล + เตือนก่อนครบกำหนด) เฉพาะคนที่ผู้ดูแลเปิดให้ ผ่าน API เท่านั้น ----------
const TTL_CARDS = 5 * 60 * 1000;
/** บัตรพร้อมยอดรอบ (ยอดเปลี่ยนตามรายการที่บันทึก จึงจำไว้แค่ 5 นาที) คืน { enabled, cards } */
export async function loadCards({ force = false } = {}) {
    const hit = force ? null : cacheGet("cards", TTL_CARDS);
    if (hit) return hit;
    const r = await api("/api/shortcut-transaction", { action: "card-list" });
    const v = { enabled: r.enabled === true, cards: Array.isArray(r.cards) ? r.cards : [] };
    cacheSet("cards", v);
    return v;
}
export function invalidateCards() {
    try { localStorage.removeItem(KEY + "cards"); } catch (e) { /* ไม่เป็นไร */ }
}
const cardCall = async (body) => { const r = await api("/api/shortcut-transaction", body); invalidateCards(); return r; };
/** เพิ่มบัตร (ไม่มี id) หรือแก้บัตร card = { id?, bank, last4, color, statementDay, dueDay } */
export const saveCard = (card) => cardCall({ action: "card-save", ...card });
export const deleteCard = (id) => cardCall({ action: "card-delete", id });
/** กด จ่ายแล้ว (paid=true) หรือยกเลิก ของรอบ key */
export const setCardPaid = (id, paid, key) => cardCall({ action: "card-paid", id, paid, key });

/** ผู้ดูแล: เปิด/ปิดเตือนบัตรเครดิตให้สมาชิก (แก้ทุกเอกสารที่ชื่อเดียวกัน) */
export async function setCardAlerts(p, on) {
    for (const id of p.ids && p.ids.length ? p.ids : [p.id]) await updateDoc(doc(db, "members", String(id)), { cardAlerts: Boolean(on) });
    invalidateProfiles();
}
/** ผู้ดูแล: ข้อความ LINE ที่ส่งหาเองได้ต่อเดือน { limit, used } หรือ null */
export async function loadLineQuota() {
    const r = await api("/api/shortcut-transaction", { action: "line-quota" });
    return r && r.quota ? r.quota : null;
}

export async function addWallet(entry) {
    if (entry && entry.recurring) invalidateBillSchedule();
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
        const p = { id: d.id, name, promptpay: x.promptpay || "", realName: x.realName || "", englishName: x.englishName || "", hasLine: Boolean(x.lineUserId), pictureUrl: /^https?:\/\//i.test(x.pictureUrl || "") ? x.pictureUrl : "", role: x.role === "admin" ? "admin" : "member", cardAlerts: x.cardAlerts === true, ids: [d.id] };
        const cur = byName.get(name);
        // ชื่อซ้ำหลายเอกสาร: เก็บรหัสทุกเอกสารไว้ (เปิด/ปิดเตือนบัตรต้องแก้ทุกเอกสาร) และนับว่าเปิดถ้ามีเอกสารไหนเปิด
        if (cur) { p.ids = [...cur.ids, d.id]; p.cardAlerts = p.cardAlerts || cur.cardAlerts; }
        if (!cur || (!cur.hasLine && p.hasLine) || (!cur.promptpay && p.promptpay) || (!cur.pictureUrl && p.pictureUrl)) byName.set(name, p);
        else { cur.ids = p.ids; cur.cardAlerts = p.cardAlerts; }
    });
    const list = [...byName.values()];
    cacheSet("profiles", list);
    return list;
}

/** ล้างข้อมูลที่จำไว้ของเดือนหนึ่ง (หลังมีการแก้ไข) */
export function invalidateMonth(month) {
    try {
        Object.keys(localStorage).filter((k) => k.startsWith(KEY + "m:") && k.endsWith(":" + month)).forEach((k) => localStorage.removeItem(k));
        localStorage.removeItem(KEY + "w:" + month);
    } catch (e) { /* ไม่มีอะไร */ }
    delete planMem[month];
}
export function invalidateProfiles() {
    try { localStorage.removeItem(KEY + "profiles"); localStorage.removeItem(KEY + "members"); } catch (e) { /* ไม่มีอะไร */ }
}

export async function deleteWalletEntry(id) {
    return api("/api/shortcut-transaction", { action: "wallet-delete", id });
}

/** ยืนยันรายการที่บันทึกอัตโนมัติ (ครั้งละไม่เกิน 50) คืนจำนวนที่ยืนยัน */
export async function confirmWalletEntries(ids) {
    let n = 0;
    for (let i = 0; i < ids.length; i += 50) {
        const r = await api("/api/shortcut-transaction", { action: "wallet-confirm", ids: ids.slice(i, i + 50) });
        n += Number(r.confirmed) || 0;
    }
    return n;
}

/** รายการกระเป๋ารายการเดียว (ใช้กับลิงก์จากแจ้งเตือน) */
export async function fetchWalletEntry(id) {
    const r = await api("/api/shortcut-transaction", { action: "wallet-get", id });
    return r.item || null;
}

/** ลบหลายรายการส่วนตัวพร้อมกัน (เซิร์ฟเวอร์รับครั้งละไม่เกิน 50) คืนจำนวนที่ลบได้และที่ลบไม่ได้ */
export async function deleteWalletEntries(ids) {
    let deleted = 0;
    let failed = 0;
    for (let i = 0; i < ids.length; i += 50) {
        const r = await api("/api/shortcut-transaction", { action: "wallet-delete-many", ids: ids.slice(i, i + 50) });
        deleted += Number(r.deleted) || 0;
        failed += Array.isArray(r.failed) ? r.failed.length : 0;
    }
    return { deleted, failed };
}

/** บิลรายเดือนที่ตั้งไว้ (เปิดอยู่เท่านั้น) */
export async function loadTemplates() {
    const snap = await getDocs(query(collection(db, "subscription_templates"), ...mineTx(), where("active", "==", true)));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * แม่แบบบิลรายเดือนสำหรับปฏิทินบิล: กลุ่ม (Firestore) + ส่วนตัว (API) จำไว้ 10 นาที
 * ล้างเองเมื่อเพิ่ม/แก้/หยุดบิลรายเดือน
 */
export async function loadBillSchedule() {
    const key = "billsched:" + scopeKey();
    const hit = cacheGet(key, TTL_MEMBERS);
    if (hit) return hit;
    const [group, personal] = await Promise.all([loadTemplates(), loadWalletTemplates().catch(() => [])]);
    const v = {
        group: group.map((t) => ({ id: t.id, desc: t.desc, amount: t.amount, billingDay: t.billingDay, payer: t.payer, splits: t.splits, icon: t.icon, active: t.active, every: t.every, startMonth: t.startMonth })),
        personal: personal.map((t) => ({ id: t.id, desc: t.desc, amount: t.amount, billingDay: t.billingDay, icon: t.icon, every: t.every, startMonth: t.startMonth }))
    };
    cacheSet(key, v);
    return v;
}
export function invalidateBillSchedule() {
    try { Object.keys(localStorage).filter((k) => k.startsWith(KEY + "billsched")).forEach((k) => localStorage.removeItem(k)); } catch (e) { /* ไม่เป็นไร */ }
}

/**
 * ยอด "ใครต้องโอนให้ใคร" จากเซิร์ฟเวอร์ (ใช้เมื่อเปิดซ่อนข้อมูลแล้ว เพราะเครื่องเราไม่มีบิลของคนอื่นให้คำนวณ)
 * ถามสถานะซ่อนไปด้วยทุกครั้ง: คืน { hide, super, plans: { "2026-11": [{from,to,amount}] } }
 * จำไว้ในหน่วยความจำ: เดือนนี้ 5 นาที (หรือจนกว่าบิลของเราเปลี่ยน) เดือนที่ผ่านแล้ว 1 วัน
 */
const planMem = {};
const planFlight = {};
export async function loadClearPlan(months, { nowMonth = "", force = false, all = false } = {}) {
    const fresh = (m) => planMem[m] && planMem[m].all === all && Date.now() - planMem[m].t < (m === nowMonth ? 5 * 60 * 1000 : TTL_PAST);
    const need = force ? months : months.filter((m) => !fresh(m));
    // ถามซ้ำพร้อมกัน (ตอนเปิดแอปมีสองจุดถามเดือนนี้) ใช้คำตอบเดียวกัน
    const key = JSON.stringify([need, all]);
    if (!planFlight[key]) planFlight[key] = api("/api/shortcut-transaction", { action: "clear-plan", months: need, all }).finally(() => { delete planFlight[key]; });
    const r = await planFlight[key];
    const privacy = { hide: r.hide === true, super: r.super === true };
    cacheSet("privacy", privacy);
    Object.entries(r.plans || {}).forEach(([m, lines]) => { planMem[m] = { t: Date.now(), all, lines }; });
    const plans = {};
    months.forEach((m) => { if (planMem[m] && planMem[m].all === all) plans[m] = planMem[m].lines; });
    return { ...privacy, plans };
}

/** ผู้ดูแลหลัก: เปิด/ปิดซ่อนข้อมูลของคนอื่น */
export async function setPrivacyHide(hide) {
    const r = await api("/api/shortcut-transaction", { action: "privacy-set", hide: Boolean(hide) });
    const cur = readPrivacy() || {};
    cacheSet("privacy", { ...cur, hide: r.hide === true });
    return r.message;
}

/** ผู้ดูแลหลัก: เติมป้ายชื่อคนที่เกี่ยวข้องให้ข้อมูลเก่า (กดต่อเองจนครบ ไม่เกิน 5 รอบ) */
export async function backfillPeople() {
    let updated = 0;
    let checked = 0;
    for (let i = 0; i < 5; i++) {
        const r = await api("/api/shortcut-transaction", { action: "privacy-backfill" });
        updated += Number(r.updated) || 0;
        checked = Math.max(checked, Number(r.checked) || 0);
        if (r.done) return { done: true, updated, checked };
    }
    return { done: false, updated, checked };
}

/**
 * ตรวจดัชนีที่การอ่านแบบเฉพาะของตัวเองต้องใช้ (Firestore สร้างให้ฟรี แต่ต้องกดลิงก์สร้างครั้งแรก)
 * คืน [{ key, label, ok, link }] link = ลิงก์หน้าสร้างดัชนีใน Firebase ที่ได้จากข้อความผิดพลาด
 */
export async function checkPrivacyIndexes(name) {
    const me = upName(name);
    const tries = [
        ["tx", "บิล", query(collection(db, "transactions"), where("people", "array-contains", me), where("date", ">=", "2000-01-01"), where("date", "<=", "2999-12-31"), limit(1))],
        ["st", "ประวัติเคลียร์เงิน", query(collection(db, "settlements"), where("people", "array-contains", me), where("month", "==", "2000-01"), limit(1))],
        ["tpl", "บิลรายเดือน", query(collection(db, "subscription_templates"), where("people", "array-contains", me), where("active", "==", true), limit(1))]
    ];
    return Promise.all(tries.map(async ([key, label, q]) => {
        try { await getDocs(q); return { key, label, ok: true, link: "" }; } catch (e) {
            const msg = String((e && e.message) || "");
            const m = msg.match(/https:\/\/console\.firebase\.google\.com\S+/);
            return { key, label, ok: false, link: m ? m[0] : "", error: e && e.code === "failed-precondition" ? "" : msg.slice(0, 120) };
        }
    }));
}

/** แก้บิลกลุ่มรายเดือน (คนจ่ายหรือผู้ดูแล): ชื่อ หมวด วันที่ · ยอดแก้ไม่ได้เพราะแบ่งส่วนคนหารไว้แล้ว */
export async function updateTemplate(id, fields) {
    const data = {};
    if (typeof fields.desc === "string") data.desc = fields.desc.trim().slice(0, 100) || "บิลรายเดือน";
    if (typeof fields.icon === "string") data.icon = fields.icon;
    if (fields.billingDay !== undefined) data.billingDay = Math.min(31, Math.max(1, Math.round(Number(fields.billingDay)) || 1));
    if (fields.every !== undefined) {
        data.every = [1, 3, 6, 12].includes(Number(fields.every)) ? Number(fields.every) : 1;
        data.startMonth = Math.min(12, Math.max(1, Math.round(Number(fields.startMonth)) || 1));
    }
    await updateDoc(doc(db, "subscription_templates", String(id)), data);
    invalidateBillSchedule();
}

export async function stopTemplate(id) {
    await updateDoc(doc(db, "subscription_templates", String(id)), { active: false, stoppedAt: new Date() });
    invalidateBillSchedule();
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
        status: "verified", month, from, to, people: settlementPeople({ from, to }), amount: Number(amount), transactionIds: [],
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

/** ผู้ดูแล: สถานะงานอัตโนมัติ { debt, subs, cards } (แต่ละอันเป็น null ได้ถ้ายังไม่เคยทำงาน) */
export async function loadAdminStatus() {
    const r = await api("/api/shortcut-transaction", { action: "admin-status" });
    return r.jobs || { debt: null, subs: null, cards: null };
}
/** ผู้ดูแล: ส่งการ์ด "ใครต้องโอนให้ใคร" ของเดือนนี้เข้ากลุ่ม LINE คืนข้อความผลลัพธ์ */
export async function sendGroupSummary() {
    const r = await api("/api/shortcut-transaction", { action: "group-summary" });
    return r.message || "ส่งแล้ว";
}

/** แอดมินสั่งเตือนทุกคนที่ค้างชำระ (ส่งทาง LINE ส่วนตัวถึงลูกหนี้) คืนข้อความสรุป */
export async function remindAllDebtors(month = "") {
    const r = await api("/api/shortcut-transaction", { action: "remind-all", month });
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

/** เปลี่ยนหมวดของหลายบิลพร้อมกัน (ไม่แก้ยอดและคนหาร) */
export async function updateBillIcons(ids, icon) {
    for (let i = 0; i < ids.length; i += 10) await Promise.all(ids.slice(i, i + 10).map((id) => updateBillFields(id, { icon })));
    return ids.length;
}

/** ลบหลายบิลพร้อมกัน */
export async function deleteBills(ids) {
    for (let i = 0; i < ids.length; i += 10) await Promise.all(ids.slice(i, i + 10).map((id) => deleteBill(id)));
    return ids.length;
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
    if (liffState !== "in") throw expired(); // ตรวจสลิปต้องยืนยันด้วย LINE
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
    try { signOut(fbAuth); } catch (e) { /* ไม่มีอะไร */ }
    clearCache();
    location.href = "/";
}

/** บันทึกบิลหารกับเพื่อน (หนึ่งบิลหรือหลายงวด) และ template รายเดือน ในครั้งเดียว: สำเร็จทั้งหมดหรือไม่เลย */
export async function saveBill({ docs, template }) {
    // เดือนที่ปิดยอดแล้ว เพิ่มบิลไม่ได้ (ยกเว้นผู้ดูแลหลัก) กฎ Firestore ก็ห้ามแบบเดียวกัน บอกให้ชัดก่อนส่ง
    const old = docs.find((d) => isClosedMonth(d.date, Date.now()));
    if (old && !(readPrivacy() || {}).super) throw new Error(closedMonthMessage(old.date));
    const batch = writeBatch(db);
    docs.forEach((d) => batch.set(doc(collection(db, "transactions")), withPeople("transactions", d)));
    if (template) batch.set(doc(collection(db, "subscription_templates")), withPeople("subscription_templates", template));
    await batch.commit();
    if (template) invalidateBillSchedule();
}

// ---------- เริ่มบัตรผ่านตอนเปิดเว็บ (อยู่ท้ายไฟล์ เพราะต้องใช้ตัวแปรแคชที่ประกาศไว้ข้างบน) ----------
(async () => {
    try {
        if (typeof fbAuth.authStateReady === "function") await fbAuth.authStateReady();
        // Firebase จำบัตรของสมาชิกไว้ในเครื่องแล้ว: ใช้ได้เลย (ถ้าล็อกอิน LINE เป็นคนอื่น signIn() จะเปลี่ยนบัตรให้เอง)
        if (fbAuth.currentUser) return openGate();
        const wt = readWebToken();
        if (!wt) return; // ไม่มีรหัสเว็บ: รอ signIn() ด้วย LINE (หรือประตูเปิดเองเมื่อครบ 10 วินาที)
        const res = await fetch("/api/device-token?firebase=1", { headers: { Authorization: "Bearer " + wt.token } });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success && json.member) await useFirebasePass(json.firebaseToken, json.member.id);
    } catch (e) {
        console.warn("firebase pass:", e && e.message);
    }
})();
