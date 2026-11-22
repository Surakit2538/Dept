import { useState, useMemo } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { Avatar, DateTile, SectionTitle, Sheet } from "../ui.jsx";
import { baht, maskPromptpay, promptpayQrUrl, validPromptpay, monthLabel, lastMonths } from "../model.js";
import { verifySlip, manualSettle, deleteSettlement, moveSettlementMonth, bangkokToday, remindAllDebtors } from "../data.js";
import { DeleteButton } from "../ui.jsx";

/** โอนให้เพื่อน: หัวสีหลักบอกคนรับกับยอด QR อยู่ในบัตรแบบตั๋ว แล้วปุ่มอัปโหลดสลิปต่อได้เลย */
function QrSheet({ line, profile, onClose, onSlip }) {
    const url = promptpayQrUrl(profile && profile.promptpay, line.amount);
    const [failed, setFailed] = useState(false);
    const [copied, setCopied] = useState(false);
    const pp = profile && validPromptpay(profile.promptpay);
    async function copy() {
        try { await navigator.clipboard.writeText(pp); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch (e) { /* คัดลอกไม่ได้ ไม่เป็นไร เลขแสดงอยู่แล้ว */ }
    }
    return (
        <Sheet title={`โอนให้ ${line.to}`} onClose={onClose} class="qr-sheet">
            <div class="qr-head">
                <Avatar name={line.to} pictureUrl={profile && profile.pictureUrl} />
                <span class="lbl">ยอดที่ต้องโอน</span>
                <b class="num">{baht(line.amount)}</b>
            </div>
            <div class="qr-box">
                {url && failed ? (
                    <p class="empty" role="alert">โหลดรูป QR ไม่สำเร็จ ตรวจอินเทอร์เน็ตแล้วเปิดใหม่ หรือโอนด้วยเลขพร้อมเพย์ {maskPromptpay(profile.promptpay)} จำนวน {baht(line.amount)}</p>
                ) : url ? (
                    <div class="qr-ticket">
                        <img src={url} alt={`QR พร้อมเพย์ของ ${line.to} จำนวน ${line.amount} บาท`} width="200" height="200" referrerpolicy="no-referrer" onError={() => setFailed(true)} />
                        <i class="qr-perf" aria-hidden="true" />
                        <div class="qr-pp"><span class="lbl">พร้อมเพย์</span><b class="num">{maskPromptpay(profile.promptpay)}</b>
                            <button type="button" class="icon-btn" aria-label="คัดลอกเลขพร้อมเพย์" onClick={copy}><Icon name={copied ? "check" : "copy"} size={16} /></button></div>
                    </div>
                ) : (
                    <p class="empty" role="alert">{line.to} ยังไม่ได้ตั้งพร้อมเพย์ ให้เจ้าตัวตั้งในหน้า &ldquo;ฉัน&rdquo; หรือให้แอดมินกรอกให้</p>
                )}
            </div>
            <ol class="qr-steps"><li><i>1</i>สแกนในแอปธนาคาร</li><li><i>2</i>โอนเงิน</li><li><i>3</i>อัปโหลดสลิป</li></ol>
            <button type="button" class="btn block" onClick={onSlip}><Icon name="upload" size={16} />อัปโหลดสลิป</button>
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

/** ปุ่มของแอดมิน: ยืนยันว่าคู่นี้โอนเคลียร์แล้ว (กดสองครั้งกันพลาด) */
function AdminMark({ l, onMark }) {
    const [state, setState] = useState("idle");
    if (state === "idle") return <div class="xfer-acts"><button type="button" class="btn sm ghost" onClick={() => setState("ask")}><Icon name="check" size={14} />ยืนยันว่าเคลียร์แล้ว</button></div>;
    return (
        <div class="xfer-acts ask">
            <span class="lbl">{l.from} โอนให้ {l.to} {baht(l.amount)} แล้วใช่ไหม</span>
            <button type="button" class="btn sm" disabled={state === "busy"} onClick={async () => { setState("busy"); try { await onMark(l); } finally { setState("idle"); } }}>{state === "busy" ? "กำลังบันทึก" : "ใช่ เคลียร์แล้ว"}</button>
            <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>ยกเลิก</button>
        </div>
    );
}

/** แอดมิน: ส่งข้อความเตือนยอดค้างให้ทุกคนที่ติดหนี้ (ทาง LINE ส่วนตัว พร้อม QR) ถามยืนยันก่อน และระบบกันส่งซ้ำภายใน 12 ชั่วโมง */
function RemindAll({ month, onError, onInfo }) {
    const [state, setState] = useState("idle");
    if (state === "idle") return <div class="xfer-acts"><button type="button" class="btn sm ghost" onClick={() => setState("ask")}><Icon name="bell" size={14} />เตือนทุกคนที่ค้าง</button></div>;
    return (
        <div class="xfer-acts ask">
            <span class="lbl">ส่งข้อความเตือนทาง LINE ให้ทุกคนที่ยังค้างยอดเดือน {monthLabel(month)} ใช่ไหม</span>
            <button type="button" class="btn sm" disabled={state === "busy"} onClick={async () => { setState("busy"); try { onInfo(await remindAllDebtors(month)); } catch (e) { onError(e.message); } setState("idle"); }}>{state === "busy" ? "กำลังส่ง" : "ใช่ ส่งเลย"}</button>
            <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>ยกเลิก</button>
        </div>
    );
}

/** บัตรโอนหนึ่งคู่: รูปคนโอน -> ยอด -> รูปคนรับ (ฉันขึ้นสีส้มอ่อน เพื่อนที่ต้องโอนให้ฉันขึ้นสีเขียวอ่อน) */
function Line({ l, profile, profiles, onQr, onSlip, admin, onMark }) {
    const mine = l.role === "pay";
    const recv = l.role === "receive";
    const side = (name, isMe) => <span class="xfer-who"><Avatar name={name} pictureUrl={profiles[name] && profiles[name].pictureUrl} /><b>{isMe ? "ฉัน" : name}</b></span>;
    const label = mine ? `โอนให้ ${l.to}` : recv ? `${l.from} ต้องโอนให้คุณ` : `${l.from} โอนให้ ${l.to}`;
    return (
        <li class={`xfer ${mine ? "is-pay" : recv ? "is-rcv" : ""}`} aria-label={`${label} ${baht(l.amount)}`}>
            <div class="xfer-path">
                {side(l.from, mine)}
                <span class="xfer-mid"><span class={`num xfer-amt ${mine ? "pay" : recv ? "rcv" : ""}`}>{baht(l.amount)}</span></span>
                {side(l.to, recv)}
            </div>
            <p class="xfer-cap">{label}</p>
            {mine && !validPromptpay(profile && profile.promptpay) && <small class="warn-pp">{l.to} ยังไม่ได้ตั้งพร้อมเพย์</small>}
            {mine && (
                <div class="xfer-acts">
                    <button type="button" class="btn sm" onClick={() => onQr(l)}><Icon name="qr" size={14} />QR โอน</button>
                    <button type="button" class="btn sm ghost" onClick={() => onSlip(l)}><Icon name="upload" size={14} />อัปโหลดสลิป</button>
                </div>
            )}
            {admin && <AdminMark l={l} onMark={onMark} />}
        </li>
    );
}

export function ClearPage({ model, profiles, month, onChanged, isAdmin = false, privateMode = false, adminName = "", onError = () => {}, onInfo = () => {}, back = null }) {
    const mark = async (l) => { try { await manualSettle({ from: l.from, to: l.to, amount: l.amount, month, adminName }); onChanged(); } catch (e) { onError(e.message); } };
    const owedToMe = model.lines.filter((l) => l.role === "receive").reduce((a, l) => a + l.amount, 0);
    const iOwe = model.lines.filter((l) => l.role === "pay").reduce((a, l) => a + l.amount, 0);
    const [qr, setQr] = useState(null);
    const [slip, setSlip] = useState(null);
    const [moveTarget, setMoveTarget] = useState(null);
    const byName = useMemo(() => Object.fromEntries((profiles || []).map((p) => [p.name, p])), [profiles]);
    const receivedBack = back ? back.receivedSat / 100 : 0;
    const paidBack = back ? back.paidSat / 100 : 0;
    return (
        <div class="home-grid">
            <div class="col">
                {!model.cleared && (
                    <section class="card hero clear-hero" aria-label="สรุปยอดค้าง">
                        <div class="hero-top">
                            <DateTile month={month} today={bangkokToday()} />
                            <div><p class="lbl">ยอดค้างระหว่างเพื่อน</p>{isAdmin && <span class="admin-tag"><Icon name="shield" size={14} />โหมดแอดมิน</span>}</div>
                        </div>
                        <div class="strip hero-strip">
                            <div><p class="lbl">เพื่อนต้องโอนให้ฉัน</p><p class="num mid">{baht(owedToMe)}</p></div>
                            <div class="vl" />
                            <div><p class="lbl">ฉันต้องโอน</p><p class="num mid">{baht(iOwe)}</p></div>
                        </div>
                        {(receivedBack > 0 || paidBack > 0) && (
                            <p class="lbl hero-split">
                                {receivedBack > 0 && <>ได้คืนจากเพื่อนแล้ว <span class="num">{baht(receivedBack)}</span> (ไม่นับเป็นรายรับ)</>}
                                {receivedBack > 0 && paidBack > 0 && " · "}
                                {paidBack > 0 && <>โอนคืนเพื่อนแล้ว <span class="num">{baht(paidBack)}</span></>}
                            </p>
                        )}
                    </section>
                )}
                <section class="card">
                    <SectionTitle icon="swap" title={month === bangkokToday().slice(0, 7) ? "ยอดที่ต้องโอนเดือนนี้" : `ยอดที่ต้องโอนของเดือน ${monthLabel(month)}`} note={model.cleared ? undefined : `${model.lines.length} รายการ`} />
                    {isAdmin && !model.cleared && <RemindAll month={month} onError={onError} onInfo={onInfo} />}
                    {model.cleared ? (
                        <div class="cleared-box">
                            <div class="cleared-ico">
                                <Icon name="check" size={24} />
                            </div>
                            <div class="cleared-body">
                                <h3 class="cleared-t">เคลียร์ครบแล้ว</h3>
                                <p class="cleared-s">{month === bangkokToday().slice(0, 7) ? (privateMode ? "คุณไม่มียอดค้างกับใครในเดือนนี้" : "ไม่มียอดค้างชำระในเดือนนี้ ทุกคนจ่ายครบเรียบร้อย") : (privateMode ? `คุณไม่มียอดค้างกับใครในเดือน ${monthLabel(month)}` : `ไม่มียอดค้างชำระในเดือน ${monthLabel(month)} ทุกคนจ่ายครบเรียบร้อย`)}</p>
                            </div>
                        </div>
                    ) : (
                        <ul class="plain xfer-list">{model.lines.map((l) => <Line key={l.from + l.to} l={l} profile={byName[l.to]} profiles={byName} onQr={setQr} onSlip={setSlip} admin={isAdmin} onMark={mark} />)}</ul>
                    )}
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="check" title="ประวัติที่ยืนยันแล้ว" />
                    {model.history.length === 0 && <p class="empty">{month === bangkokToday().slice(0, 7) ? "ยังไม่มีรายการเคลียร์เงินในเดือนนี้" : `ยังไม่มีรายการเคลียร์เงินในเดือน ${monthLabel(month)}`}</p>}
                    <ul class="plain">{model.history.map((h) => (
                        <li class="row hist" key={h.id}>
                            <span class="ico ok"><Icon name="check" size={16} /></span>
                            <div class="lr-b">
                                <div class="lr-1"><span class="t">{h.from} โอนให้ {h.to}</span><span class="num v rcv">{baht(h.amount)}</span></div>
                                <div class="lr-2">
                                    <span class="s">{h.manual ? "แอดมินยืนยัน" : "ตรวจจากสลิป"}</span>
                                    {isAdmin && (
                                        <span class="lr-acts">
                                            <button
                                                type="button"
                                                class="mini-month-btn num"
                                                aria-label={`ย้ายเดือนของ ${h.from} ให้ ${h.to}`}
                                                onClick={() => setMoveTarget(h)}
                                            >
                                                <span>{monthLabel(h.month || month)}</span>
                                                <Icon name="down" size={12} class="mute" />
                                            </button>
                                            <DeleteButton label={`${h.from} ให้ ${h.to}`} onConfirm={async () => { try { await deleteSettlement(h.id); onChanged(); } catch (e) { onError(e.message); } }} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}</ul>
                </section>
            </div>
            {qr && <QrSheet line={qr} profile={byName[qr.to]} onClose={() => setQr(null)} onSlip={() => { setSlip(qr); setQr(null); }} />}
            {slip && <SlipSheet line={slip} month={month} onClose={() => setSlip(null)} onDone={onChanged} />}
            {moveTarget && (
                <Sheet title={`ย้ายเดือน (${moveTarget.from} ให้ ${moveTarget.to})`} onClose={() => setMoveTarget(null)}>
                    <p class="lbl">เลือกเดือนที่ต้องการย้ายรายการนี้ไป</p>
                    <div class="c-select-list">
                        {lastMonths(bangkokToday().slice(0, 7), 12).map((m) => {
                            const isCur = m === (moveTarget.month || month);
                            return (
                                <button
                                    type="button"
                                    key={m}
                                    class={`c-select-item ${isCur ? "on" : ""}`}
                                    onClick={async () => {
                                        try {
                                            await moveSettlementMonth(moveTarget.id, m);
                                            setMoveTarget(null);
                                            onChanged();
                                        } catch (ex) {
                                            onError(ex.message);
                                        }
                                    }}
                                >
                                    <span class="c-select-item-text num">{monthLabel(m)}</span>
                                    {isCur && <Icon name="check" size={18} class="rcv" />}
                                </button>
                            );
                        })}
                    </div>
                </Sheet>
            )}
        </div>
    );
}
