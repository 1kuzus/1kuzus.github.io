import X from 'src/component/X';

function Pdfref(props) {
    const { file, page, desc, children } = props;
    return (
        <X.Uli>
            <X.P>{`@${desc}[https://cs.nju.edu.cn/tiantan/software-analysis/${file}.pdf#page=${page}]@`}</X.P>
            {children}
        </X.Uli>
    );
}

export default function Post() {
    return (
        <>
            <X.H1>参考资料</X.H1>
            <X.Uli>@课程主页 - 南京大学《软件分析》[https://tai-e.pascal-lab.net/lectures.html]@</X.Uli>
            <X.Uli>@静态分析基础教程[https://static-analysis.cuijiacai.com/]@</X.Uli>
            <X.H1>L1. Introduction</X.H1>
            <Pdfref file="introduction" page="23" desc="莱斯定理 - 不存在“完美”的静态分析算法" />
            <Pdfref file="introduction" page="35" desc="Soundness vs. Completeness" />
            <X.Uli>静态分析算法大多保证Soundness（允许误报），妥协Completeness</X.Uli>
            <X.H1>L2. Intermediate Representation</X.H1>
            <Pdfref file="IR" page="13" desc="AST vs. IR" />
            <Pdfref file="IR" page="18" desc="三地址码" />
            <Pdfref file="IR" page="46" desc="Control Flow Analysis (Control Flow Graph, CFG)" />
            <Pdfref file="IR" page="49" desc="Basic Blocks (BB)" />
            <Pdfref file="IR" page="59" desc="构建Basic Blocks（算法）" />
            <Pdfref file="IR" page="77" desc="构建Basic Blocks（例子）" />
            <Pdfref file="IR" page="86" desc="构建CFG（算法）" />
            <Pdfref file="IR" page="96" desc="构建CFG（例子）" />
            <X.H1>L3-L4. Data Flow Analysis - Applications</X.H1>
            <Pdfref file="DFA-AP" page="31" desc="前向分析、反向分析、Transfer Function" />
            <Pdfref file="DFA-AP" page="35" desc="BB内和BB间的控制流传递（前向分析、meet operator）" />
            <Pdfref file="DFA-AP" page="36" desc="BB内和BB间的控制流传递（反向分析）" />
            <X.H2>可达定义分析 Reaching Definitions Analysis</X.H2>
            <Pdfref file="DFA-AP" page="41" desc="问题定义：分析某个“定义”是否能到达某个程序点" />
            <X.Uli>应用举例：如果在初始时视为所有变量均定义为`undef`，且该定义能到达某个变量被使用的点，则说明程序可能存在未定义的变量使用。</X.Uli>
            <Pdfref file="DFA-AP" page="44" desc="数据抽象：Data Flow Values/Facts" />
            <Pdfref file="DFA-AP" page="48" desc="Transfer Function（例子）" />
            <Pdfref file="DFA-AP" page="50" desc="Transfer Function和控制流的传递" />
            <Pdfref file="DFA-AP" page="53" desc="算法（迭代算法）" />
            <Pdfref file="DFA-AP" page="121" desc="例子" />
            <X.H2>活跃变量分析 Live Variables Analysis</X.H2>
            <Pdfref file="DFA-AP" page="142" desc="问题定义：分析某个变量在某个程序点是否“活跃”（即在该点之后的某条控制流路径上会被使用）" />
            <Pdfref file="DFA-AP" page="143" desc="数据抽象：Data Flow Values/Facts" />
            <Pdfref file="DFA-AP" page="163" desc="Transfer Function和控制流的传递" />
            <Pdfref file="DFA-AP" page="164" desc="算法（迭代算法）" />
            <Pdfref file="DFA-AP" page="225" desc="例子" />
            <X.H2>可用表达式分析 Available Expressions Analysis</X.H2>
            <Pdfref file="DFA-AP" page="228" desc="问题定义：分析某个表达式在某个程序点是否“可用”（即在该点之前的所有控制流路径上均已计算过该表达式，且其操作数未被重新定义）" />
            <X.Uli>应用举例：程序优化，在程序点处可以把表达式替换成上一次的计算结果，避免重复计算。</X.Uli>
            <Pdfref file="DFA-AP" page="229" desc="数据抽象：Data Flow Values/Facts" />
            <Pdfref file="DFA-AP" page="242" desc="Transfer Function和控制流的传递" />
            <Pdfref file="DFA-AP" page="248" desc="算法（迭代算法）" />
            <Pdfref file="DFA-AP" page="289" desc="例子" />
            <X.H2>总结</X.H2>
            <Pdfref file="DFA-AP" page="298" desc="三个算法的总结表格" />
            <X.H1>L5-L6. Data Flow Analysis - Foundations</X.H1>
            <Pdfref file="DFA-FD" page="30" desc="偏序关系（自反性、反对称性、传递性）" />
            <X.Uli>
                <X.P>关于对称性和反对称性：</X.P>
                <X.P>若二元关系$R$满足对称性：$a R b \Rightarrow b R a$</X.P>
                <X.P>若二元关系$R$满足反对称性：$a R b \wedge b R a \Rightarrow a = b$（即除非相等，否则不能双向成立；例如小于等于关系）</X.P>
                <X.P>对称性和反对称性并不是互斥的关系：例如相等关系同时满足对称性和反对称性。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>关于全序关系和偏序关系：</X.P>
                <X.P>全序关系：在偏序关系的基础上，要求任意两个元素都可以比较（$a R b \vee b R a$）</X.P>
                <X.P>例如，整数集上的小于等于关系是全序关系（任意两个整数都可以比较大小）；而集合的子集关系是偏序关系（两个集合可能互不包含）。</X.P>
            </X.Uli>
            <Pdfref file="DFA-FD" page="61" desc="上界和下界" />
            <Pdfref file="DFA-FD" page="68" desc="最小上界和最大下界" />
            <Pdfref file="DFA-FD" page="81" desc="格 (Lattice)：在偏序集中，任意两个元素都有最小上界和最大下界" />
            <Pdfref file="DFA-FD" page="97" desc="完全格 (Complete Lattice)：在偏序集中，任意子集都有最小上界和最大下界" />
            <X.Uli>是格、但不是完全格的例子：整数集上的小于等于关系；考虑正整数子集，显然没有最小上界。</X.Uli>
            <X.Uli>有限格一定是完全格，完全格不一定是有限格（例如$[0,1]$区间内实数集上的小于等于关系）。</X.Uli>
            <Pdfref file="DFA-FD" page="103" desc="积格 (Product Lattice)" />
            <Pdfref file="DFA-FD" page="106" desc="从格的角度理解数据流分析" />
            <Pdfref file="DFA-FD" page="112" desc="从格的角度理解数据流分析（例子）" />
            <Pdfref file="DFA-FD" page="118" desc="格上函数的单调性" />
            <Pdfref file="DFA-FD" page="139" desc="不动点定理：考虑有限完全格上的单调函数$f$，对$bottom$迭代$f$最终会收敛到最小不动点，对$top$迭代$f$最终会收敛到最大不动点" />
            <Pdfref file="DFA-FD" page="196" desc="从格的角度理解May Analysis和Must Analysis" />
            <Pdfref file="DFA-FD" page="210" desc="Ours (Iterative Algorithm) vs. Meet-Over-All-Paths (1)" />
            <Pdfref file="DFA-FD" page="223" desc="Ours (Iterative Algorithm) vs. Meet-Over-All-Paths (2)" />
            <X.H2>常量传播 Constant Propagation</X.H2>
            <Pdfref file="DFA-FD" page="230" desc="问题定义：分析某个变量在某个程序点是否保证是一个常量" />
            <Pdfref file="DFA-FD" page="238" desc="数据抽象：格" />
            <Pdfref file="DFA-FD" page="247" desc="Transfer Function" />
            <Pdfref file="DFA-FD" page="253" desc="常量传播的Transfer Function是不满足分配律的（这个例子也解释了为什么MOP更准）" />
            <Pdfref file="DFA-FD" page="259" desc="Worklist算法" />
            <X.Uli>
                <X.P>此处的Worklist算法可以使用集合实现，因为同一个Node （或Basic Block）如果同时是多个Node （或Basic Block）的后继，则可能被重复添加多次。</X.P>
                <X.CodeBlock
                    language="text"
                    highlightLines="4"
                    code={String.raw`
                    while (Worklist is not empty)
                        ...
                        if (old_OUT != OUT[B])
                            Add all successors of B to Worklist
                    `}
                />
            </X.Uli>
            <X.H1>L7. Interprocedural Analysis</X.H1>

        </>
    );
}
