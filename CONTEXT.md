# Konteks Proyek Magang - Mujahid Zulfadly

## Informasi Proyek Saat Ini
- **Nama Proyek:** Website Profil & Informasi UPT SMPN 1 Rantepao, Toraja Utara (Proyek 1).
- **Tech Stack:** Node.js, Express.js, MySQL (`mysql2` promise pool), EJS Template Engine, Tailwind CSS (via CDN).
- **Nama Database:** `db_smpn1_rantepao` (Berjalan lokal di MySQL / phpMyAdmin).

## Status Tabel Database (10 dari 10 Tabel Aktif 100%)
1. `users`: Autentikasi Login, Session Cookie, Ganti Kata Sandi Administrator.
2. `profil_sekolah`: Pengaturan identitas sekolah, visi-misi, kepala sekolah, sambutan, alamat, peta embed.
3. `kategori_berita`: Relasi kategori berita (Akademik, Prestasi, dsb.).
4. `berita`: CRUD Berita, upload gambar, status publish/draft, reader counter, halaman `/berita/:slug`.
5. `pengumuman`: CRUD Pengumuman resmi, filter tanggal terbit.
6. `guru_staf`: CRUD Direktori guru dan pegawai, upload foto, urutan tampil.
7. `ekstrakurikuler`: CRUD Ekstrakurikuler di Admin, upload foto kegiatan (`public/uploads/eskul`), kartu eskul berfoto di Beranda.
8. `galeri`: CRUD Galeri di Admin, upload foto (`public/uploads/galeri`), halaman publik `/galeri` dengan filter kategori dan lightbox viewer.
9. `pesan_kontak`: Formulir pesan di Beranda, notifikasi pesan belum dibaca di Dashboard, baca detail pesan, dan hapus pesan.
10. `pendaftar_ppdb`: Pendaftaran calon peserta didik baru (PPDB Online & Offline loket), nomor registrasi unik (`PPDB-2026-XXXX`), 4 jalur seleksi (Zonasi, Prestasi, Afirmasi, Perpindahan), status verifikasi & kelulusan (`Menunggu Verifikasi`, `Berkas Terverifikasi`, `Diterima`, `Tidak Diterima`).

## Progres yang Sudah Selesai
- **Modul PPDB Online 2026/2027 (`views/ppdb.ejs` & `/ppdb`):**
  - Halaman informasi resmi Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027.
  - Penjelasan 4 Jalur Pendaftaran (Zonasi 50%, Prestasi 30%, Afirmasi 15%, Perpindahan Tugas Orang Tua 5%).
  - Alur 5 Tahapan Pendaftaran Siswa Baru (Visual step-by-step).
  - Rincian Checklist Dokumen Berkas Persyaratan Umum & Berkas Khusus per Jalur.
  - Formulir Pendaftaran PPDB Lengkap (Nama Siswa, NISN 10 Digit, Jenis Kelamin, Asal SD, Pilihan Jalur, Nama Ortu, No. WA, Alamat Domisili, Catatan Khusus).
  - Generator Nomor Registrasi Otomatis (`PPDB-2026-XXXX`) langsung tampil di alert konfirmasi pendaftaran.
  - Pusat Informasi Sekretariat PPDB, Kontak WhatsApp Panitia, dan FAQ interaktif (Accordion).
  - Banner PPDB di Beranda dan tautan di seluruh Navbar navigasi.
- **Modul Pengelolaan PPDB di Dashboard Admin (`views/admin.ejs` & `app.js`):**
  - Tab khusus **PPDB 2026** di sidebar dengan counter badge realtime pendaftar yang belum diverifikasi.
  - Kartu statistik PPDB di Overview tab dan tombol pintasan cepat "+ Pendaftar PPDB".
  - 4 Mini-Card metrik status: Total Pendaftar, Menunggu Verifikasi, Berkas Terverifikasi, Diterima Lulus.
  - Toolbar pencarian realtime (cari nama calon siswa, nomor registrasi, NISN, atau asal SD) dan filter ganda (Filter Jalur & Filter Status Seleksi).
  - Tabel rekapitulasi pendaftar lengkap dengan badge jalur berkode warna dan tombol chat WhatsApp langsung (`https://wa.me/...`).
  - Fitur **Cetak Rekap PPDB** terintegrasi (`window.print()`).
  - 4 Modal interaktif:
    1. Modal Tambah Pendaftar Manual (untuk panitia loket PPDB sekolah).
    2. Modal Detail Lengkap Calon Siswa (profil siswa, orang tua, kontak WA, alamat, dan catatan berkas).
    3. Modal Cepat Ubah Status Seleksi & Catatan Panitia.
    4. Modal Edit Lengkap Data Pendaftar.
  - Endpoint CRUD Backend lengkap: `POST /admin/ppdb/tambah`, `POST /admin/ppdb/edit/:id`, `POST /admin/ppdb/status/:id`, `POST /admin/ppdb/hapus/:id`.
- **Dashboard Admin Terpadu (`views/admin.ejs`):**
  - Sidebar modern & navigasi tab responsif (Ringkasan Info, Kelola Berita, Pengumuman, Guru & Staf, PPDB 2026, Ekstrakurikuler, Galeri Foto, Profil Sekolah, Pesan Masuk).
  - 7 Kartu statistik ringkasan data di tab Overview.
  - CRUD Lengkap (Berita, Pengumuman, Guru, PPDB, Ekstrakurikuler, Galeri Foto, Profil Sekolah, Pesan Masuk).
  - Sistem modal interaktif menggunakan atribut data HTML5 aman (tahan terhadap auto-formatter).
- **Modul Galeri Foto & Dokumentasi (`views/galeri.ejs` & `/galeri`):**
  - Halaman publik galeri visual dengan tab filter kategori (`Semua`, `Kegiatan Sekolah`, `Fasilitas`, `Prestasi`).
  - Fitur Lightbox / Viewer Foto Fullscreen responsif saat foto diklik (preview resolusi tinggi, caption, tanggal, dan kategori).
  - Preview dokumentasi foto terbaru langsung di halaman Beranda (`views/index.ejs`).
- **Modul Ekstrakurikuler:**
  - CRUD Ekstrakurikuler lengkap di admin (Tambah, Edit, Hapus, Upload Foto).
  - Tampilan kartu eskul berfoto di Beranda (`views/index.ejs`) lengkap dengan nama pembina dan jadwal latihan.
- **Sistem Autentikasi Admin (`express-session` & `bcryptjs`):**
  - Halaman Login modern (`views/login.ejs`) dengan toggle password dan alert error.
  - Proteksi rute admin & seluruh endpoint mutasi CRUD dengan middleware `isAuthenticated`.
  - Fitur Ubah Kata Sandi Administrator di tab Profil Sekolah.
- **Halaman Detail Berita Publik (`views/detail-berita.ejs` & `/berita/:slug`):**
  - Auto-increment viewer counter (`views + 1`).
  - Breadcrumb, info penulis, tanggal, dan tombol Bagikan (WhatsApp & Salin Tautan).
  - Sidebar berita terkait dan pengumuman sekolah.
- **Upload File Gambar (`multer`):**
  - Upload sampul berita (`public/uploads/berita`).
  - Upload foto guru/staf (`public/uploads/guru`).
  - Upload foto kegiatan eskul (`public/uploads/eskul`).
  - Upload foto dokumentasi galeri (`public/uploads/galeri`).

## Rencana Penyempurnaan Selanjutnya (Opsional)
1. **Halaman Arsip Berita Publik (`/berita`)**: Menampilkan seluruh arsip berita dengan fitur pencarian dan filter kategori (karena beranda saat ini hanya menampilkan 4 berita terbaru).
2. **Fitur Cetak / Laporan Rekap (Print View / Export PDF)**: Tombol cetak daftar tenaga pendidik & staf sekolah atau rekap pesan kontak untuk kelengkapan administrasi dan pembuktian proyek magang.
3. **Widget Floating WhatsApp**: Tombol melayang di pojok kanan bawah yang langsung menghubungkan pengunjung ke nomor WhatsApp sekolah.