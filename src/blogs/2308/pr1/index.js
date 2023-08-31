import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」统计决策方法</X.Title>

            <X.H2>贝叶斯公式</X.H2>
            <div className="behwl-boxes">
                <div className="behwl-square" />
            </div>
            <X.Formula text="P(AB) = \frac{P(AB)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            <X.Formula text="P(A|B) = \frac{P(AB)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)}" />

            <X.H2>最小错误率贝叶斯决策</X.H2>
        </X.BlogWrapper>
    );
}
