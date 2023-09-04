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
            <X.P>\n结合上述例子理解贝叶斯公式的推导过程：</X.P>
            <X.Formula text="P(AB) = P(A|B) \cdot P(B)" />
            <X.Formula text="P(BA) = P(B|A) \cdot P(A)" />
            <X.Formula text="P(AB) = P(BA) \quad \Rightarrow \quad  P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />

            <X.H1>最小错误率贝叶斯决策</X.H1>
            <X.P>研究的类别有`c`个。</X.P>
            <X.HighlightBlock>
                <X.Formula text="若P(\omega_i|x) = max_{j=1,...,c} P(\omega_j|x)，则x属于\omega_i类" />
            </X.HighlightBlock>
            <X.H2>两分类情况下，最小错误率决策的四种等价规则</X.H2>
            <X.Oli>
                <X.P>`后验概率判决`</X.P>
                <X.Formula text="P(\omega_1|x) > P(\omega_2|x)" />
            </X.Oli>
            <X.Oli>
                <X.P>`后验概率判决，分母相同看分子`</X.P>
                <X.Formula text="P(x|\omega_1)P(\omega_1) > P(x|\omega_2)P(\omega_2)" />
            </X.Oli>
            <X.Oli>
                <X.P>`似然比l、似然比阈值λ`</X.P>
                <X.Formula text="l(x) = \frac{P(x|\omega_1)}{P(x|\omega_2)} \quad \lambda = \frac{P(\omega_2)}{P(\omega_1)} \quad l(x)>\lambda选\omega_1" />
            </X.Oli>
            <X.Oli>
                <X.P>`对数似然比`</X.P>
                <X.Formula text="h(x)=-ln[l(x)] \ 与 \ ln\frac{P(\omega_1)}{P(\omega_2)} \quad 比较，h(x)小选\omega_1" />
            </X.Oli>

            <X.H1>最小风险贝叶斯决策</X.H1>
            <X.H2>条件风险</X.H2>
            <X.Formula text="R(\alpha_i|x) = \sum_j\lambda(\alpha_i,\omega_j)P(\omega_j|x)，\lambda(\alpha_i,\omega_j)表示样本x \in \omega_j但被决策为\omega_i类的损失" />
            <X.P>`i=j`表示正确决策</X.P>
            <X.H2>最小风险贝叶斯决策</X.H2>
            <X.P>研究的类别有`c`个，做了`k`个决策。</X.P>
            <X.HighlightBlock>
                <X.Formula text="若R(\alpha_i|x) = min_{j=1,...,k} R(\alpha_j|x)，则采用决策\alpha_i，即x属于\omega_i类" />
            </X.HighlightBlock>
            <X.H2>两分类情况下的最小风险贝叶斯决策</X.H2>
            <X.P>简记`λ(αi,ωj)`为`λij`</X.P>
            <X.Formula text="R(\alpha_1|x) = \lambda_{11}P(\omega_1|x) + \lambda_{12}P(\omega_2|x)" />
            <X.Formula text="R(\alpha_2|x) = \lambda_{21}P(\omega_1|x) + \lambda_{22}P(\omega_2|x)" />
            <X.Formula text="若R(\alpha_1|x) < R(\alpha_2|x)则x属于\omega_1类" />
            <X.H2>最小风险贝叶斯决策的另两种形式</X.H2>
            <X.Formula text="若(\lambda_{21} - \lambda_{11})P(\omega_1|x) > (\lambda_{12} - \lambda_{22})P(\omega_2|x)，则决策x \in \omega_1" />
            <X.Formula text="若l(x)=\frac{P(x|\omega_1)}{P(x|\omega_2)} > \frac{\lambda_{12} - \lambda_{22}}{\lambda_{21} - \lambda_{11}} \cdot \frac{P(\omega_2)}{P(\omega_1)}，则决策x \in \omega_1" />
            <X.HighlightBlock>
                <X.Formula
                    text="设损失函数为\lambda(\alpha_i,\omega_j)=
                    \begin{cases}
                        0 \quad i=j \\ 
                        1 \quad i \neq j
                    \end{cases}
                    "
                />
                <X.P>\n最小错误率贝叶斯决策就是`0/1损失函数`条件下的最小风险贝叶斯决策。</X.P>
            </X.HighlightBlock>

            <X.H1>正态分布的统计决策</X.H1>
            <X.H2>从一维正态分布到高维正态分布</X.H2>
            <X.P>单变量正态分布函数：</X.P>
            <X.Formula text="p(x) = \frac{1}{\sqrt{2\pi}\sigma} exp\{-\frac{1}{2} \cdot (\frac{x-\mu}{\sigma})^2\}" />
            <X.P>双变量正态分布函数：</X.P>
            <X.Formula
                text="p(x_1,x_2) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp\{
                -\frac{1}{2} \cdot \frac{1}{1-\rho^2} \cdot [(\frac{x_1-\mu_1}{\sigma_1})^2 - 2\rho\frac{(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2} + (\frac{x_2-\mu_2}{\sigma_2})^2]
                \}"
            />
            <X.P>对于上述二维正态分布，记：</X.P>
            <X.Formula
                text="
                \bm{X}=
                \begin{bmatrix}
                x_1 \\
                x_2 \\
                \end{bmatrix}，

                \bm{\mu}=
                \begin{bmatrix}
                \mu_1 \\
                \mu_2 \\
                \end{bmatrix}，

                \bm{\Sigma}=
                \begin{bmatrix}
                \sigma_1^2 & \rho\sigma_1\sigma_2 \\
                \rho\sigma_1\sigma_2 & \sigma_2^2 \\
                \end{bmatrix}
                "
            />
            <X.P>则用矩阵形式表示为：</X.P>
            <X.HighlightBlock>
                <X.Formula text="p(\bm{X}) = \frac{1}{(2\pi)^{\frac{d}{2}}}"/>
                <X.Formula text="\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac{1}{1+1}}}}"/>
            </X.HighlightBlock>
        </X.BlogWrapper>
    );
}
