/**
 * PORTFOLIO DATA HUB - HOÀNG TUYÊN
 * Website Cá Nhân: Giải Pháp Giáo Dục Số, Đào Tạo Kỹ Năng & Kho Học Liệu STEM
 * Phân loại kho học liệu theo 3 nhóm: Kỹ năng số • Lập trình ESP32 • Lập trình Arduino
 */

const PORTFOLIO_DATA = {
  version: "2026.11.16.v5",

  // Cấu hình bảo mật Admin (Mã PIN / Mật khẩu quản trị)
  adminPin: "ht2027@",

  // Cấu hình Banner 1920 x 250
  banner: {
    logoImage: "assets/images/header-logo.svg",
    subBannerImage: "assets/images/sub-banner.png",
    heightDesktop: 250,
    widthMax: 1920
  },

  // Thông tin tác giả & Giáo viên
  profile: {
    fullName: "Hoàng Tuyên",
    bio: "Chào mừng quý thầy cô, phụ huynh và các em học sinh! Nơi tổng hợp các giải pháp công nghệ giáo dục, khóa đào tạo kỹ năng số và kho học liệu STEM thực hành.",
    avatar: "assets/images/teacher-avatar.png",
    contacts: {
      zalo: "https://zalo.me",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com"
    }
  },

  // Danh sách các khóa học đang tổ chức (Cột trái)
  classes: [
    {
      id: "class-digital-skills",
      title: "Lớp Kỹ Năng Số & Công Nghệ AI Ứng Dụng",
      badge: "Kỹ năng số",
      badgeColor: "emerald",
      image: "assets/images/lop_hoc_ky_nang_so.png",
      target: "Học sinh THCS & THPT (Lớp 6 - 12)",
      highlights: [
        "Thám tử AI: Dạy máy học Teachable Machine nhận diện đồ vật và phân tích dữ liệu",
        "Bộ công cụ Google Workspace (Drive, Docs, Sheets) chuẩn hóa quy trình khoa học",
        "Đóng vai Kỹ sư phần mềm: Tự làm App POS bán hàng & Tra cứu bệnh án bằng Apps Script",
        "Thiết kế đồ họa Canva & Dựng trailer video ngắn thuyết trình sản phẩm"
      ],
      schedule: "Tối Thứ 3 - Thứ 5 hoặc Chiều Thứ 7",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    },
    {
      id: "class-stem-arduino",
      title: "Khóa Lập Trình Robot STEM Arduino",
      badge: "Arduino STEM",
      badgeColor: "sky",
      image: "assets/images/robot_stem_arduino.png",
      target: "Học sinh THCS & THPT yêu thích sáng tạo phần cứng",
      highlights: [
        "Nhập môn điện tử: Mô hình đường ống nước, điện áp, điện trở và an toàn điện",
        "Lập trình kéo thả mBlock kết nối trực tiếp mạch điều khiển Arduino Uno",
        "Chế tạo xe Robot tránh vật cản siêu âm HC-SR04 & Đèn đường quang trở tự động",
        "Thực hành lắp ráp mạch cầu H L298N điều khiển động cơ DC không gây cháy nổ"
      ],
      schedule: "Sáng Chủ Nhật (08:00 - 10:30)",
      status: "Đang mở lớp",
      registerLink: "https://zalo.me"
    },
    {
      id: "class-stem-esp32-iot",
      title: "Khóa Lập Trình Vi Điều Khiển ESP32 & IoT Chuyên Sâu",
      badge: "ESP32 & C++",
      badgeColor: "rose",
      image: "assets/images/hoc_sinh_lap_trinh.png",
      target: "Học sinh THPT & Sinh viên đam mê IoT, Robotics",
      highlights: [
        "Củng cố tư duy C++ hiện đại: Đóng gói hàm (Functions) & Cấu trúc rẽ nhánh",
        "Hệ thống âm thanh số I2S với module giải mã phần cứng DAC MAX98357A",
        "Kết nối đám mây Firebase Realtime Database & Đồng bộ trạng thái thiết bị",
        "Thiết kế Web Server nhúng điều khiển thiết bị qua mạng nội bộ WiFi"
      ],
      schedule: "Chiều Thứ 7 & Chiều Chủ Nhật",
      status: "Sắp khai giảng",
      registerLink: "https://zalo.me"
    }
  ],

  // Hệ thống công cụ số đã phát triển
  systems: [
    {
      id: "sys-nen-hiep",
      title: "Hệ Thống Số Hóa Nền Nếp & Hồ Sơ Đoàn Thanh Niên",
      badge: "Quản trị số",
      badgeColor: "blue",
      image: "assets/images/dashboard-school.png",
      description: "Nền tảng số hóa toàn bộ quy trình chấm điểm thi đua, lưu vết vi phạm, thống kê xếp loại chi đoàn theo tuần/tháng tự động bằng Google Apps Script & AppSheet.",
      features: [
        "Chấm điểm nề nếp online trực tiếp trên điện thoại tại cổng trường",
        "Tự động tính điểm trừ, xếp hạng tuần và xuất báo cáo PDF gửi GVCN",
        "Lưu vết lịch sử học sinh vi phạm minh bạch, bảo mật phân quyền"
      ],
      demoLink: "https://hoangtuyen47.github.io/vuivui",
      registerLink: "https://zalo.me",
      demoAccount: { user: "admin", pass: "nenhiep@2026" }
    },
    {
      id: "sys-khao-thi",
      title: "Hệ Thống Trộn Đề & Ngân Hàng Đề Thi Trắc Nghiệm Thông Minh",
      badge: "Khảo thí",
      badgeColor: "emerald",
      image: "assets/images/exam-schedule.svg",
      description: "Phần mềm tự động đảo đề thi, sinh ma trận đề và xuất file Word chuẩn Bộ GD&ĐT kèm phiếu soi đáp án tô tự động trên điện thoại.",
      features: [
        "Nhập ngân hàng câu hỏi từ file Word giữ nguyên công thức toán MathType",
        "Hoán vị câu hỏi và phương án ngẫu nhiên, sinh mã đề không trùng lặp",
        "Tự động sinh phiếu soi đáp án và thang điểm chấm tự động"
      ],
      demoLink: "https://hoangtuyen47.github.io/vuivui",
      registerLink: "https://zalo.me",
      demoAccount: { user: "khaothi", pass: "khaothi@2+2" }
    },
    {
      id: "sys-aura-thi-truc-tuyen",
      title: "Lớp Học Aura: Nền Tảng Thi Trực Tuyến Minh Bạch Chống Gian Lận",
      badge: "Thi online",
      badgeColor: "purple",
      image: "assets/images/thi-thu-aura.png",
      description: "Phòng thi ảo giám sát thông minh: Cảnh báo chuyển tab, khóa màn hình thi, xáo trộn câu hỏi tức thời và tự động nộp bài khi hết giờ.",
      features: [
        "Công nghệ phát hiện chuyển tab màn hình và đếm số lần vi phạm",
        "Tự động khóa bài thi nếu học sinh cố tình mở cửa sổ phụ",
        "Chấm điểm tức thì, phân tích phổ điểm và xuất file Excel báo cáo"
      ],
      demoLink: "https://hoangtuyen47.github.io/vuivui",
      registerLink: "https://zalo.me",
      demoAccount: { user: "teacher_tin", pass: "aura@exam2026" }
    },
    {
      id: "sys-ho-so-chuyen-mon",
      title: "Hệ Thống Quản Lý Hồ Sơ Chuyên Môn Giáo Viên 5512",
      badge: "Hồ sơ số",
      badgeColor: "rose",
      image: "assets/images/hoso-giao-an.svg",
      description: "Kho lưu trữ và ký duyệt giáo án điện tử theo Công văn 5512. Tự động nhắc nhở tiến độ nộp bài và phân quyền tổ trưởng chuyên môn.",
      features: [
        "Tải lên kế hoạch bài dạy (giáo án) Word/PDF một chạm",
        "Tổ trưởng chuyên môn ký duyệt nhận xét trực tiếp trên nền tảng web",
        "Báo cáo thống kê tiến độ nộp giáo án toàn trường theo tuần"
      ],
      demoLink: "https://hoangtuyen47.github.io/vuivui",
      registerLink: "https://zalo.me",
      demoAccount: { user: "totruong_tin", pass: "hoso@5512" }
    },
    {
      id: "sys-diem-danh-faceid",
      title: "Hệ Thống Điểm Danh Lớp Học & Học Phí Tự Động",
      badge: "Tiện ích lớp",
      badgeColor: "amber",
      image: "assets/images/diem-danh-stem.png",
      description: "Giải pháp quản lý học sinh trung tâm: Điểm danh quét mã QR/FaceID, tự động gửi tin nhắn thông báo về Zalo phụ huynh và theo dõi học phí.",
      features: [
        "Học sinh quét thẻ điểm danh trong 0.5 giây",
        "Hệ thống tự động gửi tin nhắn Zalo ZNS báo giờ vào lớp cho cha mẹ",
        "Theo dõi công nợ học phí và gửi phiếu thu điện tử định kỳ"
      ],
      demoLink: "https://hoangtuyen47.github.io/vuivui",
      registerLink: "https://zalo.me",
      demoAccount: { user: "admin_class", pass: "hocphi@2026" }
    },
    {
      id: "sys-stem-lab-virtual",
      title: "Phòng Thực Hành STEM Ảo: Mô Phỏng Mạch & Lập Trình 3D",
      badge: "Mô phỏng 3D",
      badgeColor: "cyan",
      image: "assets/images/circuit-arduino.svg",
      description: "Môi trường giả lập vi điều khiển 3D tương tác không lo cháy nổ linh kiện. Học sinh lắp ráp mạch và chạy code trực tiếp trên trình duyệt.",
      features: [
        "Mô phỏng vi điều khiển ESP32, Arduino Uno, Raspberry Pi trực quan",
        "Thư viện hơn 100 cảm biến và động cơ (OLED, Servo, Cầu H, Siêu âm)",
        "Nạp code C++ chạy thử nghiệm tức thì với đồng hồ đo điện áp ảo"
      ],
      demoLink: "https://wokwi.com",
      registerLink: "https://zalo.me",
      demoAccount: { user: "Mở trực tiếp", pass: "Không cần tài khoản" }
    }
  ],

  // =========================================================================
  // KHO HỌC LIỆU SỐ & DỰ ÁN STEM (CHIA THÀNH 3 NHÓM RÕ RÀNG)
  // Nhóm 1: Kỹ năng số (digital-skills)
  // Nhóm 2: Lập trình ESP32 (esp32)
  // Nhóm 3: Lập trình Arduino (arduino)
  // =========================================================================
  studentLibrary: [
    // -----------------------------------------------------------------------
    // NHÓM 1: KỸ NĂNG SỐ (DIGITAL SKILLS)
    // -----------------------------------------------------------------------
    {
      id: "lib-ds-teachable-ai",
      group: "digital-skills",
      category: "Kỹ năng số",
      badge: "AI Thị giác máy tính",
      image: "assets/images/lib-teachable-ai.svg",
      title: "Dự Án AI 'Đại Sứ Xanh': Phân Loại Rác Thông Minh & Ghi Log Google Sheets",
      description: "Huấn luyện mạng nơ-ron tích chập (CNN) phân loại rác tái chế qua webcam. Tự động kết nối và ghi dữ liệu nhật ký vào Google Sheets bằng Google Apps Script.",
      contentDetail: `I. MỤC TIÊU & Ý NGHĨA DỰ ÁN:
• Dự án giúp học sinh THCS & THPT hiểu rõ bản chất Trí tuệ Nhân tạo (AI) và Thị giác Máy tính (Computer Vision) qua mô hình thực tế.
• Học sinh tự tay thu thập tập dữ liệu ảnh (Dataset) gồm 3 phân loại: Rác tái chế (Nhựa), Rác hữu cơ (Giấy/Lá), Rác kim loại nguy hại.
• Huấn luyện mô hình học máy trên nền tảng Google Teachable Machine và tích hợp code JavaScript để tự động đẩy dữ liệu sang Google Sheets theo thời gian thực.

II. NGUYÊN LÝ HOẠT ĐỘNG:
1. Thu thập dữ liệu (Dataset): Dùng webcam chụp 100 - 150 hình ảnh cho mỗi phân loại ở nhiều góc độ và điều kiện ánh sáng.
2. Huấn luyện (Training): Mạng CNN MobileNet trích xuất đặc trưng hình ảnh và tối ưu trọng số trong 50 Epochs.
3. Dự đoán (Inference): Khi đưa mẫu vật trước camera, mô hình tính toán xác suất (Confidence Score) từ 0% đến 100%.
4. Đẩy dữ liệu (Webhook API): Gửi request POST chứa tên nhãn và độ tin cậy đến Google Apps Script Web App để lưu vào bảng tính.

III. CÁC BƯỚC THỰC HÀNH:
• Bước 1: Mở teachablemachine.withgoogle.com -> Chọn Image Project -> Standard image model.
• Bước 2: Tạo 3 nhãn: "Nhựa", "Giấy", "Kim Loại". Bật webcam giữ nút Record để chụp mẫu vật.
• Bước 3: Bấm "Train Model" và kiểm thử bằng các vật thể thực tế trong lớp học.
• Bước 4: Xuất mô hình dưới dạng "TensorFlow.js (Cloud Upload)" để lấy đường link Model URL.
• Bước 5: Nhúng vào đoạn mã HTML/JavaScript để kích hoạt âm thanh phản hồi và đẩy log vào Google Sheets.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-teachable-ai.svg",
      model3dUrl: "https://teachablemachine.withgoogle.com",
      pdfUrl: "https://docs.google.com",
      hardware: ["Máy tính có Webcam", "Google Teachable Machine", "Trình duyệt Chrome", "Google Drive & Sheets"],
      wiringGuide: "Luồng hoạt động: Webcam Laptop -> TensorFlow.js CNN Engine -> Google Apps Script API -> Google Sheets Database",
      codeSnippet: `// -------------------------------------------------------------
// DỰ ÁN AI "ĐẠI SỨ XANH" - PHÂN LOẠI RÁC & GỬI DỮ LIỆU GOOGLE SHEETS
// Giảng dạy & Phát triển: Hoàng Tuyên
// -------------------------------------------------------------
const URL_MODEL = "https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/";
const GOOGLE_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

let model, webcam, maxPredictions;

async function initAI() {
  const modelURL = URL_MODEL + "model.json";
  const metadataURL = URL_MODEL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true; 
  webcam = new tmImage.Webcam(320, 240, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  let bestClass = "";
  let highestProb = 0;

  for (let i = 0; i < maxPredictions; i++) {
    if (prediction[i].probability > highestProb) {
      highestProb = prediction[i].probability;
      bestClass = prediction[i].className;
    }
  }

  // Khi độ tin cậy > 85%, ghi log kết quả tự động
  if (highestProb > 0.85) {
    guiDuLieuVeSheet(bestClass, (highestProb * 100).toFixed(1));
  }
}

async function guiDuLieuVeSheet(loaiRac, doTinCay) {
  try {
    await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        thoiGian: new Date().toLocaleString("vi-VN"),
        loaiRac: loaiRac,
        doTinCay: doTinCay + "%"
      })
    });
    console.log("Đã lưu kết quả phân loại:", loaiRac);
  } catch (err) {
    console.error("Lỗi gửi dữ liệu:", err);
  }
}`
    },
    {
      id: "lib-ds-app-design",
      group: "digital-skills",
      category: "Kỹ năng số",
      badge: "Google Apps Script",
      image: "assets/images/lop_hoc_ky_nang_so.png",
      title: "Đóng Vai Kỹ Sư Phần Mềm: Xây Dựng App POS Bán Hàng & Hồ Sơ Bác Sĩ Thú Y",
      description: "Xây dựng hệ thống App POS Quán Trà Sữa và Tra Cứu Hồ Sơ Bệnh Án Thú Y từ con số 0. Kết nối Frontend Canva với Backend Bảng tính Google Sheets qua Apps Script.",
      contentDetail: `I. TRIẾT LÝ ĐÀO TẠO "ĐÓNG VAI KỸ SƯ PHẦN MỀM":
• Thay vì học các cú pháp lập trình khô khan, học sinh được 'nhận đơn đặt hàng' từ các doanh nghiệp thực tế: Bệnh viện thú y, Chuỗi cửa hàng đồ uống, Phòng khảo thí trường học.
• Quy trình chuẩn công nghiệp: Lên kịch bản người dùng (User Story) -> Thiết kế Wireframe giao diện -> Xây dựng CSDL bảng tính -> Lập trình tự động hóa Macro & API.

II. CẤU TRÚC 2 DỰ ÁN TIÊU BIỂU:
1. Dự Án "Trạm Thú Y Bác Sĩ Nhí":
   - Nhập mã số thú cưng -> Tự động tra cứu hình ảnh, cân nặng, tiền sử bệnh án bằng hàm XLOOKUP/INDEX-MATCH.
   - Nút bấm 'Lưu Khám Mới' tự động đóng dấu thời gian (Timestamp) và gửi email dặn dò phụ huynh thú cưng.
2. Dự Án "Hệ Thống Bán Hàng POS Trà Sữa Thông Minh":
   - Màn hình chạm cảm ứng chọn món, chọn size, mức đường/đá.
   - Tự động tính tổng tiền, in hóa đơn mã QR thanh toán ngân hàng tự động (VietQR).
   - Tự động trừ tồn kho nguyên liệu trong kho Backend.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lop_hoc_ky_nang_so.png",
      model3dUrl: "https://script.google.com",
      pdfUrl: "https://docs.google.com",
      hardware: ["Google Workspace (Drive, Sheets, Docs)", "Google Apps Script Engine", "Tài khoản Canva Giáo Dục", "Máy tính kết nối Internet"],
      wiringGuide: "Kiến trúc: Web UI Client (Canva/HTML) -> HTTP Request JSON -> Google Apps Script Serverless -> Google Sheets Database",
      codeSnippet: `// =========================================================================
// GOOGLE APPS SCRIPT: BACKEND XỬ LÝ HÓA ĐƠN & TRA CỨU HỒ SƠ TỰ ĐỘNG
// Khóa học Kỹ Năng Số - Giảng viên Hoàng Tuyên
// =========================================================================

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("NHAT_KY_BAN_HANG");

    const maHoaDon = "HD-" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMdd-HHmmss");
    
    sheet.appendRow([
      maHoaDon,
      new Date(),
      data.tenKhachHang,
      data.tenMon,
      data.soLuong,
      data.donGia,
      data.thanhTien,
      data.phuongThucThanhToan
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "SUCCESS",
      maHoaDon: maHoaDon,
      message: "Đã lưu hóa đơn thành công vào hệ thống!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "ERROR",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}`
    },
    {
      id: "lib-ds-mblock-game",
      group: "digital-skills",
      category: "Kỹ năng số",
      badge: "mBlock & Game logic",
      image: "assets/images/lib-python-ai.svg",
      title: "Lập Trình Kéo Thả mBlock IoT: Sáng Tạo Game Tương Tác 'Phi Công Siêu Đẳng'",
      description: "Làm quen tư duy thuật toán thông qua lập trình khối mBlock. Điều khiển phi cơ bằng phím mũi tên, tính điểm va chạm vật cản và kết nối cảm biến IoT ảo.",
      contentDetail: `I. MỤC TIÊU BÀI HỌC (GIÁO TRÌNH PHẦN 1 STEM - HOÀNG TUYÊN):
• Giúp học sinh bước đầu làm quen với lập trình mà không bị rào cản cú pháp chữ phức tạp nhờ công nghệ kéo thả mBlock (dựa trên Scratch 3.0).
• Nắm vững các khái niệm nền tảng: Tọa độ X-Y trên sân khấu, Vòng lặp liên tục (forever), Cấu trúc rẽ nhánh (if then), Biến số điểm số (Score) và Mạng sống (Lives).

II. QUY TRÌNH THIẾT KẾ DỰ ÁN GAME "PHI CÔNG SIÊU ĐẲNG":
1. Thiết kế Sân khấu: Chọn phông nền Vũ trụ / Bầu trời đêm, tạo hiệu ứng cuộn cảnh vô tận.
2. Lập trình Phi cơ (Nhân vật chính): Bắt sự kiện bàn phím mũi tên Lên/Xuống/Trái/Phải để điều hướng tọa độ.
3. Tạo vật cản (Thiên thạch): Sử dụng khối lệnh "tạo bản sao của chính tôi" (create clone) để thiên thạch bay ngẫu nhiên từ trên xuống.
4. Xử lý va chạm: Nếu phi cơ chạm vào thiên thạch -> Phát âm thanh nổ, giảm 1 mạng và nhấp nháy nhân vật.
5. Kết thúc Game: Khi mạng = 0, phát thông báo "Game Over" và dừng toàn bộ kịch bản.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-python-ai.svg",
      model3dUrl: "https://mblock.cc",
      pdfUrl: "https://mblock.cc",
      hardware: ["Phần mềm mBlock 5 (PC / Web)", "Máy tính bàn hoặc Laptop", "Bàn phím & Chuột"],
      wiringGuide: "Sơ đồ tương tác: Bàn phím máy tính -> Bộ thu sự kiện mBlock Stage -> Xử lý biến tọa độ X/Y -> Hiển thị hoạt cảnh",
      codeSnippet: `// =========================================================================
// MÔ PHỎNG LOGIC LẬP TRÌNH GAME TRÊN MBLOCK (JAVASCRIPT RUNTIME)
// Khóa học Kỹ Năng Số Thiếu Nhi - Hoàng Tuyên
// =========================================================================

let score = 0;
let lives = 3;
let plane = { x: 0, y: -100, speed: 5 };

function onKeyArrowUp() {
  plane.y += plane.speed;
}

function onKeyArrowDown() {
  plane.y -= plane.speed;
}

function onKeyArrowLeft() {
  plane.x -= plane.speed;
}

function onKeyArrowRight() {
  plane.x += plane.speed;
}

function checkCollision(meteor) {
  let distance = Math.hypot(plane.x - meteor.x, plane.y - meteor.y);
  if (distance < 30) {
    lives--;
    playSound("explosion.wav");
    if (lives <= 0) {
      gameOver();
    }
  }
}`
    },
    {
      id: "lib-ds-gamification",
      group: "digital-skills",
      category: "Kỹ năng số",
      badge: "Canva & Google Sheets",
      image: "assets/images/lib-smart-trash.svg",
      title: "Gamification Kỹ Năng Số: Dự Án 'Đại Chiến Lòng Đất - Kiến Lửa vs Mối Trắng'",
      description: "Học kỹ năng số qua kịch bản Game hóa: Thiết kế Poster/Trailer đồ họa trên Canva, chuẩn hóa hồ sơ mật trên Google Docs và lập trình đấu trường mini-game trên bảng tính Sheets.",
      contentDetail: `I. PHƯƠNG PHÁP GAME HÓA TRONG GIÁO DỤC (GAMIFICATION):
• Biến những kỹ năng tin học văn phòng tưởng chừng khô khan thành một cuộc phiêu lưu hấp dẫn với bối cảnh 'Chiến trường côn trùng dưới lòng đất'.
• Học sinh hóa thân thành Chỉ Huy Quân Đội Kiến Lửa, hoàn thành 3 chặng nhiệm vụ để giải cứu Vương Quốc.

II. 3 CHẶNG NHIỆM VỤ THỰC CHIẾN:
• Chặng 1: Thiết kế Poster / Trailer Truyền thông trên Canva:
  - Chọn bảng màu tương phản nóng - lạnh (Đỏ cam lửa vs Trắng ngà mối).
  - Áp dụng nguyên tắc bố cục 1/3, hiệu ứng bóng đổ và typography gây cấn.
• Chặng 2: Chuẩn hóa Hồ Sơ Tình Báo Mật trên Google Docs:
  - Dàn trang 2 cột báo chí, chèn Drop Cap chữ cái đầu dòng hoa mỹ.
  - Tạo bảng chỉ số sinh học của Kiến Chúa và Mối Chúa chuẩn mực sư phạm.
• Chặng 3: Lập trình Đấu Trường Mini-Game trên Google Sheets:
  - Dùng hàm RANDBETWEEN() để mô phỏng xúc xắc tấn công ngẫu nhiên.
  - Dùng hàm IF(), SUM(), VLOOKUP() để tự động tính điểm sinh lực (HP), giáp phòng thủ và phán quyết Thắng/Thua tự động kèm định dạng có điều kiện (Conditional Formatting) đổi màu đỏ/xanh tức thì.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-smart-trash.svg",
      model3dUrl: "https://canva.com",
      pdfUrl: "https://canva.com",
      hardware: ["Tài khoản Canva Pro Giáo Dục", "Google Docs & Google Sheets", "Kịch bản cốt truyện Gamification"],
      wiringGuide: "Quy trình: Canva (Thiết kế Asset đồ họa) -> Google Docs (Kịch bản cốt truyện) -> Google Sheets (Logic toán học Game)",
      codeSnippet: `// =========================================================================
// GOOGLE SHEETS SCRIPT: ĐẤU TRƯỜNG MINI-GAME KIẾN LỬA VS MỐI TRẮNG
// Sáng tạo & Thiết kế: Hoàng Tuyên
// =========================================================================

function batDauGiaoTranh() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DAU_TRUONG");
  
  const satThuongKien = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
  const satThuongMoi = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
  
  sheet.getRange("D5").setValue(satThuongKien);
  sheet.getRange("E5").setValue(satThuongMoi);
  
  let ketQua = "";
  if (satThuongKien > satThuongMoi) {
    ketQua = "🔥 CHIẾN THẮNG THUỘC VỀ KIẾN LỬA!";
  } else if (satThuongKien < satThuongMoi) {
    ketQua = "🪵 CHIẾN THẮNG THUỘC VỀ MỐI TRẮNG!";
  } else {
    ketQua = "⚖️ BẤT PHÂN THẮNG BẠI!";
  }
  
  sheet.getRange("F8").setValue(ketQua);
  SpreadsheetApp.getUi().alert("KẾT QUẢ GIAO TRANH:\n" + ketQua);
}`
    },

    // -----------------------------------------------------------------------
    // NHÓM 2: LẬP TRÌNH ESP32 (ESP32 IOT & ROBOTICS)
    // -----------------------------------------------------------------------
    {
      id: "lib-esp32-fundamentals",
      group: "esp32",
      category: "Lập trình ESP32",
      badge: "C++ Arduino",
      image: "assets/images/hoc_sinh_lap_trinh.png",
      title: "Lập Trình ESP32 Cơ Bản: Đóng Gói Hàm C++, Nút Nhấn & Cảm Biến Line",
      description: "Giáo trình thực hành cốt lõi: Làm chủ tư duy biến số nguyên (int), đóng gói hàm xử lý, lệnh rẽ nhánh if - else và ngắt nút nhấn trên kit vi điều khiển ESP32.",
      contentDetail: `I. MỤC TIÊU BÀI HỌC (GIÁO TRÌNH ESP32 - HOÀNG TUYÊN):
• Rèn luyện tư duy lập trình C/C++ nền tảng cho học sinh: Phân biệt rõ kiểu dữ liệu số nguyên (int), logic (bool), cách chia chương trình thành các hàm độc lập có cấu trúc.
• Không lạm dụng delay() gây nghẽn vi điều khiển, làm quen tư duy đọc trạng thái linh kiện theo chu kỳ máy tính.

II. SƠ ĐỒ CHÂN NỐI DÂY XUYÊN SUỐT:
• Đèn LED tín hiệu: Cực dương (+) nối GPIO 2, cực âm (-) nối GND qua điện trở 220 Ohm.
• Còi báo động (Active Buzzer): Cực (+) nối GPIO 15, cực (-) nối GND.
• Nút nhấn (Push Button): 1 chân nối GPIO 18, chân còn lại nối GND (Khai báo INPUT_PULLUP).
• Cảm biến Dò đường (Line Tracking): Chân DO nối GPIO 13, VCC nối 3V3, GND nối GND bo mạch.

III. CÁC BƯỚC THỰC HÀNH CỐT LÕI:
1. Bước 1: Khai báo chân pinMode() cho các chân đầu vào (INPUT_PULLUP) và đầu ra (OUTPUT).
2. Bước 2: Đóng gói hàm phatTiengBip(thoiGian) để tái sử dụng mã nguồn.
3. Bước 3: Áp dụng thuật toán chống dội phím (Debounce) bằng delay ngắn 50ms khi bấm nút GPIO 18.
4. Bước 4: Kiểm tra trạng thái cảm biến Line hồng ngoại để kích hoạt chuông báo động.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/circuit-arduino.svg",
      model3dUrl: "https://wokwi.com/projects/new/esp32",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch ESP32 NodeMCU", "Đèn LED đỏ 5mm + Điện trở 220 Ohm", "Còi Buzzer 5V", "Nút nhấn 4 chân", "Cảm biến Dò Line hồng ngoại", "Breadboard & Dây cắm đực-cái"],
      wiringGuide: "LED chân (+) -> GPIO 2 | Còi Buzzer -> GPIO 15 | Nút nhấn -> GPIO 18 & GND | Cảm biến Line DO -> GPIO 13",
      codeSnippet: `// =========================================================================
// 10 BÀI TẬP ESP32 CƠ BẢN: BIẾN, HÀM & ĐIỀU KHIỂN RẼ NHÁNH
// Tác giả & Giảng viên: Hoàng Tuyên
// =========================================================================

#include <Arduino.h>

const int PIN_LED = 2;          // Đèn LED tích hợp bo mạch
const int PIN_BUZZER = 15;      // Còi báo động
const int PIN_BUTTON = 18;      // Nút nhấn kích hoạt
const int PIN_LINE_SENSOR = 13; // Cảm biến dò line

int soLanNhan = 0;
bool trangThaiLed = false;

// Đóng gói hàm phát âm thanh bíp ngắn
void phatTiengBip(int thoiGian) {
  digitalWrite(PIN_BUZZER, HIGH);
  delay(thoiGian);
  digitalWrite(PIN_BUZZER, LOW);
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_BUZZER, OUTPUT);
  pinMode(PIN_BUTTON, INPUT_PULLUP);
  pinMode(PIN_LINE_SENSOR, INPUT);

  Serial.println("=== HỆ THỐNG ESP32 HOÀNG TUYÊN ĐÃ KHỞI ĐỘNG SẴN SÀNG ===");
}

void loop() {
  if (digitalRead(PIN_BUTTON) == LOW) {
    delay(50); // Chống dội phím
    if (digitalRead(PIN_BUTTON) == LOW) {
      trangThaiLed = !trangThaiLed;
      digitalWrite(PIN_LED, trangThaiLed ? HIGH : LOW);
      soLanNhan++;
      
      phatTiengBip(80);
      Serial.printf("Nút nhấn được kích hoạt! Lần: %d | LED: %s\n", 
                    soLanNhan, trangThaiLed ? "BẬT" : "TẮT");
      
      while (digitalRead(PIN_BUTTON) == LOW); // Chờ nhả tay
    }
  }

  // Khi cảm biến Line phát hiện vạch đen, còi báo động kêu
  if (digitalRead(PIN_LINE_SENSOR) == LOW) {
    digitalWrite(PIN_BUZZER, HIGH);
  } else if (!trangThaiLed) {
    digitalWrite(PIN_BUZZER, LOW);
  }
}`
    },
    {
      id: "lib-esp32-l298n",
      group: "esp32",
      category: "Lập trình ESP32",
      badge: "Mạch Cầu H L298N",
      image: "assets/images/lib-l298n-motor.svg",
      title: "Điều Khiển Động Cơ Robot Với Mạch Cầu H L298N & Kỹ Thuật Điều Xung PWM",
      description: "Hiểu bản chất nguồn điện và nguyên lý mạch cầu H. Đóng gói hàm điều khiển động cơ robot (tiến, lùi, quay) và điều tốc PWM không nghẽn vi điều khiển.",
      contentDetail: `I. MÔ HÌNH HỆ THỐNG ĐƯỜNG ỐNG NƯỚC - "NGÔN NGỮ CỦA ĐIỆN":
• Điện thế (Voltage - Vôn): Tương đương Áp lực nước / Chiều cao bồn nước. Bồn nước đặt tầng 3 (12V) xả nước mạnh hơn bồn tầng 1 (5V). Bo mạch 5V cắm nhầm nguồn 12V sẽ nổ linh kiện!
• Cường độ dòng điện (Current - Ampe): Tương đương Độ rộng tiết diện ống dẫn. Vi điều khiển chỉ cần ống nhỏ (20mA), còn Động cơ cần ống dẫn lớn (2A) để không bị sụt nguồn chết máy.
• Mạch hạ áp Buck (LM2596): Đóng vai trò là van điều áp an toàn, chuyển nguồn pin Li-ion 12V xuống 5V ổn định nuôi vi điều khiển mà không gây nóng máy.

II. NGUYÊN LÝ MẠCH CẦU H (H-BRIDGE) L298N:
• Bo mạch điều khiển không thể cấp trực tiếp dòng điện 2A cho động cơ (sẽ cháy chân GPIO ngay lập tức).
• L298N nhận tín hiệu logic nhỏ (3.3V/5V) từ vi điều khiển để đóng ngắt 4 transistor công suất bên trong, đảo chiều cực tính (+) (-) giúp động cơ quay Thuận - Nghịch mượt mà.
• Chân ENA/ENB điều khiển tốc độ quay bằng xung PWM (0 - 255).

III. CÁC NGUYÊN TẮC AN TOÀN SỐNG CÒN:
1. NGUYÊN TẮC CHUNG MASS (COMMON GROUND): Dây GND của nguồn pin 12V bắt buộc phải nối chung với chân GND của vi điều khiển.
2. Tháo Jum 5V Enable trên L298N khi sử dụng nguồn cấp ngoài trên 12V để bảo vệ IC ổn áp tích hợp.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-l298n-motor.svg",
      model3dUrl: "https://wokwi.com",
      pdfUrl: "https://wokwi.com",
      hardware: ["Module công suất L298N", "2x Động cơ giảm tốc vàng DC", "Nguồn Pin 18650 7.4V/12V", "Module hạ áp Buck LM2596", "ESP32 hoặc Arduino Uno"],
      wiringGuide: "Pin 12V (+) -> 12V L298N | Pin 12V (-) -> GND L298N và GND ESP32 (Chung Mass) | IN1->GPIO 27, IN2->GPIO 26",
      codeSnippet: `// =========================================================================
// ĐIỀU KHIỂN ĐỘNG CƠ ROBOT QUA MẠCH CẦU H L298N (CHUẨN TƯ DUY MODULAR)
// Giảng dạy & Biên soạn: Hoàng Tuyên
// =========================================================================

#include <Arduino.h>

const int PIN_ENA = 14; // Điều khiển tốc độ PWM Động cơ Trái (0 - 255)
const int PIN_IN1 = 27; // Chiều quay IN1
const int PIN_IN2 = 26; // Chiều quay IN2

const int PIN_ENB = 32; // Điều khiển tốc độ PWM Động cơ Phải (0 - 255)
const int PIN_IN3 = 25; // Chiều quay IN3
const int PIN_IN4 = 33; // Chiều quay IN4

void setup() {
  Serial.begin(115200);
  
  pinMode(PIN_ENA, OUTPUT);
  pinMode(PIN_IN1, OUTPUT);
  pinMode(PIN_IN2, OUTPUT);
  
  pinMode(PIN_ENB, OUTPUT);
  pinMode(PIN_IN3, OUTPUT);
  pinMode(PIN_IN4, OUTPUT);
  
  Serial.println("Hệ thống động cơ L298N sẵn sàng!");
}

void robotTien(int tocDo) {
  digitalWrite(PIN_IN1, HIGH);
  digitalWrite(PIN_IN2, LOW);
  analogWrite(PIN_ENA, tocDo);

  digitalWrite(PIN_IN3, HIGH);
  digitalWrite(PIN_IN4, LOW);
  analogWrite(PIN_ENB, tocDo);
}

void robotDung() {
  digitalWrite(PIN_IN1, LOW);
  digitalWrite(PIN_IN2, LOW);
  analogWrite(PIN_ENA, 0);

  digitalWrite(PIN_IN3, LOW);
  digitalWrite(PIN_IN4, LOW);
  analogWrite(PIN_ENB, 0);
}

void loop() {
  Serial.println("Robot tiến tốc độ 200...");
  robotTien(200);
  delay(3000);

  Serial.println("Robot dừng...");
  robotDung();
  delay(1500);
}`
    },
    {
      id: "lib-esp32-i2s-audio",
      group: "esp32",
      category: "Lập trình ESP32",
      badge: "Âm thanh số I2S",
      image: "assets/images/lib-i2s-audio.svg",
      title: "ESP32 Nâng Cao: Hệ Thống Phát Âm Thanh Số I2S (MAX98357A) & Web Server Điều Khiển",
      description: "Giải mã âm thanh phần cứng chất lượng cao qua module DAC MAX98357A và giao thức I2S. Xây dựng máy chủ Web nhúng điều khiển thiết bị qua mạng nội bộ WiFi.",
      contentDetail: `I. TẠI SAO PHẢI DÙNG CHUẨN ÂM THANH I2S TRÊN ESP32?
• Dùng loa thông thường qua xung PWM tạo âm thanh rè, méo tiếng và tiêu tốn nhiều CPU của vi điều khiển.
• Chuẩn âm thanh số công nghiệp I2S (Inter-IC Sound) kết hợp mạch giải mã DAC MAX98357A: Truyền dữ liệu âm thanh số trực tiếp từ bộ nhớ Flash/Thẻ nhớ sang loa với độ phân giải cao 16-bit / 24-bit mượt mà như máy nghe nhạc chuyên nghiệp.

II. NGUYÊN TẮC CẤU HÌNH BỘ NHỚ VÀ THƯ VIỆN:
• Thư viện ESP8266Audio rất mạnh nhưng chiếm nhiều bộ nhớ chương trình.
• Cần cấu hình phân vùng bộ nhớ PlatformIO bằng dòng lệnh: board_build.partitions = huge_app.csv để tránh lỗi tràn RAM khi chạy đồng thời WiFi + WebServer + Audio Decoder.

III. KẾT NỐI CHÂN I2S VỚI MODULE MAX98357A:
• Chân BCLK (Bit Clock): GPIO 26.
• Chân LRC (Left/Right Clock): GPIO 25.
• Chân DIN (Data Input): GPIO 22.
• Chân VIN nối nguồn 5V, chân GND nối GND bo mạch ESP32.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-i2s-audio.svg",
      model3dUrl: "https://wokwi.com",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch ESP32 NodeMCU", "Module DAC giải mã âm thanh I2S MAX98357A", "Loa 4 Ohm 3W công suất", "Dây cắm jumper chống nhiễu"],
      wiringGuide: "BCLK -> GPIO 26 | LRC -> GPIO 25 | DIN -> GPIO 22 | VCC -> 5V | GND -> GND bo mạch",
      codeSnippet: `// =========================================================================
// HỆ THỐNG PHÁT ÂM THANH SỐ I2S (MAX98357A) QUA MÁY CHỦ WEB ESP32
// Giáo trình chuyên sâu - Hoàng Tuyên
// =========================================================================

#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include "AudioGeneratorWAV.h"
#include "AudioOutputI2S.h"
#include "AudioFileSourcePROGMEM.h"

WebServer server(80);

AudioGeneratorWAV *wav;
AudioOutputI2S *out;

const char* ssid = "WIFI_LOP_HOC_STEM";
const char* password = "MAT_KHAU_WIFI_2026";

void handleRoot() {
  String html = "<!DOCTYPE html><html><head><meta charset='utf-8'>";
  html += "<title>ESP32 Audio Controller - Hoàng Tuyên</title></head>";
  html += "<body style='font-family:sans-serif; text-align:center; padding:40px;'>";
  html += "<h2>BỘ ĐIỀU KHIỂN ÂM THANH SỐ I2S ESP32</h2>";
  html += "<p>Hệ thống IoT phát thanh thông báo thông minh</p>";
  html += "<button onclick=\"location.href='/phat'\">🔊 PHÁT THÔNG BÁO</button>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi đã kết nối! IP máy chủ:");
  Serial.println(WiFi.localIP());

  out = new AudioOutputI2S();
  out->SetPinout(26, 25, 22);
  out->SetGain(0.8);

  server.on("/", handleRoot);
  server.begin();
  Serial.println("Máy chủ Web đã hoạt động!");
}

void loop() {
  server.handleClient();
}`
    },
    {
      id: "lib-esp32-weather-station",
      group: "esp32",
      category: "Lập trình ESP32",
      badge: "LCD I2C & DHT11",
      image: "assets/images/lib-esp32-weather.svg",
      title: "Trạm Quan Trắc Thời Tiết Mini ESP32: Cảm Biến Nhiệt Ẩm DHT11 & Màn Hình LCD 1602 I2C",
      description: "Đọc dữ liệu nhiệt độ độ ẩm từ cảm biến DHT11 và hiển thị thời gian thực lên màn hình LCD 1602 qua giao tiếp truyền thông 2 dây I2C.",
      contentDetail: `I. NGUYÊN LÝ GIAO TIẾP TRUYỀN THÔNG I2C TRÊN ESP32:
• Giao thức I2C chỉ cần đúng 2 dây tín hiệu: SDA (Serial Data) và SCL (Serial Clock) thay vì phải dùng 16 dây nối cồng kềnh như màn hình LCD song song truyền thống.
• Trên bo mạch ESP32 chuẩn: Chân SDA nối GPIO 21, chân SCL nối GPIO 22. Địa chỉ I2C mặc định của màn hình là 0x27 hoặc 0x3F.

II. NGUYÊN LÝ HOẠT ĐỘNG CỦA CẢM BIẾN DHT11:
• DHT11 sử dụng một cảm biến độ ẩm điện dung và một nhiệt điện trở để đo không khí xung quanh, truyền tín hiệu số qua chân Data duy nhất.
• Khoảng đo độ ẩm: 20% - 90% RH (độ chính xác ±5%).
• Khoảng đo nhiệt độ: 0°C - 50°C (độ chính xác ±2°C).

III. CÁC BƯỚC THỰC HÀNH:
• Bước 1: Quét địa chỉ I2C bằng chương trình I2C Scanner để xác nhận địa chỉ 0x27.
• Bước 2: Khởi tạo thư viện Wire.h, LiquidCrystal_I2C.h và DHT.h.
• Bước 3: Định dạng hiển thị chuỗi ký tự trên 2 dòng màn hình LCD kèm ký hiệu độ °C đẹp mắt.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-esp32-weather.svg",
      model3dUrl: "https://wokwi.com/projects/new/esp32",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch ESP32", "Cảm biến nhiệt độ độ ẩm DHT11", "Màn hình LCD 1602 kèm module I2C", "Breadboard & Dây cắm đực-cái"],
      wiringGuide: "DHT11: VCC->3V3, GND->GND, DATA->GPIO 4 | LCD I2C: VCC->5V, GND->GND, SDA->GPIO 21, SCL->GPIO 22",
      codeSnippet: `// =========================================================================
// TRẠM QUAN TRẮC THỜI TIẾT MINI ESP32 (DHT11 + LCD 1602 I2C)
// Giảng dạy & Biên soạn: Hoàng Tuyên
// =========================================================================

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  lcd.init();
  lcd.backlight();
  
  lcd.setCursor(0, 0);
  lcd.print("TRAM THOI TIET");
  lcd.setCursor(0, 1);
  lcd.print("HOANG TUYEN STEM");
  delay(2000);
  lcd.clear();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    lcd.setCursor(0, 0);
    lcd.print("Loi doc cam bien!");
    return;
  }

  // Dòng 1: Nhiệt độ
  lcd.setCursor(0, 0);
  lcd.print("Nhiet do: ");
  lcd.print((int)t);
  lcd.print((char)223); // Ký hiệu độ
  lcd.print("C");

  // Dòng 2: Độ ẩm
  lcd.setCursor(0, 1);
  lcd.print("Do am:    ");
  lcd.print((int)h);
  lcd.print("%");

  delay(2000);
}`
    },

    // -----------------------------------------------------------------------
    // NHÓM 3: LẬP TRÌNH ARDUINO (ARDUINO STEM & SENSORS)
    // -----------------------------------------------------------------------
    {
      id: "lib-ard-basics-led",
      group: "arduino",
      category: "Lập trình Arduino",
      badge: "Arduino Uno",
      image: "assets/images/class-stem-arduino.png",
      title: "Nhập Môn Điện Tử & Bật Tắt Đèn LED Đầu Tiên Trên Arduino Uno",
      description: "Khám phá 'ngôn ngữ của điện' (Điện áp, Cực âm cực dương, Điện trở). Làm quen Breadboard, dây jumper và viết chương trình nhấp nháy LED đầu tiên.",
      contentDetail: `I. NHỮNG KHÁI NIỆM CƠ BẢN TRONG ĐIỆN TỬ (GIÁO TRÌNH PHẦN 2 - HOÀNG TUYÊN):
• Điện áp (Voltage - Vôn): Tương đương bồn nước cao hay thấp. Mạch Arduino Uno chạy ở mức 5V và 3.3V.
• Dòng điện (Current - Ampe): Dòng 'nước' các electron di chuyển trong dây dẫn. Dòng chảy từ cực dương (+) qua tải sinh công rồi về cực âm (GND) khép kín mạch.
• Điện trở (Resistor): Tương tự đoạn ống nước bị bóp nghẽn hoặc có rác cản trở dòng chảy. Điện trở 220 Ohm bắt buộc phải có để hạn chế dòng, bảo vệ đèn LED không bị cháy nổ.
• Bảng cắm thử nghiệm (Breadboard / Testboard): Các lỗ cắm trên cùng một hàng ngang được nối thông nhau bên dưới bằng lá đồng, giúp việc cắm mạch không cần hàn thiếc.

II. CHÂN TÍN HIỆU TRÊN ARDUINO UNO:
• Chân số 13 có sẵn một đèn LED nhỏ tích hợp trên bo mạch (ký hiệu L).
• Cực dương (+) của đèn LED chân dài hơn, cực âm (-) chân ngắn hơn.

III. CÁC BƯỚC THỰC HÀNH:
• Bước 1: Cắm Arduino Uno vào cổng USB máy tính để cấp nguồn 5V.
• Bước 2: Cắm chân dương LED vào chân D13, chân âm LED qua trở 220 Ohm vào chân GND.
• Bước 3: Nạp chương trình Blink và quan sát chu kỳ chớp tắt 1 giây.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/circuit-arduino.svg",
      model3dUrl: "https://wokwi.com/projects/new/arduino-uno",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch Arduino Uno R3", "Đèn LED đỏ 5mm", "Điện trở 220 Ohm", "Breadboard test mạch", "Dây cắm jumper đực-đực"],
      wiringGuide: "Chân 13 Arduino -> Điện trở 220 Ohm -> Chân (+) LED | Chân (-) LED -> Chân GND Arduino",
      codeSnippet: `// =========================================================================
// BÀI 1: BẬT TẮT ĐÈN LED ĐẦU TIÊN TRÊN ARDUINO UNO
// Giáo trình STEM Phần 2 - Hoàng Tuyên
// =========================================================================

const int PIN_LED = 13; // Sử dụng chân số 13

void setup() {
  // Cài đặt chân số 13 là đầu ra tín hiệu (OUTPUT)
  pinMode(PIN_LED, OUTPUT);
}

void loop() {
  digitalWrite(PIN_LED, HIGH); // Cấp điện áp 5V -> Đèn LED SÁNG
  delay(1000);                 // Chờ 1000 mili giây (1 giây)
  
  digitalWrite(PIN_LED, LOW);  // Ngắt điện áp (0V) -> Đèn LED TẮT
  delay(1000);                 // Chờ 1000 mili giây (1 giây)
}`
    },
    {
      id: "lib-ard-ldr-light",
      group: "arduino",
      category: "Lập trình Arduino",
      badge: "Quang trở LDR",
      image: "assets/images/robot_stem_arduino.png",
      title: "Cảm Biến Ánh Sáng (Quang Trở LDR): Hệ Thống Đèn Đường Thông Minh Tự Động Bật Tắt",
      description: "'Đôi mắt' quang học của Arduino: Đo cường độ ánh sáng môi trường qua chân Analog A0 và tự động bật đèn chiếu sáng khi trời tối.",
      contentDetail: `I. NGUYÊN LÝ HOẠT ĐỘNG CỦA CẢM BIẾN QUANG TRỞ (LDR):
• Quang trở (Light Dependent Resistor) là linh kiện điện tử có giá trị điện trở thay đổi theo cường độ ánh sáng chiếu vào.
• Khi trời sáng: Điện trở của LDR giảm mạnh (chỉ còn vài trăm Ohm), dòng điện đi qua dễ dàng.
• Khi trời tối: Điện trở của LDR tăng vọt lên hàng Mega Ohm, ngăn chặn dòng điện.

II. MẠCH CẦU PHÂN ÁP (VOLTAGE DIVIDER):
• Arduino Uno không thể đo trực tiếp điện trở, nó chỉ có thể đo điện áp từ 0V đến 5V thông qua bộ chuyển đổi tương tự sang số (ADC 10-bit) ở các chân Analog A0 - A5.
• Mắc nối tiếp LDR với một điện trở cố định 10k Ohm tạo thành mạch cầu phân áp. Điểm giữa nối vào chân A0 sẽ xuất ra giá trị từ 0 đến 1023 tương ứng với độ sáng tối của môi trường.

III. THUẬT TOÁN ĐIỀU KHIỂN:
• Đọc giá trị từ chân A0: int giaTriAnhSang = analogRead(A0).
• Nếu giá trị < 400 (Trời tối) -> Bật đèn đường (chân D12 HIGH).
• Nếu giá trị >= 400 (Trời sáng) -> Tắt đèn đường để tiết kiệm điện năng.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/circuit-arduino.svg",
      model3dUrl: "https://wokwi.com/projects/new/arduino-uno",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch Arduino Uno", "Quang trở LDR 5mm", "Điện trở 10k Ohm & Điện trở 220 Ohm", "Đèn LED siêu sáng 5mm", "Dây nối breadboard"],
      wiringGuide: "5V -> 1 chân LDR | Chân kia LDR nối chân A0 và nối qua trở 10k Ohm về GND | Đèn LED nối chân D12 qua trở 220 Ohm",
      codeSnippet: `// =========================================================================
// HỆ THỐNG ĐÈN ĐƯỜNG THÔNG MINH VỚI QUANG TRỞ LDR (ARDUINO UNO)
// Giáo trình STEM Thực Hành - Hoàng Tuyên
// =========================================================================

const int PIN_LDR = A0;  // Chân đọc cảm biến ánh sáng
const int PIN_DEN = 12;  // Chân điều khiển đèn đường
const int NGUONG_TOI = 400; // Ngưỡng nhận diện trời tối

void setup() {
  Serial.begin(9600);
  pinMode(PIN_DEN, OUTPUT);
}

void loop() {
  int anhSang = analogRead(PIN_LDR); // Đọc giá trị quang trở (0 - 1023)
  Serial.print("Cường độ ánh sáng: ");
  Serial.println(anhSang);

  if (anhSang < NGUONG_TOI) {
    digitalWrite(PIN_DEN, HIGH); // Trời tối -> Tự động bật đèn
    Serial.println("-> TRỜI TỐI: ĐÃ BẬT ĐÈN ĐƯỜNG");
  } else {
    digitalWrite(PIN_DEN, LOW);  // Trời sáng -> Tự động tắt đèn
    Serial.println("-> TRỜI SÁNG: ĐÃ TẮT ĐÈN");
  }

  delay(500); // Lấy mẫu mỗi 0.5 giây
}`
    },
    {
      id: "lib-ard-ultrasonic",
      group: "arduino",
      category: "Lập trình Arduino",
      badge: "Siêu âm HC-SR04",
      image: "assets/images/class-stem-arduino.png",
      title: "Cảm Biến Siêu Âm HC-SR04: 'Đôi Tai' Đo Khoảng Cách & Cảnh Báo Va Chạm",
      description: "Nguyên lý định vị sóng âm như loài dơi. Đo chính xác khoảng cách đến vật cản và kích hoạt còi báo động lùi xe thông minh.",
      contentDetail: `I. NGUYÊN LÝ ĐỊNH VỊ SÓNG ÂM CỦA HC-SR04:
• Module cảm biến gồm 2 loa siêu âm tròn nhỏ: 1 loa Phát sóng (Transmitter) và 1 loa Thu sóng (Receiver).
• Loa phát gửi đi một chùm sóng siêu âm tần số 40 kHz không nghe thấy được bằng tai người.
• Sóng âm truyền đi trong không khí với vận tốc khoảng 340 m/s (tương đương 0.034 cm/micro giây).
• Khi gặp vật cản, sóng dội ngược lại loa thu. Căn cứ vào thời gian đi và về, Arduino tính ra khoảng cách chính xác theo công thức: Khoảng cách = (Thời gian * 0.034) / 2.

II. SƠ ĐỒ CHÂN NỐI DÂY:
• Chân VCC nối nguồn 5V, chân GND nối GND.
• Chân Trig (Kích phát sóng) nối chân Digital 9.
• Chân Echo (Thu sóng phản hồi) nối chân Digital 10.
• Còi báo động (Buzzer) nối chân Digital 8.

III. ỨNG DỤNG THỰC TẾ:
• Hệ thống cảm biến cảnh báo lùi xe ô tô thông minh: Khoảng cách càng gần thì chuông bíp kêu càng dồn dập.
• Robot dò đường tránh vật cản tự hành.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/circuit-arduino.svg",
      model3dUrl: "https://wokwi.com/projects/new/arduino-uno",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch Arduino Uno", "Cảm biến siêu âm HC-SR04", "Còi báo Active Buzzer 5V", "Dây cắm breadboard"],
      wiringGuide: "Trig -> D9 | Echo -> D10 | Còi Buzzer (+) -> D8, (-) -> GND | VCC -> 5V, GND -> GND",
      codeSnippet: `// =========================================================================
// CẢM BIẾN SIÊU ÂM HC-SR04 ĐO KHOẢNG CÁCH & BÁO ĐỘNG LÙI XE
// Tác giả & Giảng viên: Hoàng Tuyên
// =========================================================================

const int PIN_TRIG = 9;
const int PIN_ECHO = 10;
const int PIN_COI = 8;

void setup() {
  Serial.begin(9600);
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  pinMode(PIN_COI, OUTPUT);
}

void loop() {
  // Phát xung siêu âm 10 micro giây ở chân Trig
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);

  // Đo thời gian xung phản hồi ở chân Echo
  long duration = pulseIn(PIN_ECHO, HIGH);

  // Tính khoảng cách theo đơn vị cm
  int distance = duration * 0.034 / 2;

  Serial.print("Khoảng cách: ");
  Serial.print(distance);
  Serial.println(" cm");

  // Nếu vật cản cách dưới 15cm -> Cảnh báo va chạm khẩn cấp
  if (distance > 0 && distance < 15) {
    digitalWrite(PIN_COI, HIGH);
    delay(100);
    digitalWrite(PIN_COI, LOW);
    delay(100);
  } else {
    digitalWrite(PIN_COI, LOW);
    delay(200);
  }
}`
    },
    {
      id: "lib-ard-traffic-light",
      group: "arduino",
      category: "Lập trình Arduino",
      badge: "Đèn Giao Thông & Ngắt",
      image: "assets/images/lib-traffic-light.svg",
      title: "Hệ Thống Đèn Giao Thông Ngã Tư Kèm Nút Ưu Tiên Người Đi Bộ (Ngắt Interrupt)",
      description: "Mô phỏng hệ thống đèn giao thông 3 màu (Xanh, Vàng, Đỏ). Tích hợp nút bấm ngắt (Interrupt) nhường đường an toàn cho người đi bộ qua đường.",
      contentDetail: `I. KHÁI NIỆM NGẮT PHẦN CỨNG (HARDWARE INTERRUPT):
• Trong lập trình thông thường, nếu chương trình đang ở trong hàm delay(5000) của đèn đỏ, vi điều khiển sẽ hoàn toàn 'bị mù' và không thể phản hồi nút bấm của người đi bộ.
• Ngắt phần cứng (Interrupt) cho phép tín hiệu từ nút bấm ngay lập tức 'tạm dừng' chương trình chính để chuyển sang thực thi chương trình con xử lý ngắt khẩn cấp, sau đó quay lại chạy tiếp.
• Trên Arduino Uno, chân ngắt phần cứng tiêu chuẩn là chân số 2 (Interrupt 0) và chân số 3 (Interrupt 1).

II. CHU KỲ HOẠT ĐỘNG:
1. Trạng thái bình thường: Đèn Xanh 5 giây -> Đèn Vàng 2 giây -> Đèn Đỏ 5 giây.
2. Trạng thái có người đi bộ: Người đi bộ bấm nút tại chân số 2 -> Kích hoạt ngắt FALLING -> Lập tức chuyển đèn Vàng rồi chuyển Đỏ để người đi bộ qua đường an toàn trong 6 giây.`,
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      diagramImage: "assets/images/lib-traffic-light.svg",
      model3dUrl: "https://wokwi.com/projects/new/arduino-uno",
      pdfUrl: "https://wokwi.com",
      hardware: ["Bo mạch Arduino Uno", "3x Đèn LED (Đỏ, Vàng, Xanh)", "Nút nhấn 4 chân", "4x Điện trở 220 Ohm & 10k Ohm", "Breadboard"],
      wiringGuide: "LED Đỏ -> D11 | LED Vàng -> D12 | LED Xanh -> D13 | Nút nhấn người đi bộ -> D2 (Ngắt số 0)",
      codeSnippet: `// =========================================================================
// HỆ THỐNG ĐÈN GIAO THÔNG THÔNG MINH KÈM NGẮT NÚT BẤM (ARDUINO UNO)
// Giảng dạy & Biên soạn: Hoàng Tuyên
// =========================================================================

const int PIN_RED = 11;
const int PIN_YELLOW = 12;
const int PIN_GREEN = 13;
const int PIN_BUTTON = 2; // Chân ngắt ngoài số 0

volatile bool yeuCauQuaDuong = false;

void setup() {
  pinMode(PIN_RED, OUTPUT);
  pinMode(PIN_YELLOW, OUTPUT);
  pinMode(PIN_GREEN, OUTPUT);
  pinMode(PIN_BUTTON, INPUT_PULLUP);

  // Kích hoạt ngắt khi nhấn nút (tín hiệu chuyển từ HIGH xuống LOW)
  attachInterrupt(digitalPinToInterrupt(PIN_BUTTON), xuLyNhanNut, FALLING);
}

void loop() {
  if (yeuCauQuaDuong) {
    choNguoiDiBoQuaDuong();
    yeuCauQuaDuong = false;
  }

  // Chu kỳ đèn giao thông bình thường
  datDen(LOW, LOW, HIGH); delay(4000); // Đèn Xanh 4s
  datDen(LOW, HIGH, LOW); delay(1500); // Đèn Vàng 1.5s
  datDen(HIGH, LOW, LOW); delay(4000); // Đèn Đỏ 4s
}

void datDen(int do1, int vang1, int xanh1) {
  digitalWrite(PIN_RED, do1);
  digitalWrite(PIN_YELLOW, vang1);
  digitalWrite(PIN_GREEN, xanh1);
}

void xuLyNhanNut() {
  yeuCauQuaDuong = true;
}

void choNguoiDiBoQuaDuong() {
  datDen(LOW, HIGH, LOW); delay(1500); // Chuyển Vàng
  datDen(HIGH, LOW, LOW); delay(6000); // Đèn Đỏ 6s cho người đi bộ qua đường an toàn
}`
    }
  ]
};
