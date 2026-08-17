export default function remarkXProps() {
    // 解析 @xprops 注释体里的 key=value / flag 为 props 对象
    const parseProps = (raw) => {
        const acc = {};
        const re = /([\w-]+)=(?:"([^"]*)"|'([^']*)'|([\S]+))|([\w-]+)/g;
        let m;
        while ((m = re.exec(raw)) !== null) {
            if (m[1]) {
                acc[m[1]] = m[2] ?? m[3] ?? m[4];
            } else if (m[5]) {
                acc[m[5]] = true;
            }
        }
        return acc;
    };

    // 对一个 children 数组就地处理：匹配注释 -> 合并 props 到下一个兄弟 -> 删除注释。
    // 同时递归进入每个节点的子节点，以支持列表项等嵌套结构。
    const processChildren = (nodes) => {
        let i = 0;
        while (i < nodes.length) {
            const node = nodes[i];

            // 先递归处理嵌套子节点（如 listItem、blockquote 内部）
            if (Array.isArray(node.children)) {
                processChildren(node.children);
            }

            if (node.type !== 'html') {
                i++;
                continue;
            }

            const match = node.value.trim().match(/^<!--\s*@xprops\s+([\s\S]*?)-->\s*$/);
            if (!match) {
                i++;
                continue;
            }

            const props = parseProps(match[1]);

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

    return (tree) => {
        processChildren(tree.children);
    };
}
