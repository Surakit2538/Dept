// ไฟล์: api/notify.js
export default async function handler(req, res) {
  // ตรวจสอบว่ามีกุญแจหรือยัง
  if (!process.env.LINE_ACCESS_TOKEN || !process.env.LINE_USER_ID) {
    return res.status(500).json({ error: 'Missing LINE configuration' });
  }

  // ข้อความที่จะส่ง (สมมติว่าเป็นสรุปยอด)
  // ในอนาคตคุณสามารถส่งค่ามาจาก HTML ผ่าน req.body ได้
  const message = "📊 สรุปรายจ่ายเดือนนี้\n------------------\nค่าอาหาร: 5,000 บ.\nค่าเดินทาง: 2,000 บ.\nรวม: 7,000 บาท\n\n(แจ้งเตือนจาก Vercel)";

  try {
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to: process.env.LINE_USER_ID,
        messages: [{ type: 'text', text: message }],
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'ส่งไลน์สำเร็จ!' });
    } else {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}