const db = require('../config/database');

async function migrateHalamanItems() {
    try {
        console.log('🔄 Memulai migrasi kolom items_json pada halaman_statis...');

        // 1. Tambah items_json
        const [itemsCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'items_json'`);
        if (itemsCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN items_json MEDIUMTEXT NULL AFTER konten`);
            console.log('✅ Kolom items_json berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom items_json sudah ada.');
        }

        // 2. Tambah paragraf_pembuka
        const [pembukaCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'paragraf_pembuka'`);
        if (pembukaCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN paragraf_pembuka TEXT NULL AFTER items_json`);
            console.log('✅ Kolom paragraf_pembuka berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom paragraf_pembuka sudah ada.');
        }

        // 3. Tambah paragraf_penutup
        const [penutupCol] = await db.query(`SHOW COLUMNS FROM halaman_statis LIKE 'paragraf_penutup'`);
        if (penutupCol.length === 0) {
            await db.query(`ALTER TABLE halaman_statis ADD COLUMN paragraf_penutup TEXT NULL AFTER paragraf_pembuka`);
            console.log('✅ Kolom paragraf_penutup berhasil ditambahkan.');
        } else {
            console.log('ℹ️ Kolom paragraf_penutup sudah ada.');
        }

        // 4. Data awal untuk Sarana
        const saranaItems = [
            {
                ikon: "fa-solid fa-chalkboard-user",
                judul: "Ruang Kelas Representatif",
                deskripsi: "30+ ruang kelas dengan pencahayaan dan sirkulasi udara optimal, dilengkapi proyektor LCD dan sarana multimedia.",
                warna: "amber"
            },
            {
                ikon: "fa-solid fa-flask",
                judul: "Laboratorium IPA Terpadu",
                deskripsi: "Peralatan praktikum fisika, biologi, dan kimia yang lengkap dan aman untuk penelitian saintifik siswa.",
                warna: "blue"
            },
            {
                ikon: "fa-solid fa-laptop-code",
                judul: "Lab Komputer & Server ANBK",
                deskripsi: "3 laboratorium komputer ber-AC terhubung jaringan gigabit dan internet serat optik kecepatan tinggi.",
                warna: "indigo"
            },
            {
                ikon: "fa-solid fa-book-bookmark",
                judul: "Perpustakaan Digital & Fisik",
                deskripsi: "Koleksi ribuan buku pelajaran, fiksi, ensiklopedia serta e-library dengan area baca santai ber-karpet.",
                warna: "emerald"
            },
            {
                ikon: "fa-solid fa-volleyball",
                judul: "Lapangan Olahraga Serbaguna",
                deskripsi: "Fasilitas bola basket, bola voli, bulutangkis, serta area senam kesegaran jasmani terpadu.",
                warna: "rose"
            },
            {
                ikon: "fa-solid fa-mosque",
                judul: "Ruang Ibadah & Pembinaan Iman",
                deskripsi: "Musholla dan ruang kebaktian siswa Kristen untuk pembinaan rohani serta toleransi beragama berkala.",
                warna: "teal"
            }
        ];
        const saranaIntro = "Untuk mendukung tercapainya proses pembelajaran yang optimal dan berdaya saing tinggi, UPT SMP Negeri 1 Rantepao dilengkapi dengan sarana dan prasarana modern yang ramah peserta didik:";

        await db.query(`
            UPDATE halaman_statis 
            SET items_json = ?, paragraf_pembuka = ?
            WHERE slug = 'sarana' AND (items_json IS NULL OR items_json = '')
        `, [JSON.stringify(saranaItems), saranaIntro]);

        // 5. Data awal untuk Program Kerja
        const prokerItems = [
            {
                ikon: "fa-solid fa-graduation-cap",
                judul: "1. Penguatan Kurikulum Merdeka Terintegrasi",
                deskripsi: "Penerapan Projek Penguatan Profil Pelajar Pancasila (P5) yang kontekstual dengan pemecahan masalah lingkungan sekitar dan kearifan lokal Toraja.",
                warna: "amber"
            },
            {
                ikon: "fa-solid fa-book-open-reader",
                judul: "2. Gerakan Literasi Sekolah (GLS) 15 Menit Setiap Pagi",
                deskripsi: "Pembiasaan membaca buku non-pelajaran sebelum jam pertama dimulai guna memperkaya wawasan dan daya analitis siswa.",
                warna: "blue"
            },
            {
                ikon: "fa-solid fa-laptop-file",
                judul: "3. Digitalisasi Asesmen & E-Raport",
                deskripsi: "Pelaksanaan ujian sumatif dan formatif berbasis Computer-Based Test (CBT) serta pelaporan perkembangan nilai siswa secara online.",
                warna: "emerald"
            },
            {
                ikon: "fa-solid fa-masks-theater",
                judul: "4. Sanggar Seni & Pelestarian Budaya Toraja",
                deskripsi: "Pelatihan tari tradisional (Pagellu), musik bambu, dan paduan suara siswa yang rutin tampil pada event daerah dan nasional.",
                warna: "purple"
            },
            {
                ikon: "fa-solid fa-leaf",
                judul: "5. Program Sekolah Adiwiyata & Zero Plastic",
                deskripsi: "Edukasi pemilahan sampah, pengelolaan biopori, penanaman pohon penghijauan, dan pengurangan sampah plastik di kantin sekolah.",
                warna: "rose"
            }
        ];
        const prokerIntro = "Dalam rangka meningkatkan mutu layanan pendidikan secara berkesinambungan, sekolah menyusun program kerja strategis yang berfokus pada kemandirian dan kecakapan abad ke-21:";

        await db.query(`
            UPDATE halaman_statis 
            SET items_json = ?, paragraf_pembuka = ?
            WHERE slug = 'program-kerja' AND (items_json IS NULL OR items_json = '')
        `, [JSON.stringify(prokerItems), prokerIntro]);

        console.log('🎉 Migrasi items_json selesai!');
        const [rows] = await db.query('SELECT slug, judul, CHAR_LENGTH(items_json) AS items_len, CHAR_LENGTH(paragraf_pembuka) AS pembuka_len FROM halaman_statis');
        console.table(rows);
        process.exit(0);
    } catch (err) {
        console.error('❌ Gagal migrasi:', err);
        process.exit(1);
    }
}

migrateHalamanItems();

