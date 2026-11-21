# กฎ Firestore: เฉพาะสมาชิก + แยกตามสิทธิ์

ไฟล์นี้ไม่ถูกนำขึ้นเว็บ (`*.md` อยู่ใน `.vercelignore`)

## ประวัติ
1. **เดิม:** เปิดให้ "ใครก็ได้" อ่าน/เขียนข้อมูลกลุ่ม 4 ชุด (สมาชิก, บิล, ประวัติเคลียร์เงิน, บิลรายเดือนกลุ่ม)
2. **22 พ.ย. 2569 (ใช้งานแล้ว):** เฉพาะสมาชิกที่ถือบัตรผ่าน (เว็บล็อกอิน Firebase ด้วยบัตรที่เซิร์ฟเวอร์ออกหลังตรวจ LINE) + ปิดการสมัครเอง
3. **ถัดมา (ไฟล์ `firestore.rules` ปัจจุบัน):** แยกตามสิทธิ์ ให้ตรงกับที่หน้าเว็บทำอยู่

| ใคร | ทำได้ |
|---|---|
| สมาชิกทุกคน | อ่านข้อมูลกลุ่ม, เพิ่มบิล/บิลรายเดือน (เลือกคนจ่ายได้), แก้ชื่อจริง/พร้อมเพย์ของตัวเอง |
| คนจ่ายบิล | แก้ชื่อ/หมวดของบิลตัวเอง, ลบบิลตัวเอง, หยุดบิลรายเดือนของตัวเอง |
| ผู้ดูแล | ทุกอย่าง: เพิ่ม/แก้/ลบสมาชิก, ตั้งผู้ดูแล, ยืนยัน/ย้ายเดือน/ลบประวัติเคลียร์เงิน, แก้/ลบบิลของทุกคน, ลบข้อมูลทั้งเดือน |

- ผู้ดูแลดูจากเอกสารสมาชิกปัจจุบัน (`role: "admin"` หรือ LINE ของผู้ดูแลหลัก) ตั้ง/ถอดผู้ดูแลมีผลทันที
- แก้ยอดหรือคนหารของบิลจากเบราว์เซอร์ไม่ได้ (หน้าเว็บก็ไม่มีปุ่มนี้)
- ไม่กระทบ: บอท LINE, Widget, สคริปต์ iPhone, ตรวจสลิปเคลียร์เงิน, cron (ใช้กุญแจแอดมินของเซิร์ฟเวอร์ ข้ามกฎ)
- ทดสอบกับ Firestore emulator ของ Google แล้ว 18 กรณี: `tests/rules/firestore-rules.emulator.mjs` (วิธีรันอยู่หัวไฟล์)

## วิธีนำกฎขึ้น (เจ้าของทำ)
1. https://console.firebase.google.com → โปรเจกต์ **deptmoney-6682a** → เมนูซ้าย **Firestore** → แท็บ **Rules**
2. ลบข้อความเดิมทั้งหมด วางข้อความจากไฟล์ `firestore.rules` ใน repo (ทั้งไฟล์) → กด **Publish**
3. เปิดเว็บ ลอง: หน้าแรก, รายการ, เคลียร์เงิน, แก้ชื่อบิลของตัวเอง, เพิ่ม/ลบบิลทดสอบ, แท็บ ฉัน > จัดการสมาชิก (ผู้ดูแล)

## ย้อนกลับ
### ถอยกลับขั้นที่ 2 (เฉพาะสมาชิก ไม่แยกสิทธิ์) ใช้ถ้ากฎแยกสิทธิ์ทำให้ปุ่มไหนใช้ไม่ได้
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isMember() {
      return request.auth != null && request.auth.token.mid is string;
    }
    match /members/{id} {
      allow read, write: if isMember();
    }
    match /transactions/{id} {
      allow read, write: if isMember();
    }
    match /settlements/{id} {
      allow read, write: if isMember();
    }
    match /subscription_templates/{id} {
      allow read, write: if isMember();
    }
  }
}
```

### ฉุกเฉินสุด (เปิดเหมือนเดิม ใช้เฉพาะเมื่อล็อกอินพังทั้งเว็บ)
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
- บัตรผ่าน: uid `m_<รหัสสมาชิก>` claims `{ mid, member, admin }` (`lib/member-login.mjs`, ออกด้วย `mintFirebaseToken` ใน `api/auth-helpers.js`) กฎใช้ `mid` และ `member` · `admin` ในบัตรไม่ใช้ตัดสิทธิ์ (ใช้เอกสารสมาชิกแทน เพราะบัตรอาจค้างค่าเก่า)
- เว็บ (`web/src/data.js`): ทุกคำสั่ง Firestore รอ `fbGate` · เปิดเว็บด้วยรหัสเว็บ = ต่อบัตรที่ `GET /api/device-token?firebase=1`
- เพิ่มปุ่มใหม่ที่เขียน Firestore จากเบราว์เซอร์ ต้องแก้กฎและเพิ่มกรณีใน `tests/rules/firestore-rules.emulator.mjs` แล้วรันกับ emulator ก่อน push
