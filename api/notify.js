// api/notify.js
export default async function handler(req, res) {
  // 1. ใส่ LINE Notify Token ของคุณตรงนี้
  const LINE_TOKEN = "ใส่_TOKEN_ยาวๆ_จาก_LINE_ที่นี่"; 

  // ข้อมูลที่จะส่ง (ตัวอย่าง)
  const message = "\n📢 แจ้งเตือน: มีการบันทึกรายการใหม่ใน Dept Money";

  try {
    const response = await fetch("https://notify-api.line.me/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${LINE_TOKEN}`,
      },
      body: new URLSearchParams({
        message: message,
      }),
    });

    const data = await response.json();

    if (data.status === 200) {
      return res.status(200).json({ success: true, message: "Sent to LINE!" });
    } else {
      return res.status(500).json({ success: false, error: data });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
