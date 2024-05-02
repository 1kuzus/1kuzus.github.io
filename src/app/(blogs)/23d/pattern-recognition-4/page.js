import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/23d/pattern-recognition-4/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.H1>背景知识</X.H1>
            <X.H2>Sigmoid函数</X.H2>
            <X.P>
                `Sigmoid`函数通常表示为{`$\\sigma(x)=\\frac{1}{1+e^{-x}}$`}，值域为$[0,1]$，有以下两个常用的性质：
            </X.P>
            <X.Formula text="\sigma(x)+\sigma(-x)=1" />
            <X.Formula text="\sigma'(x)=\sigma(x)\cdot\sigma(-x)=\sigma(x)\cdot[1-\sigma(x)]" />
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
            <X.Formula text="\min L(\bm{W})=\frac{1}{N}\sum_{i=1}^N(\bm{W}^T\bm{X}_i-y_i)^2" />
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
            <X.P>
                假设两类问题中每类的均值向量分别为{`$\\bm{m}_1$`}和{`$\\bm{m}_2$`}，定义*类内离散度矩阵*：
            </X.P>
            <X.Formula text="\bm{S}_w=\bm{S}_1+\bm{S}_2=\sum_{\bm{X} \in \bm{\chi}_1}(\bm{X}-\bm{m}_1)(\bm{X}-\bm{m}_1)^T+\sum_{\bm{X} \in \bm{\chi}_2}(\bm{X}-\bm{m}_2)(\bm{X}-\bm{m}_2)^T" />
            <X.P>*类间离散度矩阵*：</X.P>
            <X.Formula text="\bm{S}_b=(\bm{m}_1-\bm{m}_2)(\bm{m}_1-\bm{m}_2)^T" />
            <X.P>判别准则为</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\max J_F(\bm{W})=\frac{\bm{W}^T\bm{S}_b\bm{W}}{\bm{W}^T\bm{S}_w\bm{W}}" />
            </X.HighlightBlock>
            <X.H2>最优解</X.H2>
            <X.P>Fisher判别准则下的最优投影方向为：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\bm{W}^*=\bm{S}_w^{-1}(\bm{m}_1-\bm{m}_2)" />
            </X.HighlightBlock>
            <X.P>确定了方向后，分类的阈值可以取两类均值的中心的投影，即：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="threshold=\bm{W}^{*T}\frac{\bm{m}_1+\bm{m}_2}{2}" />
            </X.HighlightBlock>
            <X.H1>感知器</X.H1>
            <X.H2>动机</X.H2>
            <X.P>感知器用{`$\\bm{W}^T\\bm{X}$`}的正负来判断样本的分类。</X.P>
            <X.H2>损失函数</X.H2>
            <X.P>感知器的损失函数可以理解为错分样本的个数，数学形式如下：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula
                    text="\min L(\bm{W})=\frac{1}{N}\sum_{i=1}^Nl(i), \; l(i)=
                    \begin{cases}
                    1, \quad \text{sign}(y_i\bm{W}^T\bm{X_i}) \lt 0 \\
                    0, \quad \text{otherwise}
                    \end{cases}
                    "
                />
            </X.HighlightBlock>
            <X.H2>更新规则</X.H2>
            <X.P>如果所有样本都分类正确，算法结束；否则对于分错的样本{`$(\\bm{X}_i,y_i)$`}执行：</X.P>
            <X.Formula text="\bm{W}_{t+1}=\bm{W}_t+y_i\bm{X}_i" />
            <X.H1>两类Logistic回归</X.H1>
            <X.H2>动机</X.H2>
            <X.P>
                使用`Sigmoid`函数将{`$\\bm{W}^T\\bm{X}$`}
                归约到区间$[0,1]$，可以把这个输出结果看作概率，那么输出将从单纯的以{`$\\bm{W}^T\\bm{X}$`}
                的符号进行二分类变成连续的概率。
            </X.P>
            <X.H2>损失函数</X.H2>
            <X.P>考虑最大似然估计，样本集出现的概率为：</X.P>
            <X.Formula text="P=\prod_1^NP(y_i|\bm{X}_i)" />
            <X.P>使用对数似然函数{`$\\ln P=\\sum_{i=1}^N\\ln P(y_i|\\bm{X}_i)$`}，考虑单个样本出现的概率：</X.P>
            <X.P>
                假设`Sigmoid`函数的输出是$p$，其含义应为“样本是正类”的概率。因此一个正样本对似然函数的贡献是$p$，而负样本要代入$1-p$。---
                换句话说，上述对数似然函数中的{`$P(y_i|\\bm{X}_i)$`}可以有如下数学表示：
            </X.P>
            <X.Formula
                text="P(y_i|\bm{X}_i)=
                \begin{cases}
                \sigma(\bm{W}^T\bm{X_i}), \quad y_i=1 \\
                1-\sigma(\bm{W}^T\bm{X_i}), \quad y_i=-1
                \end{cases}
                "
            />
            <X.P>考虑到`Sigmoid`函数的性质$1-\sigma(x)=\sigma(-x)$，上式可以统一写作：</X.P>
            <X.Formula text="P(y_i|\bm{X}_i)=\sigma(y_i\bm{W}^T\bm{X_i})" />
            <X.P>希望似然函数取最大，那么定义损失函数为如下形式：</X.P>
            <X.Formula text="\min L(\bm{W})=-\frac{1}{N}\ln P=-\frac{1}{N}\sum_{i=1}^N\ln \sigma(y_i\bm{W}^T\bm{X_i})" />
            <X.P>进而化简为：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\min L(\bm{W})=\frac{1}{N}\sum_{i=1}^N\ln(1+e^{-y_i\bm{W}^T\bm{X_i}})" />
            </X.HighlightBlock>
            <X.H2>更新规则</X.H2>
            <X.P>使用梯度下降法，计算出梯度：</X.P>
            <X.Formula
                text="
                \nabla L=-\frac{1}{N}\sum_{i=1}^N\sigma(-y_i\bm{W}^T\bm{X_i}) \cdot y_i\bm{X_i}=
                -\frac{1}{N}\sum_{i=1}^N\frac{y_i\bm{X_i}}{1+e^{y_i\bm{W}^T\bm{X_i}}}
                "
            />
            <X.P>然后按照学习率$\eta$更新下一时刻参数：</X.P>
            <X.Formula text="\bm{W}_{t+1}=\bm{W}_t-\eta\nabla L" />
        </>
    );
}
