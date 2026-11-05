const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, '..', 'views', 'partials', 'navbar.ejs');
let code = fs.readFileSync(navbarPath, 'utf8');

const regexMiddle = /<!-- Mobile Navigation Trigger -->[\s\S]*?<!-- ==============================================================\s*-->\s*<!-- MODAL POPUP INTERAKTIF/;

const newMiddle = `<!-- Mobile Navigation Trigger -->
                <div class="lg:hidden flex items-center gap-2.5">
                    <a href="/ppdb"
                        class="px-2.5 py-1.5 rounded-lg text-xs font-bold <%= currentActive === 'ppdb' ? 'bg-amber-400 text-blue-950' : 'bg-amber-500 text-blue-950' %> flex items-center gap-1 shadow">
                        <span>PPDB</span>
                        <span class="w-1.5 h-1.5 rounded-full bg-blue-950"></span>
                    </a>
                    <button type="button" onclick="openMobileDrawer()"
                        class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition focus:outline-none border border-white/20 cursor-pointer"
                        aria-label="Buka Menu Navigasi">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- ============================================================== -->
    <!-- OFF-CANVAS MOBILE DRAWER & BACKDROP (STYLE SEPERTI GAMBAR)     -->
    <!-- ============================================================== -->

    <!-- Dimming Backdrop Overlay -->
    <div id="mobile-drawer-backdrop" 
         class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[998] opacity-0 pointer-events-none transition-opacity duration-300"
         onclick="closeMobileDrawer()"></div>

    <!-- White Off-Canvas Drawer (Slide-in from Right) -->
    <div id="mobile-drawer" 
         class="fixed top-0 bottom-0 right-0 z-[999] w-[82%] sm:w-80 max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain transform translate-x-full transition-transform duration-300 ease-out select-none">
        
        <!-- Top Section & Menu List -->
        <div>
            <!-- Close Button (Round X in Circle at Top-Right) -->
            <div class="p-4 flex justify-end">
                <button type="button" onclick="closeMobileDrawer()" 
                        class="w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                        aria-label="Tutup Menu">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Centered School Emblem & Branding -->
            <div class="px-6 pb-5 pt-0 flex flex-col items-center text-center">
                <div class="w-20 h-20 rounded-full border-2 border-emerald-600/80 p-1 flex items-center justify-center shadow-md bg-white mb-2.5">
                    <% if (profilData && profilData.logo_sekolah) { %>
                        <img src="/uploads/profil/<%= profilData.logo_sekolah %>" alt="Logo Sekolah" class="w-full h-full object-contain rounded-full" onerror="this.onerror=null; this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                        <span class="hidden text-xl font-black text-emerald-800">SMP1</span>
                    <% } else { %>
                        <span class="text-xl font-black text-emerald-800">SMP1</span>
                    <% } %>
                </div>
                <h3 class="font-extrabold text-sm sm:text-base tracking-wide text-emerald-800 uppercase">
                    <%= profilData.nama_sekolah || 'SMP NEGERI 1 RANTEPAO' %>
                </h3>
                <div class="w-14 h-1 bg-emerald-700 rounded-full mt-2"></div>
            </div>

            <!-- Navigation Links List (Clean Minimalist with Dividers) -->
            <nav class="px-5 space-y-0 text-[13px] font-semibold text-slate-800 divide-y divide-slate-100">
                <!-- 1. Beranda -->
                <div class="py-2.5">
                    <a href="/" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'beranda' ? 'text-emerald-700 font-bold' : '' %>">
                        Beranda
                    </a>
                </div>

                <!-- 2. Profil (Accordion with +) -->
                <div class="py-2.5">
                    <button type="button" onclick="toggleDrawerSubmenu('drawer-profil-sub', 'drawer-profil-plus')" 
                            class="w-full flex items-center justify-between py-1 text-left hover:text-emerald-700 transition focus:outline-none cursor-pointer <%= (currentActive === 'profil' || currentActive === 'civitas' || currentActive === 'komite' || currentActive === 'struktur') ? 'text-emerald-700 font-bold' : '' %>">
                        <span>Profil</span>
                        <span id="drawer-profil-plus" class="text-slate-400 font-light text-lg leading-none transition-transform duration-200">+</span>
                    </button>
                    <div id="drawer-profil-sub" class="hidden pl-3 pr-1 pt-2 pb-1 space-y-2 text-xs font-normal text-slate-600">
                        <a href="/#sambutan" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Sambutan Kepala Sekolah</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('sejarah');" class="block py-1 hover:text-emerald-700 transition cursor-pointer">Sejarah Singkat</a>
                        <a href="/#visi-misi" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Visi &amp; Misi</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('sarana');" class="block py-1 hover:text-emerald-700 transition cursor-pointer">Sarana &amp; Prasarana</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('program-kerja');" class="block py-1 hover:text-emerald-700 transition cursor-pointer">Program Kerja</a>
                        <a href="javascript:void(0)" onclick="closeMobileDrawer(); openHalamanModal('kondisi-siswa');" class="block py-1 hover:text-emerald-700 transition cursor-pointer">Kondisi Siswa / Statistik</a>
                        <a href="/struktur-organisasi" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition font-medium">Struktur Organisasi</a>
                        <a href="/#guru" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Civitas Akademik (Guru &amp; Staf)</a>
                        <a href="/#komite" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Komite Sekolah</a>
                        <a href="/#kalender-akademik" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Kalender Akademik</a>
                    </div>
                </div>

                <!-- 3. Layanan Publik (Accordion with +) -->
                <div class="py-2.5">
                    <button type="button" onclick="toggleDrawerSubmenu('drawer-layanan-sub', 'drawer-layanan-plus')" 
                            class="w-full flex items-center justify-between py-1 text-left hover:text-emerald-700 transition focus:outline-none cursor-pointer <%= currentActive === 'layanan' ? 'text-emerald-700 font-bold' : '' %>">
                        <span>Layanan Publik</span>
                        <span id="drawer-layanan-plus" class="text-slate-400 font-light text-lg leading-none transition-transform duration-200">+</span>
                    </button>
                    <div id="drawer-layanan-sub" class="hidden pl-3 pr-1 pt-2 pb-1 space-y-2 text-xs font-normal text-slate-600">
                        <a href="/layanan/buku-tamu" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Buku Tamu</a>
                        <a href="/layanan/pengaduan" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Pengaduan</a>
                        <a href="/layanan/lms" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">LMS</a>
                        <a href="/layanan/smart-absen" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Smart Absen</a>
                        <a href="/layanan/smart-absensi" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Smart Absensi</a>
                        <a href="/layanan/smart-library" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Smart Library</a>
                        <a href="/layanan/biso-cbt" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Biso CBT</a>
                        <a href="/layanan/bisolpin-academy" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Bisolpin Academy</a>
                        <a href="/layanan/siakad-sekolah" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Siakad Sekolah</a>
                        <a href="/layanan/download" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition">Download Dokumen</a>
                    </div>
                </div>

                <!-- 4. Berita -->
                <div class="py-2.5">
                    <a href="/#berita" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'berita' ? 'text-emerald-700 font-bold' : '' %>">
                        Berita
                    </a>
                </div>

                <!-- 5. Galeri -->
                <div class="py-2.5">
                    <a href="/#galeri" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'galeri' ? 'text-emerald-700 font-bold' : '' %>">
                        Galeri
                    </a>
                </div>

                <!-- 6. Pengumuman -->
                <div class="py-2.5">
                    <a href="/#pengumuman" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'pengumuman' ? 'text-emerald-700 font-bold' : '' %>">
                        Pengumuman
                    </a>
                </div>

                <!-- 7. Ekstrakurikuler -->
                <div class="py-2.5">
                    <a href="/#eskul" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'eskul' ? 'text-emerald-700 font-bold' : '' %>">
                        Ekstrakurikuler
                    </a>
                </div>

                <!-- 8. OSIS -->
                <div class="py-2.5">
                    <a href="/osis" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'osis' ? 'text-emerald-700 font-bold' : '' %>">
                        OSIS
                    </a>
                </div>

                <!-- 9. Download -->
                <div class="py-2.5">
                    <a href="/layanan/download" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'download' ? 'text-emerald-700 font-bold' : '' %>">
                        Download
                    </a>
                </div>

                <!-- 10. Kontak -->
                <div class="py-2.5">
                    <a href="/#kontak" onclick="closeMobileDrawer()" class="block py-1 hover:text-emerald-700 transition <%= currentActive === 'kontak' ? 'text-emerald-700 font-bold' : '' %>">
                        Kontak
                    </a>
                </div>
            </nav>
        </div>

        <!-- Bottom PPDB Button & Copyright -->
        <div class="p-5 pt-3 bg-white border-t border-slate-100 flex flex-col items-center">
            <a href="/ppdb" onclick="closeMobileDrawer()" class="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all duration-200">
                <i class="fa-solid fa-graduation-cap text-base"></i>
                <span>Info PPDB Online</span>
            </a>
            <p class="text-[11px] text-slate-400 font-medium text-center mt-3">
                © 2026 <%= profilData.nama_sekolah || 'UPT SMP NEGERI 1 RANTEPAO' %>
            </p>
        </div>
    </div>

    <!-- ============================================================== -->
    <!-- FLOATING SCROLL-TO-TOP BUTTON (SEPERTI GAMBAR DI POJOK KANAN)   -->
    <!-- ============================================================== -->
    <button id="btn-back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
            class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-xl flex items-center justify-center text-sm transition-all duration-300 opacity-0 pointer-events-none active:scale-90 focus:outline-none cursor-pointer"
            aria-label="Kembali ke Atas">
        <i class="fa-solid fa-chevron-up"></i>
    </button>

    <!-- ============================================================== -->
    <!-- MODAL POPUP INTERAKTIF`;

if (!regexMiddle.test(code)) {
    console.error('regexMiddle failed to match');
    process.exit(1);
}

code = code.replace(regexMiddle, newMiddle);

const oldScriptRegex = /<script>[\s\S]*?<\/script>/;
const newScript = `<script>
        // Off-Canvas Mobile Drawer Functions
        function openMobileDrawer() {
            const drawer = document.getElementById('mobile-drawer');
            const backdrop = document.getElementById('mobile-drawer-backdrop');
            if (drawer && backdrop) {
                backdrop.classList.remove('opacity-0', 'pointer-events-none');
                backdrop.classList.add('opacity-100', 'pointer-events-auto');
                drawer.classList.remove('translate-x-full');
                drawer.classList.add('translate-x-0');
                document.body.classList.add('overflow-hidden');
            }
        }

        function closeMobileDrawer() {
            const drawer = document.getElementById('mobile-drawer');
            const backdrop = document.getElementById('mobile-drawer-backdrop');
            if (drawer && backdrop) {
                drawer.classList.remove('translate-x-0');
                drawer.classList.add('translate-x-full');
                backdrop.classList.remove('opacity-100', 'pointer-events-auto');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
                document.body.classList.remove('overflow-hidden');
            }
        }

        function toggleDrawerSubmenu(submenuId, plusId) {
            const sub = document.getElementById(submenuId);
            const plus = document.getElementById(plusId);
            if (sub) {
                const isHidden = sub.classList.contains('hidden');
                if (isHidden) {
                    sub.classList.remove('hidden');
                    if (plus) plus.textContent = '−';
                } else {
                    sub.classList.add('hidden');
                    if (plus) plus.textContent = '+';
                }
            }
        }

        // Back-to-Top Floating Button Scroll Listener
        window.addEventListener('scroll', function() {
            const btn = document.getElementById('btn-back-to-top');
            if (btn) {
                if (window.scrollY > 300) {
                    btn.classList.remove('opacity-0', 'pointer-events-none');
                    btn.classList.add('opacity-100', 'pointer-events-auto');
                } else {
                    btn.classList.remove('opacity-100', 'pointer-events-auto');
                    btn.classList.add('opacity-0', 'pointer-events-none');
                }
            }
        });

        // Modal Popup Halaman Statis / Profil Logic
        const iconHalamanMap = {
            'sejarah': 'fa-landmark',
            'visi-misi': 'fa-bullseye',
            'sarana': 'fa-building-columns',
            'program-kerja': 'fa-list-check',
            'kondisi-siswa': 'fa-chart-pie'
        };

        async function openHalamanModal(slug) {
            const modal = document.getElementById('modal-halaman-statis');
            const box = document.getElementById('modal-halaman-box');
            const titleEl = document.getElementById('modal-halaman-title');
            const loadingEl = document.getElementById('modal-halaman-loading');
            const contentEl = document.getElementById('modal-halaman-content');
            const dateEl = document.getElementById('modal-halaman-date');
            const iconEl = document.getElementById('modal-halaman-icon');

            if (!modal) return;

            // Close mobile drawer if open
            closeMobileDrawer();

            // Update icon
            if (iconEl && iconHalamanMap[slug]) {
                iconEl.className = \`fa-solid \${iconHalamanMap[slug]} text-amber-600\`;
            }

            // Reset modal state
            titleEl.textContent = 'Memuat Informasi...';
            loadingEl.classList.remove('hidden');
            contentEl.classList.add('hidden');
            contentEl.innerHTML = '';
            dateEl.textContent = '-';

            // Show modal backdrop
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');

            setTimeout(() => {
                box.classList.remove('scale-95', 'opacity-0');
                box.classList.add('scale-100', 'opacity-100');
            }, 10);

            try {
                const res = await fetch('/api/halaman/' + encodeURIComponent(slug));
                const result = await res.json();
                if (result && result.success && result.data) {
                    titleEl.textContent = result.data.judul;
                    contentEl.innerHTML = result.data.konten;
                    if (iconEl && result.data.ikon) {
                        iconEl.className = \`\${result.data.ikon} text-amber-600\`;
                    }
                    if (result.data.updated_at) {
                        const d = new Date(result.data.updated_at);
                        dateEl.textContent = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
                    } else {
                        dateEl.textContent = 'Terkini';
                    }
                    loadingEl.classList.add('hidden');
                    contentEl.classList.remove('hidden');
                } else {
                    titleEl.textContent = 'Informasi Belum Tersedia';
                    contentEl.innerHTML = \`<p class="text-rose-500 font-medium">Halaman informasi "\${slug}" sedang dipersiapkan oleh pihak sekolah.</p>\`;
                    loadingEl.classList.add('hidden');
                    contentEl.classList.remove('hidden');
                }
            } catch (err) {
                titleEl.textContent = 'Koneksi Terputus';
                contentEl.innerHTML = \`<p class="text-rose-500 font-medium">Gagal memuat data: \${err.message}</p>\`;
                loadingEl.classList.add('hidden');
                contentEl.classList.remove('hidden');
            }
        }

        function closeHalamanModal() {
            const modal = document.getElementById('modal-halaman-statis');
            const box = document.getElementById('modal-halaman-box');
            if (!modal) return;
            box.classList.remove('scale-100', 'opacity-100');
            box.classList.add('scale-95', 'opacity-0');
            document.body.classList.remove('overflow-hidden');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 200);
        }

        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeHalamanModal();
                closeMobileDrawer();
            }
        });

        // Smooth scroll & auto-close mobile drawer for internal anchor links
        document.addEventListener('DOMContentLoaded', function() {
            const anchorLinks = document.querySelectorAll('a[href^="/#"], a[href^="#"]');
            anchorLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    const hashIndex = href.indexOf('#');
                    if (hashIndex !== -1) {
                        const targetId = href.substring(hashIndex + 1);
                        if (window.location.pathname === '/' || window.location.pathname === '') {
                            const targetEl = document.getElementById(targetId);
                            if (targetEl) {
                                e.preventDefault();
                                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                history.pushState(null, null, '#' + targetId);
                                closeMobileDrawer();
                            }
                        }
                    }
                });
            });
        });
    </script>`;

if (!oldScriptRegex.test(code)) {
    console.error('oldScriptRegex failed to match');
    process.exit(1);
}

code = code.replace(oldScriptRegex, newScript);

fs.writeFileSync(navbarPath, code, 'utf8');
console.log('Successfully updated navbar.ejs with MAN 1 Kolaka style mobile drawer!');

