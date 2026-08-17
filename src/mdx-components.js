import {Children, isValidElement} from 'react';
import Katex from 'katex';
import X from 'src/component/X';
import TableMarkdown from 'src/component/X/Table/TableMarkdown';
import {assert} from 'src/utils/utils';

function A({href, children}) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="x-inline-link">
            {children}
        </a>
    );
}
function Img({src, alt, width, themeAdaptive}) {
    return <X.Image src={src} alt={alt} width={width} themeAdaptive={themeAdaptive} />;
}
function Code({className, children}) {
    // $...$
    if (className?.includes('math-inline')) {
        const html = Katex.renderToString(children, {output: 'html', strict: false});
        return <span dangerouslySetInnerHTML={{__html: html}} />;
    }
    // `...`
    return <code className="x-inline-highlight">{children}</code>;
}
function Strong({children}) {
    return <span className="x-inline-strong">{children}</span>;
}
function P({children}) {
    return <p className="x-p">{children}</p>;
}
function H2({children, href}) {
    return <X.H1 href={href}>{children}</X.H1>;
}
function H3({children, href}) {
    return <X.H2 href={href}>{children}</X.H2>;
}
function H4({children, href}) {
    return <X.H3 href={href}>{children}</X.H3>;
}
function Hr() {
    return <X.Divider />;
}
function Pre({children, alignLeft}) {
    // $$...$$
    if (children.props.className.includes('math-display')) {
        return <X.Formula text={children.props.children.trim()} alignLeft={alignLeft} />;
    }
    // ```...```
    assert(children.props.className.startsWith('language-'), 'invalid <pre> element');
    const language = children.props.className.replace('language-', '');
    return (
        <X.CodeBlock
            language={language}
            code={children.props.children.trim()}
            title={children.props.title}
            highlightLines={children.props.highlightLines}
            diffRemovedLines={children.props.diffRemovedLines}
            diffAddedLines={children.props.diffAddedLines}
        />
    );
}
function Blockquote({children, background}) {
    return <X.HighlightBlock background={background}>{children}</X.HighlightBlock>;
}
function Table(props) {
    return <TableMarkdown {...props} />;
}
function Ul({children}) {
    const items = Children.toArray(children).filter(isValidElement);
    return (
        <ul>
            {items.map((child, i) => (
                <X.Uli key={i}>{normalizeLiChildren(child.props.children)}</X.Uli>
            ))}
        </ul>
    );
}
function Ol({children, start}) {
    const items = Children.toArray(children).filter(isValidElement);
    return (
        <ol style={start !== undefined ? {counterReset: `oli ${start - 1}`} : undefined}>
            {items.map((child, i) => (
                <X.Oli key={i}>{normalizeLiChildren(child.props.children)}</X.Oli>
            ))}
        </ol>
    );
}

const BLOCK_TYPES = new Set([P, H2, H3, H4, Hr, Pre, Blockquote, Table, Ul, Ol]); // li的children中可能出现的块级映射组件

// 将li的children中连续的行内片段（紧凑列表的文本、行内代码、公式等）包装为<p>，使列表项内容器的子节点全部是块级元素
function normalizeLiChildren(children) {
    const nodes = Children.toArray(children);
    const result = [];
    let inlineRun = [];
    const flush = () => {
        const isBlank = inlineRun.every((node) => typeof node === 'string' && !node.trim());
        if (!isBlank) {
            result.push(
                <p className="x-p" key={`p-${result.length}`}>
                    {inlineRun}
                </p>,
            );
        }
        inlineRun = [];
    };
    for (const node of nodes) {
        if (isValidElement(node) && BLOCK_TYPES.has(node.type)) {
            flush();
            result.push(node);
        } else {
            inlineRun.push(node);
        }
    }
    flush();
    return result;
}

const components = {
    a: A,
    img: Img,
    code: Code,
    strong: Strong,
    p: P,
    h2: H2,
    h3: H3,
    h4: H4,
    hr: Hr,
    pre: Pre,
    blockquote: Blockquote,
    table: Table,
    ul: Ul,
    ol: Ol,
};

export function useMDXComponents() {
    return components;
}
