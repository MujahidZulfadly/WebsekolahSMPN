const db = require('../config/database');

async function migrate() {
    try {
        console.log('🔄 Memulai migrasi tabel ppdb_pengaturan...');

        await db.query(`
            CREATE TABLE IF NOT EXISTS ppdb_pengaturan (
                id INT PRIMARY KEY DEFAULT 1,
                tahun_ajaran VARCHAR(20) NOT NULL DEFAULT '2026/2027',
                nama_gelombang VARCHAR(150) NOT NULL DEFAULT 'Gelombang 1 (Reguler & Zonasi)',
                status_loket ENUM('Buka', 'Verifikasi', 'Pengumuman', 'Daftar Ulang', 'Tutup') NOT NULL DEFAULT 'Buka',
                tgl_mulai_daftar DATE NULL,
                tgl_selesai_daftar DATE NULL,
                tgl_pengumuman DATE NULL,
                tgl_daftar_ulang DATE NULL,
                kuota_total INT NOT NULL DEFAULT 320,
                kuota_zonasi INT NOT NULL DEFAULT 160,
                kuota_prestasi INT NOT NULL DEFAULT 96,
                kuota_afirmasi INT NOT NULL DEFAULT 48,
                kuota_mutasi INT NOT NULL DEFAULT 16,
                pesan_pengumuman TEXT NULL,
                kontak_panitia VARCHAR(50) NOT NULL DEFAULT '0812-3456-7890',
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);

        // Cek apakah data id = 1 sudah ada
        const [rows] = await db.query('SELECT * FROM ppdb_pengaturan WHERE id = 1');
        if (rows.length === 0) {
            await db.query(`
                INSERT INTO ppdb_pengaturan (
                    id, tahun_ajaran, nama_gelombang, status_loket,
                    tgl_mulai_daftar, tgl_selesai_daftar, tgl_pengumuman, tgl_daftar_ulang,
                    kuota_total, kuota_zonasi, kuota_prestasi, kuota_afirmasi, kuota_mutasi,
                    pesan_pengumuman, kontak_panitia
                ) VALUES (
                    1, '2026/2027', 'Gelombang 1 (Reguler & Zonasi)', 'Buka',
                    '2026-06-15', '2026-06-30', '2026-07-04', '2026-07-06',
                    320, 160, 96, 48, 16,
                    'Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah dibuka. Silakan buat akun calon siswa dan lengkapi formulir pendaftaran serta berkas persyaratan sebelum batas akhir pendaftaran.',
                    '0812-3456-7890'
                );
            `);
            console.log('✅ Baris default ppdb_pengaturan berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Tabel ppdb_pengaturan sudah memiliki konfigurasi.');
        }

        console.log('🎉 Migrasi ppdb_pengaturan selesai dengan sukses!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Gagal migrasi ppdb_pengaturan:', err);
        process.exit(1);
    }
}

migrate();

