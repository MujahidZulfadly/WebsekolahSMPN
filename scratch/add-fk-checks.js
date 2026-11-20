const fs = require('fs');
let sql = fs.readFileSync('db_sman1_makassar.sql', 'utf8');

if (!sql.includes('FOREIGN_KEY_CHECKS = 0')) {
  sql = 'SET FOREIGN_KEY_CHECKS = 0;\n' + sql;
}
if (!sql.includes('FOREIGN_KEY_CHECKS = 1')) {
  sql = sql + '\nSET FOREIGN_KEY_CHECKS = 1;\n';
}

fs.writeFileSync('db_sman1_makassar.sql', sql, 'utf8');
console.log('FOREIGN_KEY_CHECKS configured in db_sman1_makassar.sql');

