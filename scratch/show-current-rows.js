const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

function showTable(name) {
  console.log(`\n============================ ${name} ============================`);
  const match = content.match(new RegExp('INSERT INTO `' + name + '`[\\s\\S]*?;', 'i'));
  if (match) {
    console.log(match[0]);
  } else {
    console.log('NO INSERT');
  }
}

['profil_sekolah', 'ppdb_pengaturan', 'struktur_organisasi_info', 'users', 'osis_akun'].forEach(showTable);

