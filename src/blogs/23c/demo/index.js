import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>示例</X.Title>

            <X.H1>基础组件</X.H1>
            <X.H2>标题</X.H2>
            <X.P>使用如下代码定义：</X.P>
            <X.CodeBlock
                language="jsx"
                code={`
                <X.H1>一级标题</X.H1>
                <X.H2>二级标题</X.H2>
                <X.H3>三级标题</X.H3>
                `}
            />
            <X.HighlightBlock bgcolor="gray">
                <X.H1>一级标题</X.H1>
                <X.H2>二级标题</X.H2>
                <X.H3>三级标题</X.H3>
            </X.HighlightBlock>
            <X.Divider />

            <X.H2>有序列表</X.H2>
            <X.P>有序列表可以使用`{`<X.Oli>...</X.Oli>`}`来定义。</X.P>
            <X.Oli>第一项</X.Oli>
            <X.Oli>第二项</X.Oli>
            <X.Oli>第三项</X.Oli>

            <X.H2>无序列表</X.H2>
            <X.P>无序列表可以使用`{`<X.Uli>...</X.Uli>`}`来定义。</X.P>
            <X.Uli>第一项</X.Uli>
            <X.Uli>
                <X.P>列表项可以嵌套`段落组件`，但是*最好不要嵌套其他组件*。</X.P>
            </X.Uli>
            <X.Uli>第三项</X.Uli>
            <X.Br />
            <X.Oli>有序列表项会自动渲染列表序号</X.Oli>

            <X.H2>重置有序列表</X.H2>
            <X.Oli>对有序列表序号的渲染是线性扫描，如果不重置则会永远继续下去；</X.Oli>
            <X.Oli reset>
                <X.P>可以通过`{`<X.Oli\\ reset>...</X.Oli>`}`来重置列表序号；</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    这样的设计无法应对*嵌套*有序列表，但为了保持组件的简洁性，同时考虑到嵌套列表应用场景很少，牺牲了这一特性。
                </X.P>
            </X.Oli>

            <X.H2>段落</X.H2>
            <X.P>
                夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。\n
                摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。\n
                购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
            </X.P>

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
                    {`$\\int_{a}^{b} f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$`}，
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
            <X.Br />
            <X.P>上述内容的源代码为：</X.P>
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
                        {\`$\\\\int_{a}^{b} f(x)dx = \\\\lim_{n \\\\to \\\\infty} \\\\sum_{i=1}^{n} f(x_i) \\\\cdot \\\\Delta x$\`}，
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

            <X.H1>公式</X.H1>
            <X.P>通过`Formula`组件定义一个公式：</X.P>
            <X.CodeBlock language="jsx" code='<X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />' />
            <X.Formula text="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            <X.P>更多的例子如下：</X.P>
            <X.Formula
                text="
                \begin{cases}
                ax + by &= c \\
                dx - ey &= f
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

            <X.H1>表格</X.H1>
            <X.Table>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>uid</th>
                </tr>
                <tr>
                    <td>Alice</td>
                    <td>
                        <X.P>`18`</X.P>
                    </td>
                    <td>4p6a4eumxmki</td>
                </tr>
                <tr>
                    <td rowSpan={2}>Bob</td>
                    <td>19</td>
                    <td>kob5wkh1gpff</td>
                </tr>
                <tr>
                    <td rowSpan={2}>23</td>
                    <td>jxchv2sx3s5a</td>
                </tr>
                <tr>
                    <td>Jack</td>
                    <td rowSpan={2}>nx3vb156864f</td>
                </tr>
                <tr>
                    <td>Jack</td>
                    <td>nx3vb156864f</td>
                </tr>
            </X.Table>

            <X.H1>高亮块</X.H1>
            <X.P>使用如下代码定义：</X.P>
            <X.CodeBlock
                language="jsx"
                code={`
                <X.HighlightBlock bgcolor="red">
                    <X.P>
                        ...
                    </X.P>
                </X.HighlightBlock>
                `}
            />
            <X.P>
                `HighlightBlock`组件只提供一个有背景色的容器，因此其内部可以嵌套其他组件。\n
                高亮块会自动移除第一个子元素的`margin-top`和最后一个子元素的`margin-bottom`。\n
                `bgcolor`的默认值是`golden`。
            </X.P>
            <X.HighlightBlock>
                <X.P>高亮块中可以使用公式组件。</X.P>
                <X.Formula text="\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \cdot \Delta x" />
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="red">
                <X.P>
                    我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
                </X.P>
            </X.HighlightBlock>

            <X.H1>代码块</X.H1>
            <X.P>通过`CodeBlock`组件定义一个代码块：</X.P>
            <X.CodeBlock
                language="jsx"
                code={`<X.CodeBlock language="python" code='with open("./tool.js","r") as f:' />`}
            />
            <X.H2>单行代码</X.H2>
            <X.CodeBlock language="python" code='with open("./tool.js","r") as f:' />
            <X.CodeBlock language="cpp" code="bool operator <(const NODE &other)const" />
            <X.CodeBlock language="c" code='fprintf(stdout, "hello world\n");' />
            <X.CodeBlock language="markdown" code="[Prism](https://prismjs.com) is a cool syntax highlighter." />
            <X.CodeBlock language="js" code="let entity = /&#x?[\da-f]{1,8};/;" />
            <X.CodeBlock language="ts" code="type SearchFunc = (source: string, subStr: string) => boolean;" />
            <X.H2>多行代码</X.H2>
            <X.H3>cpp</X.H3>
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
                    unordered_map <string, vector<string> > m;
                    m["key"] = "\\\\"; // this is an error
                    
                    return -2e3 + 12l;
                }
                `}
            />
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
                                <h3 className="sidebarlist-title">{category.categoryName + \`  (\${category.blogs.length})\`}</h3>
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
