import {Children, isValidElement} from 'react';
import Katex from 'katex';
import X from 'src/component/X';
import TableMarkdown from 'src/component/X/Table/TableMarkdown';
import {assert} from 'src/utils/utils';

const components = {
    h2: ({children, href}) => <X.H1 href={href}>{children}</X.H1>,
    h3: ({children, href}) => <X.H2 href={href}>{children}</X.H2>,
    h4: ({children, href}) => <X.H3 href={href}>{children}</X.H3>,
    p: ({children}) => <p className="x-p">{children}</p>,
    hr: () => <X.Divider />,
    strong: ({children}) => <span className="x-inline-strong">{children}</span>,
    a: ({href, children}) => (
        <a href={href} target="_blank" rel="noreferrer" className="x-inline-link">
            {children}
        </a>
    ),
    code: ({className, children}) => {
        // $...$
        if (className?.includes('math-inline')) {
            const html = Katex.renderToString(children, {output: 'html', strict: false});
            return <span dangerouslySetInnerHTML={{__html: html}} />;
        }
        // `...`
        return <code className="x-inline-highlight">{children}</code>;
    },
    pre: ({children}) => {
        // $$...$$
        if (children.props.className.includes('math-display')) {
            return <X.Formula text={children.props.children.trim()} />;
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
    },
    blockquote: ({children, background}) => <X.HighlightBlock background={background}>{children}</X.HighlightBlock>,
    img: ({src, alt, width, themeAdaptive}) => (
        <X.Image src={src} alt={alt} width={width} themeAdaptive={themeAdaptive} />
    ),
    table: (props) => <TableMarkdown {...props} />,
    ul: ({children}) => {
        const items = Children.toArray(children).filter(isValidElement);
        return (
            <ul>
                {items.map((child, i) => (
                    <X.Uli key={i}>{child.props.children}</X.Uli>
                ))}
            </ul>
        );
    },
    ol: ({children}) => {
        const items = Children.toArray(children).filter(isValidElement);
        return (
            <ol>
                {items.map((child, i) => (
                    <X.Oli key={i} {...(i === 0 ? {reset: 1} : {})}>
                        {child.props.children}
                    </X.Oli>
                ))}
            </ol>
        );
    },
};

export function useMDXComponents() {
    return components;
}
