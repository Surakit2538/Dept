// ฐานข้อมูล Firestore จำลองในหน่วยความจำ (รองรับเฉพาะที่ shortcut-service ใช้)
export function createFakeFirestore() {
    const store = new Map(); // collection -> Map(id -> data)
    let autoId = 0;
    const col = (name) => {
        if (!store.has(name)) store.set(name, new Map());
        return store.get(name);
    };
    const clone = (o) => JSON.parse(JSON.stringify(o));
    const wrap = (name, id, data) => ({ id, ref: { type: "doc", col: name, id }, data: () => clone(data) });

    const fs = {
        collection: (_db, name) => ({ type: "col", name }),
        doc: (_db, name, id) => ({ type: "doc", col: name, id }),
        where: (field, op, value) => ({ field, op, value }),
        query: (colRef, ...constraints) => ({ type: "query", name: colRef.name, constraints }),
        getDocs: async (q) => {
            const name = q.name;
            let docs = [...col(name).entries()].map(([id, data]) => wrap(name, id, data));
            if (q.type === "query") {
                for (const c of q.constraints) {
                    const test = {
                        "==": (a, b) => a === b,
                        ">=": (a, b) => a !== undefined && a >= b,
                        "<=": (a, b) => a !== undefined && a <= b,
                        ">": (a, b) => a !== undefined && a > b,
                        "<": (a, b) => a !== undefined && a < b
                    }[c.op];
                    if (!test) throw new Error("fake firestore: unsupported op " + c.op);
                    docs = docs.filter((d) => test(d.data()[c.field], c.value));
                }
            }
            return { docs, empty: docs.length === 0, forEach: (fn) => docs.forEach(fn) };
        },
        getDoc: async (ref) => {
            const data = col(ref.col).get(ref.id);
            return { exists: () => data !== undefined, data: () => clone(data) };
        },
        addDoc: async (colRef, data) => {
            const id = "auto" + ++autoId;
            col(colRef.name).set(id, clone(data));
            return { id };
        },
        setDoc: async (ref, data) => {
            col(ref.col).set(ref.id, clone(data));
        },
        deleteDoc: async (ref) => {
            col(ref.col).delete(ref.id);
        }
    };

    return {
        fs,
        seed: (name, id, data) => col(name).set(id, clone(data)),
        all: (name) => [...col(name).values()].map(clone),
        count: (name) => col(name).size,
        has: (name, id) => col(name).has(id)
    };
}

export function createFakeRes() {
    return {
        statusCode: 200,
        body: undefined,
        headers: {},
        setHeader(k, v) { this.headers[k] = v; },
        status(c) { this.statusCode = c; return this; },
        json(b) { this.body = b; return this; },
        end() { return this; }
    };
}
