const fs = require('fs');
const path = require('path');

console.log('--- Running afterBuild.js ---');
const code = fs.readFileSync(path.join('src', 'blogs', 'categories.js'), 'utf-8').toString();
const pathnames = code.match(/'\/b(.*?)\/'/g).map((pathname) => pathname.slice(2, -1));
pathnames.forEach((pathname) => {
    fs.mkdir(path.join('build', pathname), (err) => {
        if (err) {
            throw err;
        }
        fs.copyFile(path.join('build', 'index.html'), path.join('build', pathname, 'index.html'), (err) => {
            if (err) {
                throw err;
            }
            console.log(`copy index.html to ${pathname}\\index.html`);
        });
    });
});
