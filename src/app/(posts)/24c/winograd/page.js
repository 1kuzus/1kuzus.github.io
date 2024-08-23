import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24c/winograd/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.P>Winograd算法是Shmuel Winograd在1980年提出的用来减少FIR滤波器计算量的一个算法（这里的`grad`和梯度没有关系），但当时并没有引起太多关注。直到后来人们发现此算法可以用来加速CNN网络的卷积运算，才得到广泛应用。</X.P>
            <X.H1>Winograd</X.H1>
            <X.H2>一维</X.H2>
            <X.P>考虑一个一维卷积，输入信号$d=[d_0,d_1,d_2,d_3]^T$，卷积核$g=[g_0,g_1,g_2]^T$，输出为$r=[r_0,r_1]^T$，则有：</X.P>
            <X.Formula
                text="
                F=
                \begin{bmatrix}
                d_0 & d_1 & d_2 \\
                d_1 & d_2 & d_3
                \end{bmatrix}
                \begin{bmatrix}
                g_0 \\
                g_1 \\
                g_2
                \end{bmatrix}
                =
                \begin{bmatrix}
                d_0g_0+d_1g_1+d_2g_2 \\
                d_1g_0+d_2g_1+d_3g_2
                \end{bmatrix}
                =
                \begin{bmatrix}
                r_0 \\
                r_1
                \end{bmatrix}
                "
            />
            <X.P>但是可以观察到，计算中存在重复，例如$d_1$和$d_2$。这些计算一共用到了`6`次乘法和`4`次加法。现在做如下变换，记</X.P>
            <X.Formula text="m_1=(d_0-d_2)g_0 \qquad m_2=(d_1+d_2)\frac{g_0+g_1+g_2}{2}" />
            <X.Formula text="m_4=(d_1-d_3)g_2 \qquad m_3=(d_2-d_1)\frac{g_0-g_1+g_2}{2}" />
            <X.P>则有：</X.P>
            <X.Formula
                text="
                F=
                \begin{bmatrix}
                r_0 \\
                r_1
                \end{bmatrix}
                =
                \begin{bmatrix}
                m_1+m_2+m_3 \\
                m_2-m_3-m_4
                \end{bmatrix}
                "
            />
            <X.P>因为卷积核事先已知，含$g$的式子可以提前算好，因此只需计算$m_1$~$m_4$（各`1`次乘法、`1`次加法）和$r_0$、$r_1$（各`2`次加法），总共`4`次乘法和`8`次加法。</X.P>
            <X.P>乘法通常比加法耗时更长，因此减少乘法次数可以提高计算效率。</X.P>
            <X.H3>矩阵形式表示</X.H3>
            <X.P>Winograd已经证明了对于卷积核长度为$r$的一维卷积，计算$m$个输出所需的最少乘法数量为 $m+r-1$。将上面的计算过程写成矩阵形式为：</X.P>
            <X.HighlightBlock>
                <X.Formula text="F=A^T[(Gg)\odot(B^Td)]" />
            </X.HighlightBlock>
            <X.P>其中的$\odot$是哈达玛积`(Hadamard Product)`，代表逐元素乘积。</X.P>
            <X.P>$G$是卷积核变换矩阵，尺寸为$(m+r-1) \times r$，对应到上例有：</X.P>
            <X.Formula
                text="
                Gg=
                \begin{bmatrix}
                1 & 0 & 0 \\ \\
                \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \\ \\
                \frac{1}{2} & -\frac{1}{2} & \frac{1}{2} \\ \\
                0 & 0 & 1
                \end{bmatrix}
                \begin{bmatrix}
                g_0 \\
                g_1 \\
                g_2
                \end{bmatrix}
                =
                \begin{bmatrix}
                g_0 \\ \\
                \frac{g_0+g_1+g_2}{2} \\ \\
                \frac{g_0-g_1+g_2}{2} \\ \\
                g_2
                \end{bmatrix}
                "
            />
            <X.P>$B^T$是输入变换矩阵，尺寸为$(m+r-1) \times (m+r-1)$，对应到上例有：</X.P>
            <X.Formula
                text="
                B^Td=
                \begin{bmatrix}
                1 & 0 & -1 & 0 \\
                0 & 1 & 1 & 0 \\
                0 & -1 & 1 & 0 \\
                0 & 1 & 0 & -1
                \end{bmatrix}
                \begin{bmatrix}
                d_0 \\
                d_1 \\
                d_2 \\
                d_3
                \end{bmatrix}
                =
                \begin{bmatrix}
                d_0-d_2 \\
                d_1+d_2 \\
                d_2-d_1 \\
                d_1-d_3
                \end{bmatrix}
                "
            />
            <X.P>$A^T$是输出变换矩阵，尺寸为$m \times (m+r-1)$，对应到上例有：</X.P>
            <X.Formula
                text="
                A^T=
                \begin{bmatrix}
                1 & 1 & 1 & 0 \\
                0 & 1 & -1 & -1
                \end{bmatrix}
                "
            />
            <X.H2>二维</X.H2>
            <X.P>推广到二维情形，假设输入是$4 \times 4$图像，卷积核大小$3 \times 3$，则首先通过Img2col展开成矩阵乘法，再分块使用Winograd。</X.P>
            <X.Image src="fig1.jpg" width="800px" invertInDarkTheme />
            <X.P>对于划分的每一小块，都可以使用一维Winograd算法计算；而整体来看，如果把每个分块都当作一个元素，则同理可以再用一次一维Winograd算法计算。</X.P>
            <X.P>从计算的效率来说，先分析整体，对分块矩阵进行Winograd算法，这时会需要`4`次*矩阵乘*；而每次矩阵乘再用Winograd算法，需要`4`次数乘，整个过程共需要`16`次乘法。如果使用常规的卷积操作则需要`36`次乘法。</X.P>
            <X.H2>算法的特点</X.H2>
            <X.P>Winograd算法通过减少乘法次数来实现提速，但是加法的数量会相应增加，也需要额外的变换计算及存储变换矩阵。随着卷积核和分块尺寸增大，需要考虑加法、变换和存储的代价，而且分块越大，变换矩阵越大，提效收益降低。</X.P>
            <X.P>因此，Winograd适用于较小的卷积核和分块。</X.P>
            <X.H1>参考资料</X.H1>
            <X.P>本文的部分内容、图片来源于：</X.P>
            <X.Uli>@Bilibili - 卷积优化：Winograd算法【推理引擎】[https://www.bilibili.com/video/BV1vv4y1Y7sc]@</X.Uli>
        </>
    );
}
