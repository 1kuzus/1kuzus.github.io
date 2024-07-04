import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/leetcode-65/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[pathname].blogtitle}</X.Title>
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
