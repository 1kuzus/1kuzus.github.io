import X from 'src/component/X';

export default function Blog({title}) {
    return (
        <>
            <X.Title>{title}</X.Title>
            <X.H1>几何的隐式和显式表示</X.H1>
            <X.FlexRow gap="32px" alignItems="center">
                <X.Image src={require('./fig1.jpg')} width="200px" />
                <div>
                    <X.P>隐式：$x^2+y^2+z^2-1=0$</X.P>
                    <X.P>显式：$(u,v)\rightarrow(\cos u \sin v,\sin u \sin v,\cos v)$</X.P>
                </div>
            </X.FlexRow>
            <X.P>
                隐式`(implicit)`表示就像数学中的隐函数，比如$f(x,y)=0$、$g(x,y,z)=0$，通过描述点满足的条件来表达几何体；---
                这样的方式容易验证一点$(x_0,y_0,z_0)$是否在定义的面上，但求出构成形体的所有点是困难的，---
                因为这需要求出方程的解。
            </X.P>
            <X.P>
                显式`(explicit)`表示通过参数映射的方式，例如在3D空间中定义{`$f:\\mathbb{R}^2\\rightarrow\\mathbb{R}^3$`}
                来描述一个几何体。这样求出构成几何体的点是容易的，只需要遍历函数定义域；但验证一点是否在表面上是困难的。
            </X.P>
            <X.H1>更多隐式表示</X.H1>
            <X.H2>代数曲面</X.H2>
            <X.P>如前面所说的，代数曲面`(Algebraic Surfaces)`用数学公式来表达几何体。这种方法很难表示复杂的形体。</X.P>
            <X.H2>构造实体几何 - CSG</X.H2>
            <X.P>
                构造实体几何`(Constructive Solid Geometry, CSG)`通过基本几何体的布尔运算---
                （交、并、差等）来定义新的几何体。
            </X.P>
            <X.Image src={require('./fig2.jpg')} width="100%" />
            <X.H2>有符号距离函数 - SDF</X.H2>
            <X.P>
                有符号距离函数`(Signed Distance Function, SDF)`定义空间中一点到要描述的表面的最短距离，---
                如果点在物体内部，则这个距离取负数。
            </X.P>
            <X.H3>合并和相交</X.H3>
            <X.P>
                通过对两个SDF函数的运算，得到一个新的SDF函数，再求出这个新SDF函数值为$0$的部分，即可得到组合后的图形。
            </X.P>
            <X.Image src={require('./fig3.png')} width="800px" />
            <X.P>
                要注意的是，这个结果并不是完全准确的，例如下图中的黄点的组合SDF值为两条黄色线段的最小值，但其准确值应为绿色线段的长度。---
                出现这个问题的原因是，计算得到原图形SDF值的边界在新图形中已经不存在了。不过在应用中我们可以忽略这个小问题。
            </X.P>
            <X.Image src={require('./fig4.jpg')} width="500px" />
            <X.H3>混合</X.H3>
            <X.P>给两个图形的SDF函数加权相加可以实现混合`(blending)`效果。</X.P>
            <X.Image src={require('./fig5.png')} width="100%" />
            <X.H2>分形</X.H2>
            <X.P>分形`(Fractals)`具有自相似性。</X.P>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig6.jpg')} height="240px" invertInDarkTheme />
                <X.Image src={require('./fig7.jpg')} height="240px" />
            </X.FlexRow>
            <X.P>分形的变化频率非常高，在渲染时会引发强烈的走样。</X.P>
            <X.H1>更多显式表示</X.H1>
            <X.H2>点云</X.H2>
            <X.P>点云是最简单的表示方法，用列表存储各个点的信息。只要采样足够密集，理论上可以表示任何几何体。</X.P>
            <X.H2>多边形</X.H2>
            <X.P>图形学中最广泛的应用通常是三角形面。</X.P>
            <X.H3>Wavefront Object (*.obj) 文件简介</X.H3>
            <X.P>
                这是Wavefront科技开发的一种描述三维对象的文件格式，是一个文本文件，通常包含顶点`v`，法线`vn`，面`f`等定义信息；---
                例如下面的代码表达了一个四面体：
            </X.P>
            <X.CodeBlock
                language="none"
                code={`
                # 顶点
                v  1.0  1.0  1.0
                v -1.0 -1.0  1.0
                v -1.0  1.0 -1.0
                v  1.0 -1.0 -1.0

                # 面
                f 1 2 3
                f 1 3 4
                f 1 4 2
                f 2 4 3
                `}
            />
            <X.P>
                `f`后面是顶点的索引。更详细的资料可以参考@维基百科[https://en.wikipedia.org/wiki/Wavefront_.obj_file]@。
            </X.P>
            <X.P>网站@ONLINE 3D VIEWER[https://3dviewer.net/]@可以在线查看各种格式定义的3D模型。</X.P>
            <X.H2>贝塞尔曲线</X.H2>
            <X.Image src={require('./fig8.jpg')} width="400px" invertInDarkTheme />
            <X.P>
                我们可以通过三个控制点$b_0$、$b_1$、$b_2$来生成图中蓝色的曲线，具体做法是对于每个$t \in
                [0,1]$：\n做出点$b_0^1$、$b_1^1$，满足$b_0b_0^1=tb_0b_1$、$b_1b_1^1=tb_1b_2$；\n再做出$b_0^2$，满足$b_0^1b_0^2=tb_0^1b_1^1$；
            </X.P>
            <X.P>每一个$t$对应的$b_0^2$就构成一条贝塞尔曲线，也就是图中蓝色的曲线。</X.P>
            <X.H3>三阶贝塞尔曲线</X.H3>
            <X.P>如果用四个控制点，同样通过类似的递归的方法，可以生成一条更高阶的贝塞尔曲线：</X.P>
            <X.Image src={require('./fig9.jpg')} width="600px" invertInDarkTheme />
            <X.P>
                对于三阶贝塞尔曲线上一点$b_0^3$，也就是图中标识的$x(t)$，尽管从演示上是通过中间点一步一步得到的，---
                但实际给出四个控制点位置和$t$就可以唯一确定。
            </X.P>
            <X.P>
                下图中左侧是常见的分段定义贝塞尔曲线的方法，每个顶点都延伸出两根“控制杆”，而实际上三阶贝塞尔曲线的四个控制点是图中标出的$b_0$~$b_3$，---
                相当于省去了连线$b_1b_2$。
            </X.P>
            <X.P>如果希望分段贝塞尔曲线连续，则需要两侧的“控制杆”反向共线且等长，如下图中右侧所示。</X.P>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig10.jpg')} width="360px" invertInDarkTheme />
                <X.Image src={require('./fig11.jpg')} width="360px" invertInDarkTheme />
            </X.FlexRow>
            <X.P>@这个网站[https://math.hws.edu/eck/cs424/notes2013/canvas/bezier.html]@可以在线编辑贝塞尔曲线。</X.P>
            <X.H2>贝塞尔曲面</X.H2>
            <X.P>
                描述一维贝塞尔曲线时需要一个参数$t$，自然地，对于贝塞尔曲面需要两个参数$u \in [0,1]$,$v \in [0,1]$。
            </X.P>
            <X.Image src={require('./fig12.jpg')} width="600px" invertInDarkTheme />
            <X.P>
                生成贝塞尔曲面的方式类似双线性插值：我们需要`16`个控制点排列成`4`*`4`，对于四个点组成的一列可以生成一个贝塞尔曲线（图中灰色线），---
                指定了参数$u$后，可以分别得到四条曲线上的四个点（图中蓝色点）；以这四个蓝色点作为新的控制点，每一个参数$v$都会给出蓝色贝塞尔曲线上的一点（图中白色点）。
            </X.P>
            <X.P>这就是参数$(u,v)$到贝塞尔曲面上一点的一一对应关系。</X.P>
            <X.H1>网格操作</X.H1>
            <X.H2>网格细分</X.H2>
            <X.P>网格细分`(mesh subdivision)`相当于上采样，可以增加分辨率。</X.P>
            <X.Image src={require('./fig13.jpg')} width="600px" invertInDarkTheme />
        </>
    );
}
