// แก้ไขบิลที่บันทึกแล้ว: เปลี่ยนชื่อรายการและหมวดได้ (ยอดและคนหารไม่แก้ เพราะกระทบยอดหนี้ของเพื่อน ถ้าผิดให้ลบแล้วเพิ่มใหม่)
import { useState } from "preact/hooks";
import { Sheet } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { BILL_ICONS } from "./model.js";
import { updateBillFields } from "./data.js";

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
