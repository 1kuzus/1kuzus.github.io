import X from 'src/component/X';

const img = '/26c/test-blog/small.gif';
const wide = '/26c/test-blog/wide.png';

export default function Post() {
    return (
        <>
            <X.P>
                本页覆盖 `index.js` 旧渲染管线：`X.P` / `X.Uli` / `X.Oli` / `X.Table` 的 `XParser`，以及 markdown
                触达不到的 `X.FlexRow` / `X.FlexCol` / `X.Oli reset` / `fromText` / `fromData`。写法与
                `/26c/test-blog/` 对齐：每个用例后用 *预期* / *异常* 说明。
            </X.P>
            <X.P>
                全局基线与 markdown 页相同：块级间距 24px、列表项间距 12px，由 `X/flow.css` 的 owl 选择器注入。本页同样需要在亮/暗主题、桌面/平板/手机三档视口下走查。
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
            <X.P>
                hash 链接 @页内[#]@ 与站内路径 @归档[/archives/]@ 与 mailto @邮箱[mailto:test@example.com]@。
            </X.P>
            <X.P></X.P>
            <X.P>
                *预期*：第一段换行后 `line2` 另起一行但仍在同一段落；转义段保持字面；混合 children
                的公式与行内代码都渲染。空的 `X.P` 不应撑出多余 24px
                空白（空 {'`<p>`'} 高度为 0，与前后段落的 24px 外边距折叠，*不额外占位*）。hash / 站内 /
                mailto 与外链一样带 `target="_blank"`。*异常*：出现 alert；转义符自己显示出来；空 `X.P`
                把后文间距撑成 48px 以上。
            </X.P>

            <X.H1 href="https://github.com">二、标题（带外链）</X.H1>
            <X.H2 href="https://nextjs.org">二级标题外链</X.H2>
            <X.H3 href="https://react.dev">三级标题外链</X.H3>
            <X.H1>普通一级标题</X.H1>
            <X.H2>普通二级标题</X.H2>
            <X.H3>普通三级标题</X.H3>
            <X.H1>连续标题甲</X.H1>
            <X.H2>连续标题乙</X.H2>
            <X.H3>连续标题丙</X.H3>
            <X.P>紧跟连续标题的段落。</X.P>
            <X.H1>
                这是一个用来测试目录条目 ellipsis 的超长一级标题，中英文混排 The quick brown fox jumps over the lazy
                dog 并且继续加长直到目录单行放不下
            </X.H1>
            <X.P>
                *预期*：外链标题默认外观与普通标题一致，悬停整行文字变品牌色、前缀符号不变色，点击新标签打开；连续标题间距
                24px；超长标题在目录里单行省略。*异常*：外链标题默认就是品牌色；连续标题粘连或双倍间距。
            </X.P>

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
            <X.Uli>{''}</X.Uli>
            <X.Oli reset>{''}</X.Oli>
            <X.P>
                *预期*：字符串项走 XParser；项间距 12px；`reset` 后从 1
                再数；内层有序 1/2、外层随后是 2；空字符串项渲染为只有标记、没有空段落占位更好，但当前会有一个空
                {'`<p>`'}。*异常*：内外层编号串号；空项把后文间距撑成 24px。
            </X.P>

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
            <X.HighlightBlock background="green">
                <X.P>外层 green，里面再叠一层：</X.P>
                <X.HighlightBlock background="blue">
                    <X.P>嵌套 blue。再叠一层默认 golden：</X.P>
                    <X.HighlightBlock>
                        <X.P>三层嵌套。</X.P>
                    </X.HighlightBlock>
                </X.HighlightBlock>
            </X.HighlightBlock>
            <X.P>
                *预期*：六种底色依次为金/红/蓝/绿/灰，再加绿⊃蓝⊃金的三层嵌套，层间有内缩；块内标题会进目录（既定行为）。*异常*：嵌套层看起来像同级；某块没有背景。
            </X.P>

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
            <X.CodeBlock
                language="c"
                title="patch.c"
                highlightLines="1"
                diffRemovedLines="2-3"
                diffAddedLines="4-5"
                code={`
                if (!ctx->in_seek) {
                    if (size > remain) {
                        GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, "truncated");
                    if (bytes_skipped + size > remain) {
                        GF_LOG(GF_LOG_WARNING, GF_LOG_MEDIA, "truncated (fixed)");
                        break;
                    }
                }
                `}
            />
            <X.CodeBlock language="js" title="越界高亮" highlightLines="99" code={'const onlyOneLine = true;\n'} />
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
            <X.CodeBlock
                language="text"
                title="special-chars"
                code={'HTML: <script>alert(1)</script>  &  &amp;\nTab\tseparated\tcolumns\nUnicode: 中文 🎉\n'}
            />
            <X.P>
                *预期*：`fibonacci.js / JavaScript` 高亮第 2–3 行；sshd 上红下绿无缝；patch.c
                金/红/绿三段紧邻；越界高亮看不见底色且不 500；asm8086 有着色；空代码块只有标签。mixed-indent-trap
                的既定行为：按第一行缩进对所有行 slice，后续缩进更浅的行会被切成空行（`if True:` /
                `pass` 整行消失）。JS 管线没有 markdown 那样的前置 `trim()`。特殊字符原样显示、不弹窗。*异常*：整页
                500；越界高亮把块撑高；`if True:` 完整显示（说明裁剪逻辑改了，本条预期需更新）。
            </X.P>

            <X.H1>六、公式</X.H1>
            <X.P>行内 $d = s(q - z)$ 与后续文字。</X.P>
            <X.Formula text="E = mc^2" />
            <X.Formula text="E = mc^2" alignLeft />
            <X.Formula text={'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} />
            <X.Formula
                text={
                    '\\sum_{i=1}^{n} \\int_{0}^{\\infty} \\frac{x^i e^{-x}}{\\Gamma(i)} dx = \\lim_{k \\to \\infty} \\prod_{j=1}^{k} \\left( 1 + \\frac{1}{j^2} \\right) \\cdot \\alpha\\beta\\gamma\\delta\\epsilon\\zeta\\eta\\theta\\iota\\kappa\\lambda\\mu\\nu\\xi\\pi\\rho\\sigma\\tau\\upsilon\\phi\\chi\\psi\\omega'
                }
            />
            <X.Formula text="" />
            <X.P>
                *预期*：第一条块级公式居中、第二条左对齐、矩阵定界符包住内容；超长公式自身横向滚动、不撑破页面；空
                `text` 渲染为一个空的公式容器、不 500。*异常*：出现红色 KaTeX 报错；空公式导致整页崩溃。
            </X.P>

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
            <X.Table
                fromText={`
                /|列头1|列头2
                行头1|数据|数据
                行头2|数据|
                `}
                thead="all"
                width={[80, 80, 80]}
            />
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
            <X.P>
                *预期*：`thead=none` 全浅色；带 width
                的表列宽准确；fromData 单元格里图片与 `\\n` 换行都生效；`thead=column`
                首列深色；`thead=all` 首行+首列深色，右下空单元格保留底色不塌陷。*异常*：空单元格塌陷导致错位；图片单元格上下多出
                24px 空隙。
            </X.P>

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
            <X.FlexRow gap="12px" justifyContent="space-between" flex1>
                <X.P>flex1 左</X.P>
                <X.P>flex1 中</X.P>
                <X.P>flex1 右</X.P>
            </X.FlexRow>
            <X.Image src={wide} width="50%" />
            <X.Image src={wide} width="200" />
            <X.P>
                上一张 `width="200"` 没有单位，是非法 CSS，应忽略并显示原图宽度（受 max-width:100%
                约束）。所有图片点击应打开灯箱，Escape / 点击遮罩关闭；`themeAdaptive` 图在暗色主题的灯箱里仍保持反色。
            </X.P>
            <X.Divider />
            <X.P>分割线下方。</X.P>
            <X.Divider />
            <X.Divider />
            <X.P>上方有两条连续分割线，间距应仍是 24px。</X.P>
            <X.P>
                *预期*：`justifyContent=space-between` + `flex1` 三列均分拉开；连续分割线是两条平行细线。*异常*：FlexRow
                撑出页面横向滚动条；连续分割线粘成一条粗线。
            </X.P>

            <X.H1>九、收尾检查</X.H1>
            <X.P>
                *主题*：切到暗色后代码 diff 红绿、高亮金底、引用块、表格、行内代码、分割线、品牌色前缀全部跟着变；`themeAdaptive`
                图反色。刷新不闪白。
            </X.P>
            <X.P>
                *响应式*：&lt;600px 时代码块/引用块左右内边距收到 18px；侧栏变汉堡；超宽表格/代码/公式/FlexRow
                自身滚动，页面不出现横向滚动条。
            </X.P>
            <X.P>*复制*：本页代码块复制按钮拿到的是去公共缩进后的纯文本，首尾无多余空行、无 HTML 标签。</X.P>
            <X.P>
                *控制台*：无 React unknown-prop / key / hydration 警告，无图片 404。空 `X.P` 与空列表项不应报错。
            </X.P>
        </>
    );
}
