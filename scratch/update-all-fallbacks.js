const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else if (file.endsWith('.ejs') || file.endsWith('.js')) {
      callback(fullPath);
    }
  });
}

const replacements = [
  [/UPT SMPN 1 RANTEPAO/g, 'UPT SMAN 1 MAKASSAR'],
  [/UPT SMPN 1 Rantepao/g, 'UPT SMAN 1 Makassar'],
  [/UPT SMP Negeri 1 Rantepao/g, 'UPT SMA Negeri 1 Makassar'],
  [/SMP Negeri 1 Rantepao/g, 'SMA Negeri 1 Makassar'],
  [/SMPN 1 RANTEPAO/g, 'SMAN 1 MAKASSAR'],
  [/SMPN 1 Rantepao/g, 'SMAN 1 Makassar'],
  [/OSIS UPT SMPN 1 Rantepao/g, 'OSIS UPT SMAN 1 Makassar'],
  [/Panitia PPDB UPT SMPN 1 Rantepao/g, 'Panitia PPDB UPT SMAN 1 Makassar'],
  [/Panitia PPDB SMPN 1 Rantepao/g, 'Panitia PPDB SMAN 1 Makassar'],
  [/PPDB SMPN 1 Rantepao/g, 'PPDB SMAN 1 Makassar'],
  [/Sekretariat PPDB SMPN 1 Rantepao/g, 'Sekretariat PPDB SMAN 1 Makassar'],
  [/logo-smpn1-rantepao\.svg/g, 'logo-sman1-makassar.png'],
  [/logo-smpn1-rantepao\.png/g, 'logo-sman1-makassar.png'],
  [/Rantepao, <%= new Date/g, 'Makassar, <%= new Date'],
  [/SDN 1 Rantepao/g, 'SMP Negeri 6 Makassar'],
  [/SDN 2 Rantepao/g, 'SMP Negeri 12 Makassar'],
  [/Kabupaten Toraja Utara/g, 'Kota Makassar'],
  [/Kab\. Toraja Utara/g, 'Kota Makassar'],
  [/Toraja Utara/g, 'Kota Makassar'],
  [/budaya Toraja/g, 'budaya Bugis-Makassar']
];

walk('views', filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});

// Also check app.js
let appJs = fs.readFileSync('app.js', 'utf8');
let origApp = appJs;
for (const [pattern, replacement] of replacements) {
  appJs = appJs.replace(pattern, replacement);
}
if (appJs !== origApp) {
  fs.writeFileSync('app.js', appJs, 'utf8');
  console.log('Updated: app.js');
}

console.log('Done updating view and app fallbacks!');

