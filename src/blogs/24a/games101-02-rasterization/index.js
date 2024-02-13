import X from 'src/component/X';

export default function Blog({title}) {
    return (
        <>
            <X.Title>{title}</X.Title>
            <X.P>
                在2D屏幕上显示物体时，最终的图像是由一个一个像素构成的。光栅化需要解决的问题就是将连续的物体表示离散化。
            </X.P>
            <X.H1>为什么使用三角形</X.H1>
            <X.P noMarginBottom>三角形在图形学中广泛应用，是因为其具有一些良好的性质：</X.P>
            <X.Uli>三角形是最基础的多边形，任何其他的多边形都可以由三角形表示</X.Uli>
            <X.Uli>三角形一定是平面图形</X.Uli>
            <X.Uli>三角形的*内*和*外*定义分明</X.Uli>
            <X.H1>采样</X.H1>
            <X.P>
                最朴素的想法是：对于一个像素，考虑它的中心点是否在给定的三角形内。如果在，像素值就为`1`，否则为`0`。如图：
            </X.P>
            <X.Image src={require('./fig1.png')} width="80%" invertInDarkTheme />
            <X.P>判断一点是否在三角形内使用如下方法：</X.P>
            <X.P>
                首先，来判断$Q$点在$P_1P_2$的哪侧，这可以由向量叉乘$P_1P_2 \times P_1Q$---
                的符号得到，在右手系中这是一个指向屏幕外的向量。
            </X.P>
            <X.Image src={require('./fig2.png')} width="600px" invertInDarkTheme />
            <X.P>
                根据这个原理，如果$P_0P_1 \times P_0Q$、$P_1P_2 \times P_1Q$、$P_2P_0 \times P_2Q$的符号相同，---
                就说明$Q$点同时在三角形三条边的同侧，唯一的情况就是$Q$点在三角形内部。
            </X.P>
            <X.P>
                对于下图所示情况，假如我们规定指向屏幕外为正方向，会发现$P_2P_0 \times P_2Q$符号为负，---
                其余为正，不满足符号相等的条件，因此判断其在三角形外部。
            </X.P>
            <X.Image src={require('./fig3.png')} width="600px" invertInDarkTheme />
            <X.H2>采样的问题</X.H2>
            <X.P>采样的问题是会产生*锯齿*`(jaggies)`，出现*走样*`(aliasing)`。</X.P>
            <X.H1>反走样</X.H1>
            <X.P>
                *反走样*`(Anti-Aliasing)`也叫抗锯齿，核心的想法是先模糊，再采样。笼统的来说，这样做可行的原理是：---
                直接采样效果不好是因为信号的高频部分超过了采样的频率。对于图像来说，高频的部分通常是边缘；如果能通过模糊充当低通滤波的操作，---
                就可以改善因为采样频率不足带来的失真。
            </X.P>
            <X.Image src={require('./fig4.jpg')} width="80%" invertInDarkTheme />
            <X.H2>SSAA</X.H2>
            <X.P>
                *超采样反走样*`(Super-Sampling Anti-Aliasing, SSAA)`通过对每个像素取多次采样，---
                直接提高了采样率；最后的结果是所有采样点颜色取平均。
            </X.P>
            <X.Image src={require('./fig5.png')} width="80%" invertInDarkTheme />
            <X.H2>MSAA</X.H2>
            <X.P>
                *多重采样反走样*`(Multi-Sampling Anti-Aliasing, MSAA)`是对SSAA的改进：---
                MSAA不再对每个采样点进行单独的着色，而是对每个像素只执行一次着色计算，从而降低了计算量。
            </X.P>
            <X.H1>Z-Buffer</X.H1>
            <X.P>在这节我们约定$z$为正数，且更小的$z$值代表更近的像素点。</X.P>
            <X.P>
                深度缓冲记录每一个像素的深度信息。当渲染三维场景时，将每个像素的深度值与`Z-Buffer`中相应位置的值进行比较，---
                如果当前像素的深度值更小，则更新`Z-Buffer`中的值并将当前像素的颜色值渲染到屏幕上。
            </X.P>
            <X.Image src={require('./fig6.jpg')} width="600px" invertInDarkTheme />
        </>
    );
}
