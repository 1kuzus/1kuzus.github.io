import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」线性学习器与线性分类器</X.Title>

            <X.H1>背景知识</X.H1>
            <X.H2>Sigmoid函数</X.H2>
            <X.P>
                `Sigmoid`函数通常表示为{`$\\sigma(x)=\\frac{1}{1+e^{-x}}$`}，值域为$[0,1]$，有以下两个常用的性质：
            </X.P>
            <X.Formula text="\sigma(x) + \sigma(-x) = 1" />
            <X.Formula text="\sigma'(x) = \sigma(x)\cdot\sigma(-x) = \sigma(x)\cdot[1-\sigma(x)]" />
            <X.H2>常数问题</X.H2>
            <X.P>
                你可能看到过{`$y=\\bm{W}^T\\bm{X}+b$`}和{`$y=\\bm{W}^T\\bm{X}$`}两种计算分类结果的方式。---
                以二维空间上的分类为例，前者的分类线可以是任意直线，而后者只能是过原点的直线。事实上，可以通过将问题空间升一个维度来统一两种形式。
            </X.P>
            <X.P>
                令{`$\\bm{W} \\leftarrow [\\bm{W} \\; b]$`}，{`$\\bm{X} \\leftarrow [\\bm{X} \\; 1]$`}
                ，两种形式即可统一。
            </X.P>
            <X.P>
                上述操作相当于，仍然以二维空间上的分类为例，若希望分类线不受过原点的限制，考虑把问题放入三维空间：\n
                $xy$坐标不变，令$z=1$，此时可以在三维空间中用一过原点的平面作为分类面，这个分类面与平面$z=1$的交线可以是任意（平面$z=1$上的）直线。
            </X.P>

            <X.H1>线性回归</X.H1>
            <X.H2>动机</X.H2>
            <X.P>用下式：</X.P>
            <X.Formula text="y=w_1x_1+w_2x_2 \dots w_dx_d=\bm{W}^T\bm{X}" />
            <X.P>来估计带标签样本{`$(\\bm{X}_i,y_i)$`}</X.P>
            <X.H2>损失函数</X.H2>
            <X.P>线性回归模型使用最小平方误差：</X.P>
            <X.Formula text="\min L(\bm{W})=\frac{1}{N}\sum_1^N(\bm{W}^T\bm{X}_i-y_i)^2" />
            <X.P>
                记{`$\\bm{\\chi}_{(N \\times d)}=[\\bm{X}_1, \\bm{X}_2, \\dots, \\bm{X}_N]^T$`}，
                {`$\\bm{y}_{(N \\times 1)}=[y_1, y_2, \\dots, y_N]^T$`}
                ，可以将损失写作：
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\min L(\bm{W})=\frac{1}{N}(\bm{\chi W}-\bm{y})^T(\bm{\chi W}-\bm{y})" />
            </X.HighlightBlock>
            <X.H2>最优解</X.H2>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\bm{W}^*=(\bm{\chi}^T\bm{\chi})^{-1}\bm{\chi}^T\bm{y}" />
            </X.HighlightBlock>

            <X.H1>Fisher线性判别</X.H1>
            <X.H2>动机</X.H2>
            <X.P>
                线性二分类问题都可以看作把样本投影到某个方向上，再在这个一维空间中确定一个阈值，将两类样本分开。---
                现在希望找到的方向满足：两类间的距离尽可能大，但每一类内部的样本尽可能聚集。
            </X.P>
            <X.H2>准则函数</X.H2>
            <X.P>假设两类问题中每类的均值向量分别为{`$\\bm{m}_1$`}和{`$\\bm{m}_2$`}，定义两类的类内离散度矩阵：</X.P>
<X.Formula text="\bm{S}_1=\sum(\bm{X}_i-\bm{m}_1)(\bm{X}_i-\bm{m}_1)^T" />

            <X.H1>感知器</X.H1>
            <X.H1>两类Logistic回归</X.H1>
        </X.BlogWrapper>
    );
}
