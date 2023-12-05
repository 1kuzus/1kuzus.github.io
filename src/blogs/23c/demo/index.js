import X from '@/component/X';
import './index.css';

function DemoBox() {
    return <div className="b0000-demo-box" />;
}

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>示例</X.Title>
            <X.H1>基础组件</X.H1>
            <X.H2>标题</X.H2>
            <X.P>此组件体系中标题分为三级，且只有一级和二级标题会展示在右侧目录中。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.H1>一级标题</X.H1>
                    <X.H2>二级标题</X.H2>
                    <X.H3>三级标题</X.H3>
                    `}
                />
                <X.H1>一级标题</X.H1>
                <X.H2>二级标题</X.H2>
                <X.H3>三级标题</X.H3>
            </X.HighlightBlock>
            <X.H3 href="/">带有超链接的标题（比如我！）</X.H3>
            <X.P>如果希望标题带有超链接的效果，可以指定`href`属性。三种级别的标题均可使用。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock language="jsx" code='<X.H2 href="https://www.baidu.com">指向百度的二级标题</X.H2>' />
                <X.H2 href="https://www.baidu.com">指向百度的二级标题</X.H2>
            </X.HighlightBlock>
            <X.H2>段落</X.H2>
            <X.P>最基本的用于展示文本的组件。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code="<X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。</X.P>"
                />
                <X.P>夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。</X.P>
            </X.HighlightBlock>
            <X.H3>灵活设置段落的上下外边距</X.H3>
            <X.P>
                段落组件默认的`margin-top`为`0`，`margin-bottom`为`24px`，但可以：\n
                通过`withMarginTop`设置`margin-top`为`24px`；\n 通过`noMarginBottom`设置`margin-bottom`为`0`。\n
                这样使得段落组件的使用更为灵活。
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P>这是一个正常的段落。</X.P>
                    <X.P noMarginBottom>这是一个没有下外边距的段落。</X.P>
                    <X.P>这是一个正常的段落。</X.P>
                    <X.P>这是一个正常的段落。</X.P>
                    `}
                />
                <X.P>这是一个正常的段落。</X.P>
                <X.P noMarginBottom>这是一个没有下外边距的段落。</X.P>
                <X.P>这是一个正常的段落。</X.P>
                <X.P>这是一个正常的段落。</X.P>
            </X.HighlightBlock>
            <X.H3>段落中的特殊格式</X.H3>
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
            <X.HighlightBlock bgcolor="gray">
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
            <X.H3>换行空格问题</X.H3>
            <X.P>对于一个很长的段落，如果希望在代码编辑器中换行，可能会遇到被自动补一个空格的问题，例如：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>坏示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P>
                        这是一句很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的话，注意*我的后面*
                        是不是有一个空格？
                    </X.P>
                    `}
                />
                <X.P>
                    这是一句很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的话，注意*我的后面*
                    是不是有一个空格？
                </X.P>
            </X.HighlightBlock>
            <X.P>
                为了避免这个html文档自动将换行转换成的空格，需要在换行时在上一行的行末添加`---`，组件会自动处理掉这个换行产生的空格。\n
                就像这样：
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>好示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P>
                        这是一句很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的话，注意*我的后面*---
                        是不是没有空格了？
                    </X.P>
                    `}
                />
                <X.P>
                    这是一句很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的话，注意*我的后面*---
                    是不是没有空格了？
                </X.P>
            </X.HighlightBlock>
            <X.H2>换行和分割线</X.H2>
            <X.P>换行组件效果等同于插入`24px`高的空间；分割线组件是`0.5px`高的灰色细线。</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.Divider />
                    <X.Br />
                    <X.Br />
                    <X.Br />
                    <X.Divider />
                    `}
                />
                <X.Divider />
                <X.Br />
                <X.Br />
                <X.Br />
                <X.Divider />
            </X.HighlightBlock>
            <X.H2>无序列表</X.H2>
            <X.P>
                无序列表的每一项可以是纯文本、段落组件、或者嵌套其他任何内容（但通常不是很推荐这样做）。\n
                注意每一个列表项的`first-child`的`margin-top`和`last-child`的`margin-bottom`会被置为`0`。
            </X.P>
            <X.HighlightBlock bgcolor="gray">
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
                        <X.CodeBlock
                            language="jsx"
                            code={\`
                            console.log('Hello, world!')
                            \`}
                        />
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
                    <X.CodeBlock
                        language="jsx"
                        code={`
                        console.log('Hello, world!')
                       `}
                    />
                </X.Uli>
                <X.Uli>
                    <X.P>注意第四项的代码块的`margin-bottom`被移除了</X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.P>
                与html的`ul``li`标签不同的是，无序列表直接在任意位置写列表项组件即可，而不需要一个父组件包裹。---
                这也是此组件体系的设计理念之一：尽量使得行文*线性化*，减少组件嵌套。
            </X.P>
            <X.P>无序列表组件的上述特性同样适用于有序列表组件，因此下一节中不再重复。</X.P>
            <X.H2>有序列表</X.H2>
            <X.P>
                有序列表项会自动渲染列表序号。然而正如前面提到的，列表项可以直接写在文档的任意位置，而渲染序号只是从头至尾机械地设置一个不断自增的变量。---
                因此当文档中出现两处以上有序列表时，需要通过`reset`重置序号的渲染。
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.P noMarginBottom>列表1：</X.P>
                    <X.Oli reset>第一项（重置）</X.Oli>
                    <X.Oli>第二项</X.Oli>
                    <X.Oli>第三项</X.Oli>
                    <X.Oli>第四项</X.Oli>
                    <X.P noMarginBottom>列表2：</X.P>
                    <X.Oli reset>第一项（重置）</X.Oli>
                    <X.Oli>第二项</X.Oli>
                    `}
                />
                <X.P noMarginBottom>列表1：</X.P>
                <X.Oli reset>第一项（重置）</X.Oli>
                <X.Oli>第二项</X.Oli>
                <X.Oli>第三项</X.Oli>
                <X.Oli>第四项</X.Oli>
                <X.P noMarginBottom>列表2：</X.P>
                <X.Oli reset>第一项（重置）</X.Oli>
                <X.Oli>第二项</X.Oli>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>
                    这样线性设计无法满足嵌套有序列表的需求，也就是有序列表的一项是另一个有序列表。但考虑到嵌套列表应用场景很少，为保持组件的简洁性牺牲了这一需求。
                </X.P>
            </X.HighlightBlock>
            <X.H1>水平布局</X.H1>
            <X.P>水平布局组件提供一个`flex-direction`为`row`的容器。</X.P>
            <X.H3>设置主轴上的对齐方式</X.H3>
            <X.P>使用方法与`justify-content`CSS属性相同。</X.P>
            <X.HighlightBlock bgcolor="gray">
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
            <X.HighlightBlock bgcolor="gray">
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
                有些场景例如双栏正文、双栏列表可能希望几个宽度不确定的元素均分水平宽度。这时可以用`flex1`属性。\n
                注意下面示例中，使用和不使用`flex1`属性的区别：
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.FlexRow gap={24}>
                        <X.P>
                            夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。---
                            摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。---
                            购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                        </X.P>
                        <X.P>
                            浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                        </X.P>
                    </X.FlexRow>

                    <X.FlexRow gap={24} flex1>
                        <X.P>
                            夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。---
                            摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。---
                            购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                        </X.P>
                        <X.P>
                            浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                        </X.P>
                    </X.FlexRow>
                    `}
                />
                <X.FlexRow gap={24}>
                    <X.P>
                        夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。---
                        摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。---
                        购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                    </X.P>
                    <X.P>
                        浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                    </X.P>
                </X.FlexRow>
                <X.FlexRow gap={24} flex1>
                    <X.P>
                        夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。---
                        摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。---
                        购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                    </X.P>
                    <X.P>
                        浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
                    </X.P>
                </X.FlexRow>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>使用水平布局排版列表时，需要额外用`div`包裹列表项。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="gray">
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
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock language="jsx" code='<X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />' />
                <X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            </X.HighlightBlock>
            <X.P>一些更复杂的例子：</X.P>
            <X.HighlightBlock bgcolor="gray">
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
                高亮块组件只提供一个有背景色的容器，因此其内部可以嵌套其他组件。\n
                高亮块会自动移除第一个子元素的`margin-top`和最后一个子元素的`margin-bottom`。\n
                `bgcolor`的默认值是`golden`，可选值有`red`和`gray`。
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>示例</X.H3>
                <X.CodeBlock
                    language="jsx"
                    code={`
                    <X.HighlightBlock bgcolor="gray">
                        <X.P>高亮块组件可以嵌套，事实上，每一个*示例*区域都是一个高亮块组件。</X.P>
                    </X.HighlightBlock>

                    <X.HighlightBlock>
                        <X.P>高亮块中可以使用其他组件。</X.P>
                        <X.Formula text="\\int_{a}^{b} f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\cdot \\Delta x" />
                    </X.HighlightBlock>

                    <X.HighlightBlock bgcolor="red">
                        <X.P>
                            我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。---
                            气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
                        </X.P>
                    </X.HighlightBlock>
                    `}
                />
                <X.HighlightBlock bgcolor="gray">
                    <X.P>高亮块组件可以嵌套，事实上，每一个*示例*区域都是一个高亮块组件。</X.P>
                </X.HighlightBlock>
                <X.HighlightBlock>
                    <X.P>高亮块中可以使用其他组件。</X.P>
                    <X.Formula text="\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i) \cdot \Delta x" />
                </X.HighlightBlock>
                <X.HighlightBlock bgcolor="red">
                    <X.P>
                        我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。---
                        气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
                    </X.P>
                </X.HighlightBlock>
            </X.HighlightBlock>
            <X.H1>图片</X.H1>
            <X.P>使用百分比宽度，包裹在flex容器中，或不超过600px</X.P>
            <X.HighlightBlock>正在开发中~</X.HighlightBlock>
            <X.H1>表格</X.H1>
            <X.P>对于仅展示文本，无特殊格式需求的简单表格，可以通过`fromText`来快速定义表格。单元格之间用`|`分割。</X.P>
            <X.HighlightBlock bgcolor="gray">
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
            <X.HighlightBlock bgcolor="gray">
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
            <X.HighlightBlock bgcolor="gray">
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
            <X.HighlightBlock bgcolor="gray">
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
                import {useLocation, Link} from 'react-router-dom';
                import categories from '../../blogs/categories';
                import RightArrowIcon from '../../assets/rightarrow.svg';
                import './SideBar.css';

                function SideBarList(props) {
                    const {category, currentPath} = props;
                    const [showList, setShowList] = useState(true);
                    return (
                        <div className={\`sidebarlist\${showList ? ' showlist' : ''}\`}>
                            <div className="sidebarlist-head" onClick={() => setShowList(!showList)}>
                                <h3 className="sidebarlist-title">{category.categoryName + \` (\${category.blogs.length})\`}</h3>
                                <img className="sidebarlist-title-rightarrow" src={RightArrowIcon} />
                            </div>
                            <ul className="sidebarlist-ul" style={{height: showList ? 34 * category.blogs.length + 'px' : '0'}}>
                                {category.blogs.map((blog, index) => (
                                    <li key={index}>
                                        <Link className={\`sidebarlist-li\${currentPath === blog.path ? ' active' : ''}\`} to={blog.path}>{blog.blogName}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }

                export default function SideBar() {
                    const location = useLocation();
                    return (
                        <div id="sidebar">
                            {categories.map((category, index) => (
                                <SideBarList key={index} category={category} currentPath={location.pathname} />
                            ))}
                        </div>
                    );
                }
                `}
            />
        </X.BlogWrapper>
    );
}
