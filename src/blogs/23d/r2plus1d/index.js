import X from '@/component/X';

export default function Blog() {
    return (
        <X.BlogWrapper>
            <X.Title>行为识别R(2+1)D模型</X.Title>
            <X.P>
                论文@A Closer Look at Spatiotemporal Convolutions for Action
                Recognition[https://arxiv.org/pdf/1711.11248.pdf]@讨论了几种用于行为识别的时空卷积网络。---
                文中提出了R(2+1)D模型，即将R3D模型中的3D卷积拆分成2D空间卷积+1D时间卷积。
            </X.P>
            <X.H1>(2+1)D卷积</X.H1>
            <X.P>普通3D卷积的核大小为$(C_i,C_o,K_t,K_w,K_h)$</X.P>

            
            <X.Image src={require('./fig1.jpg')} width="100%" />
        </X.BlogWrapper>
    );
}
