# ⚠️ ต้องแก้ไข 2 จุดใน webhook.js

## จุดที่ 1: บรรทัด 278

### ❌ เดิม (ผิด):
```javascript
const userMember = await getMemberByLineId(db, userId);
```

### ✅ ใหม่ (ถูก):
```javascript
const userMember = await getMemberByLineIdHelper(db, userId);
```

---

## จุดที่ 2: บรรทัด 308

### ❌ เดิม (ผิด):
```javascript
const receiver = await getMemberByName(db, matchingSettlement.to);
```

### ✅ ใหม่ (ถูก):
```javascript
const receiver = await getMemberByNameHelper(db, matchingSettlement.to);
```

---

## วิธีแก้:

1. เปิด `api/webhook.js`
2. กด Ctrl+H (Find & Replace)
3. แก้ทีละจุด:

**การแก้ที่ 1:**
- Find: `getMemberByLineId(db`
- Replace: `getMemberByLineIdHelper(db`
- Replace All

**การแก้ที่ 2:**
- Find: `getMemberByName(db`
- Replace: `getMemberByNameHelper(db`
- Replace All

4. บันทึกไฟล์ (Ctrl+S)

---

เสร็จแล้วบอกผมได้เลยครับ แล้วจะ deploy ต่อ! 🚀
