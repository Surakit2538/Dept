# 📋 รายงานสรุปสถานะการพัฒนาและการส่งต่องาน (Handover Notes)
**โปรเจกต์:** Dept Money (https://dept-game.vercel.app/)  
**วันที่บันทึก:** 12 พฤศจิกายน 2026  
**ผู้จัดทำ:** Antigravity AI  
**เป้าหมาย:** ส่งต่องานให้ Claude ทำการตรวจสอบความถูกต้องของระบบ และแก้ไขปัญหาส่วนการเชื่อมต่อ iOS Shortcuts + Scriptable ต่อเนื่องได้ทันที  

---

## 1. บริบทและเป้าหมายของงาน (Goal & Objective)

ผู้ใช้ต้องการพัฒนาระบบ **บันทึกรายจ่ายอัตโนมัติจากสลิปโอนเงินบน iPhone + แสดงผลเป็น Widget หน้าจอหลัก (Home Screen)** โดยต่อยอดจากเว็บเดิม (`Dept Money` ซึ่งเดิมเป็นระบบคำนวณและเคลียร์หนี้สินในกลุ่มเพื่อนผ่าน Firebase Firestore + Vercel):
1. **Trigger:** เมื่อปิดแอปธนาคาร (`K PLUS`, `SCB`, `ttb`, `UOB`, `Kept`, `Dime` ฯลฯ) บน iPhone ให้รันระบบอัตโนมัติ
2. **OCR & Parse:** อ่านรูปสลิปล่าสุดฟรีผ่าน Live Text ของ iOS เพื่อดึง ยอดเงิน, ร้านค้า/ผู้รับ, ธนาคาร, รหัสอ้างอิงสลิป
3. **Interactive Menu:** เด้งถามผู้ใช้ว่าจะ **"👤 บันทึกส่วนตัว"** หรือ **"👥 หารกับเพื่อน"**
   - ถ้าบันทึกส่วนตัว: บันทึกรายจ่ายลงระบบโดย **ต้องไม่กระทบยอดหนี้กลุ่ม**
   - ถ้าหารกับเพื่อน: ดึงรายชื่อสมาชิกในกลุ่มมาให้เลือก แล้วคำนวณหารเท่า พร้อมแจ้งเตือนเข้า LINE กลุ่ม
4. **Widget:** แสดงยอดใช้วันนี้, ยอดใช้เดือนนี้, รายการล่าสุด บนหน้าจอ Home Screen ผ่านแอป **Scriptable**

---

## 2. สิ่งที่ได้ทำไปแล้ว (What Has Been Done)

### 2.1 ด้านความปลอดภัยและความเข้ากันได้กับระบบเดิม (Integrity & Safety)
* **ไม่มีการแก้ไขหรือแตะต้องไฟล์เดิมของระบบเลย** (ไฟล์เดิมอย่าง `index.html`, `admin.html`, `api/webhook.js`, `api/verify-settlement-slip.js`, `api/send-line.js` ยังคงเหมือนเดิม 100%)
* โค้ดทั้งหมดที่เพิ่มเข้ามาถูกสร้างเป็นไฟล์ใหม่แบบแยกส่วน (Modular) 

### 2.2 ไฟล์ Backend API ใหม่บน Vercel (ทดสอบแล้ว ใช้งานได้จริงบน Production)
ทุกไฟล์ถูก deploy ขึ้น `https://dept-game.vercel.app` เรียบร้อยแล้ว:

1. **`api/get-members.js`**
   - ดึงรายชื่อสมาชิกทั้งหมดจาก Firestore คอลเลกชัน `members`
   - *สถานะ:* ✅ ทดสอบแล้วผ่าน `GET https://dept-game.vercel.app/api/get-members` คืนค่าสมาชิก 15 คนถูกต้อง
2. **`api/shortcut-transaction.js`**
   - รับ `POST` บันทึกรายการลงคอลเลกชัน `transactions`
   - มีระบบตรวจ `transRef` ป้องกันการบันทึกสลิปเดิมซ้ำ
   - ถ้าเป็น `splitType: 'personal'` จะสร้าง `splits: { [payer]: amount }` ซึ่งในสูตรคำนวณของระบบเดิม ค่าสุทธิหนี้สินจะเท่ากับ 0 ทำให้ไม่กระทบยอดหนี้ของเพื่อน
   - ถ้าเป็น `splitType: 'equal'` จะกระจายยอดให้สมาชิกใน `splitWith` และส่งข้อความแจ้งเตือนเข้า LINE กลุ่มอัตโนมัติ
3. **`api/widget-summary.js`**
   - รับ `GET ?user=NAME` สรุปยอด `todayExpense`, `monthExpense`, `lastTransaction`, และสถานะหนี้สินกลุ่ม
   - *สถานะ:* ✅ ทดสอบแล้วผ่าน `GET https://dept-game.vercel.app/api/widget-summary?user=AOY` คำนวณถูกต้อง

### 2.3 ไฟล์สำหรับฝั่ง iOS
1. **`DeptWidget.js`**: สคริปต์ Scriptable สำหรับแสดงผล Widget สไตล์ Dark Mode มี Offline Cache ผ่าน `FileManager`
2. **`DeptSlipApp.js`**: สคริปต์ Scriptable สำหรับทำหน้าที่เป็นสมองกล (Regex, Menu, Prompt, API Call, Notification)
3. **`SHORTCUT_GUIDE.md`**: เอกสารขั้นตอนการติดตั้งคำสั่งลัดบน iPhone

---

## 3. ปัญหาที่พบในปัจจุบัน (Current Issues & Error Trace)

เมื่อผู้ใช้ทดสอบกดรัน Shortcut บน iPhone (iOS ภาษาไทย):

### ปัญหาที่ 1: `ReferenceError: Can't find variable: getLocalLastRef on line 52:36` (แก้ไขแล้ว)
* **สาเหตุ:** ฟังก์ชันตัวช่วยอยู่ในตำแหน่งล่างสุดของสคริปต์ ใน JavaScriptCore ของ iOS การรันแบบ async top-level ทำให้ฟังก์ชันด้านล่างไม่ถูก hoist
* **การแก้ไข:** ย้ายฟังก์ชันทั้งหมดขึ้นมาบนสุด และเปลี่ยนมาใช้ `Keychain` แทน

### ปัญหาที่ 2: `ติดปัญหาที่ line 294` (ปัญหาปัจจุบันที่ผู้ใช้พบ)
* **รายละเอียด:**
  - บรรทัดที่ 294 ใน `DeptSlipApp.js` เดิมคือ:
    ```javascript
    if (isNaN(amount) || amount <= 0) {
        const err = new Alert();
        err.title = "ยอดเงินไม่ถูกต้อง";
        await err.presentAlert(); // <-- ไม่มีการใส่ addAction()
        return;
    }
    ```
  - ใน Scriptable หากเรียก `Alert.presentAlert()` โดยไม่มีการใส่ `.addAction("...")` ตัว Scriptable/UIKit จะ throw Exception ทันที
  - **จุดที่ต้องวิเคราะห์ต่อเชิงลึก:**
    ทำไมโค้ดถึงวิ่งเข้าไปที่ฟังก์ชัน `handleQuickAdd()` (จดสด) แทนที่จะเป็น `handleScanFromText()`?
    - เมื่อผู้ใช้กดรัน Shortcut: ตัว Shortcut ดึงรูปภาพล่าสุด -> แยกข้อความ (OCR) -> ส่งเข้า Scriptable ผ่าน `args.shortcutParameter`
    - หากรูปภาพล่าสุดในอัลบั้มของผู้ใช้ **ไม่ใช่สลิปโอนเงิน** หรือ **OCR อ่านข้อความไม่ได้เป็นสตริง** หรือ `args.shortcutParameter` ส่งมาเป็น `Array` / `null`
    - เงื่อนไข `if (inputFromShortcut && typeof inputFromShortcut === 'string')` จะเป็นเท็จ และตกลงไปที่ `showMainMenu()` (ซึ่งผู้ใช้กดปุ่ม "จดสด" แล้วไม่ได้กรอกตัวเลข หรือตัวแปรไม่เข้าตามที่คาดไว้)

---

## 4. ข้อสังเกตและคำแนะนำเชิงสถาปัตยกรรมสำหรับ Claude (Recommendations)

เพื่อให้ Claude แก้ไขปัญหานี้ได้อย่างรวดเร็วและตรงจุด มีข้อสังเกตและแนวทางแนะนำดังนี้:

### ทางเลือกที่ A (แนะนำ): ย้าย Interactive Dialog ไปไว้ใน Apple Shortcuts โดยตรง
ปัจจุบัน เราส่ง raw OCR text เข้า Scriptable เพื่อให้ Scriptable เปิด `new Alert()` เด้งถาม แต่บน iOS:
* การเปิด UI ของ Scriptable ขณะที่ Shortcut ทำงานอยู่เบื้องหลัง บางครั้งติดเรื่อง Permissions หรือเบื้องหลัง Background Timeout
* **วิธีที่เสถียรกว่ามาก:**
  1. ให้ **Apple Shortcuts เป็นตัวถามเมนูเองโดยตรง** ด้วยคำสั่ง `เลือกจากเมนู (Choose from Menu)`:
     - `1. บันทึกส่วนตัว`
     - `2. หารกับเพื่อน`
  2. ให้ Shortcuts ยิง `POST` เข้า `https://dept-game.vercel.app/api/shortcut-transaction` โดยตรงผ่านคำสั่ง `รับเนื้อหาของ URL (Get Contents of URL)`
  3. **Scriptable มีหน้าที่เดียวคือ รัน Widget (`DeptWidget.js`)** บนหน้าจอ Home Screen เท่านั้น!
  *ข้อดี:* ไม่ต้องพึ่งพา Scriptable ในการเปิด Alert ให้เกิดปัญหา JavaScriptCore อีกต่อไป และ Shortcuts ทำงานแบบ Native 100% เร็วกว่าและไม่เด้ง Error

### ทางเลือกที่ B: หากยังใช้ Scriptable ในการประมวลผล
* ต้องตรวจสอบ format ของ `args.shortcutParameter` ให้รัดกุม รองรับทั้ง `string`, `Array<string>`, และกรณีรูปภาพล่าสุดไม่มีข้อความ
* ต้องใส่ `.addAction("ตกลง")` ให้กับทุก `Alert` เสมอ (ใน commit ล่าสุด `7215513` ได้ใส่เพิ่มไปแล้ว)
* ตรวจสอบว่าใน Scriptable มีการตั้งค่า `Runs in App` หรือต้องเปิดแอปขึ้นมาแสดง Alert หรือไม่

---

## 5. Git & Deployment Reference

* **Repository:** `https://github.com/Surakit2538/Dept.git`
* **Branch:** `main`
* **Live Production:** `https://dept-game.vercel.app`
* **Commit ประวัติการทำงาน:**
  - `c18db67`: เพิ่ม 3 API และไฟล์ Scriptable / Guide
  - `7908ec9`: ปรับตำแหน่งฟังก์ชันแคชกันสลิปซ้ำขึ้นด้านบน
  - `7215513`: เพิ่มปุ่ม Action ให้กับ Alert ทุกตัว และปรับปรุงการแปลง input จาก Shortcut
