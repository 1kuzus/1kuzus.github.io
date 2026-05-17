/**
 * Remark plugin: 把紧靠目标块上方的 HTML 注释里的 JSON 合并为该块的 hProperties。
 *
 * 写法：
 *   <!-- @xprops title="fib.js" highlightLines="2-4" -->
 * 任何 Markdown 查看器（GitHub、VS Code）都直接忽略注释，Next.js 构建时解析出 props 透传给组件。
 */
export default function remarkXProps() {
    return (tree) => {
        const nodes = tree.children;
        // console.log("==========================")
        // console.log(JSON.stringify(nodes))
        // console.log("==========================")
        let i = 0;
        while (i < nodes.length) {
            const node = nodes[i];
            if (node.type !== 'html') {
                i++;
                continue;
            }

            const match = node.value.trim().match(/^<!--\s*@xprops\s+([\s\S]*?)-->\s*$/);
            if (!match) {
                i++;
                continue;
            }

            let props;
            try {
                props = match[1]
                    .trim()
                    .split(/\s+/)
                    .reduce((acc, item) => {
                        if (item.includes('=')) {
                            const [key, value] = item.split('=');
                            acc[key] = value.trim().replace(/^['"]|['"]$/g, '');
                        } else {
                            acc[item] = true;
                        }
                        return acc;
                    }, {});
            } catch {
                i++;
                continue;
            }

            if (i + 1 < nodes.length) {
                let target = nodes[i + 1];
                // 图片独占一行时，将 props 挂到内层 image 节点（而非外层 paragraph）
                if (
                    target.type === 'paragraph' &&
                    target.children?.length === 1 &&
                    target.children[0].type === 'image'
                ) {
                    target = target.children[0];
                }
                if (!target.data) target.data = {};
                if (!target.data.hProperties) target.data.hProperties = {};
                Object.assign(target.data.hProperties, props);
            }

            nodes.splice(i, 1);
        }
    };
}
