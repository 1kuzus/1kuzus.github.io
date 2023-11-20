const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

console.log('--- Running afterBuild.js ---');
const routepathsAndFilepaths = fs
    .readFileSync(path.join('src', 'blogs', 'categories.js'), 'utf-8')
    .toString()
    .match(/import (.*?) from '(.*?)'/g)
    .map((i) => [i.split(' ')[1].toLowerCase(), i.split(' ')[3].replace(/'/g, '')]);
routepathsAndFilepaths.forEach(([routepath, filepath]) => {
    fs.mkdirSync(path.join('build', routepath));
    console.log(`writing ${path.join('build', routepath, 'index.html')}`);
    const rawBlogCode = fs.readFileSync(path.join('src', 'blogs', filepath, 'index.js'), 'utf-8');
    const noScriptCode = rawBlogCode
        .match(/<X.BlogWrapper>(.*?)<\/X.BlogWrapper>/s)[0]
        .replace(/<X.BlogWrapper>(.*?)<\/X.BlogWrapper>/gs, '<div>$1</div>')
        //固定替换或删除
        .replace(/<X.Br \/>/gs, '<br/>')
        .replace(/<X.Divider \/>/gs, '')
        .replace(/<X.Uli(.*?)>/gs, '')
        .replace(/<\/X.Uli>/gs, '')
        .replace(/<X.Oli(.*?)>/gs, '')
        .replace(/<\/X.Oli>/gs, '')
        .replace(/<X.Table(.*?)>(.*?)<\/X.Table>/gs, '<div>[TABLE]</div>')
        .replace(/<X.Table(.*?)\/>/gs, '<div>[TABLE]</div>')
        .replace(/<X.Image(.*?)\/>/gs, '<div>[IMAGE]</div>')
        .replace(/<X.HighlightBlock(.*?)>/gs, '<div>')
        .replace(/<\/X.HighlightBlock>/gs, '</div>')
        .replace(/<X.CodeBlock(.*?)code={`(.*?)[^\\]`}(.*?)\/>/gs, '<div>[CODEBLOCK]</div>')
        //仅标签
        .replace(/<X.Title>(.*?)<\/X.Title>/gs, '<h1>$1</h1>')
        .replace(/<X.H1>(.*?)<\/X.H1>/gs, '<h2>$1</h2>')
        .replace(/<X.H2(.*?)>(.*?)<\/X.H2>/gs, '<h3>$2</h3>')
        .replace(/<X.H3(.*?)>(.*?)<\/X.H3>/gs, '<h4>$2</h4>')
        .replace(/<X.FlexRow(.*?)>(.*?)<\/X.FlexRow>/gs, '<div>$2</div>')
        .replace(/<X.Formula\s*text="(.*?)"\s*\/>/gs, '$1')
        //段落
        .replace(
            /<X.P(.*?)>(.*?)<\/X.P>/gs,
            (_, _group1, group2) =>
                '<p>' +
                group2
                    .replace(/---/gs, '')
                    .replace(/\\\\/g, '[backslash]')
                    .replace(/\\`/g, '[backtick]')
                    .replace(/\\\*/g, '[star]')
                    .replace(/\\@/g, '[at]')
                    .replace(/\\\$/g, '[dollar]')
                    .replace(/\\n/g, '<br/>')
                    .replace(/{`(.*?)`}/g, '$1')
                    .replace(/`(.*?)`/g, '$1')
                    .replace(/\*(.*?)\*/g, '$1')
                    .replace(/@(.*?)\[(.*?)\]@/g, '<a href="$2" target="_blank">$1</a>') +
                '</p>'
        )
        //删除其他标签
        .replace(/<[A-Z](.*?)>(.*?)<\/[A-Z](.*?)>/gs, '')
        .replace(/<[A-Z](.*?)>/gs, '')
        //空格和换行
        .replace(/ {1,}/gs, ' ')
        .replace(/\n /gs, '')
        .replace(/\n/gs, '');
    const htmlCode = fs
        .readFileSync(path.join('build', 'index.html'), 'utf-8')
        .replace(/<div id="noscript"><\/div>/, `<noscript>${noScriptCode}</noscript>`);
    fs.writeFileSync(path.join('build', routepath, 'index.html'), htmlCode);
});

console.log('--- Updating build\\index.html ---');
const homepageLinks =
    '<ul>' +
    routepathsAndFilepaths
        .map(([routepath, filepath]) => `<li><a href="${routepath}" target="_blank">${filepath.split('/')[2]}</a></li>`)
        .join('') +
    '</ul>';
const htmlCode = fs
    .readFileSync(path.join('build', 'index.html'), 'utf-8')
    .replace(/<div id="noscript"><\/div>/, `<noscript>${homepageLinks}</noscript>`);
fs.writeFileSync(path.join('build', 'index.html'), htmlCode);

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
