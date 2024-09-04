import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/papers-sec-240514-taintmini/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>论文链接：</X.P>
            <X.Uli>@TAINTMINI: Detecting Flow of Sensitive Data in Mini-Programs with Static Taint Analysis[https://chaowang.dev/publications/icse23.pdf]@</X.Uli>
            <X.H1>1.Introduction</X.H1>
            <X.P>小程序市场发展迅速，已有的针对Mobile Apps的污点分析技术在以下情况存在一些不足：</X.P>
            <X.Uli>多语言（WXML/JavaScript）</X.Uli>
            <X.Uli>大量的异步event handler（例如生命周期`onLaunch`/`onReady`）</X.Uli>
            <X.Uli>跨页数据流动</X.Uli>
            <X.Uli>跨小程序数据流动</X.Uli>
            <X.P>针对这些不足，TaintMini会追踪如下数据流：</X.P>
            <X.Uli>WXML视图层 ~ JavaScript逻辑层</X.Uli>
            <X.Uli>events ~ events</X.Uli>
            <X.Uli>page ~ page</X.Uli>
            <X.Uli>Mini-Program ~ Mini-Program</X.Uli>
            <X.P>文章的主要贡献是：</X.P>
            <X.Uli>提出了一种新的污点分析技术，拓展ODG`(Object Dependency Graph)`为UDFG`(Universal Data Flow Graph)`；</X.Uli>
            <X.Uli>实验评估，`238866`个小程序中有`11.38%`出现了隐私数据流；</X.Uli>
            <X.Uli>实际应用，检测恶意应用。</X.Uli>
            <X.H1>2.Background</X.H1>
            <X.P>小程序主要有`app.json`/JavaScript/WXML/WXSS四个部分，其中WXSS不包含数据流；通常敏感数据的来源是需要申请操作系统权限的操作（如定位、蓝牙）、来自host-app的数据（如微信小程序需要访问微信步数）和用户输入。</X.P>
            <X.P>出于性能考虑，微信对单个小程序大小有限制，复杂操作可能需要多个小程序配合完成，例如购物小程序需要调起支付小程序。此时需要用到`navigateToMiniProgram`API。</X.P>
            <X.H1>3.Example & Challenges</X.H1>
            <X.H2>一个例子</X.H2>
            <X.Image src="1.jpg" width="100%" filterDarkTheme />
            <X.P>这个例子中就包含了各种类型的数据流动，详见原文。</X.P>
            <X.H2>与Web Apps和Mobile Apps比较</X.H2>
            <X.Image src="2.jpg" width="800px" filterDarkTheme />
            <X.P>在视图层，小程序不能操作DOM；小程序支持列表/条件渲染（`wx:for/if`）。\n在逻辑层，JavaScript是解释型、弱类型语言；而Java类似编译型语言、是强类型语言。</X.P>
            <X.H2>挑战与研究范围</X.H2>
            <X.P>为了检测小程序隐私数据潜在的泄露风险，有三类数据流目前还没有现有的污点分析技术解决：</X.P>
            <X.Uli>WXML和JavaScript的互相作用，如行内逻辑`wx:for/if/else`，`wxs`代码块</X.Uli>
            <X.Uli>异步回调：执行的顺序取决于外部系统，如用户的行为，无法预先知晓</X.Uli>
            <X.Uli>跨页和跨小程序数据流动</X.Uli>
            <X.P>本文只研究微信平台小程序。微信小程序体量大、微信也是最早提出“小程序”概念的。</X.P>
            <X.H1>4.Design</X.H1>
            <X.H2>UDFG Generation</X.H2>
            <X.P>第一步是生成UDFG（通用数据流图，`Universal Data Flow Graph`），这是论文提出的新概念：</X.P>
            <X.Image src="3.jpg" width="600px" filterDarkTheme />
            <X.P>UDFG包含两个重要结构：</X.P>
            <X.Uli>`Data Node`：数据流分析的最小粒度，可能是一个JS对象或WXML标签；生成方式是通过给每个页面JS文件生成AST，此过程会合并通过模块化导出/导入但最后组成同一页面的文件。</X.Uli>
            <X.Uli>`Event Group`：事件组有一个非常重要的性质，就是*事件组的代码同步执行*；同一个JS对象节点可以属于不同的事件组。</X.Uli>
            <X.H2>Data-Flow Propgation</X.H2>
            <X.P>这一部分论文用数学形式给出了追踪数据传播的过程：</X.P>
            <X.Image src="4.jpg" width="600px" filterDarkTheme />
            <X.P>先看Notations：</X.P>
            <X.Uli>第一、二条很好理解，只是用符号表示了UDFG的两个重要结构；</X.Uli>
            <X.Uli>第三条{`$S_p^{(i,n)}$`}表示一条语句$S_p$（原文是`p-th JavaScript code statement`，但$p$的数值并不重要）属于事件组$e_i$，并且由于事件组同步执行，一定会存在一个语句被执行的次序$n$；</X.Uli>
            <X.Uli>第四条也好理解；</X.Uli>
            <X.Uli>第五条描述的情况是，由微信官方架构所致，$e_j$必然同步地在$e_i$后执行，例如生命周期之间存在执行的先后顺序；</X.Uli>
            <X.Uli>
                <X.P>第六条表示事件组$e_i$中有对$e_j$的调用，并且调用的语句是{`$S_p^{(i,n)}$`}，这就暗含了一个性质：事件组$e_i$中执行次序大于$n$的语句，会与事件组$e_j$，这就暗含了一个性质：事件组$e_i$中执行次序大于$n$的语句，会与事件组$e_j$异步执行。如果文字描述不够直观可以参考下面的例子：</X.P>
                <X.Image src="5.jpg" width="300px" />
                <X.P>这个例子中{`$S_p^{(i,n)}$`}就是`request`函数，后续的`console.log`语句就是$e_i$中执行次序大于$n$的语句，它们会与$e_j$异步执行。</X.P>
            </X.Uli>
            <X.P>然后是Rules：</X.P>
            <X.Uli>第一、二条可以概括为“事件组的传递性”，第一条是官方架构所致的传递关系，第二条是间接调用导致的传递关系；</X.Uli>
            <X.Uli>第三、四条描述了数据的*同步*传递；</X.Uli>
            <X.P>后三条涉及一个关键思想，*乐观地*（原文是`optimistically`）检测数据流动：对于不确定执行顺序的异步数据流，*有可能性*即视为可以流动。</X.P>
            <X.Uli>
                <X.P>关于第五、六条，为什么第六条多了一个$n \lt m$的与条件，参考下面的例子：</X.P>
                <X.Image src="6.jpg" width="800px" filterDarkTheme />
                <X.P>在两条规则、分别$n \lt m$和$n \gt m$共四种可能的情况中，有一种情况是必然会有$O_a$到$O_c$的数据流动，两种情况是可能会有（取决于异步执行的情况），只有一种情况是不可能发生数据流动的；根据前面提到的乐观原则，仅将这一种情况排除在外（也就是第六条规则但$n \gt m$的情况）。</X.P>
            </X.Uli>
            <X.Uli>第七条同样是乐观原则的体现：没有任何约束关系的事件组，执行顺序也是任意的，因此也存在数据流动的可能性，也要考虑这种数据流动。</X.Uli>
            <X.H2>Data-Flow Resolution</X.H2>
            <X.P>TaintMini的目标是分析污点源和污点汇。</X.P>
            <X.H1>5.Evaluation</X.H1>
            <X.P>数据集来源于爬取并经过查重后的`238866`个小程序。精度方面，人工分析了`100`个小程序作为Ground Truth，其中有`0%`的`FP`，`5%`的`FN`（由于用户使用了非官方 API，或直接从`input`收集手机号）。性能方面，平均运行时间为`3.73s`，检测出`11.38%`存在敏感数据流。</X.P>
            <X.H1>6.Application</X.H1>
            <X.P>其中一个应用是检测恶意小程序。例如，研究团队发现了一个游戏小程序接收了其他小程序传来的位置信息，并且通过网络请求发送出去。认为该程序可能是恶意应用。</X.P>
            <X.H1>7.Discussion</X.H1>
            <X.P>研究的一些局限包括：</X.P>
            <X.Uli>没有考虑隐式数据流（污点变量在条件分支中）</X.Uli>
            <X.Uli>存在一些FN（可能要诉诸动态分析了）</X.Uli>
            <X.Uli>可以拓展到其他平台</X.Uli>
            <X.H1>8.Related Works</X.H1>
            <X.P>略。</X.P>
            <X.H1>9.Conclusion</X.H1>
            <X.P>论文提出了静态污点分析框架TaintMini，可以检测微信小程序中敏感数据的流动。</X.P>
        </>
    );
}
