const fs = require('fs');
const sql = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');
const idx = sql.indexOf('statistik_pengunjung');
console.log('Index:', idx);
if (idx !== -1) {
  console.log(sql.slice(idx - 100, idx + 800));
}

