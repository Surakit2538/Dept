import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { Icon, Mark, iconFor } from "./icons.jsx";
import { signIn, loadMembers, loadPastMonth, watchMonth, loadWallet, addWallet, bangkokToday, clearCache } from "./data.js";
import { buildHomeModel, buildMonthly, lastMonths, shiftMonth, monthLabel, monthShort, baht } from "./model.js";

const TABS = [
    { key: "home", label: "หน้าแรก", icon: "home" },
    { key: "bills", label: "บิล", icon: "bill" },
    { key: "clear", label: "เคลียร์เงิน", icon: "swap" },
    { key: "wallet", label: "กระเป๋า", icon: "wallet" },
    { key: "me", label: "ฉัน", icon: "user" }
];
const CAT_ICON = { food: "food", bills: "bolt", goods: "bag", travel: "car", other: "dots" };
const MONTHS_BACK = 12; // โหลดย้อนหลังกี่เดือน
const CHART_MONTHS = 6; // กราฟรายเดือนแสดงกี่เดือน

function MonthPicker({ month, onChange, min, max }) {
    return (
        <div class="month" role="group" aria-label="เลือกเดือน">
            <button type="button" aria-label="เดือนก่อนหน้า" disabled={month <= min} onClick={() => onChange(shiftMonth(month, -1))}><Icon name="left" size={16} /></button>
            <span class="num">{monthLabel(month)}</span>
            <button type="button" aria-label="เดือนถัดไป" disabled={month >= max} onClick={() => onChange(shiftMonth(month, 1))}><Icon name="right" size={16} /></button>
        </div>
    );
}

/* ---------- วงแหวน: ใช้ไปกี่เปอร์เซ็นต์ของรายรับ ---------- */
function Ring({ percent }) {
    const r = 42, c = 2 * Math.PI * r;
    const p = Math.max(0, Math.min(100, percent));
    return (
        <div class="ring" role="img" aria-label={`ใช้ไป ${percent}% ของรายรับ`}>
            <svg viewBox="0 0 100 100" width="112" height="112" aria-hidden="true">
                <circle cx="50" cy="50" r={r} fill="none" stroke="var(--chip)" stroke-width="10" />
                <circle cx="50" cy="50" r={r} fill="none" stroke={percent > 100 ? "var(--pay)" : "var(--pay)"} stroke-width="10" stroke-linecap="round"
                    stroke-dasharray={`${(c * p) / 100} ${c}`} transform="rotate(-90 50 50)" />
            </svg>
            <div class="ring-t"><b class="num">{percent}%</b><span>ของรายรับ</span></div>
        </div>
    );
}

function Hero({ m }) {
    const hasIncome = m.incomeSat > 0;
    const over = hasIncome && m.netSat < 0;
    const label = !hasIncome ? "ใช้ไปเดือนนี้" : over ? "ใช้เกินรายรับ" : "เหลือใช้เดือนนี้";
    const value = !hasIncome ? m.spentSat / 100 : Math.abs(m.netSat) / 100;
    const tone = !hasIncome || over ? "pay" : "rcv";
    return (
        <section class="card hero">
            <div class="hero-l">
                <div class="lbl">{label}</div>
                <div class={`big num ${tone}`}>{baht(Math.round(value))}</div>
                <div class="chips">
                    <span class="chip"><Icon name="down" size={14} class="rcv" />รายรับ <b class="num">{baht(m.incomeSat / 100)}</b></span>
                    <span class="chip"><Icon name="up" size={14} class="pay" />ใช้ไป <b class="num">{baht(m.spentSat / 100)}</b></span>
                </div>
                <div class="lbl" style={{ marginTop: "10px" }}>ส่วนตัว {baht(m.personalSat / 100)} &middot; ส่วนของฉันในกลุ่ม {baht(m.groupShareSat / 100)}</div>
            </div>
            {hasIncome ? <Ring percent={m.spentPercent} /> : (
                <div class="hint"><Icon name="wallet" size={22} />ยังไม่ได้บันทึกรายรับ<br />กดปุ่ม &ldquo;บันทึก&rdquo; เพื่อเพิ่ม</div>
            )}
        </section>
    );
}

function SectionTitle({ icon, title, note }) {
    return (
        <div class="sec-t">
            <span class="ico"><Icon name={icon} /></span>
            <div><h3>{title}</h3>{note && <p>{note}</p>}</div>
        </div>
    );
}

/* ---------- ใช้ไปกับอะไร: แถวไอคอน + แถบ อ่านจบในแวบเดียว ---------- */
function Categories({ cats }) {
    if (cats.length === 0) return null;
    const top = cats[0];
    return (
        <section class="card">
            <SectionTitle icon="bag" title="ใช้ไปกับอะไร" note={`ส่วนใหญ่ไปกับ ${top.label} ${top.percent}%`} />
            <div class="cats">
                {cats.map((c) => (
                    <div class="cat" key={c.key}>
                        <span class="ico big-ico"><Icon name={CAT_ICON[c.key] || "dots"} /></span>
                        <div class="cat-b">
                            <div class="cat-r"><span>{c.label}</span><span class="num"><b>{c.percent}%</b> <em>{baht(c.satang / 100)}</em></span></div>
                            <div class="bar"><i style={{ width: `${Math.max(3, Math.round((c.percent / top.percent) * 100))}%` }} /></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------- รายเดือนก่อน แตะเดือนแล้วดูรายวัน ---------- */
function Monthly({ series, selected, onSelect }) {
    const max = Math.max(1, ...series.map((s) => Math.max(s.spentSat, s.incomeSat)));
    const hasIncome = series.some((s) => s.incomeSat > 0);
    return (
        <>
            <SectionTitle icon="bill" title="ใช้ไปรายเดือน" note="แตะแท่งเพื่อดูรายวันของเดือนนั้น" />
            <div class="months" role="group" aria-label="ใช้ไปรายเดือน">
                {series.map((s) => {
                    const on = s.month === selected;
                    return (
                        <button type="button" class={`mcol ${on ? "on" : ""}`} key={s.month} aria-pressed={on} aria-label={`${monthLabel(s.month)} ใช้ไป ${baht(s.spentSat / 100)}`} onClick={() => onSelect(s.month)}>
                            <span class="mval num">{s.spentSat > 0 ? shortBaht(s.spentSat / 100) : ""}</span>
                            <span class="mplot">
                                <i class="mbar" style={{ height: `${Math.max(2, Math.round((s.spentSat / max) * 100))}%` }} />
                                {s.incomeSat > 0 && <i class="mline" style={{ bottom: `${Math.round((s.incomeSat / max) * 100)}%` }} />}
                            </span>
                            <span class="mlab">{monthShort(s.month)}</span>
                        </button>
                    );
                })}
            </div>
            {hasIncome && <div class="legend2"><span><i class="k-bar" />ใช้ไป</span><span><i class="k-line" />รายรับ</span></div>}
        </>
    );
}

const shortBaht = (n) => (n >= 10000 ? `${Math.round(n / 1000)}k` : n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(Math.round(n)));

function Daily({ month, daily }) {
    if (!daily.length) return null;
    const max = Math.max(1, ...daily.map((d) => d.satang));
    const top = daily.reduce((a, d) => (d.satang > a.satang ? d : a), daily[0]);
    const total = daily.reduce((a, d) => a + d.satang, 0);
    return (
        <div class="daily">
            <div class="hd-row"><h4>รายวันของ {monthLabel(month)}</h4>{total > 0 && <span class="lbl">วันที่ใช้มากสุด {top.day} {monthShort(month)} {baht(top.satang / 100)}</span>}</div>
            <div class="days" role="img" aria-label="ใช้ไปรายวัน">
                {daily.map((d) => <i key={d.day} class={d.satang === top.satang && total > 0 ? "peak" : d.today ? "today" : ""} style={{ height: `${Math.max(3, Math.round((d.satang / max) * 100))}%` }} />)}
            </div>
            <div class="axis num"><span>1</span><span>{Math.ceil(daily.length / 2)}</span><span>{daily.length}</span></div>
        </div>
    );
}

/* ---------- หนี้ ---------- */
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

function Debts({ m }) {
    return (
        <section class="card">
            <SectionTitle icon="people" title="เพื่อนค้างฉัน" note={m.owedTotal > 0 ? `รอรับคืนรวม ${baht(m.owedTotal)}` : undefined} />
            {m.owedToMe.length === 0 && <div class="empty"><Icon name="check" size={16} class="rcv" /> ไม่มีใครค้างคุณในเดือนนี้</div>}
            {m.owedToMe.map((o) => <DebtRow key={o.name} d={o} tone="g" action="ขอ" />)}
            {m.iOweTotal > 0 && (
                <>
                    <div class="sub-t">ฉันค้างเพื่อน <span class="num pay">{baht(m.iOweTotal)}</span></div>
                    {m.iOwe.map((o) => <DebtRow key={o.name} d={o} tone="p" action="โอน" />)}
                </>
            )}
        </section>
    );
}

function Recent({ items }) {
    if (!items.length) return null;
    return (
        <section class="card">
            <SectionTitle icon="bill" title="รายการล่าสุด" />
            {items.map((r) => (
                <div class="row" key={r.kind + r.id}>
                    <span class="ico"><Icon name={r.kind === "income" ? "down" : iconFor(r.icon)} /></span>
                    <div class="grow"><div class="t">{r.desc || "ไม่ระบุ"}</div><div class="s">{r.kind === "group" ? "ส่วนของฉันในกลุ่ม" : r.kind === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {r.date.slice(8, 10)}/{r.date.slice(5, 7)}</div></div>
                    <div class={`num ${r.kind === "income" ? "rcv" : ""}`}>{baht(r.satang / 100, { decimals: 2 })}</div>
                </div>
            ))}
        </section>
    );
}

function Home({ model, series, month, onMonth, daily, onRefresh }) {
    return (
        <div class="home-grid">
            <div class="col">
                <Hero m={model} />
                <Categories cats={model.categories} />
                <section class="card">
                    <Monthly series={series} selected={month} onSelect={onMonth} />
                    <Daily month={month} daily={daily} />
                </section>
            </div>
            <div class="col">
                <Debts m={model} />
                <Recent items={model.recent} />
                <button type="button" class="btn sm ghost" style={{ alignSelf: "flex-start" }} onClick={onRefresh}>รีเฟรชข้อมูลย้อนหลัง</button>
            </div>
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
    const since = useMemo(() => shiftMonth(nowMonth, -(MONTHS_BACK - 1)), [nowMonth]);
    const [month, setMonth] = useState(nowMonth);
    const [members, setMembers] = useState(null);
    const [byMonth, setByMonth] = useState({}); // { "2026-11": { transactions, settlements, wallet } }
    const [loadError, setLoadError] = useState(false);
    const [sheet, setSheet] = useState(false);
    const [toast, setToast] = useState("");
    const [reload, setReload] = useState(0);

    const patchMonth = (m, part) => setByMonth((cur) => ({ ...cur, [m]: { ...(cur[m] || {}), ...part } }));

    useEffect(() => {
        signIn().then((u) => { if (u) setAuth({ state: "ok", user: u }); }).catch((e) => setAuth({ state: "error", message: e.message }));
    }, []);
    useEffect(() => {
        const h = () => setTab(location.hash.slice(1) || "home");
        addEventListener("hashchange", h);
        return () => removeEventListener("hashchange", h);
    }, []);
    // สมาชิก: อ่านครั้งเดียว (จำไว้ 10 นาที)
    useEffect(() => {
        if (auth.state !== "ok") return;
        loadMembers().then(setMembers).catch(() => setLoadError(true));
    }, [auth.state, reload]);
    // เดือนนี้: ฟังแบบสด (อ่านเฉพาะรายการที่เปลี่ยน)
    useEffect(() => {
        if (auth.state !== "ok") return undefined;
        return watchMonth(nowMonth, (d) => { if (d.error) setLoadError(true); else patchMonth(nowMonth, d); });
    }, [auth.state, nowMonth]);
    useEffect(() => {
        if (auth.state !== "ok") return;
        loadWallet(nowMonth, { current: true }).then((w) => patchMonth(nowMonth, { wallet: w })).catch((e) => setToast(e.message));
    }, [auth.state, nowMonth, reload]);
    // เดือนที่ผ่านมาแล้ว (สำหรับกราฟรายเดือน และเดือนที่เลือกดู): อ่านครั้งเดียวแล้วจำไว้ 1 วัน
    const wantedMonths = useMemo(() => [...new Set([...lastMonths(nowMonth, CHART_MONTHS), month])].filter((m) => m !== nowMonth), [nowMonth, month]);
    useEffect(() => {
        if (auth.state !== "ok") return;
        wantedMonths.forEach((m) => {
            if (byMonth[m] && byMonth[m].transactions && byMonth[m].wallet) return;
            Promise.all([loadPastMonth(m), loadWallet(m)])
                .then(([g, w]) => patchMonth(m, { transactions: g.transactions, settlements: g.settlements, wallet: w }))
                .catch(() => setLoadError(true));
        });
    }, [auth.state, wantedMonths]);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);

    const monthsReady = auth.state === "ok" && members && wantedMonths.every((m) => byMonth[m] && byMonth[m].transactions && byMonth[m].wallet) && byMonth[nowMonth] && byMonth[nowMonth].transactions && byMonth[nowMonth].settlements && byMonth[nowMonth].wallet;
    const all = useMemo(() => {
        if (!monthsReady) return null;
        const vals = Object.values(byMonth);
        return {
            transactions: vals.flatMap((v) => v.transactions || []),
            settlements: vals.flatMap((v) => v.settlements || []),
            wallet: vals.flatMap((v) => v.wallet || [])
        };
    }, [monthsReady, byMonth]);
    const model = useMemo(() => (all ? buildHomeModel({ name: auth.user.name, month, today, members, transactions: all.transactions, settlements: all.settlements, walletItems: all.wallet }) : null), [all, auth, members, month, today]);
    const series = useMemo(() => (all ? buildMonthly({ name: auth.user.name, months: lastMonths(nowMonth, CHART_MONTHS), transactions: all.transactions, settlements: all.settlements, walletItems: all.wallet }) : []), [all, auth, nowMonth]);
    const refreshAll = () => { clearCache(); setByMonth({}); setMembers(null); setLoadError(false); setReload((n) => n + 1); };

    if (auth.state === "loading") return <div class="app"><div class="center"><Mark size={64} /><div>กำลังเข้าสู่ระบบ</div></div></div>;
    if (auth.state === "error") return <div class="app"><div class="center"><Mark size={64} /><div role="alert">{auth.message}</div><a class="btn" href="/index.html">ไปหน้าเดิม</a></div></div>;

    const go = (k) => { location.hash = k; setTab(k); };
    // ถ้าเดือนที่เลือกไม่อยู่ใน 6 เดือนของกราฟ ให้กราฟยังแสดง 6 เดือนล่าสุด (เดือนที่เลือกไม่ถูกไฮไลต์)
    return (
        <div class="app">
            <aside class="side" aria-label="เมนูหลัก">
                <div class="brand"><Mark size={28} />Dept Money</div>
                <nav>
                    {TABS.map((t) => <button type="button" key={t.key} class={`snav ${tab === t.key ? "on" : ""}`} aria-current={tab === t.key ? "page" : undefined} onClick={() => go(t.key)}><Icon name={t.icon} />{t.label}</button>)}
                </nav>
                <button type="button" class="btn side-add" onClick={() => setSheet(true)}><Icon name="plus" />บันทึกรายการ</button>
                <div class="side-me"><span class="av" aria-hidden="true">{[...auth.user.name][0]}</span><span>{auth.user.name}</span></div>
            </aside>
            <main class="page">
                <div class="top">
                    <div class="brand mobile-only"><Mark size={24} />Dept Money</div>
                    <h1 class="page-title">{TABS.find((t) => t.key === tab)?.label}</h1>
                    {tab === "home" && <MonthPicker month={month} onChange={setMonth} min={since} max={nowMonth} />}
                </div>
                {tab === "home" && (loadError ? <div class="card" role="alert">โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้านี้ <button type="button" class="btn sm ghost" onClick={refreshAll}>ลองใหม่</button></div> : model ? <Home model={model} series={series} month={month} onMonth={setMonth} daily={model.daily} onRefresh={refreshAll} /> : <div class="empty">กำลังโหลดข้อมูล</div>)}
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
