const fs = require('fs');
const path = require('path');
const {exit} = require('process');

const param = process.argv[2] || 'temp';
const isLongTime = process.argv[3] === 'longtime';

const date = new Date();
const ystr = (date.getFullYear() % 100).toString();
const m = date.getMonth();
const mstr = String.fromCharCode(97 + m / 3);

const postPath = `/${isLongTime ? 'longtime' : ystr + mstr}/${param}/`;
const dir = path.join('src', 'posts', postPath);
const filePath = path.join(dir, 'index.js');

if (fs.existsSync(dir)) {
    console.log('\x1b[31m%s\x1b[0m', 'Path already exists.');
    exit(1);
}

const archives = require('../app/_archives.json');
const pad0 = (n) => (n < 10 ? '0' : '') + n;
fs.writeFileSync(
    'src/app/_archives.json',
    JSON.stringify(
        isLongTime
            ? {
                  ...archives,
                  [postPath]: {
                      title: `Untitled__${param.replace('-', '_')}`,
                  },
              }
            : {
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
