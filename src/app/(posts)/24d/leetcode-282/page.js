import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24d/leetcode-282/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.HighlightBlock>
                <X.P>原题链接：@给表达式添加运算符[https://leetcode.cn/problems/expression-add-operators/description/]@</X.P>
            </X.HighlightBlock>
            <X.CodeBlock
                language="js"
                code={`
                var addOperators = function (num, target) {
                    const ans = [];
                    const search = (i, M, C, val, expr) => {
                        if (i === -1) {
                            if (val === target) ans.push(expr);
                            return;
                        }
                        i && search(i - 1, M, num[i] + C, val, num[i] + expr); // .
                        if (C && num[i] === '0') return;
                        i && search(i - 1, M * (num[i] + C), '', val, '*' + num[i] + expr); // *
                        i && search(i - 1, 1, '', val - (num[i] + C) * M, '-' + num[i] + expr); // -
                        search(i - 1, 1, '', val + (num[i] + C) * M, (i ? '+' : '') + num[i] + expr); // +
                    };
                    search(num.length - 1, 1, '', 0, '');
                    return ans;
                };
                `}
            />
        </>
    );
}
