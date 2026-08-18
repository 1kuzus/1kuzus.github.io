const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join('src', 'posts');
const DEST_DIR = 'public';
const PREFIX = /^\d{2}[a-d]$/;

const toPosix = (p) => p.split(path.sep).join('/');

// 先清空 public 下的季度镜像，再从 src/posts 全量拷贝
for (const name of fs.readdirSync(DEST_DIR)) {
    if (!PREFIX.test(name)) continue;
    const dir = path.join(DEST_DIR, name);
    if (fs.statSync(dir).isDirectory()) fs.rmSync(dir, {recursive: true});
}

let copied = 0;
for (const entry of fs.readdirSync(SRC_DIR, {recursive: true})) {
    const rel = toPosix(entry.toString());
    if (!PREFIX.test(rel.split('/')[0]) || !/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(rel)) continue;
    const from = path.join(SRC_DIR, rel);
    if (!fs.statSync(from).isFile()) continue;
    const to = path.join(DEST_DIR, rel);
    fs.mkdirSync(path.dirname(to), {recursive: true});
    fs.copyFileSync(from, to);
    copied++;
}

console.log(`[syncPostAssets] mirrored ${copied} images`);
