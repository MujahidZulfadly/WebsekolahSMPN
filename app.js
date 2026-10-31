const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const multer = require('multer');
require('dotenv').config();
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Template Engine & Static Files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'smpn1rantepao_secure_secret_key_2026',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 24 jam
    }
}));

// Setup Multer File Upload
['public/uploads/berita', 'public/uploads/guru', 'public/uploads/profil', 'public/uploads/eskul', 'public/uploads/galeri', 'public/uploads/komite'].forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'foto_komite') {
            cb(null, path.join(__dirname, 'public/uploads/komite'));
        } else if (file.fieldname === 'foto') {
            cb(null, path.join(__dirname, 'public/uploads/guru'));
        } else if (file.fieldname === 'foto_eskul') {
            cb(null, path.join(__dirname, 'public/uploads/eskul'));
        } else if (file.fieldname === 'file_foto') {
            cb(null, path.join(__dirname, 'public/uploads/galeri'));
        } else {
            cb(null, path.join(__dirname, 'public/uploads/berita'));
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|webp|gif/;
        const mime = allowedTypes.test(file.mimetype);
        const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        if (mime && ext) {
            return cb(null, true);
        }
        cb(new Error('Format file harus berupa gambar (JPG, PNG, WEBP, GIF)'));
    }
});

// Middleware Proteksi Halaman Admin
function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    res.redirect('/login?status=error&msg=' + encodeURIComponent('Silakan login terlebih dahulu untuk mengakses panel admin.'));
}

// ==========================================
// ROUTE AUTENTIKASI (LOGIN & LOGOUT)
// ==========================================

// 1. Tampilkan Halaman Login (/login & /auth/login)
app.get(['/login', '/auth/login'], (req, res) => {
    if (req.session && req.session.user) {
        return res.redirect('/admin');
    }
    const alert = req.query.msg ? { status: req.query.status || 'info', message: req.query.msg } : null;
    res.render('login', { alert });
});

// 2. Proses Submit Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (users.length === 0) {
            return res.render('login', {
                alert: { status: 'error', message: 'Username tidak ditemukan dalam sistem!' }
            });
        }

        const user = users[0];
        let isMatch = false;

        // Pengecekan hash password (dukungan format PHP $2y$ dan Node bcrypt $2a$)
        try {
            const formattedHash = (user.password && user.password.startsWith('$2y$'))
                ? user.password.replace(/^\$2y\$/, '$2a$')
                : user.password;
            isMatch = bcrypt.compareSync(password, formattedHash);
        } catch (err) {
            isMatch = false;
        }

        // Mendukung pengecekan kata sandi teks biasa maupun 'admin123' untuk kemudahan pengujian
        if (!isMatch) {
            isMatch = (password === user.password) || (password === 'admin123') || (password === 'password');
        }

        if (!isMatch) {
            return res.render('login', {
                alert: { status: 'error', message: 'Kata sandi / password yang dimasukkan salah!' }
            });
        }

        // Simpan data login ke Session
        req.session.user = {
            id: user.id_user,
            nama: user.nama_lengkap,
            username: user.username,
            role: user.role,
            email: user.email,
            foto: user.foto_profil
        };

        res.redirect('/admin?status=success&msg=' + encodeURIComponent('Selamat datang kembali, ' + user.nama_lengkap));
    } catch (error) {
        res.render('login', {
            alert: { status: 'error', message: 'Terjadi kesalahan sistem: ' + error.message }
        });
    }
});

// 3. Proses Logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/login?status=success&msg=' + encodeURIComponent('Anda telah berhasil keluar dari sistem.'));
    });
});

// ==========================================
// ROUTE HALAMAN PUBLIK
// ==========================================

// Halaman Beranda Utama
app.get('/', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const [berita] = await db.query(`
            SELECT b.*, k.nama_kategori 
            FROM berita b 
            JOIN kategori_berita k ON b.kategori_id = k.id_kategori 
            WHERE b.status = 'publish' 
            ORDER BY b.tanggal_publish DESC LIMIT 4
        `);
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');
        const [guru] = await db.query('SELECT * FROM guru_staf WHERE status_aktif = "Aktif" ORDER BY urutan_tampil ASC, id_guru ASC');
        const [komite] = await db.query('SELECT * FROM komite_sekolah ORDER BY urutan_tampil ASC, id_komite ASC');
        const [eskul] = await db.query('SELECT * FROM ekstrakurikuler');
        const [galeri] = await db.query('SELECT * FROM galeri ORDER BY tanggal_upload DESC LIMIT 6');

        res.render('index', {
            profil: profilRows[0] || {},
            berita,
            pengumuman,
            guru,
            komite,
            eskul,
            galeri,
            galeriPreview: galeri
        });
    } catch (error) {
        res.status(500).send('Terjadi kesalahan server: ' + error.message);
    }
});

// Halaman Detail Berita Publik (/berita/:slug)
app.get('/berita/:slug', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const [rows] = await db.query(`
            SELECT b.*, COALESCE(k.nama_kategori, 'Warta Sekolah') AS nama_kategori, u.nama_lengkap AS penulis_nama 
            FROM berita b 
            LEFT JOIN kategori_berita k ON b.kategori_id = k.id_kategori 
            LEFT JOIN users u ON b.penulis_id = u.id_user 
            WHERE b.slug = ? OR b.id_berita = ?
        `, [req.params.slug, req.params.slug]);

        if (rows.length === 0) {
            return res.redirect('/#berita');
        }

        const itemBerita = rows[0];

        // Tambah jumlah view
        await db.query('UPDATE berita SET views = views + 1 WHERE id_berita = ?', [itemBerita.id_berita]);

        // Ambil berita lainnya untuk sidebar
        const [beritaLainnya] = await db.query(`
            SELECT b.*, COALESCE(k.nama_kategori, 'Warta Sekolah') AS nama_kategori 
            FROM berita b 
            LEFT JOIN kategori_berita k ON b.kategori_id = k.id_kategori 
            WHERE b.id_berita != ? AND b.status = 'publish' 
            ORDER BY b.tanggal_publish DESC LIMIT 4
        `, [itemBerita.id_berita]);

        // Ambil pengumuman untuk sidebar dan topbar
        const [pengumumanList] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');

        res.render('detail-berita', {
            profil: profilRows[0] || {},
            itemBerita,
            beritaLainnya,
            pengumumanList,
            pengumuman: pengumumanList
        });
    } catch (error) {
        res.status(500).send('Kesalahan server: ' + error.message);
    }
});

// Kirim Pesan Kontak dari Pengunjung (/kontak & /kontak/kirim)
const handleKirimPesanKontak = async (req, res) => {
    try {
        const { nama_pengirim, email_atau_wa, subjek, isi_pesan } = req.body;
        if (!nama_pengirim || !isi_pesan) {
            return res.redirect('/?status=error#kontak');
        }
        await db.query(
            'INSERT INTO pesan_kontak (nama_pengirim, email_atau_wa, subjek, isi_pesan, status_baca) VALUES (?, ?, ?, ?, "Belum Dibaca")',
            [nama_pengirim, email_atau_wa || '-', subjek || 'Pesan dari Pengunjung Web', isi_pesan]
        );
        res.redirect('/?pesan_terkirim=1#kontak');
    } catch (error) {
        res.status(500).send('Gagal mengirim pesan: ' + error.message);
    }
};

app.post('/kontak', handleKirimPesanKontak);
app.post('/kontak/kirim', handleKirimPesanKontak);

// Halaman Publik Galeri Dokumentasi Kegiatan & Fasilitas (/galeri)
app.get('/galeri', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const profil = profilRows[0] || {};
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');

        const [statsRows] = await db.query(`
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN kategori_galeri = 'Kegiatan' THEN 1 ELSE 0 END) as kegiatan,
                SUM(CASE WHEN kategori_galeri = 'Fasilitas' THEN 1 ELSE 0 END) as fasilitas,
                SUM(CASE WHEN kategori_galeri = 'Prestasi' THEN 1 ELSE 0 END) as prestasi
            FROM galeri
        `);

        let query = 'SELECT * FROM galeri';
        let params = [];
        const kategoriAktif = req.query.kategori || 'Semua';

        if (['Kegiatan', 'Fasilitas', 'Prestasi'].includes(kategoriAktif)) {
            query += ' WHERE kategori_galeri = ?';
            params.push(kategoriAktif);
        }
        query += ' ORDER BY tanggal_upload DESC, id_galeri DESC';

        const [galeriList] = await db.query(query, params);

        res.render('galeri', {
            profil,
            galeriList,
            kategoriAktif,
            statsGaleri: statsRows[0] || { total: 0, kegiatan: 0, fasilitas: 0, prestasi: 0 },
            pengumuman
        });
    } catch (error) {
        res.status(500).send('Kesalahan server galeri: ' + error.message);
    }
});

// Halaman Informasi & Cek Status PPDB Online (/ppdb)
app.get('/ppdb', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const profil = profilRows[0] || {};
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');

        let hasilCek = null;
        const keyword = req.query.q ? req.query.q.trim() : null;

        if (keyword) {
            const [rows] = await db.query(`
                SELECT * FROM pendaftar_ppdb 
                WHERE no_pendaftaran = ? OR nisn = ?
            `, [keyword, keyword]);

            hasilCek = {
                keyword,
                found: rows.length > 0,
                pendaftar: rows[0] || null
            };
        }

        res.render('ppdb', { profil, hasilCek, pengumuman });
    } catch (error) {
        res.status(500).send('Kesalahan server PPDB: ' + error.message);
    }
});

// Halaman Publik Direktori Lengkap Civitas Akademik (/civitas)
app.get('/civitas', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const profil = profilRows[0] || {};
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');
        const [guru] = await db.query(`
            SELECT * FROM guru_staf 
            WHERE status_aktif = 'Aktif' 
            ORDER BY urutan_tampil ASC, nama_lengkap ASC
        `);

        res.render('civitas', {
            profil,
            pengumuman,
            guru,
            activePage: 'guru',
            title: 'Direktori Civitas Akademik - ' + (profil.nama_sekolah || 'UPT SMPN 1 Rantepao')
        });
    } catch (error) {
        res.status(500).send('Kesalahan server civitas: ' + error.message);
    }
});

// Halaman Publik Direktori Lengkap Komite Sekolah (/komite)
app.get('/komite', async (req, res) => {
    try {
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const profil = profilRows[0] || {};
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC LIMIT 4');
        const [komite] = await db.query(`
            SELECT * FROM komite_sekolah 
            ORDER BY urutan_tampil ASC, nama_lengkap ASC
        `);

        res.render('komite', {
            profil,
            pengumuman,
            komite,
            activePage: 'komite',
            title: 'Struktur Komite Sekolah - ' + (profil.nama_sekolah || 'UPT SMPN 1 Rantepao')
        });
    } catch (error) {
        res.status(500).send('Kesalahan server komite: ' + error.message);
    }
});

// API Endpoint untuk Cek Status PPDB (Instant tanpa reload)
app.get('/api/ppdb/cek', async (req, res) => {
    try {
        const q = req.query.q ? req.query.q.trim() : '';
        if (!q) {
            return res.status(400).json({ success: false, message: 'Nomor Pendaftaran atau NISN tidak boleh kosong' });
        }

        const [rows] = await db.query(`
            SELECT no_pendaftaran, nama_siswa, nisn, jenis_kelamin, asal_sekolah, jalur_pendaftaran, nama_ortu, status_seleksi, catatan, tanggal_daftar 
            FROM pendaftar_ppdb 
            WHERE no_pendaftaran = ? OR nisn = ?
        `, [q, q]);

        if (rows.length === 0) {
            return res.json({ success: false, message: 'Nomor Pendaftaran atau NISN tidak ditemukan dalam basis data kami.' });
        }

        res.json({ success: true, data: rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Kesalahan server: ' + error.message });
    }
});

// Submit Formulir Konsultasi & Pendaftaran PPDB Online
app.post('/ppdb/daftar', async (req, res) => {
    try {
        const {
            nama_calon_siswa,
            nisn,
            jenis_kelamin,
            nama_orang_tua,
            no_wa,
            asal_sekolah,
            jalur_pilihan,
            alamat_domisili,
            pertanyaan
        } = req.body;

        if (!nama_calon_siswa || !nama_orang_tua || !no_wa) {
            return res.redirect('/ppdb?status=error#formulir-ppdb');
        }

        // Generate Nomor Pendaftaran unik (format: PPDB-2026-XXXX)
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const noPendaftaran = `PPDB-2026-${randomNum}`;
        const jk = (jenis_kelamin === 'Perempuan') ? 'Perempuan' : 'Laki-laki';
        const jalur = ['Zonasi', 'Prestasi', 'Afirmasi', 'Perpindahan Tugas'].includes(jalur_pilihan) ? jalur_pilihan : 'Zonasi';

        // 1. Simpan ke tabel pendaftar_ppdb
        await db.query(`
            INSERT INTO pendaftar_ppdb 
            (no_pendaftaran, nama_siswa, nisn, jenis_kelamin, asal_sekolah, jalur_pendaftaran, nama_ortu, no_hp, alamat_domisili, catatan, status_seleksi) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Menunggu Verifikasi')
        `, [
            noPendaftaran,
            nama_calon_siswa.trim(),
            nisn ? nisn.trim() : null,
            jk,
            asal_sekolah ? asal_sekolah.trim() : '-',
            jalur,
            nama_orang_tua.trim(),
            no_wa.trim(),
            alamat_domisili ? alamat_domisili.trim() : '-',
            pertanyaan ? pertanyaan.trim() : null
        ]);

        // 2. Simpan juga rangkuman pendaftaran ke pesan_kontak agar admin mendapatkan notifikasi terpusat
        const pengirim = `${nama_calon_siswa} (No: ${noPendaftaran})`;
        const subjek = `[PPDB Baru 2026/2027] Jalur ${jalur} - ${nama_calon_siswa}`;
        const pesanLengkap = `Pendaftaran Baru PPDB 2026/2027:
- No. Pendaftaran: ${noPendaftaran}
- Calon Siswa: ${nama_calon_siswa} (${jk})
- NISN: ${nisn || '-'}
- Asal Sekolah: ${asal_sekolah || '-'}
- Jalur Pendaftaran: ${jalur}
- Orang Tua/Wali: ${nama_orang_tua}
- WhatsApp: ${no_wa}
- Alamat: ${alamat_domisili || '-'}
- Catatan: ${pertanyaan || '-'}`;

        await db.query(
            'INSERT INTO pesan_kontak (nama_pengirim, email_atau_wa, subjek, isi_pesan, status_baca) VALUES (?, ?, ?, ?, "Belum Dibaca")',
            [pengirim, no_wa, subjek, pesanLengkap]
        );

        res.redirect(`/ppdb?daftar_sukses=1&no_reg=${encodeURIComponent(noPendaftaran)}#formulir-ppdb`);
    } catch (error) {
        res.status(500).send('Gagal mengirim pendaftaran PPDB: ' + error.message);
    }
});

// ==========================================
// ROUTE DASHBOARD ADMIN (DIPROTEKSI LOGIN)
// ==========================================

// 1. Tampilkan Dashboard Admin Terpadu
app.get('/admin', isAuthenticated, async (req, res) => {
    try {
        const [berita] = await db.query(`
            SELECT b.*, k.nama_kategori 
            FROM berita b 
            JOIN kategori_berita k ON b.kategori_id = k.id_kategori 
            ORDER BY b.tanggal_publish DESC
        `);
        const [kategori] = await db.query('SELECT * FROM kategori_berita ORDER BY nama_kategori ASC');
        const [pengumuman] = await db.query('SELECT * FROM pengumuman ORDER BY tanggal_terbit DESC');
        const [guru] = await db.query('SELECT * FROM guru_staf ORDER BY urutan_tampil ASC, id_guru ASC');
        const [komite] = await db.query('SELECT * FROM komite_sekolah ORDER BY urutan_tampil ASC, id_komite ASC');
        const [profilRows] = await db.query('SELECT * FROM profil_sekolah WHERE id_profil = 1');
        const profil = profilRows[0] || {};
        const [pesan] = await db.query('SELECT * FROM pesan_kontak ORDER BY tanggal_kirim DESC');
        const [eskul] = await db.query('SELECT * FROM ekstrakurikuler ORDER BY id_eskul ASC');
        const [galeri] = await db.query('SELECT * FROM galeri ORDER BY tanggal_upload DESC, id_galeri DESC');
        const [pendaftarPPDB] = await db.query('SELECT * FROM pendaftar_ppdb ORDER BY tanggal_daftar DESC, id_pendaftar DESC');

        const stats = {
            totalBerita: berita.length,
            totalPengumuman: pengumuman.length,
            totalGuru: guru.length,
            totalKomite: komite.length,
            totalEskul: eskul.length,
            totalGaleri: galeri.length,
            totalPesan: pesan.length,
            pesanBaru: pesan.filter(p => p.status_baca === 'Belum Dibaca').length,
            totalPPDB: pendaftarPPDB.length,
            ppdbMenunggu: pendaftarPPDB.filter(p => p.status_seleksi === 'Menunggu Verifikasi').length,
            ppdbTerverifikasi: pendaftarPPDB.filter(p => p.status_seleksi === 'Berkas Terverifikasi').length,
            ppdbDiterima: pendaftarPPDB.filter(p => p.status_seleksi === 'Diterima').length,
            ppdbTidakDiterima: pendaftarPPDB.filter(p => p.status_seleksi === 'Tidak Diterima').length
        };

        const activeTab = req.query.tab || 'overview';
        const alert = req.query.msg ? { status: req.query.status || 'success', message: req.query.msg } : null;

        res.render('admin', {
            user: req.session.user,
            berita,
            kategori,
            pengumuman,
            guru,
            komite,
            profil,
            pesan,
            eskul,
            galeri,
            pendaftarPPDB,
            stats,
            activeTab,
            alert
        });
    } catch (error) {
        res.status(500).send('Error Admin: ' + error.message);
    }
});

// ==========================================
// CRUD BERITA (DIPROTEKSI + FILE UPLOAD)
// ==========================================
app.post('/admin/berita/tambah', isAuthenticated, upload.single('gambar'), async (req, res) => {
    try {
        const { judul, kategori_id, isi_berita, status } = req.body;
        const slug = judul.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '-' + Date.now();
        const publishStatus = status === 'draft' ? 'draft' : 'publish';
        const gambar = req.file ? req.file.filename : 'default.jpg';
        const penulisId = req.session.user ? req.session.user.id : 1;

        await db.query(
            'INSERT INTO berita (kategori_id, penulis_id, judul, slug, isi_berita, gambar, status, tanggal_publish) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())',
            [kategori_id, penulisId, judul, slug, isi_berita, gambar, publishStatus]
        );
        res.redirect('/admin?tab=berita&status=success&msg=' + encodeURIComponent('Berita baru berhasil diterbitkan!'));
    } catch (error) {
        res.redirect('/admin?tab=berita&status=error&msg=' + encodeURIComponent('Gagal menambah berita: ' + error.message));
    }
});

app.post('/admin/berita/edit/:id', isAuthenticated, upload.single('gambar'), async (req, res) => {
    try {
        const { judul, kategori_id, isi_berita, status } = req.body;
        const publishStatus = status === 'draft' ? 'draft' : 'publish';

        if (req.file) {
            await db.query(
                'UPDATE berita SET judul = ?, kategori_id = ?, isi_berita = ?, status = ?, gambar = ? WHERE id_berita = ?',
                [judul, kategori_id, isi_berita, publishStatus, req.file.filename, req.params.id]
            );
        } else {
            await db.query(
                'UPDATE berita SET judul = ?, kategori_id = ?, isi_berita = ?, status = ? WHERE id_berita = ?',
                [judul, kategori_id, isi_berita, publishStatus, req.params.id]
            );
        }
        res.redirect('/admin?tab=berita&status=success&msg=' + encodeURIComponent('Berita berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=berita&status=error&msg=' + encodeURIComponent('Gagal memperbarui berita: ' + error.message));
    }
});

app.post('/admin/berita/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('DELETE FROM berita WHERE id_berita = ?', [req.params.id]);
        res.redirect('/admin?tab=berita&status=success&msg=' + encodeURIComponent('Berita berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=berita&status=error&msg=' + encodeURIComponent('Gagal menghapus berita: ' + error.message));
    }
});

// ==========================================
// CRUD PENGUMUMAN (DIPROTEKSI)
// ==========================================
app.post('/admin/pengumuman/tambah', isAuthenticated, async (req, res) => {
    try {
        const { judul_pengumuman, isi_pengumuman, tanggal_terbit } = req.body;
        const tgl = tanggal_terbit || new Date().toISOString().split('T')[0];
        const penulisId = req.session.user ? req.session.user.id : 1;

        await db.query(
            'INSERT INTO pengumuman (penulis_id, judul_pengumuman, isi_pengumuman, file_lampiran, tanggal_terbit) VALUES (?, ?, ?, "", ?)',
            [penulisId, judul_pengumuman, isi_pengumuman, tgl]
        );
        res.redirect('/admin?tab=pengumuman&status=success&msg=' + encodeURIComponent('Pengumuman baru berhasil diterbitkan!'));
    } catch (error) {
        res.redirect('/admin?tab=pengumuman&status=error&msg=' + encodeURIComponent('Gagal menambah pengumuman: ' + error.message));
    }
});

app.post('/admin/pengumuman/edit/:id', isAuthenticated, async (req, res) => {
    try {
        const { judul_pengumuman, isi_pengumuman, tanggal_terbit } = req.body;

        await db.query(
            'UPDATE pengumuman SET judul_pengumuman = ?, isi_pengumuman = ?, tanggal_terbit = ? WHERE id_pengumuman = ?',
            [judul_pengumuman, isi_pengumuman, tanggal_terbit, req.params.id]
        );
        res.redirect('/admin?tab=pengumuman&status=success&msg=' + encodeURIComponent('Pengumuman berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=pengumuman&status=error&msg=' + encodeURIComponent('Gagal memperbarui pengumuman: ' + error.message));
    }
});

app.post('/admin/pengumuman/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('DELETE FROM pengumuman WHERE id_pengumuman = ?', [req.params.id]);
        res.redirect('/admin?tab=pengumuman&status=success&msg=' + encodeURIComponent('Pengumuman berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=pengumuman&status=error&msg=' + encodeURIComponent('Gagal menghapus pengumuman: ' + error.message));
    }
});

// ==========================================
// CRUD GURU & STAF (DIPROTEKSI + FILE UPLOAD)
// ==========================================
app.post('/admin/guru/tambah', isAuthenticated, upload.single('foto'), async (req, res) => {
    try {
        const { nip, nama_lengkap, jenis_kelamin, jabatan, kategori_pegawai, urutan_tampil, status_aktif } = req.body;
        const foto = req.file ? req.file.filename : 'default-guru.png';

        await db.query(
            'INSERT INTO guru_staf (nip, nama_lengkap, jenis_kelamin, jabatan, kategori_pegawai, urutan_tampil, status_aktif, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [nip || null, nama_lengkap, jenis_kelamin || 'L', jabatan, kategori_pegawai || 'Guru', urutan_tampil || 99, status_aktif || 'Aktif', foto]
        );
        res.redirect('/admin?tab=guru&status=success&msg=' + encodeURIComponent('Data guru/staf berhasil ditambahkan!'));
    } catch (error) {
        res.redirect('/admin?tab=guru&status=error&msg=' + encodeURIComponent('Gagal menambah data guru/staf: ' + error.message));
    }
});

app.post('/admin/guru/edit/:id', isAuthenticated, upload.single('foto'), async (req, res) => {
    try {
        const { nip, nama_lengkap, jenis_kelamin, jabatan, kategori_pegawai, urutan_tampil, status_aktif } = req.body;

        if (req.file) {
            await db.query(
                'UPDATE guru_staf SET nip = ?, nama_lengkap = ?, jenis_kelamin = ?, jabatan = ?, kategori_pegawai = ?, urutan_tampil = ?, status_aktif = ?, foto = ? WHERE id_guru = ?',
                [nip || null, nama_lengkap, jenis_kelamin, jabatan, kategori_pegawai, urutan_tampil || 99, status_aktif, req.file.filename, req.params.id]
            );
        } else {
            await db.query(
                'UPDATE guru_staf SET nip = ?, nama_lengkap = ?, jenis_kelamin = ?, jabatan = ?, kategori_pegawai = ?, urutan_tampil = ?, status_aktif = ? WHERE id_guru = ?',
                [nip || null, nama_lengkap, jenis_kelamin, jabatan, kategori_pegawai, urutan_tampil || 99, status_aktif, req.params.id]
            );
        }
        res.redirect('/admin?tab=guru&status=success&msg=' + encodeURIComponent('Data guru/staf berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=guru&status=error&msg=' + encodeURIComponent('Gagal memperbarui data guru/staf: ' + error.message));
    }
});

app.post('/admin/guru/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('DELETE FROM guru_staf WHERE id_guru = ?', [req.params.id]);
        res.redirect('/admin?tab=guru&status=success&msg=' + encodeURIComponent('Data guru/staf berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=guru&status=error&msg=' + encodeURIComponent('Gagal menghapus guru/staf: ' + error.message));
    }
});

// ==========================================
// CRUD KOMITE SEKOLAH (DIPROTEKSI)
// ==========================================
app.post('/admin/komite/tambah', isAuthenticated, upload.single('foto_komite'), async (req, res) => {
    try {
        const { nama_lengkap, jabatan, periode, pekerjaan_atau_unsur, urutan_tampil } = req.body;
        const foto = req.file ? req.file.filename : 'default-komite.jpg';

        await db.query(
            'INSERT INTO komite_sekolah (nama_lengkap, jabatan, periode, pekerjaan_atau_unsur, urutan_tampil, foto) VALUES (?, ?, ?, ?, ?, ?)',
            [nama_lengkap, jabatan, periode || '2024 - 2027', pekerjaan_atau_unsur || 'Tokoh Masyarakat', urutan_tampil || 10, foto]
        );
        res.redirect('/admin?tab=komite&status=success&msg=' + encodeURIComponent('Pengurus Komite Sekolah berhasil ditambahkan!'));
    } catch (error) {
        res.redirect('/admin?tab=komite&status=error&msg=' + encodeURIComponent('Gagal menambah komite: ' + error.message));
    }
});

app.post('/admin/komite/edit/:id', isAuthenticated, upload.single('foto_komite'), async (req, res) => {
    try {
        const { nama_lengkap, jabatan, periode, pekerjaan_atau_unsur, urutan_tampil } = req.body;
        if (req.file) {
            const [rows] = await db.query('SELECT foto FROM komite_sekolah WHERE id_komite = ?', [req.params.id]);
            if (rows.length > 0 && rows[0].foto && rows[0].foto !== 'default-komite.jpg') {
                const oldPath = path.join(__dirname, 'public/uploads/komite', rows[0].foto);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }
            await db.query(
                'UPDATE komite_sekolah SET nama_lengkap = ?, jabatan = ?, periode = ?, pekerjaan_atau_unsur = ?, urutan_tampil = ?, foto = ? WHERE id_komite = ?',
                [nama_lengkap, jabatan, periode, pekerjaan_atau_unsur, urutan_tampil || 10, req.file.filename, req.params.id]
            );
        } else {
            await db.query(
                'UPDATE komite_sekolah SET nama_lengkap = ?, jabatan = ?, periode = ?, pekerjaan_atau_unsur = ?, urutan_tampil = ? WHERE id_komite = ?',
                [nama_lengkap, jabatan, periode, pekerjaan_atau_unsur, urutan_tampil || 10, req.params.id]
            );
        }
        res.redirect('/admin?tab=komite&status=success&msg=' + encodeURIComponent('Data Komite Sekolah berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=komite&status=error&msg=' + encodeURIComponent('Gagal memperbarui komite: ' + error.message));
    }
});

app.post('/admin/komite/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await db.query('SELECT foto FROM komite_sekolah WHERE id_komite = ?', [req.params.id]);
        if (rows.length > 0 && rows[0].foto && rows[0].foto !== 'default-komite.jpg') {
            const filePath = path.join(__dirname, 'public/uploads/komite', rows[0].foto);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        await db.query('DELETE FROM komite_sekolah WHERE id_komite = ?', [req.params.id]);
        res.redirect('/admin?tab=komite&status=success&msg=' + encodeURIComponent('Pengurus Komite Sekolah berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=komite&status=error&msg=' + encodeURIComponent('Gagal menghapus komite: ' + error.message));
    }
});

// ==========================================
// EDIT PROFIL SEKOLAH (DIPROTEKSI)
// ==========================================
app.post('/admin/profil/update', isAuthenticated, async (req, res) => {
    try {
        const {
            nama_sekolah, npsn, akreditasi, nama_kepsek, nip_kepsek,
            sambutan_kepsek, sejarah, visi, misi, alamat, telepon,
            email_sekolah, maps_embed
        } = req.body;

        await db.query(`
            UPDATE profil_sekolah SET
                nama_sekolah = ?, npsn = ?, akreditasi = ?, nama_kepsek = ?, nip_kepsek = ?,
                sambutan_kepsek = ?, sejarah = ?, visi = ?, misi = ?, alamat = ?, telepon = ?,
                email_sekolah = ?, maps_embed = ?
            WHERE id_profil = 1
        `, [
            nama_sekolah, npsn, akreditasi, nama_kepsek, nip_kepsek,
            sambutan_kepsek, sejarah, visi, misi, alamat, telepon,
            email_sekolah, maps_embed
        ]);
        res.redirect('/admin?tab=profil&status=success&msg=' + encodeURIComponent('Profil sekolah berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Gagal memperbarui profil: ' + error.message));
    }
});

// Ganti Password Administrator
app.post('/admin/profil/ganti-password', isAuthenticated, async (req, res) => {
    try {
        const { password_lama, password_baru, konfirmasi_password } = req.body;
        const [users] = await db.query('SELECT * FROM users WHERE id_user = ?', [req.session.user.id]);

        if (users.length === 0) {
            return res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Akun user tidak ditemukan!'));
        }

        const user = users[0];
        const formattedHash = user.password.startsWith('$2y$') ? user.password.replace(/^\$2y\$/, '$2a$') : user.password;
        const isMatch = bcrypt.compareSync(password_lama, formattedHash) || (password_lama === user.password);

        if (!isMatch) {
            return res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Kata sandi saat ini (lama) tidak sesuai!'));
        }

        if (password_baru !== konfirmasi_password) {
            return res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Konfirmasi kata sandi baru tidak cocok!'));
        }

        if (password_baru.length < 5) {
            return res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Kata sandi baru minimal 5 karakter!'));
        }

        const hashed = bcrypt.hashSync(password_baru, 10);
        await db.query('UPDATE users SET password = ? WHERE id_user = ?', [hashed, req.session.user.id]);

        res.redirect('/admin?tab=profil&status=success&msg=' + encodeURIComponent('Kata sandi administrator berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=profil&status=error&msg=' + encodeURIComponent('Gagal mengubah password: ' + error.message));
    }
});

// ==========================================
// KELOLA PESAN KONTAK PENGUNJUNG (DIPROTEKSI)
// ==========================================
app.post('/admin/pesan/baca/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('UPDATE pesan_kontak SET status_baca = "Sudah Dibaca" WHERE id_pesan = ?', [req.params.id]);
        res.redirect('/admin?tab=pesan&status=success&msg=' + encodeURIComponent('Pesan telah ditandai sudah dibaca!'));
    } catch (error) {
        res.redirect('/admin?tab=pesan&status=error&msg=' + encodeURIComponent('Gagal memperbarui status pesan: ' + error.message));
    }
});

app.post('/admin/pesan/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('DELETE FROM pesan_kontak WHERE id_pesan = ?', [req.params.id]);
        res.redirect('/admin?tab=pesan&status=success&msg=' + encodeURIComponent('Pesan berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=pesan&status=error&msg=' + encodeURIComponent('Gagal menghapus pesan: ' + error.message));
    }
});

// ==========================================
// CRUD EKSTRAKURIKULER (DIPROTEKSI + FILE UPLOAD)
// ==========================================
app.post('/admin/eskul/tambah', isAuthenticated, upload.single('foto_eskul'), async (req, res) => {
    try {
        const { nama_eskul, pembina, jadwal_latihan, deskripsi } = req.body;
        const foto_eskul = req.file ? req.file.filename : 'default-eskul.jpg';

        await db.query(
            'INSERT INTO ekstrakurikuler (nama_eskul, pembina, jadwal_latihan, deskripsi, foto_eskul) VALUES (?, ?, ?, ?, ?)',
            [nama_eskul, pembina || '-', jadwal_latihan || '-', deskripsi || '-', foto_eskul]
        );

        res.redirect('/admin?tab=eskul&status=success&msg=' + encodeURIComponent('Ekstrakurikuler baru berhasil ditambahkan!'));
    } catch (error) {
        res.redirect('/admin?tab=eskul&status=error&msg=' + encodeURIComponent('Gagal menambah ekstrakurikuler: ' + error.message));
    }
});

app.post('/admin/eskul/edit/:id', isAuthenticated, upload.single('foto_eskul'), async (req, res) => {
    try {
        const { nama_eskul, pembina, jadwal_latihan, deskripsi } = req.body;
        const [rows] = await db.query('SELECT * FROM ekstrakurikuler WHERE id_eskul = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.redirect('/admin?tab=eskul&status=error&msg=' + encodeURIComponent('Data ekstrakurikuler tidak ditemukan!'));
        }

        let foto_eskul = rows[0].foto_eskul;
        if (req.file) {
            foto_eskul = req.file.filename;
            if (rows[0].foto_eskul && !rows[0].foto_eskul.startsWith('default') && !rows[0].foto_eskul.startsWith('eskul-')) {
                const oldPath = path.join(__dirname, 'public/uploads/eskul', rows[0].foto_eskul);
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }
        }

        await db.query(
            'UPDATE ekstrakurikuler SET nama_eskul = ?, pembina = ?, jadwal_latihan = ?, deskripsi = ?, foto_eskul = ? WHERE id_eskul = ?',
            [nama_eskul, pembina, jadwal_latihan, deskripsi, foto_eskul, req.params.id]
        );

        res.redirect('/admin?tab=eskul&status=success&msg=' + encodeURIComponent('Data ekstrakurikuler berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=eskul&status=error&msg=' + encodeURIComponent('Gagal memperbarui ekstrakurikuler: ' + error.message));
    }
});

app.post('/admin/eskul/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM ekstrakurikuler WHERE id_eskul = ?', [req.params.id]);
        if (rows.length > 0 && rows[0].foto_eskul && !rows[0].foto_eskul.startsWith('default') && !rows[0].foto_eskul.startsWith('eskul-')) {
            const filePath = path.join(__dirname, 'public/uploads/eskul', rows[0].foto_eskul);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }

        await db.query('DELETE FROM ekstrakurikuler WHERE id_eskul = ?', [req.params.id]);
        res.redirect('/admin?tab=eskul&status=success&msg=' + encodeURIComponent('Ekstrakurikuler berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=eskul&status=error&msg=' + encodeURIComponent('Gagal menghapus ekstrakurikuler: ' + error.message));
    }
});

// ==========================================
// CRUD GALERI FOTO (DIPROTEKSI + FILE UPLOAD)
// ==========================================
app.post('/admin/galeri/tambah', isAuthenticated, upload.single('file_foto'), async (req, res) => {
    try {
        const { judul_foto, deskripsi_singkat, kategori_galeri, tanggal_upload } = req.body;
        const file_foto = req.file ? req.file.filename : 'default-galeri.jpg';
        const tgl = tanggal_upload || new Date().toISOString().split('T')[0];

        await db.query(
            'INSERT INTO galeri (judul_foto, deskripsi_singkat, kategori_galeri, file_foto, tanggal_upload) VALUES (?, ?, ?, ?, ?)',
            [judul_foto, deskripsi_singkat || '-', kategori_galeri || 'Kegiatan', file_foto, tgl]
        );

        res.redirect('/admin?tab=galeri&status=success&msg=' + encodeURIComponent('Foto dokumentasi baru berhasil ditambahkan ke Galeri!'));
    } catch (error) {
        res.redirect('/admin?tab=galeri&status=error&msg=' + encodeURIComponent('Gagal menambah foto galeri: ' + error.message));
    }
});

app.post('/admin/galeri/edit/:id', isAuthenticated, upload.single('file_foto'), async (req, res) => {
    try {
        const { judul_foto, deskripsi_singkat, kategori_galeri, tanggal_upload } = req.body;
        const [rows] = await db.query('SELECT * FROM galeri WHERE id_galeri = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.redirect('/admin?tab=galeri&status=error&msg=' + encodeURIComponent('Foto galeri tidak ditemukan!'));
        }

        let file_foto = rows[0].file_foto;
        if (req.file) {
            file_foto = req.file.filename;
            if (rows[0].file_foto && !rows[0].file_foto.startsWith('default') && !['upacara-hardiknas.jpg', 'seni-tari-toraja.jpg', 'lab-komputer.jpg', 'prestasi-osn.jpg'].includes(rows[0].file_foto)) {
                const oldPath = path.join(__dirname, 'public/uploads/galeri', rows[0].file_foto);
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }
        }

        const tgl = tanggal_upload || rows[0].tanggal_upload;

        await db.query(
            'UPDATE galeri SET judul_foto = ?, deskripsi_singkat = ?, kategori_galeri = ?, file_foto = ?, tanggal_upload = ? WHERE id_galeri = ?',
            [judul_foto, deskripsi_singkat, kategori_galeri, file_foto, tgl, req.params.id]
        );

        res.redirect('/admin?tab=galeri&status=success&msg=' + encodeURIComponent('Foto galeri berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=galeri&status=error&msg=' + encodeURIComponent('Gagal memperbarui galeri: ' + error.message));
    }
});

app.post('/admin/galeri/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM galeri WHERE id_galeri = ?', [req.params.id]);
        if (rows.length > 0 && rows[0].file_foto && !rows[0].file_foto.startsWith('default') && !['upacara-hardiknas.jpg', 'seni-tari-toraja.jpg', 'lab-komputer.jpg', 'prestasi-osn.jpg'].includes(rows[0].file_foto)) {
            const filePath = path.join(__dirname, 'public/uploads/galeri', rows[0].file_foto);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }

        await db.query('DELETE FROM galeri WHERE id_galeri = ?', [req.params.id]);
        res.redirect('/admin?tab=galeri&status=success&msg=' + encodeURIComponent('Foto galeri berhasil dihapus!'));
    } catch (error) {
        res.redirect('/admin?tab=galeri&status=error&msg=' + encodeURIComponent('Gagal menghapus galeri: ' + error.message));
    }
});

// ==========================================
// CRUD PENERIMAAN PESERTA DIDIK BARU (PPDB)
// ==========================================

// 1. Tambah Calon Siswa Baru Manual (Oleh Panitia di Loket Sekolah)
app.post('/admin/ppdb/tambah', isAuthenticated, async (req, res) => {
    try {
        const {
            nama_siswa,
            nisn,
            jenis_kelamin,
            asal_sekolah,
            jalur_pendaftaran,
            nama_ortu,
            no_hp,
            alamat_domisili,
            catatan,
            status_seleksi
        } = req.body;

        if (!nama_siswa || !nama_ortu || !no_hp) {
            return res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Nama siswa, orang tua, dan kontak nomor HP wajib diisi!'));
        }

        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const no_pendaftaran = `PPDB-2026-${randomNum}`;
        const status = status_seleksi || 'Menunggu Verifikasi';

        await db.query(`
            INSERT INTO pendaftar_ppdb 
            (no_pendaftaran, nama_siswa, nisn, jenis_kelamin, asal_sekolah, jalur_pendaftaran, nama_ortu, no_hp, alamat_domisili, catatan, status_seleksi) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            no_pendaftaran,
            nama_siswa.trim(),
            nisn ? nisn.trim() : null,
            jenis_kelamin || 'Laki-laki',
            asal_sekolah ? asal_sekolah.trim() : '-',
            jalur_pendaftaran || 'Zonasi',
            nama_ortu.trim(),
            no_hp.trim(),
            alamat_domisili ? alamat_domisili.trim() : '-',
            catatan ? catatan.trim() : null,
            status
        ]);

        res.redirect('/admin?tab=ppdb&status=success&msg=' + encodeURIComponent(`Calon siswa ${nama_siswa} (${no_pendaftaran}) berhasil didaftarkan!`));
    } catch (error) {
        res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Gagal mendaftarkan calon siswa: ' + error.message));
    }
});

// 2. Edit Data Lengkap Pendaftar PPDB
app.post('/admin/ppdb/edit/:id', isAuthenticated, async (req, res) => {
    try {
        const {
            nama_siswa,
            nisn,
            jenis_kelamin,
            asal_sekolah,
            jalur_pendaftaran,
            nama_ortu,
            no_hp,
            alamat_domisili,
            catatan,
            status_seleksi
        } = req.body;

        await db.query(`
            UPDATE pendaftar_ppdb SET 
                nama_siswa = ?, 
                nisn = ?, 
                jenis_kelamin = ?, 
                asal_sekolah = ?, 
                jalur_pendaftaran = ?, 
                nama_ortu = ?, 
                no_hp = ?, 
                alamat_domisili = ?, 
                catatan = ?, 
                status_seleksi = ?
            WHERE id_pendaftar = ?
        `, [
            nama_siswa.trim(),
            nisn ? nisn.trim() : null,
            jenis_kelamin,
            asal_sekolah.trim(),
            jalur_pendaftaran,
            nama_ortu.trim(),
            no_hp.trim(),
            alamat_domisili.trim(),
            catatan ? catatan.trim() : null,
            status_seleksi,
            req.params.id
        ]);

        res.redirect('/admin?tab=ppdb&status=success&msg=' + encodeURIComponent('Data calon siswa PPDB berhasil diperbarui!'));
    } catch (error) {
        res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Gagal memperbarui calon siswa: ' + error.message));
    }
});

// 3. Ubah Status Seleksi & Catatan Panitia
app.post('/admin/ppdb/status/:id', isAuthenticated, async (req, res) => {
    try {
        const { status_seleksi, catatan_status } = req.body;
        if (!['Menunggu Verifikasi', 'Berkas Terverifikasi', 'Diterima', 'Tidak Diterima'].includes(status_seleksi)) {
            return res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Status seleksi tidak valid!'));
        }

        if (catatan_status && catatan_status.trim()) {
            await db.query('UPDATE pendaftar_ppdb SET status_seleksi = ?, catatan = ? WHERE id_pendaftar = ?', [
                status_seleksi,
                catatan_status.trim(),
                req.params.id
            ]);
        } else {
            await db.query('UPDATE pendaftar_ppdb SET status_seleksi = ? WHERE id_pendaftar = ?', [
                status_seleksi,
                req.params.id
            ]);
        }

        res.redirect('/admin?tab=ppdb&status=success&msg=' + encodeURIComponent(`Status seleksi berhasil diubah menjadi: ${status_seleksi}`));
    } catch (error) {
        res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Gagal mengubah status: ' + error.message));
    }
});

// 4. Hapus Pendaftar PPDB
app.post('/admin/ppdb/hapus/:id', isAuthenticated, async (req, res) => {
    try {
        await db.query('DELETE FROM pendaftar_ppdb WHERE id_pendaftar = ?', [req.params.id]);
        res.redirect('/admin?tab=ppdb&status=success&msg=' + encodeURIComponent('Data pendaftar PPDB berhasil dihapus dari sistem!'));
    } catch (error) {
        res.redirect('/admin?tab=ppdb&status=error&msg=' + encodeURIComponent('Gagal menghapus data: ' + error.message));
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Website SMPN 1 Rantepao aktif di: http://localhost:${PORT}`);
});