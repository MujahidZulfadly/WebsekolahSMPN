const fs = require('fs');
const content = fs.readFileSync('db_smpn1_rantepao_fixed_aapanel.sql', 'utf8');

const viewIndex = content.indexOf('VIEW `ppdb_pendaftar`');
if (viewIndex !== -1) {
  console.log(content.slice(viewIndex - 100, viewIndex + 400));
}

