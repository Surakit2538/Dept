// บัตรเครดิต (เจ้าของเลือก: แท็บ ฉัน + ต่อคิวในการ์ดบิลถัดไป, ภาพบัตรลาย 3 เลือกสีได้)
// - CardWallet: บัตรซ้อนแบบกระเป๋าสตางค์ ใบบนสุด = ใกล้ครบกำหนดที่สุด แตะใบหลังเพื่อดึงขึ้นมา แตะใบหน้าเพื่อดูรายละเอียด
// - CardEditSheet: เพิ่ม/แก้บัตร ภาพบัตรเปลี่ยนตามที่กรอกทันที · CardDetailSheet: ยอดรอบ ปุ่มจ่ายแล้ว รายการในรอบ
// ยอดของรอบ = รวมรายจ่ายที่บันทึกในแอปด้วยบัตรนั้น (คำนวณที่เซิร์ฟเวอร์ lib/card-cycle.mjs)
import { useState, useMemo } from "preact/hooks";
import { Icon, iconFor, ItemIcon } from "./icons.jsx";
import { Sheet, DeleteButton } from "./ui.jsx";
import { baht, cardName, dayShort } from "./model.js";

export const CARD_BANKS = ["KTC", "CardX", "ttb", "SCB", "KBank", "Krungsri", "UOB", "อื่นๆ"];
export const CARD_COLORS = [["accent", "น้ำเงิน"], ["navy", "ดำน้ำเงิน"], ["sun", "ทานตะวัน"], ["green", "เขียว"], ["black", "ดำ"], ["bronze", "บรอนซ์"], ["copper", "ทองแดง"], ["midnight", "กรมท่า"], ["cyan", "ฟ้าเทอร์ควอยซ์"], ["sky", "ฟ้า"], ["peri", "ม่วงคราม"], ["forest", "เขียวเข้ม"], ["teal", "เขียวหัวเป็ด"], ["gold", "ทอง"], ["silver", "เงิน"]];
const money = (sat) => baht(sat / 100, { decimals: sat % 100 ? 2 : 0 });

/** บัตรที่ต้องสนใจก่อน: รอบที่ต้องจ่ายและยังไม่จ่าย (ใกล้ครบกำหนดก่อน) แล้วค่อยรอบที่ใช้อยู่ */
export function cardOrder(cards) {
    const k = (c) => (c.due && !c.due.paid ? c.due.daysLeft : 1000 + (c.open ? c.open.daysLeft : 0));
    return [...(cards || [])].sort((a, b) => k(a) - k(b));
}

/** ภาพบัตร (ใช้ทั้งหน้าเพิ่มบัตรและกระเป๋า) children = ส่วนกลางบัตร */
export function Plastic({ card, children, compact = false, onClick, label }) {
    const Tag = onClick ? "button" : "div";
    return (
        <Tag type={onClick ? "button" : undefined} class={`plastic pc-${card.color || "accent"} ${compact ? "peek" : ""}`} onClick={onClick} aria-label={label}>
            <span class="pc-top">
                <b>{compact ? cardName(card) : card.bank === "อื่นๆ" ? "บัตรเครดิต" : card.bank || "บัตรเครดิต"}</b>
                {compact ? children : <svg class="pc-nfc" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7a7 7 0 0 1 0 10M12 5a10 10 0 0 1 0 14M16 3a13 13 0 0 1 0 18" /></svg>}
            </span>
            {!compact && children}
        </Tag>
    );
}

function dueTag(c) {
    if (c.due && !c.due.paid) return <span class="pc-due hot">{c.due.daysLeft === 0 ? "ครบกำหนดวันนี้" : `อีก ${c.due.daysLeft} วัน`}</span>;
    if (c.due && c.due.paid) return <span class="pc-due">จ่ายแล้ว</span>;
    return <span class="pc-due">ตัดรอบ {dayShort(c.open.end)}</span>;
}

/** ส่วนกลางของบัตรใบหน้า: ยอดที่ต้องจ่าย (หรือใช้ไปรอบนี้) + วันครบกำหนด */
function FrontBody({ c }) {
    const owing = c.due && !c.due.paid;
    const cyc = owing ? c.due : c.open;
    return (
        <>
            <span class="pc-mid">
                <small>{owing ? `ต้องจ่ายรอบนี้ (${dayShort(cyc.start)} - ${dayShort(cyc.end)})` : "ใช้ไปรอบนี้ (ยังไม่ตัดรอบ)"}</small>
                <b class="num">{money(cyc.amountSat)}</b>
            </span>
            <span class="pc-bot num">
                <span><small>ครบกำหนด</small>{dayShort(cyc.dueDate)}</span>
                <span><small>รายการในรอบ</small>{cyc.count} รายการ</span>
            </span>
        </>
    );
}

export function CardWallet({ cards, onAdd, onOpen }) {
    const list = useMemo(() => cardOrder(cards), [cards]);
    const [frontId, setFrontId] = useState(null);
    const front = list.find((c) => c.id === frontId) || list[0];
    const back = list.filter((c) => c !== front);
    return (
        <section class="card cw">
            <div class="cw-hd">
                <h3>บัตรเครดิต</h3>
                <button type="button" class="link-btn" onClick={onAdd}><Icon name="plus" size={14} />เพิ่มบัตร</button>
            </div>
            {!front ? (
                <button type="button" class="cw-empty" onClick={onAdd}>
                    <Icon name="card" size={22} />
                    <span><b>เพิ่มบัตรใบแรก</b><small>บอกวันตัดรอบกับวันครบกำหนด แอปจะรวมยอดจากรายการที่บันทึกด้วยบัตรนั้น และส่ง LINE เตือนก่อนครบกำหนด 3 วัน</small></span>
                </button>
            ) : (
                <div class="cw-stack">
                    {back.map((c) => <Plastic key={c.id} card={c} compact onClick={() => setFrontId(c.id)} label={`ดูบัตร ${cardName(c)}`}>{dueTag(c)}</Plastic>)}
                    <Plastic card={front} onClick={() => onOpen(front)} label={`รายละเอียดบัตร ${cardName(front)}`}>
                        <span class="pc-tagrow"><span class="num">{front.last4 ? `•• ${front.last4}` : ""}</span>{dueTag(front)}</span>
                        <FrontBody c={front} />
                    </Plastic>
                </div>
            )}
            {front && <p class="lbl cw-note">ยอดรวมจากรายการที่บันทึกในแอปด้วยบัตรนั้น (รวมที่มาจาก SMS/อีเมลบัตร) ยอดจริงดูที่ใบแจ้งยอดของธนาคาร</p>}
        </section>
    );
}

const dayOpts = Array.from({ length: 31 }, (_, i) => i + 1);

/** หน้าบัตรแบบบัตรจริง (ชิป เลขท้าย วันตัดรอบ/วันจ่าย) */
function CardFace({ card }) {
    return (
        <Plastic card={card}>
            <span class="pc-chip" aria-hidden="true" />
            <span class="pc-no num">•••• •••• •••• {card.last4 || "••••"}</span>
            <span class="pc-bot num">
                <span><small>ตัดรอบ</small>ทุกวันที่ {card.statementDay}</span>
                <span><small>จ่ายภายใน</small>วันที่ {card.dueDay}{Number(card.dueDay) <= Number(card.statementDay) ? " เดือนถัดไป" : ""}</span>
            </span>
        </Plastic>
    );
}

export function CardEditSheet({ card = null, onSave, onDelete, onClose }) {
    const c0 = card || {};
    const [bank, setBank] = useState(c0.bank || "KTC");
    const [last4, setLast4] = useState(c0.last4 || "");
    const [color, setColor] = useState(c0.color || "accent");
    const [statementDay, setStatementDay] = useState(c0.statementDay || 15);
    const [dueDay, setDueDay] = useState(c0.dueDay || 25);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState("");
    const preview = { bank, last4, color };

    async function save(e) {
        e.preventDefault();
        if (last4 && !/^\d{4}$/.test(last4)) return setMsg("เลขท้ายบัตรต้องเป็นตัวเลข 4 หลัก");
        if (Number(statementDay) === Number(dueDay)) return setMsg("วันครบกำหนดต้องไม่ใช่วันเดียวกับวันตัดรอบ");
        setBusy(true);
        setMsg("");
        try {
            await onSave({ ...(card ? { id: card.id } : {}), bank, last4, color, statementDay: Number(statementDay), dueDay: Number(dueDay) });
            onClose();
        } catch (ex) { setMsg(ex.message); setBusy(false); }
    }

    return (
        <Sheet title={card ? "แก้ไขบัตร" : "เพิ่มบัตรเครดิต"} onClose={onClose} as="form" onSubmit={save} class="cc-sheet">
            <CardFace card={{ ...preview, statementDay, dueDay }} />
            <div class="field">
                <span class="field-l">สีบัตร <span class="mute">{(CARD_COLORS.find(([k]) => k === color) || ["", ""])[1]}</span></span>
                {/* แบบ B: บัตรใบเล็กเลื่อนซ้ายขวา เห็นสีจริงทุกใบ */}
                <div class="cc-thumbs" role="group" aria-label="สีบัตร">
                    {CARD_COLORS.map(([k, l]) => (
                        <button type="button" key={k} class={`plastic mini pc-${k} ${color === k ? "on" : ""}`} aria-pressed={color === k} aria-label={`สี${l}`} onClick={() => setColor(k)}>
                            <b>{bank === "อื่นๆ" ? "บัตร" : bank}</b><span class="num">{last4 ? `••${last4}` : "••••"}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div class="field">
                <span class="field-l">ธนาคาร / บัตร</span>
                <div class="mchips" role="group" aria-label="ธนาคาร">
                    {CARD_BANKS.map((b) => <button type="button" key={b} class={bank === b ? "on" : ""} aria-pressed={bank === b} onClick={() => setBank(b)}>{b}</button>)}
                </div>
            </div>
            <div class="field">
                <label for="cc-last4">เลข 4 ตัวท้ายบัตร (ไม่ใส่ก็ได้)</label>
                <input id="cc-last4" class="num" inputmode="numeric" autocomplete="off" maxLength={4} placeholder="1234" value={last4} onInput={(e) => setLast4(e.currentTarget.value.replace(/\D/g, "").slice(0, 4))} aria-describedby="cc-last4-h" />
                <small id="cc-last4-h">ใช้จับคู่รายการจาก SMS/อีเมลบัตร ถ้ามีบัตรธนาคารเดียวกันหลายใบควรใส่</small>
            </div>
            <div class="cc-two">
                <div class="field">
                    <label for="cc-sd">ตัดรอบทุกวันที่</label>
                    <select id="cc-sd" class="num" value={statementDay} onChange={(e) => setStatementDay(Number(e.currentTarget.value))}>{dayOpts.map((d) => <option key={d} value={d}>{d}</option>)}</select>
                </div>
                <div class="field">
                    <label for="cc-dd">จ่ายภายในวันที่</label>
                    <select id="cc-dd" class="num" value={dueDay} onChange={(e) => setDueDay(Number(e.currentTarget.value))}>{dayOpts.map((d) => <option key={d} value={d}>{d}</option>)}</select>
                </div>
            </div>
            <p class="lbl">ดูทั้งสองวันได้จากใบแจ้งยอดบัตร · LINE จะเตือนก่อนครบกำหนด 3 วัน และวันครบกำหนด</p>
            {msg && <p class="msg" role="alert">{msg}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : card ? "บันทึก" : "บันทึกบัตร"}</button>
            {card && onDelete && (
                <div class="goal-del">
                    <DeleteButton label="ลบบัตรนี้" onConfirm={async () => { await onDelete(card.id); onClose(); }} />
                    <p class="lbl">ลบแค่บัตรในแอป รายการที่บันทึกไว้ไม่หาย</p>
                </div>
            )}
        </Sheet>
    );
}

function Items({ list }) {
    if (!list || !list.length) return <p class="lbl">ยังไม่มีรายการที่บันทึกด้วยบัตรนี้ในรอบนี้</p>;
    return (
        <ul class="plain cc-items">
            {list.map((x) => (
                <li class="row" key={x.id}>
                    <ItemIcon desc={x.desc} name={iconFor(x.icon)} size={34} iconSize={16} />
                    <div class="grow"><div class="t">{x.desc}</div><div class="s">{dayShort(x.date)}</div></div>
                    <b class="num">{baht(x.amount, { decimals: x.amount % 1 ? 2 : 0 })}</b>
                </li>
            ))}
        </ul>
    );
}

export function CardDetailSheet({ card, onEdit, onPaid, onClose }) {
    const [busy, setBusy] = useState(false);
    const [tab, setTab] = useState(card.due && !card.due.paid ? "due" : "open");
    const d = card.due;
    const o = card.open;
    async function paid(v) {
        setBusy(true);
        try { await onPaid(card.id, v, d.key); } finally { setBusy(false); }
    }
    return (
        <Sheet title={cardName(card)} onClose={onClose} class="cc-sheet" action={<button type="button" class="btn sm ghost" onClick={() => onEdit(card)}><Icon name="pencil" size={14} />แก้ไข</button>}>
            <CardFace card={card} />
            {d && (
                <div class={`cc-due ${d.paid ? "paid" : ""}`}>
                    <div class="grow">
                        <small>ครบกำหนด {dayShort(d.dueDate)} · {d.paid ? "จ่ายแล้ว" : d.daysLeft === 0 ? "วันนี้" : `อีก ${d.daysLeft} วัน`}</small>
                        <b class="num">{money(d.amountSat)}</b>
                        <small>ยอดรอบ {dayShort(d.start)} - {dayShort(d.end)}</small>
                    </div>
                    {d.paid
                        ? <button type="button" class="btn sm ghost" disabled={busy} onClick={() => paid(false)}>ยกเลิก จ่ายแล้ว</button>
                        : <button type="button" class="btn sm" disabled={busy} onClick={() => paid(true)}><Icon name="check" size={14} />จ่ายแล้ว</button>}
                </div>
            )}
            <div class="seg" role="group" aria-label="รอบบิล">
                {d && <button type="button" class={tab === "due" ? "on" : ""} aria-pressed={tab === "due"} onClick={() => setTab("due")}>รอบที่ต้องจ่าย ({d.count})</button>}
                <button type="button" class={tab === "open" ? "on" : ""} aria-pressed={tab === "open"} onClick={() => setTab("open")}>รอบที่ใช้อยู่ ({o.count})</button>
            </div>
            {tab === "due" && d ? <Items list={d.items} /> : (
                <>
                    <p class="lbl">ใช้ไป {money(o.amountSat)} · ตัดรอบ {dayShort(o.end)} · ครบกำหนด {dayShort(o.dueDate)}</p>
                    <Items list={o.items} />
                </>
            )}
            <p class="lbl">นับเฉพาะรายการที่บันทึกในแอปและระบุบัตรนี้ (จาก SMS/อีเมลบัตร หรือเลขท้ายบัตรตรงกัน)</p>
        </Sheet>
    );
}
