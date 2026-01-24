@echo off
echo ========================================
echo Deploying to Vercel (Production)...
echo ========================================
echo.

call vercel --prod

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Deploy SUCCESS!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Check Vercel Dashboard for deployment URL
    echo 2. Set Environment Variables if not set yet:
    echo    - SLIPOK_API_KEY = SLIPOK4D5KB1A
    echo    - LINE_CHANNEL_ACCESS_TOKEN = your_token
    echo 3. Redeploy after setting env vars
    echo 4. Test by sending slip image in LINE
    echo.
) else (
    echo.
    echo ========================================
    echo Deploy FAILED!
    echo ========================================
    echo.
    echo Please check the error message above.
    echo.
)

pause
