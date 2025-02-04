import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>神经网络</X.H1>
            <X.Oli>
                <X.P>试论述学习率的取值对神经网络训练的影响。</X.P>
                <X.P>答：学习率太高会导致误差函数来回震荡无法收敛；学习率太低会导致收敛太慢，影响训练效率。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>正样本点是$x_1=(3,3)^T$和$x_2=(4,3)^T$，负样本点是$x_3=(1,1)^T$，求解感知机模型，初始参数取$0$。</X.P>
                <X.P>答：维度增广：$x_1=(3,3,1)^T$、$x_2=(4,3,1)^T$、$x_3=(1,1,1)^T$</X.P>
                <X.Table
                    fromText={`
                    次数|错分的点|$[\\Delta \\omega^T \\; \\Delta b^T]$|$\\omega$|$b$
                    '0'|||$(0,0)^T$|$0$
                    '1'|$x_1$|$(3,3,1)^T$|$(3,3)^T$|$1$
                    '2'|$x_3$|$(-1,-1,-1)^T$|$(2,2)^T$|$0$
                    '3'|$x_3$|$(-1,-1,-1)^T$|$(1,1)^T$|$-1$
                    '4'|$x_3$|$(-1,-1,-1)^T$|$(0,0)^T$|$-2$
                    '5'|$x_1$|$(3,3,1)^T$|$(3,3)^T$|$-1$
                    '6'|$x_3$|$(-1,-1,-1)^T$|$(2,2)^T$|$-2$
                    '7'|$x_3$|$(-1,-1,-1)^T$|$(1,1)^T$|$-3$
                    '8'|均正确||$(1,1)^T$|$-3$
                    `}
                />
            </X.Oli>
            <X.Oli>
                <X.P>简述神经网络需要激活函数的原因，并比较`sigmoid`、`tanh`、`ReLU`分别作为激活函数的效果有何区别。</X.P>
                <X.P>答：激活函数为神经网络引入了非线性，能提高网络对模型的表达能力，解决线性模型所不能解决的问题。</X.P>
                <X.Uli>`sigmoid`：平滑且连续，但容易引起梯度消失；输出不以$0$为中心；主要用于输出层，在二分类问题中尤为常见。</X.Uli>
                <X.Uli>`tanh`：输出以$0$为中心，可以缓解梯度消失的问题；隐藏层中比`sigmoid`更常见。</X.Uli>
                <X.Uli>`ReLU`：计算简单，加速神经网络的收敛；可以缓解梯度消失的问题；但有可能导致神经元“死亡”（如果`ReLU`层的输入总是负的，那么该处梯度一直为$0$，神经元无法学习）；在现代神经网络架构中极为普遍。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>根据图示分界线给出与门神经网络的参数$w_1$、$w_2$、$b$。</X.P>
                <X.Image src="fig1.png" width="400px" filterDarkTheme />
                <X.P>答：{`$y=\\text{sign}(u_1+u_2-1.5)$`}，因此$w_1=1$、$w_2=1$、$b=-1.5$</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>对下面的梯度下降算法步骤进行排序：</X.P>
                <X.P>`a.`计算预测值和真实值之间的误差</X.P>
                <X.P>`b.`重复迭代，直至得到网络权重的最佳值</X.P>
                <X.P>`c.`把输入传入网络，得到输出值</X.P>
                <X.P>`d.`用随机值初始化权重和偏差</X.P>
                <X.P>`e.`对每一个产生误差的神经元，调整相应的权重值以减小误差</X.P>
                <X.P>答：`d``c``a``e``b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>下列哪一项在神经网络中引入了非线性？</X.P>
                <X.P>`a.`随机梯度下降</X.P>
                <X.P>`b.`修正线性单元`(Rectified Linear Unit, ReLU)`</X.P>
                <X.P>`c.`卷积函数</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在感知机中的任务顺序是什么？</X.P>
                <X.P>`a.`随机初始化感知机的权重</X.P>
                <X.P>`b.`去到数据集的下一批`(batch)`</X.P>
                <X.P>`c.`如果预测值和输出不一致，则调整权重</X.P>
                <X.P>`d.`对一个输入样本，计算输出值</X.P>
                <X.P>答：`a``d``c``b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>下列哪个函数不可以做激活函数？</X.P>
                <X.P>`a.`$y=\tanh(x)$</X.P>
                <X.P>`b.`$y=\sin(x)$</X.P>
                <X.P>`c.`$y=\max(x,0)$</X.P>
                <X.P>`d.`$y=2x$</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>下列关于神经元的描述中，哪一项是正确的？</X.P>
                <X.P>`a.`每个神经元可以有一个输入和一个输出</X.P>
                <X.P>`b.`每个神经元可以有多个输入和一个输出</X.P>
                <X.P>`c.`每个神经元可以有一个输入和多个输出</X.P>
                <X.P>`d.`每个神经元可以有多个输入和多个输出</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>如果用了一个*过大*的学习速率会发生什么？</X.P>
                <X.P>`a.`神经网络会收敛</X.P>
                <X.P>`b.`神经网络不会收敛</X.P>
                <X.P>`c.`不确定</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.H1>优化方法</X.H1>
            <X.Oli reset>
                <X.P>在训练神经网络时，损失函数在最初的几个时没有下降，可能的原因是？</X.P>
                <X.Image src="fig2.png" width="260px" filterDarkTheme />
                <X.P>答：学习率太低；正则参数太高；陷入局部最优值等。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>批规范化`(Batch Normalization)`的好处有？</X.P>
                <X.P>`a.`让每一层的输入的范围都大致固定</X.P>
                <X.P>`b.`它将返回权重的归一化平均值和标准差</X.P>
                <X.P>`c.`它是一种非常有效的反向传播方法</X.P>
                <X.P>`d.`这些均不是</X.P>
                <X.P>答：`a`</X.P>
                <X.HighlightBlock background="red">
                    <X.P>BN是对数据做批规范化，不是对权重。</X.P>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>在一个神经网络中，下面哪种方法可以用来处理过拟合？</X.P>
                <X.P>`a.`Dropout</X.P>
                <X.P>`b.`Batch Normalization</X.P>
                <X.P>`c.`正则化</X.P>
                <X.P>`d.`以上都可以</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>考虑某个具体问题时，你可能只有少量数据来解决这个问题。不过幸运的是你有一个类似问题已经预先训练好的神经网络。可以用下面哪种方法来利用这个预先训练好的网络？</X.P>
                <X.P>`a.`把除了最后一层外所有的层都冻结，重新训练最后一层</X.P>
                <X.P>`b.`对新数据重新训练整个模型</X.P>
                <X.P>`c.`只对最后几层进行调参`(fine-tuning)`</X.P>
                <X.P>`d.`对每一层模型进行评估，选择其中的少数来使用</X.P>
                <X.P>答：`c`</X.P>
                <X.HighlightBlock background="red">
                    <X.P>在考虑微调时，根据新数据集的大小、新数据集与预训练模型数据集相似度，不同策略如下：</X.P>
                    <X.Table
                        fromText={`
                        |数据量少|数据量大
                        相似度低|主干部分提取的特征是通用特征，可以冻结预训练模型的初始层（比如'k'层），并再次训练剩余的提取高层特征'n-k'层。|根据数据从头开始训练神经网络'(training from scratch)'
                        相似度高|修改最后几层或输出层的输出类别|这时是理想情况，保留预训练模型的结构和初始权重，再用数据来重新训练该模型
                        `}
                        tableStyle={{
                            thead: 'all',
                            width: [0, 400, 400],
                        }}
                    />
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>对于一个分类任务，如果开始时神经网络的权重不是随机赋值的，而是都设成$0$，下面哪个叙述是正确的？</X.P>
                <X.P>`a.`神经网络会正常开始训练</X.P>
                <X.P>`b.`神经网络可以训练，但是所有的神经元最后都会变成识别同样的东西</X.P>
                <X.P>`c.`神经网络不会开始训练，因为没有梯度改变</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>为了避免开始训练时神经网络卡在局部最小值里，我们可以采取下面哪种策略？</X.P>
                <X.P>`a.`改变学习速率，比如一开始的几个训练周期不断更改学习速率</X.P>
                <X.P>`b.`一开始将学习速率减小$10$倍，然后用动量项</X.P>
                <X.P>`c.`增加参数数目，这样神经网络就不会卡在局部最优处</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>下列的哪种方法可以用来降低深度学习模型的过拟合问题？</X.P>
                <X.P>`1.`增加更多的数据</X.P>
                <X.P>`2.`使用数据增广`(data augmentation)`</X.P>
                <X.P>`3.`使用归纳性更好的架构</X.P>
                <X.P>`4.`正则化数据</X.P>
                <X.P>`5.`降低架构的复杂度</X.P>
                <X.P>答：`1``2``3``4``5`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>当训练一个神经网络来作图像识别任务时，通常会绘制一张训练集误差和交叉训练集误差图来进行调试。在图中，最好在哪个时间停止训练？</X.P>
                <X.Image src="fig3.png" width="260px" filterDarkTheme />
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>下面哪些叙述是对的？</X.P>
                <X.P>`1.`可以通过将所有权重初始化为$0$来训练网络</X.P>
                <X.P>`2.`可以通过将偏差初始化为$0$来很好地训练网络</X.P>
                <X.P>答：`2`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>如果我们希望预测$n$个类的概率使得所有概率和等于$1$，那么下列哪个函数可以用作输出层中的激活函数？</X.P>
                <X.P>`a.`Softmax</X.P>
                <X.P>`b.`ReLU</X.P>
                <X.P>`c.`Sigmoid</X.P>
                <X.P>`d.`Tanh</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>使用批量归一化可以解决神经网络训练中的哪些问题？</X.P>
                <X.P>`a.`过拟合</X.P>
                <X.P>`b.`限制输出过大或过小</X.P>
                <X.P>`c.`训练过慢</X.P>
                <X.P>`d.`以上所有</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>我们可以采取哪些措施来防止神经网络中的过拟合？</X.P>
                <X.P>`a.`数据增强</X.P>
                <X.P>`b.`权重共享</X.P>
                <X.P>`c.`提前停止</X.P>
                <X.P>`d.`Dropout</X.P>
                <X.P>`e.`以上所有</X.P>
                <X.P>答：`e`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>以下模型中，在数据预处理时，不需要考虑归一化处理的是：</X.P>
                <X.P>`a.`logistic回归</X.P>
                <X.P>`b.`SVM</X.P>
                <X.P>`c.`树形模型</X.P>
                <X.P>`d.`神经网络</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>BN层有两个可学习参数：拉伸参数$\gamma$和偏移参数$\beta$，它们的形状与$x$相同。请写出经过批量归一化转换后的$x$表达式。</X.P>
                <X.P>答：</X.P>
                <X.Formula text="\text{BN}(x)=\gamma \cdot \frac{x-\text{E}(x)}{\text{Var}(x)} + \beta" />
                <X.HighlightBlock background="red">
                    <X.Uli>分母常写为{`$\\sqrt{\\text{Var}(x)^2+\\varepsilon}$`}</X.Uli>
                    <X.Uli>参数$\gamma$和$\beta$通常是向量，公式中的乘法应为按元素乘。</X.Uli>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>简述Dropout能够防止过拟合的原因。</X.P>
                <X.P>答：</X.P>
                <X.Uli>模拟集成学习：在训练时，Dropout随机关闭网络中的一部分神经元，可以被看作是在训练每个小批量数据时都使用了一个略有不同的网络结构，这类似于训练多个不同的模型并进行集成学习。在测试时，使用所有神经元，相当于对这些“模型”进行平均，这有助于提高泛化能力。</X.Uli>
                <X.Uli>减少复杂共适应性：在没有Dropout的情况下，网络的神经元可能会学会共同适应并对特定的训练数据过度拟合，即它们共同调整它们的行为来记住训练数据的特定特征。使用Dropout意味着网络的神经元不能依赖于特定其他神经元的存在，因此，每个神经元必须学习更加鲁棒的特征，这些特征在各种不同的网络子集中都有用。</X.Uli>
                <X.Uli>正则化效果：从正则化的角度来看，Dropout可以被视为一种增加模型的随机性、降低模型复杂度的方式。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>BN和Dropout一般不会同时使用，请简述原因。</X.P>
                <X.P>答：</X.P>
                <X.Uli>目标冲突：BN希望保持激活值的分布稳定，而Dropout则通过引入噪声来增加网络的泛化能力，这在一定程度上是相互矛盾的。</X.Uli>
                <X.Uli>内部协变量偏移：批归一化通过规范化激活层的输出来减少内部协变量偏移。但是，当使用Dropout时，由于随机关闭神经元，激活层的输出分布在每次迭代中都会发生变化，这可能会破坏批归一化试图解决的问题。</X.Uli>
                <X.Uli>影响训练：当同时使用这两种技术时，网络的训练可能会受到干扰。Dropout会改变网络中信息的流动方式，而批归一化依赖于这些信息的稳定分布来进行有效的规范化。</X.Uli>
                <X.Uli>测试时行为不一致：当网络的状态从训练转移到测试时，以$p$概率关闭神经元的Dropout层计算时权重会乘$(1-p)$，改变了输出的方差，而测试阶段BN保持了它的统计方差。这种方差的不一致性会影响预测的结果。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>假设Dropout概率为$p$，为了保证期望值不变，在测试时，该层模型权重$w$应该变为？</X.P>
                <X.P>答：$(1-p)w$</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>设模型初始参数$\theta_0=(0.1,0.2)^T$，学习率为$\eta=0.1$，动量更新权重为$\lambda=1$，若模型在两次训练过程中的梯度依次为$g_0=(2,-1)^T$、$g_1=(1,-2)^T$，求两次训练后模型的参数$\theta_2$。</X.P>
                <X.P>答：动量法参数更新公式为$m' \leftarrow \lambda m - \eta g, \; w' \leftarrow w + m$</X.P>
                <X.P>第一次训练：\n$m_0=(0,0)^T$\n$m_1 = m_0 - 0.1g_0 = (-0.2,0.1)^T$\n$\theta_1 = \theta_0 + m_1 = (-0.1,0.3)^T$</X.P>
                <X.P>第二次训练：\n$m_2 = m_1 - 0.1g_1 = (-0.3,0.3)^T$\n$\theta_2 = \theta_1 + m_2 = (-0.4,0.6)^T$</X.P>
            </X.Oli>
            <X.H1>卷积神经网络</X.H1>
            <X.Oli reset>
                <X.P>填充在卷积操作中的作用是：</X.P>
                <X.P>答：可以增加输出的大小，从而使得卷积层能够更好地保留输入数据的*边缘信息*。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>神经网络反向传播的过程中，梯度计算通常使用什么算法？</X.P>
                <X.P>答：链式法则。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在反向传播中，激活函数的导数被用来计算（）。</X.P>
                <X.P>答：神经元的局部梯度。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>反向传播中的损失函数对于输出层的梯度计算通常使用（）。</X.P>
                <X.P>答：交叉熵。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>Batch Normalization中反向传播的过程涉及到计算对于输入的梯度，该梯度计算通常需要计算均值和方差的（）。</X.P>
                <X.P>答：梯度。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>反向传播中的优化算法，如随机梯度下降的更新规则是通过将参数沿着（）进行更新。</X.P>
                <X.P>答：梯度的负方向。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>卷积神经网络中的卷积层和池化层分别用于什么目的？</X.P>
                <X.P>`a.`特征提取和降采样</X.P>
                <X.P>`b.`特征降维和特征映射</X.P>
                <X.P>`c.`激活函数和正则化</X.P>
                <X.P>`d.`参数初始化和反向传播</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在卷积神经网络中，填充的作用是什么？</X.P>
                <X.P>`a.`增加输出特征图的尺寸</X.P>
                <X.P>`b.`防止卷积操作导致边缘信息丢失</X.P>
                <X.P>`c.`减少模型的参数数量</X.P>
                <X.P>`d.`提高模型的训练速度</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在卷积神经网络的反向传播中，梯度下降的目标是调整什么参数？</X.P>
                <X.P>`a.`输入数据</X.P>
                <X.P>`b.`权重和偏置</X.P>
                <X.P>`c.`激活函数的阈值</X.P>
                <X.P>`d.`卷积核的尺寸</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>反向传播中的卷积操作涉及哪些参数的梯度更新？</X.P>
                <X.P>`a.`输入数据</X.P>
                <X.P>`b.`卷积核的权重</X.P>
                <X.P>`c.`池化层的输出</X.P>
                <X.P>`d.`批量归一化的参数</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>反向传播中的池化层的梯度是如何传播的？</X.P>
                <X.P>答：在最大池化中，反向传播时梯度会被传递给池化层输入中最大值所对应的位置，而其他位置的梯度为零；在平均池化中，反向传播时梯度会均匀分配给池化层输入的所有元素。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>判断：步幅越大，池化层输出的特征图尺寸越小。</X.P>
                <X.P>`a.`对</X.P>
                <X.P>`b.`错</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>判断：在卷积神经网络中，通道数指的是卷积核的数量。</X.P>
                <X.P>`a.`对</X.P>
                <X.P>`b.`错</X.P>
                <X.P>答：`b`</X.P>
                <X.HighlightBlock background="red">
                    <X.P>通常认为卷积核数量等于输出通道数。</X.P>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>卷积神经网络的经典结构有哪些？简单介绍一下近年来具有代表性的深度卷积神经网络的设计思路：</X.P>
                <X.P>答：有LeNet、AlexNet、VGG、ResNet等。</X.P>
                <X.Uli>LeNet：可以达到手写数字识别在当时最好的结果，是卷积神经网络奠基性的工作，提出CNN的三个特性：局部感知、下采样、权值共享。</X.Uli>
                <X.Uli>AlexNet：使用`8`层卷积网络；Sigmoid激活函数改成了更加简单的ReLU；通过Dropout控制模型复杂度；引入大量图像增广的方法。</X.Uli>
                <X.Uli>VGG：提出了可以通过重复使用简单的基础块来构建深度模型的思路。使用三个$3 \times 3$卷积核代替$7 \times 7$卷积核，使用两个$3 \times 3$卷积核代替$5 \times 5$卷积核，在保证具有相同感知野的条件下，提升了网络的深度，减小了网络参数，在一定程度上提升了神经网络的效果。</X.Uli>
                <X.Uli>ResNet：使用残差连接解决深度神经网络的退化问题。</X.Uli>
            </X.Oli>
            <X.H1>循环神经网络</X.H1>
            <X.Oli reset>
                <X.P>RNN的基本结构包括三个主要组件，其中（）接收输入序列，（）负责记忆和传递信息，（）产生最终输出。</X.P>
                <X.P>答：输入层、隐藏层、输出层。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>（）可能导致数值溢出，（）可能导致长时依赖问题。应对策略可能包括梯度截断、使用LSTM或GRU等。</X.P>
                <X.P>答：梯度爆炸、梯度消失。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>LSTM中（）决定遗忘多少之前的记忆，（）决定存储多少新的信息，（）决定记忆细胞的哪部分被输出。</X.P>
                <X.P>答：遗忘门、输入门、输出门。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>为什么在某些任务中选择使用RNN而不是其他神经网络结构？</X.P>
                <X.P>`a.`处理序列数据</X.P>
                <X.P>`b.`具有记忆能力</X.P>
                <X.P>`c.`适用于时序关系建模</X.P>
                <X.P>`d.`所有选项都正确</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>LSTM和GRU是RNN的两种常见变体，它们的主要区别是什么？</X.P>
                <X.P>`a.`LSTM有三个门，而GRU只有两个门</X.P>
                <X.P>`b.`LSTM具有记忆细胞和输入门</X.P>
                <X.P>`c.`GRU相对于LSTM参数更少</X.P>
                <X.P>`d.`所有选项都正确</X.P>
                <X.P>答：`d`</X.P>
                <X.HighlightBlock background="red">
                    <X.P>*门控循环单元*`(Gated Recurrent Unit, GRU)`通过简化LSTM神经网络循环函数达到了类似的效果并节省了计算成本。在GRU中，遗忘门和输入门合并成了一个新的重置门，且加入了一个更新门。</X.P>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>在训练中，如果梯度爆炸发生，可能会导致什么问题？</X.P>
                <X.P>`a.`数值溢出</X.P>
                <X.P>`b.`模型参数不稳定</X.P>
                <X.P>`c.`训练无法收敛</X.P>
                <X.P>`d.`所有选项都正确</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>对于长序列的处理，LSTM和GRU相对于传统RNN具有哪些优势？</X.P>
                <X.P>`a.`更好地捕捉长时依赖关系</X.P>
                <X.P>`b.`减缓梯度消失问题</X.P>
                <X.P>`c.`更适用于时间序列建模</X.P>
                <X.P>`d.`所有选项都正确</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>当训练长序列时，梯度爆炸和梯度消失问题可能变得更加显著。请简要解释为什么会出现这些问题。</X.P>
                <X.P>答：在长序列中梯度反向传播的时候可能多次相乘，导致指数级增长或减小。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在选择LSTM或GRU时，你会在什么情况下更倾向于选择其中之一？</X.P>
                <X.P>答：需要更复杂建模能力时选择LSTM，当计算成本和参数量更为重要时选择GRU。</X.P>
            </X.Oli>
            <X.H1>生成对抗网络</X.H1>
            <X.Oli reset>
                <X.P>目标函数的构造过程中，生成器的目标是最小化生成样本与（）之间的差异。</X.P>
                <X.P>答：真实样本。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在生成对抗网络的训练过程中，生成器通过（）来调整生成的样本。</X.P>
                <X.P>答：梯度下降。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>生成对抗网络的目标函数包括以下哪个部分？</X.P>
                <X.P>`a.`生成器误差</X.P>
                <X.P>`b.`判别器误差</X.P>
                <X.P>`c.`生成器和判别器误差</X.P>
                <X.P>`d.`目标函数不包括误差</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>目标函数的全局最优解表示什么情况？</X.P>
                <X.P>`a.`生成器和判别器都失效</X.P>
                <X.P>`b.`生成器和判别器都取得最佳效果</X.P>
                <X.P>`c.`生成器失效，判别器最优</X.P>
                <X.P>`d.`判别器失效，生成器最优</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在生成对抗网络的训练中，判别器的任务是？</X.P>
                <X.P>`a.`最大化生成样本的相似度</X.P>
                <X.P>`b.`最小化生成样本的相似度</X.P>
                <X.P>`c.`区分真实样本和生成样本</X.P>
                <X.P>`d.`不参与训练</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>生成对抗网络的训练过程中，生成器的优化目标是？</X.P>
                <X.P>`a.`最大化生成样本的相似度</X.P>
                <X.P>`b.`最小化生成样本的相似度</X.P>
                <X.P>`c.`欺骗判别器，使其无法区分真实样本和生成样本</X.P>
                <X.P>`d.`保持生成样本的多样性</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>生成对抗网络的训练中，为什么需要协调生成器和判别器的训练？</X.P>
                <X.P>`a.`使生成器过拟合</X.P>
                <X.P>`b.`保持判别器过拟合</X.P>
                <X.P>`c.`实现平衡，避免其中一个过于强大</X.P>
                <X.P>`d.`判别器不需要训练</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在生成对抗网络中，使用哪种损失函数来衡量生成器生成样本的质量？</X.P>
                <X.P>`a.`交叉熵损失</X.P>
                <X.P>`b.`均方误差损失</X.P>
                <X.P>`c.`对抗损失</X.P>
                <X.P>`d.`KL散度损失</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>对传统生成对抗网络有哪些改进方法？</X.P>
                <X.P>答：传统GAN存在的问题：</X.P>
                <X.Uli>
                    <X.P>梯度消失，JS散度的问题：只要两分布没有重叠部分或重叠部分可忽略，JS散度恒为$\log2$，目标函数为$0$。当判别器最优时，生成器无法获得任何梯度信息，梯度消失，无法训练。</X.P>
                    <X.P>改进办法：</X.P>
                    <X.Oli reset>不把判别器训练的太好；</X.Oli>
                    <X.Oli>给生成数据和真实数据加噪声，强行让生成数据与真实数据在高维空间产生重叠，JS散度就可以发挥作用。</X.Oli>
                </X.Uli>
                <X.Uli>
                    <X.P>模式崩溃：生成图像中相同的图像多次出现，造成生成数据多样性不足。</X.P>
                    <X.P>改进办法：</X.P>
                    <X.Oli reset>从目标函数考虑：经验发现，当GAN出现模式崩溃问题时，通常判别器在真实样本附近更新参数时，其梯度值非常大。可对判别器在真实样本附近施加梯度惩罚项。试图在真实样本附近构建线性函数，因为线性函数为凸函数具有全局最优解。（DRAGAN）</X.Oli>
                    <X.Oli>从网络架构考虑：即使单个生成器会产生模式崩溃的问题，但是如果同时构造多个生成器，且让每个生成器产生不同的模式，则这样的多生成器结合起来也可以保证产生的样本具有多样性。（Multi-Agent Diverse GAN）</X.Oli>
                </X.Uli>
                <X.P>一些其他的改进：</X.P>
                <X.Uli>Wasserstein GAN：提出是为了解决传统GAN遇到的梯度消失、训练时梯度不稳定以及模式崩溃等问题。使用Wasserstein距离来衡量两分布之间的距离，抛弃了KL散度与JS散度。</X.Uli>
                <X.Uli>WGAN-GP`(gradient penalty)`：不再使用Wasserstein GAN中梯度裁剪的方式来粗暴地限制参数范围。</X.Uli>
            </X.Oli>
            <X.H1>强化学习</X.H1>
            <X.Oli reset>
                <X.P>最优动作价值函数依赖于（）。</X.P>
                <X.P>答：状态、行动。</X.P>
                <X.HighlightBlock background="red">
                    <X.Uli>*策略*：智能体根据状态进行下一步行动的函数。\n确定性策略：$\pi(s)=a$，即状态$s$下执行动作$a$\n随机性策略：$\pi(s,a)=p$，即在状态$s$下执行动作$a$的概率为$p$</X.Uli>
                    <X.Uli>*奖励*`(reward)`：在$t$时刻得到的奖励$R_t$，$R_t$依赖于$s_t$和$a_t$。</X.Uli>
                    <X.Uli>*回报*`(return)`：在$t$时刻的*折扣回报*是{`$U_t=R_t+\\gamma R_{t+1}+\\gamma^2 R_{t+2}+\\dots$`}</X.Uli>
                    <X.Uli>
                        *动作价值函数*：{`$Q_{\\pi}(s_t,a_t)=\\text{E}(U_t|s_t,a_t)$`}
                        ，评估智能体在状态$s_t$时选择动作$a_t$有多好。
                    </X.Uli>
                    <X.Uli>
                        *状态价值函数*：{`$V_{\\pi}(s_t)=\\text{E}(Q_{\\pi})=\\sum_a\\pi(s_t,a)Q_{\\pi}(s_t,a)$`}
                        ，评估智能体在状态$s_t$有多好。
                    </X.Uli>
                    <X.Uli>
                        *最优动作价值函数*：{`$Q^{\\ast}(s_t,a_t)=\\max_{\\pi}Q_{\\pi}(s_t,a_t)$`}
                        ，无论采用何种策略在状态$s_t$下选择动作$a_t$的最优结果。
                    </X.Uli>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>DQN是对（）的近似。</X.P>
                <X.P>答：Q函数。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>驾车按照“甲、乙、丙”行驶，从甲地出发，模型预计需要行驶$20$小时，实际行驶$6$小时到达乙地，模型预计还需$12$个小时到达丙地，如果我们用TD算法更新模型，TD目标$y$小时，TD绝对误差值$|\delta|$小时。$y$和$|\delta|$是多少？</X.P>
                <X.P>答：$y=18$、$|\delta|=2$。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    设{`$A=\\{上,下,左,右\\}$`}
                    为动作空间，$s_t$为当前状态，$\pi$为策略函数，其输出：\n$\pi(上|s_t)=0.2$\n$\pi(下|s_t)=0.05$\n$\pi(左|s_t)=0.7$\n$\pi(右|s_t)=0.15$\n请问，哪个动作会成为$a_t$?
                </X.P>
                <X.P>`a.`下</X.P>
                <X.P>`b.`左</X.P>
                <X.P>`c.`都有可能</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>设随机变量$U_t$为$t$时刻的回报，请问$U_t$依赖于哪些变量？</X.P>
                <X.P>`a.`$t$时刻的状态$S_t$</X.P>
                <X.P>`b.`$t$时刻的动作$A_t$</X.P>
                <X.P>`c.`$S_t$和$A_t$</X.P>
                <X.P>
                    `d.`{`$S_t,S_{t+1},S_{t+2}\\dots$`}和{`$A_t,A_{t+1},A_{t+2}\\dots$`}
                </X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>动作价值函数是什么的期望？</X.P>
                <X.P>`a.`奖励</X.P>
                <X.P>`b.`回报</X.P>
                <X.P>`c.`状态</X.P>
                <X.P>`d.`动作</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>
                    设{`$A=\\{上,下,左,右\\}$`}
                    为动作空间，$s_t$为当前状态，$Q^\ast$为最优动作价值函数，其输出：\n$Q^\ast(s_t,上)=930$\n$Q^\ast(s_t,下)=-60$\n$Q^\ast(s_t,左)=120$\n$Q^\ast(s_t,右)=321$\n请问，哪个动作会成为$a_t$?
                </X.P>
                <X.P>`a.`上</X.P>
                <X.P>`b.`下</X.P>
                <X.P>`c.`都有可能</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>DQN的输出层用什么激活函数？</X.P>
                <X.P>`a.`不需要激活函数，因为$Q$值可正可负，没有取值范围</X.P>
                <X.P>`b.`用sigmoid激活函数，因为$Q$值介于$0$和$1$之间</X.P>
                <X.P>`c.`用ReLU激活函数，因为$Q$值非负</X.P>
                <X.P>`d.`用SoftMax激活函数，因为DQN的输出是一个概率分布</X.P>
                <X.P>答：`a`</X.P>
                <X.HighlightBlock background="red">
                    <X.P>DQN的目标是估计每个可能动作的$Q$值（动作价值函数），而这些$Q$值可以是任意实数。如果在输出层使用了某种激活函数，它可能会对输出值进行限制，导致无法灵活地表示$Q$值。</X.P>
                </X.HighlightBlock>
            </X.Oli>
            <X.Oli>
                <X.P>DQN是基于什么的强化学习方法？</X.P>
                <X.P>`a.`基于价值的方法</X.P>
                <X.P>`b.`基于策略的方法</X.P>
                <X.P>`c.`基于模型的方法</X.P>
                <X.P>`d.`基于探索的方法</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>TD gradient是与哪种强化学习方法相关的概念</X.P>
                <X.P>`a.`基于价值的方法</X.P>
                <X.P>`b.`基于策略的方法</X.P>
                <X.P>`c.`基于模型的方法</X.P>
                <X.P>`d.`基于探索的方法</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在强化学习中，基于策略的方法主要关注什么？</X.P>
                <X.P>`a.`最大化奖励</X.P>
                <X.P>`b.`最小化损失</X.P>
                <X.P>`c.`直接学习值函数</X.P>
                <X.P>`d.`直接学习策略函数</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.H1>半监督学习</X.H1>
            <X.Oli reset>
                <X.P>什么是半监督学习？它与监督学习和无监督学习有什么区别？</X.P>
                <X.P>答：</X.P>
                <X.Uli>有监督学习：学习器通过对大量有标记的训练例进行学习，从而建立模型用于预测。缺点在于很难获得大量有标记的样本。</X.Uli>
                <X.Uli>无监督学习：无训练样本，仅根据测试样本在特征空间分布情况来进行标记。缺点是准确性差。</X.Uli>
                <X.Uli>半监督学习：有少量训练样本，学习器以从训练样本获得的知识为基础，结合测试样本的分布情况逐步修正已有知识，并判断测试样本的类别。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>解释*图半监督学习*的基本思想和过程。</X.P>
                <X.P>答：基于相似的样本具有相同标签的假设，构建图结构，利用节点标签扩散，将已标记样本根据样本特征的相似性进行扩散，获得未标记样本的标记。过程包括：图表示、初始化标签、标签传播、学习模型、分类预测。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>什么是半监督聚类？它与传统聚类方法有何不同？</X.P>
                <X.P>答：在拥有部分额外有标签数据时，可利用监督信息改善聚类效果，传统聚类方法通常只使用无标签的数据进行聚类。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>什么是“伪标签”？它在半监督学习中的作用是什么？</X.P>
                <X.P>答：“伪标签”是一种半监督学习中的策略，通过使用已训练模型对未标记数据进行预测，并将这些预测结果作为“伪标签”来扩充训练数据。优点是可以扩充训练数据，引入额外信息；但是要注意误差传播的问题。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在半监督学习中，使用无标签数据的目的是什么？</X.P>
                <X.P>`a.`提高模型的泛化能力</X.P>
                <X.P>`b.`提高模型的复杂性</X.P>
                <X.P>`c.`减少训练时间</X.P>
                <X.P>`d.`提高模型的准确性</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>自训练中的熵正则化的主要目的是什么？</X.P>
                <X.P>`a.`降低模型的泛化能力</X.P>
                <X.P>`b.`提高模型的复杂性</X.P>
                <X.P>`c.`减少模型对于伪标签的过度自信</X.P>
                <X.P>`d.`增加模型对于有标签数据的权重</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>在半监督SVM中，无标签数据如何被整合到模型训练中？</X.P>
                <X.P>`a.`忽略无标签数据</X.P>
                <X.P>`b.`将无标签数据视为异常数据</X.P>
                <X.P>`c.`使用无标签数据构造额外的约束条件</X.P>
                <X.P>`d.`仅使用无标签数据进行训练</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>图半监督学习中，如何利用无标签节点的信息？</X.P>
                <X.P>`a.`忽略无标签节点</X.P>
                <X.P>`b.`使用无标签节点的邻居信息</X.P>
                <X.P>`c.`将无标签节点视为噪声</X.P>
                <X.P>`d.`使用无标签节点的标签进行训练</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>基于分歧的半监督学习中，分歧是指什么？</X.P>
                <X.P>`a.`模型的复杂度</X.P>
                <X.P>`b.`模型的准确性</X.P>
                <X.P>`c.`模型在相似输入上的不一致性</X.P>
                <X.P>`d.`模型的泛化能力</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.H1>迁移学习</X.H1>
            <X.Oli reset>
                <X.P>什么是迁移学习？请简要描述其定义和主要思想。</X.P>
                <X.P>答：迁移学习是指利用数据、任务或模型之间的相似性，将在旧领域学习过的模型，应用于新领域的一种学习过程。迁移学习提供了一种将预训练模型在自己数据集上进行微调的技术。核心思路是找到源域和目标域之间的差异性，并将整体工作归为两方面：一是度量两个领域的相似性，不仅定性，还能定量的给出相似程度；二是以度量为准则，通过我们所采用的学习手段增大两个领域之间的相似性，完成迁移学习。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>请解释“领域”在迁移学习中的概念。</X.P>
                <X.P>答：领域是机器学习的主体，主要由两个部分构成：数据和生成这些数据的概率分布。</X.P>
                <X.Image src="fig4.jpg" width="600px" filterDarkTheme />
            </X.Oli>
            <X.Oli>
                <X.P>什么是领域自适应？请简要描述其基本原理。</X.P>
                <X.P>答：领域自适应旨在解决在源域上训练的模型在目标域上性能下降的问题。在领域自适应中，源域和目标域通常具有不同的分布或特性，例如，它们可能来自不同的传感器、环境或任务。</X.P>
                <X.P>基本原理包括：</X.P>
                <X.Uli>源域训练：在源域上使用标记的数据训练一个模型。</X.Uli>
                <X.Uli>领域间差异：源域和目标域存在领域间的差异，这些差异可能包括数据分布的不同、特征的变化等。由于这些差异，直接将源域上训练的模型应用到目标域上可能导致性能下降。</X.Uli>
                <X.Uli>
                    <X.P>域适应方法：通过调整模型，使其适应目标域的特点，从而提高性能。常见方法有：</X.P>
                    <X.Uli>调整训练样本的权重，使目标域中的样本在训练中更加重要。</X.Uli>
                    <X.Uli>特征层面的适应：调整模型的特征提取层，以减小源域和目标域之间的特征差异。</X.Uli>
                    <X.Uli>引入对抗训练：通过最小化源域和目标域之间的领域差异来提高泛化性能。</X.Uli>
                    <X.Uli>联合训练：在源域和目标域上联合训练，以共同优化模型，使其能适应目标域。</X.Uli>
                </X.Uli>
                <X.Uli>评估：在目标域上评估调整后的模型性能，根据评估结果进一步调整和改进领域自适应方法。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>什么是源域和目标域？什么是领域间距离，如何度量？</X.P>
                <X.P>答：源域是模型在训练阶段接触到的领域，通常具有相对丰富的标记数据。目标域是模型在测试阶段面对的领域，通常没有或有很少的标记数据。将源域和目标域的差异性视为两个域内样本数据的概率分布的差异性进行研究，根据采用显式或隐式的距离度量分为两类：</X.P>
                <X.Uli>显式度量：由预定义好的距离公式产生的度量，具有特定形式。例如欧氏距离、马氏距离、余弦相似度等。</X.Uli>
                <X.Uli>隐式度量：可以在数据中动态学习的、更适合数据分布的度量。</X.Uli>
            </X.Oli>
            <X.Oli>
                <X.P>迁移学习的三个基本类型是？</X.P>
                <X.P>答：</X.P>
                <X.Formula text="f^\ast=\argmin_f \frac{1}{N_s} \sum_{i=1}^{N_s} \text{Loss}(v_if(x_i),y_i)+\lambda R(T(D_s),T(D_t))" />
                <X.Uli>基于样本的迁移学习：核心思想是增大源域样本中，与目标域样本差异度小的比重，根据源域和目标域的相似度来学习源域样本的权重$v_i$。</X.Uli>
                <X.Uli>基于特征的迁移学习：学习一个作用于源域和目标域上的特征变换函数$T$来最小化迁移正则化项$R$。</X.Uli>
                <X.Uli>基于模型的迁移学习：学习如何将源域的判别函数$f$对目标域数据进行正则化和微调。</X.Uli>
            </X.Oli>
            <X.H1>小样本学习</X.H1>
            <X.Oli reset>
                <X.P>什么是相似度函数，相似度函数学习的基本思想是什么？</X.P>
                <X.P>答：相似度函数是用于度量两个对象之间相似程度的函数。在机器学习和数据挖掘中，相似度函数通常用于比较两个样本、文档、图像或其他数据表示的对象之间的相似性。相似度函数的设计直接影响了模型的性能，因为它定义了模型对相似性的理解。在迁移学习中，相似度函数可以用于度量源域和目标域之间的相似性，或者度量不同任务之间的相似性。基本思想是从大规模训练数据集中学习一个相似度函数，将相似度函数用于预测，通过对比查询样本与支持集每一个样本的相似度，找到得分最高的那个。</X.P>
            </X.Oli>
            <X.Oli>
                <X.P>请介绍相似度函数学习的流程，并解释孪生网络和三元组损失。</X.P>
                <X.P>答：流程为：</X.P>
                <X.Uli>在大规模数据集上训练一个孪生网络</X.Uli>
                <X.Uli>给定一个`n-way`，`k-shot`的支持集</X.Uli>
                <X.Uli>给定查询样本，预测其属于的分类</X.Uli>
                <X.P>孪生网络是一种特殊的神经网络结构，有两个相同的子网络，它们共享相同的权重。这两个子网络分别处理输入样本，然后通过一个比较层将两个子网络的输出进行比较。孪生网络的训练目标是使得相似的样本在比较层中的距离较小，而不相似的样本的距离较大。对比损失是孪生网络中常用的损失函数。</X.P>
                <X.P>三元组损失是一种用于训练相似度学习模型的损失函数，通常与三元组网络一起使用。在一个三元组中，包含一个锚点样本、一个正样本和一个负样本。三元组损失的目标是通过拉近锚点样本和正样本之间的距离，并推远锚点样本和负样本之间的距离，从而学到一个能够准确衡量相似性的模型。</X.P>
            </X.Oli>
        </>
    );
}
