import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/23d/r2plus1d/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>
                论文@A Closer Look at Spatiotemporal Convolutions for Action
                Recognition[https://arxiv.org/pdf/1711.11248.pdf]@讨论了几种用于行为识别的时空卷积网络。---
                文中提出了R(2+1)D网络，即将R3D网络中的3D卷积拆分成2D空间卷积+1D时间卷积。
            </X.P>
            <X.P>
                PyTorch版本复现代码来自于Github仓库 @Github:
                R2Plus1D-PyTorch[https://github.com/irhum/R2Plus1D-PyTorch]@
            </X.P>
            <X.H1>(2+1)D卷积</X.H1>
            <X.P>
                普通3D卷积的核大小为$(C_i,C_o,K_t,K_w,K_h)$，$C_i,C_o$为输入通道数、$K_t,K_w,K_h$是3D卷积核的尺寸。\n
                R(2+1)D网络最核心的改动就是将普通的`Conv3d`替换为`SpatioTemporalConv`卷积。
            </X.P>
            <X.Image src="fig1.jpg" width="100%" invertInDarkTheme />
            <X.P noMarginBottom>
                `SpatioTemporalConv`卷积从外部看与`Conv3d`相同，均有`5`个超参数，区别在于其内部的结构：
            </X.P>
            <X.Uli>大小为$(C_i,C,1,K_w,K_h)$的`Conv3d`</X.Uli>
            <X.Uli>`BatchNorm`+`ReLU`</X.Uli>
            <X.Uli>大小为$(C,C_o,K_t,1,1)$的`Conv3d`</X.Uli>
            <X.P withMarginTop>如果二者作用于相同的输出，得到的结果`shape`是一样的：</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import torch
                from r2plus1d.module import SpatioTemporalConv

                video_3d=torch.rand(8,3,60,32,32) #(batch*channels*frames*w*h)
                conv3d=torch.nn.Conv3d(in_channels=3,out_channels=16,kernel_size=[7,5,5])
                spconv=SpatioTemporalConv(in_channels=3,out_channels=16,kernel_size=[7,5,5])

                output1=conv3d(video_3d)
                output2=spconv(video_3d)

                print(output1.shape) #torch.Size([8, 16, 54, 28, 28])
                print(output2.shape) #torch.Size([8, 16, 54, 28, 28])
                `}
            />
            <X.P>注意到拆分成两次卷积后，会出现一个中间通道数$C$。论文中给出估计$C$值的公式是：</X.P>
            <X.Formula text="C=C_i C_oK_tK_wK_h/(C_iK_wK_h+C_oK_t)" />
            <X.P noMarginBottom>
                这样做的目的是使得R(2+1)D卷积的参数量和R3D相近。也就是说，拆分时间和空间两次卷积并不是为了减少计算量。---
                文中给出了使用R(2+1)D卷积两个优点：
            </X.P>
            <X.Oli>增加了网络非线性层的层数</X.Oli>
            <X.Oli>优化更容易（实验结果：R(2+1)D网络的训练和测试误差都更小）</X.Oli>
            <X.Image src="fig2.jpg" width="600" invertInDarkTheme />
        </>
    );
}
