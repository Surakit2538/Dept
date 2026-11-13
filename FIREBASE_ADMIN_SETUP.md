# ตั้งค่ากุญแจแอดมิน + ปิดข้อมูลส่วนตัว (Phase 2e)

เป้าหมาย: ให้เฉพาะเซิร์ฟเวอร์อ่าน/เขียนข้อมูลกระเป๋า (wallet_entries), รายจ่ายส่วนตัว, รหัสอุปกรณ์ ฯลฯ ได้
ส่วนเบราว์เซอร์เข้าถึงได้เฉพาะข้อมูลกลุ่ม (members, transactions, settlements, subscription_templates)

## ลำดับสำคัญ (ห้ามสลับ)
1. สร้างกุญแจแอดมิน -> ใส่ใน Vercel -> Redeploy
2. ตรวจว่าระบบยังใช้ได้ปกติ (ผู้พัฒนาจะตรวจให้)
3. ค่อยวางกฎ `firestore.rules` ใน Firebase Console

## ขั้นตอน
1. Firebase Console -> ไอคอนฟันเฟือง -> Project settings -> แท็บ Service accounts -> กด Generate new private key -> ดาวน์โหลดไฟล์ .json
2. เปิดไฟล์ .json ด้วย Notepad -> เลือกทั้งหมด (Ctrl+A) -> คัดลอก (Ctrl+C)
3. Vercel -> โปรเจกต์ dept -> Settings -> Environment Variables -> Add: ชื่อ `FIREBASE_SERVICE_ACCOUNT` ค่า = วางทั้งหมด -> ติ๊ก Sensitive -> Save
4. Deployments -> กด Redeploy
5. แจ้งผู้พัฒนาให้ตรวจ (ดู log ว่าขึ้น `[db] using firebase-admin`)
6. Firebase Console -> Firestore Database -> แท็บ Rules -> วางเนื้อหา `firestore.rules` -> Publish

## ย้อนกลับ
- ลบตัวแปร `FIREBASE_SERVICE_ACCOUNT` ใน Vercel แล้ว Redeploy = กลับไปโหมดเดิม
- ถ้าวางกฎไปแล้ว ต้องย้อนกฎด้วย: Firestore -> Rules -> History -> เลือกเวอร์ชันก่อนหน้า -> Restore
- ห้ามเก็บไฟล์ .json กุญแจไว้ในโฟลเดอร์โปรเจกต์หรือส่งให้ใคร ลบหลังใส่ Vercel แล้ว

## ข้อจำกัดที่ควรรู้
- ตาราง members (ชื่อจริง, พร้อมเพย์, รหัส LINE) ยังเปิดให้หน้าเว็บอ่านได้ เพราะหน้าเว็บปัจจุบันต้องใช้ ถ้าต้องการปิดด้วย ต้องรอเว็บใหม่ (Phase 3) ที่ดึงผ่านเซิร์ฟเวอร์
