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
                总样本数为$N$，落到小区域$R$内的样本数为$k$时，如果区域面积$V$合适地小，我们就可以认为在$R$区域内的概率密度是一个常数：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{k}{NV}" />

            <X.H1>直方图方法</X.H1>
            <X.P>
                直方图方法非常简单，可以理解为近似的用直方图的形状取描述概率密度函数。\n
                不过，在样本数量并非无限时，如果小舱（直方图组距）过大，那么最终估计出的密度函数就非常粗糙；---
                如果过小，那么有的小舱内可能没有样本，估计出的概率密度函数很不连续。
            </X.P>
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
            <X.P>`KNN`的全称是`K Nearest Neighbors`，意思是K个最近的邻居。</X.P>
            <X.Formula text="P(\bm{X}_1, \bm{X}_2, \dots, \bm{X}_n|\bm{\theta}) = \prod_{k=1}^n P(\bm{X}_i) = \prod_{k=1}^n \prod_{i=1}^d \theta_i^{x_{ki}}(1-\theta_i)^{1-x_{ki}}" />
            <X.P>式子中的{`$x_{ki}$`}代表第`k`个样本的第`i`个分量，其值为`0`或`1`。</X.P>
            <X.P>取对数似然函数：</X.P>
            <X.Formula text="l(\bm{\theta}) = \ln P = \sum_{k=1}^n \sum_{i=1}^d [x_{ki}\ln\theta_i + (1-x_{ki})\ln(1-\theta_i)]" />
            <X.P>求偏导得：</X.P>
            <X.Formula text="\frac{\partial l(\bm{\theta})}{\partial \theta_i} = \sum_{k=1}^n [\frac{x_{ki}}{\theta_i} - \frac{1-x_{ki}}{1-\theta_i}]" />
            <X.Formula text="\frac{\partial l(\bm{\theta})}{\partial \theta_i} = 0 \; 得 \; \sum_{k=1}^n (x_{ki} - \theta_i) = 0，即\theta_i = \frac{1}{n} \sum_{k=1}^n x_{ki}" />
            <X.P>把每一个分量都叠加起来，就得到最终的参数估计：</X.P>
            <X.Formula text="\hat{\bm{\theta}} = \frac{1}{n} \sum_{k=1}^n \bm{X}_k" />
            <X.P>
                举一个带有具体数值的例子，假如观测到了四个样本：$[1,0,0]$、$[1,1,0]$、$[1,0,0]$、$[1,1,1]$，则估计参数
                {'$\\hat{\\bm{\\theta}} = [1,0.5,0.25]$'}\n
                其含义为，对于第一个维度，四个样本均为`1`，因此估计$x_1=1$的概率为`1`；对于第二个样本，四个样本中有两个为`1`，另外两个为`0`，则估计$x_2=1$的概率为`0.5`，以此类推。
            </X.P>
            <X.H2>正态分布下的最大似然估计</X.H2>
            <X.H3>单变量正态分布</X.H3>
            <X.Formula text="\hat{\mu} = \frac{1}{n} \sum x_k" />
            <X.Formula text="\hat{\sigma} = \frac{1}{n} \sum (x_k - \hat{\mu})^2" />
            <X.H3>多变量正态分布</X.H3>
            <X.Formula text="\hat{\bm{\mu}} = \frac{1}{n} \sum \bm{X}_k" />
            <X.Formula text="\hat{\bm{\Sigma}} = \frac{1}{n} \sum (\bm{X}_k - \hat{\bm{\mu}})(\bm{X}_k - \hat{\bm{\mu}})^T" />

            <X.H1>贝叶斯估计</X.H1>
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
            <X.HighlightBlock>
                <X.P>
                    在给定样本集下，{'$\\bm{\\theta}$'}的贝叶斯估计量是
                    {`$\\int_{\\bm{\\Theta}} \\bm{\\theta} P(\\bm{\\theta}|\\bm{\\chi}) d\\bm{\\theta}$`}。
                </X.P>
            </X.HighlightBlock>
            <X.P>在平方损失函数下，贝叶斯估计的步骤是：</X.P>
            <X.Oli>
                <X.P>猜测参数的先验分布{`$P(\\bm{\\theta})$`}</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    对于参数估计问题，样本的概率密度函数形式已知为{`$P(\\bm{X}|\\bm{\\theta})$`}，形式上求出联合分布为：
                </X.P>
                <X.Formula text="P(\bm{\chi}|\bm{\theta}) = \prod_i P(\bm{X}_i|\bm{\theta})" />
            </X.Oli>
            <X.Oli>
                <X.Formula text="P(\bm{\theta}|\bm{\chi}) = \frac{P(\bm{\chi}|\bm{\theta})P(\bm{\theta})}{\int_{\bm{\Theta}} P(\bm{\chi}|\bm{\theta}) P(\bm{\theta}) d\bm{\theta}}" />
                <X.P>利用贝叶斯公式求{`$\\bm{\\theta}$`}的后验概率分布</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    {'$\\bm{\\theta}$'}的贝叶斯估计量是
                    {`$\\frac{5}{8} \\int_{\\bm{\\Theta}} \\bm{\\theta} P(\\bm{\\theta}|\\bm{\\chi}) d\\bm{\\theta} \\frac{5}{8}$`}
                </X.P>
            </X.Oli>
        </X.BlogWrapper>
    );
}
