import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>神经网络</X.H1>
            <X.Oli>
                <X.P noMarginBottom>试论述学习率的取值对神经网络训练的影响。</X.P>
                <X.P>学习率太高会导致误差函数来回震荡无法收敛；学习率太低会导致收敛太慢，影响训练效率。</X.P>
            </X.Oli>
            <X.Br />
            <X.Oli>
                <X.P>
                    正样本点是$x_1=(3,3)^T$和$x_2=(4,3)^T$，负样本点是$x_3=(1,1)^T$，用梯度下降求解感知机模型，初始参数取$0$。
                </X.P>
                <X.P>维度增广：$x_1=(3,3,1)^T$，$x_2=(4,3,1)^T$，$x_3=(1,1,1)^T$</X.P>
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
                <X.P noMarginBottom>
                    简述神经网络需要激活函数的原因，并比较`sigmoid`、`tanh`、`ReLU`分别作为激活函数的效果有何区别。
                </X.P>
                <X.P noMarginBottom>
                    激活函数为神经网络引入了非线性，能提高网络对模型的表达能力，解决线性模型所不能解决的问题。
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
                <X.Formula text="y=\text{sign}(u_1+u_2-1.5)" />
                <X.P>$w_1=1$、$w_2=1$、$b=-1.5$</X.P>
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
                <X.P noMarginBottom>`b.`去到数据集的下一`batch`</X.P>
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
        </X.BlogWrapper>
    );
}
