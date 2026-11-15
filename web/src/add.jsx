// ปุ่มบันทึก: เลือกประเภท แล้วกรอกรายจ่ายส่วนตัวหรือรายรับ (บิลหารกับเพื่อนยังใช้ฟอร์มหน้าเดิม)
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet } from "./ui.jsx";

export function AddSheet({ onClose, onSaved, save, today, initial = null }) {
    const [mode, setMode] = useState(initial); // null | "expense" | "income"
    if (mode) return <AddForm type={mode} onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} save={save} today={today} />;
    return (
        <Sheet title="บันทึกอะไร" onClose={onClose}>
            <a class="opt-row" href="/index.html#add">
                <span class="ico"><Icon name="people" /></span>
                <span><b>บิลหารกับเพื่อน</b><small>เท่ากัน กำหนดเอง ผ่อน หรือรายเดือน (เปิดฟอร์มหน้าเดิม)</small></span>
                <Icon name="right" size={16} class="mute" />
            </a>
            <button type="button" class="opt-row" onClick={() => setMode("expense")}>
                <span class="ico"><Icon name="lock" /></span>
                <span><b>รายจ่ายส่วนตัว</b><small>เพื่อนไม่เห็น ไม่กระทบยอดหนี้</small></span>
                <Icon name="right" size={16} class="mute" />
            </button>
            <button type="button" class="opt-row" onClick={() => setMode("income")}>
                <span class="ico"><Icon name="down" class="rcv" /></span>
                <span><b>รายรับ</b><small>เงินเดือนและรายได้อื่น ไม่รวมเพื่อนโอนคืนหนี้</small></span>
                <Icon name="right" size={16} class="mute" />
            </button>
        </Sheet>
    );
}

function AddForm({ type, onBack, onClose, onSaved, save, today }) {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(today);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const income = type === "income";
    async function submit(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!Number.isFinite(n) || n <= 0) { setErr("ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"); return; }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today) { setErr("เลือกวันที่ไม่เกินวันนี้"); return; }
        setBusy(true);
        try {
            await save({ type, amount: n, desc: desc.trim() || undefined, date });
            onSaved(income ? "บันทึกรายรับแล้ว" : "บันทึกรายจ่ายแล้ว");
            onClose();
        } catch (ex) {
            setErr(ex.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง");
            setBusy(false);
        }
    }
    return (
        <Sheet as="form" title={income ? "บันทึกรายรับ" : "บันทึกรายจ่ายส่วนตัว"} onClose={onClose} onSubmit={submit}
            action={<button type="button" class="btn sm ghost" onClick={onBack}>เปลี่ยนประเภท</button>}>
            <div class="field amount">
                <label for="f-amount">จำนวนเงิน (บาท)</label>
                <input id="f-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" required value={amount} aria-invalid={err && !(Number(amount) > 0) ? "true" : undefined} onInput={(e) => setAmount(e.currentTarget.value)} />
            </div>
            <div class="field"><label for="f-desc">รายการ</label><input id="f-desc" type="text" maxLength={100} placeholder={income ? "เช่น เงินเดือน" : "เช่น กาแฟ"} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            <div class="field"><label for="f-date">วันที่</label><input id="f-date" type="date" max={today} value={date} onInput={(e) => setDate(e.currentTarget.value)} /></div>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : income ? "บันทึกรายรับ" : "บันทึกรายจ่าย"}</button>
        </Sheet>
    );
}
