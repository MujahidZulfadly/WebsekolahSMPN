const fs = require('fs');
const content = fs.readFileSync('views/admin.ejs', 'utf8');
const lines = content.split('\n');

lines.forEach((l, idx) => {
    if (l.includes('id="tab-profil"') || l.includes('tab-profil') || l.includes('/admin/profil')) {
        console.log((idx + 1) + ': ' + l.trim());
    }
});

const appContent = fs.readFileSync('app.js', 'utf8');
const appLines = appContent.split('\n');
appLines.forEach((l, idx) => {
    if (l.includes('/admin/profil') || l.includes('logo_sekolah')) {
        console.log('app.js ' + (idx + 1) + ': ' + l.trim());
    }
});

