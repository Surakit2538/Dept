// เคลียร์เงิน: ใครต้องโอนให้ใคร, QR พร้อมเพย์, อัปโหลดสลิป, ประวัติที่ยืนยันแล้ว
import { useState, useMemo } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { Avatar, SectionTitle, Sheet } from "../ui.jsx";
import { baht, maskPromptpay, promptpayQrUrl, validPromptpay, monthLabel } from "../model.js";
import { verifySlip } from "../data.js";

function QrSheet({ line, profile, onClose }) {
    const url = promptpayQrUrl(profile && profile.promptpay, line.amount);
    return (
        <Sheet title={`โอนให้ ${line.to}`} onClose={onClose}>
            <div class="qr-box">
                {url ? (
                    <>
                        <img src={url} alt={`QR พร้อมเพย์ของ ${line.to} จำนวน ${line.amount} บาท`} width="240" height="240" referrerpolicy="no-referrer" />
                        <div class="big num" style={{ fontSize: "30px" }}>{baht(line.amount)}</div>
                        <div class="lbl">พร้อมเพย์ {maskPromptpay(profile.promptpay)}</div>
                        <p class="lbl" style={{ textAlign: "center" }}>สแกนด้วยแอปธนาคาร แล้วกลับมากด &ldquo;อัปโหลดสลิป&rdquo; เพื่อยืนยันว่าโอนแล้ว</p>
                    </>
                ) : (
                    <div class="empty" role="alert">{line.to} ยังไม่ได้ตั้งค่าพร้อมเพย์ ให้บอกเจ้าตัวไปตั้งในหน้า &ldquo;ฉัน&rdquo; หรือให้แอดมินกรอกให้</div>
                )}
            </div>
        </Sheet>
    );
}

function SlipSheet({ line, month, onClose, onDone }) {
    const [file, setFile] = useState(null);
    const [busy, setBusy] = useState(false);
    const [result, setResult] = useState(null);
    function pick(e) {
        const f = e.currentTarget.files && e.currentTarget.files[0];
        setResult(null);
        if (!f) return setFile(null);
        if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) return setResult({ ok: false, text: "เลือกไฟล์รูปภาพ (JPG, PNG, WEBP)" });
        if (f.size > 5 * 1024 * 1024) return setResult({ ok: false, text: "ไฟล์ใหญ่เกิน 5MB" });
        setFile(f);
    }
    async function submit() {
        setBusy(true);
        setResult(null);
        try {
            const r = await verifySlip(file, { to: line.to, amount: line.amount, month });
            if (r.ok) {
                const s = r.json.slip || {};
                const extra = r.json.partial ? ` ยังเหลืออีก ${baht(r.json.remaining)}` : "";
                setResult({ ok: true, text: `ยืนยันแล้ว ${baht(Number(s.amount) || line.amount)} ให้ ${line.to}${extra}` });
                onDone();
            } else {
                setResult({ ok: false, text: r.json.message || `ตรวจสลิปไม่สำเร็จ (${r.status})` });
            }
        } catch (e) {
            setResult({ ok: false, text: e.message });
        }
        setBusy(false);
    }
    return (
        <Sheet title="อัปโหลดสลิป" onClose={onClose}>
            <p class="lbl" style={{ margin: "6px 0 10px" }}>โอนให้ {line.to} {baht(line.amount)} ของเดือน {monthLabel(month)}</p>
            <div class="field"><label for="slip-file">รูปสลิป</label><input id="slip-file" type="file" accept="image/jpeg,image/png,image/webp" onChange={pick} /></div>
            {result && <div class={`msg ${result.ok ? "ok" : ""}`} role={result.ok ? "status" : "alert"}>{result.text}</div>}
            <button type="button" class="btn" style={{ width: "100%", marginTop: "16px" }} disabled={!file || busy || (result && result.ok)} onClick={submit}>{busy ? "กำลังตรวจสลิป" : "ตรวจสลิป"}</button>
        </Sheet>
    );
}

function Line({ l, profile, onQr, onSlip }) {
    const mine = l.role === "pay";
    return (
        <div class="dbar">
            <div class="r1">
                <Avatar name={mine ? l.to : l.from} />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 500 }}>{mine ? `โอนให้ ${l.to}` : l.role === "receive" ? `${l.from} ต้องโอนให้คุณ` : `${l.from} โอนให้ ${l.to}`}</div>
                    {mine && !validPromptpay(profile && profile.promptpay) && <div class="lbl">ผู้รับยังไม่ได้ตั้งพร้อมเพย์</div>}
                </div>
                <div class={`num ${mine ? "pay" : l.role === "receive" ? "rcv" : ""}`} style={{ fontWeight: 600 }}>{baht(l.amount)}</div>
            </div>
            {mine && (
                <div class="acts">
                    <button type="button" class="btn sm" onClick={() => onQr(l)}><Icon name="qr" size={14} />QR โอน</button>
                    <button type="button" class="btn sm ghost" onClick={() => onSlip(l)}><Icon name="up" size={14} />อัปโหลดสลิป</button>
                </div>
            )}
        </div>
    );
}

export function ClearPage({ model, profiles, month, onChanged }) {
    const [qr, setQr] = useState(null);
    const [slip, setSlip] = useState(null);
    const byName = useMemo(() => Object.fromEntries((profiles || []).map((p) => [p.name, p])), [profiles]);
    return (
        <div class="home-grid">
            <div class="col">
                <section class="card">
                    <SectionTitle icon="swap" title="ยอดที่ต้องโอนเดือนนี้" note={model.cleared ? undefined : `${model.lines.length} รายการ`} />
                    {model.cleared && <div class="empty"><Icon name="check" size={16} class="rcv" /> เคลียร์ครบแล้ว ไม่มียอดค้าง</div>}
                    {model.lines.map((l) => <Line key={l.from + l.to} l={l} profile={byName[l.to]} onQr={setQr} onSlip={setSlip} />)}
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="check" title="ประวัติที่ยืนยันแล้ว" />
                    {model.history.length === 0 && <div class="empty">ยังไม่มีรายการเคลียร์เงินในเดือนนี้</div>}
                    {model.history.map((h) => (
                        <div class="row" key={h.id}>
                            <span class="ico"><Icon name="check" class="rcv" /></span>
                            <div class="grow"><div class="t">{h.from} โอนให้ {h.to}</div><div class="s">{h.manual ? "แอดมินยืนยัน" : "ตรวจจากสลิป"}</div></div>
                            <div class="num rcv">{baht(h.amount)}</div>
                        </div>
                    ))}
                </section>
            </div>
            {qr && <QrSheet line={qr} profile={byName[qr.to]} onClose={() => setQr(null)} />}
            {slip && <SlipSheet line={slip} month={month} onClose={() => setSlip(null)} onDone={onChanged} />}
        </div>
    );
}
