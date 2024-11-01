import X from 'src/component/X';
import metas from 'src/app/_metas';
import styles from './page.module.css';

const path = '/longtime/demo/';
export const {metadata} = metas[path];

function DemoBox() {
    return <div className={styles['demo-box']} />;
}

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>基础组件</X.H1>
            <X.H2>标题</X.H2>
            <X.P>此组件体系中标题分为三级，且只有一级和二级标题会展示在右侧目录中。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.H1>一级标题</X.H1>
                    <X.H2>二级标题</X.H2>
                    <X.H3>三级标题</X.H3>
                    `}
                />
                <X.H1 excludeFromContents>一级标题</X.H1>
                <X.H2 excludeFromContents>二级标题</X.H2>
                <X.H3>三级标题</X.H3>
            </X.HighlightBlock>
            <X.H3 href="/">带有超链接的标题（比如我！）</X.H3>
            <X.P>如果希望标题带有超链接的效果，可以指定`href`属性。三种级别的标题均可使用。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock language="jsx" code='<X.H2 href="https://www.baidu.com">指向百度的二级标题</X.H2>' />
                <X.H2 href="https://www.baidu.com" excludeFromContents>
                    指向百度的二级标题
                </X.H2>
            </X.HighlightBlock>
            <X.H2>换行和分割线</X.H2>
            <X.P>换行组件效果等同于插入`24px`高的空间；分割线组件是`0.5px`高的灰色细线。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Divider />
                    组件已弃用！
                    <X.Divider />
                    `}
                />
                <X.Divider />
                <X.Divider />
            </X.HighlightBlock>
            <X.H1>段落</X.H1>
            <X.P>最基本的用于展示文本的组件。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code="<X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。</X.P>"
                />
                <X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。</X.P>
            </X.HighlightBlock>
            <X.H2>灵活设置段落的上下外边距</X.H2>
            <X.P>
                段落组件默认的`margin-top`为`0`，`margin-bottom`为`24px`，但可以：\n通过`witxhMargixnTop`设置`margin-top`为`24px`；\n通过`noxMarginxBottom`设置`margin-bottom`为`0`。\n这样使得段落组件的使用更为灵活。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P>这是一个正常的段落。</X.P>
                    <X.P>这是一个没有下外边距的段落。</X.P>
                    <X.P>这是一个正常的段落。</X.P>
                    <X.P>这是一个正常的段落。</X.P>
                    `}
                />
                <X.P>这是一个正常的段落。</X.P>
                <X.P>这是一个没有下外边距的段落。</X.P>
                <X.P>这是一个正常的段落。</X.P>
                <X.P>这是一个正常的段落。</X.P>
            </X.HighlightBlock>
            <X.H2>段落中的特殊格式</X.H2>
            <X.Oli reset>
                <X.P>`\`content\``：实现`这样的`强调效果</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>`\*content\*`：实现*这样的*加粗效果</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    `\$content\$`：插入一个行内公式
                    {`$\\int_{a}^{b} f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\cdot \\Delta x$`}，
                    或者一些简单的数学符号$\mu_1$、$\mu_2$等
                </X.P>
            </X.Oli>
            <X.Oli>
                <X.P>`\@text[url]\@`：这是一个指向@百度[https://www.baidu.com]@的超链接</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>复合使用`\`\@text[url]\@\``：这是一个指向`@百度[https://www.baidu.com]@`的超链接</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    在段落组件中可以使用一些转义字符，打出上述代表了特殊格式的符号如`\``、`\*`等；\n也可以通过`\\n`换行。
                </X.P>
            </X.Oli>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.P>生成上述内容的源代码为：</X.P>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.H2>段落中的特殊格式</X.H2>
                    <X.Oli reset>
                        <X.P>\`\\\`content\\\`\`：实现\`这样的\`强调效果</X.P>
                    </X.Oli>
                    <X.Oli>
                        <X.P>\`\\*content\\*\`：实现*这样的*加粗效果</X.P>
                    </X.Oli>
                    <X.Oli>
                        <X.P>
                            \`\\$content\\$\`：插入一个行内公式
                            {\`$\\\\int_{a}^{b} f(x)dx = \\\\lim_{n \\\\to \\\\infty} \\\\sum_{i=1}^n f(x_i) \\\\cdot \\\\Delta x$\`}，
                            或者一些简单的数学符号$\\mu_1$、$\\mu_2$等
                        </X.P>
                    </X.Oli>
                    <X.Oli>
                        <X.P>\`\\@text[url]\\@\`：这是一个指向@百度[https://www.baidu.com]@的超链接</X.P>
                    </X.Oli>
                    <X.Oli>
                        <X.P>复合使用\`\\\`\\@text[url]\\@\\\`\`：这是一个指向\`@百度[https://www.baidu.com]@\`的超链接</X.P>
                    </X.Oli>
                    <X.Oli>
                        <X.P>
                            在段落组件中可以使用一些转义字符，打出上述代表了特殊格式的符号如\`\\\`\`、\`\\*\`等；\\n也可以通过\`\\\\n\`换行。
                        </X.P>
                    </X.Oli>
                    `}
                />
            </X.HighlightBlock>
            <X.H1>无序列表</X.H1>
            <X.P>
                无序列表的每一项可以是纯文本、段落组件、或者嵌套其他任何内容（但通常不是很推荐这样做）。\n注意每一个列表项的`first-child`的`margin-top`和`last-child`的`margin-bottom`会被置为`0`。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Uli>第一项</X.Uli>
                    <X.Uli>第二项</X.Uli>
                    <X.Uli>
                        <X.P>第三项\`嵌套了段落组件\`</X.P>
                    </X.Uli>
                    <X.Uli>
                        <X.P>第四项嵌套了更多组件</X.P>
                        <X.Uli>
                            <X.H3>一个标题</X.H3>
                        </X.Uli>
                        <X.CodeBlock language="js" code="console.log('Hello, World!')" />
                    </X.Uli>
                    <X.Uli>
                        <X.P>注意第四项的代码块的\`margin-bottom\`被移除了</X.P>
                    </X.Uli>
                    `}
                />
                <X.Uli>第一项</X.Uli>
                <X.Uli>第二项</X.Uli>
                <X.Uli>
                    <X.P>第三项`嵌套了段落组件`</X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>第四项嵌套了更多组件</X.P>
                    <X.Uli>
                        <X.H3>一个标题</X.H3>
                    </X.Uli>
                    <X.CodeBlock language="js" code="console.log('Hello, World!')" />
                </X.Uli>
                <X.Uli>
                    <X.P>注意第四项的代码块的`margin-bottom`被移除了</X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.P>
                与HTML的`ul``li`标签不同的是，无序列表直接在任意位置写列表项组件即可，而不需要一个父组件包裹。这也是此组件体系的设计理念之一：尽量使得行文*线性化*，减少组件嵌套。
            </X.P>
            <X.H2>省去段落组件</X.H2>
            <X.P>
                一个经常遇到的情况是：段落组件是列表项的唯一的子元素。因此在`2024-01-27`的更新中，支持了直接在列表项中写含有段落组件特殊格式的文本。在解析时，如果子元素是`string
                | string[]`类型，会自动为其包裹一层段落组件。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Uli>
                        <X.P>第\`1\`项</X.P>
                    </X.Uli>
                    <X.Uli>第\`2\`项</X.Uli>
                    <X.Uli>第{\`$\\\\bm{3}$\`}项</X.Uli>
                    `}
                />
                <X.Uli>
                    <X.P>第`1`项</X.P>
                </X.Uli>
                <X.Uli>第`2`项</X.Uli>
                <X.Uli>第{`$\\bm{3}$`}项</X.Uli>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>无序列表组件的上述特性同样适用于有序列表组件，因此下一节中不再重复。</X.P>
            </X.HighlightBlock>
            <X.H1>有序列表</X.H1>
            <X.P>
                有序列表项会自动渲染列表序号。然而正如前面提到的，列表项可以直接写在文档的任意位置，而渲染序号只是从头至尾机械地设置一个不断自增的变量。因此当文档中出现两处以上有序列表时，需要通过`reset`重置序号的渲染。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P>列表1：</X.P>
                    <X.Oli reset>第一项（重置）</X.Oli>
                    <X.Oli>第二项</X.Oli>
                    <X.Oli>第三项</X.Oli>
                    <X.Oli>第四项</X.Oli>
                    <X.P>列表2：</X.P>
                    <X.Oli reset>第一项（重置）</X.Oli>
                    <X.Oli>第二项</X.Oli>
                    `}
                />
                <X.P>列表1：</X.P>
                <X.Oli reset>第一项（重置）</X.Oli>
                <X.Oli>第二项</X.Oli>
                <X.Oli>第三项</X.Oli>
                <X.Oli>第四项</X.Oli>
                <X.P>列表2：</X.P>
                <X.Oli reset>第一项（重置）</X.Oli>
                <X.Oli>第二项</X.Oli>
            </X.HighlightBlock>
            <X.H2>关于reset的更多用法</X.H2>
            <X.P>
                在源码中，对于设置了`reset`属性的有序列表项，实际上是将列表序号变量设置为`reset`属性的整型值。因此作为布尔类型传递的`true`值恰好将序号重置为`1`，这符合绝大多数情况下的预期。然而，也可以将`reset`设为其他整数值，甚至是负数，以满足特殊的需求。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Oli reset={-2}>A</X.Oli>
                    <X.Oli>B</X.Oli>
                    <X.Oli>C</X.Oli>
                    <X.Oli>D</X.Oli>
                    <X.Oli>E</X.Oli>
                    `}
                />
                <X.Oli reset={-2}>A</X.Oli>
                <X.Oli>B</X.Oli>
                <X.Oli>C</X.Oli>
                <X.Oli>D</X.Oli>
                <X.Oli>E</X.Oli>
            </X.HighlightBlock>
            <X.H1>水平布局</X.H1>
            <X.P>水平布局组件提供一个`flex-direction`为`row`的容器。</X.P>
            <X.H3>设置主轴上的对齐方式</X.H3>
            <X.P>使用方法与`justify-content`CSS属性相同。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.FlexRow>
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>

                    <X.FlexRow justifyContent="center">
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>

                    <X.FlexRow justifyContent="space-around">
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>
                    `}
                />
                <X.FlexRow>
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
                <X.FlexRow justifyContent="center">
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
                <X.FlexRow justifyContent="space-around">
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
            </X.HighlightBlock>
            <X.H3>设置水平布局组件的 width 与 gap</X.H3>
            <X.P>缩放浏览器窗口宽度，可以体现出百分比宽度和固定像素宽度的区别。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.FlexRow width="75%" justifyContent="space-around">
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>

                    <X.FlexRow width="702px" justifyContent="space-around">
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>

                    <X.FlexRow gap={24}>
                        <DemoBox />
                        <DemoBox />
                        <DemoBox />
                    </X.FlexRow>
                    `}
                />
                <X.FlexRow width="75%" justifyContent="space-around">
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
                <X.FlexRow width="702px" justifyContent="space-around">
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
                <X.FlexRow gap={24}>
                    <DemoBox />
                    <DemoBox />
                    <DemoBox />
                </X.FlexRow>
            </X.HighlightBlock>
            <X.H3>均匀平分空间</X.H3>
            <X.P>
                有些场景例如双栏正文、双栏列表可能希望几个宽度不确定的元素均分水平宽度。这时可以用`flex1`属性。\n注意下面示例中，使用和不使用`flex1`属性的区别：
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.FlexRow gap={24}>
                        <X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。</X.P>
                        <X.P>浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。</X.P>
                    </X.FlexRow>
                    <X.FlexRow gap={24} flex1>
                        <X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。</X.P>
                        <X.P>浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。</X.P>
                    </X.FlexRow>
                    `}
                />
                <X.FlexRow gap={24}>
                    <X.P>
                        夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                    </X.P>
                    <X.P>
                        浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                    </X.P>
                </X.FlexRow>
                <X.FlexRow gap={24} flex1>
                    <X.P>
                        夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                    </X.P>
                    <X.P>
                        浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                    </X.P>
                </X.FlexRow>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>使用水平布局排版列表时，需要额外用`div`包裹列表项。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.FlexRow>
                        <div>
                            <X.Uli>第一项</X.Uli>
                            <X.Uli>第二项</X.Uli>
                            <X.Uli>第三项</X.Uli>
                        </div>
                        <div>
                            <X.Oli reset>第一项</X.Oli>
                            <X.Oli>第二项</X.Oli>
                            <X.Oli>第三项</X.Oli>
                        </div>
                    </X.FlexRow>

                    <X.FlexRow flex1>
                        <div>
                            <X.Uli>第一项</X.Uli>
                            <X.Uli>第二项</X.Uli>
                            <X.Uli>第三项</X.Uli>
                        </div>
                        <div>
                            <X.Oli reset>第一项</X.Oli>
                            <X.Oli>第二项</X.Oli>
                            <X.Oli>第三项</X.Oli>
                        </div>
                    </X.FlexRow>
                    `}
                />
                <X.FlexRow>
                    <div>
                        <X.Uli>第一项</X.Uli>
                        <X.Uli>第二项</X.Uli>
                        <X.Uli>第三项</X.Uli>
                    </div>
                    <div>
                        <X.Oli reset>第一项</X.Oli>
                        <X.Oli>第二项</X.Oli>
                        <X.Oli>第三项</X.Oli>
                    </div>
                </X.FlexRow>
                <X.FlexRow flex1>
                    <div>
                        <X.Uli>第一项</X.Uli>
                        <X.Uli>第二项</X.Uli>
                        <X.Uli>第三项</X.Uli>
                    </div>
                    <div>
                        <X.Oli reset>第一项</X.Oli>
                        <X.Oli>第二项</X.Oli>
                        <X.Oli>第三项</X.Oli>
                    </div>
                </X.FlexRow>
            </X.HighlightBlock>
            <X.H1>公式</X.H1>
            <X.P>除了在段落组件中使用`\$content\$`插入行内公式，还可以直接使用公式组件。公式组件会独占一行。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock language="jsx" code='<X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />' />
                <X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            </X.HighlightBlock>
            <X.P>一些更复杂的例子：</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Formula
                        text="
                        \\begin{cases}
                        ax + by = c \\\\
                        dx - ey = f
                        \\end{cases}
                        "
                    />
                    <X.Formula
                        text="
                        \\begin{bmatrix}
                        a & b & c \\\\
                        d & e & f \\\\
                        g & h & i
                        \\end{bmatrix}
                        \\times
                        \\begin{bmatrix}
                        x & y & z \\\\
                        w & v & u \\\\
                        t & s & r
                        \\end{bmatrix}
                        =
                        \\begin{bmatrix}
                        ax + bw + ct & ay + bv + cu & az + bz + cr \\\\
                        dx + ew + ft & dy + ev + fu & dz + fv + fu \\\\
                        gx + hw + it & gy + hv + iu & gz + hv + ir
                        \\end{bmatrix}
                        "
                    />
                    `}
                />
                <X.Formula
                    text="
                    \begin{cases}
                    ax + by = c \\
                    dx - ey = f
                    \end{cases}
                    "
                />
                <X.Formula
                    text="
                    \begin{bmatrix}
                    a & b & c \\
                    d & e & f \\
                    g & h & i
                    \end{bmatrix}
                    \times
                    \begin{bmatrix}
                    x & y & z \\
                    w & v & u \\
                    t & s & r
                    \end{bmatrix}
                    =
                    \begin{bmatrix}
                    ax + bw + ct & ay + bv + cu & az + bz + cr \\
                    dx + ew + ft & dy + ev + fu & dz + fv + fu \\
                    gx + hw + it & gy + hv + iu & gz + hv + ir
                    \end{bmatrix}
                    "
                />
            </X.HighlightBlock>
            <X.H1>高亮块</X.H1>
            <X.P>
                高亮块组件只提供一个有背景色的容器，因此其内部可以嵌套其他组件。\n高亮块会自动移除第一个子元素的`margin-top`和最后一个子元素的`margin-bottom`。\n`background`的默认值是`golden`，可选值有`red`、`gray`和`blue`。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.HighlightBlock background="gray">
                        <X.P>高亮块组件可以嵌套，事实上，每一个*示例*区域都是一个高亮块组件。</X.P>
                    </X.HighlightBlock>

                    <X.HighlightBlock>
                        <X.P>高亮块中可以使用其他组件。</X.P>
                        <X.Formula text="\\int_{a}^{b} f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\cdot \\Delta x" />
                    </X.HighlightBlock>

                    <X.HighlightBlock background="red">
                        <X.P>我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。</X.P>
                    </X.HighlightBlock>

                    <X.HighlightBlock background="blue">
                        <X.P>在@\`2024-02-01\`的更新[/longtime/updates/]@中加入了蓝色背景。</X.P>
                    </X.HighlightBlock>
                    `}
                />
                <X.HighlightBlock background="gray">
                    <X.P>高亮块组件可以嵌套，事实上，每一个*示例*区域都是一个高亮块组件。</X.P>
                </X.HighlightBlock>
                <X.HighlightBlock>
                    <X.P>高亮块中可以使用其他组件。</X.P>
                    <X.Formula text="\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i) \cdot \Delta x" />
                </X.HighlightBlock>
                <X.HighlightBlock background="red">
                    <X.P>
                        我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
                    </X.P>
                </X.HighlightBlock>
                <X.HighlightBlock background="blue">
                    <X.P>在`2024-02-01`的更新中加入了蓝色背景。</X.P>
                </X.HighlightBlock>
            </X.HighlightBlock>
            <X.H1>图片</X.H1>
            <X.P>使用百分比宽度，包裹在flex容器中，或不超过600px</X.P>
            <X.HighlightBlock>正在开发中~</X.HighlightBlock>
            <X.H1>表格</X.H1>
            <X.P>对于仅展示文本，无特殊格式需求的简单表格，可以通过`fromText`来快速定义表格。单元格之间用`|`分割。</X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Table
                        fromText={\`
                        学号|学生姓名|成绩
                        202101|Alice|97
                        202102|Bob|86
                        202103|Candy|80
                        \`}
                    />
                    `}
                />
                <X.Table
                    fromText={`
                    学号|学生姓名|成绩
                    202101|Alice|97
                    202102|Bob|86
                    202103|Candy|80
                    `}
                />
            </X.HighlightBlock>
            <X.P>
                如需合并单元格、在单元格中使用其他组件，可以使用html原生的表格结构。单元格所有直接子元素的外边距都会被移除。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Table>
                        <tr>
                            <th colSpan={3}>汇总表</th>
                        </tr>
                        <tr>
                            <th>类别</th>
                            <th>项目</th>
                            <th>金额</th>
                        </tr>
                        <tr>
                            <td rowSpan={2}>通讯费</td>
                            <td>座机</td>
                            <td><X.P>\`107.6\`</X.P></td>
                        </tr>
                        <tr>
                            <td>移动电话</td>
                            <td><X.P>\`658.2\`</X.P></td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>餐补</td>
                            <td>早餐</td>
                            <td><X.P>\`180.4\`</X.P></td>
                        </tr>
                        <tr>
                            <td>午餐</td>
                            <td><X.P>\`477.2\`</X.P></td>
                        </tr>
                        <tr>
                            <td>晚餐</td>
                            <td><X.P>\`590.0\`</X.P></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>合计</td>
                            <td><X.P>\`2013.4\`</X.P></td>
                        </tr>
                    </X.Table>
                    `}
                />
                <X.Table>
                    <tr>
                        <th colSpan={3}>汇总表</th>
                    </tr>
                    <tr>
                        <th>类别</th>
                        <th>项目</th>
                        <th>金额</th>
                    </tr>
                    <tr>
                        <td rowSpan={2}>通讯费</td>
                        <td>座机</td>
                        <td>
                            <X.P>`107.6`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>移动电话</td>
                        <td>
                            <X.P>`658.2`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>餐补</td>
                        <td>早餐</td>
                        <td>
                            <X.P>`180.4`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>午餐</td>
                        <td>
                            <X.P>`477.2`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>晚餐</td>
                        <td>
                            <X.P>`590.0`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>合计</td>
                        <td>
                            <X.P>`2013.4`</X.P>
                        </td>
                    </tr>
                </X.Table>
            </X.HighlightBlock>
            <X.H1>代码块</X.H1>
            <X.H2>单行代码</X.H2>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`<X.CodeBlock language="python" code='with open("./tool.js","r") as f:' />`}
                />
                <X.CodeBlock language="python" code='with open("./tool.js","r") as f:' />
            </X.HighlightBlock>
            <X.P>更多语言：</X.P>
            <X.CodeBlock language="cpp" code="bool operator <(const NODE &other)const" />
            <X.CodeBlock language="c" code='fprintf(stdout, "hello world\n");' />
            <X.CodeBlock language="markdown" code="[Prism](https://prismjs.com) is a cool syntax highlighter." />
            <X.CodeBlock language="js" code="let entity = /&#x?[\da-f]{1,8};/;" />
            <X.CodeBlock language="ts" code="type SearchFunc = (source: string, subStr: string) => boolean;" />
            <X.H2>多行代码</X.H2>
            <X.P>
                对于出现转义字符如`\\t`，`\\n`的语言，可以使用`String.raw`标签函数保留原始字符串形式，或者将`\\`写为`\\\\`。
            </X.P>
            <X.HighlightBlock background="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.CodeBlock
                        language="cpp"
                        code={String.raw\`
                        #include <iostream>
                        using namespace std;
                        const PI = 3.14159;
                        int main(int argc, char *argv[]) {
                            printf("\\t1 + 2 is %d \\n",3);
                            /* An annoying "Hello World" example */
                            for (auto i = 0; i < 0xFFFF; i++)
                                cout << "Hello, World!" << endl;

                            char c = '\\n';
                            unordered_map <string, vector<string>> m;
                            m["key"] = "\\\\"; // this is an error

                            return -2e3 + 12l;
                        }
                        \`}
                    />
                    `}
                />
                <X.CodeBlock
                    language="cpp"
                    code={String.raw`
                    #include <iostream>
                    using namespace std;
                    const PI = 3.14159;
                    int main(int argc, char *argv[]) {
                        printf("\t1 + 2 is %d \n",3);
                        /* An annoying "Hello World" example */
                        for (auto i = 0; i < 0xFFFF; i++)
                            cout << "Hello, World!" << endl;

                        char c = '\n';
                        unordered_map <string, vector<string>> m;
                        m["key"] = "\\"; // this is an error

                        return -2e3 + 12l;
                    }
                    `}
                />
            </X.HighlightBlock>
            <X.P>更多语言：</X.P>
            <X.H3>python</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                import requests
                import json
                pi = round(float('3.14159'), 2)

                @requires_authorization(roles=["ADMIN"])
                def somefunc(param1='', param2=0):
                    r'''A docstring'''
                    if param1 > param2: # interesting
                        print 'Greater'
                    return (param2 - param1 + 1 + 0b10l) or None

                class SomeClass:
                    pass

                >>> message = '''interpreter
                ... prompt'''
                `}
            />
            <X.H3>html</X.H3>
            <X.CodeBlock
                language="html"
                code={`
                <!DOCTYPE html>
                <title>Title</title>

                <style>body {width: 500px;}</style>

                <script type="application/javascript">
                  function $init() {return true;}
                </script>

                <body>
                  <p checked class="title" id='title'>Title&nbsp;</p>
                  <!-- here goes the rest of the page -->
                </body>
                `}
            />
            <X.H3>css</X.H3>
            <X.CodeBlock
                language="css"
                code={`
                @font-face {
                    font-family: Chunkfive;
                    src: url('Chunkfive.otf');
                }

                body,
                .usertext {
                    color: var(--div-color) !important;
                    background: #600;
                    font-family: Chunkfive, sans;
                    --heading-1: 30px/32px Helvetica, sans-serif;
                }

                #blur {
                    backdrop-filter: blur(5px) saturate(160%);
                }

                @import url(print.css);
                @media print {
                    a[href^='http']::after {
                        content: attr(href);
                    }
                }
                `}
            />
            <X.H3>js</X.H3>
            <X.CodeBlock
                language="js"
                code={`
                const PI = 3.14159;
                const a={
                    "data": { "labels": ["foo", "bar"], },
                    "error": null,
                    "status": "Ok"
                }
            `}
            />
            <X.H3>jsx</X.H3>
            <X.CodeBlock
                language="jsx"
                code={`
                import {useState} from 'react';

                function Square({value, onSquareClick}) {
                    return (
                        <button className="square" onClick={onSquareClick}>
                            {value}
                        </button>
                    );
                }

                function Board({xIsNext, squares, onPlay}) {
                    function handleClick(i) {
                        if (calculateWinner(squares) || squares[i]) {
                            return;
                        }
                        const nextSquares = squares.slice();
                        if (xIsNext) {
                            nextSquares[i] = 'X';
                        } else {
                            nextSquares[i] = 'O';
                        }
                        onPlay(nextSquares);
                    }

                    const winner = calculateWinner(squares);
                    let status;
                    if (winner) {
                        status = 'Winner: ' + winner;
                    } else {
                        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
                    }

                    return (
                        <>
                            <div className="status">{status}</div>
                            <div className="board-row">
                                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                            </div>
                            <div className="board-row">
                                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                            </div>
                            <div className="board-row">
                                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                            </div>
                        </>
                    );
                }

                export default function Game() {
                    const [history, setHistory] = useState([Array(9).fill(null)]);
                    const [currentMove, setCurrentMove] = useState(0);
                    const xIsNext = currentMove % 2 === 0;
                    const currentSquares = history[currentMove];

                    function handlePlay(nextSquares) {
                        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
                        setHistory(nextHistory);
                        setCurrentMove(nextHistory.length - 1);
                    }

                    function jumpTo(nextMove) {
                        setCurrentMove(nextMove);
                    }

                    const moves = history.map((squares, move) => {
                        let description;
                        if (move > 0) {
                            description = 'Go to move #' + move;
                        } else {
                            description = 'Go to game start';
                        }
                        return (
                            <li key={move}>
                                <button onClick={() => jumpTo(move)}>{description}</button>
                            </li>
                        );
                    });

                    return (
                        <div className="game">
                            <div className="game-board">
                                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                            </div>
                            <div className="game-info">
                                <ol>{moves}</ol>
                            </div>
                        </div>
                    );
                }

                function calculateWinner(squares) {
                    const lines = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                    ];
                    for (let i = 0; i < lines.length; i++) {
                        const [a, b, c] = lines[i];
                        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                            return squares[a];
                        }
                    }
                    return null;
                }
                `}
            />
        </>
    );
}
