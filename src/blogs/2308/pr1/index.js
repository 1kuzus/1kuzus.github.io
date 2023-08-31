import X from '@/component/X';
import './index.css';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」统计决策方法</X.Title>

            <X.H1>贝叶斯公式</X.H1>
            <X.HighlightBlock>
                <X.Formula text="P(\omega_i|x) = \frac{P(x|\omega_i) \cdot P(\omega_i)}{P(x)}" />
                <X.P>
                    \n`P(ωi)`为`先验概率`，表示没有进行任何观测时的主观推测概率\n `P(x|ωi)`为`类条件密度`，已知\n
                    `P(ωi|x)`为`后验概率`，希望得到其值，并用于决策
                </X.P>
            </X.HighlightBlock>
            <X.P>考虑如下例子，记A为`抓到方形`，B为`抓到实心图形`：</X.P>
            <div className="behwl-boxes">
                <div className="behwl-box behwl-fill" />
                <div className="behwl-box" />
                <div className="behwl-box" />
                <div className="behwl-box behwl-circle behwl-fill" />
                <div className="behwl-box" />
            </div>
            <X.Uli>
                <X.Formula className=".x-text-active" text="P(A) = \frac{3}{5} \quad P(B) = \frac{2}{5}" />
            </X.Uli>
            <X.Uli>
                <X.Formula text="P(AB) = \frac{1}{5}" />
            </X.Uli>
            <X.Uli>
                <X.Formula text="P(A|B，抓到实心图形时抓到的是方形) = \frac{1}{2}" />
            </X.Uli>
            <X.Uli>
                <X.Formula text="P(B|A，抓到方形时抓到的是实心图形) = \frac{1}{3}" />
            </X.Uli>
            <X.P>结合上述例子理解贝叶斯公式的推导过程：</X.P>
            <X.Formula text="P(AB) = P(A|B) \cdot P(B)" />
            <X.Formula text="P(BA) = P(B|A) \cdot P(A)" />
            <X.Formula text="P(AB) = P(BA) \quad \Rightarrow \quad  P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />

            <X.H1>最策</X.H1>
        </X.BlogWrapper>
    );
}
