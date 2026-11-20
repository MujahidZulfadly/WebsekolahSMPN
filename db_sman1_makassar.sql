SET FOREIGN_KEY_CHECKS = 0;
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
-- Database: `db_sman1_makassar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

DROP TABLE IF EXISTS `berita`;
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
(1, 2, 1, 'Gemilang Prestasi! Siswa SMAN 1 Makassar Sukses Raih Medali Emas Olimpiade Sains Nasional (OSN) 2025', 'gemilang-prestasi-siswa-sman-1-makassar-sukses-raih-medali-emas-osn-2025', '<p>Kabar membanggakan kembali datang dari kancah sains nasional. Delegasi siswa SMA Negeri 1 Makassar (SMANSA) berhasil menorehkan prestasi gemilang dengan menyabet Medali Emas pada ajang Olimpiade Sains Nasional (OSN) tahun 2025 bidang Kimia dan Biologi yang diselenggarakan oleh Balai Pengembangan Talenta Indonesia (BPTI) Kemendikbudristek.</p><p>Kepala UPT SMAN 1 Makassar, Drs. H. Sulihin Mustafa, M.Pd., menyampaikan apresiasi mendalam atas dedikasi dan kerja keras para siswa serta para guru pembimbing pembina olimpiade sains yang telah bekerja tanpa kenal lelah selama berbulan-bulan membimbing materi olimpiade tingkat lanjut.</p><p>"Prestasi ini membuktikan bahwa tradisi keunggulan akademik SMAN 1 Makassar tetap terjaga kukuh. Kami berkomitmen untuk terus memfasilitasi laboratorium, modul ajar, dan pembinaan intensif agar talenta-talenta muda kita mampu terus bersaing hingga ke level internasional (International Science Olympiad)," tutur beliau di hadapan seluruh peserta upacara bendera hari Senin.</p><p>Kemenangan ini sekaligus mengukuhkan posisi SMANSA Makassar sebagai salah satu lumbung talenta sains terbaik di kawasan Indonesia Timur.</p>', 'prestasi-osn.jpg', 342, 'publish', '2026-10-18 09:00:00', '2026-10-18 09:00:00', '2026-11-05 12:00:00'),
(2, 1, 1, 'Semarak Peringatan HUT Ke-75 SMAN 1 Makassar: Perkuat Sinergi Civitas dan Ikatan Alumni SMANSA', 'semarak-peringatan-hut-ke-75-sman-1-makassar-perkuat-sinergi-civitas-dan-alumni', '<p>Memperingati hari jadinya yang ke-75 tahun, SMA Negeri 1 Makassar menggelar rangkaian acara peringatan akbar yang berlangsung meriah sepanjang pekan ini. Mengusung tema "75 Tahun SMANSA Mengabdi, Mengukir Prestasi Menuju Generasi Emas", kegiatan ini dihadiri oleh ribuan siswa, dewan guru, sesepuh pensiunan guru, serta jajaran pengurus Ikatan Alumni SMANSA (IKA SMANSA) lintas angkatan.</p><p>Rangkaian perayaan diawali dengan kegiatan Jalan Santai Sehat menyusuri Jalan Gunung Bawakaraeng dan kawasan pusat Kota Makassar, dilanjutkan dengan aksi sosial donor darah bersama PMI Kota Makassar, penyerahan beasiswa alumni bagi peserta didik berprestasi kurang mampu, serta pameran hasil karya sains dan teknologi siswa.</p><p>Ketua Panitia Milad menegaskan bahwa usia 75 tahun adalah momentum emas bagi SMANSA Makassar untuk terus beradaptasi dengan era kecerdasan buatan dan globalisasi tanpa melupakan nilai-nilai luhur budi pekerti yang telah ditanamkan sejak tahun 1950.</p>', 'upacara-hardiknas.jpg', 518, 'publish', '2026-10-05 10:30:00', '2026-10-05 10:30:00', '2026-11-05 12:00:00'),
(3, 1, 1, 'Gelar Karya P5 SMANSA Makassar Angkat Tema Kearifan Budaya Bahari dan Gastronomi Sulawesi Selatan', 'gelar-karya-p5-smansa-makassar-angkat-kearifan-budaya-bahari-sulsel', '<p>Halaman tengah kampus SMA Negeri 1 Makassar disulap menjadi panggung kebudayaan yang megah dalam rangka Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5). Kegiatan yang diikuti oleh seluruh siswa Fase E (Kelas X) dan Fase F (Kelas XI) ini mengusung tema kearifan lokal berfokus pada kebudayaan maritim dan kuliner tradisional Bugis-Makassar.</p><p>Para pengunjung pameran disuguhi puluhan stan kreatif yang menampilkan maket sejarah perahu Pinisi, dokumenter video hasil wawancara dengan pengrajin tenun dan nelayan pesisir, serta inovasi olahan pangan lokal berbahan dasar rumput laut dan rempah tradisional.</p><p>"P5 bukan sekadar pameran pajangan, melainkan wahana menumbuhkan nalar kritis, kebhinekaan global, kemandirian, dan gotong royong sesuai amanah Kurikulum Merdeka," ujar Wakil Kepala Sekolah Bidang Kurikulum, Drs. Muhammad Arif, M.Pd.</p>', 'seni-tari-makassar.jpg', 289, 'publish', '2026-09-22 14:15:00', '2026-09-22 14:15:00', '2026-11-05 12:00:00'),
(4, 3, 1, 'SMAN 1 Makassar Gelar Workshop Pemantapan Kurikulum Merdeka & Ekosistem Smart School Bersama Disdik Sulsel', 'sman-1-makassar-gelar-workshop-pemantapan-kurikulum-merdeka-smart-school', '<p>Sebagai sekolah penggerak dan model implementasi Kurikulum Merdeka di Kota Makassar, SMA Negeri 1 Makassar menyelenggarakan Workshop Peningkatan Kompetensi Guru dalam Pembelajaran Berdiferensiasi dan Asesmen Digital Smart School.</p><p>Kegiatan yang berlangsung selama tiga hari di Aula SMANSA ini menghadirkan narasumber dari Tim Pengembang Kurikulum Dinas Pendidikan Provinsi Sulawesi Selatan dan praktisi edutech. Materi pelatihan difokuskan pada pemanfaatan platform Learning Management System (LMS), penyusunan Modul Ajar adaptif kecerdasan buatan, dan asesmen diagnostik berkala.</p><p>Dengan terlaksananya workshop ini, seluruh tenaga pendidik SMANSA siap menghadirkan pengalaman belajar yang menyenangkan, interaktif, dan relevan dengan tantangan abad ke-21.</p>', 'lab-komputer.jpg', 195, 'publish', '2026-09-02 08:30:00', '2026-09-02 08:30:00', '2026-11-05 12:00:00'),
(5, 2, 1, 'Tim Bawakaraeng Basketball Club (BBC) SMANSA Raih Gelar Juara DBL South Sulawesi Series', 'tim-bawakaraeng-basketball-club-smansa-raih-gelar-juara-dbl-south-sulawesi', '<p>Prestasi membanggakan kembali dipersembahkan oleh tim putra Bawakaraeng Basketball Club (BBC) SMAN 1 Makassar. Setelah melalui pertandingan sengit di partai final kompetisi basket pelajar paling bergengsi DBL South Sulawesi Series, SMANSA sukses mengangkat trofi juara utama.</p><p>Dukungan ratusan suporter setia SMANSA yang memadati tribun arena pertandingan semakin membakar semangat juang para atlet. Permainan disiplin, pertahanan kokoh, dan serangan balik cepat menjadi kunci kemenangan tim asuhan pelatih Muh. Ridwan, S.Pd., M.Pd.</p><p>Gelar juara ini semakin memperpanjang torehan prestasi bidang non-akademik SMANSA Makassar di tingkat regional dan nasional.</p>', 'kegiatan-pramuka.jpg', 476, 'publish', '2026-08-28 16:45:00', '2026-08-28 16:45:00', '2026-11-05 12:00:00'),
(6, 3, 1, 'Sosialisasi Program Bimbingan Karir dan Tryout Akbar UTBK-SNBT 2027: Strategi Tembus PTN Favorit', 'sosialisasi-program-bimbingan-karir-dan-tryout-akbar-utbk-snbt-2027', '<p>Guna mempersiapkan peserta didik kelas XII menghadapi Seleksi Nasional Penerimaan Mahasiswa Baru (SNPMB) tahun 2027, Tim Bimbingan Konseling (BK) SMAN 1 Makassar bekerja sama dengan perwakilan alumni mahasiswa menggelar Sosialisasi Karir dan Try Out Akbar Berbasis CBT.</p><p>Acara ini membedah tren ketetatan program studi favorit di kampus-kampus ternama seperti Universitas Hasanuddin (Unhas), Universitas Indonesia (UI), Institut Teknologi Bandung (ITB), Universitas Gadjah Mada (UGM), dan Universitas Airlangga (UNAIR).</p><p>Siswa juga dibekali tips memilih peminatan yang sesuai dengan minat bakat serta strategi mengoptimalkan peluang lolos lewat jalur SNBP (prestasi rapor) maupun SNBT (ujian tulis).</p>', 'gambar-1793606015933-215218085.png', 310, 'publish', '2026-08-10 11:00:00', '2026-08-10 11:00:00', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekstrakurikuler`
--

DROP TABLE IF EXISTS `ekstrakurikuler`;
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
(1, 'Bawakaraeng Basketball Club Smansa (BBC)', 'Muh. Ridwan, S.Pd., M.Pd.', 'Senin & Kamis (15.30 - 17.30)', 'Klub bola basket legendaris SMANSA Makassar yang aktif mencetak atlet berprestasi di kejuaraan DBL dan turnamen antarpelajar se-Sulawesi Selatan.', 'default-eskul.jpg'),
(2, 'Sanggar Seni Sa’da Pawinru', 'Andi Fasdilah Saparang, S.Pd., M.Pd.', 'Rabu & Sabtu (15.30 - 18.00)', 'Wadah eksplorasi seni tradisi Bugis-Makassar, tari kreasi nusantara, olah vokal, musik etnik, dan marching band kebanggaan SMAN 1 Makassar.', 'eskul-tari.jpg'),
(3, 'Paskibra SMANSA Makassar (Unit 101)', 'Ir. H. Syamsuddin, S.Pd., M.T.', 'Selasa & Jumat (15.30 - 17.30)', 'Pasukan Pengibar Bendera SMAN 1 Makassar yang mendidik kedisiplinan, patriotisme, ketahanan fisik, dan formasi upacara tingkat kota hingga nasional.', 'default-eskul.jpg'),
(4, 'Palang Merah Remaja (PMR Wira SMANSA)', 'Dra. Hj. Nurhaedah, M.M.', 'Senin & Kamis (15.30 - 17.00)', 'Organisasi kemanusiaan tingkat wira yang melatih kesiapsiagaan pertolongan pertama, donor darah, mitigasi bencana, dan bakti sosial kemasyarakatan.', 'eskul-pmr.jpg'),
(5, 'Kelompok Ilmiah Remaja Smansa (KIRZHA)', 'Hj. Rosdiana, S.Pd., M.Pd.', 'Kamis (14.30 - 16.30)', 'Komunitas riset sains, teknologi, dan ilmu sosial siswa SMAN 1 Makassar yang konsisten meraih juara dalam lomba karya tulis ilmiah dan OSN.', 'default-eskul.jpg'),
(6, 'Bawakaraeng Futsal Club Smansa (BFC)', 'Muh. Ridwan, S.Pd., M.Pd.', 'Selasa & Sabtu (16.00 - 18.00)', 'Ekstrakurikuler olahraga futsal yang menorehkan segudang trofi kompetisi antarpelajar dengan pembinaan taktik strategi dan sportivitas tinggi.', 'default-eskul.jpg'),
(7, 'Cyberg Information Technology of Smansa (CITOS)', 'Ahmad Fauzi, S.Kom., M.Cs.', 'Rabu & Jumat (15.00 - 17.00)', 'Komunitas teknologi informasi, robotika, coding web & mobile, desain grafis, dan keamanan digital siswa SMAN 1 Makassar.', 'default-eskul.jpg'),
(8, 'Smansa English Conversation Club (SECC)', 'Andi Fasdilah Saparang, S.Pd., M.Pd.', 'Selasa (15.00 - 17.00)', 'Klub penguasaan bahasa Inggris aktif, parliamentary debate, speech contest, dan story telling yang mencetak juara debat bahasa tingkat regional.', 'default-eskul.jpg'),
(9, 'Ikatan Remaja Masjid Darul Ulum (IRMADAM)', 'Fatimah Zahra, S.Pd.I., M.Pd.', 'Setiap Hari Ba\'da Ashar & Jumat', 'Organisasi kerohanian Islam yang berpusat di Masjid Darul Ulum SMANSA untuk pembinaan akhlak mulia, tahsin Al-Qur\'an, dan kajian keislaman.', 'default-eskul.jpg'),
(10, 'Pramuka Ambalan Oryza Sativa (ORZAT)', 'Drs. H. Baharuddin, M.Si.', 'Jumat (14.30 - 17.00)', 'Gerakan Pramuka Penegak Gugus Depan SMAN 1 Makassar yang melatih keterampilan kepanduan, survival, kepemimpinan, dan kecintaan alam.', 'eskul-pramuka.jpg'),
(11, 'Smansa Badminton Club (SBC)', 'Muh. Ridwan, S.Pd., M.Pd.', 'Senin & Rabu (15.30 - 17.30)', 'Klub bulutangkis dengan pembinaan teknik pukulan, kelincahan, dan persiapan intensif turnamen O2SN antarsekolah se-Sulawesi Selatan.', 'default-eskul.jpg'),
(12, 'Fotografi Smansa (Forsa)', 'Ahmad Fauzi, S.Kom., M.Cs.', 'Sabtu (14.00 - 17.00)', 'Wadah kreatif pecinta seni fotografi, sinematografi, dan jurnalisme visual yang mendokumentasikan setiap peristiwa penting sekolah.', 'default-eskul.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `galeri`
--

DROP TABLE IF EXISTS `galeri`;
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
(1, 'Apel Akbar Peringatan Hari Pendidikan Nasional di Kampus Bawakaraeng', 'Seluruh jajaran dewan guru, tenaga kependidikan, dan siswa SMAN 1 Makassar dalam upacara khidmat peringatan Hardiknas.', 'Kegiatan', 'upacara-hardiknas.jpg', '2026-05-02'),
(2, 'Eksperimen Sains & Praktikum Siswa di Laboratorium Kimia Modern', 'Siswa Fase F melakukan riset reaksi reduksi-oksidasi dan titrasi asam basa dengan peralatan canggih terstandarisasi.', 'Fasilitas', 'lab-komputer.jpg', '2026-08-14'),
(3, 'Penyerahan Medali Emas Kontingen SMANSA pada Olimpiade Sains', 'Penyerahan medali dan piagam penghargaan OSN kepada kepala sekolah pada apel bendera hari Senin.', 'Prestasi', 'prestasi-osn.jpg', '2026-09-08'),
(4, 'Pentas Seni Tari Tradisional Sanggar Sa’da Pawinru SMANSA', 'Pertunjukan tari kreasi kolosal Bugis-Makassar dalam menyambut kunjungan tamu kehormatan dari Kementerian Pendidikan.', 'Kegiatan', 'seni-tari-makassar.jpg', '2026-09-28'),
(5, 'Perkemahan Bakti dan Pelantikan Pramuka Ambalan Oryza Sativa', 'Kegiatan pembentukan karakter, kedisiplinan lapangan, dan kepedulian lingkungan ambalan pramuka SMAN 1 Makassar.', 'Kegiatan', 'kegiatan-pramuka.jpg', '2026-10-12'),
(6, 'Kunjungan Edukasi Goes to Campus SMANSA ke Universitas Hasanuddin', 'Siswa kelas XII mendalami profil fakultas favorit, laboratorium riset terpadu, dan sistem perkuliahan di Unhas.', 'Prestasi', 'gambar-1793606015933-215218085.png', '2026-10-25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `guru_staf`
--

DROP TABLE IF EXISTS `guru_staf`;
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
(1, '196508121991031005', 'Drs. H. Sulihin Mustafa, M.Pd.', 'L', 'Kepala Sekolah', 'Kepala Sekolah', 'foto_kepsek-1793593136290-628189447.jpg', 1, 'Aktif', '2026-10-26 01:52:49'),
(2, '197405101998022003', 'Andi Fasdilah Saparang, S.Pd., M.Pd.', 'P', 'Wakasek Humas & Guru Bahasa Inggris', 'Guru', 'default-guru.jpg', 2, 'Aktif', '2026-10-26 01:52:49'),
(3, '196803151994031004', 'Drs. Muhammad Arif, M.Pd.', 'L', 'Wakasek Kurikulum & Guru Matematika', 'Guru', 'default-guru.jpg', 3, 'Aktif', '2026-10-26 01:52:49'),
(4, '196911201995122001', 'Dra. Hj. Nurhaedah, M.M.', 'P', 'Wakasek Kesiswaan & Guru Biologi', 'Guru', 'default-guru.jpg', 4, 'Aktif', '2026-10-26 01:52:49'),
(5, '197008251997021002', 'Ir. H. Syamsuddin, S.Pd., M.T.', 'L', 'Wakasek Sarpras & Guru Fisika', 'Guru', 'default-guru.jpg', 5, 'Aktif', '2026-10-26 01:52:49'),
(6, '197204181997032002', 'Hj. Rosdiana, S.Pd., M.Pd.', 'P', 'Guru Kimia & Pembina KIRZHA', 'Guru', 'default-guru.jpg', 6, 'Aktif', '2026-10-26 01:52:49'),
(7, '196602141992031006', 'Drs. H. Baharuddin, M.Si.', 'L', 'Guru Sejarah Indonesia', 'Guru', 'default-guru.jpg', 7, 'Aktif', '2026-10-26 01:52:49'),
(8, '198007122005012007', 'Nurwahidah, S.Pd., M.Pd.', 'P', 'Guru Bahasa & Sastra Indonesia', 'Guru', 'default-guru.jpg', 8, 'Aktif', '2026-10-26 01:52:49'),
(9, '198509182010011012', 'Ahmad Fauzi, S.Kom., M.Cs.', 'L', 'Guru Informatika & Pembina CITOS', 'Guru', 'default-guru.jpg', 9, 'Aktif', '2026-10-26 01:52:49'),
(10, '196712051993032003', 'Dra. St. Aminah, M.Si.', 'P', 'Guru Ekonomi & Akuntansi', 'Guru', 'default-guru.jpg', 10, 'Aktif', '2026-10-26 01:52:49'),
(11, '198206102008041001', 'Muh. Ridwan, S.Pd., M.Pd.', 'L', 'Guru PJOK & Pelatih Basket/Futsal', 'Guru', 'default-guru.jpg', 11, 'Aktif', '2026-10-26 01:52:49'),
(12, '198303222009022005', 'Fatimah Zahra, S.Pd.I., M.Pd.', 'P', 'Guru PAI & Pembina IRMADAM', 'Guru', 'default-guru.jpg', 12, 'Aktif', '2026-10-26 01:52:49'),
(13, '197811042006041008', 'Hendra Wijaya, S.Pd., M.Pd.', 'L', 'Koordinator Bimbingan Konseling (BK)', 'Guru', 'default-guru.jpg', 13, 'Aktif', '2026-10-26 01:52:49'),
(14, '197908152007012014', 'Maria Magdalena, S.Pd.', 'P', 'Guru Agama Kristen & Pembina PERISAI', 'Guru', 'default-guru.jpg', 14, 'Aktif', '2026-10-26 01:52:49'),
(15, '197601032006042009', 'Rahmawati, S.E.', 'P', 'Kepala Urusan Tata Usaha', 'Staf TU', 'default-guru.jpg', 15, 'Aktif', '2026-10-26 01:52:49'),
(16, '198205172010011015', 'Daeng Marowa, A.Md.', 'L', 'Staf Administrasi & Operator Dapodik', 'Staf TU', 'default-guru.jpg', 16, 'Aktif', '2026-10-26 01:52:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `halaman_statis`
--

DROP TABLE IF EXISTS `halaman_statis`;
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
(1, 'sejarah', 'fa-solid fa-landmark', 'Sejarah Singkat SMA Negeri 1 Makassar', 'Menjelajahi tonggak sejarah pendirian, perkembangan, dan perjalanan prestasi gemilang SMANSA Makassar dari masa ke masa sejak tahun 1950.', 'amber', '<p class="mb-4 text-justify leading-relaxed">SMA Negeri 1 Makassar (dikenal akrab dengan sebutan <strong>SMANSA Makassar</strong>) merupakan salah satu pilar pendidikan menengah tertua, paling bereputasi, dan sarat sejarah di Kawasan Timur Indonesia. Berakar dari institusi pendidikan masa pra-kemerdekaan yaitu <em>Algemeene Middelbare School (AMS)</em> Makassar, sekolah ini secara resmi berdiri pada tahun <strong>1950</strong> dengan nama <strong>SMA ABC Makassar</strong> di bawah kepemimpinan kepala sekolah pertama, Bapak Yatmo (1950–1952).</p>\n<p class="mb-4 text-justify leading-relaxed">Dalam dinamika perkembangannya, sekolah ini berganti nama menjadi SMA Negeri 1 Makassar dan berlokasi strategis di Jalan Gunung Bawakaraeng No. 53, Kota Makassar. Lokasi ini menjadi saksi tumbuhnya generasi demi generasi cendekiawan muda Sulawesi Selatan yang berkiprah di pentas nasional maupun global.</p>\n<p class="mb-4 text-justify leading-relaxed">Pada tahun 2010, SMAN 1 Makassar dipercaya pemerintah sebagai <strong>Rintisan Sekolah Bertaraf Internasional (RSBI)</strong>. Hingga saat ini, di bawah payung Kurikulum Merdeka dan berpredikat Akreditasi A, SMANSA Makassar terus melahirkan ribuan alumni berprestasi tinggi di berbagai bidang—pejabat tinggi negara, akademisi terkemuka, perwira militer dan kepolisian, dokter spesialis, profesional korporasi multinasional, hingga inovator teknologi.</p>', NULL, NULL, NULL, '2026-11-05 12:00:00'),
(3, 'sarana', 'fa-solid fa-building-columns', 'Sarana & Prasarana SMAN 1 Makassar', 'Fasilitas representatif bertaraf nasional: laboratorium sains & komputer canggih, perpustakaan digital, masjid sekolah, dan sarana olahraga modern.', 'emerald', '<p class="mb-4 text-justify leading-relaxed">Untuk mendukung proses pembelajaran interaktif, riset ilmiah, dan pembinaan karakter berbasis Kurikulum Merdeka, SMA Negeri 1 Makassar dilengkapi sarana dan prasarana yang modern, aman, dan representatif:</p>\n<div class="grid sm:grid-cols-2 gap-3.5 my-4">\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-chalkboard-user text-amber-500"></i> Ruang Kelas Smart Classroom\n        </h5>\n        <p class="text-xs text-slate-600">36 ruang kelas representatif ber-AC, dilengkapi proyektor multimedia, smart screen, dan akses internet nirkabel serat optik kecepatan tinggi.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-flask-vial text-blue-600"></i> Laboratorium Sains Terpadu\n        </h5>\n        <p class="text-xs text-slate-600">Tiga unit laboratorium khusus (Fisika, Kimia, dan Biologi) dengan instrumentasi eksperimen berstandar olimpiade sains nasional.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-laptop-code text-indigo-600"></i> Lab Komputer & Server ANBK/CBT\n        </h5>\n        <p class="text-xs text-slate-600">4 laboratorium komputer modern dengan ratusan workstation terbaru untuk praktikum informatika, riset digital, dan ujian nasional.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-book-bookmark text-emerald-600"></i> Perpustakaan Digital & Ruang Baca\n        </h5>\n        <p class="text-xs text-slate-600">Koleksi puluhan ribu buku fisik, katalog e-library terpadu, area diskusi lesehan nyaman, dan ruang literasi digital ber-AC.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-basketball text-orange-500"></i> Lapangan Bawakaraeng Arena\n        </h5>\n        <p class="text-xs text-slate-600">Lapangan serbaguna luar ruang untuk bola basket berstandar Perbasi, futsal, bulutangkis, dan upacara bendera akbar.</p>\n    </div>\n    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2 mb-1">\n            <i class="fa-solid fa-mosque text-teal-600"></i> Masjid Darul Ulum SMANSA\n        </h5>\n        <p class="text-xs text-slate-600">Pusat pembinaan kerohanian Islam, sholat berjamaah civitas sekolah, kajian akhlakul karimah, dan kegiatan mentoring keagamaan.</p>\n    </div>\n</div>', '[{"ikon":"fa-solid fa-chalkboard-user","judul":"Ruang Kelas Smart Classroom","deskripsi":"36 ruang kelas representatif ber-AC, dilengkapi proyektor multimedia, smart screen, dan akses internet nirkabel serat optik kecepatan tinggi.","warna":"amber"},{"ikon":"fa-solid fa-flask-vial","judul":"Laboratorium Sains Terpadu","deskripsi":"Tiga unit laboratorium khusus (Fisika, Kimia, dan Biologi) dengan instrumentasi eksperimen berstandar olimpiade sains nasional.","warna":"blue"},{"ikon":"fa-solid fa-laptop-code","judul":"Lab Komputer & Server ANBK/CBT","deskripsi":"4 laboratorium komputer modern dengan ratusan workstation terbaru untuk praktikum informatika, riset digital, dan ujian nasional.","warna":"indigo"},{"ikon":"fa-solid fa-book-bookmark","judul":"Perpustakaan Digital & Ruang Baca","deskripsi":"Koleksi puluhan ribu buku fisik, katalog e-library terpadu, area diskusi lesehan nyaman, dan ruang literasi digital ber-AC.","warna":"emerald"},{"ikon":"fa-solid fa-basketball","judul":"Lapangan Bawakaraeng Arena","deskripsi":"Lapangan serbaguna luar ruang untuk bola basket berstandar Perbasi, futsal, bulutangkis, dan upacara bendera akbar.","warna":"orange"},{"ikon":"fa-solid fa-mosque","judul":"Masjid Darul Ulum SMANSA","deskripsi":"Pusat pembinaan kerohanian Islam, sholat berjamaah civitas sekolah, kajian akhlakul karimah, dan kegiatan mentoring keagamaan.","warna":"teal"}]', 'Untuk mendukung proses pembelajaran interaktif, riset ilmiah, dan pembinaan karakter berbasis Kurikulum Merdeka, SMA Negeri 1 Makassar dilengkapi sarana dan prasarana yang modern, aman, dan representatif:', NULL, '2026-11-05 12:00:00'),
(4, 'program-kerja', 'fa-solid fa-graduation-cap', 'Program Kerja & Inovasi Unggulan SMAN 1 Makassar', 'Inisiatif kurikulum merdeka inovatif, bimbingan intensif seleksi masuk PTN ternama, digitalisasi smart school, dan pembinaan kepemimpinan siswa.', 'purple', '<p class="mb-4 text-justify leading-relaxed">Dalam memantapkan posisi sebagai pusat keunggulan pendidikan di Sulawesi Selatan, SMAN 1 Makassar menyelenggarakan program strategis berkelanjutan:</p>\n<div class="space-y-3 my-4">\n    <div class="border-l-4 border-amber-500 bg-amber-50/40 p-3 rounded-r-xl border border-amber-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">1. Penguatan Kurikulum Merdeka & Gelar Karya P5</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Pengembangan kompetensi intrakurikuler dan Projek Penguatan Profil Pelajar Pancasila yang mengangkat kearifan lokal budaya bahari serta inovasi teknologi ramah lingkungan.</p>\n    </div>\n    <div class="border-l-4 border-blue-600 bg-blue-50/40 p-3 rounded-r-xl border border-blue-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">2. Klinik Sukses Masuk PTN Favorit (SNBP & SNBT)</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Program bimbingan intensif pendataan PDSS, pemetaan rekam jejak alumni, tryout berkala berbasis UTBK, serta konsultasi karir bersama alumni perguruan tinggi terkemuka.</p>\n    </div>\n    <div class="border-l-4 border-emerald-500 bg-emerald-50/40 p-3 rounded-r-xl border border-emerald-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">3. Ekosistem Smart School & Asesmen Digital Terpadu</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Integrasi sistem pembelajaran e-learning, absensi presensi digital siswa, dan ujian berbasis Computer-Based Test (CBT) yang akuntabel dan real-time.</p>\n    </div>\n    <div class="border-l-4 border-purple-500 bg-purple-50/40 p-3 rounded-r-xl border border-purple-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">4. Pembinaan Talenta Sains & Seni Budaya Sa’da Pawinru</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Kaderisasi atlet dan seniman muda melalui bimbingan khusus untuk ajang OSN, O2SN, FLS2N, hingga kompetisi debat internasional SECC.</p>\n    </div>\n    <div class="border-l-4 border-rose-500 bg-rose-50/40 p-3 rounded-r-xl border border-rose-100">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm">5. Gerakan Sekolah Sehat & Adiwiyata Berkelanjutan</h5>\n        <p class="text-xs text-slate-600 mt-0.5">Edukasi pelestarian lingkungan kampus, pengelolaan bank sampah sekolah, kantin sehat higienis, serta kawasan hijau bebas asap rokok dan bebas plastik sekali pakai.</p>\n    </div>\n</div>', '[{"ikon":"fa-solid fa-graduation-cap","judul":"1. Penguatan Kurikulum Merdeka & Gelar Karya P5","deskripsi":"Pengembangan kompetensi intrakurikuler dan Projek Penguatan Profil Pelajar Pancasila yang mengangkat kearifan lokal budaya bahari serta inovasi teknologi ramah lingkungan.","warna":"amber"},{"ikon":"fa-solid fa-building-columns","judul":"2. Klinik Sukses Masuk PTN Favorit (SNBP & SNBT)","deskripsi":"Program bimbingan intensif pendataan PDSS, pemetaan rekam jejak alumni, tryout berkala berbasis UTBK, serta konsultasi karir bersama alumni perguruan tinggi terkemuka.","warna":"blue"},{"ikon":"fa-solid fa-laptop-code","judul":"3. Ekosistem Smart School & Asesmen Digital Terpadu","deskripsi":"Integrasi sistem pembelajaran e-learning, absensi presensi digital siswa, dan ujian berbasis Computer-Based Test (CBT) yang akuntabel dan real-time.","warna":"emerald"},{"ikon":"fa-solid fa-masks-theater","judul":"4. Pembinaan Talenta Sains & Seni Budaya Sa’da Pawinru","deskripsi":"Kaderisasi atlet dan seniman muda melalui bimbingan khusus untuk ajang OSN, O2SN, FLS2N, hingga kompetisi debat internasional SECC.","warna":"purple"},{"ikon":"fa-solid fa-leaf","judul":"5. Gerakan Sekolah Sehat & Adiwiyata Berkelanjutan","deskripsi":"Edukasi pelestarian lingkungan kampus, pengelolaan bank sampah sekolah, kantin sehat higienis, serta kawasan hijau bebas asap rokok dan bebas plastik sekali pakai.","warna":"rose"}]', 'Dalam memantapkan posisi sebagai pusat keunggulan pendidikan di Sulawesi Selatan, SMAN 1 Makassar menyelenggarakan program strategis berkelanjutan:', NULL, '2026-11-05 12:00:00'),
(5, 'kondisi-siswa', 'fa-solid fa-chart-pie', 'Kondisi Siswa & Statistik Akademik SMANSA', 'Data persebaran peserta didik, rombongan belajar (rombel), rasio tenaga pendidik berkualifikasi, dan rekam jejak kelulusan ke PTN terkemuka.', 'rose', '<div class="space-y-3 my-4">\n    <div class="border-l-4 border-blue-500 bg-blue-50/40 p-3.5 rounded-r-2xl border border-blue-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-users text-blue-600 text-sm"></i>\n            <span>Total 1.284 Peserta Didik Aktif</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Terdiri dari 432 siswa Fase E (Kelas X), 428 siswa Fase F (Kelas XI), dan 424 siswa Fase F (Kelas XII) dengan sebaran peminatan MIPA, IPS, dan Bahasa yang seimbang.</p>\n    </div>\n    <div class="border-l-4 border-emerald-500 bg-emerald-50/40 p-3.5 rounded-r-2xl border border-emerald-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-chalkboard text-emerald-600 text-sm"></i>\n            <span>36 Rombongan Belajar (Rombel)</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Masing-masing jenjang terdiri dari 12 rombongan belajar dengan rasio per kelas 36 peserta didik untuk memastikan efektivitas interaksi belajar-mengajar.</p>\n    </div>\n    <div class="border-l-4 border-amber-500 bg-amber-50/40 p-3.5 rounded-r-2xl border border-amber-100 transition-all hover:shadow-xs">\n        <h5 class="font-bold text-blue-950 text-xs sm:text-sm flex items-center gap-2">\n            <i class="fa-solid fa-user-graduate text-amber-600 text-sm"></i>\n            <span>Tingkat Kelulusan 100% & Daya Serap PTN > 85%</span>\n        </h5>\n        <p class="text-xs text-slate-600 mt-1 leading-relaxed">Secara konsisten meraih kelulusan paripurna dengan lebih dari 85% lulusan diterima di Perguruan Tinggi Negeri favorit (Unhas, UI, ITB, UGM, ITS, UNAIR, UNM) dan kedinasan.</p>\n    </div>\n</div>\n<p class="mt-4 text-justify leading-relaxed">Didukung oleh 78 tenaga pendidik profesional dan staf kependidikan berdedikasi, SMAN 1 Makassar senantiasa mengedepankan lingkungan belajar yang kondusif, inklusif, dan menginspirasi seluruh siswa untuk mencapai potensi optimalnya.</p>', '[{"ikon":"fa-solid fa-users","judul":"Total 1.284 Peserta Didik Aktif","deskripsi":"Terdiri dari 432 siswa Fase E (Kelas X), 428 siswa Fase F (Kelas XI), dan 424 siswa Fase F (Kelas XII) dengan sebaran peminatan MIPA, IPS, dan Bahasa yang seimbang.","warna":"blue"},{"ikon":"fa-solid fa-chalkboard","judul":"36 Rombongan Belajar (Rombel)","deskripsi":"Masing-masing jenjang terdiri dari 12 rombongan belajar dengan rasio per kelas 36 peserta didik untuk memastikan efektivitas interaksi belajar-mengajar.","warna":"emerald"},{"ikon":"fa-solid fa-user-graduate","judul":"Tingkat Kelulusan 100% & Daya Serap PTN > 85%","deskripsi":"Secara konsisten meraih kelulusan paripurna dengan lebih dari 85% lulusan diterima di Perguruan Tinggi Negeri favorit (Unhas, UI, ITB, UGM, ITS, UNAIR, UNM) dan kedinasan.","warna":"amber"}]', NULL, 'Didukung oleh 78 tenaga pendidik profesional dan staf kependidikan berdedikasi, SMAN 1 Makassar senantiasa mengedepankan lingkungan belajar yang kondusif, inklusif, dan menginspirasi seluruh siswa untuk mencapai potensi optimalnya.', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hero_slider`
--

DROP TABLE IF EXISTS `hero_slider`;
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
(1, 'Pusat Keunggulan Akademik & Karakter', 'SMA Negeri 1 Makassar berkomitmen melahirkan generasi cerdas, berintegritas, berakhlak mulia, dan berdaya saing global di era transformasi Kurikulum Merdeka.', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80', 'Jelajahi Profil SMANSA', '#profil', 1, 'Aktif', '2026-11-03 16:58:35'),
(2, 'Tradisi Prestasi Sejak 1950', 'Mewarisi reputasi lumbung juara di berbagai ajang Olimpiade Sains Nasional, festival seni budaya nusantara, hingga kejuaraan olahraga bergengsi.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80', 'Lihat Prestasi Siswa', '#prestasi', 2, 'Aktif', '2026-11-03 16:58:35'),
(3, 'Membina Bakat & Kepemimpinan', 'Wadah kreasi dengan 17 ekstrakurikuler unggulan, fasilitas modern di Jalan Gunung Bawakaraeng No. 53, dan pembinaan intensif menyongsong masa depan gemilang.', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80', 'Info PPDB 2026/2027', '/ppdb', 3, 'Aktif', '2026-11-03 16:58:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kalender_akademik`
--

DROP TABLE IF EXISTS `kalender_akademik`;
CREATE TABLE `kalender_akademik` (
  `id` int(11) NOT NULL,
  `judul_kegiatan` varchar(200) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `tanggal_mulai` date NOT NULL,
  `tanggal_selesai` date DEFAULT NULL,
  `kategori` enum('Akademik','Ujian','Libur','Kegiatan','Rapat') NOT NULL DEFAULT 'Akademik',
  `warna_badge` varchar(30) NOT NULL DEFAULT 'blue',
  `lokasi` varchar(150) DEFAULT 'Kampus SMAN 1 Makassar',
  `urutan` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kalender_akademik`
--

INSERT INTO `kalender_akademik` (`id`, `judul_kegiatan`, `deskripsi`, `tanggal_mulai`, `tanggal_selesai`, `kategori`, `warna_badge`, `lokasi`, `urutan`, `created_at`, `updated_at`) VALUES
(1, 'Penilaian Sumatif Akhir Semester (PSAS) Ganjil TA 2026/2027', 'Pelaksanaan ujian akhir semester ganjil berbasis Computer-Based Test (CBT) untuk seluruh siswa kelas X, XI, dan XII.', '2026-11-23', '2026-12-05', 'Ujian', 'red', 'Kampus SMAN 1 Makassar', 1, '2026-11-01 08:00:00', '2026-11-05 12:00:00'),
(2, 'Pekan Olahraga dan Seni (Porseni) Antarkelas SMANSA 2026', 'Ajang unjuk bakat olahraga basket, futsal, bulutangkis, panggung musik etnik, dan festival tari tradisional antarkelas.', '2026-12-08', '2026-12-14', 'Kegiatan', 'emerald', 'Lapangan Bawakaraeng & Aula SMANSA', 2, '2026-11-01 08:00:00', '2026-11-05 12:00:00'),
(3, 'Pembagian Buku Rapor Semester Ganjil & Libur Akhir Semester', 'Penerimaan laporan hasil belajar peserta didik oleh orang tua/wali murid serta masa libur semester ganjil.', '2026-12-19', '2027-01-03', 'Akademik', 'blue', 'Ruang Kelas Masing-Masing', 3, '2026-11-01 08:00:00', '2026-11-05 12:00:00'),
(4, 'Tryout Akbar UTBK-SNBT 2027 dan Sosialisasi Kampus PTN', 'Simulasi ujian tulis berbasis komputer persiapan seleksi masuk perguruan tinggi negeri bersama alumni SMANSA.', '2027-01-16', '2027-01-17', 'Akademik', 'amber', 'Laboratorium Komputer SMANSA', 4, '2026-11-01 08:00:00', '2026-11-05 12:00:00'),
(5, 'Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5)', 'Pameran kreasi inovasi tema Budaya Bahari dan Kewirausahaan Kreatif siswa SMAN 1 Makassar.', '2027-02-20', '2027-02-21', 'Kegiatan', 'purple', 'Halaman Tengah SMAN 1 Makassar', 5, '2026-11-01 08:00:00', '2026-11-05 12:00:00'),
(6, 'Asesmen Sumatif Akhir Jenjang (ASAJ) Kelas XII TA 2026/2027', 'Ujian penentu kelulusan peserta didik kelas XII SMA Negeri 1 Makassar berbasis digital CBT.', '2027-03-15', '2027-03-24', 'Ujian', 'red', 'Ruang CBT SMANSA', 6, '2026-11-01 08:00:00', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_berita`
--

DROP TABLE IF EXISTS `kategori_berita`;
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
(3, 'Informasi Akademik', 'informasi-akademik'),
(4, 'Kesiswaan & OSIS', 'kesiswaan-dan-osis');

-- --------------------------------------------------------

--
-- Struktur dari tabel `komite_sekolah`
--

DROP TABLE IF EXISTS `komite_sekolah`;
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
(1, 'Prof. Dr. Ir. H. Nasaruddin Salam, M.T.', 'Ketua Komite', '2024 - 2027', 'Guru Besar Universitas Hasanuddin & Tokoh Pendidikan Sulsel', 'default-komite.jpg', 1, '2026-10-30 02:58:40'),
(2, 'H. Andi Muhammad Ilham, S.H., M.Kn.', 'Wakil Ketua Komite', '2024 - 2027', 'Praktisi Hukum & Perwakilan IKA SMANSA Makassar', 'default-komite.jpg', 2, '2026-10-30 02:58:40'),
(3, 'Hj. St. Maryam, S.E., Ak., M.M.', 'Sekretaris & Bendahara', '2024 - 2027', 'Akuntan Publik & Perwakilan Orang Tua Siswa', 'default-komite.jpg', 3, '2026-10-30 02:58:40'),
(4, 'Dr. Ir. H. Burhanuddin, M.Si.', 'Anggota Bidang Sarana & Kemitraan', '2024 - 2027', 'Akademisi & Tokoh Masyarakat Kota Makassar', 'default-komite.jpg', 4, '2026-10-30 02:58:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_akun`
--

DROP TABLE IF EXISTS `osis_akun`;
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
(1, 'osis', '$2b$10$O43waDgh68FzfBUqm8w5zu8l67JTA9XiK0q5Oa73mmjrD23nuBM0e', 'Pengurus Inti OSIS SMANSA', 'Administrator OSIS SMAN 1 Makassar', NULL, '2026-11-03 14:29:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_galeri`
--

DROP TABLE IF EXISTS `osis_galeri`;
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
(1, 'Upacara Serah Terima Jabatan & Pelantikan Pengurus OSIS Periode 2025/2026', 'Organisasi', 'Agustus 2025', 'foto_galeri_osis-1793719984182-576058740.png', 'Momen khidmat pengucapan ikrar pengurus OSIS SMAN 1 Makassar di hadapan Kepala Sekolah dan dewan guru.', '2026-11-02 07:40:17'),
(2, 'Aksi Solidaritas Bakti Lingkungan dan Penghijauan Kampus Bawakaraeng', 'Sosial', 'September 2025', 'foto_galeri_osis-1793719984182-576058740.png', 'Pengurus OSIS bersama kader Adiwiyata merawat tanaman peneduh dan taman sekolah di Jl. Gunung Bawakaraeng.', '2026-11-02 07:40:17'),
(3, 'Pentas Seni Akustik & Teater Siswa SMANSA dalam Bulan Bahasa', 'Seni', 'Oktober 2025', 'foto_galeri_osis-1793719984182-576058740.png', 'Kreativitas panggung tanpa batas persembahan siswa-siswi SMAN 1 Makassar dalam menyemarakkan peringatan bulan bahasa.', '2026-11-02 07:40:17'),
(4, 'Latihan Gabungan Baris-Berbaris Paskibra Unit 101 SMANSA', 'Kesiswaan', 'November 2025', 'foto_galeri_osis-1793719984182-576058740.png', 'Latihan ketangkasan formasi dan kedisiplinan anggota Paskibra SMAN 1 Makassar di lapangan sekolah.', '2026-11-02 07:40:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_mading`
--

DROP TABLE IF EXISTS `osis_mading`;
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
(1, 'Strategi Jitu Menembus Fakultas Kedokteran dan Teknik Favorit Lewat Jalur SNBP', 'Tips Akademik', 'Kayla Azzahra', 'Kelas XI MIPA 2', '28 Oktober 2026', 'Kunci sukses menembus PTN impian tidak semata-mata bergantung pada nilai rapor tinggi, tetapi juga stabilitas tren grafik nilai, pemilihan portofolio prestasi sertifikat, serta pemahaman rekam jejak alumni di program studi yang dituju.', 48, NULL, '2026-11-02 07:40:17'),
(2, 'Menjaga Api Kebanggaan: Kilas Balik 75 Tahun Dedikasi Almamater SMANSA Makassar', 'Opini & Inspirasi', 'Muhammad Rifqi Pratama', 'Kelas XI MIPA 1', '15 Oktober 2026', 'Berdiri sejak 1950 di jantung kota Makassar, SMANSA telah melahirkan ribuan tokoh besar. Tugas kita hari ini bukan sekadar membanggakan nama besar masa lalu, tetapi membuktikan bahwa kita layak menjadi penerus tongkat estafet prestasi tersebut.', 62, NULL, '2026-11-02 07:40:17'),
(3, 'Mengenal Lebih Dekat Budaya Bahari Sulawesi Selatan Lewat Gelar Karya P5', 'Liputan Budaya', 'Clarissa Olivia Putri', 'Kelas XI IPS 3', '02 Oktober 2026', 'Melalui projek penguatan profil pelajar Pancasila, siswa SMANSA diajak menyelami filosofi keperkasaan perahu Pinisi dan kearifan masyarakat pesisir Bugis-Makassar dalam menjaga harmoni dengan alam lautan.', 35, NULL, '2026-11-02 07:40:17'),
(4, 'Tips Mengatur Waktu Antara Organisasi OSIS dan Nilai Akademik Agar Tetap Paripurna', 'Life Skills', 'Fathir Al-Ghifari', 'Kelas XI IPS 2', '20 September 2026', 'Menjadi organisatoris bukan alasan untuk mengorbankan prestasi belajar di kelas. Dengan metode time boxing dan skala prioritas kuadran Eisenhower, kita bisa meraih dua-duanya secara seimbang tanpa burnout.', 51, NULL, '2026-11-02 07:40:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_pengurus`
--

DROP TABLE IF EXISTS `osis_pengurus`;
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
(1, 'Muhammad Rifqi Pratama', 'Ketua Umum OSIS', 'Pengurus Inti', 'Kelas XI MIPA 1', 'Memimpin dengan keteladanan, melayani dengan kerendahan hati demi kemajuan almamater tercinta.', 'default-osis.jpg', 1, '2026-11-02 07:40:17'),
(2, 'Andi Nurul Izzah', 'Wakil Ketua Umum', 'Pengurus Inti', 'Kelas XI MIPA 3', 'Sinergi dan empati adalah kunci mewujudkan generasi berdaya cipta.', 'default-osis.jpg', 2, '2026-11-02 07:40:17'),
(3, 'Fathir Al-Ghifari', 'Sekretaris Umum', 'Pengurus Inti', 'Kelas XI IPS 2', 'Tertib administrasi, sigap komunikasi, teguh memegang amanah.', 'default-osis.jpg', 3, '2026-11-02 07:40:17'),
(4, 'Kayla Azzahra', 'Bendahara Umum', 'Pengurus Inti', 'Kelas XI MIPA 2', 'Transparan, akuntabel, dan cermat mengelola amanah dana kegiatan organisasi.', 'default-osis.jpg', 4, '2026-11-02 07:40:17'),
(5, 'Sultan Malik Ibrahim', 'Ketua Sekbid 1 (Ketaqwaan & Rohani)', 'Koordinator Bidang', 'Kelas XI MIPA 4', 'Meneguhkan fondasi spiritual generasi muda di tengah arus modernisasi.', 'default-osis.jpg', 5, '2026-11-02 07:40:17'),
(6, 'Dimas Aditya Pratama', 'Ketua Sekbid 2 (Bela Negara & Kedisiplinan)', 'Koordinator Bidang', 'Kelas XI IPS 1', 'Disiplin adalah nafas kepemimpinan sejati.', 'default-osis.jpg', 6, '2026-11-02 07:40:17'),
(7, 'Clarissa Olivia Putri', 'Ketua Sekbid 3 (Seni & Apresiasi Budaya)', 'Koordinator Bidang', 'Kelas XI IPS 3', 'Melestarikan warisan budaya nusantara melalui kreasi estetika kontemporer.', 'default-osis.jpg', 7, '2026-11-02 07:40:17'),
(8, 'Rayhan Dwi Cahyo', 'Ketua Sekbid 4 (Iptek, Riset & Multimedia)', 'Koordinator Bidang', 'Kelas XI MIPA 5', 'Mendorong budaya literasi sains dan kecakapan teknologi di era kecerdasan buatan.', 'default-osis.jpg', 8, '2026-11-02 07:40:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_profil`
--

DROP TABLE IF EXISTS `osis_profil`;
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
(1, 'Muhammad Rifqi Pratama', 'Kelas XI MIPA 1', '2025/2026', 'Mewujudkan OSIS SMAN 1 Makassar yang Progresif, Inspiratif, Kolaboratif, dan Berkarakter Kuat Berlandaskan Nilai Ketakwaan serta Semangat Berprestasi Menuju Generasi Emas.', 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk Seluruh Sahabat SMANSA!\r\n\r\nSelamat datang di laman resmi OSIS SMA Negeri 1 Makassar. Sebagai representasi dan wadah aspirasi seluruh peserta didik SMANSA, pengurus OSIS periode 2025/2026 berkomitmen hadir sebagai motor penggerak kebaikan, wadah pengembangan potensi kepemimpinan, dan pencipta ruang kolaborasi yang suportif bagi seluruh siswa.\r\n\r\nMelalui berbagai agenda unggulan di bidang keagamaan, penalaran ilmiah, seni budaya, olahraga, kepedulian sosial kemasyarakatan, hingga literasi digital, kami bertekad meneruskan tradisi kejayaan almamater tercinta. Jangan ragu untuk berbagi gagasan, ide kreatif, dan karya terbaik demi kemajuan SMANSA Makassar. SMANSA Bisa, SMANSA Juara!\r\n\r\nWassalamu’alaikum Warahmatullahi Wabarakatuh.', 'default-osis.jpg', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `osis_proker`
--

DROP TABLE IF EXISTS `osis_proker`;
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
(1, 'Bawakaraeng Championship 2026 (SMANSA Cup)', 'Olahraga & Prestasi', 'fa-trophy', 'Oktober 2026', 'Pelajar SMA se-Sulawesi Selatan', 'Sedang Berjalan', 'Turnamen akbar tahunan cabang bola basket, futsal, bulutangkis, dan e-sport antarpelajar SMA se-Sulawesi Selatan untuk memupuk sportivitas dan talenta muda.', 1, '2026-11-02 07:40:17'),
(2, 'Gebyar Malam Puncak Seni Budaya Sa’da Pawinru', 'Seni & Budaya', 'fa-masks-theater', 'November 2026', 'Seluruh Siswa, Guru & Alumni', 'Sedang Berjalan', 'Pentas seni kolosal persembahan siswa SMAN 1 Makassar yang menampilkan teater musikal, tari etnik Bugis-Makassar, pameran daur ulang, dan penampilan band sekolah.', 2, '2026-11-02 07:40:17'),
(3, 'Latihan Dasar Kepemimpinan Siswa (LDKS) 2026', 'Kepemimpinan & Karakter', 'fa-compass', 'Agustus 2026', 'Pengurus OSIS, MPK & Ekstrakurikuler', 'Selesai', 'Kawah candradimuka pembentukan karakter kepemimpinan, manajemen organisasi, penyusunan anggaran, problem solving, dan team building bagi pengurus organisasi siswa.', 3, '2026-11-02 07:40:17'),
(4, 'Smansa Mengajar & Bakti Sosial Pesisir Makassar', 'Sosial & Pengabdian', 'fa-hands-holding-heart', 'Desember 2026', 'Masyarakat Pesisir & Anak Usia Sekolah', 'Akan Datang', 'Program pengabdian sosial OSIS dengan membagikan paket alat tulis, donasi buku bacaan, serta pendampingan belajar calistung bagi adik-adik di perkampungan nelayan.', 4, '2026-11-02 07:40:17'),
(5, 'Smansa Digital Literacy & Artificial Intelligence Workshop', 'Iptek & Riset', 'fa-laptop-code', 'September 2026', 'Siswa Kelas X dan XI', 'Selesai', 'Seminar dan pelatihan interaktif pemanfaatan AI secara etis, pembuatan portofolio digital, dan keamanan siber di kalangan pelajar SMA.', 5, '2026-11-02 07:40:17'),
(6, 'Gebyar Semarak Ramadhan & Tadarus di Kampus', 'Keagamaan & Rohani', 'fa-mosque', 'Maret - April 2026', 'Civitas Muslim SMAN 1 Makassar', 'Akan Datang', 'Rangkaian kegiatan pesantren kilat, perlombaan dai cilik/remaja, tadarus bersama di Masjid Darul Ulum, serta penyaluran zakat fitrah kepada kaum dhuafa.', 6, '2026-11-02 07:40:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pendaftar_ppdb`
--

DROP TABLE IF EXISTS `pendaftar_ppdb`;
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
(1, 'PPDB2026001', 'Andi Muhammad Fauzan', '0087654321', 'Laki-laki', 'SMP Negeri 6 Makassar', 'Zonasi', 'Ir. H. Andi Syahrul', '081144556677', 'Jl. Masjid Raya No. 24, Kel. Gaddong, Bontoala, Makassar', 'Jalur Zonasi Domisili Radius 450 meter dari Kampus SMANSA', 'Diterima', '2026-06-16 08:30:00', 'fauzan@gmail.com', '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef', '081144556677', 'Makassar', '2010-04-12', 'Islam', '40307221', 'Andi Syahrul', 'Andi Nurhasanah', 'PNS / ASN', 'Rp 5.000.000 - Rp 10.000.000', NULL, NULL, NULL, NULL, 1),
(2, 'PPDB2026002', 'Siti Nurhaliza Putri', '0089123456', 'Perempuan', 'SMP Islam Athirah Makassar', 'Prestasi', 'Drs. H. Mulyadi', '081233445566', 'Jl. Urip Sumoharjo No. 88, Makassar', 'Juara 1 OSN Matematika Tingkat Kota Makassar', 'Berkas Terverifikasi', '2026-06-16 09:15:00', 'haliza@gmail.com', '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef', '081233445566', 'Makassar', '2010-08-25', 'Islam', '40307550', 'Mulyadi', 'Hj. Mardiana', 'Wiraswasta', 'Di atas Rp 10.000.000', NULL, NULL, NULL, NULL, 1),
(3, 'PPDB2026003', 'Christian Jonathan Tan', '0081239874', 'Laki-laki', 'SMP Kristen Rajawali Makassar', 'Prestasi', 'David Jonathan Tan', '081355667788', 'Jl. Veteran Utara No. 112, Makassar', 'Medali Emas Kejuaraan Renang Antarpelajar se-Sulsel', 'Menunggu Verifikasi', '2026-06-17 10:00:00', 'christian@gmail.com', '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef', '081355667788', 'Makassar', '2010-02-18', 'Kristen', '40307332', 'David Jonathan Tan', 'Linda Wijaya', 'Karyawan Swasta', 'Rp 5.000.000 - Rp 10.000.000', NULL, NULL, NULL, NULL, 1),
(4, 'PPDB2026004', 'Nur Annisa Maharani', '0086543219', 'Perempuan', 'SMP Negeri 12 Makassar', 'Afirmasi', 'Baharuddin', '085244112233', 'Jl. Gunung Latimojong No. 45, Makassar', 'Pemegang Kartu Indonesia Pintar (KIP)', 'Berkas Terverifikasi', '2026-06-17 11:30:00', 'annisa@gmail.com', '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef', '085244112233', 'Makassar', '2010-11-09', 'Islam', '40307234', 'Baharuddin', 'Salmawati', 'Buruh Harian Lepas', 'Di bawah Rp 2.000.000', NULL, NULL, NULL, NULL, 1),
(5, 'PPDB2026005', 'Rizky Pratama Wijaya', '0084567890', 'Laki-laki', 'SMP Negeri 3 Makassar', 'Perpindahan Tugas', 'Letkol Inf. Hendro Wijaya', '081299887766', 'Jl. Jenderal Sudirman No. 15, Makassar', 'Surat Penugasan Mutasi Instansi TNI AD Kodam XIV/Hasanuddin', 'Menunggu Verifikasi', '2026-06-18 13:45:00', 'rizky@gmail.com', '$2b$10$7v4k2HqJg9q6gT/E1aK7Ce7YIuB9M6D1b8Q31234567890abcdef', '081299887766', 'Makassar', '2010-06-30', 'Islam', '40307225', 'Hendro Wijaya', 'Ratna Juwita', 'TNI / POLRI', 'Rp 5.000.000 - Rp 10.000.000', NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengumuman`
--

DROP TABLE IF EXISTS `pengumuman`;
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
(1, 1, 'Jadwal Asesmen Sumatif Akhir Jenjang (ASAJ) Kelas XII Tahun Ajaran 2025/2026', 'Diberitahukan kepada seluruh peserta didik kelas XII bahwa Asesmen Sumatif Akhir Jenjang (ASAJ) berbasis Computer-Based Test (CBT) akan dilaksanakan pada tanggal 16 s.d. 25 Maret 2026 di laboratorium komputer SMAN 1 Makassar. Seluruh siswa diharapkan mencetak kartu peserta ujian dan mematuhi tata tertib asesmen.', NULL, '2026-03-01', '2026-03-01 08:00:00'),
(2, 1, 'Verifikasi dan Validasi Data PDSS untuk Seleksi Nasional Berdasarkan Prestasi (SNBP) 2026', 'Kepada seluruh siswa kelas XII yang masuk kuota eligible SNBP 2026, dimohon segera melakukan pengecekan nilai rapor semester 1 s.d. 5 pada pangkalan data sekolah dan siswa. Apabila terdapat koreksi nilai, segera melapor kepada tim operator Dapodik di ruang tata usaha paling lambat 10 Februari 2026.', NULL, '2026-02-01', '2026-02-01 08:00:00'),
(3, 1, 'Informasi Resmi Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Makassar TA 2026/2027', 'Petunjuk teknis dan tahapan PPDB SMAN 1 Makassar Tahun Ajaran 2026/2027 meliputi Jalur Domisili/Zonasi, Jalur Afirmasi, Jalur Prestasi Akademik & Non-Akademik, serta Jalur Perpindahan Tugas Orang Tua resmi dibuka. Pendaftaran dilaksanakan secara online melalui portal PPDB web ini.', NULL, '2026-05-15', '2026-05-15 08:00:00'),
(4, 1, 'Pemberitahuan Pelaksanaan Uji Kemahiran Berbahasa Indonesia (UKBI) dan Seleksi Riset KIRZHA', 'Disampaikan kepada seluruh perwakilan kelas X dan XI peminatan bahasa dan riset bahwa pelaksanaan tes UKBI adaptif daring terjadwal pada hari Sabtu mendatang. Pendaftaran terbuka secara mandiri melalui pembina Kelompok Ilmiah Remaja SMANSA di ruang multimedia.', NULL, '2026-04-10', '2026-04-10 08:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesan_kontak`
--

DROP TABLE IF EXISTS `pesan_kontak`;
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
(1, 'H. Andi Ridwan (Wali Calon Siswa)', '081244558899', '[PPDB 2026/2027] Persyaratan Jalur Zonasi Domisili Bontoala', 'Assalamu’alaikum panitia PPDB SMANSA Makassar, kami bermaksud menanyakan persyaratan berkas verifikasi kartu keluarga untuk jalur zonasi radius kecamatan Bontoala. Terima kasih atas bantuannya.', 'Sudah Dibaca', '2026-10-15 08:30:00'),
(2, 'Dr. Hj. Marwah, M.Kes.', '081399881122', 'Konsultasi Verifikasi Sertifikat Prestasi OSN', 'Selamat pagi panitia, putri kami memiliki sertifikat medali perak olimpiade sains tingkat provinsi. Apakah pengesahannya cukup dari Dinas Pendidikan Provinsi Sulsel? Terima kasih.', 'Sudah Dibaca', '2026-10-22 10:15:00'),
(3, 'Bambang Supriyanto', 'bambang.supriyanto@gmail.com', 'Permohonan Kerjasama Edukasi Kampus Goes to SMANSA', 'Salam hangat, kami dari tim humas perguruan tinggi ingin mengajukan permohonan kunjungan sosialisasi jalur masuk perguruan tinggi bagi siswa kelas XII SMAN 1 Makassar.', 'Belum Dibaca', '2026-11-02 14:00:00');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `ppdb_pendaftar`
-- (Lihat di bawah untuk tampilan aktual)
--
DROP TABLE IF EXISTS `ppdb_pendaftar`;
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

DROP TABLE IF EXISTS `ppdb_pengaturan`;
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
(1, '2026/2027', 'Jalur Domisili, Afirmasi, Prestasi & Mutasi', 'Buka', '2026-06-15', '2026-06-30', '2026-07-03', '2026-07-06', 432, 216, 130, 65, 21, 'Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Makassar Tahun Ajaran 2026/2027 telah dibuka secara resmi. Silakan buat akun calon siswa, pilih jalur pendaftaran yang sesuai, serta lengkapi data dan unggah berkas kelengkapan administrasi sebelum batas akhir pendaftaran.', '(0411) 3624440 / 0812-4233-4455', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profil_sekolah`
--

DROP TABLE IF EXISTS `profil_sekolah`;
CREATE TABLE `profil_sekolah` (
  `id_profil` int(11) NOT NULL DEFAULT 1,
  `nama_sekolah` varchar(100) NOT NULL DEFAULT 'UPT SMAN 1 Makassar',
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
  `logo_sekolah` varchar(255) DEFAULT 'logo-sman1-makassar.png',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `jumlah_siswa` int(11) DEFAULT 886,
  `jumlah_rombel` int(11) DEFAULT 24,
  `label_lokasi` varchar(100) DEFAULT 'Lokasi Sekolah',
  `keterangan_lokasi` varchar(100) DEFAULT 'Gedung Utama',
  `wilayah_lokasi` varchar(150) DEFAULT 'Kec. Bontoala, Kota Makassar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `profil_sekolah`
--

INSERT INTO `profil_sekolah` (`id_profil`, `nama_sekolah`, `npsn`, `akreditasi`, `nama_kepsek`, `nip_kepsek`, `foto_kepsek`, `sambutan_kepsek`, `sejarah`, `visi`, `misi`, `alamat`, `telepon`, `email_sekolah`, `maps_embed`, `logo_sekolah`, `updated_at`, `jumlah_siswa`, `jumlah_rombel`, `label_lokasi`, `keterangan_lokasi`, `wilayah_lokasi`) VALUES
(1, 'UPT SMAN 1 Makassar', '40312010', 'A', 'Drs. H. Sulihin Mustafa, M.Pd.', '196508121991031005', 'foto_kepsek-1793593136290-628189447.jpg', 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi Kita Semua, Om Swastyastu, Namo Buddhaya, Salam Kebajikan.\r\n\r\nPuji dan syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas segala limpahan rahmat, taufik, dan karunia-Nya. Selamat datang di portal situs web resmi SMA Negeri 1 Makassar (SMANSA Makassar).\r\n\r\nSebagai salah satu institusi pendidikan menengah atas tertua dan sarat prestasi di Provinsi Sulawesi Selatan yang telah berdiri kokoh sejak tahun 1950, SMA Negeri 1 Makassar terus berkomitmen menghadirkan layanan pendidikan prima dan adaptif di era transformasi digital. Dengan mengimplementasikan Kurikulum Merdeka secara holistik, kami berikhtiar memadukan keunggulan akademik, penguatan karakter Profil Pelajar Pancasila, penguasaan sains dan teknologi mutakhir, serta keteguhan iman dan takwa.\r\n\r\nSitus web ini hadir sebagai media transparansi informasi publik, akuntabilitas kelembagaan, serta sarana komunikasi interaktif yang menghubungkan sekolah dengan peserta didik, dewan guru, tenaga kependidikan, orang tua/wali murid, ikatan alumni (IKA SMANSA), serta masyarakat luas. Mari bersama-sama kita perkokoh semangat kolaborasi untuk mengantarkan generasi muda SMANSA menjadi insan unggul, berdaya saing global, dan siap menjadi pemimpin masa depan bangsa.\r\n\r\nWassalamu’alaikum Warahmatullahi Wabarakatuh.', 'SMA Negeri 1 Makassar (populer dengan akronim SMANSA Makassar) memiliki rekam jejak historis yang amat panjang dan membanggakan dalam kancah pendidikan di kawasan Indonesia Timur. Cikal bakal lembaga pendidikan ini berakar dari Algemeene Middelbare School (AMS) pada masa pra-kemerdekaan Republik Indonesia.\r\n\r\nPada tahun 1950, sekolah ini secara resmi bertransformasi menjadi SMA ABC Makassar di bawah pimpinan kepala sekolah pertama, Bapak Yatmo (1950–1952). Seiring dinamika perkembangan sistem pendidikan nasional, nama sekolah disesuaikan menjadi SMA Negeri 1 Makassar dan menempati kampus yang representatif di Jalan Gunung Bawakaraeng No. 53, Kota Makassar.\r\n\r\nDalam perjalanannya, SMAN 1 Makassar dipercaya menyandang status sebagai Rintisan Sekolah Bertaraf Internasional (RSBI) pada tahun 2010. Hingga saat ini, dengan akreditasi A, status sekolah rujukan nasional, serta implementasi Kurikulum Merdeka, ribuan alumni SMANSA telah berkiprah gemilang di berbagai ranah nasional dan internasional—mulai dari tokoh negarawan, akademisi terkemuka, dokter, profesional korporasi, hingga pelaku industri kreatif dunia.', 'Mencetak Generasi Unggul dalam Prestasi, Imtaq dan Imtek.', '1. Meningkatkan kualitas kinerja pendidik dan tenaga kependidikan sebagai upaya pemenuhan pelayanan optimal kepada peserta didik.\r\n2. Meningkatkan pembinaan terhadap bakat dan minat peserta didik melalui kegiatan olahraga, seni, keterampilan ramah lingkungan, serta pendidikan kewirausahaan.\r\n3. Pemberdayaan perilaku warga sekolah yang berorientasi pada nilai-nilai keimanan, ketakwaan, serta penguasaan teknologi informasi.\r\n4. Menyelenggarakan proses pembelajaran yang inovatif, kritis, kreatif, dan kolaboratif berbasis Kurikulum Merdeka serta berwawasan global.\r\n5. Mewujudkan ekosistem sekolah yang bersih, sehat, asri, berbudaya mutu, dan berwawasan Adiwiyata.', 'Jl. Gunung Bawakaraeng No. 53, Kel. Gaddong, Kec. Bontoala, Kota Makassar, Sulawesi Selatan 90157', '(0411) 3624440', 'info@sman1mks.sch.id', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7842323530364!2d119.4187315!3d-5.1383827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02a5499bc59d%3A0xc6e4df94ff640c6c!2sSMA%20Negeri%201%20Makassar!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid', 'logo-sman1-makassar.png', '2026-11-05 12:00:00', 1284, 36, 'Lokasi Kampus SMANSA', 'Gedung Utama SMAN 1 Makassar', 'Kec. Bontoala, Kota Makassar');

-- --------------------------------------------------------

--
-- Struktur dari tabel `statistik_pengunjung`
--

DROP TABLE IF EXISTS `statistik_pengunjung`;
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
(1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', '/', '2026-11-01', '2026-11-01 23:45:10', 45),
(2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', '/ppdb', '2026-11-02', '2026-11-02 22:15:00', 32),
(3, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', '/', '2026-11-03', '2026-11-03 21:50:30', 58),
(4, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', '/berita', '2026-11-04', '2026-11-04 20:30:15', 40),
(5, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36', '/', '2026-11-05', '2026-11-05 13:45:00', 67);

-- --------------------------------------------------------

--
-- Struktur dari tabel `struktur_organisasi_anggota`
--

DROP TABLE IF EXISTS `struktur_organisasi_anggota`;
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
(1, 'Drs. H. Sulihin Mustafa, M.Pd.', '196508121991031005', 'Kepala UPT SMAN 1 Makassar', 'Pimpinan', 1, NULL, '2026-11-03 07:37:12'),
(2, 'Prof. Dr. Ir. H. Nasaruddin Salam, M.T.', NULL, 'Ketua Komite Sekolah', 'Komite', 2, NULL, '2026-11-03 07:37:12'),
(3, 'Rahmawati, S.E.', '197601032006042009', 'Kepala Tata Usaha', 'Administrasi', 3, NULL, '2026-11-03 07:37:12'),
(4, 'Drs. Muhammad Arif, M.Pd.', '196803151994031004', 'Wakil Kepala Sekolah Bidang Kurikulum', 'Wakil Kepala Sekolah', 4, NULL, '2026-11-03 07:37:12'),
(5, 'Dra. Hj. Nurhaedah, M.M.', '196911201995122001', 'Wakil Kepala Sekolah Bidang Kesiswaan', 'Wakil Kepala Sekolah', 5, NULL, '2026-11-03 07:37:12'),
(6, 'Ir. H. Syamsuddin, S.Pd., M.T.', '197008251997021002', 'Wakil Kepala Sekolah Bidang Sarana & Prasarana', 'Wakil Kepala Sekolah', 6, NULL, '2026-11-03 07:37:12'),
(7, 'Andi Fasdilah Saparang, S.Pd., M.Pd.', '197405101998022003', 'Wakil Kepala Sekolah Bidang Humas & Kemitraan', 'Wakil Kepala Sekolah', 7, NULL, '2026-11-03 07:37:12'),
(8, 'Hendra Wijaya, S.Pd., M.Pd.', '197811042006041008', 'Koordinator Bimbingan dan Konseling (BK)', 'Koordinator', 8, NULL, '2026-11-03 07:37:12'),
(9, 'Hj. Rosdiana, S.Pd., M.Pd.', '197204181997032002', 'Kepala Laboratorium IPA Terpadu', 'Koordinator', 9, NULL, '2026-11-03 07:37:12'),
(10, 'Ahmad Fauzi, S.Kom., M.Cs.', '198509182010011012', 'Kepala Laboratorium Komputer & Sistem Informasi', 'Koordinator', 10, NULL, '2026-11-03 07:37:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `struktur_organisasi_info`
--

DROP TABLE IF EXISTS `struktur_organisasi_info`;
CREATE TABLE `struktur_organisasi_info` (
  `id` int(11) NOT NULL DEFAULT 1,
  `judul` varchar(255) NOT NULL DEFAULT 'Struktur Organisasi UPT SMAN 1 Makassar',
  `periode` varchar(100) NOT NULL DEFAULT 'Tahun Ajaran 2025/2026',
  `foto_bagan` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `struktur_organisasi_info`
--

INSERT INTO `struktur_organisasi_info` (`id`, `judul`, `periode`, `foto_bagan`, `keterangan`, `updated_at`) VALUES
(1, 'Struktur Organisasi UPT SMAN 1 Makassar', 'Tahun Ajaran 2025/2026', NULL, 'Bagan hierarki kepemimpinan, koordinasi manajerial, pembagian wewenang instruksional, serta tata administrasi layanan pendidikan di lingkungan SMA Negeri 1 Makassar.', '2026-11-05 12:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

DROP TABLE IF EXISTS `users`;
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
(1, 'Administrator SMAN 1 Makassar', 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@sman1mks.sch.id', 'admin', 'default-user.png', '2026-10-26 01:52:49', '2026-11-05 12:00:00'),
(2, 'Operator Dapodik SMANSA', 'operator', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'operator@sman1mks.sch.id', 'operator', 'default-user.png', '2026-10-26 01:52:49', '2026-11-05 12:00:00');

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
  MODIFY `id_berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `ekstrakurikuler`
--
ALTER TABLE `ekstrakurikuler`
  MODIFY `id_eskul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `galeri`
--
ALTER TABLE `galeri`
  MODIFY `id_galeri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `guru_staf`
--
ALTER TABLE `guru_staf`
  MODIFY `id_guru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `komite_sekolah`
--
ALTER TABLE `komite_sekolah`
  MODIFY `id_komite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `osis_akun`
--
ALTER TABLE `osis_akun`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `osis_galeri`
--
ALTER TABLE `osis_galeri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `osis_mading`
--
ALTER TABLE `osis_mading`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `osis_pengurus`
--
ALTER TABLE `osis_pengurus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
  MODIFY `id_pendaftar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `pengumuman`
--
ALTER TABLE `pengumuman`
  MODIFY `id_pengumuman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `pesan_kontak`
--
ALTER TABLE `pesan_kontak`
  MODIFY `id_pesan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `statistik_pengunjung`
--
ALTER TABLE `statistik_pengunjung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `struktur_organisasi_anggota`
--
ALTER TABLE `struktur_organisasi_anggota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

SET FOREIGN_KEY_CHECKS = 1;
