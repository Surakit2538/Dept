/**
 * ตัวกลางเรียกฐานข้อมูล Firestore ให้โค้ดฝั่งเซิร์ฟเวอร์ใช้ชุดฟังก์ชันเดียวกัน (collection, doc, query, where, getDocs, ...)
 * ได้ทั้งสองโหมด:
 *  - โหมดเดิม: firebase client SDK (ไม่มีกุญแจ) — ใช้เมื่อไม่ได้ตั้ง FIREBASE_SERVICE_ACCOUNT
 *  - โหมดแอดมิน: firebase-admin (มีกุญแจ) — ข้ามกฎความปลอดภัย จึงปิดกฎไม่ให้เบราว์เซอร์อ่านข้อมูลส่วนตัวได้
 * โหมดดูจากชนิดของ db ที่ส่งเข้ามา (db ของแอดมินมีเมธอด .collection) จึงสลับโหมดได้โดยไม่ต้องแก้โค้ดที่เรียกใช้
 */
import * as client from "firebase/firestore";

let adminFieldValue = null;

/** เรียกครั้งเดียวตอนสร้าง db แบบแอดมิน เพื่อให้ serverTimestamp() ใช้ชนิดของแอดมิน */
export function registerAdminFieldValue(FieldValue) {
    adminFieldValue = FieldValue;
}

const isClientObj = (o) => Boolean(o) && typeof o.type === "string" && (o.type === "document" || o.type === "collection" || o.type === "query");
const isAdminDb = (db) => Boolean(db) && typeof db.collection === "function" && typeof db.batch === "function";

export function collection(db, name) {
    return isAdminDb(db) ? db.collection(name) : client.collection(db, name);
}

export function doc(a, ...rest) {
    if (isAdminDb(a)) return a.collection(rest[0]).doc(rest[1]);
    if (a && !isClientObj(a) && typeof a.doc === "function") return a.doc(); // collection ของแอดมิน → รหัสสุ่ม
    return client.doc(a, ...rest);
}

export function where(field, op, value) {
    return { __where: [field, op, value] };
}

export function query(ref, ...constraints) {
    if (isClientObj(ref)) return client.query(ref, ...constraints.map((c) => client.where(...c.__where)));
    return constraints.reduce((q, c) => q.where(...c.__where), ref);
}

export async function getDocs(q) {
    return isClientObj(q) ? client.getDocs(q) : q.get();
}

export async function getDoc(ref) {
    if (isClientObj(ref)) return client.getDoc(ref);
    const s = await ref.get();
    // ของแอดมิน exists เป็นค่า ไม่ใช่ฟังก์ชัน ทำให้เหมือนของเดิม
    return { id: s.id, ref: s.ref, exists: () => s.exists, data: () => s.data() };
}

export async function setDoc(ref, data, options) {
    return isClientObj(ref) ? client.setDoc(ref, data, options) : ref.set(data, options || {});
}

export async function addDoc(colRef, data) {
    return isClientObj(colRef) ? client.addDoc(colRef, data) : colRef.add(data);
}

export async function updateDoc(ref, data) {
    return isClientObj(ref) ? client.updateDoc(ref, data) : ref.update(data);
}

export async function deleteDoc(ref) {
    return isClientObj(ref) ? client.deleteDoc(ref) : ref.delete();
}

export function writeBatch(db) {
    return isAdminDb(db) ? db.batch() : client.writeBatch(db);
}

export function serverTimestamp() {
    return adminFieldValue ? adminFieldValue.serverTimestamp() : client.serverTimestamp();
}
