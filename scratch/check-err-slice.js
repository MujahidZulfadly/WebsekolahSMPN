const fs = require('fs');
const sql = fs.readFileSync('db_sman1_makassar.sql', 'utf8');
const idx = sql.indexOf('Chrome/156');
console.log(sql.slice(idx - 250, idx + 250));

