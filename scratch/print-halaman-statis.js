const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const match = content.match(/INSERT INTO `halaman_statis`[\s\S]*?;/i);
if (match) {
  console.log(match[0]);
}

