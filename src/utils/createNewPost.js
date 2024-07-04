const fs = require('fs');
const path = require('path');
const {exit} = require('process');

const param = process.argv[2] || 'temp';
const date = new Date();
const ystr = (date.getFullYear() % 100).toString();
const mstr = String.fromCharCode(97 + date.getMonth() / 3);

const postPath = `/${ystr + mstr}/${param}/`;
const dir = path.join('src', 'app', '(blogs)', postPath);
const filePath = path.join(dir, 'page.js');

if (fs.existsSync(dir)) {
    console.log('Path already exists.');
    exit(1);
}
fs.mkdirSync(dir, {recursive: true});
const template = `import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '${postPath}';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[pathname].blogtitle}</X.Title>
        </>
    );
}
`;
fs.writeFileSync(filePath, template);

console.log(`New post created at ${filePath}.`);
console.log(`postPath: ${postPath}`);
