/**
 * ยืนยันตัวตนด้วย LINE ID Token (ที่ได้จากการล็อกอินเว็บด้วย LINE) แล้วหาสมาชิกที่ผูกกับบัญชี LINE นั้น
 * ใช้กับหน้าเว็บที่ไม่มีรหัสอุปกรณ์ เช่น หน้า "รายจ่ายส่วนตัว" (ดู/ลบ)
 * รับ fetch และ DB เป็นพารามิเตอร์ เพื่อให้ทดสอบได้โดยไม่ยิงเครือข่ายจริง
 */
const SUPER_ADMIN_LINE_ID = "U0d739eea39c312e11c487e22861920d1";

/** เป็นแอดมินไหม (ตรงกับกติกาในหน้าเว็บ: role=admin, isAdmin=true หรือเป็นเจ้าของระบบ) */
export function isAdminMember(m) {
    return Boolean(m) && (m.role === "admin" || m.isAdmin === true || m.lineUserId === SUPER_ADMIN_LINE_ID);
}

export function createLineIdAuthenticator({ db, fs, fetchFn = globalThis.fetch, channelId }) {
    const { collection, getDocs, query, where } = fs;

    return async function authenticateIdToken(idToken) {
        const fail = (status, message) => ({ authenticated: false, status, message });

        if (!idToken || typeof idToken !== "string" || idToken.length > 4000) {
            return fail(401, "ไม่พบการเข้าสู่ระบบ LINE กรุณาล็อกอินในเว็บก่อน");
        }

        let profile;
        try {
            const res = await fetchFn("https://api.line.me/oauth2/v2.1/verify", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ id_token: idToken, client_id: String(channelId) }).toString()
            });
            profile = await res.json();
            if (!res.ok || profile.error || !profile.sub) {
                return fail(401, "การเข้าสู่ระบบ LINE หมดอายุ กรุณาโหลดหน้าเว็บใหม่แล้วลองอีกครั้ง");
            }
        } catch (e) {
            return fail(502, "ตรวจสอบการเข้าสู่ระบบ LINE ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
        }

        const snap = await getDocs(query(collection(db, "members"), where("lineUserId", "==", profile.sub)));
        if (snap.empty) return fail(403, "ไม่พบบัญชีสมาชิกที่ผูกกับ LINE นี้ในระบบ");

        const d = snap.docs[0];
        const data = d.data();
        return {
            authenticated: true,
            memberId: d.id,
            name: data.name,
            lineUserId: profile.sub,
            isAdmin: isAdminMember({ ...data, lineUserId: profile.sub })
        };
    };
}
