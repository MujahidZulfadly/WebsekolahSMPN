const db = require('../config/database');

async function migrateOsis() {
    try {
        console.log('Migrating OSIS tables...');

        // 1. Table osis_profil (Sambutan & Visi Ketua)
        await db.query(`
            CREATE TABLE IF NOT EXISTS osis_profil (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nama_ketua VARCHAR(150) NOT NULL,
                kelas_ketua VARCHAR(50) NOT NULL,
                periode VARCHAR(50) NOT NULL,
                visi_utama TEXT NOT NULL,
                teks_sambutan TEXT NOT NULL,
                foto_ketua VARCHAR(255) DEFAULT 'default-osis.jpg',
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        // Check if osis_profil has row
        const [profilRows] = await db.query('SELECT * FROM osis_profil WHERE id = 1');
        if (profilRows.length === 0) {
            await db.query(`
                INSERT INTO osis_profil (id, nama_ketua, kelas_ketua, periode, visi_utama, teks_sambutan, foto_ketua)
                VALUES (
                    1,
                    'Gabriel Ranteallo',
                    'Kelas IX-A',
                    '2025/2026',
                    'Terwujudnya OSIS SMPN 1 Rantepao yang Berkarakter, Inovatif, Kolaboratif, serta Menjunjung Tinggi Keluhuran Budaya Toraja.',
                    'Salam hangat dan salam sejahtera untuk seluruh rekan-rekan siswa, bapak/ibu guru pembina, dan civitas akademika UPT SMP Negeri 1 Rantepao tercinta.\n\nPuji dan syukur kita panjatkan kepada Tuhan Yang Maha Esa atas kepercayaan yang diberikan kepada kami untuk mengemban amanah sebagai Pengurus OSIS Masa Bakti 2025/2026. Organisasi Siswa Intra Sekolah (OSIS) bukan sekadar wadah seremonial, melainkan rumah bersama untuk menempa jiwa kepemimpinan, menyalurkan bakat kreatif, dan memupuk solidaritas antar-angkatan.\n\nMengusung semangat falsafah Toraja "Misa\\' Kada Dipotuo, Pantan Kada Dipomate" (Bersatu kita teguh, bercerai kita runtuh), kami berkomitmen menjadikan OSIS sebagai jembatan aspirasi siswa yang inklusif, transparan, dan berdaya saing. Mari bersama-sama kita jadikan masa putih-biru ini penuh dengan torehan karya berharga, prestasi akademik maupun non-akademik, serta kebanggaan bagi almamater kita tercinta!',
                    'ketua-osis.jpg'
                )
            `);
            console.log('osis_profil seeded successfully');
        }

        // 2. Table osis_proker (Program Kerja)
        await db.query(`
            CREATE TABLE IF NOT EXISTS osis_proker (
                id INT PRIMARY KEY AUTO_INCREMENT,
                judul VARCHAR(200) NOT NULL,
                kategori VARCHAR(100) NOT NULL,
                icon VARCHAR(50) DEFAULT 'fa-compass',
                jadwal VARCHAR(100) NOT NULL,
                target VARCHAR(150) NOT NULL,
                status VARCHAR(50) DEFAULT 'Sedang Berjalan',
                deskripsi TEXT NOT NULL,
                urutan_tampil INT DEFAULT 10,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const [prokerCount] = await db.query('SELECT COUNT(*) as count FROM osis_proker');
        if (prokerCount[0].count === 0) {
            const initialProker = [
                ['Latihan Dasar Kepemimpinan Siswa (LDKS) 2025/2026', 'Kepemimpinan', 'fa-compass', 'Oktober 2025', 'Pengurus OSIS & MPK', 'Terlaksana', 'Pelatihan kepemimpinan, manajemen organisasi, komunikasi efektif, dan outbound pembentukan karakter tangguh di alam terbuka.', 1],
                ['Pekan Olahraga & Seni (PORSENI) Antar Kelas', 'Olahraga & Seni', 'fa-trophy', 'Desember 2025', 'Seluruh Siswa Kelas VII, VIII, IX', 'Terlaksana', 'Turnamen futsal, bola voli, basket, catur, lomba tarik tambang, dan kompetisi akustik musik yang mempererat sportivitas sekolah.', 2],
                ['Pentas Seni & Karnaval Budaya Toraja (Toraja Heritage Fest)', 'Seni Budaya', 'fa-masks-theater', 'Maret 2026', 'Warga Sekolah & Tamu Undangan', 'Sedang Berjalan', 'Peragaan busana adat Toraja, tari massal Pa\'gellu, festival musik bambu, dan stan pameran kuliner tradisional khas Toraja.', 3],
                ['Gerakan Mading Digital & Literasi Kreatif Sekolah', 'Literasi & Media', 'fa-newspaper', 'Rutin Setiap Bulan', 'Seluruh Siswa', 'Aktif Rutin', 'Publikasi cerpen, puisi, artikel ilmiah populer, karya ilustrasi siswa, serta rekap berita kegiatan sekolah secara berkala.', 4],
                ['Aksi Sosial & Ramah Lingkungan: "OSIS Peduli Toraja Asri"', 'Sosial & Lingkungan', 'fa-hand-holding-heart', 'April 2026', 'Masyarakat Sekitar Rantepao', 'Mendatang', 'Gerakan pemilahan sampah di sekitar bantaran sungai Sa\'dan, penanaman pohon penghijauan, dan donasi buku untuk taman baca pedesaan.', 5],
                ['Pelatihan Public Speaking & Jurnalistik Pelajar', 'Pengembangan Diri', 'fa-microphone', 'Mei 2026', 'Perwakilan Kelas VII & VIII', 'Mendatang', 'Workshop praktis berbicara di depan umum, teknik presentasi memukau, penulisan berita, dan etika jurnalisme media sosial.', 6]
            ];
            for (const item of initialProker) {
                await db.query(
                    'INSERT INTO osis_proker (judul, kategori, icon, jadwal, target, status, deskripsi, urutan_tampil) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    item
                );
            }
            console.log('osis_proker seeded successfully');
        }

        // 3. Table osis_mading (Mading Siswa)
        await db.query(`
            CREATE TABLE IF NOT EXISTS osis_mading (
                id INT PRIMARY KEY AUTO_INCREMENT,
                judul VARCHAR(200) NOT NULL,
                kategori VARCHAR(100) NOT NULL,
                penulis VARCHAR(150) NOT NULL,
                kelas VARCHAR(50) NOT NULL,
                tanggal VARCHAR(50) NOT NULL,
                cuplikan TEXT NOT NULL,
                likes INT DEFAULT 0,
                foto VARCHAR(255) NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const [madingCount] = await db.query('SELECT COUNT(*) as count FROM osis_mading');
        if (madingCount[0].count === 0) {
            const initialMading = [
                ['Di Bawah Langit Rantepao yang Sejuk', 'Puisi Siswa', 'Michelle Olivia', 'Kelas VIII-A', '28 Oktober 2025', 'Kala kabut pagi menyelimuti tongkonan, langkah tegap kami berderap menuju gerbang ilmu. Di sini cita dirajut, di sini tekad dipahat pantang surut...', 86],
                ['Kearifan Lokal Toraja di Era Kecerdasan Buatan (AI)', 'Esai Ilmiah', 'Daniel Pratama Toding', 'Kelas IX-B', '14 November 2025', 'Kecerdasan buatan bukan ancaman bagi tradisi kita. Justru teknologi adalah wadah baru bagi generasi muda Toraja untuk memperkenalkan indahnya ukiran Passura dan ritme Pa\'gellu ke mata dunia...', 114],
                ['Keseruan Babak Final Class Meeting Futsal SMPN 1', 'Warta Siswa', 'Tim Redaksi OSIS', 'Sekbid V', '20 Desember 2025', 'Laga sengit penuh drama antara tim kelas IX-A melawan VIII-D menyedot riuh gemuruh ratusan suporter di lapangan olahraga serbaguna sekolah kemarin sore...', 142],
                ['Nada Bambu yang Tak Pernah Pudar', 'Cerita Pendek', 'Kezia Limbong', 'Kelas VII-C', '15 Januari 2026', 'Sore itu di ruang sanggar seni, alunan seruling bambu kakek terngiang kembali di benakku saat guru pembina kami mulai memimpin latihan musik bambu perdana...', 95]
            ];
            for (const item of initialMading) {
                await db.query(
                    'INSERT INTO osis_mading (judul, kategori, penulis, kelas, tanggal, cuplikan, likes) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    item
                );
            }
            console.log('osis_mading seeded successfully');
        }

        console.log('OSIS migration completed successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrateOsis();

