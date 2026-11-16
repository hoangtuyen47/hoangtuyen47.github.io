@echo off
chcp 65001 >nul
echo ========================================================
echo   CÔNG CỤ TỰ ĐỘNG ĐẨY CODE LÊN GITHUB PAGES
echo   Website Cá Nhân • Hoàng Tuyên
echo ========================================================
echo.

set DEFAULT_URL=https://github.com/hoangtuyen47/vuivui.git
echo Mặc định kho lưu trữ: %DEFAULT_URL%
set /p REPO_URL="Bấm ENTER để đẩy lên kho mặc định trên (hoặc dán link mới vào đây): "

if "%REPO_URL%"=="" set REPO_URL=%DEFAULT_URL%

echo.
echo Đang đẩy mã nguồn lên: %REPO_URL%

echo.
echo [1/4] Khởi tạo kho lưu trữ Git...
git init
git checkout -B main

echo [2/4] Thêm toàn bộ mã nguồn và tệp tĩnh...
git add .

echo [3/4] Tạo bản ghi chú Commit...
git commit -m "Cập nhật portfolio giáo dục Hoàng Tuyên - %date% %time%"

echo [4/4] Đẩy mã nguồn lên GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   HOÀN TẤT ĐẨY MÃ NGUỒN LÊN GITHUB!
echo   Bây giờ bạn chỉ cần vào Repository -> Settings -> Pages
echo   Chọn nhánh 'main' và thư mục '/ (root)' rồi bấm Save!
echo ========================================================
echo.
pause
