-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Nov 2026 pada 04.27
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_smpn1_rantepao`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `penulis_id` int(11) NOT NULL,
  `judul` varchar(200) NOT NULL,
  `slug` varchar(220) NOT NULL,
  `isi_berita` longtext NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `views` int(11) DEFAULT 0,
  `status` enum('publish','draft') DEFAULT 'publish',
  `tanggal_publish` datetime DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id_berita`, `kategori_id`, `penulis_id`, `judul`, `slug`, `isi_berita`, `gambar`, `views`, `status`, `tanggal_publish`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Siswa SMPN 1 Rantepao Raih Juara 1 Olimpiade Sains Nasional Tingkat Kabupaten', 'siswa-smpn-1-rantepao-raih-juara-1-osn-kabupaten', 'Rantepao - Prestasi membanggakan kembali diraih oleh siswa-siswi UPT SMP Negeri 1 Rantepao dalam ajang Olimpiade Sains Nasional (OSN) tingkat Kabupaten Toraja Utara tahun ini...', 'berita-osn.jpg', 5, 'publish', '2026-10-26 09:52:49', '2026-10-26 01:52:49', '2026-11-05 01:28:43'),
(2, 1, 1, 'Pelaksanaan Upacara dan Perayaan Hari Pendidikan Nasional di SMPN 1 Rantepao', 'perayaan-hardiknas-smpn-1-rantepao', 'Rantepao - Seluruh warga sekolah mengikuti kegiatan upacara bendera dengan mengenakan pakaian adat Toraja dalam rangka memperingati Hari Pendidikan Nasional...', 'berita-hardiknas.jpg', 6, 'publish', '2026-10-26 09:52:49', '2026-10-26 01:52:49', '2026-10-30 07:16:53'),
(3, 3, 1, 'a uhojs', 'a-uhojs-1793606015937', 'dndinisnisbs', 'gambar-1793606015933-215218085.png', 3, 'publish', '2026-11-02 15:53:35', '2026-11-02 07:53:35', '2026-11-04 07:02:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekstrakurikuler`
--

CREATE TABLE `ekstrakurikuler` (
  `id_eskul` int(11) NOT NULL,
  `nama_eskul` varchar(100) NOT NULL,
  `pembina` varchar(100) NOT NULL,
  `jadwal_latihan` varchar(100) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `foto_eskul` varchar(255) DEFAULT 'default-eskul.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `ekstrakurikuler`
--

INSERT INTO `ekstrakurikuler` (`id_eskul`, `nama_eskul`, `pembina`, `jadwal_latihan`, `deskripsi`, `foto_eskul`) VALUES
(1, 'Pramuka', 'Bapak Yohanis Toding, S.Pd.', 'Sabtu, 14.00 - 16.30 WITA', 'Kegiatan kepanduan wajib untuk membentuk kedisiplinan dan kemandirian siswa.', 'foto_eskul-1793345325233-665850399.jpg'),
(2, 'Seni Tari & Musik Tradisional Toraja', 'Ibu Margaretha, S.Sn.', 'Jumat, 15.00 - 17.00 WITA', 'Wadah pelestarian seni tari Pa\'gellu dan musik bambu khas Toraja bagi siswa.', 'eskul-tari.jpg'),
(3, 'Palang Merah Remaja (PMR)', 'Ibu Maria Rante, S.Pd.', 'Kamis, 15.00 - 16.30 WITA', 'Melatih keterampilan pertolongan pertama dan kepedulian sosial di lingkungan sekolah.', 'eskul-pmr.jpg'),
(4, 'English Club SMPN 1', 'Bpk. Markus, S.Pd.', 'Rabu, 15.00 WITA', 'Wadah mengasah keterampilan berbahasa Inggris dan debat siswa.', 'default-eskul.jpg'),
(5, 'Osis', 'Mujahid Zulfadly', 'Sabtu, 14.00 - 16.30 WITA', 'znusbusbus', 'foto_eskul-1793345344547-557673215.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri`
--

CREATE TABLE `galeri` (
  `id_galeri` int(11) NOT NULL,
  `judul_foto` varchar(150) NOT NULL,
  `deskripsi_singkat` varchar(255) DEFAULT NULL,
  `kategori_galeri` enum('Kegiatan','Fasilitas','Prestasi') DEFAULT 'Kegiatan',
  `file_foto` varchar(255) NOT NULL,
  `tanggal_upload` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `galeri`
--

INSERT INTO `galeri` (`id_galeri`, `judul_foto`, `deskripsi_singkat`, `kategori_galeri`, `file_foto`, `tanggal_upload`) VALUES
(1, 'Peringatan Hari Pendidikan Nasional & Apel Akbar', 'Seluruh guru, tenaga kependidikan, dan siswa dalam apel bendera memperingati Hari Pendidikan Nasional di halaman sekolah.', 'Kegiatan', 'upacara-hardiknas.jpg', '2026-05-02'),
(2, 'Penampilan Tari Pa\'gellu Tradisional Siswa', 'Siswa-siswi ekstrakurikuler seni tari membawakan tarian tradisional khas Toraja dalam acara gelar karya pelajar.', 'Kegiatan', 'seni-tari-toraja.jpg', '2026-06-15'),
(3, 'Laboratorium Komputer & Pembelajaran Digital', 'Fasilitas komputer modern berpendingin udara dan berinternet cepat untuk menunjang ANBK dan pembelajaran TIK siswa.', 'Fasilitas', 'lab-komputer.jpg', '2026-07-20'),
(4, 'Juara 1 Olimpiade Sains Nasional (OSN) Pelajar', 'Siswa SMPN 1 Rantepao berhasil meraih piala dan medali kejuaraan Olimpiade Sains Nasional tingkat Kabupaten Toraja Utara.', 'Prestasi', 'prestasi-osn.jpg', '2026-08-10'),
(5, 'Kunjungan Edukasi Geopark Toraja Siswa', 'Pembelajaran luar kelas mempelajari geologi dan budaya karts Toraja.', 'Kegiatan', 'default-galeri.jpg', '2026-09-01'),
(6, 'Perkemahan Pembinaan Karakter & Kepramukaan', 'Pembinaan kemandirian dan kedisiplinan peserta didik melalui perkemahan kepramukaan.', 'Kegiatan', 'kegiatan-pramuka.jpg', '2026-09-15');

-- --------------------------------------------------------

--
-- Struktur dari tabel `guru_staf`
--

CREATE TABLE `guru_staf` (
  `id_guru` int(11) NOT NULL,
  `nip` varchar(30) DEFAULT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `jenis_kelamin` enum('L','P') NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `kategori_pegawai` enum('Kepala Sekolah','Guru','Staf TU') DEFAULT 'Guru',
  `foto` varchar(255) DEFAULT 'default-guru.jpg',
  `urutan_tampil` int(11) DEFAULT 10,
  `status_aktif` enum('Aktif','Pensiun','Mutasi') DEFAULT 'Aktif',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `guru_staf`
--

INSERT INTO `guru_staf` (`id_guru`, `nip`, `nama_lengkap`, `jenis_kelamin`, `jabatan`, `kategori_pegawai`, `foto`, `urutan_tampil`, `status_aktif`, `created_at`) VALUES
(1, '196801011994121001', 'Febry Anita R, S.T', 'L', 'Kepala Sekolah', 'Kepala Sekolah', 'foto_kepsek-1793593136290-628189447.jpg', 1, 'Aktif', '2026-10-26 01:52:49'),
(2, '197504122005012004', 'Maria Rante, S.Pd.', 'P', 'Guru Bahasa Inggris / Wakasek Kurikulum', 'Guru', 'default-guru.jpg', 2, 'Aktif', '2026-10-26 01:52:49'),
(3, '198208172009021003', 'Yohanis Toding, S.Pd., M.Si.', 'L', 'Guru Matematika', 'Guru', 'default-guru.jpg', 3, 'Aktif', '2026-10-26 01:52:49'),
(4, '273767827872', 'Mujahid Zulfadly', 'L', 'guru adalah pokonya', 'Guru', 'foto-1792995115091-61590117.jpeg', 1, 'Aktif', '2026-10-26 06:11:55'),
(5, '273767827872', 'Mujahid', 'L', 'guru adalah pokonya', 'Guru', 'default-guru.png', 10, 'Aktif', '2026-10-27 01:19:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `halaman_statis`
--

CREATE TABLE `halaman_statis` (
  `id` int(11) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `ikon` varchar(80) NOT NULL DEFAULT 'fa-solid fa-file-lines',
  `judul` varchar(150) NOT NULL,
  `ringkasan` varchar(500) DEFAULT NULL,
  `warna_badge` varchar(30) NOT NULL DEFAULT 'blue',
  `konten` mediumtext DEFAULT NULL,
  `items_json` mediumtext DEFAULT NULL,
  `paragraf_pembuka` text DEFAULT NULL,
  `paragraf_penutup` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `halaman_statis`
--

INSERT INTO `halaman_statis` (`id`, `slug`, `ikon`, `judul`, `ringkasan`, `warna_badge`, `konten`, `items_json`, `paragraf_pembuka`, `paragraf_penutup`, `updated_at`) VALUES
(1, 'sejarah', 'fa-solid fa-landmark', 'Sejarah Singkat UPT SMP Negeri 1 Rantepao', 'Menjelajahi tonggak sejarah pendirian, perkembangan, dan perjalanan prestasi SMP Negeri 1 Rantepao dari masa ke masa.', 'amber', '<p class=\"mb-4 text-justify leading-relaxed\">UPT SMP Negeri 1 Rantepao merupakan salah satu institusi pendidikan menengah pertama tertua, paling bersejarah, dan berprestasi di wilayah Kabupaten Toraja Utara, Sulawesi Selatan. Didirikan untuk menjawab kebutuhan pendidikan formal generasi muda Toraja pada era awal pembangunan nasional, sekolah ini telah mengabdi lebih dari setengah abad dalam mencerdaskan kehidupan bangsa.</p>\n<p class=\"mb-4 text-justify leading-relaxed\">Bermula dari sarana dan prasarana sederhana dengan beberapa ruang kelas darurat, semangat gotong royong para tokoh pendidik, pemangku adat, dan pemerintah daerah mendorong percepatan pengembangan sarana fisik sekolah. Dari waktu ke waktu, SMP Negeri 1 Rantepao terus berkembang menjadi sekolah rujukan kebanggaan masyarakat Toraja.</p>\n<p class=\"mb-4 text-justify leading-relaxed\">Hingga kini, ribuan alumni SMPN 1 Rantepao telah berkiprah sukses di berbagai bidang kehidupan—baik di pemerintahan, militer/kepolisian, kedokteran, akademisi, rohaniwan, hingga wirausahawan, tersebar di seluruh pelosok Nusantara maupun mancanegara, dengan tetap berpegang teguh pada keluhuran falsafah <em>Misa’ Kada Dipotuo, Pantan Kada Dipomate</em>.</p>', NULL, NULL, NULL, '2026-11-03 02:32:29'),
(3, 'sarana', 'fa-solid fa-building-columns', 'Sarana & Prasarana UPT SMP Negeri 1 Rantepao', 'Fasilitas ruang belajar modern, laboratorium sains & komputer, perpustakaan terakreditasi A, serta sarana olahraga representatif.', 'emerald', '<p class=\"mb-4 text-justify leading-relaxed\">Untuk mendukung tercapainya proses pembelajaran yang optimal dan berdaya saing tinggi, UPT SMP Negeri 1 Rantepao dilengkapi dengan sarana dan prasarana modern yang ramah peserta didik:</p>\n<div class=\"grid sm:grid-cols-2 gap-3.5 my-4\">\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-chalkboard-user text-amber-500\"></i> Ruang Kelas Representatif\n        </h5>\n        <p class=\"text-xs text-slate-600\">30+ ruang kelas dengan pencahayaan dan sirkulasi udara optimal, dilengkapi proyektor LCD dan sarana multimedia.</p>\n    </div>\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-flask text-blue-600\"></i> Laboratorium IPA Terpadu\n        </h5>\n        <p class=\"text-xs text-slate-600\">Peralatan praktikum fisika, biologi, dan kimia yang lengkap dan aman untuk penelitian saintifik siswa.</p>\n    </div>\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-laptop-code text-indigo-600\"></i> Lab Komputer & Server ANBK\n        </h5>\n        <p class=\"text-xs text-slate-600\">3 laboratorium komputer ber-AC terhubung jaringan gigabit dan internet serat optik kecepatan tinggi.</p>\n    </div>\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-book-bookmark text-emerald-600\"></i> Perpustakaan Digital & Fisik\n        </h5>\n        <p class=\"text-xs text-slate-600\">Koleksi ribuan buku pelajaran, fiksi, ensiklopedia serta e-library dengan area baca santai ber-karpet.</p>\n    </div>\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-volleyball text-red-500\"></i> Lapangan Olahraga Serbaguna\n        </h5>\n        <p class=\"text-xs text-slate-600\">Fasilitas bola basket, bola voli, bulutangkis, serta area senam kesegaran jasmani terpadu.</p>\n    </div>\n    <div class=\"bg-slate-50 p-4 rounded-2xl border border-slate-200\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1\">\n            <i class=\"fa-solid fa-mosque text-teal-600\"></i> Ruang Ibadah & Pembinaan Iman\n        </h5>\n        <p class=\"text-xs text-slate-600\">Musholla dan ruang kebaktian siswa Kristen untuk pembinaan rohani serta toleransi beragama berkala.</p>\n    </div>\n</div>', '[{\"ikon\":\"fa-solid fa-chalkboard-user\",\"judul\":\"Ruang Kelas Representatif\",\"deskripsi\":\"Dilengkapi proyektor interaktif dan pencahayaan alami standar nasional.\",\"warna\":\"amber\"},{\"ikon\":\"fa-solid fa-flask\",\"judul\":\"Laboratorium IPA Terpadu\",\"deskripsi\":\"Peralatan praktikum fisika, biologi, dan kimia yang lengkap dan aman untuk penelitian saintifik siswa.\",\"warna\":\"blue\"},{\"ikon\":\"fa-solid fa-laptop-code\",\"judul\":\"Lab Komputer & Server ANBK\",\"deskripsi\":\"3 laboratorium komputer ber-AC terhubung jaringan gigabit dan internet serat optik kecepatan tinggi.\",\"warna\":\"indigo\"},{\"ikon\":\"fa-solid fa-book-bookmark\",\"judul\":\"Perpustakaan Digital & Fisik\",\"deskripsi\":\"Koleksi ribuan buku pelajaran, fiksi, ensiklopedia serta e-library dengan area baca santai ber-karpet.\",\"warna\":\"emerald\"},{\"ikon\":\"fa-solid fa-volleyball\",\"judul\":\"Lapangan Olahraga Serbaguna\",\"deskripsi\":\"Fasilitas bola basket, bola voli, bulutangkis, serta area senam kesegaran jasmani terpadu.\",\"warna\":\"rose\"},{\"ikon\":\"fa-solid fa-mosque\",\"judul\":\"Ruang Ibadah & Pembinaan Iman\",\"deskripsi\":\"Musholla dan ruang kebaktian siswa Kristen untuk pembinaan rohani serta toleransi beragama berkala.\",\"warna\":\"teal\"}]', 'Untuk mendukung tercapainya proses pembelajaran yang optimal dan berdaya saing tinggi, UPT SMP Negeri 1 Rantepao dilengkapi dengan sarana dan prasarana modern yang ramah peserta didik:', NULL, '2026-11-03 03:59:01'),
(4, 'program-kerja', 'fa-solid fa-list-check', 'Program Kerja & Inovasi Unggulan UPT SMP Negeri 1 Rantepao', 'Agenda strategis sekolah unggulan, kurikulum merdeka, digitalisasi terintegrasi, dan penguatan karakter profil pelajar Pancasila.', 'purple', '<p class=\"mb-4 text-justify leading-relaxed\">Dalam rangka meningkatkan mutu layanan pendidikan secara berkesinambungan, sekolah menyusun program kerja strategis yang berfokus pada kemandirian dan kecakapan abad ke-21:</p>\n<div class=\"space-y-3 my-4\">\n    <div class=\"border-l-4 border-amber-500 bg-amber-50/40 p-3 rounded-r-xl border border-amber-100\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm\">1. Penguatan Kurikulum Merdeka Terintegrasi</h5>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Penerapan Projek Penguatan Profil Pelajar Pancasila (P5) yang kontekstual dengan pemecahan masalah lingkungan sekitar dan kearifan lokal Toraja.</p>\n    </div>\n    <div class=\"border-l-4 border-blue-600 bg-blue-50/40 p-3 rounded-r-xl border border-blue-100\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm\">2. Gerakan Literasi Sekolah (GLS) 15 Menit Setiap Pagi</h5>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Pembiasaan membaca buku non-pelajaran sebelum jam pertama dimulai guna memperkaya wawasan dan daya analitis siswa.</p>\n    </div>\n    <div class=\"border-l-4 border-emerald-500 bg-emerald-50/40 p-3 rounded-r-xl border border-emerald-100\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm\">3. Digitalisasi Asesmen & E-Raport</h5>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Pelaksanaan ujian sumatif dan formatif berbasis Computer-Based Test (CBT) serta pelaporan perkembangan nilai siswa secara online.</p>\n    </div>\n    <div class=\"border-l-4 border-purple-500 bg-purple-50/40 p-3 rounded-r-xl border border-purple-100\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm\">4. Sanggar Seni & Pelestarian Budaya Toraja</h5>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Pelatihan tari tradisional (Pagellu), musik bambu, dan paduan suara siswa yang rutin tampil pada event daerah dan nasional.</p>\n    </div>\n    <div class=\"border-l-4 border-rose-500 bg-rose-50/40 p-3 rounded-r-xl border border-rose-100\">\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm\">5. Program Sekolah Adiwiyata & Zero Plastic</h5>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Edukasi pemilahan sampah, pengelolaan biopori, penanaman pohon penghijauan, dan pengurangan sampah plastik di kantin sekolah.</p>\n    </div>\n</div>', '[{\"ikon\":\"fa-solid fa-graduation-cap\",\"judul\":\"1. Penguatan Kurikulum Merdeka Terintegrasi\",\"deskripsi\":\"Penerapan Projek Penguatan Profil Pelajar Pancasila (P5) yang kontekstual dengan pemecahan masalah lingkungan sekitar dan kearifan lokal Toraja.\",\"warna\":\"amber\"},{\"ikon\":\"fa-solid fa-book-open-reader\",\"judul\":\"2. Gerakan Literasi Sekolah (GLS) 15 Menit Setiap Pagi\",\"deskripsi\":\"Pembiasaan membaca buku non-pelajaran sebelum jam pertama dimulai guna memperkaya wawasan dan daya analitis siswa.\",\"warna\":\"blue\"},{\"ikon\":\"fa-solid fa-laptop-file\",\"judul\":\"3. Digitalisasi Asesmen & E-Raport\",\"deskripsi\":\"Pelaksanaan ujian sumatif dan formatif berbasis Computer-Based Test (CBT) serta pelaporan perkembangan nilai siswa secara online.\",\"warna\":\"emerald\"},{\"ikon\":\"fa-solid fa-masks-theater\",\"judul\":\"4. Sanggar Seni & Pelestarian Budaya Toraja\",\"deskripsi\":\"Pelatihan tari tradisional (Pagellu), musik bambu, dan paduan suara siswa yang rutin tampil pada event daerah dan nasional.\",\"warna\":\"purple\"},{\"ikon\":\"fa-solid fa-leaf\",\"judul\":\"5. Program Sekolah Adiwiyata & Zero Plastic\",\"deskripsi\":\"Edukasi pemilahan sampah, pengelolaan biopori, penanaman pohon penghijauan, dan pengurangan sampah plastik di kantin sekolah.\",\"warna\":\"rose\"}]', 'Dalam rangka meningkatkan mutu layanan pendidikan secara berkesinambungan, sekolah menyusun program kerja strategis yang berfokus pada kemandirian dan kecakapan abad ke-21:', NULL, '2026-11-03 03:03:12'),
(5, 'kondisi-siswa', 'fa-solid fa-chart-pie', 'Kondisi Siswa & Statistik Akademik', 'Statistik persebaran peserta didik, jumlah rombongan belajar (rombel), rasio tenaga pendidik, dan capaian akademik.', 'rose', '<div class=\"space-y-3 my-4\">\r\n    <div class=\"border-l-4 border-blue-500 bg-blue-50/40 p-3.5 rounded-r-2xl border border-blue-100 transition-all hover:shadow-xs\">\r\n        <h5 class=\"font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2\">\r\n            <i class=\"fa-solid fa-star text-blue-600 text-sm\"></i>\r\n            <span>Item Kartu Baru 1</span>\r\n        </h5>\r\n        <p class=\"text-xs text-slate-600 mt-1 leading-relaxed\">tes tes</p>\r\n    </div>\r\n</div>\r\n<p class=\"mt-4 text-justify leading-relaxed\">anu tes tes</p>\r\n', '[{\"ikon\":\"fa-solid fa-star\",\"judul\":\"Item Kartu Baru 1\",\"deskripsi\":\"tes tes\",\"warna\":\"blue\"}]', NULL, 'anu tes tes', '2026-11-03 03:14:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hero_slider`
--

CREATE TABLE `hero_slider` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `teks_tombol` varchar(100) DEFAULT 'Lihat Selengkapnya',
  `link_tombol` varchar(255) DEFAULT '#profil',
  `urutan` int(11) DEFAULT 1,
  `status_aktif` enum('Aktif','Nonaktif') DEFAULT 'Aktif',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hero_slider`
--

INSERT INTO `hero_slider` (`id`, `judul`, `deskripsi`, `gambar`, `teks_tombol`, `link_tombol`, `urutan`, `status_aktif`, `created_at`) VALUES
(1, 'Pendidikan Berkualitas', 'Pendidikan Berkualitas bermula pada Pendidikan Berkarakter, Visioner, dan Berbudaya. UPT SMPN 1 Rantepao berkomitmen mewujudkan generasi yang Edukatif, Dinamis, dan Unggul di Toraja Utara.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80', 'Lihat Selengkapnya', '#beranda', 1, 'Aktif', '2026-11-03 16:58:35'),
(2, 'Unggul dalam Prestasi', 'Mengembangkan potensi akademik dan non-akademik siswa melalui pembimbingan intensif, fasilitas memadai, serta semangat kompetisi yang sehat di tingkat Kabupaten hingga Nasional.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80', 'Lihat Selengkapnya', '#beranda', 2, 'Aktif', '2026-11-03 16:58:35'),
(3, 'Berbudaya & Berkarakter', 'Menanamkan nilai-nilai kedisiplinan, budi pekerti luhur, dan kearifan lokal budaya Toraja dalam lingkungan belajar yang aman, nyaman, dan menyenangkan.', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80', 'Lihat Selengkapnya', '#beranda', 3, 'Aktif', '2026-11-03 16:58:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kalender_akademik`
--

CREATE TABLE `kalender_akademik` (
  `id` int(11) NOT NULL,
  `judul_kegiatan` varchar(200) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `tanggal_mulai` date NOT NULL,
  `tanggal_selesai` date DEFAULT NULL,
  `kategori` enum('Akademik','Ujian','Libur','Kegiatan','Rapat') NOT NULL DEFAULT 'Akademik',
  `warna_badge` varchar(30) NOT NULL DEFAULT 'blue',
  `lokasi` varchar(150) DEFAULT 'Kampus SMPN 1 Rantepao',
  `urutan` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kalender_akademik`
--

INSERT INTO `kalender_akademik` (`id`, `judul_kegiatan`, `deskripsi`, `tanggal_mulai`, `tanggal_selesai`, `kategori`, `warna_badge`, `lokasi`, `urutan`, `created_at`, `updated_at`) VALUES
(1, 'Penilaian Akhir Semester (PAS) Ganjil TA 2026/2027', 'Pelaksanaan ujian akhir semester ganjil berbasis digital dan tertulis untuk seluruh jenjang kelas VII, VIII, dan IX.', '2026-11-23', '2026-11-30', 'Ujian', 'rose', 'SMPN 1 Rantepao', 1, '2026-11-03 06:15:33', '2026-11-05 02:37:59'),
(2, 'Porseni & Pekan Olahraga Antar Kelas', 'Kompetisi seni budaya Toraja, futsal, voli, dan cerdas cermat antar kelas setelah pelaksanaan PAS.', '2026-12-04', '2026-12-08', 'Kegiatan', 'emerald', 'Lapangan & Aula SMPN 1 Rantepao', 2, '2026-11-03 06:15:33', '2026-11-03 06:15:33'),
(3, 'Rapat Pleno Dewan Guru Kenaikan/Nilai Rapor', 'Rapat evaluasi hasil belajar siswa semester ganjil tahun ajaran 2026/2027 dipimpin Kepala Sekolah.', '2026-12-12', NULL, 'Rapat', 'purple', 'Ruang Guru SMPN 1 Rantepao', 3, '2026-11-03 06:15:33', '2026-11-03 06:15:33'),
(4, 'Pembagian Buku Laporan Hasil Belajar (Rapor)', 'Penerimaan rapor semester ganjil bersama orang tua/wali siswa di ruang kelas masing-masing.', '2026-12-19', NULL, 'Akademik', 'blue', 'Ruang Kelas Masing-Masing', 4, '2026-11-03 06:15:33', '2026-11-03 06:15:33'),
(5, 'Libur Akhir Semester Ganjil TA 2026/2027', 'Libur akhir semester ganjil serta libur Natal dan Tahun Baru untuk seluruh siswa SMPN 1 Rantepao.', '2026-12-21', '2027-01-03', 'Libur', 'amber', '-', 5, '2026-11-03 06:15:33', '2026-11-03 06:15:33'),
(6, 'Hari Pertama Masuk Sekolah Semester Genap', 'Awal kegiatan belajar mengajar semester genap tahun ajaran 2026/2027 diawali dengan upacara bendera.', '2027-01-05', NULL, 'Akademik', 'blue', 'SMPN 1 Rantepao', 6, '2026-11-03 06:15:33', '2026-11-05 02:37:59');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_berita`
--

CREATE TABLE `kategori_berita` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(50) NOT NULL,
  `slug_kategori` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kategori_berita`
--

INSERT INTO `kategori_berita` (`id_kategori`, `nama_kategori`, `slug_kategori`) VALUES
(1, 'Kegiatan Sekolah', 'kegiatan-sekolah'),
(2, 'Prestasi Siswa', 'prestasi-siswa'),
(3, 'Informasi Akademik', 'informasi-akademik');

-- --------------------------------------------------------

--
-- Struktur dari tabel `komite_sekolah`
--

CREATE TABLE `komite_sekolah` (
  `id_komite` int(11) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `periode` varchar(50) NOT NULL,
  `pekerjaan_atau_unsur` varchar(100) NOT NULL,
  `foto` varchar(255) DEFAULT 'default-komite.jpg',
  `urutan_tampil` int(11) DEFAULT 10,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `komite_sekolah`
--

INSERT INTO `komite_sekolah` (`id_komite`, `nama_lengkap`, `jabatan`, `periode`, `pekerjaan_atau_unsur`, `foto`, `urutan_tampil`, `created_at`) VALUES
(1, 'Drs. Yulius Rantetana, M.Si.', 'Ketua Komite', '2024 - 2027', 'Tokoh Masyarakat & Pemerhati Pendidikan', 'foto_komite-1793331126300-784245000.png', 1, '2026-10-30 02:58:40'),
(2, 'Elisabeth Pongbatu, S.Pd.', 'Sekretaris', '2024 - 2027', 'Perwakilan Tokoh Pendidik & Alumni', 'default-komite.jpg', 2, '2026-10-30 02:58:40'),
(3, 'Ir. Simon Sarungallo', 'Bendahara', '2024 - 2027', 'Praktisi & Perwakilan Orang Tua Siswa', 'default-komite.jpg', 3, '2026-10-30 02:58:40'),
(4, 'drg. Martha Linggi', 'Anggota Bidang Sarana', '2024 - 2027', 'Tenaga Kesehatan & Orang Tua Siswa', 'default-komite.jpg', 4, '2026-10-30 02:58:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_akun`
--

CREATE TABLE `osis_akun` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nama_pengurus` varchar(100) NOT NULL DEFAULT 'Pengurus OSIS',
  `jabatan` varchar(100) NOT NULL DEFAULT 'Administrator OSIS',
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_akun`
--

INSERT INTO `osis_akun` (`id`, `username`, `password`, `nama_pengurus`, `jabatan`, `foto`, `created_at`) VALUES
(1, 'osis', '$2b$10$O43waDgh68FzfBUqm8w5zu8l67JTA9XiK0q5Oa73mmjrD23nuBM0e', 'Pengurus Inti OSIS', 'Pengurus OSIS UPT SMPN 1 Rantepao', NULL, '2026-11-03 14:29:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_galeri`
--

CREATE TABLE `osis_galeri` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `kategori` varchar(100) NOT NULL DEFAULT 'Kegiatan',
  `tanggal` varchar(100) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_galeri`
--

INSERT INTO `osis_galeri` (`id`, `judul`, `kategori`, `tanggal`, `foto`, `keterangan`, `created_at`) VALUES
(1, 'Upacara Pelantikan Pengurus OSIS 2025/2026', 'Pelantikan', 'September 2025', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', 'Pelantikan resmi jajaran pengurus OSIS UPT SMP Negeri 1 Rantepao Masa Bakti 2025/2026.', '2026-11-03 15:28:52'),
(2, 'Latihan Dasar Kepemimpinan Siswa (LDKS) Terbuka', 'LDKS', 'Oktober 2025', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop', 'Pembekalan kepemimpinan, kedisiplinan, dan kekompakan bagi calon pengurus muda OSIS.', '2026-11-03 15:28:52'),
(3, 'Laga Final Pekan Olahraga & Seni (PORSENI)', 'PORSENI', 'Desember 2025', 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop', 'Kemeriahan kompetisi antarkelas cabang olahraga dan pentas seni akhir semester.', '2026-11-03 15:28:52'),
(4, 'Aksi Bersih Lingkungan & Peduli Sa\'dan', 'Adiwiyata', 'Januari 2026', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop', 'Kegiatan bakti sosial dan aksi nyata peduli lingkungan sungai Sa\'dan bersama komunitas hijau.', '2026-11-03 15:28:52'),
(5, 'Pentas Seni Budaya & Tari Pa\'gellu Massal', 'Seni Budaya', 'Februari 2026', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop', 'Pagelaran tari tradisional Toraja Pa\'gellu dan atraksi musik bambu oleh siswa-siswi.', '2026-11-03 15:28:52'),
(6, 'Rapat Pleno Kerja Bulanan Pengurus OSIS', 'Rapat Kerja', 'Maret 2026', 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', 'Evaluasi program kerja berjalan dan pematangan agenda aksi bulan berikutnya.', '2026-11-03 15:28:52'),
(7, 'Kondisi Siswa & Statistik Akademik', 'Rapat Kerja', '15 Januari 2026', 'foto_galeri_osis-1793719984182-576058740.png', 'bjabjbajba', '2026-11-03 15:33:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_mading`
--

CREATE TABLE `osis_mading` (
  `id` int(11) NOT NULL,
  `judul` varchar(200) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `penulis` varchar(150) NOT NULL,
  `kelas` varchar(50) NOT NULL,
  `tanggal` varchar(50) NOT NULL,
  `cuplikan` text NOT NULL,
  `likes` int(11) DEFAULT 0,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_mading`
--

INSERT INTO `osis_mading` (`id`, `judul`, `kategori`, `penulis`, `kelas`, `tanggal`, `cuplikan`, `likes`, `foto`, `created_at`) VALUES
(1, 'Di Bawah Langit Rantepao yang Sejuk', 'Puisi Siswa', 'Michelle Olivia', 'Kelas VIII-A', '28 Oktober 2025', 'Kala kabut pagi menyelimuti tongkonan, langkah tegap kami berderap menuju gerbang ilmu. Di sini cita dirajut, di sini tekad dipahat pantang surut...', 86, NULL, '2026-11-02 05:38:24'),
(2, 'Kearifan Lokal Toraja di Era Kecerdasan Buatan (AI)', 'Esai Ilmiah', 'Daniel Pratama Toding', 'Kelas IX-B', '14 November 2025', 'Kecerdasan buatan bukan ancaman bagi tradisi kita. Justru teknologi adalah wadah baru bagi generasi muda Toraja untuk memperkenalkan indahnya ukiran Passura dan ritme Pa\'gellu ke mata dunia...', 114, NULL, '2026-11-02 05:38:24'),
(3, 'Keseruan Babak Final Class Meeting Futsal SMPN 1', 'Warta Siswa', 'Tim Redaksi OSIS', 'Sekbid V', '20 Desember 2025', 'Laga sengit penuh drama antara tim kelas IX-A melawan VIII-D menyedot riuh gemuruh ratusan suporter di lapangan olahraga serbaguna sekolah kemarin sore...', 142, NULL, '2026-11-02 05:38:24'),
(4, 'Nada Bambu yang Tak Pernah Pudar', 'Cerita Pendek', 'Kezia Limbong', 'Kelas VII-C', '15 Januari 2026', 'Sore itu di ruang sanggar seni, alunan seruling bambu kakek terngiang kembali di benakku saat guru pembina kami mulai memimpin latihan musik bambu perdana...', 95, NULL, '2026-11-02 05:38:24'),
(5, 'jbjsbjbs', 'Puisi Siswa', 'nasknsk', 'jsjsbjs', '15 Januari 2026', 'jbsjbsjbsj', 0, NULL, '2026-11-02 09:11:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_pengurus`
--

CREATE TABLE `osis_pengurus` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(150) NOT NULL,
  `jabatan` varchar(100) NOT NULL,
  `kategori` varchar(50) DEFAULT 'Pengurus Inti',
  `kelas` varchar(20) NOT NULL,
  `motto` varchar(255) DEFAULT '',
  `foto` varchar(255) DEFAULT 'default-osis.jpg',
  `urutan_tampil` int(11) DEFAULT 10,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_pengurus`
--

INSERT INTO `osis_pengurus` (`id`, `nama_lengkap`, `jabatan`, `kategori`, `kelas`, `motto`, `foto`, `urutan_tampil`, `created_at`) VALUES
(1, 'Gabriel Ranteallo', 'Ketua OSIS', 'Pengurus Inti', 'Kelas IX-A', 'Memimpin dengan keteladanan, melayani dengan kerendahan hati demi kemajuan almamater tercinta.', 'ketua-osis.jpg', 1, '2026-11-02 01:59:06'),
(2, 'Clara Banne Limbong', 'Wakil Ketua OSIS', 'Pengurus Inti', 'Kelas VIII-B', 'Bersatu dalam aksi, berprestasi dalam kreasi, dan berkarakter dalam budaya.', 'wakil-osis.jpg', 2, '2026-11-02 01:59:06'),
(3, 'Michael Todingan', 'Sekretaris I', 'Pengurus Inti', 'Kelas IX-C', 'Tertib administrasi, nyata dalam kontribusi dan transparansi program.', 'sekretaris1-osis.jpg', 3, '2026-11-02 01:59:06'),
(4, 'Jessica Paerunan', 'Sekretaris II', 'Pengurus Inti', 'Kelas VIII-A', 'Komunikasi terbuka, dokumentasi terjaga, sinergi tak terputus.', 'sekretaris2-osis.jpg', 4, '2026-11-02 01:59:06'),
(5, 'Priskila Manginte', 'Bendahara I', 'Pengurus Inti', 'Kelas IX-B', 'Transparan, akuntabel, dan amanah dalam setiap pengelolaan kegiatan siswa.', 'bendahara1-osis.jpg', 5, '2026-11-02 01:59:06'),
(6, 'David Rompon', 'Bendahara II', 'Pengurus Inti', 'Kelas VIII-D', 'Mengoptimalkan sumber daya untuk kemaslahatan dan prestasi seluruh siswa.', 'bendahara2-osis.jpg', 6, '2026-11-02 01:59:06'),
(7, 'Samuel Patandianan', 'Ketua Sekbid I: Ketaqwaan & Budi Pekerti', 'Seksi Bidang', 'Kelas IX-D', 'Membangun karakter berakhlak mulia dan berlandaskan keimanan.', 'sekbid1-osis.jpg', 7, '2026-11-02 01:59:06'),
(8, 'Kevin Somba', 'Ketua Sekbid II: Kedisiplinan & Bela Negara', 'Seksi Bidang', 'Kelas IX-E', 'Disiplin adalah kunci utama kehormatan dan prestasi generasi muda.', 'sekbid2-osis.jpg', 8, '2026-11-02 01:59:06'),
(9, 'Natalie Sarungallo', 'Ketua Sekbid III: Seni & Kearifan Budaya Toraja', 'Seksi Bidang', 'Kelas VIII-C', 'Bangga melestarikan seni musik bambu dan tari tradisional Toraja.', 'sekbid3-osis.jpg', 9, '2026-11-02 01:59:06'),
(10, 'Rendy Tandirerung', 'Ketua Sekbid IV: Olahraga & Rekreasi', 'Seksi Bidang', 'Kelas IX-B', 'Jiwa yang sehat melahirkan prestasi olahraga yang membanggakan.', 'sekbid4-osis.jpg', 10, '2026-11-02 01:59:06'),
(11, 'Jonathan Bulo', 'Ketua Sekbid V: Teknologi Informasi & Mading', 'Seksi Bidang', 'Kelas VIII-A', 'Memanfaatkan media digital untuk menyebarkan inspirasi dan literasi positif.', 'sekbid5-osis.jpg', 11, '2026-11-02 01:59:06'),
(12, 'Aurelia Tangke', 'Ketua Sekbid VI: Lingkungan Hidup & Adiwiyata', 'Seksi Bidang', 'Kelas IX-A', 'Sekolah hijau, lingkungan asri, belajar nyaman tanpa sampah plastik.', 'sekbid6-osis.jpg', 12, '2026-11-02 01:59:06');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_profil`
--

CREATE TABLE `osis_profil` (
  `id` int(11) NOT NULL,
  `nama_ketua` varchar(150) NOT NULL,
  `kelas_ketua` varchar(50) NOT NULL,
  `periode` varchar(50) NOT NULL,
  `visi_utama` text NOT NULL,
  `teks_sambutan` text NOT NULL,
  `foto_ketua` varchar(255) DEFAULT 'default-osis.jpg',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_profil`
--

INSERT INTO `osis_profil` (`id`, `nama_ketua`, `kelas_ketua`, `periode`, `visi_utama`, `teks_sambutan`, `foto_ketua`, `updated_at`) VALUES
(1, 'Mujahid Zulfadly', 'Kelas IX-A', '2025/2026', 'Terwujudnya OSIS SMPN 1 Rantepao yang Berkarakter, Inovatif, Kolaboratif, serta Menjunjung Tinggi Keluhuran Budaya Toraja.', 'HIDUP JOKOWIIIII\r\n\r\nSAYA AKAN LAWAN', 'foto_ketua_osis-1793598881294-157421606.jpeg', '2026-11-02 07:40:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_proker`
--

CREATE TABLE `osis_proker` (
  `id` int(11) NOT NULL,
  `judul` varchar(200) NOT NULL,
  `kategori` varchar(100) NOT NULL,
  `icon` varchar(50) DEFAULT 'fa-compass',
  `jadwal` varchar(100) NOT NULL,
  `target` varchar(150) NOT NULL,
  `status` varchar(50) DEFAULT 'Sedang Berjalan',
  `deskripsi` text NOT NULL,
  `urutan_tampil` int(11) DEFAULT 10,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `osis_proker`
--

INSERT INTO `osis_proker` (`id`, `judul`, `kategori`, `icon`, `jadwal`, `target`, `status`, `deskripsi`, `urutan_tampil`, `created_at`) VALUES
(1, 'Latihan Dasar Kepemimpinan Siswa (LDKS) 2025/2026', 'Kepemimpinan', 'fa-compass', 'Oktober 2025', 'Pengurus OSIS & MPK', 'Terlaksana', 'Pelatihan kepemimpinan, manajemen organisasi, komunikasi efektif, dan outbound pembentukan karakter tangguh di alam terbuka.', 1, '2026-11-02 05:38:24'),
(2, 'Pekan Olahraga & Seni (PORSENI) Antar Kelas', 'Olahraga & Seni', 'fa-trophy', 'Desember 2025', 'Seluruh Siswa Kelas VII, VIII, IX', 'Terlaksana', 'Turnamen futsal, bola voli, basket, catur, lomba tarik tambang, dan kompetisi akustik musik yang mempererat sportivitas sekolah.', 2, '2026-11-02 05:38:24'),
(3, 'Pentas Seni & Karnaval Budaya Toraja (Toraja Heritage Fest)', 'Seni Budaya', 'fa-masks-theater', 'Maret 2026', 'Warga Sekolah & Tamu Undangan', 'Sedang Berjalan', 'Peragaan busana adat Toraja, tari massal Pa\'gellu, festival musik bambu, dan stan pameran kuliner tradisional khas Toraja.', 3, '2026-11-02 05:38:24'),
(4, 'Gerakan Mading Digital & Literasi Kreatif Sekolah', 'Literasi & Media', 'fa-compass', 'Rutin Setiap Bulan', 'Seluruh Siswa', 'Sedang Berjalan', 'Publikasi cerpen, puisi, artikel ilmiah populer, karya ilustrasi siswa, serta rekap berita kegiatan sekolah secara berkala.', 4, '2026-11-02 05:38:24'),
(5, 'Aksi Sosial & Ramah Lingkungan: \"OSIS Peduli Toraja Asri\"', 'Sosial & Lingkungan', 'fa-hand-holding-heart', 'April 2026', 'Masyarakat Sekitar Rantepao', 'Mendatang', 'Gerakan pemilahan sampah di sekitar bantaran sungai Sa\'dan, penanaman pohon penghijauan, dan donasi buku untuk taman baca pedesaan.', 5, '2026-11-02 05:38:24'),
(6, 'Pelatihan Public Speaking & Jurnalistik Pelajar', 'Pengembangan Diri', 'fa-microphone', 'Mei 2026', 'Perwakilan Kelas VII & VIII', 'Mendatang', 'Workshop praktis berbicara di depan umum, teknik presentasi memukau, penulisan berita, dan etika jurnalisme media sosial.', 6, '2026-11-02 05:38:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendaftar_ppdb`
--

CREATE TABLE `pendaftar_ppdb` (
  `id_pendaftar` int(11) NOT NULL,
  `no_pendaftaran` varchar(30) NOT NULL,
  `nama_siswa` varchar(150) NOT NULL,
  `nisn` varchar(20) DEFAULT NULL,
  `jenis_kelamin` enum('Laki-laki','Perempuan') DEFAULT 'Laki-laki',
  `asal_sekolah` varchar(150) NOT NULL,
  `jalur_pendaftaran` enum('Zonasi','Prestasi','Afirmasi','Perpindahan Tugas') DEFAULT 'Zonasi',
  `nama_ortu` varchar(150) NOT NULL,
  `no_hp` varchar(25) NOT NULL,
  `alamat_domisili` text NOT NULL,
  `catatan` text DEFAULT NULL,
  `status_seleksi` enum('Menunggu Verifikasi','Berkas Terverifikasi','Diterima','Tidak Diterima') DEFAULT 'Menunggu Verifikasi',
  `tanggal_daftar` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `no_wa` varchar(25) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `agama` varchar(50) DEFAULT NULL,
  `npsn_asal_sekolah` varchar(20) DEFAULT NULL,
  `nama_ayah` varchar(150) DEFAULT NULL,
  `nama_ibu` varchar(150) DEFAULT NULL,
  `pekerjaan_ortu` varchar(100) DEFAULT NULL,
  `penghasilan_ortu` varchar(100) DEFAULT NULL,
  `berkas_foto` varchar(255) DEFAULT NULL,
  `berkas_kk` varchar(255) DEFAULT NULL,
  `berkas_akta` varchar(255) DEFAULT NULL,
  `berkas_ijazah` varchar(255) DEFAULT NULL,
  `is_submitted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pendaftar_ppdb`
--

INSERT INTO `pendaftar_ppdb` (`id_pendaftar`, `no_pendaftaran`, `nama_siswa`, `nisn`, `jenis_kelamin`, `asal_sekolah`, `jalur_pendaftaran`, `nama_ortu`, `no_hp`, `alamat_domisili`, `catatan`, `status_seleksi`, `tanggal_daftar`, `email`, `password`, `no_wa`, `tempat_lahir`, `tanggal_lahir`, `agama`, `npsn_asal_sekolah`, `nama_ayah`, `nama_ibu`, `pekerjaan_ortu`, `penghasilan_ortu`, `berkas_foto`, `berkas_kk`, `berkas_akta`, `berkas_ijazah`, `is_submitted`) VALUES
(1, 'PPDB-2026-001', 'Daniel Todingallo', '0112345678', 'Laki-laki', 'SDN 1 Rantepao', 'Zonasi', 'Marthen Todingallo', '081245678901', 'Jl. Kostan, Kel. Malango, Kec. Rantepao', 'Jarak domisili 450 meter dari sekolah', 'Berkas Terverifikasi', '2026-10-26 06:55:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(2, 'PPDB-2026-002', 'Gabriella Rante', '0118765432', 'Perempuan', 'SD Katolik Rantepao', 'Prestasi', 'Maria Rante', '082198765432', 'Kel. Singki, Kec. Rantepao', 'Juara 1 OSN Matematika SD Tk. Kabupaten Toraja Utara', 'Diterima', '2026-10-26 06:55:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(3, 'PPDB-2026-003', 'Samuel Pasang', '0123456789', 'Laki-laki', 'SD Kristen Rantepao', 'Afirmasi', 'Yohanis Pasang', '085211223344', 'Kel. Karassik, Kec. Rantepao', 'Pemegang Kartu Indonesia Pintar (KIP) No. 892182', 'Menunggu Verifikasi', '2026-10-26 06:55:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(4, 'PPDB-2026-004', 'Angelina Somba', '0134567890', 'Perempuan', 'SDN 3 Rantepao', 'Perpindahan Tugas', 'Mayor Inf. Markus Somba', '081399887766', 'Asrama Kodim 1414 Tana Toraja, Rantepao', 'Surat Perintah Tugas Mutasi Kodim 1414/Tator', 'Diterima', '2026-10-26 06:55:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(5, 'PPDB-2026-3137', 'Tirza Manginte', '0129988776', 'Perempuan', 'SD Katolik Renya Rosari Rantepao', 'Prestasi', 'Yosep Manginte', '081233445566', 'Jl. Ahmad Yani, Rantepao', 'Juara 2 FLS2N Tari Kreasi Tradisional Toraja tingkat Provinsi', 'Menunggu Verifikasi', '2026-10-26 07:26:30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(7, 'PPDB-2026-9443', 'Mujahid Zulfadly', '12345678910', 'Laki-laki', 'Lamekongga', 'Zonasi', 'Mursid', '085219014916', 'kel.III konggoasa', NULL, 'Menunggu Verifikasi', '2026-10-30 02:32:48', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(9, 'PPDB-2026-8072', 'Mujahid Zulfadly', NULL, 'Laki-laki', '', 'Zonasi', '', '085219014916', '', NULL, 'Menunggu Verifikasi', '2026-10-31 01:40:29', 'mujahidzulfadli123@gmail.com', '$2b$10$V8KbD6Q7G.VvN/XgQOSgje7LNctWID42g8SY3SO/NFqWMXEPaxCUC', '085219014916', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengumuman`
--

CREATE TABLE `pengumuman` (
  `id_pengumuman` int(11) NOT NULL,
  `penulis_id` int(11) NOT NULL,
  `judul_pengumuman` varchar(200) NOT NULL,
  `isi_pengumuman` text NOT NULL,
  `file_lampiran` varchar(255) DEFAULT NULL,
  `tanggal_terbit` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pengumuman`
--

INSERT INTO `pengumuman` (`id_pengumuman`, `penulis_id`, `judul_pengumuman`, `isi_pengumuman`, `file_lampiran`, `tanggal_terbit`, `created_at`) VALUES
(1, 1, 'Jadwal Ujian Akhir Semester Ganjil Tahun Ajaran Baru', 'Diberitahukan kepada seluruh siswa kelas VII, VIII, dan IX bahwa pelaksanaan ujian semester akan dimulai pada minggu depan. Silakan unduh jadwal lengkap pada lampiran berikut.', 'jadwal-ujian.pdf', '2026-10-26', '2026-10-26 01:52:49'),
(2, 1, 'MAHOGARA', 'jadi hari ini adalah pokonyaaa', '', '2026-10-26', '2026-10-26 06:27:17'),
(3, 1, 'Tes 3', 'iyah itumi keknya', '', '2026-10-26', '2026-10-26 06:27:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesan_kontak`
--

CREATE TABLE `pesan_kontak` (
  `id_pesan` int(11) NOT NULL,
  `nama_pengirim` varchar(100) NOT NULL,
  `email_atau_wa` varchar(100) NOT NULL,
  `subjek` varchar(150) NOT NULL,
  `isi_pesan` text NOT NULL,
  `status_baca` enum('Belum Dibaca','Sudah Dibaca') DEFAULT 'Belum Dibaca',
  `tanggal_kirim` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `pesan_kontak`
--

INSERT INTO `pesan_kontak` (`id_pesan`, `nama_pengirim`, `email_atau_wa`, `subjek`, `isi_pesan`, `status_baca`, `tanggal_kirim`) VALUES
(1, 'Yusuf Ranteallo (Wali: Bpk. Yohanis Ranteallo)', '081234567891', '[PPDB 2026/2027] Jalur Zonasi - Asal: SDN 2 Rantepao', 'Pendaftaran/Konsultasi PPDB 2026/2027:\n- Nama Calon Siswa: Yusuf Ranteallo\n- Nama Orang Tua/Wali: Bpk. Yohanis Ranteallo\n- No. WhatsApp: 081234567891\n- Asal Sekolah SD: SDN 2 Rantepao\n- Jalur Pilihan: Zonasi\n- Alamat Domisili: Kel. Malango, Kec. Rantepao\n- Pertanyaan / Catatan: Mohon info mengenai batas radius zonasi dari sekolah.', 'Belum Dibaca', '2026-10-26 06:36:20'),
(2, 'Tirza Manginte (No: PPDB-2026-3137)', '081233445566', '[PPDB Baru 2026/2027] Jalur Prestasi - Tirza Manginte', 'Pendaftaran Baru PPDB 2026/2027:\n- No. Pendaftaran: PPDB-2026-3137\n- Calon Siswa: Tirza Manginte (Perempuan)\n- NISN: 0129988776\n- Asal Sekolah: SD Katolik Renya Rosari Rantepao\n- Jalur Pendaftaran: Prestasi\n- Orang Tua/Wali: Yosep Manginte\n- WhatsApp: 081233445566\n- Alamat: Jl. Ahmad Yani, Rantepao\n- Catatan: Juara 2 FLS2N Tari Kreasi Tradisional Toraja tingkat Provinsi', 'Belum Dibaca', '2026-10-26 07:26:30'),
(3, 'Mujahid Zulfadly (No: PPDB-2026-9443)', '085219014916', '[PPDB Baru 2026/2027] Jalur Zonasi - Mujahid Zulfadly', 'Pendaftaran Baru PPDB 2026/2027:\n- No. Pendaftaran: PPDB-2026-9443\n- Calon Siswa: Mujahid Zulfadly (Laki-laki)\n- NISN: 12345678910\n- Asal Sekolah: Lamekongga\n- Jalur Pendaftaran: Zonasi\n- Orang Tua/Wali: Mursid\n- WhatsApp: 085219014916\n- Alamat: kel.III konggoasa\n- Catatan: -', 'Belum Dibaca', '2026-10-30 02:32:48'),
(4, 'Mujahid Zulfadly', 'kelas ix a', '[Aspirasi OSIS - Kegiatan & Lomba Siswa] dari Mujahid Zulfadly (kelas ix a)', 'anu', 'Sudah Dibaca', '2026-11-02 03:55:02');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `ppdb_pendaftar`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `ppdb_pendaftar` (
`id_pendaftar` int(11)
,`no_pendaftaran` varchar(30)
,`nama_siswa` varchar(150)
,`nisn` varchar(20)
,`jenis_kelamin` enum('Laki-laki','Perempuan')
,`asal_sekolah` varchar(150)
,`jalur_pendaftaran` enum('Zonasi','Prestasi','Afirmasi','Perpindahan Tugas')
,`nama_ortu` varchar(150)
,`no_hp` varchar(25)
,`alamat_domisili` text
,`catatan` text
,`status_seleksi` enum('Menunggu Verifikasi','Berkas Terverifikasi','Diterima','Tidak Diterima')
,`tanggal_daftar` timestamp
,`email` varchar(150)
,`password` varchar(255)
,`no_wa` varchar(25)
,`tempat_lahir` varchar(100)
,`tanggal_lahir` date
,`agama` varchar(50)
,`npsn_asal_sekolah` varchar(20)
,`nama_ayah` varchar(150)
,`nama_ibu` varchar(150)
,`pekerjaan_ortu` varchar(100)
,`penghasilan_ortu` varchar(100)
,`berkas_foto` varchar(255)
,`berkas_kk` varchar(255)
,`berkas_akta` varchar(255)
,`berkas_ijazah` varchar(255)
,`is_submitted` tinyint(1)
);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ppdb_pengaturan`
--

CREATE TABLE `ppdb_pengaturan` (
  `id` int(11) NOT NULL DEFAULT 1,
  `tahun_ajaran` varchar(20) NOT NULL DEFAULT '2026/2027',
  `nama_gelombang` varchar(150) NOT NULL DEFAULT 'Gelombang 1 (Reguler & Zonasi)',
  `status_loket` enum('Buka','Verifikasi','Pengumuman','Daftar Ulang','Tutup') NOT NULL DEFAULT 'Buka',
  `tgl_mulai_daftar` date DEFAULT NULL,
  `tgl_selesai_daftar` date DEFAULT NULL,
  `tgl_pengumuman` date DEFAULT NULL,
  `tgl_daftar_ulang` date DEFAULT NULL,
  `kuota_total` int(11) NOT NULL DEFAULT 320,
  `kuota_zonasi` int(11) NOT NULL DEFAULT 160,
  `kuota_prestasi` int(11) NOT NULL DEFAULT 96,
  `kuota_afirmasi` int(11) NOT NULL DEFAULT 48,
  `kuota_mutasi` int(11) NOT NULL DEFAULT 16,
  `pesan_pengumuman` text DEFAULT NULL,
  `kontak_panitia` varchar(50) NOT NULL DEFAULT '0812-3456-7890',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `ppdb_pengaturan`
--

INSERT INTO `ppdb_pengaturan` (`id`, `tahun_ajaran`, `nama_gelombang`, `status_loket`, `tgl_mulai_daftar`, `tgl_selesai_daftar`, `tgl_pengumuman`, `tgl_daftar_ulang`, `kuota_total`, `kuota_zonasi`, `kuota_prestasi`, `kuota_afirmasi`, `kuota_mutasi`, `pesan_pengumuman`, `kontak_panitia`, `updated_at`) VALUES
(1, '2026/2027', 'Gelombang 1 (Reguler & Zonasi)', 'Buka', '2026-06-13', '2026-06-28', '2026-07-02', '2026-07-04', 320, 160, 96, 48, 16, 'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah dibuka. Silakan buat akun calon siswa dan lengkapi formulir pendaftaran serta berkas persyaratan sebelum batas akhir pendaftaran.', '0812-3456-7890', '2026-11-02 08:49:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profil_sekolah`
--

CREATE TABLE `profil_sekolah` (
  `id_profil` int(11) NOT NULL DEFAULT 1,
  `nama_sekolah` varchar(100) NOT NULL DEFAULT 'UPT SMPN 1 Rantepao',
  `npsn` varchar(20) DEFAULT NULL,
  `akreditasi` char(2) DEFAULT 'A',
  `nama_kepsek` varchar(100) NOT NULL,
  `nip_kepsek` varchar(30) DEFAULT NULL,
  `foto_kepsek` varchar(255) DEFAULT 'kepsek.jpg',
  `sambutan_kepsek` text NOT NULL,
  `sejarah` text NOT NULL,
  `visi` text NOT NULL,
  `misi` text NOT NULL,
  `alamat` text NOT NULL,
  `telepon` varchar(20) DEFAULT NULL,
  `email_sekolah` varchar(100) DEFAULT NULL,
  `maps_embed` text DEFAULT NULL,
  `logo_sekolah` varchar(255) DEFAULT 'logo-smpn1-rantepao.png',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `jumlah_siswa` int(11) DEFAULT 886,
  `jumlah_rombel` int(11) DEFAULT 24,
  `label_lokasi` varchar(100) DEFAULT 'Lokasi Sekolah',
  `keterangan_lokasi` varchar(100) DEFAULT 'Gedung Utama',
  `wilayah_lokasi` varchar(150) DEFAULT 'Kec. Rantepao, Toraja Utara'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `profil_sekolah`
--

INSERT INTO `profil_sekolah` (`id_profil`, `nama_sekolah`, `npsn`, `akreditasi`, `nama_kepsek`, `nip_kepsek`, `foto_kepsek`, `sambutan_kepsek`, `sejarah`, `visi`, `misi`, `alamat`, `telepon`, `email_sekolah`, `maps_embed`, `logo_sekolah`, `updated_at`, `jumlah_siswa`, `jumlah_rombel`, `label_lokasi`, `keterangan_lokasi`, `wilayah_lokasi`) VALUES
(1, 'UPT SMP Negeri 1 Rantepao', '40306512', 'A', 'Febry Anita R, S.T', '196801011994121001', 'foto_kepsek-1793593136290-628189447.jpg', 'Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. Website resmi UPT SMPN 1 Rantepao ini hadir sebagai media informasi dan komunikasi antara sekolah, siswa, orang tua, dan masyarakat luas di Toraja Utara.', 'SMP Negeri 1 Rantepao merupakan salah satu sekolah menengah pertama tertua dan berprestasi di Kabupaten Toraja Utara yang telah mencetak banyak generasi unggul.', 'Terwujudnya Peserta Didik yang Beriman, Cerdas, Terampil, dan Berwawasan Lingkungan.', '1. Melaksanakan pembelajaran aktif, inovatif, dan kreatif.\r\n2. Mengembangkan potensi siswa di bidang akademik dan non-akademik.\r\n3. Menanamkan nilai-nilai disiplin dan budaya luhur.', 'Jl. Budi Utomo No. 10, Rantepao, Kec. Rantepao, Kabupaten Toraja Utara, Sulawesi Selatan', '(0423) 21123', 'info@smpn1rantepao.sch.id', '', 'logo_sekolah-1793721879522-978595189.png', '2026-11-03 16:04:39', 886, 24, 'Lokasi Sekolah', 'Gedung Utama', 'Kec. Rantepao, Toraja Utara');

-- --------------------------------------------------------

--
-- Struktur dari tabel `statistik_pengunjung`
--

CREATE TABLE `statistik_pengunjung` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `halaman` varchar(120) NOT NULL DEFAULT '/',
  `tanggal` date NOT NULL,
  `waktu_terakhir` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hits` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `statistik_pengunjung`
--

INSERT INTO `statistik_pengunjung` (`id`, `ip_address`, `user_agent`, `halaman`, `tanggal`, `waktu_terakhir`, `hits`) VALUES
(1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36 Edg/156.0.0.0', '/admin', '2026-11-03', '2026-11-03 15:36:23', 135),
(136, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Safari/537.36 Edg/156.0.0.0', '/', '2026-11-04', '2026-11-04 07:07:14', 118),
(254, '127.0.0.1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1', '/login', '2026-11-05', '2026-11-05 03:07:27', 105);

-- --------------------------------------------------------

--
-- Struktur dari tabel `struktur_organisasi_anggota`
--

CREATE TABLE `struktur_organisasi_anggota` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(150) NOT NULL,
  `nip` varchar(50) DEFAULT NULL,
  `jabatan` varchar(100) NOT NULL,
  `kategori` varchar(50) NOT NULL DEFAULT 'Pimpinan',
  `urutan` int(11) NOT NULL DEFAULT 1,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `struktur_organisasi_anggota`
--

INSERT INTO `struktur_organisasi_anggota` (`id`, `nama_lengkap`, `nip`, `jabatan`, `kategori`, `urutan`, `foto`, `created_at`) VALUES
(1, 'Febry Anita R, S.T', '196801011994121001', 'Kepala Sekolah', 'Pimpinan', 1, 'foto_kepsek-1793593136290-628189447.jpg', '2026-11-03 07:36:17'),
(2, 'Drs. Yulius Rantetana, M.Si.', '-', 'Ketua Komite Sekolah', 'Komite', 2, 'foto_komite-1793331126300-784245000.png', '2026-11-03 07:36:17'),
(3, 'Semuel Banne, S.Sos.', '19760218 200604 1 007', 'Kepala Tata Usaha (KTU)', 'Tata Usaha', 3, 'foto-1792995115091-61590117.jpeg', '2026-11-03 07:36:17'),
(4, 'Maria Rante, S.Pd.', '197504122005012004', 'Wakil Kepala Sekolah Bidang Kurikulum', 'Wakil Kepala Sekolah', 4, 'foto-1792995115091-61590117.jpeg', '2026-11-03 07:36:17'),
(5, 'Damaris Salempang, S.Pd.', '19810322 200801 2 015', 'Wakil Kepala Sekolah Bidang Kesiswaan', 'Wakil Kepala Sekolah', 5, 'foto-1792997512174-127863627.jpeg', '2026-11-03 07:36:17'),
(6, 'Daud Sapan, S.T.', '19781105 200902 1 004', 'Wakil Kepala Sekolah Bidang Sarpras', 'Wakil Kepala Sekolah', 6, 'foto-1792995115091-61590117.jpeg', '2026-11-03 07:36:17'),
(7, 'Martha Sampe, S.Pd.', '19850419 201101 2 009', 'Wakil Kepala Sekolah Bidang Humas', 'Wakil Kepala Sekolah', 7, 'foto-1792997512174-127863627.jpeg', '2026-11-03 07:36:17'),
(8, 'Elisabeth Palamba, S.Pd., Kons.', '19870912 201402 2 003', 'Koordinator Bimbingan Konseling (BK)', 'Koordinator', 8, 'foto-1792997512174-127863627.jpeg', '2026-11-03 07:36:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `struktur_organisasi_info`
--

CREATE TABLE `struktur_organisasi_info` (
  `id` int(11) NOT NULL DEFAULT 1,
  `judul` varchar(255) NOT NULL DEFAULT 'Struktur Organisasi UPT SMP Negeri 1 Rantepao',
  `periode` varchar(100) NOT NULL DEFAULT 'Tahun Ajaran 2025/2026',
  `foto_bagan` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `struktur_organisasi_info`
--

INSERT INTO `struktur_organisasi_info` (`id`, `judul`, `periode`, `foto_bagan`, `keterangan`, `updated_at`) VALUES
(1, 'Struktur Organisasi UPT SMP Negeri 1 Rantepao', 'Tahun Ajaran 2025/2026', NULL, 'Bagan hierarki kepemimpinan, koordinasi kelembagaan, pembagian wewenang manajerial, serta tata kelola administrasi akademik dan kesiswaan di lingkungan UPT SMP Negeri 1 Rantepao.', '2026-11-03 07:36:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` enum('admin','operator') DEFAULT 'admin',
  `foto_profil` varchar(255) DEFAULT 'default-user.png',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `nama_lengkap`, `username`, `password`, `email`, `role`, `foto_profil`, `created_at`, `updated_at`) VALUES
(1, 'Administrator SMPN 1 Rantepao', 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@smpn1rantepao.sch.id', 'admin', 'default-user.png', '2026-10-26 01:52:49', '2026-10-26 01:52:49');

-- --------------------------------------------------------

--
-- Struktur untuk view `ppdb_pendaftar`
--
DROP TABLE IF EXISTS `ppdb_pendaftar`;

DROP VIEW IF EXISTS `ppdb_pendaftar`;
CREATE OR REPLACE VIEW `ppdb_pendaftar` AS SELECT `pendaftar_ppdb`.`id_pendaftar` AS `id_pendaftar`, `pendaftar_ppdb`.`no_pendaftaran` AS `no_pendaftaran`, `pendaftar_ppdb`.`nama_siswa` AS `nama_siswa`, `pendaftar_ppdb`.`nisn` AS `nisn`, `pendaftar_ppdb`.`jenis_kelamin` AS `jenis_kelamin`, `pendaftar_ppdb`.`asal_sekolah` AS `asal_sekolah`, `pendaftar_ppdb`.`jalur_pendaftaran` AS `jalur_pendaftaran`, `pendaftar_ppdb`.`nama_ortu` AS `nama_ortu`, `pendaftar_ppdb`.`no_hp` AS `no_hp`, `pendaftar_ppdb`.`alamat_domisili` AS `alamat_domisili`, `pendaftar_ppdb`.`catatan` AS `catatan`, `pendaftar_ppdb`.`status_seleksi` AS `status_seleksi`, `pendaftar_ppdb`.`tanggal_daftar` AS `tanggal_daftar`, `pendaftar_ppdb`.`email` AS `email`, `pendaftar_ppdb`.`password` AS `password`, `pendaftar_ppdb`.`no_wa` AS `no_wa`, `pendaftar_ppdb`.`tempat_lahir` AS `tempat_lahir`, `pendaftar_ppdb`.`tanggal_lahir` AS `tanggal_lahir`, `pendaftar_ppdb`.`agama` AS `agama`, `pendaftar_ppdb`.`npsn_asal_sekolah` AS `npsn_asal_sekolah`, `pendaftar_ppdb`.`nama_ayah` AS `nama_ayah`, `pendaftar_ppdb`.`nama_ibu` AS `nama_ibu`, `pendaftar_ppdb`.`pekerjaan_ortu` AS `pekerjaan_ortu`, `pendaftar_ppdb`.`penghasilan_ortu` AS `penghasilan_ortu`, `pendaftar_ppdb`.`berkas_foto` AS `berkas_foto`, `pendaftar_ppdb`.`berkas_kk` AS `berkas_kk`, `pendaftar_ppdb`.`berkas_akta` AS `berkas_akta`, `pendaftar_ppdb`.`berkas_ijazah` AS `berkas_ijazah`, `pendaftar_ppdb`.`is_submitted` AS `is_submitted` FROM `pendaftar_ppdb` ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id_berita`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `fk_berita_kategori` (`kategori_id`),
  ADD KEY `fk_berita_penulis` (`penulis_id`);

--
-- Indeks untuk tabel `ekstrakurikuler`
--
ALTER TABLE `ekstrakurikuler`
  ADD PRIMARY KEY (`id_eskul`);

--
-- Indeks untuk tabel `galeri`
--
ALTER TABLE `galeri`
  ADD PRIMARY KEY (`id_galeri`);

--
-- Indeks untuk tabel `guru_staf`
--
ALTER TABLE `guru_staf`
  ADD PRIMARY KEY (`id_guru`);

--
-- Indeks untuk tabel `halaman_statis`
--
ALTER TABLE `halaman_statis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indeks untuk tabel `hero_slider`
--
ALTER TABLE `hero_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kalender_akademik`
--
ALTER TABLE `kalender_akademik`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_tanggal` (`tanggal_mulai`);

--
-- Indeks untuk tabel `kategori_berita`
--
ALTER TABLE `kategori_berita`
  ADD PRIMARY KEY (`id_kategori`),
  ADD UNIQUE KEY `slug_kategori` (`slug_kategori`);

--
-- Indeks untuk tabel `komite_sekolah`
--
ALTER TABLE `komite_sekolah`
  ADD PRIMARY KEY (`id_komite`);

--
-- Indeks untuk tabel `osis_akun`
--
ALTER TABLE `osis_akun`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indeks untuk tabel `osis_galeri`
--
ALTER TABLE `osis_galeri`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `osis_mading`
--
ALTER TABLE `osis_mading`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `osis_pengurus`
--
ALTER TABLE `osis_pengurus`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `osis_profil`
--
ALTER TABLE `osis_profil`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `osis_proker`
--
ALTER TABLE `osis_proker`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pendaftar_ppdb`
--
ALTER TABLE `pendaftar_ppdb`
  ADD PRIMARY KEY (`id_pendaftar`),
  ADD UNIQUE KEY `no_pendaftaran` (`no_pendaftaran`),
  ADD UNIQUE KEY `idx_email` (`email`);

--
-- Indeks untuk tabel `pengumuman`
--
ALTER TABLE `pengumuman`
  ADD PRIMARY KEY (`id_pengumuman`),
  ADD KEY `fk_pengumuman_penulis` (`penulis_id`);

--
-- Indeks untuk tabel `pesan_kontak`
--
ALTER TABLE `pesan_kontak`
  ADD PRIMARY KEY (`id_pesan`);

--
-- Indeks untuk tabel `ppdb_pengaturan`
--
ALTER TABLE `ppdb_pengaturan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `profil_sekolah`
--
ALTER TABLE `profil_sekolah`
  ADD PRIMARY KEY (`id_profil`);

--
-- Indeks untuk tabel `statistik_pengunjung`
--
ALTER TABLE `statistik_pengunjung`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_ip_tanggal` (`ip_address`,`tanggal`),
  ADD KEY `idx_tanggal` (`tanggal`),
  ADD KEY `idx_waktu` (`waktu_terakhir`);

--
-- Indeks untuk tabel `struktur_organisasi_anggota`
--
ALTER TABLE `struktur_organisasi_anggota`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `struktur_organisasi_info`
--
ALTER TABLE `struktur_organisasi_info`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `ekstrakurikuler`
--
ALTER TABLE `ekstrakurikuler`
  MODIFY `id_eskul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `galeri`
--
ALTER TABLE `galeri`
  MODIFY `id_galeri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `guru_staf`
--
ALTER TABLE `guru_staf`
  MODIFY `id_guru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `halaman_statis`
--
ALTER TABLE `halaman_statis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `hero_slider`
--
ALTER TABLE `hero_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kalender_akademik`
--
ALTER TABLE `kalender_akademik`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `kategori_berita`
--
ALTER TABLE `kategori_berita`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `komite_sekolah`
--
ALTER TABLE `komite_sekolah`
  MODIFY `id_komite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `osis_akun`
--
ALTER TABLE `osis_akun`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `osis_galeri`
--
ALTER TABLE `osis_galeri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `osis_mading`
--
ALTER TABLE `osis_mading`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `osis_pengurus`
--
ALTER TABLE `osis_pengurus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `osis_profil`
--
ALTER TABLE `osis_profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `osis_proker`
--
ALTER TABLE `osis_proker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `pendaftar_ppdb`
--
ALTER TABLE `pendaftar_ppdb`
  MODIFY `id_pendaftar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `pengumuman`
--
ALTER TABLE `pengumuman`
  MODIFY `id_pengumuman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `pesan_kontak`
--
ALTER TABLE `pesan_kontak`
  MODIFY `id_pesan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `statistik_pengunjung`
--
ALTER TABLE `statistik_pengunjung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=359;

--
-- AUTO_INCREMENT untuk tabel `struktur_organisasi_anggota`
--
ALTER TABLE `struktur_organisasi_anggota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD CONSTRAINT `fk_berita_kategori` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_berita` (`id_kategori`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_berita_penulis` FOREIGN KEY (`penulis_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `pengumuman`
--
ALTER TABLE `pengumuman`
  ADD CONSTRAINT `fk_pengumuman_penulis` FOREIGN KEY (`penulis_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
