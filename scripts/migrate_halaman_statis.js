const db = require('../config/database');

async function migrateHalamanStatis() {
    try {
        console.log('🔄 Memulai migrasi tabel halaman_statis...');

        // 1. Cek kolom ikon
        const [ikonCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'ikon'`);
        if (ikonCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN ikon VARCHAR(80) NOT NULL DEFAULT 'fa-solid fa-file-lines' AFTER slug`);
            console.log('✅ Kolom ikon berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom ikon sudah ada.');
        }

        // 2. Cek kolom ringkasan (slip kartu)
        const [ringkasanCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'ringkasan'`);
        if (ringkasanCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN ringkasan VARCHAR(500) NULL AFTER judul`);
            console.log('✅ Kolom ringkasan berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom ringkasan sudah ada.');
        }

        // 3. Cek kolom warna_badge
        const [warnaCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'warna_badge'`);
        if (warnaCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN warna_badge VARCHAR(30) NOT NULL DEFAULT 'blue' AFTER ringkasan`);
            console.log('✅ Kolom warna_badge berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom warna_badge sudah ada.');
        }

        // 4. Update data bawaan awal jika masih kosong
        const defaultData = [
            {
                slug: 'sejarah',
                ikon: 'fa-solid fa-landmark',
                ringkasan: 'Menjelajahi tonggak sejarah pendirian, perkembangan, dan perjalanan prestasi SMP Negeri 1 Rantepao dari masa ke masa.',
                warna_badge: 'amber'
            },
            {
                slug: 'sarana',
                ikon: 'fa-solid fa-building-columns',
                ringkasan: 'Fasilitas ruang belajar modern, laboratorium sains & komputer, perpustakaan terakreditasi, serta sarana olahraga.',
                warna_badge: 'emerald'
            },
            {
                slug: 'program-kerja',
                ikon: 'fa-solid fa-list-check',
                ringkasan: 'Agenda strategis sekolah, program kurikulum merdeka, inovasi digitalisasi, dan penguatan karakter profil pelajar Pancasila.',
                warna_badge: 'purple'
            },
            {
                slug: 'kondisi-siswa',
                ikon: 'fa-solid fa-chart-pie',
                ringkasan: 'Statistik persebaran peserta didik, jumlah rombongan belajar (rombel), rasio tenaga pendidik, dan capaian akademik.',
                warna_badge: 'rose'
            }
        ];

        for (const item of defaultData) {
            await db.query(`
                UPDATE halaman_statis 
                SET ikon = COALESCE(NULLIF(ikon, 'fa-solid fa-file-lines'), ?),
                    ringkasan = COALESCE(ringkasan, ?),
                    warna_badge = COALESCE(NULLIF(warna_badge, 'blue'), ?)
                WHERE slug = ?
            `, [item.ikon, item.ringkasan, item.warna_badge, item.slug]);
        }

        console.log('🎉 Migrasi halaman_statis selesai!');
        const [rows] = await db.query('SELECT id, slug, judul, ikon, ringkasan, warna_badge FROM halaman_statis');
        console.table(rows);
        process.exit(0);
    } catch (err) {
        console.error('❌ Gagal migrasi halaman_statis:', err);
        process.exit(1);
    }
}

migrateHalamanStatis();
