import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24b/papers-sec-a80948-taintmini/';
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
            <X.Image src="1.jpg" width="100%" invertInDarkTheme />
            <X.P>这个例子中就包含了各种类型的数据流动，详见原文。</X.P>
            <X.H2>与Web Apps和Mobile Apps比较</X.H2>
            <X.Image src="2.jpg" width="800px" invertInDarkTheme />
            <X.P>在视图层，小程序不能操作DOM；小程序支持列表/条件渲染（`wx:for/if`）。\n在逻辑层，JavaScript是解释型、弱类型语言；而Java类似编译型语言、是强类型语言。</X.P>
            <X.H2>挑战与研究范围</X.H2>
            <X.P>为了检测小程序隐私数据潜在的泄露风险，有三类数据流目前还没有现有的污点分析技术解决：</X.P>
            <X.Uli>WXML和JavaScript的互相作用，如行内逻辑`wx:for/if/else`，`wxs`代码块</X.Uli>
            <X.Uli>异步回调：执行的顺序取决于外部系统，如用户的行为，无法预先知晓</X.Uli>
            <X.Uli>跨页和跨小程序数据流动</X.Uli>
            <X.P>本文只研究微信平台小程序。微信小程序体量大、微信也是最早提出“小程序”概念的。</X.P>
            <X.H1>4.Design</X.H1>
            <X.P>todotodotdotodtodot</X.P>
            <X.H2>UDFG Generation</X.H2>
            <X.H2>Data-Flow Propgation</X.H2>
            <X.H2>Data-Flow Resolution</X.H2>
            <X.P>TaintMini的目标是分析污点源和污点汇。</X.P>
            <X.H1>5.Evaluation</X.H1>
            <X.P>数据集来源于爬取并经过查重后的`238866`个小程序。精度方面，人工分析了`100`个小程序作为`ground truth`，其中有`0%`的`FP`，`5%`的`FN`（由于用户使用了非官方 API，或直接从`input`收集手机号）。性能方面，平均运行时间为`3.73 s`，检测出`11.38%`存在敏感数据流。</X.P>
            <X.H1>6.Application</X.H1>
            <X.P>其中一个应用是检测恶意小程序。例如，研究团队发现了一个游戏小程序接收了其他小程序传来的位置信息，并且通过网络请求发送出去。</X.P>

            <X.H1>7.Discussion</X.H1>
            <X.P>todotodotdotodtodot</X.P>
            <X.H1>8.Related Works</X.H1>
            <X.P>略。</X.P>
            <X.H1>9.Conclusion</X.H1>
            <X.P>论文提出了静态污点分析框架TaintMini，可以检测微信小程序中敏感数据的流动。</X.P>
        </>
    );
}
