const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

console.log('--- Running afterBuild.js ---');
const routepathsAndFilepaths = fs
    .readFileSync(path.join('src', 'blogs', 'categories.js'), 'utf-8')
    .toString()
    .match(/import (.*?) from '(\..*?)'/g)
    .map((i) => [i.split(' ')[1].toLowerCase(), i.split(' ')[3].replace(/'/g, '')]);

console.log('Writing sitemap.xml');
const sitemapStream = new sitemap.SitemapStream({hostname: 'https://1kuzus.github.io'});
const dateString = new Date().toISOString();
sitemapStream.write({url: '/', lastmod: dateString});
routepathsAndFilepaths.forEach(([routepath, _]) => {
    sitemapStream.write({url: '/' + routepath + '/', lastmod: dateString});
});
sitemapStream.end();
const writeStream = fs.createWriteStream(path.join('build', 'sitemap.xml'));
sitemap
    .streamToPromise(sitemapStream)
    .then((data) => data.toString())
    .then((xml) => {
        writeStream.write(xml);
        writeStream.end();
    });
