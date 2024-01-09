import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>神经网络</X.H1>
            <X.Oli>
                <X.P>试论述学习率的取值对神经网络训练的影响。</X.P>
                <X.P>答：学习率太高会导致误差函数来回震荡无法收敛；学习率太低会导致收敛太慢，影响训练效率。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>
                    正样本点是$x_1=(3,3)^T$和$x_2=(4,3)^T$，负样本点是$x_3=(1,1)^T$，用梯度下降求解感知机模型，初始参数取$0$。
                </X.P>
                <X.P>答：维度增广：$x_1=(3,3,1)^T$，$x_2=(4,3,1)^T$，$x_3=(1,1,1)^T$</X.P>
                <X.Table>
                    <tr>
                        <th>次数</th>
                        <th>错分的点</th>
                        <th>
                            <X.P>$[\Delta \omega^T \; \Delta b^T]$</X.P>
                        </th>
                        <th>
                            <X.P>$\omega$</X.P>
                        </th>
                        <th>
                            <X.P>$b$</X.P>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`0`</X.P>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <X.P>$(0,0)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$0$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`1`</X.P>
                        </td>
                        <td>
                            <X.P>$x_1$</X.P>
                        </td>
                        <td>
                            <X.P>$(3,3,1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(3,3)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$1$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`2`</X.P>
                        </td>
                        <td>
                            <X.P>$x_3$</X.P>
                        </td>
                        <td>
                            <X.P>$(-1,-1,-1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(2,2)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$0$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`3`</X.P>
                        </td>
                        <td>
                            <X.P>$x_3$</X.P>
                        </td>
                        <td>
                            <X.P>$(-1,-1,-1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(1,1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-1$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`4`</X.P>
                        </td>
                        <td>
                            <X.P>$x_3$</X.P>
                        </td>
                        <td>
                            <X.P>$(-1,-1,-1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(0,0)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-2$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`5`</X.P>
                        </td>
                        <td>
                            <X.P>$x_1$</X.P>
                        </td>
                        <td>
                            <X.P>$(3,3,1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(3,3)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-1$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`6`</X.P>
                        </td>
                        <td>
                            <X.P>$x_3$</X.P>
                        </td>
                        <td>
                            <X.P>$(-1,-1,-1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(2,2)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-2$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`7`</X.P>
                        </td>
                        <td>
                            <X.P>$x_3$</X.P>
                        </td>
                        <td>
                            <X.P>$(-1,-1,-1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$(1,1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-3$</X.P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <X.P>`8`</X.P>
                        </td>
                        <td>均正确</td>
                        <td></td>
                        <td>
                            <X.P>$(1,1)^T$</X.P>
                        </td>
                        <td>
                            <X.P>$-3$</X.P>
                        </td>
                    </tr>
                </X.Table>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>
                    简述神经网络需要激活函数的原因，并比较`sigmoid`、`tanh`、`ReLU`分别作为激活函数的效果有何区别。
                </X.P>
                <X.P noMarginBottom>
                    答：激活函数为神经网络引入了非线性，能提高网络对模型的表达能力，解决线性模型所不能解决的问题。
                </X.P>
                <X.Uli>
                    `sigmoid`：平滑且连续，但容易引起梯度消失；输出不以$0$为中心；主要用于输出层，在二分类问题中尤为常见。
                </X.Uli>
                <X.Uli>`tanh`：输出以$0$为中心，可以缓解梯度消失的问题；隐藏层中比`sigmoid`更常见。</X.Uli>
                <X.Uli>
                    `ReLU`：计算简单，加速神经网络的收敛；可以缓解梯度消失的问题；但有可能导致神经元“死亡”---
                    （如果`ReLU`层的输入总是负的，那么该处梯度一直为$0$，神经元无法学习）；在现代神经网络架构中极为普遍。
                </X.Uli>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>根据图示分界线给出与门神经网络的参数$w_1$、$w_2$、$b$。</X.P>
                <X.Image src={require('./fig1.png')} width="400px" invertInDarkTheme />
                <X.P>答：{`$y=\\text{sign}(u_1+u_2-1.5)$`}，因此$w_1=1$、$w_2=1$、$b=-1.5$</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>对下面的梯度下降算法步骤进行排序：</X.P>
                <X.P noMarginBottom>`a.`计算预测值和真实值之间的误差</X.P>
                <X.P noMarginBottom>`b.`重复迭代，直至得到网络权重的最佳值</X.P>
                <X.P noMarginBottom>`c.`把输入传入网络，得到输出值</X.P>
                <X.P noMarginBottom>`d.`用随机值初始化权重和偏差</X.P>
                <X.P>`e.`对每一个产生误差的神经元，调整相应的权重值以减小误差</X.P>
                <X.P>答：`d``c``a``e``b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>下列哪一项在神经网络中引入了非线性？</X.P>
                <X.P noMarginBottom>`a.`随机梯度下降</X.P>
                <X.P noMarginBottom>`b.`修正线性单元`(Rectified Linear Unit, ReLU)`</X.P>
                <X.P>`c.`卷积函数</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>在感知机中的任务顺序是什么？</X.P>
                <X.P noMarginBottom>`a.`随机初始化感知机的权重</X.P>
                <X.P noMarginBottom>`b.`去到数据集的下一批`(batch)`</X.P>
                <X.P noMarginBottom>`c.`如果预测值和输出不一致，则调整权重</X.P>
                <X.P>`d.`对一个输入样本，计算输出值</X.P>
                <X.P>答：`a``d``c``b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>下列哪个函数不可以做激活函数？</X.P>
                <X.P noMarginBottom>`a.`$y=\tanh(x)$</X.P>
                <X.P noMarginBottom>`b.`$y=\sin(x)$</X.P>
                <X.P noMarginBottom>`c.`$y=\max(x,0)$</X.P>
                <X.P>`d.`$y=2x$</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>下列关于神经元的描述中，哪一项是正确的？</X.P>
                <X.P noMarginBottom>`a.`每个神经元可以有一个输入和一个输出</X.P>
                <X.P noMarginBottom>`b.`每个神经元可以有多个输入和一个输出</X.P>
                <X.P noMarginBottom>`c.`每个神经元可以有一个输入和多个输出</X.P>
                <X.P>`d.`每个神经元可以有多个输入和多个输出</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>如果用了一个*过大*的学习速率会发生什么？</X.P>
                <X.P noMarginBottom>`a.`神经网络会收敛</X.P>
                <X.P noMarginBottom>`b.`神经网络不会收敛</X.P>
                <X.P noMarginBottom>`c.`不确定</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.H1>优化方法</X.H1>
            <X.Oli reset>
                <X.P noMarginBottom>在训练神经网络时，损失函数在最初的几个时没有下降，可能的原因是？</X.P>
                <X.Image src={require('./fig2.png')} width="260px" invertInDarkTheme />
                <X.P>答：学习率太低；正则参数太高；陷入局部最优值等。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>批规范化`(Batch Normalization)`的好处有？</X.P>
                <X.P noMarginBottom>`a.`让每一层的输入的范围都大致固定</X.P>
                <X.P noMarginBottom>`b.`它将返回权重的归一化平均值和标准差</X.P>
                <X.P noMarginBottom>`c.`它是一种非常有效的反向传播方法</X.P>
                <X.P>`d.`这些均不是</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.HighlightBlock bgcolor="red">BN是对数据做批规范化，不是对权重。</X.HighlightBlock>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>在一个神经网络中，下面哪种方法可以用来处理过拟合？</X.P>
                <X.P noMarginBottom>`a.`Dropout</X.P>
                <X.P noMarginBottom>`b.`Batch Normalization</X.P>
                <X.P noMarginBottom>`c.`正则化</X.P>
                <X.P>`d.`以上都可以</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>
                    考虑某个具体问题时，你可能只有少量数据来解决这个问题。不过幸运的是你有一个类似问题已经预先训练好的神经网络。---
                    可以用下面哪种方法来利用这个预先训练好的网络？
                </X.P>
                <X.P noMarginBottom>`a.`把除了最后一层外所有的层都冻结，重新训练最后一层</X.P>
                <X.P noMarginBottom>`b.`对新数据重新训练整个模型</X.P>
                <X.P noMarginBottom>`c.`只对最后几层进行调参`(fine-tuning)`</X.P>
                <X.P>`d.`对每一层模型进行评估，选择其中的少数来使用</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.HighlightBlock bgcolor="red">
                <X.P>在考虑微调时，根据新数据集的大小、新数据集与预训练模型数据集相似度，不同策略如下：</X.P>
                <X.Table>
                    <tr>
                        <th></th>
                        <th>数据量少</th>
                        <th>数据量大</th>
                    </tr>
                    <tr>
                        <th>相似度低</th>
                        <td>
                            <X.P>
                                主干部分提取的特征是通用特征，可以冻结预训练模型的初始层（比如`k`层），并再次训练剩余的提取高层特征`n-k`层。
                            </X.P>
                        </td>
                        <td>
                            <X.P>根据数据从头开始训练神经网络`(training from scratch)`</X.P>
                        </td>
                    </tr>
                    <tr>
                        <th>相似度高</th>
                        <td>
                            <X.P>修改最后几层或输出层的输出类别</X.P>
                        </td>
                        <td>
                            <X.P>这时是理想情况，保留预训练模型的结构和初始权重，再用数据来重新训练该模型</X.P>
                        </td>
                    </tr>
                </X.Table>
            </X.HighlightBlock>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>
                    对于一个分类任务，如果开始时神经网络的权重不是随机赋值的，而是都设成$0$，下面哪个叙述是正确的？
                </X.P>
                <X.P noMarginBottom>`a.`神经网络会正常开始训练</X.P>
                <X.P noMarginBottom>`b.`神经网络可以训练，但是所有的神经元最后都会变成识别同样的东西</X.P>
                <X.P noMarginBottom>`c.`神经网络不会开始训练，因为没有梯度改变</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>为了避免开始训练时神经网络卡在局部最小值里，我们可以采取下面哪种策略？</X.P>
                <X.P noMarginBottom>`a.`改变学习速率，比如一开始的几个训练周期不断更改学习速率</X.P>
                <X.P noMarginBottom>`b.`一开始将学习速率减小$10$倍，然后用动量项</X.P>
                <X.P noMarginBottom>`c.`增加参数数目，这样神经网络就不会卡在局部最优处</X.P>
                <X.P>`d.`都不对</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>下列的哪种方法可以用来降低深度学习模型的过拟合问题？</X.P>
                <X.P noMarginBottom>`1.`增加更多的数据</X.P>
                <X.P noMarginBottom>`2.`使用数据增广`(data augmentation)`</X.P>
                <X.P noMarginBottom>`3.`使用归纳性更好的架构</X.P>
                <X.P noMarginBottom>`4.`正则化数据</X.P>
                <X.P>`5.`降低架构的复杂度</X.P>
                <X.P>答：`1``2``3``4``5`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>
                    当训练一个神经网络来作图像识别任务时，通常会绘制一张训练集误差和交叉训练集误差图来进行调试。在图中，最好在哪个时间停止训练？
                </X.P>
                <X.Image src={require('./fig3.png')} width="260px" invertInDarkTheme />
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>下面哪些叙述是对的？</X.P>
                <X.P noMarginBottom>`1.`可以通过将所有权重初始化为$0$来训练网络</X.P>
                <X.P>`2.`可以通过将偏差初始化为$0$来很好地训练网络</X.P>
                <X.P>答：`2`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>
                    如果我们希望预测$n$个类的概率使得所有概率和等于1，那么下列哪个函数可以用作输出层中的激活函数？
                </X.P>
                <X.P noMarginBottom>`a.`Softmax</X.P>
                <X.P noMarginBottom>`b.`ReLU</X.P>
                <X.P noMarginBottom>`c.`Sigmoid</X.P>
                <X.P>`d.`Tanh</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>使用批量归一化可以解决神经网络训练中的哪些问题？</X.P>
                <X.P noMarginBottom>`a.`过拟合</X.P>
                <X.P noMarginBottom>`b.`限制输出过大或过小</X.P>
                <X.P noMarginBottom>`c.`训练过慢</X.P>
                <X.P>`d.`以上所有</X.P>
                <X.P>答：`d`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>我们可以采取哪些措施来防止神经网络中的过拟合？</X.P>
                <X.P noMarginBottom>`a.`数据增强</X.P>
                <X.P noMarginBottom>`b.`权重共享</X.P>
                <X.P noMarginBottom>`c.`提前停止</X.P>
                <X.P noMarginBottom>`d.`Dropout</X.P>
                <X.P>`e.`以上所有</X.P>
                <X.P>答：`e`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>以下模型中，在数据预处理时，不需要考虑归一化处理的是：</X.P>
                <X.P noMarginBottom>`a.`logistic回归</X.P>
                <X.P noMarginBottom>`b.`SVM</X.P>
                <X.P noMarginBottom>`c.`树形模型</X.P>
                <X.P>`d.`神经网络</X.P>
                <X.P>答：`c`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>
                    BN层有两个可学习参数：拉伸参数$\gamma$和偏移参数$\beta$，它们的形状与$x$相同。---
                    请写出经过批量归一化转换后的$x$表达式。
                </X.P>
                <X.P noMarginBottom>答：</X.P>
                <X.Formula text="\text{BN}(x)=\gamma \cdot \frac{x-\text{E}(x)}{\text{Var}(x)} + \beta" />
            </X.Oli>
            <X.HighlightBlock bgcolor="red">
                <X.Uli>
                    <X.P>分母常写为{`$\\sqrt{\\text{Var}(x)^2+\\epsilon}$`}</X.P>
                </X.Uli>
                <X.Uli>参数$\gamma$和$\beta$通常是向量，公式中的乘法应为按元素乘。</X.Uli>
            </X.HighlightBlock>
            <X.Br />
            <X.Oli>
                <X.P>批量归一化和Dropout一般不会同时使用，请简述原因。</X.P>
                <X.P>答：</X.P>
                <X.Formula text="123" />
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>简述Dropout能够防止过拟合的原因。</X.P>
                <X.P noMarginBottom>答：</X.P>
                <X.Uli>
                    模拟集成学习：在训练时，Dropout随机关闭网络中的一部分神经元，可以被看作是在训练每个小批量数据时都使用了一个略有不同的网络结构，这类似于训练多个不同的模型并进行集成学习。---
                    在测试时，使用所有神经元，相当于对这些“模型”进行平均，这有助于提高泛化能力。
                </X.Uli>
                <X.Uli>
                    减少复杂共适应性：在没有Dropout的情况下，网络的神经元可能会学会共同适应并对特定的训练数据过度拟合，即它们共同调整它们的行为来记住训练数据的特定特征。---
                    使用Dropout意味着网络的神经元不能依赖于特定其他神经元的存在，因此，每个神经元必须学习更加鲁棒的特征，这些特征在各种不同的网络子集中都有用。
                </X.Uli>
                <X.Uli>
                    正则化效果：从正则化的角度来看，Dropout可以被视为一种增加模型的随机性、降低模型复杂度的方式。
                </X.Uli>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>假设Dropout概率为$p$，为了保证期望值不变，在测试时，该层模型权重$w$应该变为？</X.P>
                <X.P>答：$(1-p)w$</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>更新两次之后的：</X.P>
                <X.P>答：</X.P>
            </X.Oli>
            <X.H1>卷积神经网络</X.H1>
            <X.Oli reset>
                <X.P>填充在卷积操作中的作用是：</X.P>
                <X.P>答：可以增加输出的大小，从而使得卷积层能够更好地保留输入数据的*边缘信息*。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>神经网络反向传播的过程中，梯度计算通常使用什么算法？</X.P>
                <X.P>答：链式法则。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>在反向传播中，激活函数的导数被用来计算（）。</X.P>
                <X.P>答：神经元的局部梯度。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>反向传播中的损失函数对于输出层的梯度计算通常使用（）。</X.P>
                <X.P>答：交叉熵。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>
                    Batch Normalization中反向传播的过程涉及到计算对于输入的梯度，---
                    该梯度计算通常需要计算均值和方差的（）。
                </X.P>
                <X.P>答：梯度。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>反向传播中的优化算法，如随机梯度下降的更新规则是通过将参数沿着（）进行更新。</X.P>
                <X.P>答：梯度的负方向。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>卷积神经网络中的卷积层和池化层分别用于什么目的？</X.P>
                <X.P noMarginBottom>`a.`特征提取和降采样</X.P>
                <X.P noMarginBottom>`b.`特征降维和特征映射</X.P>
                <X.P noMarginBottom>`c.`激活函数和正则化</X.P>
                <X.P>`d.`参数初始化和反向传播</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>在卷积神经网络中，填充的作用是什么？</X.P>
                <X.P noMarginBottom>`a.`增加输出特征图的尺寸</X.P>
                <X.P noMarginBottom>`b.`防止卷积操作导致边缘信息丢失</X.P>
                <X.P noMarginBottom>`c.`减少模型的参数数量</X.P>
                <X.P>`d.`提高模型的训练速度</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>在卷积神经网络的反向传播中，梯度下降的目标是调整什么参数？</X.P>
                <X.P noMarginBottom>`a.`输入数据</X.P>
                <X.P noMarginBottom>`b.`权重和偏置</X.P>
                <X.P noMarginBottom>`c.`激活函数的阈值</X.P>
                <X.P>`d.`卷积核的尺寸</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>反向传播中的卷积操作涉及哪些参数的梯度更新？</X.P>
                <X.P noMarginBottom>`a.`输入数据</X.P>
                <X.P noMarginBottom>`b.`卷积核的权重</X.P>
                <X.P noMarginBottom>`c.`池化层的输出</X.P>
                <X.P>`d.`批量归一化的参数</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>反向传播中的池化层的梯度是如何传播的？</X.P>
                <X.P>
                    答：在最大池化中，反向传播时梯度会被传递给池化层输入中最大值所对应的位置，而其他位置的梯度为零；---
                    在平均池化中，反向传播时梯度会均匀分配给池化层输入的所有元素。
                </X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>判断：步幅越大，池化层输出的特征图尺寸越小。</X.P>
                <X.P noMarginBottom>`a.`对</X.P>
                <X.P>`b.`错</X.P>
                <X.P>答：`a`</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P noMarginBottom>判断：在卷积神经网络中，通道数指的是卷积核的数量。</X.P>
                <X.P noMarginBottom>`a.`对</X.P>
                <X.P>`b.`错</X.P>
                <X.P>答：`b`</X.P>
            </X.Oli>
            <X.HighlightBlock bgcolor="red">
                <X.P>通常认为卷积核数量等于输出通道数。</X.P>
            </X.HighlightBlock>
            <X.Br />
            <X.Oli>
                <X.P>卷积神经网络的经典结构有哪些？简单介绍一下近年来具有代表性的深度卷积神经网络的设计思路：</X.P>
                <X.P noMarginBottom>答：有LeNet、AlexNet、VGG、ResNet等。</X.P>
                <X.Uli>LeNet：</X.Uli>
            </X.Oli>
            <X.H1>循环神经网络</X.H1>
            <X.H1>生成对抗网络</X.H1>
        </X.BlogWrapper>
    );
}
