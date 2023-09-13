import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            21345
            {/* <X.Title>「模式识别」概率密度函数的估计</X.Title> */}
            <X.Title>识概憚计</X.Title>
            <X.P>
                上一篇提到的统计决策方法，认为类条件密度已知。但实际问题中，往往只有已知样本，需要根据已知$\mu_1$推测分布。
            </X.P>
            <X.P>
                上一篇提到的统计决策方法，认为类条件密度已知。但实际问题中，往往\n 只有已知样本，需要根据已知
                {`$\\int_{a}^{b} f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$样本$\\mu_8$`}
                推测分布。
            </X.P>
            {/* <X.H1>最大似然估计</X.H1> */}
            <X.HighlightBlock>
                123456
                <X.Oli>
                    olifather
                    <X.Oli>456</X.Oli>
                    <X.Oli>987</X.Oli>
                </X.Oli>
                <X.Oli>12</X.Oli>
                <X.Oli>12</X.Oli>
                <X.HighlightBlock>
                    <X.P>13 `456` @baidu[https://www.baidu.com]@</X.P>
                </X.HighlightBlock>
                <X.Formula text="123+456=579"></X.Formula>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>123</X.P>
            </X.HighlightBlock>
            <X.Formula text="123+456=579"></X.Formula>
            <X.P>$123+456=579$也是$\sigma_1$</X.P>
        </X.BlogWrapper>
    );
}
