const fs = require('fs');
const path = require('path');

// 1. Update head.ejs
const headPath = path.join(__dirname, '..', 'views', 'partials', 'head.ejs');
let headCode = fs.readFileSync(headPath, 'utf8');

const targetHead = `    /* Glassmorphism Styles */
    .glass-navbar {
        background: #0b132b;
    }`;

const replaceHead = `    /* Precise Mobile & Global Layout Reset */
    html, body {
        overflow-x: hidden;
        max-width: 100vw;
    }
    /* Glassmorphism / Solid Header Styles */
    .glass-navbar {
        background: #0b132b;
    }`;

if (headCode.includes(targetHead)) {
    headCode = headCode.replace(targetHead, replaceHead);
    fs.writeFileSync(headPath, headCode, 'utf8');
    console.log('head.ejs updated successfully');
} else {
    console.log('targetHead not found in head.ejs, skipping or checking...');
}

// 2. Update navbar.ejs
const navbarPath = path.join(__dirname, '..', 'views', 'partials', 'navbar.ejs');
let navCode = fs.readFileSync(navbarPath, 'utf8');

// Replace header container height and brand alignment
const oldHeaderStart = `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">

                <!-- School Brand / Logo -->
                <a href="/" class="flex items-center space-x-3.5 group flex-shrink-0">
                    <div
                        class="w-12 h-12 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center font-black text-blue-950 text-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/20 flex-shrink-0 border border-white/30 overflow-hidden p-1 shrink-0">
                        <% if (profilData && profilData.logo_sekolah) { %>
                            <img src="/uploads/profil/<%= profilData.logo_sekolah %>" alt="Logo <%= profilData.nama_sekolah || 'SMPN 1 Rantepao' %>" class="w-full h-full object-contain" onerror="this.onerror=null; this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                            <span class="hidden">S1</span>
                        <% } else { %>
                            <span>S1</span>
                        <% } %>
                    </div>
                    <div>
                        <h1
                            class="font-black text-base sm:text-lg leading-tight tracking-tight text-white group-hover:text-amber-400 transition-colors">
                            <%= profilData.nama_sekolah || 'SMPN 1 RANTEPAO' %>
                        </h1>
                        <p class="text-[11px] sm:text-xs text-amber-400 font-medium">
                            Kab. Toraja Utara • Akreditasi <%= profilData.akreditasi || 'A' %>
                        </p>
                    </div>
                </a>`;

const newHeaderStart = `<div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 sm:h-20">

                <!-- School Brand / Logo -->
                <a href="/" class="flex items-center space-x-2.5 sm:space-x-3.5 group flex-shrink-0">
                    <div
                        class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-blue-950 text-xl sm:text-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/20 flex-shrink-0 border border-white/30 overflow-hidden p-1 shrink-0">
                        <% if (profilData && profilData.logo_sekolah) { %>
                            <img src="/uploads/profil/<%= profilData.logo_sekolah %>" alt="Logo <%= profilData.nama_sekolah || 'SMPN 1 Rantepao' %>" class="w-full h-full object-contain" onerror="this.onerror=null; this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                            <span class="hidden">S1</span>
                        <% } else { %>
                            <span>S1</span>
                        <% } %>
                    </div>
                    <div class="min-w-0">
                        <h1
                            class="font-black text-xs xs:text-sm sm:text-base md:text-lg leading-tight tracking-tight text-white group-hover:text-amber-400 transition-colors truncate max-w-[180px] xs:max-w-[230px] sm:max-w-none">
                            <%= profilData.nama_sekolah || 'SMPN 1 RANTEPAO' %>
                        </h1>
                        <p class="text-[9.5px] xs:text-[10.5px] sm:text-xs text-amber-400 font-medium truncate max-w-[180px] xs:max-w-[230px] sm:max-w-none">
                            Kab. Toraja Utara • Akreditasi <%= profilData.akreditasi || 'A' %>
                        </p>
                    </div>
                </a>`;

if (navCode.includes(oldHeaderStart)) {
    navCode = navCode.replace(oldHeaderStart, newHeaderStart);
    console.log('navbar.ejs header start updated');
} else {
    console.log('oldHeaderStart not verbatim match, checking regex...');
}

// Replace mobile trigger & drawer
const regexDrawerSection = /<!-- Mobile Navigation Trigger -->[\s\S]*?<!-- FLOATING SCROLL-TO-TOP BUTTON[\s\S]*?<\/button>/;

const newDrawerSection = `<!-- Mobile Navigation Trigger -->
                <div class="lg:hidden flex items-center gap-2">
                    <a href="/ppdb"
                        class="hidden xs:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-blue-950 transition active:scale-95 shadow">
                        <span>PPDB</span>
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-950"></span>
                    </a>
                    <button type="button" onclick="openMobileDrawer()"
                        class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition focus:outline-none border border-white/20 cursor-pointer shadow-sm"
                        aria-label="Buka Menu Navigasi">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- ============================================================== -->
    <!-- OFF-CANVAS MOBILE DRAWER & BACKDROP (PRESISI WARNA BIRU & EMAS)-->
    <!-- ============================================================== -->

    <!-- Dimming Backdrop Overlay -->
    <div id="mobile-drawer-backdrop" 
         class="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[998] opacity-0 pointer-events-none transition-opacity duration-300"
         onclick="closeMobileDrawer()"></div>

    <!-- White Off-Canvas Drawer (Slide-in from Right with Rounded Left) -->
    <div id="mobile-drawer" 
         class="fixed top-0 bottom-0 right-0 z-[999] w-[82vw] sm:w-80 max-w-sm bg-white shadow-2xl rounded-l-3xl flex flex-col justify-between overflow-y-auto overscroll-contain transform translate-x-full transition-transform duration-300 ease-out select-none border-l border-blue-950/10">
        
        <!-- Top Section & Menu List -->
        <div>
            <!-- Close Button (Round X in Circle at Top-Right) -->
            <div class="p-4 flex justify-end">
                <button type="button" onclick="closeMobileDrawer()" 
                        class="w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-blue-950 hover:bg-blue-50/80 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                        aria-label="Tutup Menu">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Centered School Emblem & Branding (Deep Navy Blue & Gold Line) -->
            <div class="px-6 pb-4 pt-0 flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-full border-2 border-blue-950/20 p-1 flex items-center justify-center shadow-md bg-white mb-2">
                    <% if (profilData && profilData.logo_sekolah) { %>
                        <img src="/uploads/profil/<%= profilData.logo_sekolah %>" alt="Logo Sekolah" class="w-full h-full object-contain rounded-full" onerror="this.onerror=null; this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                        <span class="hidden text-lg font-black text-blue-950">SMP1</span>
                    <% } else { %>
                        <span class="text-lg font-black text-blue-950">SMP1</span>
                    <% } %>
                </div>
                <h3 class="font-extrabold text-sm tracking-wide text-blue-950 uppercase">
                    <%= profilData.nama_sekolah || 'SMP NEGERI 1 RANTEPAO' %>
                </h3>
                <div class="w-12 h-1 bg-gradient-to-r from-blue-950 to-amber-500 rounded-full mt-1.5 mb-1"></div>
            </div>

            <!-- Navigation Links List (Clean Minimalist with Dividers, Navy Blue Theme) -->
            <nav class="px-6 space-y-0 text-[13.5px] font-semibold text-slate-700 divide-y divide-slate-100">
                <!-- 1. Beranda -->
                <div class="py-2.5">
                    <a href="/" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'beranda' ? 'text-blue-950 font-bold' : '' %>">
                        Beranda
                    </a>
                </div>

                <!-- 2. Profil (Accordion with +) -->
                <div class="py-2.5">
                    <button type="button" onclick="toggleDrawerSubmenu('drawer-profil-sub', 'drawer-profil-plus')" 
                            class="w-full flex items-center justify-between py-0.5 text-left hover:text-blue-950 transition-colors focus:outline-none cursor-pointer <%= (currentActive === 'profil' || currentActive === 'civitas' || currentActive === 'komite' || currentActive === 'struktur') ? 'text-blue-950 font-bold' : '' %>">
                        <span>Profil</span>
                        <span id="drawer-profil-plus" class="text-slate-400 font-light text-base leading-none transition-transform duration-200">+</span>
                    </button>
                    <div id="drawer-profil-sub" class="hidden pl-3.5 pr-2 pt-2 pb-1 space-y-1.5 text-xs font-normal text-slate-600 bg-blue-50/50 rounded-xl my-1 border-l-2 border-blue-900">
                        <a href="/#sambutan" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Sambutan Kepala Sekolah</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('sejarah');" class="block py-1 hover:text-blue-950 transition-colors cursor-pointer">Sejarah Singkat</a>
                        <a href="/#visi-misi" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Visi &amp; Misi</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('sarana');" class="block py-1 hover:text-blue-950 transition-colors cursor-pointer">Sarana &amp; Prasarana</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('program-kerja');" class="block py-1 hover:text-blue-950 transition-colors cursor-pointer">Program Kerja</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('kondisi-siswa');" class="block py-1 hover:text-blue-950 transition-colors cursor-pointer">Kondisi Siswa / Statistik</a>
                        <a href="/struktur-organisasi" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors font-medium">Struktur Organisasi</a>
                        <a href="/#guru" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Civitas Akademik (Guru &amp; Staf)</a>
                        <a href="/#komite" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Komite Sekolah</a>
                        <a href="/#kalender-akademik" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Kalender Akademik</a>
                    </div>
                </div>

                <!-- 3. Layanan Publik (Accordion with +) -->
                <div class="py-2.5">
                    <button type="button" onclick="toggleDrawerSubmenu('drawer-layanan-sub', 'drawer-layanan-plus')" 
                            class="w-full flex items-center justify-between py-0.5 text-left hover:text-blue-950 transition-colors focus:outline-none cursor-pointer <%= currentActive === 'layanan' ? 'text-blue-950 font-bold' : '' %>">
                        <span>Layanan Publik</span>
                        <span id="drawer-layanan-plus" class="text-slate-400 font-light text-base leading-none transition-transform duration-200">+</span>
                    </button>
                    <div id="drawer-layanan-sub" class="hidden pl-3.5 pr-2 pt-2 pb-1 space-y-1.5 text-xs font-normal text-slate-600 bg-blue-50/50 rounded-xl my-1 border-l-2 border-blue-900">
                        <a href="/layanan/buku-tamu" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Buku Tamu</a>
                        <a href="/layanan/pengaduan" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Pengaduan</a>
                        <a href="/layanan/lms" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">LMS</a>
                        <a href="/layanan/smart-absen" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Smart Absen</a>
                        <a href="/layanan/smart-absensi" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Smart Absensi</a>
                        <a href="/layanan/smart-library" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Smart Library</a>
                        <a href="/layanan/biso-cbt" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Biso CBT</a>
                        <a href="/layanan/bisolpin-academy" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Bisolpin Academy</a>
                        <a href="/layanan/siakad-sekolah" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Siakad Sekolah</a>
                        <a href="/layanan/download" onclick="closeMobileDrawer()" class="block py-1 hover:text-blue-950 transition-colors">Download Dokumen</a>
                    </div>
                </div>

                <!-- 4. Berita -->
                <div class="py-2.5">
                    <a href="/#berita" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'berita' ? 'text-blue-950 font-bold' : '' %>">
                        Berita
                    </a>
                </div>

                <!-- 5. Galeri -->
                <div class="py-2.5">
                    <a href="/#galeri" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'galeri' ? 'text-blue-950 font-bold' : '' %>">
                        Galeri
                    </a>
                </div>

                <!-- 6. Pengumuman -->
                <div class="py-2.5">
                    <a href="/#pengumuman" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'pengumuman' ? 'text-blue-950 font-bold' : '' %>">
                        Pengumuman
                    </a>
                </div>

                <!-- 7. Ekstrakurikuler -->
                <div class="py-2.5">
                    <a href="/#eskul" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'eskul' ? 'text-blue-950 font-bold' : '' %>">
                        Ekstrakurikuler
                    </a>
                </div>

                <!-- 8. OSIS -->
                <div class="py-2.5">
                    <a href="/osis" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'osis' ? 'text-blue-950 font-bold' : '' %>">
                        OSIS
                    </a>
                </div>

                <!-- 9. Download -->
                <div class="py-2.5">
                    <a href="/layanan/download" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'download' ? 'text-blue-950 font-bold' : '' %>">
                        Download
                    </a>
                </div>

                <!-- 10. Kontak -->
                <div class="py-2.5">
                    <a href="/#kontak" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'kontak' ? 'text-blue-950 font-bold' : '' %>">
                        Kontak
                    </a>
                </div>
            </nav>
        </div>

        <!-- Bottom PPDB Button & Copyright -->
        <div class="p-6 pt-3 bg-white border-t border-slate-100 flex flex-col items-center">
            <a href="/ppdb" onclick="closeMobileDrawer()" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all duration-200">
                <i class="fa-solid fa-graduation-cap text-base"></i>
                <span>Info PPDB Online</span>
            </a>
            <p class="text-[11px] text-slate-400 font-medium text-center mt-2.5">
                © 2026 <%= profilData.nama_sekolah || 'UPT SMP NEGERI 1 RANTEPAO' %>
            </p>
        </div>
    </div>

    <!-- ============================================================== -->
    <!-- FLOATING SCROLL-TO-TOP BUTTON (ROYAL NAVY BLUE & GOLD THEME)    -->
    <!-- ============================================================== -->
    <button id="btn-back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
            class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-blue-950 hover:bg-blue-900 text-amber-400 border border-amber-400/30 shadow-xl shadow-blue-950/40 flex items-center justify-center text-sm transition-all duration-300 opacity-0 pointer-events-none active:scale-90 focus:outline-none cursor-pointer"
            aria-label="Kembali ke Atas">
        <i class="fa-solid fa-chevron-up"></i>
    </button>`;

if (regexDrawerSection.test(navCode)) {
    navCode = navCode.replace(regexDrawerSection, newDrawerSection);
    console.log('navbar.ejs drawer section updated to Royal Navy Blue & Gold');
} else {
    console.error('regexDrawerSection did not match in navbar.ejs');
    process.exit(1);
}

fs.writeFileSync(navbarPath, navCode, 'utf8');
console.log('navbar.ejs successfully written!');

