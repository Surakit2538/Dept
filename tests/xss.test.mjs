// ทดสอบการกันช่องโหว่ XSS: ข้อความจากผู้ใช้/สลิปต้องถูก escape ก่อนใส่ลง HTML
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8").replace(/\r\n/g, "\n");
const admin = read("admin-app.js");
const index = read("index.html");

function helpersFrom(src) {
    const a = src.indexOf("function escapeHtml(");
    const b = src.indexOf("function getBangkokMonthString(");
    assert.ok(a >= 0 && b > a, "ไม่พบฟังก์ชันช่วย");
    return new Function(`${src.slice(a, b)}; return { escapeHtml, safeImgUrl, jsArg };`)();
}

for (const [label, src] of [["admin-app.js", admin], ["index.html", index]]) {
    test(`${label}: escapeHtml / safeImgUrl / jsArg ทำงานถูก`, () => {
        const h = helpersFrom(src);
        assert.equal(h.escapeHtml(`<img src=x onerror="a('b')">&`), "&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;");
        assert.equal(h.escapeHtml(null), "");
        assert.equal(h.safeImgUrl("https://profile.line-scdn.net/a.png"), "https://profile.line-scdn.net/a.png");
        assert.equal(h.safeImgUrl("javascript:alert(1)"), "");
        assert.equal(h.safeImgUrl("data:text/html,x"), "");
        assert.equal(h.safeImgUrl('https://x/"onerror="y'), "https://x/&quot;onerror=&quot;y");
        // jsArg ต้องไม่หลุดออกจากเครื่องหมายคำพูดของ attribute และต้องถอดกลับเป็นข้อความเดิมได้
        const evil = `A'");alert(1);//`;
        const out = h.jsArg(evil);
        assert.ok(!/["']/.test(out.replace(/&quot;|&#39;/g, "")));
        const decoded = out.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
        assert.equal(JSON.parse(decoded), evil);
    });
}

test("ไม่เหลือจุดที่ใส่ข้อความดิบลง HTML / onclick", () => {
    const bad = [
        /(?<!")\$\{t\.desc\}/, /\$\{t\.payer\}/, /\$\{p\.from\}/, /\$\{p\.to\}/, /\$\{s\.from\}/, /\$\{s\.to\}/,
        /\$\{vs\.from\}/, /\$\{vs\.to\}/, /\$\{m\.name\}/, /\$\{m\.pictureUrl\}/, /\$\{member\.pictureUrl\}/, /\$\{memberData\.pictureUrl\}/,
        /src="\$\{[a-zA-Z.]*pictureUrl\}"/, /onclick="[^"]*'\$\{(c|d)\.name\}'/, /'\$\{(safeFrom|safeTo|s\.id|m\.id)\}'/,
        /\$\{slip\.(sender|receiver)\.displayName\}/
    ];
    for (const re of bad) {
        assert.ok(!re.test(admin), `admin-app.js ยังมี ${re}`);
        assert.ok(!re.test(index), `index.html ยังมี ${re}`);
    }
});

test("admin.html ขยับเลขเวอร์ชันของ admin-app.js (กัน service worker แคชไฟล์เก่า)", () => {
    assert.match(read("admin.html"), /admin-app\.js\?v=4/);
});
