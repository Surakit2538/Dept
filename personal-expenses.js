/**
 * Dept Money - หน้าต่าง "รายจ่ายส่วนตัว" (ดู/ลบรายการที่บันทึกแบบส่วนตัวจากคำสั่งลัด)
 * - เห็นเฉพาะรายการของตัวเอง (เพื่อนไม่เห็น และไม่กระทบยอดหนี้)
 * - ยืนยันตัวตนด้วย LINE ID Token ของผู้ที่ล็อกอินเว็บอยู่ (ไม่ต้องใช้รหัสอุปกรณ์)
 * - ข้อความทุกอย่างที่มาจากข้อมูล (เช่น ชื่อรายการ) ใส่ด้วย textContent เพื่อกัน XSS
 */
(function () {
    const API = "/api/shortcut-transaction";
    const THAI_MONTHS = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    const THAI_MONTHS_SHORT = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

    let month = null; // YYYY-MM
    let busy = false;

    function currentMonthBangkok() {
        const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit" }).formatToParts(new Date());
        const y = parts.find((p) => p.type === "year").value;
        const m = parts.find((p) => p.type === "month").value;
        return y + "-" + m;
    }

    function shiftMonth(ym, delta) {
        const y = Number(ym.slice(0, 4));
        const m = Number(ym.slice(5, 7)) - 1 + delta;
        const d = new Date(Date.UTC(y, m, 1));
        return d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0");
    }

    function monthLabel(ym) {
        return THAI_MONTHS[Number(ym.slice(5, 7)) - 1] + " " + (Number(ym.slice(0, 4)) + 543);
    }

    function dayLabel(iso) {
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
        if (!m) return iso || "-";
        return Number(m[3]) + " " + THAI_MONTHS_SHORT[Number(m[2]) - 1];
    }

    function baht(n) {
        return "฿" + Number(n || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function el(tag, className, text) {
        const e = document.createElement(tag);
        if (className) e.className = className;
        if (text !== undefined) e.textContent = text;
        return e;
    }

    function $(id) {
        return document.getElementById(id);
    }

    function isLoggedIn() {
        return typeof liff !== "undefined" && liff.isLoggedIn && liff.isLoggedIn();
    }

    async function api(body) {
        const idToken = liff.getIDToken();
        if (!idToken) throw new Error("ไม่พบการเข้าสู่ระบบ LINE กรุณาล็อกอินใหม่อีกครั้ง");
        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.assign({ idToken: idToken }, body))
        });
        let data = null;
        try {
            data = await res.json();
        } catch (e) {
            throw new Error("เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง");
        }
        if (!res.ok || !data.success) throw new Error((data && data.message) || "เกิดข้อผิดพลาด");
        return data;
    }

    function createModalDOM() {
        if ($("personal-expenses-modal")) return;

        const overlay = el("div", "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden");
        overlay.id = "personal-expenses-modal";
        overlay.addEventListener("click", () => window.personalExpenses.closeModal());

        const card = el("div", "bg-[#1c1c1e] text-white w-full max-w-lg rounded-3xl p-5 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto space-y-4");
        card.addEventListener("click", (e) => e.stopPropagation());

        // หัวข้อ
        const head = el("div", "flex items-center justify-between border-b border-white/10 pb-3");
        const titleWrap = el("div");
        titleWrap.appendChild(el("h3", "font-bold text-lg text-white", "รายจ่ายส่วนตัว"));
        titleWrap.appendChild(el("p", "text-xs text-slate-400", "เห็นเฉพาะคุณ เพื่อนไม่เห็น และไม่กระทบยอดหนี้"));
        const closeBtn = el("button", "w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center", "✕");
        closeBtn.addEventListener("click", () => window.personalExpenses.closeModal());
        head.appendChild(titleWrap);
        head.appendChild(closeBtn);
        card.appendChild(head);

        // เลือกเดือน
        const nav = el("div", "flex items-center justify-between gap-2");
        const prev = el("button", "px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold", "‹ ก่อนหน้า");
        const label = el("div", "text-sm font-bold text-center flex-1");
        label.id = "pe-month-label";
        const next = el("button", "px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold", "ถัดไป ›");
        prev.addEventListener("click", () => window.personalExpenses.changeMonth(-1));
        next.addEventListener("click", () => window.personalExpenses.changeMonth(1));
        nav.appendChild(prev);
        nav.appendChild(label);
        nav.appendChild(next);
        card.appendChild(nav);

        // ยอดรวม
        const totalBox = el("div", "bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between");
        totalBox.appendChild(el("span", "text-xs text-slate-400", "รวมเดือนนี้"));
        const total = el("span", "text-xl font-bold text-red-300", "฿0.00");
        total.id = "pe-total";
        totalBox.appendChild(total);
        card.appendChild(totalBox);

        // สถานะ + รายการ
        const status = el("p", "text-sm text-slate-300 text-center py-2 hidden");
        status.id = "pe-status";
        card.appendChild(status);

        const list = el("div", "space-y-2");
        list.id = "pe-list";
        card.appendChild(list);

        overlay.appendChild(card);
        document.body.appendChild(overlay);
    }

    function setStatus(text, isError) {
        const s = $("pe-status");
        if (!s) return;
        if (!text) {
            s.classList.add("hidden");
            return;
        }
        s.textContent = text;
        s.className = "text-sm text-center py-2 " + (isError ? "text-amber-300" : "text-slate-300");
    }

    function renderItems(items) {
        const list = $("pe-list");
        list.textContent = "";
        items.forEach((it) => {
            const row = el("div", "flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-3 py-3");

            const date = el("div", "text-xs text-slate-400 w-12 shrink-0", dayLabel(it.date));
            const mid = el("div", "flex-1 min-w-0");
            mid.appendChild(el("div", "text-sm font-bold text-white break-words", it.desc || "-"));
            if (it.bank) mid.appendChild(el("div", "text-[11px] text-slate-400", it.bank));
            const amount = el("div", "text-sm font-bold text-red-300 shrink-0", baht(it.amount));

            const del = el("button", "w-9 h-9 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-300 flex items-center justify-center shrink-0", "🗑");
            del.setAttribute("aria-label", "ลบรายการนี้");
            del.addEventListener("click", () => window.personalExpenses.remove(it));

            row.appendChild(date);
            row.appendChild(mid);
            row.appendChild(amount);
            row.appendChild(del);
            list.appendChild(row);
        });
    }

    async function load() {
        if (busy) return;
        busy = true;
        $("pe-month-label").textContent = monthLabel(month);
        $("pe-total").textContent = "…";
        $("pe-list").textContent = "";
        setStatus("กำลังโหลด...", false);
        try {
            const data = await api({ action: "list", month: month });
            $("pe-total").textContent = baht(data.total);
            renderItems(data.items || []);
            setStatus(data.count === 0 ? "ยังไม่มีรายจ่ายส่วนตัวในเดือนนี้" : "", false);
        } catch (e) {
            $("pe-total").textContent = baht(0);
            setStatus(e.message, true);
        } finally {
            busy = false;
        }
    }

    window.personalExpenses = {
        openModal: function () {
            createModalDOM();
            $("personal-expenses-modal").classList.remove("hidden");
            if (!isLoggedIn()) {
                $("pe-month-label").textContent = "";
                setStatus("กรุณาเข้าสู่ระบบด้วย LINE ก่อน แล้วเปิดหน้านี้อีกครั้ง", true);
                return;
            }
            if (!month) month = currentMonthBangkok();
            load();
        },

        closeModal: function () {
            const m = $("personal-expenses-modal");
            if (m) m.classList.add("hidden");
        },

        changeMonth: function (delta) {
            if (busy || !isLoggedIn()) return;
            month = shiftMonth(month || currentMonthBangkok(), delta);
            load();
        },

        remove: async function (item) {
            if (busy) return;
            const ok = confirm("ลบรายการนี้ใช่ไหม?\n\n" + (item.desc || "-") + "\n" + baht(item.amount) + " (" + dayLabel(item.date) + ")\n\nลบแล้วกู้คืนไม่ได้");
            if (!ok) return;
            busy = true;
            setStatus("กำลังลบ...", false);
            try {
                await api({ action: "delete", id: item.id });
            } catch (e) {
                busy = false;
                setStatus(e.message, true);
                return;
            }
            busy = false;
            load();
        }
    };
})();
