const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join('src', 'posts');
const DEST_DIR = 'public';
const PREFIX = /^\d{2}[a-d]$/;
const IMG_EXT = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

const toPosix = (p) => p.split(path.sep).join('/');

// 收集src/posts季度目录下所有图片的相对路径
function collectExpected() {
    const expected = new Set();
    for (const entry of fs.readdirSync(SRC_DIR, {recursive: true})) {
        const rel = toPosix(entry.toString());
        if (!PREFIX.test(rel.split('/')[0]) || !IMG_EXT.test(rel)) continue;
        if (fs.statSync(path.join(SRC_DIR, rel)).isFile()) expected.add(rel);
    }
    return expected;
}

function pruneEmptyDirs(dir) {
    for (const name of fs.readdirSync(dir)) {
        const sub = path.join(dir, name);
        if (fs.statSync(sub).isDirectory()) pruneEmptyDirs(sub);
    }
    if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}

function sync() {
    const expected = collectExpected();
    let copied = 0;
    let removed = 0;

    // 复制新增或更新的图片
    for (const rel of expected) {
        const from = path.join(SRC_DIR, rel);
        const to = path.join(DEST_DIR, rel);
        const destStat = fs.statSync(to, {throwIfNoEntry: false});
        if (!destStat || destStat.mtimeMs < fs.statSync(from).mtimeMs) {
            fs.mkdirSync(path.dirname(to), {recursive: true});
            fs.copyFileSync(from, to);
            copied++;
        }
    }

    // 删除源中已不存在的镜像文件，并清理空目录
    for (const name of fs.readdirSync(DEST_DIR)) {
        const quarterDir = path.join(DEST_DIR, name);
        if (!PREFIX.test(name) || !fs.statSync(quarterDir).isDirectory()) continue;
        for (const entry of fs.readdirSync(quarterDir, {recursive: true})) {
            const rel = `${name}/${toPosix(entry.toString())}`;
            const abs = path.join(DEST_DIR, rel);
            if (fs.statSync(abs).isFile() && !expected.has(rel)) {
                fs.rmSync(abs);
                removed++;
            }
        }
        pruneEmptyDirs(quarterDir);
    }

    console.log(`[syncPostAssets] mirrored ${expected.size} images (copied ${copied}, removed ${removed})`);
}

sync();

if (process.argv.includes('--watch')) {
    let timer = null;
    fs.watch(SRC_DIR, {recursive: true}, () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            try {
                sync();
            } catch (err) {
                console.error('[syncPostAssets]', err);
            }
        }, 100);
    });
    console.log(`[syncPostAssets] watching ${SRC_DIR}`);
}
