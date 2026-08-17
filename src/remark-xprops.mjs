export default function remarkXProps() {
    // 解析 @xprops 注释体里的 key=value / flag 为 props 对象
    const parseProps = (raw) => {
        const acc = {};
        const re = /([\w-]+)=(?:"([^"]*)"|'([^']*)'|([\S]+))|([\w-]+)/g;
        let m;
        // m[1]           - 键
        // m[2]/m[3]/m[4] - 双引号、单引号、无引号的值
        // m[5]           - 布尔flag
        while ((m = re.exec(raw)) !== null) {
            if (m[1]) acc[m[1]] = m[2] ?? m[3] ?? m[4];
            else if (m[5]) acc[m[5]] = true;
        }
        return acc;
    };

    // 对一个 children 数组就地处理：匹配注释 -> 合并 props 到下一个兄弟 -> 删除注释
    const processChildren = (nodes) => {
        let i = 0;
        while (i < nodes.length) {
            const node = nodes[i];
            if (Array.isArray(node.children)) processChildren(node.children);
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
                // 图片独占一行时，将 props 挂到内层 image 节点
                if (target.type === 'paragraph' && target.children?.length === 1 && target.children[0].type === 'image')
                    target = target.children[0];
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
