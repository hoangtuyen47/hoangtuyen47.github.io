@echo off
chcp 65001 >nul
echo ========================================================
echo   CONG CU TU DONG DAY CODE LEN GITHUB PAGES
echo   Website Ca Nhan • Hoang Tuyen
echo ========================================================
echo.

set DEFAULT_URL=https://github.com/hoangtuyen47/hoangtuyen47.github.io.git
set FALLBACK_URL=https://github.com/hoangtuyen47/vuivui.git

echo Kho mac dinh: %DEFAULT_URL%
echo Neu ban chua doi ten kho (van la vuivui), go so 2 roi Enter.
echo.
echo [1] Day len: hoangtuyen47.github.io (Trang chu chinh)
echo [2] Day len: vuivui (Kho cu)
echo.
set /p CHOICE="Chon [1] hoac [2] (Mac dinh la 1): "

if "%CHOICE%"=="2" (
    set REPO_URL=%FALLBACK_URL%
) else (
    set REPO_URL=%DEFAULT_URL%
)

echo.
echo Dang day ma nguon len: %REPO_URL%

git config user.email "hoangtuyen47@gmail.com"
git config user.name "HoangTuyen"

echo.
echo [1/4] Khoi tao nhanh Git...
git init
git checkout -B main

echo [2/4] Them toan bo ma nguon va tep tinh...
git add .

echo [3/4] Tao ban ghi chu Commit...
git commit -m "Cap nhat website Hoang Tuyen - %date% %time%"

echo [4/4] Day ma nguon len GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   HOAN TAT DAY MA NGUON LEN GITHUB!
echo ========================================================
echo.
pause
