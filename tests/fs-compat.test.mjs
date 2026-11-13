// 2e: ตัวกลางฐานข้อมูล (lib/fs-compat.mjs) ต้องทำงานเหมือนกันทั้งแบบ client และแบบ firebase-admin
// แบบ admin ทดสอบด้วยของจำลองที่มีหน้าตา API เหมือน firebase-admin (exists เป็นค่า, doc().get(), batch() ฯลฯ)
import test from "node:test";
import assert from "node:assert/strict";
import fsNode from "node:fs";
import * as compat from "../lib/fs-compat.mjs";
import { parseServiceAccount } from "../api/auth-helpers.js";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createSubscriptionJob } from "../lib/subscriptions.mjs";
import { createFakeRes } from "./fake-firestore.mjs";

function createFakeAdminDb() {
    const store = new Map();
    let auto = 0;
    const col = (n) => { if (!store.has(n)) store.set(n, new Map()); return store.get(n); };
    const snapOf = (name, id) => {
        const data = col(name).get(id);
        return { id, exists: data !== undefined, ref: docRef(name, id), data: () => (data === undefined ? undefined : JSON.parse(JSON.stringify(data))) };
    };
    const docRef = (name, id) => ({
        id,
        firestore: {},
        get: async () => snapOf(name, id),
        set: async (data, opts) => { col(name).set(id, opts && opts.merge ? { ...(col(name).get(id) || {}), ...data } : { ...data }); },
        update: async (data) => {
            if (!col(name).has(id)) throw new Error("NOT_FOUND");
            col(name).set(id, { ...col(name).get(id), ...data });
        },
        delete: async () => { col(name).delete(id); }
    });
    const queryOf = (name, cs) => ({
        where: (f, op, v) => queryOf(name, [...cs, [f, op, v]]),
        get: async () => {
            let ids = [...col(name).keys()];
            for (const [f, op, v] of cs) {
                const t = { "==": (a, b) => a === b, ">=": (a, b) => a !== undefined && a >= b, "<=": (a, b) => a !== undefined && a <= b }[op];
                ids = ids.filter((id) => t(col(name).get(id)[f], v));
            }
            const docs = ids.map((id) => snapOf(name, id));
            return { docs, empty: docs.length === 0, size: docs.length, forEach: (fn) => docs.forEach(fn) };
        }
    });
    const db = {
        collection: (name) => ({
            ...queryOf(name, []),
            doc: (id) => docRef(name, id || "adm" + ++auto),
            add: async (data) => { const id = "adm" + ++auto; col(name).set(id, { ...data }); return { id }; }
        }),
        batch: () => {
            const ops = [];
            const b = {
                set: (ref, data) => (ops.push(() => ref.set(data)), b),
                update: (ref, data) => (ops.push(() => ref.update(data)), b),
                delete: (ref) => (ops.push(() => ref.delete()), b),
                commit: async () => { for (const f of ops) await f(); }
            };
            return b;
        }
    };
    return { db, store, all: (n) => [...col(n).values()].map((x) => JSON.parse(JSON.stringify(x))), has: (n, id) => col(n).has(id) };
}

test("fs-compat (admin): เขียน/อ่าน/ค้นหา/อัปเดต/ลบ/แบตช์ ทำงานเหมือน client", async () => {
    const { db, all, has } = createFakeAdminDb();
    const { collection, doc, query, where, getDocs, getDoc, setDoc, addDoc, updateDoc, deleteDoc, writeBatch } = compat;

    await setDoc(doc(db, "members", "m1"), { name: "AOY", n: 1 });
    const added = await addDoc(collection(db, "members"), { name: "BEN", n: 2 });
    assert.ok(added.id);

    const snap = await getDoc(doc(db, "members", "m1"));
    assert.equal(snap.exists(), true);
    assert.equal(snap.data().name, "AOY");
    assert.equal((await getDoc(doc(db, "members", "nope"))).exists(), false);

    const q = await getDocs(query(collection(db, "members"), where("n", ">=", 1), where("n", "<=", 1)));
    assert.deepEqual(q.docs.map((d) => d.data().name), ["AOY"]);
    assert.equal(q.empty, false);

    await updateDoc(q.docs[0].ref, { n: 5 });
    assert.equal(all("members").find((x) => x.name === "AOY").n, 5);

    const auto = doc(collection(db, "transactions")); // รหัสสุ่ม
    const b = writeBatch(db);
    b.set(auto, { x: 1 });
    b.update(doc(db, "members", "m1"), { n: 9 });
    await b.commit();
    assert.equal(has("transactions", auto.id), true);
    assert.equal(all("members").find((x) => x.name === "AOY").n, 9);

    await deleteDoc(doc(db, "members", "m1"));
    assert.equal(has("members", "m1"), false);
});

test("บริการจริง (shortcut-service, subscriptions) ทำงานบนฐานข้อมูลแบบ admin ได้", async () => {
    const adm = createFakeAdminDb();
    await compat.setDoc(compat.doc(adm.db, "members", "me"), { name: "G A M E 👾", realName: "สุรกิจ พัฒนเธียรสกุล" });
    const handler = createShortcutHandler({
        db: adm.db, fs: compat,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "G A M E 👾" }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => Date.parse("2026-11-13T05:00:00Z")
    });
    const call = async (body) => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer d" }, body }, res); return res; };
    const add = await call({ action: "wallet-add", type: "income", amount: 123, desc: "ทดสอบ" });
    assert.equal(add.body.status, "saved");
    const list = await call({ action: "wallet-list", month: "2026-11" });
    assert.equal(list.body.income, 123);
    const del = await call({ action: "wallet-delete", id: add.body.id });
    assert.equal(del.body.status, "deleted");

    // subscriptions (ใช้ writeBatch + doc รหัสตายตัว)
    await compat.setDoc(compat.doc(adm.db, "subscription_templates", "t1"), { desc: "Netflix", amount: 400, payer: "AOY", splits: { AOY: 200, BEN: 200 }, billingDay: 15, groupId: "g1", active: true, lastGeneratedMonth: "2026-10" });
    const r = await createSubscriptionJob({ db: adm.db, fs: compat, now: () => new Date("2026-11-01T02:30:00Z") })();
    assert.equal(r.created, 1);
    assert.equal(adm.has("transactions", "sub_g1_2026-11"), true);
});

test("parseServiceAccount: JSON ตรงๆ / base64 / ผิดรูปแบบ", () => {
    const sa = { client_email: "a@b.iam.gserviceaccount.com", private_key: "-----BEGIN PRIVATE KEY-----\nabc\n-----END PRIVATE KEY-----\n", project_id: "p" };
    assert.equal(parseServiceAccount(JSON.stringify(sa)).client_email, sa.client_email);
    assert.equal(parseServiceAccount(Buffer.from(JSON.stringify(sa)).toString("base64")).private_key, sa.private_key);
    assert.equal(parseServiceAccount(""), null);
    assert.throws(() => parseServiceAccount(JSON.stringify({ client_email: "x" })));
    assert.throws(() => parseServiceAccount("not json"));
});

test("ไฟล์ฝั่งเซิร์ฟเวอร์ไม่เรียก firebase/firestore ตรงๆ อีก (ผ่านตัวกลางทั้งหมด)", () => {
    const files = ["api/webhook.js", "api/send-line.js", "api/shortcut-transaction.js", "api/verify-settlement-slip.js", "api/widget-summary.js",
        "api/get-members.js", "api/device-token.js", "api/firestore-helpers.js", "api/cron/generate-subscriptions.js", "api/cron/send-reminders.js"];
    for (const f of files) {
        const s = fsNode.readFileSync(new URL("../" + f, import.meta.url), "utf8");
        assert.ok(!/from ["']firebase\/firestore["']/.test(s), `${f} ยังเรียก firebase/firestore ตรงๆ`);
    }
});
