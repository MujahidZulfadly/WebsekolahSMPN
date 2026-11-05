const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, '..', 'views', 'partials', 'navbar.ejs');
let c = fs.readFileSync(navbarPath, 'utf8');

const targetRegex = /<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\s*<div class="flex justify-between items-center h-20">\s*<!-- School Brand \/ Logo -->[\s\S]*?<\/a>/;

const replacement = `<div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 sm:h-20">

                <!-- School Brand / Logo -->
                <a href="/" class="flex items-center space-x-2.5 sm:space-x-3.5 group flex-shrink-0">
                    <div
                        class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-blue-950 text-xl sm:text-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/20 flex-shrink-0 border border-white/30 overflow-hidden p-1 shrink-0">
                        <% if (profilData && profilData.logo_sekolah) { %>
                            <img src="/uploads/profil/<%= profilData.logo_sekolah %>" alt="Logo <%= profilData.nama_sekolah || 'SMPN 1 Rantepao' %>" class="w-full h-full object-contain" onerror="this.onerror=null; this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');">
                            <span class="hidden">S1</span>
                        <% } else { %>
                            <span>S1</span>
                        <% } %>
                    </div>
                    <div class="min-w-0">
                        <h1
                            class="font-black text-xs xs:text-sm sm:text-base md:text-lg leading-tight tracking-tight text-white group-hover:text-amber-400 transition-colors truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none">
                            <%= profilData.nama_sekolah || 'SMPN 1 RANTEPAO' %>
                        </h1>
                        <p class="text-[9.5px] xs:text-[10.5px] sm:text-xs text-amber-400 font-medium truncate max-w-[170px] xs:max-w-[220px] sm:max-w-none">
                            Kab. Toraja Utara • Akreditasi <%= profilData.akreditasi || 'A' %>
                        </p>
                    </div>
                </a>`;

if (targetRegex.test(c)) {
    c = c.replace(targetRegex, replacement);
    fs.writeFileSync(navbarPath, c, 'utf8');
    console.log('navbar.ejs mobile header updated successfully!');
} else {
    console.log('targetRegex did not match');
}

