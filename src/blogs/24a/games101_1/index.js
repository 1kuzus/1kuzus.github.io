import X from '@/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>2D变换</X.H1>
            <X.H2>缩放 Scale</X.H2>
            <X.Formula
                text="
                \begin{bmatrix} x' \\ y' \end{bmatrix}=
                \begin{bmatrix} S_x & 0 \\ 0 & S_y \end{bmatrix}
                \begin{bmatrix} x \\y \end{bmatrix}
                "
            />
            <X.Image src={require('./fig1.jpg')} width="600px" invertInDarkTheme />
            <X.H2>切变 Shear</X.H2>
            <X.Formula
                text="
                \begin{bmatrix} x' \\ y' \end{bmatrix}=
                \begin{bmatrix} 1 & a \\ 0 & 1 \end{bmatrix}
                \begin{bmatrix} x \\y \end{bmatrix}
                "
            />
            <X.Uli>$y=0$时水平偏移是$0$</X.Uli>
            <X.Uli>$y=1$时水平偏移是$a$</X.Uli>
            <X.Uli>垂直偏移总是$0$</X.Uli>
            <X.Image src={require('./fig2.jpg')} width="600px" invertInDarkTheme />
            <X.H2>旋转 Rotate</X.H2>
            <X.Formula
                text="
                \bm{R}_\theta=
                \begin{bmatrix}
                \cos \theta & -\sin \theta \\
                \sin \theta & \cos \theta
                \end{bmatrix}
                "
            />
            <X.Image src={require('./fig3.jpg')} width="600px" invertInDarkTheme />
            <X.H2>平移 Translation - 引入齐次坐标</X.H2>
            <X.P>下面这个简单的平面平移变换并不能用`2`维矩阵表示：</X.P>
            <X.Image src={require('./fig4.jpg')} width="600px" invertInDarkTheme />
            <X.HighlightBlock>
                <X.H3>引入齐次坐标</X.H3>
                <X.P>
                    我们不希望将平移操作看待为一个特例，而是想要找到一个统一的、适用于各种变换的方法。\n
                    这个解决方案就是引入*齐次坐标*`Homogeneous Coordinates`：
                </X.P>
                <X.P noMarginBottom>现在我们用`3`个维度来表示一个2D的点或向量：</X.P>
                <X.Uli>2D点：$(x,y,1)^T$</X.Uli>
                <X.Uli>2D向量：$(x,y,0)^T$</X.Uli>
                <X.H3>理解最后一个维度</X.H3>
                <X.P>对于点和向量的运算，下表的结论是显然成立的：</X.P>
                <X.Table
                    fromText={`
                    运算|结果
                    向量 + 向量|向量
                    点 - 点|向量
                    点 + 向量|点
                    点 + 点|无意义
                    `}
                />
                <X.P>通过最后一个维度是$1$或$0$分别表达点或向量，可以满足上述性质。</X.P>
            </X.HighlightBlock>
            <X.P>此时平移变换就可以表示为：</X.P>
            <X.Formula
                text="
                \begin{bmatrix} x' \\ y' \\ 1 \end{bmatrix}=
                \begin{bmatrix}
                1 & 0 & t_x \\
                0 & 1 & t_y \\
                0 & 0 & 1
                \end{bmatrix}
                \begin{bmatrix} x \\y \\ 1 \end{bmatrix}
                =
                \begin{bmatrix} x+t_x \\y+t_y \\ 1 \end{bmatrix}
                "
            />
            <X.H2>组合变换</X.H2>
        </X.BlogWrapper>
    );
}
