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
            <X.Image src={require('./rnn.png')} width="600px" invertInDarkTheme />
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
            {/* <X.Oli>使用前`80%`也就是作为--- 23

            </X.Oli> */}
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
                同时也会把计算后的新状态`curr_state`返回，供下一次计算使用。
            </X.P>
            <X.H1 href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/">
                转载：Understanding LSTM Networks
            </X.H1>
            <X.P>
                以下的内容和插图总结自一篇很好的英文博客：@Understanding LSTM
                Networks[https://colah.github.io/posts/2015-08-Understanding-LSTMs/]@
            </X.P>
        </X.BlogWrapper>
    );
}
