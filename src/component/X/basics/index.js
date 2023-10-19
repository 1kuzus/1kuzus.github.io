import Katex from 'katex';
import {SHA256Hash8} from '@/utils/SHA256Hash';
import {addOliIdx, setOliIdx} from '../BlogWrapper/BlogWrapper';
import './index.css';

export function Title(props) {
    const {children} = props;
    return <h1 className="x-title">{children}</h1>;
}

export function H1(props) {
    const {children} = props;
    return (
        <h2 id={SHA256Hash8('x-h1' + children)} className="x-h1">
            {children}
        </h2>
    );
}

export function H2(props) {
    const {children} = props;
    return (
        <h3 id={SHA256Hash8('x-h2' + children)} className="x-h2">
            {children}
        </h3>
    );
}

export function H3(props) {
    const {children} = props;
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

    htmlContent = htmlContent.replace(/--- /g, '');
    htmlContent = htmlContent.replace(/</g, '&#60;').replace(/>/g, '&#62;');
    htmlContent = htmlContent.replace(/\\\\/g, '&#92;');
    htmlContent = htmlContent.replace(/\\`/g, '&#96;');
    htmlContent = htmlContent.replace(/\\\*/g, '&#42;');
    htmlContent = htmlContent.replace(/\\@/g, '&#64;');
    htmlContent = htmlContent.replace(/\\\$/g, '&#36;');
    htmlContent = htmlContent.replace(/\\n/g, '<br/>');
    htmlContent = htmlContent.replace(/`(.*?)`/g, '<span class="x-inline-highlight">$1</span>');
    htmlContent = htmlContent.replace(/\*(.*?)\*/g, '<span class="x-inline-strong">$1</span>');
    htmlContent = htmlContent.replace(/@(.*?)\[(.*?)\]@/g, '<a href="$2" target="_blank" class="x-inline-link">$1</a>');
    htmlContent = htmlContent.replace(/\$(.*?)\$/g, (_, group1) => {
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
                <div className="x-uli-marker-dot"></div>
            </div>
            <div className="x-uli-content-wrapper">{children}</div>
        </div>
    );
}

export function Oli(props) {
    const {reset, children} = props;
    return (
        <div className="x-oli">
            <div className="x-oli-number">{(reset ? setOliIdx(1) : addOliIdx(1)) + '.'}</div>
            <div className="x-oli-content-wrapper">{children}</div>
        </div>
    );
}
