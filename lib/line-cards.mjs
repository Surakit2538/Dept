/**
 * การ์ด LINE (Flex Message) ตามระบบดีไซน์ Dept Money: โปร่ง ไม่มี emoji ใช้โลโก้ PNG ของแอป
 * - buildMonthlyCard: การ์ดสรุปเดือนในแชทส่วนตัว (สุทธิ + ใครค้างคุณ + ปุ่มเตือน) มีตัวเลขกระเป๋าส่วนตัว ห้ามส่งเข้ากลุ่ม
 * - buildGroupDebtCard: การ์ดสำหรับกลุ่ม แสดงเฉพาะใครต้องโอนให้ใคร ไม่มีรายรับ/สุทธิ/รายจ่ายส่วนตัว
 * - buildReminderCard: ข้อความเตือนที่ส่งหาลูกหนี้
 * ฟังก์ชันล้วน ทดสอบได้ ไม่เรียกเครือข่าย
 */
export const APP_URL = "https://dept-game.vercel.app";
export const LOGO_URL = `${APP_URL}/icons/icon-192.png`;

const C = {
    ink: "#14202b", mute: "#5d6b76", line: "#d7dedc", chip: "#eef2f1",
    accent: "#0b6e69", pay: "#b8470f", white: "#ffffff"
};

const TH_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export function monthLabelTh(month) {
    const [y, m] = String(month).split("-").map(Number);
    return `${TH_MONTHS[m - 1]} ${y + 543}`;
}

export function formatBaht(n, decimals = 0) {
    const v = Math.abs(Number(n) || 0);
    return "฿" + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

const text = (t, o = {}) => ({ type: "text", text: String(t), wrap: true, ...o });
const sep = (margin = "md") => ({ type: "separator", margin, color: C.line });

/** แถบสัดส่วน (percent 0-100) */
function bar(percent, color) {
    const p = Math.max(3, Math.min(100, Math.round(percent)));
    return {
        type: "box", layout: "vertical", height: "6px", backgroundColor: C.chip, cornerRadius: "3px", margin: "sm",
        contents: [{ type: "box", layout: "vertical", width: `${p}%`, height: "6px", backgroundColor: color, cornerRadius: "3px", contents: [{ type: "filler" }] }]
    };
}

const brandRow = (right) => ({
    type: "box", layout: "horizontal", alignItems: "center", spacing: "sm",
    contents: [
        { type: "image", url: LOGO_URL, size: "24px", aspectMode: "cover", flex: 0 },
        text("Dept Money", { weight: "bold", size: "sm", color: C.ink, flex: 1, gravity: "center" }),
        text(right, { size: "xs", color: C.mute, align: "end", gravity: "center", flex: 0, wrap: false })
    ]
});

function debtorRow(d, { remind, color }) {
    const row = {
        type: "box", layout: "vertical", margin: "lg",
        contents: [
            {
                type: "box", layout: "horizontal", alignItems: "center", spacing: "sm",
                contents: [
                    text(d.name, { weight: "bold", size: "md", color: C.ink, flex: 1 }),
                    text(formatBaht(d.amount), { weight: "bold", size: "md", color, align: "end", flex: 0, wrap: false }),
                    ...(remind ? [{
                        type: "box", layout: "vertical", flex: 0, paddingAll: "4px", paddingStart: "10px", paddingEnd: "10px",
                        borderColor: C.accent, borderWidth: "1px", cornerRadius: "6px",
                        action: { type: "postback", label: "เตือน", data: `remind:${encodeURIComponent(d.name)}` },
                        contents: [text("เตือน", { size: "xs", weight: "bold", color: C.accent, wrap: false })]
                    }] : [])
                ]
            },
            bar(d.share ?? 100, color)
        ]
    };
    return row;
}

/**
 * @param {{name:string, monthLabel:string, hasIncome:boolean, netSatang:number, incomeBaht:number, spentBaht:number, spentPercent:number|null,
 *          owedToMe:Array<{name:string,amount:number,share:number}>, iOwe:Array<{name:string,amount:number,share:number}>}} p
 */
export function buildMonthlyCard(p) {
    const owedTotal = p.owedToMe.reduce((a, o) => a + o.amount, 0);
    const iOweTotal = p.iOwe.reduce((a, o) => a + o.amount, 0);
    const over = p.hasIncome && p.netSatang < 0;
    const label = !p.hasIncome ? "ใช้ไปเดือนนี้" : over ? "ใช้เกินรายรับ" : "เหลือใช้เดือนนี้";
    const big = !p.hasIncome ? p.spentBaht : Math.abs(p.netSatang) / 100;
    const bigColor = !p.hasIncome || over ? C.pay : C.accent;

    const body = [
        brandRow(p.monthLabel),
        text(label, { size: "xs", color: C.mute, margin: "xl" }),
        text(formatBaht(Math.round(big)), { size: "3xl", weight: "bold", color: bigColor, margin: "xs", wrap: false }),
        {
            type: "box", layout: "horizontal", margin: "sm", spacing: "md",
            contents: [
                text(p.hasIncome ? `รายรับ ${formatBaht(p.incomeBaht)}` : "ยังไม่มีรายรับเดือนนี้", { size: "xs", color: C.mute, flex: 1 }),
                text(`ใช้ไป ${formatBaht(p.spentBaht)}`, { size: "xs", color: C.mute, align: "end", flex: 1 })
            ]
        }
    ];
    if (p.spentPercent !== null && p.spentPercent !== undefined) body.push(bar(p.spentPercent, C.pay));

    body.push(sep("xl"));
    body.push({
        type: "box", layout: "horizontal", margin: "lg", paddingAll: "10px", backgroundColor: C.chip, cornerRadius: "8px", alignItems: "center",
        contents: [
            text("ใครค้างคุณ", { weight: "bold", size: "sm", color: C.ink, flex: 1 }),
            text(owedTotal > 0 ? `รอรับคืน ${formatBaht(owedTotal)}` : "ไม่มีใครค้างคุณ", { size: "sm", weight: "bold", color: owedTotal > 0 ? C.accent : C.mute, align: "end", flex: 0, wrap: false })
        ]
    });
    p.owedToMe.slice(0, 6).forEach((d) => body.push(debtorRow(d, { remind: true, color: C.accent })));
    if (p.owedToMe.length > 6) body.push(text(`และอีก ${p.owedToMe.length - 6} คน (ดูทั้งหมดในหน้าเคลียร์เงิน)`, { size: "xs", color: C.mute, margin: "md" }));

    if (p.iOwe.length > 0) {
        body.push(sep("xl"));
        body.push({
            type: "box", layout: "horizontal", margin: "lg", alignItems: "center",
            contents: [
                text("คุณค้างเพื่อน", { weight: "bold", size: "sm", color: C.ink, flex: 1 }),
                text(formatBaht(iOweTotal), { size: "sm", weight: "bold", color: C.pay, align: "end", flex: 0, wrap: false })
            ]
        });
        p.iOwe.slice(0, 4).forEach((d) => body.push(debtorRow(d, { remind: false, color: C.pay })));
    }

    const footer = [];
    if (p.owedToMe.length > 0) {
        footer.push({ type: "button", style: "primary", color: C.accent, height: "sm", action: { type: "postback", label: "เตือนทุกคน", data: "remind:all" } });
    }
    footer.push({ type: "button", style: "link", height: "sm", color: C.ink, action: { type: "uri", label: "เปิดหน้าเคลียร์เงิน", uri: `${APP_URL}/app/#clear` } });

    const alt = `สรุปเดือน ${p.monthLabel}: ${label} ${formatBaht(Math.round(big))}` + (owedTotal > 0 ? ` เพื่อนค้างคุณ ${formatBaht(owedTotal)}` : "");
    return {
        type: "flex",
        altText: alt,
        contents: {
            type: "bubble", size: "mega",
            body: { type: "box", layout: "vertical", paddingAll: "18px", contents: body },
            footer: { type: "box", layout: "vertical", spacing: "xs", paddingAll: "12px", contents: footer }
        }
    };
}

/** การ์ดในกลุ่ม: lines = [{from,to,amount}] (บาทเต็ม) */
export function buildGroupDebtCard({ monthLabel, lines }) {
    const max = Math.max(1, ...lines.map((l) => l.amount));
    const body = [
        brandRow(monthLabel),
        text("ยอดที่ต้องโอน", { size: "xs", color: C.mute, margin: "xl" })
    ];
    lines.slice(0, 12).forEach((l) => {
        body.push({
            type: "box", layout: "vertical", margin: "lg",
            contents: [
                {
                    type: "box", layout: "horizontal", alignItems: "center", spacing: "sm",
                    contents: [
                        text(`${l.from}  >  ${l.to}`, { size: "sm", color: C.ink, flex: 1 }),
                        text(formatBaht(l.amount), { size: "sm", weight: "bold", color: C.pay, align: "end", flex: 0, wrap: false })
                    ]
                },
                bar((l.amount / max) * 100, C.accent)
            ]
        });
    });
    if (lines.length > 12) body.push(text(`และอีก ${lines.length - 12} รายการ`, { size: "xs", color: C.mute, margin: "md" }));
    return {
        type: "flex",
        altText: `ยอดที่ต้องโอน ${monthLabel} ${lines.length} รายการ`,
        contents: {
            type: "bubble", size: "mega",
            body: { type: "box", layout: "vertical", paddingAll: "18px", contents: body },
            footer: {
                type: "box", layout: "vertical", paddingAll: "12px",
                contents: [{ type: "button", style: "primary", color: C.accent, height: "sm", action: { type: "uri", label: "เปิดหน้าเคลียร์เงิน", uri: `${APP_URL}/app/#clear` } }]
            }
        }
    };
}

/** ข้อความเตือนลูกหนี้: debts = [{to, amount}] */
export function buildReminderCard({ monthLabel, debts }) {
    const total = debts.reduce((a, d) => a + d.amount, 0);
    const body = [
        brandRow(monthLabel),
        text("เตือนยอดค้างชำระ", { size: "xs", color: C.mute, margin: "xl" }),
        text(formatBaht(total), { size: "3xl", weight: "bold", color: C.pay, margin: "xs", wrap: false })
    ];
    debts.slice(0, 6).forEach((d) => {
        body.push({
            type: "box", layout: "horizontal", margin: "lg", alignItems: "center",
            contents: [
                text(`ให้ ${d.to}`, { size: "sm", color: C.ink, flex: 1 }),
                text(formatBaht(d.amount), { size: "sm", weight: "bold", color: C.pay, align: "end", flex: 0, wrap: false })
            ]
        });
    });
    return {
        type: "flex",
        altText: `เตือนยอดค้างชำระ ${formatBaht(total)}`,
        contents: {
            type: "bubble", size: "mega",
            body: { type: "box", layout: "vertical", paddingAll: "18px", contents: body },
            footer: {
                type: "box", layout: "vertical", paddingAll: "12px",
                contents: [{ type: "button", style: "primary", color: C.accent, height: "sm", action: { type: "uri", label: "ดู QR และโอนเงิน", uri: `${APP_URL}/app/#clear` } }]
            }
        }
    };
}

/** กล่องถามยืนยันก่อนส่งเตือน (quick reply) */
export function buildRemindConfirm({ targets, total }) {
    const who = targets.length === 1 ? targets[0] : `${targets.length} คน`;
    return {
        type: "text",
        text: `ส่งข้อความเตือนถึง ${who} (ยอดรวม ${formatBaht(total)}) ใช่ไหม`,
        quickReply: {
            items: [
                { type: "action", action: { type: "postback", label: "ส่งเตือน", data: `confirm:${targets.length === 1 ? "remind:" + encodeURIComponent(targets[0]) : "remind:all"}`, displayText: "ส่งเตือน" } },
                { type: "action", action: { type: "postback", label: "ยกเลิก", data: "cancel", displayText: "ยกเลิก" } }
            ]
        }
    };
}
