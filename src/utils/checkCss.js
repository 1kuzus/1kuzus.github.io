const fs = require('fs');
const path = require('path');

const propertyOrderList = [
    'box-sizing',
    'display',
    'content',

    //flex系列
    'flex-direction',
    'justify-content',
    'align-items',
    'gap',
    'align-self',
    'flex',
    'flex-grow',

    //grid系列
    'grid-row',
    'grid-template-rows',

    //position系列
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',

    //column系列
    'columns',
    'column-count',
    'column-gap',
    'column-fill',

    //宽高、内外边距系列
    'width',
    'min-width',
    'max-width',
    'height',
    'min-height',
    'max-height',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',

    //排版相关
    'line-height',
    'font-size',
    'font-weight',
    'font-family',
    'letter-spacing',
    'white-space',
    'word-break',
    'text-align',
    'text-overflow',
    'box-decoration-break',
    '-webkit-box-decoration-break',

    //overflow系列
    'overflow',
    'overflow-x',
    'overflow-y',

    //color
    'color',

    //border系列
    'border',
    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',
    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',
    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',
    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-collapse',
    'border-spacing',

    //其他
    'fill',
    'background',
    'background-color',
    'backdrop-filter',
    'filter',
    'box-shadow',
    'opacity',
    'transform',
    'object-fit',
    'cursor',
    'user-select',
    'pointer-events',
    'transition',
    'animation',
];

const blacklist = ['src/app/globals.css', 'src/assets/styles/katex.css', 'src/assets/styles/fonts.css'];

console.log('--- Running checkCss.js ---');
function findCssFiles(dir) {
    const cssFiles = [];
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) cssFiles.push(...findCssFiles(filePath));
        else if (file.endsWith('.css') && !blacklist.includes(filePath)) cssFiles.push(filePath);
    });
    return cssFiles;
}

const cssFiles = [
    // ...findCssFiles(path.join('src', 'app', '(posts)')),
    // ...findCssFiles(path.join('src', 'component')),
    ...findCssFiles('src'),
];
console.log(`find ${cssFiles.length} css files`);

cssFiles.forEach((cssFile) => {
    const cssContent = fs.readFileSync(cssFile, 'utf-8');
    const selectorAndProperties = cssContent
        .replace(/\/\*(.*?)\*\//g, '')
        .split('}')
        .filter((i) => i.includes('{'))
        .map((i) => {
            const spt = i.split('{');
            const len = spt.length;
            return {
                selector: spt[len - 2].trim(),
                properties: spt[len - 1]
                    .split(';')
                    .map((j) => j.trim())
                    .filter((j) => j),
            };
        });
    selectorAndProperties.forEach(({selector, properties}) => {
        const propertyNames = properties.map((i) => i.split(':')[0]);
        const propertyIndices = [];
        propertyNames.forEach((propertyName) => {
            const idx = propertyOrderList.indexOf(propertyName);
            if (idx !== -1) propertyIndices.push(idx);
            else if (propertyName.slice(0, 2) !== '--')
                // 排除css变量
                console.log(`[*] 在 ${cssFile} 中发现未定义次序的属性${propertyName}`);
        });
        if (!propertyIndices.every((i, idx) => !idx || i >= propertyIndices[idx - 1])) {
            console.log(`\n[*] 在 ${cssFile} 中：`);
            console.log(`selector:\n${selector}`);
            console.log('属性次序:', propertyIndices);
        }
    });
});
