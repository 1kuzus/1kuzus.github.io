import X from '@/component/X';
import './index.css';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」统计决策方法</X.Title>

            <X.H2>贝叶斯公式</X.H2>
            <X.P>考虑如下例子，记A为`抓到方形`，B为`抓到实心图形`：</X.P>
            <div className="behwl-boxes">
                <div className="behwl-box behwl-fill" />
                <div className="behwl-box" />
                <div className="behwl-box" />
                <div className="behwl-box behwl-circle behwl-fill" />
                <div className="behwl-box" />
            </div>
            <X.Formula text="P(A) = \frac{3}{5}" />
            <X.Formula text="P(AB) = \frac{P(AB)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            <X.Formula text="P(A|B) = \frac{P(AB)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)}" />

            <X.H2>最小错误率贝叶斯决策</X.H2>
        </X.BlogWrapper>
    );
}
