import X from 'src/component/X';

export default function Blog({blogTitle}) {
    return (
        <X.BlogWrapper>
            <X.Title>{blogTitle}</X.Title>
            <X.H1>Blinn-Phong光照模型</X.H1>
            <X.P noMarginBottom>将环境光分为：</X.P>
            <X.Uli>漫反射`(diffuse reflection)`：一根光线打过来，反射到四面八方</X.Uli>
            <X.Uli>高光`(specular highlights)`：一根光线打过来，反射方向与镜面反射方向相近</X.Uli>
            <X.Uli>环境光`(ambient lighting)`：环境中经过多次反射叠加的结果，认为是常量</X.Uli>
            <X.H1>模型定义和说明</X.H1>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig1.jpg')} width="400px" invertInDarkTheme />
                <div>
                    <X.P>着色模型考虑一个点，在这个点处小范围表面被近似看作平面：</X.P>
                    <X.P noMarginBottom>模型的输入（向量均为单位向量）：</X.P>
                    <X.Uli>观察方向{`$\\bm{v}$`}</X.Uli>
                    <X.Uli>法线方向{`$\\bm{n}$`}</X.Uli>
                    <X.Uli>光照方向{`$\\bm{l}$`}</X.Uli>
                    <X.Uli>这一点处表面的固有性质（颜色等）</X.Uli>
                </div>
            </X.FlexRow>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig2.jpg')} width="400px" />
                <div>
                    <X.P>着色是局部的，计算每一点的着色结果时，不会考虑其他物体的存在，不会产生影子。</X.P>
                    <X.P>例如红色框部分是有些反直觉的。</X.P>
                </div>
            </X.FlexRow>
            <X.H1>漫反射</X.H1>
            <X.H2>朗伯余弦定律</X.H2>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig3.jpg')} width="200px" invertInDarkTheme />
                <div>
                    <X.P>考虑一个点的着色，其漫反射部分可以接收到的光线占光源的比例为$\cos \theta$：</X.P>
                    <X.Formula text="\cos \theta=\bm{l}\cdot\bm{n}" />
                </div>
            </X.FlexRow>
            <X.H2>光线衰减</X.H2>
            <X.P>我们认为点光源发出的光的能量集中在一个球壳上，根据能量守恒，光强应与距离平方成反比。</X.P>
            <X.P>如果在与中心距离$1$处光强为$I$，则在与中心距离$r$处光强为$I/r^2$。</X.P>
            <X.H2>朗伯着色模型</X.H2>
            <X.P>漫反射部分$L_d$的计算公式为：</X.P>
            <X.Formula text="L_d=k_d(I/r^2)\max(0,\bm{l}\cdot\bm{n})" />
            <X.Uli>
                其中的$k_d$是漫反射常量，表示着色点对能量的吸收率，取决于物体材质。如果定义为具有`3`个分量的常向量，则可以表示不同的颜色。
            </X.Uli>
            <X.Uli>当光照方向和法线方向余弦值为负数的时候，认为光线不可到达此点，按$0$考虑。</X.Uli>
            <X.P withMarginTop>注意到漫反射是与观察方向{`$\\bm{v}$`}无关的。</X.P>
            <X.H1>高光</X.H1>
            <X.P>高光的反射方向是接近镜面反射方向的。</X.P>
            <X.FlexRow gap="32px">
                <X.Image src={require('./fig4.jpg')} width="400px" invertInDarkTheme />
                <div>
                    <X.P>我们观察到：如果反射方向与观察方向相近时，半程向量{`$\\bm{h}$`}应该与法线方向也相近。</X.P>
                    <X.P>{`$\\bm{h}$`}是归一化后的观察方向与光照方向的和：</X.P>
                    <X.Formula text="\bm{h}=\frac{\bm{v}+\bm{l}}{\Vert\bm{v}+\bm{l}\Vert}" />
                </div>
            </X.FlexRow>
        </X.BlogWrapper>
    );
}
