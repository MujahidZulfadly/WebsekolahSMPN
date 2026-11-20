const fs = require('fs');

const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const tables = [
  'profil_sekolah',
  'users',
  'osis_akun',
  'osis_profil',
  'osis_pengurus',
  'osis_proker',
  'osis_mading',
  'osis_galeri',
  'ppdb_pengaturan',
  'pendaftar_ppdb',
  'struktur_organisasi_info',
  'struktur_organisasi_anggota',
  'komite_sekolah',
  'guru_staf',
  'ekstrakurikuler',
  'kategori_berita',
  'berita',
  'pengumuman',
  'kalender_akademik',
  'galeri',
  'hero_slider',
  'halaman_statis',
  'pesan_kontak',
  'statistik_pengunjung'
];

for (const t of tables) {
  console.log(`\n================== ${t} ==================`);
  // Find CREATE TABLE schema
  const createMatch = content.match(new RegExp('CREATE TABLE `' + t + '` \\(([\\s\\S]*?)\\) ENGINE', 'i'));
  if (createMatch) {
    const colLines = createMatch[1]
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.startsWith('`'))
      .map(l => l.replace(/,$/, ''));
    console.log('Columns:');
    colLines.forEach(c => console.log('  ' + c));
  }
  // Find INSERT
  const insertMatch = content.match(new RegExp('INSERT INTO `' + t + '`[\\s\\S]*?;', 'i'));
  if (insertMatch) {
    console.log('Sample INSERT (up to 300 chars):');
    console.log(insertMatch[0].slice(0, 300) + '...');
  } else {
    console.log('NO INSERT');
  }
}

