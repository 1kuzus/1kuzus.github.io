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
                \begin{bmatrix} s_x & 0 \\ 0 & s_y \end{bmatrix}
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
                \bm{R}(\theta)=
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
            <X.HighlightBlock bgcolor="gray">
                <X.P>在齐次坐标下，前面提及的变换都可以表示为矩阵</X.P>
                <X.Formula
                    text="
                    \begin{bmatrix}
                    a & b & t_x \\
                    c & d & t_y \\
                    0 & 0 & 1
                    \end{bmatrix}
                    "
                />
            </X.HighlightBlock>
            <X.H2>组合变换</X.H2>
            <X.P>
                组合变换的矩阵顺序会影响结果，应该从右至左结合。\n 对于一点{`$\\bm{x}=(x,y,1)^T$`}先应用{`$\\bm{A}_1$`}
                ，再应用{`$\\bm{A}_2 \\dots$`}，最后应用{`$\\bm{A}_n$`}，应该写为：
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="\bm{A}_n \dots \bm{A}_2 \bm{A}_1 \bm{x}" />
            </X.HighlightBlock>
            <X.H1>3D变换</X.H1>
            <X.H2>一般形式</X.H2>
            <X.P>由2D变换推广而来，在齐次坐标下3D变换的一般形式可以表示为：</X.P>
            <X.Formula
                text="
                \begin{bmatrix} x' \\ y' \\ z' \\ 1 \end{bmatrix}=
                \begin{bmatrix}
                a & b & c & t_x \\
                d & e & f & t_y \\
                g & h & i & t_z \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                \begin{bmatrix} x \\y \\ z \\ 1 \end{bmatrix}
                "
            />
            <X.H2>3D旋转</X.H2>
            <X.H3>绕坐标轴旋转</X.H3>
            <X.Formula
                text="
                \bm{R}_x(\theta)=
                \begin{bmatrix}
                1 & 0 & 0 & 0 \\
                0 & \cos \theta & -\sin \theta & 0 \\
                0 & \sin \theta & \cos \theta & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.Formula
                text="
                \bm{R}_y(\theta)=
                \begin{bmatrix}
                \cos \theta & 0 & \sin \theta & 0 \\
                0 & 1 & 0 & 0 \\
                -\sin \theta & 0 & \cos \theta & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.Formula
                text="
                \bm{R}_z(\theta)=
                \begin{bmatrix}
                \cos \theta & -\sin \theta & 0 & 0 \\
                \sin \theta & \cos \theta & 0 & 0 \\
                0 & 0 & 1 & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.H3>任意旋转</X.H3>
            <X.P>任何3D旋转都可以由上面三个基本矩阵得到：</X.P>
            <X.Formula text="\bm{R}_{xyz}(\alpha,\beta,\gamma)=\bm{R}_x(\alpha)\bm{R}_y(\beta)\bm{R}_z(\gamma)" />
            <X.H3>罗德里格旋转公式</X.H3>
            <X.P>绕旋转轴{`$\\bm{n}=(n_x,n_y,n_z)^T$`}旋转$\theta$的旋转矩阵：</X.P>
            <X.Formula
                text="\bm{R}(\bm{n},\theta)=\cos\theta\bm{I}+(1-\cos\theta)\bm{n}\bm{n}^T+\sin\theta     
                \begin{bmatrix}
                0 & -n_z & n_y \\
                n_z & 0 & -n_x \\
                -n_y & n_x & 0
                \end{bmatrix}
                "
            />
            <X.H1>视图变换</X.H1>
            <X.H2>引入</X.H2>
            <X.P noMarginBottom>
                图形学中将3D空间的物体展现在2D屏幕上有十分重要的三个变换，以拍照片为例子，三个步骤是：
            </X.P>
            <X.Uli>找到一个好场景，并安排好要拍照的人或物品（*模型变换*`Model Transformation`）</X.Uli>
            <X.Uli>找到一个好角度放置相机（*视图变换*`View Transformation`）</X.Uli>
            <X.Uli>按下快门，得到照片（*投影变换*`Projection Transformation`）</X.Uli>
        </X.BlogWrapper>
    );
}
