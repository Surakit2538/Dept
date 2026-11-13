import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { Icon, Mark, iconFor } from "./icons.jsx";
import { signIn, watchGroup, loadWallet, addWallet, bangkokToday } from "./data.js";
import { buildHomeModel, shiftMonth, monthLabel, baht, CATEGORIES } from "./model.js";

const TABS = [
    { key: "home", label: "หน้าแรก", icon: "home" },
    { key: "bills", label: "บิล", icon: "bill" },
    { key: "clear", label: "เคลียร์เงิน", icon: "swap" },
    { key: "wallet", label: "กระเป๋า", icon: "wallet" },
    { key: "me", label: "ฉัน", icon: "user" }
];

function MonthPicker({ month, onChange, max }) {
    return (
        <div class="month" role="group" aria-label="เลือกเดือน">
            <button type="button" aria-label="เดือนก่อนหน้า" onClick={() => onChange(shiftMonth(month, -1))}><Icon name="left" size={16} /></button>
            <span class="num">{monthLabel(month)}</span>
            <button type="button" aria-label="เดือนถัดไป" disabled={month >= max} onClick={() => onChange(shiftMonth(month, 1))}><Icon name="right" size={16} /></button>
        </div>
    );
}

function Home({ model, me }) {
    const m = model;
    const tone = m.netSat >= 0 ? "rcv" : "pay";
    return (
        <>
            <div>
                <div class="lbl">สุทธิเดือนนี้</div>
                <div class={`big num ${tone}`}>{baht(m.net, { sign: true })}</div>
                <div class="strip">
                    <div><div class="lbl">รายรับ</div><div class="num">{baht(m.incomeSat / 100, { decimals: 2 })}</div></div>
                    <div class="vl" />
                    <div><div class="lbl">ใช้ไป</div><div class="num pay">{baht(m.spentSat / 100, { decimals: 2 })}</div></div>
                </div>
                {m.spentPercent !== null ? (
                    <>
                        <div class="bar" style={{ marginTop: "12px" }} role="img" aria-label={`ใช้ไป ${m.spentPercent}% ของรายรับ`}><i style={{ width: `${Math.min(100, m.spentPercent)}%` }} /></div>
                        <div class="axis"><span>ใช้ไป {m.spentPercent}% ของรายรับ</span><span>{m.spentPercent <= 100 ? `เหลือ ${100 - m.spentPercent}%` : "ใช้เกินรายรับ"}</span></div>
                    </>
                ) : <div class="axis"><span>ยังไม่มีรายรับเดือนนี้ กดปุ่มบันทึกเพื่อเพิ่ม</span></div>}
            </div>

            {m.categories.length > 0 && (
                <div class="card">
                    <div class="hd-row"><h3>ใช้ไปกับอะไร</h3><span class="lbl">หมวดจากไอคอนรายการ</span></div>
                    <div class="stack" role="img" aria-label="สัดส่วนรายจ่ายตามหมวด">
                        {m.categories.map((c, i) => <i key={c.key} style={{ width: `${c.percent}%`, opacity: [1, .75, .55, .35, .2][i] ?? .2 }} />)}
                    </div>
                    <div class="legend">
                        {m.categories.map((c, i) => <span key={c.key}><em style={{ opacity: [1, .75, .55, .35, .2][i] ?? .2 }} />{c.label}<b>{c.percent}%</b></span>)}
                    </div>
                </div>
            )}

            {m.daily.length > 0 && m.spentSat > 0 && (
                <div class="card">
                    <div class="hd-row"><h3>ใช้ไปรายวัน</h3><span class="num lbl">เฉลี่ย {baht(m.average)} ต่อวัน</span></div>
                    <DailyBars days={m.daily} />
                    <div class="axis num"><span>1</span><span>{m.daily[m.daily.length - 1].today ? `${m.daily.length} วันนี้` : m.daily.length}</span></div>
                </div>
            )}

            <div class="card">
                <div class="hd-row"><h3>เพื่อนค้างฉัน</h3>{m.owedTotal > 0 && <span class="num rcv" style={{ fontWeight: 600, fontSize: "13px" }}>รวม {baht(m.owedTotal)}</span>}</div>
                {m.owedToMe.length === 0 && <div class="empty">ไม่มีใครค้างคุณในเดือนนี้</div>}
                {m.owedToMe.map((o) => <DebtRow key={o.name} d={o} tone="g" action="ขอ" />)}
                {m.iOweTotal > 0 && (
                    <>
                        <div class="hd-row" style={{ marginTop: "14px" }}><h3>ฉันค้างเพื่อน</h3><span class="num pay" style={{ fontWeight: 600, fontSize: "13px" }}>รวม {baht(m.iOweTotal)}</span></div>
                        {m.iOwe.map((o) => <DebtRow key={o.name} d={o} tone="p" action="โอน" />)}
                    </>
                )}
            </div>

            {m.recent.length > 0 && (
                <div class="card" style={{ paddingBlock: "6px" }}>
                    {m.recent.map((r) => (
                        <div class="row" key={r.kind + r.id}>
                            <span class="ico"><Icon name={r.kind === "income" ? "down" : iconFor(r.icon)} /></span>
                            <div class="grow"><div class="t">{r.desc || "ไม่ระบุ"}</div><div class="s">{r.kind === "group" ? "ส่วนของฉันในกลุ่ม" : r.kind === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {r.date.slice(8, 10)}/{r.date.slice(5, 7)}</div></div>
                            <div class={`num ${r.kind === "income" ? "rcv" : ""}`}>{baht(r.satang / 100, { decimals: 2 })}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

function DailyBars({ days }) {
    const max = Math.max(...days.map((d) => d.satang), 1);
    return (
        <div class="days" role="img" aria-label="ใช้ไปรายวัน">
            {days.map((d) => <i key={d.day} class={d.today ? "today" : ""} style={{ height: `${Math.max(3, Math.round((d.satang / max) * 100))}%` }} />)}
        </div>
    );
}

function DebtRow({ d, tone, action }) {
    return (
        <div class="dbar">
            <div class="r1">
                <div class="av" aria-hidden="true">{[...d.name][0] || "?"}</div>
                <div style={{ flex: 1, fontWeight: 500, minWidth: 0 }}>{d.name}</div>
                <div class={`num ${tone === "g" ? "rcv" : "pay"}`} style={{ fontWeight: 600 }}>{baht(d.amount)}</div>
                <a class="btn sm ghost" href="/index.html#clear" title="เปิดหน้าเคลียร์เงิน (หน้าเดิม)"><Icon name={tone === "g" ? "qr" : "swap"} size={14} />{action}</a>
            </div>
            <div class={`bar ${tone === "g" ? "g" : ""}`}><i style={{ width: `${d.share}%` }} /></div>
        </div>
    );
}

/* ---------- ปุ่มบันทึก + เมนูเลื่อนขึ้น ---------- */
function AddSheet({ onClose, onSaved }) {
    const [mode, setMode] = useState(null); // null | "personal" | "income"
    if (mode) return <AddForm type={mode === "income" ? "income" : "expense"} onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} />;
    return (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div class="sheet" role="dialog" aria-label="บันทึกรายการ">
                <div class="grab" />
                <a class="opt-row" href="/index.html#add" style={{ textDecoration: "none", color: "inherit" }}>
                    <span class="ico"><Icon name="people" /></span>
                    <div><b>บิลหารกับเพื่อน</b><small>เลือกคนหาร เท่ากัน กำหนดเอง ผ่อน หรือรายเดือน (ใช้ฟอร์มหน้าเดิมไปก่อน)</small></div>
                </a>
                <button type="button" class="opt-row" onClick={() => setMode("personal")}>
                    <span class="ico"><Icon name="lock" /></span>
                    <div><b>รายจ่ายส่วนตัว</b><small>เพื่อนไม่เห็น ไม่กระทบยอดหนี้</small></div>
                </button>
                <button type="button" class="opt-row" onClick={() => setMode("income")}>
                    <span class="ico"><Icon name="down" class="rcv" /></span>
                    <div><b>รายรับ</b><small>เงินเดือน ฯลฯ ไม่รวมเพื่อนโอนคืนหนี้</small></div>
                </button>
            </div>
        </div>
    );
}

function AddForm({ type, onBack, onClose, onSaved }) {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(bangkokToday());
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const income = type === "income";
    async function submit(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!Number.isFinite(n) || n <= 0) { setErr("กรอกจำนวนเงินให้ถูกต้อง"); return; }
        setBusy(true);
        try {
            await addWallet({ type, amount: n, desc: desc.trim() || undefined, date });
            onSaved(income ? "บันทึกรายรับแล้ว" : "บันทึกรายจ่ายแล้ว");
            onClose();
        } catch (ex) {
            setErr(ex.message);
            setBusy(false);
        }
    }
    return (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <form class="sheet" onSubmit={submit} aria-label={income ? "บันทึกรายรับ" : "บันทึกรายจ่ายส่วนตัว"}>
                <div class="grab" />
                <div class="hd-row"><b>{income ? "บันทึกรายรับ" : "บันทึกรายจ่ายส่วนตัว"}</b><button type="button" class="btn sm ghost" onClick={onBack}>เปลี่ยนประเภท</button></div>
                <div class="field"><label for="f-amount">จำนวนเงิน (บาท)</label><input id="f-amount" type="number" inputmode="decimal" step="0.01" min="0" autofocus value={amount} onInput={(e) => setAmount(e.currentTarget.value)} /></div>
                <div class="field"><label for="f-desc">รายการ</label><input id="f-desc" type="text" maxLength={100} placeholder={income ? "เช่น เงินเดือน" : "เช่น กาแฟ"} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
                <div class="field"><label for="f-date">วันที่</label><input id="f-date" type="date" value={date} onInput={(e) => setDate(e.currentTarget.value)} /></div>
                {err && <div class="msg" role="alert">{err}</div>}
                <button type="submit" class="btn" style={{ width: "100%", marginTop: "16px" }} disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
            </form>
        </div>
    );
}

function Stub({ title, note, href }) {
    return (
        <div class="card stub">
            <h3>{title}</h3>
            <p>{note}</p>
            <a class="btn ghost" href={href}>เปิดหน้าเดิม</a>
        </div>
    );
}

function App() {
    const [auth, setAuth] = useState({ state: "loading" });
    const [tab, setTab] = useState(location.hash.slice(1) || "home");
    const today = useMemo(() => bangkokToday(), []);
    const nowMonth = today.slice(0, 7);
    const [month, setMonth] = useState(nowMonth);
    const [group, setGroup] = useState(null);
    const [wallet, setWallet] = useState([]);
    const [sheet, setSheet] = useState(false);
    const [toast, setToast] = useState("");
    const [reload, setReload] = useState(0);

    useEffect(() => {
        signIn().then((u) => { if (u) setAuth({ state: "ok", user: u }); }).catch((e) => setAuth({ state: "error", message: e.message }));
    }, []);
    useEffect(() => {
        const h = () => setTab(location.hash.slice(1) || "home");
        addEventListener("hashchange", h);
        return () => removeEventListener("hashchange", h);
    }, []);
    useEffect(() => {
        if (auth.state !== "ok") return undefined;
        setGroup(null);
        return watchGroup(month, (d) => setGroup(d));
    }, [auth.state, month]);
    useEffect(() => {
        if (auth.state !== "ok") return;
        loadWallet(month).then(setWallet).catch((e) => setToast(e.message));
    }, [auth.state, month, reload]);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);

    const model = useMemo(() => {
        if (auth.state !== "ok" || !group || group.error) return null;
        return buildHomeModel({ name: auth.user.name, month, today, members: group.members, transactions: group.transactions, settlements: group.settlements, walletItems: wallet });
    }, [auth, group, wallet, month, today]);

    if (auth.state === "loading") return <div class="shell"><div class="center"><Mark size={64} /><div>กำลังเข้าสู่ระบบ</div></div></div>;
    if (auth.state === "error") return <div class="shell"><div class="center"><Mark size={64} /><div role="alert">{auth.message}</div><a class="btn" href="/index.html">ไปหน้าเดิม</a></div></div>;

    const go = (k) => { location.hash = k; setTab(k); };
    return (
        <div class="shell">
            <main class="page">
                <div class="top">
                    <div class="brand"><Mark size={24} />Dept Money</div>
                    {tab === "home" && <MonthPicker month={month} onChange={setMonth} max={nowMonth} />}
                </div>
                {tab === "home" && (group && group.error ? <div class="card" role="alert">โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้านี้</div> : model ? <Home model={model} me={auth.user.name} /> : <div class="empty">กำลังโหลดข้อมูล</div>)}
                {tab === "bills" && <Stub title="บิล" note="หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน" href="/index.html#history" />}
                {tab === "clear" && <Stub title="เคลียร์เงิน" note="หน้านี้กำลังสร้าง ใช้หน้าเดิมไปก่อน (QR และอัปโหลดสลิปอยู่ที่นั่น)" href="/index.html#clear" />}
                {tab === "wallet" && <Stub title="กระเป๋า" note="หน้านี้กำลังสร้าง ตอนนี้ดูสรุปได้ที่หน้าแรก และบันทึกรายรับ/รายจ่ายได้จากปุ่มบันทึก" href="#home" />}
                {tab === "me" && <Stub title="ฉัน" note="หน้านี้กำลังสร้าง ตั้งค่าโปรไฟล์และสมาชิกใช้หน้าเดิมไปก่อน" href="/index.html#profile" />}
            </main>
            <button type="button" class="fab" onClick={() => setSheet(true)} aria-label="บันทึกรายการ"><Icon name="plus" />บันทึก</button>
            <nav class="tabbar" aria-label="เมนูหลัก"><div class="tabbar-in">
                {TABS.map((t) => <button type="button" key={t.key} class={`tab ${tab === t.key ? "on" : ""}`} aria-current={tab === t.key ? "page" : undefined} onClick={() => go(t.key)}><Icon name={t.icon} />{t.label}</button>)}
            </div></nav>
            {sheet && <AddSheet onClose={() => setSheet(false)} onSaved={(msg) => { setToast(msg); setReload((n) => n + 1); }} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </div>
    );
}

render(<App />, document.getElementById("app"));
