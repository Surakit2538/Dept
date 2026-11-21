# ปิดฐานข้อมูลให้เฉพาะสมาชิก (บัตรผ่าน Firebase)

ไฟล์นี้ไม่ถูกนำขึ้นเว็บ (`*.md` อยู่ใน `.vercelignore`)

## ทำไม
เดิมกฎ Firestore เปิดให้ "ใครก็ได้" อ่าน/เขียนข้อมูลกลุ่ม 4 ชุด (สมาชิก, บิล, ประวัติเคลียร์เงิน, บิลรายเดือนกลุ่ม) โดยไม่ต้องล็อกอิน
ตอนนี้เว็บล็อกอินเข้า Firebase ด้วย "บัตรผ่าน" ที่เซิร์ฟเวอร์ออกให้หลังตรวจกับ LINE ว่าเป็นสมาชิก (`lib/member-login.mjs`, `api/device-token.js`)
และปิดการสมัครเอง: คนใหม่ต้องให้ผู้ดูแลเพิ่มชื่อก่อน (แท็บ ฉัน > จัดการสมาชิก) แล้วค่อยผูก LINE กับชื่อนั้น

ไม่กระทบ: บอท LINE, Widget, สคริปต์ iPhone, cron (ใช้กุญแจแอดมินของเซิร์ฟเวอร์ ข้ามกฎนี้)

## ขั้นที่ 1 (ทำหลัง push ทันที): เปิดระบบล็อกอินของ Firebase
1. เข้า https://console.firebase.google.com → เลือกโปรเจกต์ **deptmoney-6682a**
2. เมนูซ้าย **Build → Authentication** → กด **Get started**
3. ไม่ต้องเปิดวิธีล็อกอินใดๆ (บัตรผ่านแบบ custom token ใช้ได้เลย) ฟรี

## ขั้นที่ 2 (1-2 วันถัดมา): เช็กว่าบัตรผ่านทำงาน
1. เปิดเว็บ Dept Money ตามปกติ (ทั้งใน LINE และบนคอม)
2. Firebase Console → **Authentication → Users** ต้องเห็นรายการ uid ขึ้นต้นด้วย `m_` (1 รายการต่อสมาชิกที่เปิดเว็บแล้ว)
3. ถ้าไม่เห็นเลยหลังเปิดเว็บแล้ว อย่าเพิ่งทำขั้นที่ 3 ส่งภาพหน้าจอให้ Claude ดู

## ขั้นที่ 3: ปิดฐานข้อมูล
1. Firebase Console → **Build → Firestore Database → แท็บ Rules**
2. ลบข้อความเดิมทั้งหมด วางข้อความจากไฟล์ `firestore.rules` ใน repo (ทั้งไฟล์)
3. กด **Publish**
4. เปิดเว็บ ลองดูหน้าแรก รายการ เคลียร์เงิน และลองเพิ่ม/ลบบิลทดสอบ 1 รายการ

## ย้อนกลับฉุกเฉิน (ถ้าหลังขั้นที่ 3 เว็บใช้ไม่ได้)
Firestore Database → Rules → วางข้อความนี้แทน แล้วกด **Publish** (มีผลภายใน 1 นาที):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /members/{id} {
      allow read, write: if true;
    }
    match /transactions/{id} {
      allow read, write: if true;
    }
    match /settlements/{id} {
      allow read, write: if true;
    }
    match /subscription_templates/{id} {
      allow read, write: if true;
    }
  }
}
```

## หมายเหตุสำหรับ Claude
- บัตรผ่าน: uid `m_<รหัสสมาชิก>` claims `{ mid, member, admin }` ออกด้วย `mintFirebaseToken` (`api/auth-helpers.js`, ต้องมี `FIREBASE_SERVICE_ACCOUNT`)
- เว็บ (`web/src/data.js`): ทุกคำสั่ง Firestore รอ "ประตู" (`fbGate`) เปิดเมื่อ ล็อกอิน Firebase สำเร็จ / ไม่มีบัตร / เกิน 10 วินาที · เปิดเว็บด้วยรหัสเว็บ = ต่อบัตรที่ `GET /api/device-token?firebase=1`
- ขั้นถัดไปที่ทำได้ (ยังไม่ทำ): กฎตามสิทธิ์ เช่น บิลแก้/ลบได้เฉพาะคนจ่ายหรือผู้ดูแล, ตั้งผู้ดูแล/ลบสมาชิก/ลบประวัติเคลียร์เงินเฉพาะผู้ดูแล (ใช้ `request.auth.token.admin`, `request.auth.token.member`)
