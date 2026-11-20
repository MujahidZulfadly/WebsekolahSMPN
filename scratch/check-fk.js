const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const fkMatches = content.match(/ALTER TABLE `[^`]+`\s+ADD CONSTRAINT[^\n]+/g) || [];
fkMatches.forEach(m => console.log(m));

