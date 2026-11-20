const fs = require('fs');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    multipleStatements: true
  });

  console.log('Connected to MySQL. Dropping and re-creating database...');
  await connection.query('DROP DATABASE IF EXISTS `db_smpn1_rantepao`');
  await connection.query('CREATE DATABASE `db_smpn1_rantepao` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
  await connection.query('USE `db_smpn1_rantepao`');

  const sql = fs.readFileSync('db_sman1_makassar.sql', 'utf8');

  console.log('Executing db_sman1_makassar.sql statements...');
  await connection.query(sql);
  console.log('✅ Successfully imported db_sman1_makassar.sql into MySQL!');

  const [profil] = await connection.query('SELECT nama_sekolah, npsn, nama_kepsek, email_sekolah, label_lokasi, keterangan_lokasi, wilayah_lokasi FROM profil_sekolah WHERE id_profil = 1');
  console.log('Profil Sekolah:', profil[0]);

  const [berita] = await connection.query('SELECT count(*) as total, MIN(judul) as contoh_judul FROM berita');
  console.log('Berita:', berita[0]);

  const [guru] = await connection.query('SELECT count(*) as total FROM guru_staf');
  console.log('Guru & Staf total:', guru[0].total);

  const [eskul] = await connection.query('SELECT count(*) as total FROM ekstrakurikuler');
  console.log('Ekstrakurikuler total:', eskul[0].total);

  const [osis] = await connection.query('SELECT nama_ketua, periode, visi_utama FROM osis_profil WHERE id = 1');
  console.log('OSIS Profil:', osis[0]);

  const [ppdb] = await connection.query('SELECT count(*) as total FROM ppdb_pendaftar');
  console.log('PPDB Pendaftar (View) total:', ppdb[0].total);

  await connection.end();
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
