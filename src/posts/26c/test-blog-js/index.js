import X from 'src/component/X';

const img = '/26c/test-blog/small.gif';
const wide = '/26c/test-blog/wide.png';

export default function Post() {
    return (
        <>
            <X.P>
                本页覆盖 `index.js` 旧渲染管线：`X.P` / `X.Uli` / `X.Oli` / `X.Table` 的 `XParser`，以及 markdown
                触达不到的 `X.FlexRow` / `X.FlexCol` / `X.Oli reset` / `fromText` / `fromData`。
            </X.P>

            <X.H1>一、XParser 行内语法</X.H1>
            <X.P>
                普通段落：`行内代码`、*加粗*、公式 $E = mc^2$、链接 @example[https://example.com]@、空文本链接
                @[https://example.com/bare]@、以及用反斜杠 n 换行的下一行。line1\nline2
            </X.P>
            <X.P>
                JSX 文本不是 JS 字符串，转义只需一层反斜杠：\`not-code\`、\*not-bold\*、\$100、\@not-link[x]@、反斜杠
                \\。尖括号必须放进 JS 字符串，否则会被当成 JSX 标签：{'`<script>alert(1)</script>`'}。
            </X.P>
            <X.P>
                未转义的既定陷阱：`code with *stars* inside` 里的星号仍会被二次加粗；3 * 4 * 5 中间会加粗；售价 $5 涨到 $10
                会把中间吃成公式。
            </X.P>
            <X.P>转义后应保持字面：3 \* 4 \* 5，售价 \$5 涨到 \$10。</X.P>
            <X.P>
                混合 children：前半是字符串，公式反斜杠必须写在 JS 字符串里（{`$\\alpha + \\beta$`}），再接`代码`。
            </X.P>

            <X.H1 href="https://github.com">二、标题（带外链）</X.H1>
            <X.H2 href="https://nextjs.org">二级标题外链</X.H2>
            <X.H3 href="https://react.dev">三级标题外链</X.H3>
            <X.H1>普通一级标题</X.H1>
            <X.H2>普通二级标题</X.H2>
            <X.H3>普通三级标题</X.H3>

            <X.H1>三、列表与 reset</X.H1>
            <X.Uli>字符串无序项：`代码` 与 *加粗* 与 $x^2$ 与 @链接[https://example.com]@</X.Uli>
            <X.Uli>另一项，验证 12px 间距</X.Uli>
            <X.Oli>有序第一项（无 ol 包裹，从页面计数器继续或从 1 开始）</X.Oli>
            <X.Oli>有序第二项</X.Oli>
            <X.Oli reset>reset 后应重新从 1 开始</X.Oli>
            <X.Oli>reset 后的第二项，应为 2</X.Oli>
            <X.Uli>
                <X.P>元素子节点父项第一段</X.P>
                <X.P>同一项内第二段，间距应为 12px</X.P>
                <X.Uli>嵌套无序子项 A</X.Uli>
                <X.Uli>嵌套无序子项 B</X.Uli>
            </X.Uli>
            <X.Oli reset>
                <X.P>有序父项含代码：</X.P>
                <X.CodeBlock language="js" title="in-oli.js" highlightLines="1" code={'const nested = true;\n'} />
                <X.Oli>内层有序 1（content-wrapper 会 reset 计数）</X.Oli>
                <X.Oli>内层有序 2</X.Oli>
            </X.Oli>
            <X.Oli>外层下一项，应为 2（不被内层带跑）</X.Oli>

            <X.H1>四、引用块</X.H1>
            <X.HighlightBlock>
                <X.P>默认 golden。含 `代码` 与 *加粗*。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="red">
                <X.P>red</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="blue">
                <X.H3>块内标题</X.H3>
                <X.P>blue + 代码</X.P>
                <X.CodeBlock language="js" code={'console.log(1);\n'} />
            </X.HighlightBlock>
            <X.HighlightBlock background="green">
                <X.P>green</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="gray">
                <X.P>gray</X.P>
            </X.HighlightBlock>

            <X.H1>五、代码块</X.H1>
            <X.CodeBlock
                language="js"
                title="fibonacci.js"
                highlightLines="2-3"
                code={`
                function fib(n) {
                    if (n <= 1) return n;
                    return fib(n - 1) + fib(n - 2);
                }
                `}
            />
            <X.CodeBlock
                language="text"
                title="sshd_config"
                diffRemovedLines="1-2"
                diffAddedLines="3-4"
                code={`
                #PermitRootLogin prohibit-password
                #PermitEmptyPasswords no
                PermitRootLogin yes
                PermitEmptyPasswords yes
                `}
            />
            <X.CodeBlock language="asm8086" code={'MOV AX, 0B800h\nINT 21h\nRET\n'} />
            <X.CodeBlock language="js" title="empty-after-trim" code={''} />
            <X.CodeBlock
                language="python"
                title="mixed-indent-trap"
                code={`
        first_line_is_deeply_indented = True
if True:
    pass
`}
            />

            <X.H1>六、公式</X.H1>
            <X.P>行内 $d = s(q - z)$ 与后续文字。</X.P>
            <X.Formula text="E = mc^2" />
            <X.Formula text="E = mc^2" alignLeft />
            <X.Formula text={'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} />

            <X.H1>七、表格</X.H1>
            <X.Table
                fromText={`
                'rsa'|弃置
                'ul'|根据'username'前端加密
                'pl'|根据'password'前端加密
                `}
                thead="none"
            />
            <X.Table
                fromText={`
                名称|满足|不满足
                Promotion|立刻引导|自己发现
                Non-Optional|强制|可选
                `}
                align="llll"
                width={[200, 200, 200]}
            />
            <X.Table
                fromData={[
                    ['icon', '释义'],
                    [<X.Image key="i" src={img} width="24px" />, '`View`，视图。'],
                    ['Class', '含换行：第一行\\n第二行'],
                ]}
                align="cl"
            />
            <X.Table thead="column" width={[120, 80, 80]}>
                <tr>
                    <th>含义</th>
                    <th>值1</th>
                    <th>值2</th>
                </tr>
                <tr>
                    <td>闪烁</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
            </X.Table>
            <X.P>
                fromText 会把英文撇号替换成反引号：don't 只有一个撇号，只会露出反引号、不会变成行内代码；同一格里两个撇号
                can't / won't 会把中间配成行内代码（既定陷阱）。
            </X.P>
            <X.Table
                fromText={`
                word|note
                don't|单个撇号，露出反引号
                can't / won't|两个撇号，中间变成行内代码
                `}
            />

            <X.H1>八、FlexRow / FlexCol / 图片 / 分割线</X.H1>
            <X.FlexRow gap="32px" alignItems="center">
                <X.Image src={wide} width="160px" />
                <X.FlexCol>
                    <X.P>FlexCol 第一段</X.P>
                    <X.P>FlexCol 第二段，间距 24px</X.P>
                </X.FlexCol>
            </X.FlexRow>
            <X.FlexRow gap="16px" minWidth="720px">
                <X.Image src={img} width="80px" />
                <X.Image src={img} width="80px" themeAdaptive />
                <X.P>minWidth=720px 时窄视口应出现 FlexRow 自身横向滚动，而不是撑破页面。</X.P>
            </X.FlexRow>
            <X.Image src={wide} width="50%" />
            <X.Image src={wide} width="200" />
            <X.P>
                上一张 `width="200"` 没有单位，是非法 CSS，应忽略并显示原图宽度（受 max-width:100%
                约束）。所有图片点击应打开灯箱，Escape / 点击遮罩关闭；`themeAdaptive` 图在暗色主题的灯箱里仍保持反色。
            </X.P>
            <X.Divider />
            <X.P>分割线下方。</X.P>
        </>
    );
}
