import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.P>
                上一篇提到的统计决策方法，类条件密度按已知处理。但实际问题中，往往只有已知样本，需要根据已知样本推测分布。\n本章讨论的是`参数估计`，也就是分布的表达式形式是已知的，只是希望确定其中参数的值。
            </X.P>
            <X.H1>最大似然估计</X.H1>
            <X.P>
                假设样本的分布形式已知，现在想确定参数{'$\\bm{\\theta}$'}。如果已经观测到了一些样本，记这些样本为
                {'$\\bm{\\chi}$'}，则我们要找的参数即为：使得出现观测样本{'$\\bm{\\chi}$'}概率最大的参数
                {'$\\bm{\\theta}$'}。
            </X.P>
            <X.P>考虑下面的例题：</X.P>
            <X.HighlightBlock background="gray">
                <X.P>
                    每一个样本都形如{`$\\bm{X}=[x_1, x_2, \\dots, x_d]^T$`}，其中的每个维度都是二值变量，其分布可以由
                    {`$\\bm{\\theta}=[\\theta_1, \\theta_2, \\dots, \\theta_d]^T$`}
                    描述，即$s_i=1$的概率为$\theta_i$，相应地，$s_i=0$的概率为$1-\theta_i$。假设现在已经观察到样本
                    {'$\\bm{\\chi}=\\{\\bm{X}_1, \\bm{X}_2, \\dots, \\bm{X}_n\\}$'}，希望估计参数{'$\\bm{\\theta}$'}。
                </X.P>
            </X.HighlightBlock>
            <X.HighlightBlock background="red">
                <X.P>
                    注意，如果样本有多个维度，这里记为{`$\\bm{X}=[x_1, x_2, \\dots, x_d]^T$`}
                    ，$x_1$、$x_2$表示样本的分量；\n有时，若样本只有一个维度，则样本会直接简记为$x$；此时$x_1$、$x_2$表示两个样本。\n请注意语义。
                </X.P>
            </X.HighlightBlock>
            <X.P>观测到样本{'$\\bm{\\chi}$'}的概率为：</X.P>
            <X.Formula text="P(\bm{X}_1, \bm{X}_2, \dots, \bm{X}_n|\bm{\theta}) = \prod_{k=1}^n P(\bm{X}_i) = \prod_{k=1}^n \prod_{i=1}^d \theta_i^{x_{ki}}(1-\theta_i)^{1-x_{ki}}" />
            <X.P>式子中的{`$x_{ki}$`}代表第$k$个样本的第$i$个分量，其值为`0`或`1`。</X.P>
            <X.P>取对数似然函数：</X.P>
            <X.Formula text="l(\bm{\theta}) = \ln P = \sum_{k=1}^n \sum_{i=1}^d [x_{ki}\ln\theta_i + (1-x_{ki})\ln(1-\theta_i)]" />
            <X.P>求偏导得：</X.P>
            <X.Formula text="\frac{\partial l(\bm{\theta})}{\partial \theta_i} = \sum_{k=1}^n [\frac{x_{ki}}{\theta_i} - \frac{1-x_{ki}}{1-\theta_i}]" />
            <X.P>
                {`$\\frac{\\partial l(\\bm{\\theta})}{\\partial \\theta_i} = 0$`}得
                {`$\\sum_{k=1}^n (x_{ki} - \\theta_i) = 0$`}，即{`$\\theta_i = \\frac{1}{n} \\sum_{k=1}^n x_{ki}$`}
            </X.P>
            <X.P>把每一个分量都叠加起来，就得到最终的参数估计：</X.P>
            <X.Formula text="\hat{\bm{\theta}} = \frac{1}{n} \sum_{k=1}^n \bm{X}_k" />
            <X.P>
                举一个带有具体数值的例子，假如观测到了四个样本：$[1,0,0]$、$[1,1,0]$、$[1,0,0]$、$[1,1,1]$，则估计参数
                {'$\\hat{\\bm{\\theta}} = [1,0.5,0.25]$'}
                \n其含义为，对于第一个维度，四个样本均为`1`，因此估计$x_1=1$的概率为`1`；对于第二个样本，四个样本中有两个为`1`，另外两个为`0`，则估计$x_2=1$的概率为`0.5`，以此类推。
            </X.P>
            <X.H2>正态分布下的最大似然估计</X.H2>
            <X.H3>单变量正态分布</X.H3>
            <X.Formula text="\hat{\mu} = \frac{1}{n} \sum x_k" alignLeft />
            <X.Formula text="\hat{\sigma}^2 = \frac{1}{n} \sum (x_k - \hat{\mu})^2" alignLeft />
            <X.H3>多变量正态分布</X.H3>
            <X.Formula text="\hat{\bm{\mu}} = \frac{1}{n} \sum \bm{X}_k" alignLeft />
            <X.Formula
                text="\hat{\bm{\Sigma}} = \frac{1}{n} \sum (\bm{X}_k - \hat{\bm{\mu}})(\bm{X}_k - \hat{\bm{\mu}})^T"
                alignLeft
            />
            <X.H1>贝叶斯估计</X.H1>
            <X.P>
                贝叶斯估计与最大似然估计一个根本的区别是，最大似然估计把未知参数当作固定的量，而贝叶斯估计把未知参数本身也看作随机变量。假设未知参数是
                {`$\\bm{\\theta}$`}，其分布空间为{`$\\bm{\\Theta}$`}，定义损失函数
                {`$\\lambda(\\bm{\\theta},\\hat{\\bm{\\theta}})$`}表示估计误差的损失。如果已经观测到了样本集
                {`$\\bm{\\chi}$`}，那么我们的目标是：
            </X.P>
            <X.HighlightBlock>
                <X.P>最小化期望风险：</X.P>
                <X.Formula
                    text="\int_{\bm{\Theta}} \lambda(\bm{\theta},\hat{\bm{\theta}}) P(\bm{\theta}|\bm{\chi}) d\bm{\theta}"
                    alignLeft
                />
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
                    对于参数估计问题，样本的概率密度函数形式已知为{`$P(\\bm{X}|\\bm{\\theta})$`}
                    ，形式上求出样本集分布为：
                </X.P>
                <X.Formula text="P(\bm{\chi}|\bm{\theta}) = \prod_i P(\bm{X}_i|\bm{\theta})" />
            </X.Oli>
            <X.Oli>
                <X.P>利用贝叶斯公式求{`$\\bm{\\theta}$`}的后验概率分布：</X.P>
                <X.Formula text="P(\bm{\theta}|\bm{\chi}) = \frac{P(\bm{\chi}|\bm{\theta}) P(\bm{\theta})}{\int_{\bm{\Theta}} P(\bm{\chi}|\bm{\theta}) P(\bm{\theta}) d\bm{\theta}}" />
            </X.Oli>
            <X.Oli>
                <X.P>
                    {'$\\bm{\\theta}$'}的贝叶斯估计量是
                    {`$\\int_{\\bm{\\Theta}} \\bm{\\theta} P(\\bm{\\theta}|\\bm{\\chi}) d\\bm{\\theta}$`}
                </X.P>
            </X.Oli>
            <X.HighlightBlock background="gray">
                <X.H3>重新理解</X.H3>
                <X.P>重述上面四个步骤，以免迷失在众多符号之中。</X.P>
                <X.P>
                    假设我们拿到了正态分布下的样本集{`$\\bm{\\chi}=\\{x_1,x_2,x_3\\}$`}
                    ，其中$x_1=1.3$，$x_2=4.1$，$x_3=3.7$，已知正态分布的方差$\sigma=3$，现在只需要估计均值$\mu$。
                </X.P>
                <X.Uli>
                    <X.P>
                        样本集中的每个样本出现的概率$P(x_i|\mu)$是可以由正态分布写出的，把所有样本的出现概率相乘，就得到了当前样本集出现的概率为
                        {`$P(\\bm{\\chi}|\\mu)$`}，这也就是上述`步骤2`提到的`样本集分布`。
                    </X.P>
                    <X.P>{`$P(\\bm{\\chi}|\\mu)$`}是一个只含$\mu$的表达式。我们记</X.P>
                    <X.Formula
                        text="f(\mu) = P(\bm{\chi}|\mu) =
                        \frac{1}{\sqrt{2\pi}\times 3} e^{-\frac{1}{2} (\frac{1.3-\mu}{3})^2} \; \cdot \;
                        \frac{1}{\sqrt{2\pi}\times 3} e^{-\frac{1}{2} (\frac{4.1-\mu}{3})^2} \; \cdot \;
                        \frac{1}{\sqrt{2\pi}\times 3} e^{-\frac{1}{2} (\frac{3.7-\mu}{3})^2}
                        "
                    />
                    <X.P>
                        如果采用极大似然估计，那么做到这里对$f(\mu)$或$\ln f(\mu)$求导，使得导数为`0`的点就是估计值
                        {`$\\hat{\\mu}$`}；取{`$\\mu=\\hat{\\mu}$`}可以使得观测到样本集的概率$f(\mu)$最大。
                    </X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>
                        概率论的两个学派中，`频率学派`认为应从客观掌握的数据来计算概率；而`贝叶斯学派`则认为概率是有先验和后验的，我们要计算的是后验概率，这个后验概率又是以先验概率为基础的。如果采用贝叶斯估计，会假设参数$\mu$存在先验分布（`步骤1`），这里假设$\mu$服从均匀分布：
                    </X.P>
                    <X.Formula text="P(\mu) = \frac{1}{5} \quad (0 \leq \mu \leq 5)" />
                </X.Uli>
                <X.Uli>
                    <X.P>`步骤3`中，公式可以重写为：</X.P>
                    <X.Formula text="P(\mu|\bm{\chi}) = \frac{f(\mu) P(\mu)}{\int_0^5 f(\mu) P(\mu) d\mu}" />
                    <X.P>
                        首先来看分母$\int_0^5 f(\mu) P(\mu)
                        d\mu$，其含义是综合考虑所有可能的$\mu$取值，求出一个“平均的”样本集出现概率。这个积分式可以求出具体数值，而不是含$\mu$的式子。从数学的角度可以理解为，使等号左侧后验概率密度积分为`1`的归一化常数。
                    </X.P>
                    <X.P>
                        再看其他的三个量，{`$P(\\mu|\\bm{\\chi})$`}、{`$f(\\mu)=P(\\bm{\\chi}|\\mu)$`}
                        、$P(\mu)$，这是贝叶斯学派的经典思想：用样本修正先验概率，得到后验概率。这三个式子都可以写为仅含$\mu$的函数。当然，因为假设的先验分布简单（均匀分布），$P(\mu)$为常数。\n这三个式子虽然都是$\mu$的函数，但描述的含义有所区别。
                        {`$P(\\mu|\\bm{\\chi})$`}、$P(\mu)$描述的是$\mu$的分布概率，而$f(\mu)$描述的是样本集的出现概率。
                    </X.P>
                </X.Uli>
                <X.Uli>
                    <X.P>
                        与最大似然估计一样，贝叶斯估计也会给出参数具体的估计值。但到此步，我们只给出了$\mu$的后验分布。要给出估计值，首先要明确我们的目标是什么：\n最大似然估计的目标是，带入估计值可以使得样本集出现概率$f(\mu)$最大；\n而贝叶斯估计的目标是，带入估计值可以使得期望风险（定义见上文）最小。\n进一步地，在损失函数为平方误差时，有结论可以给出估计值
                        {`$\\hat{\\mu}$`}的具体数值，也就是`步骤4`。
                    </X.P>
                </X.Uli>
            </X.HighlightBlock>
            <X.H2>贝叶斯学习</X.H2>
            <X.P>现在我们逐一考虑每一个样本。没有样本的时候，要估计的参数先验分布为{`$P(\\bm{\\theta})$`}。</X.P>
            <X.P>观测到第一个样本{`$\\bm{X}_1$`}的时候，用其来修正先验分布，也就是：</X.P>
            <X.Formula text="P(\bm{\theta}|\bm{X}_1) = \frac{P(\bm{X}_1|\bm{\theta}) \cdot P(\bm{\theta})}{\int_{\bm{\Theta}} P(\bm{X}_1|\bm{\theta}) \cdot P(\bm{\theta}) d\bm{\theta}}" />
            <X.P>
                现在继续观测到第二个样本{`$\\bm{X}_2$`}
                ，此时根据贝叶斯学派*用数据修正先验*的思想，先验分布是上一轮得到的{`$P(\\bm{\\theta}|\\bm{X}_1)$`}
                ，修正后的后验分布为
            </X.P>
            <X.Formula text="P(\bm{\theta}|\bm{X}_1, \bm{X}_2) = \frac{P(\bm{X}_2|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1)}{\int_{\bm{\Theta}} P(\bm{X}_2|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1) d\bm{\theta}}" />
            <X.P>以此递推：</X.P>
            <X.Formula text="P(\bm{\theta}|\bm{X}_1, \bm{X}_2, \bm{X}_3) = \frac{P(\bm{X}_3|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1, \bm{X}_2)}{\int_{\bm{\Theta}} P(\bm{X}_3|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1, \bm{X}_2) d\bm{\theta}}" />
            <X.Formula
                text="
                P(\bm{\theta}|\bm{X}_1, \bm{X}_2, \dots, \bm{X}_N) =
                \frac{P(\bm{X}_N|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1, \bm{X}_2, \dots, \bm{X}_{N-1})}
                {\int_{\bm{\Theta}} P(\bm{X}_N|\bm{\theta}) \cdot P(\bm{\theta}|\bm{X}_1, \bm{X}_2, \dots, \bm{X}_{N-1}) d\bm{\theta}}
                "
            />
            <X.H3>贝叶斯学习程序实现</X.H3>
            <X.P>假设我们有一个方差$s=3$的正态分布样本集，均值$m$待估计。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import matplotlib.pyplot as plt
                import numpy
                import math

                #生成样本集，样本集的真实均值为m=13
                Xs=numpy.random.normal(13,3,100)

                #计算某个样本X出现的概率
                def P(X,m,s=3):
                    return numpy.exp(-(X-m)**2/(2*s*s))/(s*numpy.sqrt(2*math.pi))

                #假设mX的先验分布也是一个正态分布，初始的均值m0=4、方差s0=4
                m0=4
                s0=4

                #mX的分布区间，理论上应该是(-inf,inf)，但由于两侧足够趋近于0，这里取(-40,40)
                m_lim=numpy.arange(-40,40,0.01)

                #无样本时m的先验分布
                pm=P(m_lim,m0,s0)

                #数值积分
                def numint(f):
                    s=0
                    step=m_lim[1]-m_lim[0]
                    for i in range(len(m_lim)-1):
                        s+=step*f[i]
                    return s

                #逐个样本学习
                for i,X in enumerate(Xs):
                    if (i+1)%20==0 or i<5:
                        plt.plot(m_lim,pm,label=f"epoch {i+1}")

                    #样本出现概率，在参数m分布区间上对应的值
                    pX_m=P(X,m_lim)

                    #用pX_m(数据)修正pm(先验)，得到pm_X(后验)
                    pm_X = pX_m*pm / numint(pX_m*pm)

                    #把第i轮得到的后验分布，视作第i+1轮迭代的先验分布
                    pm=pm_X

                plt.legend()
                plt.show()
                `}
            />
            <X.P>观察迭代结果：</X.P>
            <X.Image src="fig1.png" width="100%" filterDarkTheme />
            <X.P>
                如果随着样本数增加，后验概率序列逐渐尖锐，最终趋向于以参数真实值为中心的一个尖峰，则这一过程称为贝叶斯学习。
            </X.P>
            <X.H2>正态分布下的贝叶斯估计</X.H2>
            <X.P>
                假设要估计的正态分布均值$\mu$未知，方差$\sigma^2$已知。假定$\mu$的先验分布也是正态分布，均值为$\mu_0$，方差为$\sigma_0^2$。
            </X.P>
            <X.P>假设观测到的$N$个样本的均值为$m$，这里直接给出结论：</X.P>
            <X.Formula text="\hat{\mu} = \frac{N\sigma_0^2}{N\sigma_0^2+\sigma^2}m + \frac{\sigma^2}{N\sigma_0^2+\sigma^2}\mu_0" />
            <X.P>可以看到贝叶斯估计结果由两部分构成，第一项是样本知识，第二项是先验知识。</X.P>
            <X.Uli>样本数量为`0`时，估计值完全等于先验$\mu_0$；样本数量为`无穷`时，估计值趋于样本均值$m$；</X.Uli>
            <X.Uli>若$\sigma_0^2=0$，则先验知识绝对可靠，样本不起作用；</X.Uli>
            <X.Uli>若$\sigma_0 \gg \sigma$，则先验知识十分不确定，估计值近似等于样本均值。</X.Uli>
            <X.P>
                贝叶斯估计的优势在于，可以结合样本信息和先验知识，并且根据`样本数量`和`先验知识的确定程度`调和两部分信息的相对贡献。
            </X.P>
        </>
    );
}
