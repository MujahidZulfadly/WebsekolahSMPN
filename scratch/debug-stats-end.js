const fs = require('fs');
const sql = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');
const idx = sql.indexOf('INSERT INTO `statistik_pengunjung`');
console.log(sql.slice(idx, idx + 1000));

