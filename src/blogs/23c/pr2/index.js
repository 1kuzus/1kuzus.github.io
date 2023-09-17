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
            <X.P>考虑下面的例子：</X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.P>
                    每一个样本都形如{`$\\bm{X}=[x_1, x_2, \\dots, x_d]^T$`}
                    ，其中的每个维度都是二值变量，其分布可以由
                    {`$\\bm{\\theta}=[\\theta_1, \\theta_2, \\dots, \\theta_d]^T$`}
                    描述，即$s_i=1$的概率为$\theta_i$，相应地，$s_i=0$的概率为$1-\theta_i$。假设现在已经观察到样本
                    {'$\\bm{\\chi}=\\{\\bm{X}_1, \\bm{X}_2, \\dots, \\bm{X}_n\\}$'}，希望估计参数{'$\\bm{\\theta}$'}。
                    观测到样本{'$\\bm{\\chi}$'}的概率为
                </X.P>
                <X.Formula text="P=" />
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
