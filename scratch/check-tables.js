const fs = require('fs');

const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');
console.log('File length:', content.length);

const tableMatches = [...content.matchAll(/CREATE TABLE `([^`]+)`/g)].map(m => m[1]);
console.log('Tables created (' + tableMatches.length + '):', tableMatches);

const insertMatches = [...new Set([...content.matchAll(/INSERT INTO `([^`]+)`/g)].map(m => m[1]))];
console.log('Tables with INSERT INTO (' + insertMatches.length + '):', insertMatches);

