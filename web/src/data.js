// การเชื่อมต่อ: LINE (LIFF), Firestore (เฉพาะคอลเลกชันข้อมูลกลุ่มที่กฎอนุญาต) และ API ของเรา (กระเป๋า)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

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

/** ฟังข้อมูลกลุ่มตั้งแต่เดือน since เป็นต้นไปแบบสด + รายชื่อสมาชิก + ประวัติเคลียร์เงินทั้งหมด คืนฟังก์ชันยกเลิก */
export function watchGroup(since, onData) {
    const state = { members: null, transactions: null, settlements: null };
    const emit = () => { if (state.members && state.transactions && state.settlements) onData({ ...state }); };
    const fail = (e) => onData({ error: e });
    const un = [
        onSnapshot(collection(db, "members"), (s) => {
            state.members = [...new Set(s.docs.map((d) => String(d.data().name || "").replace(/\s+/g, " ").trim().toUpperCase()).filter(Boolean))];
            emit();
        }, fail),
        onSnapshot(query(collection(db, "transactions"), where("date", ">=", `${since}-01`)), (s) => {
            state.transactions = s.docs.map((d) => ({ id: d.id, ...d.data() }));
            emit();
        }, fail),
        onSnapshot(collection(db, "settlements"), (s) => {
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

export async function loadWallet(since) {
    const r = await api("/api/shortcut-transaction", { action: "wallet-list", since });
    return Array.isArray(r.items) ? r.items : [];
}

export async function addWallet(entry) {
    return api("/api/shortcut-transaction", { action: "wallet-add", ...entry, source: "web" });
}
