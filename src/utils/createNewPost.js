const fs = require('fs');
const path = require('path');
const {exit} = require('process');

const param = process.argv[2] || 'temp';
const date = new Date();
const ystr = (date.getFullYear() % 100).toString();
const m = date.getMonth();
const mstr = String.fromCharCode(97 + m / 3);

const postPath = `/${ystr + mstr}/${param}/`;
const dir = path.join('src', 'app', '(posts)', postPath);
const filePath = path.join(dir, 'page.js');

if (fs.existsSync(dir)) {
    console.log('\x1b[31m%s\x1b[0m', 'Path already exists.');
    exit(1);
}

const archives = require('../app/_archives.json');
const pad0 = (n) => (n < 10 ? '0' : '') + n;
fs.writeFileSync(
    'src/app/_archives.json',
    JSON.stringify(
        {
            [postPath]: {
                title: `Untitled__${param.replace('-', '_')}`,
                time: `${date.getFullYear()}-${pad0(m + 1)}-${pad0(date.getDate())}`,
            },
            ...archives,
        },
        null,
        4
    )
);
console.log(`Updated src/app/_archives.json`);

fs.mkdirSync(dir, {recursive: true});
const template = `import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '${postPath}';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
        </>
    );
}
`;
fs.writeFileSync(filePath, template);
console.log('%s \x1b[36m%s\x1b[0m', 'New post created at', filePath);
console.log("%s \x1b[36m'%s'\x1b[0m", 'postPath:', postPath);
