export default function remarkXProps() {
    // 解析 @xprops 注释体里的 key=value / flag 为 props 对象
    const parseProps = (raw) =>
        raw
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

            let props;
            try {
                props = parseProps(match[1]);
            } catch {
                i++;
                continue;
            }

            if (i + 1 < nodes.length) {
                // xx
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

    // 将 remark-gfm 解析出的 table.align 数组传播到每个 tableCell 的 hProperties.align，
    // 使对齐信息能抵达最终渲染的 <td> props。
    const propagateGfmAlignToCells = (nodes) => {
        for (const node of nodes) {
            if (Array.isArray(node.children)) {
                propagateGfmAlignToCells(node.children);
            }
            if (node.type !== 'table' || !Array.isArray(node.align)) continue;
            for (const tr of node.children) {
                if (tr.type !== 'tableRow') continue;
                tr.children.forEach((td, td_index) => {
                    if (td.type !== 'tableCell') return;
                    const a = node.align[td_index];
                    if (!a) return;
                    if (!td.data) td.data = {};
                    if (!td.data.hProperties) td.data.hProperties = {};
                    td.data.hProperties.align = a;
                });
            }
        }
    };

    return (tree) => {
        processChildren(tree.children);
        propagateGfmAlignToCells(tree.children);
    };
}
