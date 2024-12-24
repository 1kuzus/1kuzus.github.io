import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>模型量化技术</X.H1>
            <X.P>模型量化的主要思路是寻找一个映射函数，将高精度的值映射为低精度的值（降低位宽），且保证效果相似，以降低存储成本和计算需求。量化的对象通常是权重数据和激活数据。根据量化间距是否相等分为*线性量化*（均匀量化）和*非线性量化*（非均匀量化）。</X.P>
            <X.H2>线性量化</X.H2>
            <X.H3>分类</X.H3>
            <X.P>根据`float32`的零点是否映射到`int`的零点可以分为*对称量化*和*非对称量化*。</X.P>
            <X.P>如果`float32`的绝对值最大映射为`127`，则称为*非饱和量化*；选择合适阈值$T$映射为`127`，则称为*饱和量化*。权重常用非饱和量化，激活常用饱和量化。</X.P>
            <X.Image src="fig1.jpg" width="300px" filterDarkTheme />
            <X.H3>浮点化定点</X.H3>
            <X.P>
                将`float32`化为`8`位动态定点数，需要指定小数位数$f$，表示的数为{`$a \\times 2^{-f}$`}
                。例如$f=4$时，`8`位依次是符号位`1`位，整数位`3`位，小数位`4`位，数值范围为$-8$~$7.9375$，分辨率为$0.0625$。
            </X.P>
            <X.P>应用时，同一层激活（或权重）小数位数相同，不同层激活（或权重）小数位数可以不同。</X.P>
            <X.H3>仿射映射量化</X.H3>
            <X.P>原数$d$（实数）和量化表示$q$（整数）的关系：</X.P>
            <X.Formula text="d=s(q-z)" />
            <X.P>其中$s$是量化步长，$z$是零点（整数）。相应地，量化计算公式为：</X.P>
            <X.Formula text="q=\text{round}(d/s+z)" />
            <X.P>参数$s$、$z$的确定公式为：</X.P>
            <X.Formula text="s=(d_{max}-d_{min})/(q_{max}-q_{min})" />
            <X.Formula text="z=\text{round}(q_{min}-d_{min}/s)" />
            <X.Divider />
            <X.P>例如，希望将数据范围$[\mu-2\sigma,\mu+2\sigma]$映射到`8`位整数（范围$-128$~$12$），计算参数为：</X.P>
            <X.Formula text="s=(d_{max}-d_{min})/(q_{max}-q_{min})=4\sigma/255" />
            <X.Formula text="z=\text{round}(q_{min}-d_{min}/s)=\text{round}(-128-(\mu-2\sigma)/s)" />
            <X.H2>非线性量化</X.H2>
            <X.P>权重和激活分布不均匀时，可以采用变间隔的量化以提高精度。常见的非线性量化包括：</X.P>
            <X.Uli>对数量化（移位量化）：量化值在以$2$为底的对数域上均匀分布；此时乘法计算可以简化为移位。</X.Uli>
            <X.Uli>学习量化（权重共享）：对权重聚类分组，每组分配一个值，构建码本，组内权重映射到该值。</X.Uli>
            <X.H1>模型压缩技术</X.H1>
            <X.H2>网络剪枝</X.H2>
            <X.P>给定一神经网络模型，去除该模型中对最终结果影响不大的参数，获得结构更为精简的模型，该过程被称为网络剪枝`(Neural Network Pruning)`。</X.P>
            <X.H3>非结构化剪枝</X.H3>
            <X.P>细粒度的剪枝，将不必要的权重归零；模型准确率损失更小，但部署时需要特殊的硬件和优化库支持其稀疏运算。</X.P>
            <X.H3>结构化剪枝</X.H3>
            <X.P>粗粒度的剪枝，直接丢弃整个神经元、卷积核整行、整列、整个通道甚至整个卷积核；模型准确率受影响更大，但能很好部署在SIMD或通用并行结构平台上。</X.P>
            <X.H2>基于SVD分解的模型压缩</X.H2>
            <X.Image src="fig2.jpg" width="600px" filterDarkTheme />
            <X.P>将$W$做SVD近似，使用两个全连接层$U$和$\Sigma V^T$代替$W$：</X.P>
            <X.Formula text="y=Wx=U(\Sigma V^T)x" />
            <X.P>取最大的前$t$个奇异值，则计算量为$t(u+v)$。</X.P>
            <X.H2>模型输出压缩</X.H2>
            <X.P>观察到ReLU激活函数下，输出具有稀疏性（很多位置为`0`值），可以考虑如下压缩方案：</X.P>
            <X.Uli>游程编码</X.Uli>
            <X.Uli>硬件优化，跳过$\times 0$运算涉及的权重读取、跳过$\times 0$运算的时钟周期等</X.Uli>
            <X.Uli>删减低值激活，牺牲一定准确性，进一步增加特征图稀疏程度</X.Uli>
            <X.H1>轻量化模型</X.H1>
            <X.H2>基于不同卷积类型的轻量化网络</X.H2>
            <X.H3>常规卷积</X.H3>
            <X.P>假设卷积核$h \times w$，输入通道$D_i$，输出通道$D_o$，常规卷积需要的参数量为$h \times w \times D_i \times D_o$。</X.P>
            <X.H3>分组卷积</X.H3>
            <X.Image src="fig3.jpg" width="600px" filterDarkTheme />
            <X.P>如果分成$g$组，可以理解为把整个卷积考虑为$g$个子问题，每个子问题是：\n求解$H_i \times W_i \times (D_i/g)$输入数据，经过卷积得到$H_o \times W_o \times (D_o/g)$输出数据。\n最后将得到的$g$个输出数据拼接起来，得到$H_o \times W_o \times D_o$输出。</X.P>
            <X.P>在这个过程中，每一组卷积核大小为$h \times w \times (D_i/g)$，卷积核的个数为$(D_o/g)$，因此每组卷积的参数量为$h \times w \times (D_i/g) \times (D_o/g)$。由于一共有$g$组，所以总参数量为$h \times w \times D_i \times D_o \times 1/g$。</X.P>
            <X.P>可以看到，分为$g$组的分组卷积参数量是常规卷积的$1/g$。</X.P>
            <X.H3>深度卷积</X.H3>
            <X.P>深度卷积可视为特殊情况的分组卷积，此时有$g=D_i=D_o$。</X.P>
            <X.H3>逐点卷积</X.H3>
            <X.P>逐点卷积就是$h \times w = 1 \times 1$的普通卷积，此时参数量化简为$D_i \times D_o$。</X.P>
            <X.H3>深度可分离卷积</X.H3>
            <X.Image src="fig4.jpg" width="800px" filterDarkTheme />
            <X.P>深度可分离卷积是深度卷积和逐点卷积的组合，首先对输入数据进行深度卷积，$g=D_i$，参数量为$h \times w \times D_i$；然后对中间输出数据进行逐点卷积使得通道数变为$D_o$，这一步的参数量为$D_i \times D_o$。</X.P>
            <X.P>深度可分离卷积的总参数量为$h \times w \times D_i + D_i \times D_o$。</X.P>
            <X.H2>基于Ghost特征的轻量化网络</X.H2>
            <X.P>Ghost模块使用较少卷积核对输入进行常规卷积，获得通道较少的输出特征并将其作为固有特征图；然后对固有特征图的每个通道进行线性变换，得到其对应的Ghost特征图；最后拼接在一起。</X.P>
            <X.Image src="fig5.jpg" width="400px" filterDarkTheme />
            <X.P>Ghost模块的特点：</X.P>
            <X.Uli>具有很强的即插即用性</X.Uli>
            <X.Uli>运算速度优化效果较明显</X.Uli>
            <X.Uli>不能有效降低参数量及存储空间</X.Uli>
            <X.H2>知识蒸馏</X.H2>
            <X.P>大型的网络泛化能力较强，但不便于部署；知识蒸馏希望获得泛化能力强的小网络。首先训练一个泛化能力强的大网络（教师网络），然后结合训练数据和教师网络的“软预测”，再训练小网络（学生网络）。</X.P>
            <X.Image src="fig6.jpg" width="600px" filterDarkTheme />
            <X.P>知识蒸馏的核心思想是：教师网络“软预测”的值携带了训练数据以外的泛化信息。“软预测”是指教师网络经过Softmax后的输出。小网络的目标函数就是：</X.P>
            <X.Formula text="L=\alpha L_{soft}+\beta L_{hard}" />
            <X.P>前者对应了泛化能力，后者对应了训练数据的拟合程度。</X.P>
            <X.P>使用Softmax的输出存在一个问题，Softmax的指数计算会放大差异，导致小值太小，训练效果不好；此时需要引入*蒸馏温度*$T$，将Softmax函数变为：</X.P>
            <X.Formula text="q_i=\frac{e^{z_i/T}}{\sum_{j=1}^n e^{z_j/T}}" />
            <X.P>此时可以通过调整$T$的值，使得Softmax的输出更为平缓（有区分度且小值不至于太小）。</X.P>
        </>
    );
}
