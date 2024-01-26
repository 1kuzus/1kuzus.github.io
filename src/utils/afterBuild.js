const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

console.log('--- Running afterBuild.js ---');
const routes = fs
    .readFileSync(path.join('src', 'blogs', 'categories.js'), 'utf-8')
    .toString()
    .match(/import (.*?) from '(\..*?)'/g)
    .map((i) => i.split(' ')[3].slice(2, -1));

console.log('Writing sitemap.xml');
const sitemapStream = new sitemap.SitemapStream({hostname: 'https://1kuzus.github.io'});
sitemapStream.write({url: '/', lastmod: new Date().toISOString()});
routes.forEach((route) => {
    stats = fs.statSync(path.join('src', 'blogs', route, 'index.js'));
    sitemapStream.write({url: route + '/', lastmod: stats.mtime});
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
