const fs = require('fs');
const originalSql = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const tables = [
  'profil_sekolah', 'users', 'halaman_statis', 'kategori_berita', 'berita',
  'pengumuman', 'kalender_akademik', 'galeri', 'hero_slider', 'komite_sekolah',
  'struktur_organisasi_info', 'struktur_organisasi_anggota', 'guru_staf',
  'ekstrakurikuler', 'ppdb_pengaturan', 'pendaftar_ppdb', 'osis_akun',
  'osis_profil', 'osis_pengurus', 'osis_proker', 'osis_mading', 'osis_galeri',
  'pesan_kontak', 'statistik_pengunjung'
];

for (const t of tables) {
  const regex = new RegExp(`INSERT INTO \`${t}\`[\\s\\S]*?\\);\\s*(?:\\r?\\n|$)`, 'i');
  const m = originalSql.match(regex);
  if (!m) {
    console.error(`FAILED to match table ${t}`);
  } else {
    console.log(`OK: ${t} (${m[0].length} chars)`);
  }
}

