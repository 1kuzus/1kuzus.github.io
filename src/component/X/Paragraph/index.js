import Katex from 'katex';
import {assert, isStringOrStringArray} from 'src/utils/utils';
import './index.css';

export function XParser(children) {
    /*
        解析自定义的格式化语法，返回字符串形式的HTML。
        输入的React children应为字符串（子元素为纯文本）或字符串数组（子元素含有JSX形式的字符串值）。

        `content`   行内高亮
        *content*   加粗
        $content$   行内公式
        @text[url]@ 超链接
    */
    assert(isStringOrStringArray(children), 'children should be string or string array.');
    let htmlContent = Array.isArray(children) ? children.join('') : children;
    htmlContent = htmlContent
        .replace(/</g, '&#60;')
        .replace(/>/g, '&#62;')
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
    return htmlContent;
}

export function P(props) {
    const {children = ''} = props;
    return <p className="x-p" dangerouslySetInnerHTML={{__html: XParser(children)}} />;
}
