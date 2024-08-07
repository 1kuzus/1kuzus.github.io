import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/leetcode-65/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@有效数字[https://leetcode.cn/problems/valid-number/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>正则歪解一下。</X.P>
            <X.CodeBlock
                language="js"
                code={`
                /**
                 * @param {string} s
                 * @return {boolean}
                 */
                var isNumber = function(s) {
                    return /^[-+]?(\\d+(\\.)?\\d*|\\.\\d+)([eE][-+]?\\d+)?$/.test(s);
                };
                `}
            />
        </>
    );
}
