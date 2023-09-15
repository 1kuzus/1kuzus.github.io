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
                {'$\\bm{\\chi}$'}，则我们要找的参数即为使得出现观测样本{'$\\bm{\\chi}$'}概率最大的参数
                {'$\\bm{\\theta}$'}。
            </X.P>
        </X.BlogWrapper>
    );
}
