// หน้าตัวอย่างตอนพัฒนา (npm run dev แล้วเปิด /app/preview.html): ข้อมูลสมมติ ไม่ล็อกอิน ไม่อ่านฐานข้อมูล
// ?state=empty | loading | error | loader ดูสถานะต่างๆ (loader = ตัวโหลดตอนเข้าเว็บ), #home #list #clear #me เลือกหน้า (#bills #wallet = list)
// ?bills=none ไม่มีบิลรายเดือน · ?sheet=billcal เปิดปฏิทินบิล · ?plan=none ไม่ตั้งงบ/ไม่มีเป้า · ?plan=over ใช้เกินงบ · ?sheet=budget|move|goal เปิดหน้าต่างงบ/เป้า
import { render } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import "./styles.css";
import { buildHomeModel, buildMonthly, buildClearModel, buildWalletModel, buildBillsModel, buildBudgetModel, buildBillSchedule, lastMonths, shiftMonth } from "./model.js";
// โหลดหน้าแบบเดียวกับแอปจริง (Lazy) เพื่อให้ตรวจการสลับแท็บได้เหมือนของจริง
import { MonthPicker, Shell, Skeleton, ErrorState, Lazy, PageSwap } from "./ui.jsx";
import { Loader } from "./icons.jsx";
import { cardStatus } from "../../lib/card-cycle.mjs";
import { billPeople, settlementPeople, planLinesFor } from "../../lib/privacy.mjs";
import { sharedView } from "../../lib/shared-goals.mjs";
// เป้าแชร์ตัวอย่าง (GAME สร้าง เก็บกับ CARE และ BEN) ?sheet=smove ใส่เงิน · ?sheet=shared ประวัติ · ?sheet=sgoal แก้ · ?as=BEN มุมมองเพื่อน
const SHARED_RAW = [{ id: "sg1", name: "ค่าส่วนกลางคอนโด", icon: "home", color: "accent", target: 18000, deadline: "2027-02", monthly: 0, owner: "GAME", members: ["GAME", "CARE", "BEN"], log: [
    { at: "2026-10-28T01:00:00Z", date: "2026-10-28", amount: 2000, by: "BEN" },
    { at: "2026-11-02T01:00:00Z", date: "2026-11-02", amount: 4000, by: "GAME" },
    { at: "2026-11-10T01:00:00Z", date: "2026-11-10", amount: -1000, by: "GAME" },
    { at: "2026-11-12T01:00:00Z", date: "2026-11-12", amount: 4000, by: "CARE" }
] }];
import { HomePage } from "./pages/HomePage.jsx";
const loadAdd = () => import("./add.jsx");
const loadClear = () => import("./pages/ClearPage.jsx");
const loadList = () => import("./pages/ListPage.jsx");
const loadMe = () => import("./pages/MePage.jsx");
const loadPlanUi = () => import("./plan.jsx");
const loadBillCal = () => import("./billcal.jsx");

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
    { id: `ex${i}`, type: "expense", amount: 320 + i * 40, date: `${m}-05`, desc: "ตัดผม", icon: "fa-scissors", account: "kbank", timestamp: 2 },
    { id: `cash${i}`, type: "expense", amount: 65, date: `${m}-09`, desc: "กาแฟ", icon: "fa-mug-hot", account: "cash", timestamp: 2 },
    // รายการที่บันทึกอัตโนมัติจาก SMS บัตร (ยังไม่ยืนยัน) ดูป้ายและแถบยืนยัน
    { id: `auto${i}`, type: "expense", amount: 175, date: `${m}-17`, desc: "LINE MAN Dragon", icon: "fa-utensils", card: "ttb-2468", source: "card_alert", unconfirmed: true, timestamp: 3 }
]);
const profiles = [
    { id: "m1", name: "GAME", promptpay: "0812345678", realName: "สมชาย ใจดี" },
    { id: "m2", name: "CARE", promptpay: "0898765432", realName: "" },
    { id: "m3", name: "AOY", promptpay: "", realName: "" }
];

const SAMPLE_PLAN = {
    budget: { total: 15000, cats: { food: 3000, travel: 1500, goods: 2000 } },
    months: { "2026-12": { total: 22000, cats: {} } },
    goals: [
        { id: "g1", name: "เงินสำรองฉุกเฉิน", icon: "shield", color: "receive", target: 60000, deadline: "", monthly: 3000, saved: 25000, log: [{ date: "2026-11-02", amount: 3000 }] },
        { id: "g2", name: "ซื้อ iPad", icon: "phone", color: "sun", target: 25000, deadline: "2027-01", monthly: 0, saved: 20000, log: [] },
        { id: "g3", name: "เที่ยวญี่ปุ่น", icon: "plane", color: "accent", target: 30000, deadline: "2027-03", monthly: 0, saved: 12000, log: [{ date: "2026-11-05", amount: 1500 }] }
    ]
};
const SAMPLE_BILLS = {
    group: [
        { id: "rent", desc: "ค่าห้อง", amount: 9000, billingDay: 1, payer: "GAME", splits: { GAME: 4500, CARE: 4500 }, icon: "fa-house", active: true },
        { id: "nf", desc: "Netflix", amount: 419, billingDay: 16, payer: "GAME", splits: { GAME: 104.75, CARE: 104.75, AOY: 104.75, BEN: 104.75 }, icon: "fa-film", active: true },
        { id: "sp", desc: "Spotify Family", amount: 279, billingDay: 5, payer: "CARE", splits: { CARE: 93, GAME: 93, AOY: 93 }, icon: "fa-film", active: true }
    ],
    personal: [
        { id: "yt", desc: "YouTube Premium", amount: 399, billingDay: 14, icon: "fa-film" },
        { id: "ic", desc: "iCloud+", amount: 35, billingDay: 15, icon: "fa-mobile-screen" },
        { id: "ph", desc: "ค่าโทรศัพท์", amount: 499, billingDay: 25, icon: "fa-mobile-screen" }
    ]
};
// บัตรเครดิตตัวอย่าง (?cards=none = ยังไม่มีบัตร, ?cards=off = ผู้ดูแลยังไม่เปิดให้) ยอดคำนวณด้วยตรรกะเดียวกับเซิร์ฟเวอร์
const CARD_DEFS = [
    { id: "k1", bank: "KTC", last4: "1234", color: "accent", statementDay: 5, dueDay: 17, paid: {} },
    { id: "x1", bank: "CardX", last4: "5678", color: "navy", statementDay: 20, dueDay: 2, paid: {} },
    { id: "t1", bank: "ttb", last4: "9012", color: "sun", statementDay: 28, dueDay: 12, paid: {} }
];
const CARD_ITEMS = [
    ["2026-10-08", 1590, "Shell", "fa-gas-pump", "KTC-1234"], ["2026-10-19", 2450, "Central", "fa-cart-shopping", "KTC-1234"], ["2026-10-30", 890, "MK Restaurants", "fa-utensils", "KTC-1234"],
    ["2026-11-03", 3120, "Agoda", "fa-plane", "KTC-1234"], ["2026-11-09", 420, "Starbucks", "fa-mug-hot", "KTC-1234"], ["2026-11-12", 1290, "Uniqlo", "fa-cart-shopping", "KTC-1234"],
    ["2026-10-25", 699, "Netflix", "fa-film", "CardX-5678"], ["2026-11-02", 2340, "Lotus's", "fa-basket-shopping", "CardX-5678"], ["2026-11-10", 186, "Grab", "fa-car", "CardX-5678"]
].map(([date, amount, desc, icon, card], i) => ({ id: "ci" + i, type: "expense", date, amount, desc, icon, card }));
function sampleCards(mode) {
    if (mode === "off") return { enabled: false, cards: [] };
    if (mode === "none") return { enabled: true, cards: [] };
    return {
        enabled: true,
        cards: CARD_DEFS.map((c) => {
            const st = cardStatus(c, CARD_DEFS, CARD_ITEMS, today);
            const pick = (cyc) => CARD_ITEMS.filter((x) => x.card.startsWith(c.bank) && x.date >= cyc.start && x.date <= cyc.end).reverse();
            if (st.due) st.due.items = pick(st.due);
            st.open.items = pick(st.open);
            return st;
        })
    };
}
const OVER_PLAN = { ...SAMPLE_PLAN, budget: { total: 4000, cats: { food: 1000, travel: 500 } } };
const EMPTY_PLAN = { budget: { total: 0, cats: {} }, months: {}, goals: [] };

function Preview() {
    const params = new URLSearchParams(location.search);
    const state = params.get("state") || "ok";
    const who = params.get("as") || "GAME";
    const pageOf = (t) => (t === "bills" || t === "wallet" ? "list" : ["home", "list", "clear", "me"].includes(t) ? t : "home");
    const [tab, setTab] = useState(pageOf(location.hash.slice(1)));
    const [month, setMonth] = useState(now);
    const [search, setSearch] = useState("");
    const [sheet, setSheet] = useState(params.get("form") ? "menu" : null);
    const [toast, setToast] = useState("");
    const [plan, setPlan] = useState(params.get("plan") === "none" ? EMPTY_PLAN : params.get("plan") === "over" ? OVER_PLAN : SAMPLE_PLAN);
    const billRaw = params.get("bills") === "none" ? { group: [], personal: [] } : SAMPLE_BILLS;
    const [billCal, setBillCal] = useState(params.get("sheet") === "billcal");
    const [cardsData, setCardsData] = useState(() => sampleCards(params.get("cards")));
    const [cardSheet, setCardSheet] = useState(() => { const k = params.get("sheet"); return k === "card" ? { kind: "detail", id: "k1" } : k === "cardadd" ? { kind: "add" } : null; });
    const cardFake = (msg, fn) => new Promise((r) => setTimeout(() => { if (fn) setCardsData((d) => ({ ...d, cards: fn(d.cards) })); setToast(msg + " (ตัวอย่าง)"); r(); }, 400));
    const cardOpen = cardSheet && cardSheet.kind === "detail" ? cardsData.cards.find((c) => c.id === cardSheet.id) : null;
    const [planSheet, setPlanSheet] = useState(() => { const k = params.get("sheet"); return k === "move" ? { kind: "move", goal: SAMPLE_PLAN.goals[2], dir: "in" } : k === "goal" ? { kind: "goal" } : k === "budget" ? { kind: "budget" } : null; });
    const planX = { ...plan, shared: params.get("shared") === "none" ? [] : SHARED_RAW.filter((d) => d.members.includes(who)).map((d) => sharedView(d.id, d, who, now)) };
    const sharedG = planX.shared[0];
    useEffect(() => { const k = params.get("sheet"); if (sharedG && k === "smove") setPlanSheet({ kind: "move", goal: sharedG, dir: "in" }); if (sharedG && k === "shared") setPlanSheet({ kind: "shared", goal: sharedG }); if (sharedG && k === "sgoal") setPlanSheet({ kind: "goal", goal: sharedG }); }, []);
    const fake = (msg) => new Promise((r) => setTimeout(() => { setToast(msg + " (ตัวอย่าง)"); r(plan); }, 400));
    useEffect(() => { const h = () => setTab(pageOf(location.hash.slice(1))); addEventListener("hashchange", h); return () => removeEventListener("hashchange", h); }, []);
    useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 3200); return () => clearTimeout(t); } return undefined; }, [toast]);
    const empty = state === "empty";
    // ?privacy=on ซ่อนข้อมูลของคนอื่นแล้ว (เห็นเฉพาะบิลที่ตัวเองเกี่ยวข้อง ยอดโอนจากเซิร์ฟเวอร์) ?privacy=off ผู้ดูแลหลักยังไม่เปิด
    const priv = params.get("privacy");
    const [seeAll, setSeeAll] = useState(false);
    const [hideOn, setHideOn] = useState(priv === "on");
    const mine = hideOn && !seeAll ? who : null;
    const T0 = empty ? [] : tx, S0 = empty ? [] : settlements, W = empty ? [] : wallet;
    const T = mine ? T0.filter((t) => billPeople(t).includes(mine)) : T0;
    const S = mine ? S0.filter((x) => settlementPeople(x).includes(mine)) : S0;
    const planL = (m) => (mine ? planLinesFor({ name: who, memberNames: members, transactions: T0, settlements: S0, month: m }) : null);
    const home = useMemo(() => buildHomeModel({ name: who, month, today, members, transactions: T, settlements: S, walletItems: who === "GAME" ? W : [], planLines: planL(month) }), [month, empty, who, mine]);
    const series = useMemo(() => buildMonthly({ name: who, months: lastMonths(now, 12), transactions: T, settlements: S, walletItems: who === "GAME" ? W : [] }), [empty, who]);
    const nowHome = useMemo(() => buildHomeModel({ name: who, month: now, today, members, transactions: T, settlements: S, walletItems: who === "GAME" ? W : [] }), [empty, who]);
    const bmHome = buildBudgetModel(planX, home, today);
    const bmNow = buildBudgetModel(planX, nowHome, today);
    const go = (k) => { location.hash = k; setTab(k); };
    if (state === "loader") return <div class="center"><Loader label="กำลังโหลดข้อมูล" /></div>;
    let body;
    if (state === "loading") body = <Skeleton blocks={5} />;
    else if (state === "error") body = <ErrorState onRetry={() => {}} />;
    else if (tab === "list") body = <Lazy load={loadList} name="ListPage" fallback={<Skeleton blocks={3} />} members={members} bills={buildBillsModel({ name: who, month, transactions: T, search })} wallet={buildWalletModel({ name: who, month, walletItems: who === "GAME" ? W : [], transactions: T, settlements: S })} month={month} today={today} search={search} onSearch={setSearch} me={who} isAdmin={who === "GAME"} openFrom={`${now}-01`} privateMode={Boolean(mine)} cards={cardsData.enabled ? cardsData.cards : []} onChanged={() => setToast("ลบแล้ว (ตัวอย่าง)")} onError={setToast} onInfo={setToast} />;
    else if (tab === "clear") body = <Lazy load={loadClear} name="ClearPage" fallback={<Skeleton blocks={2} />} isAdmin={who === "GAME"} privateMode={Boolean(mine)} model={buildClearModel({ name: who, month, members, transactions: T, settlements: S, planLines: planL(month) })} profiles={profiles} month={month} back={{ receivedSat: 30000, paidSat: 0 }} onChanged={() => {}} />;
    else if (tab === "me") body = <Lazy load={loadMe} name="MePage" fallback={<Skeleton blocks={2} />} auth={{ user: { name: who, memberId: "m1", isAdmin: who === "GAME" } }} profiles={profiles} onSaved={() => {}} onRefresh={() => {}} bm={bmNow} onBudget={() => setPlanSheet({ kind: "budget" })} onGoalAdd={() => setPlanSheet({ kind: "goal" })} onGoalMove={(goal, dir) => setPlanSheet({ kind: "move", goal, dir })} onGoalEdit={(goal) => setPlanSheet({ kind: "goal", goal })} onGoalShared={(goal) => setPlanSheet({ kind: "shared", goal })} cards={cardsData} privacy={priv && who === "GAME" ? { hide: hideOn, super: true } : null} seeAll={seeAll} onSeeAll={setSeeAll} onPrivacy={setHideOn} onToast={setToast} onCardAdd={() => setCardSheet({ kind: "add" })} onCardOpen={(c) => setCardSheet({ kind: "detail", id: c.id })} />;
    else body = <HomePage model={home} series={series} month={month} onMonth={setMonth} onAddIncome={() => setSheet("income")} profiles={profiles} today={today} nowMonth={now} since={shiftMonth(now, -11)} bm={bmHome} onBudget={() => setPlanSheet({ kind: "budget" })} bills={buildBillSchedule({ me: who, month: now, today, ...billRaw, cards: cardsData.cards })} me={who} onBills={() => setBillCal(true)} onCard={(id) => setCardSheet({ kind: "detail", id })} />;
    return (
        <>
            <Shell tab={tab} onTab={go} userName={who} onAdd={() => setSheet("menu")} tools={tab !== "me" && <MonthPicker month={month} onChange={setMonth} min={shiftMonth(now, -11)} max={now} />}><PageSwap page={tab}>{body}</PageSwap></Shell>
            {sheet && <Lazy load={loadAdd} name="AddSheet" cards={cardsData.enabled ? cardsData.cards : []} openFrom={who === "GAME" ? "" : `${now}-01`} initial={params.get("form") || (sheet === "income" ? "income" : null)} today={today} members={members} me={who} suggested={members.filter((x) => x !== who).slice(0, 4)} save={async () => new Promise((r) => setTimeout(r, 600))} saveBill={async () => new Promise((r) => setTimeout(r, 600))} onClose={() => setSheet(null)} onSaved={setToast} />}
            {params.get("choose") && <Lazy load={() => import("./editbill.jsx")} name="ChooseSheet" item={{ id: "auto0", type: "expense", amount: 175, date: `${now}-17`, desc: "LINE MAN Dragon", card: "ttb-2468", unconfirmed: true }} members={members} me={who} suggested={members.filter((x) => x !== who).slice(0, 4)} today={today} saveBill={async () => new Promise((r) => setTimeout(r, 600))} removeWallet={async () => {}} onClose={() => setToast("ปิด (ตัวอย่าง)")} onDone={setToast} onMoreSplit={() => setToast("เปิดฟอร์มบิลเต็ม (ตัวอย่าง)")} />}
            {cardSheet && (cardSheet.kind === "add" || cardSheet.kind === "edit") && <Lazy load={() => import("./cards.jsx")} name="CardEditSheet" card={cardSheet.card || null} onClose={() => setCardSheet(null)} onSave={(c) => cardFake(c.id ? "แก้บัตรแล้ว" : "เพิ่มบัตรแล้ว")} onDelete={(id) => cardFake("ลบบัตรแล้ว", (cs) => cs.filter((x) => x.id !== id))} />}
            {cardOpen && <Lazy load={() => import("./cards.jsx")} name="CardDetailSheet" card={cardOpen} onClose={() => setCardSheet(null)} onEdit={(c) => setCardSheet({ kind: "edit", card: c })} onPaid={(id, paid) => cardFake(paid ? "จ่ายแล้ว" : "ยกเลิก จ่ายแล้ว", (cs) => cs.map((x) => (x.id === id && x.due ? { ...x, due: { ...x.due, paid } } : x)))} />}
            {billCal && <Lazy load={loadBillCal} name="BillCalendarSheet" data={{ ...billRaw, cards: cardsData.cards }} pictures={Object.fromEntries(profiles.map((p) => [p.name, p.pictureUrl]))} me={who} today={today} onClose={() => setBillCal(false)} />}
            {planSheet && planSheet.kind === "budget" && <Lazy load={loadPlanUi} name="BudgetSheet" plan={plan} nowMonth={now} suggestSat={bmNow.suggestSat} onClose={() => setPlanSheet(null)} onSave={() => fake("บันทึกงบแล้ว")} />}
            {planSheet && planSheet.kind === "move" && <Lazy load={loadPlanUi} name="GoalMoveSheet" goal={planSheet.goal} dir={planSheet.dir} month={now} onClose={() => setPlanSheet(null)} onMove={() => fake("เก็บเข้าเป้าแล้ว")} />}
            {planSheet && planSheet.kind === "goal" && <Lazy load={loadPlanUi} name="GoalEditSheet" goal={planSheet.goal || null} nowMonth={now} members={members} me={who} onClose={() => setPlanSheet(null)} onSave={() => fake("บันทึกเป้าแล้ว")} onDelete={() => fake("ลบเป้าแล้ว")} />}
            {planSheet && planSheet.kind === "shared" && <Lazy load={loadPlanUi} name="SharedGoalSheet" goal={planSheet.goal} month={now} me={who} onClose={() => setPlanSheet(null)} onEdit={(goal) => setPlanSheet({ kind: "goal", goal })} onLeave={() => fake("ออกจากเป้าแล้ว")} />}
            {toast && <div class="toast" role="status">{toast}</div>}
        </>
    );
}

render(<Preview />, document.getElementById("app"));
