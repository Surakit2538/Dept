# Dept Money 💰

Mobile-first expense tracker web application with LINE Login support.

## Features
- **Expense Tracking:** Record daily expenses.
- **Split Bill:** Split bills among friends (Equal/Custom).
- **Installment:** Support installment payments logic.
- **PWA Ready:** Installable on mobile devices.
- **LINE Login:** Authenticate using LINE account.

## Setup (For Developers)

### 1. Prerequisites
- A GitHub account.
- A LINE Developer account (channel ID).

### 2. Deployment
You can deploy this project to any static hosting service like **GitHub Pages**, **Vercel**, or **Firebase Hosting**.

#### Option A: GitHub Pages (Easiest)
1. Upload these files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select `main` branch and `/ (root)` folder.
4. Save. Your site will be live!

### 3. Configure LINE Login
1. Go to [LINE Developers Console](https://developers.line.biz/).
2. Create a **Login Channel**.
3. In "LIFF" tab, add a new LIFF app:
   - Size: Full
   - Endpoint URL: `https://<your-github-pages-url>/index.html`
   - Scopes: `profile`, `openid`
4. Copy the **LIFF ID**.
5. Edit `index.html` and replace `YOUR_LIFF_ID` with your actual ID.

```javascript
/* index.html (~Line 540) */
const LIFF_ID = "YOUR_LIFF_ID_HERE"; 
```

## Local Development
To run locally:
```bash
# If you have Node.js
npx serve

# Or using the included PowerShell script (Windows)
./run_server.ps1
```

## License
Private / Personal Use
