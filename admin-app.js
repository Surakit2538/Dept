import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, getDocs, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

const fApp = initializeApp(firebaseConfig);
const db = getFirestore(fApp);
const liffId = "2008948704-db2goT00";

const app = {
    data: {
        rawMembers: [],
        members: [],
        transactions: [],
        settlements: [],
        currentUser: null,
        currentMonth: new Date().toISOString().slice(0, 7),
        isSuperAdmin: false
    },

    async init() {
        this.populateMonthSelector();
        this.bindEvents();

        // Check LINE Login
        try {
            await liff.init({ liffId });
            if (!liff.isLoggedIn()) {
                liff.login({ redirectUri: window.location.href, scope: 'profile openid' });
                return;
            }

            const profile = await liff.getProfile();
            await this.authenticateAdmin(profile);
        } catch (e) {
            this.showAuthError("LIFF Error: " + e.message);
        }
    },

    async authenticateAdmin(profile) {
        document.getElementById('auth-status-text').textContent = "กำลังเชื่อมต่อฐานข้อมูล...";

        const superAdminId = 'U0d739eea39c312e11c487e22861920d1';
        this.data.isSuperAdmin = profile.userId === superAdminId;

        // Fetch user from DB
        const q = query(collection(db, "members"), where("lineUserId", "==", profile.userId));
        const snap = await getDocs(q);

        let isAdmin = false;

        if (!snap.empty) {
            const userData = snap.docs[0].data();
            userData.id = snap.docs[0].id;
            userData.ref = snap.docs[0].ref;
            this.data.currentUser = userData;

            if (userData.isAdmin === true || userData.role === 'admin' || this.data.isSuperAdmin) {
                isAdmin = true;
            }
        } else if (this.data.isSuperAdmin) {
            isAdmin = true;
            this.data.currentUser = { name: "SUPERADMIN", role: "admin" };
        }

        if (isAdmin) {
            document.getElementById('auth-guard').classList.add('hidden');
            if (this.data.currentUser && this.data.currentUser.name) {
                document.getElementById('admin-user-name').textContent = this.data.currentUser.name;
            }
            this.startListeners();
        } else {
            this.showAuthError("คุณไม่มีสิทธิ์เข้าถึงหน้านี้ (เฉพาะ Admin)");
        }
    },

    showAuthError(msg) {
        document.getElementById('auth-status-text').textContent = msg;
        document.getElementById('auth-error-panel').classList.remove('hidden');
        document.querySelector('#auth-guard .animate-spin')?.classList.add('hidden');
    },

    startListeners() {
        onSnapshot(collection(db, "members"), (snap) => {
            this.data.rawMembers = snap.docs.map(d => ({ ...d.data(), id: d.id, ref: d.ref }));
            this.data.members = this.data.rawMembers.map(m => (m.name || "").toUpperCase());
            this.renderAdminsList();
        });

        onSnapshot(collection(db, "transactions"), (snap) => {
            this.data.transactions = snap.docs.map(d => ({ ...d.data(), id: d.id }));
            this.refreshTabs();
        });

        onSnapshot(collection(db, "settlements"), (snap) => {
            this.data.settlements = snap.docs.map(d => ({ ...d.data(), id: d.id, ref: d.ref }));
            this.refreshTabs();
        });
    },

    bindEvents() {
        // Desktop Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetId = e.currentTarget.getAttribute('data-target');
                this.switchTab(targetId);
            });
        });

        // Mobile Tabs
        document.getElementById('mobile-tab-select').addEventListener('change', (e) => {
            this.switchTab(e.target.value);
        });

        // Month Selector
        document.getElementById('global-month-selector').addEventListener('change', (e) => {
            this.data.currentMonth = e.target.value;
            this.refreshTabs();
        });

        // Refresh Buttons
        document.getElementById('btn-refresh-pending').addEventListener('click', () => this.refreshTabs());
        document.getElementById('btn-refresh-verified').addEventListener('click', () => this.refreshTabs());
        document.getElementById('btn-refresh-admins').addEventListener('click', () => this.refreshTabs());
    },

    switchTab(tabId) {
        // UI Desktop
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'bg-[#4f46e5]', 'text-white'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.add('text-slate-300'));
        const activeBtn = document.querySelector(`.tab-btn[data-target="${tabId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'bg-[#4f46e5]', 'text-white');
            activeBtn.classList.remove('text-slate-300');
        }

        // UI Mobile
        const sel = document.getElementById('mobile-tab-select');
        if (sel.value !== tabId) sel.value = tabId;

        // Content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');

        this.refreshTabs();
    },

    populateMonthSelector() {
        const sel = document.getElementById('global-month-selector');
        sel.innerHTML = '';
        const d = new Date();
        for (let i = 0; i < 12; i++) {
            const val = d.toISOString().slice(0, 7);
            const label = d.toLocaleString('th-TH', { month: 'long', year: 'numeric' });
            const opt = document.createElement('option');
            opt.value = val;
            opt.textContent = (i === 0) ? `เดือนปัจจุบัน (${label})` : label;
            opt.className = 'bg-[#1c1c1e]';
            if (val === this.data.currentMonth) opt.selected = true;
            sel.appendChild(opt);
            d.setMonth(d.getMonth() - 1);
        }
    },

    refreshTabs() {
        const activeTab = document.querySelector('.tab-content.active').id;
        if (activeTab === 'tab-pending') this.renderPending();
        else if (activeTab === 'tab-verified') this.renderVerified();
        else if (activeTab === 'tab-admins') this.renderAdminsList();
    },

    // ============================================
    // TAB: PENDING (การคำนวณหนี้และรับชำระ)
    // ============================================
    renderPending() {
        const listContainer = document.getElementById('pending-list');
        listContainer.innerHTML = '';

        const transactions = this.data.transactions.filter(t => t.date && t.date.startsWith(this.data.currentMonth));
        const verifiedSettlements = this.data.settlements.filter(s => s.status === 'verified' && s.month === this.data.currentMonth);

        // คำนวณยอด
        const balances = {};
        this.data.members.forEach(m => balances[m] = 0);

        transactions.forEach(t => {
            const payer = t.payer;
            if (balances[payer] !== undefined) balances[payer] += Number(t.amount);
            if (t.splits) {
                Object.entries(t.splits).forEach(([name, amount]) => {
                    if (balances[name] !== undefined) balances[name] -= Number(amount);
                });
            }
        });

        const debtors = [], creditors = [];
        Object.entries(balances).forEach(([name, amount]) => {
            const val = Math.round(amount * 100) / 100;
            if (val < -1) debtors.push({ name, amount: Math.abs(val) });
            if (val > 1) creditors.push({ name, amount: val });
        });

        debtors.sort((a, b) => b.amount - a.amount);
        creditors.sort((a, b) => b.amount - a.amount);

        const plan = [];
        let i = 0, j = 0;

        while (i < debtors.length && j < creditors.length) {
            const debtor = debtors[i];
            const creditor = creditors[j];
            const amount = Math.min(debtor.amount, creditor.amount);

            if (amount > 0) {
                plan.push({ from: debtor.name, to: creditor.name, amount });
            }

            debtor.amount -= amount;
            creditor.amount -= amount;

            if (debtor.amount < 0.01) i++;
            if (creditor.amount < 0.01) j++;
        }

        // ตัดยอดที่ชำระไปแล้ว
        const pendingPlan = plan.filter(p => {
            // Check if there is an exact match verified
            const existing = verifiedSettlements.find(vs => vs.from === p.from && vs.to === p.to && Math.abs(vs.amount - p.amount) < 1);
            return !existing;
        });

        if (pendingPlan.length === 0) {
            listContainer.innerHTML = `
                <div class="bg-[#1c1c1e] rounded-2xl p-8 text-center border border-white/10">
                    <i class="fa-solid fa-face-smile-beam text-4xl text-emerald-400 mb-4 opacity-50"></i>
                    <p class="text-slate-400 font-medium">ไม่มีรายการค้างชำระในเดือนนี้</p>
                </div>
            `;
            return;
        }

        pendingPlan.forEach(p => {
            const div = document.createElement('div');
            div.className = 'bg-[#1c1c1e] p-5 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-indigo-500/30 transition-colors shadow-sm';

            div.innerHTML = `
                <div class="flex items-center gap-4">
                    <div class="flex flex-col items-center justify-center min-w-[3rem]">
                        <span class="font-bold text-red-400">${p.from}</span>
                        <i class="fa-solid fa-arrow-down text-slate-500 text-xs my-1"></i>
                        <span class="font-bold text-emerald-400">${p.to}</span>
                    </div>
                    <div>
                        <span class="text-2xl font-bold text-white">${p.amount.toLocaleString()} ฿</span>
                        <div class="text-[10px] text-slate-400 mt-1"><i class="fa-solid fa-clock text-amber-500"></i> รอการยืนยัน</div>
                    </div>
                </div>
                <button onclick="window.adminApp.manualVerify('${p.from}', '${p.to}', ${p.amount})" class="w-full md:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-colors flex justify-center items-center gap-2 active:scale-95">
                    <i class="fa-solid fa-check-circle"></i> ยืนยันว่าจ่ายแล้ว
                </button>
            `;
            listContainer.appendChild(div);
        });
    },

    async manualVerify(fromName, toName, amount) {
        if (!confirm(`ยืนยันว่าเคลียร์ยอด ${fromName} -> ${toName} จำนวน ${amount} บาทแล้ว ทันที?`)) return;

        try {
            const tIds = this.data.transactions.filter(t => t.date.startsWith(this.data.currentMonth)).map(t => t.id);
            const settlementId = `${fromName}-${toName}-${this.data.currentMonth}-${Date.now()}`;

            await addDoc(collection(db, "settlements"), {
                status: 'verified',
                month: this.data.currentMonth,
                from: fromName,
                to: toName,
                amount: amount,
                transactionIds: tIds,
                createdAt: new Date().toISOString(),
                verifiedByAdmin: true,
                adminId: this.data.currentUser?.id || 'unknown'
            });

            this.showToast("✅ ยืนยันยอดสำเร็จ!");
        } catch (e) {
            alert("Error: " + e.message);
        }
    },

    // ============================================
    // TAB: VERIFIED (ประวัติและแก้เดือน)
    // ============================================
    renderVerified() {
        const listContainer = document.getElementById('verified-list');
        listContainer.innerHTML = '';

        // แสดงทั้งหมด ไม่สนเดือนปัจจุบัน หรือจะสนก็ได้? ให้แสดงทั้งหมดเรียงตามเวลา
        const vset = this.data.settlements
            .filter(s => s.status === 'verified')
            .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

        if (vset.length === 0) {
            listContainer.innerHTML = `
                <div class="bg-[#1c1c1e] rounded-2xl p-8 text-center border border-white/10">
                    <i class="fa-solid fa-folder-open text-4xl text-slate-500 mb-4 opacity-50"></i>
                    <p class="text-slate-400 font-medium">ยังไม่มีประวัติการชำระเงิน</p>
                </div>
            `;
            return;
        }

        const monthsOptions = this.generateMonthOptionsHTML();

        vset.forEach(s => {
            const div = document.createElement('div');
            div.className = 'bg-[#1c1c1e] p-5 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/20 transition-colors relative';

            const isManual = s.verifiedByAdmin ? '<span class="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded-sm ml-2">Manual</span>' : '';

            // Build the select dropdown for month
            let selectHtml = `<select class="edit-month-btn bg-black/30 border border-white/20 text-white text-xs px-2 py-1 rounded-md outline-none focus:border-indigo-500" onchange="window.adminApp.editSettlementMonth('${s.id}', this.value)">`;
            selectHtml += `<option value="${s.month}" selected disabled>${s.month}</option>`; // Current default
            selectHtml += monthsOptions;
            selectHtml += `</select>`;

            div.innerHTML = `
                <div class="flex items-center gap-4 w-full md:w-auto">
                    <div class="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center shrink-0">
                        <i class="fa-solid fa-check text-emerald-500 text-xl"></i>
                    </div>
                    <div class="flex-1">
                        <div class="text-sm font-bold text-white mb-1">
                            ${s.from} <i class="fa-solid fa-arrow-right text-slate-500 mx-1 text-[10px]"></i> ${s.to} ${isManual}
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-lg font-bold text-emerald-400">${Number(s.amount).toLocaleString()} ฿</span>
                            <span class="text-[10px] text-slate-400">หักยอดของเดือน:</span>
                            ${selectHtml}
                        </div>
                    </div>
                </div>
                
                <button onclick="window.adminApp.deleteSettlement('${s.id}')" class="absolute top-4 right-4 md:static md:mt-0 w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 flex justify-center items-center transition-colors">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            listContainer.appendChild(div);
        });
    },

    generateMonthOptionsHTML() {
        const d = new Date();
        let html = '';
        for (let i = 0; i < 6; i++) {
            const val = d.toISOString().slice(0, 7);
            html += `<option value="${val}">เปลี่ยนเป็น ${val}</option>`;
            d.setMonth(d.getMonth() - 1);
        }
        return html;
    },

    async editSettlementMonth(docId, newMonth) {
        if (!confirm(`ยืนยันการเปลี่ยนให้รายการนี้ไปตัดยอดของเดือน ${newMonth} หรือไม่?`)) {
            this.refreshTabs(); // reset UI
            return;
        }

        try {
            await updateDoc(doc(db, "settlements", docId), {
                month: newMonth
            });
            this.showToast(`✅ ย้ายไปเดือน ${newMonth} สำเร็จ!`);
        } catch (e) {
            alert("Error: " + e.message);
        }
    },

    async deleteSettlement(docId) {
        if (!confirm(`ยืนยันการลบรายการนี้? (ยอดหนี้จะกลับมาค้างชำระเหมือนเดิม)`)) return;

        try {
            await deleteDoc(doc(db, "settlements", docId));
            this.showToast(`🗑️ ลบรายการสำเร็จ`);
        } catch (e) {
            alert("Error: " + e.message);
        }
    },

    // ============================================
    // TAB: ADMIN MANAGEMENT
    // ============================================
    renderAdminsList() {
        const listContainer = document.getElementById('admin-members-list');
        listContainer.innerHTML = '';

        this.data.rawMembers.forEach(m => {
            const isSuper = m.lineUserId === 'U0d739eea39c312e11c487e22861920d1';
            const isAdmin = m.isAdmin === true || m.role === 'admin' || isSuper;

            const div = document.createElement('div');
            div.className = 'grid grid-cols-12 gap-4 p-4 items-center transition-colors hover:bg-white/5';

            // Toggle HTML
            let toggleHtml = '';
            if (isSuper) {
                toggleHtml = `<span class="text-[10px] bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/20 font-bold">SUPERADMIN</span>`;
            } else {
                toggleHtml = `
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" ${isAdmin ? 'checked' : ''} onchange="window.adminApp.toggleAdminRole('${m.id}', this.checked)">
                        <div class="w-9 h-5 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                `;
            }

            div.innerHTML = `
                <div class="col-span-8 md:col-span-6 flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        ${m.pictureUrl ? `<img src="${m.pictureUrl}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-user text-slate-500 text-xs"></i>`}
                    </div>
                    <div>
                        <div class="font-bold text-white text-sm">${m.name}</div>
                        <div class="text-[10px] text-slate-500">${m.lineDisplayName || 'No LINE Link'}</div>
                    </div>
                </div>
                <div class="col-span-4 md:col-span-3 flex justify-center items-center">
                    ${toggleHtml}
                </div>
                <div class="col-span-12 md:col-span-3 text-right hidden md:block text-xs text-slate-500">
                    ${isAdmin ? '<span class="text-emerald-400 font-bold"><i class="fa-solid fa-shield"></i> Has Rights</span>' : 'Member Only'}
                </div>
            `;
            listContainer.appendChild(div);
        });
    },

    async toggleAdminRole(docId, shouldBeAdmin) {
        if (!this.data.isSuperAdmin && !confirm("คุณแน่ใจหรือไม่ที่จะเปลี่ยนแปลงสิทธิ์ Admin ของผู้อื่น?")) {
            this.refreshTabs();
            return;
        }

        try {
            await updateDoc(doc(db, "members", docId), {
                isAdmin: shouldBeAdmin,
                role: shouldBeAdmin ? 'admin' : 'member'
            });
            this.showToast(`✅ อัปเดตสิทธิ์สำเร็จ`);
        } catch (e) {
            alert("Error: " + e.message);
            this.refreshTabs(); // Revert toggle visually
        }
    },

    showToast(message) {
        const toast = document.getElementById('admin-toast');
        document.getElementById('toast-msg').textContent = message;
        toast.style.bottom = '30px';
        setTimeout(() => {
            toast.style.bottom = '-100px';
        }, 3000);
    }
};

// Make it global for inline HTML events
window.adminApp = app;
window.addEventListener('DOMContentLoaded', () => app.init());
