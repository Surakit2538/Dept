# Dept Money: คู่มือสำหรับ Claude (อ่านก่อนทำงานทุกครั้ง)

อัปเดต 18 พ.ย. 2569 · เว็บ https://dept-game.vercel.app · repo `Surakit2538/Dept` (`main`, push แล้ว Vercel deploy เอง) · รายละเอียดเต็มใน `HANDOVER_NOTES.md` (อ่านเมื่อต้องการ ไม่ต้องอ่านทั้งไฟล์)

## 1. โปรเจกต์
แอปเคลียร์หนี้และรายจ่ายของกลุ่มเพื่อน (ไม่เกิน 20 คน) ล็อกอิน LINE (LIFF `2008948704-db2goT00`), Firestore, Vercel Hobby, บอท LINE, สคริปต์ iPhone (Scriptable + Shortcuts) เว็บเดียวที่ `/` (ไฟล์จริง `/app/`)

## 2. เจ้าของ (สำคัญ)
- ไม่ใช่สายเทคนิค **ตอบไทยทั้งหมด** สั้น ระบุชื่อปุ่มจริง บอกตรงๆ ว่ายังไม่ได้ลองอะไร
- ทดสอบบน iPhone/LINE/Chrome จริงแล้วส่งภาพหน้าจอ อ่านภาพละเอียด · ไม่ชอบ: ข้อมูลแน่น, หลายขั้นตอน, **emoji**, ของบนเครื่องเยอะจนงง (ชอบติดตั้งด้วย installer ตัวเดียว)
- พิมพ์ "สอบถามก่อน/อย่าเพิ่งแก้" = เสนอทางเลือกก่อน ลงมือเมื่อเขาบอก "ทำเลย"
- **push:** ถามทุกครั้ง (หรือเขาบอก "push เลย/commit push ได้เลย" เป็นรายครั้ง) commit ลงท้าย `Co-Authored-By:` ตามที่ระบบสั่ง
- จบงานสรุปไทย: ทำอะไร, เทสต์ผ่านเท่าไร, ยังไม่ได้ลองอะไร, ให้เขาทำอะไรต่อ

## 3. ข้อจำกัดแข็ง
1. **Vercel Hobby 12 functions ครบแล้ว** ห้ามเพิ่มไฟล์ใน `api/` ใช้ `action` ใน `lib/shortcut-service.mjs` · cron มี 2 งาน (วันที่ 1 บิลรายเดือน+ล้างข้อมูลเก่า, วันที่ 25 เตือนหนี้)
2. `lib/*.mjs` ห้าม import npm (ชั้นฐานข้อมูลอยู่ `api/auth-helpers.js`)
3. ไฟล์รากเปิดสาธารณะ ห้ามใส่ความลับ (`*.md` อยู่ใน `.vercelignore` แล้ว)
4. Firestore ฟรี 50,000 อ่าน/วัน อย่าอ่านทั้งคอลเลกชัน
5. ฟรีทั้งหมด ห้ามเสนอของเสียเงินโดยไม่บอก · ห้าม emoji · สีจาก `design/tokens.json` เท่านั้น

## 4. คำสั่ง
```bash
npm test                          # ราก ต้องผ่านก่อน commit (ตอนนี้ 273 เคส) ไฟล์เทสต์ใหม่ต้องเพิ่มชื่อใน package.json
cd web && npm run build && cd ..  # แก้ web/ แล้วต้อง build และ commit app/ ด้วย
```
พรีวิว: `preview_start` ชื่อ `dept-web-preview` → `http://localhost:5199/app/preview.html#wallet` (ข้อมูลจำลอง) `?form=bill|expense`, `?choose=1` · มือถือ `resize_window mobile` แล้วคืน desktop · เจ้าของอาจล็อกอินเว็บจริงในแท็บไว้ให้ทดสอบ (ใช้รายการทดสอบแล้วลบทิ้ง ห้ามสร้างบิลหารจริง) · Vercel project `prj_Fpp9zYAIxBLFBfBgpr8N87W932xt` team `team_PafVGKnzY7uArq1JGveKUosB`

## 5. กับดัก
- แก้ไฟล์: bash heredoc ยาวๆ มักแยกคำสั่งพัง และ backslash คู่ถูกลดเหลือตัวเดียว → ใช้ Write/Edit หรือเขียนสคริปต์ Node ลงไฟล์ (regex ใช้ literal/`.source`/`String.raw`) แล้ว `node --check` + เทสต์ · ไฟล์ผสม LF/CRLF รักษาแบบเดิม
- `Lazy` ใน `web/src/ui.jsx` ต้องเช็กชื่อคอมโพเนนต์ · แกนคำนวณเงินอยู่ `lib/ledger.mjs` ที่เดียว
- `buildWalletModel` (model.js) เลือกฟิลด์ส่งต่อเอง เพิ่มฟิลด์ใหม่ในกระเป๋าต้องเพิ่มที่นี่ด้วย (เคยทำป้ายยังไม่ยืนยันหาย)
- สคริปต์ `scriptable/*.js` แก้แล้วขยับ `SCRIPT_VERSION` · DeptAuto ต้องตรงกับ `LATEST_AUTO_VERSION` ใน `lib/shortcut-service.mjs` (เครื่องรุ่นเก่าจะเด้งเตือนให้รัน DeptInstaller เอง)
- ลิงก์ที่ส่งใน LINE/แจ้งเตือนใช้ LIFF `https://liff.line.me/2008948704-db2goT00#...` (ล็อกอินเงียบ)
- ล็อกอินเว็บ: หลังล็อกอิน LINE เว็บขอ "รหัสเว็บ" (`device_tokens` `kind:"web"` 30 วัน, localStorage `dm:v2:webtoken`) `api()` ส่ง Bearer ทันที · รหัส iPhone กับรหัสเว็บไม่ยกเลิกกัน · functions อยู่ `sin1` (Firestore อยู่เอเชีย) ห้ามเอาออก
- ล้างข้อมูลเก่า (`lib/cleanup.mjs`) ลบถาวร เก็บ 12 เดือน เดือนที่ยังมีหนี้ค้างไม่ลบ (`CLEANUP_DRY_RUN=1` นับดูเฉยๆ)

## 6. ระบบ iPhone ปัจจุบัน (DeptAuto 2.1.0)
- Scriptable 3 ตัว: DeptInstaller, DeptWidget, DeptAuto · เครื่องเจ้าของ: คำสั่งลัด "สลิปอัตโนมัติ" (รูปล่าสุด→Live Text→DeptAuto) เรียกตอนปิดแอปธนาคาร และ "AutoSMS" (ข้อความมี THB→DeptAuto) · คู่มือ `shortcut-guide.html` สอนแบบคำสั่งลัดเดียว "Dept บันทึก" (ไว้แชร์เพื่อน)
- เซิร์ฟเวอร์ action `auto`: แจ้งเตือนบัตร (`lib/card-alert.mjs`: KTC, CardX, ttb, SCB Connect) ก่อน ไม่ใช่ค่อยอ่านเป็นสลิป · บันทึกเป็นส่วนตัว `unconfirmed:true` กันซ้ำ จับคู่รายเดือน · สลิปจ่ายบิลบัตรข้าม · สลิปโอนให้เพื่อน (`paid_back`) ไม่บันทึก เก็บ pending 30 นาที
- DeptAuto เด้งแจ้งเตือนเอง: แตะ = เว็บ `#choose=<id>` (`ChooseSheet` ใน `web/src/editbill.jsx`: แก้ชื่อ/หมวด, ส่วนตัว, หารกับเพื่อนเท่ากันในหน้าเดียว, "ตั้งค่าเพิ่มเติม" เปิดฟอร์มเต็ม) · กดค้าง = ปุ่ม ส่วนตัว (`scriptable:///run/DeptAuto?confirm=<id>`) / หาร (`#split=<id>`) · โอนให้เพื่อน = ปุ่ม เคลียร์หนี้ (`#clear`) / บันทึกเป็นรายจ่าย (`?save=personal`)
- action อื่นที่เพิ่ม: `wallet-confirm`, `wallet-get`, `wallet-delete-many`, `wallet-update` (`confirm:true`) · บอท LINE: "กาแฟ 65" บันทึกส่วนตัว, "ลบรายการล่าสุด" ภายใน 15 นาที

## 7. รอเจ้าของทดสอบ
- iPhone: แจ้งเตือนสลิป/SMS จริง (2.1.0), ปุ่มที่เปิด Scriptable, ลิงก์ผ่านแอป LINE, ปุ่มสลิปโอนให้เพื่อน, บันทึกบิลหารจากหน้าบันทึกแบบไหน
- LINE: "กาแฟ 65" / "ลบรายการล่าสุด" · คอม: เปิดใหม่ไม่ต้องล็อกอิน LINE (30 วัน)
- 25 พ.ย. เตือนหนี้ · 1 ธ.ค. บิลรายเดือน + ล้างข้อมูลเก่ารอบแรก

## 8. ยังไม่ได้ทำ / หนี้
- อีเมลธนาคาร (ttb, SCB, UOB, KBank) ต้องได้ตัวอย่างจริงก่อนเพิ่มรูปแบบใน `lib/card-alert.mjs`
- แชร์ลิงก์ iCloud ของคำสั่งลัด "Dept บันทึก" ให้เพื่อน (เจ้าของต้องสร้างแล้วส่งลิงก์มา ใส่ในคู่มือ)
- ความแม่นยำอ่านสลิป (`lib/slip-core.mjs`) เจอผิดให้ขอข้อความจริงมาเป็นเทสต์
- เทสต์กฎลบสมาชิกของเว็บใหม่ (`deleteMemberIfUnused`) ยังไม่มี
- ความปลอดภัย: กฎ Firestore เปิดให้เบราว์เซอร์เขียน 4 คอลเลกชัน (ระยะยาวย้ายเข้า API) · เจ้าของเลือกไม่ทำ: สำรองข้อมูล, เปลี่ยนรหัส SlipOK, ลบ `dbMode`

## 9. แผนที่ไฟล์
`web/src/` (Preact): `main.jsx` แอป+ลิงก์ deep, `data.js` ฐานข้อมูล/API/ล็อกอิน, `model.js` ตรรกะ, `pages/*`, `add.jsx` ฟอร์ม, `editbill.jsx` แก้ไข+ChooseSheet, `bulk.jsx` เลือกหลายรายการ, `iphone.jsx` ตัวติดตั้ง · `app/` ผล build · `lib/` ตรรกะเซิร์ฟเวอร์ · `api/` 12 ฟังก์ชัน · `scriptable/` · `tests/` (`fake-firestore.mjs`)
