const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

console.log('--- Running afterBuild.js ---');

const routepathsAndFilepaths = fs
    .readFileSync(path.join('src', 'blogs', 'categories.js'), 'utf-8')
    .toString()
    .match(/import (.*?) from '(.*?)'/g)
    .map((i) => [i.split(' ')[1].toLowerCase(), i.split(' ')[3].replace(/'/g, '')]);

// routepathsAndFilepaths.forEach(([routepath, filepath]) => {
//     fs.mkdir(path.join('build', routepath), (err) => {
//         if (err) throw err;
//         const dasta = fs.readFileSync(path.join('src', 'blogs', filepath, 'index.js'), 'utf-8');
//         console.log(dasta);
//         fs.copyFile(path.join('build', 'index.html'), path.join('build', routepath, 'index.html'), (err) => {
//             if (err) throw err;
//             console.log(`copy index.html to ${routepath}\\index.html`);
//         });
//     });
// });

routepathsAndFilepaths.forEach(([routepath, filepath]) => {
    let srcBlogCode = fs.readFileSync(path.join('src', 'blogs', filepath, 'index.js'), 'utf-8');
    srcBlogCode = srcBlogCode
        .match(/<X.BlogWrapper>(.*?)<\/X.BlogWrapper>/s)[0]
        .replace(/<X.BlogWrapper>(.*?)<\/X.BlogWrapper>/gs, '<div>$1</div>')
        //删除
        .replace(/<X.Divider \/>/gs, '')
        //固定替换
        .replace(/<X.Table(.*?)\/>/gs, '<div>[TABLE]</div>')
        .replace(/<X.Table(.*?)>(.*?)<\/X.Table>/gs, '<div>[TABLE]</div>')
        .replace(/<X.Image(.*?)\/>/gs, '<div>[IMAGE]</div>')
        .replace(/<X.Br \/>/gs, '<br/>')
        //仅标签
        .replace(/<X.Title>(.*?)<\/X.Title>/gs, '<h1>$1</h1>')
        .replace(/<X.H1>(.*?)<\/X.H1>/gs, '<h2>$1</h2>')
        .replace(/<X.H2>(.*?)<\/X.H2>/gs, '<h3>$1</h3>')
        .replace(/<X.H3>(.*?)<\/X.H3>/gs, '<h4>$1</h4>')
        .replace(/<X.Uli(.*?)>(.*?)<\/X.Uli>/gs, '$2')
        .replace(/<X.Oli(.*?)>(.*?)<\/X.Oli>/gs, '$2')
        .replace(/<X.Formula\s*text="(.*?)"\s*\/>/gs, '$1')
        //段落
        .replace(
            /<X.P(.*?)>(.*?)<\/X.P>/gs,
            (_, _group1, group2) =>
                '<p>' +
                group2
                    .replace(/---/gs, '')
                    .replace(/\\\\/g, '&#92;')
                    .replace(/\\`/g, '&#96;')
                    .replace(/\\\*/g, '&#42;')
                    .replace(/\\@/g, '&#64;')
                    .replace(/\\n/g, '<br/>')
                    .replace(/{`(.*?)`}/g, '$1')
                    .replace(/`(.*?)`/g, '$1')
                    .replace(/\*(.*?)\*/g, '$1')
                    .replace(/@(.*?)\[(.*?)\]@/g, '<a href="$2" target="_blank">$1</a>') +
                '</p>'
        );
    console.log(srcBlogCode);
});

console.log('--- Writing sitemap.xml ---');
const sitemapStream = new sitemap.SitemapStream({hostname: 'https://1kuzus.github.io'});
routepathsAndFilepaths.forEach(([routepath, _]) => {
    sitemapStream.write({url: '/' + routepath, lastmod: new Date()});
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
