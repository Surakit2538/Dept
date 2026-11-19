// หน้าตัวอย่างตอนพัฒนา (npm run dev แล้วเปิด /app/preview.html): ข้อมูลสมมติ ไม่ล็อกอิน ไม่อ่านฐานข้อมูล
// ?state=empty | loading | error ดูสถานะต่างๆ, #home #bills #clear #wallet #me เลือกหน้า
import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { buildHomeModel, buildMonthly, buildClearModel, buildWalletModel, buildBillsModel, lastMonths, shiftMonth } from "./model.js";
// โหลดหน้าแบบเดียวกับแอปจริง (Lazy) เพื่อให้ตรวจการสลับแท็บได้เหมือนของจริง
import { MonthPicker, Shell, Skeleton, ErrorState, Lazy } from "./ui.jsx";
import { HomePage } from "./pages/HomePage.jsx";
const loadAdd = () => import("./add.jsx");
const loadClear = () => import("./pages/ClearPage.jsx");
const loadWallet = () => import("./pages/WalletPage.jsx");
const loadBills = () => import("./pages/BillsPage.jsx");
const loadMe = () => import("./pages/MePage.jsx");

const today = "2026-11-14";
const now = "2026-11";
const members = ["GAME", "CARE", "AOY", "BEN", "ชื่อยาวมากๆของเพื่อนคนหนึ่ง"];
const icons = ["fa-utensils", "fa-car", "fa-bolt", "fa-cart-shopping", "fa-mug-hot", "fa-gas-pump", "fa-film"];
const names = ["กินกับไก่", "ก๋วยเตี๋ยว", "ค่าไฟ", "ของใช้เข้าบ้าน", "กาแฟ", "เติมน้ำมัน", "ดูหนัง", "ครีมอาบน้ำยี่ห้อที่ชื่อยาวมากจนต้องตัดคำ"];
const tx = [];
let seed = 7;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
lastMonths(now, 6).forEach((m, mi) => {
    const days = m === now ? 14 : 28;
    for (let i = 0; i < 16; i++) {
        const d = 1 + Math.floor(rnd() * days);
        const amount = Math.round((60 + rnd() * 900) * 100) / 100;
        const payer = rnd() > 0.35 ? "GAME" : members[1 + Math.floor(rnd() * 3)];
        const people = members.filter(() => rnd() > 0.45);
        if (!people.includes("GAME")) people.push("GAME");
        const share = Math.round((amount / people.length) * 100) / 100;
        tx.push({ id: `t${mi}-${i}`, date: `${m}-${String(d).padStart(2, "0")}`, payer, amount, splits: Object.fromEntries(people.map((p) => [p, share])), desc: names[i % names.length], icon: icons[i % icons.length], timestamp: i, paymentType: i % 7 === 0 ? "installment" : "normal" });
    }
    tx.push({ id: `rent${mi}`, date: `${m}-01`, payer: "GAME", amount: 9000, splits: { GAME: 4500, CARE: 4500 }, desc: "ค่าห้อง", icon: "fa-house", timestamp: 0, paymentType: "subscription" });
});
const settlements = [{ id: "s1", status: "verified", month: now, from: "BEN", to: "GAME", amount: 300, createdAt: "2026-11-10", verifiedByAdmin: false }];
const wallet = lastMonths(now, 6).flatMap((m, i) => [
    { id: `inc${i}`, type: "income", amount: 25000, date: `${m}-01`, desc: "เงินเดือน", timestamp: 1 },
    { id: `ex${i}`, type: "expense", amount: 320 + i * 40, date: `${m}-05`, desc: "ตัดผม", icon: "fa-scissors", timestamp: 2 },
    // รายการที่บันทึกอัตโนมัติจาก SMS บัตร (ยังไม่ยืนยัน) ดูป้ายและแถบยืนยัน
    { id: `auto${i}`, type: "expense", amount: 175, date: `${m}-17`, desc: "LINE MAN Dragon", icon: "fa-utensils", card: "ttb-0518", source: "card_alert", unconfirmed: true, timestamp: 3 }
]);
const profiles = [
    { id: "m1", name: "GAME", promptpay: "0812345678", realName: "สมชาย ใจดี" },
    { id: "m2", name: "CARE", promptpay: "0898765432", realName: "" },
    { id: "m3", name: "AOY", promptpay: "", realName: "" }
];

function Preview() {
    const params = new URLSearchParams(location.search);
    const state = params.get("state") || "ok";
    const who = params.get("as") || "GAME";
    const [tab, setTab] = useState(location.hash.slice(1) || "home");
    const [month, setMonth] = useState(now);
    const [search, setSearch] = useState("");
    const [sheet, setSheet] = useState(params.get("form") ? "menu" : null);
    const [toast, setToast] = useState("");
    useEffect(() => { const h = () => setTab(location.hash.slice(1) || "home"); addEventListener("hashchange", h); return () => removeEventListener("hashchange", h); }, []);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);
    const empty = state === "empty";
    const T = empty ? [] : tx, S = empty ? [] : settlements, W = empty ? [] : wallet;
    const home = useMemo(() => buildHomeModel({ name: who, month, today, members, transactions: T, settlements: S, walletItems: who === "GAME" ? W : [] }), [month, empty, who]);
    const series = useMemo(() => buildMonthly({ name: who, months: lastMonths(now, 6), transactions: T, settlements: S, walletItems: who === "GAME" ? W : [] }), [empty, who]);
    const go = (k) => { location.hash = k; setTab(k); };
    let body;
    if (state === "loading") body = <Skeleton blocks={5} />;
    else if (state === "error") body = <ErrorState onRetry={() => {}} />;
    else if (tab === "bills") body = <Lazy load={loadBills} name="BillsPage" fallback={<Skeleton blocks={2} />} model={buildBillsModel({ name: who, month, transactions: T, search })} search={search} onSearch={setSearch} me={who} isAdmin={who === "GAME"} onChanged={() => setToast("ลบแล้ว (ตัวอย่าง)")} onError={setToast} />;
    else if (tab === "clear") body = <Lazy load={loadClear} name="ClearPage" fallback={<Skeleton blocks={2} />} isAdmin={who === "GAME"} model={buildClearModel({ name: who, month, members, transactions: T, settlements: S })} profiles={profiles} month={month} onChanged={() => {}} />;
    else if (tab === "wallet") body = <Lazy load={loadWallet} name="WalletPage" fallback={<Skeleton blocks={3} />} model={buildWalletModel({ name: who, month, walletItems: who === "GAME" ? W : [], transactions: T, settlements: S })} onChanged={() => setToast("ลบแล้ว (ตัวอย่าง)")} onError={setToast} />;
    else if (tab === "me") body = <Lazy load={loadMe} name="MePage" fallback={<Skeleton blocks={2} />} auth={{ user: { name: who, memberId: "m1", isAdmin: who === "GAME" } }} profiles={profiles} onSaved={() => {}} onRefresh={() => {}} />;
    else body = <HomePage model={home} series={series} month={month} onMonth={setMonth} onAddIncome={() => setSheet("income")} today={today} />;
    return (
        <>
            <Shell tab={tab} onTab={go} userName={who} onAdd={() => setSheet("menu")} tools={tab !== "me" && <MonthPicker month={month} onChange={setMonth} min={shiftMonth(now, -11)} max={now} />}>{body}</Shell>
            {sheet && <Lazy load={loadAdd} name="AddSheet" initial={params.get("form") || (sheet === "income" ? "income" : null)} today={today} members={members} me={who} suggested={members.filter((x) => x !== who).slice(0, 4)} save={async () => new Promise((r) => setTimeout(r, 600))} saveBill={async () => new Promise((r) => setTimeout(r, 600))} onClose={() => setSheet(null)} onSaved={setToast} />}
            {params.get("choose") && <Lazy load={() => import("./editbill.jsx")} name="ChooseSheet" item={{ id: "auto0", type: "expense", amount: 175, date: `${now}-17`, desc: "LINE MAN Dragon", card: "ttb-0518", unconfirmed: true }} members={members} me={who} suggested={members.filter((x) => x !== who).slice(0, 4)} today={today} saveBill={async () => new Promise((r) => setTimeout(r, 600))} removeWallet={async () => {}} onClose={() => setToast("ปิด (ตัวอย่าง)")} onDone={setToast} onMoreSplit={() => setToast("เปิดฟอร์มบิลเต็ม (ตัวอย่าง)")} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </>
    );
}

render(<Preview />, document.getElementById("app"));
