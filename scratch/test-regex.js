const fs = require('fs');
const originalSql = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const regex = /INSERT INTO `statistik_pengunjung`[\s\S]*?\);\s*(?:\r?\n|$)/i;
const match = originalSql.match(regex);
console.log('Matched length:', match ? match[0].length : 0);
if (match) {
  console.log('Matched ends with:');
  console.log(match[0].slice(-100));
}

