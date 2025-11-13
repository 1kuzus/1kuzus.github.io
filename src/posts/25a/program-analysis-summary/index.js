import X from 'src/component/X';

function Pdfref(props) {
    const {file, page, desc, children} = props;
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
            <X.Uli>@[https://github.com/Ling-Yuchen/Tai-e-assignments]@</X.Uli>
            <X.Uli>@[https://github.com/MirageLyu/Tai-e-assignments]@</X.Uli>
            <X.Uli>@[https://github.com/RicoloveFeng/SPA-Freestyle-Guidance]@</X.Uli>
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
            <X.H2>Assignment 1 Tips</X.H2>
            <X.Uli>
                <X.P>在活跃变量分析中，`newInitialFact`和`newBoundaryFact`都是空集，本次作业中用不到`newBoundaryFact`的参数`cfg`。</X.P>
                <X.CodeBlock language="java" code="public SetFact<Var> newBoundaryFact(CFG<Stmt> cfg)" />
                <X.P>（在下一次常量分析作业中，就需要用到`cfg`来获取方法的参数，`newBoundaryFact`中要把参数初始化成`NAC`）</X.P>
            </X.Uli>
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
            <X.H2>Assignment 2 Tips</X.H2>
            <X.Uli>@【程序分析】南京大学软件分析Lab2（常量传播）易错样例补充[/25a/tai-e-a2-additional-case/]@</X.Uli>
            <X.Uli>
                <X.P>Worklist算法可以使用集合实现，因为同一个Node （或Basic Block）如果同时是多个Node （或Basic Block）的后继，则可能被重复添加多次。</X.P>
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
                <X.P>具体写法为：</X.P>
                <X.CodeBlock language="java" code="Set<Node> worklist = new HashSet<>();" />
                <X.P>取出一个元素并从集合中删除：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    while (!worklist.isEmpty()) {
                        Iterator<Node> it = worklist.iterator();
                        Node node = it.next();
                        it.remove();
                        // ...
                    }
                    `}
                />
            </X.Uli>
            <X.H2>Assignment 3 Tips</X.H2>
            <X.Uli>@【程序分析】南京大学软件分析Lab3（死代码消除）思路[/25a/tai-e-a3-solution/]@</X.Uli>
            <X.H1>L7. Interprocedural Analysis</X.H1>
            <Pdfref file="Inter" page="17" desc="建Call Graph的几种方法（本节讲CHA，后续讲指针分析）" />
            <Pdfref file="Inter" page="21" desc="Static call / Special call / Virtual call" />
            <Pdfref file="Inter" page="25" desc="方法签名" />
            <Pdfref file="Inter" page="26" desc="`Dispatch`：Method Dispatch of Virtual Calls" />
            <Pdfref file="Inter" page="29" desc="`Dispatch`（例子）" />
            <Pdfref file="Inter" page="32" desc="Class Hierarchy Analysis (CHA)" />
            <Pdfref file="Inter" page="39" desc="`Resolve`：Call Resolution of CHA，解析调用点处可能的目标方法" />
            <Pdfref file="Inter" page="46" desc="`Resolve`（例子）" />
            <X.Uli>
                <X.P>receiver object指的是在面向对象方法调用中，实际接收并执行该方法的对象实例：</X.P>
                <X.CodeBlock language="java" code="obj.func()" />
                <X.P>例子中`obj`就是receiver object。</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>关于`Dispatch`和`Resolve`：</X.P>
                <X.Image src="fig1.jpg" width="600px" filterDarkTheme />
                <X.P>对于以下代码：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    A x = new B();
                    x.foo();
                    `}
                />
                <X.Uli>
                    <X.P>`Dispatch(B, A.foo())`用于模拟*运行时*的方法分派，传入的两个参数是receiver object的实际类型`B`和`foo`的部分方法签名（只需要method name + descriptor）。</X.P>
                    <X.P>注意由于多态允许`x`被赋值为其他子类`C`/`D`或类`A`本身，因此实际上静态分析时，不保证能够确定receiver object的实际类型。</X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>`Resolve(callsite of x.foo())`用于*静态*的调用解析，根据receiver object `x`的声明类型`A`（不考虑等号右边）确定可能的目标方法集合。</X.P>
                    <X.P>当`callsite`是一个virtual call时，由于不确定`x`的实际类型，因此需要考虑`A`及其所有子类中是否有重写`foo`方法的情况。此时`Resolve`会在`A`的直接或间接子类上运行`Dispatch`。</X.P>
                </X.Uli>
            </X.Uli>
            <Pdfref file="Inter" page="51" desc="Call Graph (CG)" />
            <Pdfref file="Inter" page="56" desc="建CG的算法" />
            <Pdfref file="Inter" page="77" desc="Interprocedural Control-Flow Graph (ICFG)" />
            <Pdfref file="Inter" page="81" desc="ICFG例子" />
            <Pdfref file="Inter" page="86" desc="过程间数据流分析" />
            <Pdfref file="Inter" page="87" desc="过程间常量传播" />
            <Pdfref file="Inter" page="99" desc="过程间常量传播（例子）：保留call-to-return边是为了更高效地传方法内的局部变量" />
            <Pdfref file="Inter" page="103" desc="过程间常量传播（例子）：对于call-to-return边，要kill掉调用点的等号左侧变量（否则与return edge的结果meet时就变成NAC了）" />
            <Pdfref file="Inter" page="105" desc="过程间常量传播（总结）" />
            <X.H2>Assignment 4 Tips</X.H2>
            <X.Uli>
                <X.P>在过程内常量分析中，`newBoundaryFact`中要把参数初始化成`NAC`，因为方法被调用时，参数的值是不确定的，为了保证Soundness，只能视为`NAC`。在本次作业做更精细的过程间常量分析，因此不再需要对大部分方法的参数做特殊处理，只需要处理整个ICFG的入口方法（如`main`方法）。</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    private void initialize() {
                        // TODO - finish me
                        for (Node node : icfg) {
                            result.setInFact(node, analysis.newInitialFact());
                            result.setOutFact(node, analysis.newInitialFact());
                        }
                        icfg.entryMethods().forEach(method -> {
                            Node entry = icfg.getEntryOf(method);
                            result.setOutFact(entry, analysis.newBoundaryFact(entry));
                        });
                    }
                    `}
                />
                <X.P>（然而作业只考虑整数类型，`main`的`String[] args`参数不会被考虑，实测不对ICFG的入口方法做`newBoundaryFact`初始化也能过OJ）</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>过程内常量传播分析时，节点的$IN$是其所有前驱节点的$OUT$的meet；过程间常量传播分析时，节点的$IN$是其所有前驱节点的$OUT$先经过`transferEdge`，再meet；`transferEdge`主要是为了解决传参和返回的过程，对于过程内的普通边，`transferEdge`什么都不做。</X.P>
                <X.P>`transferEdge`的框架已经实现好了，作业中需要分别实现不同的细分情况。</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    @Override
                    public Fact transferEdge(ICFGEdge<Node> edge, Fact out) {
                        if (edge instanceof NormalEdge) {
                            return transferNormalEdge((NormalEdge<Node>) edge, out);
                        } else if (edge instanceof CallToReturnEdge) {
                            return transferCallToReturnEdge((CallToReturnEdge<Node>) edge, out);
                        } else if (edge instanceof CallEdge) {
                            return transferCallEdge((CallEdge<Node>) edge, out);
                        } else {
                            return transferReturnEdge((ReturnEdge<Node>) edge, out);
                        }
                    }
                    `}
                />
            </X.Uli>
            <X.Uli>
                <X.P>对于call node，`transferCallNode`是恒等函数，不做任何处理。（参数会由`transferCallEdge`处理）</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    protected boolean transferCallNode(Stmt stmt, CPFact in, CPFact out) {
                        // TODO - finish me
                        return out.copyFrom(in);
                    }
                    `}
                />
            </X.Uli>
            <X.Uli>
                <X.P>`transferCallEdge`时，核心是对应实参和形参，实参可以这样获取：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    Invoke invoke = (Invoke) edge.getSource();
                    List<Var> actualParams = invoke.getInvokeExp().getArgs();
                    `}
                />
                <X.P>形参可以这样获取：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    JMethod callee = edge.getCallee();
                    List<Var> formalParams = callee.getIR().getParams();
                    `}
                />
                <X.P>整个`transferCallEdge`的实现：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    @Override
                    protected CPFact transferCallEdge(CallEdge<Stmt> edge, CPFact callSiteOut) {
                        // TODO - finish me

                        // 实参
                        Invoke invoke = (Invoke) edge.getSource();
                        List<Var> actualParams = invoke.getInvokeExp().getArgs();

                        // 形参
                        JMethod callee = edge.getCallee();
                        List<Var> formalParams = callee.getIR().getParams();

                        assert actualParams.size() == formalParams.size();

                        CPFact result = newInitialFact();
                        for (int i = 0; i < actualParams.size(); i++) {
                            Var actual = actualParams.get(i);
                            Var formal = formalParams.get(i);
                            result.update(formal, callSiteOut.get(actual));
                        }
                        return result;
                    }
                    `}
                />
                <X.P>注意`result`是从`newInitialFact`开始添加，而不是基于`callSiteOut`。本地变量不需要流入被调用方法。（本地变量由call-to-return边处理）</X.P>
            </X.Uli>
            <X.Uli>
                <X.P>`transferReturnEdge`时，`edge.getReturnVars`在有多个`return`语句时会返回多个`returnVar`，比如这种情况：</X.P>
                <X.CodeBlock
                    language="java"
                    code={String.raw`
                    int foo(...) {
                        if (...) {
                            return x;
                        } else {
                            return y;
                        }
                    }
                    `}
                />
                <X.P>此时需要对这些返回值做`meetValue`。</X.P>
            </X.Uli>
            <X.H1>L8. Pointer Analysis</X.H1>
            <Pdfref file="PTA" page="18" desc="指针分析：分析指针（变量或字段）可能指向哪些对象，是 May-Analysis" />
            <Pdfref file="PTA" page="29" desc="指针分析（Pointer Analysis）和别名分析（Alias Analysis）的区别" />
            <X.Uli>
                <X.P>指针分析的四个要素：</X.P>
                <Pdfref file="PTA" page="47" desc="1. 堆抽象（其中最常用的是分配点抽象）" />
                <Pdfref file="PTA" page="52" desc="2. 上下文敏感/上下文不敏感" />
                <Pdfref file="PTA" page="69" desc="3. 流敏感/流不敏感" />
                <Pdfref file="PTA" page="76" desc="4. 分析范围，全程序/需求驱动" />
                <Pdfref file="PTA" page="78" desc="本课程中学习的范围（也是目前主流的做法）" />
            </X.Uli>
            <X.Uli>
                <X.P>Java中的指针：Local variable、Static field、Instance field、Array element</X.P>
                <Pdfref file="PTA" page="86" desc="对Array element的建模" />
                <Pdfref file="PTA" page="87" desc="本课程只关注Local variable和Instance field两种指针" />
            </X.Uli>
            <Pdfref file="PTA" page="90" desc="指针影响型语句：Pointer-Affecting Statements" />
            <X.H1>L9-L10. Pointer Analysis - Foundations</X.H1>
            <Pdfref file="PTA-FD" page="6" desc="符号约定" />
            <Pdfref file="PTA-FD" page="8" desc="规则推导式" />
            <Pdfref file="PTA-FD" page="13" desc="规则推导式（图示）" />
            <X.Uli>
                <X.P>指针分析的一个关键是，当$pt(x)$变化时，把改变的部分传播给与$x$相关的其他指针</X.P>
                <X.P>为此，我们构建一个图来连接相关指针，当$pt(x)$变化时，把改变的部分传播给$x$的后继</X.P>
                <Pdfref file="PTA-FD" page="19" desc="（见：实现指针分析的思路）" />
            </X.Uli>
            <Pdfref file="PTA-FD" page="21" desc="指针流图（Pointer Flow Graph, PFG）：有向图，节点是指针（变量或字段），边$x \rightarrow y$表示指针$x$指向的对象可能流向$y$（即也被$y$指向）" />
            <Pdfref file="PTA-FD" page="37" desc="PFG例子：指针分析可以看作求PFG的传递闭包" />
            <X.Uli>
                <X.P>指针分析算法（过程内）</X.P>
                <Pdfref file="PTA-FD" page="44" desc="算法总览" />
                <Pdfref file="PTA-FD" page="46" desc="算法中worklist的元素是一个pair，包含一个指针和一个指向集（Points-to Set）：$\langle n,pts \rangle$" />
                <X.Uli>把$\langle n,pts \rangle$加入worklist，宏观上意味着在随后的过程中$pts$会被并入$pt(n)$</X.Uli>
                <Pdfref file="PTA-FD" page="52" desc="`AddEdge(s,t)`：除了加一条PFG边$s \rightarrow t$之外，还把$\langle t,pt(s) \rangle$加入worklist，确保$s$指向的对象也流向$t$（被$t$指向）" />
                <Pdfref file="PTA-FD" page="57" desc="`Propagate(n,pts)`：把$pts$并入$pt(n)$，并且对于所有$n$的后继$s$，把$\langle s,pts \rangle$加入worklist" />
                <Pdfref file="PTA-FD" page="64" desc="差分传播：从worklist取出$\langle n,pts \rangle$后，实际执行`Propagate`的参数是$n$和$pts-pt(n)$，也就是只传播改变的部分" />
                <Pdfref file="PTA-FD" page="68" desc="处理store和load语句" />
                <Pdfref file="PTA-FD" page="91" desc="例子" />
            </X.Uli>
            <X.Uli>
                <X.P>指针分析算法（过程间）</X.P>
                <Pdfref file="PTA-FD" page="106" desc="处理call语句的规则推导式" />

                <X.HighlightBlock background="red">
                    <Pdfref file="PTA-FD" page="113" desc="不加x -> m_this" />
                </X.HighlightBlock>

                <Pdfref file="PTA-FD" page="116" desc="算法总览" />
                <Pdfref file="PTA-FD" page="119" desc="`AddReachable(m)`" />
                <Pdfref file="PTA-FD" page="124" desc="`ProcessCall(x,oi)`：对于所有$x$作receiver object的调用语句`r=x.foo(a1,a2,...)`，【】【】【】【】【】【】【】【】【】【】【】【】" />
                <Pdfref file="PTA-FD" page="152" desc="例子" />
            </X.Uli>

            <X.HighlightBlock background="red">为什么不用c.f而是obj3.f ??</X.HighlightBlock>

            <X.H1>L14. Datalog-Based Program Analysis</X.H1>
            <Pdfref file="Datalog" page="17" desc="Datalog语言介绍" />
            <Pdfref file="Datalog" page="60" desc="Pointer Analysis via Datalog" />
            <Pdfref file="Datalog" page="89" desc="Taint Analysis via Datalog" />
        </>
    );
}
