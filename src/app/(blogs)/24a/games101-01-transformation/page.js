import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/games101-01-transformation/';
export const {metadata} = metas[path];

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
            <X.H1>2D变换</X.H1>
            <X.H2>缩放 Scale</X.H2>
            <X.Formula
                text="
                \begin{bmatrix} x' \\ y' \end{bmatrix}=
                \begin{bmatrix} s_x & 0 \\ 0 & s_y \end{bmatrix}
                \begin{bmatrix} x \\y \end{bmatrix}
                "
            />
            <X.Image src="fig1.jpg" width="600px" invertInDarkTheme />
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
            <X.Image src="fig2.jpg" width="600px" invertInDarkTheme />
            <X.H2>旋转 Rotate</X.H2>
            <X.Formula
                text="
                R(\theta)=
                \begin{bmatrix}
                \cos \theta & -\sin \theta \\
                \sin \theta & \cos \theta
                \end{bmatrix}
                "
            />
            <X.Image src="fig3.jpg" width="600px" invertInDarkTheme />
            <X.H2>平移 Translation - 引入齐次坐标</X.H2>
            <X.P>下面这个简单的平面平移变换并不能用`2`维矩阵表示：</X.P>
            <X.Image src="fig4.jpg" width="600px" invertInDarkTheme />
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
                组合变换的矩阵顺序会影响结果，应该从右至左结合。\n对于一点
                {`$\\bm{x}=(x,y,1)^T$`}
                先应用$A_1$，再应用$A_2\dots$，最后应用$A_n$，应该写为：
            </X.P>
            <X.HighlightBlock bgcolor="gray">
                <X.Formula text="A_n \dots A_2 A_1 \bm{x}" />
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
                R_x(\theta)=
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
                R_y(\theta)=
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
                R_z(\theta)=
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
            <X.Formula text="R_{xyz}(\alpha,\beta,\gamma)=R_x(\alpha)R_y(\beta)R_z(\gamma)" />
            <X.H3>罗德里格旋转公式</X.H3>
            <X.P>绕旋转轴{`$\\bm{n}=(n_x,n_y,n_z)^T$`}旋转$\theta$的旋转矩阵：</X.P>
            <X.Formula
                text="R(\bm{n},\theta)=\cos\theta\bm{I}+(1-\cos\theta)\bm{n}\bm{n}^T+\sin\theta     
                \begin{bmatrix}
                0 & -n_z & n_y \\
                n_z & 0 & -n_x \\
                -n_y & n_x & 0
                \end{bmatrix}
                "
            />
            <X.H1>MVP变换</X.H1>
            <X.H2>引入</X.H2>
            <X.P noMarginBottom>
                图形学中将3D空间的物体展现在2D屏幕上有十分重要的三个变换，以拍照片为例子，三个步骤是：
            </X.P>
            <X.Uli>找到一个好场景，并安排好要拍照的人或物品（*模型变换*`Model Transformation`）</X.Uli>
            <X.Uli>找到一个好角度放置相机（*视图变换*`View Transformation`）</X.Uli>
            <X.Uli>按下快门，得到照片（*投影变换*`Projection Transformation`）</X.Uli>
            <X.H2>模型变换</X.H2>
            <X.P>
                3D物体有基于自身的坐标系表示，原点是只与这个物体有关的某个指定参考点。其他顶点的坐标值都是相对于这个原点而言的。
            </X.P>
            <X.P>然后，将模型摆放到世界空间中指定的位置，需要依次进行缩放、旋转、平移操作，也就是：</X.P>
            <X.Formula text="M_{model}=TRS" />
            <X.HighlightBlock>
                <X.Formula text="\bm{p}_{world}=M_{model}\bm{p}_{local}" />
                <X.P>变换前：*模型空间*`(Local Space)`\n变换后：*世界空间*`(World Space)`</X.P>
            </X.HighlightBlock>
            <X.H2>视图变换</X.H2>
            <X.P>
                确定一个相机需要三个向量：\n相机位置{`$\\bm{e}$`}
                、观测方向{`$\\bm{g}$`}（相机对着哪儿拍？）、向上方向
                {`$\\bm{t}$`}（横着，竖着，还是斜着拍？）
            </X.P>
            <X.P noMarginBottom>
                通常约定相机固定在原点，观测{`$-\\bm{z}$`}方向，向上方向为
                {`$\\bm{y}$`}
                。\n现在试着将上面描述的相机移动到约定位置，我们需要以下步骤：
            </X.P>
            <X.Uli>平移相机原本的中心点{`$\\bm{e}$`}到原点；</X.Uli>
            <X.Uli>
                旋转观测方向{`$\\bm{g}$`}到{`$-\\bm{z}$`}；
            </X.Uli>
            <X.Uli>
                旋转向上方向{`$\\bm{t}$`}到{`$\\bm{y}$`}；
            </X.Uli>
            <X.P withMarginTop>
                假设上述三个步骤可以用矩阵{`$M_{view}$`}
                表示，显然它们可以拆解为先平移、再旋转两步，也就是
                {`$M_{view}=R_{view}T_{view}$`}；\n显然有：
            </X.P>
            <X.Formula
                text="
                T_{view}=
                \begin{bmatrix}
                1 & 0 & 0 & -x_e \\
                0 & 1 & 0 & -y_e \\
                0 & 0 & 1 & -z_e \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.P>
                接下来考虑旋转：我们想把{`$\\bm{g}$`}方向旋转到{`$-\\bm{z}$`}，{`$\\bm{t}$`}到{`$\\bm{y}$`}
                ，那么同时也会把{`$\\bm{g}\\times\\bm{t}$`}方向旋转到
                {`$\\bm{x}$`}
                。然而这个变换并不好直接写出。因此我们现在考虑旋转操作的逆变换
                {`$R_{view}^{-1}$`}：
            </X.P>
            <X.P>
                {`$R_{view}^{-1}$`}的操作就是把{`$\\bm{x}$`}方向旋转到
                {`$\\bm{g}\\times\\bm{t}$`}，{`$\\bm{y}$`}到{`$\\bm{t}$`}，{`$\\bm{z}$`}到{`$-\\bm{g}$`}：
            </X.P>
            <X.Formula
                text="
                R_{view}^{-1}=
                \begin{bmatrix}
                x_{\bm{g}\times\bm{t}} & x_{\bm{t}} & x_{-\bm{g}} & 0 \\
                y_{\bm{g}\times\bm{t}} & y_{\bm{t}} & y_{-\bm{g}} & 0 \\
                z_{\bm{g}\times\bm{t}} & z_{\bm{t}} & z_{-\bm{g}} & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.P>旋转矩阵是正交阵，其转置等于逆，因此有：</X.P>
            <X.Formula
                text="
                R_{view}=
                \begin{bmatrix}
                x_{\bm{g}\times\bm{t}} & y_{\bm{g}\times\bm{t}} & z_{\bm{g}\times\bm{t}} & 0 \\
                x_{\bm{t}} & y_{\bm{t}} & z_{\bm{t}} & 0 \\
                x_{-\bm{g}} & y_{-\bm{g}} & z_{-\bm{g}} & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.HighlightBlock>
                <X.Formula text="\bm{p}_{view}=M_{view}\bm{p}_{world}" />
                <X.P>变换前：*世界空间*`(World Space)`\n变换后：*观察空间*`(View Space)`</X.P>
            </X.HighlightBlock>
            <X.H2>投影变换</X.H2>
            <X.Image src="fig5.jpg" width="100%" />
            <X.P>
                投影变换有如上图两种：*正交投影*`(Orthographic Projection)`和*透视投影*`(Perspective Projection)`。
            </X.P>
            <X.H3>正交投影</X.H3>
            <X.P>简单理解来说，正交投影的结果相当于直接丢弃了$z$坐标，“拍扁”在$xy$平面上。</X.P>
            <X.P>
                正交投影更正式的做法是，我们希望将一个空间中$[l,r]\times[b,t]\times[f,n]$的立方体变换至$[-1,1]^3$。
            </X.P>
            <X.P>
                这个过程可以分解为两步：先将立方体移动至中心与原点重合，再将各轴缩放至$[-1,1]$范围。用矩阵表示为：
            </X.P>
            <X.Formula
                text="
                M_{ortho}=
                \begin{bmatrix}
                2/(r-l) & 0 & 0 & 0 \\
                0 & 2/(t-b) & 0 & 0 \\
                0 & 0 & 2/(n-f) & 0 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                \begin{bmatrix}
                1 & 0 & 0 & -(l+r)/2 \\
                0 & 1 & 0 & -(b+t)/2 \\
                0 & 0 & 1 & -(f+n)/2 \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                \\\
                \\ \qquad \quad =
                \begin{bmatrix}
                \frac{2}{r-l} & 0 & 0 & \frac{l+r}{l-r} \\
                \\
                0 & \frac{2}{t-b} & 0 & \frac{b+t}{b-t} \\
                \\
                0 & 0 & \frac{2}{n-f} & \frac{f+n}{f-n} \\
                \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.H3>透视投影</X.H3>
            <X.P>
                透视投影符合近大远小的视觉效果，观感上更为自然。透视投影可以首先将*视锥体*`(View
                Frustum)`“挤压”至长方体内，再应用正交投影：
            </X.P>
            <X.Image src="fig6.jpg" width="500px" invertInDarkTheme />
            <X.Formula
                text="
                M_{persp \rightarrow ortho}=
                \begin{bmatrix}
                n & 0 & 0 & 0 \\
                0 & n & 0 & 0 \\
                0 & 0 & n+f & -nf \\
                0 & 0 & 1 & 0
                \end{bmatrix}
                "
            />
            <X.Formula
                text="
                M_{persp}=
                M_{ortho}M_{persp \rightarrow ortho}
                \\\
                \\ \qquad \quad =
                \begin{bmatrix}
                \frac{2n}{r-l} & 0 & \frac{l+r}{l-r} & 0 \\
                \\
                0 & \frac{2n}{t-b} & \frac{b+t}{b-t} & 0 \\
                \\
                0 & 0 & \frac{n+f}{n-f} & \frac{-2nf}{n-f} \\
                \\
                0 & 0 & 1 & 0
                \end{bmatrix}
                "
            />
            <X.HighlightBlock>
                <X.P>变换前：*观察空间*`(View Space)`\n变换后：*裁剪空间*`(Clip Space)`</X.P>
            </X.HighlightBlock>
            <X.H1>视口变换</X.H1>
            <X.P>视口变换希望在$xy$平面上将$[-1,1]^2$变换至屏幕上$[0,width]\times[0,height]$，这个矩阵是：</X.P>
            <X.Formula
                text="
                M_{viewport}=
                \begin{bmatrix}
                \frac{width}{2} & 0 & 0 & \frac{width}{2} \\
                \\
                0 & \frac{height}{2} & 0 & \frac{height}{2} \\
                \\
                0 & 0 & 1 & 0 \\
                \\
                0 & 0 & 0 & 1
                \end{bmatrix}
                "
            />
            <X.HighlightBlock bgcolor="gray">
                <X.P>无论正交投影还是透视投影，物体在视锥体之外的部分将会变得不可见，这也是*裁剪空间*的得名。</X.P>
            </X.HighlightBlock>
            <X.HighlightBlock>
                <X.P>变换前：*裁剪空间*`(Clip Space)`\n变换后：*屏幕空间*`(Screen Space)`</X.P>
            </X.HighlightBlock>
        </>
    );
}
