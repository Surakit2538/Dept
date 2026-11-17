// เครื่องมือข้อมูลสำหรับแอดมิน: ส่งออก CSV และลบข้อมูลทั้งเดือน (พิมพ์คำว่า ลบ ยืนยันก่อน)
import { useState } from "preact/hooks";
import { Sheet, CustomSelect } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { lastMonths, monthLabel } from "./model.js";
import { bangkokToday, clearMonthData } from "./data.js";
import { billsToCsv, downloadCsv } from "./export.js";

export function DataToolsSheet({ transactions, onClose, onToast, onChanged }) {
    const now = bangkokToday().slice(0, 7);
    const months = lastMonths(now, 12);
    const [month, setMonth] = useState(months[months.length - 2] || now);
    const [word, setWord] = useState("");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    function exportCsv() {
        if (!transactions || transactions.length === 0) return setErr("ยังไม่มีบิลให้ส่งออก");
        downloadCsv(billsToCsv(transactions), `dept_money_${bangkokToday()}.csv`);
        onToast("ส่งออกไฟล์แล้ว");
    }
    async function wipe(e) {
        e.preventDefault();
        setErr("");
        if (word.trim() !== "ลบ") return setErr("พิมพ์คำว่า ลบ เพื่อยืนยัน");
        setBusy(true);
        try {
            const r = await clearMonthData(month);
            onToast(`ลบข้อมูลเดือน ${monthLabel(month)} แล้ว (บิล ${r.bills} รายการ, เคลียร์เงิน ${r.settlements} รายการ)`);
            setWord("");
            onChanged(month);
            onClose();
        } catch (ex) { setErr(ex.message || "ลบไม่สำเร็จ"); }
        setBusy(false);
    }
    return (
        <Sheet title="จัดการข้อมูล" onClose={onClose}>
            <p class="lbl">เฉพาะแอดมิน</p>
            <button type="button" class="opt-row" onClick={exportCsv}><span class="ico"><Icon name="down" /></span><span><b>ส่งออกบิลเป็นไฟล์ CSV</b><small>บิลที่โหลดอยู่ในเครื่อง (6 เดือนล่าสุด) เปิดใน Excel หรือ Google Sheets ได้</small></span></button>
            <form class="danger-zone" onSubmit={wipe}>
                <h3>ลบข้อมูลทั้งเดือน</h3>
                <p class="lbl">ลบบิลทุกใบของเดือนที่เลือก รวมรายการผ่อนที่เกี่ยวข้องทุกงวด และประวัติเคลียร์เงินของเดือนนั้น กู้คืนไม่ได้ แนะนำให้ส่งออก CSV เก็บไว้ก่อน</p>
                <CustomSelect
                    id="dt-month"
                    label="เดือนที่จะลบ"
                    value={month}
                    options={months.map((m) => ({ value: m, label: monthLabel(m) }))}
                    onChange={setMonth}
                    title="เลือกเดือนที่จะลบ"
                />
                <div class="field"><label for="dt-word">พิมพ์คำว่า ลบ เพื่อยืนยัน</label><input id="dt-word" type="text" autocomplete="off" value={word} onInput={(e) => setWord(e.currentTarget.value)} /></div>
                {err && <p class="msg" role="alert">{err}</p>}
                <button type="submit" class="btn block danger-btn" disabled={busy || word.trim() !== "ลบ"}>{busy ? "กำลังลบ" : "ลบข้อมูลเดือนนี้"}</button>
            </form>
            {err && !word && <p class="msg" role="alert">{err}</p>}
        </Sheet>
    );
}
