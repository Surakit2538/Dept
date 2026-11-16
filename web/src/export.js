// ส่งออกบิลเป็นไฟล์ CSV (เปิดใน Excel/Google Sheets ได้ มี BOM ให้ภาษาไทยไม่เพี้ยน)
const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;

export function billsToCsv(transactions) {
    const rows = [["วันที่", "รายการ", "คนจ่าย", "ยอดเต็ม", "ประเภท", "ส่วนของแต่ละคน"]];
    [...transactions].sort((a, b) => String(a.date).localeCompare(String(b.date))).forEach((t) => {
        const splits = Object.entries(t.splits || {}).map(([k, v]) => `${k}=${v}`).join("; ");
        rows.push([t.date, t.desc || "", t.payer || "", t.amount, t.paymentType || "normal", splits]);
    });
    return "\uFEFF" + rows.map((r) => r.map(cell).join(",")).join("\r\n");
}

export function downloadCsv(text, name) {
    const url = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
}
