/**
 * 文章图片的构建期静态导入，md与js两套写法共用本文件：
 * - default导出：webpack loader（enforce: 'pre'，仅作用于src/posts下的index.js文章），
 *   将<X.Image src="foo.jpg" />中相对路径的字符串字面量src改写为模块顶部的静态import。
 * - 具名导出rehypeImageQuery：rehype插件（须置于rehype-mdx-import-media之前），
 *   给md文章中相对路径图片的src追加query，随后由rehype-mdx-import-media
 *   原样保留进import语句（preserveQuery默认'import'）。
 *
 * 两者均在import路径上追加?x-post-image查询串，使图片模块的resource不以图片扩展名结尾，
 * 绕过Next将server模块图中的图片一律收集为client entry的行为
 * （见next内部isClientComponentEntryModule的imageRegex），
 * 避免全站图片元数据被聚合进[...slug]路由的client bundle。
 * 文章源文件与写法保持不变，仅构建期转换；外链与绝对路径(http://、https://、//、/)不转换，
 * 保持字符串交由X.Image组件处理。
 */

const QUERY = '?x-post-image';
const EXTERNAL_SRC = /^(https?:)?\//i;

// for []: xxx
export function rehypeImageQuery() {
    const walk = (node) => {
        if (node.tagName === 'img') {
            const src = node.properties?.src;
            if (typeof src === 'string' && src && !EXTERNAL_SRC.test(src) && !src.includes('?')) {
                node.properties.src = src + QUERY;
            }
        }
        if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    return (tree) => {
        walk(tree);
    };
}

// for []: xxx
export default function xImageImportLoader(source) {
    const imports = [];
    const idBySrc = new Map();
    const transformed = source.replace(/(<X\.Image\b[^>]*?)src="([^"]+)"/g, (match, prefix, src) => {
        if (EXTERNAL_SRC.test(src)) return match;
        let id = idBySrc.get(src);
        if (id === undefined) {
            id = `__xImageImport${idBySrc.size}`;
            idBySrc.set(src, id);
            imports.push(`import ${id} from './${src}${QUERY}';`);
        }
        return `${prefix}src={${id}}`;
    });
    if (imports.length === 0) return source;
    return imports.join('\n') + '\n' + transformed;
}
