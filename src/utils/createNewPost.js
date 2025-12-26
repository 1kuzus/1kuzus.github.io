const fs = require('fs');
const path = require('path');
const {exit} = require('process');

const param = process.argv[2] || 'temp';

const date = new Date();
const ystr = (date.getFullYear() % 100).toString();
const m = date.getMonth();
const mstr = String.fromCharCode(97 + m / 3);

const postPath = `/${ystr + mstr}/${param}/`;
const dir = path.join('src', 'posts', postPath);
const filePath = path.join(dir, 'index.js');

if (fs.existsSync(dir)) {
    console.log('\x1b[31m%s\x1b[0m', 'Path already exists.');
    exit(1);
}

const archivesPath = path.join('src', 'posts-indexing', 'archives.json');
const archives = JSON.parse(fs.readFileSync(archivesPath));
const pad0 = (n) => (n < 10 ? '0' : '') + n;
fs.writeFileSync(
    archivesPath,
    JSON.stringify(
        {
            [postPath]: {
                title: `Untitled__${param.replace('-', '_')}`,
                time: `${date.getFullYear()}-${pad0(m + 1)}-${pad0(date.getDate())}`,
                inactive: true,
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

export default function Post() {
    return (
        <>
            <X.H1>Hello.</X.H1>
        </>
    );
}
`;
fs.writeFileSync(filePath, template);
console.log('%s \x1b[36m%s\x1b[0m', 'New post created at', filePath);
console.log("%s \x1b[36m'%s'\x1b[0m", 'postPath:', postPath);
