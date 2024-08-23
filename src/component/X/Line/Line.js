import Katex from 'katex';
import './Line.css';

export default function L(props) {
    /*
        `content`   行内高亮
        *content*   加粗
        $content$   行内公式
        @text[url]@ 超链接
    */
    const {children = '', classNames = []} = props;
    let htmlContent = Array.isArray(children) ? children.join('') : children;
    htmlContent = htmlContent
        // .replace(/</g, '&#60;')
        // .replace(/>/g, '&#62;')
        .replace(/\\\\/g, '&#92;')
        .replace(/\\`/g, '&#96;')
        .replace(/\\\*/g, '&#42;')
        .replace(/\\@/g, '&#64;')
        .replace(/\\\$/g, '&#36;')
        .replace(/\$(.*?)\$/g, (_, group1) => {
            return Katex.renderToString(group1, {
                output: 'html',
                strict: false,
            });
        })
        .replace(/\\n/g, '<br/>')
        .replace(/`(.*?)`/g, '<code class="x-inline-highlight">$1</code>')
        .replace(/\*(.*?)\*/g, '<span class="x-inline-strong">$1</span>')
        .replace(
            /@(.*?)\[(.*?)\]@/g,
            (_, group1, group2) =>
                `<a href="${group2}" target="_blank" rel="noreferrer" class="x-inline-link">${group1 || group2}</a>`
        );
    return <p className={['x-l', ...classNames].join(' ')} dangerouslySetInnerHTML={{__html: htmlContent}} />;
}
