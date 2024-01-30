import X from 'src/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
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
            <X.H2>距离函数</X.H2>
            <X.P>距离函数定义空间中一点到要描述的表面的最短距离。</X.P>
            <X.H2>分形</X.H2>
            <X.P>分形`(Fractals)`具有自相似性。</X.P>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig3.jpg')} height="240px" invertInDarkTheme />
                <X.Image src={require('./fig4.jpg')} height="240px" />
            </X.FlexRow>
            <X.P>分形的变化频率非常高，在渲染时会引发强烈的走样。</X.P>
        </X.BlogWrapper>
    );
}
