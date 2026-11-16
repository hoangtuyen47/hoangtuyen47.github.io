@echo off
chcp 65001 >nul
echo ========================================================
echo   CONG CU TU DONG DAY CODE LEN GITHUB PAGES
echo   Website Ca Nhan • Hoang Tuyen
echo ========================================================
echo.

set DEFAULT_URL=https://github.com/hoangtuyen47/vuivui.git
echo Mac dinh kho luu tru: %DEFAULT_URL%
set /p REPO_URL="Bam ENTER de day len kho mac dinh tren: "

if "%REPO_URL%"=="" set REPO_URL=%DEFAULT_URL%

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
git commit -m "Cap nhat 12 bai hoc 3 nhom va bao mat admin - %date% %time%"

echo [4/4] Day ma nguon len GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   HOAN TAT DAY MA NGUON LEN GITHUB!
echo   Website se tu dong cap nhat trong 1-2 phut.
echo ========================================================
echo.
pause
