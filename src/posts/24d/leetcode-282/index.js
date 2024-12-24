import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.HighlightBlock>
                <X.P>原题链接：@给表达式添加运算符[https://leetcode.cn/problems/expression-add-operators/description/]@</X.P>
            </X.HighlightBlock>
            <X.P>看了很多其他题解的思路，都是去处理乘法和加减法的优先级关系，并且在DFS函数中通过循环的方式处理“不添加符号”的情况。在本思路中，认为题目中存在三种优先级的运算，即拼接（也就是不添加字符的情况）、乘法、加法；此时每一位单独的数字都是一个运算数，只需要考虑这四种运算符的情况，而不需要再枚举不同长度的数字串。</X.P>
            <X.P>该思路的核心是*【搜索到低优先级的运算时，要“结算”高优先级的运算】*。请看下面一个例子：</X.P>
            <X.HighlightBlock background="gray">
                <X.P>这个例子先考虑字符之间必须添加乘号或加减号的情况，此时只有两种优先级的运算。这个例子列举的是搜索过程中可能出现的一条路径。</X.P>
                <X.P>假设`num`为`"123456"`，表格中的`val`代表当前表达式*已经可以确定*的部分的值，`M`代表尚未确定的部分，这个例子中就是乘积的中间结果。</X.P>
                <X.Divider />
                <X.Table
                    fromText={`
                    当前表达式|'val'|'M'
                    （初始值）空|'0'|'1'
                    '+ 6'|'6'|'1'
                    '+ 5 + 6'|'6 + 5 = 11'|'1'
                    '* 4 + 5 + 6'|'11'|'4'
                    '\\* 3 \\* 4 + 5 + 6'|'11'|'4 * 3 = 12'
                    '- 2 \\* 3 \\* 4 + 5 + 6'|'11 - 2*12 = -13'|'1'
                    '1 - 2 \\* 3 \\* 4 + 5 + 6'|'-12'|'1'
                    `}
                />
                <X.P>“结算”发生在搜索到`- 2`时，减法是低优先级的运算，而高优先级的运算乘法还有中间结果；减法是最低优先级的运算，此时表达式的全部值都可以确定，因此更新`val`并恢复`M`至初值`1`。</X.P>
            </X.HighlightBlock>
            <X.P>在本题中，允许不添加符号，本质上是一种比乘法优先级还高的运算：连接。和乘法一样，高优先级的连接运算在“没结算”时同样需要记录中间结果。</X.P>
            <X.HighlightBlock background="gray">
                <X.P>这个例子列举的同样是搜索过程中可能出现的一条路径，但是与题目要求一样，可以不添加字符（在这个思路中应理解为新增了连接运算）。</X.P>
                <X.P>假设`num`为`"123456"`，用`C`表示连接的中间结果，用`.`表示连接运算。</X.P>
                <X.Divider />
                <X.Table
                    fromText={`
                    当前表达式|'val'|'M'|'C'|补充说明
                    （初始值）空|'0'|'1'|'""'|
                    '* 6'|'0'|'6'|'""'|
                    '. 5 * 6'|'0'|'6'|'"5"'|'5'前不添加运算符
                    '\\* 4 . 5 \\* 6'|'0'|'45 * 6 = 270'|'""'|遇到更低优先级的'* 4'，可以结算连接运算
                    '. 3 \\* 4 . 5 \\* 6'|'0'|'270'|'"3"'|
                    '+ 2 . 3 \\* 4 . 5 \\* 6'|'0'|'23 * 270 = 6210'|'""'|遇到最低优先级的'+ 2'，优先级从高至低结算\\n第一步，先结算连接运算
                    |'6210'|'1'|'""'|第二步，结算乘法，然后可以更新'val'的值\\n
                    '1 + 2 . 3 \\* 4 . 5 \\* 6'|'6211'|'1'|'""'|
                    `}
                />
                <X.P>某种意义上，`val`也可以视作加减法的中间结果；只不过加减法是最低优先级，所以遇到加减法时就可以直接更新截至目前表达式的结果`val`。</X.P>
            </X.HighlightBlock>
            <X.P>JavaScript的语言特性可以很优雅的处理字符串与数字的转换。在边界处理上，这里的思路是，对于第一个数字，相当于强制其前面只能添加加号。对于不能出现前导`0`的要求，这里的处理是，当出现了一个`"0"`与非空的`C`时，就意味着会出现`"0xxx"`的中间数值，此时不允许前面再添加`+`/`-`/`*`，只能再连接其他数字。</X.P>
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
