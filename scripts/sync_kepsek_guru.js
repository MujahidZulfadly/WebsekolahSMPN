const fs = require('fs');
const path = require('path');
const db = require('../config/database');

async function syncNow() {
    try {
        const [profilRows] = await db.query('SELECT nama_kepsek, nip_kepsek, foto_kepsek FROM profil_sekolah WHERE id_profil = 1');
        if (profilRows.length === 0) {
            console.log('No profil found');
            process.exit(0);
        }
        const { nama_kepsek, nip_kepsek, foto_kepsek } = profilRows[0];
        console.log('Profil data:', { nama_kepsek, nip_kepsek, foto_kepsek });

        if (foto_kepsek) {
            const src = path.join(__dirname, '../public/uploads/profil', foto_kepsek);
            const dest = path.join(__dirname, '../public/uploads/guru', foto_kepsek);
            if (fs.existsSync(src)) {
                fs.copyFileSync(src, dest);
                console.log('Copied foto from profil to guru:', foto_kepsek);
            } else {
                console.log('Photo not found in profil:', src);
            }
        }

        const [res] = await db.query(
            "UPDATE guru_staf SET nama_lengkap = ?, nip = ?, foto = ?, kategori_pegawai = 'Kepala Sekolah', jabatan = 'Kepala Sekolah', urutan_tampil = 1 WHERE kategori_pegawai = 'Kepala Sekolah' OR jabatan LIKE '%Kepala Sekolah%' OR id_guru = 1",
            [nama_kepsek, nip_kepsek, foto_kepsek]
        );
        console.log('Updated guru_staf:', res.affectedRows, 'rows');

        const [check] = await db.query("SELECT id_guru, nip, nama_lengkap, jabatan, kategori_pegawai, foto FROM guru_staf WHERE kategori_pegawai = 'Kepala Sekolah' OR jabatan LIKE '%Kepala Sekolah%'");
        console.log('Sync result in guru_staf:', check);
        process.exit(0);
    } catch (err) {
        console.error('Error syncing:', err);
        process.exit(1);
    }
}

syncNow();

