import X from 'src/component/X';
import metas from 'src/app/_metas';
import styles from './page.module.css';

const path = '/23c/pattern-recognition-1/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>贝叶斯公式</X.H1>
            <X.HighlightBlock>
                <X.Formula text="P(\omega_i|x) = \frac{P(x|\omega_i) \cdot P(\omega_i)}{P(x)}" />
                <X.P>$P(\omega_i)$为`先验概率`，表示没有进行任何观测时的主观推测概率\n$P(x|\omega_i)$为`类条件密度`，已知\n$P(\omega_i|x)$为`后验概率`，希望得到其值，并用于决策</X.P>
            </X.HighlightBlock>
            <X.P>考虑如下例子，记$A$为`抓到方形`，$B$为`抓到实心图形`：</X.P>
            <div className={styles['boxes']}>
                <div className={[styles['box'], styles['fill']].join(' ')} />
                <div className={styles['box']} />
                <div className={styles['box']} />
                <div className={[styles['box'], styles['circle'], styles['fill']].join(' ')} />
                <div className={[styles['box'], styles['circle']].join(' ')} />
            </div>
            <X.P>
                {`$P(A)=\\frac{3}{5}$`}，{`$P(B)=\\frac{2}{5}$`}，{`$P(AB)=\\frac{1}{5}$`}
            </X.P>
            <X.P>抓到实心图形时抓到的是方形：{`$P(A|B)=\\frac{1}{2}$`}</X.P>
            <X.P>抓到方形时抓到的是实心图形：{`$P(B|A)=\\frac{1}{3}$`}</X.P>
            <X.P>\n结合上述例子理解贝叶斯公式的推导过程：</X.P>
            <X.Formula text="P(AB) = P(A|B) \cdot P(B)" />
            <X.Formula text="P(BA) = P(B|A) \cdot P(A)" />
            <X.Formula text="P(AB) = P(BA) \; \Rightarrow \; P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
            <X.H1>最小错误率贝叶斯决策</X.H1>
            <X.P>研究的类别有`c`个。</X.P>
            <X.HighlightBlock>
                <X.P>若{`$P(\\omega_i|x)=\\max_{j=1,...,c}P(\\omega_j|x)$`}，则$x$属于$\omega_i$类</X.P>
            </X.HighlightBlock>
            <X.H2>两分类情况下，最小错误率决策的四种等价规则</X.H2>
            <X.Oli>
                <X.P>后验概率判决</X.P>
                <X.Formula text="P(\omega_1|x) \gt P(\omega_2|x)" />
            </X.Oli>
            <X.Oli>
                <X.P>后验概率判决，分母相同看分子</X.P>
                <X.Formula text="P(x|\omega_1)P(\omega_1) \gt P(x|\omega_2)P(\omega_2)" />
            </X.Oli>
            <X.Oli>
                <X.P>似然比$l$、似然比阈值$\lambda$</X.P>
                <X.Formula text="l(x) = \frac{P(x|\omega_1)}{P(x|\omega_2)}, \; \lambda = \frac{P(\omega_2)}{P(\omega_1)}, \; l(x) \gt \lambda" />
            </X.Oli>
            <X.Oli>
                <X.P>对数似然比</X.P>
                <X.Formula text="-\ln [l(x)] \lt \ln\frac{P(\omega_1)}{P(\omega_2)}" />
            </X.Oli>
            <X.HighlightBlock>
                <X.P>可以把每一类的后验概率$P(\omega_i|x)$或者$P(x|\omega_i)P(\omega_i)$看作该类的一个`判别函数`$g(x)$，决策的过程就是各类的判别函数比较大小</X.P>
            </X.HighlightBlock>
            <X.H1>最小风险贝叶斯决策</X.H1>
            <X.H2>条件风险</X.H2>
            <X.Formula text="R(\alpha_i|x) = \sum_j\lambda(\alpha_i,\omega_j)P(\omega_j|x)" />
            <X.P>$\lambda(\alpha_i,\omega_j)$表示样本$x \in \omega_j$但被决策为$\omega_i$类的损失，$i=j$表示正确决策</X.P>
            <X.H2>最小风险贝叶斯决策</X.H2>
            <X.P>研究的类别有`c`个，做了`k`个决策。</X.P>
            <X.HighlightBlock>
                <X.P>若{`$R(\\alpha_i|x)=\\min_{j=1,...,k}R(\\alpha_j|x)$`}，则采用决策$\alpha_i$，即$x$属于$\omega_i$类</X.P>
            </X.HighlightBlock>
            <X.H2>两分类情况下的最小风险贝叶斯决策</X.H2>
            <X.P>简记$\lambda(\alpha_i,\omega_j)$为{`$\\lambda_{ij}$`}：</X.P>
            <X.Formula text="R(\alpha_1|x) = \lambda_{11}P(\omega_1|x) + \lambda_{12}P(\omega_2|x)" />
            <X.Formula text="R(\alpha_2|x) = \lambda_{21}P(\omega_1|x) + \lambda_{22}P(\omega_2|x)" />
            <X.P>若{`$R(\\alpha_1|x)\\lt R(\\alpha_2|x)$`}，则$x$属于$\omega_1$类</X.P>
            <X.H2>最小风险贝叶斯决策的另两种形式</X.H2>
            <X.P>若{`$(\\lambda_{21} - \\lambda_{11})P(\\omega_1|x) \\gt (\\lambda_{12} - \\lambda_{22})P(\\omega_2|x)$`}，则决策$x \in \omega_1$</X.P>
            <X.P>若{`$l(x)=\\frac{P(x|\\omega_1)}{P(x|\\omega_2)} \\gt \\frac{\\lambda_{12} - \\lambda_{22}}{\\lambda_{21} - \\lambda_{11}} \\cdot \\frac{P(\\omega_2)}{P(\\omega_1)}$`}，则决策$x \in \omega_1$</X.P>
            <X.HighlightBlock>
                <X.P>设损失函数为：</X.P>
                <X.Formula
                    text="\lambda(\alpha_i,\omega_j)=
                    \begin{cases}
                        0 \quad i=j \\
                        1 \quad i \neq j
                    \end{cases}
                    "
                />
                <X.P>最小错误率贝叶斯决策就是`0/1损失函数`条件下的最小风险贝叶斯决策。</X.P>
            </X.HighlightBlock>
            <X.H1>正态分布的统计决策</X.H1>
            <X.H2>从一维正态分布到高维正态分布</X.H2>
            <X.P>单变量正态分布函数：</X.P>
            <X.Formula text="P(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\{-\frac{1}{2} \cdot (\frac{x-\mu}{\sigma})^2\}" />
            <X.P>双变量正态分布函数：</X.P>
            <X.Formula
                text="P(x_1,x_2) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp\{
                -\frac{1}{2} \cdot \frac{1}{1-\rho^2} \cdot [(\frac{x_1-\mu_1}{\sigma_1})^2 - 2\rho\frac{(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2} + (\frac{x_2-\mu_2}{\sigma_2})^2]
                \}
                "
            />
            <X.P>对于上述二维正态分布，记：</X.P>
            <X.Formula
                text="
                \bm{X}=
                \begin{bmatrix}
                x_1 \\
                x_2
                \end{bmatrix},

                \bm{\mu}=
                \begin{bmatrix}
                \mu_1 \\
                \mu_2
                \end{bmatrix},

                \bm{\Sigma}=
                \begin{bmatrix}
                \sigma_1^2 & \rho\sigma_1\sigma_2 \\
                \rho\sigma_2\sigma_1 & \sigma_2^2
                \end{bmatrix}
                "
            />
            <X.P>则用矩阵形式表示为：</X.P>
            <X.HighlightBlock>
                <X.Formula
                    text="P(\bm{X}) = \frac{1}{(2\pi)^{\frac{d}{2}}|\bm{\Sigma}|^\frac{1}{2}} \exp \{
                    -\frac{1}{2} \cdot (\bm{X}-\bm{\mu})^T \bm{\Sigma}^{-1} (\bm{X}-\bm{\mu})
                    \}
                    "
                />
                <X.P>此式通用于高维正态分布。</X.P>
            </X.HighlightBlock>
            <X.P>理解这个长公式，先从两个概念入手：$\Sigma$矩阵代表什么？$\rho$似乎没有在通式中体现，其含义是什么？\n对于二维正态分布例子中的两个变量来说，它们的*协方差*定义为：</X.P>
            <X.Formula text="cov(x_1,x_2)=E[(x_1-\mu_1)(x_2-\mu_2)]=E(x_1x_2)-\mu_1\mu_2" />
            <X.P>$\Sigma$矩阵的含义其实是两个变量的协方差矩阵，也就是：</X.P>
            <X.Formula
                text="\bm{\Sigma} =
                \begin{bmatrix}
                cov(x_1,x_1) & cov(x_1,x_2) \\
                cov(x_2,x_1) & cov(x_2,x_2)
                \end{bmatrix},cov(x_1,x_1)=\sigma_1^2
                "
            />
            <X.P>$\rho$的含义为两个变量的相关系数，以上述变量`x1`,`x2`为例，计算公式为：</X.P>
            <X.Formula text="\rho = \frac{cov(x_1,x_2)}{\sigma_1\sigma_2} \; \Rightarrow \; cov(x_1,x_2)=\rho\sigma_1\sigma_2" />
            <X.P>至此就可以理解$\Sigma$,$\rho$两个参数的含义了！</X.P>
            <X.H2>正态分布概率模型下的最小错误率贝叶斯决策</X.H2>
            <X.Formula
                text="P(\bm{X}|\omega_i) = \frac{1}{(2\pi)^{\frac{d}{2}}|\bm{\Sigma_i}|^\frac{1}{2}} \exp \{
                -\frac{1}{2} \cdot (\bm{X}-\bm{\mu_i})^T \bm{\Sigma_i}^{-1} (\bm{X}-\bm{\mu_i})
                \}
                "
            />
            <X.P>
                注意这个类概率密度函数{`$P(\\bm{X}|\\omega_i)$`}的含义为，第$\omega_i$类的样本{`$\\bm{X}$`}的概率密度。\n使用后验概率的变形作为判别函数：
            </X.P>
            <X.Formula
                text="g_i(\bm{X}) = \ln [P(\bm{X}|\omega_i)P(\omega_i)] =
                -\frac{d}{2}\ln 2\pi -\frac{1}{2}\ln |\bm{\Sigma_i}| -\frac{1}{2}(\bm{X}-\bm{\mu_i})^T\bm{\Sigma_i}^{-1}(\bm{X}-\bm{\mu_i}) +\ln P(\omega_i)
                "
            />
            <X.P>从以下三种情况考虑决策面：</X.P>
            <X.Oli reset>
                <X.Formula text="\bm{\Sigma_1} = \bm{\Sigma_2}=...=\bm{\Sigma_c} = \sigma^2\bm{I}" />
            </X.Oli>
            <X.P>各类模式分布的协方差矩阵相等，样本统计独立且方差相同，协方差均为0。\n此时{`$g(\\bm{X})$`}的前两项与类别无关，后两项化简为：</X.P>
            <X.Formula text="g_i(\bm{X}) = -\frac{1}{2\sigma^2}\Vert\bm{X}-\bm{\mu_i}\Vert^2 +\ln P(\omega_i)" />
            <X.HighlightBlock>
                <X.P>如果先验概率相等，则决策只与欧氏距离有关。此时决策为：</X.P>
                <X.P>若{`$\\Vert\\bm{X}-\\bm{\\mu_i}\\Vert^2 = \\min_{j=1,...,c} \\Vert\\bm{X}-\\bm{\\mu_j}\\Vert^2$`}，则$x$属于$\omega_i$类</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock bgcolor="gray">
                <X.P>从几何的视角来看，以上决策规则实际就是比较样本点和各类的中心点距离，并且选择距离最近的类别作为决策结果。\n以上分类器也称`最小距离分类器`，把每个`均值`看作一个`典型的样本`，则这种分类方法也称为`模板匹配技术`。</X.P>
            </X.HighlightBlock>
            <X.P>如果对于上述判别函数{`$g(\\bm{X})$`}的欧式距离项展开，并删掉与类别无关的二次项，得：</X.P>
            <X.Formula text="g_i(\bm{X}) = \bm{W_i}^T\bm{X} + b" />
            <X.P>
                其中{`$\\bm{W_i} = \\frac{1}{\\sigma^2}\\bm{\\mu_i}$`}，{`$b = -\\frac{1}{2\\sigma^2}\\bm{\\mu_i}^T\\bm{\\mu_i} + \\ln P(\\omega_i)$`}
            </X.P>
            <X.P>判别函数是{`$\\bm{X}$`}的线性函数，称为`线性分类器`。</X.P>
            <X.P>接下来考虑决策面方程：</X.P>
            <X.Formula text="g_i(\bm{X}) = g_j(\bm{X}) \; \Rightarrow \; \bm{W}^T(\bm{X}-\bm{X_0}) = 0" />
            <X.P>
                其中{`$\\bm{W} = \\bm{\\mu_i} - \\bm{\\mu_j}$`}，{`$\\bm{X_0} = \\frac{1}{2}(\\bm{\\mu_i} + \\bm{\\mu_j}) - \\sigma^2\\frac{\\bm{\\mu_i}-\\bm{\\mu_j}}{\\Vert \\bm{\\mu_i}-\\bm{\\mu_j} \\Vert^2}\\ln\\frac{P(\\omega_i)}{P(\\omega_j)}$`}
            </X.P>
            <X.P>
                这个方程确定了决策面是通过{`$\\bm{X}_0$`}并正交于向量{`$\\bm{W}$`}的一个超平面。如果是二维平面上的点的分类问题，决策线过{`$\\bm{X}_0$`}点并且垂直于样本中心的连线。当先验概率相等时，{`$\\bm{X}_0$`}的后项为`0`，此时决策线就是样本中心连线的中垂线。\n来看一个具体的例子！我们需要对平面上的点进行分类任务，第一堆样本点中心为`(2,3)`，第二堆样本点中心为`(4,4)`：
            </X.P>
            <X.Image src="fig1.png" width="500px" invertInDarkTheme />
            <X.P>红色和蓝色分别标记了两类样本点的分布情况，其中加粗的红点和蓝点表示样本中心的位置；\n生成两组样本时使用的方差均为`0.8`；样本的$x,y$坐标相关性为`0`。\n现在对平面上的所有点计算判别函数`g_red`和`g_blue`。`g_red`更大的区域用红色阴影表示，`g_blue`更大的区域用蓝色阴影表示。\n两个区域的交界处即为自然生成的决策线。结果如下：</X.P>
            <X.FlexRow>
                <X.Image src="fig2.png" width="320px" invertInDarkTheme />
                <X.Image src="fig3.png" width="320px" invertInDarkTheme />
                <X.Image src="fig4.png" width="320px" invertInDarkTheme />
            </X.FlexRow>
            <X.P>决策线垂直于样本中心的连线并且在先验概率相等的前提下过样本中心连线中点`(左图)`。\n如果先验概率不相等，决策线会偏向先验概率小的一侧`(中图)`，而且有可能超过端点`(右图)`。</X.P>
            <X.P>对于三分类问题，得到的结果类似：</X.P>
            <X.Image src="fig5.png" width="500px" invertInDarkTheme />
            <X.Oli>
                <X.Formula text="\bm{\Sigma_1} = \bm{\Sigma_2}=...=\bm{\Sigma_c} = \bm{\Sigma}" />
            </X.Oli>
            <X.HighlightBlock bgcolor="gray">
                <X.H3>马氏距离</X.H3>
                <X.P>马氏距离可以看作对欧氏距离的修正。考虑下面的例子：\n黑色的点距离`green`类样本中心更近，与`red`、`blue`类样本中心等距。它应该被归为哪一类？\n</X.P>
                <X.Image src="fig6.png" width="500px" invertInDarkTheme />
                <X.P>按照欧氏距离判别，它应该被归为`green`类；然而从直觉上判断，它更可能属于`red`类。\n欧式距离并没有考虑样本的方差，以及样本各个维度之间的相关性。\n定义马氏距离：</X.P>
                <X.Formula text="r^2 = (\bm{X}-\bm{\mu})^T \bm{\Sigma}^{-1} (\bm{X}-\bm{\mu})" />
                <X.P>如果样本是二维的，且协方差矩阵$\sigma$为对角矩阵，马氏距离表示为：</X.P>
                <X.Formula
                    text="r^2 =
                    \begin{bmatrix}
                    x_1 - \mu_1 & x_2 - \mu_2
                    \end{bmatrix}
                    \begin{bmatrix}
                   1/\sigma_1^2 & 0 \\
                    0 & 1/\sigma_2^2
                    \end{bmatrix}
                    \begin{bmatrix}
                    x_1 - \mu_1 \\
                    x_2 - \mu_2
                    \end{bmatrix}=
                    \frac{(x_1-\mu_1)^2}{\sigma_1^2} + \frac{(x_2-\mu_2)^2}{\sigma_2^2}
                    "
                />
                <X.P>如果样本方差一样，则就是欧式距离；如果方差不一样，可以看作是标准化之后的欧氏距离。</X.P>
            </X.HighlightBlock>
            <X.P>判别函数：</X.P>
            <X.Formula text="g_i(\bm{X}) = -\frac{1}{2}r_i^2 + \ln P(\omega_i)" />
            <X.P>决策面方程：</X.P>
            <X.Formula text="\bm{W}^T(\bm{X}-\bm{X_0}) = 0" />
            <X.P>
                其中{`$\\bm{W} =\\bm{\\Sigma}^{-1} (\\bm{\\mu_i} - \\bm{\\mu_j})$`}，{`$\\bm{X_0} = \\frac{1}{2}(\\bm{\\mu_i} + \\bm{\\mu_j}) - \\frac{\\bm{\\mu_i}-\\bm{\\mu_j}}{(\\bm{\\mu_i}-\\bm{\\mu_j})^T \\bm{\\Sigma}^{-1} (\\bm{\\mu_i}-\\bm{\\mu_j})}\\ln\\frac{P(\\omega_i)}{P(\\omega_j)}$`}
            </X.P>
            <X.P>此时，先验概率相等的前提下，决策线仍然过样本中心连线中点；但不一定垂直于样本中心的连线。</X.P>
            <X.Image src="fig7.png" width="500px" invertInDarkTheme />
            <X.Oli>
                <X.Formula text="\bm{\Sigma_i} \neq \bm{\Sigma_j}" />
            </X.Oli>
            <X.P>此为最一般情况。决策面为超二次曲面。对于二维样本，决策线为二次曲线。\n判别函数：</X.P>
            <X.Formula text="g_i(\bm{X}) = -\frac{1}{2}r_i^2 - \frac{1}{2}\ln |\bm{\Sigma_i}| + \ln P(\omega_i)" />
            <X.FlexRow>
                <X.Image src="fig8.png" width="320px" invertInDarkTheme />
                <X.Image src="fig9.png" width="320px" invertInDarkTheme />
                <X.Image src="fig10.png" width="320px" invertInDarkTheme />
            </X.FlexRow>
        </>
    );
}
