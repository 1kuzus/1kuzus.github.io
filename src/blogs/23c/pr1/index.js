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
                <div className="behwl-box behwl-circle" />
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
            <X.Formula text="P(AB) = P(BA) \; \Rightarrow \; P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />

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
                <X.Formula text="l(x) = \frac{P(x|\omega_1)}{P(x|\omega_2)}，\lambda = \frac{P(\omega_2)}{P(\omega_1)}，l(x)>\lambda选\omega_1" />
            </X.Oli>
            <X.Oli>
                <X.P>`对数似然比`</X.P>
                <X.Formula text="h(x)=-ln[l(x)] \; 与 \; ln\frac{P(\omega_1)}{P(\omega_2)} \; 比较，h(x)小选\omega_1" />
            </X.Oli>
            <X.HighlightBlock>
                <X.P>
                    可以把每一类的后验概率`P(ωi|x)`或者`P(x|ωi)P(ωi)`看作该类的一个`判别函数g(x)`，决策的过程就是各类的判别函数比较大小
                </X.P>
            </X.HighlightBlock>

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
            <X.Formula text="p(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\{-\frac{1}{2} \cdot (\frac{x-\mu}{\sigma})^2\}" />
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
                \rho\sigma_2\sigma_1 & \sigma_2^2 \\
                \end{bmatrix}
                "
            />
            <X.P>则用矩阵形式表示为：</X.P>
            <X.HighlightBlock>
                <X.Formula
                    text="p(\bm{X}) = \frac{1}{(2\pi)^{\frac{d}{2}}|\bm{\Sigma}|^\frac{1}{2}} \exp \{
                    -\frac{1}{2} \cdot (\bm{X}-\bm{\mu})^T \bm{\Sigma}^{-1} (\bm{X}-\bm{\mu}) 
                    \}
                    "
                />
                <X.P>\n此式通用于高维正态分布。</X.P>
            </X.HighlightBlock>
            <X.P>
                以上公式很长，从两个概念入手：`Σ`矩阵代表什么？`ρ`似乎没有在通式中体现，其含义是什么？\n
                对于二维正态分布例子中的两个变量来说，他们的*协方差*定义为：
            </X.P>
            <X.Formula text="cov(x_1,x_2)=E[(x_1-\mu_1)(x_2-\mu_2)]=E(x_1x_2)-\mu_1\mu_2" />
            <X.P>`Σ`矩阵的含义其实是两个变量的协方差矩阵，也就是：</X.P>
            <X.Formula
                text="\bm{\Sigma} =
                \begin{bmatrix}
                cov(x_1,x_1) & cov(x_1,x_2) \\
                cov(x_2,x_1) & cov(x_2,x_2)
                \end{bmatrix}，其中cov(x_1,x_1)=\sigma_1^2
                "
            />
            <X.P>`ρ`的含义为两个变量的相关系数，以上述变量`x1`,`x2`为例，计算公式为：</X.P>
            <X.Formula text="\rho = \frac{cov(x_1,x_2)}{\sigma_1\sigma_2} \; \Rightarrow \; cov(x_1,x_2)=\rho\sigma_1\sigma_2" />
            <X.P>至此就可以理解`Σ`,`ρ`两个参数的含义了！</X.P>
            <X.H2>正态分布概率模型下的最小错误率贝叶斯决策</X.H2>
            <X.Formula
                text="P(\bm{X}|\omega_i) = \frac{1}{(2\pi)^{\frac{d}{2}}|\bm{\Sigma_i}|^\frac{1}{2}} \exp \{
                -\frac{1}{2} \cdot (\bm{X}-\bm{\mu_i})^T \bm{\Sigma_i}^{-1} (\bm{X}-\bm{\mu_i}) 
                \}
                "
            />
            <X.P>
                注意这个类概率密度函数`P(X|ωi)`的含义为，第`ωi`类的样本`X`的概率密度。\n使用后验概率的变形作为判别函数：
            </X.P>
            <X.Formula
                text="g_i(\bm{X}) = ln[P(\bm{X}|\omega_i)P(\omega_i)] =
                -\frac{d}{2}ln2\pi -\frac{1}{2}ln|\bm{\Sigma_i}| -\frac{1}{2}(\bm{X}-\bm{\mu_i})^T\bm{\Sigma_i}^{-1}(\bm{X}-\bm{\mu_i}) +lnP(\omega_i)
                "
            />
            <X.P>从以下三种情况考虑决策面：</X.P>
            <X.Oli reset>
                <X.Formula text="\bm{\Sigma_1} = \bm{\Sigma_2}=...=\bm{\Sigma_c} = \sigma^2\bm{I}" />
            </X.Oli>
            <X.P>
                各类模式分布的协方差矩阵相等，样本统计独立且方差相同，协方差均为0。\n此时`g(X)`的前两项与类别无关，后两项化简为：
            </X.P>
            <X.Formula text="g_i(\bm{X}) = -\frac{1}{2\sigma^2}\Vert\bm{X}-\bm{\mu_i}\Vert^2 +lnP(\omega_i)" />
            <X.HighlightBlock>
                <X.P>如果先验概率相等，则决策只与欧氏距离有关。此时决策为：</X.P>
                <X.Br></X.Br>
                <X.Formula text="若\Vert\bm{X}-\bm{\mu_i}\Vert^2 = min_{j=1,...,c} \Vert\bm{X}-\bm{\mu_j}\Vert^2，则x属于\omega_i类" />
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="gray">
                <X.P>
                    从几何的视角来看，以上决策规则实际就是比较样本点和各类的中心点距离，并且选择距离最近的类别作为决策结果。\n
                    以上分类器也称`最小距离分类器`，把每个`均值`看作一个`典型的样本`，则这种分类方法也称为`模板匹配技术`。
                </X.P>
            </X.HighlightBlock>
            <X.P>如果对于上述判别函数`g(X)`的欧式距离项展开，并删掉与类别无关的二次项，得：</X.P>
            <X.Formula text="g_i(\bm{X}) = \bm{W_i}^T\bm{X} + b，其中\bm{W_i} = \frac{1}{\sigma^2}\bm{\mu_i}，b = -\frac{1}{2\sigma^2}\bm{\mu_i}^T\bm{\mu_i} + lnP(\omega_i)" />
            <X.P>判别函数是`X`的线性函数，称为`线性分类器`。\n接下来考虑决策面方程：</X.P>
            <X.Formula text="g_i(\bm{X}) = g_j(\bm{X}) \; \Rightarrow \; \bm{W}^T(\bm{X}-\bm{X_0}) = 0" />
            <X.Formula text="其中\bm{W} = \bm{\mu_i} - \bm{\mu_j}，\bm{X_0} = \frac{1}{2}(\bm{\mu_i} + \bm{\mu_j}) - \sigma^2\frac{\bm{\mu_i}-\bm{\mu_j}}{\Vert \bm{\mu_i}-\bm{\mu_j} \Vert^2}ln\frac{P(\omega_1)}{P(\omega_2)}" />
            <X.P>
                这个方程确定了决策面是通过`X0`并正交于向量`W`的一个超平面。如果是二维平面上的点的分类问题，决策线过`X0`点并且垂直于样本中心的连线。当先验概率相等时，`X0`的后项为`0`，此时决策线就是样本中心连线的中垂线。\n
                来看一个具体的例子！我们需要对平面上的点进行分类任务，第一堆样本点中心为`(2,3)`，第二堆样本点中心为`(4,4)`：
            </X.P>
            <X.Img src={require('./fig1.png')} width="600" />
            <X.P>
                红色和蓝色分别标记了两类样本点的分布情况，其中加粗的红点和蓝点表示样本中心的位置；\n生成两组样本时使用的方差均为`0.8`；样本的`x`,`y`坐标相关性为0。\n
                现在对平面上的所有点计算判别函数`g_red`和`g_blue`。`g_red`更大的区域用红色阴影表示，`g_blue`更大的区域用l蓝色阴影表示。\n
                两个区域的交界处即为自然生成的决策面。结果如下：
            </X.P>
            <X.FlexRow>
                <X.Img src={require('./fig2.png')} width="320" />
                <X.Img src={require('./fig3.png')} width="320" />
                <X.Img src={require('./fig4.png')} width="320" />
            </X.FlexRow>
            <X.Oli>
                <X.Formula text="\bm{\Sigma_1} = \bm{\Sigma_2}=...=\bm{\Sigma_c} = \bm{\Sigma}" />
            </X.Oli>
            <X.Oli>
                <X.Formula text="\bm{\Sigma_i} \neq \bm{\Sigma_j}" />
            </X.Oli>
        </X.BlogWrapper>
    );
}
