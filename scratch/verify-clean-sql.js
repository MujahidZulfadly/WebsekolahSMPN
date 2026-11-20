const fs = require('fs');

const content = fs.readFileSync('db_sman1_makassar.sql', 'utf8');

const checks = [
  'rantepao',
  'smpn',
  'toraja',
  'budi utomo',
  'febry anita',
  '0423'
];

console.log('--- Checking for old school strings in db_sman1_makassar.sql ---');
for (const word of checks) {
  const matches = [...content.matchAll(new RegExp(word, 'gi'))];
  console.log(`Word "${word}": ${matches.length} occurrences`);
  if (matches.length > 0) {
    matches.forEach(m => {
      const idx = m.index;
      const snippet = content.slice(Math.max(0, idx - 40), Math.min(content.length, idx + 40)).replace(/\n/g, ' ');
      console.log(`  Snippet: ...${snippet}...`);
    });
  }
}

