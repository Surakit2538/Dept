import * as fs from "firebase/firestore";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";

// ตรรกะทั้งหมดอยู่ใน lib/shortcut-service.mjs (ดูคำอธิบาย action parse / save ในไฟล์นั้น)
export default createShortcutHandler({
    db: getDbInstance(),
    fs,
    verifyDeviceToken
});
