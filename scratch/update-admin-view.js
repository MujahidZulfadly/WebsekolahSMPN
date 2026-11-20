const fs = require('fs');

let c = fs.readFileSync('views/admin.ejs', 'utf8');

c = c.replace(
  '<title>Panel Admin - SMPN 1 Rantepao</title>',
  '<title>Panel Admin - <%= (typeof profil !== "undefined" && profil && profil.nama_sekolah) ? profil.nama_sekolah : "SMAN 1 Makassar" %></title>'
);
c = c.replace(
  "'SMPN 1 RANTEPAO'",
  "'SMAN 1 MAKASSAR'"
);
c = c.replace(
  '&copy; SMPN 1 Rantepao',
  '&copy; <%= (typeof profil !== "undefined" && profil && profil.nama_sekolah) ? profil.nama_sekolah : "SMAN 1 Makassar" %>'
);
c = c.replace(
  'pengunjung website UPT SMPN 1 Rantepao',
  'pengunjung website <%= (typeof profil !== "undefined" && profil && profil.nama_sekolah) ? profil.nama_sekolah : "SMAN 1 Makassar" %>'
);
c = c.replace(
  'Selamat Datang di Panel Pengelolaan SMPN 1 Rantepao',
  'Selamat Datang di Panel Pengelolaan <%= (typeof profil !== "undefined" && profil && profil.nama_sekolah) ? profil.nama_sekolah : "SMAN 1 Makassar" %>'
);
c = c.replace(
  "'Struktur Organisasi UPT SMP Negeri 1 Rantepao'",
  "'Struktur Organisasi UPT SMAN 1 Makassar'"
);
c = c.replace(
  /logo-smpn1-rantepao\.svg/g,
  'logo-sman1-makassar.png'
);
c = c.replace(
  "profil.wilayah_lokasi || 'Kec. Rantepao, Toraja Utara'",
  "profil.wilayah_lokasi || 'Kec. Bontoala, Kota Makassar'"
);
c = c.replace(
  'placeholder="Contoh: Kec. Rantepao, Toraja Utara"',
  'placeholder="Contoh: Kec. Bontoala, Kota Makassar"'
);
c = c.replace(
  /Panitia%20PPDB%20SMPN%201%20Rantepao/g,
  'Panitia%20PPDB%20SMAN%201%20Makassar'
);
c = c.replace(
  '<span>Panitia PPDB UPT SMPN 1 Rantepao</span>',
  '<span>Panitia PPDB UPT SMAN 1 Makassar</span>'
);
c = c.replace(
  'placeholder="Contoh: Siswa SMPN 1 Rantepao Raih Medali Emas OSN"',
  'placeholder="Contoh: Siswa SMAN 1 Makassar Raih Medali Emas OSN"'
);
c = c.replace(
  'name="lokasi" value="SMPN 1 Rantepao"',
  'name="lokasi" value="Kampus SMAN 1 Makassar"'
);
c = c.replace(
  'Sekretariat PPDB SMPN 1 Rantepao',
  'Sekretariat PPDB SMAN 1 Makassar'
);
c = c.replace(
  'placeholder="Contoh: SDN 1 Rantepao"',
  'placeholder="Contoh: SMP Negeri 6 Makassar"'
);
c = c.replace(
  "placeholder=\"Contoh: Kel. Malango', Kec. Rantepao\"",
  'placeholder="Contoh: Kel. Gaddong, Kec. Bontoala"'
);
c = c.replace(
  'PPDB%20SMPN%201%20Rantepao',
  'PPDB%20SMAN%201%20Makassar'
);

fs.writeFileSync('views/admin.ejs', c, 'utf8');
console.log('Successfully updated views/admin.ejs!');

