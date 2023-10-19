import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>「模式识别」非参数估计</X.Title>
            <X.P>
                本章讨论的是`非参数估计`。很多时候我们无法给出样本分布的函数形式，也就无法使用根据样本估计函数参数的思路。\n
                非参数估计的思想是，直接根据样本，用数值方法估计出整个分布函数。
            </X.P>
            <X.H1>非参数估计的基本原理</X.H1>
            <X.P>
                还记得*用频率估计概率*的经典思想吗！假设你掷了`1000`次硬币，发现有`489`次正面朝上，那么你估计掷这枚硬币正面朝上的概率是`0.489`，或者近似地，概率约为`0.5`。
            </X.P>
            <X.P>
                现在我们来考虑更复杂一点的情况，要估计的不是某个概率数值，而是样本分布的概率密度函数。考虑概率密度的性质：概率密度函数在区间---
                $[x,x+\Delta x]$下的面积即为样本落在区间$[x,x+\Delta x]$内的概率。\n
                表述的更抽象一点，我们要估样本出现在面积为$V$的一个小区域$R$中的概率，---
                这里的$R$就相当于上面例子中的区间$[x,x+\Delta x]$，$V=\Delta x$。
            </X.P>
            <X.P>
                总样本数为$n$，落到小区域$R$内的样本数为$k$时，如果区域面积$V$合适地小，我们就可以认为在$R$区域内的概率密度是一个常数：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{k}{n} \cdot \frac{1}{V}" />
            <X.H1>直方图方法</X.H1>
            <X.P>直方图方法非常简单，可以理解为近似的用直方图的形状取描述概率密度函数。</X.P>
            <X.Image src={require('./fig1.png')} width="800" />
            <X.P>
                不过，在样本数量并非无限时，如果小舱（直方图组距）过大，那么最终估计出的密度函数就非常粗糙；---
                如果过小，那么有的小舱内可能没有样本，估计出的概率密度函数很不连续。
            </X.P>
            <X.FlexRow>
                <X.Image src={require('./fig2.png')} width="100%" />
                <X.Image src={require('./fig3.png')} width="100%" />
            </X.FlexRow>
            <X.HighlightBlock>
                <X.P>
                    小舱的选择应该与样本总数相适应。如果样本总数是$n$，小舱体积是$V_n$，在$x$附近落入小舱的样本个数是$k_n$，那么估计的概率密度
                    {`$\\hat{P}(x)$`}可以收敛于真实概率密度$P(x)$的条件是：
                </X.P>
                <X.Formula text="\lim_{n \to \infty} V_n=0, \quad \lim_{n \to \infty} k_n=\infty, \quad \lim_{n \to \infty} \frac{k_n}{n}=0" />
                <X.P>
                    可以这样理解：小舱体积应该尽可能小，同时要保证小舱内有充分多的样本，但每个小舱内样本数又必须是总样本数中很小一部分。
                </X.P>
            </X.HighlightBlock>
            <X.H1>k近邻法</X.H1>
            <X.P>
                `kNN`的全称是`k Nearest Neighbors`，意思是K个最近的邻居。---
                基本做法是：根据样本总数确定一个参数$k_n$，例如样本总数为$n$时，可以取
            </X.P>
            <X.Formula text="k_n=\sqrt{n}" />
            <X.P>
                在求$x$处的密度估计{`$\\hat{P}(x)$`}
                时，通过调整包含$x$的小舱体积，直到小舱内恰好落入$k_n$个样本。此时有：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{k_n}{n} \cdot \frac{1}{V}" />
            <X.P>
                使用`kNN`方法时，样本密度较高的地方小舱体积会比较小，而样本密度低的地方小舱体积自动增大。这样可以兼顾高密度区域的分辨率和低密度区域的连续性。
            </X.P>
            <X.H1>Parzen窗法</X.H1>
            <X.P>
                在这种方法中，我们会定义一个核函数（也称窗函数）$K(x,x_i)$，其含义是，一个观测样本$x_i$对在$x$处概率密度估计的贡献。---
                概率密度估计就是在每一点上把所有观测样本的贡献进行平均，即：
            </X.P>
            <X.Formula text="\hat{P}(x) = \frac{1}{n} \sum_{i=1}^n K(x,x_i)" />
            <X.P>窗函数只需要本身满足概率密度函数的要求即可：</X.P>
            <X.Formula text="K(x,x_i) > 0 \; 且 \; \int K(x,x_i) dx = 1" />
            <X.P>
                下面列举几种常见的窗函数。上文中样本都简单地用$x$表示，下面仍然回到最一般的情况：\n
                假设样本有$d$个维度，记样本为{`$\\bm{X}=[x_1, x_2, \\dots, x_d]^T$`}。
            </X.P>
            <X.Uli>方窗</X.Uli>
            <X.P>方窗范围可以看作以{`$\\bm{X}_i$`}为中心的超立方体，其代表窗口大小的参数是立方体棱长$h$。</X.P>
            <X.Formula
                text="
                K(\bm{X},\bm{X}_i)=
                \begin{cases}
                \frac{1}{h^d}，\quad |\Delta x_i| < \frac{h}{2}\\
                \\
                0，\quad 其他
                \end{cases}
                "
            />
            <X.Uli>高斯窗（正态窗）</X.Uli>
            <X.P>
                高斯窗范围即以样本{`$\\bm{X}_i$`}为均值，协方差矩阵为{`$\\bm{\\Sigma}=\\rho^2\\bm{Q}$`}的正态分布。
            </X.P>
            <X.Formula
                text="K(\bm{X},\bm{X}_i) = \frac{1}{\sqrt{(2 \pi)^d \rho^{2d}|\bm{Q}|}} \exp \{
                -\frac{1}{2} \cdot \frac{(\bm{X}-\bm{X}_i)^T \bm{Q}^{-1} (\bm{X}-\bm{X}_i)}{\rho^2}
                \}
                "
            />
            <X.P>一维情况下有：</X.P>
            <X.Formula text="K(x,x_i) = \frac{1}{\sqrt{2\pi}\sigma} \exp\{-\frac{1}{2} \cdot (\frac{x-x_i}{\sigma})^2\}" />
            <X.Uli>超球窗</X.Uli>
            <X.P>超球窗范围可以看作以{`$\\bm{X}_i$`}为中心的超球体，体积为$V$，半径为$r$。</X.P>
            <X.Formula
                text="
                K(\bm{X},\bm{X}_i)=
                \begin{cases}
                \frac{1}{V}，\quad \Vert \bm{X}-\bm{X}_i \Vert \leq {r}\\
                \\
                0，\quad 其他
                \end{cases}
                "
            />
            <X.HighlightBlock>
                <X.P>
                    这些窗函数中都有一个表示窗口宽度的参数（$h$/$\rho$/$r$），也称作平滑参数，它反映了一个样本可以对多大范围内的密度估计产生影响。
                </X.P>
            </X.HighlightBlock>
            <X.P>下面是在样本数和平滑参数不同时，使用方窗和高斯窗的估计结果：</X.P>
            <X.Uli>方窗</X.Uli>
            <X.Image src={require('./fig4.png')} width="100%" />
            <X.Uli>高斯窗</X.Uli>
            <X.Image src={require('./fig5.png')} width="100%" />
            <X.HighlightBlock>
                <X.P>
                    你可能发现当平滑参数过大时，估计的效果并不理想。然而在窗函数及其参数满足一定的条件时，Parzen窗估计可以是渐进无偏的。---
                    其中对于小舱体积（也就是平滑参数决定的窗口宽度）的要求是，应随着样本数的增加而趋近于`0`，但是缩减速度不可以快于$1/n$。\n
                    常取为{`$\\frac{1}{\\sqrt{n}}$`}的倍数。
                </X.P>
            </X.HighlightBlock>
            <X.P>下面是取{`$\\sigma=\\frac{32}{\\sqrt{n}}$`}的高斯窗的估计结果：</X.P>
            <X.Image src={require('./fig6.png')} width="100%" />
        </X.BlogWrapper>
    );
}
