const fs = require('fs');
const path = require('path');

console.log('--- Running showUrls.js ---');
const sitemap = fs.readFileSync(path.join('out', 'sitemap.xml'), 'utf-8');

const urls = sitemap.match(/<loc>(.*?)<\/loc>/g).map((i) => i.slice(5, -6));
urls.sort();

console.log(urls);
