@echo off
echo.
echo  ==========================================
echo   Portfolio Next.js Setup
echo   Next.js + TailwindCSS + shadcn/ui
echo  ==========================================
echo.

cd /d "%~dp0"

echo [1/2] Installing dependencies (this takes ~1-2 min)...
npm install

echo.
echo [2/2] Starting dev server...
echo.
echo  Open http://localhost:3000 in your browser
echo.
npm run dev
