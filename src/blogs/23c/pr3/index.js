import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」非参数估计</X.Title>
            <X.P>
                本章讨论的是`非参数估计`。很多时候我们无法给出样本分布的函数形式，也就无法使用根据样本估计函数参数的思路。\n
                非参数估计的思想是，直接根据样本，用数值方法估计出整个分布函数。
            </X.P>

            <X.H1>非参数估计的基本原理</X.H1>
            <X.P>
                还记得*用频率估计概率*的经典思想吗！假设你掷了`1000`次硬币，发现有`489`次正面朝上，那么你估计掷这枚硬币正面朝上的概率是`0.489`，或者近似地，概率约为`0.5`。
            </X.P>
            <X.P>
                现在我们来考虑更复杂一点的情况，要估计的不是某个概率数值，而是样本分布的概率密度函数。考虑概率密度的性质：概率密度函数在区间---
                $[x,x+\Delta x]$下的面积即为样本落在区间$[x,x+\Delta x]$内的概率。\n
                表述的更抽象一点，我们要估样本出现在面积为$V$的一个小区域$R$中的概率，---
                这里的$R$就相当于上面例子中的区间$[x,x+\Delta x]$，$V=\Delta x$。
            </X.P>
            <X.P>
                总样本数为$n$，落到小区域$R$内的样本数为$k$时，如果区域面积$V$合适地小，我们就可以认为在$R$区域内的概率密度是一个常数：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{k}{n} \cdot \frac{1}{V}" />

            <X.H1>直方图方法</X.H1>
            <X.P>直方图方法非常简单，可以理解为近似的用直方图的形状取描述概率密度函数。</X.P>
            <X.Img src={require('./fig1.png')} width="800" />
            <X.P>
                不过，在样本数量并非无限时，如果小舱（直方图组距）过大，那么最终估计出的密度函数就非常粗糙；---
                如果过小，那么有的小舱内可能没有样本，估计出的概率密度函数很不连续。
            </X.P>
            <X.FlexRow>
                <X.Img src={require('./fig2.png')} width="100%" />
                <X.Img src={require('./fig3.png')} width="100%" />
            </X.FlexRow>
            <X.HighlightBlock>
                <X.P>
                    小舱的选择应该与样本总数相适应。如果样本总数是$n$，小舱体积是$V_n$，在$x$附近落入小舱的样本个数是$k_n$，那么估计的概率密度
                    {`$\\hat{P}(x)$`}可以收敛于真实概率密度$P(x)$的条件是：
                </X.P>
                <X.Formula text="\lim_{n \to \infty} V_n=0, \quad \lim_{n \to \infty} k_n=\infty, \quad \lim_{n \to \infty} \frac{k_n}{n}=0" />
                <X.P>
                    可以这样理解：小舱体积应该尽可能小，同时要保证小舱内有充分多的样本，但每个小舱内样本数又必须是总样本数中很小一部分。
                </X.P>
            </X.HighlightBlock>

            <X.H1>k近邻法</X.H1>
            <X.P>
                `kNN`的全称是`k Nearest Neighbors`，意思是K个最近的邻居。---
                基本做法是：根据样本总数确定一个参数$k_n$，例如样本总数为$n$时，可以取
            </X.P>
            <X.Formula text="k_n=\sqrt{n}" />
            <X.P>
                在求$x$处的密度估计{`$\\hat{P}(x)$`}
                时，通过调整包含$x$的小舱体积，直到小舱内恰好落入$k_n$个样本。此时有：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{k_n}{n} \cdot \frac{1}{V}" />
            <X.P>
                使用`kNN`方法时，样本密度较高的地方小舱体积会比较小，而样本密度低的地方小舱体积自动增大。这样可以兼顾高密度区域的分辨率和低密度区域的连续性。
            </X.P>

            <X.H1>Parzen窗法</X.H1>
            <X.P>
                贝叶斯估计与最大似然估计一个根本的区别是，最大似然估计把未知参数当作固定的量，而贝叶斯估计把未知参数本身也看作随机变量。---
                假设未知参数是{`$\\bm{\\theta}$`}，其分布空间为{`$\\bm{\\Theta}$`}，定义损失函数
                {`$\\lambda(\\bm{\\theta},\\hat{\\bm{\\theta}})$`}表示估计误差的损失。如果已经观测到了样本集
                {`$\\bm{\\chi}$`}，那么我们的目标是：
            </X.P>
            <X.HighlightBlock>
                <X.P>最小化期望风险：</X.P>
                <X.Formula text="\int_{\bm{\Theta}} \lambda(\bm{\theta},\hat{\bm{\theta}}) P(\bm{\theta}|\bm{\chi}) d\bm{\theta}" />
            </X.HighlightBlock>
            <X.P>
                通常情况下损失函数取
                {`$\\lambda(\\bm{\\theta},\\hat{\\bm{\\theta}}) = (\\bm{\\theta}-\\hat{\\bm{\\theta}})^2$`}
                ，此时有结论：
            </X.P>
        </X.BlogWrapper>
    );
}
