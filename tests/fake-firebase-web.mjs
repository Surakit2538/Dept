// Firebase (firebase/app + firebase/firestore) จำลองสำหรับทดสอบโค้ดเว็บ web/src/data.js ตรงๆ
// ใช้แทนแพ็กเกจจริงตอน bundle เทสต์ (ไม่แตะฐานข้อมูลจริง) รองรับเฉพาะที่เทสต์ใช้: query/where/limit/FieldPath/getDocs/deleteDoc
const store = new Map(); // ชื่อคอลเลกชัน -> Map(id -> data)
export const calls = { queries: [], deleted: [], updated: [] };

const col = (name) => {
    if (!store.has(name)) store.set(name, new Map());
    return store.get(name);
};

/** ใส่ข้อมูลตั้งต้น / ล้างทั้งหมด (เรียกจากเทสต์) */
export function __seed(name, id, data) { col(name).set(id, JSON.parse(JSON.stringify(data))); }
export function __reset() { store.clear(); calls.queries.length = 0; calls.deleted.length = 0; calls.updated.length = 0; }
export function __get(name, id) { return col(name).get(id); }

export function initializeApp() { return {}; }
export function getFirestore() { return {}; }

// firebase/auth จำลอง: ค่าเริ่มต้น = มีบัตรสมาชิกจำไว้ในเครื่องแล้ว (ประตูเปิดทันที) เทสต์ตั้ง currentUser = null เพื่อดูขั้นขอบัตร
export const authState = { currentUser: { uid: "m_test" }, signIns: [], order: [] };
const authObj = { get currentUser() { return authState.currentUser; }, authStateReady: async () => {} };
export function getAuth() { return authObj; }
export async function signInWithCustomToken(_a, token) {
    authState.signIns.push(token);
    authState.order.push("signIn");
    authState.currentUser = { uid: String(token).replace(/^fb-/, "") };
    return {};
}
export async function signOut() { authState.currentUser = null; }

export class FieldPath {
    constructor(...segments) { this.segments = segments; } // ไม่แยกจุดในชื่อ (เหมือนของจริง)
}
const segs = (f) => (f instanceof FieldPath ? f.segments : String(f).split("."));
const read = (data, path) => path.reduce((o, k) => (o && typeof o === "object" ? o[k] : undefined), data);

export const collection = (_db, name) => ({ type: "col", name });
export const doc = (_db, name, id) => ({ type: "doc", col: name, id });
export const where = (field, op, value) => ({ kind: "where", path: segs(field), op, value });
export const limit = (n) => ({ kind: "limit", n });
export const deleteField = () => ({ __delete: true });
export const query = (c, ...cons) => ({ type: "query", name: c.name, cons });

// Firestore เทียบได้เฉพาะชนิดเดียวกัน (ตัวเลขกับตัวเลข) ฟิลด์ที่ไม่มี = ไม่ตรง
const OPS = {
    "==": (a, b) => a !== undefined && a === b,
    ">=": (a, b) => a !== undefined && typeof a === typeof b && a >= b,
    "<=": (a, b) => a !== undefined && typeof a === typeof b && a <= b,
    "array-contains": (a, b) => Array.isArray(a) && a.includes(b)
};

export async function getDocs(q) {
    const name = q.name;
    let rows = [...col(name).entries()];
    let max = Infinity;
    for (const c of q.cons || []) {
        if (c.kind === "limit") { max = c.n; continue; }
        const test = OPS[c.op];
        if (!test) throw new Error("fake firebase: unsupported op " + c.op);
        rows = rows.filter(([, d]) => test(read(d, c.path), c.value));
    }
    calls.queries.push({ name, cons: q.cons || [] });
    authState.order.push("read:" + name);
    rows = rows.slice(0, max);
    const docs = rows.map(([id, d]) => ({ id, data: () => JSON.parse(JSON.stringify(d)) }));
    return { docs, empty: docs.length === 0, size: docs.length, forEach: (fn) => docs.forEach(fn) };
}

export async function deleteDoc(ref) {
    calls.deleted.push(`${ref.col}/${ref.id}`);
    col(ref.col).delete(ref.id);
}

// ที่ data.js import แต่เทสต์นี้ไม่ได้ใช้
export async function getDoc(ref) { const d = col(ref.col).get(ref.id); return { exists: () => d !== undefined, data: () => d }; }
export async function updateDoc() { throw new Error("fake firebase: updateDoc not used in this test"); }
export async function addDoc() { throw new Error("fake firebase: addDoc not used in this test"); }
export function onSnapshot() { return () => {}; }
// ชุดเขียน: รองรับเฉพาะ update (แทนฟิลด์ระดับบนทั้งก้อน เหมือนของจริง) เขียนตอน commit พร้อมกัน
export function writeBatch() {
    const ops = [];
    return {
        update(ref, data) { ops.push([ref, data]); },
        async commit() {
            for (const [ref] of ops) if (!col(ref.col).has(ref.id)) throw new Error(`fake firebase: no document ${ref.col}/${ref.id}`);
            for (const [ref, data] of ops) {
                const next = { ...col(ref.col).get(ref.id) };
                for (const [k, v] of Object.entries(data)) {
                    if (v && v.__delete) delete next[k]; else next[k] = JSON.parse(JSON.stringify(v));
                }
                col(ref.col).set(ref.id, next);
                calls.updated.push(`${ref.col}/${ref.id}`);
            }
        }
    };
}
