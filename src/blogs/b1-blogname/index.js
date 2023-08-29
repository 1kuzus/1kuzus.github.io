import X from '../../component/X';
import {useEffect, useRef} from 'react';
export default function Testblog() {
    return (
        <X.BlogWrapper>
            <X.Title>测试Blog</X.Title>
            <X.H1>基础组件</X.H1>
            <X.H2>段落</X.H2>
            <X.P>
                夜晚的城市灯光璀璨夺目，高楼的霓虹灯在黑夜中闪烁不停，像是星空中的繁星在闪烁。\n
                摩天轮缓缓转动，将人们带入一个绚丽多彩的世界，让他们忘记日常的烦忧。\n
                购物中心里，五颜六色的商品琳琅满目，人们拿着购物袋匆匆穿梭，寻找着自己心仪的物品。时尚与潮流在这里汇聚，流行的节奏从不停歇。
                浓郁的咖啡香气弥漫开来，与人们的谈笑声交织成一幅城市特有的画面。街头艺人弹奏着吉他，歌声飘荡在空气中，与城市的脉搏合奏出一曲动人的旋律。
            </X.P>
            <X.H2>二级标题</X.H2>
            <X.P>
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要写`\\\\`。\n\n `单独一行的高亮块`\n\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.H2>在 class 组件中声明 ref</X.H2>
            <X.P>
                要在@class组件[https://react.docschina.org/reference/react/Component]@中声明
                一个ref，请调用`createRef`并将其结果分配给`class`字段。\n 如果你现在将`{'ref={this.inputRef}'}`传递
                给JSX中的`{'<input>'}`，React将把input的DOM节点赋值给`this.inputRef.current`。
            </X.P>
            <X.H1>高亮块</X.H1>
            <X.P highlightBackground="golden">
                这里是一句普通的文本，你可以使用`\`\``符号包裹内容从而实现`像这样`的高亮效果。你可能会怀疑`\``这个符号是如何展示在屏幕上的。\n答案是使用`\\\``。
                同理打出`\\`需要在实际编写`blog html`时写`\\\\`。\n
                这是一个指向@`百度`[https://www.baidu.com]@的超链接，格式为`\@百度[https://www.baidu.com]\@`。同理需要使用`\\\@`打出`\@`符号。
            </X.P>
            <X.P>
                当*橘子和苹果*一起成群结队地在田野里玩耍，阳光洒在他们身上，照得他们*光芒四射*。小兔子从旁边跳过，欢快地蹦蹦跳跳，像是在为他们的游戏加入了一份欢乐。
                不远处，一朵朵绚丽多彩的花朵竞相绽放，为这个美丽的场景增添了一抹生机与色彩。在这个宁静的时刻，大自然似乎也在为这些生命欢呼，诉说着生命的美好与活力。\n
                这段话里的加粗效果是用`\*`打出来的。
            </X.P>
            <X.P highlightBackground="red">
                我们怀着极大的关切提醒您，当前我们所在地区可能会面临极端天气情况的威胁。气象部门预测，未来几天可能会出现强风、暴雨、甚至可能的洪水等极端气象事件。
            </X.P>
            <X.H1>公式</X.H1>
            <X.Formula text="P(A|B) = \frac{{P(B|A) \cdot P(A)}}{{P(B)}}" />
            <X.Formula text="\frac{{dy}}{{dx}} = \frac{{dy}}{{du}} \cdot \frac{{du}}{{dx}}" />
            <X.Formula text="x+y=1" />
            <X.Formula text="\int_{a}^{b} f(x) \, dx = \lim_{{n \to \infty}} \sum_{{i=1}}^{n} f(x_i) \cdot \Delta x" />
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
            <X.H1>代码块</X.H1>
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
            <X.H3>bash</X.H3>
            <X.CodeBlock
                language="bash"
                code={`
                #!/bin/bash

                ###### CONFIG
                ACCEPTED_HOSTS="/root/.hag_accepted.conf"
                BE_VERBOSE=false
                
                if [ "$UID" -ne 0 ]
                then
                 echo "Superuser rights required"
                 exit 2
                fi
                
                genApacheConf(){
                 echo -e "# Host \${HOME_DIR}$1/$2 :"
                }
                
                echo '"quoted"' | tr -d \\" > text.txt
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
                    color: #f0f0f0;
                    background: #600;
                    font-family: Chunkfive, sans;
                    --heading-1: 30px/32px Helvetica, sans-serif;
                }

                div {
                    color: var(--div-color) !important;
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
            <X.H3>diff</X.H3>
            <X.CodeBlock
                language="diff"
                code={`
                Index: languages/ini.js
                ===================================================================
                --- languages/ini.js    (revision 199)
                +++ languages/ini.js    (revision 200)
                @@ -1,8 +1,7 @@
                 hljs.LANGUAGES.ini =
                 {
                   case_insensitive: true,
                -  defaultMode:
                -  {
                +  defaultMode: {
                     contains: ['comment', 'title', 'setting'],
                     illegal: '[^\\s]'
                   },
                
                *** /path/to/original/path/to/original/path/to/original/path/to/original/path/to/original/path/to/original/path/to/original/path/to/original timestamp
                --- /path/to/new      timestamp
                ***************
                *** 1,3 ****
            `}
            />
            <X.H3>jsx</X.H3>
            <X.CodeBlock
                language="jsx"
                code={`
                import React, { Component } from 'react';
                import ReactMarkdown from 'react-markdown';     // 解析 markdown
                import remarkGfm from 'remark-gfm';             // markdown 对表格/删除线/脚注等的支持
                import MarkNav from 'markdown-navbar';          // markdown 目录
                import 'markdown-navbar/dist/navbar.css';

                class App extends Component {
                constructor(props) {
                    super(props)
                    this.state = {
                    SourceData: ''
                    }
                }

                componentDidMount() {
                    var $this = this;
                    var xmlhttp = new XMLHttpRequest();

                    xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        $this.setState({
                        SourceData: xmlhttp.responseText
                        })
                    }
                    }
                    // 文件目录在 public/static/test.md 这里不需要写 public 因为打包之后没有此目录。
                    xmlhttp.open("GET", "/static/test.md", true); 
                    xmlhttp.send();
                }

                render() {
                    return (
                    <div className="App">
                        <div className="leftSide">
                        <MarkNav
                            className="toc-list"
                            source={this.state.SourceData}
                            ordered={true}
                        />
                        </div>
                        <div
                        className="markdown-body content">
                            <ReactMarkdown
                            children={this.state.SourceData}
                            remarkPlugins={[remarkGfm]}
                            />
                        </div>
                    </div>
                    );
                }
                }
                export default App;
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
                                        <Link className={\`sidebarlist-li\${currentPath === blog.path ? ' active' : ''}\`} to={blog.path}>
                                            {blog.blogName}
                                        </Link>
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
