const fs = require('fs');

function esc(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return val;
  const s = String(val)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
  return `'${s}'`;
}

// Read original SQL file
const originalSql = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

// We will parse the original file into sections:
// 1. Header and CREATE TABLE statements
// 2. Data inserts (which we will completely replace with our SMAN 1 Makassar data)
// 3. ALTER TABLE statements (PRIMARY KEY, AUTO_INCREMENT, FOREIGN KEY, and VIEWS)

// Let's define the new clean SMAN 1 Makassar data:

const data = {
  profil_sekolah: [
    {
      id_profil: 1,
      nama_sekolah: 'UPT SMAN 1 Makassar',
      npsn: '40312010',
      akreditasi: 'A',
      nama_kepsek: 'Drs. H. Sulihin Mustafa, M.Pd.',
      nip_kepsek: '196508121991031005',
      foto_kepsek: 'foto_kepsek-1793593136290-628189447.jpg',
      sambutan_kepsek: 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi Kita Semua, Om Swastyastu, Namo Buddhaya, Salam Kebajikan.\r\n\r\nPuji dan syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas segala limpahan rahmat, taufik, dan karunia-Nya. Selamat datang di portal situs web resmi SMA Negeri 1 Makassar (SMANSA Makassar).\r\n\r\nSebagai salah satu institusi pendidikan menengah atas tertua dan sarat prestasi di Provinsi Sulawesi Selatan yang telah berdiri kokoh sejak tahun 1950, SMA Negeri 1 Makassar terus berkomitmen menghadirkan layanan pendidikan prima dan adaptif di era transformasi digital. Dengan mengimplementasikan Kurikulum Merdeka secara holistik, kami berikhtiar memadukan keunggulan akademik, penguatan karakter Profil Pelajar Pancasila, penguasaan sains dan teknologi mutakhir, serta keteguhan iman dan takwa.\r\n\r\nSitus web ini hadir sebagai media transparansi informasi publik, akuntabilitas kelembagaan, serta sarana komunikasi interaktif yang menghubungkan sekolah dengan peserta didik, dewan guru, tenaga kependidikan, orang tua/wali murid, ikatan alumni (IKA SMANSA), serta masyarakat luas. Mari bersama-sama kita perkokoh semangat kolaborasi untuk mengantarkan generasi muda SMANSA menjadi insan unggul, berdaya saing global, dan siap menjadi pemimpin masa depan bangsa.\r\n\r\nWassalamu’alaikum Warahmatullahi Wabarakatuh.',
      sejarah: 'SMA Negeri 1 Makassar (populer dengan akronim SMANSA Makassar) memiliki rekam jejak historis yang amat panjang dan membanggakan dalam kancah pendidikan di kawasan Indonesia Timur. Cikal bakal lembaga pendidikan ini berakar dari Algemeene Middelbare School (AMS) pada masa pra-kemerdekaan Republik Indonesia.\r\n\r\nPada tahun 1950, sekolah ini secara resmi bertransformasi menjadi SMA ABC Makassar di bawah pimpinan kepala sekolah pertama, Bapak Yatmo (1950–1952). Seiring dinamika perkembangan sistem pendidikan nasional, nama sekolah disesuaikan menjadi SMA Negeri 1 Makassar dan menempati kampus yang representatif di Jalan Gunung Bawakaraeng No. 53, Kota Makassar.\r\n\r\nDalam perjalanannya, SMAN 1 Makassar dipercaya menyandang status sebagai Rintisan Sekolah Bertaraf Internasional (RSBI) pada tahun 2010. Hingga saat ini, dengan akreditasi A, status sekolah rujukan nasional, serta implementasi Kurikulum Merdeka, ribuan alumni SMANSA telah berkiprah gemilang di berbagai ranah nasional dan internasional—mulai dari tokoh negarawan, akademisi terkemuka, dokter, profesional korporasi, hingga pelaku industri kreatif dunia.',
      visi: 'Mencetak Generasi Unggul dalam Prestasi, Imtaq dan Imtek.',
      misi: '1. Meningkatkan kualitas kinerja pendidik dan tenaga kependidikan sebagai upaya pemenuhan pelayanan optimal kepada peserta didik.\r\n2. Meningkatkan pembinaan terhadap bakat dan minat peserta didik melalui kegiatan olahraga, seni, keterampilan ramah lingkungan, serta pendidikan kewirausahaan.\r\n3. Pemberdayaan perilaku warga sekolah yang berorientasi pada nilai-nilai keimanan, ketakwaan, serta penguasaan teknologi informasi.\r\n4. Menyelenggarakan proses pembelajaran yang inovatif, kritis, kreatif, dan kolaboratif berbasis Kurikulum Merdeka serta berwawasan global.\r\n5. Mewujudkan ekosistem sekolah yang bersih, sehat, asri, berbudaya mutu, dan berwawasan Adiwiyata.',
      alamat: 'Jl. Gunung Bawakaraeng No. 53, Kel. Gaddong, Kec. Bontoala, Kota Makassar, Sulawesi Selatan 90157',
      telepon: '(0411) 3624440',
      email_sekolah: 'info@sman1mks.sch.id',
      maps_embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7842323530364!2d119.4187315!3d-5.1383827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02a5499bc59d%3A0xc6e4df94ff640c6c!2sSMA%20Negeri%201%20Makassar!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
      logo_sekolah: 'logo-sman1-makassar.png',
      updated_at: '2026-11-05 12:00:00',
      jumlah_siswa: 1284,
      jumlah_rombel: 36,
      label_lokasi: 'Lokasi Kampus SMANSA',
      keterangan_lokasi: 'Gedung Utama SMAN 1 Makassar',
      wilayah_lokasi: 'Kec. Bontoala, Kota Makassar'
    }
  ],

  users: [
    {
      id_user: 1,
      nama_lengkap: 'Administrator SMAN 1 Makassar',
      username: 'admin',
      password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // 'password' / hash
      email: 'admin@sman1mks.sch.id',
      role: 'admin',
      foto_profil: 'default-user.png',
      created_at: '2026-10-26 01:52:49',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_user: 2,
      nama_lengkap: 'Operator Dapodik SMANSA',
      username: 'operator',
      password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
      email: 'operator@sman1mks.sch.id',
      role: 'operator',
      foto_profil: 'default-user.png',
      created_at: '2026-10-26 01:52:49',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  halaman_statis: [
    {
      id: 1,
      slug: 'sejarah',
      ikon: 'fa-solid fa-landmark',
      judul: 'Sejarah Singkat SMA Negeri 1 Makassar',
      ringkasan: 'Menjelajahi tonggak sejarah pendirian, perkembangan, dan perjalanan prestasi gemilang SMANSA Makassar dari masa ke masa sejak tahun 1950.',
      warna_badge: 'amber',
      konten: '<p class="mb-4 text-justify leading-relaxed">SMA Negeri 1 Makassar (dikenal akrab dengan sebutan <strong>SMANSA Makassar</strong>) merupakan salah satu pilar pendidikan menengah tertua, paling bereputasi, dan sarat sejarah di Kawasan Timur Indonesia. Berakar dari institusi pendidikan masa pra-kemerdekaan yaitu <em>Algemeene Middelbare School (AMS)</em> Makassar, sekolah ini secara resmi berdiri pada tahun <strong>1950</strong> dengan nama <strong>SMA ABC Makassar</strong> di bawah kepemimpinan kepala sekolah pertama, Bapak Yatmo (1950–1952).</p>\n<p class="mb-4 text-justify leading-relaxed">Dalam dinamika perkembangannya, sekolah ini berganti nama menjadi SMA Negeri 1 Makassar dan berlokasi strategis di Jalan Gunung Bawakaraeng No. 53, Kota Makassar. Lokasi ini menjadi saksi tumbuhnya generasi demi generasi cendekiawan muda Sulawesi Selatan yang berkiprah di pentas nasional maupun global.</p>\n<p class="mb-4 text-justify leading-relaxed">Pada tahun 2010, SMAN 1 Makassar dipercaya pemerintah sebagai <strong>Rintisan Sekolah Bertaraf Internasional (RSBI)</strong>. Hingga saat ini, di bawah payung Kurikulum Merdeka dan berpredikat Akreditasi A, SMANSA Makassar terus melahirkan ribuan alumni berprestasi tinggi di berbagai bidang—pejabat tinggi negara, akademisi terkemuka, perwira militer dan kepolisian, dokter spesialis, profesional korporasi multinasional, hingga inovator teknologi.</p>',
      items_json: null,
      paragraf_pembuka: null,
      paragraf_penutup: null,
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 3,
      slug: 'sarana',
      ikon: 'fa-solid fa-building-columns',
      judul: 'Sarana & Prasarana SMAN 1 Makassar',
      ringkasan: 'Fasilitas representatif bertaraf nasional: laboratorium sains & komputer canggih, perpustakaan digital, masjid sekolah, dan sarana olahraga modern.',
      warna_badge: 'emerald',
      konten: '<p class="mb-4 text-justify leading-relaxed">Untuk mendukung proses pembelajaran interaktif, riset ilmiah, dan pembinaan karakter berbasis Kurikulum Merdeka, SMA Negeri 1 Makassar dilengkapi sarana dan prasarana yang modern, aman, dan representatif:</p>\n<div class="grid sm:grid-cols-2 gap-3.5 my-4">\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-chalkboard-user text-amber-500"></i> Ruang Kelas Smart Classroom\n        </h5>\n        <p class="text-xs text-slate-600">36 ruang kelas representatif ber-AC, dilengkapi proyektor multimedia, smart screen, dan akses internet nirkabel serat optik kecepatan tinggi.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-flask-vial text-blue-600"></i> Laboratorium Sains Terpadu\n        </h5>\n        <p class="text-xs text-slate-600">Tiga unit laboratorium khusus (Fisika, Kimia, dan Biologi) dengan instrumentasi eksperimen berstandar olimpiade sains nasional.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-laptop-code text-indigo-600"></i> Lab Komputer & Server ANBK/CBT\n        </h5>\n        <p class="text-xs text-slate-600">4 laboratorium komputer modern dengan ratusan workstation terbaru untuk praktikum informatika, riset digital, dan ujian nasional.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-book-bookmark text-emerald-600"></i> Perpustakaan Digital & Ruang Baca\n        </h5>\n        <p class="text-xs text-slate-600">Koleksi puluhan ribu buku fisik, katalog e-library terpadu, area diskusi lesehan nyaman, dan ruang literasi digital ber-AC.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-basketball text-orange-500"></i> Lapangan Bawakaraeng Arena\n        </h5>\n        <p class="text-xs text-slate-600">Lapangan serbaguna luar ruang untuk bola basket berstandar Perbasi, futsal, bulutangkis, dan upacara bendera akbar.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-mosque text-teal-600"></i> Masjid Darul Ulum SMANSA\n        </h5>\n        <p class="text-xs text-slate-600">Pusat pembinaan kerohanian Islam, sholat berjamaah civitas sekolah, kajian akhlakul karimah, dan kegiatan mentoring keagamaan.</p>\n    </div>\n</div>',
      items_json: '[{"ikon":"fa-solid fa-chalkboard-user","judul":"Ruang Kelas Smart Classroom","deskripsi":"36 ruang kelas representatif ber-AC, dilengkapi proyektor multimedia, smart screen, dan akses internet nirkabel serat optik kecepatan tinggi.","warna":"amber"},{"ikon":"fa-solid fa-flask-vial","judul":"Laboratorium Sains Terpadu","deskripsi":"Tiga unit laboratorium khusus (Fisika, Kimia, dan Biologi) dengan instrumentasi eksperimen berstandar olimpiade sains nasional.","warna":"blue"},{"ikon":"fa-solid fa-laptop-code","judul":"Lab Komputer & Server ANBK/CBT","deskripsi":"4 laboratorium komputer modern dengan ratusan workstation terbaru untuk praktikum informatika, riset digital, dan ujian nasional.","warna":"indigo"},{"ikon":"fa-solid fa-book-bookmark","judul":"Perpustakaan Digital & Ruang Baca","deskripsi":"Koleksi puluhan ribu buku fisik, katalog e-library terpadu, area diskusi lesehan nyaman, dan ruang literasi digital ber-AC.","warna":"emerald"},{"ikon":"fa-solid fa-basketball","judul":"Lapangan Bawakaraeng Arena","deskripsi":"Lapangan serbaguna luar ruang untuk bola basket berstandar Perbasi, futsal, bulutangkis, dan upacara bendera akbar.","warna":"orange"},{"ikon":"fa-solid fa-mosque","judul":"Masjid Darul Ulum SMANSA","deskripsi":"Pusat pembinaan kerohanian Islam, sholat berjamaah civitas sekolah, kajian akhlakul karimah, dan kegiatan mentoring keagamaan.","warna":"teal"}]',
      paragraf_pembuka: 'Untuk mendukung proses pembelajaran interaktif, riset ilmiah, dan pembinaan karakter berbasis Kurikulum Merdeka, SMA Negeri 1 Makassar dilengkapi sarana dan prasarana yang modern, aman, dan representatif:',
      paragraf_penutup: null,
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 4,
      slug: 'program-kerja',
      ikon: 'fa-solid fa-graduation-cap',
      judul: 'Program Kerja & Inovasi Unggulan SMAN 1 Makassar',
      ringkasan: 'Inisiatif kurikulum merdeka inovatif, bimbingan intensif seleksi masuk PTN ternama, digitalisasi smart school, dan pembinaan kepemimpinan siswa.',
      warna_badge: 'purple',
      konten: '<p class="mb-4 text-justify leading-relaxed">Dalam memantapkan posisi sebagai pusat keunggulan pendidikan di Sulawesi Selatan, SMAN 1 Makassar menyelenggarakan program strategis berkelanjutan:</p>\n<div class="space-y-3 my-4">\n    <div class="border-l-4 border-amber-500 bg-amber-50/40 p-3 rounded-r-xl border border-amber-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">1. Penguatan Kurikulum Merdeka & Gelar Karya P5</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Pengembangan kompetensi intrakurikuler dan Projek Penguatan Profil Pelajar Pancasila yang mengangkat kearifan lokal budaya bahari serta inovasi teknologi ramah lingkungan.</p>\n    </div>\n    <div class="border-l-4 border-blue-600 bg-blue-50/40 p-3 rounded-r-xl border border-blue-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">2. Klinik Sukses Masuk PTN Favorit (SNBP & SNBT)</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Program bimbingan intensif pendataan PDSS, pemetaan rekam jejak alumni, tryout berkala berbasis UTBK, serta konsultasi karir bersama alumni perguruan tinggi terkemuka.</p>\n    </div>\n    <div class="border-l-4 border-emerald-500 bg-emerald-50/40 p-3 rounded-r-xl border border-emerald-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">3. Ekosistem Smart School & Asesmen Digital Terpadu</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Integrasi sistem pembelajaran e-learning, absensi presensi digital siswa, dan ujian berbasis Computer-Based Test (CBT) yang akuntabel dan real-time.</p>\n    </div>\n    <div class="border-l-4 border-purple-500 bg-purple-50/40 p-3 rounded-r-xl border border-purple-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">4. Pembinaan Talenta Sains & Seni Budaya Sa’da Pawinru</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Kaderisasi atlet dan seniman muda melalui bimbingan khusus untuk ajang OSN, O2SN, FLS2N, hingga kompetisi debat internasional SECC.</p>\n    </div>\n    <div class="border-l-4 border-rose-500 bg-rose-50/40 p-3 rounded-r-xl border border-rose-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">5. Gerakan Sekolah Sehat & Adiwiyata Berkelanjutan</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Edukasi pelestarian lingkungan kampus, pengelolaan bank sampah sekolah, kantin sehat higienis, serta kawasan hijau bebas asap rokok dan bebas plastik sekali pakai.</p>\n    </div>\n</div>',
      items_json: '[{"ikon":"fa-solid fa-graduation-cap","judul":"1. Penguatan Kurikulum Merdeka & Gelar Karya P5","deskripsi":"Pengembangan kompetensi intrakurikuler dan Projek Penguatan Profil Pelajar Pancasila yang mengangkat kearifan lokal budaya bahari serta inovasi teknologi ramah lingkungan.","warna":"amber"},{"ikon":"fa-solid fa-building-columns","judul":"2. Klinik Sukses Masuk PTN Favorit (SNBP & SNBT)","deskripsi":"Program bimbingan intensif pendataan PDSS, pemetaan rekam jejak alumni, tryout berkala berbasis UTBK, serta konsultasi karir bersama alumni perguruan tinggi terkemuka.","warna":"blue"},{"ikon":"fa-solid fa-laptop-code","judul":"3. Ekosistem Smart School & Asesmen Digital Terpadu","deskripsi":"Integrasi sistem pembelajaran e-learning, absensi presensi digital siswa, dan ujian berbasis Computer-Based Test (CBT) yang akuntabel dan real-time.","warna":"emerald"},{"ikon":"fa-solid fa-masks-theater","judul":"4. Pembinaan Talenta Sains & Seni Budaya Sa’da Pawinru","deskripsi":"Kaderisasi atlet dan seniman muda melalui bimbingan khusus untuk ajang OSN, O2SN, FLS2N, hingga kompetisi debat internasional SECC.","warna":"purple"},{"ikon":"fa-solid fa-leaf","judul":"5. Gerakan Sekolah Sehat & Adiwiyata Berkelanjutan","deskripsi":"Edukasi pelestarian lingkungan kampus, pengelolaan bank sampah sekolah, kantin sehat higienis, serta kawasan hijau bebas asap rokok dan bebas plastik sekali pakai.","warna":"rose"}]',
      paragraf_pembuka: 'Dalam memantapkan posisi sebagai pusat keunggulan pendidikan di Sulawesi Selatan, SMAN 1 Makassar menyelenggarakan program strategis berkelanjutan:',
      paragraf_penutup: null,
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 5,
      slug: 'kondisi-siswa',
      ikon: 'fa-solid fa-chart-pie',
      judul: 'Kondisi Siswa & Statistik Akademik SMANSA',
      ringkasan: 'Data persebaran peserta didik, rombongan belajar (rombel), rasio tenaga pendidik berkualifikasi, dan rekam jejak kelulusan ke PTN terkemuka.',
      warna_badge: 'rose',
      konten: '<div class="space-y-3 my-4">\n    <div class="border-l-4 border-blue-500 bg-blue-50/40 p-3.5 rounded-r-2xl border border-blue-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-users text-blue-600 text-sm"></i>\n            <span>Total 1.284 Peserta Didik Aktif</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Terdiri dari 432 siswa Fase E (Kelas X), 428 siswa Fase F (Kelas XI), dan 424 siswa Fase F (Kelas XII) dengan sebaran peminatan MIPA, IPS, dan Bahasa yang seimbang.</p>\n    </div>\n    <div class="border-l-4 border-emerald-500 bg-emerald-50/40 p-3.5 rounded-r-2xl border border-emerald-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-chalkboard text-emerald-600 text-sm"></i>\n            <span>36 Rombongan Belajar (Rombel)</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Masing-masing jenjang terdiri dari 12 rombongan belajar dengan rasio per kelas 36 peserta didik untuk memastikan efektivitas interaksi belajar-mengajar.</p>\n    </div>\n    <div class="border-l-4 border-amber-500 bg-amber-50/40 p-3.5 rounded-r-2xl border border-amber-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-user-graduate text-amber-600 text-sm"></i>\n            <span>Tingkat Kelulusan 100% & Daya Serap PTN > 85%</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Secara konsisten meraih kelulusan paripurna dengan lebih dari 85% lulusan diterima di Perguruan Tinggi Negeri favorit (Unhas, UI, ITB, UGM, ITS, UNAIR, UNM) dan kedinasan.</p>\n    </div>\n</div>\n<p class="mt-4 text-justify leading-relaxed">Didukung oleh 78 tenaga pendidik profesional dan staf kependidikan berdedikasi, SMAN 1 Makassar senantiasa mengedepankan lingkungan belajar yang kondusif, inklusif, dan menginspirasi seluruh siswa untuk mencapai potensi optimalnya.</p>',
      items_json: '[{"ikon":"fa-solid fa-users","judul":"Total 1.284 Peserta Didik Aktif","deskripsi":"Terdiri dari 432 siswa Fase E (Kelas X), 428 siswa Fase F (Kelas XI), dan 424 siswa Fase F (Kelas XII) dengan sebaran peminatan MIPA, IPS, dan Bahasa yang seimbang.","warna":"blue"},{"ikon":"fa-solid fa-chalkboard","judul":"36 Rombongan Belajar (Rombel)","deskripsi":"Masing-masing jenjang terdiri dari 12 rombongan belajar dengan rasio per kelas 36 peserta didik untuk memastikan efektivitas interaksi belajar-mengajar.","warna":"emerald"},{"ikon":"fa-solid fa-user-graduate","judul":"Tingkat Kelulusan 100% & Daya Serap PTN > 85%","deskripsi":"Secara konsisten meraih kelulusan paripurna dengan lebih dari 85% lulusan diterima di Perguruan Tinggi Negeri favorit (Unhas, UI, ITB, UGM, ITS, UNAIR, UNM) dan kedinasan.","warna":"amber"}]',
      paragraf_pembuka: null,
      paragraf_penutup: 'Didukung oleh 78 tenaga pendidik profesional dan staf kependidikan berdedikasi, SMAN 1 Makassar senantiasa mengedepankan lingkungan belajar yang kondusif, inklusif, dan menginspirasi seluruh siswa untuk mencapai potensi optimalnya.',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  kategori_berita: [
    { id_kategori: 1, nama_kategori: 'Kegiatan Sekolah', slug_kategori: 'kegiatan-sekolah' },
    { id_kategori: 2, nama_kategori: 'Prestasi Siswa', slug_kategori: 'prestasi-siswa' },
    { id_kategori: 3, nama_kategori: 'Informasi Akademik', slug_kategori: 'informasi-akademik' },
    { id_kategori: 4, nama_kategori: 'Kesiswaan & OSIS', slug_kategori: 'kesiswaan-dan-osis' }
  ],

  berita: [
    {
      id_berita: 1,
      kategori_id: 2,
      penulis_id: 1,
      judul: 'Gemilang Prestasi! Siswa SMAN 1 Makassar Sukses Raih Medali Emas Olimpiade Sains Nasional (OSN) 2025',
      slug: 'gemilang-prestasi-siswa-sman-1-makassar-sukses-raih-medali-emas-osn-2025',
      isi_berita: '<p>Kabar membanggakan kembali datang dari kancah sains nasional. Delegasi siswa SMA Negeri 1 Makassar (SMANSA) berhasil menorehkan prestasi gemilang dengan menyabet Medali Emas pada ajang Olimpiade Sains Nasional (OSN) tahun 2025 bidang Kimia dan Biologi yang diselenggarakan oleh Balai Pengembangan Talenta Indonesia (BPTI) Kemendikbudristek.</p><p>Kepala UPT SMAN 1 Makassar, Drs. H. Sulihin Mustafa, M.Pd., menyampaikan apresiasi mendalam atas dedikasi dan kerja keras para siswa serta para guru pembimbing pembina olimpiade sains yang telah bekerja tanpa kenal lelah selama berbulan-bulan membimbing materi olimpiade tingkat lanjut.</p><p>"Prestasi ini membuktikan bahwa tradisi keunggulan akademik SMAN 1 Makassar tetap terjaga kukuh. Kami berkomitmen untuk terus memfasilitasi laboratorium, modul ajar, dan pembinaan intensif agar talenta-talenta muda kita mampu terus bersaing hingga ke level internasional (International Science Olympiad)," tutur beliau di hadapan seluruh peserta upacara bendera hari Senin.</p><p>Kemenangan ini sekaligus mengukuhkan posisi SMANSA Makassar sebagai salah satu lumbung talenta sains terbaik di kawasan Indonesia Timur.</p>',
      gambar: 'prestasi-osn.jpg',
      views: 342,
      status: 'publish',
      tanggal_publish: '2026-10-18 09:00:00',
      created_at: '2026-10-18 09:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_berita: 2,
      kategori_id: 1,
      penulis_id: 1,
      judul: 'Semarak Peringatan HUT Ke-75 SMAN 1 Makassar: Perkuat Sinergi Civitas dan Ikatan Alumni SMANSA',
      slug: 'semarak-peringatan-hut-ke-75-sman-1-makassar-perkuat-sinergi-civitas-dan-alumni',
      isi_berita: '<p>Memperingati hari jadinya yang ke-75 tahun, SMA Negeri 1 Makassar menggelar rangkaian acara peringatan akbar yang berlangsung meriah sepanjang pekan ini. Mengusung tema "75 Tahun SMANSA Mengabdi, Mengukir Prestasi Menuju Generasi Emas", kegiatan ini dihadiri oleh ribuan siswa, dewan guru, sesepuh pensiunan guru, serta jajaran pengurus Ikatan Alumni SMANSA (IKA SMANSA) lintas angkatan.</p><p>Rangkaian perayaan diawali dengan kegiatan Jalan Santai Sehat menyusuri Jalan Gunung Bawakaraeng dan kawasan pusat Kota Makassar, dilanjutkan dengan aksi sosial donor darah bersama PMI Kota Makassar, penyerahan beasiswa alumni bagi peserta didik berprestasi kurang mampu, serta pameran hasil karya sains dan teknologi siswa.</p><p>Ketua Panitia Milad menegaskan bahwa usia 75 tahun adalah momentum emas bagi SMANSA Makassar untuk terus beradaptasi dengan era kecerdasan buatan dan globalisasi tanpa melupakan nilai-nilai luhur budi pekerti yang telah ditanamkan sejak tahun 1950.</p>',
      gambar: 'upacara-hardiknas.jpg',
      views: 518,
      status: 'publish',
      tanggal_publish: '2026-10-05 10:30:00',
      created_at: '2026-10-05 10:30:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_berita: 3,
      kategori_id: 1,
      penulis_id: 1,
      judul: 'Gelar Karya P5 SMANSA Makassar Angkat Tema Kearifan Budaya Bahari dan Gastronomi Sulawesi Selatan',
      slug: 'gelar-karya-p5-smansa-makassar-angkat-kearifan-budaya-bahari-sulsel',
      isi_berita: '<p>Halaman tengah kampus SMA Negeri 1 Makassar disulap menjadi panggung kebudayaan yang megah dalam rangka Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5). Kegiatan yang diikuti oleh seluruh siswa Fase E (Kelas X) dan Fase F (Kelas XI) ini mengusung tema kearifan lokal berfokus pada kebudayaan maritim dan kuliner tradisional Bugis-Makassar.</p><p>Para pengunjung pameran disuguhi puluhan stan kreatif yang menampilkan maket sejarah perahu Pinisi, dokumenter video hasil wawancara dengan pengrajin tenun dan nelayan pesisir, serta inovasi olahan pangan lokal berbahan dasar rumput laut dan rempah tradisional.</p><p>"P5 bukan sekadar pameran pajangan, melainkan wahana menumbuhkan nalar kritis, kebhinekaan global, kemandirian, dan gotong royong sesuai amanah Kurikulum Merdeka," ujar Wakil Kepala Sekolah Bidang Kurikulum, Drs. Muhammad Arif, M.Pd.</p>',
      gambar: 'seni-tari-makassar.jpg',
      views: 289,
      status: 'publish',
      tanggal_publish: '2026-09-22 14:15:00',
      created_at: '2026-09-22 14:15:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_berita: 4,
      kategori_id: 3,
      penulis_id: 1,
      judul: 'SMAN 1 Makassar Gelar Workshop Pemantapan Kurikulum Merdeka & Ekosistem Smart School Bersama Disdik Sulsel',
      slug: 'sman-1-makassar-gelar-workshop-pemantapan-kurikulum-merdeka-smart-school',
      isi_berita: '<p>Sebagai sekolah penggerak dan model implementasi Kurikulum Merdeka di Kota Makassar, SMA Negeri 1 Makassar menyelenggarakan Workshop Peningkatan Kompetensi Guru dalam Pembelajaran Berdiferensiasi dan Asesmen Digital Smart School.</p><p>Kegiatan yang berlangsung selama tiga hari di Aula SMANSA ini menghadirkan narasumber dari Tim Pengembang Kurikulum Dinas Pendidikan Provinsi Sulawesi Selatan dan praktisi edutech. Materi pelatihan difokuskan pada pemanfaatan platform Learning Management System (LMS), penyusunan Modul Ajar adaptif kecerdasan buatan, dan asesmen diagnostik berkala.</p><p>Dengan terlaksananya workshop ini, seluruh tenaga pendidik SMANSA siap menghadirkan pengalaman belajar yang menyenangkan, interaktif, dan relevan dengan tantangan abad ke-21.</p>',
      gambar: 'lab-komputer.jpg',
      views: 195,
      status: 'publish',
      tanggal_publish: '2026-09-02 08:30:00',
      created_at: '2026-09-02 08:30:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_berita: 5,
      kategori_id: 2,
      penulis_id: 1,
      judul: 'Tim Bawakaraeng Basketball Club (BBC) SMANSA Raih Gelar Juara DBL South Sulawesi Series',
      slug: 'tim-bawakaraeng-basketball-club-smansa-raih-gelar-juara-dbl-south-sulawesi',
      isi_berita: '<p>Prestasi membanggakan kembali dipersembahkan oleh tim putra Bawakaraeng Basketball Club (BBC) SMAN 1 Makassar. Setelah melalui pertandingan sengit di partai final kompetisi basket pelajar paling bergengsi DBL South Sulawesi Series, SMANSA sukses mengangkat trofi juara utama.</p><p>Dukungan ratusan suporter setia SMANSA yang memadati tribun arena pertandingan semakin membakar semangat juang para atlet. Permainan disiplin, pertahanan kokoh, dan serangan balik cepat menjadi kunci kemenangan tim asuhan pelatih Muh. Ridwan, S.Pd., M.Pd.</p><p>Gelar juara ini semakin memperpanjang torehan prestasi bidang non-akademik SMANSA Makassar di tingkat regional dan nasional.</p>',
      gambar: 'kegiatan-pramuka.jpg',
      views: 476,
      status: 'publish',
      tanggal_publish: '2026-08-28 16:45:00',
      created_at: '2026-08-28 16:45:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id_berita: 6,
      kategori_id: 3,
      penulis_id: 1,
      judul: 'Sosialisasi Program Bimbingan Karir dan Tryout Akbar UTBK-SNBT 2027: Strategi Tembus PTN Favorit',
      slug: 'sosialisasi-program-bimbingan-karir-dan-tryout-akbar-utbk-snbt-2027',
      isi_berita: '<p>Guna mempersiapkan peserta didik kelas XII menghadapi Seleksi Nasional Penerimaan Mahasiswa Baru (SNPMB) tahun 2027, Tim Bimbingan Konseling (BK) SMAN 1 Makassar bekerja sama dengan perwakilan alumni mahasiswa menggelar Sosialisasi Karir dan Try Out Akbar Berbasis CBT.</p><p>Acara ini membedah tren ketetatan program studi favorit di kampus-kampus ternama seperti Universitas Hasanuddin (Unhas), Universitas Indonesia (UI), Institut Teknologi Bandung (ITB), Universitas Gadjah Mada (UGM), dan Universitas Airlangga (UNAIR).</p><p>Siswa juga dibekali tips memilih peminatan yang sesuai dengan minat bakat serta strategi mengoptimalkan peluang lolos lewat jalur SNBP (prestasi rapor) maupun SNBT (ujian tulis).</p>',
      gambar: 'gambar-1793606015933-215218085.png',
      views: 310,
      status: 'publish',
      tanggal_publish: '2026-08-10 11:00:00',
      created_at: '2026-08-10 11:00:00',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  pengumuman: [
    {
      id_pengumuman: 1,
      penulis_id: 1,
      judul_pengumuman: 'Jadwal Asesmen Sumatif Akhir Jenjang (ASAJ) Kelas XII Tahun Ajaran 2025/2026',
      isi_pengumuman: 'Diberitahukan kepada seluruh peserta didik kelas XII bahwa Asesmen Sumatif Akhir Jenjang (ASAJ) berbasis Computer-Based Test (CBT) akan dilaksanakan pada tanggal 16 s.d. 25 Maret 2026 di laboratorium komputer SMAN 1 Makassar. Seluruh siswa diharapkan mencetak kartu peserta ujian dan mematuhi tata tertib asesmen.',
      file_lampiran: null,
      tanggal_terbit: '2026-03-01',
      created_at: '2026-03-01 08:00:00'
    },
    {
      id_pengumuman: 2,
      penulis_id: 1,
      judul_pengumuman: 'Verifikasi dan Validasi Data PDSS untuk Seleksi Nasional Berdasarkan Prestasi (SNBP) 2026',
      isi_pengumuman: 'Kepada seluruh siswa kelas XII yang masuk kuota eligible SNBP 2026, dimohon segera melakukan pengecekan nilai rapor semester 1 s.d. 5 pada pangkalan data sekolah dan siswa. Apabila terdapat koreksi nilai, segera melapor kepada tim operator Dapodik di ruang tata usaha paling lambat 10 Februari 2026.',
      file_lampiran: null,
      tanggal_terbit: '2026-02-01',
      created_at: '2026-02-01 08:00:00'
    },
    {
      id_pengumuman: 3,
      penulis_id: 1,
      judul_pengumuman: 'Informasi Resmi Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Makassar TA 2026/2027',
      isi_pengumuman: 'Petunjuk teknis dan tahapan PPDB SMAN 1 Makassar Tahun Ajaran 2026/2027 meliputi Jalur Domisili/Zonasi, Jalur Afirmasi, Jalur Prestasi Akademik & Non-Akademik, serta Jalur Perpindahan Tugas Orang Tua resmi dibuka. Pendaftaran dilaksanakan secara online melalui portal PPDB web ini.',
      file_lampiran: null,
      tanggal_terbit: '2026-05-15',
      created_at: '2026-05-15 08:00:00'
    },
    {
      id_pengumuman: 4,
      penulis_id: 1,
      judul_pengumuman: 'Pemberitahuan Pelaksanaan Uji Kemahiran Berbahasa Indonesia (UKBI) dan Seleksi Riset KIRZHA',
      isi_pengumuman: 'Disampaikan kepada seluruh perwakilan kelas X dan XI peminatan bahasa dan riset bahwa pelaksanaan tes UKBI adaptif daring terjadwal pada hari Sabtu mendatang. Pendaftaran terbuka secara mandiri melalui pembina Kelompok Ilmiah Remaja SMANSA di ruang multimedia.',
      file_lampiran: null,
      tanggal_terbit: '2026-04-10',
      created_at: '2026-04-10 08:00:00'
    }
  ],

  kalender_akademik: [
    {
      id: 1,
      judul_kegiatan: 'Penilaian Sumatif Akhir Semester (PSAS) Ganjil TA 2026/2027',
      deskripsi: 'Pelaksanaan ujian akhir semester ganjil berbasis Computer-Based Test (CBT) untuk seluruh siswa kelas X, XI, dan XII.',
      tanggal_mulai: '2026-11-23',
      tanggal_selesai: '2026-12-05',
      kategori: 'Ujian',
      warna_badge: 'red',
      lokasi: 'Kampus SMAN 1 Makassar',
      urutan: 1,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 2,
      judul_kegiatan: 'Pekan Olahraga dan Seni (Porseni) Antarkelas SMANSA 2026',
      deskripsi: 'Ajang unjuk bakat olahraga basket, futsal, bulutangkis, panggung musik etnik, dan festival tari tradisional antarkelas.',
      tanggal_mulai: '2026-12-08',
      tanggal_selesai: '2026-12-14',
      kategori: 'Kegiatan',
      warna_badge: 'emerald',
      lokasi: 'Lapangan Bawakaraeng & Aula SMANSA',
      urutan: 2,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 3,
      judul_kegiatan: 'Pembagian Buku Rapor Semester Ganjil & Libur Akhir Semester',
      deskripsi: 'Penerimaan laporan hasil belajar peserta didik oleh orang tua/wali murid serta masa libur semester ganjil.',
      tanggal_mulai: '2026-12-19',
      tanggal_selesai: '2027-01-03',
      kategori: 'Akademik',
      warna_badge: 'blue',
      lokasi: 'Ruang Kelas Masing-Masing',
      urutan: 3,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 4,
      judul_kegiatan: 'Tryout Akbar UTBK-SNBT 2027 dan Sosialisasi Kampus PTN',
      deskripsi: 'Simulasi ujian tulis berbasis komputer persiapan seleksi masuk perguruan tinggi negeri bersama alumni SMANSA.',
      tanggal_mulai: '2027-01-16',
      tanggal_selesai: '2027-01-17',
      kategori: 'Akademik',
      warna_badge: 'amber',
      lokasi: 'Laboratorium Komputer SMANSA',
      urutan: 4,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 5,
      judul_kegiatan: 'Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5)',
      deskripsi: 'Pameran kreasi inovasi tema Budaya Bahari dan Kewirausahaan Kreatif siswa SMAN 1 Makassar.',
      tanggal_mulai: '2027-02-20',
      tanggal_selesai: '2027-02-21',
      kategori: 'Kegiatan',
      warna_badge: 'purple',
      lokasi: 'Halaman Tengah SMAN 1 Makassar',
      urutan: 5,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    },
    {
      id: 6,
      judul_kegiatan: 'Asesmen Sumatif Akhir Jenjang (ASAJ) Kelas XII TA 2026/2027',
      deskripsi: 'Ujian penentu kelulusan peserta didik kelas XII SMA Negeri 1 Makassar berbasis digital CBT.',
      tanggal_mulai: '2027-03-15',
      tanggal_selesai: '2027-03-24',
      kategori: 'Ujian',
      warna_badge: 'red',
      lokasi: 'Ruang CBT SMANSA',
      urutan: 6,
      created_at: '2026-11-01 08:00:00',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  galeri: [
    {
      id_galeri: 1,
      judul_foto: 'Apel Akbar Peringatan Hari Pendidikan Nasional di Kampus Bawakaraeng',
      deskripsi_singkat: 'Seluruh jajaran dewan guru, tenaga kependidikan, dan siswa SMAN 1 Makassar dalam upacara khidmat peringatan Hardiknas.',
      kategori_galeri: 'Kegiatan',
      file_foto: 'upacara-hardiknas.jpg',
      tanggal_upload: '2026-05-02'
    },
    {
      id_galeri: 2,
      judul_foto: 'Eksperimen Sains & Praktikum Siswa di Laboratorium Kimia Modern',
      deskripsi_singkat: 'Siswa Fase F melakukan riset reaksi reduksi-oksidasi dan titrasi asam basa dengan peralatan canggih terstandarisasi.',
      kategori_galeri: 'Fasilitas',
      file_foto: 'lab-komputer.jpg',
      tanggal_upload: '2026-08-14'
    },
    {
      id_galeri: 3,
      judul_foto: 'Penyerahan Medali Emas Kontingen SMANSA pada Olimpiade Sains',
      deskripsi_singkat: 'Penyerahan medali dan piagam penghargaan OSN kepada kepala sekolah pada apel bendera hari Senin.',
      kategori_galeri: 'Prestasi',
      file_foto: 'prestasi-osn.jpg',
      tanggal_upload: '2026-09-08'
    },
    {
      id_galeri: 4,
      judul_foto: 'Pentas Seni Tari Tradisional Sanggar Sa’da Pawinru SMANSA',
      deskripsi_singkat: 'Pertunjukan tari kreasi kolosal Bugis-Makassar dalam menyambut kunjungan tamu kehormatan dari Kementerian Pendidikan.',
      kategori_galeri: 'Kegiatan',
      file_foto: 'seni-tari-makassar.jpg',
      tanggal_upload: '2026-09-28'
    },
    {
      id_galeri: 5,
      judul_foto: 'Perkemahan Bakti dan Pelantikan Pramuka Ambalan Oryza Sativa',
      deskripsi_singkat: 'Kegiatan pembentukan karakter, kedisiplinan lapangan, dan kepedulian lingkungan ambalan pramuka SMAN 1 Makassar.',
      kategori_galeri: 'Kegiatan',
      file_foto: 'kegiatan-pramuka.jpg',
      tanggal_upload: '2026-10-12'
    },
    {
      id_galeri: 6,
      judul_foto: 'Kunjungan Edukasi Goes to Campus SMANSA ke Universitas Hasanuddin',
      deskripsi_singkat: 'Siswa kelas XII mendalami profil fakultas favorit, laboratorium riset terpadu, dan sistem perkuliahan di Unhas.',
      kategori_galeri: 'Prestasi',
      file_foto: 'gambar-1793606015933-215218085.png',
      tanggal_upload: '2026-10-25'
    }
  ],

  hero_slider: [
    {
      id: 1,
      judul: 'Pusat Keunggulan Akademik & Karakter',
      deskripsi: 'SMA Negeri 1 Makassar berkomitmen melahirkan generasi cerdas, berintegritas, berakhlak mulia, dan berdaya saing global di era transformasi Kurikulum Merdeka.',
      gambar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
      teks_tombol: 'Jelajahi Profil SMANSA',
      link_tombol: '#profil',
      urutan: 1,
      status_aktif: 'Aktif',
      created_at: '2026-11-03 16:58:35'
    },
    {
      id: 2,
      judul: 'Tradisi Prestasi Sejak 1950',
      deskripsi: 'Mewarisi reputasi lumbung juara di berbagai ajang Olimpiade Sains Nasional, festival seni budaya nusantara, hingga kejuaraan olahraga bergengsi.',
      gambar: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
      teks_tombol: 'Lihat Prestasi Siswa',
      link_tombol: '#prestasi',
      urutan: 2,
      status_aktif: 'Aktif',
      created_at: '2026-11-03 16:58:35'
    },
    {
      id: 3,
      judul: 'Membina Bakat & Kepemimpinan',
      deskripsi: 'Wadah kreasi dengan 17 ekstrakurikuler unggulan, fasilitas modern di Jalan Gunung Bawakaraeng No. 53, dan pembinaan intensif menyongsong masa depan gemilang.',
      gambar: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80',
      teks_tombol: 'Info PPDB 2026/2027',
      link_tombol: '/ppdb',
      urutan: 3,
      status_aktif: 'Aktif',
      created_at: '2026-11-03 16:58:35'
    }
  ],

  komite_sekolah: [
    {
      id_komite: 1,
      nama_lengkap: 'Prof. Dr. Ir. H. Nasaruddin Salam, M.T.',
      jabatan: 'Ketua Komite',
      periode: '2024 - 2027',
      pekerjaan_atau_unsur: 'Guru Besar Universitas Hasanuddin & Tokoh Pendidikan Sulsel',
      foto: 'default-komite.jpg',
      urutan_tampil: 1,
      created_at: '2026-10-30 02:58:40'
    },
    {
      id_komite: 2,
      nama_lengkap: 'H. Andi Muhammad Ilham, S.H., M.Kn.',
      jabatan: 'Wakil Ketua Komite',
      periode: '2024 - 2027',
      pekerjaan_atau_unsur: 'Praktisi Hukum & Perwakilan IKA SMANSA Makassar',
      foto: 'default-komite.jpg',
      urutan_tampil: 2,
      created_at: '2026-10-30 02:58:40'
    },
    {
      id_komite: 3,
      nama_lengkap: 'Hj. St. Maryam, S.E., Ak., M.M.',
      jabatan: 'Sekretaris & Bendahara',
      periode: '2024 - 2027',
      pekerjaan_atau_unsur: 'Akuntan Publik & Perwakilan Orang Tua Siswa',
      foto: 'default-komite.jpg',
      urutan_tampil: 3,
      created_at: '2026-10-30 02:58:40'
    },
    {
      id_komite: 4,
      nama_lengkap: 'Dr. Ir. H. Burhanuddin, M.Si.',
      jabatan: 'Anggota Bidang Sarana & Kemitraan',
      periode: '2024 - 2027',
      pekerjaan_atau_unsur: 'Akademisi & Tokoh Masyarakat Kota Makassar',
      foto: 'default-komite.jpg',
      urutan_tampil: 4,
      created_at: '2026-10-30 02:58:40'
    }
  ],

  struktur_organisasi_info: [
    {
      id: 1,
      judul: 'Struktur Organisasi UPT SMAN 1 Makassar',
      periode: 'Tahun Ajaran 2025/2026',
      foto_bagan: null,
      keterangan: 'Bagan hierarki kepemimpinan, koordinasi manajerial, pembagian wewenang instruksional, serta tata administrasi layanan pendidikan di lingkungan SMA Negeri 1 Makassar.',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  struktur_organisasi_anggota: [
    {
      id: 1,
      nama_lengkap: 'Drs. H. Sulihin Mustafa, M.Pd.',
      nip: '196508121991031005',
      jabatan: 'Kepala UPT SMAN 1 Makassar',
      kategori: 'Pimpinan',
      urutan: 1,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 2,
      nama_lengkap: 'Prof. Dr. Ir. H. Nasaruddin Salam, M.T.',
      nip: null,
      jabatan: 'Ketua Komite Sekolah',
      kategori: 'Komite',
      urutan: 2,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 3,
      nama_lengkap: 'Rahmawati, S.E.',
      nip: '197601032006042009',
      jabatan: 'Kepala Tata Usaha',
      kategori: 'Administrasi',
      urutan: 3,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 4,
      nama_lengkap: 'Drs. Muhammad Arif, M.Pd.',
      nip: '196803151994031004',
      jabatan: 'Wakil Kepala Sekolah Bidang Kurikulum',
      kategori: 'Wakil Kepala Sekolah',
      urutan: 4,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 5,
      nama_lengkap: 'Dra. Hj. Nurhaedah, M.M.',
      nip: '196911201995122001',
      jabatan: 'Wakil Kepala Sekolah Bidang Kesiswaan',
      kategori: 'Wakil Kepala Sekolah',
      urutan: 5,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 6,
      nama_lengkap: 'Ir. H. Syamsuddin, S.Pd., M.T.',
      nip: '197008251997021002',
      jabatan: 'Wakil Kepala Sekolah Bidang Sarana & Prasarana',
      kategori: 'Wakil Kepala Sekolah',
      urutan: 6,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 7,
      nama_lengkap: 'Andi Fasdilah Saparang, S.Pd., M.Pd.',
      nip: '197405101998022003',
      jabatan: 'Wakil Kepala Sekolah Bidang Humas & Kemitraan',
      kategori: 'Wakil Kepala Sekolah',
      urutan: 7,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 8,
      nama_lengkap: 'Hendra Wijaya, S.Pd., M.Pd.',
      nip: '197811042006041008',
      jabatan: 'Koordinator Bimbingan dan Konseling (BK)',
      kategori: 'Koordinator',
      urutan: 8,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 9,
      nama_lengkap: 'Hj. Rosdiana, S.Pd., M.Pd.',
      nip: '197204181997032002',
      jabatan: 'Kepala Laboratorium IPA Terpadu',
      kategori: 'Koordinator',
      urutan: 9,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    },
    {
      id: 10,
      nama_lengkap: 'Ahmad Fauzi, S.Kom., M.Cs.',
      nip: '198509182010011012',
      jabatan: 'Kepala Laboratorium Komputer & Sistem Informasi',
      kategori: 'Koordinator',
      urutan: 10,
      foto: null,
      created_at: '2026-11-03 07:37:12'
    }
  ],

  guru_staf: [
    {
      id_guru: 1,
      nip: '196508121991031005',
      nama_lengkap: 'Drs. H. Sulihin Mustafa, M.Pd.',
      jenis_kelamin: 'L',
      jabatan: 'Kepala Sekolah',
      kategori_pegawai: 'Kepala Sekolah',
      foto: 'foto_kepsek-1793593136290-628189447.jpg',
      urutan_tampil: 1,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 2,
      nip: '197405101998022003',
      nama_lengkap: 'Andi Fasdilah Saparang, S.Pd., M.Pd.',
      jenis_kelamin: 'P',
      jabatan: 'Wakasek Humas & Guru Bahasa Inggris',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 2,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 3,
      nip: '196803151994031004',
      nama_lengkap: 'Drs. Muhammad Arif, M.Pd.',
      jenis_kelamin: 'L',
      jabatan: 'Wakasek Kurikulum & Guru Matematika',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 3,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 4,
      nip: '196911201995122001',
      nama_lengkap: 'Dra. Hj. Nurhaedah, M.M.',
      jenis_kelamin: 'P',
      jabatan: 'Wakasek Kesiswaan & Guru Biologi',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 4,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 5,
      nip: '197008251997021002',
      nama_lengkap: 'Ir. H. Syamsuddin, S.Pd., M.T.',
      jenis_kelamin: 'L',
      jabatan: 'Wakasek Sarpras & Guru Fisika',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 5,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 6,
      nip: '197204181997032002',
      nama_lengkap: 'Hj. Rosdiana, S.Pd., M.Pd.',
      jenis_kelamin: 'P',
      jabatan: 'Guru Kimia & Pembina KIRZHA',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 6,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 7,
      nip: '196602141992031006',
      nama_lengkap: 'Drs. H. Baharuddin, M.Si.',
      jenis_kelamin: 'L',
      jabatan: 'Guru Sejarah Indonesia',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 7,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 8,
      nip: '198007122005012007',
      nama_lengkap: 'Nurwahidah, S.Pd., M.Pd.',
      jenis_kelamin: 'P',
      jabatan: 'Guru Bahasa & Sastra Indonesia',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 8,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 9,
      nip: '198509182010011012',
      nama_lengkap: 'Ahmad Fauzi, S.Kom., M.Cs.',
      jenis_kelamin: 'L',
      jabatan: 'Guru Informatika & Pembina CITOS',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 9,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 10,
      nip: '196712051993032003',
      nama_lengkap: 'Dra. St. Aminah, M.Si.',
      jenis_kelamin: 'P',
      jabatan: 'Guru Ekonomi & Akuntansi',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 10,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 11,
      nip: '198206102008041001',
      nama_lengkap: 'Muh. Ridwan, S.Pd., M.Pd.',
      jenis_kelamin: 'L',
      jabatan: 'Guru PJOK & Pelatih Basket/Futsal',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 11,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 12,
      nip: '198303222009022005',
      nama_lengkap: 'Fatimah Zahra, S.Pd.I., M.Pd.',
      jenis_kelamin: 'P',
      jabatan: 'Guru PAI & Pembina IRMADAM',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 12,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 13,
      nip: '197811042006041008',
      nama_lengkap: 'Hendra Wijaya, S.Pd., M.Pd.',
      jenis_kelamin: 'L',
      jabatan: 'Koordinator Bimbingan Konseling (BK)',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 13,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 14,
      nip: '197908152007012014',
      nama_lengkap: 'Maria Magdalena, S.Pd.',
      jenis_kelamin: 'P',
      jabatan: 'Guru Agama Kristen & Pembina PERISAI',
      kategori_pegawai: 'Guru',
      foto: 'default-guru.jpg',
      urutan_tampil: 14,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 15,
      nip: '197601032006042009',
      nama_lengkap: 'Rahmawati, S.E.',
      jenis_kelamin: 'P',
      jabatan: 'Kepala Urusan Tata Usaha',
      kategori_pegawai: 'Staf TU',
      foto: 'default-guru.jpg',
      urutan_tampil: 15,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    },
    {
      id_guru: 16,
      nip: '198205172010011015',
      nama_lengkap: 'Daeng Marowa, A.Md.',
      jenis_kelamin: 'L',
      jabatan: 'Staf Administrasi & Operator Dapodik',
      kategori_pegawai: 'Staf TU',
      foto: 'default-guru.jpg',
      urutan_tampil: 16,
      status_aktif: 'Aktif',
      created_at: '2026-10-26 01:52:49'
    }
  ],

  ekstrakurikuler: [
    {
      id_eskul: 1,
      nama_eskul: 'Bawakaraeng Basketball Club Smansa (BBC)',
      pembina: 'Muh. Ridwan, S.Pd., M.Pd.',
      jadwal_latihan: 'Senin & Kamis (15.30 - 17.30)',
      deskripsi: 'Klub bola basket legendaris SMANSA Makassar yang aktif mencetak atlet berprestasi di kejuaraan DBL dan turnamen antarpelajar se-Sulawesi Selatan.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 2,
      nama_eskul: 'Sanggar Seni Sa’da Pawinru',
      pembina: 'Andi Fasdilah Saparang, S.Pd., M.Pd.',
      jadwal_latihan: 'Rabu & Sabtu (15.30 - 18.00)',
      deskripsi: 'Wadah eksplorasi seni tradisi Bugis-Makassar, tari kreasi nusantara, olah vokal, musik etnik, dan marching band kebanggaan SMAN 1 Makassar.',
      foto_eskul: 'eskul-tari.jpg'
    },
    {
      id_eskul: 3,
      nama_eskul: 'Paskibra SMANSA Makassar (Unit 101)',
      pembina: 'Ir. H. Syamsuddin, S.Pd., M.T.',
      jadwal_latihan: 'Selasa & Jumat (15.30 - 17.30)',
      deskripsi: 'Pasukan Pengibar Bendera SMAN 1 Makassar yang mendidik kedisiplinan, patriotisme, ketahanan fisik, dan formasi upacara tingkat kota hingga nasional.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 4,
      nama_eskul: 'Palang Merah Remaja (PMR Wira SMANSA)',
      pembina: 'Dra. Hj. Nurhaedah, M.M.',
      jadwal_latihan: 'Senin & Kamis (15.30 - 17.00)',
      deskripsi: 'Organisasi kemanusiaan tingkat wira yang melatih kesiapsiagaan pertolongan pertama, donor darah, mitigasi bencana, dan bakti sosial kemasyarakatan.',
      foto_eskul: 'eskul-pmr.jpg'
    },
    {
      id_eskul: 5,
      nama_eskul: 'Kelompok Ilmiah Remaja Smansa (KIRZHA)',
      pembina: 'Hj. Rosdiana, S.Pd., M.Pd.',
      jadwal_latihan: 'Kamis (14.30 - 16.30)',
      deskripsi: 'Komunitas riset sains, teknologi, dan ilmu sosial siswa SMAN 1 Makassar yang konsisten meraih juara dalam lomba karya tulis ilmiah dan OSN.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 6,
      nama_eskul: 'Bawakaraeng Futsal Club Smansa (BFC)',
      pembina: 'Muh. Ridwan, S.Pd., M.Pd.',
      jadwal_latihan: 'Selasa & Sabtu (16.00 - 18.00)',
      deskripsi: 'Ekstrakurikuler olahraga futsal yang menorehkan segudang trofi kompetisi antarpelajar dengan pembinaan taktik strategi dan sportivitas tinggi.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 7,
      nama_eskul: 'Cyberg Information Technology of Smansa (CITOS)',
      pembina: 'Ahmad Fauzi, S.Kom., M.Cs.',
      jadwal_latihan: 'Rabu & Jumat (15.00 - 17.00)',
      deskripsi: 'Komunitas teknologi informasi, robotika, coding web & mobile, desain grafis, dan keamanan digital siswa SMAN 1 Makassar.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 8,
      nama_eskul: 'Smansa English Conversation Club (SECC)',
      pembina: 'Andi Fasdilah Saparang, S.Pd., M.Pd.',
      jadwal_latihan: 'Selasa (15.00 - 17.00)',
      deskripsi: 'Klub penguasaan bahasa Inggris aktif, parliamentary debate, speech contest, dan story telling yang mencetak juara debat bahasa tingkat regional.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 9,
      nama_eskul: 'Ikatan Remaja Masjid Darul Ulum (IRMADAM)',
      pembina: 'Fatimah Zahra, S.Pd.I., M.Pd.',
      jadwal_latihan: 'Setiap Hari Ba\'da Ashar & Jumat',
      deskripsi: 'Organisasi kerohanian Islam yang berpusat di Masjid Darul Ulum SMANSA untuk pembinaan akhlak mulia, tahsin Al-Qur\'an, dan kajian keislaman.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 10,
      nama_eskul: 'Pramuka Ambalan Oryza Sativa (ORZAT)',
      pembina: 'Drs. H. Baharuddin, M.Si.',
      jadwal_latihan: 'Jumat (14.30 - 17.00)',
      deskripsi: 'Gerakan Pramuka Penegak Gugus Depan SMAN 1 Makassar yang melatih keterampilan kepanduan, survival, kepemimpinan, dan kecintaan alam.',
      foto_eskul: 'eskul-pramuka.jpg'
    },
    {
      id_eskul: 11,
      nama_eskul: 'Smansa Badminton Club (SBC)',
      pembina: 'Muh. Ridwan, S.Pd., M.Pd.',
      jadwal_latihan: 'Senin & Rabu (15.30 - 17.30)',
      deskripsi: 'Klub bulutangkis dengan pembinaan teknik pukulan, kelincahan, dan persiapan intensif turnamen O2SN antarsekolah se-Sulawesi Selatan.',
      foto_eskul: 'default-eskul.jpg'
    },
    {
      id_eskul: 12,
      nama_eskul: 'Fotografi Smansa (Forsa)',
      pembina: 'Ahmad Fauzi, S.Kom., M.Cs.',
      jadwal_latihan: 'Sabtu (14.00 - 17.00)',
      deskripsi: 'Wadah kreatif pecinta seni fotografi, sinematografi, dan jurnalisme visual yang mendokumentasikan setiap peristiwa penting sekolah.',
      foto_eskul: 'default-eskul.jpg'
    }
  ],

  ppdb_pengaturan: [
    {
      id: 1,
      tahun_ajaran: '2026/2027',
      nama_gelombang: 'Jalur Domisili, Afirmasi, Prestasi & Mutasi',
      status_loket: 'Buka',
      tgl_mulai_daftar: '2026-06-15',
      tgl_selesai_daftar: '2026-06-30',
      tgl_pengumuman: '2026-07-03',
      tgl_daftar_ulang: '2026-07-06',
      kuota_total: 432,
      kuota_zonasi: 216,
      kuota_prestasi: 130,
      kuota_afirmasi: 65,
      kuota_mutasi: 21,
      pesan_pengumuman: 'Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Makassar Tahun Ajaran 2026/2027 telah dibuka secara resmi. Silakan buat akun calon siswa, pilih jalur pendaftaran yang sesuai, serta lengkapi data dan unggah berkas kelengkapan administrasi sebelum batas akhir pendaftaran.',
      kontak_panitia: '(0411) 3624440 / 0812-4233-4455',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  pendaftar_ppdb: [
    {
      id_pendaftar: 1,
      no_pendaftaran: 'PPDB2026001',
      nama_siswa: 'Andi Muhammad Fauzan',
      nisn: '0087654321',
      jenis_kelamin: 'Laki-laki',
      asal_sekolah: 'SMP Negeri 6 Makassar',
      jalur_pendaftaran: 'Zonasi',
      nama_ortu: 'Ir. H. Andi Syahrul',
      no_hp: '081144556677',
      alamat_domisili: 'Jl. Masjid Raya No. 24, Kel. Gaddong, Bontoala, Makassar',
      catatan: 'Jalur Zonasi Domisili Radius 450 meter dari Kampus SMANSA',
      status_seleksi: 'Diterima',
      tanggal_daftar: '2026-06-16 08:30:00',
      email: 'fauzan@gmail.com',
      password: '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef',
      no_wa: '081144556677',
      tempat_lahir: 'Makassar',
      tanggal_lahir: '2010-04-12',
      agama: 'Islam',
      npsn_asal_sekolah: '40307221',
      nama_ayah: 'Andi Syahrul',
      nama_ibu: 'Andi Nurhasanah',
      pekerjaan_ortu: 'PNS / ASN',
      penghasilan_ortu: 'Rp 5.000.000 - Rp 10.000.000',
      berkas_foto: null,
      berkas_kk: null,
      berkas_akta: null,
      berkas_ijazah: null,
      is_submitted: 1
    },
    {
      id_pendaftar: 2,
      no_pendaftaran: 'PPDB2026002',
      nama_siswa: 'Siti Nurhaliza Putri',
      nisn: '0089123456',
      jenis_kelamin: 'Perempuan',
      asal_sekolah: 'SMP Islam Athirah Makassar',
      jalur_pendaftaran: 'Prestasi',
      nama_ortu: 'Drs. H. Mulyadi',
      no_hp: '081233445566',
      alamat_domisili: 'Jl. Urip Sumoharjo No. 88, Makassar',
      catatan: 'Juara 1 OSN Matematika Tingkat Kota Makassar',
      status_seleksi: 'Berkas Terverifikasi',
      tanggal_daftar: '2026-06-16 09:15:00',
      email: 'haliza@gmail.com',
      password: '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef',
      no_wa: '081233445566',
      tempat_lahir: 'Makassar',
      tanggal_lahir: '2010-08-25',
      agama: 'Islam',
      npsn_asal_sekolah: '40307550',
      nama_ayah: 'Mulyadi',
      nama_ibu: 'Hj. Mardiana',
      pekerjaan_ortu: 'Wiraswasta',
      penghasilan_ortu: 'Di atas Rp 10.000.000',
      berkas_foto: null,
      berkas_kk: null,
      berkas_akta: null,
      berkas_ijazah: null,
      is_submitted: 1
    },
    {
      id_pendaftar: 3,
      no_pendaftaran: 'PPDB2026003',
      nama_siswa: 'Christian Jonathan Tan',
      nisn: '0081239874',
      jenis_kelamin: 'Laki-laki',
      asal_sekolah: 'SMP Kristen Rajawali Makassar',
      jalur_pendaftaran: 'Prestasi',
      nama_ortu: 'David Jonathan Tan',
      no_hp: '081355667788',
      alamat_domisili: 'Jl. Veteran Utara No. 112, Makassar',
      catatan: 'Medali Emas Kejuaraan Renang Antarpelajar se-Sulsel',
      status_seleksi: 'Menunggu Verifikasi',
      tanggal_daftar: '2026-06-17 10:00:00',
      email: 'christian@gmail.com',
      password: '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef',
      no_wa: '081355667788',
      tempat_lahir: 'Makassar',
      tanggal_lahir: '2010-02-18',
      agama: 'Kristen',
      npsn_asal_sekolah: '40307332',
      nama_ayah: 'David Jonathan Tan',
      nama_ibu: 'Linda Wijaya',
      pekerjaan_ortu: 'Karyawan Swasta',
      penghasilan_ortu: 'Rp 5.000.000 - Rp 10.000.000',
      berkas_foto: null,
      berkas_kk: null,
      berkas_akta: null,
      berkas_ijazah: null,
      is_submitted: 1
    },
    {
      id_pendaftar: 4,
      no_pendaftaran: 'PPDB2026004',
      nama_siswa: 'Nur Annisa Maharani',
      nisn: '0086543219',
      jenis_kelamin: 'Perempuan',
      asal_sekolah: 'SMP Negeri 12 Makassar',
      jalur_pendaftaran: 'Afirmasi',
      nama_ortu: 'Baharuddin',
      no_hp: '085244112233',
      alamat_domisili: 'Jl. Gunung Latimojong No. 45, Makassar',
      catatan: 'Pemegang Kartu Indonesia Pintar (KIP)',
      status_seleksi: 'Berkas Terverifikasi',
      tanggal_daftar: '2026-06-17 11:30:00',
      email: 'annisa@gmail.com',
      password: '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef',
      no_wa: '085244112233',
      tempat_lahir: 'Makassar',
      tanggal_lahir: '2010-11-09',
      agama: 'Islam',
      npsn_asal_sekolah: '40307234',
      nama_ayah: 'Baharuddin',
      nama_ibu: 'Salmawati',
      pekerjaan_ortu: 'Buruh Harian Lepas',
      penghasilan_ortu: 'Di bawah Rp 2.000.000',
      berkas_foto: null,
      berkas_kk: null,
      berkas_akta: null,
      berkas_ijazah: null,
      is_submitted: 1
    },
    {
      id_pendaftar: 5,
      no_pendaftaran: 'PPDB2026005',
      nama_siswa: 'Rizky Pratama Wijaya',
      nisn: '0084567890',
      jenis_kelamin: 'Laki-laki',
      asal_sekolah: 'SMP Negeri 3 Makassar',
      jalur_pendaftaran: 'Perpindahan Tugas',
      nama_ortu: 'Letkol Inf. Hendro Wijaya',
      no_hp: '081299887766',
      alamat_domisili: 'Jl. Jenderal Sudirman No. 15, Makassar',
      catatan: 'Surat Penugasan Mutasi Instansi TNI AD Kodam XIV/Hasanuddin',
      status_seleksi: 'Menunggu Verifikasi',
      tanggal_daftar: '2026-06-18 13:45:00',
      email: 'rizky@gmail.com',
      password: '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef',
      no_wa: '081299887766',
      tempat_lahir: 'Makassar',
      tanggal_lahir: '2010-06-30',
      agama: 'Islam',
      npsn_asal_sekolah: '40307225',
      nama_ayah: 'Hendro Wijaya',
      nama_ibu: 'Ratna Juwita',
      pekerjaan_ortu: 'TNI / POLRI',
      penghasilan_ortu: 'Rp 5.000.000 - Rp 10.000.000',
      berkas_foto: null,
      berkas_kk: null,
      berkas_akta: null,
      berkas_ijazah: null,
      is_submitted: 1
    }
  ],

  osis_akun: [
    {
      id: 1,
      username: 'osis',
      password: '$2b$10$O43waDgh68FzfBUqm8w5zu8l67JTA9XiK0q5Oa73mmjrD23nuBM0e', // password 'osis123'
      nama_pengurus: 'Pengurus Inti OSIS SMANSA',
      jabatan: 'Administrator OSIS SMAN 1 Makassar',
      foto: null,
      created_at: '2026-11-03 14:29:22'
    }
  ],

  osis_profil: [
    {
      id: 1,
      nama_ketua: 'Muhammad Rifqi Pratama',
      kelas_ketua: 'Kelas XI MIPA 1',
      periode: '2025/2026',
      visi_utama: 'Mewujudkan OSIS SMAN 1 Makassar yang Progresif, Inspiratif, Kolaboratif, dan Berkarakter Kuat Berlandaskan Nilai Ketakwaan serta Semangat Berprestasi Menuju Generasi Emas.',
      teks_sambutan: 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk Seluruh Sahabat SMANSA!\r\n\r\nSelamat datang di laman resmi OSIS SMA Negeri 1 Makassar. Sebagai representasi dan wadah aspirasi seluruh peserta didik SMANSA, pengurus OSIS periode 2025/2026 berkomitmen hadir sebagai motor penggerak kebaikan, wadah pengembangan potensi kepemimpinan, dan pencipta ruang kolaborasi yang suportif bagi seluruh siswa.\r\n\r\nMelalui berbagai agenda unggulan di bidang keagamaan, penalaran ilmiah, seni budaya, olahraga, kepedulian sosial kemasyarakatan, hingga literasi digital, kami bertekad meneruskan tradisi kejayaan almamater tercinta. Jangan ragu untuk berbagi gagasan, ide kreatif, dan karya terbaik demi kemajuan SMANSA Makassar. SMANSA Bisa, SMANSA Juara!\r\n\r\nWassalamu’alaikum Warahmatullahi Wabarakatuh.',
      foto_ketua: 'default-osis.jpg',
      updated_at: '2026-11-05 12:00:00'
    }
  ],

  osis_pengurus: [
    {
      id: 1,
      nama_lengkap: 'Muhammad Rifqi Pratama',
      jabatan: 'Ketua Umum OSIS',
      kategori: 'Pengurus Inti',
      kelas: 'Kelas XI MIPA 1',
      motto: 'Memimpin dengan keteladanan, melayani dengan kerendahan hati demi kemajuan almamater tercinta.',
      foto: 'default-osis.jpg',
      urutan_tampil: 1,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 2,
      nama_lengkap: 'Andi Nurul Izzah',
      jabatan: 'Wakil Ketua Umum',
      kategori: 'Pengurus Inti',
      kelas: 'Kelas XI MIPA 3',
      motto: 'Sinergi dan empati adalah kunci mewujudkan generasi berdaya cipta.',
      foto: 'default-osis.jpg',
      urutan_tampil: 2,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 3,
      nama_lengkap: 'Fathir Al-Ghifari',
      jabatan: 'Sekretaris Umum',
      kategori: 'Pengurus Inti',
      kelas: 'Kelas XI IPS 2',
      motto: 'Tertib administrasi, sigap komunikasi, teguh memegang amanah.',
      foto: 'default-osis.jpg',
      urutan_tampil: 3,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 4,
      nama_lengkap: 'Kayla Azzahra',
      jabatan: 'Bendahara Umum',
      kategori: 'Pengurus Inti',
      kelas: 'Kelas XI MIPA 2',
      motto: 'Transparan, akuntabel, dan cermat mengelola amanah dana kegiatan organisasi.',
      foto: 'default-osis.jpg',
      urutan_tampil: 4,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 5,
      nama_lengkap: 'Sultan Malik Ibrahim',
      jabatan: 'Ketua Sekbid 1 (Ketaqwaan & Rohani)',
      kategori: 'Koordinator Bidang',
      kelas: 'Kelas XI MIPA 4',
      motto: 'Meneguhkan fondasi spiritual generasi muda di tengah arus modernisasi.',
      foto: 'default-osis.jpg',
      urutan_tampil: 5,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 6,
      nama_lengkap: 'Dimas Aditya Pratama',
      jabatan: 'Ketua Sekbid 2 (Bela Negara & Kedisiplinan)',
      kategori: 'Koordinator Bidang',
      kelas: 'Kelas XI IPS 1',
      motto: 'Disiplin adalah nafas kepemimpinan sejati.',
      foto: 'default-osis.jpg',
      urutan_tampil: 6,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 7,
      nama_lengkap: 'Clarissa Olivia Putri',
      jabatan: 'Ketua Sekbid 3 (Seni & Apresiasi Budaya)',
      kategori: 'Koordinator Bidang',
      kelas: 'Kelas XI IPS 3',
      motto: 'Melestarikan warisan budaya nusantara melalui kreasi estetika kontemporer.',
      foto: 'default-osis.jpg',
      urutan_tampil: 7,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 8,
      nama_lengkap: 'Rayhan Dwi Cahyo',
      jabatan: 'Ketua Sekbid 4 (Iptek, Riset & Multimedia)',
      kategori: 'Koordinator Bidang',
      kelas: 'Kelas XI MIPA 5',
      motto: 'Mendorong budaya literasi sains dan kecakapan teknologi di era kecerdasan buatan.',
      foto: 'default-osis.jpg',
      urutan_tampil: 8,
      created_at: '2026-11-02 07:40:17'
    }
  ],

  osis_proker: [
    {
      id: 1,
      judul: 'Bawakaraeng Championship 2026 (SMANSA Cup)',
      kategori: 'Olahraga & Prestasi',
      icon: 'fa-trophy',
      jadwal: 'Oktober 2026',
      target: 'Pelajar SMA se-Sulawesi Selatan',
      status: 'Sedang Berjalan',
      deskripsi: 'Turnamen akbar tahunan cabang bola basket, futsal, bulutangkis, dan e-sport antarpelajar SMA se-Sulawesi Selatan untuk memupuk sportivitas dan talenta muda.',
      urutan_tampil: 1,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 2,
      judul: 'Gebyar Malam Puncak Seni Budaya Sa’da Pawinru',
      kategori: 'Seni & Budaya',
      icon: 'fa-masks-theater',
      jadwal: 'November 2026',
      target: 'Seluruh Siswa, Guru & Alumni',
      status: 'Sedang Berjalan',
      deskripsi: 'Pentas seni kolosal persembahan siswa SMAN 1 Makassar yang menampilkan teater musikal, tari etnik Bugis-Makassar, pameran daur ulang, dan penampilan band sekolah.',
      urutan_tampil: 2,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 3,
      judul: 'Latihan Dasar Kepemimpinan Siswa (LDKS) 2026',
      kategori: 'Kepemimpinan & Karakter',
      icon: 'fa-compass',
      jadwal: 'Agustus 2026',
      target: 'Pengurus OSIS, MPK & Ekstrakurikuler',
      status: 'Selesai',
      deskripsi: 'Kawah candradimuka pembentukan karakter kepemimpinan, manajemen organisasi, penyusunan anggaran, problem solving, dan team building bagi pengurus organisasi siswa.',
      urutan_tampil: 3,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 4,
      judul: 'Smansa Mengajar & Bakti Sosial Pesisir Makassar',
      kategori: 'Sosial & Pengabdian',
      icon: 'fa-hands-holding-heart',
      jadwal: 'Desember 2026',
      target: 'Masyarakat Pesisir & Anak Usia Sekolah',
      status: 'Akan Datang',
      deskripsi: 'Program pengabdian sosial OSIS dengan membagikan paket alat tulis, donasi buku bacaan, serta pendampingan belajar calistung bagi adik-adik di perkampungan nelayan.',
      urutan_tampil: 4,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 5,
      judul: 'Smansa Digital Literacy & Artificial Intelligence Workshop',
      kategori: 'Iptek & Riset',
      icon: 'fa-laptop-code',
      jadwal: 'September 2026',
      target: 'Siswa Kelas X dan XI',
      status: 'Selesai',
      deskripsi: 'Seminar dan pelatihan interaktif pemanfaatan AI secara etis, pembuatan portofolio digital, dan keamanan siber di kalangan pelajar SMA.',
      urutan_tampil: 5,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 6,
      judul: 'Gebyar Semarak Ramadhan & Tadarus di Kampus',
      kategori: 'Keagamaan & Rohani',
      icon: 'fa-mosque',
      jadwal: 'Maret - April 2026',
      target: 'Civitas Muslim SMAN 1 Makassar',
      status: 'Akan Datang',
      deskripsi: 'Rangkaian kegiatan pesantren kilat, perlombaan dai cilik/remaja, tadarus bersama di Masjid Darul Ulum, serta penyaluran zakat fitrah kepada kaum dhuafa.',
      urutan_tampil: 6,
      created_at: '2026-11-02 07:40:17'
    }
  ],

  osis_mading: [
    {
      id: 1,
      judul: 'Strategi Jitu Menembus Fakultas Kedokteran dan Teknik Favorit Lewat Jalur SNBP',
      kategori: 'Tips Akademik',
      penulis: 'Kayla Azzahra',
      kelas: 'Kelas XI MIPA 2',
      tanggal: '28 Oktober 2026',
      cuplikan: 'Kunci sukses menembus PTN impian tidak semata-mata bergantung pada nilai rapor tinggi, tetapi juga stabilitas tren grafik nilai, pemilihan portofolio prestasi sertifikat, serta pemahaman rekam jejak alumni di program studi yang dituju.',
      likes: 48,
      foto: null,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 2,
      judul: 'Menjaga Api Kebanggaan: Kilas Balik 75 Tahun Dedikasi Almamater SMANSA Makassar',
      kategori: 'Opini & Inspirasi',
      penulis: 'Muhammad Rifqi Pratama',
      kelas: 'Kelas XI MIPA 1',
      tanggal: '15 Oktober 2026',
      cuplikan: 'Berdiri sejak 1950 di jantung kota Makassar, SMANSA telah melahirkan ribuan tokoh besar. Tugas kita hari ini bukan sekadar membanggakan nama besar masa lalu, tetapi membuktikan bahwa kita layak menjadi penerus tongkat estafet prestasi tersebut.',
      likes: 62,
      foto: null,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 3,
      judul: 'Mengenal Lebih Dekat Budaya Bahari Sulawesi Selatan Lewat Gelar Karya P5',
      kategori: 'Liputan Budaya',
      penulis: 'Clarissa Olivia Putri',
      kelas: 'Kelas XI IPS 3',
      tanggal: '02 Oktober 2026',
      cuplikan: 'Melalui projek penguatan profil pelajar Pancasila, siswa SMANSA diajak menyelami filosofi keperkasaan perahu Pinisi dan kearifan masyarakat pesisir Bugis-Makassar dalam menjaga harmoni dengan alam lautan.',
      likes: 35,
      foto: null,
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 4,
      judul: 'Tips Mengatur Waktu Antara Organisasi OSIS dan Nilai Akademik Agar Tetap Paripurna',
      kategori: 'Life Skills',
      penulis: 'Fathir Al-Ghifari',
      kelas: 'Kelas XI IPS 2',
      tanggal: '20 September 2026',
      cuplikan: 'Menjadi organisatoris bukan alasan untuk mengorbankan prestasi belajar di kelas. Dengan metode time boxing dan skala prioritas kuadran Eisenhower, kita bisa meraih dua-duanya secara seimbang tanpa burnout.',
      likes: 51,
      foto: null,
      created_at: '2026-11-02 07:40:17'
    }
  ],

  osis_galeri: [
    {
      id: 1,
      judul: 'Upacara Serah Terima Jabatan & Pelantikan Pengurus OSIS Periode 2025/2026',
      kategori: 'Organisasi',
      tanggal: 'Agustus 2025',
      foto: 'foto_galeri_osis-1793719984182-576058740.png',
      keterangan: 'Momen khidmat pengucapan ikrar pengurus OSIS SMAN 1 Makassar di hadapan Kepala Sekolah dan dewan guru.',
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 2,
      judul: 'Aksi Solidaritas Bakti Lingkungan dan Penghijauan Kampus Bawakaraeng',
      kategori: 'Sosial',
      tanggal: 'September 2025',
      foto: 'foto_galeri_osis-1793719984182-576058740.png',
      keterangan: 'Pengurus OSIS bersama kader Adiwiyata merawat tanaman peneduh dan taman sekolah di Jl. Gunung Bawakaraeng.',
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 3,
      judul: 'Pentas Seni Akustik & Teater Siswa SMANSA dalam Bulan Bahasa',
      kategori: 'Seni',
      tanggal: 'Oktober 2025',
      foto: 'foto_galeri_osis-1793719984182-576058740.png',
      keterangan: 'Kreativitas panggung tanpa batas persembahan siswa-siswi SMAN 1 Makassar dalam menyemarakkan peringatan bulan bahasa.',
      created_at: '2026-11-02 07:40:17'
    },
    {
      id: 4,
      judul: 'Latihan Gabungan Baris-Berbaris Paskibra Unit 101 SMANSA',
      kategori: 'Kesiswaan',
      tanggal: 'November 2025',
      foto: 'foto_galeri_osis-1793719984182-576058740.png',
      keterangan: 'Latihan ketangkasan formasi dan kedisiplinan anggota Paskibra SMAN 1 Makassar di lapangan sekolah.',
      created_at: '2026-11-02 07:40:17'
    }
  ],

  pesan_kontak: [
    {
      id_pesan: 1,
      nama_pengirim: 'H. Andi Ridwan (Wali Calon Siswa)',
      email_atau_wa: '081244558899',
      subjek: '[PPDB 2026/2027] Persyaratan Jalur Zonasi Domisili Bontoala',
      isi_pesan: 'Assalamu’alaikum panitia PPDB SMANSA Makassar, kami bermaksud menanyakan persyaratan berkas verifikasi kartu keluarga untuk jalur zonasi radius kecamatan Bontoala. Terima kasih atas bantuannya.',
      status_baca: 'Sudah Dibaca',
      tanggal_kirim: '2026-10-15 08:30:00'
    },
    {
      id_pesan: 2,
      nama_pengirim: 'Dr. Hj. Marwah, M.Kes.',
      email_atau_wa: '081399881122',
      subjek: 'Konsultasi Verifikasi Sertifikat Prestasi OSN',
      isi_pesan: 'Selamat pagi panitia, putri kami memiliki sertifikat medali perak olimpiade sains tingkat provinsi. Apakah pengesahannya cukup dari Dinas Pendidikan Provinsi Sulsel? Terima kasih.',
      status_baca: 'Sudah Dibaca',
      tanggal_kirim: '2026-10-22 10:15:00'
    },
    {
      id_pesan: 3,
      nama_pengirim: 'Bambang Supriyanto',
      email_atau_wa: 'bambang.supriyanto@gmail.com',
      subjek: 'Permohonan Kerjasama Edukasi Kampus Goes to SMANSA',
      isi_pesan: 'Salam hangat, kami dari tim humas perguruan tinggi ingin mengajukan permohonan kunjungan sosialisasi jalur masuk perguruan tinggi bagi siswa kelas XII SMAN 1 Makassar.',
      status_baca: 'Belum Dibaca',
      tanggal_kirim: '2026-11-02 14:00:00'
    }
  ],

  statistik_pengunjung: [
    { id: 1, ip_address: '127.0.0.1', user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', halaman: '/', tanggal: '2026-11-01', waktu_terakhir: '2026-11-01 23:45:10', hits: 45 },
    { id: 2, ip_address: '127.0.0.1', user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', halaman: '/ppdb', tanggal: '2026-11-02', waktu_terakhir: '2026-11-02 22:15:00', hits: 32 },
    { id: 3, ip_address: '127.0.0.1', user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', halaman: '/', tanggal: '2026-11-03', waktu_terakhir: '2026-11-03 21:50:30', hits: 58 },
    { id: 4, ip_address: '127.0.0.1', user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', halaman: '/berita', tanggal: '2026-11-04', waktu_terakhir: '2026-11-04 20:30:15', hits: 40 },
    { id: 5, ip_address: '127.0.0.1', user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', halaman: '/', tanggal: '2026-11-05', waktu_terakhir: '2026-11-05 13:45:00', hits: 67 }
  ]
};

// Function to convert table data to SQL INSERT statement
function generateInsert(tableName, rows) {
  if (!rows || rows.length === 0) return '';
  const cols = Object.keys(rows[0]);
  const colSql = cols.map(c => `\`${c}\``).join(', ');
  const valuesSql = rows.map(r => {
    return '(' + cols.map(c => esc(r[c])).join(', ') + ')';
  }).join(',\n');
  return `INSERT INTO \`${tableName}\` (${colSql}) VALUES\n${valuesSql};\n`;
}

// Now replace in originalSql
let outputSql = originalSql;

// First, update database name and table defaults where old school name might be baked in
outputSql = 'SET FOREIGN_KEY_CHECKS = 0;\n' + outputSql;
outputSql = outputSql.replace(/-- Database: `db_smpn1_rantepao`/g, "-- Database: `db_sman1_makassar`");
outputSql = outputSql.replace(
  /`wilayah_lokasi` varchar\(150\) DEFAULT 'Kec\. Rantepao, Toraja Utara'/g,
  "`wilayah_lokasi` varchar(150) DEFAULT 'Kec. Bontoala, Kota Makassar'"
);
outputSql = outputSql.replace(
  /DEFAULT 'Struktur Organisasi UPT SMP Negeri 1 Rantepao'/g,
  "DEFAULT 'Struktur Organisasi UPT SMAN 1 Makassar'"
);
outputSql = outputSql.replace(
  /`nama_sekolah` varchar\(100\) NOT NULL DEFAULT '[^']+'/g,
  "`nama_sekolah` varchar(100) NOT NULL DEFAULT 'UPT SMAN 1 Makassar'"
);
outputSql = outputSql.replace(
  /`logo_sekolah` varchar\(255\) DEFAULT '[^']+'/g,
  "`logo_sekolah` varchar(255) DEFAULT 'logo-sman1-makassar.png'"
);
outputSql = outputSql.replace(
  /`lokasi` varchar\(150\) DEFAULT 'Kampus SMPN 1 Rantepao'/g,
  "`lokasi` varchar(150) DEFAULT 'Kampus SMAN 1 Makassar'"
);
outputSql = outputSql.replace(
  /`jabatan` varchar\(100\) NOT NULL DEFAULT 'Pengurus OSIS UPT SMPN 1 Rantepao'/g,
  "`jabatan` varchar(100) NOT NULL DEFAULT 'Pengurus OSIS UPT SMAN 1 Makassar'"
);
outputSql = outputSql.replace(
  /`nama_lengkap` varchar\(100\) NOT NULL DEFAULT 'Administrator SMPN 1 Rantepao'/g,
  "`nama_lengkap` varchar(100) NOT NULL DEFAULT 'Administrator SMAN 1 Makassar'"
);

// Add DROP TABLE IF EXISTS before CREATE TABLE
outputSql = outputSql.replace(/CREATE TABLE `([^`]+)`/g, (match, tableName) => {
  return `DROP TABLE IF EXISTS \`${tableName}\`;\n${match}`;
});

// Replace each table's INSERT block
for (const [table, rows] of Object.entries(data)) {
  const insertRegex = new RegExp(`INSERT INTO \`${table}\`[\\s\\S]*?\\);\\s*(?:\\r?\\n|$)`, 'i');
  const newInsert = generateInsert(table, rows);
  if (insertRegex.test(outputSql)) {
    outputSql = outputSql.replace(insertRegex, newInsert + '\n');
    console.log(`Replaced INSERT for ${table}`);
  } else {
    console.log(`WARNING: INSERT INTO ${table} not found in original SQL!`);
  }
}

// Ensure FOREIGN_KEY_CHECKS = 1 at the end
outputSql = outputSql + '\nSET FOREIGN_KEY_CHECKS = 1;\n';

// Update AUTO_INCREMENT values to match the next ID
const maxIds = {};
for (const [table, rows] of Object.entries(data)) {
  const firstCol = Object.keys(rows[0])[0]; // usually id or id_*
  let maxId = 0;
  for (const r of rows) {
    const val = Number(r[firstCol]);
    if (!isNaN(val) && val > maxId) maxId = val;
  }
  maxIds[table] = maxId + 1;
}

for (const [table, nextId] of Object.entries(maxIds)) {
  const alterRegex = new RegExp(`(ALTER TABLE \`${table}\`\\s+MODIFY \`[^\`]+\`[^\n]*?AUTO_INCREMENT=)\\d+;`, 'i');
  if (alterRegex.test(outputSql)) {
    outputSql = outputSql.replace(alterRegex, `$1${nextId};`);
    console.log(`Updated AUTO_INCREMENT for ${table} to ${nextId}`);
  }
}

// Save output
fs.writeFileSync('db_sman1_makassar.sql', outputSql, 'utf8');
console.log('Successfully written db_sman1_makassar.sql, length:', outputSql.length);
