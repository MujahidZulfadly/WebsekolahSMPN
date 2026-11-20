const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

function showTable(name) {
  console.log(`\n============================ ${name} ============================`);
  const match = content.match(new RegExp('INSERT INTO `' + name + '`[\\s\\S]*?;', 'i'));
  if (match) {
    console.log(match[0].slice(0, 1500));
  } else {
    console.log('NO INSERT');
  }
}

['halaman_statis', 'osis_profil', 'komite_sekolah', 'kategori_berita', 'hero_slider'].forEach(showTable);

