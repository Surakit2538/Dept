// แก้ไขบิลที่บันทึกแล้ว: เปลี่ยนชื่อรายการและหมวดได้ (ยอดและคนหารไม่แก้ เพราะกระทบยอดหนี้ของเพื่อน ถ้าผิดให้ลบแล้วเพิ่มใหม่)
import { useState } from "preact/hooks";
import { Sheet } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { BILL_ICONS, guessBillIcon } from "./model.js";
import { updateBillFields, updateWalletEntry, updateWalletTemplate, confirmWalletEntries } from "./data.js";
import { CategoryPicker, faOf, keyOfFa, hasCategory } from "./cats.jsx";

export function EditBillSheet({ bill, onClose, onSaved }) {
    const grouped = bill.type === "installment";
    const cur = (BILL_ICONS.find((i) => i.fa === bill.icon) || BILL_ICONS[BILL_ICONS.length - 1]).key;
    const [desc, setDesc] = useState(bill.desc || "");
    const [iconKey, setIconKey] = useState(cur);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        const fields = { icon: BILL_ICONS.find((i) => i.key === iconKey).fa };
        if (!grouped) fields.desc = desc.trim().slice(0, 100) || "ไม่ระบุ";
        setBusy(true);
        try { await updateBillFields(bill.id, fields); onSaved(); onClose(); } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title="แก้ไขบิล" onClose={onClose} onSubmit={save}>
            {grouped
                ? <p class="lbl">บิลผ่อนชำระ แก้ได้เฉพาะหมวด ชื่อรายการมีลำดับงวดกำกับอยู่</p>
                : <div class="field"><label for="eb-desc">ชื่อรายการ</label><input id="eb-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>}
            <div class="field">
                <span class="fl" id="eb-cat">หมวด</span>
                <div class="cats-pick" role="group" aria-labelledby="eb-cat">
                    {BILL_ICONS.map((i) => <button type="button" key={i.key} class={iconKey === i.key ? "on" : ""} aria-pressed={iconKey === i.key} onClick={() => setIconKey(i.key)}><span class="ct"><Icon name={i.icon} /></span>{i.label}</button>)}
                </div>
            </div>
            <p class="lbl">ยอดเงินและคนหารแก้ไม่ได้ เพราะกระทบยอดหนี้ของเพื่อน ถ้าผิดให้ลบบิลแล้วเพิ่มใหม่</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
        </Sheet>
    );
}

/** แก้รายการส่วนตัว (กระเป๋า): เปลี่ยนชื่อและหมวดได้ ยอดและวันที่ไม่แก้ ถ้าผิดให้ลบแล้วเพิ่มใหม่ */
export function EditWalletSheet({ item, onClose, onSaved, onSplit = null }) {
    const isIncome = item.type === "income";
    const [desc, setDesc] = useState(item.desc || "");
    // รายการที่ยังไม่มีหมวด: เดาจากชื่อให้เลย (เปลี่ยนเองได้)
    const [iconKey, setIconKey] = useState(() => (hasCategory(item.icon) ? keyOfFa(item.icon) : guessBillIcon(item.desc)));
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        setBusy(true);
        try {
            await updateWalletEntry(item.id, { desc: desc.trim() || (isIncome ? "รายรับ" : "รายจ่าย"), ...(isIncome ? {} : { icon: faOf(iconKey) }), confirm: true });
            onSaved();
            onClose();
        } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title={isIncome ? "แก้ไขรายรับ" : "แก้ไขรายจ่ายส่วนตัว"} onClose={onClose} onSubmit={save}>
            {item.unconfirmed && (
                <p class="unconfirmed-note" role="status"><Icon name="alert" size={16} /><span>บันทึกอัตโนมัติจากสลิปหรือข้อความแจ้งเตือน <b>ยังไม่ได้ยืนยัน</b> ตรวจยอดและชื่อ แล้วกดยืนยัน</span></p>
            )}
            <p class="lbl">ยอด <b class="num">{Number(item.amount || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</b> &middot; วันที่ {String(item.date || "").slice(8, 10)}/{String(item.date || "").slice(5, 7)}{item.card ? ` · บัตร ${item.card}` : ""}</p>
            <div class="field"><label for="ew-desc">ชื่อรายการ</label><input id="ew-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            {!isIncome && <CategoryPicker value={iconKey} onPick={setIconKey} labelId="ew-cat-l" />}
            <p class="lbl">ยอดเงินและวันที่แก้ไม่ได้ ถ้าผิดให้ลบแล้วเพิ่มใหม่</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : item.unconfirmed ? "ยืนยันและบันทึก" : "บันทึก"}</button>
            {onSplit && !isIncome && (
                <button type="button" class="btn ghost block" disabled={busy} onClick={() => onSplit(item)}><Icon name="people" size={16} />เปลี่ยนเป็นบิลหารกับเพื่อน</button>
            )}
        </Sheet>
    );
}

/** แก้รายจ่ายรายเดือนที่ตั้งไว้: ชื่อ ยอด หมวด มีผลกับรายการที่ระบบสร้างตั้งแต่เดือนถัดไป */
export function EditTemplateSheet({ template, onClose, onSaved }) {
    const [desc, setDesc] = useState(template.desc || "");
    const [amount, setAmount] = useState(String(template.amount ?? ""));
    const [iconKey, setIconKey] = useState(() => (hasCategory(template.icon) ? keyOfFa(template.icon) : guessBillIcon(template.desc)));
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!Number.isFinite(n) || n <= 0) return setErr("ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0");
        setBusy(true);
        try {
            await updateWalletTemplate(template.id, { desc: desc.trim() || "รายจ่าย", amount: n, icon: faOf(iconKey) });
            onSaved();
            onClose();
        } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title="แก้รายจ่ายรายเดือน" onClose={onClose} onSubmit={save}>
            <div class="field"><label for="et-desc">ชื่อรายการ</label><input id="et-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            <div class="field amount"><label for="et-amount">ยอดต่อเดือน (บาท)</label><input id="et-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" value={amount} onInput={(e) => setAmount(e.currentTarget.value)} /></div>
            <CategoryPicker value={iconKey} onPick={setIconKey} labelId="et-cat-l" />
            <p class="lbl">มีผลกับรายการที่ระบบสร้างให้ตั้งแต่เดือนถัดไป รายการที่สร้างไปแล้วไม่เปลี่ยน (แก้ได้ที่ไอคอนดินสอของรายการนั้น)</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
        </Sheet>
    );
}

/**
 * เปิดจากแจ้งเตือนบน iPhone (แตะเฉยๆ): ถามว่ารายการที่บันทึกอัตโนมัติ "บันทึกแบบไหน"
 * ส่วนตัว = ยืนยันรายการ แล้วมีปุ่มแก้ไขรายละเอียด / หารกับเพื่อน = เปิดฟอร์มหาร (แปลงรายการเดิม)
 */
export function ChooseSheet({ item, onClose, onSplit, onEdit, onConfirmed }) {
    const [state, setState] = useState("ask"); // ask | busy | done
    const [err, setErr] = useState("");
    const amount = Number(item.amount || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const when = `${String(item.date || "").slice(8, 10)}/${String(item.date || "").slice(5, 7)}`;
    async function personal() {
        setErr("");
        setState("busy");
        try { await confirmWalletEntries([item.id]); onConfirmed(); setState("done"); } catch (e) { setErr(e.message || "บันทึกไม่สำเร็จ"); setState("ask"); }
    }
    return (
        <Sheet title={state === "done" ? "บันทึกเป็นรายจ่ายส่วนตัวแล้ว" : "บันทึกแบบไหน"} onClose={onClose}>
            <div class="choose-item">
                <span class="ico"><Icon name="bill" /></span>
                <div class="grow"><div class="t">{item.desc || "รายจ่าย"}</div><div class="s">วันที่ {when}{item.card ? ` · บัตร ${item.card}` : ""}</div></div>
                <b class="num pay">{amount} บาท</b>
            </div>
            {state !== "done" ? (
                <div class="choose-btns">
                    <button type="button" class="btn" disabled={state === "busy"} onClick={personal}><Icon name="wallet" size={18} />{state === "busy" ? "กำลังบันทึก" : "ส่วนตัว"}</button>
                    <button type="button" class="btn ghost" disabled={state === "busy"} onClick={() => onSplit(item)}><Icon name="people" size={18} />หารกับเพื่อน</button>
                </div>
            ) : (
                <div class="choose-btns">
                    <button type="button" class="btn ghost" onClick={() => onEdit({ ...item, unconfirmed: false })}><Icon name="pencil" size={18} />แก้ไขรายละเอียด</button>
                    <button type="button" class="btn" onClick={onClose}>เสร็จ</button>
                </div>
            )}
            {err && <p class="msg" role="alert">{err}</p>}
        </Sheet>
    );
}
