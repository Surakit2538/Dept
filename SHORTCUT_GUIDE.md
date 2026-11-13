# 📱 คำสั่งลัดสแกนสลิป (เวอร์ชัน A+)

> **สำหรับผู้ใช้:** คู่มือสร้างคำสั่งลัดทีละขั้นอยู่ที่ **https://dept-game.vercel.app/shortcut-guide.html**
> (เปิดจากปุ่ม "เปิดคู่มือสร้างคำสั่งลัดสแกนสลิป" ในหน้า "📱 ตั้งค่า iPhone" บนเว็บ) ไฟล์นี้สำหรับผู้พัฒนา

## ภาพรวมการทำงาน

**วิธีหลัก: Live Text ของ iPhone** Shortcut 3 คำสั่ง (Find Photos 1 รูปล่าสุด → Extract Text from Image → Run Script `DeptSlip` ส่งข้อความที่ช่อง Parameter, เปิด Run In App) เพิ่มลงหน้าจอโฮมด้วย Share → เพิ่มไปยังหน้าจอโฮม (ห้ามใช้ปุ่ม Add to Home Screen ของ Scriptable เพราะบน iOS รุ่นใหม่เปิด `data:` URL ใน Safari ไม่ได้) รูปสลิปไม่ออกจากเครื่อง

```
[แตะไอคอน] → Shortcut: รูปล่าสุด → Live Text → Run Script DeptSlip (text)
   → POST /api/shortcut-transaction {action:"parse", text}   → server แกะด้วย regex (lib/slip-core.mjs) → message + เก็บ "รายการรอบันทึก"
   → เมนู: 👤 ส่วนตัว / 👥 หารกับเพื่อน / 🔍 ดูข้อความที่อ่านได้ / ❌ ปิด
        ส่วนตัว  → POST {action:"save", splitType:"personal"}
        หาร      → GET /api/get-members?include_self=1 → เลือกหลายคน
                   → POST {action:"save", splitType:"equal", splitWith:"<ชื่อ ขึ้นบรรทัดใหม่>"}
```

**ทางเลือกอ่านรูปด้วย AI (ปิดอยู่):** `USE_AI_IMAGE = true` ใน `scriptable/DeptSlip.js` ทำให้ส่งรูปล่าสุดไปให้ Gemini อ่านผ่าน `{action:"parse", imageBase64}` (โค้ดฝั่ง server ยังอยู่ครบ ใช้ `GEMINI_API_KEY`) ค่าเริ่มต้นปิด เพื่อความเป็นส่วนตัวและไม่มีค่าใช้จ่าย

ทางเลือกให้เด้งอัตโนมัติเมื่อปิดแอปธนาคาร: เพิ่มตัวกรอง "วันที่สร้าง อยู่ใน 5 นาที" และคำสั่ง If ในคำสั่งลัดเดิม (ดู `shortcut-guide.html`) หรือแบบละเอียดที่เรียก API เองทั้งหมด

`DeptInstaller` (สร้างจากหน้าเว็บ `iphone-setup.js`) ติดตั้ง `DeptWidget.js`, `DeptSlip.js` และ `DeptAuto.js` จาก `/scriptable/` พร้อมกัน โดยโหลดและตรวจความครบ (`SCRIPT_VERSION` + `Script.complete();`) ของทั้งสองไฟล์ก่อนเขียนไฟล์ใดๆ ลงเครื่อง รหัสอยู่ใน Keychain (`dept_token`)

## API

ทุก endpoint ต้องมี `Authorization: Bearer <รหัสอุปกรณ์>` (ออกจากหน้าเว็บ "ตั้งค่า iPhone" → `/api/device-token`) ผู้จ่ายคือเจ้าของรหัสเสมอ ไม่รับ `payer` จาก body

| Endpoint | หน้าที่ |
|---|---|
| `POST /api/shortcut-transaction` | `action=parse` / `action=save` (ดูด้านล่าง) |
| `GET /api/get-members` | รายชื่อเพื่อน (ไม่รวมตัวเอง) · `?include_self=1` ใส่ `⭐ ชื่อ (ฉัน)` ไว้บนสุด |
| `GET /api/widget-summary` | ข้อมูล Widget (รวม `personal_expenses`) |
| `/api/device-token` | ออก/ตรวจ/ยกเลิกรหัส (ยืนยันด้วย LINE ID Token) |

ทุกคำตอบเป็น JSON ที่มี `success`, `status`, `message` เสมอ (Shortcut แสดง `message` ตรงๆ)

### `action: "parse"` — body `{ text }` (หลัก: ข้อความจาก Live Text, แกะด้วย regex) หรือ `{ imageBase64, mimeType }` (ทางเลือก, อ่านด้วย Gemini ผ่าน `lib/gemini-slip.mjs`, ต้องมี `GEMINI_API_KEY`)
`status`: `ok` (เก็บ `pending_slips/<memberId>` อายุ 30 นาที) · `no_amount` · `duplicate` · `ocr_failed` · `too_large` — กรณีไม่ใช่ `ok` จะล้างรายการรอบันทึกเก่าด้วย เพื่อไม่ให้กด "บันทึก" แล้วได้สลิปเก่า

### `action: "auto"` — body `{ text }` (บันทึกอัตโนมัติ ไม่ถามอะไร)
แกะสลิปแล้วบันทึกเป็น **ส่วนตัว** ทันที (parse + save personal ในครั้งเดียว) ใช้กับ `scriptable/DeptAuto.js` ที่คำสั่งลัด "สลิปอัตโนมัติ" เรียกเมื่อปิดแอปธนาคาร (Run In App ปิด) แล้วส่ง `message` กลับผ่าน `Script.setShortcutOutput` ให้คำสั่งลัดแสดงเป็นแจ้งเตือน ถ้าไม่พบยอด/ซ้ำจะไม่บันทึกและบอกสาเหตุ (ไม่มีข้อความ "(กด ❌ ปิด เพื่อออก)")

### สถานะ `convert` (เปลี่ยนส่วนตัวเป็นหาร)
ถ้า `parse` เจอสลิปที่ **เจ้าของรหัสเดียวกัน** บันทึกเป็นส่วนตัวไว้แล้ว (`personal_expenses`) จะคืน `status: "convert"` และเก็บ `pending_slips` พร้อม `convertFrom` (id รายการส่วนตัวเดิม) และ `date` เดิม `DeptSlip` แสดงเมนูเฉพาะ "เปลี่ยนเป็นหารกับเพื่อน" เมื่อ `save` แบบ `equal` จะเพิ่มรายการใน `transactions` ด้วยวันที่เดิม แล้วลบรายการส่วนตัวเดิม (เลือก `personal` = ไม่เปลี่ยนอะไร) สลิปที่อยู่ใน `transactions` แล้วยังเป็น `duplicate` ปกติ `auto` เจอ `convert` จะตอบ `duplicate` พร้อมบอกให้ใช้ไอคอนสแกนสลิปเพื่อหาร

### `action: "save"` — body `{ splitType, splitWith?, desc? }`
- `splitType: "personal"` → เก็บใน **`personal_expenses`** (ไม่มี `splits`, ไม่โผล่ในหน้ากลุ่ม/สรุป LINE, ไม่กระทบยอดหนี้)
- `splitType: "equal"` → เก็บใน **`transactions`** หารเท่าตาม `splitWith` (ขึ้นบรรทัดใหม่คั่นชื่อ หรือเป็น array)
  - `splitWith` **มีชื่อตัวเอง** → หารรวมตัวเอง (`splitMode: "equal"`)
  - `splitWith` **ไม่มีชื่อตัวเอง** → จ่ายแทน ไม่มีส่วนของผู้จ่าย (`splitMode: "treat"`)
  - ต้องมีเพื่อนอย่างน้อย 1 คน · ชื่อต้องมีใน `members` · เก็บชื่อเป็นตัวพิมพ์ใหญ่ตามที่เว็บใช้
  - แจ้ง LINE กลุ่มผ่าน `LINE_CHANNEL_ACCESS_TOKEN` + `LINE_GROUP_ID` (ไม่ตั้ง = ข้าม)

### กันบันทึกซ้ำ
1. มี `transRef` (เลขอ้างอิงจากสลิป) → ซ้ำถ้ามีในทั้ง `transactions` และ `personal_expenses`
2. ไม่มีเลขอ้างอิง → ใช้ `dedupKey` = hash(ยอด|ผู้รับ|วันที่ในสลิป|เวลาในสลิป)
   - มีทั้งวันที่และเวลาในสลิป (strong) → ซ้ำตลอดไป
   - ไม่มีวัน/เวลา (weak) → ซ้ำเฉพาะภายใน 10 นาที (กันบิลซ้ำจากการเปิด–ปิดแอปซ้ำ แต่ไม่บล็อกการซื้อของเดิมคนละวัน)

## โครงสร้างโค้ด

- `api/shortcut-transaction.js` — แค่เชื่อมต่อ (`maxDuration` 30 วินาทีตั้งใน `vercel.json` เผื่อรอ AI) (เพื่อไม่ให้จำนวนไฟล์ใน `api/` เกิน 12 ซึ่งเป็นเพดาน Serverless Function ของ Vercel Hobby)
- `lib/slip-core.mjs` — parser (regex) ตัวสร้างผลลัพธ์/dedupKey และฟังก์ชันหาร (ไม่แตะ DB)
- `lib/gemini-slip.mjs` — อ่านรูปสลิปด้วย Gemini (ลองโมเดลตามลำดับ, คีย์ส่งผ่าน header ไม่ใส่ใน URL)
- `lib/shortcut-service.mjs` — logic ทั้งหมด รับ DB เป็นพารามิเตอร์
- `tests/` — ทดสอบด้วย `npm test` (ฐานข้อมูลจำลองใน `tests/fake-firestore.mjs`)

> โค้ดช่วยอยู่ใน `lib/` (นามสกุล `.mjs`) ไม่ใช่ใน `api/` เพราะทุกไฟล์ใน `api/` ถูกนับเป็น function และตอนนี้มีครบ 12 ไฟล์แล้ว ห้ามเพิ่มไฟล์ใหม่ใน `api/` โดยไม่เช็คแผน Vercel ก่อน

## ปรับปรุง parser เมื่อเจอสลิปจริงที่อ่านผิด

1. คัดลอกข้อความ OCR ที่ Shortcut แสดง (ลบชื่อ/เลขบัญชีออก)
2. เพิ่มเป็นเคสใน `tests/slip-core.test.mjs` ให้เห็นผลที่ผิดก่อน
3. แก้ `lib/slip-core.mjs` จนผ่าน → `npm test` → deploy

เคสตัวอย่างในไฟล์ทดสอบตอนนี้เป็นข้อความ **จำลอง** ตามรูปแบบสลิปทั่วไป ยังไม่ผ่านการทดสอบกับสลิปจริงของทุกธนาคาร
