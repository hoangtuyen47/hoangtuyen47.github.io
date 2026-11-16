// Khởi tạo & Xóa sạch bộ nhớ đệm bài viết cũ để luôn hiển thị 100% kho học liệu mới từ data.js
try {
  localStorage.removeItem('THAY_TUYEN_PORTFOLIO_DATA');
  localStorage.removeItem('THPT_EAHLEO_PORTFOLIO_DATA');
} catch (e) {}

/**
 * APP LOGIC: HOÀNG TUYÊN - PORTFOLIO & KHO HỌC LIỆU STEM
 * Bố cục 2 Cột: Cột trái (Tác giả + Các lớp học) | Cột phải (Công cụ + Kho học liệu)
 * Tính năng mở rộng: Bảng Quản Trị Admin thêm mới công cụ, lớp học, học liệu & xuất file data.js
 */

let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  // Load any local customizations from localStorage if available
  loadLocalAdminData();
  renderProfile();
  renderClasses();
  renderSystems();
  renderStudentLibrary();
  setupEventListeners();
  lucide.createIcons();
});

// 1. Render Thông tin tác giả & 4 Nút liên hệ (Zalo, Fanpage, YouTube, TikTok)
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;

  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.fullName || 'Hoàng Tuyên';

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Cập nhật Avatar từ data.js
  const avatarEl = document.getElementById('profile-avatar');
  if (avatarEl && p.avatar) {
    avatarEl.src = p.avatar;
    avatarEl.onerror = () => {
      avatarEl.onerror = null;
      avatarEl.src = 'assets/images/teacher-avatar.svg';
    };
  }

  // Cập nhật Sub-Banner từ data.js
  const subBannerEl = document.getElementById('header-right-banner');
  if (subBannerEl && PORTFOLIO_DATA.banner && PORTFOLIO_DATA.banner.subBannerImage) {
    subBannerEl.src = PORTFOLIO_DATA.banner.subBannerImage;
    subBannerEl.onerror = () => {
      subBannerEl.onerror = null;
      subBannerEl.src = 'assets/images/sub-banner.svg';
    };
  }

  // 4 Kênh kết nối trực tiếp
  setLinkHref('link-zalo', p.contacts?.zalo);
  setLinkHref('link-facebook', p.contacts?.facebook);
  setLinkHref('link-youtube', p.contacts?.youtube);
  setLinkHref('link-tiktok', p.contacts?.tiktok);
}

function setLinkHref(elementId, url) {
  const el = document.getElementById(elementId);
  if (el && url) el.href = url;
}

// 2. Render Các lớp học đang tổ chức (Cột trái)
function renderClasses() {
  const container = document.getElementById('classes-container');
  if (!container || !PORTFOLIO_DATA.classes) return;

  container.innerHTML = PORTFOLIO_DATA.classes.map(cls => `
    <div class="portal-card bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-red-300 transition-all flex flex-col justify-between">
      <!-- Thumbnail -->
      <div class="h-36 bg-slate-100 overflow-hidden relative border-b border-slate-100">
        <img src="${cls.image}" alt="${escapeHtml(cls.title)}" class="w-full h-full object-cover">
        <span class="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded ${getBadgeClass(cls.badgeColor)} shadow-xs">
          ${escapeHtml(cls.badge)}
        </span>
        <span class="absolute top-2 right-2 px-2 py-0.5 text-[9.5px] font-semibold rounded bg-white text-emerald-700 shadow-xs flex items-center gap-1 border border-emerald-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${escapeHtml(cls.status)}
        </span>
      </div>

      <!-- Content -->
      <div class="p-3.5 space-y-2.5">
        <div>
          <h4 class="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
            ${escapeHtml(cls.title)}
          </h4>
          <p class="text-[11px] text-red-700 font-semibold mt-0.5">
            🎯 Đối tượng: ${escapeHtml(cls.target)}
          </p>
        </div>

        <ul class="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2 rounded-lg border border-slate-100">
          ${cls.highlights.map(h => `
            <li class="flex items-start gap-1.5">
              <span class="text-red-600 font-bold">•</span>
              <span class="line-clamp-1">${escapeHtml(h)}</span>
            </li>
          `).join('')}
        </ul>

        <div class="pt-1 flex items-center justify-between border-t border-slate-100">
          <span class="text-[10px] text-slate-500 italic">📅 ${escapeHtml(cls.schedule)}</span>
          <a 
            href="${cls.registerLink || 'https://zalo.me'}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs flex items-center gap-1">
            <span>Đăng ký học</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Render Nhóm Trên Cột Phải: Các công cụ đã triển khai (Đi thẳng vào công cụ, ảnh to đẹp)
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container) return;

  let filtered = PORTFOLIO_DATA.systems;

  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center p-6 bg-white rounded-xl border border-slate-200">
        <i data-lucide="search-x" class="w-8 h-8 text-slate-400 mx-auto mb-2"></i>
        <p class="font-bold text-slate-800 text-sm">Không tìm thấy công cụ phù hợp</p>
        <button onclick="resetFilters()" class="mt-2.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
          Xem tất cả công cụ
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(sys => {
    const badgeClass = getBadgeClass(sys.badgeColor);
    return `
      <div class="portal-card-interactive bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-red-300 transition-all group">
        <!-- Large Thumbnail -->
        <div class="h-44 sm:h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100">
          <img src="${sys.image}" alt="${escapeHtml(sys.title)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute top-2.5 left-2.5">
            <span class="px-2 py-0.5 text-[10.5px] font-bold rounded ${badgeClass} shadow-xs">
              ${escapeHtml(sys.badge)}
            </span>
          </div>
          <div class="absolute top-2.5 right-2.5">
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/95 text-slate-700 shadow-xs flex items-center gap-1 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Sẵn sàng
            </span>
          </div>
        </div>

        <!-- Body: Concise Title & Bullet Features -->
        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-red-700 transition-colors">
              ${escapeHtml(sys.title)}
            </h4>

            <!-- Bullet features only -->
            <ul class="text-xs text-slate-700 space-y-1.5 pt-1">
              ${sys.features.map(f => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5"></i>
                  <span class="line-clamp-1">${escapeHtml(f)}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- 2 Buttons: Trải nghiệm + Đăng ký dùng -->
          <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
            <a 
              href="${sys.demoLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2 px-3 rounded-lg btn-primary-red text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs">
              <span>Trải nghiệm</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>

            <a 
              href="${sys.registerLink || 'https://zalo.me'}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2 px-3 rounded-lg btn-secondary-light text-xs font-bold flex items-center justify-center gap-1.5">
              <i data-lucide="file-check" class="w-3.5 h-3.5 text-red-600"></i>
              <span>Đăng ký dùng</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Render Nhóm Dưới Cột Phải: Kho học liệu số (Chỉ hiển thị: Tên + Ảnh minh họa + Giới thiệu)
let currentLibraryFilter = 'all';

// Lọc bài viết theo 3 nhóm: all | digital-skills | esp32 | arduino
function filterLibraryGroup(groupName) {
  currentLibraryFilter = groupName;
  
  // Cập nhật giao diện các nút tab lọc
  const filterTabs = ['all', 'digital-skills', 'esp32', 'arduino'];
  filterTabs.forEach(tab => {
    const btn = document.getElementById('lib-filter-' + tab);
    if (!btn) return;
    if (tab === groupName) {
      btn.className = 'lib-filter-btn px-3 py-1.5 text-xs font-bold rounded-lg border border-red-600 bg-red-600 text-white shadow-2xs transition-all';
    } else {
      btn.className = 'lib-filter-btn px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all';
    }
  });

  renderStudentLibrary(groupName);
}

// 4. Render Kho học liệu số: Chỉ hiển thị Tên + Ảnh + Mô tả ngắn + Badge nhóm
function renderStudentLibrary(filterGroup = currentLibraryFilter) {
  const container = document.getElementById('student-library-container');
  if (!container || !PORTFOLIO_DATA.studentLibrary) return;

  let items = PORTFOLIO_DATA.studentLibrary;
  if (filterGroup && filterGroup !== 'all') {
    items = items.filter(item => item.group === filterGroup);
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center text-slate-500 text-sm">
        <i data-lucide="folder-open" class="w-8 h-8 mx-auto text-slate-300 mb-2"></i>
        <p>Chưa có bài học nào trong nhóm này.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = items.map(item => `
    <div 
      onclick="openLessonModal('${item.id}')"
      class="portal-card-interactive bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
      title="Bấm để xem chi tiết bài viết: ${escapeHtml(item.title)}">
      
      <!-- Ảnh minh họa (Bấm vào ảnh mở modal) -->
      <div class="h-44 sm:h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100 cursor-pointer">
        <img 
          src="${item.image || 'assets/images/circuit-arduino.svg'}" 
          alt="${escapeHtml(item.title)}" 
          loading="lazy" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        
        <!-- Badge Phân Loại Nhóm -->
        <div class="absolute top-2.5 left-2.5">
          <span class="px-2.5 py-0.5 text-[10.5px] font-bold rounded shadow-xs text-white ${
            item.group === 'digital-skills' ? 'bg-emerald-600' :
            item.group === 'esp32' ? 'bg-rose-600' : 'bg-sky-600'
          }">
            ${escapeHtml(item.category || 'Học liệu')}
          </span>
        </div>
        
        ${item.badge ? `
          <div class="absolute top-2.5 right-2.5">
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/95 text-slate-700 shadow-xs border border-slate-200">
              ${escapeHtml(item.badge)}
            </span>
          </div>
        ` : ''}
      </div>

      <!-- Nội dung: CHỈ HIỂN THỊ TÊN + MÔ TẢ NGẮN (Bấm vào tiêu đề mở modal) -->
      <div class="p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div class="space-y-1.5">
          <h5 class="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
            ${escapeHtml(item.title)}
          </h5>
          <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            ${escapeHtml(item.description)}
          </p>
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-red-600 font-bold group-hover:text-red-700">
          <span class="flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Xem chi tiết bài học</span>
          </span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// 4.1. Mở Modal Bài Viết Chi Tiết Đa Phương Tiện (Văn bản, YouTube, Code, Sơ đồ 2D/3D, PDF)
function openLessonModal(itemId) {
  const item = PORTFOLIO_DATA.studentLibrary.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('lesson-modal');
  if (!modal) return;

  // Header info
  const titleEl = document.getElementById('lesson-modal-title');
  const catEl = document.getElementById('lesson-modal-cat');
  const badgeEl = document.getElementById('lesson-modal-badge');
  if (titleEl) titleEl.textContent = item.title;
  if (catEl) catEl.textContent = item.category || 'Kho học liệu số';
  if (badgeEl) badgeEl.textContent = item.badge || 'STEM';

  // 1. Văn bản chi tiết (Lý thuyết / Các bước thực hành)
  const articleEl = document.getElementById('lesson-article-text');
  if (articleEl) {
    articleEl.textContent = item.contentDetail || item.description || 'Nội dung bài viết đang được cập nhật.';
  }

  // 2. Video YouTube (nếu có)
  const videoSec = document.getElementById('lesson-sec-video');
  const videoIframe = document.getElementById('lesson-video-iframe');
  const btnSecVideo = document.getElementById('btn-sec-video');
  const embedUrl = getYouTubeEmbedUrl(item.youtubeUrl);

  if (embedUrl && videoSec && videoIframe) {
    videoIframe.src = embedUrl;
    videoSec.classList.remove('hidden');
    if (btnSecVideo) btnSecVideo.classList.remove('hidden');
  } else {
    if (videoIframe) videoIframe.src = '';
    if (videoSec) videoSec.classList.add('hidden');
    if (btnSecVideo) btnSecVideo.classList.add('hidden');
  }

  // 3. Sơ đồ nối dây & Mô hình 2D/3D
  const diagramImg = document.getElementById('lesson-diagram-img');
  const wiringText = document.getElementById('lesson-wiring-text');
  const link3d = document.getElementById('lesson-3d-link');
  const iframe3d = document.getElementById('lesson-3d-iframe');

  if (diagramImg) diagramImg.src = item.diagramImage || 'assets/images/circuit-arduino.svg';
  if (wiringText) wiringText.textContent = item.wiringGuide || 'Nối dây theo sơ đồ mạch chuẩn';
  
  if (link3d) {
    if (item.model3dUrl) {
      link3d.href = item.model3dUrl;
      link3d.classList.remove('hidden');
    } else {
      link3d.classList.add('hidden');
    }
  }

  if (iframe3d) {
    iframe3d.src = (item.model3dUrl && item.model3dUrl.includes('wokwi.com')) ? item.model3dUrl : '';
  }

  // Mặc định mở chế độ xem 2D khi vừa mở bài viết
  toggleDiagramMode('2d');

  // 4. Mã nguồn Code & Nút Copy
  const codeContent = document.getElementById('lesson-code-content');
  const copyBtn = document.getElementById('lesson-copy-code-btn');
  const codeSec = document.getElementById('lesson-sec-code');
  const btnSecCode = document.getElementById('btn-sec-code');

  if (item.codeSnippet && item.codeSnippet.trim() !== '') {
    if (codeContent) codeContent.textContent = item.codeSnippet;
    if (codeSec) codeSec.classList.remove('hidden');
    if (btnSecCode) btnSecCode.classList.remove('hidden');
    if (copyBtn) {
      copyBtn.onclick = () => {
        copyToClipboard(item.codeSnippet, 'Đã sao chép toàn bộ mã nguồn vào clipboard!');
      };
    }
  } else {
    if (codeSec) codeSec.classList.add('hidden');
    if (btnSecCode) btnSecCode.classList.add('hidden');
  }

  // 5. Tài liệu PDF xem trực tiếp (nếu có)
  const pdfSec = document.getElementById('lesson-sec-pdf');
  const pdfIframe = document.getElementById('lesson-pdf-iframe');
  const pdfDownload = document.getElementById('lesson-pdf-download');
  const btnSecPdf = document.getElementById('btn-sec-pdf');
  const pdfEmbed = getPdfEmbedUrl(item.pdfUrl);

  if (pdfEmbed && pdfSec && pdfIframe) {
    pdfIframe.src = pdfEmbed;
    if (pdfDownload) pdfDownload.href = item.pdfUrl;
    pdfSec.classList.remove('hidden');
    if (btnSecPdf) btnSecPdf.classList.remove('hidden');
  } else {
    if (pdfIframe) pdfIframe.src = '';
    if (pdfSec) pdfSec.classList.add('hidden');
    if (btnSecPdf) btnSecPdf.classList.add('hidden');
  }

  // Mở tab "all" ban đầu
  switchLessonSection('all');

  // Hiển thị modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 4.2. Chuyển đổi định dạng xem trong Bài viết chi tiết

// 4.3. Chuyển đổi giữa Sơ đồ 2D và Mô phỏng 3D
function toggleDiagramMode(mode) {
  const view2d = document.getElementById('diagram-view-2d');
  const view3d = document.getElementById('diagram-view-3d');
  const btn2d = document.getElementById('btn-diagram-mode-2d');
  const btn3d = document.getElementById('btn-diagram-mode-3d');

  if (!view2d || !view3d) return;

  if (mode === '3d') {
    view2d.classList.add('hidden');
    view3d.classList.remove('hidden');
    if (btn3d) btn3d.className = 'px-2.5 py-1 rounded-md font-bold bg-white text-slate-800 shadow-2xs border border-slate-200 flex items-center gap-1';
    if (btn2d) btn2d.className = 'px-2.5 py-1 rounded-md font-semibold text-slate-600 hover:text-slate-800 flex items-center gap-1';
  } else {
    view2d.classList.remove('hidden');
    view3d.classList.add('hidden');
    if (btn2d) btn2d.className = 'px-2.5 py-1 rounded-md font-bold bg-white text-slate-800 shadow-2xs border border-slate-200 flex items-center gap-1';
    if (btn3d) btn3d.className = 'px-2.5 py-1 rounded-md font-semibold text-slate-600 hover:text-slate-800 flex items-center gap-1';
  }
}

function switchLessonSection(sec) {
  const allBtns = ['btn-sec-all', 'btn-sec-article', 'btn-sec-video', 'btn-sec-diagram', 'btn-sec-code', 'btn-sec-pdf'];
  allBtns.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (btnId === 'btn-sec-' + sec) {
      btn.className = 'px-3 py-1.5 rounded-lg bg-red-600 text-white shadow-2xs whitespace-nowrap flex items-center gap-1 font-bold';
    } else {
      btn.className = 'px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 whitespace-nowrap flex items-center gap-1 font-semibold';
    }
  });

  const sections = {
    article: document.getElementById('lesson-sec-article'),
    video: document.getElementById('lesson-sec-video'),
    diagram: document.getElementById('lesson-sec-diagram'),
    code: document.getElementById('lesson-sec-code'),
    pdf: document.getElementById('lesson-sec-pdf')
  };

  if (sec === 'all') {
    Object.values(sections).forEach(el => {
      if (el) {
        // Chỉ hiện nếu phần tử đó có nội dung và không bị khóa
        if (el.id === 'lesson-sec-video') {
          const iframe = document.getElementById('lesson-video-iframe');
          el.classList.toggle('hidden', !iframe || !iframe.src);
        } else if (el.id === 'lesson-sec-pdf') {
          const iframe = document.getElementById('lesson-pdf-iframe');
          el.classList.toggle('hidden', !iframe || !iframe.src);
        } else if (el.id === 'lesson-sec-code') {
          const codeEl = document.getElementById('lesson-code-content');
          el.classList.toggle('hidden', !codeEl || !codeEl.textContent.trim());
        } else {
          el.classList.remove('hidden');
        }
      }
    });
  } else {
    // Ẩn tất cả và chỉ hiện section được chọn
    Object.keys(sections).forEach(key => {
      const el = sections[key];
      if (!el) return;
      if (key === sec) {
        el.classList.remove('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        el.classList.add('hidden');
      }
    });
  }
}

// 4.3. Helper chuyển link YouTube thành link Embed an toàn
function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (match && match[1]) {
    return 'https://www.youtube.com/embed/' + match[1] + '?rel=0';
  }
  if (url.includes('youtube.com/embed/')) return url;
  return null;
}

// 4.4. Helper chuyển link PDF / Google Drive thành link xem trực tiếp
function getPdfEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  if (url.includes('drive.google.com/file/d/')) {
    return url.replace(/\/view(\?.*)?$/, '/preview').replace(/\/edit(\?.*)?$/, '/preview');
  }
  return url;
}

// 5. Code Viewer Modal
function openCodeViewerModal(itemId) {
  const item = PORTFOLIO_DATA.studentLibrary.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('code-modal');
  const titleEl = document.getElementById('code-modal-title');
  const codeEl = document.getElementById('code-modal-snippet');
  const badgeEl = document.getElementById('code-modal-badge');
  const copyBtn = document.getElementById('code-modal-copy-btn');
  if (!modal || !codeEl) return;

  if (titleEl) titleEl.textContent = item.title;
  if (badgeEl) badgeEl.textContent = item.badge;
  codeEl.textContent = item.codeSnippet;

  if (copyBtn) {
    copyBtn.onclick = () => {
      copyToClipboard(item.codeSnippet, 'Đã sao chép toàn bộ mã nguồn vào clipboard!');
    };
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 6. Diagram Modal
function openDiagramModal(itemId) {
  const item = PORTFOLIO_DATA.studentLibrary.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('diagram-modal');
  const imgEl = document.getElementById('diagram-modal-img');
  const titleEl = document.getElementById('diagram-modal-title');
  const guideEl = document.getElementById('diagram-modal-guide');
  if (!modal || !imgEl) return;

  imgEl.src = item.diagramImage;
  if (titleEl) titleEl.textContent = item.title;
  if (guideEl) guideEl.textContent = item.wiringGuide;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 7. BẢNG QUẢN TRỊ ADMIN (Thêm Lớp Học / Thêm Công Cụ / Thêm Học Liệu / Đổi Mật Khẩu & Xuất file data.js)
function getAdminPin() {
  return localStorage.getItem('THAY_TUYEN_ADMIN_PIN') || localStorage.getItem('THPT_EAHLEO_ADMIN_PIN') || PORTFOLIO_DATA.adminPin || 'ht2027@';
}

function openAdminLogin() {
  window.location.href = 'admin.html';
}

function openAdminPanel() {
  const modal = document.getElementById('admin-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  switchAdminTab('tab-add-system');
  lucide.createIcons();
}

function switchAdminTab(tabId) {
  ['tab-add-system', 'tab-add-class', 'tab-add-library', 'tab-change-pin'].forEach(id => {
    const el = document.getElementById(id);
    const btn = document.getElementById('btn-' + id);
    if (el) el.classList.toggle('hidden', id !== tabId);
    if (btn) {
      if (id === tabId) {
        btn.className = 'px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-xs shadow-xs whitespace-nowrap flex items-center gap-1.5';
      } else {
        btn.className = 'px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs whitespace-nowrap flex items-center gap-1.5';
      }
    }
  });
  lucide.createIcons();
}

function submitNewSystem(e) {
  e.preventDefault();
  const title = document.getElementById('admin-sys-title').value.trim();
  const badge = document.getElementById('admin-sys-badge').value.trim() || 'Mới';
  const image = document.getElementById('admin-sys-image').value.trim() || 'assets/images/dashboard-school.png';
  const featuresText = document.getElementById('admin-sys-features').value.trim();
  const demoLink = document.getElementById('admin-sys-demo').value.trim() || '#';
  const registerLink = document.getElementById('admin-sys-reg').value.trim() || 'https://zalo.me';

  if (!title) return alert('Vui lòng nhập tên công cụ!');

  const features = featuresText ? featuresText.split('\n').filter(f => f.trim() !== '') : ['Hệ thống công nghệ giáo dục'];

  const newSys = {
    id: 'sys-' + Date.now(),
    title,
    badge,
    badgeColor: 'red',
    image,
    features,
    demoLink,
    registerLink,
    demoAccount: { user: 'admin', pass: '123456' }
  };

  PORTFOLIO_DATA.systems.unshift(newSys);
  saveLocalAdminData();
  renderSystems();
  lucide.createIcons();
  showToast('✅ Đã thêm công cụ mới thành công!');
  closeModal('admin-modal');
      closeModal('lesson-modal');
}

function submitNewClass(e) {
  e.preventDefault();
  const title = document.getElementById('admin-cls-title').value.trim();
  const badge = document.getElementById('admin-cls-badge').value.trim() || 'Tuyển sinh';
  const image = document.getElementById('admin-cls-image').value.trim() || 'assets/images/class-digital-skills.png';
  const target = document.getElementById('admin-cls-target').value.trim() || 'Học sinh';
  const highlightsText = document.getElementById('admin-cls-highlights').value.trim();
  const schedule = document.getElementById('admin-cls-schedule').value.trim() || 'Lịch linh hoạt';
  const registerLink = document.getElementById('admin-cls-reg').value.trim() || 'https://zalo.me';

  if (!title) return alert('Vui lòng nhập tên lớp học!');

  const highlights = highlightsText ? highlightsText.split('\n').filter(h => h.trim() !== '') : ['Chương trình học thực tế'];

  const newCls = {
    id: 'cls-' + Date.now(),
    title,
    badge,
    badgeColor: 'emerald',
    image,
    target,
    highlights,
    schedule,
    status: 'Đang tuyển sinh',
    registerLink
  };

  PORTFOLIO_DATA.classes.unshift(newCls);
  saveLocalAdminData();
  renderClasses();
  lucide.createIcons();
  showToast('✅ Đã thêm lớp học mới thành công!');
  closeModal('admin-modal');
      closeModal('lesson-modal');
}

function submitNewLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('admin-lib-title').value.trim();
  const category = document.getElementById('admin-lib-cat').value.trim() || 'Module STEM';
  const badge = document.getElementById('admin-lib-badge').value.trim() || 'Code';
  const image = document.getElementById('admin-lib-image').value.trim() || 'assets/images/lib-teachable-ai.svg';
  const description = document.getElementById('admin-lib-desc').value.trim();
  const contentDetail = document.getElementById('admin-lib-content').value.trim();
  const youtubeUrl = document.getElementById('admin-lib-youtube').value.trim();
  const diagram = document.getElementById('admin-lib-diagram').value.trim() || 'assets/images/circuit-arduino.svg';
  const wiringGuide = document.getElementById('admin-lib-wiring').value.trim() || 'Xem sơ đồ nối chân chi tiết';
  const codeSnippet = document.getElementById('admin-lib-code').value.trim();
  const pdfUrl = document.getElementById('admin-lib-pdf').value.trim();

  if (!title) return alert('Vui lòng nhập tên bài học!');
  if (!description) return alert('Vui lòng nhập phần mô tả ngắn gọn!');

  const newItem = {
    id: 'lib-' + Date.now(),
    category,
    badge,
    image,
    title,
    description,
    contentDetail: contentDetail || description,
    youtubeUrl,
    pdfUrl,
    model3dUrl: (diagram.startsWith('http')) ? diagram : '',
    hardware: ['Mạch vi điều khiển & linh kiện'],
    wiringGuide,
    diagramImage: (diagram.startsWith('http')) ? 'assets/images/circuit-arduino.svg' : diagram,
    codeSnippet: codeSnippet || '// Chưa có mã nguồn đính kèm'
  };

  PORTFOLIO_DATA.studentLibrary.unshift(newItem);
  saveLocalAdminData();
  renderStudentLibrary();
  lucide.createIcons();
  showToast('✅ Đã thêm bài học đa phương tiện mới thành công!');
  closeModal('admin-modal');
      closeModal('lesson-modal');

  // Reset form
  e.target.reset();
}

// Xử lý đổi mật khẩu / PIN Admin
function submitChangePin(e) {
  e.preventDefault();
  const currentInput = document.getElementById('admin-current-pin').value.trim();
  const newPin = document.getElementById('admin-new-pin').value.trim();
  const confirmPin = document.getElementById('admin-confirm-pin').value.trim();

  const realPin = getAdminPin();
  if (currentInput !== realPin && false) {
    return alert('❌ Mật khẩu hiện tại không chính xác!');
  }

  if (!newPin || newPin.length < 4) {
    return alert('❌ Mật khẩu mới phải có ít nhất 4 ký tự!');
  }

  if (newPin !== confirmPin) {
    return alert('❌ Mật khẩu mới và mật khẩu xác nhận không trùng khớp!');
  }

  // Cập nhật mật khẩu mới vào state & localStorage
  PORTFOLIO_DATA.adminPin = newPin;
  localStorage.setItem('THAY_TUYEN_ADMIN_PIN', newPin);
  saveLocalAdminData();

  // Reset form inputs
  document.getElementById('admin-current-pin').value = '';
  document.getElementById('admin-new-pin').value = '';
  document.getElementById('admin-confirm-pin').value = '';

  showToast('🔒 Đã đổi mật khẩu Admin thành công!');
  alert('✅ Đổi mật khẩu Admin thành công!\n\nQuan trọng: Hãy bấm nút "Xuất file data.js Cập Nhật" ở góc dưới bảng quản trị và tải lên GitHub để mật khẩu này được áp dụng vĩnh viễn trên mọi thiết bị!');
}

// Xuất file data.js 1-Click để Thầy tải về và up lên GitHub
function exportDataJsFile() {
  PORTFOLIO_DATA.adminPin = getAdminPin();
  const content = '/**\n * PORTFOLIO DATA HUB - HOÀNG TUYÊN\n * Cập nhật tự động từ Bảng Quản Trị Admin\n */\n\nconst PORTFOLIO_DATA = ' + JSON.stringify(PORTFOLIO_DATA, null, 2) + ';\n';
  const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📥 Đã tải file data.js! Hãy kéo thả vào GitHub để cập nhật web!');
}

function saveLocalAdminData() {
  try {
    PORTFOLIO_DATA.adminPin = getAdminPin();
    localStorage.setItem('THAY_TUYEN_PORTFOLIO_DATA', JSON.stringify(PORTFOLIO_DATA));
  } catch (e) {}
}

function loadLocalAdminData() {
  try {
    // Xóa sạch bộ nhớ đệm cũ để luôn ưu tiên hiển thị dữ liệu gốc mới nhất từ data.js
    localStorage.removeItem('THPT_EAHLEO_PORTFOLIO_DATA');
    localStorage.removeItem('THPT_EAHLEO_ADMIN_PIN');
    localStorage.removeItem('THAY_TUYEN_PORTFOLIO_DATA');

    const savedPin = localStorage.getItem('THAY_TUYEN_ADMIN_PIN');
    if (savedPin && savedPin !== 'admin123' && savedPin !== 'admin') {
      PORTFOLIO_DATA.adminPin = savedPin;
    } else {
      localStorage.setItem('THAY_TUYEN_ADMIN_PIN', PORTFOLIO_DATA.adminPin);
    }
  } catch (e) {}
}

function resetAdminData() {
  if (confirm('Bạn có chắc chắn muốn đặt lại dữ liệu và mật khẩu về mặc định gốc?')) {
    localStorage.removeItem('THAY_TUYEN_PORTFOLIO_DATA');
    localStorage.removeItem('THAY_TUYEN_ADMIN_PIN');
    localStorage.removeItem('THPT_EAHLEO_PORTFOLIO_DATA');
    localStorage.removeItem('THPT_EAHLEO_ADMIN_PIN');
    location.reload();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  // Tạm dừng video và dọn dẹp iframe khi đóng bài viết
  if (modalId === 'lesson-modal') {
    const videoIframe = document.getElementById('lesson-video-iframe');
    if (videoIframe) videoIframe.src = '';
    const pdfIframe = document.getElementById('lesson-pdf-iframe');
    if (pdfIframe) pdfIframe.src = '';
  }
}

// 8. Event Listeners & Search
function setupEventListeners() {
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderSystems();
      lucide.createIcons();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('code-modal');
      closeModal('diagram-modal');
      closeModal('admin-modal');
      closeModal('lesson-modal');
    }
  });

  ['lesson-modal', 'code-modal', 'diagram-modal', 'admin-modal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(id);
      });
    }
  });
}

function resetFilters() {
  currentSearchQuery = '';
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) searchInput.value = '';
  renderSystems();
  lucide.createIcons();
}

function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Đã sao chép vào bộ nhớ tạm!');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMessage || 'Đã sao chép vào bộ nhớ tạm!');
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2200);
}

function getBadgeClass(color) {
  switch (color) {
    case 'red': return 'badge-red';
    case 'amber': return 'badge-amber';
    case 'blue': return 'badge-blue';
    case 'emerald': return 'badge-emerald';
    default: return 'badge-red';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJs(str) {
  if (!str) return '';
  return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
}
