const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, '..', 'views', 'partials', 'navbar.ejs');
let c = fs.readFileSync(navbarPath, 'utf8');

// 1. Adjust desktop nav spacing class for seamless fit on all laptops
c = c.replace(
    'class="hidden lg:flex items-center space-x-2.5 xl:space-x-3.5 2xl:space-x-5 text-xs font-semibold"',
    'class="hidden lg:flex items-center space-x-2 xl:space-x-3 2xl:space-x-4.5 text-[11.5px] xl:text-xs font-semibold"'
);

// 2. Insert Kalender Akademik next to Pengumuman in Desktop Nav
const targetDesktop = `<a href="/#pengumuman"
                        class="<%= currentActive === 'pengumuman' ? 'text-amber-400 font-bold py-1.5 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400' : 'text-slate-200 hover:text-amber-400 transition-colors py-1.5 relative group' %>">
                        Pengumuman
                        <% if (currentActive !=='pengumuman' ) { %><span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                            <% } %>
                    </a>`;

const replacementDesktop = `<a href="/#pengumuman"
                        class="<%= currentActive === 'pengumuman' ? 'text-amber-400 font-bold py-1.5 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400' : 'text-slate-200 hover:text-amber-400 transition-colors py-1.5 relative group' %>">
                        Pengumuman
                        <% if (currentActive !=='pengumuman' ) { %><span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                            <% } %>
                    </a>

                    <a href="/#kalender-akademik"
                        class="<%= currentActive === 'kalender-akademik' ? 'text-amber-400 font-bold py-1.5 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400' : 'text-slate-200 hover:text-amber-400 transition-colors py-1.5 relative group' %>">
                        Kalender Akademik
                        <% if (currentActive !=='kalender-akademik' ) { %><span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                            <% } %>
                    </a>`;

if (c.includes(targetDesktop)) {
    c = c.replace(targetDesktop, replacementDesktop);
    console.log('Desktop navbar updated with Kalender Akademik next to Pengumuman');
} else {
    // Try matching with regex for line-break tolerance
    const regexTarget = /<a href=\"\/#pengumuman\"[\s\S]*?<\/a>/;
    if (regexTarget.test(c)) {
        c = c.replace(regexTarget, replacementDesktop);
        console.log('Desktop navbar updated with regex!');
    } else {
        console.error('Failed to locate targetDesktop');
        process.exit(1);
    }
}

// 3. Also insert Kalender Akademik in Mobile Drawer next to Pengumuman
const targetMobile = `<!-- 6. Pengumuman -->
                <div class="py-2.5">
                    <a href="/#pengumuman" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'pengumuman' ? 'text-blue-950 font-bold' : '' %>">
                        Pengumuman
                    </a>
                </div>`;

const replacementMobile = `<!-- 6. Pengumuman -->
                <div class="py-2.5">
                    <a href="/#pengumuman" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'pengumuman' ? 'text-blue-950 font-bold' : '' %>">
                        Pengumuman
                    </a>
                </div>

                <!-- 7. Kalender Akademik -->
                <div class="py-2.5">
                    <a href="/#kalender-akademik" onclick="closeMobileDrawer()" class="block py-0.5 hover:text-blue-950 transition-colors <%= currentActive === 'kalender-akademik' ? 'text-blue-950 font-bold' : '' %>">
                        Kalender Akademik
                    </a>
                </div>`;

if (c.includes(targetMobile)) {
    c = c.replace(targetMobile, replacementMobile);
    console.log('Mobile drawer updated with Kalender Akademik next to Pengumuman');
} else {
    console.log('targetMobile not found directly, checking...');
}

fs.writeFileSync(navbarPath, c, 'utf8');
console.log('navbar.ejs written successfully!');

