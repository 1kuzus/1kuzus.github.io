import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>相关链接：</X.P>
            <X.Uli>@MiniTracker: Large-Scale Sensitive Information Tracking in Mini Apps[https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10197457]@</X.Uli>
            <X.Uli>@Github仓库：flyboss/MiniTracker[https://github.com/flyboss/MiniTracker]@</X.Uli>
            <X.H1>1.Introduction</X.H1>
            <X.P>工具的三个组件：Taint Tracker、Util Analyzer、Page Analyzer。</X.P>
            <X.P>提出了一些挑战和解决方案：</X.P>
            <X.Oli>挑战：跨语言的数据流（WXML ~ JavaScript）\n解决：见Page Analyzer</X.Oli>
            <X.Oli>挑战：异步数据流\n解决：理解异步流程并将其等效地转换为同步流程</X.Oli>
            <X.Oli>挑战：识别属性链（如`a.b.c`），小程序打包后有很多单字母变量名，用名称匹配会有大量FP\n解决：在JS对象的粒度上应用基于属性链的分析，见Taint Tracker</X.Oli>
            <X.Oli>挑战：识别函数别名（由于模块化、函数可以复制给变量等）\n解决：见Util Analyzer</X.Oli>
            <X.H1>2.Preliminaries on Mini Apps</X.H1>
            <X.P>略。</X.P>
            <X.H1>3.Problem Setting and Attacker Model</X.H1>
            <X.P>目标：</X.P>
            <X.P>威胁模型：出于疏忽或恶意的小程序开发者。</X.P>


        </>
    );
}
