import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { Mark } from "./icons.jsx";
import { signIn, loadMembers, loadProfiles, loadPastMonth, watchMonth, loadWallet, addWallet, saveBill, bangkokToday, clearCache, invalidateMonth } from "./data.js";
import { buildHomeModel, buildMonthly, buildClearModel, buildWalletModel, buildBillsModel, lastMonths, shiftMonth } from "./model.js";
import { MonthPicker, Shell, Skeleton, ErrorState } from "./ui.jsx";
import { AddSheet } from "./add.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ClearPage } from "./pages/ClearPage.jsx";
import { WalletPage } from "./pages/WalletPage.jsx";
import { BillsPage } from "./pages/BillsPage.jsx";
import { MePage } from "./pages/MePage.jsx";

const MONTHS_BACK = 12; // เลือกย้อนหลังได้กี่เดือน
const CHART_MONTHS = 6; // กราฟรายเดือนแสดงกี่เดือน

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
    const [profiles, setProfiles] = useState(null);
    const [search, setSearch] = useState("");
    const [sheet, setSheet] = useState(null); // null | "menu" | "income"
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
    // โปรไฟล์สมาชิก (พร้อมเพย์/ชื่อจริง): โหลดเมื่อเปิดหน้าที่ต้องใช้เท่านั้น (อ่าน 14 ครั้ง จำไว้ 10 นาที)
    useEffect(() => {
        if (auth.state !== "ok" || !["clear", "me"].includes(tab) || profiles) return;
        loadProfiles().then(setProfiles).catch(() => setLoadError(true));
    }, [auth.state, tab, profiles]);
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
    const clearM = useMemo(() => (all ? buildClearModel({ name: auth.user.name, month, members, transactions: all.transactions, settlements: all.settlements }) : null), [all, auth, members, month]);
    const walletM = useMemo(() => (all ? buildWalletModel({ name: auth.user.name, month, walletItems: all.wallet, transactions: all.transactions, settlements: all.settlements }) : null), [all, auth, month]);
    const billsM = useMemo(() => (all ? buildBillsModel({ name: auth.user.name, month, transactions: all.transactions, search }) : null), [all, auth, month, search]);
    // หลังแก้ข้อมูล: ล้างที่จำไว้ของเดือนนั้นแล้วโหลดใหม่ (เดือนนี้บิลอัปเดตสดอยู่แล้ว โหลดเฉพาะกระเป๋าใหม่)
    const changed = (m = month) => {
        invalidateMonth(m);
        if (m === nowMonth) setReload((n) => n + 1);
        else setByMonth((cur) => { const c = { ...cur }; delete c[m]; return c; });
    };
    const refreshAll = () => { clearCache(); setByMonth({}); setMembers(null); setLoadError(false); setReload((n) => n + 1); };

    if (auth.state === "loading") return <div class="center"><Mark size={64} /><p>กำลังเข้าสู่ระบบ</p></div>;
    if (auth.state === "error") return <div class="center"><Mark size={64} /><p role="alert">{auth.message}</p><a class="btn" href="/index.html">ไปหน้าเดิม</a></div>;

    const go = (k) => { location.hash = k; setTab(k); window.scrollTo(0, 0); };
    const page = ["home", "bills", "clear", "wallet", "me"].includes(tab) ? tab : "home";
    const needsData = page !== "me";
    let body;
    if (needsData && loadError) body = <ErrorState onRetry={refreshAll} />;
    else if (page === "home") body = model ? <HomePage model={model} series={series} month={month} onMonth={setMonth} onAddIncome={() => setSheet("income")} /> : <Skeleton blocks={5} />;
    else if (page === "bills") body = billsM ? <BillsPage model={billsM} search={search} onSearch={setSearch} me={auth.user.name} isAdmin={auth.user.isAdmin} onChanged={() => changed()} onError={setToast} /> : <Skeleton blocks={2} />;
    else if (page === "clear") body = clearM && profiles ? <ClearPage model={clearM} profiles={profiles} month={month} onChanged={() => changed()} /> : <Skeleton blocks={2} />;
    else if (page === "wallet") body = walletM ? <WalletPage model={walletM} onChanged={() => changed()} onError={setToast} /> : <Skeleton blocks={3} />;
    else body = profiles ? <MePage auth={auth} profiles={profiles} onSaved={() => setProfiles(null)} onRefresh={refreshAll} /> : <Skeleton blocks={2} />;

    return (
        <>
            <Shell tab={page} onTab={go} userName={auth.user.name} onAdd={() => setSheet("menu")}
                tools={needsData && <MonthPicker month={month} onChange={setMonth} min={since} max={nowMonth} />}>
                {body}
            </Shell>
            {sheet && <AddSheet initial={sheet === "income" ? "income" : null} today={today} members={members || []} me={auth.user.name} save={addWallet} saveBill={saveBill} onClose={() => setSheet(null)}
                onSaved={(msg, months = []) => { setToast(msg); months.forEach((m) => changed(m)); setReload((n) => n + 1); }} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </>
    );
}

render(<App />, document.getElementById("app"));
