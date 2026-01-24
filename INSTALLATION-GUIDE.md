# 📋 ขั้นตอนการติดตั้ง Settlement Slip Verification ผ่าน LINE

## ⚡ วิธีที่ง่ายที่สุด (แนะนำ)

### ขั้นที่ 1: แก้ไข webhook.js

เปิดไฟล์ `api/webhook.js` ด้วย Text Editor (VS Code, Notepad++)

#### 1.1 เพิ่ม Imports (บรรทัดที่ 7)

หลังบรรทัด:
```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
```

เพิ่มโค้ดนี้:
```javascript

// Import SlipOK helpers
import {
    verifySlipWithSlipOK,
    matchReceiverName,
    getSlipErrorMessage,
    createSlipSuccessMessage
} from './slipok-helpers.js';

import {
    getMemberByLineId as getMemberByLineIdHelper,
    getMemberByName as getMemberByNameHelper,
    findMatchingSettlement,
    checkDuplicateSlip,
    saveVerifiedSettlement,
    sendSlipVerifiedNotification
} from './firestore-helpers.js';
```

#### 1.2 แทนที่ handleImageMessage Function

ค้นหาบรรทัดนี้ (ประมาณบรรทัด 246-249):
```javascript
// --- HANDLER: Image Message (Gemini) ---
async function handleImageMessage(event) {
    return replyText(event.replyToken, "🤖 ระบบยังไม่รองรับการอ่านรูปภาพในเวอร์ชั่นนี้ครับ");
}
```

**ลบทั้งหมด** แล้วแทนที่ด้วยโค้ดจากไฟล์ `api/UPDATED-handleImageMessage.js` ทั้งหมด

---

### ขั้นที่ 2: ติดตั้ง form-data Package

เปิด PowerShell **แบบ Administrator** (คลิกขวา PowerShell → Run as Administrator)

รันคำสั่ง:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
cd "c:\Users\User\Documents\@WORK\GAME FILE\Dept"
npm install form-data
```

---

### ขั้นที่ 3: ตั้งค่า Environment Variables ใน Vercel

1. ไปที่ https://vercel.com/dashboard
2. เลือกโปรเจกต์ของคุณ
3. ไปที่ **Settings** → **Environment Variables**
4. เพิ่ม:
   - `SLIPOK_API_KEY` = `SLIPOK4D5KB1A`
   - `LINE_CHANNEL_ACCESS_TOKEN` = `<your_token_here>`

---

### ขั้นที่ 4: Deploy

```powershell
vercel --prod
```

---

## ✅ ตรวจสอบไฟล์ที่ต้องมี

ใน folder `api/` ต้องมีไฟล์เหล่านี้:
- [x] `webhook.js` (แก้ไขแล้ว)
- [x] `slipok-helpers.js` (สร้างใหม่แล้ว)
- [x] `firestore-helpers.js` (สร้างใหม่แล้ว)

---

## 🧪 การทดสอบ

1. เปิด LINE OA
2. ส่งรูปสลิปธนาคาร
3. ✅ ระบบต้องตอบ "🔍 กำลังตรวจสอบสลิป..."
4. รอสักครู่  
5. ✅ ถ้าสำเร็จจะแสดง Flex Message สีเขียว
6. ✅ ผู้รับจะได้รับ notification ทาง LINE

---

## ❌ ถ้าพบปัญหา

### "Cannot load scripts" (PowerShell)
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### "Module not found: slipok-helpers"
ตรวจสอบว่าไฟล์อยู่ใน folder `api/` และใช้ extension `.js`

### "SlipOK API Error 2001"
ตรวจสอบว่า Environment Variable `SLIPOK_API_KEY` ถูกต้อง

---

## 📝 หมายเหตุ

> **สำคัญ!** ทุกคนต้องตั้งค่า "ชื่อจริง" ในหน้า Settings ก่อนใช้งาน
> ไม่เช่นนั้นการตรวจสอบสลิปจะล้มเหลว

เสร็จแล้ว! 🎉
