// งบรายเดือน + เป้าเก็บเงิน: การ์ดในแท็บ ฉัน (แผนเดือนนี้ + ซองเป้าซ้อนกัน) และหน้าต่างตั้งงบ / เก็บเข้าเป้า / เพิ่มเป้า
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet, DeleteButton } from "./ui.jsx";
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
export function GoalStack({ goals, month, onAdd, onMove, onEdit }) {
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
                                    <span class="env-row"><span class="env-name"><Icon name={GOAL_ICON[g.icon] || "target"} size={16} />{g.name}</span><b class="num">{s.done ? "ครบแล้ว" : `${s.percent}%`}</b></span>
                                </button>
                            );
                        }
                        return (
                            <div key={g.id} class={`env front c-${g.color}`} style={{ "--i": i }}>
                                <span class="flap" aria-hidden="true" />
                                <span class="env-row"><span class="env-name"><span class="env-ic"><Icon name={GOAL_ICON[g.icon] || "target"} size={18} /></span>{g.name}</span><b class="num">{s.done ? "ครบแล้ว" : `${s.percent}%`}</b></span>
                                <b class="env-big num">{B(s.savedSat)}</b>
                                <span class="env-sub num">จาก {B(s.targetSat)} · {goalLine(g, s)}</span>
                                <span class="env-bar" aria-hidden="true"><i style={{ width: `${s.percent}%` }} /></span>
                                <span class="env-acts">
                                    <button type="button" class="env-btn main" onClick={() => onMove(g, "in")}><Icon name="plus" size={16} />เก็บเข้า</button>
                                    <button type="button" class="env-btn" onClick={() => onMove(g, "out")} disabled={s.savedSat <= 0}>ถอนออก</button>
                                    <button type="button" class="env-btn icon" onClick={() => onEdit(g)} aria-label={`แก้ไขเป้า ${g.name}`}><Icon name="pencil" size={16} /></button>
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
    const [dir, setDir] = useState(dir0);
    const planLeft = Math.max(0, s.perMonthSat - s.thisMonthSat);
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
        note = left > 0 ? `เดือนต่อไปเก็บเดือนละ ${B(after.perMonthSat)} อีก ${left} เดือน ก็ทันกำหนด` : "";
    }

    return (
        <Sheet title={goal.name} onClose={onClose} class="plan-sheet">
            <div class="goalhd">
                <span class={`gico c-${goal.color}`}><Icon name={GOAL_ICON[goal.icon] || "target"} size={24} /></span>
                <span class="lbl">เป้า {B(s.targetSat)}{goal.deadline ? ` ภายใน ${monthLabel(goal.deadline)}` : ""}</span>
            </div>
            <div class="seg" role="group" aria-label="เก็บเข้าหรือถอนออก">
                <button type="button" class={dir === "in" ? "on" : ""} aria-pressed={dir === "in"} onClick={() => setDir("in")}>เก็บเข้า</button>
                <button type="button" class={dir === "out" ? "on" : ""} aria-pressed={dir === "out"} onClick={() => setDir("out")} disabled={s.savedSat <= 0}>ถอนออก</button>
            </div>
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
                    {planLeft > 0 && <button type="button" onClick={() => setAmount(String(planLeft / 100))}>ตามแผน {baht(planLeft / 100)}</button>}
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
export function GoalEditSheet({ goal = null, nowMonth, onSave, onDelete, onClose }) {
    const g = goal || {};
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

    async function save(e) {
        e.preventDefault();
        if (!name.trim()) return setMsg("ใส่ชื่อเป้าก่อน");
        if (!(tV > 0)) return setMsg("ใส่ยอดที่อยากได้");
        setBusy(true);
        setMsg("");
        try {
            await onSave({ ...(goal ? { id: goal.id } : {}), name: name.trim(), icon, color, target: tV, deadline: noDeadline ? "" : deadline, monthly: noDeadline ? num(monthly) : 0 });
            onClose();
        } catch (ex) { setMsg(ex.message); setBusy(false); }
    }

    return (
        <Sheet title={goal ? "แก้เป้า" : "เป้าใหม่"} onClose={onClose} as="form" onSubmit={save} class="plan-sheet">
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
            <div class={`goal-preview c-${color}`} aria-live="polite">
                <span class="gp-ic"><Icon name={GOAL_ICON[icon]} size={24} /></span>
                <div>
                    <small>{noDeadline ? "ตั้งใจเก็บเดือนละ" : "ต้องเก็บเดือนละ"}</small>
                    <b class="num">{preview.perMonthSat > 0 ? B(preview.perMonthSat) : "-"}</b>
                    <small>{noDeadline ? "ไม่กำหนดเวลา" : `${preview.monthsLeft} เดือน ถึง ${monthLabel(deadline)}`}</small>
                </div>
            </div>
            {msg && <p class="msg" role="alert">{msg}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : goal ? "บันทึก" : "สร้างเป้า"}</button>
            {goal && onDelete && (
                <div class="goal-del">
                    <DeleteButton label="ลบเป้านี้" onConfirm={async () => { await onDelete(goal.id); onClose(); }} />
                    {s0(goal) > 0 && <p class="lbl">เงินที่เก็บไว้ {baht(goal.saved)} จะไม่ถูกนับต่อ (เงินจริงของคุณไม่หายไปไหน)</p>}
                </div>
            )}
        </Sheet>
    );
}
const s0 = (g) => Number(g && g.saved) || 0;
