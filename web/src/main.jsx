import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { Mark } from "./icons.jsx";
import { signIn, loadMembers, loadProfiles, loadPastMonth, watchMonth, loadWalletMonths, addWallet, saveBill, bangkokToday, clearCache, invalidateMonth } from "./data.js";
import { buildHomeModel, buildMonthly, buildClearModel, buildWalletModel, buildBillsModel, suggestPeople, lastMonths, shiftMonth, validPromptpay } from "./model.js";
import { MonthPicker, Shell, Skeleton, ErrorState } from "./ui.jsx";
import { AddSheet } from "./add.jsx";
import { LinkPage, OnboardPage } from "./onboard.jsx";
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

    // หลังล็อกอิน: ยังไม่ผูกบัญชี -> เลือกชื่อ / สมาชิกที่ยังไม่กรอกชื่อจริงและพร้อมเพย์ -> กรอกก่อน (แอดมินข้าม) / ไม่งั้นเข้าแอป
    const accept = (u) => {
        if (u.needLink) setAuth({ state: "link", profile: u.profile, candidates: u.candidates });
        else if (!u.isAdmin && (!u.realName || !validPromptpay(u.promptpay))) setAuth({ state: "onboard", user: u });
        else setAuth({ state: "ok", user: u });
    };
    const patchMonth = (m, part) => setByMonth((cur) => ({ ...cur, [m]: { ...(cur[m] || {}), ...part } }));

    useEffect(() => {
        signIn().then((u) => { if (u) accept(u); }).catch((e) => setAuth({ state: "error", message: e.message }));
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
    // เดือนที่ผ่านมาแล้ว (สำหรับกราฟรายเดือน และเดือนที่เลือกดู): อ่านครั้งเดียวแล้วจำไว้ 1 วัน
    const wantedMonths = useMemo(() => [...new Set([...lastMonths(nowMonth, CHART_MONTHS), month])].filter((m) => m !== nowMonth), [nowMonth, month]);
    // กระเป๋า: เรียก API ครั้งเดียวได้ทั้งเดือนนี้และเดือนที่ยังไม่มีในเครื่อง
    useEffect(() => {
        if (auth.state !== "ok") return;
        const need = [nowMonth, ...wantedMonths.filter((m) => !(byMonth[m] && byMonth[m].wallet))];
        loadWalletMonths(need, nowMonth)
            .then((r) => Object.entries(r).forEach(([m, w]) => patchMonth(m, { wallet: w })))
            .catch((e) => setToast(e.message));
    }, [auth.state, nowMonth, reload, wantedMonths.filter((m) => !(byMonth[m] && byMonth[m].wallet)).join("|")]);
    // บิลและประวัติเคลียร์เงินของเดือนที่ผ่านมา (อ่านจาก Firestore ตรงๆ พร้อมกันทุกเดือน)
    useEffect(() => {
        if (auth.state !== "ok") return;
        wantedMonths.forEach((m) => {
            if (byMonth[m] && byMonth[m].transactions) return;
            loadPastMonth(m)
                .then((g) => patchMonth(m, { transactions: g.transactions, settlements: g.settlements }))
                .catch(() => setLoadError(true));
        });
    }, [auth.state, wantedMonths, wantedMonths.filter((m) => !(byMonth[m] && byMonth[m].transactions)).join("|")]);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);

    const done = (m) => byMonth[m] && byMonth[m].transactions && byMonth[m].settlements && byMonth[m].wallet;
    // แสดงหน้าได้เมื่อมีเดือนนี้และเดือนที่เลือก (กราฟค่อยตามมาทีหลัง ไม่ต้องรอทุกเดือน)
    const monthsReady = auth.state === "ok" && members && done(nowMonth) && done(month);
    const chartReady = monthsReady && wantedMonths.every(done);
    const all = useMemo(() => {
        if (!monthsReady) return null;
        const vals = Object.values(byMonth);
        return {
            transactions: vals.flatMap((v) => v.transactions || []),
            settlements: vals.flatMap((v) => v.settlements || []),
            wallet: vals.flatMap((v) => v.wallet || [])
        };
    }, [monthsReady, byMonth]);
    const suggested = useMemo(() => (all && members ? suggestPeople({ me: auth.user.name, members, transactions: all.transactions }) : []), [all, auth, members]);
    const model = useMemo(() => (all ? buildHomeModel({ name: auth.user.name, month, today, members, transactions: all.transactions, settlements: all.settlements, walletItems: all.wallet }) : null), [all, auth, members, month, today]);
    const series = useMemo(() => (all && chartReady ? buildMonthly({ name: auth.user.name, months: lastMonths(nowMonth, CHART_MONTHS), transactions: all.transactions, settlements: all.settlements, walletItems: all.wallet }) : null), [all, chartReady, auth, nowMonth]);
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
    if (auth.state === "error") return <div class="center"><Mark size={64} /><p role="alert">{auth.message}</p><button type="button" class="btn" onClick={() => location.reload()}>ลองใหม่</button></div>;
    if (auth.state === "link") return <LinkPage profile={auth.profile} candidates={auth.candidates} onDone={accept} />;
    if (auth.state === "onboard") return <OnboardPage user={auth.user} onDone={accept} />;

    const go = (k) => { location.hash = k; setTab(k); window.scrollTo(0, 0); };
    const page = ["home", "bills", "clear", "wallet", "me"].includes(tab) ? tab : "home";
    const needsData = page !== "me";
    let body;
    if (needsData && loadError) body = <ErrorState onRetry={refreshAll} />;
    else if (page === "home") body = model ? <HomePage model={model} series={series} month={month} onMonth={setMonth} onAddIncome={() => setSheet("income")} /> : <Skeleton blocks={5} />;
    else if (page === "bills") body = billsM ? <BillsPage model={billsM} search={search} onSearch={setSearch} me={auth.user.name} isAdmin={auth.user.isAdmin} onChanged={() => changed()} onError={setToast} /> : <Skeleton blocks={2} />;
    else if (page === "clear") body = clearM && profiles ? <ClearPage model={clearM} profiles={profiles} month={month} onChanged={() => changed()} isAdmin={auth.user.isAdmin} adminName={auth.user.name} onError={setToast} /> : <Skeleton blocks={2} />;
    else if (page === "wallet") body = walletM ? <WalletPage model={walletM} onChanged={() => changed()} onError={setToast} /> : <Skeleton blocks={3} />;
    else body = profiles ? <MePage auth={auth} profiles={profiles} onSaved={() => setProfiles(null)} onRefresh={refreshAll} onMembers={() => { setProfiles(null); setReload((n) => n + 1); }} onToast={setToast} /> : <Skeleton blocks={2} />;

    return (
        <>
            <Shell tab={page} onTab={go} userName={auth.user.name} onAdd={() => setSheet("menu")}
                tools={needsData && <MonthPicker month={month} onChange={setMonth} min={since} max={nowMonth} />}>
                {body}
            </Shell>
            {sheet && <AddSheet initial={sheet === "income" ? "income" : null} today={today} members={members || []} me={auth.user.name} suggested={suggested} save={addWallet} saveBill={saveBill} onClose={() => setSheet(null)}
                onSaved={(msg, months = []) => { setToast(msg); months.forEach((m) => changed(m)); setReload((n) => n + 1); }} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </>
    );
}

render(<App />, document.getElementById("app"));
