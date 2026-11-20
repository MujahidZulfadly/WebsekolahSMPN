const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const match = content.match(/INSERT INTO `halaman_statis`[\s\S]*?;/i);
if (match) {
  const sql = match[0];
  // extract slugs and titles
  const regex = /\((\d+),\s*'([^']+)',\s*'([^']+)',\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(sql)) !== null) {
    console.log(`id: ${m[1]}, slug: ${m[2]}, title: ${m[4]}`);
  }
}

