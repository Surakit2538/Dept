// งบรายเดือน + เป้าเก็บเงิน: การ์ดในแท็บ ฉัน (แผนเดือนนี้ + ซองเป้าซ้อนกัน) และหน้าต่างตั้งงบ / เก็บเข้าเป้า / เพิ่มเป้า
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet, DeleteButton, AvatarStack, Avatar } from "./ui.jsx";
import { baht, monthLabel, monthShort, shiftMonth } from "./model.js";
import { CATEGORY_GROUPS } from "../../lib/categories.mjs";
import { goalStatus, GOAL_ICONS, GOAL_COLORS, monthsInclusive } from "../../lib/budget.mjs";

export const CAT_ICON = { food: "food", bills: "bolt", goods: "bag", travel: "car", fun: "film", other: "dots" };
const GOAL_ICON = { plane: "plane", shield: "shield", home: "home", phone: "mobile", car: "car", gift: "gift", heart: "heart", star: "star" };
const B = (sat) => baht(sat / 100);
/** "1,500.50" -> 1500.5 ว่าง -> 0 ไม่ใช่ตัวเลข -> NaN */
const num = (s) => { const t = String(s || "").replace(/[,\s฿]/g, ""); return t === "" ? 0 : Number(t); };
const fmtIn = (n) => (n > 0 ? String(n) : "");

// ======================================================================
// แท็บ ฉัน: แผนเดือนนี้ (วงแหวนสองชั้น: ใช้ไปเทียบงบ / เก็บเงินเทียบแผน)
// ======================================================================
export function PlanCard({ bm, onBudget }) {
    const st = bm.status;
    const r1 = 42, c1 = 2 * Math.PI * r1, r2 = 30, c2 = 2 * Math.PI * r2;
    const p1 = st.set ? Math.min(100, st.percent) : 0;
    const p2 = bm.saving.planSat > 0 ? Math.min(100, Math.round((bm.saving.doneSat / bm.saving.planSat) * 100)) : 0;
    const tone = st.level === "over" ? "over" : st.level === "near" ? "near" : "ok";
    const src = st.source === "month" ? "งบเฉพาะเดือนนี้" : st.source === "default" ? "งบปกติ" : "ยังไม่ตั้งงบ";
    return (
        <section class="card plan-card" aria-label="แผนเดือนนี้">
            <div class="plan-hd">
                <h2>แผนเดือนนี้</h2>
                <span class="month-pill">{monthLabel(bm.month)}<small>{src}</small></span>
            </div>
            <div class="plan-body">
                <div class={`ring2 ${tone}`} role="img" aria-label={st.set ? `ใช้ไป ${st.percent}% ของงบ เก็บเงินแล้ว ${p2}% ของแผน` : "ยังไม่ได้ตั้งงบ"}>
                    <svg viewBox="0 0 100 100" aria-hidden="true">
                        <circle cx="50" cy="50" r={r1} class="trk" stroke-width="10" fill="none" />
                        <circle cx="50" cy="50" r={r1} class="v1" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray={`${(c1 * p1) / 100} ${c1}`} transform="rotate(-90 50 50)" />
                        <circle cx="50" cy="50" r={r2} class="trk" stroke-width="7" fill="none" />
                        <circle cx="50" cy="50" r={r2} class="v2" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray={`${(c2 * p2) / 100} ${c2}`} transform="rotate(-90 50 50)" />
                    </svg>
                    <div class="ring2-t">{st.set ? <><b class="num">{st.percent}%</b><span>ของงบ</span></> : <span>ยังไม่ตั้งงบ</span>}</div>
                </div>
                <dl class="plan-kv num">
                    <div><dt><i class={`dot ${tone}`} />ใช้ไป</dt><dd>{B(st.spentSat)}{st.set && <small> / {B(st.budgetSat)}</small>}</dd></div>
                    <div><dt><i class="dot save" />เก็บแล้ว</dt><dd>{B(bm.saving.doneSat)}{bm.saving.planSat > 0 && <small> / {B(bm.saving.planSat)}</small>}</dd></div>
                    {st.set && <div class="left"><dt>{st.leftSat >= 0 ? "งบเหลือ" : "เกินงบ"}</dt><dd class={st.leftSat < 0 ? "pay" : ""}>{B(Math.abs(st.leftSat))}</dd></div>}
                </dl>
            </div>
            <button type="button" class="btn sm soft" onClick={onBudget}><Icon name="sliders" size={16} />{st.set ? "ตั้งงบรายเดือน" : "ตั้งงบเดือนนี้"}</button>
        </section>
    );
}

// ======================================================================
// เป้าเก็บเงิน: ซองซ้อนกัน แตะซองไหน ซองนั้นเลื่อนมาหน้าสุดและกางออก
// ======================================================================
/** ยอดแต่ละคนในเป้าแชร์ เป็นช่วงสีบนแถบ (กว้างตามสัดส่วนที่ใส่ รวมกันเท่ากับ % ที่เก็บได้) */
function ShareBar({ g, percent }) {
    const by = g.bySat || {};
    const total = Object.values(by).reduce((a, b) => a + b, 0);
    const names = (g.members || []).filter((n) => by[n] > 0).concat(Object.keys(by).filter((n) => !(g.members || []).includes(n) && by[n] > 0));
    return (
        <span class="env-bar seg-bar" role="img" aria-label={names.map((n) => `${n} ${B(by[n])}`).join(", ")}>
            {total > 0 && names.map((n, i) => <i key={n} class={`sb${i % 4}`} style={{ width: `${(by[n] / total) * percent}%` }} />)}
        </span>
    );
}

function sharedLine(g, s) {
    if (s.done) return "ครบเป้าแล้ว";
    if (s.late) return `เลยกำหนด ${monthShort(g.deadline)} แล้ว`;
    if (g.perPersonSat > 0) return `คนละ ${B(g.perPersonSat)}/เดือน${g.deadline ? ` ถึง ${monthShort(g.deadline)}` : ""}`;
    return "ไม่กำหนดเวลา";
}

export function GoalStack({ goals, month, onAdd, onMove, onEdit, onShared = () => {}, pictures = {} }) {
    const [openId, setOpenId] = useState(null);
    const list = goals || [];
    const front = list.find((g) => g.id === openId) || list[list.length - 1];
    const ordered = front ? [...list.filter((g) => g.id !== front.id), front] : [];
    return (
        <section class="goals" aria-label="เป้าเก็บเงิน">
            <div class="goals-hd">
                <h2>เป้าเก็บเงิน</h2>
                {list.length > 0 && <button type="button" class="link-btn" onClick={onAdd}><Icon name="plus" size={16} />เพิ่มเป้า</button>}
            </div>
            {list.length === 0 ? (
                <button type="button" class="goal-empty" onClick={onAdd}>
                    <span class="goal-empty-ic"><Icon name="target" size={26} /></span>
                    <b>ตั้งเป้าเก็บเงินอันแรก</b>
                    <small>เช่น เที่ยวญี่ปุ่น 30,000 ภายใน มี.ค. แอปจะบอกว่าต้องเก็บเดือนละเท่าไร</small>
                </button>
            ) : (
                <div class="envs" style={{ "--n": ordered.length - 1 }}>
                    {ordered.map((g, i) => {
                        const s = g.s || goalStatus(g, month);
                        const isFront = i === ordered.length - 1;
                        if (!isFront) {
                            return (
                                <button type="button" key={g.id} class={`env c-${g.color}`} style={{ "--i": i }} onClick={() => setOpenId(g.id)} aria-label={`${g.name} เก็บได้ ${s.percent}% แตะเพื่อดู`}>
                                    <span class="flap" aria-hidden="true" />
                                    <span class="env-row"><span class="env-name"><Icon name={GOAL_ICON[g.icon] || "target"} size={16} />{g.name}{g.shared && <small class="env-tag">แชร์</small>}</span><b class="num">{s.done ? "ครบแล้ว" : `${s.percent}%`}</b></span>
                                </button>
                            );
                        }
                        return (
                            <div key={g.id} class={`env front c-${g.color}`} style={{ "--i": i }}>
                                <span class="flap" aria-hidden="true" />
                                <span class="env-row"><span class="env-name"><span class="env-ic"><Icon name={GOAL_ICON[g.icon] || "target"} size={18} /></span>{g.name}</span><b class="num">{s.done ? "ครบแล้ว" : `${s.percent}%`}</b></span>
                                {g.shared && <span class="env-share"><AvatarStack names={g.members || []} pictures={pictures} max={4} size="sm" />แชร์ {(g.members || []).length} คน</span>}
                                <b class="env-big num">{B(s.savedSat)}</b>
                                <span class="env-sub num">จาก {B(s.targetSat)} · {g.shared ? sharedLine(g, s) : goalLine(g, s)}</span>
                                {g.shared ? <ShareBar g={g} percent={s.percent} /> : <span class="env-bar" aria-hidden="true"><i style={{ width: `${s.percent}%` }} /></span>}
                                {g.shared && <span class="env-sub num">คุณใส่แล้ว {B(g.mineSat || 0)}{s.done ? "" : g.mineMonthSat > 0 ? " · เดือนนี้ใส่แล้ว" : g.perPersonSat > 0 ? " · เดือนนี้ยังไม่ใส่" : ""}</span>}
                                <span class="env-acts">
                                    <button type="button" class="env-btn main" onClick={() => onMove(g, "in")}><Icon name="plus" size={16} />เก็บเข้า</button>
                                    {(!g.shared || g.isOwner) && <button type="button" class="env-btn" onClick={() => onMove(g, "out")} disabled={s.savedSat <= 0}>ถอนออก</button>}
                                    {g.shared
                                        ? <button type="button" class="env-btn icon" onClick={() => onShared(g)} aria-label={`ประวัติและตั้งค่าเป้า ${g.name}`}><Icon name="dots" size={16} /></button>
                                        : <button type="button" class="env-btn icon" onClick={() => onEdit(g)} aria-label={`แก้ไขเป้า ${g.name}`}><Icon name="pencil" size={16} /></button>}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

function goalLine(g, s) {
    if (s.done) return "ครบเป้าแล้ว";
    if (s.late) return `เลยกำหนด ${monthShort(g.deadline)} แล้ว`;
    if (g.deadline) return `ต้องเก็บเดือนละ ${B(s.perMonthSat)} ถึง ${monthShort(g.deadline)}`;
    return s.perMonthSat > 0 ? `ตั้งใจเก็บเดือนละ ${B(s.perMonthSat)}` : "ไม่กำหนดเวลา";
}

// ======================================================================
// หน้าต่างตั้งงบ: เลือก "ปกติ" (ทุกเดือน) หรือเดือนที่จะตั้งพิเศษ
// ======================================================================
export function BudgetSheet({ plan, nowMonth, suggestSat = 0, onSave, onClose }) {
    const p = plan || { budget: { total: 0, cats: {} }, months: {} };
    const overrides = Object.keys(p.months || {}).filter((m) => m >= nowMonth);
    const months = [...new Set([nowMonth, shiftMonth(nowMonth, 1), shiftMonth(nowMonth, 2), ...overrides])].sort();
    const [scope, setScope] = useState(p.months && p.months[nowMonth] ? nowMonth : "default"); // "default" | "YYYY-MM"
    const src = (sc) => (sc !== "default" && p.months[sc] ? p.months[sc] : p.budget) || { total: 0, cats: {} };
    const [total, setTotal] = useState(fmtIn(src(scope).total));
    const [cats, setCats] = useState(() => Object.fromEntries(CATEGORY_GROUPS.map((c) => [c.key, fmtIn((src(scope).cats || {})[c.key])])));
    const [active, setActive] = useState(null);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState("");
    const pick = (sc) => {
        setScope(sc);
        const b = src(sc);
        setTotal(fmtIn(b.total));
        setCats(Object.fromEntries(CATEGORY_GROUPS.map((c) => [c.key, fmtIn((b.cats || {})[c.key])])));
        setActive(null);
        setMsg("");
    };
    const catVals = Object.fromEntries(CATEGORY_GROUPS.map((c) => [c.key, num(cats[c.key])]));
    const catSum = Object.values(catVals).reduce((a, v) => a + (v > 0 ? v : 0), 0);
    const totalV = num(total);
    const base = Math.max(totalV, catSum);
    const free = Math.max(0, totalV - catSum);
    const isOverride = scope !== "default" && Boolean(p.months[scope]);

    async function save(clear = false) {
        if (!clear && (!Number.isFinite(totalV) || totalV < 0 || Object.values(catVals).some((v) => !Number.isFinite(v) || v < 0))) return setMsg("ใส่ตัวเลขให้ถูกต้อง");
        setBusy(true);
        setMsg("");
        try {
            await onSave(scope === "default"
                ? { scope: "default", total: totalV, cats: catVals }
                : { scope: "month", month: scope, total: totalV, cats: catVals, clear });
            onClose();
        } catch (e) {
            setMsg(e.message);
            setBusy(false);
        }
    }

    return (
        <Sheet title="ตั้งงบ" onClose={onClose} class="plan-sheet">
            <div class="mchips" role="group" aria-label="ตั้งงบของ">
                <button type="button" class={scope === "default" ? "on" : ""} aria-pressed={scope === "default"} onClick={() => pick("default")}>ปกติ (ทุกเดือน)</button>
                {months.map((m) => (
                    <button type="button" key={m} class={`${scope === m ? "on" : ""} ${p.months[m] ? "has" : ""}`} aria-pressed={scope === m} onClick={() => pick(m)}>
                        {monthLabel(m)}{p.months[m] && <span class="sr">ตั้งพิเศษไว้</span>}
                    </button>
                ))}
            </div>
            <p class="lbl plan-scope">{scope === "default" ? "ใช้กับทุกเดือนที่ไม่ได้ตั้งพิเศษ" : isOverride ? `งบพิเศษของ ${monthLabel(scope)} (ไม่ใช้งบปกติ)` : `ตั้งงบพิเศษของ ${monthLabel(scope)} ถ้าไม่ตั้ง เดือนนี้ใช้งบปกติ`}</p>

            <label class="bignum" for="bud-total">
                <span class="lbl">งบรวมต่อเดือน</span>
                <span class="bignum-in"><small>฿</small><input id="bud-total" class="num" inputmode="decimal" autocomplete="off" placeholder="0" value={total} onInput={(e) => setTotal(e.currentTarget.value)} /></span>
            </label>
            {suggestSat > 0 && (
                <button type="button" class="sugg" onClick={() => setTotal(String(suggestSat / 100))}>
                    แนะนำ <b class="num">{B(suggestSat)}</b> จากรายรับหักเงินที่จะเก็บ · แตะเพื่อใช้
                </button>
            )}

            <div class="alloc-wrap">
                <div class="alloc" aria-hidden="true">
                    {CATEGORY_GROUPS.map((c) => (catVals[c.key] > 0 && base > 0 ? <i key={c.key} class={`k-${c.key}`} style={{ width: `${(catVals[c.key] / base) * 100}%` }} /> : null))}
                    {free > 0 && base > 0 && <i class="free" style={{ width: `${(free / base) * 100}%` }} />}
                </div>
                <p class="lbl">{catSum > 0 ? (free > 0 ? `แบ่งให้หมวดแล้ว ${baht(catSum)} · ยังไม่แบ่ง ${baht(free)}` : totalV > 0 && catSum > totalV ? `งบหมวดรวม ${baht(catSum)} เกินงบรวม` : `แบ่งให้หมวดครบ ${baht(catSum)}`) : "แบ่งงบตามหมวดได้ (ไม่ใส่ก็ได้) แตะหมวดเพื่อใส่ยอด"}</p>
            </div>

            <div class="ctiles">
                {CATEGORY_GROUPS.map((c) => {
                    const v = catVals[c.key];
                    return (
                        <button type="button" key={c.key} class={`ct ${v > 0 ? "set" : ""} ${active === c.key ? "on" : ""}`} aria-pressed={active === c.key} onClick={() => setActive(active === c.key ? null : c.key)}>
                            <span class={`cc k-${c.key}`}><Icon name={CAT_ICON[c.key]} size={18} /></span>
                            <span>{c.short}</span>
                            <b class="num">{v > 0 ? baht(v) : "+ ตั้ง"}</b>
                        </button>
                    );
                })}
            </div>
            {active && (
                <div class="field cat-in">
                    <label for="bud-cat">งบ{CATEGORY_GROUPS.find((c) => c.key === active).short}ต่อเดือน</label>
                    <div class="cat-in-row">
                        <input id="bud-cat" class="num" inputmode="decimal" autocomplete="off" placeholder="ไม่ตั้ง" value={cats[active]} onInput={(e) => setCats({ ...cats, [active]: e.currentTarget.value })} />
                        {catVals[active] > 0 && <button type="button" class="btn sm ghost" onClick={() => setCats({ ...cats, [active]: "" })}>ไม่ตั้ง</button>}
                    </div>
                </div>
            )}

            {msg && <p class="msg" role="alert">{msg}</p>}
            <button type="button" class="btn block" disabled={busy} onClick={() => save(false)}>{busy ? "กำลังบันทึก" : scope === "default" ? "บันทึกงบปกติ" : `บันทึกงบ ${monthLabel(scope)}`}</button>
            {isOverride && <button type="button" class="btn block ghost" disabled={busy} onClick={() => save(true)}>ให้ {monthLabel(scope)} ใช้งบปกติแทน</button>}
        </Sheet>
    );
}

// ======================================================================
// เก็บเข้าเป้า / ถอนออก: โหลแก้วโชว์ยอดตอนนี้และยอดที่กำลังจะเปลี่ยน
// ======================================================================
export function GoalMoveSheet({ goal, month, dir: dir0 = "in", onMove, onClose }) {
    const s = goalStatus(goal, month);
    const canOut = !goal.shared || goal.isOwner;
    const [dir, setDir] = useState(canOut ? dir0 : "in");
    // เป้าแชร์: ตามแผน = ส่วนของฉันเดือนนี้ที่ยังไม่ได้ใส่
    const planLeft = goal.shared ? Math.max(0, (goal.perPersonSat || 0) - (goal.mineMonthSat || 0)) : Math.max(0, s.perMonthSat - s.thisMonthSat);
    const [amount, setAmount] = useState(dir0 === "in" && planLeft > 0 ? String(planLeft / 100) : "");
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState("");
    const a = num(amount);
    const deltaSat = Number.isFinite(a) && a > 0 ? Math.round(a * 100) * (dir === "in" ? 1 : -1) : 0;
    const afterSat = Math.max(0, s.savedSat + deltaSat);
    const pctOf = (x) => (s.targetSat > 0 ? Math.min(100, (x / s.targetSat) * 100) : 0);
    const nowP = pctOf(dir === "in" ? s.savedSat : afterSat);
    const chgP = Math.abs(pctOf(s.savedSat) - pctOf(afterSat));
    const after = goalStatus({ ...goal, saved: afterSat / 100 }, shiftMonth(month, 1));
    const tooMuch = dir === "out" && a * 100 > s.savedSat;
    const add = (n) => setAmount(String(Math.round(((Number.isFinite(a) ? a : 0) + n) * 100) / 100));

    async function go() {
        if (!(a > 0)) return setMsg("ใส่จำนวนเงิน");
        if (tooMuch) return setMsg("ถอนได้ไม่เกินที่เก็บไว้");
        setBusy(true);
        setMsg("");
        try { await onMove(goal.id, a, dir); onClose(); } catch (e) { setMsg(e.message); setBusy(false); }
    }

    let note = "";
    if (afterSat >= s.targetSat && s.targetSat > 0) note = "ครบเป้าแล้ว";
    else if (goal.deadline && deltaSat !== 0) {
        const left = monthsInclusive(shiftMonth(month, 1), goal.deadline);
        const n = goal.shared ? Math.max(1, (goal.members || []).length) : 1;
        const per = Math.ceil(after.perMonthSat / n / 100) * 100;
        note = left > 0 ? `เดือนต่อไปเก็บ${n > 1 ? "คนละ" : "เดือนละ"} ${B(per)} อีก ${left} เดือน ก็ทันกำหนด` : "";
    }

    return (
        <Sheet title={goal.name} onClose={onClose} class="plan-sheet">
            <div class="goalhd">
                <span class={`gico c-${goal.color}`}><Icon name={GOAL_ICON[goal.icon] || "target"} size={24} /></span>
                <span class="lbl">เป้า {B(s.targetSat)}{goal.deadline ? ` ภายใน ${monthLabel(goal.deadline)}` : ""}</span>
            </div>
            <div class="seg" role="group" aria-label="เก็บเข้าหรือถอนออก">
                <button type="button" class={dir === "in" ? "on" : ""} aria-pressed={dir === "in"} onClick={() => setDir("in")}>เก็บเข้า</button>
                <button type="button" class={dir === "out" ? "on" : ""} aria-pressed={dir === "out"} onClick={() => setDir("out")} disabled={s.savedSat <= 0 || !canOut}>ถอนออก</button>
            </div>
            {!canOut && <p class="lockline"><Icon name="lock" size={14} />ถอนออกได้เฉพาะ {goal.owner} (คนสร้างเป้า) ถ้าต้องการเงินคืนให้บอก {goal.owner}</p>}
            <div class="jarbig">
                <div class="jarw" role="img" aria-label={`ตอนนี้ ${B(s.savedSat)} หลัง${dir === "in" ? "เก็บ" : "ถอน"} ${B(afterSat)}`}>
                    <span class="jar-now" style={{ height: `${nowP}%` }} />
                    {chgP > 0 && <span class={`jar-chg ${dir}`} style={{ bottom: `${nowP}%`, height: `${chgP}%` }} />}
                    <span class="jar-pt num">{Math.round(pctOf(afterSat))}%</span>
                </div>
                <dl class="jarside num">
                    <div><dt>ตอนนี้</dt><dd>{B(s.savedSat)}</dd></div>
                    <div><dt>หลัง{dir === "in" ? "เก็บ" : "ถอน"}</dt><dd class={dir === "in" ? "rcv" : ""}>{B(afterSat)}</dd></div>
                    <div><dt>ยังขาด</dt><dd>{B(Math.max(0, s.targetSat - afterSat))}</dd></div>
                </dl>
            </div>
            <label class="bignum" for="goal-amt">
                <span class="lbl">{dir === "in" ? "เก็บเข้าเป้า" : "ถอนออกจากเป้า"}</span>
                <span class="bignum-in"><small>฿</small><input id="goal-amt" class="num" inputmode="decimal" autocomplete="off" placeholder="0" value={amount} onInput={(e) => setAmount(e.currentTarget.value)} aria-invalid={tooMuch ? "true" : "false"} /></span>
            </label>
            {dir === "in" && (
                <div class="qchips">
                    {planLeft > 0 && <button type="button" onClick={() => setAmount(String(planLeft / 100))}>{goal.shared ? "ส่วนของฉัน" : "ตามแผน"} {baht(planLeft / 100)}</button>}
                    {[500, 1000, 3000].map((n) => <button type="button" key={n} onClick={() => add(n)}>+{n.toLocaleString("en-US")}</button>)}
                </div>
            )}
            {note && <p class="okline"><Icon name="check" size={16} />{note}</p>}
            {msg && <p class="msg" role="alert">{msg}</p>}
            <button type="button" class="btn block" disabled={busy} onClick={go}>{busy ? "กำลังบันทึก" : dir === "in" ? `เก็บเข้าเป้า${a > 0 ? " " + baht(a) : ""}` : `ถอนออก${a > 0 ? " " + baht(a) : ""}`}</button>
            <p class="lbl center-note">เงินที่เก็บเข้าเป้าไม่นับเป็นรายจ่าย และไม่ขึ้นในหน้ารายการ</p>
        </Sheet>
    );
}

// ======================================================================
// เพิ่มเป้า / แก้เป้า
// ======================================================================
export function GoalEditSheet({ goal = null, nowMonth, onSave, onDelete, onClose, members = [], me = "", pictures = {} }) {
    const g = goal || {};
    const myName = String(me || "").toUpperCase();
    // เป้าใหม่เลือกได้ว่าเก็บคนเดียวหรือกับเพื่อน เป้าเดิมเปลี่ยนชนิดไม่ได้
    const [withFriends, setWithFriends] = useState(Boolean(g.shared));
    const [friends, setFriends] = useState(() => new Set((g.members || []).filter((n) => n !== myName && n !== g.owner)));
    const others = (members || []).filter((n) => n !== myName && n !== g.owner);
    const toggleF = (n) => setFriends((cur) => { const x = new Set(cur); if (x.has(n)) x.delete(n); else x.add(n); return x; });
    const [icon, setIcon] = useState(g.icon || GOAL_ICONS[0]);
    const [color, setColor] = useState(g.color || GOAL_COLORS[0]);
    const [name, setName] = useState(g.name || "");
    const [target, setTarget] = useState(fmtIn(g.target));
    const [deadline, setDeadline] = useState(g.deadline || shiftMonth(nowMonth, 5));
    const [noDeadline, setNoDeadline] = useState(goal ? !g.deadline : false);
    const [monthly, setMonthly] = useState(fmtIn(g.monthly));
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState("");
    const presets = [[3, "3 เดือน"], [6, "6 เดือน"], [12, "1 ปี"]];
    const tV = num(target);
    const preview = goalStatus({ target: tV, saved: g.saved || 0, deadline: noDeadline ? "" : deadline, monthly: num(monthly) }, nowMonth);
    const people = withFriends ? friends.size + 1 : 1;
    const perPerson = Math.ceil(preview.perMonthSat / people / 100) * 100;

    async function save(e) {
        e.preventDefault();
        if (!name.trim()) return setMsg("ใส่ชื่อเป้าก่อน");
        if (!(tV > 0)) return setMsg("ใส่ยอดที่อยากได้");
        if (withFriends && friends.size === 0) return setMsg("เลือกเพื่อนที่จะเก็บด้วยอย่างน้อย 1 คน");
        setBusy(true);
        setMsg("");
        try {
            await onSave({ ...(goal ? { id: goal.id } : {}), name: name.trim(), icon, color, target: tV, deadline: noDeadline ? "" : deadline, monthly: noDeadline ? num(monthly) : 0, ...(withFriends ? { shared: true, members: [...friends] } : {}) });
            onClose();
        } catch (ex) { setMsg(ex.message); setBusy(false); }
    }

    return (
        <Sheet title={goal ? "แก้เป้า" : "เป้าใหม่"} onClose={onClose} as="form" onSubmit={save} class="plan-sheet">
            {!goal && (
                <div class="seg" role="group" aria-label="เก็บคนเดียวหรือกับเพื่อน">
                    <button type="button" class={withFriends ? "" : "on"} aria-pressed={!withFriends} onClick={() => setWithFriends(false)}>เก็บคนเดียว</button>
                    <button type="button" class={withFriends ? "on" : ""} aria-pressed={withFriends} onClick={() => setWithFriends(true)}>เก็บกับเพื่อน</button>
                </div>
            )}
            <div class="icopick" role="group" aria-label="รูปของเป้า">
                {GOAL_ICONS.map((k) => <button type="button" key={k} class={icon === k ? "on" : ""} aria-pressed={icon === k} aria-label={k} onClick={() => setIcon(k)}><Icon name={GOAL_ICON[k]} size={20} /></button>)}
            </div>
            <div class="colpick" role="group" aria-label="สีของเป้า">
                {GOAL_COLORS.map((k) => <button type="button" key={k} class={`c-${k} ${color === k ? "on" : ""}`} aria-pressed={color === k} aria-label={`สี ${k}`} onClick={() => setColor(k)} />)}
            </div>
            <div class="field">
                <label for="goal-name">ชื่อเป้า</label>
                <input id="goal-name" type="text" maxLength={60} placeholder="เช่น เที่ยวญี่ปุ่น" value={name} onInput={(e) => setName(e.currentTarget.value)} />
            </div>
            <div class="field">
                <label for="goal-target">ยอดที่อยากได้</label>
                <input id="goal-target" class="num" inputmode="decimal" autocomplete="off" placeholder="30000" value={target} onInput={(e) => setTarget(e.currentTarget.value)} />
            </div>
            <div class="field">
                <span class="field-l">ภายใน</span>
                <div class="mchips" role="group" aria-label="ภายใน">
                    {presets.map(([n, l]) => {
                        const m = shiftMonth(nowMonth, n - 1);
                        return <button type="button" key={n} class={!noDeadline && deadline === m ? "on" : ""} onClick={() => { setNoDeadline(false); setDeadline(m); }}>{l}</button>;
                    })}
                    <button type="button" class={noDeadline ? "on" : ""} onClick={() => setNoDeadline(true)}>ไม่กำหนด</button>
                </div>
                {!noDeadline && <input type="month" aria-label="เดือนที่ต้องการ" min={nowMonth} value={deadline} onInput={(e) => e.currentTarget.value && setDeadline(e.currentTarget.value)} />}
            </div>
            {noDeadline && (
                <div class="field">
                    <label for="goal-monthly">ตั้งใจเก็บเดือนละ (ไม่ใส่ก็ได้)</label>
                    <input id="goal-monthly" class="num" inputmode="decimal" autocomplete="off" placeholder="3000" value={monthly} onInput={(e) => setMonthly(e.currentTarget.value)} />
                </div>
            )}
            {withFriends && (
                <div class="field">
                    <span class="field-l" id="goal-friends-l">เก็บกับใคร <span class="mute">({friends.size} คน)</span></span>
                    <div class="pchips" role="group" aria-labelledby="goal-friends-l">
                        {others.map((n) => (
                            <button type="button" key={n} class={`pchip ${friends.has(n) ? "on" : ""}`} aria-pressed={friends.has(n)} onClick={() => toggleF(n)}>
                                {friends.has(n) ? <span class="pav-s"><Icon name="check" size={14} /></span> : <Avatar name={n} pictureUrl={pictures[n]} size="sm" />}{n}
                            </button>
                        ))}
                    </div>
                    <small class="field-note">เพื่อนจะเห็นเป้านี้ในแท็บ ฉัน และใส่เงินได้ ถอนออกได้เฉพาะคุณ</small>
                </div>
            )}
            <div class={`goal-preview c-${color}`} aria-live="polite">
                <span class="gp-ic"><Icon name={GOAL_ICON[icon]} size={24} /></span>
                <div>
                    <small>{people > 1 ? `ต้องเก็บคนละ (${people} คน)` : noDeadline ? "ตั้งใจเก็บเดือนละ" : "ต้องเก็บเดือนละ"}</small>
                    <b class="num">{preview.perMonthSat > 0 ? B(people > 1 ? perPerson : preview.perMonthSat) : "-"}</b>
                    <small>{noDeadline ? "ไม่กำหนดเวลา" : `${preview.monthsLeft} เดือน ถึง ${monthLabel(deadline)}`}</small>
                </div>
            </div>
            {msg && <p class="msg" role="alert">{msg}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : goal ? "บันทึก" : "สร้างเป้า"}</button>
            {goal && onDelete && (
                <div class="goal-del">
                    <DeleteButton label="ลบเป้านี้" onConfirm={async () => { await onDelete(goal.id); onClose(); }} />
                    {s0(goal) > 0 && <p class="lbl">{goal.shared ? `ในเป้ายังมีเงิน ${baht(goal.saved)} ของทุกคน ถอนคืนเพื่อนก่อนลบ` : `เงินที่เก็บไว้ ${baht(goal.saved)} จะไม่ถูกนับต่อ (เงินจริงของคุณไม่หายไปไหน)`}</p>}
                </div>
            )}
        </Sheet>
    );
}
const s0 = (g) => Number(g && g.saved) || 0;

// ======================================================================
// เป้าแชร์: ประวัติ + ยอดแต่ละคน · คนสร้างแก้/ลบได้ · คนอื่นออกจากเป้าได้
// ======================================================================
const TH_D = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
const dShort = (d) => (/^\d{4}-\d{2}-\d{2}/.test(d || "") ? `${Number(d.slice(8, 10))} ${TH_D[Number(d.slice(5, 7)) - 1]}` : "");
export function SharedGoalSheet({ goal, month, me = "", pictures = {}, onEdit, onLeave, onClose }) {
    const s = goalStatus(goal, month);
    const [ask, setAsk] = useState(false);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState("");
    const by = goal.bySat || {};
    async function leave() {
        setBusy(true);
        try { await onLeave(goal.id); onClose(); } catch (e) { setMsg(e.message); setBusy(false); }
    }
    return (
        <Sheet title={goal.name} onClose={onClose} class="plan-sheet">
            <div class="goalhd">
                <span class={`gico c-${goal.color}`}><Icon name={GOAL_ICON[goal.icon] || "target"} size={24} /></span>
                <span class="lbl num">{B(s.savedSat)} จาก {B(s.targetSat)}{goal.deadline ? ` ภายใน ${monthLabel(goal.deadline)}` : ""} · สร้างโดย {goal.owner}</span>
            </div>
            <ul class="plain sg-people">
                {(goal.members || []).map((n) => (
                    <li key={n}><Avatar name={n} pictureUrl={pictures[n]} size="sm" /><span>{n}{n === String(me).toUpperCase() ? " (คุณ)" : ""}</span><b class="num">{B(by[n] || 0)}</b></li>
                ))}
            </ul>
            <h3 class="sg-h">ประวัติ</h3>
            {(goal.log || []).length === 0 ? <p class="lbl">ยังไม่มีใครใส่เงิน</p> : (
                <ul class="plain sg-log">
                    {goal.log.map((x) => (
                        <li key={x.at + x.by}><Avatar name={x.by} pictureUrl={pictures[x.by]} size="sm" /><span>{x.by} {x.amount < 0 ? "ถอนออก" : "เก็บเข้า"}<small>{dShort(x.date)}</small></span><b class={`num ${x.amount < 0 ? "out" : "in"}`}>{x.amount < 0 ? "-" : "+"}{baht(Math.abs(x.amount))}</b></li>
                    ))}
                </ul>
            )}
            {msg && <p class="msg" role="alert">{msg}</p>}
            {goal.isOwner
                ? <button type="button" class="btn ghost block" onClick={() => onEdit(goal)}><Icon name="pencil" size={16} />แก้ชื่อ ยอด หรือคนในเป้า</button>
                : ask
                    ? <div class="sg-ask"><span class="lbl">ออกจากเป้านี้ใช่ไหม เงินที่คุณใส่ไว้ยังอยู่ในเป้า</span><button type="button" class="btn sm" disabled={busy} onClick={leave}>{busy ? "กำลังออก" : "ออกจากเป้า"}</button><button type="button" class="btn sm ghost" disabled={busy} onClick={() => setAsk(false)}>ยกเลิก</button></div>
                    : <button type="button" class="btn ghost block" onClick={() => setAsk(true)}>ออกจากเป้านี้</button>}
        </Sheet>
    );
}
