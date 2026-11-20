const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const autoMatches = content.match(/ALTER TABLE `[^`]+`\s+MODIFY `[^`]+`[^\n]+/g) || [];
autoMatches.forEach(m => console.log(m));

