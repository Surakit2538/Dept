// เคลียร์เงิน: ใครต้องโอนให้ใคร, QR พร้อมเพย์, อัปโหลดสลิป, ประวัติที่ยืนยันแล้ว
import { useState, useMemo } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { Avatar, SectionTitle, Sheet } from "../ui.jsx";
import { baht, maskPromptpay, promptpayQrUrl, validPromptpay, monthLabel } from "../model.js";
import { verifySlip } from "../data.js";

function QrSheet({ line, profile, onClose }) {
    const url = promptpayQrUrl(profile && profile.promptpay, line.amount);
    const [failed, setFailed] = useState(false);
    return (
        <Sheet title={`โอนให้ ${line.to}`} onClose={onClose}>
            <div class="qr-box">
                {url && failed ? (
                    <p class="empty" role="alert">โหลดรูป QR ไม่สำเร็จ ตรวจอินเทอร์เน็ตแล้วเปิดใหม่ หรือโอนด้วยเลขพร้อมเพย์ {maskPromptpay(profile.promptpay)} จำนวน {baht(line.amount)}</p>
                ) : url ? (
                    <>
                        <img src={url} alt={`QR พร้อมเพย์ของ ${line.to} จำนวน ${line.amount} บาท`} width="240" height="240" referrerpolicy="no-referrer" onError={() => setFailed(true)} />
                        <p class="big num">{baht(line.amount)}</p>
                        <p class="lbl">พร้อมเพย์ <span class="num">{maskPromptpay(profile.promptpay)}</span></p>
                        <p class="lbl qr-help">สแกนด้วยแอปธนาคาร แล้วกลับมากด &ldquo;อัปโหลดสลิป&rdquo; เพื่อยืนยันว่าโอนแล้ว</p>
                    </>
                ) : (
                    <p class="empty" role="alert">{line.to} ยังไม่ได้ตั้งพร้อมเพย์ ให้เจ้าตัวตั้งในหน้า &ldquo;ฉัน&rdquo; หรือให้แอดมินกรอกให้</p>
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
            <p class="lbl">โอนให้ {line.to} {baht(line.amount)} ของเดือน {monthLabel(month)}</p>
            <div class="field"><label for="slip-file">รูปสลิป</label><input id="slip-file" type="file" accept="image/jpeg,image/png,image/webp" onChange={pick} /></div>
            {result && <p class={`msg ${result.ok ? "ok" : ""}`} role={result.ok ? "status" : "alert"}>{result.text}</p>}
            {result && result.ok
                ? <button type="button" class="btn block" onClick={onClose}>เสร็จแล้ว</button>
                : <button type="button" class="btn block" disabled={!file || busy} onClick={submit}>{busy ? "กำลังตรวจสลิป" : "ตรวจสลิป"}</button>}
        </Sheet>
    );
}

function Line({ l, profile, onQr, onSlip }) {
    const mine = l.role === "pay";
    const text = mine ? `โอนให้ ${l.to}` : l.role === "receive" ? `${l.from} ต้องโอนให้คุณ` : `${l.from} โอนให้ ${l.to}`;
    return (
        <li class="dbar">
            <div class="r1">
                <Avatar name={mine ? l.to : l.from} />
                <span class="who">{text}{mine && !validPromptpay(profile && profile.promptpay) && <small>ผู้รับยังไม่ได้ตั้งพร้อมเพย์</small>}</span>
                <span class={`num amt ${mine ? "pay" : l.role === "receive" ? "rcv" : ""}`}>{baht(l.amount)}</span>
            </div>
            {mine && (
                <div class="acts">
                    <button type="button" class="btn sm" onClick={() => onQr(l)}><Icon name="qr" size={14} />QR โอน</button>
                    <button type="button" class="btn sm ghost" onClick={() => onSlip(l)}><Icon name="up" size={14} />อัปโหลดสลิป</button>
                </div>
            )}
        </li>
    );
}

export function ClearPage({ model, profiles, month, onChanged }) {
    const owedToMe = model.lines.filter((l) => l.role === "receive").reduce((a, l) => a + l.amount, 0);
    const iOwe = model.lines.filter((l) => l.role === "pay").reduce((a, l) => a + l.amount, 0);
    const [qr, setQr] = useState(null);
    const [slip, setSlip] = useState(null);
    const byName = useMemo(() => Object.fromEntries((profiles || []).map((p) => [p.name, p])), [profiles]);
    return (
        <div class="home-grid">
            <div class="col">
                {!model.cleared && (
                    <section class="card" aria-label="สรุปยอดค้าง">
                        <div class="strip">
                            <div><p class="lbl">เพื่อนต้องโอนให้ฉัน</p><p class="num mid rcv">{baht(owedToMe)}</p></div>
                            <div class="vl" />
                            <div><p class="lbl">ฉันต้องโอน</p><p class={`num mid ${iOwe > 0 ? "pay" : ""}`}>{baht(iOwe)}</p></div>
                        </div>
                    </section>
                )}
                <section class="card">
                    <SectionTitle icon="swap" title="ยอดที่ต้องโอนเดือนนี้" note={model.cleared ? undefined : `${model.lines.length} รายการ`} />
                    {model.cleared ? <p class="empty"><Icon name="check" size={16} class="rcv" />เคลียร์ครบแล้ว ไม่มียอดค้าง</p>
                        : <ul class="plain">{model.lines.map((l) => <Line key={l.from + l.to} l={l} profile={byName[l.to]} onQr={setQr} onSlip={setSlip} />)}</ul>}
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="check" title="ประวัติที่ยืนยันแล้ว" />
                    {model.history.length === 0 && <p class="empty">ยังไม่มีรายการเคลียร์เงินในเดือนนี้</p>}
                    <ul class="plain">{model.history.map((h) => (
                        <li class="row" key={h.id}>
                            <span class="ico"><Icon name="check" class="rcv" /></span>
                            <div class="grow"><div class="t">{h.from} โอนให้ {h.to}</div><div class="s">{h.manual ? "แอดมินยืนยัน" : "ตรวจจากสลิป"}</div></div>
                            <span class="num rcv">{baht(h.amount)}</span>
                        </li>
                    ))}</ul>
                </section>
            </div>
            {qr && <QrSheet line={qr} profile={byName[qr.to]} onClose={() => setQr(null)} />}
            {slip && <SlipSheet line={slip} month={month} onClose={() => setSlip(null)} onDone={onChanged} />}
        </div>
    );
}
