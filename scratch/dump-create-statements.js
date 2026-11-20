const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const tables = [
  'guru_staf',
  'ekstrakurikuler',
  'berita',
  'pengumuman',
  'kalender_akademik',
  'galeri',
  'struktur_organisasi_anggota',
  'pendaftar_ppdb',
  'osis_pengurus',
  'osis_proker',
  'osis_mading',
  'osis_galeri',
  'pesan_kontak'
];

for (const t of tables) {
  console.log(`\n================== ${t} ==================`);
  const createMatch = content.match(new RegExp('CREATE TABLE `' + t + '` \\(([\\s\\S]*?)\\) ENGINE', 'i'));
  if (createMatch) {
    console.log(createMatch[0]);
  }
}

