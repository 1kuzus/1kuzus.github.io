import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>RNN：一个简单的例子</X.H1>
            <X.P>
                传统神经网络每次的输入是独立的，每次输出只依赖于当前的输入；但在某些任务中需要更好的处理序列信息，即前面的输入和后面的输入是有关系的；---
                *循环神经网络*`(Recurrent Neural Networks, RNN)`通过使用带自反馈的神经元，能够处理任意长度的序列。
            </X.P>
            <X.P>
                下面是一个非常常见的RNN结构描述图。它展示了RNN的自反馈机制和与时间的依赖关系，但是对网络结构的描述容易引起误解：---
                右侧的展开形式并不意味着网络有`t`层，而是反映了随着时间增加（有时也可以理解为随着程序中循环的迭代），上一次输出的隐藏状态，---
                和$x_t$共同作为网络的下一次的输入。
            </X.P>
            <X.P>
                或者，如果说CNN是从空间维度上堆叠卷积层，不断加深，RNN就是从时间维度上的延展，而其网络真正的参数是很少的。
            </X.P>
            <X.Image src={require('./rnn1.png')} width="600px" invertInDarkTheme />
            <X.P>下面以一个简单的正弦序列预测任务出发，结合代码理解RNN网络的部分细节。</X.P>
            <X.H2>预测一个正弦序列</X.H2>
            <X.P>这个例子中，我们对一个加了噪声的正弦序列进行预测。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import numpy
                import torch
                from torch import nn
                import matplotlib.pyplot as plt

                #生成加噪声的正弦序列数据
                xlim=numpy.linspace(0,36,400)
                y=numpy.sin(xlim)+numpy.random.rand(*xlim.shape)*0.2

                #转换dtype和size，保持和后面的训练数据统一
                y=y.reshape(-1,1).astype("float32")

                plt.plot(xlim,y)
                plt.show()
                `}
            />
            <X.P>
                代码中我们在区间$[0,36]$取了`400`点数据，如果把横轴看成时间轴，可以认为数据集中有`400`个连续时间点的数据。
            </X.P>
            <X.Image src={require('./fig1.png')} width="600px" invertInDarkTheme />
            <X.P noMarginBottom>现在明确一下我们的方案：</X.P>
            <X.Oli>使用前`80%`也就是前`320`个数据作为训练集，剩余的作为测试集，观察预测结果。</X.Oli>
            <X.Oli>序列长度为`10`，也就是模型根据前`10`个时间点的数据去预测第`11`个时间点的数据。</X.Oli>
            <X.Oli>这个例子中输入特征的维度是`1`，也就是只有`y`值一个指标。此外，也不考虑批量大小。</X.Oli>
            <X.H2>定义RNN网络</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                class MyRNN(nn.Module):
                    def __init__(self,input_size,hidden_size,output_size):
                        super().__init__()
                        self.linear_ih=nn.Linear(input_size,hidden_size)
                        self.linear_hh=nn.Linear(hidden_size,hidden_size)
                        self.linear_ho=nn.Linear(hidden_size,output_size)
                        self.tanh=nn.Tanh()
                    def forward(self,x,prev_state):
                        curr_state=self.tanh(
                            self.linear_ih(x)+self.linear_hh(prev_state)
                        )
                        output=self.linear_ho(curr_state)
                        return output,curr_state

                hidden_size=12
                my_rnn=MyRNN(input_size=1,hidden_size=hidden_size,output_size=1)
                loss_func=nn.MSELoss()
                optimizer=torch.optim.SGD(my_rnn.parameters(),lr=0.01)
                `}
            />
            <X.P>
                这个是一个简单的RNN结构，从网络参数和结构来看很像一个`输入层-隐藏层-输出层`的感知机，但是多了一步`隐藏层-隐藏层`的连接，---
                RNN的反馈结构就是由此体现的。并且，注意到`forward`函数的输入也需要两个参数：当前时刻输入`x`和前一时刻状态`prev_state`，---
                同时也会把计算后的新状态`curr_state`和`output`一起返回，供下一次计算使用。
            </X.P>
            <X.P>接下来设置了一些超参数，隐藏层有`12`个神经元，损失函数使用`MSELoss()`。</X.P>
            <X.H2>训练</X.H2>
            <X.P>
                首先定义这样的训练函数：它传入一个序列`train_seq`和目标`target`。`train_seq`的`size`应该为`(10,1)`，因为---
                我们用前`10`个时间点的数据去预测下一个，而输入特征维度是`1`；`target`的`size`应该为`(1,1)`，因为输出是`1`个时刻的数据。---
                注意我们循环依次输入`train_seq`中的`10`个数据，迭代更新`state`，用最后一次的`output`作为最终的输出计算损失。
            </X.P>
            <X.CodeBlock
                language="python"
                code={`
                def train(train_seq,target):
                    #初始状态
                    state=torch.zeros(1,hidden_size)

                    for x in train_seq:
                        output,state=my_rnn(x,state)

                    loss=loss_func(output,target)
                    optimizer.zero_grad()
                    loss.backward()
                    optimizer.step()

                    #返回损失
                    return loss.detach().numpy().reshape(1)
                `}
            />
            <X.P>下面代码把真实数据划分成：</X.P>
            <X.Table>
                <tr>
                    <th>
                        <X.P>`train_seq`</X.P>
                    </th>
                    <th>
                        <X.P>`target`</X.P>
                    </th>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[0]`,`y[1]`,`y[2]`, ... ,`y[9]`</X.P>
                    </td>
                    <td>
                        <X.P>`y[10]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[1]`,`y[2]`,`y[3]`, ... ,`y[10]`</X.P>
                    </td>
                    <td>
                        <X.P>`y[11]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[2]`,`y[3]`,`y[4]`, ... ,`y[11]`</X.P>
                    </td>
                    <td>
                        <X.P>`y[12]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[309]`,`y[310]`,`y[311]`, ... ,`y[318]`</X.P>
                    </td>
                    <td>
                        <X.P>`y[319]`</X.P>
                    </td>
                </tr>
            </X.Table>
            <X.CodeBlock
                language="python"
                code={`
                train_datas=[]
                for i in range(320-10):
                    train_seq=torch.from_numpy(y[i:i+10])
                    target=torch.from_numpy(y[i+10]).reshape(1,1)
                    train_datas.append((train_seq,target))
                `}
            />
            <X.P>训练网络，绘制误差：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                metrics=[]
                my_rnn.train()
                for train_seq,target in train_datas:
                    loss=train(train_seq,target)
                    metrics.append(loss)

                plt.subplot(211)
                plt.plot(metrics,label="loss")
                plt.legend()
                `}
            />
            <X.H2>预测</X.H2>
            <X.P>
                这个例子中我们用*单步预测*观察模型的效果。在单步预测时，每次预测都全部使用真实值；当然，我们可以这样做是因为验证集中本来就包含了真实的数据，换句话说，---
                我们是在已知`t+1`时刻的真实数据的情况下，去看看模型使用`t-9`~`t`时刻的数据，对`t+1`时刻的预测值。
            </X.P>
            <X.Table>
                <tr>
                    <th>
                        <X.P>`input`</X.P>
                    </th>
                    <th>
                        <X.P>`prediction`</X.P>
                    </th>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[310]`,`y[311]`,`y[312]`, ... ,`y[319]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[320]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[311]`,`y[312]`,`y[313]`, ... ,`y[320]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[321]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[312]`,`y[313]`,`y[314]`, ... ,`y[321]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[322]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </X.Table>
            <X.CodeBlock
                language="python"
                code={`
                def pred(truth_seq,net):
                    with torch.no_grad():
                        state=torch.zeros(1,hidden_size)
                        for x in truth_seq:
                            output,state=net(x,state)
                        return output

                preds=[]
                for i in range(320-10,400-10):
                    state=torch.zeros(1,hidden_size)
                    truth_seq=torch.from_numpy(y[i:i+10])
                    preds.append(pred(truth_seq,my_rnn).numpy())
                preds=numpy.array(preds).reshape(-1,1)

                plt.subplot(212)
                plt.plot(xlim,y,label="truth")
                plt.plot(xlim[320:400],preds,"red",label="predict")
                plt.legend()
                plt.show()
                `}
            />
            <X.P>
                如果我们不只是在测试集上评估模型性能，而是去预测真实生活中的问题，例如未来`7`天的温度；或者假如我们的数据集到`y[319]`就截止了，---
                这时如果想得到后面多个时刻的数据，就需要*多步预测*，此时上一时刻的预测会被当做新的输入：
            </X.P>
            <X.Table>
                <tr>
                    <th>
                        <X.P>`input`</X.P>
                    </th>
                    <th>
                        <X.P>`prediction`</X.P>
                    </th>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[310]`,`y[311]`,`y[312]`, ... ,`y[319]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[320]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[311]`,`y[312]`,`y[313]`, ... ,`pred[320]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[321]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>
                        <X.P>`y[312]`,`y[313]`,`y[314]`, ... ,`pred[320]`,`pred[321]`</X.P>
                    </td>
                    <td>
                        <X.P>`pred[322]`</X.P>
                    </td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </X.Table>
            <X.P>多步预测会导致误差的累积。</X.P>
            <X.H2>看看效果</X.H2>
            <X.P>如果不执行训练步骤的代码，使用初始随机参数的模型预测结果是：</X.P>
            <X.Image src={require('./fig2.png')} width="600px" invertInDarkTheme />
            <X.P>经过训练后，每次训练的`loss`和最终的预测：</X.P>
            <X.Image src={require('./fig3.png')} width="600px" invertInDarkTheme />
            <X.H2>FAQ</X.H2>
            <X.P>
                初次了解RNN时，我在一些问题上困惑了很久。这个版块是对它们的再次整理。（尽管有些已经包含在上述例子中了！）
            </X.P>
            <X.H3>用10步预测下1步，为什么 input_size 不是10，而是1？</X.H3>
            <X.P>
                `input_size`与序列长度并非同一个概念。用前`10`个时间点的数据去预测下一个，这里的`10`是序列长度；而`input_size`是输入特征的维度。---
                由于这个例子较为简单，只是用历史的`y`值预测新的`y`值，因此特征只有`1`维。
            </X.P>
            <X.H3>什么时候 input_size 不是1？</X.H3>
            <X.P>
                例如我们在预测未来气温时，历史气温数据并不是唯一的参考，还可能参考历史的风速、气压、天气情况等等，此时输入数据将会是一个`input_size`维的向量。
            </X.P>
            <X.H3>hidden_size=12，12是在哪里体现的？</X.H3>
            <X.P>`12`只是模型的超参数，和MLP中隐藏层大小一样，并没有太多的物理含义。</X.P>
            <X.H3>训练时，每次迭代用哪些数据？应该遍历几遍数据集？每个 epoch 会使用哪些数据进行参数优化？</X.H3>
            <X.P noMarginBottom>在训练一个CNN网络时（例如一个图片分类网络），策略通常是：</X.P>
            <X.Oli reset>指定超参数`num_epoch`，在每个`epoch`中随机遍历训练集中的所有图像进行参数优化；</X.Oli>
            <X.Oli>重复执行`num_epoch`次。</X.Oli>
            <X.P noMarginBottom withMarginTop>
                然而对于RNN来说这个概念似乎并不清晰，例如上述例子的训练策略是：
            </X.P>
            <X.Oli reset>从`0`到`(训练集大小 - 序列长度)`依次遍历起始时间`t`；</X.Oli>
            <X.Oli>对于每个起始时间`t`，将`y[t]`~`y[t+9]`为输入，`y[t+10]`为真值作为一组训练样本。</X.Oli>
            <X.Oli>第`1`步只遍历了一次！</X.Oli>
            <X.P noMarginBottom withMarginTop>
                或者：
            </X.P>
            <X.P noMarginBottom>...</X.P>
            <X.Oli reset={3}>前两步同上，但多次遍历训练集。</X.Oli>
            <X.P noMarginBottom withMarginTop>
                另一个常用的策略是：
            </X.P>
            <X.Oli reset>指定超参数：训练轮次`num_iter`；</X.Oli>
            <X.Oli>
                重复执行`num_iter`次，每次随机抽取一个起始时间`t`，并且将`y[t]`~`y[t+9]`为输入，`y[t+10]`为真值作为一组训练样本。
            </X.Oli>
            <X.H1>LSTM：一篇很好的博客</X.H1>
            <X.P>
                以下的内容和插图总结或翻译自这篇的英文博客：@Understanding LSTM
                Networks[https://colah.github.io/posts/2015-08-Understanding-LSTMs/]@
            </X.P>
            <X.H2>长期依赖问题</X.H2>
            <X.P>
                RNN可以利用先前的信息理解当前的任务，这点非常不错；有时我们只需要短期的信息，例如一个语言模型预测下面的句子：\n
                `天空中飘着一朵白色的__`，很明显下一个词是`云`。但有些时候我们需要更多背景信息，例如：\n
                `我出生在法国，…… ，我可以说流利的__`，这个情况下，---
                随着前后文距离变大，RNN对长期依赖关系的学习会变得困难。
            </X.P>
            <X.Image src={require('./rnn2.png')} width="600px" invertInDarkTheme />
            <X.H2>LSTM</X.H2>
            <X.P>
                *长短期记忆网络*`(Long Short-Term Memory, LSTM)`是一种特殊的RNN，---
                可以学习长期依赖。以RNN为例，循环神经网络随时间展开通常具有如下的示意图：
            </X.P>
            <X.Image src={require('./rnn3.png')} width="600px" invertInDarkTheme />
            <X.P>
                对于RNN来说，利用历史状态和输入得到新的状态，只经过一个简单的`tanh`激活层，而对于LSTM来说，它的示意图略显复杂：
            </X.P>
            <X.Image src={require('./lstm1.png')} width="600px" invertInDarkTheme />
            <X.H2>LSTM背后的核心思想</X.H2>
            
        </X.BlogWrapper>
    );
}
