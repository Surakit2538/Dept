import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { Loader } from "./icons.jsx";
import { signIn, onLoginExpired, relogin, getLoginDiag, getCachedUser, setCachedUser, loadSnapshot, saveSnapshot, deleteWalletEntry, fetchWalletEntry, getStaleMembers, loadMembers, loadProfiles, loadPastMonth, watchMonth, loadWalletMonths, addWallet, saveBill, bangkokToday, clearCache, invalidateMonth } from "./data.js";
import { buildHomeModel, buildMonthly, buildClearModel, buildWalletModel, buildBillsModel, suggestPeople, lastMonths, shiftMonth, validPromptpay } from "./model.js";
import { MonthPicker, Shell, Skeleton, ErrorState, Lazy } from "./ui.jsx";
import { HomePage } from "./pages/HomePage.jsx";

// หน้าอื่นและหน้าต่างต่างๆ โหลดเมื่อต้องใช้ (หน้าแรกกับตัวแอปมาก่อน เปิดเร็วขึ้น)
const loadAdd = () => import("./add.jsx");
const loadClear = () => import("./pages/ClearPage.jsx");
const loadList = () => import("./pages/ListPage.jsx");
const loadMe = () => import("./pages/MePage.jsx");
const loadOnboard = () => import("./onboard.jsx");

const CACHED_USER = getCachedUser();

// ปลายทางที่ต้องการเปิด: จากที่อยู่ (#clear, #add) หรือจากลิงก์ LIFF (liff.state) เช่น ปุ่มใน Rich menu ที่เปิด https://liff.line.me/...#add
function readTarget() {
    const st = new URLSearchParams(location.search).get("liff.state") || "";
    const h = location.hash || (st.includes("#") ? st.slice(st.indexOf("#")) : "");
    return h.slice(1);
}
/** ลิงก์ไปที่รายการเดียว จากแจ้งเตือนบน iPhone: "edit=รหัส" แก้ไข, "split=รหัส" หาร, "choose=รหัส" ถามส่วนตัวหรือหาร */
function parseDeep(t) {
    const m = /^(edit|split|choose)=([A-Za-z0-9_-]{1,100})$/.exec(String(t || ""));
    return m ? { kind: m[1], id: m[2] } : null;
}
const nowMonth0 = bangkokToday().slice(0, 7);

const MONTHS_BACK = 12; // เลือกย้อนหลังได้กี่เดือน (ปฏิทินแบบปีใช้ทั้ง 12 เดือน โหลดเมื่อเปิดดูแบบปีเท่านั้น)
// หน้าที่มีในแอป: บิลกับกระเป๋าเดิมรวมเป็น "list" (ลิงก์เก่า #bills #wallet ยังเปิดได้)
const PAGES = ["home", "list", "clear", "me"];
const pageOf = (t) => (t === "bills" || t === "wallet" ? "list" : PAGES.includes(t) ? t : "home");

function App() {
    // มีตัวตนที่จำไว้ -> เข้าแอปทันที (ยืนยันกับ LINE เบื้องหลัง) ไม่ต้องรอหน้า "กำลังเข้าสู่ระบบ"
    const [auth, setAuth] = useState(CACHED_USER ? { state: "ok", user: CACHED_USER } : { state: "loading" });
    const [tab, setTab] = useState(() => { const t = readTarget(); return parseDeep(t) ? "list" : pageOf(t); });
    const [deep, setDeep] = useState(() => parseDeep(readTarget())); // รายการที่ต้องเปิดจากลิงก์ในแจ้งเตือน
    const [openEdit, setOpenEdit] = useState(null);
    const [choose, setChoose] = useState(null); // รายการที่ถาม "บันทึกแบบไหน" (จากแจ้งเตือน)
    const today = useMemo(() => bangkokToday(), []);
    const nowMonth = today.slice(0, 7);
    const since = useMemo(() => shiftMonth(nowMonth, -(MONTHS_BACK - 1)), [nowMonth]);
    const [month, setMonth] = useState(nowMonth);
    const [members, setMembers] = useState(() => (CACHED_USER ? getStaleMembers() : null));
    // { "2026-11": { transactions, settlements, wallet } } เริ่มจากภาพล่าสุดที่จำไว้ แล้วอัปเดตสดทับ
    const [byMonth, setByMonth] = useState(() => {
        const snap = CACHED_USER ? loadSnapshot(CACHED_USER.name, nowMonth0) : null;
        return snap ? { [nowMonth0]: snap } : {};
    });
    const [loadError, setLoadError] = useState(false);
    const [profiles, setProfiles] = useState(null);
    const [search, setSearch] = useState("");
    const [prefill, setPrefill] = useState(null); // รายการส่วนตัวที่กำลังเปลี่ยนเป็นบิลหารกับเพื่อน
    const [sheet, setSheet] = useState(() => (CACHED_USER && readTarget() === "add" ? "menu" : null)); // null | "menu" | "income"
    const [toast, setToast] = useState("");
    const [reload, setReload] = useState(0);
    const [loginExpired, setLoginExpired] = useState(false); // บัตรล็อกอิน LINE หมดอายุ
    const [wide, setWide] = useState(false); // ปฏิทินแบบปีต้องใช้ข้อมูลครบ 12 เดือน
    const [booted, setBooted] = useState(Boolean(CACHED_USER)); // เข้าแอปครั้งแรกโดยไม่มีข้อมูลที่จำไว้: แสดงตัวโหลดเต็มจอจนข้อมูลพร้อม

    // หลังล็อกอิน: ยังไม่ผูกบัญชี -> เลือกชื่อ / สมาชิกที่ยังไม่กรอกชื่อจริงและพร้อมเพย์ -> กรอกก่อน (แอดมินข้าม) / ไม่งั้นเข้าแอป
    const accept = (u) => {
        if (u.needLogin) { setLoginExpired(true); return; }
        // ที่จำไว้เป็นของคนอื่น (เปลี่ยนบัญชี LINE ในเบราว์เซอร์เดียวกัน): ล้างข้อมูลที่จำไว้ทั้งหมด ไม่ให้เห็นของกัน
        if (CACHED_USER && !u.needLink && u.memberId !== CACHED_USER.memberId) { clearCache(); setByMonth({}); setMembers(null); setProfiles(null); }
        if (u.needLink) setAuth({ state: "link", profile: u.profile, candidates: u.candidates });
        else if (!u.isAdmin && (!u.realName || !validPromptpay(u.promptpay))) setAuth({ state: "onboard", user: u });
        else setAuth((cur) => (cur.state === "ok" && JSON.stringify(cur.user) === JSON.stringify(u) ? cur : { state: "ok", user: u }));
        if (!u.needLink) setCachedUser(u);
    };
    const patchMonth = (m, part) => setByMonth((cur) => ({ ...cur, [m]: { ...(cur[m] || {}), ...part } }));

    useEffect(() => {
        signIn().then((u) => {
            if (!u) return;
            accept(u);
            // ลิงก์จากแชต (#add เปิดหน้าต่างบันทึกทันที / #clear ฯลฯ) LIFF อาจใส่ที่อยู่ปลายทางหลังเริ่มระบบเสร็จ จึงอ่านอีกครั้งตรงนี้
            const t = readTarget();
            if (t === "add") { setSheet("menu"); setTab("home"); try { history.replaceState(null, "", location.pathname + "#home"); } catch (e) { /* ไม่เป็นไร */ } }
            else if (parseDeep(t)) { setDeep(parseDeep(t)); setTab("list"); }
            else if (t && ["home", "list", "bills", "wallet", "clear", "me"].includes(t)) setTab(pageOf(t));
        }).catch((e) => { if (!CACHED_USER) setAuth({ state: "error", message: e.message }); else console.warn("signIn:", e.message); });
    }, []);
    useEffect(() => { onLoginExpired(() => setLoginExpired(true)); }, []);
    useEffect(() => {
        const h = () => {
            const t = location.hash.slice(1);
            const d = parseDeep(t);
            if (d) { setDeep(d); setTab("list"); } else setTab(pageOf(t));
        };
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
        if (auth.state !== "ok" || !["home", "clear", "me"].includes(tab) || profiles) return;
        loadProfiles().then(setProfiles).catch(() => setLoadError(true));
    }, [auth.state, tab, profiles]);
    // เดือนนี้: ฟังแบบสด (อ่านเฉพาะรายการที่เปลี่ยน)
    useEffect(() => {
        if (auth.state !== "ok") return undefined;
        return watchMonth(nowMonth, (d) => { if (d.error) setLoadError(true); else patchMonth(nowMonth, d); });
    }, [auth.state, nowMonth]);
    // เดือนที่ผ่านมาแล้ว (เดือนที่เลือกดู + ทั้ง 12 เดือนเมื่อเปิดปฏิทินแบบปี): อ่านครั้งเดียวแล้วจำไว้ 1 วัน
    const wantedMonths = useMemo(() => [...new Set([...(wide ? lastMonths(nowMonth, MONTHS_BACK) : []), month])].filter((m) => m !== nowMonth), [nowMonth, month, wide]);
    // กระเป๋า: เรียก API ครั้งเดียวได้ทั้งเดือนนี้และเดือนที่ยังไม่มีในเครื่อง
    useEffect(() => {
        if (auth.state !== "ok") return;
        const need = [nowMonth, ...wantedMonths.filter((m) => !(byMonth[m] && byMonth[m].wallet))];
        loadWalletMonths(need, nowMonth)
            .then((r) => Object.entries(r).forEach(([m, w]) => patchMonth(m, { wallet: w })))
            .catch((e) => { if (!e.expired) setToast(e.message); });
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
    const curPart = byMonth[nowMonth];
    useEffect(() => {
        if (auth.state === "ok" && curPart && curPart.transactions && curPart.settlements && curPart.wallet) saveSnapshot(auth.user.name, nowMonth, curPart);
    }, [curPart]);
    // ว่างๆ ค่อยโหลดหน้าอื่นรอไว้ เวลากดเปลี่ยนแท็บจะได้ไม่ต้องรอ
    useEffect(() => {
        if (auth.state !== "ok") return undefined;
        const idle = window.requestIdleCallback || ((f) => setTimeout(f, 1500));
        const h = idle(() => { [loadList, loadClear, loadMe, loadAdd].forEach((l) => l().catch(() => {})); });
        return () => { if (window.cancelIdleCallback) window.cancelIdleCallback(h); else clearTimeout(h); };
    }, [auth.state]);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);

    const done = (m) => byMonth[m] && byMonth[m].transactions && byMonth[m].settlements && byMonth[m].wallet;
    // แสดงหน้าได้เมื่อมีเดือนนี้และเดือนที่เลือก (ข้อมูลทั้งปีค่อยตามมาทีหลัง ไม่ต้องรอทุกเดือน)
    const monthsReady = auth.state === "ok" && members && done(nowMonth) && done(month);
    useEffect(() => { if (monthsReady) setBooted(true); }, [monthsReady]);
    // กันตัวโหลดค้าง: ถ้ารอเกิน 12 วินาที แสดงหน้าแอปพร้อมสถานะข้อผิดพลาด/โครงหน้าแทน
    useEffect(() => { if (booted) return undefined; const t = setTimeout(() => setBooted(true), 12000); return () => clearTimeout(t); }, [booted]);
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
    const series = useMemo(() => (all && wide && chartReady ? buildMonthly({ name: auth.user.name, months: lastMonths(nowMonth, MONTHS_BACK), transactions: all.transactions, settlements: all.settlements, walletItems: all.wallet }) : null), [all, wide, chartReady, auth, nowMonth]);
    const clearM = useMemo(() => (all ? buildClearModel({ name: auth.user.name, month, members, transactions: all.transactions, settlements: all.settlements }) : null), [all, auth, members, month]);
    const walletM = useMemo(() => (all ? buildWalletModel({ name: auth.user.name, month, walletItems: all.wallet, transactions: all.transactions, settlements: all.settlements }) : null), [all, auth, month]);
    const billsM = useMemo(() => (all ? buildBillsModel({ name: auth.user.name, month, transactions: all.transactions, search }) : null), [all, auth, month, search]);
    // หลังแก้ข้อมูล: ล้างที่จำไว้ของเดือนนั้นแล้วโหลดใหม่ (เดือนนี้บิลอัปเดตสดอยู่แล้ว โหลดเฉพาะกระเป๋าใหม่)
    const changed = (m = month) => {
        invalidateMonth(m);
        if (m === nowMonth) setReload((n) => n + 1);
        else setByMonth((cur) => { const c = { ...cur }; delete c[m]; return c; });
    };
    const startSplit = (it) => { setPrefill({ amount: it.amount, desc: it.desc, date: it.date, icon: it.icon, convertId: it.id, month: String(it.date).slice(0, 7) }); setSheet("bill"); };
    useEffect(() => {
        if (!deep || !all) return;
        let on = true;
        const found = all.wallet.find((x) => x.id === deep.id);
        (found ? Promise.resolve(found) : fetchWalletEntry(deep.id)).then((it) => {
            if (!on) return;
            if (!it) { setToast("ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)"); return; }
            if (deep.kind === "split" && it.type !== "income") startSplit(it);
            else if (deep.kind === "choose" && it.type !== "income") setChoose(it);
            else { setTab("list"); setOpenEdit({ ...it }); }
        }).catch((e) => { if (on && !e.expired) setToast(e.message); }).finally(() => {
            if (!on) return;
            setDeep(null);
            try { history.replaceState(null, "", location.pathname + "#list"); } catch (e) { /* ไม่เป็นไร */ }
        });
        return () => { on = false; };
    }, [deep, Boolean(all)]);
    const refreshAll = () => { clearCache(); setByMonth({}); setMembers(null); setLoadError(false); setReload((n) => n + 1); };

    if (auth.state === "loading") return <div class="center"><Loader label="กำลังเข้าสู่ระบบ" /></div>;
    if (auth.state === "error") return <div class="center"><Loader /><p role="alert">{auth.message}</p><button type="button" class="btn" onClick={() => location.reload()}>ลองใหม่</button></div>;
    if (auth.state === "link") return <Lazy load={loadOnboard} name="LinkPage" profile={auth.profile} candidates={auth.candidates} onDone={accept} fallback={<div class="center"><Loader /></div>} />;
    if (auth.state === "onboard") return <Lazy load={loadOnboard} name="OnboardPage" user={auth.user} onDone={accept} fallback={<div class="center"><Loader /></div>} />;
    if (!booted && !loadError) return <div class="center"><Loader label="กำลังโหลดข้อมูล" /></div>;

    const go = (k) => { location.hash = k; setTab(k); window.scrollTo(0, 0); };
    const page = pageOf(tab);
    const needsData = page !== "me";
    let body;
    if (needsData && loadError) body = <ErrorState onRetry={refreshAll} />;
    else if (page === "home") body = model ? <HomePage model={model} series={series} month={month} onMonth={setMonth} onAddIncome={() => setSheet("income")} profiles={profiles || []} today={today} nowMonth={nowMonth} since={since} onNeedYear={() => setWide(true)} /> : <Skeleton blocks={5} />;
    else if (page === "list") body = billsM && walletM ? <Lazy load={loadList} name="ListPage" fallback={<Skeleton blocks={3} />} bills={billsM} wallet={walletM} search={search} onSearch={setSearch} me={auth.user.name} isAdmin={auth.user.isAdmin} version={reload} openEdit={openEdit} onSplit={startSplit} onChanged={() => changed()} onError={setToast} onInfo={setToast} /> : <Skeleton blocks={3} />;
    else if (page === "clear") body = clearM && profiles ? <Lazy load={loadClear} name="ClearPage" fallback={<Skeleton blocks={2} />} model={clearM} profiles={profiles} month={month} back={walletM ? { receivedSat: walletM.receivedBackSat, paidSat: walletM.paidBackSat } : null} onChanged={() => changed()} isAdmin={auth.user.isAdmin} adminName={auth.user.name} onError={setToast} onInfo={setToast} /> : <Skeleton blocks={2} />;
    else body = profiles ? <Lazy load={loadMe} name="MePage" fallback={<Skeleton blocks={2} />} auth={auth} profiles={profiles} onSaved={() => setProfiles(null)} onRefresh={refreshAll} onMembers={() => { setProfiles(null); setReload((n) => n + 1); }} onToast={setToast} transactions={all ? all.transactions : []} onDataChanged={(m) => changed(m)} /> : <Skeleton blocks={2} />;

    return (
        <>
            {loginExpired && (
                <div class="login-banner" role="alert">
                    <span>เซสชัน LINE หมดอายุ ยังดูข้อมูลที่จำไว้ได้ แต่ข้อมูลกระเป๋าและการบันทึกต้องเข้าสู่ระบบใหม่{getLoginDiag() && <small class="diag">{getLoginDiag()}</small>}</span>
                    <button type="button" class="btn sm" onClick={relogin}>เข้าสู่ระบบใหม่</button>
                </div>
            )}
            <Shell tab={page} onTab={go} userName={auth.user.name} userPicture={auth.user.pictureUrl} onAdd={() => setSheet("menu")}
                tools={needsData && <MonthPicker month={month} onChange={setMonth} min={since} max={nowMonth} />}>
                {body}
            </Shell>
            {sheet && <Lazy load={loadAdd} name="AddSheet" initial={sheet === "income" ? "income" : sheet === "bill" ? "bill" : null} prefill={prefill} convertWallet={deleteWalletEntry} today={today} members={members || []} me={auth.user.name} suggested={suggested} save={addWallet} saveBill={saveBill} onClose={() => { setSheet(null); setPrefill(null); }}
                onSaved={(msg, months = []) => { setToast(msg); months.forEach((m) => changed(m)); setReload((n) => n + 1); }} />}
            {choose && <Lazy load={() => import("./editbill.jsx")} name="ChooseSheet" item={choose} members={members || []} me={auth.user.name} suggested={suggested} today={today}
                saveBill={saveBill} removeWallet={deleteWalletEntry} onClose={() => setChoose(null)}
                onConfirmed={() => changed(String(choose.date).slice(0, 7))}
                onDone={(msg, months = []) => { setToast(msg); months.forEach((m) => changed(m)); setReload((n) => n + 1); }}
                onMoreSplit={(it) => { setChoose(null); startSplit(it); }} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </>
    );
}

render(<App />, document.getElementById("app"));
