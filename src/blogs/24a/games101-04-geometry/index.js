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
            <X.H1>曲线 - 贝塞尔曲线</X.H1>
            <X.H1>曲面 - 更多</X.H1>
        </>
    );
}
