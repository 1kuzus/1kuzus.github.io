import {useLayoutEffect} from 'react';
import Katex from 'katex';
import {addOliIdx, setOliIdx} from '../BlogWrapper/BlogWrapper';
import './index.css';

export function Title(props) {
    const {children} = props;
    useLayoutEffect(() => {
        document.title = children;
    }, [children]);
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {href, children} = props;
    if (href)
        return (
            <h2 className="x-h1">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h2>
        );
    return <h2 className="x-h1">{children}</h2>;
}

export function H2(props) {
    const {href, children} = props;
    if (href)
        return (
            <h3 className="x-h2">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h3>
        );
    else return <h3 className="x-h2">{children}</h3>;
}

export function H3(props) {
    const {href, children} = props;
    if (href)
        return (
            <h4 className="x-h3">
                <a href={href} target="_blank" rel="noreferrer">
                    {children}
                </a>
            </h4>
        );
    return <h4 className="x-h3">{children}</h4>;
}

export function P(props) {
    /*
        `content`   行内高亮
        *content*   加粗
        $content$   行内公式
        @text[url]@ 超链接
    */
    const {withMarginTop = false, noMarginBottom = false, children = ''} = props;
    let htmlContent = Array.isArray(children) ? children.join('') : children;
    htmlContent = htmlContent
        .replace(/--- /g, '')
        .replace(/</g, '&#60;')
        .replace(/>/g, '&#62;')
        .replace(/\\\\/g, '&#92;')
        .replace(/\\`/g, '&#96;')
        .replace(/\\\*/g, '&#42;')
        .replace(/\\@/g, '&#64;')
        .replace(/\\\$/g, '&#36;')
        .replace(/\\n/g, '<br/>')
        .replace(/`(.*?)`/g, '<span class="x-inline-highlight">$1</span>')
        .replace(/\*(.*?)\*/g, '<span class="x-inline-strong">$1</span>')
        .replace(/@(.*?)\[(.*?)\]@/g, '<a href="$2" target="_blank" rel="noreferrer" class="x-inline-link">$1</a>')
        .replace(/\$(.*?)\$/g, (_, group1) => {
            return Katex.renderToString(group1, {
                output: 'html',
                strict: false,
            });
        });
    return (
        <p
            className={`x-p${withMarginTop ? ' with-margin-top' : ''}${noMarginBottom ? ' no-margin-bottom' : ''}`}
            dangerouslySetInnerHTML={{__html: htmlContent}}
        />
    );
}

export function Br() {
    return <div className="x-br" />;
}

export function Divider() {
    return <div className="x-divider" />;
}

export function Uli(props) {
    const {children} = props;
    return (
        <div className="x-uli">
            <div className="x-uli-marker">
                <div className="x-uli-marker-dot" />
            </div>
            <div className="x-uli-content-wrapper">{children}</div>
        </div>
    );
}

export function Oli(props) {
    const {reset, children} = props;
    return (
        <div className="x-oli">
            <div className="x-oli-number">{(reset !== undefined ? setOliIdx(+reset) : addOliIdx(1)) + '.'}</div>
            <div className="x-oli-content-wrapper">{children}</div>
        </div>
    );
}
