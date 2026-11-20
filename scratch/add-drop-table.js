const fs = require('fs');

let sql = fs.readFileSync('db_sman1_makassar.sql', 'utf8');

// Replace CREATE TABLE `xyz` with:
// DROP TABLE IF EXISTS `xyz`;
// CREATE TABLE `xyz`
sql = sql.replace(/CREATE TABLE `([^`]+)`/g, (match, tableName) => {
  return `DROP TABLE IF EXISTS \`${tableName}\`;\n${match}`;
});

fs.writeFileSync('db_sman1_makassar.sql', sql, 'utf8');
console.log('Added DROP TABLE IF EXISTS to db_sman1_makassar.sql');

