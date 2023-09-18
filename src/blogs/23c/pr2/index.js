import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」概率密度函数的估计</X.Title>
            <X.P>
                上一篇提到的统计决策方法，类条件密度按已知处理。但实际问题中，往往只有已知样本，需要根据已知样本推测分布。
            </X.P>

            <X.H1>最大似然估计</X.H1>
            <X.P>
                假设样本的分布形式已知，现在想确定参数{'$\\bm{\\theta}$'}。如果已经观测到了一些样本，记这些样本为
                {'$\\bm{\\chi}$'}，则我们要找的参数即为：使得出现观测样本{'$\\bm{\\chi}$'}概率最大的参数
                {'$\\bm{\\theta}$'}。
            </X.P>
            <X.P>考虑下面的例题：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>
                    每一个样本都形如{`$\\bm{X}=[x_1, x_2, \\dots, x_d]^T$`}
                    ，其中的每个维度都是二值变量，其分布可以由
                    {`$\\bm{\\theta}=[\\theta_1, \\theta_2, \\dots, \\theta_d]^T$`}
                    描述，即$s_i=1$的概率为$\theta_i$，相应地，$s_i=0$的概率为$1-\theta_i$。假设现在已经观察到样本
                    {'$\\bm{\\chi}=\\{\\bm{X}_1, \\bm{X}_2, \\dots, \\bm{X}_n\\}$'}，希望估计参数{'$\\bm{\\theta}$'}。
                </X.P>
            </X.HighlightBlock>
            <X.P>观测到样本{'$\\bm{\\chi}$'}的概率为：</X.P>
            <X.Formula text="P(\bm{X}_1, \bm{X}_2, \dots, \bm{X}_n|\bm{\theta}) = \prod_{k=1}^n P(\bm{X}_i) = \prod_{k=1}^n \prod_{i=1}^d \theta_i^{x_{ki}}(1-\theta_i)^{1-x_{ki}}" />
            <X.P>式子中的{`$x_{ki}$`}代表第`k`个样本的第`i`个分量，其值为`0`或`1`。</X.P>
            <X.P>取对数似然函数：</X.P>
            <X.Formula text="l(\bm{\theta}) = \ln P = \sum_{k=1}^n \sum_{i=1}^d [x_{ki}\ln\theta_i + (1-x_{ki})\ln(1-\theta_i)]" />
            <X.P>求偏导得：</X.P>
            <X.Formula text="\frac{\partial l(\bm{\theta})}{\partial \theta_i} = \sum_{k=1}^n [\frac{x_{ki}}{\theta_i} - \frac{1-x_{ki}}{1-\theta_i}]" />
            <X.Formula text="\frac{\partial l(\bm{\theta})}{\partial \theta_i} = 0 \; 得 \; \sum_{k=1}^n (x_{ki} - \theta_i) = 0，即\theta_i = \frac{1}{n} \sum_{k=1}^n x_{ki}" />
            <X.P>把每一个分量都叠加起来，就得到最终的参数估计：</X.P>
            <X.Formula text="\hat{\bm{\theta}} = \frac{1}{n} \sum_{k=1}^n \bm{X}_k" />

        </X.BlogWrapper>
    );
}
