/**
 * เทียบชื่อคนไทย/อังกฤษแบบยืดหยุ่น (สลิปมักย่อนามสกุล เช่น "นาย สุรกิจ พ" กับ "สุรกิจ พัฒนเธียรสกุล")
 * และแยกประเภทสลิปว่า เงินเข้าเรา / เพื่อนโอนคืน / เราโอนคืนเพื่อน / รายจ่าย
 */
const TITLE_RE = /^(นางสาว|นาย|นาง|น\.ส\.|นส\.|ด\.ช\.|ด\.ญ\.|เด็กชาย|เด็กหญิง|mr\.?|mrs\.?|miss|ms\.?)\s*/i;

export function nameTokens(name) {
    let s = String(name ?? "").trim();
    s = s.replace(TITLE_RE, "");
    s = s.replace(/[.,'"()]/g, " ").replace(/\s+/g, " ").trim().toUpperCase();
    return s ? s.split(" ") : [];
}

const prefixMatch = (a, b) => a === b || a.startsWith(b) || b.startsWith(a);

/** เทียบชื่อสองชื่อ → { matched, confidence } ต้องชื่อต้นตรงกัน และนามสกุล (ถ้ามีทั้งคู่) ตรงกันหรือเป็นตัวย่อของกันและกัน */
export function nameMatches(a, b) {
    const ta = nameTokens(a);
    const tb = nameTokens(b);
    if (ta.length === 0 || tb.length === 0) return { matched: false, confidence: 0 };

    const fa = ta[0];
    const fb = tb[0];
    const firstOk = fa === fb || (Math.min(fa.length, fb.length) >= 3 && prefixMatch(fa, fb));
    if (!firstOk) {
        // ชื่อติดกันไม่มีช่องว่าง เช่น "สุรกิจพัฒนเธียรสกุล"
        const ja = ta.join("");
        const jb = tb.join("");
        if (Math.min(ja.length, jb.length) >= 5 && (ja.includes(jb) || jb.includes(ja))) return { matched: true, confidence: 0.8 };
        return { matched: false, confidence: 0 };
    }
    if (ta.length > 1 && tb.length > 1) {
        const la = ta[ta.length - 1];
        const lb = tb[tb.length - 1];
        if (la === lb) return { matched: true, confidence: 0.95 };
        if (prefixMatch(la, lb)) return { matched: true, confidence: 0.85 }; // ย่อนามสกุล
        return { matched: false, confidence: 0 };
    }
    return { matched: true, confidence: 0.7 }; // มีแต่ชื่อต้นฝั่งใดฝั่งหนึ่ง
}

function anyMatch(name, candidates) {
    let best = { matched: false, confidence: 0 };
    for (const c of candidates) {
        if (!c) continue;
        const r = nameMatches(name, c);
        if (r.matched && r.confidence > best.confidence) best = r;
    }
    return best;
}

/**
 * แยกประเภทสลิปเมื่อมองจากสมาชิก me
 * @param {{sender?:string, receiver?:string}} parties ชื่อผู้โอน/ผู้รับตามที่ปรากฏบนสลิป
 * @param {{name:string, realName?:string, englishName?:string}} me
 * @param {Array<{name:string, realName?:string, englishName?:string}>} others สมาชิกคนอื่น
 * @returns {{kind: "income"|"received_back"|"paid_back"|"self_transfer"|"expense", confident: boolean, counterparty?: string, reason?: string}}
 */
export function classifyDirection({ sender = "", receiver = "" }, me, others = []) {
    const myNames = [me && me.realName, me && me.englishName];
    if (!myNames.some(Boolean)) return { kind: "expense", confident: false, reason: "no_real_name" };

    const senderIsMe = Boolean(sender) && anyMatch(sender, myNames).matched;
    const receiverIsMe = Boolean(receiver) && anyMatch(receiver, myNames).matched;
    const findMember = (name) => {
        if (!name) return null;
        return others.find((o) => anyMatch(name, [o.realName, o.englishName]).matched) || null;
    };

    if (senderIsMe && receiverIsMe) return { kind: "self_transfer", confident: true };
    if (receiverIsMe) {
        const friend = findMember(sender);
        if (friend) return { kind: "received_back", confident: true, counterparty: friend.name };
        // รู้ว่าผู้รับคือเรา แต่ไม่รู้ผู้โอน (ไม่มีชื่อบนสลิป) → ยังไม่แน่ใจว่าเป็นเพื่อนคืนเงินหรือรายรับ
        return { kind: "income", confident: Boolean(sender), reason: sender ? undefined : "no_sender" };
    }
    if (senderIsMe) {
        const friend = findMember(receiver);
        if (friend) return { kind: "paid_back", confident: true, counterparty: friend.name };
        return { kind: "expense", confident: true };
    }
    return { kind: "expense", confident: false, reason: "unknown_parties" };
}
